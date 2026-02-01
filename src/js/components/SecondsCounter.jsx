import React from "react";

function SecondsCounter(props) {
const seconds = props.seconds;

const digitSix=Math.floor(seconds/100000) ;
const digitFive=Math.floor(seconds/10000) ;
const digitFour=Math.floor(seconds/1000) ;
const digitThree=Math.floor(seconds/100) ;
const digitTwo= Math.floor(seconds/10) ;
const digitOne= seconds %10;

return (
<div className="bigCounter justify-content-center gap-2 align-items-center fs-2">
    <div className ="calendar">
    <i className="far fa-clock"></i>
    </div>
    <div className="six">{digitSix % 10}</div>
    <div className="five">{digitFive % 10}</div>
    <div className="four">{digitFour % 10}</div>
    <div className="three">{digitThree % 10}</div>
    <div className="two">{digitTwo % 10}</div>
    <div className="one">{digitOne}</div>
</div>
);
}

export default SecondsCounter;