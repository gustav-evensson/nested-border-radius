import { useEffect, useState } from "react";
import DisplayBox from "./displayBox/DisplayBox";
import Slider from "./slider/Slider";

function BorderCalculations() {

    // Define reactive state variables
    const [innerDriven, setInnerDriven] = useState(false);
    const [outerRadius, setOuterRadius] = useState(36);
    const [innerRadius, setInnerRadius] = useState(24);
    const [padding, setPadding] = useState(12);

    // Watching the 3 main values to calculate the correct end value
    useEffect(() => {
        // If the inner border is the driving one we calculate the outer border based on it and the padding
        if (innerDriven) setOuterRadius(innerRadius + padding);

        // And the other way around if its not the driving one
        else setInnerRadius(outerRadius - padding < 0 ? 0 : outerRadius - padding);
    }, [outerRadius, padding, innerRadius]);

    return (
        <main className="text-secondary my-24 sm:my-32">
            <DisplayBox padding={padding} innerRadius={innerRadius} outerRadius={outerRadius} />
            <div className="flex flex-col w-10/12 mx-auto max-w-[400px] items-center justify-center mt-8">
                <Slider label="Inner radius" disabled={!innerDriven} sliderValue={innerRadius} callback={(val: number) => setInnerRadius(val)} />
                <Slider label="Padding" sliderValue={padding} callback={(val: number) => setPadding(val)} />
                <Slider label="OuterRadius" disabled={innerDriven} sliderValue={outerRadius} callback={(val: number) => setOuterRadius(val)} />
                <label className="container">
                    Inner driven
                    <input type="checkbox" checked={innerDriven} onChange={() => setInnerDriven(!innerDriven)} />
                    <span className="checkmark"></span>
                </label>
            </div>
        </main>
    );
}

export default BorderCalculations;
