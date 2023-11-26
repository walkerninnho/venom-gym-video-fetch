import React, {useState, createContext, useEffect} from "react";

const ApiContext = createContext()


export const FetchApiContext = ({api}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        let url = 'http://localhost:8000/findFile'
        fetch(url)
        // .then(res => {console.log(res)})
    }, [])
}