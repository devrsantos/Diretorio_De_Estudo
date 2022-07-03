import React from 'react';

function Button(props) {
    const { name, fn } = props;

    return (
        <button onClick={fn}>{ name }</button>
    )
}

export default Button;