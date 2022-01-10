import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime' as const,
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-01-06T00:00:00.000Z',
      '2022-01-07T00:00:00.000Z',
      '2022-01-08T00:00:00.000Z',
      '2022-01-10T00:00:00.000Z',
      '2022-01-11T00:00:00.000Z',
      '2022-01-12T00:00:00.000Z',
      '2022-01-13T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: 'series1', data: [23, 12, 22, 16, 49, 56, 67] },
]

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Dashgo</title>
      </Head>

      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <SimpleGrid flex="1" gap="4" minChildWidth="320px">
            <Box
              p={["6" ,"8"]}
              bg="gray.800"
              borderRadius="8"
              pb="4"
            >
              <Text fontSize="lg" mb="4">Inscritos da semana</Text>
              <Chart type="area" height={160} options={options} series={series} />
            </Box>

            <Box
              p={["6" ,"8"]}
              bg="gray.800"
              borderRadius="8"
              pb="4"
            >
              <Text fontSize="lg" mb="4">Taxa de abertura</Text>
              <Chart type="area" height={160} options={options} series={series} />
            </Box>

          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}