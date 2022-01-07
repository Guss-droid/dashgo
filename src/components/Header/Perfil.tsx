import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface IProfile {
  showProfile?: boolean;
}

export function Profile({ showProfile = true }: IProfile) {
  return (
    <Flex align="center">
      {showProfile && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Ré</Text>
          <Text color="gray.300" fontSize="small">
            gustavore2019@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Gustavo Ré" src="https://github.com/Guss-droid.png" />
    </Flex>
  )
}