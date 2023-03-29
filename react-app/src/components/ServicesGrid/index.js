import "./index.css"
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import cleaning from './forcleaning.png'
import handy from './handyman.png'
import homerepair from './smarthome.png'
import phone from './forphone.png'
import fortv from './fortvm.png'
import { TiArrowRight } from 'react-icons/ti';

export default function ServiceGrid(){

    const data= [
        {"name":"Cleaning"},
        { "name": "Home Repair" },
        { "name": "Handyman services" },
        { "name": "Phone Repair" },
        { "name": "Tv Mounting" },
    ]

    const history = useHistory()

    const handleClick = e => {
        e.stopPropagation();
        console.log('valueeeee', e.target.getAttribute('value'))
        if(e.target.getAttribute('value')==='cleaning') history.push('/services/cleaning')
        if (e.target.getAttribute('value') === 'handy') history.push('/services/handyman')
        if (e.target.getAttribute('value') === 'homerepair') history.push('/services/homerepair')
        if (e.target.getAttribute('value') === 'phone') history.push('/services/phonerepair')
        if (e.target.getAttribute('value') === 'fortv') history.push('/services/tvmounting')
        // return history.push('/businesses')
    }
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    };

    const onSearch = (searchTerm) =>{
        setValue(searchTerm)
        if (searchTerm === 'cleaning' || searchTerm === 'Cleaning') history.push('/services/cleaning')
        if (searchTerm === 'Home Repair' || searchTerm === 'home repair') history.push('/services/homerepair')
        if (searchTerm === "Handyman services" || searchTerm === "handyman services") history.push('/services/handyman')
        if (searchTerm === "Phone Repair" || searchTerm === "phone repair") history.push('/services/phonerepair')
        if (searchTerm === "Tv Mounting" || searchTerm === "tv mounting") history.push('/services/tvmounting')
    }

    return (
        <>
        <div className="search-container" >
            <div className="search-inner" >
                <input
                    type="text"
                    placeholder="Search..."
                    value={value}
                    onChange={onChange}
                    className="searchin"
                />
                <button className="searchinbut" onClick={() => onSearch(value)}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <div className="dropdown" >
                {data.filter(item => {
                    const searchTerm = value.toLowerCase()
                    const name = item.name.toLowerCase()
                    return searchTerm && name.includes(searchTerm) && searchTerm !== name
                })
                .map((item) => (
                    <div onClick={() => onSearch(item.name)} className="dropdown-row" key={item.name} >{item.name}</div>
                ))

                }
            </div>
        </div>
        <div class="grid-container">
            <div class="card" value="cleaning" onClick={handleClick}>
                <img value="cleaning" src={cleaning} alt="Cleaning" />
                <h2 value="Cleaning">Cleaning Services</h2>
            </div>
            <div class="card" value="handy" onClick={handleClick}>
                <img value="handy" src={handy} alt="Handyman" />
                <h2 value="handy">Handyman Services</h2>
            </div>
            <div class="card" value="homerepair" onClick={handleClick}>
                <img value="homerepair" src={homerepair} alt="Homerepair" />
                <h2 value="homerepair">Home Repair</h2>
            </div>
            <div class="card" value="phone" onClick={handleClick}>
                <img value="phone" src={phone} alt="Phone" />
                <h2 value="phone">Phone repair</h2>
            </div>
            <div class="card" value="fortv" onClick={handleClick}>
                <img value="fortv" src={fortv} alt="Tv" />
                <h2 value="fortv">Tv Mounting</h2>
            </div>
            
        </div>
        </>
    )

}