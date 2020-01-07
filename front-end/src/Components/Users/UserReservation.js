import React, { Component } from "react";
import {
  Header,
  Rating,
  Button,
  Message,
  Image,
  Item,
  Dropdown,
  Icon
} from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route
} from "react-router-dom";

import "./UserReservation.css";
import Calendar from "react-calendar";
import { Form } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
// import PrivateRoute from "./PrivateRoute";

class UserEndReservation extends Component {
  constructor(props) {
    const date = new Date();
    var month = 0,
      dateNum = 0;
    if (date.getMonth() + 1 < 10) {
      month = "0" + (date.getMonth() + 1).toString();
    } else {
      month = date.getMonth() + 1;
    }
    if (date.getDate() < 10) {
      dateNum = "0" + date.getDate();
    } else {
      dateNum = date.getDate();
    }
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      restInfo: {},
      restCate: [],
      dates: date,
      month: month,
      date: dateNum,
      year: date.getFullYear(),
      existTableType: [],
      selectedTableTypeID: 0,
      dateFormat: "",
      MaxNum: 0
    };
    this.changeDate = this.changeDate.bind(this);
  }

  changeDate(date) {
    var month = 0,
      dateNum = 0;
    if (date.getMonth() + 1 < 10) {
      month = "0" + (date.getMonth() + 1).toString();
    } else {
      month = date.getMonth() + 1;
    }
    if (date.getDate() < 10) {
      dateNum = "0" + date.getDate();
    } else {
      dateNum = date.getDate();
    }
    this.setState({
      dates: date,
      month: month,
      date: dateNum,
      year: date.getFullYear()
    });
  }
  logout = () => {
    sessionStorage.removeItem("userToken");
    sessionStorage.clear();
  };
  

  render() {
    const {
      restInfo,
      restCate,
      dates,
      month,
      date,
      year,
      existTableType,
      MaxNum
    } = this.state;
    let timeButton = [];

    let i = 0,
      timeColumns = [],
      timeRows = [];
    while (i < timeButton.length) {
      for (let j = 0; j < 11; j++) {
        timeColumns.push(timeButton[i]);
        i++;
      }
      timeRows.push(
        <div key={i} className="buttonRows">
          {timeColumns.map(i => {
            return i;
          })}
        </div>
      );
      timeColumns = [];
    }
    let guestNumList = [];
    for (let i = 1; i <= MaxNum; i++) {
      guestNumList.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    const trigger = (
      <span>
        <Image avatar src="../assets/user.jpg" />
      </span>
    );

    return (
      <div className="UserEndReservation">
        <div className="restaurantAccount">
          <Navbar>
            <Icon size="large" name="food" inverted />
            <Navbar.Brand className="urbfoods" href="/">
              UrbainFoods
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Dropdown trigger={trigger} className="icon" pointing>
                <Dropdown.Menu>
                  <Dropdown.Item
                    icon="user"
                    text="User Info"
                    as="a"
                    href="/userinfo"
                  />
                  <Dropdown.Item
                    icon="sign-out"
                    text="Sign Out"
                    // onClick={this.props.signout}
                    // onClick={this.logout()}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="UserEndReservationInfo">
          <Item.Group divided>
            <Item>
              <Item.Image size="large" src={restInfo.photo_url} />
              <Item.Content>
                <Item.Header as="h1">{restInfo.name}</Item.Header>
                <Item.Meta>
                  <Rating maxRating={5} icon="star" rating={restInfo.rating} />
                  <b>{restInfo.ratings_count} reviews</b> <br />
                </Item.Meta>
                <Item.Description>
                  <b>Phone Number: {restInfo.phone} </b>
                  <br />
                  <b>Address: {restInfo.address}</b> <br />
                  <b>City: {restInfo.city}</b> <br />
                  <b>State: {restInfo.state}</b> <br />
                  <br />
                  {restCate.map(elem => {
                    return elem;
                  })}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
          <Calendar onChange={this.changeDate} value={dates} />
        </div>
        <div className="UserEndReservationSelectTime">
          <Form>
            <Form.Group>
              <Form.Label>
                <b>Name:</b>
              </Form.Label>
              <Form.Control onChange={this.name}></Form.Control>
              <Form.Label>
                <b>Phone Number:</b>
              </Form.Label>
              <Form.Control onChange={this.phone}></Form.Control>
              <Form.Label>
                <b>Email:</b>
              </Form.Label>
              <Form.Control onChange={this.email} type="email"></Form.Control>
              <Form.Label>
                <b>Select the table type:</b>
              </Form.Label>
              <Form.Control as="select" onChange={this.selectTableType}>
                <option>Choose ...</option>
                <option>1 person</option>
                <option>2 people</option>
                <option>3 people </option>
                <option>4 people</option>
                <option>5 people</option>
                <option>6 people</option>
                <option>7 people</option>
                <option>8 people</option>
                <option>9 people</option>
                <option>10 people</option>
                {existTableType.map(i => {
                  return i;
                })}
              </Form.Control>
              <Form.Label>
                <b>Shoose the time:</b>
              </Form.Label>
              <Form.Control as="select" onChange={this.selectDate}>
                <option>Choose ...</option>
                <option>8H/00</option>
                <option>8H:30</option>
                <option>9H:00 </option>
                <option>9H:30</option>
                <option>10H:00</option>
                <option>10H:30</option>
                <option>11H:00</option>
                <option>11H:30</option>
                <option>12H:00</option>
                <option>12H30</option>
                <option>13H:00</option>
                <option>13H:30</option>
                <option>14H:00</option>
                <option>15H:00</option>
                <option>15H:30</option>
                <option>16H:30</option>
                <option>17H:00</option>
                <option>18H:30</option>
                <option>19H:00</option>
                <option>20H:00</option>
                <option>20H:30</option>
                <option>21H:00</option>
                <option>21H:30</option>
                <option>22H:00</option>

                {existTableType.map(i => {
                  return i;
                })}
              </Form.Control>
            </Form.Group>
          </Form>
          <Message
            positive
            attached
            header={`Selected Date: ${month}/${date}/${year}`}
          />
        </div>
        <Item.Extra>
          <Button
            fluid
            onClick={this.send_reserv}
            color="google plus"
            className="buttsend"
          >
            Send Your Reservation
          </Button>
        </Item.Extra>
      </div>
    );
  }
}

export default UserEndReservation;
