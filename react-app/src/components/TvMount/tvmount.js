import { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_services_thunk } from "../../store/services";
import VideoBackground from "./videobackground";
import { get_reviews_thunk } from "../../store/review";
import './index.css'
export default function TvMount() {
    const dispatch = useDispatch()
    const services = useSelector(state => Object.values(state.services.all_services))
    const user = useSelector((state => state.session.user))
    useEffect(() => {
        dispatch(load_services_thunk(5))
        dispatch(get_reviews_thunk(5))
    }, [dispatch])

    if (!services) {
        return null
    }

    return (
        <>
            <section>
                <div id='homePage-previewImage' style={{ backgroundSize: 'cover', height: '80vh' }}>
                    <VideoBackground />
                </div>
            </section>


            <div className="forFirst" >
                {services.map((service) => {
                    return (
                        <div key={service.id} className='forNew'>
                            <div className="spotclass">
                                <h2>{service.name}</h2>
                                <p>By: {service.owner.username}</p>
                            </div>
                            <div className="forinside">
                                {service.desciption}
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