import React from 'react'

function ClassPackages() {

    let classPstyle = {
        "marginTop":"2px", 
        "marginBottom":"1px", 
        "color":"whitesmoke"
    }

  return (
    <div className="uk-width-1-1 uk-margin-medium-top uk-flex uk-flex-row uk-height-medium  uk-margin-small-bottom" style={{"border":"2px blue solid", "height": "240px"}}>

        <div className="uk-card uk-height-1-1" style={{"border":"2px blue solid", "paddingLeft": "5px", "paddingRight": "5px", "width": "23%", "marginRight":"2px"}}>
            <h1 style={{ "marginTop":"30px"}}>Class Packages</h1>
            <p style={{"height": "50%"}} className="uk-text-large">Need more flexibility? Our class packages are designed for the occasional class user.</p>
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "15px", "paddingRight": "15px", "width":"26%", "marginRight":"2px"}}>
            <h1 style={classPstyle}>1 Pack</h1>
            <p className="uk-margin-remove-top" style={{ "marginBottom":"10px", "color":"whitesmoke"}}> 30 Days exp.</p>

            <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$44.00</p>
            <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"18%", "marginBottom":"40px"}}>Per Class</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "15px", "paddingRight": "15px", "width":"26%", "marginRight":"2px"}}>
            <h1 style={classPstyle}>5 Pack</h1>
            <p className="uk-margin-remove-top" style={{ "marginBottom":"10px", "color":"whitesmoke"}}>($40/class) | 3 months exp.</p>
            
            <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$44.00</p>
            <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"24%", "marginBottom":"40px"}}>Per Package</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "15px", "paddingRight": "15px", "width":"26%"}}>
            <h1 style={classPstyle}>10 Pack</h1>
            <p className="uk-margin-remove-top" style={{ "marginBottom":"10px", "color":"whitesmoke"}}>($36/class) | 6 months exp.</p>
            
            <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$360.00</p>
            <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"24%", "marginBottom":"40px"}}>Per Package</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>
    </div>
  )
}

export default ClassPackages