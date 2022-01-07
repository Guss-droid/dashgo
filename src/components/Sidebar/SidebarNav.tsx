import { Stack } from "@chakra-ui/react";

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">

      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} subTitle="Dashboard" />
        <NavLink icon={RiContactsLine} subTitle="Usuários" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} subTitle="Formulários" />
        <NavLink icon={RiGitMergeLine} subTitle="Automação" />
      </NavSection>

    </Stack>
  )
}