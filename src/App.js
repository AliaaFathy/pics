import  api from './api'
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import {useState} from "react";

function App(){
    const [images,setImages]=useState([])
    const getContent=async (term)=>{
        console.log(term)
         const result= await searchImages(term) ;
        setImages(result);
        console.log(result)
    }
    return(
        <div>
            <SearchBar searchContent={getContent}/>
            <ImageList imagesList={images}/>
        </div>
    )
}
export default App