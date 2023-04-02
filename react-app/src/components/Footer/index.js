import React from 'react';
import './index.css'
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Footer() {
    const location = useLocation()
    let user=useSelector(state => state.session.user)
 
    return (
        <footer className={location.pathname ===`/users/${user?.id}` ? "hidden" :''} > 
            <div className='footerdiv' > 
                <div><Link className='mylinkk' to="/about">About TULS.</Link></div>
                <div className='footer-bottom'>This website and its contents are the property of TULS Inc.and are protected under the copyright laws of the United States. Any unauthorized use of the contents of this website is strictly prohibited. </div>
            </div> 
        </footer>

    );
}