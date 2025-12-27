# WhatsApp Cloud API Integration

Production-ready WhatsApp Cloud API integration for button-based conversations.

## Overview

This module provides:
- Type-safe payload builders for interactive buttons and lists
- Button ID to state routing system
- Webhook parser for incoming button/list interactions
- Example payloads and handlers

## Key Principles

1. **No numeric input** - All choices use buttons or lists
2. **Max 3 buttons** - Use list picker for more options
3. **Always include "חזרה"** - Back button in multi-step flows
4. **"נציג אנושי"** - Human agent button at key decision points

## Files

- `types.ts` - TypeScript type definitions
- `payload-builders.ts` - Functions to create message payloads
- `state-routing.ts` - Button ID to state mapping and routing
- `webhook-parser.ts` - Parse incoming webhook payloads

## Usage Examples

### 1. Send Button Message (Main Menu)

```typescript
import { createMainMenuMessage } from './payload-builders'

const message = createMainMenuMessage('972501234567')
// Send via WhatsApp Cloud API
await fetch(`https://graph.facebook.com/v21.0/${PHONE_NUMBER_ID}/messages`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(message)
})
```

### 2. Send List Message (Many Options)

```typescript
import { createProductListMessage } from './payload-builders'

const products = [
  { id: 'prod_1', name: 'DeWALT DCD996P2', description: '18V XRP' },
  { id: 'prod_2', name: 'DeWALT DCD778', description: '12V' },
  // ... more products
]

const message = createProductListMessage('972501234567', products)
// Send via WhatsApp Cloud API
```

### 3. Handle Webhook

```typescript
import { parseWebhook, routeButtonClick } from './webhook-parser'
import { getStateFromButtonId } from './state-routing'

app.post('/webhook', async (req, res) => {
  const payload = req.body
  const interactions = parseWebhook(payload)
  
  for (const interaction of interactions) {
    const { userId, payloadId, messageType } = interaction
    
    if (payloadId) {
      // Get user's current state from session/store
      const currentState = await getUserState(userId)
      
      // Route to next state
      const nextState = await routeButtonClick(
        userId,
        payloadId,
        currentState,
        { /* context */ }
      )
      
      // Update user state
      await saveUserState(userId, nextState)
      
      // Send appropriate response based on nextState
      await sendResponseMessage(userId, nextState)
    }
  }
  
  res.status(200).send('OK')
})
```

### 4. Example Payloads

#### Button Message (3 buttons)

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "972501234567",
  "type": "interactive",
  "interactive": {
    "type": "button",
    "body": {
      "text": "שלום, איך אוכל לעזור?"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "main_price",
            "title": "מחיר"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "main_stock",
            "title": "זמינות מלאי"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "main_delivery",
            "title": "משלוח / איסוף"
          }
        }
      ]
    },
    "footer": {
      "text": "בחר אפשרות מהרשימה"
    }
  }
}
```

#### List Message

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "972501234567",
  "type": "interactive",
  "interactive": {
    "type": "list",
    "body": {
      "text": "יש לנו מספר דגמים. בחר דגם מהרשימה:"
    },
    "action": {
      "button": "בחר דגם",
      "sections": [
        {
          "title": "דגמים 1-10",
          "rows": [
            {
              "id": "prod_1",
              "title": "DeWALT DCD996P2",
              "description": "18V XRP, כולל 2 סוללות"
            }
          ]
        }
      ]
    }
  }
}
```

## Button ID Naming Convention

- `main_*` - Main menu buttons
- `category_*` - Category selection
- `action_*` - Action buttons (product_page, quote_request, etc.)
- `prod_*` - Product IDs
- `confirm_*` - Confirmation actions

## State Flow

```
initial
  ↓
main_menu (3 buttons: מחיר, זמינות, משלוח)
  ↓
category_selection (3 buttons: נטענת, רוטטת, פטישון)
  ↓
product_list (list picker if >3 products, buttons if ≤3)
  ↓
product_details (buttons: דף מוצר, הצעת מחיר, נציג אנושי)
  ↓
quote_request → human_agent
```

## Testing

See `TEST_PLAN.md` for comprehensive test scenarios.

