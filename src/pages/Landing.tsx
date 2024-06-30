import bgvideo from '../assets/videos/GymVideo.mp4'

const Landing = () => {
  return (
    <div id="homedisplay">
        <video muted loop id='HomeVid' width="100%" height="100%" uk-video="autoplay:inview">
            <source src={bgvideo} type='video/mp4'/>
            Your browser does not support the video tag.
        </video>
        <div className="uk-card uk-card-body uk-margin-auto uk-padding-remove uk-border-rounded" id="HomeCard">
            <h1 className="uk-margin-remove" id="hometitle">Welcome to Work Train Fight!</h1>
        </div>
        <div className="uk-card uk-card-body uk-margin-auto uk-padding-remove uk-border-rounded" id="HomeCard2">
            <h1 className="uk-margin-remove" id="hometitle2">Classes/Semi-Privates/Personal Training and Gym, and more!</h1>
        </div>
    </div>
  )
}

export default Landing