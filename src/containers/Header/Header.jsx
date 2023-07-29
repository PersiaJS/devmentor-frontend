import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "@/components/Logo/logo";
import DesktopNav from "./Nav/DesktopNav/DesktopNav";
import MobileNav from "./Nav/MobileNav/MobileNav";
import Link from "next/link";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"100px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-evenly" }}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Link href="/">
            <Logo />
          </Link>

          <DesktopNav NAV_ITEMS={NAV_ITEMS} />

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={Link}
              fontSize={"lg"}
              fontWeight={600}
              variant={"link"}
              href={"/auth/login"}
              _hover={{
                textDecoration: "none",
                color: "gray.600",
              }}
            >
              ورود
            </Button>
            <Button
              as={Link}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"lg"}
              fontWeight={600}
              color={"white"}
              bg={"red.500"}
              href={"/auth/register"}
              _hover={{
                bg: "red.600",
              }}
            >
              ثبت نام
            </Button>
          </Stack>
        </Flex>
      </Flex>

      <Collapse b in={isOpen} animateOpacity>
        <MobileNav NAV_ITEMS={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
}

const NAV_ITEMS = [
  {
    label: "منتورها",
    href: "find-a-mentor",
  },
  {
    label: "درباره ما",
    href: "about",
  },
  {
    label: "تماس با ما",
    href: "contact",
  },
];
