import {
  Avatar,
  Box,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiBell, FiSearch } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../Logo/logo";
const DashboardNav = function ({ showSidebarButton = true, onShowSidebar }) {
  return (
    <Box as="section" maxW="full">
      <Box borderBottomWidth="1px" bg="bg.surface">
        <Container py="4" maxW="full">
          <HStack justify="space-between">
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
              <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardNav;
