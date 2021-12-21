import React from 'react'
import Slider from "react-slick";
import Logo_01 from '../../Assets/logo/logo-1.png'
import Logo_02 from '../../Assets/logo/logo-2.png'
import Logo_03 from '../../Assets/logo/logo-3.png'
import Logo_04 from '../../Assets/logo/logo-4.png'
import Logo_05 from '../../Assets/logo/logo-5.png'
import Logo_06 from '../../Assets/logo/logo-6.png'
import Logo_07 from '../../Assets/logo/logo-7.png'
import Logo_08 from '../../Assets/logo/logo-8.png'
import Logo_09 from '../../Assets/logo/logo-9.png'

export default function LogoSlider(props) {
    const sliderLogos = [Logo_01, Logo_02, Logo_03, Logo_04, Logo_05, Logo_06, Logo_07, Logo_08, Logo_09]

    return (
        <Slider className={props.className} {...props.settings}>
            {sliderLogos.map((slides, id) => (
                <div className={`slider${id}`}>
                    <img src={slides} alt={`slide ${id}`} loading='lazy'></img>
                </div>
            ))
            }
        </Slider>
    );
}
