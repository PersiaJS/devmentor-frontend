import { Text } from '@chakra-ui/react';
import { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedText = isTruncated ? text.slice(0, maxLength) : text;

  return (
    <div>
      <Text>{truncatedText}</Text>
      {text.length > maxLength && (
        <button style={{color: 'blue'}} onClick={toggleTruncate}>
          {isTruncated ? 'ادامه مطلب' : 'کمتر بخوانید'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;