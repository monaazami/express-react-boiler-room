import React, { Component } from 'react';
import './sets.css';

class Sets extends Component {
	constructor() {
		super();
		this.state = {
			sets: []
		};
	}

	componentDidMount() {
		fetch('/api/sets')
			.then(res => res.json())
			.then(sets => this.setState({ sets }, () => console.log('Sets fetched ...', sets)));
	}
	render() {
		return (
			<div>
				<h2>My favourite sets from Boiler Room</h2>

				<table id="customers">
  					<tr>
    					<th>Title</th>
    					<th>Artist</th>
    					<th>Location</th>
						<th>Jenres</th>
  					</tr>
  					{this.state.sets.map(sets =>(
					<tr key={sets.id}>
    					<td>{sets.title}</td>
    					<td>{sets.artist}</td>
    					<td>{sets.location}</td>
						<td>{sets.genres}</td>
  					</tr> 
  				))}
				</table>
			</div>
		);
	}
}

export default Sets;
