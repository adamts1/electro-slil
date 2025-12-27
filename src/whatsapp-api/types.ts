/**
 * WhatsApp Cloud API Types
 * Based on WhatsApp Cloud API documentation
 */

// Button types
export interface WhatsAppButton {
  type: 'reply'
  reply: {
    id: string
    title: string
  }
}

export interface WhatsAppListSection {
  title: string
  rows: Array<{
    id: string
    title: string
    description?: string
  }>
}

export interface WhatsAppInteractive {
  type: 'button' | 'list'
  header?: {
    type: 'text' | 'image' | 'video' | 'document'
    text?: string
    image?: { link: string }
    video?: { link: string }
    document?: { link: string; filename?: string }
  }
  body: {
    text: string
  }
  footer?: {
    text: string
  }
  action: {
    buttons?: WhatsAppButton[] // For button type (max 3)
    button?: string // For list type
    sections?: WhatsAppListSection[] // For list type
  }
}

export interface WhatsAppMessage {
  messaging_product: 'whatsapp'
  recipient_type?: 'individual'
  to: string
  type: 'text' | 'interactive' | 'template'
  text?: {
    body: string
    preview_url?: boolean
  }
  interactive?: WhatsAppInteractive
}

// Webhook incoming message types
export interface WebhookInteractive {
  type: 'button_reply' | 'list_reply'
  button_reply?: {
    id: string
    title: string
  }
  list_reply?: {
    id: string
    title: string
    description?: string
  }
}

export interface WebhookMessage {
  from: string
  id: string
  timestamp: string
  type: 'text' | 'interactive'
  text?: {
    body: string
  }
  interactive?: WebhookInteractive
}

export interface WebhookEntry {
  id: string
  changes: Array<{
    value: {
      messaging_product: 'whatsapp'
      metadata: {
        display_phone_number: string
        phone_number_id: string
      }
      contacts?: Array<{
        profile: { name: string }
        wa_id: string
      }>
      messages?: WebhookMessage[]
      statuses?: Array<{
        id: string
        status: 'sent' | 'delivered' | 'read' | 'failed'
        timestamp: string
      }>
    }
  }>
}

export interface WebhookPayload {
  object: 'whatsapp_business_account'
  entry: WebhookEntry[]
}

