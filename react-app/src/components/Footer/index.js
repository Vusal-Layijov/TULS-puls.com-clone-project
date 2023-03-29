import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer> 
            <div className='footerdiv' > 
                <div><Link className='mylinkk' to="/about">About TULS.</Link></div>
                <div className='footer-bottom'>This website and its contents are the property of TULS Inc.and are protected under the copyright laws of the United States. Any unauthorized use of the contents of this website is strictly prohibited. </div>
            </div> 
        </footer>

    );
}