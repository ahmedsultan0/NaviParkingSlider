import { useState } from "react";
import RangeInput from "./RangeInput";
import Track from "./Track";
import "../App.css";

// Main PriceRange Component
const PriceRange = ({ minRange, maxRange }) => {
    const [currentMinValue, setCurrentMinValue] = useState(minRange);
    const [currentMaxValue, setCurrentMaxValue] = useState(maxRange);

    // Calculate the percentage positions of the handles
    const minPercent = ((currentMinValue - minRange) / (maxRange - minRange)) * 100;
    const maxPercent = ((currentMaxValue - minRange) / (maxRange - minRange)) * 100;

    // Handlers for range input changes
    const handleMinChange = (value) => setCurrentMinValue(Math.min(value, currentMaxValue));
    const handleMaxChange = (value) => setCurrentMaxValue(Math.max(value, currentMinValue));

    return (
        <div className="double_range_slider_box">
            <h1>Slider without libraries</h1>
            <Track
                min={currentMinValue}
                max={currentMaxValue}
                minPercent={minPercent}
                maxPercent={maxPercent}
                unhighlightedColor="#D3D3D3"
                highlightedColor="#000"
            />
            <RangeInput
                min={minRange}
                max={maxRange}
                value={currentMinValue}
                onChange={handleMinChange}
                className="min"
            />
            <RangeInput
                min={minRange}
                max={maxRange}
                value={currentMaxValue}
                onChange={handleMaxChange}
                className="max"
            />
        </div>
    );
};

export default PriceRange;
