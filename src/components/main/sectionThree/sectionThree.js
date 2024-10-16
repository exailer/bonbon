import React from 'react';
import './sectionThree.css'
import background from './three-background.png'
import leftBackground from './left-background.png'
import mechanic from './three-механик 2.png'

const SectionThree = () => {
    return (
        <div className='three'>
            <div className='three-background-overlay'></div> {/* затемнение */}
            <img className='three-background' src={background} alt=""/>
            <div className="container">
                <h2 className='three-title'>УСЛУГИ</h2>
                <p className='three-text'>Менеджеры компании с радостью ответят на ваши вопросы и помогут с <br/>
                    выбором продукции.</p>
                <div className="three-block">

                    <div className="three-left">
                        <div className="three-col">
                            <div className="three-left-img">
                                <img src={leftBackground} alt=""/>
                            </div>
                            <div className="three-left-info">
                                <h3 className='three-left-title'>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ <br/>
                                    СПЕЦИАЛИСТА</h3>
                                <p className='three-left-text'>
                                    Поможем с выбором аккумулятора, <br/>
                                    моторного масла и аксессуаров для <br/>
                                    автомобиля под ваши требования.
                                </p>
                            </div>
                        </div>
                        <div className="three-col">
                            <div className="three-left-img">
                                <img src={leftBackground} alt=""/>
                            </div>
                            <div className="three-left-info">
                                <h3 className='three-left-title'>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ <br/>
                                    СПЕЦИАЛИСТА</h3>
                                <p className='three-left-text'>
                                    Поможем с выбором аккумулятора, <br/>
                                    моторного масла и аксессуаров для <br/>
                                    автомобиля под ваши требования.
                                </p>
                            </div>
                        </div>
                        <div className="three-col">
                            <div className="three-left-img">
                                <img src={leftBackground} alt=""/>
                            </div>
                            <div className="three-left-info">
                                <h3 className='three-left-title'>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ <br/>
                                    СПЕЦИАЛИСТА</h3>
                                <p className='three-left-text'>
                                    Поможем с выбором аккумулятора, <br/>
                                    моторного масла и аксессуаров для <br/>
                                    автомобиля под ваши требования.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="three-right">
                        <img src={mechanic} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;