import Alerts from "../../alerts/Alerts";
import { useState } from "react";

interface Props {
    padding: number;
    innerRadius: number;
    outerRadius: number;
}

function DisplayBox({ padding, innerRadius, outerRadius }: Props) {

    const [showAlert, setShowAlert] = useState(false)
    const [alertText, setAlertText] = useState('')

    const copyText = async (copyText: string, alertText: string) => {
        await navigator.clipboard.writeText(copyText)
        setShowAlert(true)
        setAlertText(alertText)
        setTimeout(() => {
            setShowAlert(false)
        }, 2000);
    }

    return (
        <div className="w-10/12 max-w-[400px] m-auto">
            <div className="w-full aspect-square border-2 border-primary borderBoxShadow" style={{ borderRadius: outerRadius, padding: padding }}>
                <div className="w-full h-full border-2 border-secondary borderBoxShadow inner" style={{ borderRadius: innerRadius }}></div>
            </div>
            <div className="grid grid-cols-3 place-items-center gap-0.5 mt-8 overflow-hidden rounded-3xl">
                <button
                    onClick={() => copyText(`border-radius: ${innerRadius}px;`, 'Copied inner radius!')}
                    className="bg-highlight w-full text-center py-1 hover:bg-focusHighlight transition-all"
                >
                    {innerRadius}
                </button>
                <button onClick={() => copyText(`padding: ${padding}px;`, 'Copied padding!')} className="bg-highlight w-full text-center py-1 hover:bg-focusHighlight transition-all">
                    {padding}
                </button>
                <button
                    onClick={() => copyText(`border-radius: ${outerRadius}px;`, 'Copied outer radius!')}
                    className="bg-highlight w-full text-center py-1 hover:bg-focusHighlight transition-all"
                >
                    {outerRadius}
                </button>
            </div>
            <Alerts show={showAlert} text={alertText}/>
        </div>
    );
}

export default DisplayBox;
