import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";

const SiteBreadcrumb = function () {
  return (
    <Breadcrumb
      spacing="8px"
      mb={10}
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <AiFillHome />
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">احسان گازار</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">جلسه آنلاین</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">بررسی رزومه</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">رزرو</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default SiteBreadcrumb;
