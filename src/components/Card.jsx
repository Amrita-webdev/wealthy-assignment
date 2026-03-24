const Card = ({children, width, height, backgroundColor, radius, className, style}) => {
    return (
        <div className={`bg-[${backgroundColor}] w-[${width}] h-[${height}] ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Card