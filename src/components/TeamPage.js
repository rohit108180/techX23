import React, { useEffect, useState } from "react";
import InitialLoader from "./Loader/InitialLoader";
import Navbar from "./navbar/Navbar"
import TeamMembers from "./TeamMembers";
import Footer from "./Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'

function TeamPage() {

    useEffect(()=>{
        AOS.init({duration:1500});
    },[]);


 


  return (

        <>
       
                    <Navbar />
                    <TeamMembers />
                    <Footer />
            
        </>
    );
}

export default TeamPage;