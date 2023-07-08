import { Text } from '@chakra-ui/react';
import styles from "./Hero.module.css";
const { Container, Box , Image, Link  } = require("@chakra-ui/react");



const Hero = ({title, description, textOfMentorLogo}) => {
    return(
        <Box className={styles.hero_section}>
            <Container maxW='4xl' centerContent>
                <Box className={styles.top_hero}>
                    <Text 
                        as='b' 
                        fontSize='4xl' 
                        textAlign='center'
                    >
                        {title}
                    </Text>
                </Box>
                <Box className={styles.middle_hero} mx="auto">
                    <Text 
                        fontSize='xl' 
                        textAlign='center'
                    >
                        {description}
                    </Text>
                </Box>
                <Box className={styles.buttom_hero}  mx="auto">
                    <Text 
                        fontSize='md'
                        textAlign='center'
                    >
                        {textOfMentorLogo}
                    </Text>
                    <Box className={styles.hero_icon}>
                        <Link href='#' isExternal>
                            <Image src='/mentor-logos/google-logo.svg' alt='google logo' w="70px" mt="6"/>
                        </Link>
                        <Link href='#' isExternal>
                            <Image src='/mentor-logos/microsoft-logo.svg' alt='microsoft logo' w="70px" mt="6"/>
                        </Link>
                        <Link href='#' isExternal>
                            <Image src='/mentor-logos/airbnb-logo.svg' alt='airbnb logo' w="70px" mt="6"/>
                        </Link>
                        <Link href='#' isExternal>
                            <Image src='/mentor-logos/netflix-logo.svg' alt='netflix logo' w="70px" mt="6"/>
                        </Link>
                        <Link href='#' isExternal>
                            <Image src='/mentor-logos/uber-logo.svg' alt='uber logo' w="70px" mt="6"/>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
export default Hero;