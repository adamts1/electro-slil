import { useState, useEffect, useCallback, useRef } from 'react'

// Type definitions for WhatsApp demo
export interface LinkPreviewData {
  url: string
  title: string
  description: string
  image?: string
}

export interface Button {
  id: string
  title: string
}

export type MessageType = 'bot_text' | 'bot_buttons' | 'user_reply_selection' | 'user_text' | 'bot_link'

export interface Message {
  type: MessageType
  text?: string
  time: string
  // For bot_buttons and bot_link
  buttons?: Button[]
  // For user_reply_selection
  replyToText?: string
  value?: string
  choiceId?: string
  source?: 'button' | 'list'
  // For bot_link
  linkPreview?: LinkPreviewData
}

export interface DemoScenario {
  title: string
  messages: Message[]
}

export interface WhatsAppInterfaceProps {
  scenarios: DemoScenario[]
  contactName?: string
  businessAccount?: string
  showNavigation?: boolean
  showDots?: boolean
  showCaption?: boolean
}

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

// Link Preview Component (WhatsApp style)
const LinkPreview = ({ url, title, description, image }: LinkPreviewData) => {
  return (
    <div className="mt-2 border-t border-slate-200/30 pt-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-slate-50/80 rounded-lg overflow-hidden border border-slate-200/40 hover:bg-slate-100/80 transition cursor-pointer"
      >
        {image && (
          <div className="w-full h-20 bg-slate-100 overflow-hidden flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
        <div className="p-2">
          <div className="text-[9px] text-slate-500 mb-0.5 truncate" dir="ltr">{new URL(url).hostname}</div>
          <div className="text-xs font-semibold text-slate-800 mb-0.5 line-clamp-1">{title}</div>
          <div className="text-[10px] text-slate-600 line-clamp-2 leading-tight">{description}</div>
        </div>
      </a>
    </div>
  )
}

// WhatsApp Interface Component
export const WhatsAppInterface = ({ 
  scenarios,
  contactName = 'אלקטרו סליל',
  businessAccount = 'Business account',
  showNavigation = true,
  showDots = true,
  showCaption = true
}: WhatsAppInterfaceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const chatAreaRef = useRef<HTMLDivElement>(null)

  const demoScenarios = scenarios

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : demoScenarios.length - 1))
  }, [demoScenarios.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < demoScenarios.length - 1 ? prev + 1 : 0))
  }, [demoScenarios.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Keyboard navigation (reversed for RTL)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToPrevious() // Reversed for RTL
      } else if (e.key === 'ArrowLeft') {
        goToNext() // Reversed for RTL
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrevious])

  // Scroll to bottom when slide changes
  useEffect(() => {
    if (chatAreaRef.current) {
      // Use setTimeout to ensure DOM is updated before scrolling
      setTimeout(() => {
        if (chatAreaRef.current) {
          chatAreaRef.current.scrollTo({
            top: chatAreaRef.current.scrollHeight,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [currentIndex])

  const currentScenario = demoScenarios[currentIndex]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Phone Viewport Container */}
      <div className="relative mx-auto max-w-[288px] md:max-w-[336px]">
        {/* Navigation Arrows - Outside Phone */}
        {showNavigation && scenarios.length > 1 && (
          <>
            <button
              onClick={goToNext}
              className="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-14 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white shadow-lg hover:shadow-xl border border-slate-200/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              aria-label="הבא"
            >
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-14 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white shadow-lg hover:shadow-xl border border-slate-200/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              aria-label="קודם"
            >
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <div className="relative bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden h-[544px] md:h-[624px]">
          {/* WhatsApp Interface */}
          <div className="flex flex-col h-full" style={{ backgroundColor: '#efeae2' }}>
            {/* Header */}
            <div className="bg-[#075e54] text-white px-3 py-2.5 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="w-8 h-8 rounded-full bg-[#25d366]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">{contactName}</div>
                  <div className="text-[10px] text-white/80">{businessAccount}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>

            {/* Status Bar (iPhone style) */}
            <div className="bg-[#075e54] text-white text-[8px] px-3 py-0.5 flex justify-between items-center">
              <span>16:38</span>
            </div>

            {/* Chat Area */}
            <div ref={chatAreaRef} className="flex-1 overflow-y-auto relative">
              <WhatsAppPattern />
              <div className="relative z-10 p-3 space-y-3">
                {/* Date Separator */}
                <div className="flex justify-center">
                  <div className="bg-white/80 px-2.5 py-0.5 rounded-full text-[10px] text-slate-600">
                    Today
                  </div>
                </div>

                {/* Encryption Message */}
                <div className="flex justify-center">
                  <div className="bg-[#fff9c4] px-3 py-1.5 rounded-lg max-w-[85%] flex items-center gap-1.5 text-[10px] text-slate-700">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                    <span>Messages and calls are end-to-end encrypted. Only people in this chat can read, listen, or share them. <span className="text-blue-600 underline">Learn more</span></span>
                  </div>
                </div>

                {/* Demo Messages */}
                {currentScenario.messages.map((message, idx) => {
                  // Determine if message is from customer or bot based on type
                  const isCustomer = message.type === 'user_reply_selection' || message.type === 'user_text'
                  
                  // Track selected button IDs to hide them in subsequent messages
                  const selectedButtonIds = new Set<string>()
                  for (let i = 0; i < idx; i++) {
                    const prevMsg = currentScenario.messages[i]
                    if (prevMsg.type === 'user_reply_selection' && prevMsg.choiceId) {
                      selectedButtonIds.add(prevMsg.choiceId)
                    }
                  }
                  
                  return (
                    <div key={idx} className={`flex ${isCustomer ? 'justify-end' : 'justify-start'}`}>
                      {message.type === 'user_reply_selection' ? (
                        // User reply selection - render as WhatsApp reply style
                        <div className="max-w-[75%]">
                          <div className="bg-[#dcf8c6] text-slate-800 rounded-lg px-2.5 py-1.5 shadow-sm">
                            {/* Quoted message header (WhatsApp reply style) */}
                            {message.replyToText && (
                              <div className="mb-1.5 pb-1.5 border-b border-slate-300/50">
                                <div className="flex items-start gap-1.5">
                                  {/* Vertical accent line (WhatsApp style) */}
                                  <div className="w-0.5 bg-slate-400 rounded-full mt-0.5 flex-shrink-0" style={{ minHeight: '24px' }}></div>
                                  {/* Quoted text */}
                                  <div className="flex-1 min-w-0">
                                    <div className="text-[10px] text-slate-600/90 line-clamp-2 break-words">
                                      {message.replyToText}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {/* Selected value */}
                            {message.value && (
                              <div className="text-xs whitespace-pre-line break-words">
                                {message.value}
                              </div>
                            )}
                            {/* Time and checkmark */}
                            <div className="text-[8px] text-slate-500 mt-0.5 text-left">
                              {message.time}
                              <span className="mr-0.5">
                                <svg className="w-2.5 h-2.5 inline" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Bot message or user text
                        <div
                          className={`max-w-[75%] rounded-lg px-2.5 py-1.5 ${
                            isCustomer
                              ? 'bg-[#dcf8c6] text-slate-800'
                              : 'bg-white text-slate-800'
                          } shadow-sm`}
                        >
                          {message.text && (
                            <div className="text-xs whitespace-pre-line break-words">
                              {message.text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                                part.match(/^https?:\/\//) ? (
                                  <span key={i} className="text-blue-600 underline break-all">{part}</span>
                                ) : (
                                  <span key={i}>{part}</span>
                                )
                              )}
                            </div>
                          )}
                          {message.linkPreview && (
                            <LinkPreview
                              url={message.linkPreview.url}
                              title={message.linkPreview.title}
                              description={message.linkPreview.description}
                              image={message.linkPreview.image}
                            />
                          )}
                          {/* Quick Reply Buttons - hide after selection (only show unselected buttons) */}
                          {(message.type === 'bot_buttons' || message.type === 'bot_link') && message.buttons && message.buttons.length > 0 && (
                            <div className="mt-2 pt-2 border-t border-slate-200/30 space-y-1.5">
                              {message.buttons
                                .filter((button) => !selectedButtonIds.has(button.id))
                                .map((button) => (
                                  <div
                                    key={button.id}
                                    className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 text-xs text-blue-700 font-medium text-center cursor-default"
                                  >
                                    {button.title}
                                  </div>
                                ))}
                            </div>
                          )}
                          <div className="text-[8px] text-slate-500 mt-0.5 text-left">
                            {message.time}
                            {isCustomer && (
                              <span className="mr-0.5">
                                <svg className="w-2.5 h-2.5 inline" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Input Bar */}
            <div className="bg-white px-2.5 py-1.5 border-t border-slate-200 relative z-10">
              <div className="flex items-center gap-1.5">
                <button className="p-1.5 text-slate-600 hover:text-slate-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Type a message"
                  className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#25d366]"
                  readOnly
                />
                <button className="p-1.5 text-slate-600 hover:text-slate-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
              </div>
              {/* Home Indicator */}
              <div className="flex justify-center mt-1.5">
                <div className="w-24 h-0.5 bg-black/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      {showCaption && (
        <p className="text-center text-sm text-slate-600 mt-4 line-clamp-2 min-h-[2.5rem]">
          {currentScenario.title}
        </p>
      )}

      {/* Dots Indicator */}
      {showDots && scenarios.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {scenarios.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-blue-600 w-6' : 'bg-slate-300'
                }`}
              aria-label={`מסך ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

