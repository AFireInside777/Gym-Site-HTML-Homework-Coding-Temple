

function SemiPrivatePackages() {

  return (
    <div className="uk-width-1-1 uk-margin-medium-top uk-flex uk-flex-row uk-height-medium uk-margin-large-bottom uk-border-rounded" style={{"border":"2px blue solid", "height": "240px"}}>

        <div className="uk-card uk-height-1-1 uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "5px", "paddingRight": "5px", "width": "22%", "marginRight": "2px"}}>
            <h1 style={{"marginTop":"65px"}}>Semi-Private Packages</h1>
            
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "15px", "paddingRight": "15px", "width":"26%", "marginRight": "2px"}}>
            <h1 style={{"marginBottom":"1px", "color":"whitesmoke"}}>1 Pack</h1>
            <p className="uk-margin-remove-top" style={{"marginBottom":"10px", "color":"whitesmoke"}}>30 Days</p>

            <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$60.00</p>
            <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"22%", "marginBottom":"44px"}}>Per Session</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "15px", "paddingRight": "15px", "width":"26%", "marginRight": "2px"}}>
            <h1 style={{ "marginBottom":"1px", "color":"whitesmoke"}}>5 Pack</h1>
            <p className="uk-margin-remove-top" style={{ "marginBottom":"10px", "color":"whitesmoke"}}>($55/session) | 3 months exp</p>
            
            <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$275.00</p>
            <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"24%", "marginBottom":"44px"}}>Per Package</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "15px", "paddingRight": "15px", "width":"26%"}}>
            <h1 style={{ "marginBottom":"1px", "color":"whitesmoke"}}>10 Pack</h1>
            <p className="uk-margin-remove-top" style={{ "marginBottom":"10px", "color":"whitesmoke"}}>($50/session) | 6 months exp</p>
            
            <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$500.00</p>
            <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"24%", "marginBottom":"44px"}}>Per Package</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>
    </div>
  )
}

export default SemiPrivatePackages