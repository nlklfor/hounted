import './Hero.css';
import spot from '../../assets/spot.svg';
import search from '../../assets/search.svg';
import airbnb from '../../assets/airbnb_logo.png';
import ticket from '../../assets/ticket_logo.png';
import tripadv from '../../assets/tripadv_logo.png';
import traveloka from '../../assets/traveloka_logo.png';
import heroslider from '../../assets/slider-hero.png'
import HeroSlider from '../Header/HeroSlider';

function Hero() {
    return (
        <div className="section-hero">
            <div className="section-hero_search">
                <h1 className="search-title">
                    find the place to <br></br>
                    live <span>your dreams </span> <br></br>
                    easily here
                </h1>
                <p className="search-subtitle">
                    Everything you need about finding your place to live will be here,<br></br> where it will be easier for you
                </p>
                <div className="search-block">
                    <img alt='spot-place' src={spot}></img>
                    <input className="search-place" placeholder="Search for the location you want!"></input>
                    <button className="search-button">
                        Search
                        <img alt='search' src={search}></img>
                    </button>
                </div>
                <p className="search-partner">Our Partnership</p>
                <div className="partnership">
                    <ul className="search-list">
                        <li className="search-list_item"><img alt='' src={traveloka}></img></li>
                        <li className="search-list_item"><img alt='' src={ticket}></img></li>
                        <li className="search-list_item"><img alt='' src={airbnb}></img></li>
                        <li className="search-list_item"><img alt='' src={tripadv}></img></li>
                    </ul>
                </div>
            </div>
            <div className="section-hero_slider">
                <img className='background-slider' alt='hero-slider' src={heroslider}></img>
                
            </div>
            <HeroSlider/>
        </div>
    );
}

export default Hero;