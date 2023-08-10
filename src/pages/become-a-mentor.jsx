import Head from "next/head";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import {
  Box,
  Heading,
  Progress,
  Step,
  StepIcon,
  StepIndicator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

import Layout from "@/components/Layout/Layout";
import AboutYouStep from "@/components/BecomeAMentor/AboutYouStep";
import ProfileStep from "@/components/BecomeAMentor/ProfileStep";
import ExperienceStep from "@/components/BecomeAMentor/ExperienceStep";
import ApplyingMentor from "@/components/ApplyingMentor";
import client from "@/utils/axios";
import { useRouter } from "next/router";

const BecomeAMentor = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const cookies = new Cookies();

  const handleNextStep = () => {
    setCurrentStep((step) => step + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((step) => step - 1);
  };

  const steps = [
    { id: 0, title: "درباره شما" },
    { id: 1, title: "پروفایل" },
    { id: 2, title: "تجربه" },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const activeStepText = steps[currentStep]?.title;

  const max = steps.length - 1;
  const progressPercent = (currentStep / max) * 100;

  const token = cookies.get("auth");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Become a mentor | Devmentor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {currentStep !== 3 && (
        <Layout>
          <>
            <Heading as="h1" size="lg" my="8">
              به عنوان منتور درخواست دهید
            </Heading>
            <Box position="relative" my="12">
              <Stepper size="sm" index={currentStep} gap="0" colorScheme="red">
                {steps.map((step, index) => (
                  <Step key={step.id} gap="0">
                    <StepIndicator bg="white">
                      <StepStatus complete={<StepIcon />} />
                    </StepIndicator>
                    <Box position="absolute" right={-6} top={6} px="4">
                      <StepTitle>{step.title}</StepTitle>
                    </Box>
                  </Step>
                ))}
              </Stepper>
              <Progress
                value={progressPercent}
                position="absolute"
                height="3px"
                width="full"
                top="10px"
                zIndex={-1}
                colorScheme="red"
              />
            </Box>
          </>
          {currentStep === 0 ? (
            <AboutYouStep onNext={handleNextStep} />
          ) : currentStep === 1 ? (
            <ProfileStep onBack={handlePrevStep} onNext={handleNextStep} />
          ) : currentStep === 2 ? (
            <ExperienceStep onBack={handlePrevStep} onNext={handleNextStep} />
          ) : null}
        </Layout>
      )}

      {currentStep === 3 && <ApplyingMentor />}
    </>
  );
};

export default BecomeAMentor;
