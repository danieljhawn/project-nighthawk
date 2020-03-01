import React, { Component, useState } from 'react';
import SqInchCalc from './SqInchCalc';



function StickerCalc() {

    const [data, setData] = useState({
        sqInch: ,
        totalSqInch: 0
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        const newData = {
            [name]: value
        }
        setData({ ...data, ...newData });
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        setData({
            sqInch: '',
            totalSqInch: ''
        });
    };

    return (
        <div>
            <form className="form">
                <input
                    value={data.width}
                    name="width"
                    onChange={handleInputChange}
                    type="text"
                    placeholder=""
                /><br/><br/>
                <input
                    value={data.height}
                    name="height"
                    onChange={handleInputChange}
                    type="text"
                    placeholder=""
                /><br/><br/>
                <SqInchCalc />
            </form>

        </div>
    )
}

export default StickerCalc
