/**
 * Example Implementation
 * Complete example showing how to integrate button-based WhatsApp flow
 * 
 * This is a reference implementation - adapt to your backend framework (Express, Next.js, etc.)
 */

import { parseWebhook } from './webhook-parser'
import { routeButtonClick, type ConversationState } from './state-routing'
import {
  createMainMenuMessage,
  createCategorySelectionMessage,
  createProductActionMessage,
  createProductListMessage,
  createTextMessage,
  type WhatsAppMessage
} from './payload-builders'
import type { WebhookPayload } from './types'

// Example: In-memory session store (use Redis/DB in production)
const userSessions: Map<string, { state: ConversationState; context: Record<string, any> }> = new Map()

// Example: WhatsApp Cloud API configuration
// NOTE: In production, use environment variables from your framework
// For Node.js: process.env.WHATSAPP_ACCESS_TOKEN
// For Vite/Next.js: import.meta.env.VITE_WHATSAPP_ACCESS_TOKEN
const WHATSAPP_API_URL = `https://graph.facebook.com/v21.0/YOUR_PHONE_NUMBER_ID/messages`
const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'

/**
 * Send message via WhatsApp Cloud API
 */
async function sendWhatsAppMessage(message: WhatsAppMessage): Promise<void> {
  const response = await fetch(WHATSAPP_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
  
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`WhatsApp API error: ${error}`)
  }
}

/**
 * Get or initialize user session
 */
function getUserSession(userId: string): { state: ConversationState; context: Record<string, any> } {
  if (!userSessions.has(userId)) {
    userSessions.set(userId, { state: 'initial', context: {} })
  }
  return userSessions.get(userId)!
}

/**
 * Update user session
 */
function updateUserSession(userId: string, state: ConversationState, context?: Record<string, any>): void {
  const session = getUserSession(userId)
  session.state = state
  if (context) {
    session.context = { ...session.context, ...context }
  }
}

/**
 * Send response message based on state
 */
async function sendStateResponse(userId: string, state: ConversationState, context: Record<string, any> = {}): Promise<void> {
  switch (state) {
    case 'initial':
    case 'main_menu':
      await sendWhatsAppMessage(createMainMenuMessage(userId))
      break
      
    case 'category_selection':
      await sendWhatsAppMessage(createCategorySelectionMessage(userId))
      break
      
    case 'product_list':
      // Example: Get products for selected category
      const category = context.category || 'rotary'
      const products = getProductsByCategory(category) // Your function
      if (products.length > 3) {
        await sendWhatsAppMessage(createProductListMessage(userId, products))
      } else {
        // Use buttons if ≤3 products
        // Adapt createProductListMessage or create custom button message
        await sendWhatsAppMessage(createProductListMessage(userId, products))
      }
      break
      
    case 'product_details':
      const productId = context.productId || 'unknown'
      const product = getProductById(productId) // Your function
      await sendWhatsAppMessage(createProductActionMessage(userId, product.name))
      break
      
    case 'quote_request':
      await sendWhatsAppMessage(
        createTextMessage(userId, 'מעולה.\nמחבר אותך לנציג שיאשר זמינות ומחיר בהתאם לצורך שלך.\nרגע אחד…')
      )
      // Transfer to human agent (your implementation)
      await transferToHumanAgent(userId, context)
      break
      
    case 'human_agent':
      await sendWhatsAppMessage(
        createTextMessage(userId, 'היי, אני דני מאלקטרו סליל.\nשמח לעזור - בודק זמינות ומכין הצעת מחיר מסודרת.')
      )
      break
      
    case 'price_inquiry':
      // Handle price inquiry
      await sendWhatsAppMessage(
        createTextMessage(userId, 'לצורך הצעת מחיר מדויקת, איזה מוצר אתה מחפש?')
      )
      // Send category selection or product list
      await sendStateResponse(userId, 'category_selection')
      break
      
    case 'stock_inquiry':
      await sendWhatsAppMessage(
        createTextMessage(userId, 'לצורך בדיקת זמינות, איזה מוצר אתה מחפש?')
      )
      await sendStateResponse(userId, 'category_selection')
      break
      
    case 'delivery_inquiry':
      await sendWhatsAppMessage(
        createTextMessage(userId, 'לצורך בדיקת אפשרויות משלוח, איזה מוצר אתה מחפש?')
      )
      await sendStateResponse(userId, 'category_selection')
      break
      
    default:
      console.warn(`Unknown state: ${state}`)
  }
}

/**
 * Handle webhook (Express.js example)
 */
export async function handleWebhook(payload: WebhookPayload): Promise<void> {
  const interactions = parseWebhook(payload)
  
  for (const interaction of interactions) {
    const { userId, payloadId, messageType, textContent } = interaction
    
    // Get user session
    const session = getUserSession(userId)
    
    if (payloadId) {
      // Button or list click
      const nextState = await routeButtonClick(
        userId,
        payloadId,
        session.state,
        session.context
      )
      
      // Update context based on button clicked
      const newContext = { ...session.context }
      if (payloadId.startsWith('category_')) {
        newContext.category = payloadId.replace('category_', '')
      } else if (payloadId.startsWith('prod_')) {
        newContext.productId = payloadId
      }
      
      // Update session
      updateUserSession(userId, nextState, newContext)
      
      // Send response
      await sendStateResponse(userId, nextState, newContext)
      
    } else if (messageType === 'text' && textContent) {
      // Free text message (fallback or initial message)
      if (session.state === 'initial') {
        // Initial message - send main menu
        updateUserSession(userId, 'main_menu')
        await sendStateResponse(userId, 'main_menu')
      } else {
        // Handle free text in context of current state
        // You might want to route to human agent or handle special cases
        await sendWhatsAppMessage(
          createTextMessage(userId, 'אם תרצה, אתה יכול להשתמש בכפתורים למעלה או לבחור "נציג אנושי" לעזרה נוספת.')
        )
      }
    }
  }
}

/**
 * Example: Express.js route handler
 * 
 * app.post('/webhook', async (req, res) => {
 *   try {
 *     const payload: WebhookPayload = req.body
 *     await handleWebhook(payload)
 *     res.status(200).send('OK')
 *   } catch (error) {
 *     console.error('Webhook error:', error)
 *     res.status(500).send('Error')
 *   }
 * })
 */

// Helper functions (implement based on your data source)

function getProductsByCategory(_category: string): Array<{ id: string; name: string; description?: string }> {
  // Your implementation - fetch from database/API
  // Use _category parameter to filter products
  return []
}

function getProductById(_productId: string): { name: string; description?: string } {
  // Your implementation - fetch product by ID
  // Use _productId parameter to find product
  return { name: 'Product Name' }
}

async function transferToHumanAgent(userId: string, context: Record<string, any>): Promise<void> {
  // Your implementation - transfer to human agent system
  // Update session state to 'human_agent'
  updateUserSession(userId, 'human_agent', context)
}

/**
 * Example: Handle verification (WhatsApp webhook verification)
 * NOTE: In production, use environment variables from your framework
 */
export function handleWebhookVerification(mode: string, token: string, challenge: string, verifyToken: string): string | null {
  if (mode === 'subscribe' && token === verifyToken) {
    return challenge
  }
  
  return null
}

