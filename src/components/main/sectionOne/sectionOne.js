import React from 'react';
import './sectionOne.css'
import ico from '../../../assets/ico.svg'
import Group2  from '../../../assets/Group 2.svg'
import Group1  from '../../../assets/Group 1.svg'
import Group3  from '../../../assets/Group 3.svg'

const SectionOne = () => {
    return (
        <div className='container'>
            <div className="one-row">
                <div className="one-col">
                    <img src={ico} alt=""/>
                        <p className='one-col-p'>Наличный и безналичный <br/> расчет</p>
                </div>
                <div className="one-col">
                    <img src={Group2} alt=""/>
                    <p className='one-col-p'>Техническая помощь и <br/> консультация</p>
                </div>
                <div className="one-col">
                    <img src={Group1} alt=""/>
                    <p className='one-col-p'>Только качественная и <br/> проверенная продукция</p>
                </div>
                <div className="one-col">
                    <img src={Group3} alt=""/>
                    <p className='one-col-p'>Мы всегда на связи <br/>
                        с 9:00 до 18:00!</p>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;