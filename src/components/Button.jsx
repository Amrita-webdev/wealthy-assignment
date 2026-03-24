import "../app/globals.css"

const Button = ({width, shadow=false, backgroundColor, color, children, style, className}) => {

    return (
        <button className={`${shadow ? 'shadow-[4px_4px_4px_#4A90E2]': null} bg-[${backgroundColor}] h-[40px] rounded-[40px] text-[${color}] font-[600] cursor-pointer ${className}`} style={style}>
            {children}
        </button>
    )
}

export default Button