import React from 'react'
import BackgroundRippleEffectDemo from "@/components/ui/BackgroundRippleEffectDemo";
import{ CardHoverEffectDemo} from "@/components/Home/Skills/Skillsdata"
import Services from '@/components/Home/services/services';
const page = () => {
  return (
    <>
       <BackgroundRippleEffectDemo />
        <CardHoverEffectDemo/>
        <Services/>
       
      
    </> 
  );
};

export default page;

