// Heropage images
import smsicon from "../assets/HomeImages/SmsSVG.svg";
//import {Lottie} from "lottie-react";
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
import doublewaylogo from "../assets/SMS-20241116T100910Z-001/SMS/Lottie/2_way_messaging.json"
import email_to_sms from "../assets/SMS-20241116T100910Z-001/SMS/Lottie/email_to_sms.json"
//import longcode_service from "../assets/SMS-20241116T100910Z-001/SMS/Lottie/longcode_sevice.json"
import sms_2fa from "../assets/SMS-20241116T100910Z-001/SMS/Lottie/sms_2fa.json"
import sms_marketing from "../assets/SMS-20241116T100910Z-001/SMS/Lottie/sms_marketing.json"
import transectional_sms from "../assets/SMS-20241116T100910Z-001/SMS/Lottie/transactional_sms.json"
import execute from "../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Lottie/Execute.json"
import flows from "../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Lottie/flows.json"
import interact from "../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Lottie/Interact.json"
import notify from "../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Lottie/Notify.json"
import retrieve from "../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Lottie/Retrieve.json"
import automatic from "../assets/Email-20241116T100907Z-001/Email/Lottie/Automated.json"
import exciting  from "../assets/Email-20241116T100907Z-001/Email/Lottie/Exciting.json"
import Otp from "../assets/Email-20241116T100907Z-001/Email/Lottie/Otp.json"
import action from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/action.json"
import brand from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/brand.json"
import card from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/Cards.json"
import corousels from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/Carousels.json"
import media from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/media.json"
import suggested from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/suggested.json"
//sms authentication otp
import sms_Otp from "../assets/smsOtp/Image/otp.svg"
import report from "../assets/smsOtp/Image/report.svg"
import route from "../assets/smsOtp/Image/route.svg"
import time from "../assets/smsOtp/Image/time.svg"
import user from "../assets/smsOtp/Image/user.svg"
import validity from "../assets/smsOtp/Image/validity.svg"
//international sms
import easy from "../assets/InternationalSms/Image/easy.svg"
import engage from "../assets/InternationalSms/Image/engage.svg"
import enhance from "../assets/InternationalSms/Image/enhance.svg"
import integration from "../assets/InternationalSms/Image/integration.svg"
import payment from "../assets/InternationalSms/Image/payment.svg"
import secure from "../assets/InternationalSms/Image/secure.svg"
//bulk sms
import double from "../assets/bulkSms/Image/doubleWayMessage.svg"
import emailToSms from "../assets/bulkSms/Image/emailToSms.svg"
import longService from "../assets/bulkSms/Image/longService.svg"
import marketSms from "../assets/bulkSms/Image/marketSms.svg"
import sms2Fa from "../assets/bulkSms/Image/sms2Fa.svg"
import smstrans from "../assets/bulkSms/Image/smsTrans.svg"
//big image rcs
import boost from "../assets/RCS-20241116T061300Z-001/RCS/Images/boost.webp"
import deploy from "../assets/RCS-20241116T061300Z-001/RCS/Images/deploy.webp"
import lowLatency from "../assets/RCS-20241116T061300Z-001/RCS/Images/lowLatency.webp"
import reliable from "../assets/RCS-20241116T061300Z-001/RCS/Images/lowLatency.webp"
import visually from "../assets/RCS-20241116T061300Z-001/RCS/Images/visually.webp"
//big image whatsApp
import collect from "../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Images/collect.webp"
import rich from "../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Images/rich.webp"
import safety from "../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Images/safety.webp"
import varified from "../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Images/varified.webp"

