import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen p-24 flex items-center justify-center ${inter.className}`}
    >
      <Center>
        <Flex flexDirection={"column"} gap={"10"} alignItems={"center"}>
          <Heading>Netzwelt Assessment</Heading>
          <Text>
            This is Christian Jay's entry on the assessment for Netzwelt
            application.
          </Text>
          <Link href={"/login"}>
            <Button colorScheme="green">See my work.</Button>
          </Link>
        </Flex>
      </Center>
    </main>
  );
}

