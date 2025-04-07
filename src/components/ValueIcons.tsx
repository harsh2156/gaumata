

export const RespectIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 12C30.9 12 30 12.9 30 14V26C30 27.1 30.9 28 32 28C33.1 28 34 27.1 34 26V14C34 12.9 33.1 12 32 12Z"
        fill="#4CAF50"
      />
      <path
        d="M18 28C16.9 28 16 28.9 16 30V42C16 43.1 16.9 44 18 44C19.1 44 20 43.1 20 42V30C20 28.9 19.1 28 18 28Z"
        fill="#4CAF50"
      />
      <path
        d="M46 28C44.9 28 44 28.9 44 30V42C44 43.1 44.9 44 46 44C47.1 44 48 43.1 48 42V30C48 28.9 47.1 28 46 28Z"
        fill="#4CAF50"
      />
      <path d="M18 44C18 44 22 52 32 52C42 52 46 44 46 44" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 28C18 28 22 20 32 20C42 20 46 28 46 28" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
  
  export const OpennessIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12H48C49.1 12 50 12.9 50 14V50C50 51.1 49.1 52 48 52H16C14.9 52 14 51.1 14 50V14C14 12.9 14.9 12 16 12Z"
        stroke="#4CAF50"
        strokeWidth="2"
      />
      <path d="M32 12V52" stroke="#4CAF50" strokeWidth="2" />
      <path d="M22 24H26" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 32H26" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 40H26" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 24H42" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 32H42" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 40H42" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
  
  export const TrustIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 52C32 52 48 44 48 28V16L32 12L16 16V28C16 44 32 52 32 52Z" stroke="#4CAF50" strokeWidth="2" />
      <path d="M26 32L30 36L38 28" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  
  export const ThinkBigIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="20" stroke="#4CAF50" strokeWidth="2" />
      <path d="M32 12V16" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 48V52" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 32H48" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 32H12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M46.1421 17.8579L43.3137 20.6863" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M20.6863 43.3137L17.8579 46.1421" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M46.1421 46.1421L43.3137 43.3137" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M20.6863 20.6863L17.8579 17.8579" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 32L38 26" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 32L26 38" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
  
  export const AgileDeliveryIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="20" stroke="#4CAF50" strokeWidth="2" />
      <path d="M32 22V32L38 38" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 20L48 24" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 20L44 24" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

  export const ArrowRight = ({ className = "" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    )
  }

  export const ChevronDown = ({ className = "" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }
  