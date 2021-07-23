import React from 'react'
import Slider from "react-slick";
import Logo_01 from '../../Assets/logo/logo-1.png'
import Logo_02 from '../../Assets/logo/logo-2.png'
import Logo_03 from '../../Assets/logo/logo-3.png'
import Logo_04 from '../../Assets/logo/logo-4.png'

export default function LogoSlider(props) {
    const sliderLogos = [Logo_01, Logo_02, Logo_03, Logo_04,Logo_03 ,Logo_02]
    
    return (
        <Slider className={props.className} {...props.settings}>
            {sliderLogos.map((slides, id) => (
                <div className={`slider${id}`}>
                    <img src={slides}></img>
                </div>
            ))
            }
        </Slider>
    );
}
