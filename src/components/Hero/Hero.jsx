import Image from "next/image";
import {
  AspectRatio,
  Badge,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
const { Container, Box, Link } = require("@chakra-ui/react");

const Hero = ({ title, description, textOfMentorLogo }) => {
  return (
    <>
      <Box as="section" bg="bg-surface">
        <Box
          position="relative"
          height={{
            lg: "720px",
          }}
        >
          <Container
            marginInlineEnd={{
              sm: "auto",
              md: "auto",
              lg: "0%",
              xl: "5%",
            }}
            py={{
              base: "16",
              md: "24",
            }}
            height="full"
          >
            <Stack
              direction={{
                base: "column",
                lg: "row",
                xl: "row", // Add this line
              }}
              spacing={{
                base: "16",
              }}
              align={{
                xl: "center",
                lg: "center",
                md: "center",
              }}
              height="full"
            >
              <Stack
                spacing={{
                  base: "8",
                  md: "12",
                }}
              >
                <Stack spacing="4">
                  <Badge
                    colorScheme="blue"
                    alignSelf="center"
                    size={useBreakpointValue({
                      base: "md",
                      md: "lg",
                    })}
                    borderRadius={5}
                    fontSize="2xl"
                    p={2}
                    mb={4}
                  >
                    مربی خودت رو انتخاب کن
                  </Badge>
                  <Stack
                    spacing={{
                      base: "4",
                      md: "6",
                    }}
                    maxW={{
                      md: "xl",
                      lg: "md",
                      xl: "xl",
                    }}
                  >
                    <Heading
                      as="h1"
                      size={useBreakpointValue({
                        base: "md",
                        md: "xl",
                      })}
                      textAlign="center"
                      lineHeight={10}
                      fontSize="4xl"
                      fontWeight="bold"
                      fontFamily="Vazir"
                    >
                      تمرین ، دیدن ویدیو آموزشی نظرت در مورد داشتن منتور چیه؟
                    </Heading>
                    <Text
                      fontSize={{
                        base: "lg",
                        md: "xl",
                      }}
                      color="muted"
                      textAlign="center"
                      lineHeight={10}
                    >
                      با کمک منتورها مسیرت رو کوتاه کن ، از منتور های ما کمک
                      بگیر و چیزای خارق‌العاده خلق کن.
                    </Text>
                  </Stack>
                </Stack>
                <Stack
                  direction={{
                    base: "column",
                    md: "row",
                  }}
                  spacing="3"
                  mr="auto"
                  ml="auto"
                >
                  <Button
                    variant="solid"
                    size={useBreakpointValue({
                      base: "lg",
                      md: "xl",
                    })}
                    px="45px"
                    py="20px"
                    bgColor="red.300"
                  >
                    منتورها
                  </Button>
                  <Button
                    variant="outline"
                    size={useBreakpointValue({
                      base: "lg",
                      md: "xl",
                    })}
                    px="45px"
                    py="20px"
                  >
                    مطالعه بیشتر
                  </Button>
                </Stack>
              </Stack>
              <Box
                pos={{
                  lg: "absolute",
                }}
                right="0"
                bottom="0"
                w={{
                  base: "auto",
                  lg: "50%",
                }}
                height={{
                  base: "96",
                  lg: "auto",
                }}
              >
                <Img
                  borderRadius={50}
                  boxSize="full"
                  objectFit="cover"
                  src="/images/hero_photo2.avif"
                  alt="developer"
                />
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default Hero;
