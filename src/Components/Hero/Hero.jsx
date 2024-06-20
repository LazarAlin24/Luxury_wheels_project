import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center customHight p-4 
      bg-cover bg-center bg-[url('https://newsroom.etomato.com/userfiles/%5B%EB%9E%8C%EB%B3%B4%EB%A5%B4%EA%B8%B0%EB%8B%88%5D%20%EC%9A%B0%EB%9D%BC%EC%B9%B8%20%EC%97%90%EB%B3%B4%20(1).jpg')]"
    >
      <div className="flex-1 m-2 shadow-lg flex items-center justify-center">
        <div className="p-4">{/* emty */}</div>
      </div>

      <div className="flex-0 bg-no-repeat bg-center m-2 shadow-lg rounded-lg flex flex-col items-center justify-end mt-auto text-white font-semibold text-center text-lg">
        <div className="p-4">
          <div
            data-id="9c9b90d"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div>
              <h3 className="text-2xl md:text-2xl">LUXURY WHEELS MOTORSPORT</h3>
            </div>
          </div>
          <div
            data-id="49cc203"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div>
              <h2 className="text-3xl md:text-4xl">
                OUR COMMITMENT TO QUALITY
              </h2>
            </div>
          </div>
          <div
            data-id="48c9786"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div>
              <p className="text-base md:text-xl">
                We have worked on the world's most renowned vehicles, if they
                can trust us, you can count on us.
              </p>
            </div>
          </div>
          <div
            data-id="5e2efa5"
            data-element_type="widget"
            data-widget_type="button.default"
          >
            <div>
              <div>
                <a
                  className="elementor-button elementor-button-link elementor-size-sm"
                  href="https://luxurywheel.com.au/wheels-gallery/"
                  target="_blank"
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text bg-red-600 rounded-full p-1">
                      Show me
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 m-2 shadow-lg rounded-lg flex items-center justify-center">
        <div className="p-4">{/* Right empty div */}</div>
      </div>
    </div>
  );
};

export default Hero;
