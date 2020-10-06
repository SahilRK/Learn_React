import './SeasonDisplay.css'
import React from 'react';

const SeasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold',
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) => {
    if(month > 2 && month < 9){
        return lat > 0? 'summer': 'winter';
    }
    else{
        return lat > 0? 'winter': 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    //This is an example of destructuring concept of ES6 in objects. This is a concept of multiple value assignment.
    //We have to create the variable with the name of the key inside the object.
    const {text,iconName} = SeasonConfig[season];

    return(
        <div className={`season_display ${season}`}>
            <i className={`icon_left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon_right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;