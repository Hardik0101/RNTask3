import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import ObScreen from "../components/ui/ObScreen";

const OnBoardingScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  // Define your onboarding steps
  const onboardingSteps = [
    {
      image: require("../assets/images/step1.png"),
      text: 'Welcome to our app! Get started by clicking "Next".',
    },
    {
      image: require("../assets/images/step1.png"),
      text: "Explore our amazing features!",
    },
    {
      image: require("../assets/images/step1.png"),
      text: 'Ready to go! Click "Finish" to start using the app.',
    },
  ];

  return (
    <View style={styles.container}>
      <ObScreen
        image={onboardingSteps[currentStep].image}
        text={onboardingSteps[currentStep].text}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnBoardingScreen;
