import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { RaisedButton } from 'material-ui';
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';




export class FormConfirm extends Component {
	
	continue = e => {
		e.preventDefault();

		const url = "https://script.google.com/macros/s/AKfycbxaeG6N4vPLT8Gf7o80nthHi4uZwFj7uIKifthyzFFhD4alOhO6WZ1Qasdk_3K6SQo/exec";
		
		const val = this.props.values;

		console.log(JSON.stringify(val));



		fetch(url,{
			method: 'POST',
			mode: 'no-cors',
			cache: 'no-cache',
			redirect: 'follow',
			body: JSON.stringify(val)
		});





		this.props.nextStep();
	}; 

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	}; 
	
	
	render() {
		const { values, handleChange } = this.props;
		return (
			<div>
				<MuiThemeProvider>
					<React.Fragment>
						<AppBar title="Submit the form"   showMenuIconButton={false} />
						


						<Grid container>
								<Grid item xs={12} sm={12} md={12}>
									<Card>

									


										<CardContent>
											<div style={{fontSize:30, fontWeight: 'bold'}}>
										Residential Location Choice Survey 
										</div>										
											
											<Typography variant="body2" color="textPrimary" component="p" style={{fontSize:20, padding:50}}>
											     Thank you for participating. Your participation means a lot to us.
											<br/> For any query, please feel free to mail us at <span style={styles.italicBold}> g.sharma [at] iitb.ac.in</span>  
											</Typography>
      							</CardContent>
									</Card>
								</Grid>
								
						</Grid>



						<br/>
						<RaisedButton 
							label="Back"
							primary={false}
							style={styles.button}
							onClick={this.back}
						/>
						<RaisedButton 
							label="Submit Responses"
							primary={true}
							style={styles.button}
							onClick={this.continue}
							color='primary'
						/>


								{/* <CardMedia
										style={{height: 0,
											margin: 100,
											paddingTop: '56.5%'}}
										image='./sponge_final.gif'
										title="house-card"
									/> */}
					</React.Fragment>
				</MuiThemeProvider>
			</div>
		)
	}
}


const styles = {
	button: {
		margin: 15,
		// color:'green'

	}
}

export default FormConfirm;
