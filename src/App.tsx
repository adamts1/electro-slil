import { useState, useEffect, useCallback } from 'react'

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
            <button
              onClick={() => scrollTo('contact')}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition text-sm"
            >
              קביעת שיחת החלטה (15 דק׳)
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
            <button onClick={() => scrollTo('contact')} className="block w-full text-right py-2 text-slate-700 text-sm">
              יצירת קשר
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="block w-full text-right py-2 bg-slate-800 text-white rounded-lg text-sm"
            >
              קביעת שיחת החלטה (15 דק׳)
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

const IconWhatsApp = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 7.018 7.018 0 01-2.134-1.939c-2.577-2.597-2.577-6.815 0-9.412a6.686 6.686 0 011.939-1.884 7.011 7.011 0 019.412 0 6.686 6.686 0 011.884 1.939c2.597 2.577 2.597 6.815 0 9.412a7.018 7.018 0 01-1.939 2.134 9.868 9.868 0 01-5.229 1.138z"/>
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

// WhatsApp Background Pattern Component
const WhatsAppPattern = () => {
  // Create a subtle doodle pattern similar to WhatsApp
  const patternSVG = encodeURIComponent(`
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#000" stroke-width="0.5" opacity="0.03">
        <circle cx="20" cy="20" r="3"/>
        <circle cx="80" cy="30" r="2"/>
        <circle cx="50" cy="70" r="2.5"/>
        <path d="M10 50 Q30 40 50 50 T90 50"/>
        <path d="M15 80 L25 70 M85 20 L75 10"/>
        <rect x="60" y="60" width="8" height="8" rx="1"/>
        <rect x="30" y="10" width="6" height="6" rx="1"/>
        <path d="M70 80 Q80 70 90 80"/>
        <path d="M5 30 L15 25 M95 70 L85 65"/>
      </g>
    </svg>
  `)
  
  return (
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,${patternSVG}")`,
        backgroundSize: '100px 100px',
        backgroundRepeat: 'repeat'
      }}
    />
  )
}

