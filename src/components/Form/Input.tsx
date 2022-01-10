import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface IInput extends InputProps {
  name: string;
  label?: string;
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> =
  ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
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
          ref={ref}
          {...rest}
        />
          {!!error && (
            <FormErrorMessage>
              {error.message}
            </FormErrorMessage>
          )}
      </FormControl>
    )
  }

export const InputComp = forwardRef(InputBase)