import { Button } from "@chakra-ui/react";

interface IPaginationBtn {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void
}

export function PaginationBtn({ number, isCurrent = false, onPageChange }: IPaginationBtn) {

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
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      onClick={() => onPageChange(number)}
      _hover={{
        bg: 'gray.500'
      }}
    >
      {number}
    </Button>
  )
}