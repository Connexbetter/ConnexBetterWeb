// Heropage images
import smsicon from "../assets/HomeImages/SmsSVG.svg";
import rcsicon from "../assets/HomeImages/RcsSVG.svg";
import whatsappicon from "../assets/HomeImages/WhatsappSVG.svg";
import emailicon from "../assets/HomeImages/EmailSVG.svg";
import voiceicon from "../assets/HomeImages/VoiceSVG.svg";
import savingicon from "../assets/homeImage/saving.svg";
import benifiticon from "../assets/homeImage/verticleLine.svg";
import needicon from "../assets/homeImage/boxPattern.svg";
import featureicon from "../assets/homeImage/concentricPoint.svg";
import onboarding from "../assets/homeImage/handShake.svg";
import supporticon from "../assets/homeImage/tapeRecord.svg";
import logo from "/logo.svg";
// Heropage Data===============================================
// Navbar data==
export const navbardata = [
  {
    path: "/",
    linkname: "Home",
  },
  {
    path: "/Service",
    linkname: "Service",
  },
  {
    path: "/About",
    linkname: "About",
  },
  {
    path: "/Pricing",
    linkname: "Pricing",
  },
  {
    path: "/Contact",
    linkname: "Contact",
  },
];
// What we offers====
export const offers = [
  {
    id: "offer-1",
    img: smsicon,
    title: "SMS API",
    content:
      "Send bulk SMS to boost customer interaction. Integrate SMS API into your applications for automated SMS and instant OTP delivery solutions.",
  },
  {
    id: "offer-2",
    img: rcsicon,
    title: "RCS",
    content:
      "Rich communication, verified sender info, better UX with rich media, boosted engagement, and real-time analytics with read receipts via Google Messages.",
  },
  {
    id: "offer-3",
    img: whatsappicon,
    title: "WhatsApp Business API",
    content:
      "Broadcast promotions, automate support, enhance engagement with chatbots and send automatic payment confirmations.",
  },
  {
    id: "offer-4",
    img: emailicon,
    title: "Email",
    content:
      "Enhance Engagement with Targeted Bulk Emails: High Open Rates, Real-Time Updates, and Personalized Marketing Campaigns.",
  },
  {
    id: "offer-5",
    img: voiceicon,
    title: "Voice",
    content:
      "Our IVR system offers cloud-based solutions to boost customer acquisition, enhance engagement, and improve ROI and efficiency.",
  }
];

// / Why do Businesses choose Connex Better ==================
export const chooseConnex = [
  {
    id: "choose-1",
    img: savingicon,
    title: "Maximize Your Savings by Cutting Costs by 27%.",
    content:
      "We optimizes spending with templates and channel selection for cost savings.",
  },
  {
    id: "choose-2",
    img: benifiticon,
    title: "Benefit from the Price Advantage: Save up to 24%.",
    content:
      "Our platform delivers immediate value with up to 24% cost reduction from day one.",
  },
  {
    id: "choose-3",
    img: needicon,
    title: "Everything You Need, All in One Place",
    content:
      "We offer comprehensive messaging solutions SMS, WhatsApp, RCS, IVR, and email.",
  },
  {
    id: "choose-4",
    img: featureicon,
    title: "More Features over any other Platform",
    content:
      "We provide a high-performance platform with advanced UI and API integrations.",
  },
  {
    id: "choose-5",
    img: onboarding,
    title: "Start Free Onboarding on Any Channel",
    content:
      "Join us for free onboarding, plus free credits and up to 9% extra savings.",
  },
  {
    id: "choose-6",
    img: supporticon,
    title: "Support You Can Count On: Always Here, 24/7.",
    content:
      "We trust our dedicated employees to provide exceptional enterprise solutions.",
  },
];

