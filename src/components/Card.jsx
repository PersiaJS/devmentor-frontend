import {
  Card as ChakraCard,
  CardBody,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";

const Card = () => {
  return (
    <Container maxW="5xl">
      <Flex flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
        <ChakraCard m={4} w="36" bgColor="blue.300">
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </ChakraCard>
        <ChakraCard m={4} w="36" bgColor="blue.300">
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </ChakraCard>
        <ChakraCard m={4} w="36" bgColor="blue.300">
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </ChakraCard>
        <ChakraCard m={4} w="36" bgColor="blue.300">
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </ChakraCard>
        <ChakraCard m={4} w="36" bgColor="blue.300">
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </ChakraCard>
      </Flex>
    </Container>
  );
};

export default Card;
