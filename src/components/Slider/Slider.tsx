import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css";
import { reviews } from "../../reviewsData";

interface Props{
    className?: string;
    style?: object;
    onClick?: any;
}

function SampleNextArrow(props: Props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "#515151", borderRadius: "50%", width: "19px",height: "19px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: Props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "#515151", borderRadius: "50%", width: "19px",height: "19px"}}
        onClick={onClick}
      />
    );
  }

  

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
            reviews.map((item, index) => (
                <div key={index} className="review">
                    <div className="block-one">
                        <div className="review-img">
                            <img src={item.imageUrl}/>
                        </div>
                        <div className="review-title">
                            <p>{item.name}</p>
                            <span>{item.city}</span>
                        </div>
                    </div>
                    <div className="block-two">
                        <p>{item.message}</p>
                    </div>
                </div>
            ))
        }
        
      </Slider>
    </div>
  );
}

export default MultipleItems;
