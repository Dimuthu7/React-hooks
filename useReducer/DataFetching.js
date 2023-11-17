import React, {useReducer, useEffect} from 'react';
import axios from axios;

const initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) =>{
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: "",
                post: action.payload
            }
        case "FETCH_ERROR":
            return {
                loading: ture,
                error: "Something went wrong!",
                post: {}
            }
        default:
            return state
    }
}

const DataFetching = () =>{
    const [count, dispatch] = useReducer(reducer, initialState);

    useEffect(() =>{
        axios.get("https://...")
        .then(response =>{
            dispatch({type: "FETCH_SUCCESS", payload: response.data})
        })
        .catch(error =>{
            dispatch({type: "FETCH_ERROR"})
        })
    }, []);

    return (
        <div>
            {state.loading ? "Loading" : state}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetching