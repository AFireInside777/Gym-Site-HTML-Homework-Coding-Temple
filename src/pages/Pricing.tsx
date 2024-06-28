import ClassPackages from "../components/ClassPackages"
import GymAccess from "../components/GymAccess"
import Memberships from "../components/Memberships"
import PersonalTraining from "../components/PersonalTraining"
import SemiPrivatePackages from "../components/SemiPrivatePackages"
import pricingbg from "../assets/images/PricingGymPic.jpg"

function Pricing() {
   

  return (
    
    <div className="uk-container uk-width-1-1" id="pricingDiv">

      <div className="uk-card uk-width-1-1 uk-margin-large-bottom uk-height-medium" style={{"backgroundImage": `url(${pricingbg})`, "backgroundPosition": "52% 75%"}}>
        <div className="uk-text-bolder" style={{"marginLeft": "28%", "marginTop":"3%", "fontSize":"125px", "color":"whitesmoke"}}>Pricing Plans</div>
      </div>

      <div className="uk-card uk-width-1-1 uk-flex uk-flex-row uk-border-rounded uk-background-secondary uk-padding-small" id="promoBox">

        <div style={{"width": "20%"}} className="uk-border-rounded uk-margin-auto-top uk-margin-auto-bottom">
          <p className="uk-text-success uk-text-lead">WTF PROMOS FOR NEW CLIENTS ONLY</p>
        </div>

        <div className="uk-card uk-flex uk-flex-column" style={{"width":"80%"}}>

          <div className="uk-card uk-flex uk-flex-row uk-margin-small-bottom uk-background-default uk-border-rounded uk-padding-small">

            <div className="uk-card uk-flex uk-flex-column">
              <h1 className="uk-text-danger">
                $97.00
              </h1>
              <p className="uk-border-rounded uk-background-secondary " style={{"color": "whitesmoke", "textAlign":"center"}}>One Package per Customer</p>
            </div>

            <div style={{"paddingLeft":"10px"}}>
              <p className="uk-text-bold uk-margin-remove-bottom">New to WTFPromo</p>
              <p className="uk-margin-remove-top">30 Day Expiration.</p>
              <p>1 package per customer, must show ID at first visit. Verify phone and email upon arrival.</p>
              <p style={{"height":"maxContent","marginTop":"2px", "marginBottom":"2px"}}>First Month Includes:</p>
              <p style={{"height":"maxContent","marginTop":"2px", "marginBottom":"2px"}}><i className="fas fa-check" style={{"color": "#df2a2a"}}></i>1 Pair of WTF handwraps <span className="uk-text-bold">($15 value)</span></p>
              <p style={{"height":"maxContent","marginTop":"2px", "marginBottom":"2px"}}><i className="fas fa-check" style={{"color": "#df2a2a"}}/>2 Semi-Private Training Sessions <span className="uk-text-bold">($120 value)</span></p>
              <p style={{"height":"maxContent","marginTop":"2px", "marginBottom":"2px"}}><i className="fas fa-check" style={{"color": "#df2a2a"}}/>3 Classes <span className="uk-text-bold">($132 value)</span></p>
              <button className="uk-button uk-button-default uk-button-danger uk-border-rounded uk-width-1-2">Buy Now</button>
            </div>

          </div>
          <div className="uk-card uk-flex uk-flex-row uk-background-default uk-border-rounded uk-padding-small">

            <div className="uk-card uk-flex uk-flex-column">
              <h1 className="uk-text-danger">
                $57.00
              </h1>
              <p className="uk-border-rounded uk-background-secondary " style={{"color": "whitesmoke", "textAlign":"center"}}>One Package per Customer</p>
            </div>

            <div style={{"paddingLeft":"10px"}}>
              <p className="uk-text-bold uk-margin-remove-bottom">Personal Training Promo</p>
        
              <p>1 package per customer, must show ID at first visit. Verify phone and email upon arrival.</p>
              <p style={{"height":"maxContent","marginTop":"2px", "marginBottom":"2px"}}>This intro offer can only be used once by new clients.</p>
              <button className="uk-button uk-button-default uk-button-danger uk-border-rounded uk-width-1-2">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    <Memberships/>
    <ClassPackages/>
    <GymAccess/>
    <SemiPrivatePackages/>
    <PersonalTraining/>
    </div>
  )
}

export default Pricing