import { useState, useEffect } from "react"

const LazyLoadImage = ({source, alt}) => {
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        const image = new Image();
        image.src = source;
        image.onload = () => {
            setIsLoad(true)
        }
    }, [source])
  return (
    <div>
        {isLoad ? <img src={source} alt={alt} />: <div className="image-load-placeholder">nkjcjks</div>}
    </div>
  )
}

export default LazyLoadImage