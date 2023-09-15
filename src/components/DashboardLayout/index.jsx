"use client";
import {
  Box,
  Container,
  Flex,
  Grid,
  Stack,
  useBreakpoint,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import DashboardNav from "../DashboardNav";
import { useEffect, useState } from "react";
import useBetterMediaQuery from "@/hooks/userBetterMediaQuery";
const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };
const DashboardLayout = function ({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  let [variants, setVariants] = useState();
  let isLargerThan768 = useBetterMediaQuery("(min-width:768px)");
  useEffect(() => {
    if (isLargerThan768) {
      setVariants(mdVariant);
    } else {
      setVariants(smVariant);
    }
  }, [isLargerThan768]);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <>
      <DashboardNav
        showSidebarButton={variants?.navigationButton}
        onShowSidebar={toggleSidebar}
      />
      <Flex>
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Container maxW="full" overflow="hidden">
          <Stack maxW="full">{children}</Stack>
        </Container>
      </Flex>
    </>
  );
};

export default DashboardLayout;
