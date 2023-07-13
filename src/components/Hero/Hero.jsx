import { Button, Text } from "@chakra-ui/react";
import styles from "./Hero.module.css";
import Link from "next/link";
const { Container, Box } = require("@chakra-ui/react");

const Hero = ({ title, description, textOfMentorLogo }) => {
  return (
    <Box className={styles.hero_section}>
      <Container maxW="4xl" centerContent>
        <Box className={styles.top_hero}>
          <Text as="b" fontSize="4xl" textAlign="center">
            {title}
          </Text>
        </Box>
        <Box className={styles.middle_hero} mx="auto">
          <Text fontSize="xl" textAlign="center">
            {description}
          </Text>
        </Box>
        <Link href="/find-a-mentor">
          <Button colorScheme="red" variant="solid">
            {textOfMentorLogo}
          </Button>
        </Link>
      </Container>
    </Box>
  );
};
export default Hero;
