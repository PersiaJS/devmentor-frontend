import Layout from "@/components/Layout/Layout";
import MiniCard from "@/components/MiniCard/MiniCard";
import FlexContainer from "@/containers/FlexContainer/FlexContainer";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevMentor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Link href="/auth/register">Register</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/reset">Reset</Link>
          <Link href="/auth/forget">Forget</Link>
          <Link href="/auth/verify">Verify</Link>
        </main>

        <Box
          display={"flex"}
          flexDir={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
        >
          {children}
          <Box margin={5}>
            <MiniCard />
          </Box>
          <Box margin={5}>
            <MiniCard />
          </Box>
          <Box margin={5}>
            <MiniCard />
          </Box>
        </Box>
      </Layout>
    </>
  );
}
