import "./Hero.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="text-content">
          <h3 className="text-2xl md:text-2xl">LUXURY WHEELS MOTORSPORT</h3>
          <h2 className="text-3xl md:text-4xl">OUR COMMITMENT TO QUALITY</h2>
          <p className="text-base md:text-xl">
            We have worked on the world&#39;s most renowned vehicles, if they
            can trust us, you can count on us.
          </p>
        </div>
      </div>
      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
        >
          <div>
            <img
              src="https://luxurywheel.com.au/wp-content/uploads/2023/02/lamboghini-logo-p474ga7ily5auhqbh6js2fprv48j8tz2dodbv9sutc.png.webp"
              alt="lamborghini logo"
            />
          </div>
          <div>
            <img
              src="https://luxurywheel.com.au/wp-content/uploads/2023/02/ferrari-logo-ou5xbpb9zbbbqtde5xyyu0kbrbk8y1h7jisi70zny8.png.webp"
              alt="ferrari logo"
            />
          </div>
          <div>
            <img
              src="https://luxurywheel.com.au/wp-content/uploads/2023/02/porche-logo-p474hemkrtompq3lx60qjnileopbftfiv8f7i64xds.png.webp"
              alt="porsche logo"
            />
          </div>
          <div>
            <img
              src="https://luxurywheel.com.au/wp-content/uploads/2023/02/mclaren-logo-p474h4aconah60imljjua84ivg4a35ah5t8v84k9a8.png.webp"
              alt="mclaren logo"
            />
          </div>
          <div>
            <img
              src="https://luxurywheel.com.au/wp-content/uploads/2023/02/bmw-logo-p474hoysv02s9fol8shmt2wnxxacshkkknljs7plhc.png.webp"
              alt="bmw-logo-p474hoysv02s9fol8shmt2wnxxacshkkknljs7plhc.png"
            />
          </div>
          <div>
            <img
              src="https://luxurywheel.com.au/wp-content/uploads/2023/02/audi-logo-p474hulu00ai73gebuxe81hfi8ik2o6ylfignvh8g0.png.webp"
              alt="audi-logo-p474hulu00ai73gebuxe81hfi8ik2o6ylfignvh8g0.png"
            />
          </div>
          <div>
            <img
              src="https://luxurywheel.com.au/wp-content/uploads/2023/02/aston-martin-logo-p474fpj2flczr2kctxlzjkxmsn2gjhoyyu0nb6nim8.png.webp"
              alt="aston-martin-logo-p474fpj2flczr2kctxlzjkxmsn2gjhoyyu0nb6nim8.png"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
