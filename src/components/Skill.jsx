import React from 'react';

const Skill = (props) => {

	return (
		<figure>
			<img src={props.img} alt={props.caption} />
			<figcaption>{props.caption}</figcaption>
		</figure>
	);
};

export default Skill;
