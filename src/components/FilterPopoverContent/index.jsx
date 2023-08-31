import { PopoverBody, PopoverContent, PopoverHeader } from "@chakra-ui/react";

export const FilterPopoverContent = (props) => {
  const { header, children, isListItem = false, buttonWidth } = props;
  return (
    <PopoverContent
      _focus={{ shadow: "none", outline: 0 }}
      _focusVisible={{ shadow: "outline" }}
      py={2}
      w={buttonWidth}
    >
      {header && <PopoverHeader srOnly>{header}</PopoverHeader>}
      {isListItem ? (
        <PopoverBody paddingX="0" marginX={0} paddingY={"0.25rem"}>
          {children}
        </PopoverBody>
      ) : (
        <PopoverBody paddingX="3" marginX={0} paddingY={"0.25rem"}>
          {children}
        </PopoverBody>
      )}
    </PopoverContent>
  );
};
