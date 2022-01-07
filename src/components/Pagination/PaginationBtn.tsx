import { Button } from "@chakra-ui/react";

interface IPaginationBtn {
  isCurrent?: boolean;
  numberOfPage: number;
}

export function PaginationBtn({ numberOfPage, isCurrent = false }: IPaginationBtn) {

  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {numberOfPage}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {numberOfPage}
    </Button>
  )
}