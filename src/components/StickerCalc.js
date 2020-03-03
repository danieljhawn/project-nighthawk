import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function StickerCalc() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [area, setArea] = useState(0);
    const [qty, setQty] = useState(0);
    const [totalArea, setTotalArea] = useState(0);
    const [cost, setCost] = useState(0);
    const [base, setBase] = useState(0.013);
    // const base = 0.05;

    useEffect(() => { setArea(width * height) }, [width, height])
    useEffect(() => { setTotalArea(area * qty) }, [area, qty])
    useEffect(() => { setBase(resetBase) }, [qty, totalArea])
    useEffect(() => { setCost(totalArea * base) }, [totalArea, base])

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
        switch (totalArea) {
            case (totalArea < 100):
                setBase(0.1)
                console.log("less than a hundo")
                break
            case (totalArea > 100):
                setBase(0.05)
                console.log("less than a hundo")
                break
            default:
                setBase(69)
        }
    };


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
                <div>Sticker area - {area}</div>
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
