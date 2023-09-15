"use client";
import { Center, Container, Flex, Spinner, Stack } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import DashboardNav from "../DashboardNav";
import { useEffect, useState } from "react";
import useBetterMediaQuery from "@/hooks/userBetterMediaQuery";
import useDashboardData from "@/hooks/useDashboardData";
const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };
const DashboardLayout = function ({ children }) {
  const { dashboardData, error, isLoading } = useDashboardData();
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
  if (isLoading)
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="lg"
        />
      </Center>
    );

  if (error) {
    <Center>مشکلی در دریافت اطلاعات بوجود آمده</Center>;
  }
  return (
    <>
      {dashboardData.menu && (
        <>
          <DashboardNav
            showSidebarButton={variants?.navigationButton}
            onShowSidebar={toggleSidebar}
          />
          <Flex>
            <Sidebar
              menu={dashboardData.menu}
              variant={variants?.navigation}
              isOpen={isSidebarOpen}
              onClose={toggleSidebar}
            />

            <Container maxW="full" overflow="hidden">
              <Stack maxW="full">{children}</Stack>
            </Container>
          </Flex>
        </>
      )}
    </>
  );
};

export default DashboardLayout;
