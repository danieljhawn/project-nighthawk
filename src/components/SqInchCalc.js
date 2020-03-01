import React from 'react'

function SqInchCalc(props) {
    let value;

    value = props.width * props.height;
    console.log(props.width);
    console.log(props.height);
    return <span>{value}</span>
}


export default SqInchCalc;