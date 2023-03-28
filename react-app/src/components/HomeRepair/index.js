import { useEffect, useState } from "react";
import { useHistory,NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_services_thunk } from "../../store/services";
import cleaner from './homerepair.jpg'
import './index.css'
export default function HomeRepair() {
    const dispatch = useDispatch()
    const services = useSelector(state => Object.values(state.services.all_services))
    const user = useSelector((state => state.session.user))
    useEffect(() => {
        dispatch(load_services_thunk(2))
    }, [dispatch])

    if (!services) {
        return null
    }

    return (
        <>
            <section>
                <div id='homePage-previewImage' style={{ backgroundImage: `url(${cleaner})`, backgroundSize: 'cover', height: '85vh', }}>
                    {/* <div style={{ paddingTop: '100px' }}>
                </div> */}
                </div>
            </section>


            <div className="forFirst">
                {services.map((service) => {
                    return (
                        <div key={service.id} className='forNew'>
                            <div className="spotclass">
                                <h2>{service.name}</h2>
                                <p>By: {service.owner.username}</p>
                            </div>
                            <div className="forinside">
                                {service.description}
                            </div>
                            <div className="priceandavg">
                            <div>{service.avgRating ? `⭐️ ${parseFloat(service.avgRating).toFixed(1)}` : '⭐️ New'}</div>
                            <p>Price {service.price}$</p>
                            </div>
                            {user ? (service.ownerId == user.id ? null : <NavLink to={`/services/${service.id}/bookings/new`} >Book</NavLink>) : null
                            }
                        </div>
                    )
                })

                }

            </div>
        </>
    )

}