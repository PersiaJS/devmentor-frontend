import { FormControl, List, VStack, useRadioGroup } from "@chakra-ui/react";
import { ListPickerItem } from "../ListPickerItem";

export const ListPicker = (props) => {
  const { options, rootProps, ...rest } = props;
  const { getRadioProps, getRootProps } = useRadioGroup(rest);
  return (
    <FormControl {...rootProps}>
      <VStack {...getRootProps()} p={0}>
        <List spacing={1} w="full">
          {options.map((option) => (
            <ListPickerItem
              key={option.value}
              label={option.label}
              {...getRadioProps({
                value: option.value,
              })}
            />
          ))}
        </List>
      </VStack>
    </FormControl>
  );
};
