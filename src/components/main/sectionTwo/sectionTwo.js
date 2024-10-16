import React from 'react';
import './sectionTwo.css'
import backgroundTwo from './фон.png'
import background1 from './two_1.png'
import background2 from './two_2.png'
import background3 from './two_3.png'
import background4 from './two_4.png'
import background5 from './two_5.png'
import background6 from './two_6.png'

const SectionTwo = () => {
    return (
        <div className="two">
            <img className='two-background' src={backgroundTwo} alt=""/>
            <div className='container'>
                <h2 className='two-title'>Автотовары: аксессуары, <br/>
                    расходники и многое другое</h2>

                <p className='two-text'>PROAuto - это специализированный интернет магазин востребованных <br/>
                    товаров для автомобилей. </p>

                <div className="two-block">
                    <div className="two-container">
                        <img className='two-img' src={background1} alt="" />
                        <div className="overlay">
                            <h2>АККУМУЛЯТОРЫ</h2>
                            <button>ЗАКАЗАТЬ ОНЛАЙН</button>
                        </div>
                    </div>
                    <div className="two-container">
                        <img className='two-img' src={background2} alt="" />
                        <div className="overlay">
                            <h2>ЗАМЕНА МАСЛО</h2>
                            <button>СТАТЬ В ОЧЕРЕДЬ</button>
                        </div>
                    </div>
                    <div className="two-container">
                        <img className='two-img' src={background3} alt="" />
                        <div className="overlay">
                            <h2>ПОЛИРОВКА</h2>
                            <button>СТАТЬ В ОЧЕРЕДЬ</button>
                        </div>
                    </div>
                    <div className="two-container">
                        <img className='two-img' src={background4} alt="" />
                        <div className="overlay">
                            <h2>ЗАРЯД АККУМУЛЯТОРА</h2>
                            <button>СТАТЬ В ОЧЕРЕДЬ</button>
                        </div>
                    </div>
                    <div className="two-container">
                        <img className='two-img' src={background5} alt="" />
                        <div className="overlay">
                            <h2>МОЙКА ДВИГОТЕЛЯ</h2>
                            <button>СТАТЬ В ОЧЕРЕДЬ</button>
                        </div>
                    </div>
                    <div className="two-container">
                        <img className='two-img' src={background6} alt="" />
                        <div className="overlay">
                            <h2>ДЕТАЛИ</h2>
                            <button>ПРИОБРЕСТИ</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SectionTwo;