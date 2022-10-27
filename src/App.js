import './App.css';
import reportWebVitals from './reportWebVitals';
import React, {useEffect, useRef} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {add} from "./store/actionsCreators";



function App() {
    const dispatch = useDispatch();
    const val = useRef(null);
    const state=useSelector((state) => state)
    const addBtn = (e) => {
        dispatch(add(e.target.textContent));
         }
    return (
        <div className="custom-container">
            <div className="wrap">
                <h3>Change State</h3>
                <div className={'wrap-row-border'}>
                    <button type="button" className="btn btn-primary" onClick={addBtn}>Liquid</button>
                    <button type="button" className="btn btn-primary" onClick={addBtn}>Gas</button>
                    <button type="button" className="btn btn-primary" onClick={addBtn}>Solid</button>
                </div>
                <div className={'wrap-column-all-border'}>
                    <h2 className={'h20'}>H20 is feeling</h2>
                    <h2 className={'state'}>{state}</h2>
                </div>
            </div>
        </div>
        )


}

export default App;
