import {
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";

export const CheckboxFilter = (props) => {
  const {
    options,
    label,
    hideLabel,
    spacing = "2",
    showSearch,
    ...rest
  } = props;
  return (
    <Stack as="fieldset" spacing={spacing}>
      {!hideLabel && (
        <FormLabel fontWeight="semibold" as="legend" mb="0">
          {label}
        </FormLabel>
      )}
      {showSearch && (
        <InputGroup size="md" pb="1" mb="15px">
          <Input
            placeholder="افزودن مهارت"
            rounded="md"
            color="gray.400"
            borderColor="gray.300"
            shadow="sm"
            _placeholder={{ fontSize: "13px" }}
          />
        </InputGroup>
      )}
      <CheckboxGroup {...rest}>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            value={option.value}
            paddingBottom="10px"
            paddingRight="5px"
            colorScheme="blue"
          >
            <span>{option.label}</span>
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Stack>
  );
};
