import React from 'react';

const Skill = (props) => {

	const width = '100px';

	return (
		<figure>
			<img src={props.img} alt={props.caption} width={width} />
			<figcaption>{props.caption}</figcaption>
		</figure>
	);
};

export default Skill;
