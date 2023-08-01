import Image from "next/image";
import {
  Badge,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
const { Container, Box } = require("@chakra-ui/react");

const Hero = () => {
  return (
    <>
      <Box as="section" bg="bg-surface">
        <Box
          position="relative"
          height={{
            md: "720px",
          }}
        >
          <Container height="full" maxW="full">
            <Grid
              templateColumns={{
                base: "1fr",
                md: "1fr",
                sm: "1fr",
                xs: "1fr",
                lg: "1fr 1fr",
                xl: "1fr 1fr",
              }}
              direction={{
                base: "column",
                lg: "row",
                xl: "row",
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
              <Box
                mt="50"
                order={{ base: "1", md: "2", sm: "2", xs: "2", lg: "1" }}
              >
                <Img
                  borderRadius={50}
                  boxSize="full"
                  objectFit="cover"
                  src="/images/hero_photo2.avif"
                  alt="developer"
                  h={{ lg: "full", sm: "400px" }}
                  w={{ lg: "auto", sm: "full" }}
                />
              </Box>
              <Stack order={{ base: "2", md: "1", sm: "1", xs: "1" }}>
                <Stack spacing="4" mt="auto" mb={5} mr="auto" ml="auto">
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
                  mb="auto"
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
            </Grid>
          </Container>
        </Box>
      </Box>
      <Container maxW="full" py={8} mt={{ md: "50px" }}>
        <Flex mx="auto" justifyContent="space-around">
          <Box>
            <Img
              alt="snapp logo"
              src="/images/snapp_logo.png"
              w="150px"
              height="auto"
              mt={6}
            />
          </Box>
          <Box>
            <Img
              alt="filimo logo"
              src="/images/filimo_logo.png"
              w="150px"
              height="auto"
              mt={6}
            />
          </Box>

          <Box>
            <Img
              alt="alibaba logo"
              src="/images/alibaba_logo.png"
              w="80px"
              height="auto"
              mt={6}
            />
          </Box>
          <Box>
            <Img
              alt="tapsi logo"
              src="/images/tapsi_logo.png"
              w="150px"
              height="auto"
              mt={10}
            />
          </Box>
          <Box>
            <Img
              alt="taghcheh logo"
              src="/images/taghcheh_logo.png"
              w="60px"
              height="auto"
              mt={8}
            />
          </Box>
        </Flex>
      </Container>
    </>
  );
};
export default Hero;
