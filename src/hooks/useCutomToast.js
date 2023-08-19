import { useToast } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast = useToast();

  return (title, status) =>
    toast({
      title,
      status,
      duration: 4000,
      position: "top",
      variant: "left-accent",
    });
};

export default useCustomToast;
