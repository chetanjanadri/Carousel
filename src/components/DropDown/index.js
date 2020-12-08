import React from 'react';
import "./DropDown.css";
export const DropDown = ({name, elements, onClick, selectedCategory}) => {
    return (
    <React.Fragment>
        <div className="drop-down">
            <button className="btn">
                {name}
            </button>
            <div className="content">
                {
                    elements.map((item, index) => (
                        <button 
                            className={selectedCategory === item.category ? "content-item item-highlight": "content-item"} 
                            onClick={() => onClick(item.category)} 
                            key={index} 
                        >
                            {item.label}
                        </button>
                    ))
                }
            </div>
        </div>
    </React.Fragment>
    )
}