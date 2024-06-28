import React from 'react'
import weblogo from '../assets/images/wtflogo.jpg'
import appstore from '../assets/images/app-store.jpg'
import googlestore from '../assets/images/google-play.jpg'

function ActFooter() {
  return (
    <div className="uk-container uk-width-1-1 uk-margin-small-top uk-flex-column" style={{"paddingLeft": "20px", "paddingRight": "20px"}}>
        <div className="uk-card uk-background-secondary uk-border-pill" id="footerDiv">
            <img src={weblogo} width="100" height="100"/>
        </div>
        <div className="uk-card uk-flex-column" id="footerDiv">
            <h2 style={{"width":"maxContent", "marginLeft": "auto", "marginRight":"auto","marginBottom":"1px"}}>Like and Follow Us on Social Media!</h2>
            <div className="uk-card uk-flex uk-flex-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-plain.svg" className="smimages"/>
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" className="smimages"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="smimages"/>
            </div>
        </div>
        <div className="uk-card" id="footerDiv">
            <div className="uk-card uk-flex uk-flex-row">
                <p className="contact">636 Broadway, 2nd Floor, NYC</p>
                <p className="contact">Email: Info@WorkTrainFight.com / Tel: 646-727-4660</p>
            </div>
        </div>
        <div className="uk-card" id="footerDiv">
            <div className="uk-card uk-flex uk-flex-row">
                <p className="contact">Working Hours:</p>
                <p className="contact">Mon - Thurs: 6am - 10pm</p>
                <p className="contact">Fri: 6am - 8pm</p>
                <p className="contact">Sat: 8am - 5pm</p>
                <p className="contact">Sun: 9am - 4pm</p>
            </div>
        </div>
        <div className="uk-card" id="footerDiv">
            <div className="uk-card uk-flex uk-flex-row">
                <p className="contact">Download our App!</p>
                <img src={appstore} className="smimages2"/>
                <img src={googlestore} className="smimages2"/>
            </div>
        </div>
    </div>
  )
}

export default ActFooter