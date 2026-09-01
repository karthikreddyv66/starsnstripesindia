import { useEffect } from 'react'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl?: string
}

export default function TermsModal({
  isOpen,
  onClose,
  pdfUrl = '/Terms_and_Conditions.pdf'
}: TermsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-sm shadow-2xl flex flex-col overflow-hidden border border-black/15"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0D1B2A] border-b-2 border-[#A07828] flex items-center justify-between shrink-0">
          <div>
            <p className="eyebrow text-[10px] tracking-[0.2em] text-[#C9A24B] mb-0.5">
              Official Expedition Document
            </p>
            <h3 className="font-serif text-lg md:text-xl font-bold text-white">
              Terms &amp; Conditions
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold bg-white/10 hover:bg-[#A07828] text-white border border-white/20 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Open in New Tab / Download
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Frame */}
        <div className="flex-1 w-full bg-[#333] relative">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title="Terms and Conditions PDF"
            className="w-full h-full border-0"
          />

          {/* Mobile Fallback bar */}
          <div className="sm:hidden absolute bottom-3 left-3 right-3 p-3 bg-white/95 rounded-sm shadow-md flex items-center justify-between text-xs border border-black/10">
            <span className="text-[#0D1B2A] font-medium">Viewing on mobile?</span>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-[#A07828] text-white rounded-sm font-semibold"
            >
              Open PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
