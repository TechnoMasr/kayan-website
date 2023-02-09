import React, { useState } from 'react';
import './ContactUsForm.css';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const apiUrl = 'https://kayan-website-dashboard.kayanhills.com/api';
const ContactUsForm = ({ language }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	const [address, setAddress] = useState('');
	const handleContact = (e) => {
		e.preventDefault();
		const blog = { name, phone, message, email, address };
		fetch(`${apiUrl}/sendMessage`, {
			method: 'POST',
			// credentials: "include",
			headers: {
				'Content-Type': 'application/json',
				lang: 'en',
			},
			body: JSON.stringify(blog),
		})
			.then((data) => data.json())
			.then((res) => {
				if (res.status) {
					setName('');
					setMessage('');
					setPhone('');
					setEmail('');
					toast.success('your data sent succesfully');
					navigate('/');
				} else {
					toast.error('there is an error , please try again ');
				}
			});
	};

	return (
		<div className='contactUsForm'>
			<form className='contact-validation-active'>
				<div className='row'>
					<div className='col col-lg-6 col-12'>
						<div className='form-field'>
							<input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
						</div>
					</div>
					<div className='col col-lg-6 col-12'>
						<div className='form-field'>
							<input type='tel' placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
						</div>
					</div>
					<div className='col col-lg-6 col-12'>
						<div className='form-field'>
							<input type='text' placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
						</div>
					</div>
					<div className='col col-lg-6 col-12'>
						<div className='form-field'>
							<input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
						</div>
					</div>

					<div className='col col-lg-12 col-12'>
						<textarea placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
					</div>
					<div className='submit-area'>
						<button className='theme-btn' onClick={handleContact}>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactUsForm;
