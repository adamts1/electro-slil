import { useState } from 'react'

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
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <button onClick={() => scrollTo('pain')} className="text-slate-700 hover:text-slate-900 transition">
              הבעיה
            </button>
            <button onClick={() => scrollTo('solution')} className="text-slate-700 hover:text-slate-900 transition">
              הפתרון
            </button>
            <button onClick={() => scrollTo('pilot')} className="text-slate-700 hover:text-slate-900 transition">
              הפיילוט
            </button>
            <button onClick={() => scrollTo('pricing')} className="text-slate-700 hover:text-slate-900 transition">
              השקעה
            </button>
            <button
              onClick={() => scrollTo('cta')}
              className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-900 transition"
            >
              קביעת פגישה
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
            <button onClick={() => scrollTo('pain')} className="block w-full text-right py-2 text-slate-700">
              הבעיה
            </button>
            <button onClick={() => scrollTo('solution')} className="block w-full text-right py-2 text-slate-700">
              הפתרון
            </button>
            <button onClick={() => scrollTo('pilot')} className="block w-full text-right py-2 text-slate-700">
              הפיילוט
            </button>
            <button onClick={() => scrollTo('pricing')} className="block w-full text-right py-2 text-slate-700">
              השקעה
            </button>
            <button
              onClick={() => scrollTo('cta')}
              className="block w-full text-right py-2 bg-slate-800 text-white rounded-lg"
            >
              קביעת פגישה
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
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const IconRepeat = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
)

const IconClock = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const IconUsers = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const IconChart = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const IconRobot = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
)

const IconHuman = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const IconCheck = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const IconArrow = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

