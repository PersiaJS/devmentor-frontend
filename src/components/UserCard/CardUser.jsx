import { Box, Avatar, Text, Flex, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const CardUser = ({ name, image, bio, linkedin, github }) => {
  return (
    <Flex
    minH="205"
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg="white"
      boxShadow="md"
      w="100%"
      role="group"
      height="100%"
      justifyContent="space-between"
    >
      <Box>
        <Avatar
          cursor="pointer"
          size="2xl"
          name={name || "ممکن است شما باشید؟"}
          src={image ? `/team/${image}` : "mentor.jpg"}
          borderRadius="lg"
          _groupHover={{ transform: "translateY(-3px)" }}
          transition="all 0.4s ease-in-out"
        />
        <Flex mt={4} justifyContent="center">
          {linkedin && (
            <Link
              href={linkedin}
              isExternal
              mx={2}
              _hover={{ color: "blue.200" }}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          )}
          {github && (
            <Link
              href={github}
              isExternal
              mx={2}
              _hover={{ color: "blue.200" }}
              target="_blank"
            >
              <FaGithub />
            </Link>
          )}
        </Flex>
      </Box>

      <Box ml={4} textAlign="left">
        <Text fontSize="xl" fontWeight="bold">
          {name || "ممکن است شما باشید؟"}
        </Text>
        <Text color="gray.600" mt={2}>
          {bio ||
            "منبع باز است، بنابراین به ما بپیوندید و در کد ما مشارکت کنید."}
        </Text>
      </Box>
    </Flex>
  );
};

export default CardUser;
