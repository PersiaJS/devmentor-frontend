import { ListItem } from "@chakra-ui/react";

export const ListPickerItem = (props) => {
  const { value, label } = props;

  return (
    <ListItem
      py="5px"
      pr="10px"
      cursor="pointer"
      _hover={{ backgroundColor: "#f3f4f6" }}
    >
      {label}
    </ListItem>
  );
};
