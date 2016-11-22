import React, { Component } from 'react';
import GardenListItem from '../GardenListItem/GardenListItem.jsx';

class GardenList extends Component {

  showGardens(collection) {
    return collection.map((garden, index) =>
      <article className="garden-list-item" key={index} onClick={()=>this.props.changeSelection(index)}>
        <GardenListItem
          key={garden.index}
          name={garden.name}
          zipcode={garden.zipcode}
        />
     </article>
    );
  }

  componentWillMount() {
    this.props.getAllGardens();
  }

  render(){
    return (
<<<<<<< HEAD

      <div>
      <div>
        <h3>Choose from existing gardens: </h3>
      </div>

        <GardenListItem />
       <div className="list-container">
        {/* render a list of houses based on our props.collection */}
=======
      <div className="list-container">
>>>>>>> e038d2a2a2992f42a606b5b74c231439704c751e
        {this.showGardens(this.props.collection)}

      </div>
      </div>
    );
  }

}



export default GardenList;
