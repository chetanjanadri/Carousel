import React from 'react';
import "./CarouselItem.css";
import styled from "styled-components"

const PriceTag = styled.div`
    display: flex;
    background-color: green;
    justify-content: flex-end;
    align-items: center;
    height:10%;
    border-radius: 0 0 0.5rem 0.5rem;
`

const PriceText=styled.i`
    color: white;
    font-size: 1.5rem;
    padding: 0.5rem;

`
export const CarouselItem = ({item, isActive, moveDirection, moveLength }) => {
    const moveAnimation = {transform: `translate(${moveLength}%)`}
    return (
        <React.Fragment>
            <div className={isActive ? "CarouselItemContainer CarouselItemContainerActive"  : "CarouselItemContainer CarouselItemContainerInactive"} style={{...moveAnimation, transition: "all 1s ease-in-out"}}>   
                        <img style={{padding: "1%"}}src={item.imgUrl} height="90%" width="100%" alt=""></img>
                        <PriceTag>
                            <PriceText>Price: Rs {item.price}</PriceText>
                        </PriceTag>
            </div>
        </React.Fragment>
            
            
    )
}