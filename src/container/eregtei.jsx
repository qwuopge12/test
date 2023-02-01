import React from "react";

import ergutal from '../assets/ergutal.jpg'

const Eregtei = () =>{
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000
      };
    const data = [
        
        {
            key:1,
            title:"Улирлын онцлох эрэгтэй",
            
            img:ergutal,
            description : "Хямдрал",
        },
        {
            key:2,            
            description:"Гэрийн тавилга",
            img:ergutal,
        },
        {
            key:3,            
            description : "Цахилгаан хэрэгсэл",
            img:ergutal,
        },
        {
            key:4,            
            description:"Тоглоом & Хобби",
            img:ergutal
        },
        {
            key:5,
            description : "Арьс арчилгаа",
            img:ergutal,
        },
        {
            key:6,           
            description:"Технологи",
            img:ergutal
        },
        {
            key:7,           
            description : "Эрүүл мэнд & эрүүл ахуй",
            img:ergutal,
        },
       
    ];
    return(
        <div >
          
            <sliDe {...settings2}/>
                {
                    data.map((row)=>(
                    
                        <div className="kol">                      
                                <h2>{row.title}</h2>
                                <img src={row.img} alt='/'/>
                                <p>{row.description}</p>
                                
                        </div>
                    ))
                }
                <sliDe/>
            
                
            

        </div>
    )
} 
export default Eregtei
