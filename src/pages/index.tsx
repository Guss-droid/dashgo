import Head from "next/head";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { InputComp } from "../components/Form/input";

export default function SignIn() {
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
        >

          <Stack spacing="4">
            <InputComp type="email" label="E-mail" name="email" />
            <InputComp type="password" label="Senha" name="password" />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
          >
            Entrar
          </Button>

        </Flex>
      </Flex>
    </>
  )
}
