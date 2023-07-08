import { FormControl, List, VStack, useRadioGroup } from "@chakra-ui/react";
import { ListPickerItem } from "../ListPickerItem";

export const ListPicker = (props) => {
  const { options, rootProps, hideLabel, label, ...rest } = props;
  const { getRadioProps, getRootProps, value } = useRadioGroup(rest);
  const selectedOption = options.find((option) => option.value == value);
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
