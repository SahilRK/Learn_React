import React from 'react';

//We are creating a class based component because at some point we are going to be using the state object in it
class SearchBar extends React.Component{

    state = {
        searchBarVal: ''
    }

    //By using function expressions like below, the "this" keyword will always point out to the current instance.
    onFormSubmit = (e) => {
        e.preventDefault();
        
        //When we call the props that is passed to a Class component, we have to use the this keyword to access the props 
        this.props.onSubmit(this.state.searchBarVal);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui fluid action input">
                        <input type="text" placeholder="Search..." value={this.state.searchBarVal} onChange={e => {
                            this.setState({searchBarVal: e.target.value})
                        }}/>
                        <div className="ui button">Search</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;