import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface IInput extends InputProps {
  name: string;
  label?: string;
  type: string;
}

export function InputComp({ name, label, ...rest }: IInput) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Input
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        {...rest}
      />

    </FormControl>
  )
}