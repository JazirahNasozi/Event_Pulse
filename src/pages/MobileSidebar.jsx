import { useEffect, useRef, useState } from 'react'

const navigationItems = [
  { id: 'home', label: 'Home', icon: '⌂', prop: 'onHome' },
  { id: 'events', label: 'Events', icon: '▣', prop: 'onEvents' },
  { id: 'check-in', label: 'Check-in', icon: '⌗', prop: 'onCheckIn' },
  { id: 'analytics', label: 'Analytics', icon: '▥', prop: 'onAnalytics' },
  { id: 'profile', label: 'Profile', icon: '◉', prop: 'onProfile' },
]

function MobileSidebar({ activePage, onHome, onEvents, onCheckIn, onAnalytics, onProfile }) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)
  const closeRef = useRef(null)
  const actions = { onHome, onEvents, onCheckIn, onAnalytics, onProfile }

  useEffect(() => {
    if (!isOpen) return undefined
    const trigger = triggerRef.current
    closeRef.current?.focus()

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      trigger?.focus()
    }
  }, [isOpen])

  return (
    <>
      <aside className="desktop-page-sidebar" aria-label="Page navigation">
        <div className="desktop-sidebar-brand">EVENT<span>PULSE</span></div>
        <nav>
          {navigationItems.map((item) => (
            <button
              type="button"
              key={item.id}
              className={activePage === item.id ? 'active' : ''}
              aria-current={activePage === item.id ? 'page' : undefined}
              onClick={() => actions[item.prop]?.()}
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <button
        type="button"
        ref={triggerRef}
        className="mobile-sidebar-trigger"
        aria-label="Open page navigation"
        aria-controls="mobile-page-sidebar"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span aria-hidden="true">☰</span>
      </button>
      {isOpen && (
        <div className="mobile-sidebar-layer">
          <button type="button" className="mobile-sidebar-scrim" onClick={() => setIsOpen(false)} aria-label="Close page navigation" />
          <aside className="mobile-page-sidebar" id="mobile-page-sidebar" role="dialog" aria-modal="true" aria-label="Page navigation">
            <div className="mobile-sidebar-heading">
              <span>EVENT<span>PULSE</span></span>
              <button ref={closeRef} type="button" onClick={() => setIsOpen(false)} aria-label="Close page navigation">×</button>
            </div>
            <nav>
              {navigationItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={activePage === item.id ? 'active' : ''}
                  aria-current={activePage === item.id ? 'page' : undefined}
                  onClick={() => {
                    setIsOpen(false)
                    actions[item.prop]?.()
                  }}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}

export default MobileSidebar
