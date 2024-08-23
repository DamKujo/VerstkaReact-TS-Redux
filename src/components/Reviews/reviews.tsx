import "./reviews.css"
import Slider from "./../Slider/Slider";

export default function Reviews(){
    return (
        <div className='content-blue'>
            <div className='wrapper'>
                <div className='content-title'>
                    <h2>Отзывы</h2>
                </div>
                <Slider/>
            </div>
        </div>
     );
}