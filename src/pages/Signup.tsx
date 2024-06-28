import egym from '../assets/images/emptygym2.jpg'

function Signup() {
    return (
      <div className="uk-container" style={{"width":"100%", "height":"94vh", "border":"1px red solid", "backgroundImage":`url(${egym})`, "backgroundPosition":"50%"}}>
          <div className="uk-card uk-width-medium uk-border-rounded" style={{"marginLeft":"auto", "marginRight":"auto", "marginTop":"15%", "height":"max-content"}}>
              <h1 style={{"marginLeft":"29%"}}>Sign Up</h1>
              <input className="uk-input uk-margin-small-bottom" type="text" placeholder="Username"/>
              <input className="uk-input uk-margin-small-bottom" type="text" placeholder="Password"/>
              <button style={{"height":"45px"}} className="uk-button uk-button-default uk-button-large uk-width-1-1 uk-button-primary"><a style={{"marginBottom":"20px"}}>Submit Button</a></button>
          </div>
      </div>
    )
  }

export default Signup