import './VideoButton.css'
import SectionH2 from '../SectionH2/SectionH2'

const VideoButton = () => {
  return (
    <div className='contenedorVideoButton'>
        <SectionH2 className='paperBag' content="featured product" />
        <p>
            Sustainable. Recylable.
        </p>
        <button>BUY NOW</button>
    </div>
  )
}

export default VideoButton