import {
  Box,
  Card,
  CardBody,
  HStack,
  Input,
  useColorModeValue as mode,
  Flex,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import {
  categoryFilter,
  mentorships,
  moreFilters,
  services,
  skills,
  topics,
} from "./_data";
import { CheckboxFilterPopover } from "./CheckBoxFilterPopover";
import { Search2Icon } from "@chakra-ui/icons";
import { MoreFilters } from "./MoreFilters";
import { MobileFilter } from "./MobileFilter";
import { ListBaseFilterPopover } from "./ListBaseFilterPopover";
export const Filter = function () {
  return (
    <Box>
      <Card
        w={{ lg: "full", xl: "full" }}
        borderRadius={0}
        shadow="sm"
        borderColor="#e2e8f0"
        py="8"
        mx="auto"
      >
        <CardBody mx="auto">
          <Flex
            justify="space-between"
            align="center"
            display={{
              md: "block",
              sm: "none",
              lg: "block",
              xl: "block",
            }}
          >
            <HStack justifyContent="space-between" mb={10}>
              <SimpleGrid minChildWidth="300px" columns={1}>
                <InputGroup size="lg" w="md" shadow="sm" borderColor="#d1d5db">
                  <Input type="text" placeholder="جستجو منتور" />
                  <InputLeftElement width="4.5rem">
                    <Search2Icon color="blue.500" />
                  </InputLeftElement>
                </InputGroup>
              </SimpleGrid>
              <SimpleGrid columns={1} w="fit-content">
                <ListBaseFilterPopover
                  isSuggestedMentor={true}
                  title="مرتب سازی براساس منتور پیشنهادی"
                  data={categoryFilter}
                />
              </SimpleGrid>
            </HStack>
            <HStack
              spacing={10}
              display={{ sm: "block", md: "block", xl: "flex", lg: "flex" }}
            >
              <Flex gap="8px" columns={7}>
                <ListBaseFilterPopover
                  title="دسته ها"
                  icon={false}
                  data={categoryFilter}
                />
                <CheckboxFilterPopover
                  title="مهارت"
                  data={skills}
                  showSearch={true}
                />
                <CheckboxFilterPopover title="موضوع" data={topics} />
                <CheckboxFilterPopover title="خدمات" data={services} />
                <MoreFilters
                  mt={{ md: "15px", lg: "0", xl: "0" }}
                  companies={moreFilters.companies}
                  settings={moreFilters.settings}
                  title="فیلترها"
                />
              </Flex>
              <SimpleGrid
                w={{ md: "fit-content" }}
                mt={{ md: "15px", lg: "0", xl: "0" }}
              >
                <ListBaseFilterPopover
                  title="منتورشیپ"
                  isMentorship={true}
                  icon={false}
                  data={mentorships}
                />
              </SimpleGrid>
            </HStack>
          </Flex>
          <MobileFilter />
        </CardBody>
      </Card>
    </Box>
  );
};
