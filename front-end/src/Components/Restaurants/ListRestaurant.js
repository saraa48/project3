import React, { Component } from "react";
import CardRestaurant from "./CardRestaurant";
import "./CardStyle.css";
import axios from "axios";
import Navebar from "../navbar/Navebar";
import Footer from "../footer/Footer";
import Caroussel from "../slider/Caroussel";
import Partener from "../partner/Partener ";
class ListRestaurant extends Component {
  state = {
    OurRest: []
  };
  componentDidMount = () => {
    this.getRestaurant();
  };

  getRestaurant = () => {
    axios.get("/ProjectRest/restaurant/").then(res =>
      this.setState({
        OurRest: res.data
      })
    );
  };
  deleteRestaurant = id => {
    axios.delete(`/ProjectRest/restaurant/${id}`).then(this.getRestaurant);
  };

  render() {
    return (
      <div>
        <Navebar />
        <Caroussel />
        <Partener />
        <div className="liste-restaurants">
          {this.state.OurRest.map((el, key) => (
            <CardRestaurant
              key={key}
              restaurant={el}
              getRestaurant={this.getRestaurant}
              deleteRestaurant={this.deleteRestaurant}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default ListRestaurant;
