import React, { Component } from "react";
import Dimensions from "react-dimensions";
import { Container } from "./styles";
import MapGL from "react-map-gl";
import PropTypes from "prop-types";

const TOKEN =
  "pk.eyJ1IjoiYnJ1bm9nY3BpbmhlaXJvIiwiYSI6ImNqcjI5NHVtaDE3enE0NHM3d2I2MDI2YnIifQ.5DBff7UrYmSmSZTWfGbxuw";

class Map extends Component {
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  state = {
    viewport: {
      latitude: -19.7502,
      longitude: -47.9325,
      zoom: 13.0,
      bearing: 0,
      pitch: 0
    }
  };
  render() {
    const { containerWidth: width, containerHeight: height } = this.props;
    return (
      <MapGL
        width={width}
        height={height}
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

const DimensionedMap = Dimensions()(Map);
const Main = () => (
  <Container>
    <DimensionedMap />
  </Container>
);

export default Main;