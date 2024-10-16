import React from 'react';
import './sectionStart.css'
import background from "../../../assets/фон главного баннера4 1.png"


const SectionStart = () => {
    return (
        <div className='backgrounds'>
            <div className="background-right">
                <span className='background-text'>НАДЕЖНЫЕ, <br/> КАЧЕСТВЕННЫЕ <br/> АККУМУЛЯТОРЫ</span>
                <br/>
                <button className='background-btn'>ПЕРЕЙТИ В КАТАЛОГ</button>
            </div>
            <div className="background-left">
                <img className='background' src={background} alt=""/>
            </div>
        </div>
    );
};

export default SectionStart;