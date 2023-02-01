import React from "react";
import './about.css'
import Slider from "react-slick";
import sport from '../assets/ulirliin_ontslokh_angilal-owliin_sport.webp'
import gaduur from '../assets/ulirliin_ontslokh_angilal-gaduur_huwtsas.webp'
import gutal from '../assets/owoldoo_beldey_angilal-owliin_gutal.webp'
import agaar from '../assets/owoldoo_beldey_angilal-agaar_tsewershuulegch.webp'
import huuhed from '../assets/huuhdiin_dulaan_tsamts.webp'
import malgai from '../assets/owoldoo_beldey_angilal-malgai_oroolt.webp'
import vitamin from '../assets/ulirliin_ontslokh_angilal-vitamin.webp'


const  About = () =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000
      };
    return(
            <div className="gontainer">
                              
                <div className="uliral">
                    <h2>Улирлын онцлох</h2>
                </div>
                <Slider {...settings}>
                    
                        <div className="Deed">
                            <img src={sport} alt="/"/>
                            <h4>Өвлийн спорт</h4>
                        </div>
                        <div className="Deed">
                            <img src={gaduur} alt="/"/>
                            <h4>Гадуур хувцас</h4>
                        </div>
                        <div className="Deed">
                            <img src={gutal} alt="/"/>
                            <h4>Өвлийн гутал</h4>
                        </div>
                        <div className="agaar">                       
                            <img src={agaar} alt="/"/>
                            <h4>Агааржуулагч & Агаар цэвэршүүлэгч</h4>                        
                        </div>
                        <div className="Deed">
                            <img src={huuhed} alt="/"/>
                            <h4>Хүүхдийн дулаан цамц</h4>
                        </div>
                        <div className="Deed">
                            <img src={malgai} alt="/"/>
                            <h4>Малгай & Ороолт бээлий</h4>
                        </div>
                        <div className="Deed">
                            <img src={vitamin} alt="/"/>
                            <h4>Өвлийн спорт</h4>
                        </div>
                    
                   
                </Slider>
            </div>
         
        );
};
export default About
