import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export function Dashboard() {
  const { actions, store } = useContext(Context);
  const [inputText, setInputText] = useState("");
  const [lista, setlista] = useState(store.todos);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    if (inputText !== "") {
      setlista(actions.addTask(inputText));
      setInputText("");
    }
    e.preventDefault();
  };
  const borrar = (t) => {
    setlista(actions.deleteTask(t));
  };

  return (
    <div className="container w-25 bg-light p-5">
      <h1>To do List :</h1>
      <div className="Container mt-5 p-1 align-items-center">
        <div className="card">
          <div className="card-body">
            <li className="list-group-item d-flex justify-content-between p-1 align-items-center">
              <form className="form-control p-0" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={inputText}
                  placeholder="remind me to. . ."
                />
              </form>
            </li>
            <ul className="list-group-flush">
              {lista.map((t, i) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between p-1 align-items-center"
                    key={i}
                  >
                    <span>{t}</span>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => borrar(t)}
                    ></button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer mt-5" id="footer">
            Tasks : <strong id="number">{lista.length}</strong>
          </div>
        </div>
        <div className="mt-5" id="footer">
        {store.isLoggedIn ? (
        <p>
          Return main page,{""}
          <button 
          type="button" className="btn btn-success" 
          onClick={() => actions.logout()}>logout</button>
        </p>
      ) : (
        <Redirect to={"/"} />
      )}
      </div>
      </div>
    </div>
  );
}
