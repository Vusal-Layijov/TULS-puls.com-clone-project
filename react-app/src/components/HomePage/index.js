import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import homepage from './qaqa.png'
import cnbc from './cnbc.png'
import home from './home3.png'
import './index.css'
const HomePage = () =>{
    const dispatch = useDispatch()


    return (
        <>
            <section>
                <div id='homePage-previewImage' style={{ backgroundImage: `url(${homepage})`, backgroundSize: 'cover', height: '85vh' }}>
                    <div style={{paddingTop:'60px'}}>
                    <h1>Your go-to expert for all your home care needs</h1>
                        <NavLink to={'/services'} > <button  >Book a service</button> </NavLink> 
                    </div>
                </div>
            </section>
            <section>
                <div style={{backgroundImage:`url(${cnbc})`, backgroundSize:'cover',height:'10vh'}} ></div>
            </section>
            <section>
                <div style={{ backgroundImage: `url(${home})`, backgroundSize: 'cover', height: '25vh' }} ></div>
            </section>
        
        </>
    )


}
export default HomePage