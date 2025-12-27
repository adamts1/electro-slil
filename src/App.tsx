import { useState } from 'react'
import { WhatsAppInterface, type DemoScenario } from './components/WhatsAppDemo'

// Small reusable components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-slate-800">אלקטרו סליל</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-reverse space-x-6">
            <button onClick={() => scrollTo('pain')} className="text-slate-700 hover:text-slate-900 transition text-sm">
              בעיה
            </button>
            <button onClick={() => scrollTo('solution')} className="text-slate-700 hover:text-slate-900 transition text-sm">
              פתרון
            </button>
            <button onClick={() => scrollTo('demo')} className="text-slate-700 hover:text-slate-900 transition text-sm">
              דמו
            </button>
            <button onClick={() => scrollTo('pilot')} className="text-slate-700 hover:text-slate-900 transition text-sm">
              פיילוט
            </button>
            <button onClick={() => scrollTo('faq')} className="text-slate-700 hover:text-slate-900 transition text-sm">
              שאלות
            </button>
            <button onClick={() => scrollTo('pricing')} className="text-slate-700 hover:text-slate-900 transition text-sm">
              עלות
            </button>
            <button onClick={() => scrollTo('contact')} className="text-slate-700 hover:text-slate-900 transition text-sm">
              יצירת קשר
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700"
            aria-label="תפריט"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollTo('pain')} className="block w-full text-right py-2 text-slate-700 text-sm">
              בעיה
            </button>
            <button onClick={() => scrollTo('solution')} className="block w-full text-right py-2 text-slate-700 text-sm">
              פתרון
            </button>
            <button onClick={() => scrollTo('demo')} className="block w-full text-right py-2 text-slate-700 text-sm">
              דמו
            </button>
            <button onClick={() => scrollTo('pilot')} className="block w-full text-right py-2 text-slate-700 text-sm">
              פיילוט
            </button>
            <button onClick={() => scrollTo('faq')} className="block w-full text-right py-2 text-slate-700 text-sm">
              שאלות
            </button>
            <button onClick={() => scrollTo('pricing')} className="block w-full text-right py-2 text-slate-700 text-sm">
              עלות
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

const Section = ({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-16 md:py-24 print-section ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
)

const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const IconEmail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const IconRobot = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
)

const IconHuman = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const IconCheck = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const IconArrow = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)


