import { useToast } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast = useToast();

  return (title, status) =>
    toast({
      title,
      status,
      duration: 4000,
      position: "bottom-right",
      variant: "left-accent",
    });
};

export default useCustomToast;
