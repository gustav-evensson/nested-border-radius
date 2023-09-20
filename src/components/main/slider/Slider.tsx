interface Props {
    disabled?: boolean;
    callback: any;
    sliderValue: number;
    label: string;
}

// This component contains a slider as well as an input field that get validated before returning the value to the parent

function Slider({ disabled, callback, sliderValue, label }: Props) {
    return (
        <div className="w-full mb-3">
            <label htmlFor="slider">
                <p>{label}</p>
            </label>
            <div className="w-full flex items-center gap-4 mt-2">
                <input
                    disabled={disabled}
                    min="0"
                    max="100"
                    type="range"
                    name="slider"
                    className="slider"
                    value={sliderValue}
                    onChange={(e) => callback(parseInt(e.target.value))}
                />
                <input
                    disabled={disabled}
                    type="text"
                    value={sliderValue}
                    onChange={(e) => {
                        try {    
                            const parsedInt = parseInt(e.target.value || "0")
                            if (parsedInt < 0) callback(0)
                            else if (parsedInt > 100) callback(100)
                            else callback(parsedInt)
                        } catch {
                            callback(0);
                        }
                    }}
                    className="bg-highlight min-w-0 w-12 text-center py-1 outline-none focus:bg-focusHighlight rounded-3xl disabled:opacity-20 transition-all"
                />
            </div>
        </div>
    );
}

export default Slider;
