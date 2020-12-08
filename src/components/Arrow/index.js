import React from 'react';
import styled from 'styled-components';

const ArrowStyle = styled.button`
    color: grey;
    font-size: 5em;
    background:none;
    border:none;
    outline: none;
`

export const Arrow = ({direction, onClick, visible}) => {
    if(!visible) return null
    return direction === "Left" ? (
        <React.Fragment>
            <ArrowStyle onClick={onClick}>&#10094;</ArrowStyle>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <ArrowStyle onClick={onClick}>&#10095;</ArrowStyle>
        </React.Fragment>
    )
}