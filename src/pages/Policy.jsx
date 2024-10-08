import React from "react";
import PrivacyPolicy from "../components/privacypolicy/PrivacyPolicy";
import WhatsAppButton from "../components/WhatsAppButton";
import BackToTop from "../components/BackToTop";

const Policy = () => {
  return (
    <div>
      <PrivacyPolicy />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Policy;
