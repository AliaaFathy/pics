import axios from "axios";
const searchImages = async (term) => {
    console.log(term)
  const response=await  axios.get('https://api.unsplash.com/search/photos',{
        headers:{
        Authorization:"Client-ID F3o0trD5JKCN1VdfbQ8wS4lOTWiamEsc-X1ktw94WPw"
        },
        params:{
            query:term,

        }
    });
  console.log(response.data.results)
    return response.data.results
}
export default  searchImages;

