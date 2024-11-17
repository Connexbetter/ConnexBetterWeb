import React from 'react';
import { offers } from '../../Constant';
import { chooseConnex } from '../../Constant';
import ContentImageBlock from "../CommonComponents/ContentImageBlock";
import Boxcontainer from '../CommonComponents/Boxcontainer';
import Sms from '../Sms';
import { sms } from '../../Constant';
function Home() {

 return (
    <section className='hero-section section'>
    <Boxcontainer heading="What we Offers" para="We offer a full suite of communication APIs designed to connect businesses with customers. Our services include:" carddata={ offers}></Boxcontainer>
    <Boxcontainer heading="Why do businesses choose Connex Better" para="Connex Better provides reliable communication solutions and seamless API integration, ensuring smooth operations and enhanced customer interactions." carddata={chooseConnex }></Boxcontainer>
    <div className='container'>
  <ContentImageBlock subheading="Get Started Today" heading="Start sending SMS with Connex Better for free " content="Sign up today and create your perfect customer engagement experience."></ContentImageBlock>

  </div>



  </section>
  )
}

export default Home



