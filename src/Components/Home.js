import React, { useState } from 'react';
import About from '../Components/About'
import Contect from '../Components/Contect'
import Schedules from '../Components/Schedules'
import Classes from '../Components/Classes'
import Footer from '../Components/Footer'
import { NavLink } from 'react-router-dom';


const Home = () => {


    return (
        <div>
            <div className='homePage_style '>

                <div>
                    <div className=' cover_page d-flex flex-column'>
                        <p style={{ marginTop: '18%', color: 'white', fontWeight: 'bold' }}>Build a Healthy LifeStyle</p>
                        <h1 style={{ color: 'white', textAlign: 'center', fontWeigh: 'bold' }}>UPGRADE YOUR BODY <span style={{ color: 'green' }}> AT MYGYM FITNESS</span></h1>
                    </div>
                    <br />
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'center', }} className='d-flex flex-row gap-3 '>
                        <li>
                            <NavLink to='/primium'>
                                <button type="button" class="btn btn-outline-primary btn-sm">GET STARTED</button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/learnmore'>
                                <button type="button" class="btn btn-outline-danger btn-sm">LEARN MORE</button>
                            </NavLink>

                        </li>
                    </ul>
                </div>

            </div>

            <div className='container-fluid ' >
                <div className='row gym_membership_detail p-5  d-flex justify-content-evenly '>
                    <div className='col-md-5 col-sm-10 p-5 m-auto premium_left'>

                        <p><h2 style={{ color: 'white', fontWeight: 'bolder' }}>New To The MyGym?</h2></p>
                        <p style={{ color: 'white' }}>Your membership for 2 months (50$ per month)</p>

                        <p style={{ color: 'green' }}>
                            MyGym will help you to maintain your health and fitness you will find only at MyGym
                        </p>

                        <p>
                            <button type="button" style={{ width: '90%', color: 'red', fontWeight: '700' }} class="btn btn-light"> BECOME A MEMBER TODAY</button>
                        </p>

                    </div>


                    <div className='col-md-5 col-sm-10 p-5 m-auto'>
                        <p><h2 style={{ color: 'white', fontWeight: 'bolder' }}>Working hours</h2></p>

                        <p>Monday - Friday</p>
                        <p style={{ color: 'green' }}>7:00 AM - 10:00 PM</p>


                        <p>Saturday</p>
                        <p style={{ color: 'green' }}>6:00 AM - 4:00 PM</p>

                    </div>

                </div>
            </div>


            <a name='about'> <About />
            </a>
            <a name='classes'> <Classes />
            </a>
            <a name='schedule'><Schedules /></a>
            <a name='contact'> <Contect /></a>
            <a> <Footer /></a>

        </div>
    )
}

export default Home;