import React from 'react';
import Avator from "./Avator";
import Details from "./Details";

function Card(props) {
	return(
		<div className='card'>
			<div className='top'>
				<p>{props.myContacts.key}</p>
				<h2 className='name'>{props.myContacts.name}</h2>
				<Avator imgURL={props.myContacts.imgURL}/>
			</div>
			<div className='bottom'>
				<Details details={props.myContacts.phone}/>
				<Details details={props.myContacts.email}/>
			</div>
		</div>
	)
}

export default Card;