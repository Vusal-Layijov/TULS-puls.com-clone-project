import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>    
            <Link className='mylink' to="/about">About TULS</Link>
            <div className='footer-bottom'>Copyright © 2000–2023 TULS Inc. TULS, TULS logo, TULS burst and related marks are registered trademarks of TULS.</div>
        </footer>

    );
}