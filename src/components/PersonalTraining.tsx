
function PersonalTraining() {
  return (
    <div className="uk-container uk-width-1-1 uk-flex uk-flex-column uk-border-rounded">
        <h1 className="uk-margin-remove-bottom" style={{"width":"max-content", "marginLeft": "auto", "marginRight": "auto"}}>Personal Training Packages</h1>
        <div className="uk-card uk-flex uk-flex-row uk-height-medium uk-background-secondary uk-border-rounded" style={{"border":"2px red solid", "width": "75%", "marginLeft": "auto", "marginRight": "auto"}}>

            <div className="uk-card uk-height-1-1 uk-padding-small" style={{"width": "25%"}}>
                <h3 className="uk-margin-remove" style={{"color":"whitesmoke"}}>Personal Training Monthly</h3>
                <p className="uk-margin-remove" style={{"color":"whitesmoke"}}>(45 Day Exp)</p>
                <h1 className="uk-margin-remove-bottom" style={{"color":"whitesmoke"}}>$399.00</h1>
                <p className="uk-border-rounded uk-margin-remove" style={{"color":"black", "backgroundColor": "red", "width":"26%"}}>Monthly</p>
            </div>

            <div className="uk-margin-small-left uk-margin-small-right" style={{"width": "45%"}}>
                <p className="uk-margin-large-top" style={{"height":"maxContent", "marginBottom":"2px", "color":"whitesmoke"}} >Includes:</p>
                <p style={{"height":"maxContent","marginTop":"2px", "marginBottom":"2px", "color":"whitesmoke"}}><i className="fas fa-check" style={{"color": "#df2a2a"}}></i>Four Personal Training Sessions Monthly (45 Day Exp.)</p>
                <p style={{"height":"maxContent","marginTop":"2px", "marginBottom":"2px", "color":"whitesmoke"}}><i className="fas fa-check" style={{"color": "#df2a2a"}}/>One Semi-Privates Per Month</p>
                <p style={{"height":"maxContent","marginTop":"2px", "marginBottom":"2px", "color":"whitesmoke"}}><i className="fas fa-check" style={{"color": "#df2a2a"}}/>Full Gym Access</p>
            </div>

            <div style={{"width": "30%"}}>
                <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"35%"}}>Buy Now</button>
            </div>
        </div>



        <div className="uk-margin-medium-top uk-flex uk-flex-row uk-height-medium uk-margin-large-bottom uk-border-rounded" style={{"height": "240px", "width":"75%", "marginLeft": "auto", "marginRight": "auto", "justifyContent":"space-between"}}>

            <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"paddingLeft": "15px", "paddingRight": "15px", "width":"24%", "marginRight": "2px"}}>
                <h1 style={{"marginBottom":"1px", "color":"whitesmoke"}}>1 Pack</h1>
                <p className="uk-margin-remove-top" style={{"marginBottom":"10px", "color":"whitesmoke"}}>30 Days</p>

                <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$120.00</p>
                <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"34%", "marginBottom":"44px"}}>Per Session</p>
                <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
            </div>

            <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"paddingLeft": "15px", "paddingRight": "15px", "width":"24%", "marginRight": "2px"}}>
                <h1 style={{ "marginBottom":"1px", "color":"whitesmoke"}}>5 Pack</h1>
                <p className="uk-margin-remove-top" style={{ "marginBottom":"10px", "color":"whitesmoke"}}>($115/session) | 3 months</p>
                <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$575.00</p>
                <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"37%", "marginBottom":"44px"}}>Per Package</p>
                <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
            </div>

            <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"paddingLeft": "15px", "paddingRight": "15px", "width":"24%"}}>
                <h1 style={{ "marginBottom":"1px", "color":"whitesmoke"}}>10 Pack</h1>
                <p className="uk-margin-remove-top" style={{ "marginBottom":"10px", "color":"whitesmoke"}}>($110/session) | 3 months exp</p>
                
                <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$1,100.00</p>
                <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"37%", "marginBottom":"44px"}}>Per Package</p>
                <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
            </div>

            <div className="uk-card uk-height-1-1 uk-width-medium uk-background-secondary uk-border-rounded" style={{"paddingLeft": "15px", "paddingRight": "15px", "width":"24%", "marginRight": "2px"}}>
                <h1 style={{"marginBottom":"1px", "color":"whitesmoke"}}>20 Pack</h1>
                <p className="uk-margin-remove-top" style={{"marginBottom":"10px", "color":"whitesmoke"}}>($105/session)</p>

                <p className="uk-margin-remove uk-text-large" style={{"color":"whitesmoke"}}>$2100.00</p>
                <p className="uk-border-rounded uk-margin-remove-top" style={{"color":"black", "backgroundColor": "red", "width":"37%", "marginBottom":"44px"}}>Per Package</p>
                <button className="uk-button uk-button-primary uk-width-1-1 uk-border-rounded" style={{"height":"15%","marginTop":"5px"}}>Buy Now</button>
            </div>
    </div>
        
    </div>
  )
}

export default PersonalTraining