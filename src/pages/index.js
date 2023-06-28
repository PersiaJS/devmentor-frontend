import Layout from "@/components/Layout/Layout";
import { Card } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import MentorCard from "@/components/MentorCard";
import { Flex, Grid } from "@chakra-ui/react";

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
        <div>
          <Link href="/auth/register">Register</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/reset">Reset</Link>
          <Link href="/auth/forget">Forget</Link>
          <Link href="/auth/verify">Verify</Link>
          <Flex gap="2">
            <MentorCard />
            <MentorCard />
            <MentorCard />
          </Flex>
        </div>
      </Layout>
    </>
  );
}
