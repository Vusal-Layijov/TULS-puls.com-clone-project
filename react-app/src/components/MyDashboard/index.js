import { useEffect, useState } from "react";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import DeleteService from "../DeleteService";

function MyDashboard({services}){

if(!services) return null

    return(
        <>
            {!services[0] ? (null) : (
                <div className="'forFirst">
                    {services.map((service) => {
                        return (
                            <div key={service.id} className='forNewDiv' >
                                <div className="forNav">
                                    <div>
                                        <div className='forInside'>
                                            <div>{service.name}</div>
                                            <div>{service.description}</div>
                                        </div>
                                        <div className='forInside'>
                                            {/* <div>{business.price}</div> */}
                                            <NavLink to={`/services/${service.id}/edit`}><button className='default-button curs' >Update</button></NavLink>
                                            {/* <div><OpenModalButton buttonText="Delete" modalComponent={<DeleteSpot spotId={spot.id} />} /></div> */}
                                             <div><OpenModalButton className={'default-button curs rd-bg'} buttonText="Delete" modalComponent={<DeleteService serviceId={service.id} />} /></div> 
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    }

                    )

                    }

                </div>
            )

            }
        </>
    )

}
export default MyDashboard