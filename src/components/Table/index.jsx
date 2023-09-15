import { FiSearch } from "react-icons/fi";

import {
  Button,
  HStack,
  Text,
  Box,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  ButtonGroup,
  Stack,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import { MemberTable } from "../MemberTable";

const TableUI = function () {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container
      maxWidth="container.xl"
      py={{ base: "4", md: "8" }}
      px={{ base: "0", md: 8 }}
    >
      <Box
        bg="bg.surface"
        boxShadow={{ base: "none", md: "sm" }}
        borderRadius={{ base: "none", md: "lg" }}
      >
        <Stack spacing="5">
          <Box px={{ base: "4", md: "6" }} pt="5">
            <Stack
              direction={{ base: "column", md: "row" }}
              justify="space-between"
            >
              <Text textStyle="lg" fontWeight="medium">
                Members
              </Text>
              <InputGroup maxW="xs">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="fg.muted" boxSize="5" />
                </InputLeftElement>
                <Input placeholder="Search" />
              </InputGroup>
            </Stack>
          </Box>
          <Box overflowX="auto">
            <MemberTable />
          </Box>
          <Box px={{ base: "4", md: "6" }} pb="5">
            <HStack spacing="3" justify="space-between">
              {!isMobile && (
                <Text color="fg.muted" textStyle="sm">
                  Showing 1 to 5 of 42 results
                </Text>
              )}
              <ButtonGroup
                spacing="3"
                justifyContent="space-between"
                width={{ base: "full", md: "auto" }}
                variant="secondary"
              >
                <Button>Previous</Button>
                <Button>Next</Button>
              </ButtonGroup>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default TableUI;