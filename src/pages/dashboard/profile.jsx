import DashboardLayout from "@/components/DashboardLayout";
import UpdateProfileForm from "@/components/Forms/UpdateProfileForm";
import { Container, Heading } from "@chakra-ui/react";

const ProfilePage = function () {
  return (
    <DashboardLayout>
      <Container maxW={990}>
        <Heading as="h1" p="8">
          تغییر مشخصات
        </Heading>
        <UpdateProfileForm />
      </Container>{" "}
    </DashboardLayout>
  );
};

export default ProfilePage;
