import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_services_thunk } from "../../store/services";
import cleaner from './phone3.png'
import './index.css'
export default function PhoneRepair() {
    const dispatch = useDispatch()
    const services = useSelector(state => Object.values(state.services.all_services))
    useEffect(() => {
        dispatch(load_services_thunk(4))
    }, [dispatch])

    if (!services) {
        return null
    }

    return (
        <>
            <section>
                <div id='homePage-previewImage' style={{ backgroundImage: `url(${cleaner})`, backgroundSize: 'cover', height: '85vh' }}>
                    {/* <div style={{ paddingTop: '100px' }}>
                </div> */}
                <h1 style={{paddingTop:'100px'}}>Trusted Repair at your location</h1>
                </div>
            </section>


            <div className="forFirst">
                {services.map((service) => {
                    return (
                        <div key={service.id} className='forNew'>
                            <div className="spotclass">
                                <h1>{service.name}</h1>
                                <p>By: {service.owner.username}</p>
                            </div>
                            <div className="forinside">
                                {service.desciption}
                            </div>
                            <div>{service.avgRating ? `⭐️ ${parseFloat(service.avgRating).toFixed(1)}` : '⭐️ New'}</div>
                            <p>Price {service.price}$</p>
                            <button>Book</button>
                        </div>
                    )
                })

                }

            </div>
        </>
    )

}
