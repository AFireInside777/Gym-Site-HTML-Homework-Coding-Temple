

function GymAccess() {


  return (
    <div className="uk-width-1-1 uk-margin-medium-top uk-flex uk-flex-row uk-height-medium uk-margin-small-bottom uk-border-rounded" style={{"border":"2px blue solid", "height": "240px"}}>

        <div className="uk-card uk-height-1-1 uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "5px", "paddingRight": "5px", "width": "22%", "marginRight": "2px"}}>
            <h1 style={{ "marginTop":"80px"}}>Gym Access</h1>

        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "15px", "paddingRight": "15px", "width":"26%", "marginRight": "2px"}}>
            <h1 style={{ "marginBottom":"30px", "color":"whitesmoke"}}>Day Fee</h1>
        

            <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$32.00</p>
            <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"16%", "marginBottom":"47px"}}>Per Day</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "15px", "paddingRight": "15px", "width":"26%", "marginRight": "2px"}}>
            <h1 style={{ "marginBottom":"25px", "color":"whitesmoke"}}>Monthly</h1>
            
            <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$160.00</p>
            <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"35%", "marginBottom":"52px"}}>Month to Month</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>

        <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"border":"2px blue solid", "paddingLeft": "15px", "paddingRight": "15px", "width":"26%"}}>
            <h1 style={{ "marginBottom":"24px", "color":"whitesmoke"}}>Per Week:</h1>
            
            <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$360.00</p>
            <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"20%", "marginBottom":"53px"}}>Per Week</p>
            <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
        </div>
    </div>
  )
}

export default GymAccess