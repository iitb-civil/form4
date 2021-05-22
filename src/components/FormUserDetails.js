import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { RaisedButton } from 'material-ui';
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


export class FormUserDetails extends Component {
	
	continue = e => {
		e.preventDefault();
		this.props.nextStep();	
	}; 
	
	
	render() {
		const { values, handleChange } = this.props;
		return (
			<div>
				<MuiThemeProvider>
					<React.Fragment>
						<AppBar title="Introduction" showMenuIconButton={false} />
						
						
						<Grid container>
								<Grid item xs={12} sm={12} md={12}>
									<Card>
										<CardContent>
											<div style={{fontSize:30, fontWeight: 'bold'}}>
										Residential Location Choice Survey 
										</div>
											
											
											<Typography variant="body2" color="textPrimary" component="p" style={{fontSize:20, padding:50}}>
											This survey is being conducted as a part of Ph.D. research by Gajanand Sharma, a research student at IIT Bombay, supervised by Dr. Gopal R. Patil, Professor of Civil Engineering Department, IIT Bombay. This survey is solely for academic purpose, and the information collected is used only for <span style={styles.italicBold}>academic research</span>. The main aim of the survey is to analyse the residential choice behaviour in Mumbai based on access to different urban services. The survey consists of three sections: 1) General information about the respondent, 2) Travel characteristics, and 3) Residential preference. The whole survey may take 10-15 minutes. Thank you for participating. Your participation means a lot to us.
											<br/> For any query, please feel free to mail us at <span style={styles.italicBold}> g.sharma [at] iitb.ac.in</span>  
											</Typography>
      							</CardContent>
									</Card>
								</Grid>
								
						</Grid>
						<br/>
						<RaisedButton 
							label="Sure, Continue!"
							primary="true"
							style={styles.button}
							onClick={this.continue}
						/>
					</React.Fragment>
				</MuiThemeProvider>
			</div>
		)
	}
}


const styles = {
	button: {
		margin: 15
	},
	italicBold:{
		fontStyle: 'italic',
		fontWeight: 'bold'
	}
}

export default FormUserDetails;
