/**
 * WhatsApp Cloud API Payload Builders
 * Helper functions to create interactive message payloads
 */

import type { WhatsAppMessage, WhatsAppInteractive, WhatsAppListSection } from './types'

// Re-export for convenience
export type { WhatsAppMessage } from './types'

/**
 * Create a button interactive message (max 3 buttons)
 */
export function createButtonMessage(
  to: string,
  bodyText: string,
  buttons: Array<{ id: string; title: string }>,
  headerText?: string,
  footerText?: string
): WhatsAppMessage {
  if (buttons.length > 3) {
    throw new Error('Button messages support maximum 3 buttons. Use list message for more options.')
  }

  const interactive: WhatsAppInteractive = {
    type: 'button',
    body: { text: bodyText },
    action: {
      buttons: buttons.map((btn) => ({
        type: 'reply' as const,
        reply: {
          id: btn.id,
          title: btn.title
        }
      }))
    }
  }

  if (headerText) {
    interactive.header = { type: 'text', text: headerText }
  }

  if (footerText) {
    interactive.footer = { text: footerText }
  }

  return {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to,
    type: 'interactive',
    interactive
  }
}

/**
 * Create a list interactive message (for more than 3 options)
 */
export function createListMessage(
  to: string,
  bodyText: string,
  buttonText: string, // Text for the button that opens the list
  sections: Array<{ title: string; rows: Array<{ id: string; title: string; description?: string }> }>,
  headerText?: string,
  footerText?: string
): WhatsAppMessage {
  const interactive: WhatsAppInteractive = {
    type: 'list',
    body: { text: bodyText },
    action: {
      button: buttonText,
      sections: sections.map((section) => ({
        title: section.title,
        rows: section.rows.map((row) => ({
          id: row.id,
          title: row.title,
          ...(row.description && { description: row.description })
        }))
      }))
    }
  }

  if (headerText) {
    interactive.header = { type: 'text', text: headerText }
  }

  if (footerText) {
    interactive.footer = { text: footerText }
  }

  return {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to,
    type: 'interactive',
    interactive
  }
}

/**
 * Create a simple text message
 */
export function createTextMessage(
  to: string,
  text: string,
  previewUrl: boolean = false
): WhatsAppMessage {
  return {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to,
    type: 'text',
    text: {
      body: text,
      preview_url: previewUrl
    }
  }
}

/**
 * Example: Main menu (3 buttons)
 */
export function createMainMenuMessage(to: string): WhatsAppMessage {
  return createButtonMessage(
    to,
    'שלום, איך אוכל לעזור?',
    [
      { id: 'main_price', title: 'מחיר' },
      { id: 'main_stock', title: 'זמינות מלאי' },
      { id: 'main_delivery', title: 'משלוח / איסוף' }
    ],
    undefined,
    'בחר אפשרות מהרשימה'
  )
}

/**
 * Example: Category selection (button message with 3 options)
 */
export function createCategorySelectionMessage(to: string): WhatsAppMessage {
  return createButtonMessage(
    to,
    'בשמחה. כדי לדייק, איזה סוג אתה מחפש?',
    [
      { id: 'category_cordless', title: 'מברגה / מקדחה נטענת' },
      { id: 'category_rotary', title: 'מקדחה רוטטת' },
      { id: 'category_hammer', title: 'פטישון לעבודות בטון' }
    ]
  )
}

/**
 * Example: Product action buttons (2 options + human agent)
 */
export function createProductActionMessage(to: string, productName: string): WhatsAppMessage {
  return createButtonMessage(
    to,
    `מעולה. יש לנו מספר דגמים מקצועיים.\nאחד הדגמים המבוקשים:\n\n${productName}\n\nמה תרצה לעשות?`,
    [
      { id: 'action_product_page', title: 'לראות את דף המוצר באתר' },
      { id: 'action_quote_request', title: 'לקבל הצעת מחיר מנציג' },
      { id: 'action_human_agent', title: 'נציג אנושי' }
    ]
  )
}

/**
 * Example: Confirm/Back/Human buttons (common pattern)
 */
export function createConfirmButtonsMessage(
  to: string,
  bodyText: string,
  confirmButtonId: string,
  confirmButtonTitle: string = 'אישור'
): WhatsAppMessage {
  return createButtonMessage(
    to,
    bodyText,
    [
      { id: confirmButtonId, title: confirmButtonTitle },
      { id: 'action_back', title: 'חזרה' },
      { id: 'action_human_agent', title: 'נציג אנושי' }
    ]
  )
}

/**
 * Example: List message for many product options
 */
export function createProductListMessage(to: string, products: Array<{ id: string; name: string; description?: string }>): WhatsAppMessage {
  // Split products into sections if needed (max 10 rows per section)
  const sections: WhatsAppListSection[] = []
  const maxRowsPerSection = 10

  for (let i = 0; i < products.length; i += maxRowsPerSection) {
    const sectionProducts = products.slice(i, i + maxRowsPerSection)
    sections.push({
      title: `דגמים ${i + 1}-${Math.min(i + maxRowsPerSection, products.length)}`,
      rows: sectionProducts.map((product) => ({
        id: product.id,
        title: product.name,
        ...(product.description && { description: product.description })
      }))
    })
  }

  return createListMessage(
    to,
    'יש לנו מספר דגמים. בחר דגם מהרשימה:',
    'בחר דגם',
    sections
  )
}

