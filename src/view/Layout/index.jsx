import React from 'react';

import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import SearchPokemon from '../searchPokemon'

export default function Layout({  }) {

	return (		
		<div className="grid-layout">
			
			<Sidebar className="grid-item-sidebar" />

			<Navbar className="grid-item-navbar" />

			<div className="grid-item-content">
				<SearchPokemon />
			</div>
		</div>		
	)

}