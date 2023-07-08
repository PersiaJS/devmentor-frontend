import * as React from "react";
import {
  Box,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  categoryFilter,
  mentorships,
  moreFilters,
  services,
  skills,
  topics,
} from "../_data";
import { Search2Icon } from "@chakra-ui/icons";
import { MoreFilters } from "../MoreFilters";
import { PiSortAscending } from "react-icons/pi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { CheckboxFilterPopover } from "../CheckBoxFilterPopover";
import { ListBaseFilterPopover } from "../ListBaseFilterPopover";

export const MobileFilter = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const filterHandler = function () {
    setIsOpen(!isOpen);
  };
  return (
    <VStack
      display={{
        md: "none",
        xl: "none",
        lg: "none",
      }}
    >
      <SimpleGrid w="full" mb="20px">
        <InputGroup size="lg" w="30rem" shadow="sm" borderColor="#d1d5db">
          <Input type="text" placeholder="جستجو منتور" />
          <InputLeftElement width="4.5rem">
            <Search2Icon color="blue.500" />
          </InputLeftElement>
        </InputGroup>
      </SimpleGrid>
      <SimpleGrid w="full" gap={2}>
        <ListBaseFilterPopover
          title="مرتب سازی براساس منتور پیشنهادی"
          icon={PiSortAscending}
          isSuggestedMentor={true}
          data={categoryFilter}
        />

        <SimpleGrid w="full" gap={2} display={isOpen ? "grid" : "none"}>
          <CheckboxFilterPopover title="مهارت" data={skills} />
          <CheckboxFilterPopover title="موضوع" data={topics} />
          <CheckboxFilterPopover title="خدمات" data={services} />
          <MoreFilters
            mt={{ md: "15px", lg: "0", xl: "0" }}
            companies={moreFilters.companies}
            settings={moreFilters.settings}
            title="فیلترها"
          />
          <ListBaseFilterPopover
            title="منتورشیپ"
            isMentorship={true}
            icon={false}
            data={mentorships}
          />
        </SimpleGrid>
        <HStack
          onClick={filterHandler}
          justify="center"
          align="center"
          position="relative"
          as="button"
          fontSize={{ base: "sm", lg: "12px", xl: "14px", md: "12px" }}
          borderWidth="1px"
          zIndex="11"
          rounded="full"
          paddingStart="1.25rem"
          paddingEnd="0.5rem"
          paddingY="0.75rem"
          paddingBottom="0.5rem"
          spacing="1"
          borderColor="#d1d5db"
          _hover={{ bgColor: "#e5e7eb" }}
          backgroundColor="#f3f4f6"
        >
          <Box flex="1">
            <Text fontWeight="medium" color="black">
              {isOpen ? "بستن نتایج" : "نمایش نتایج"}
            </Text>
          </Box>

          <Box paddingLeft="20px">
            {isOpen ? (
              <Icon as={HiChevronUp} fontSize="xl" color="blue.500" />
            ) : (
              <Icon as={HiChevronDown} fontSize="xl" color="blue.500" />
            )}
          </Box>
        </HStack>
      </SimpleGrid>
    </VStack>
  );
};
