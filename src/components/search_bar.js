import React, { Component } from 'react'

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = { term: '' };
	}

	render(){
		return (
				<div className='search-bar'>
					<input onChange={(event)=>this.onChange(event.target.value)} />
					
				</div>
			);
	}

	onChange(term){
		this.setState({term})
		this.props.onSearch(this.state.term)
	}

}

export default SearchBar;