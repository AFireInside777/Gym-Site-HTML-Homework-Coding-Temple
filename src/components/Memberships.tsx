

function Memberships() {

    let membershipstyle = {
        "marginTop":"2px", 
        "marginBottom":"2px", 
        "color":"whitesmoke"
    }

  return (
    <div className="uk-width-1-1 uk-margin-large-top uk-flex uk-flex-row uk-height-medium uk-margin-small-bottom uk-border-rounded">

        <div className="uk-card uk-height-1-1 uk-border-rounded" style={{"paddingLeft": "5px", "paddingRight": "5px", "width": "23%", "marginRight":"2px"}}>
            <h1 style={{ "marginTop":"30px"}}>Memberships</h1>
            <p style={{"height": "50%"}} className="uk-text-large">Need more flexibility? Our class packages are designed for the occasional class user.</p>
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"paddingLeft": "15px", "paddingRight": "15px", "width":"26%", "marginRight":"2px"}}>
            <h1 style={membershipstyle}>WTF Premium</h1>
            <p style={membershipstyle}>Includes:</p>
            <p style={membershipstyle}><i className="fas fa-check" style={{"color": "#df2a2a"}}></i> 1 Class per Day</p>
            <p style={membershipstyle}><i className="fas fa-check" style={{"color": "#df2a2a"}}/> 2 Semi-Private per month</p>
            <p style={membershipstyle}><i className="fas fa-check" style={{"color": "#df2a2a"}}/> Full gym access</p>
            <p style={{"marginTop":"2px", "marginBottom":"10px", "color":"whitesmoke"}}><i className="fas fa-check" style={{"color": "#df2a2a"}}/> 1 Class Guest Pass per month</p>
            <p className="uk-margin-remove" style={{"color":"whitesmoke"}}>Additional Purchases: Semi-Privates: $45.00</p>
            <p className="uk-margin-remove" style={{"color":"whitesmoke"}}>Pricing: $245.00</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"paddingLeft": "15px", "paddingRight": "15px", "width":"26%", "marginRight":"2px"}}>
            <h1 style={membershipstyle}>WTF All Access</h1>
            <p style={membershipstyle}>Includes:</p>
            <p style={membershipstyle}><i className="fas fa-check" style={{"color": "#df2a2a"}}></i> 8 Classes per Month</p>
            <p style={membershipstyle}><i className="fas fa-check" style={{"color": "#df2a2a"}}/> 1 Semi-Private session per month</p>
            <p style={{"marginTop":"2px", "marginBottom":"12px", "color":"whitesmoke"}}><i className="fas fa-check" style={{"color": "#df2a2a"}}/> Full gym access</p>
            
            <p className="uk-margin-remove" style={{"color":"whitesmoke"}}>Additional Purchases w/ Membership: Classes: $30.00 | Semi-privates: $45.00</p>
            <p className="uk-margin-remove" style={{"color":"whitesmoke"}}>Pricing: $199.00</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "15px", "paddingRight": "15px", "width":"26%"}}>
            <h1 style={membershipstyle}>WTF Class Only</h1>
            <p style={membershipstyle}>Includes:</p>
            <p style={membershipstyle}><i className="fas fa-check" style={{"color": "#df2a2a"}}></i> 4 Classes per Month</p>
            <p style={{"marginTop":"2px", "marginBottom":"38px", "color":"whitesmoke"}}><i className="fas fa-check" style={{"color": "#df2a2a"}}/> $31.25 per Class</p>
            
            <p className="uk-margin-remove" style={{"color":"whitesmoke"}}>Additional Purchases w/ Membership: Classes: $30.00 | Semi-privates: $45.00</p>
            <p className="uk-margin-remove" style={{"color":"whitesmoke"}}>Pricing: $199.00</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>
    </div>
  )
}

export default Memberships