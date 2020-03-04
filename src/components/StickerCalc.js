import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function StickerCalc() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [qty, setQty] = useState(0);


    const handleInputChange = event => {
        const { name, value } = event.target
        switch (name) {
            case "width":
                setWidth(value)
                break
            case "height":
                setHeight(value)
                break
            case "qty":
                setQty(value)
                break
            default:
        }
    }

    function resetBase(totalArea) {
        switch (true) {
            case (totalArea < 2500):
                console.log("0.0381")
                return 0.0381;
            case (totalArea < 5000):
                console.log("0.0335")
                return 0.0335;
            case (totalArea < 7500):
                console.log("0.0231")
                return 0.0231;
            case (totalArea < 10000):
                console.log("0.0208")
                return 0.0208;
            case (totalArea < 15000):
                console.log("0.0196")
                return 0.0196;
            case (totalArea < 18000):
                console.log("0.0185")
                return 0.0185;
            case (totalArea < 21000):
                console.log("0.0173")
                return 0.0173;
            case (totalArea <= 25000):
                console.log("0.0168")
                return 0.0168;
            default:
                return "Please email us your artwork for a quote.";
        }
    };


    const area = width * height;
    const totalArea = area * qty;
    const base = resetBase(totalArea);
    const cost = totalArea * base;

    return ( <
        div className = "p-3 bg-light" >

        <
        div > Width < /div> <
        Form className = "form" >
        <
        input value = { width }
        name = "width"
        onChange = { handleInputChange }
        type = "number"
        placeholder = "0.0" /
        >
        <
        br / > < br / >
        <
        div > height < /div> <
        input value = { height }
        name = "height"
        onChange = { handleInputChange }
        type = "number"
        placeholder = "0.0" /
        >
        <
        br / > < br / >
        <
        div > Quantity < /div> <
        input value = { qty }
        name = "qty"
        onChange = { handleInputChange }
        type = "number"
        placeholder = "100" /
        >
        <
        br / > < br / >
        <
        div > Base Price - $ { base } < /div> <
        div > Total Cost - $ { cost } < /div> <
        div > Sticker area - { area } < /div> <
        div > Total area - { totalArea } < /div>

        { console.log("area - " + [area]) } { console.log("qty - " + [qty]) } { console.log("base - $" + [base]) } { console.log("total area - " + [totalArea]) } { console.log("cost - $" + [cost]) } <
        /Form>

        <
        /div>
    )
}

export default StickerCalc