// in this page, we are creating customized hook useFetch. actually no need of this.we can directly fetch data using fetch. but we are just here creating a customized hook for fetching data.


import { useEffect, useState } from "react"


const useFetch=(url)=>{

    const[data,setData]=useState(null)

    useEffect(()=>{
        fetch(url).then(res=>{
            console.log(res);    // response will appear in console after refreshing. status 200.
            res.json().then(result=>{
                console.log(result.products);   // so array of object will appear in console. full data can see if pressed arrow on that.
                setData(result.products)
                
            })
        })
    },[])

    return data

}

export default useFetch