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
        <NavLink href="/dashboard" icon={RiDashboardLine} subTitle="Dashboard" />
        <NavLink href="/users" icon={RiContactsLine} subTitle="Usuários" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink href="/forms" icon={RiInputMethodLine} subTitle="Formulários" />
        <NavLink href="/automation" icon={RiGitMergeLine} subTitle="Automação" />
      </NavSection>

    </Stack>
  )
}