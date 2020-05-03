import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './common.css';


const Alert = (props) => {
    return (
        <CSSTransition 
            in = {props.alert.boolean}
            timeout = {{
                enter: 500,
                exit: 350
            }}
            classNames = {"alert"}
            mountOnEnter
            unmountOnExit
        >
            <div className="alert">
                <div className={props.alert.className}>
                    <span className="closebtn" onClick={()=>props.onHideAlert(false)}>&times;</span>
                    <span className="alertBody">
                        <h4>{props.alert.title}:</h4> 
                        <p>{props.alert.message}</p>
                    </span>
                </div>     
            </div>
        </CSSTransition>
    )
}

export default Alert;