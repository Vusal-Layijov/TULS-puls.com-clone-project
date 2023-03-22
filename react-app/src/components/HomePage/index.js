import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import homepage from './qaqa.png'

const HomePage = () =>{
    const dispatch = useDispatch()


    return (
        <>
            <section>
                <div id='homePage-previewImage' style={{ backgroundImage: `url(${homepage})`, backgroundSize: 'cover', height: '85vh' }}>
                    <div style={{paddingTop:'100px'}}>
                    <p>Your go-to expert for all your home care needs</p>
                    <button  >Book a service</button>
                    </div>
                </div>
            </section>
        
        </>
    )


}
export default HomePage