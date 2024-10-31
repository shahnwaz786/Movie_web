import React from 'react'
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCard from '../../components/TitleCard/TitleCard';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        < Navbar />
        <div className="hero">

            <img src={hero_banner} alt="hero img" className='banner-img' />
            <div className='hero-caption'>
                <img src={hero_title} alt="" className='caption_img'/>
                <p>this is movie</p>
                <div className="hero-btn">
                    
                    <button className='btn'><img src={play_icon} alt="" />play</button>
                   <button className='btn dark-btn'><img src={info_icon} alt="" />Info</button>   
                </div>
                <TitleCard className="title-cards" />
            </div>
        </div>
       <div className='more-cards'>
       <TitleCard title="Blockbuster Movies" category={"top_rated"} />
        <TitleCard title=" Only on Greatflix" category={"popular"} />
        <TitleCard title="Upcoming" category={"upcoming"} />
        <TitleCard title="Top Pics For You" category={"now_playing"}/>
       </div>
       <div>
        <Footer />
       </div>
    </div>
  )
}

export default Home