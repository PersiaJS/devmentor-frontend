import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Center,
  MenuItem,
  MenuDivider,
  Spinner,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "@/components/Logo/logo";
import DesktopNav from "./Nav/DesktopNav/DesktopNav";
import MobileNav from "./Nav/MobileNav/MobileNav";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "@/contexts/userContext";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";
import { AiFillDashboard } from "react-icons/ai";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default function WithSubnavigation() {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const { user, isLoading, refreshUser } = useContext(UserContext);
  const handleLogout = () => {
    cookies.remove("auth");
    refreshUser();

    router.push("/");
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-around" }}
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
            {isLoading ? (
              <Button paddingInline={"3rem"}>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="red.500"
                  size="md"
                />
              </Button>
            ) : user ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={user.image} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={user.image} />
                  </Center>
                  <br />
                  <Center>
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Button
                      as={"a"}
                      bg={"none"}
                      onClick={handleLogout}
                      leftIcon={<Icon as={AiFillDashboard} color={"red"} />}
                      _hover={{
                        bg: "none",
                      }}
                    >
                      داشبورد
                    </Button>
                  </MenuItem>

                  <MenuItem>
                    {" "}
                    <Button
                      bg={"none"}
                      onClick={handleLogout}
                      leftIcon={<FiLogOut color="red" />}
                      _hover={{
                        bg: "none",
                      }}
                    >
                      خروج
                    </Button>
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={600}
                  variant={"link"}
                  href={"#"}
                  _hover={{
                    textDecoration: "none",
                    color: "gray.600",
                  }}
                >
                  ورود
                </Button>
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"red.400"}
                  href={"#"}
                  _hover={{
                    bg: "red.600",
                  }}
                >
                  ثبت نام
                </Button>
              </>
            )}
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