// Default demo scenarios for אלקטרו סליל
const defaultDemoScenarios: DemoScenario[] = [
  {
    title: 'לקוח פונה עם צורך כללי',
    messages: [
      { type: 'user_text', text: 'שלום,\nאני מחפש מקדחה / מברגה טובה לעבודה רצינית.\nיש לכם משהו של Bosch או DeWALT?', time: '16:38' }
    ]
  },
  {
    title: 'הבוט ממקד את הצורך – בלי בילבול',
    messages: [
      { type: 'user_text', text: 'שלום,\nאני מחפש מקדחה / מברגה טובה לעבודה רצינית.\nיש לכם משהו של Bosch או DeWALT?', time: '16:38' },
      { 
        type: 'bot_buttons',
        text: 'בשמחה.\nכדי לדייק, איזה סוג אתה מחפש?', 
        time: '16:39',
        buttons: [
          { id: 'category_cordless', title: 'מברגה / מקדחה נטענת' },
          { id: 'category_rotary', title: 'מקדחה רוטטת' },
          { id: 'category_hammer', title: 'פטישון לעבודות בטון' }
        ]
      }
    ]
  },
  {
    title: 'הצגת מוצר נבחר – בלי קטלוג עמוס',
    messages: [
      { type: 'user_text', text: 'שלום,\nאני מחפש מקדחה / מברגה טובה לעבודה רצינית.\nיש לכם משהו של Bosch או DeWALT?', time: '16:38' },
      { 
        type: 'bot_buttons',
        text: 'בשמחה.\nכדי לדייק, איזה סוג אתה מחפש?', 
        time: '16:39',
        buttons: [
          { id: 'category_cordless', title: 'מברגה / מקדחה נטענת' },
          { id: 'category_rotary', title: 'מקדחה רוטטת' },
          { id: 'category_hammer', title: 'פטישון לעבודות בטון' }
        ]
      },
      { type: 'user_choice', choiceTitle: 'מקדחה רוטטת', choiceId: 'category_rotary', choiceSource: 'button', time: '16:40' },
      { 
        type: 'bot_buttons',
        text: 'מעולה.\nיש לנו מספר דגמים מקצועיים של DeWALT.\nאחד הדגמים המבוקשים:\n\nמברגה / מקדחה רוטטת 18V XRP\nדגם: DCD996P2\nכולל 2 סוללות\nמתאים לעבודות קשות ושימוש יומיומי', 
        time: '16:40',
        buttons: [
          { id: 'action_product_page', title: 'לראות את דף המוצר באתר' },
          { id: 'action_quote_request', title: 'לקבל הצעת מחיר מנציג' }
        ]
      }
    ]
  },
  {
    title: 'הפניה לאתר – שליטה מלאה במחיר',
    messages: [
      { type: 'user_text', text: 'שלום,\nאני מחפש מקדחה / מברגה טובה לעבודה רצינית.\nיש לכם משהו של Bosch או DeWALT?', time: '16:38' },
      { 
        type: 'bot_buttons',
        text: 'בשמחה.\nכדי לדייק, איזה סוג אתה מחפש?', 
        time: '16:39',
        buttons: [
          { id: 'category_cordless', title: 'מברגה / מקדחה נטענת' },
          { id: 'category_rotary', title: 'מקדחה רוטטת' },
          { id: 'category_hammer', title: 'פטישון לעבודות בטון' }
        ]
      },
      { type: 'user_choice', choiceTitle: 'מקדחה רוטטת', choiceId: 'category_rotary', choiceSource: 'button', time: '16:40' },
      { 
        type: 'bot_buttons',
        text: 'מעולה.\nיש לנו מספר דגמים מקצועיים של DeWALT.\nאחד הדגמים המבוקשים:\n\nמברגה / מקדחה רוטטת 18V XRP\nדגם: DCD996P2\nכולל 2 סוללות\nמתאים לעבודות קשות ושימוש יומיומי', 
        time: '16:40',
        buttons: [
          { id: 'action_product_page', title: 'לראות את דף המוצר באתר' },
          { id: 'action_quote_request', title: 'לקבל הצעת מחיר מנציג' }
        ]
      },
      { type: 'user_choice', choiceTitle: 'לראות את דף המוצר באתר', choiceId: 'action_product_page', choiceSource: 'button', time: '16:41' },
      {
        type: 'bot_link',
        text: 'בשמחה.\nזה דף המוצר באתר עם כל המפרט:',
        time: '16:41',
        linkPreview: {
          url: 'https://www.electroslil.co.il/product/makdehat-rutata-dcd996p2',
          title: 'מברגה / מקדחה רוטטת DeWALT DCD996P2',
          description: 'מברגה / מקדחה רוטטת 18V XRP, כולל 2 סוללות, מתאים לעבודות קשות ושימוש יומיומי',
          image: 'https://www.electroslil.co.il/images/itempics/dcd996p3_05062023135555_large.jpg'
        },
        buttons: [
          { id: 'action_quote_request', title: 'לקבל הצעת מחיר מנציג' },
          { id: 'action_back', title: 'חזרה' }
        ]
      }
    ]
  },
  {
    title: 'מעבר לנציג – זרימה מלאה',
    messages: [
      { type: 'user_text', text: 'שלום, אני מעוניין לבדוק אפשרויות משלוח.', time: '16:38' },
      { 
        type: 'bot_buttons',
        text: 'בשמחה.\nאיזה מוצר אתה מעוניין להזמין?', 
        time: '16:39',
        buttons: [
          { id: 'category_cordless', title: 'מברגה / מקדחה נטענת' },
          { id: 'category_rotary', title: 'מקדחה רוטטת' },
          { id: 'category_hammer', title: 'פטישון לעבודות בטון' }
        ]
      },
      { type: 'user_choice', choiceTitle: 'מקדחה רוטטת', choiceId: 'category_rotary', choiceSource: 'button', time: '16:40' },
      { 
        type: 'bot_buttons',
        text: 'מעולה.\nיש לנו מספר דגמים מקצועיים.\nאחד הדגמים המבוקשים:\n\nמברגה / מקדחה רוטטת 18V XRP\nדגם: DCD996P2\nכולל 2 סוללות', 
        time: '16:40',
        buttons: [
          { id: 'action_product_page', title: 'לראות את דף המוצר באתר' },
          { id: 'action_quote_request', title: 'לקבל הצעת מחיר מנציג' }
        ]
      },
      { type: 'user_choice', choiceTitle: 'לקבל הצעת מחיר מנציג', choiceId: 'action_quote_request', choiceSource: 'button', time: '16:41' },
      { type: 'bot_text', text: 'מצוין.\nלצורך הצעת מחיר מדויקת, באיזו עיר אתה נמצא?', time: '16:41' },
      { type: 'user_text', text: 'תל אביב', time: '16:42' },
      { type: 'bot_text', text: 'תודה.\nמחבר אותך לנציג שיאשר זמינות, מחיר ואפשרויות משלוח.\nרגע אחד…', time: '16:42' },
      { type: 'bot_text', text: 'היי, אני דני מאלקטרו סליל.\nשמח לעזור – בודק זמינות ומכין הצעת מחיר מסודרת עם אפשרויות משלוח.', time: '16:43' }
    ]
  }
]

