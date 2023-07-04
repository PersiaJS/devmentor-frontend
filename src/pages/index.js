import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import { Card } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import MentorCard from "@/components/MentorCard";
import { Flex } from "@chakra-ui/react";
import ResultSearchMentor from "@/components/ResultSearchMentor";

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
          {/* <Link href="/auth/register">Register</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/reset">Reset</Link>
          <Link href="/auth/forget">Forget</Link>
          <Link href="/auth/verify">Verify</Link>
          <Hero
            title="مربی خودتو پیدا کن"
            description="برای تسلط بر جاوا اسکریپت تنهایی؟ از منتور های ما کمک بگیر و چیزای خارق‌العاده خلق کن."
            textOfMentorLogo="منتورهاتو پیدا کن"
          /> */}

          <Box
            display={"flex"}
            flexDir={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
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

          {/* <Flex gap="2">
            <MentorCard />
            <MentorCard />
            <MentorCard />
          </Flex>
          <ResultSearchMentor /> */}
        </div>
      </Layout>
    </>
  );
}
