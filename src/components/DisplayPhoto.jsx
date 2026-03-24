const DisplayPhoto = ({src, alt}) => {
    return (
        <img src={src} alt={alt} className="w-[25px] h-[25px] rounded-full"/>
    )
}

export default DisplayPhoto