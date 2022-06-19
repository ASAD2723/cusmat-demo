import React from 'react'
import { Outlet } from 'react-router-dom'
import SubFooter from './SubFooter'

const CusmatLayout = () => {
	return (
		<div>
			<div className="">{<Outlet />}</div>
			<SubFooter />
		</div>
	)
}

export default CusmatLayout
