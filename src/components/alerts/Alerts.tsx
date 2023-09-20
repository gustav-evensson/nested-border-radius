interface Props {
    show: boolean,
    text: string
}

function Alerts({ show, text}: Props) {

    return(
        <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-secondary px-6 py-3 rounded-lg ${show ? 'opacity-100' : 'opacity-0'} transition-all z-50` }>
            <p className="text-background">{text}</p>
        </div>
    )
}

export default Alerts