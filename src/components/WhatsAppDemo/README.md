# WhatsApp Demo Component

A reusable React component that displays a WhatsApp-like chat interface for demo purposes. Perfect for showcasing chatbot flows, customer service interactions, or any WhatsApp-based automation demos.

## Features

- 🎨 Authentic WhatsApp iOS design
- 📱 Mobile-first responsive layout
- 🌐 RTL (Right-to-Left) support for Hebrew/Arabic
- 🔄 Multi-scenario carousel with navigation
- 🔗 Link preview support
- ⌨️ Keyboard navigation (arrow keys)
- 📜 Auto-scroll to latest messages
- 🎯 Highly customizable via props

## Installation

Copy the `WhatsAppDemo` folder to your project's components directory, or import it directly.

## Usage

### Basic Example

```tsx
import { WhatsAppInterface, type DemoScenario } from './components/WhatsAppDemo'

const myScenarios: DemoScenario[] = [
  {
    title: 'Initial Contact',
    messages: [
      { 
        text: 'Hello, I need help with a product', 
        sender: 'customer', 
        time: '14:30' 
      },
      { 
        text: 'Hi! I\'m here to help. What product are you looking for?', 
        sender: 'bot', 
        time: '14:31' 
      }
    ]
  }
]

function MyComponent() {
  return (
    <WhatsAppInterface 
      scenarios={myScenarios}
      contactName="My Business"
      businessAccount="Business account"
    />
  )
}
```

### With Link Preview

```tsx
const scenario: DemoScenario = {
  title: 'Product Link Shared',
  messages: [
    {
      text: 'Can you send me the product page?',
      sender: 'customer',
      time: '14:30'
    },
    {
      text: 'Sure! Here\'s the product page with all the details.',
      sender: 'bot',
      time: '14:31',
      linkPreview: {
        url: 'https://example.com/product',
        title: 'Amazing Product',
        description: 'This is an amazing product with great features',
        image: 'https://example.com/product-image.jpg'
      }
    }
  ]
}
```

### Advanced Props

```tsx
<WhatsAppInterface 
  scenarios={myScenarios}
  contactName="My Business Name"
  businessAccount="Verified Business"
  showNavigation={true}      // Show arrow buttons (default: true)
  showDots={true}            // Show dot indicators (default: true)
  showCaption={true}         // Show scenario title (default: true)
/>
```

## Type Definitions

### DemoScenario

```typescript
interface DemoScenario {
  title: string              // Title/caption for the scenario
  messages: Message[]        // Array of messages in the conversation
}
```

### Message

```typescript
interface Message {
  text: string                              // Message content (supports \n for line breaks)
  sender: 'customer' | 'bot' | 'agent'     // Message sender type
  time: string                              // Time display (e.g., "14:30")
  linkPreview?: LinkPreviewData            // Optional link preview
}
```

### LinkPreviewData

```typescript
interface LinkPreviewData {
  url: string           // Link URL
  title: string         // Preview title
  description: string   // Preview description
  image?: string        // Optional preview image URL
}
```

### WhatsAppInterfaceProps

```typescript
interface WhatsAppInterfaceProps {
  scenarios: DemoScenario[]        // Required: Array of demo scenarios
  contactName?: string             // Contact name in header (default: 'אלקטרו סליל')
  businessAccount?: string         // Business account label (default: 'Business account')
  showNavigation?: boolean         // Show navigation arrows (default: true)
  showDots?: boolean               // Show dot indicators (default: true)
  showCaption?: boolean            // Show scenario caption (default: true)
}
```

## Styling

The component uses TailwindCSS classes. Make sure TailwindCSS is configured in your project for the component to render correctly.

## Keyboard Navigation

- **Arrow Left** (←): Go to next scenario (RTL mode)
- **Arrow Right** (→): Go to previous scenario (RTL mode)

## Notes

- The component automatically scrolls to the bottom when switching scenarios
- Link previews are clickable and open in a new tab
- All messages support line breaks using `\n`
- URLs in message text are automatically styled as clickable links
- The component is designed for demo/presentation purposes, not for actual chat functionality

## Requirements

- React 18+ (or React 19+)
- TypeScript
- TailwindCSS (for styling)

