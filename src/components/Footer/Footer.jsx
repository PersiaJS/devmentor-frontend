import Link from "next/link";

import {
  Box,
  Button,
  Container,
  Divider,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import Logo from "@/components/Logo/logo";
import SocialIcons from "./SocialIcons";
import links from "./data";

const Footer = () => {
  return (
    <Box overflow="hidden">
      <Container as="footer" role="contentinfo" maxWidth="max-content">
        <Stack
          justify="space-between"
          align="start"
          direction={{
            base: "column",
            lg: "row",
          }}
          py={{
            base: "12",
            md: "16",
          }}
          spacing="8"
        >
          <Stack
            spacing={{
              base: "6",
              md: "8",
            }}
            align={{ base: "center", md: "start" }}
          >
            <Link href="/">
              <Logo />
            </Link>
            <Text
              color="on-accent-muted"
              fontSize="18px"
              wordBreak="break-word"
              fontWeight="bold"
              textAlign="right"
            >
              در کنار توسعه دهندگان، با مربیان حرفه ای پیشرفت کنید.
            </Text>
          </Stack>
          <SimpleGrid
            columns={{
              base: 2,
              md: 4,
            }}
            gap="8"
            width={{
              base: "full",
              lg: "auto",
            }}
          >
            {links.map((group, idx) => (
              <Stack
                key={idx}
                spacing="4"
                minW={{
                  lg: "52",
                }}
              >
                <Text fontSize="2xl" fontWeight="bold" color="on-accent-subtle">
                  {group.title}
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  {group.links.map((link, idx) => (
                    <Link href={link.href} key={idx}>
                      <Button
                        variant="link-on-accent"
                        _hover={{ color: "red.500" }}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <Divider borderColor="#E2E8F0" />
        <SocialIcons />
      </Container>
    </Box>
  );
};

export default Footer;
