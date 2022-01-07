import Head from 'next/head'
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { InputComp } from '../../components/Form/Input';

export default function CreateUsers() {
  return (
    <>
      <Head>
        <title>Users | Dashgo</title>
      </Head>

      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Heading size="lg" fontWeight="normal">Criar usuario</Heading>
            
            <Divider my="6" borderCcolor="gray.700" />

            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <InputComp name="name" label="Nome completo" type="text" />
                <InputComp name="email" label="E-mail" type="email" />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <InputComp name="password" label="Senha" type="password" />
                <InputComp name="passwordConfirm" label="Confirmação da senha" type="password" />
              </SimpleGrid>
            </VStack>
            
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
                <Button colorScheme="pink">Salvar</Button>
              </HStack>
            </Flex>

          </Box>
        </Flex>
      </Box>
    </>
  )
}