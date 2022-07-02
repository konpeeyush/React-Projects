import React from 'react'
import { useState } from 'react';
const SquareComponent = (props) => {
    const classes = (props.className ? `square ${props.className}` : 'square');
    return (
        <span
            className={classes}
            onClick={props.onclick}
        >
            {props.state}
        </span>
    );
}

export default SquareComponent;