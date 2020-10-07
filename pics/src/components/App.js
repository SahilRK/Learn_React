import React from 'react';
import SearchBar from './SearchBar.js';

class App extends React.Component{

    onSearchSubmit(searchVal){
        console.log(`The user searched for ${searchVal}`);
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;