import colletctdataimg from "../assets/SMS-20241116T100910Z-001/SMS/Images/Collect data, analyse insights and take action.webp";
import powerupimg from "../assets/SMS-20241116T100910Z-001/SMS/Images/Power Up Your Customer Engagement with Smart SMS Solutions.webp";
import reliableimg from "../assets/SMS-20241116T100910Z-001/SMS/Images/Reliable, Low-Latency Messaging for Global Reach with Seamless Fallback Mechanism.webp";
import scaleengageimg from "../assets/SMS-20241116T100910Z-001/SMS/Images/Scale Engagement with Secure, Compliant 2-Way SMS Conversations.webp";
import { Carousel } from "bootstrap";
// Heropage Data===============================================
// Navbar data==
export const navbardata = [
  {
    path: "/",
    linkname: "Home",
    arrowlogo:false
  },
  {
    path: "/",
    linkname: "Products",
    arrowlogo:true
  },
  {
    path: "/About",
    linkname: "About",
    arrowlogo:true
  },
  {
    path: "/Pricing",
    linkname: "Pricing",
    arrowlogo:false
  },
  {
    path: "/Contact",
    linkname: "Contact",
    arrowlogo:false
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

// Home page Blog ======================
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
  id:1,
   img: sms_2fa,
    title: "SMS 2FA",
    content:
      "Keep your customers' accounts safe with SMS 2FA (two-factor authentication) or SMS OTP to enhance security.",
    isImageOrLottie:true
    },
    {
      id:2,
      img: transectional_sms,
       title: "Transactional SMS",
       content:
         "Set up automated SMS flows, like welcome messages, order confirmations, updates, and more.",
      isImageOrLottie:true
        },
       {
        id:3,
        img: sms_marketing,
         title: "SMS marketing",
         content:
           "Enhance your conversion rates significantly by implementing personalized, automated SMS marketing campaigns.",
           isImageOrLottie:true
          },
    {
      id:4,
      img: "",
       title: "Longcode Services",
       content:
         "Boost your brand’s visibility and elevate customer engagement with dedicated longcode solutions.",
         isImageOrLottie:true
        },
       {
        id:5,
        img:email_to_sms,
         title: "Email-to-SMS Solution",
         content:
           "Keep your customers' accounts safe with SMS 2FA (two-factor authentication) or SMS OTP to enhance security.",
           isImageOrLottie:true
          },
     
      {
        id:6,
        img: doublewaylogo,
         title: "2-Way Messaging",
         content:
         "Accelerate communication and enable real-time customer interaction with seamless 2-way messaging solutions.",
         isImageOrLottie:true
        },


]

export const sms = [
  {
    img:powerupimg,
    title: "Power Up Your Customer Engagement with Smart SMS Solutions",
    content:
      "Enhance customer experience with personalized SMS campaigns and real-time alerts. Reach wide audiences with targeted bulk messaging for launches, offers, deals, and codes. Ensure reliable delivery of important messages using our advanced system. Improve SMS marketing with trackable URL links for optimized content and performance tracking",
    contentOnLeft:true
  },
  {
    img:reliableimg,
    title:
      "Reliable, Low-Latency Messaging for Global Reach with Seamless Fallback Mechanism",
    content:
      "Achieve timely global communication with our enterprise-grade platform, featuring low-latency delivery and automatic fallback to voice and WhatsApp. Monitor message delivery in real time with a live dashboard, and send and receive messages in various languages, thanks to Unicode support for regional characters.",
    contentOnLeft:false
    },
  {
    img:colletctdataimg,
    title: "Collect data, analyse insights and take action",
    content:
      "Keep an eye on how well your SMS campaigns are doing. By looking closely at the results, you can see which strategies work best for your audience. This knowledge helps you create better campaigns that boost engagement and conversion rates.",
    contentOnLeft:true
    },
  {
    img:scaleengageimg,
    title: "Scale Engagement with Secure, Compliant 2-Way SMS Conversations",
    content:
      "Utilize two-way SMS to actively encourage engagement and collect valuable feedback or insights from customers across the globe.",
    contentOnLeft:false
    },
];



