import { offers,homeBox } from "../../Constant";
import { chooseConnex } from "../../Constant";
import { Insights } from "../../Constant";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import ContentImageBlock from "../CommonComponents/ContentImageBlock";
import Boxcontainer from "../CommonComponents/Boxcontainer";
import { Blogcontainer } from "../CommonComponents/Blogcontainer";
import { Button } from "../CommonComponents/Button";
import smscallimg from '../../assets/HomeImages/our feature.json';
import metalogo from "../../assets/HomeImages/Metalogo.svg";
import heromainimg from "../../assets/HomeImages/Hero.png"
import Lottie from "lottie-react";
import { useState,useEffect } from "react";
import { FAQ } from "../CommonComponents/FAQ";
import SequentialText from "../Textscroll";
import Range from "../../Range";

function Home() {


 
  return (
    <section className="hero-section section">
{/* hero image  */}
    <div className="container grid gap-4 md:grid-cols-2 items-center">
    <div className="content-sec flex flex-col gap-4">
    <p className="text-2xl md:text-3xl text-primery">Connect Better, Engage Better </p>
    <h1 className=" text-3xl flex font-normal md:text-5xl flex-col gap-2 ">
    <h2>Transform customer </h2>
    <h2>interactions with thoughtful</h2>
    <h2>intelligent communication</h2>
 
</h1>
    
    
    <SequentialText></SequentialText>
  <div><Button name="Contact us Now"></Button></div>
  </div>
    <div>
    <img src={heromainimg}></img>
    </div>
    <div><span className="text-[#555555] text-sm font-normal ">By clicking "Get a Demo" you agree to Connex Better </span><span className="text-[#1a1a1a] text-sm font-medium underline">Privacy Statement</span></div>

    </div>
    
{/* World's Most Advance Paasfor================ */}
    <div className="container grid gap-4 md:grid-cols-2 items-center">
    <div className="content-sec flex flex-col gap-2">
    <p className="text-2xl text-paracolor">World’s Most Advanced PaaS for<span className="text-primery ml-2">Enterprise Communications.</span> </p>
    <h2 className="text-3xl font-medium">SMS  | RCS | WhatsApp  |Email | Voice</h2>
    <div className="meta-logo-sec flex flex-col items-center justify-center h-28 w-28  rounded-full bg-secondary">
    <img src={metalogo} alt="Meta logo" height={10} width={30}></img>
    <p>Meta</p>
    <p className="text-center text-xs">Business Partner</p>
    </div>
    <div className="flex gap-6">
    <div><Button name="Contact us Now"></Button></div>
    <div><Button name="Shedule a Demo"></Button></div>
    </div>
    

    </div>
    <div>
      <Lottie animationData={smscallimg}></Lottie>

    </div>

    </div>

    {/* what We Offer container */}
      <Boxcontainer
        heading="What we Offers"
        para="We offer a full suite of communication APIs designed to connect businesses with customers.
     Our services include:"
        carddata={offers}
        showbutton={true}
      />

    {/* Why choose Connex Better container */}
      <Boxcontainer
        heading="Why do businesses choose Connex Better"
        
    para="Connex Better provides reliable communication solutions and seamless API integration, 
    ensuring smooth operations and enhanced customer interactions."
        carddata={chooseConnex}
        showbutton={false}
      />

    
      {/* Start sending SMS with Connex Better for Free container */}
     <div className="container">
        <ContentImageBlock
          subheading="Get Started Today"
          heading="Start sending SMS with Connex Better for free "
          
  content="Sign up today and create your perfect customer engagement experience."
          img=""
        />
        </div>

        <Boxcontainer
        heading="Boost revenue and grow business."
        para="Utilize our dependable AI platform designed to streamline the journey from discussions to successful conversions."
        carddata={homeBox}
        showbutton={false}
      />


        {/* Insights and Updates Container */}
        <div className="container">
        <CommonHeading h="Insights & Updates" p="Stay updated with the latest trends, tips, and guides on API solutions and business communication strategies."></CommonHeading>
        <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {
          Insights.map((ele,ind)=>{
            return(
              <Blogcontainer key={ind} title={ele.title} content={ele.content}></Blogcontainer>
            )
          })
        }

        </div>
   
        </div>
       
        <FAQ></FAQ>
        <Range></Range>
      


        

      </section>
  );
}

export default Home;