function App() {
  const [priceMode, setPriceMode] = useState<'none' | 'range' | 'qualified'>('none')

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
      <Section id="hero" className="pt-24 md:pt-32 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            שינוי גדול · אפס מאמץ
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-200 leading-relaxed">
            פיילוט אוטומציה חכם לאלקטרו סליל שמטפל בשאלות חוזרות, מסנן פניות, ומשחרר את העובדים למכירה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollTo('demo')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition shadow-lg hover:shadow-xl"
            >
              לראות את הדמו
            </button>
            <button
              onClick={() => scrollTo('pilot')}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition border border-white/20"
            >
              מה כולל הפיילוט?
            </button>
          </div>
        </div>
      </Section>

      {/* Pain Section */}
      <Section id="pain" className="bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          כאב יומיומי
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-lg text-slate-800">עומס טלפוני מתמשך ושאלות חוזרות</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-lg text-slate-800">עובדים תקועים על "מחיר/זמינות" במקום מכירה</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-lg text-slate-800">לקוחות מחכים ומתייאשים בשעות שיא</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-lg text-slate-800">פניות מתפספסות / אין תיעוד</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto bg-blue-50 p-6 rounded-2xl border-r-4 border-blue-500">
          <p className="text-xl text-slate-800 text-center leading-relaxed">
            זה לא חוסר רצון - זה עומס.<br />
            המטרה: להחזיר שליטה.
          </p>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">
          לא מחליפים עובדים - משחררים אותם
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-50 p-6 rounded-2xl border-r-4 border-blue-500">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong className="text-slate-900 text-xl">עובד דיגיטלי</strong> מטפל בשאלות שחוזרות על עצמן ומסנן פניות - מחירים, מלאי, מידע בסיסי. מכין את הלקוח לפני שהוא מגיע לנציג.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border-r-4 border-blue-500">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong className="text-slate-900 text-xl">עובד אנושי</strong> מטפל במכירות, הצעות מחיר, הנחות, קבלנים, וכל מה שדורש שיקול דעת ואחריות.
            </p>
          </div>

        </div>
      </Section>

      {/* Robot vs Human Cards */}
      <Section id="robot-human" className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Robot Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <IconRobot />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-6 text-slate-800">מה הרובוט עושה</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="text-blue-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">עונה אוטומטית לשאלות נפוצות (מוצרים/מידע/בסיס)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-blue-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">מסנן פניות ומכין לקוח לנציג</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-blue-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">עובד 24/7 בוואטסאפ</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-blue-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">מפחית עומס טלפוני</span>
              </li>
            </ul>
            <p className="text-center text-lg font-semibold text-slate-600 italic">הרובוט מטפל ברעש</p>
          </div>

          {/* Human Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <IconHuman />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-6 text-slate-800">מה העובד עושה</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="text-green-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">מצטרף כשצריך: הצעת מחיר/הנחה/קבלנים</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-green-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">מטפל בלקוח עד הסגירה</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-green-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">שומר על גמישות במדיניות מחיר</span>
              </li>
            </ul>
            <p className="text-center text-lg font-semibold text-slate-600 italic">העובד מתמקד במכירה</p>
          </div>
        </div>
      </Section>

      {/* Demo Section */}
      <Section id="demo" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
          כך זה נראה בפועל
        </h2>
        <p className="text-center text-sm text-slate-500 mb-8">*המחשה של החוויה - לא מערכת חיה*</p>
        
        <WhatsAppInterface scenarios={defaultDemoScenarios} />

        {/* Flow Row */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="bg-slate-100 p-4 rounded-xl text-center flex-1 min-w-[120px]">
              <p className="font-semibold text-slate-800 text-sm">לקוח</p>
            </div>
            <IconArrow />
            <div className="bg-blue-100 p-4 rounded-xl text-center flex-1 min-w-[120px]">
              <p className="font-semibold text-slate-800 text-sm">סוכן דיגיטלי מסנן</p>
            </div>
            <IconArrow />
            <div className="bg-green-100 p-4 rounded-xl text-center flex-1 min-w-[120px]">
              <p className="font-semibold text-slate-800 text-sm">נציג מצטרף כשצריך</p>
            </div>
            <IconArrow />
            <div className="bg-amber-100 p-4 rounded-xl text-center flex-1 min-w-[120px]">
              <p className="font-semibold text-slate-800 text-sm">סגירה</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pilot Section */}
      <Section id="pilot" className="bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">
          מתחילים חכם. פשוט.
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-slate-800">משך: 14 יום</h3>
              <p className="text-slate-700">תוצאות מהירות, נתונים אמיתיים</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-slate-800">נתונים: קטלוג מהאתר</h3>
              <p className="text-slate-700">אין צורך במערכת מלאי</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-slate-800">היקף: 100 מוצרים מובילים</h3>
              <p className="text-slate-700">+ שאלות נפוצות</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-slate-800">תרחישים</h3>
              <p className="text-slate-700">מידע/מוצרים/ניתוב לנציג</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">מדדים שנמדוד</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl text-center shadow-md">
              <div className="text-2xl font-bold text-blue-600 mb-2">זמן תגובה</div>
              <p className="text-sm text-slate-600">ממוצע</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center shadow-md">
              <div className="text-2xl font-bold text-green-600 mb-2">% פניות</div>
              <p className="text-sm text-slate-600">נענו אוטומטית</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center shadow-md">
              <div className="text-2xl font-bold text-amber-600 mb-2">ירידה בעומס</div>
              <p className="text-sm text-slate-600">טלפוני (הערכה)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center shadow-md">
              <div className="text-2xl font-bold text-purple-600 mb-2">פניות מוכנות</div>
              <p className="text-sm text-slate-600">לנציג</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl text-center border-r-4 border-blue-500">
            <p className="text-lg font-semibold text-slate-800">
              בסוף הפיילוט: שיחת החלטה קצרה - ממשיכים או עוצרים.
            </p>
          </div>
        </div>
      </Section>

      {/* Price Policy Section */}
      <Section id="price-policy" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">
          שליטה מלאה במדיניות מחירים
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <div
            onClick={() => setPriceMode('none')}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition ${priceMode === 'none' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${priceMode === 'none' ? 'border-blue-500' : 'border-slate-300'
              }`}>
                {priceMode === 'none' && <div className="w-3 h-3 rounded-full bg-blue-500" />}
              </div>
              <h3 className="text-xl font-bold text-slate-800">ללא מחיר</h3>
            </div>
            <p className="text-slate-700 mr-8">רק אישור מוצר + נציג מצטרף</p>
          </div>
          
          <div
            onClick={() => setPriceMode('range')}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition ${priceMode === 'range' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${priceMode === 'range' ? 'border-blue-500' : 'border-slate-300'
              }`}>
                {priceMode === 'range' && <div className="w-3 h-3 rounded-full bg-blue-500" />}
              </div>
              <h3 className="text-xl font-bold text-slate-800">טווח / החל מ-</h3>
            </div>
            <p className="text-slate-700 mr-8">נותנים כיוון, שומרים גמישות</p>
          </div>
          
          <div
            onClick={() => setPriceMode('qualified')}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition ${priceMode === 'qualified' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${priceMode === 'qualified' ? 'border-blue-500' : 'border-slate-300'
              }`}>
                {priceMode === 'qualified' && <div className="w-3 h-3 rounded-full bg-blue-500" />}
              </div>
              <h3 className="text-xl font-bold text-slate-800">מחיר לאחר סינון</h3>
            </div>
            <p className="text-slate-700 mr-8">מחיר רק אחרי כמות/סוג לקוח</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-8 bg-slate-50 p-6 rounded-2xl text-center">
          <p className="text-lg text-slate-800 font-semibold">אתה קובע את הכללים - לא הבוט.</p>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          שאלות נפוצות
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">5000 ₪ זה יקר לי</h3>
            <p className="text-slate-700 leading-relaxed">
              זה פיילוט של 14 יום - לא התחייבות. מטרתו להוכיח ערך. אם זה לא עובד, עוצרים. אם זה עובד, זה חוסך לך הרבה יותר מעלות של עובד אחד. בואו נתחיל עם שיחה קצרה ונבין מה הכי מתאים.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">הלקוחות שלי אוהבים טלפון</h3>
            <p className="text-slate-700 leading-relaxed">
              אנחנו לא מסירים את הטלפון. אנחנו רק הופכים אותו לחכם יותר. הלקוחות עדיין מתקשרים, אבל מקבלים תשובות מהירות יותר, והעובדים שלך פנויים למכור.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">זה לא יבלבל את הלקוחות?</h3>
            <p className="text-slate-700 leading-relaxed">
              בדיוק ההפך. תשובות מהירות = פחות בילבול. הלקוח מקבל מידע מיד, ואם הוא צריך עובד אנושי - הוא מקבל אותו מיד. הכל חלק וזורם.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">אין לי מערכת מלאי</h3>
            <p className="text-slate-700 leading-relaxed">
              זה בדיוק למה אנחנו מתחילים עם קטלוג מהאתר. אין צורך במערכת מלאי. הפיילוט עובד עם מה שכבר יש לך. אחרי שזה מוכיח ערך, אפשר להוסיף אינטגרציות מתקדמות.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">אני לא רוצה לחשוף מחירים</h3>
            <p className="text-slate-700 leading-relaxed">
              אתה קובע את הכללים. אפשר לעבוד בלי מחירים בכלל - רק אישור מוצר והעברה לנציג. אפשר גם טווח או מחיר רק אחרי סינון. הכל לפי המדיניות שלך.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">מה אם זה לא יעבוד?</h3>
            <p className="text-slate-700 leading-relaxed">
              בדיוק בשביל זה אנחנו מתחילים עם פיילוט. אתה רואה תוצאות תוך שבועיים, ואז מחליט. אין התחייבות ארוכת טווח בלי לראות שזה עובד.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">אפשר Real-time מלאי?</h3>
            <p className="text-slate-700 leading-relaxed">
              כן. אבל רק אחרי שהפיילוט מוכיח ערך. קודם נוודא שהבסיס עובד, ואז נוסיף אינטגרציות מתקדמות כמו מלאי בזמן אמת.
            </p>
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          השקעה שמחליפה עומס - לא עובדים
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">פיילוט 14 יום</h3>
            <div className="text-3xl font-bold text-amber-600 mb-4">₪5,000</div>
            <p className="text-slate-700">חד-פעמי</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">מערכת מתקדמת</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">₪8,000–₪15,000</div>
            <p className="text-slate-700">שלב הבא, אופציונלי</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">ליווי חודשי</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">₪500–₪1,500</div>
            <p className="text-slate-700">שירות שוטף</p>
          </div>
        </div>
        <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto">
          ללא התחייבות להמשך. מטרת הפיילוט: הוכחת ערך.
        </p>
      </Section>

      {/* Strong Closing Statement */}
      <Section id="contact" className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
            שינוי משמעותי. אפקטיבי. מורגש מהשבוע הראשון
          </h2>
          
          <div className="max-w-3xl mx-auto mb-10 space-y-6">
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
              בודקים בצורה רגועה ומדידה<br />
              איך אוטומציה ממוקדת מורידה עומס,<br />
              משפרת שירות,
              ועושה סדר ביומיום.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              אם זה עובד - מתקדמים.<br />
              אם לא - עוצרים. בלי התחייבות.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-300 pt-8 border-t border-slate-700">
            <a
              href="tel:+972533807804"
              className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
            >
              <IconPhone />
              <span>+972533807804</span>
            </a>
            <a
              href="mailto:tsityat.ai.agency@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
            >
              <IconEmail />
              <span>tsityat.ai.agency@gmail.com</span>
            </a>
            <a
              href="https://wa.me/972533807804"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div>
      </footer>
    </div>
  )
}

export default App
