/**
 * Button ID to State Mapping
 * Maps button payload IDs to next conversation states
 */

export type ConversationState =
  | 'initial'
  | 'main_menu'
  | 'category_selection'
  | 'product_list'
  | 'product_details'
  | 'quote_request'
  | 'price_inquiry'
  | 'stock_inquiry'
  | 'delivery_inquiry'
  | 'human_agent'
  | 'back'

/**
 * Button ID to State Mapping
 * When a user clicks a button, map the button ID to the next state
 */
export const BUTTON_TO_STATE_MAP: Record<string, ConversationState> = {
  // Main menu buttons
  'main_price': 'price_inquiry',
  'main_stock': 'stock_inquiry',
  'main_delivery': 'delivery_inquiry',
  
  // Category selection buttons
  'category_cordless': 'product_list',
  'category_rotary': 'product_list',
  'category_hammer': 'product_list',
  
  // Product action buttons
  'action_product_page': 'product_details',
  'action_quote_request': 'quote_request',
  'action_human_agent': 'human_agent',
  'action_back': 'back',
  
  // Confirm actions
  'confirm_order': 'quote_request',
  'confirm_inquiry': 'price_inquiry',
}

/**
 * Get next state from button ID
 */
export function getStateFromButtonId(buttonId: string): ConversationState | null {
  return BUTTON_TO_STATE_MAP[buttonId] || null
}

/**
 * Get previous state for "back" button
 * You should track conversation history in your session/store
 */
export function getPreviousState(currentState: ConversationState): ConversationState {
  const stateHistory: Record<ConversationState, ConversationState> = {
    'initial': 'initial',
    'main_menu': 'initial',
    'category_selection': 'main_menu',
    'product_list': 'category_selection',
    'product_details': 'product_list',
    'quote_request': 'product_details',
    'price_inquiry': 'main_menu',
    'stock_inquiry': 'main_menu',
    'delivery_inquiry': 'main_menu',
    'human_agent': 'main_menu',
    'back': 'main_menu'
  }
  
  return stateHistory[currentState] || 'main_menu'
}

/**
 * State handler function type
 */
export type StateHandler = (
  userId: string,
  buttonId: string,
  context?: Record<string, any>
) => Promise<void>

/**
 * State handler registry
 */
export const STATE_HANDLERS: Record<ConversationState, StateHandler> = {
  initial: async (userId) => {
    // Initial state - send main menu
    // This would call your message sender
    console.log(`[${userId}] Initial state -> main_menu`)
  },
  
  main_menu: async (userId, buttonId) => {
    console.log(`[${userId}] Main menu - button: ${buttonId}`)
  },
  
  category_selection: async (userId, buttonId) => {
    console.log(`[${userId}] Category selected: ${buttonId}`)
  },
  
  product_list: async (userId, buttonId, context) => {
    console.log(`[${userId}] Product list - selected: ${buttonId}`, context)
  },
  
  product_details: async (userId, buttonId, context) => {
    console.log(`[${userId}] Product details - action: ${buttonId}`, context)
  },
  
  quote_request: async (userId, _buttonId, context) => {
    console.log(`[${userId}] Quote request initiated`, context)
    // Here you would transfer to human agent or queue
  },
  
  price_inquiry: async (userId, _buttonId, context) => {
    console.log(`[${userId}] Price inquiry`, context)
  },
  
  stock_inquiry: async (userId, _buttonId, context) => {
    console.log(`[${userId}] Stock inquiry`, context)
  },
  
  delivery_inquiry: async (userId, _buttonId, context) => {
    console.log(`[${userId}] Delivery inquiry`, context)
  },
  
  human_agent: async (userId, _buttonId, context) => {
    console.log(`[${userId}] Human agent transfer`, context)
    // Transfer to human agent
  },
  
  back: async (userId, _buttonId, context) => {
    console.log(`[${userId}] Back button pressed`, context)
    // Navigate to previous state
  }
}

/**
 * Route button click to appropriate handler
 */
export async function routeButtonClick(
  userId: string,
  buttonId: string,
  currentState: ConversationState,
  context?: Record<string, any>
): Promise<ConversationState> {
  const nextState = getStateFromButtonId(buttonId)
  
  if (!nextState) {
    console.warn(`Unknown button ID: ${buttonId}`)
    return currentState
  }
  
  if (nextState === 'back') {
    const previousState = getPreviousState(currentState)
    const handler = STATE_HANDLERS[previousState]
    await handler(userId, buttonId, context)
    return previousState
  }
  
  const handler = STATE_HANDLERS[nextState]
  await handler(userId, buttonId, context)
  return nextState
}

