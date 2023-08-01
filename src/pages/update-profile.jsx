import Layout from "@/components/Layout/Layout";
import { Container, Heading } from "@chakra-ui/react";

import UpdateProfileForm from "@/components/Forms/UpdateProfileForm";

const UpdateProfile = () => {
  return (
    <Layout>
      <Container maxW={990}>
        <Heading as="h1" p="8">
          تغییر مشخصات
        </Heading>
        <UpdateProfileForm />
      </Container>
    </Layout>
  );
};

export default UpdateProfile;
