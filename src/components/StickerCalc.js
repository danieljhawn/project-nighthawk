import React, { useState, useEffect } from 'react';
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
            case (totalArea < 100):
                return 0.1;
            case (totalArea > 100):
                return 0.05;
            default:
                return 69;
        }
    };


    const area =  width * height;
    const totalArea = area * qty;
    const base = resetBase(totalArea);
    const cost = totalArea * base;

    return (
        <div className="p3">
            
            <div>Width</div>
            <Form className="form">
                <input
                    value={width}
                    name="width"
                    onChange={handleInputChange}
                    type="number"
                    placeholder="0.0"
                /><br /><br />
                <div>height</div>
                <input
                    value={height}
                    name="height"
                    onChange={handleInputChange}
                    type="number"
                    placeholder="0.0"
                /><br /><br />
                <div>Quantity</div>
                <input
                    value={qty}
                    name="qty"
                    onChange={handleInputChange}
                    type="number"
                    placeholder="100"
                /><br /><br />
                <div>Base Price - ${base}</div>
                <div>Total Cost - ${cost}</div>
                <div>Sticker area - { area }</div>
                <div>Total area - {totalArea}</div>

                {console.log("area - " + [area])}
                {console.log("qty - " + [qty])}
                {console.log("base - $" + [base])}
                {console.log("total area - " + [totalArea])}
                {console.log("cost - $" + [cost])}
            </Form>

        </div>
    )
}

export default StickerCalc
