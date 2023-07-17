const { Flex, Avatar, Text } = require("@chakra-ui/react");
const { AiOutlineUser, AiFillStar, AiOutlineStar } = require("react-icons/ai");

const ReviewCard = ({ name, image, text, rate, date }) => {
  const localDate = new Date(date * 1000)
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tehran",
  };
  const persianDate = localDate.toLocaleDateString("fa-IR-u-ca-persian", options);
  return (
    <Flex position="relative" my="2.5rem" flexDir="column">
      <Flex>
        <Avatar
          bg="gray.200"
          icon={<AiOutlineUser color="#666" fontSize="1.5rem" />}
          src={image && image}
        />
        <Flex flexDir="column" ms="1rem">
          <Flex alignItems="center">
            <Text fontSize="lg" fontWeight="bold">
              {name}
            </Text>
            <Text ms="8px">{persianDate}</Text>
          </Flex>
          <Flex>
            <div>
              {rate >= 1 ? (
                <AiFillStar color="#4BB543" />
              ) : (
                <AiOutlineStar color="#4BB543" />
              )}
            </div>
            <div>
              {rate >= 2 ? (
                <AiFillStar color="#4BB543" />
              ) : (
                <AiOutlineStar color="#4BB543" />
              )}
            </div>
            <div>
              {rate >= 3 ? (
                <AiFillStar color="#4BB543" />
              ) : (
                <AiOutlineStar color="#4BB543" />
              )}
            </div>
            <div>
              {rate >= 4 ? (
                <AiFillStar color="#4BB543" />
              ) : (
                <AiOutlineStar color="#4BB543" />
              )}
            </div>
            <div>
              {rate >= 5 ? (
                <AiFillStar color="#4BB543" />
              ) : (
                <AiOutlineStar color="#4BB543" />
              )}
            </div>
          </Flex>
        </Flex>
      </Flex>
      <Text mt="1rem">{text}</Text>
    </Flex>
  );
};

export default ReviewCard;
