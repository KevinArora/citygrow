import React, { Component } from 'react';
import "./GardenDisplayItemHead.css";

const divStyle = {
  color: 'red',
};

 // displays the specific information for the garden selected
const GardenDisplayItemHead = props => (

    <div className="garden-data">
      <div className="garden-item">
        <div className="selectedGdn">
          <h4>Garden Selected:
            <div className="mainHeaderInfo" style={divStyle}> {props.name}</div>
          </h4>
          <h4>Id Number:
            <div className="mainHeaderInfo" style={divStyle}> {props.garden_id}</div>
          </h4>
          <h4>Area Zipcode:
            <div className="mainHeaderInfo" style={divStyle}> {props.zipcode}</div>
          </h4>
        </div>
        <br></br>
        <div className="instructionsSelect">
          <p id="instructionText">Instructions to Select a Lot</p>
          <ol className="instructionsList">
            <li>Click the button with the Lot number you want to use</li>
            <li>If no produce has been planted, add the ID of the produce to be planted (*Produce ID legend on the right)</li>
            <li>Enter your user ID, if the Lot doesn't have one assigned</li>
            <li>Confirm the reservation with the "Reserve" button</li>
          </ol>
        </div>
      </div>
    <div className="produceLegend">
      <p id="prodDescription">Produce ID Legend:</p>
      <ol className="produceList">
        <li>Carrot</li>
        <li>Pepper</li>
        <li>Cilantro</li>
        <li>Tomato</li>
        <li>Beets</li>
        <li>Beans</li>
        <li>Potato</li>
        <li>Pumpkin</li>
        <li>Basil</li>
        <li>Sweet Potato</li>
        <li>Garlic</li>
        <li>Zucchini</li>
      </ol>
    </div>
  </div>
);

export default GardenDisplayItemHead;
