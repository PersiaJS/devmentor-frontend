import {
  Stack,
  Flex,
  Box,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Drawer,
} from "@chakra-ui/react";

import { NavButton } from "../NavButton";
import {
  AiFillCloseCircle,
  AiFillFileMarkdown,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillSetting,
  AiFillTwitterCircle,
  AiOutlineBarChart,
  AiOutlineHome,
} from "react-icons/ai";
import { BsBookmarkCheck, BsCalendar2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const SidebarContent = ({ variant }) => {
  return (
    <Box w="300px">
      <Flex
        flex="1"
        minH={variant !== "drawer" ? "100vh" : ""}
        border={variant !== "drawer" ? "1px solid" : ""}
        borderColor="gray.200"
        borderRight="none"
        borderTop="none"
        borderBottom="none"
        py={{
          base: "6",
          sm: "8",
        }}
        pr={{
          base: "4",
          sm: "6",
        }}
      >
        <Stack justify="space-between" spacing="1" width="fit-content">
          <Stack spacing="8" shouldWrapChildren>
            <Stack spacing="1">
              <NavButton label="داشبورد" icon={AiOutlineHome} />
              <NavButton
                label="کلاس های من"
                icon={AiOutlineBarChart}
                aria-current="page"
              />
            </Stack>
            <Stack>
              <Stack spacing="1">
                <NavButton label="اطلاعات شخصی" icon={AiFillFileMarkdown} />
                <NavButton label="استادهای نشان شده" icon={BsBookmarkCheck} />
                <NavButton label="تقویم کلاس ها" icon={BsCalendar2} />
              </Stack>
            </Stack>
            <Stack>
              <Stack spacing="1">
                <NavButton label="پشتیبانی" icon={BiSupport} />
                <NavButton label="تنظیمات" icon={AiFillSetting} />
                <NavButton label="خروج" icon={AiFillCloseCircle} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

const Sidebar = function ({ isOpen, variant, onClose }) {
  return variant === "sidebar" ? (
    <Box>
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <SidebarContent variant={variant} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
