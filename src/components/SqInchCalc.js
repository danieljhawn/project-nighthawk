import React from 'react'

function SqInchCalc(props) {
    let value;

    value = props.width * props.height;

    return <span>{value}</span>
}


export default SqInchCalc;