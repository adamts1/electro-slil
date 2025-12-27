# Test Plan - WhatsApp Button-Based Flow

## Test Scenarios

### Scenario 1: Main Menu Navigation
**Goal**: Verify main menu buttons work correctly

**Steps**:
1. User sends initial message
2. Bot responds with main menu (3 buttons: מחיר, זמינות מלאי, משלוח / איסוף)
3. User clicks "מחיר"
4. Bot routes to price inquiry flow

**Expected**:
- Main menu displays 3 buttons
- Button IDs: `main_price`, `main_stock`, `main_delivery`
- Clicking "מחיר" routes to `price_inquiry` state
- Bot sends appropriate price inquiry message

**Test Cases**:
- [ ] Button "מחיר" click → price inquiry flow
- [ ] Button "זמינות מלאי" click → stock inquiry flow
- [ ] Button "משלוח / איסוף" click → delivery inquiry flow

---

### Scenario 2: Category Selection with Buttons
**Goal**: Verify category selection using buttons (≤3 options)

**Steps**:
1. User is in category selection state
2. Bot sends message with 3 category buttons
3. User clicks "מקדחה רוטטת"
4. Bot routes to product list

**Expected**:
- Message displays 3 category buttons
- Button IDs: `category_cordless`, `category_rotary`, `category_hammer`
- Clicking any category routes to `product_list` state
- Bot sends product list (button or list based on count)

**Test Cases**:
- [ ] Button "מברגה / מקדחה נטענת" click → product list (cordless)
- [ ] Button "מקדחה רוטטת" click → product list (rotary)
- [ ] Button "פטישון לעבודות בטון" click → product list (hammer)

---

### Scenario 3: Product List with List Picker
**Goal**: Verify list picker for many products (>3 options)

**Steps**:
1. User selects category with >3 products
2. Bot sends list message with product options
3. User selects product from list
4. Bot routes to product details

**Expected**:
- List message displays (not buttons, since >3 items)
- List has sections (max 10 rows per section)
- Each product has unique ID (e.g., `prod_dcd996p2`)
- Selecting product routes to `product_details` state

**Test Cases**:
- [ ] List displays correctly with sections
- [ ] Product selection routes to details
- [ ] Product ID is correctly parsed from `list_reply.id`

---

### Scenario 4: Product Actions (3 Buttons)
**Goal**: Verify product action buttons (page, quote, human agent)

**Steps**:
1. User is viewing product details
2. Bot sends message with product info + 3 action buttons
3. User clicks "לקבל הצעת מחיר מנציג"
4. Bot routes to quote request → human agent

**Expected**:
- Message shows product details
- 3 buttons displayed: דף המוצר, הצעת מחיר, נציג אנושי
- Button IDs: `action_product_page`, `action_quote_request`, `action_human_agent`
- Clicking quote routes to `quote_request` → `human_agent`

**Test Cases**:
- [ ] Button "לראות את דף המוצר באתר" → product page link
- [ ] Button "לקבל הצעת מחיר מנציג" → quote request → human agent
- [ ] Button "נציג אנושי" → direct human agent transfer

---

### Scenario 5: Back Button Navigation
**Goal**: Verify "חזרה" button works in multi-step flows

**Steps**:
1. User is in product details state
2. Bot sends message with "חזרה" button
3. User clicks "חזרה"
4. Bot routes to previous state (product list)

**Expected**:
- "חזרה" button always available in multi-step flows
- Button ID: `action_back`
- Clicking routes to previous state in history
- State history is maintained correctly

**Test Cases**:
- [ ] Back from product details → product list
- [ ] Back from product list → category selection
- [ ] Back from category selection → main menu
- [ ] Back from main menu → initial/main menu (no infinite loop)

---

### Scenario 6: Human Agent Transfer
**Goal**: Verify human agent button at key decision points

**Steps**:
1. User is at any decision point (main menu, product details, etc.)
2. User clicks "נציג אנושי"
3. Bot transfers conversation to human agent

**Expected**:
- "נציג אנושי" button available at key points
- Button ID: `action_human_agent`
- Routes to `human_agent` state
- Bot sends transfer message: "מחבר אותך לנציג..."

**Test Cases**:
- [ ] Human agent button from main menu
- [ ] Human agent button from product details
- [ ] Human agent button from any state with button available
- [ ] Transfer message sent correctly

---

### Scenario 7: Webhook Parsing
**Goal**: Verify webhook correctly parses button/list interactions

**Steps**:
1. User clicks button
2. Webhook receives payload
3. Parser extracts button ID
4. System routes to correct state

**Expected**:
- Webhook payload correctly parsed
- `interactive.button_reply.id` extracted for buttons
- `interactive.list_reply.id` extracted for lists
- Unknown button IDs handled gracefully

**Test Cases**:
- [ ] Button reply payload parsed correctly
- [ ] List reply payload parsed correctly
- [ ] Unknown button ID → fallback handling
- [ ] Multiple messages in webhook → all processed

---

### Scenario 8: Complete Flow End-to-End
**Goal**: Verify complete customer journey

**Steps**:
1. Initial message → Main menu
2. Click "מחיר" → Price inquiry
3. (Alternative: Click category → Product list → Product details)
4. Click "לקבל הצעת מחיר" → Quote request
5. Transfer to human agent

**Expected**:
- Complete flow works without errors
- All state transitions correct
- All buttons display correctly
- No numeric input required at any point

**Test Cases**:
- [ ] Complete happy path flow
- [ ] Back button navigation during flow
- [ ] Human agent transfer at any point
- [ ] Error handling for invalid states

---

## Test Data

### Button IDs Reference
```typescript
// Main menu
main_price, main_stock, main_delivery

// Categories
category_cordless, category_rotary, category_hammer

// Actions
action_product_page, action_quote_request, action_human_agent, action_back

// Products (examples)
prod_dcd996p2, prod_dcd778, prod_dch273
```

### Sample Webhook Payloads

**Button Reply**:
```json
{
  "entry": [{
    "changes": [{
      "value": {
        "messages": [{
          "from": "972501234567",
          "id": "wamid.xxx",
          "timestamp": "1234567890",
          "type": "interactive",
          "interactive": {
            "type": "button_reply",
            "button_reply": {
              "id": "main_price",
              "title": "מחיר"
            }
          }
        }]
      }
    }]
  }]
}
```

**List Reply**:
```json
{
  "interactive": {
    "type": "list_reply",
    "list_reply": {
      "id": "prod_dcd996p2",
      "title": "DeWALT DCD996P2",
      "description": "18V XRP"
    }
  }
}
```

## Acceptance Criteria

✅ All choices use buttons or lists (no numeric input)  
✅ Max 3 buttons per message  
✅ List picker for >3 options  
✅ "חזרה" button in multi-step flows  
✅ "נציג אנושי" button at key points  
✅ All button IDs map to correct states  
✅ Webhook parsing works correctly  
✅ State transitions work correctly  
✅ Error handling for edge cases  

