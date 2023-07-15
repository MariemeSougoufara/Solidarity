import React from 'react';
import "./hero.css";
import Title from '../title/Title';
const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <div className="row">
                        <Title subtitle='WELCOME TO SOLIDARITY' title='The humanitarian aid platform' />
                        <p>Vivre c'est aider a vivre</p>
                        <p>Il faut creer d'autres bonheurs pour etre heureux !</p>
                        <div className="button">
                            <button className='primary-btn'>
                                Faire un don
                            </button>
                            <button className='primary-btn'>
                                Devenir benevole
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin"></div>
        </>

    )
}
export default Hero;