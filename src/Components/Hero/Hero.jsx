import './Hero.css'
import arrow_button from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
const Hero = ({heroData,setHeroCount,setPlayStatus,playStatus}) => {
  return (
   <div className="hero">
    <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
    </div>
    <div className="hero-explore">
        <p>Explore the Features</p>
        <img src={arrow_button} alt="" />
    </div>
    <div className="hero-dot-play">
    <ul className="hero-dots">
        <li onClick={()=>setHeroCount(0)} className={setHeroCount===0?"hero-dot orange":"hero-dot"}></li>
        <li onClick={()=>setHeroCount(1)} className={setHeroCount===1?"hero-dot orange":"hero-dot"}></li>
        <li onClick={()=>setHeroCount(2)} className={setHeroCount===2?"hero-dot orange":"hero-dot"}></li>
    </ul>
    <div className="hero-play">
        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
        <p>See the Video</p>
    </div>
    </div>
   </div>
  )
}

export default Hero