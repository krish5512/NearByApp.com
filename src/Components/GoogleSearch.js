import React from 'react';
import ShowPlaceData from './ShowPlaceData';
//import MyFancyComponent from './MyFancyComponent';

class GoogleSearch extends React.Component {

    constructor(props)
    {
        super(props);
      
        this.state = {
             latitude : null,
             longitude : null,
             gdata : false
        }
    }

    componentDidMount () {
        navigator.geolocation.getCurrentPosition(
           position => this.setState(() => {
            return {
                latitude : position.coords.latitude,
                longitude : position.coords.longitude
            }
        })
            );
    }

    // getMapData = async () => {
    //     const lat = this.state.latitude;
    //     const long = this.state.longitude;
    //     //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //     const accessPath = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+long+'&radius=150&key='+key;
    //     const url = await fetch(accessPath, {mode: 'cors'});
    //     const response = await url.json();
    //     console.log(response)
    // }
    
    render()
    {
      
        return(
            <div>
            <p>Want to know things near you ... ??</p>    
            <ShowPlaceData latValue = {this.state.latitude} longValue={this.state.longitude} showData={this.state.gdata}/>
     
                        </div>
        )
    }
}

export default GoogleSearch;


// <MyFancyComponent latValue = {this.state.latitude} longValue={this.state.longitude} />         


// <ShowPlaceData latValue = {this.state.latitude} longValue={this.state.longitude} showData={this.state.gdata}/>
       






