
import axios from "axios";


 export const BASE_URL='https://bayut.p.rapidapi.com'

 export const PROPERTY_LIST_FOR_SALE ='properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6'

 export const PROPERTY_LIST_FOR_RENT ='properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6'




export const fetchApi=async(url)=>{

    try {

        const {data} = await axios.get(url,{
            headers: {
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                'X-RapidAPI-Key': 'e7144446f7msh50ebec684a5f6a3p1b75a3jsn2d42e22f0d0a'
              }})
                
       return data
        
    } catch (error) {
        console.log(error)
        
    }
}