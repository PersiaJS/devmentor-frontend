import {
  Box,
  HStack,
  Icon,
  ModalOverlay,
  Text,
  useColorModeValue as mode,
  useDisclosure,
} from "@chakra-ui/react";

import useFilterState from "@/hooks/useFilterState";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useButtonWidth } from "@/hooks/useButtonWidth";
import { MoreCheckboxFilter } from "../MoreCheckboxFilter";
import { useState } from "react";

export const MoreFilters = ({ companies, settings }) => {
  const Backdrop = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const state = useFilterState({
    onSubmit: console.log,
  });
  const { buttonWidth, buttonRef } = useButtonWidth();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<Backdrop />);
  if (!companies && !settings) return null;
  return (
    <>
      <HStack
        onClick={() => {
          setOverlay(<Backdrop />);
          onOpen();
        }}
        as="button"
        justify="center"
        align="center"
        position="relative"
        fontSize={{ base: "sm", lg: "12px", xl: "14px", md: "12px" }}
        borderWidth="1px"
        zIndex="11"
        rounded="full"
        paddingStart="1.25rem"
        paddingEnd="0.5rem"
        paddingY="0.75rem"
        paddingBottom="0.5rem"
        spacing="1"
        backgroundColor={"#ffffff"}
        _expanded={{
          bg: mode("gray.200", "gray.700"),
        }}
        _hover={{ backgroundColor: "gray.200" }}
      >
        <Box flex="1">
          <Text fontWeight="medium" color={"black"}>
            فیلترها
          </Text>
        </Box>
        <Box paddingLeft="20px">
          <Icon as={HiAdjustmentsHorizontal} fontSize="xl" color="blue.500" />
        </Box>
      </HStack>
      <MoreCheckboxFilter
        hideLabel
        value={state.value}
        onChange={(v) => state.onChange(v)}
        companies={companies}
        settings={settings}
        overlay={overlay}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
