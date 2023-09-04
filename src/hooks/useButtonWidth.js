import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@chakra-ui/react";

export const useButtonWidth = () => {
  const buttonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState("0");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isLargerThan768) {
      setButtonWidth("300px");
    } else {
      setButtonWidth("475px");
    }
  }, [isLargerThan768, buttonWidth]);

  return { buttonWidth, buttonRef };
};