export const smsOtp=[
  {
    img: "",
    title: "Login",
    content:
      "A customer securely logs in by entering their username and password, ensuring authorized access to their account and services",
    contentOnLeft:true
  },
  {
    img: "",
    title: "2FA",
    content:
      "The customer receives a 2FA SMS containing their unique one-time pin (OTP), providing an additional layer of security for the login process.",
    contentOnLeft:false
  },
  {
    img: "",
    title: "OTP",
    content:
      "The user enters the OTP into the login page, completing the authentication process and gaining secure access to their account.",
    contentOnLeft:true
  },
  {
    img: "",
    title: "Authentication",
    content:
      "They have successfully verified their identity, completing the authentication process and gaining secure access to their account.",
    contentOnLeft:false
  },
]

export const smsOtpBox=[
  {
    id:1,
    img: time,
     title: "Time Guarantee",
     content:
       "Ensure 99% OTP SMS delivery in 5-10 seconds for secure logins. Enhance user experience with reliable authentication!",
  },
  {
    id:2,
    img:user,
     title: "User Authentication",
     content:
       "Verify identities and reduce impersonation risks with 2FA, ensuring enhanced security for your applications.",
  },
  {
    id:3,
    img: route,
     title: "Dedicated Routes",
     content:
       "Send OTPs securely with dedicated carrier routing for fast, reliable delivery, enhancing user experience and security.",
  },
  {
    id:4,
    img: sms_Otp,
     title: "OTP Length​",
     content:
       "Customize OTP lengths with options for 4-digit or 6-digit codes, tailored to suit your security and user preferences.",
  },
  {
    id:5,
    img: report,
     title: "Reports & Analytics",
     content:
       "Intuitive dashboards for easy monitoring, management, and reporting to boost efficiency and decision-making.",
  },
  {
    id:6,
    img: validity,
     title: "Validity Period",
     content:
       "Customize OTP validity with options for seconds, minutes, or hours, ensuring security for your authentication.",
  },
]


export const internationalSmsBox=[
  {
    id:1,
    img: enhance,
    title: "Enhance customer loyalty and trust",
    content:
      "Build strong relationships with secure, timely communications through our international SMS API, fostering customer trust and loyalty.",
  
  },
  {
    id:2,
    img: engage,
    title: "Engage with your subscribers",
    content:
      "Connect with your audience globally using personalized SMS, boosting engagement and interaction with real-time updates and promotions.",
    
  },
  {
    id:3,
    img: easy,
    title: "Easy & Reliable Customer Feedback",
    content:
      "Collect valuable customer insights through quick and reliable SMS feedback, streamlining responses and improving service quality.",
    
  },
  {
    id:4,
    img: secure,
    title: "Secure and scalable",
    content:
      "Ensure the security and scalability of your communications with our robust international SMS API, handling high volumes securely and efficiently.",
    
  },
  {
    id:5,
    img: payment,
    title: "Payment Collections",
    content:
      "Simplify payment reminders and collections with our SMS API, ensuring timely payments and improving cash flow through easy customer communication.",
    
  },
  {
    id:6,
    img: integration,
    title: "Integrations",
    content:
      "Seamlessly integrate our international SMS API with your existing platforms, enhancing communication workflows for smooth and efficient operations.",
    
  },


]

export const internationalSms=[
  {
    img: "",
    title: "Save Time with Our Business Process Streamlining Software",
    content:
      "Streamline your business operations and save time with our software, designed to optimize team management and improve efficiency for businesses of any size.",
    contentOnLeft:true
  },
  {
    img: "",
    title: "Comprehensive Technology Suite for Efficient Operations",
    content:
      "Our robust technology suite provides all the tools you need to manage your team, operations, and processes seamlessly, helping you scale your business effectively.",
    contentOnLeft:false
  },
  {
    img: "",
    title: "Connect Instantly with Customers, Employees, and Partners",
    content:
      "Leverage our world-class network to reach customers, employees, and partners effortlessly with just one click, ensuring quick and reliable communication across your business ecosystem.",
    contentOnLeft:true
  }
]


