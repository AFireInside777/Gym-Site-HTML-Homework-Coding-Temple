import React from 'react'
import ActiveDiv from '../components/ActiveDiv'
import {acttree} from '../assets/data/AboutPageData.ts'
import pricingbg from "../assets/images/PricingGymPic.jpg"

function About() {

  const actmap = () =>{
      return (
      <div className="uk-container uk-width-1-1" id="actsContainer">
        {acttree.map((act) => <ActiveDiv theprops = {act}/>)}
      </div> 
    )} 
      

  return (
    <div id="aboutpage">
        <div className="uk-card uk-width-1-1 uk-margin-large-bottom uk-height-medium" style={{"border": "2px red solid","backgroundImage": `url(${pricingbg})`, "backgroundPosition": "52% 75%"}}>
          <div className="uk-text-bolder" style={{"marginLeft": "12%", "marginTop":"5%", "fontSize":"65px", "color":"whitesmoke"}}>Boxing + Strength Training Just Works!</div>
        </div>
        <p className="alignmentClass" style={{"fontSize":"25px"}}>Boxing combined with strength training promotes fat loss while simultaneously getting stronger. We here at Work Train Fight have been changing the lives of New Yorkers in the SoHo/Noho area since 2009.</p>
        <h1 className="alignmentClass"> What We Offer:</h1>
        {actmap()}
    </div>
  )
}

export default About