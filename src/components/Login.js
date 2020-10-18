import React, {Component, useState, useContext } from 'react';
import Title from "./Title";
import axios from 'axios';
import styled from "styled-components";
import { ProductConsumer } from "../Context";
// import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
        }
    }
    
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const order = {
            username: this.state.username,
            password: this.state.password,
        };

        console.log(order);

        axios.post('http://localhost:5000/order/add', order)
            .then(res => console.log(res.data));
        
        window.location = '/payment';
        
    }

render() {
return (
    <LoginContainer>
                    <div className="container mb-5">
                        <Title name="Login" title=" " />
                        <div className="row justify-content-center">
                        <form className=' form col-lg-5 col-md-8 col-sm-10 col-10 ' onSubmit={this.onSubmit}>
                            <div name='register'>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputEmail1'>Username:</label>
                                    <input
                                        type='text'
                                        name='name'
                                        className='form-control'
                                        id='name'
                                        aria-describedby='nameHelp'
                                        placeholder='Enter name'
                                        value={this.state.username}
                                          onChange={this.onChangeUsername}
                                        required ></input>
                                </div>

                                <label htmlFor='exampleInputEmail1'>Password:</label>
                                    <input
                                        type='password'
                                        name='name'
                                        className='form-control'
                                        id='name'
                                        aria-describedby='nameHelp'
                                        placeholder='Enter password'
                                        value={this.state.password}
                                          onChange={this.onChangePassword}
                                        required ></input>
                                </div>
                               
                                <div className="form-group">
                                    <button type="submit" value="Submit" className="btn btn-primary mt-2 text-center" >Login</button>
                                   </div>
                                
                            </form>
                        </div>
                     </div>
                     </LoginContainer>
);
}
}

const LoginContainer = styled.div`

    margin: 5rem 30rem;
    border-radius: 10%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;

  btn {
      padding: 5;
  }

  @media(max-width:768px){
      margin: 0rem 0 0 0;
    height: 100vh;
      border-radius: 0;
  }
`;