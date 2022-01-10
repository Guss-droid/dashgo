import Link from "next/link";
import { ElementType } from "react";
import { Icon, Link as UiLink, LinkProps, Text } from "@chakra-ui/react";

import { ActiveLink } from "../ActiveLink";

interface INavLink extends LinkProps {
  subTitle: string;
  icon: ElementType;
  href: string;
}

export function NavLink({ icon, subTitle, href, ...rest }: INavLink) {
  return (
    <ActiveLink href={href} passHref>
      <UiLink {...rest} display="flex" align="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{subTitle}</Text>
      </UiLink>
    </ActiveLink>
  )
} 