export const bulkSms=[
  {
    img: "",
    title: "Power Up Your Customer Engagement with Smart SMS Solutions",
    content:
      "Enhance customer experience with personalized SMS campaigns and real-time alerts. Reach wide audiences with targeted bulk messaging for launches, offers, deals, and codes. Ensure reliable delivery of important messages using our advanced system. Improve SMS marketing with trackable URL links for optimized content and performance tracking.",
    contentOnLeft:true
  },
  {
    img: "",
    title: "Reliable, Low-Latency Messaging for Global Reach with Seamless Fallback Mechanism",
    content:
      "Achieve timely global communication with our enterprise-grade platform, featuring low-latency delivery and automatic fallback to voice and WhatsApp. Monitor message delivery in real time with a live dashboard, and send and receive messages in various languages, thanks to Unicode support for regional characters.",
    contentOnLeft:false
  },
  {
    img: "",
    title: "Collect data, analyse insights and take action",
    content:
      "Keep an eye on how well your SMS campaigns are doing. By looking closely at the results, you can see which strategies work best for your audience. This knowledge helps you create better campaigns that boost engagement and conversion rates.",
    contentOnLeft:true
  },
  {
    img: "",
    title: "Scale Engagement with Secure, Compliant 2-Way SMS Conversations",
    content:
      "Utilize two-way SMS to actively encourage engagement and collect valuable feedback or insights from customers across the globe.",
    contentOnLeft:false
  },
]

export const bulkSmsBox=[
  {
    id: 1,
    img: sms2Fa,
    title: "SMS 2FA",
    content:
      "Keep your customers' accounts safe with SMS 2FA (two-factor authentication) or SMS OTP to enhance security.",
  },
  {
    id: 2,
    img: smstrans,
    title: "Transactional SMS",
    content:
      "Set up automated SMS flows, like welcome messages, order confirmations, updates, and more.",
  },
  {
    id: 3,
    img: marketSms,
    title: "SMS marketing",
    content:
      "Enhance your conversion rates significantly by implementing personalized, automated SMS marketing campaigns.",
  },
  {
    id: 4,
    img: longService,
    title: "Longcode Services",
    content:
      "Boost your brand’s visibility and elevate customer engagement with dedicated longcode solutions.",
  },
  {
    id: 5,
    img: emailToSms,
    title: "Email-to-SMS Solution",
    content:
      "Utilize Email-to-SMS for seamless communication, sending emails directly as SMS to specific mobile numbers for flexibility and ease.",
  },
  {
    id: 6,
    img: double,
    title: "2-Way Messaging",
    content:
      "Accelerate communication and enable real-time customer interaction with seamless 2-way messaging solutions.",
  },
]



// Rcs box container ===================================================== 
export const rcsbox = [
  {
    id:1,
    img: media,
    title: "Rich Media",
    content:
      "Share media like images and videos, allowing customers to review and choose multiple products or services.",
      isImageOrLottie:true
    },
  {
    id: 2,
    img: brand,
    title: "Branded communications",
    content:
      "Boost your brand with captivating and engaging visuals. This enhances recognition and connects deeply with users.",
      isImageOrLottie:true
    },
  {
    id: 3,
    img:action,
    title: "Actionable Buttons",
    content:
      "Provide actionable buttons to easily enable purchases, product/services options, polling, and feedback.",
      isImageOrLottie:true
    },
  {
    id: 4,
    img: corousels,
    title: "Carousels",
    content:
      "Combine up to 10 rich cards into an interactive unit for customers to swipe through. A small step in selecting the best offer.",
      isImageOrLottie:true
    },
  {
    id: 5,
    img:card ,
    title: "Cards",
    content:
      "Engage in meaningful conversations with customers by utilizing rich, interactive content for two-way communication.",
      isImageOrLottie:true
    },
  {
    id:6,
    img: suggested,
    title: "Suggested replies",
    content:
      "Provide suggested replies that can effectively accelerate customer engagements quickly and efficiently.",
      isImageOrLottie:true
    },
];

