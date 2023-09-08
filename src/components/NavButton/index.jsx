import { Button, HStack, Icon, Text } from "@chakra-ui/react";

export const NavButton = (props) => {
  const { icon, url, label, ...buttonProps } = props;
  return (
    <Button
      as="a"
      variant="ghost"
      textColor="gray.600"
      justifyContent="start"
      {...buttonProps}
      href={url}
    >
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};
