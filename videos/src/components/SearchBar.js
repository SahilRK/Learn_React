import React from 'react';

class SearchBar extends React.Component{
    state={
        searchVal:""
    }
    //This function gets triggered as soon as the user enters something in the search text box. It gets a default argument called event which is passed to every special predefined event handler function.
    onInputChange = (event) =>{
        this.setState({ searchVal: event.target.value})
    }
    render(){
        return(
            <div className="search-bar-container ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchVal}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar