import React, {Component} from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import './Postview.css';


class Postview extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data').then((res)=>res.json().then((data)=>{
      this.setState({ user: data.user });
    }));
    console.log(this.state.user) //returns [];
  }

  render() {
    console.log(this.state.user) //returns [] the first render, returns ['topic1','topic2','topic3'] on the second render;
    return(
      <div>
       
        <ul>
        {this.state.user.map(users => (
          <div class="card">

              <header >
               

              <h4 style={{margin: "0px"}}>{users.name}</h4>
              <small >{users.location}</small>
              <BiMenu style={{float:"right",width:"10%",height:"4%",top:"-90px"}}/>
              </header>
          <img style={{width:"100%",height:"50%"}} src={users.PostImage} />
          <div class="container">
            <body>
              <p style={{paddingLeft:"80%",fontSize:"10px"}}>{users.date}</p>
            <h4><b>{users.description}</b></h4>
            </body>

          </div>
          </div>
        ))}
      </ul>
      </div>
    )
  }
}

export default Postview;
