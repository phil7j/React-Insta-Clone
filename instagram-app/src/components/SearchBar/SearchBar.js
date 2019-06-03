import React, { Component } from 'react'
import './searchbar.css'

export class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar">
                <div className="search-left">
                <p>Search Bar left</p>
                </div>
                <input placeholder="Search"/>
                <div className="search-right">
                <p>Search Bar right</p>
                </div>
            </div>
        )
    }
}

export default SearchBar
