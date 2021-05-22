import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';




export class Success extends Component {
	
		
	render() {
		return (
			<div>
				<MuiThemeProvider>
					<React.Fragment>
						<AppBar title="Thanks again!"   showMenuIconButton={false} />
						


						<Grid container>
								<Grid item xs={12} sm={12} md={12}>
									<Card>

									


										<CardContent>
											<div style={{fontSize:30, fontWeight: 'bold'}}>
										Residential Location Choice Survey 
										</div>										
											
											<Typography variant="body2" color="textPrimary" component="p" style={{fontSize:20, padding:50}}>
											     Your responses has been successfully uploaded! A big thanks from our side!!!
											<br/> For any query, please feel free to mail us at <span style={styles.italicBold}> g.sharma [at] iitb.ac.in</span>  
											</Typography>
      							</CardContent>
									</Card>
								</Grid>
								
						</Grid>



						<br/>
						


								{/* <CardMedia
										style={{height: 0,
											margin: 100,
											paddingTop: '56.5%'}}
										image='./done.gif'
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

export default Success;
