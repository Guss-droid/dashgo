import { ElementType } from "react";
import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";

interface INavLink extends LinkProps {
  subTitle: string;
  icon: ElementType
}

export function NavLink({ icon, subTitle, ...rest }: INavLink) {
  return (
    <Link {...rest} display="flex" align="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{subTitle}</Text>
    </Link>
  )
} 