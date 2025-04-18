import React from 'react';

const Button = (props) => {

    const { border, text } = props;
    return (
        <button className={`btn btn-xs md:btn-md md:px-7 md:py-6 ${border ? "border-main bg-transparent hover:text-main" : "bg-gradient-to-r from-main to-common hover:text-second "}`}>{text}</button>
    );
};

export default Button;