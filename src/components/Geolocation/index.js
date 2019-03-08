import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./styles.css";
import Container from "react-bootstrap/Container";
//import NavBar from "../../NavBar";
import ButtonAppBar from "../../ButtonAppBar";
import MapFooter from "../../MapFooter";
export class Geolocation extends Component {
  state = {
    center: {
      lat: null,
      lng: null
    },
    zoom: 18
  };
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 18
  };
  componentDidMount = () => {
    console.log("mounting");
    navigator.geolocation.watchPosition(pos => {
      console.log("got pos", pos);
      this.setState({
        center: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });
    });
  };

  render() {
    const { center, zoom } = this.state;
    console.log("center", center);
    return (
      <Container className="GMapsContainer">
        <ButtonAppBar />
        {!center && <p>Loading</p>}
        {center.lat && (
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAza6NYglxsXDph8wBLnBZi8eqNxwMnRKM"
              }}
              defaultCenter={center}
              defaultZoom={this.props.zoom}
            />
            <MapFooter />
          </div>
        )}
      </Container>
    );
  }
}

export default Geolocation;