export const rcs=[
  
  {
    id:1,
    img:visually ,
    title: "Visually showcase feature products and services",
    content:
      "Ensure that your messages resonate with your brand identity by incorporating RCS-enabled brand elements. This includes prominently displaying your logo, brand name, and color palette on the screen. By doing so, you create a cohesive visual experience that reinforces your brand's presence and makes your communications instantly recognizable to your audience.",
    contentOnLeft:true
  },
  {
    id:2,
    img: deploy,
    title: "Deploy RCS campaigns with precision",
    content:
      "unch campaigns across iOS and Android devices from a single platform. Schedule messages to reach customers at optimal times. Manage multilingual content easily for global campaigns. Track performance with granular reporting on message engagement and journey progression.",
    contentOnLeft:false
  },
  {
    id:3,
    img: reliable,
    title: "Reliable Messaging with Seamless Fallback Mechanism",
    content:
      "Ensure your messages always reach your audience with our advanced fallback capabilities. When RCS messages encounter delivery issues, they automatically switch to SMS, WhatsApp, or even voice calls, guaranteeing communication continuity",
    contentOnLeft:true
  },
  {
    id:4,
    img: lowLatency,
    title: "Reliable, Low-Latency Messaging for Global Reach Personalize your offers and increase revenue",
    content:
      "Understand your customers’ interests, identify their needs, and personalize your communication, building lasting relationships that drive loyalty.",
    contentOnLeft:false
  },
  {
    id:5,
    img: boost,
    title: "Boost response rates effectively with clickable buttons",
    content:
      "Allow customers to respond simply by clicking a button embedded within the conversation. Make it easier for them to reply and improve your interactions.",
    contentOnLeft:true
  },

]

export const whatsAppBox=[
  {
    id: 1,
    img:"",
    title: "Promotional Messages ",
    content:
      "Send exciting offers, discount codes, and festival wishes without risking your number!",
    isImageOrLottie:true
    },
  {
    id: 2,
    img:notify,
    title: "Notify ",
    content:
      "Send out notifications eg. periodic account summary, policy expiry, delivery tracking information.",
      isImageOrLottie:true
    },
  {
    id: 3,
    img: execute,
    title: "Execute ",
    content:
      "Carry out transactions such as travel bookings, rescheduling a delivery and account opening.",
      isImageOrLottie:true
    
    },
  {
    id: 4,
    img: flows,
    title: "Flows",
    content:
      "Minimize friction in messages. Provide customized booking and feedback experiences.",
      isImageOrLottie:true
    },
  {
    id: 5,
    img: retrieve,
    title: "Retrieve ",
    content:
      "Get account balance, profile info, warranty details, tracking updates.",
      isImageOrLottie:true
    },
  {
    id: 6,
    img: interact,
    title: "Interact ",
    content:
      "Assist customers with their questions, concerns, and clarifications.",
      isImageOrLottie:true
    },

]

export const whatsApp=[

  {
    id:1,
    img: rich,
    title: "Rich Media Messaging",
    content:
      "It enables businesses to send engaging, interactive messages beyond traditional text. It combines multimedia elements such as images, videos, and clickable buttons directly within SMS or messaging apps. This approach allows for dynamic content delivery, creating a visually rich experience that’s more interactive and memorable for users.",
    contentOnLeft:true
  },
  {
    id:2,
    img: varified,
    title: "Verified Business",
    content:
      "When you set up a business account, you have to add a number, website and other details associated with your business that customers can easily access. This information has to be authorized by WhatsApp to verify the authenticity of the information.",
    contentOnLeft:false
  },
  {
    id:3,
    img: safety,
    title: "Safety first always",
    content:
      "WhatsApp values the privacy and security of customer data. Messages between WhatsApp users are protected with an end-to-end encryption protocol so that WhatsApp themselves and any third party cannot get access to the message.",
    contentOnLeft:true
  },
  {
    id:4,
    img: collect,
    title: "Collect Data, Analyze Insights, and Take Action with WhatsApp Business API",
    content:
      "WhatsApp Business API offers insights to help businesses understand customer interactions and improve engagement. Its analytics tools allow companies to collect data on delivery rates, response times, and preferences, enabling informed decisions and optimized communication strategies.",
    contentOnLeft:false
  },

]

