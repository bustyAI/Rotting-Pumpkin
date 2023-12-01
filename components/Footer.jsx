import React from 'react'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__links_container'>
                    <div className='footer__links'>
                        <p className='footer__title'>Help</p>
                        <p className='footer__help_link'>Shipping</p>
                        <p className='footer__help_link'>Shipping</p>
                        <p className='footer__help_link'>Shipping</p>
                        <p className='footer__help_link'>Shipping</p>
                    </div>
                    <div className='footer__links'>
                        <p className='footer__title'>Help</p>
                        <p className='footer__help_link'>Shipping</p>
                        <p className='footer__help_link'>Shipping</p>
                        <p className='footer__help_link'>Shipping</p>
                        <p className='footer__help_link'>Shipping</p>
                    </div>
                    <div className='mx-12 my-12'>
                        <p className='about'>About Us</p>
                        <p className='about__description'>
                            Everything here at our store is hand made with love,
                            <p>click this button to subscribe to our news letter, and</p>
                            stay up to date when I make something new!
                        </p>
                    </div>
                </div>
                <div className='footer__foot'>
                    <div className='flex text-base'>
                        <p>Shipping To: Local</p>
                    </div>

                    <div className='flex flex-row'>
                        <p className='text-xl'>@ Rotting Pumpkin</p>
                    </div>

                    <div className='flex flex-row space-x-8'>
                        <FaInstagram className='icon' />
                        <FaInstagram className='icon' />
                        <FaInstagram className='icon' />
                        <FaInstagram className='icon' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer