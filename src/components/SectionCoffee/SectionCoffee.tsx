import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./SectionCoffee.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { slideCards } from "../../data";
import SliderCard from "../../ui/SliderCard/SliderCard";

export default function SectionCoffee() {
  return (
    <section className={styles.coffee}>
      <h2>Choose your favorite coffee</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        pagination
        navigation>
        {slideCards.map((item, i) => (
          <SwiperSlide
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "1rem",
            }}>
            <SliderCard
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
