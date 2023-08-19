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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "@/components/Logo/logo";
import DesktopNav from "../Nav/DesktopNav/DesktopNav";
import MobileNav from "../Nav/MobileNav/MobileNav";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "@/contexts/userContext";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";
import { AiFillDashboard } from "react-icons/ai";
import Cookies from "universal-cookie";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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

export default function WithSubnavigation() {
  const router = useRouter();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { user, isLoading, refreshUser } = useContext(UserContext);

  const handleLogout = () => {
    const cookie = new Cookies();
    cookie.remove("auth");
    refreshUser();

    router.push("/");
  };

  return (
    <Box mb={10}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"100px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        boxShadow="md"
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
                  onClick={() => onClose()}
                >
                  <Button
                    boxShadow={"md"}
                    p={2}
                    rightIcon={<Icon as={MdOutlineKeyboardArrowDown} />}
                  >
                    <Avatar
                      size={"sm"}
                      src={user.image}
                      name={`${user.firstName} ${user.lastName}`}
                      mx={2}
                    />
                    {"  "}
                    <Text display={{ base: "none", md: "block" }}>
                      {`${user.firstName} ${user.lastName}`}
                    </Text>
                  </Button>
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={user.image} />
                  </Center>
                  <br />
                  <Center fontWeight={"600"}>
                    {user.firstName} {user.lastName}
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
                  display={{ base: "none", md: "inline-flex" }}
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={600}
                  variant={"link"}
                  href={"/auth/login"}
                >
                  ورود
                </Button>
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  colorScheme="red"
                  fontWeight={600}
                  color={"white"}
                  bg={"red"}
                  href={"/auth/register"}
                >
                  ثبت نام
                </Button>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity={false}>
        <MobileNav NAV_ITEMS={NAV_ITEMS} user={user} />
      </Collapse>
    </Box>
  );
}
