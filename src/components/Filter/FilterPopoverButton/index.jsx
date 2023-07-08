import {
  HStack,
  useColorModeValue as mode,
  Icon,
  PopoverTrigger,
  Text,
  Box,
} from "@chakra-ui/react";

import { HiChevronDown } from "react-icons/hi";

export const FilterPopoverButton = (props) => {
  const {
    label,
    icon,
    selected,
    isMentorship = false,
    isSuggestedMentor = false,
    buttonRef,
  } = props;
  return (
    <PopoverTrigger>
      <HStack
        ref={buttonRef}
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
        borderColor={isMentorship ? "blue.500" : "#d1d5db"}
        data-selected={selected || undefined}
        _expanded={{
          bg: mode("gray.200", "gray.700"),
        }}
        _selected={{
          bg: "blue.50",
          borderColor: "blue.500",
        }}
        backgroundColor={isSuggestedMentor ? "#f3f4f6" : "white"}
      >
        <Box flex="1">
          <Text fontWeight="medium" color={isMentorship ? "blue.500" : "black"}>
            {label}
          </Text>
        </Box>

        <Box paddingLeft="20px">
          {icon ? (
            <Icon as={icon} fontSize="xl" color="blue.500" />
          ) : (
            <Icon as={HiChevronDown} fontSize="xl" color="blue.500" />
          )}
        </Box>
      </HStack>
    </PopoverTrigger>
  );
};
