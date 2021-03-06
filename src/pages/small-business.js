import React from 'react'
import Link from 'gatsby-link'

import LandingPage from '../components/LandingPage'
import Benefits from '../components/Benefits'
import CallToAction from '../components/CallToAction'
import LeftFeatures from '../components/LeftFeatures'
import RightFeatures from '../components/RightFeatures'
import Slidy from '../components/Slidy'
import SocialValidation from '../components/SocialValidation'

import features from '../styles/FeatureStyles.module.css'

import merchant from '../img/merchant.jpg'
import featureOneImage from '../img/undraw_experts3_3njd.svg'
import featureTwoImage from '../img/undraw_invite_i6u7.svg'
import leftSide from '../img/leftside.png'
import haltech from '../img/haltech.png'
import icube from '../img/icube.png'
import startupSchool from '../img/startupschool.png'
import sheridanEntrepreneurs from '../img/sheridanentrepreneurs.png'
import scribble from '../img/scribble.svg'
import chartwells from '../img/chartwells.svg'
import homedepot from '../img/homedepot.svg'
import instacart from '../img/instacart.svg'
import ymca from '../img/ymca.svg'
import airmiles from '../img/airmiles.svg'



const SmallBusiness = () => (
  <div>
    <LandingPage
      heroTitle="Easily access, and hire local young talent"
      heroSubTitle="We have thousands of candidates ready and waiting"
      reRouteButton="I'm a student"
      image={merchant}
      showHeroMask={false}
      centerHeroContainer={true}
      hasPolygon={false}
    />


    <SocialValidation
      header=""
      logos={ 
        {
          'one': ['#', scribble], 
          'two': ['#', chartwells], 
          'three': ['#', homedepot], 
          'four': ['#', instacart],
          'five': ['#', ymca], 
          'six': ['#', airmiles], 
 
        } 
      }
    />
     <CallToAction
      header='Get help and save money with UnivJobs'
      subHeader='UnivJobs makes it easy to find affordable talent locally'
      buttonText='Try it now!'
      alt={true}
    />

    <Benefits/>

    <CallToAction
        header='Get local brand awareness virtually with UnivJobs'
        subHeader='UnivJobs shows your company logo in front of thousands of job seekers.'
        buttonText='Post a job now'
        alt={true}
    />

    <Slidy/>
   </div>

)

export default SmallBusiness
