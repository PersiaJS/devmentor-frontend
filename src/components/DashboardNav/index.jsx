import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiBell, FiLogOut, FiSearch } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../Logo/logo";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useContext } from "react";
import UserContext from "@/contexts/userContext";
import { AiFillDashboard } from "react-icons/ai";
const DashboardNav = function ({ showSidebarButton = true, onShowSidebar }) {
  const { onClose } = useDisclosure();

  const { user, refreshUser } = useContext(UserContext);
  const router = useRouter();
  const cookie = new Cookies();
  const handleProfile = () => {
    router.push("/dashboard/profile");
  };
  const handleLogout = () => {
    cookie.remove("auth");
    refreshUser();

    router.push("/");
  };
  return (
    <Box as="section" maxW="full">
      <Box borderBottomWidth="1px" bg="bg.surface">
        <Container py="4" maxW="full">
          <HStack justify="space-evenly">
            {showSidebarButton ? (
              <IconButton
                icon={<HamburgerIcon w={8} h={8} />}
                colorScheme="blackAlpha"
                variant="outline"
                onClick={onShowSidebar}
              />
            ) : (
              <Logo />
            )}

            <InputGroup
              maxW={{ md: "sm", lg: "md" }}
              display={{ base: "none", md: "inline-flex" }}
            >
              <InputLeftElement>
                <Icon as={FiSearch} color="fg.muted" fontSize="lg" />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup>
            <HStack spacing={{ base: "2", md: "4" }}>
              <ButtonGroup variant="tertiary" spacing="1">
                <IconButton
                  icon={<FiSearch />}
                  aria-label="Serach"
                  display={{ base: "flex", md: "none" }}
                  isRound
                />
                <IconButton
                  icon={<FiBell />}
                  aria-label="Show notification"
                  isRound
                />
              </ButtonGroup>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"unstyled"}
                  cursor={"pointer"}
                  minW={0}
                  onClick={() => onClose()}
                >
                  <Button
                    // boxShadow={"md"}
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
                    <Avatar size={"md"} src={user.image} />
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
                      onClick={handleProfile}
                      leftIcon={<Icon as={AiFillDashboard} color={"red"} />}
                      _hover={{
                        bg: "none",
                      }}
                    >
                      پروفایل
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
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardNav;
