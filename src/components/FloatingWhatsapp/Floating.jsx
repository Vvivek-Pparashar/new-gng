import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Floating = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+91 74048 04048"
      accountName="GNG"
      statusMessage='Online'
      notification='true'
      allowClickAway
      notificationSound

      style={{zIndex:"100000"}}
    />
  );
};

export default Floating;
