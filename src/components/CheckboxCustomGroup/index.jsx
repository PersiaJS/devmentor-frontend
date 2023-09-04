import { Checkbox, CheckboxGroup, SimpleGrid, Text } from "@chakra-ui/react";

const CheckboxCustomGroup = ({ title, options, ...rest }) => (
  <SimpleGrid columns={rest.columns}>
    <Text as="h3" mb={5} fontWeight="extrabold" fontSize="2xl">
      {title}
    </Text>
    <br />
    <CheckboxGroup {...rest}>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          value={option.value}
          paddingBottom="10px"
          paddingRight="5px"
          colorScheme="blue"
          mb={4}
        >
          <span>{option.label}</span>
        </Checkbox>
      ))}
    </CheckboxGroup>
  </SimpleGrid>
);

export default CheckboxCustomGroup;
