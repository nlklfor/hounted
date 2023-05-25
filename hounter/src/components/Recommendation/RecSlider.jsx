
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper';

import './RecSlider.css';
import person1 from '../../assets/person1.png';
import recHouse from '../../assets/rec-house1.png';
import 'swiper/css';
import 'swiper/css/pagination'
import RecSliderNav from './RecSliderNav';
import CardSlider from './CardSlider';

export default (props) => {
    return (
        <Swiper
            modules={[Autoplay, FreeMode, Navigation]}
            autoplay={true}
            freeMode={true}
            navigation
            spaceBetween={20}
            slidesPerView={'3'}
            onSlideChange={() => console.log('slide changed')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <RecSliderNav />
            <SwiperSlide>
                    <CardSlider img={recHouse} personImg={person1} title={'Roselands House'} price={'$ 35.000.000'} personName={'Dianne Russell'} personLoc={'Manchester, Kentucky'} />
            </SwiperSlide>
            <SwiperSlide>
                    <CardSlider img={recHouse} personImg={person1} title={'Roselands House'} price={'$ 35.000.000'} personName={'Dianne Russell'} personLoc={'Manchester, Kentucky'} />
            </SwiperSlide>
            <SwiperSlide>
                    <CardSlider img={recHouse} personImg={person1} title={'Roselands House'} price={'$ 35.000.000'} personName={'Dianne Russell'} personLoc={'Manchester, Kentucky'} />
            </SwiperSlide>
            <SwiperSlide>
                    <CardSlider img={recHouse} personImg={person1} title={'Roselands House'} price={'$ 35.000.000'} personName={'Dianne Russell'} personLoc={'Manchester, Kentucky'} />
            </SwiperSlide>
            <SwiperSlide>
                    <CardSlider img={recHouse} personImg={person1} title={'Roselands House'} price={'$ 35.000.000'} personName={'Dianne Russell'} personLoc={'Manchester, Kentucky'} />
            </SwiperSlide>
            <SwiperSlide>
                    <CardSlider img={recHouse} personImg={person1} title={'Roselands House'} price={'$ 35.000.000'} personName={'Dianne Russell'} personLoc={'Manchester, Kentucky'} />
            </SwiperSlide>
            <SwiperSlide>
                    <CardSlider img={recHouse} personImg={person1} title={'Roselands House'} price={'$ 35.000.000'} personName={'Dianne Russell'} personLoc={'Manchester, Kentucky'} />
            </SwiperSlide>
            <SwiperSlide>
                    <CardSlider img={recHouse} personImg={person1} title={'Roselands House'} price={'$ 35.000.000'} personName={'Dianne Russell'} personLoc={'Manchester, Kentucky'} />
            </SwiperSlide>
        </Swiper>
    );
};