import {useState} from "react";

import './SearchBar.css'
function SearchBar({searchContent}){
    const[term,setTerm]=useState('')
    const handleEvent=(event)=>{
        setTerm(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(term)
        searchContent(term)

    }
    return(
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <label>Enter Search Term</label>
            <input   value={term} onChange={handleEvent} />
            </form>
        </div>
    )
}
export default SearchBar