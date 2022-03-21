import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--secondary', 'btn--secondary--outline'];
const SIZES = ['btn--small', 'btn--medium', 'btn--large', 'btn--long'];

export const Button = ({children, id, type, onClick, buttonStyle, buttonSize, path, disabled = false}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to={path} className='btn-mobile'>
            <button
                id={id}
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                disabled={disabled}
            >
                {children}
            </button>
        </Link>
    )
};