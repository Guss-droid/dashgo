import Head from 'next/head'
import Link from 'next/link';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td, Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Pagination } from '../../components/Pagination';

export default function UsersList() {

  const isLargeVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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

            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">Usuários</Heading>

              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>

                  <Th px={["4", "4", "6"]} color="gray.300" w="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  {isLargeVersion && <Th>Data de cadastro</Th>}
                  <Th w="8"></Th>

                </Tr>
              </Thead>

              <Tbody>

                <Tr>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Gustavo Ré</Text>
                      <Text fontSize="small" color="gray.300">gustavore2019@gmail.com</Text>
                    </Box>
                  </Td>
                  {isLargeVersion && <Td>06 de Janeiro, 2022</Td>}

                  {isLargeVersion &&
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="small"
                        colorScheme="facebook"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  }
                </Tr>

              </Tbody>
            </Table>

            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  )
}