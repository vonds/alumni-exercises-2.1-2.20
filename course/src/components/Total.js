import React from 'react';

const Total = props => {

    const { parts } = props;
    return(
        <b>
            Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}
        </b>
        
    )
}

export default Total