import React from 'react';

const Spinner = (props) => {
    return(
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Please allow access to the location.'
}

export default Spinner
