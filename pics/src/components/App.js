import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component{

    state = { images: [] }
    //Find the First method in the notes given below.
    //Second method of api request with async await
    onSearchSubmit = async (searchVal) => {
        //We use the get request to fetch data related to our query term. The GET request takes two arguments
        //First argument is the query string and the second one is the options like params,header etc.
        const response = await unsplash.get('/search/photos',{
            params:{
                query: searchVal
            },
            
        });

        this.setState({ images: response.data.results});
        
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;

//NOTES:
//First method of api request with Promise based syntax of .then()
    // onSearchSubmit(searchVal){
    //     //We use the get request to fetch data related to our query term. The GET request takes two arguments
    //     //First argument is the query string and the second one is the options like params,header etc.
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params:{
    //             query: searchVal
    //         },
    //         headers: {
    //             Authorization: 'Client-ID 61rOcdgdI-4KzANYrd9UOIm9R9GhMT191jGf7c952vw'
    //         }
    //     }).then((response)=> {
    //         console.log(response.data.results);
    //     });
        
    // }