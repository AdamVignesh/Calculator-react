import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function Key(props)
{
    return (
        <div>
            <Button variant="dark" onClick={props.onClick} className={props.className}>{props.txt}</Button>
        </div>
    );
}

export default Key;