export const emailBox=[
  {
    id:1,
    img: Otp,
    title: "OTP, Transactional alerts and Messaging ",
    content:
      "ntegrate our emailing solution with your app for OTP verification, authentication, or sending critical updates.",
      isImageOrLottie:true
    },
  {
    id:2,
    img:automatic,
    title: "Automated batch emails with attachment",
    content:
      "Automate batch email processing for invoices and reports using our reliable APIs with no integration effort.",
      isImageOrLottie:true
    },
  {
    id:3,
    img: exciting,
    title: "Exciting Promotional Campaigns ",
    content:
      "Schedule and send out advance email campaigns connecting with our rich and intuitive GUI design.",
      isImageOrLottie:true
    },
  
]

export const email=[
  {
    img: "",
    title: "Create personalized and engaging emails",
    content:
      "Leverage rich media capabilities like carousels, QR codes, and quick reply buttons. Create interactive product catalogues within messages. Enable location sharing and wallet integration for seamless customer experiences. Design personalized content for every user.",
    contentOnLeft:true
  },
  {
    img: "",
    title: "Collect data, analyse insights and take action",
    content:
      "Monitor the performance of every email you send out. By analyzing the results, you can discover which strategies resonate most with your audience. This insight will empower you to create and execute more impactful campaigns that drive engagement and conversions.",
    contentOnLeft:false
  },
  
]

export const voiceBox=[
  {
    id: "choose-1",
    img: savingicon,
    title: "Contact center solution",
    content:
      "It streamlines communication, reduces wait times, and provides real-time analytics. Its multichannel support and scalability enhance customer satisfaction and efficiency.",
  },
  {
    id: "choose-2",
    img: savingicon,
    title: "Voice OBD Services",
    content:
      "Voice OBD Service delivers automated voice messages to large audiences, enhancing customer engagement for promotions, alerts, reminders, and feedback collection.",
  },
  {
    id: "choose-3",
    img: savingicon,
    title: "Call Patching",
    content:
      "It transfers automated calls to agents, enhancing service with prompt assistance from knowledgeable reps. This improves response times and elevates the experience.",
  },
]

export const smsScroll = [
  {
    title: "Deliverability & Performance",
    content:
      "Look for a provider experienced in handling high message volumes, ideally with a cloud-based infrastructure or a strong presence in the CPaaS space. If a provider isn't transparent about their delivery rates, it could signal unreliable message delivery, which is a red flag.",
  },
  {
    title: "Scalability",
    content:
      "Choose a provider that can handle your current message volume and scale as your business grows. A provider that compromises performance for scalability may not support your long-term needs, making them a less ideal choice.",
  },
  {
    title: "Security",
    content:
      "Compliance with regulations like the EU’s GDPR is essential for any SMS service provider. Ensure their security measures meet industry standards, such as encryption, two-factor authentication, and secure data storage. A history of data breaches is a warning sign of inadequate security practices.",
  },
  {
    title: "Compliance",
    content:
      "When reaching out to a global audience, ensure your content complies with local SMS laws. Opt for a provider that understands SMS compliance and has experience in navigating international regulations, especially if they have offices in multiple countries.",
  },
  {
    title: "Coverage & Connections",
    content:
      "For a global customer base, choose an SMS provider with broad geographic coverage. Check their partnerships with local carriers. Providers with more direct connections to mobile network operators worldwide will ensure better reach and reliability.",
  },
  {
    title: "Routing",
    content:
      "Effective message routing ensures timely delivery. The optimal routing path depends on factors such as the message type (e.g., SMS OTPs need faster routes than promotional messages), customer location, and network congestion. Providers should also have backup routes to maintain reliability during carrier issues.",
  },
  {
    title: "Integrations",
    content:
      "Ensure the SMS provider integrates seamlessly with your existing systems, such as CRM, marketing automation, and customer support platforms. Compatibility is key to maintaining a smooth workflow without technical disruptions.",
  },
  {
    title: "API",
    content:
      "An easy-to-integrate SMS API is crucial. Providers offering comprehensive SDKs, detailed documentation, and active support forums show a commitment to helping your development team maximize their services' potential.",
  },
  {
    title: "Message Types & Features",
    content:
      "Understand the types of messages each provider supports and their customization options. Features like A/B testing, personalization, delivery tracking, and scheduling can enhance audience engagement and campaign effectiveness.",
  },
  {
    title: "Analytics & Reporting",
    content:
      "Choose a provider that offers robust analytics and reporting tools. Insights into delivery rates, customer engagement, and campaign performance can help optimize your SMS strategy.",
  },
  {
    title: "Customer Support",
    content:
      "Opt for a provider with responsive customer support, ideally with global offices for local language assistance and expertise in regulatory compliance.",
  },
  {
    title: "Trial & Testing",
    content:
      "Look for a provider that offers a demo or trial period. This allows you to evaluate their services before committing. Providers confident in their offerings will often provide free trials to help you assess compatibility and key features.",
  },
]