// WhatsApp Interface Component
const WhatsAppInterface = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const demoScenarios = [
    {
      title: 'לקוח פונה — בלי להמתין',
      messages: [
        { text: 'שלום, אני מעוניין במוצר X', sender: 'customer', time: '16:38' },
        { text: 'שלום! אני כאן לעזור. איזה מוצר בדיוק?', sender: 'bot', time: '16:38' }
      ]
    },
    {
      title: 'הרובוט עונה מיד ומסנן',
      messages: [
        { text: 'שלום, אני מעוניין במוצר X', sender: 'customer', time: '16:38' },
        { text: 'שלום! אני כאן לעזור. איזה מוצר בדיוק?', sender: 'bot', time: '16:38' },
        { text: 'מוצר Y', sender: 'customer', time: '16:39' },
        { text: 'מצוין! הנה המידע על המוצר:\n• מחיר: החל מ-₪XXX\n• זמינות: במלאי\n• משלוח: 2-3 ימי עסקים', sender: 'bot', time: '16:39' }
      ]
    },
    {
      title: 'הלקוח מגיע מוכן לנציג',
      messages: [
        { text: 'שלום, אני מעוניין במוצר X', sender: 'customer', time: '16:38' },
        { text: 'שלום! אני כאן לעזור. איזה מוצר בדיוק?', sender: 'bot', time: '16:38' },
        { text: 'מוצר Y', sender: 'customer', time: '16:39' },
        { text: 'מצוין! הנה המידע על המוצר:\n• מחיר: החל מ-₪XXX\n• זמינות: במלאי\n• משלוח: 2-3 ימי עסקים', sender: 'bot', time: '16:39' },
        { text: 'אני מעוניין בהצעה מחיר', sender: 'customer', time: '16:40' },
        { text: 'מעביר אותך לנציג שלנו שיטפל בזה מיד...', sender: 'bot', time: '16:40' }
      ]
    },
    {
      title: 'נציג אחד אחראי ללקוח',
      messages: [
        { text: 'שלום, אני מעוניין במוצר X', sender: 'customer', time: '16:38' },
        { text: 'שלום! אני כאן לעזור. איזה מוצר בדיוק?', sender: 'bot', time: '16:38' },
        { text: 'מוצר Y', sender: 'customer', time: '16:39' },
        { text: 'מצוין! הנה המידע על המוצר:\n• מחיר: החל מ-₪XXX\n• זמינות: במלאי\n• משלוח: 2-3 ימי עסקים', sender: 'bot', time: '16:39' },
        { text: 'אני מעוניין בהצעה מחיר', sender: 'customer', time: '16:40' },
        { text: 'מעביר אותך לנציג שלנו שיטפל בזה מיד...', sender: 'bot', time: '16:40' },
        { text: 'שלום! אני דני, הנציג שלך. שמח לעזור עם הצעת המחיר.', sender: 'agent', time: '16:41' }
      ]
    },
    {
      title: 'סגירה נקייה בלי עומס',
      messages: [
        { text: 'שלום, אני מעוניין במוצר X', sender: 'customer', time: '16:38' },
        { text: 'שלום! אני כאן לעזור. איזה מוצר בדיוק?', sender: 'bot', time: '16:38' },
        { text: 'מוצר Y', sender: 'customer', time: '16:39' },
        { text: 'מצוין! הנה המידע על המוצר:\n• מחיר: החל מ-₪XXX\n• זמינות: במלאי\n• משלוח: 2-3 ימי עסקים', sender: 'bot', time: '16:39' },
        { text: 'אני מעוניין בהצעה מחיר', sender: 'customer', time: '16:40' },
        { text: 'מעביר אותך לנציג שלנו שיטפל בזה מיד...', sender: 'bot', time: '16:40' },
        { text: 'שלום! אני דני, הנציג שלך. שמח לעזור עם הצעת המחיר.', sender: 'agent', time: '16:41' },
        { text: 'תודה! נשמח לקבל את ההצעה', sender: 'customer', time: '16:42' },
        { text: 'שלחתי לך את ההצעה. נשמח לענות על כל שאלה!', sender: 'agent', time: '16:43' }
      ]
    }
  ]

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : demoScenarios.length - 1))
  }, [demoScenarios.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < demoScenarios.length - 1 ? prev + 1 : 0))
  }, [demoScenarios.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrevious])

  const currentScenario = demoScenarios[currentIndex]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Phone Viewport Container */}
      <div className="relative mx-auto max-w-[360px] md:max-w-[420px]">
        <div className="relative bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden h-[680px] md:h-[780px]">
          {/* Navigation Arrows - Top Corners */}
          <button
            onClick={goToPrevious}
            className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-110"
            aria-label="קודם"
          >
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-110"
            aria-label="הבא"
          >
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* WhatsApp Interface */}
          <div className="flex flex-col h-full" style={{ backgroundColor: '#efeae2' }}>
            {/* Header */}
            <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="w-10 h-10 rounded-full bg-[#25d366]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base">אלקטרו סליל</div>
                  <div className="text-xs text-white/80">Business account</div>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>

            {/* Status Bar (iPhone style) */}
            <div className="bg-[#075e54] text-white text-[10px] px-4 py-1 flex justify-between items-center">
              <span>16:38</span>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3z"/>
                </svg>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3z"/>
                </svg>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 22h20V2z"/>
                </svg>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3zm4 0l2-2v7l-2-2v-3z"/>
                </svg>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto relative">
              <WhatsAppPattern />
              <div className="relative z-10 p-4 space-y-4">
                {/* Date Separator */}
                <div className="flex justify-center">
                  <div className="bg-white/80 px-3 py-1 rounded-full text-xs text-slate-600">
                    Today
                  </div>
                </div>

                {/* Encryption Message */}
                <div className="flex justify-center">
                  <div className="bg-[#fff9c4] px-4 py-2 rounded-lg max-w-[85%] flex items-center gap-2 text-xs text-slate-700">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                    <span>Messages and calls are end-to-end encrypted. Only people in this chat can read, listen, or share them. <span className="text-blue-600 underline">Learn more</span></span>
                  </div>
                </div>

                {/* Demo Messages */}
                {currentScenario.messages.map((message, idx) => (
                  <div
                key={idx}
                    className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-lg px-3 py-2 ${
                        message.sender === 'customer'
                          ? 'bg-[#dcf8c6] text-slate-800'
                          : message.sender === 'bot'
                          ? 'bg-white text-slate-800'
                          : 'bg-[#dcf8c6] text-slate-800'
                      } shadow-sm`}
                    >
                      <div className="text-sm whitespace-pre-line">{message.text}</div>
                      <div className="text-[10px] text-slate-500 mt-1 text-left">
                        {message.time}
                        {message.sender === 'customer' && (
                          <span className="mr-1">
                            <svg className="w-3 h-3 inline" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <div className="bg-white px-3 py-2 border-t border-slate-200 relative z-10">
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-600 hover:text-slate-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Type a message"
                  className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25d366]"
                  readOnly
                />
                <button className="p-2 text-slate-600 hover:text-slate-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="p-2 text-slate-600 hover:text-slate-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <button className="p-2 text-slate-600 hover:text-slate-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                  </svg>
                </button>
              </div>
              {/* Home Indicator */}
              <div className="flex justify-center mt-2">
                <div className="w-32 h-1 bg-black/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-sm text-slate-600 mt-4 line-clamp-2 min-h-[2.5rem]">
        {currentScenario.title}
      </p>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {demoScenarios.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === idx ? 'bg-blue-600 w-6' : 'bg-slate-300'
            }`}
            aria-label={`מסך ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

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
            מורידים עומס מהטלפון — בלי לשנות איך העסק עובד
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
            זה לא חוסר רצון — זה עומס.<br />
            המטרה: להחזיר שליטה.
          </p>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution" className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">
          לא מחליפים עובדים — משחררים אותם
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-50 p-6 rounded-2xl border-r-4 border-blue-500">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong className="text-slate-900 text-xl">עובד דיגיטלי</strong> מטפל בשאלות שחוזרות על עצמן ומסנן פניות — מחירים, מלאי, מידע בסיסי. מכין את הלקוח לפני שהוא מגיע לנציג.
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
        <p className="text-center text-sm text-slate-500 mb-8">*המחשה של החוויה — לא מערכת חיה*</p>
        
        <WhatsAppInterface />

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
          מתחילים חכם. בלי מהפכה.
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
              <h3 className="text-xl font-bold mb-3 text-slate-800">היקף: 10–30 מוצרים מובילים</h3>
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
              בסוף הפיילוט: שיחת החלטה קצרה — ממשיכים או עוצרים.
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
            className={`p-6 rounded-2xl border-2 cursor-pointer transition ${
              priceMode === 'none' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                priceMode === 'none' ? 'border-blue-500' : 'border-slate-300'
              }`}>
                {priceMode === 'none' && <div className="w-3 h-3 rounded-full bg-blue-500" />}
              </div>
              <h3 className="text-xl font-bold text-slate-800">ללא מחיר</h3>
            </div>
            <p className="text-slate-700 mr-8">רק אישור מוצר + נציג מצטרף</p>
          </div>
          
          <div
            onClick={() => setPriceMode('range')}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition ${
              priceMode === 'range' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                priceMode === 'range' ? 'border-blue-500' : 'border-slate-300'
              }`}>
                {priceMode === 'range' && <div className="w-3 h-3 rounded-full bg-blue-500" />}
              </div>
              <h3 className="text-xl font-bold text-slate-800">טווח / החל מ-</h3>
            </div>
            <p className="text-slate-700 mr-8">נותנים כיוון, שומרים גמישות</p>
          </div>
          
          <div
            onClick={() => setPriceMode('qualified')}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition ${
              priceMode === 'qualified' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                priceMode === 'qualified' ? 'border-blue-500' : 'border-slate-300'
              }`}>
                {priceMode === 'qualified' && <div className="w-3 h-3 rounded-full bg-blue-500" />}
              </div>
              <h3 className="text-xl font-bold text-slate-800">מחיר לאחר סינון</h3>
            </div>
            <p className="text-slate-700 mr-8">מחיר רק אחרי כמות/סוג לקוח</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-8 bg-slate-50 p-6 rounded-2xl text-center">
          <p className="text-lg text-slate-800 font-semibold">אתה קובע את הכללים — לא הבוט.</p>
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
              זה פיילוט של 14 יום — לא התחייבות. מטרתו להוכיח ערך. אם זה לא עובד, עוצרים. אם זה עובד, זה חוסך לך הרבה יותר מעלות של עובד אחד. בואו נתחיל עם שיחה קצרה ונבין מה הכי מתאים.
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
              בדיוק ההפך. תשובות מהירות = פחות בלבול. הלקוח מקבל מידע מיד, ואם הוא צריך עובד אנושי — הוא מקבל אותו מיד. הכל חלק וזורם.
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
              אתה קובע את הכללים. אפשר לעבוד בלי מחירים בכלל — רק אישור מוצר והעברה לנציג. אפשר גם טווח או מחיר רק אחרי סינון. הכל לפי המדיניות שלך.
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
          השקעה שמחליפה עומס — לא עובדים
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">פיילוט 14 יום</h3>
            <div className="text-3xl font-bold text-amber-600 mb-4">₪5,000</div>
            <p className="text-slate-700">חד-פעמי</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition border-2 border-blue-500">
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
            זה לא שינוי גדול — זו בדיקה חכמה.
          </h2>
          
          <div className="max-w-3xl mx-auto mb-10 space-y-6">
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
              המטרה של הפיילוט היא לא להחליף עובדים,<br />
              לא לשנות איך העסק עובד,<br />
              ולא להתחייב למערכת גדולה.
            </p>
            
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
              המטרה היא אחת:<br />
              לבדוק בצורה רגועה ומדידה<br />
              אם אוטומציה ממוקדת יכולה להוריד עומס,<br />
              לשחרר עובדים למכירה,<br />
              ולשפר את חוויית הלקוח ביומיום.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              אם זה עובד — מתקדמים.<br />
              אם לא — עוצרים. בלי התחייבות.
            </p>
          </div>

          <div className="mb-8">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-xl text-xl font-semibold transition shadow-lg hover:shadow-xl"
            >
              קביעת שיחת החלטה (15 דק׳)
            </button>
            <p className="text-slate-300 mt-4 text-lg">
              פגישה קצרה. בלי לחץ. בלי התחייבות.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-300 pt-8 border-t border-slate-700">
            <div className="flex items-center gap-2">
              <IconPhone />
              <span>05X-XXXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <IconEmail />
              <span>hello@yourdomain.com</span>
            </div>
            <div className="flex items-center gap-2">
              <IconWhatsApp />
              <span>wa.me/972XXXXXXXXX</span>
            </div>
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
