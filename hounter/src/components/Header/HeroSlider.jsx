// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import house from '../../assets/house-slider.png';
import people from '../../assets/people-slider.png';
import woman from '../../assets/woman-slider.png';

// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <Swiper
            spaceBetween={100}
            slidesPerView={'3'}
            onSlideChange={() => console.log('slide changed')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className='slider-item'>
                    <img alt='slider-image' src={people}></img>
                    <div className='slider-description'>
                        <h4 className='slider-title'>
                            1K+ People
                        </h4>
                        <p className='slider-subtitle'>
                            Successfully Getting Home
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-item'>
                    <img alt='slider-image' src={house}></img>
                    <div className='slider-description'>
                        <h4 className='slider-title'>
                            56 Houses
                        </h4>
                        <p className='slider-subtitle'>
                            Sold Monthly
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-item'>
                    <img alt='slider-image' src={woman}></img>
                    <div className='slider-description'>
                        <h4 className='slider-title'>
                            4K+ People
                        </h4>
                        <p className='slider-subtitle'>
                            Successfully Getting Home
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-item'>
                    <img alt='slider-image' src={house}></img>
                    <div className='slider-description'>
                        <h4 className='slider-title'>
                            72 Houses
                        </h4>
                        <p className='slider-subtitle'>
                            Sold Monthly
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-item'>
                    <img alt='slider-image' src={woman}></img>
                    <div className='slider-description'>
                        <h4 className='slider-title'>
                            1K+ People
                        </h4>
                        <p className='slider-subtitle'>
                            Successfully Getting Home
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};