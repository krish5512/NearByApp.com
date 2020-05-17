import React from 'react';
//import Geosuggest,{ Suggest } from 'react-geosuggest';
import { GoogleMap,withScriptjs,
    withGoogleMap,Marker } from 'react-google-maps';

//const key = "AIzaSyCUX3ELi1rKuy8hRRdHxMoDffZW_4wwI6k";
const google = window.google;

class ShowPlaceData extends React.Component {

    static defaultProps = {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCUX3ELi1rKuy8hRRdHxMoDffZW_4wwI6k&libraries=places"
    }
  
    constructor(props)
    {
        super(props);
    }

    fetchPlaces () {
        const service = new google.maps.places.PlacesService(this.CMap);
        const pyrmont = { lat : this.props.latValue,lng : this.props.longValue};
        service.nearbySearch({
            location: pyrmont,
            radius: 500
          }, callback);
          function callback(results) {
              for (var i = 0; i < results.length; i++) {
                console.log(results[i]);
              }
            
          }
         
    }

    

CMap = withScriptjs(withGoogleMap(props =>
    <GoogleMap 
                defaultZoom={15}
                defaultCenter = {{ lat : this.props.latValue,lng : this.props.longValue}}
                onTilesLoaded={props.fetchPlaces}
            >
        {props.children}
    </GoogleMap>
  ))




  render() {
        return (
            <div>
           <this.CMap 
                     googleMapURL={this.props.googleMapURL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px`, width :`400px`, paddingLeft:'200px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}  
                    center= {{ lat : this.props.latValue,lng : this.props.longValue}}    
           >
           <Marker
                        position={{lat : this.props.latValue,lng : this.props.longValue}}
                    />
                    </this.CMap>

          
                </div>
        )
    
}

}



























// class ShowPlaceData extends React.Component {

//     constructor(props)
//     {
//         super(props);
//         this.getNearbyFeed = this.getNearbyFeed.bind(this);
//        this.state = {
//            mapData : [],
//            mdata : false
           
//        }
//     }

//  async componentDidUpdate (prevState,prevProps) 
//  {
//      console.log(prevProps.showData,prevState.showData)
//      if(prevState.showData === this.state.mdata) {
//     console.log("inside it")
//     const lat = this.props.latValue;  
//     const long = this.props.longValue;
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     const accessPath = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+long+'&radius=150&key='+key;
//     const url = await fetch(proxyurl+accessPath);
//     const response = await url.json();
//     this.setState({ mapData :response.results,mdata : true})
//     }
    
//  }


// getNearbyFeed() {
//     console.log(this.state.mapData)
// }
//         // const { coord } = this.props;
//         // console.log(coord.params.latValue)
//     //     const accessPath = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+long+'&radius=150&key='+key;
//     //     const url = await fetch(accessPath, {mode: 'cors'});
//     //     const response = await url.json();
//     //     this.setState({ mapData : response})
//     // 


//     render()
//     {
        
//         return(
//             <div>
//             <button onClick={this.getNearbyFeed}         >Click</button>     
//             </div>
//         )
//     }
// }

export default ShowPlaceData;



