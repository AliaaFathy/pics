import ImageShow from "./ImageShow";
import './ImageList.css'
function ImageList({imagesList}){
    const renderedImages=imagesList.map((image)=>{
        return <ImageShow key={image.id} image={image}/>
    })
    return(
        <div className="img-list">{renderedImages}</div>
    )
}
export default ImageList