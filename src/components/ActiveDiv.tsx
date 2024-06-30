function ActiveDiv({theprops}: any) {

  console.log(theprops)

  return (
    <div className="alignmentClass uk-card" id="activediv">
        
        <div className="uk-card" style={{"width":"30%", "height":"100%"}}>
            <img src={theprops.actpic1} alt="Holograms" style={{"width":"100%", "height":"100%"}}/>
        </div>
        <div className="uk-card" style={{"width":"40%", "height":"100%", "display": "flex", "flexDirection":"column"}} id="activeTitle">

              <div style={{"fontSize":"30px", "marginLeft":"auto", "marginRight":"auto", "height": "20%", "marginTop": "0px"}}><p style={{"marginBottom": "0px", "height":"100%"}}>{theprops.acttitle}</p></div>

              <div style={{"marginLeft":"auto", "marginRight":"auto", "height": "80%", "display": "flex", "paddingLeft":"10px"}}><p>{theprops.actdesc}</p></div>
         
        </div>
        <div className="uk-card" style={{"width":"30%", "height":"100%"}}>
            <img src={theprops.actpic2} alt="Holograms" style={{"width":"100%", "height":"100%"}}/>
        </div>
       
    </div>
  )
}

export default ActiveDiv