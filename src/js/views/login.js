  import React, {  useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export function Login() {
    const { actions, store } = useContext(Context);

    return (
    <h1>
        <p>Go To Dashboard</p>
        {store.isLoggedIn ? <Redirect to={"/Dashboard"} />
        :
        <p>To see ToDoList</p>
        }
        <button 
        type="button" className="btn btn-success"
        onClick={() => actions.login()}>Click Me!!!</button>
    </h1>
    
    );
}   
