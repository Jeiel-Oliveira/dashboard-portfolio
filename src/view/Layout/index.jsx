import React from 'react';

import Sidebar from 'components/Sidebar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from 'utils/reactRoutes';

import { Title } from './styled'

export default function Layout() {	
	
	return (		
		<div className="grid-layout">
			<Router>
				<Sidebar />

				<div className="grid-item-content">

					<Switch>
						{routes.map((route) => (
							<Route
								key={route.key}
								path={route.path}
							>	
								<Title>{route.name}</Title>
								<route.component />
							</Route>
						))}
					</Switch>

				</div>

			</Router>
		</div>		
	)

}