// FAQ of HOMEPAge
export const homeFAQ =[
  {
    id:"hFAQ1",
    que:"What is a cloud communication platform?",
    ans:"A cloud communication platform is an advanced technology that integrates real-time features like messaging, IVR, and video into your business applications. This enables seamless, contextual customer communication and provides numerous benefits for both businesses and customers."
  },
  {
    id:"hFAQ2",
    que:"What types of communication channels does a Cloud Communication Platform support?",
    ans:"Cloud Communication Platforms usually support a variety of channels, including bulk SMS, voice calls, bulk email marketing, WhatsApp CRM, WhatsApp Business API, and push notifications.We provides all these services. For more information, email us at Support@connexbetter.com"
  },
  {
    id:"hFAQ3",
    que:"What are the pricing options?",
    ans:"We have flexible pricing option for each of the communication. For detail pricing plan click on pricing."
  },
  {
    id:"hFAQ1",
    que:"What is a cloud communication platform?",
    ans:"A cloud communication platform is an advanced technology that integrates real-time features like messaging, IVR, and video into your business applications. This enables seamless, contextual customer communication and provides numerous benefits for both businesses and customers."
  },
  {
    id:"hFAQ1",
    que:"What is a cloud communication platform?",
    ans:"A cloud communication platform is an advanced technology that integrates real-time features like messaging, IVR, and video into your business applications. This enables seamless, contextual customer communication and provides numerous benefits for both businesses and customers."
  },


]


// Pricing box for SMS===========
export const smsprice=[
  // Started
  {
    id:"p1",
    heading1:"Started",
    heading2:"50,000 SMS",
    heading3:"1499/monthly",
    list1:"DLT Registration Support",
    list2:"API Integrations to converse across multiple channels",
    list3:"Personalize every message to increase response rates",
    list4:"24/7 Email Support",
    list5:"Real time Reports & Analytics, Downloadable Report",
    list6:"Easy to use Web-Panel",
    bestprice:false
  },
  // Growth
  {
    id:"p2",
    heading1:"Growth",
    heading2:"1,00,000 SMS",
    heading3:"1499/monthly",
    list1:"DLT Registration Support",
    list2:"API Integrations to converse across multiple channels",
    list3:"Personalize every message to increase response rates",
    list4:"24/7 Email Support",
    list5:"Real time Reports & Analytics, Downloadable Report",
    list6:"Easy to use Web-Panel",
    bestprice:true

  },
  // Enterprise
  {
    id:"p3",
    heading1:"Enterprise",
    heading2:"50,00,000 SMS",
    heading3:"",
    list1:"DLT Registration Support",
    list2:"API Integrations to converse across multiple channels",
    list3:"Personalize every message to increase response rates",
    list4:"24/7 Email Support",
    list5:"Real time Reports & Analytics, Downloadable Report",
    list6:"Easy to use Web-Panel",
    bestprice:false
  }

  

]
