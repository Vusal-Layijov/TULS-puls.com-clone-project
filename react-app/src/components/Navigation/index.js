import React,{useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './index.css';
import { load_services_thunk } from '../../store/services';
import logo from './logo.png'
function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory()
	const dispatch = useDispatch()
	const [selectedCategory, setSelectedCategry] = useState('')
	// const handleclick = () => {
	// 	dispatch(load_services_thunk(1))
	// }
	//< NavLink to = 'services/cleaning' > Cleaning</NavLink>
	const handleCreateAndMAnag = (e) => {
		if (e.target.value === 'cleaning') history.push(`/services/cleaning`)
		if (e.target.value === 'Tv mounting') history.push(`/services/tvmounting`)
		if (e.target.value === 'homerepair') history.push(`/services/homerepair`)
		if (e.target.value === 'handyman') history.push(`/services/handyman`)
		if (e.target.value === 'phone') history.push(`/services/phonerepair`)
	}
	return (
		<div className='homePageNav' >
			<div id="logo-container">
				<NavLink style={{ marginLeft: '50px' }} exact to="/">
					<img
						src={logo}
						alt="logo"
						id="logo-image"
						style={{width:'70px',height:'45px'}}
					/>
				</NavLink>
				
			</div>
			<select value={selectedCategory} onChange={handleCreateAndMAnag}>
				<option value=''>Services</option>
				<option value='cleaning'>Cleaning</option>
				<option value='Tv mounting'>Tv Mounting</option>
				<option value='homerepair'>Home Repair</option>
				<option value='handyman'>Handyman services</option>
				<option value='phone'>Phone repair</option>
			</select>

			<NavLink to={'/membership'} >Membership</NavLink>

			<div style={{ paddingBottom: '5px', marginRight: '25px', display: 'flex', alignItems: 'center' }}>

				{sessionUser && (
					<>
						<NavLink to="/services/new" style={{ color: 'red' }} >Become a tulser</NavLink>
					</>
				)}
			</div>

			{isLoaded && (
				<div className='navStyle'>


					<div className='navbar-profile'>
						<ProfileButton className='navbar-profile' user={sessionUser} />
					</div>
				</div>
			)}
		</div>
	);
}

export default Navigation;