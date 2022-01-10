import Head from "next/head";
import { Button, Flex, Stack } from "@chakra-ui/react";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";

import { InputComp } from "../components/Form/Input";

type SignInProps = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  console.log(errors)

  const handleSignIn: SubmitHandler<SignInProps> = async (data) => {

    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Login | Dashgo</title>
      </Head>

      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >

        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={10}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >

          <Stack spacing="4">
            <InputComp
              type="email"
              label="E-mail"
              name="email"
              error={errors.email}
              {...register('email')}
            />

            <InputComp
              type="password"
              label="Senha"
              name="password"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>

        </Flex>
      </Flex>
    </>
  )
}
