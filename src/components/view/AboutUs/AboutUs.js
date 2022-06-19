import React from 'react'
import AboutCusmat from './AboutCusmat'
import KnowMore from './KnowMore'
import MeetTeam from './MeetTeam'
import OurInvestor from './OurInvestor'
import Navbar from '../../layout/Navbar'

const AboutUs = () => {
	return (
		<div>
			<Navbar />
			<AboutCusmat />
			<OurInvestor />
			<MeetTeam />
			<KnowMore />
		</div>
	)
}

export default AboutUs
