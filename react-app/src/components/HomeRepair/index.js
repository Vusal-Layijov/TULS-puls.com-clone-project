import { useEffect, useState } from "react";
import { useHistory,NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_services_thunk } from "../../store/services";
import cleaner from './homerepair.jpg'
import { get_reviews_thunk } from "../../store/review";
import './index.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OpenModalButton from "../OpenModalButton";
import CreateReview from "../CreateReview/review";
import ReviewOption from "../ReviewOptions";
export default function HomeRepair() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const dispatch = useDispatch()
    const services = useSelector(state => Object.values(state.services.all_services))
    const user = useSelector((state => state.session.user))
    const reviews = useSelector((state) => Object.values(state.reviews));
    useEffect(() => {
        dispatch(load_services_thunk(2))
        dispatch(get_reviews_thunk(2))
    }, [dispatch])

    if (!services || !reviews) {
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
                            {user ? (
                                service.ownerId == user.id ? null : (
                                    <>
                                        <NavLink to={`/services/${service.id}/bookings/new`}>Book</NavLink>
                                        <p></p>
                                        {/* <OpenModalButton buttonText={"Add Review"} modalComponent={<CreateReview serviceId={service.id} />} /> */}
                                        {service.reviews ? (service.reviews.find(review => review.user_id == user.id) ? null : <OpenModalButton buttonText={"Add Review"} modalComponent={<CreateReview service_type_id={2} serviceId={service.id} />} />) : (<OpenModalButton buttonText={"Add Review"} modalComponent={<CreateReview service_type_id={2} serviceId={service.id} />} />)}
                                    </>
                                )
                            ) : null}
                        </div>
                    )
                })

                }

            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {reviews.map((review) => (
                        <div key={review.id} className="slick-slide">
                            <div className="user-info">
                                <div className="user-image">
                                    <img src={review.userImage} alt="userimage" />
                                </div>
                                <div className="user-name">{review.userName}</div>
                                {user && review.user_id == user.id ? <ReviewOption service_type_id={2} review={review} /> : null}

                            </div>
                            <div className="serviceame" >
                                <p style={{ fontWeight: "bold" }} >Service: {review.serviceName}</p>
                                <p>{review.review}</p>
                                <div className="forstarEdit">
                                    {review.stars == 5 ? "⭐️⭐️⭐️⭐️⭐️" : ''}
                                    {review.stars == 4 ? "⭐️⭐️⭐️⭐️" : ''}
                                    {review.stars == 3 ? "⭐️⭐️⭐️" : ''}
                                    {review.stars == 2 ? "⭐️⭐️" : ''}
                                    {review.stars == 1 ? "⭐️" : ''}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )

}