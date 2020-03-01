import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function StickerCalc() {

    const [area, setArea] = useState(0);
    const [qty, setQty] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [cost, setCost] = useState(0);
    // const [base, setBase] = useState(0);
    const basePrice = 0.05;

    useEffect(() => { setArea(width * height) }, [width, height])
    useEffect(() => { calcPrice() }, [area, qty])

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

    function calcPrice() {
        setQty(qty)
        setCost(area * qty * basePrice)
    }

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
                <div>${cost}</div>

                {console.log("area - " + [area])}
                {console.log("qty - " + [qty])}
                {console.log("cost - $" + [cost])}
            </Form>

        </div>
    )
}

export default StickerCalc
