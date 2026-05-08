export const PHONE_NUMBER = "+91 84018 85805";
export const PHONE_TEL = "+918401885805";
export const WHATSAPP_NUMBER = "918401885805";

export const ADDRESS = "Radhe Jewellers, Near Shikotar Temple, opp. Panchal Vash, Mandvichok, Bhadaj Village, Ahmedabad";
export const MAPS_QUERY = encodeURIComponent("Radhe Jewellers, Near Shikotar Temple, Panchal Vash, Mandvichok, Bhadaj Village, Ahmedabad");

export const whatsappLink = (message = "Hello, I am interested in your jewellery") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
