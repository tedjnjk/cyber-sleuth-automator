
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Function to check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add event listener
    window.addEventListener("resize", checkMobile)
    
    // Check on first render
    checkMobile()
    
    // Clean up event listener
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // If isMobile is undefined (first render before useEffect), 
  // use a server-safe approach to determine default state
  if (isMobile === undefined) {
    return typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  }
  
  return isMobile
}
