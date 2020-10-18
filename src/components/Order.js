import React, { Component } from 'react';
import Title from "./Title";
import axios from 'axios';

export default class Order extends Component {
	constructor(props) {
		        super(props);
		
		        this.onChangeUsername = this.onChangeUsername.bind(this);
		        this.onChangeAddress = this.onChangeAddress.bind(this);
		        this.onChangePhone = this.onChangePhone.bind(this);
		        this.onChangeLandmark = this.onChangeLandmark.bind(this);
		        this.onSubmit = this.onSubmit.bind(this);
		
		        this.state = {
		            username: '',
		            address: '',
		            phone: "0123456789",
		            landmark: '',
		        }
			}
			
			onChangeUsername(e) {
				this.setState({
					username: e.target.value
				});
			}

			onChangeAddress(e) {
				this.setState({
					address: e.target.value
				});
			}

			onChangePhone(e) {
				this.setState({
					phone: e.target.value
				});
			}

			onChangeLandmark(e) {
				this.setState({
					landmark: e.target.value
				});
			}

			onSubmit(e) {
				e.preventDefault();
		
				const order = {
					username: this.state.username,
					address: this.state.address,
					phone: this.state.phone,
					landmark: this.state.landmark,
				};
		
				console.log(order);
		
				axios.post('http://localhost:5000/order/add', order)
					.then(res => console.log(res.data));
				
				window.location = '/payment';
				
			}

    render() {
        return (
                            <div className="container mb-5">
                                <Title name="Order" title="Details" />
                                <div className="row justify-content-center">
								<form className=' form col-lg-5 col-md-8 col-sm-10 col-10 ' onSubmit={this.onSubmit}>
									<div name='register'>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Name:</label>
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
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Address:</label>
											<input
												type='text'
												name='address'
												className='form-control'
												id='adress'
												aria-describedby='emailHelp'
												placeholder='Enter Address'
												value={this.state.address}
                              				    onChange={this.onChangeAddress}
												required ></input>
										</div>

										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Phone:</label>
											<input
												type='number'
												name='phone'
												className='form-control'
												id='phone'
												aria-describedby='emailHelp'
												placeholder='Enter Phone Number'
												value={this.state.phone}
                              				    onChange={this.onChangePhone}
												required ></input>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Landmark:</label>
											<input
												type='text'
												name='landmark'
												id='landmark'
												className='form-control'
												aria-describedby='emailHelp'
												placeholder='Enter Landmark'
												value={this.state.landmark}
                              				    onChange={this.onChangeLandmark}
												required ></input>
										</div>
										{/* <div className='form-group'>
											<label htmlFor='exampleInputEmail1'>If Refferal Code:</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter Code'
												value={this.state.refferal}
                              				    onChange={this.onChangeRefferal} ></input>
										</div> */}
										<div className="form-group">
                        					<button type="submit" value="Submit" className="btn btn-primary p-2 text-center" >Submit</button>
                  						 </div>
										</div>
									</form>
								</div>
                             </div>
        )
    }
}

