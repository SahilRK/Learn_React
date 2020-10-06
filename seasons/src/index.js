//We import the libraries here using import statements
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//This is an example of a class based component
class App extends React.Component { 
    
    //We initialize the state object. It contains data that is relevant to the class.
    state = {
        lat: null,
        errorMessage: ''
    }

    //This is a life cycle method that gets executed automatically only once as soon as the component gets rendered on the screen. It performs functions similar to the constructor and can be used to initialize data(data loading).
    componentDidMount(){
        //The setState method is the only method that can be used to update the state object properties.
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    };

    //This method is called when the component gets updated. For eg. When the setState method is called. It is good to update data after the state object gets updated.
    componentDidUpdate(){
        console.log("My component was just updated and it rerendered!!");
    }

    //Use helper methods to segregate any conditional logic in the render method to avoid duplicating pieces of code
    seasonMessage(){
        if(this.state.errorMessage && !this.state.lat){
            return(
            <div>Error: {this.state.errorMessage}</div>
            );
        }else if(!this.state.errorMessage && this.state.lat){
            return(
            <SeasonDisplay lat={this.state.lat}/>
            );
        }else{
            return(
                <Spinner />
            );
        }
    }

    //This function is compulsary in React for class based components
    render(){
        return(
            <div>
                {this.seasonMessage()}
            </div>
        );
    };
};

//This method renders content on the screen.
ReactDOM.render(<App/>, document.querySelector("#root"));