function App() {
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
            מורידים עומס, לא עובדים.<br />
            מגדילים מכירות – בלי להוסיף כוח אדם.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-200 leading-relaxed">
            אוטומציה חכמה לניהול פניות, טלפונים ולקוחות<br />
            בעסק גדול שעובד חזק – כמו אלקטרו סליל
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollTo('cta')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition shadow-lg hover:shadow-xl"
            >
              בואו נתחיל בפיילוט קצר
            </button>
            <button
              onClick={() => scrollTo('flow')}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition border border-white/20"
            >
              איך זה עובד?
            </button>
          </div>
        </div>
      </Section>

      {/* Pain Section */}
      <Section id="pain" className="bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          הבעיה
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-slate-600 mb-4">
              <IconPhone />
            </div>
            <p className="text-lg font-semibold text-slate-800">עומס טלפוני מתמשך ושאלות חוזרות</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-slate-600 mb-4">
              <IconUsers />
            </div>
            <p className="text-lg font-semibold text-slate-800">עובדים נשרפים במקום למכור</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-slate-600 mb-4">
              <IconClock />
            </div>
            <p className="text-lg font-semibold text-slate-800">לקוחות מחכים ועוברים למתחרה</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-slate-600 mb-4">
              <IconRepeat />
            </div>
            <p className="text-lg font-semibold text-slate-800">שעות שיא יוצרות כאוס</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-slate-600 mb-4">
              <IconChart />
            </div>
            <p className="text-lg font-semibold text-slate-800">אין שליטה ומדידה אמיתית</p>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">
          לא מחליפים עובדים – משחררים אותם
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-50 p-6 rounded-2xl border-r-4 border-blue-500">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong className="text-slate-900 text-xl">עובד דיגיטלי</strong> מטפל בשאלות שחוזרות על עצמן – מחירים, מלאי, מידע בסיסי. עובד 24/7, לא מתעייף, לא מתבלבל.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border-r-4 border-blue-500">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong className="text-slate-900 text-xl">עובד אנושי</strong> מטפל במכירות, הצעות מחיר, הנחות, קבלנים, וכל מה שדורש שיקול דעת ואחריות.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl border-r-4 border-amber-500">
            <p className="text-lg text-slate-800 leading-relaxed font-semibold">
              <strong className="text-xl">כל לקוח = עובד אחד אחראי</strong> כשיש צורך. לא בלגן, לא העברות, לא אובדן לקוח.
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
                <span className="text-slate-700">מחיר ומלאי</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-blue-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">עובד 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-blue-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">וואטסאפ</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-blue-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">סינון שיחות</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-blue-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">הכנת לקוח לפני נציג</span>
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
                <span className="text-slate-700">לקוחות רציניים</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-green-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">סגירת עסקאות</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-green-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">הצעות מחיר והנחות</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-green-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">עבודה עם קבלנים</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-green-500 mt-1 flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-slate-700">אחריות לשיחה</span>
              </li>
            </ul>
            <p className="text-center text-lg font-semibold text-slate-600 italic">העובד מתמקד במכירה</p>
          </div>
        </div>
      </Section>

      {/* Flow Section */}
      <Section id="flow" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          איך זה עובד בפועל
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            <div className="bg-slate-100 p-6 rounded-xl text-center flex-1 min-w-[150px]">
              <p className="font-semibold text-slate-800">לקוח</p>
              <p className="text-sm text-slate-600 mt-2">טלפון / וואטסאפ</p>
            </div>
            <div className="text-slate-400">
              <IconArrow />
            </div>
            <div className="bg-blue-100 p-6 rounded-xl text-center flex-1 min-w-[150px]">
              <p className="font-semibold text-slate-800">סוכן דיגיטלי</p>
              <p className="text-sm text-slate-600 mt-2">מסנן ועונה</p>
            </div>
            <div className="text-slate-400">
              <IconArrow />
            </div>
            <div className="bg-green-100 p-6 rounded-xl text-center flex-1 min-w-[150px]">
              <p className="font-semibold text-slate-800">נציג אחד</p>
              <p className="text-sm text-slate-600 mt-2">מטפל במידת הצורך</p>
            </div>
            <div className="text-slate-400">
              <IconArrow />
            </div>
            <div className="bg-amber-100 p-6 rounded-xl text-center flex-1 min-w-[150px]">
              <p className="font-semibold text-slate-800">סגירה / שירות</p>
              <p className="text-sm text-slate-600 mt-2">לקוח מרוצה</p>
            </div>
          </div>
          <p className="text-center mt-8 text-lg text-slate-700 max-w-2xl mx-auto">
            פשוט, ברור, יעיל. בלי בלגן, בלי העברות, בלי אובדן לקוחות.
          </p>
        </div>
      </Section>

      {/* Quick Win Pilot */}
      <Section id="pilot" className="bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">
          מתחילים חכם. בלי מהפכה.
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center mb-10 text-slate-700">
            אנחנו לא מתחילים עם מהפכה. אנחנו מתחילים עם פיילוט ממוקד.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-slate-800">14 יום פיילוט</h3>
              <p className="text-slate-700">תוצאות מהירות, נתונים אמיתיים</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-slate-800">מוצרים הכי חשובים</h3>
              <p className="text-slate-700">מחיר וזמינות בלבד</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-slate-800">בלי אינטגרציות כבדות</h3>
              <p className="text-slate-700">מתחילים פשוט, בלי לשבור מה שכבר עובד</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-slate-800">תוצאות מדידות</h3>
              <p className="text-slate-700">זמן תגובה, אחוז אוטומציה, הפחתת עומס</p>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl text-center">
            <p className="text-xl font-semibold text-slate-800">סיכון נמוך. ערך מהיר.</p>
          </div>
        </div>
      </Section>

      {/* Metrics Section */}
      <Section id="metrics" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          מדדים שנמדוד בפיילוט
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-50 p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">זמן תגובה</div>
            <p className="text-slate-600">דקות → שניות</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">אחוז אוטומציה</div>
            <p className="text-slate-600">% מהשיחות</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">הפחתת עומס</div>
            <p className="text-slate-600">על העובדים</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">שיעור סגירה</div>
            <p className="text-slate-600">של פניות</p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          שאלות נפוצות
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">הלקוחות שלי אוהבים טלפון</h3>
            <p className="text-slate-700 leading-relaxed">
              אנחנו לא מסירים את הטלפון. אנחנו רק הופכים אותו לחכם יותר. הלקוחות עדיין מתקשרים, אבל מקבלים תשובות מהירות יותר, והעובדים שלכם פנויים למכור.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">זה לא יבלבל את הלקוחות?</h3>
            <p className="text-slate-700 leading-relaxed">
              בדיוק ההפך. תשובות מהירות = פחות בלבול. הלקוח מקבל מידע מיד, ואם הוא צריך עובד אנושי – הוא מקבל אותו מיד. הכל חלק וזורם.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">העובדים שלי יסתדרו עם זה?</h3>
            <p className="text-slate-700 leading-relaxed">
              כן. כי זה מפחית את העומס עליהם. הם לא צריכים לענות על אותן שאלות שוב ושוב. הם פנויים למכור, לסגור עסקאות, לעבוד עם לקוחות רציניים.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">מה אם זה לא יעבוד?</h3>
            <p className="text-slate-700 leading-relaxed">
              בדיוק בשביל זה אנחנו מתחילים עם פיילוט. אתם רואים תוצאות תוך שבועיים, ואז מחליטים. אין התחייבות ארוכת טווח בלי לראות שזה עובד.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-slate-800">אפשר לעשות Real-time מלאי?</h3>
            <p className="text-slate-700 leading-relaxed">
              כן. אבל רק אחרי שהפיילוט מוכיח ערך. קודם נוודא שהבסיס עובד, ואז נוסיף אינטגרציות מתקדמות כמו מלאי בזמן אמת.
            </p>
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          השקעה שמחליפה עומס – לא עובדים
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">פיילוט</h3>
            <div className="text-3xl font-bold text-amber-600 mb-4">₪3,500–₪5,000</div>
            <p className="text-slate-700">התחלה ממוקדת<br />תוצאות תוך 14 יום</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition border-2 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">מערכת מתקדמת</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">₪8,000–₪15,000</div>
            <p className="text-slate-700">פתרון מלא<br />לאחר פיילוט מוצלח</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">ליווי חודשי</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">₪500–₪1,500</div>
            <p className="text-slate-700">עדכונים ותחזוקה<br />שירות שוטף</p>
          </div>
        </div>
        <p className="text-center text-lg text-slate-600">
          בדרך כלל פחות מעלות של עובד אחד.
        </p>
      </Section>

      {/* Testimonials Placeholder */}
      <Section id="testimonials" className="bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          מה אומרים לקוחות
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 p-6 rounded-2xl mb-4 border-2 border-dashed border-slate-300">
            <p className="text-center text-slate-500 italic">[מקום להמלצות לקוחות - יוכנס בהמשך]</p>
          </div>
          <div className="bg-white/50 p-6 rounded-2xl mb-4 border-2 border-dashed border-slate-300">
            <p className="text-center text-slate-500 italic">[מקום להמלצות לקוחות - יוכנס בהמשך]</p>
          </div>
          <div className="bg-white/50 p-6 rounded-2xl border-2 border-dashed border-slate-300">
            <p className="text-center text-slate-500 italic">[מקום להמלצות לקוחות - יוכנס בהמשך]</p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="cta" className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            אם העסק עובד חזק – הוא חייב לעבוד חכם
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-slate-200">
            בואו נתחיל עם פיילוט קצר. תראו תוצאות. תחליטו.
          </p>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-xl text-xl font-semibold transition shadow-lg hover:shadow-xl mb-8"
          >
            קביעת פגישת פיילוט
          </button>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-300">
            <div className="flex items-center gap-2">
              <IconPhone />
              <span>[מספר טלפון]</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>[כתובת אימייל]</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 7.018 7.018 0 01-2.134-1.939c-2.577-2.597-2.577-6.815 0-9.412a6.686 6.686 0 011.939-1.884 7.011 7.011 0 019.412 0 6.686 6.686 0 011.884 1.939c2.597 2.577 2.597 6.815 0 9.412a7.018 7.018 0 01-1.939 2.134 9.868 9.868 0 01-5.229 1.138z"/>
              </svg>
              <span>[קישור וואטסאפ]</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Form Placeholder */}
      <Section id="contact" className="bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">בואו נתחיל</h2>
          <div className="bg-slate-50 p-8 rounded-2xl border-2 border-dashed border-slate-300">
            <p className="text-center text-slate-500">[טופס יצירת קשר - יוכנס בהמשך]</p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 אלקטרו סליל. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

