import {useEffect,useState} from "react"
import axios from "axios"
const useFetch=(url)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)

 useEffect(()=>{
    const fetchdata=async()=>{
        setLoading(true);
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
            const res=await axios.get(url);
            setData(res.data);
        }catch(err){
            setError(err);
        }
        setLoading(false)
    };
    fetchdata();
   },[url]);
   

   const reFetch=async()=>{
    setLoading(true);
    try{
        const res=await axios.get(url);
        setData(res.data);
    }catch(err){
        setError(err);
    }
    setLoading(false)
};

return {data,loading,error,reFetch}

};

export default useFetch;


