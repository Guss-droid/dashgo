import Head from 'next/head'
import Link from 'next/link';
import {
  Td,
  Th,
  Tr,
  Box,
  Flex,
  Icon,
  Text,
  Table,
  Tbody,
  Thead,
  Button,
  Heading,
  Spinner,
  Checkbox,
  Link as UiLink,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from '../../components/Pagination';

import { RiAddLine } from 'react-icons/ri';


export default function UsersList() {

  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers(page)

  const isLargeVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handlePrefetchUser(userId: string) {

    await queryClient.prefetchQuery(['user', userId], async () => {

      const res = await api.get(`users/${userId}`)

      return res.data
    }, {
      staleTime: 1000 * 60 * 10
    })

  }

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
              <Heading size="lg" fontWeight="normal">
                Usuários
                {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
              </Heading>

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

            {isLoading ? (
              <Flex justify="center">
                <Spinner color="pink.500" />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter dados dos usuários</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>

                      <Th px={["4", "4", "6"]} color="gray.300" w="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {isLargeVersion && <Th>Data de cadastro</Th>}

                    </Tr>
                  </Thead>

                  <Tbody>
                    {data.users.map(user => (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <UiLink
                              color="purple.400"
                              onMouseEnter={() => handlePrefetchUser(user.id)}
                            >
                              <Text fontWeight="bold">{user.name}</Text>
                            </UiLink>
                            <Text fontSize="small" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {isLargeVersion && <Td>{user.createdAt}</Td>}
                      </Tr>
                    ))}
                  </Tbody>
                </Table>

                <Pagination
                  totalNumberOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  )
}