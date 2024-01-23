import React from 'react';

const Button = ({click, clase, children}) => {
    return (
        <button className={'button ' + clase} onClick={click}>
            {children}
        </button>
    );
}

export default Button;
