import './VideoContainer.css'
import Video from './video.mp4';

const VideoContainer = () => {
  return (
    <div className="videoContainer">
      <video autoPlay muted loop>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  )
}

export default VideoContainer