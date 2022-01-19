import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from 'react-query';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { InputComp } from '../../components/Form/Input';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';

type CreateUsersProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  passwordConfirm: yup.string().oneOf([
    null,
    yup.ref('password')
  ], 'As senhas precisam ser iguais'),
})

export default function CreateUsers() {

  const router = useRouter()

  const createUser = useMutation(async (user: CreateUsersProps) => {
    const res = await api.post('users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })

    return res.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUsersProps> = async (data) => {
    await createUser.mutateAsync(data)

    router.push('/users')
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

          <Box
            as="form"
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p={["6", "8"]}
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <Heading size="lg" fontWeight="normal">Criar usuario</Heading>

            <Divider my="6" borderCcolor="gray.700" />

            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <InputComp
                  name="name"
                  label="Nome completo"
                  type="text"
                  error={errors.name}
                  {...register('name')}
                />

                <InputComp
                  name="email"
                  label="E-mail"
                  type="email"
                  error={errors.email}
                  {...register('email')}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <InputComp
                  name="password"
                  label="Senha"
                  type="password"
                  error={errors.password}
                  {...register('password')}
                />

                <InputComp
                  name="passwordConfirm"
                  label="Confirmação da senha"
                  type="password"
                  error={errors.passwordConfirm}
                  {...register('passwordConfirm')}
                />
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="pink"
                  isLoading={formState.isSubmitting}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>

          </Box>
        </Flex>
      </Box>
    </>
  )
}