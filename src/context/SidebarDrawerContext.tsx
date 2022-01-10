import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface ISidebarDrawer {
  children: ReactNode;
}

type SidebarDrawerContextProps = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps)

export function SidebarDrawerProvider({ children }: ISidebarDrawer) {

  const disclosure = useDisclosure()

  const router = useRouter()

  useEffect(() => {
    
    disclosure.onClose
    
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)