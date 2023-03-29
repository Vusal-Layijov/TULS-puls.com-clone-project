import { useEffect, useState } from "react";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import DeleteService from "../DeleteService";
import './index.css'
function MyDashboard({services}){

if(!services) return null

    return(
        <>
            {!services[0] ? (null) : (
                <>
                    {services.map((service) => {
                        return (
                            
                                <div key={service.id} className="forNav">
                                        <h4>{service.name}</h4>                                    
                                        <div className='forDesc'>
                                            {service.description}
                                        </div>
                                        <div className='forInside'>
                                            {/* <div>{business.price}</div> */}
                                            <NavLink to={`/services/${service.id}/edit`}><button className='default-button curs globalmodal ' >Update</button></NavLink>
                                            {/* <div><OpenModalButton buttonText="Delete" modalComponent={<DeleteSpot spotId={spot.id} />} /></div> */}
                                             <div><OpenModalButton className={'default-button curs rd-bg'} buttonText="Delete" modalComponent={<DeleteService serviceId={service.id} />} /></div> 
                                        </div>
                                </div>
                        )
                    }

                    )

                    }

                </>
            )

            }
        </>
    )

}
export default MyDashboard