export const Insights = [
  {
    id: "choose-1",
    img: "",
    title: "Meet your Glide Certified community challenge winners",
    content:
      "Last month we announced Glide’s first level of certification. To celebrate the launch, we  challenged our Glide community members to share",

    date:"22 Nov 2023"
  },
  {
    id: "choose-2",
    img: "",
    title: "Meet your Glide Certified community challenge winners",
    content:
      "Last month we announced Glide’s first level of certification. To celebrate the launch, we  challenged our Glide community members to share",
      date:"22 Nov 2023"  
  },
  {
    id: "choose-3",
    img: "",
    title: "Everything You Need, All in One Place",
    content:
      "We offer comprehensive messaging solutions SMS, WhatsApp, RCS, IVR, and email.",
    date:"22 Nov 2023"  
  },
];

// Footer ==================================================================
export const footerpart = [
  {
    h: logo,
    l1: "Connect Better, Engage Better",
    l2: "Our services include Bulk SMS, OTP delivery, IVR, Voice OBD, SMS APIs, RCS Messaging, and WhatsApp integration.",
    l3: "",
    l4: "",
    l5: "",
  },
  {
    h: "Services",
    l1: "SMS API",
    l2: "WhatsApp Bussiness API",
    l3: "Email",
    l4: "Voice",
    l5: "RCS",
  },
  {
    h: "Company",
    l1: "About Us",
    l2: "Career",
    l3: "Blog",
    l4: "Privacy Policy",
    l5: "Terms & conditions",
  },
  {
    h: "Contact",
    l1: "Support@connex.com",
    l2: "Innov8, 3rd Floor, Plot No. 211, Okhla Phase 3 , Delhi 110020, IN",
    l3: "",
    l4: "",
    l5: "",
  },
];
// SMS page ================================================
export const smsProvider=[
  {
   img: "",
    title: "SMS 2FA",
    content:
      "Keep your customers' accounts safe with SMS 2FA (two-factor authentication) or SMS OTP to enhance security.",
    },
    {
      img: "",
       title: "Transactional SMS",
       content:
         "Set up automated SMS flows, like welcome messages, order confirmations, updates, and more.",
       },
       {
        img: "",
         title: "SMS marketing",
         content:
           "Enhance your conversion rates significantly by implementing personalized, automated SMS marketing campaigns.",
    },
    {
      img: "",
       title: "Longcode Services",
       content:
         "Boost your brand’s visibility and elevate customer engagement with dedicated longcode solutions.",
       },
       {
        img: "",
         title: "Email-to-SMS Solution",
         content:
           "Keep your customers' accounts safe with SMS 2FA (two-factor authentication) or SMS OTP to enhance security.",
      },
     
      {
        img: "",
         title: "2-Way Messaging",
         content:
           "Accelerate communication and enable real-time customer interaction with seamless 2-way messaging solutions.",
      },


]

export const sms = [
  {
    img: "",
    title: "Power Up Your Customer Engagement with Smart SMS Solutions",
    content:
      "Enhance customer experience with personalized SMS campaigns and real-time alerts. Reach wide audiences with targeted bulk messaging for launches, offers, deals, and codes. Ensure reliable delivery of important messages using our advanced system. Improve SMS marketing with trackable URL links for optimized content and performance tracking",
  },
  {
    img: "",
    title:
      "Reliable, Low-Latency Messaging for Global Reach with Seamless Fallback Mechanism",
    content:
      "Achieve timely global communication with our enterprise-grade platform, featuring low-latency delivery and automatic fallback to voice and WhatsApp. Monitor message delivery in real time with a live dashboard, and send and receive messages in various languages, thanks to Unicode support for regional characters.",
  },
  {
    img: "",
    title: "Collect data, analyse insights and take action",
    content:
      "Keep an eye on how well your SMS campaigns are doing. By looking closely at the results, you can see which strategies work best for your audience. This knowledge helps you create better campaigns that boost engagement and conversion rates.",
  },
  {
    img: "",
    title: "Scale Engagement with Secure, Compliant 2-Way SMS Conversations",
    content:
      "Utilize two-way SMS to actively encourage engagement and collect valuable feedback or insights from customers across the globe.",
  },
];
