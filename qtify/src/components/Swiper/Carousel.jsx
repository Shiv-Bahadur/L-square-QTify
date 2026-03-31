import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import SongCard from '../Card/Card';

const Carousel = ({ albums }) => {


  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{ clickable: true }}
        slidesOffsetBefore={50}
        slidesOffsetAfter={50}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={'60'}
      >
        {
          albums.length > 0 && albums.map((album) => (
            <SwiperSlide key={album.id}>
              <SongCard album={album} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    
    </>
  )
}

export default Carousel;