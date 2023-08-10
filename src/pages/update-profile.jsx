import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

import Cookies from "universal-cookie";
import { Container, Heading } from "@chakra-ui/react";

import Layout from "@/components/Layout/Layout";
import UpdateProfileForm from "@/components/Forms/UpdateProfileForm";
import useCustomToast from "@/hooks/useCutomToast";

const UpdateProfile = () => {
  const cookie = new Cookies();
  const router = useRouter();

  const toast = useCustomToast();

  useLayoutEffect(() => {
    const token = cookie.get("auth");

    if (!token) {
      router.push("/auth/login");
      toast("لطفا ابتدا وارد حساب کاربری خود شوید", "error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
