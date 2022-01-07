import { Box, Stack } from "@chakra-ui/react";
import { PaginationBtn } from "./PaginationBtn";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >

      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>40</strong>
      </Box>

      <Stack direction="row" spacing="2">

        <PaginationBtn isCurrent numberOfPage={1} />
        <PaginationBtn numberOfPage={2} />
        <PaginationBtn numberOfPage={3} />
        <PaginationBtn numberOfPage={4} />

      </Stack>
    </Stack>
  )
}