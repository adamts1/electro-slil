/**
 * WhatsApp Webhook Parser
 * Parses incoming webhook payloads and extracts button/list interactions
 */

import type { WebhookPayload, WebhookMessage, WebhookInteractive } from './types'

/**
 * Extract messages from webhook payload
 */
export function extractMessages(payload: WebhookPayload): Array<{
  userId: string
  message: WebhookMessage
  contactName?: string
}> {
  const messages: Array<{ userId: string; message: WebhookMessage; contactName?: string }> = []
  
  for (const entry of payload.entry) {
    for (const change of entry.changes) {
      const contacts = change.value.contacts || []
      const messagesList = change.value.messages || []
      
      for (const message of messagesList) {
        const contact = contacts.find(c => c.wa_id === message.from)
        messages.push({
          userId: message.from,
          message,
          contactName: contact?.profile.name
        })
      }
    }
  }
  
  return messages
}

/**
 * Extract button reply ID from interactive message
 */
export function extractButtonReplyId(interactive: WebhookInteractive): string | null {
  if (interactive.type === 'button_reply' && interactive.button_reply) {
    return interactive.button_reply.id
  }
  return null
}

/**
 * Extract list reply ID from interactive message
 */
export function extractListReplyId(interactive: WebhookInteractive): string | null {
  if (interactive.type === 'list_reply' && interactive.list_reply) {
    return interactive.list_reply.id
  }
  return null
}

/**
 * Extract payload ID from message (button or list reply)
 */
export function extractPayloadId(message: WebhookMessage): string | null {
  if (message.type === 'interactive' && message.interactive) {
    const buttonId = extractButtonReplyId(message.interactive)
    if (buttonId) return buttonId
    
    const listId = extractListReplyId(message.interactive)
    if (listId) return listId
  }
  
  return null
}

/**
 * Parse webhook and extract button/list interactions
 */
export function parseWebhook(payload: WebhookPayload): Array<{
  userId: string
  payloadId: string | null
  messageType: 'button' | 'list' | 'text' | 'unknown'
  textContent?: string
  contactName?: string
}> {
  const messages = extractMessages(payload)
  
  return messages.map(({ userId, message, contactName }) => {
    let payloadId: string | null = null
    let messageType: 'button' | 'list' | 'text' | 'unknown' = 'unknown'
    
    if (message.type === 'interactive' && message.interactive) {
      payloadId = extractPayloadId(message)
      
      if (message.interactive.type === 'button_reply') {
        messageType = 'button'
      } else if (message.interactive.type === 'list_reply') {
        messageType = 'list'
      }
    } else if (message.type === 'text' && message.text) {
      messageType = 'text'
    }
    
    return {
      userId,
      payloadId,
      messageType,
      textContent: message.text?.body,
      contactName
    }
  })
}

/**
 * Example usage in Express/webhook handler:
 * 
 * app.post('/webhook', (req, res) => {
 *   const payload: WebhookPayload = req.body
 *   const interactions = parseWebhook(payload)
 *   
 *   for (const interaction of interactions) {
 *     if (interaction.payloadId) {
 *       // Handle button/list click
 *       const nextState = getStateFromButtonId(interaction.payloadId)
 *       // ... route to handler
 *     } else if (interaction.messageType === 'text') {
 *       // Handle free text (optional fallback)
 *       // ... process text message
 *     }
 *   }
 *   
 *   res.status(200).send('OK')
 * })
 */

