import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { links } from "./_data";
import Link from "next/link";
const Footer = () => {
  return (
    <Box bg="#2B6CB0" color="#fff">
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
            align="start"
          >
            <Text
              display="flex"
              fontSize="3xl"
              fontWeight="bold"
              justifyContent="center"
              alignItems="center"
              border="3px solid #ffffff"
              outline="3px solid #fff"
              outlineOffset="6px"
              padding="7px"
              gap="5px"
              textColor="#1312129f"
              backgroundColor="#fff"
            >
              <span>DevMentor</span>
              <BsCodeSlash size="4rem" color="#1312129f" />
            </Text>
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
                    <Button
                      key={idx}
                      as="a"
                      variant="link-on-accent"
                      href={link.href}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <Divider borderColor="bg-accent-subtle" />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{
            base: "column-reverse",
            md: "row",
          }}
          align="center"
        >
          <ButtonGroup variant="ghost-on-accent">
            <IconButton
              as="a"
              href="https://www.linkedin.com/company/persiajs/"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/PersiaJS/devmentor-frontend"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://t.me/persiajs"
              aria-label="Twitter"
              icon={<FaTelegram fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/persiajs.dev/"
              aria-label="GitHub"
              icon={<FaInstagram fontSize="1.25rem" />}
            />
          </ButtonGroup>
          <Text fontSize="sm" dir="ltr" color="on-accent-subtle">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="http://persiajs.com">PersiaJS</Link>. All rights
            reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
