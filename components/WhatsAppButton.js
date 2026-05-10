'use client'

export default function WhatsAppButton() {
  const phoneNumber = '919274822527'
  const message = 'Hello! I would like to inquire about your brass products.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    
    <a  href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7"
        fill="white"
      >
        <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.853 6.653L2.667 29.333l6.88-1.813A13.267 13.267 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24a11.01 11.01 0 0 1-5.653-1.573l-.4-.24-4.08 1.08 1.093-4-.267-.413A11.04 11.04 0 0 1 5 16c0-6.08 4.947-11.027 11.004-11.027C22.08 4.973 27.027 9.92 27.027 16S22.08 26.667 16.004 26.667zm6.053-8.24c-.333-.16-1.96-.96-2.267-1.067-.306-.107-.52-.16-.746.16-.214.32-.84 1.067-1.04 1.28-.187.213-.387.24-.72.08-.333-.16-1.413-.52-2.693-1.653-.987-.88-1.667-1.973-1.853-2.307-.187-.333-.013-.507.147-.667.147-.147.333-.373.493-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.747-1.787-1.013-2.453-.267-.64-.547-.56-.747-.56-.187-.013-.4-.013-.613-.013a1.2 1.2 0 0 0-.867.4c-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.267 3.44 5.48 4.827.773.333 1.373.533 1.84.68.773.24 1.48.213 2.04.133.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.627-.373z" />
      </svg>
    </a>
  )
}