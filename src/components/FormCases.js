import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { RaisedButton } from 'material-ui';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


export class FormCases extends Component {
	
	continue  = case_var=>e  => {
		e.preventDefault();

		const is_no_imput = this.props.values[case_var];

		if(is_no_imput == ''){

			alert("Plese select a case");

		}
		else{
		this.props.nextStep();
		}
	}; 


	back = e => {
		e.preventDefault();
		this.props.prevStep();
	}; 
	
	
	render() {
		const { values, handleChange, times } = this.props;

		var dict = {};

		dict["1"] = "Own Car";
		dict["2"] = "Bus";
		dict["3"] = "Cycle";
		dict["4"] = "Two-Wheeler";
		dict["5"] = "Train";
		dict["6"] = "Ola/Uber/Taxi/Auto-Rickshaw";
		dict["7"] = "Walking";
		

		var house_type_dict = {};

		house_type_dict["1"] = "1 RK";
		house_type_dict["2"] = "1 BHK";
		house_type_dict["3"] = "2 BHK";
		house_type_dict["4"] = "2+ BHK";


		const case_var = 'case_' + String(times.val);
		var check_rent = false;
		if (values.monthly_rent<10000){
			check_rent = true;
		}

		var is_bold_1 = true, is_bold_2 = true, is_bold_3 = true, is_bold_4 = true, is_bold_5 = true, is_bold_6 = true; 

		if(times.case_a_time[0] == times.case_b_time[0]){
			 is_bold_1 = false; 
		}
		if(times.case_a_time[1] == times.case_b_time[1]){
			 is_bold_2 = false; 
		}
		if(times.case_a_time[2] == times.case_b_time[2]){
			 is_bold_3 = false; 
		}
		if(times.case_a_time[3] == times.case_b_time[3]){
			 is_bold_4 = false; 
		}
		if(times.case_a_time[4] == times.case_b_time[4]){
			 is_bold_5 = false; 
		}
		if(times.case_a_time[5] == times.case_b_time[5]){
			 is_bold_6 = false; 
		}		

		return (
			<div>
				<MuiThemeProvider>
					<React.Fragment>
						<AppBar title="Perception Survey"  showMenuIconButton={false}  />
						<br/>

						<center style={{fontSize:20, fontWeight:'bold'}}>
							User Survey perception for residential choice location
						</center>
						<br/>
							Given a similar type of house (e.g., 1 BHK or 2 BHK) in two different localities, with varying access to
							services, which locality will you choose? <br/><br/> (Please give your choices for different scenarios provided
							below).
						<br/>
						<br/>
						

						<center>
						Card - {times.val} / 8
						</center>
						<br/>
						<Grid container>
								<Grid item xs={4} sm={4} md={4}>
									<Card>

									<CardMedia
										style={{height: 0,
											padding: '15%'}}
										image='./map.png'
										title="house-card"
									/>


										<CardContent>
											{house_type_dict[values.type_of_house]} House locality A
											<br/>
											<br/>
											<Typography variant="body2" color="textPrimary" component="p">
											Monthly Rent : Rs. { check_rent? times.case_a_rent*10000 : Math.round((times.case_a_rent*values.monthly_rent/1000))*1000 }
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_1? "textPrimary": "textSecondary"} component="p">
												Travel Time to work by {dict[values.job_mode]} : {times.case_a_time[0]} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_2? "textPrimary": "textSecondary"} component="p">
												Travel Time to School/College by {dict[values.education_mode]} : {times.case_a_time[1]} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_3? "textPrimary": "textSecondary"} component="p">
												Travel Time to Shopping by {dict[values.shopping_mode]} : {times.case_a_time[2]} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_4? "textPrimary": "textSecondary"} component="p">
												Travel Time to Hospital by {dict[values.hospital_mode]} : {times.case_a_time[3]} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_5? "textPrimary": "textSecondary"} component="p">
												Travel Time to Park by {dict[values.garden_mode]} : {times.case_b_time[4]} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_6? "textPrimary": "textSecondary"} component="p">
												Travel Time to Good Restaurant by {dict[values.resto_mode]} : {times.case_b_time[5]} mins
											</Typography>
      							</CardContent>
									</Card>
								</Grid>
								<Grid item xs={4} sm={4} md={4}>
								<Card>

									<CardMedia
										style={{height: 0,
											padding: '15%'}}
										image='./map.png'
										title="house-card"
									/>


									<CardContent>
											{house_type_dict[values.type_of_house]} House locality B
												<br/>
												<br/>
												<Typography variant="body2" color="textPrimary" component="p">
												Monthly Rent : Rs. { check_rent? times.case_b_rent*10000 : Math.round((times.case_b_rent*values.monthly_rent/1000))*1000 }
												</Typography>
												<br/>
												<Typography variant="body2" color={ is_bold_1? "textPrimary": "textSecondary"} component="p">
												Travel Time to work by {dict[values.job_mode]} : {times.case_b_time[0]} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_2? "textPrimary": "textSecondary"} component="p">
												Travel Time to School/College by {dict[values.education_mode]} : {times.case_b_time[1]} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_3? "textPrimary": "textSecondary"} component="p">
												Travel Time to Shopping by {dict[values.shopping_mode]} : {times.case_b_time[2]} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_4? "textPrimary": "textSecondary"} component="p">
												Travel Time to Hospital by {dict[values.hospital_mode]} : {times.case_b_time[3]} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_5? "textPrimary": "textSecondary"} component="p">
												Travel Time to Park by {dict[values.garden_mode]} : {times.case_b_time[4]} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ is_bold_6? "textPrimary": "textSecondary"} component="p">
												Travel Time to Good Restaurant by {dict[values.resto_mode]} : {times.case_b_time[5]} mins
											</Typography>
											</CardContent>
									</Card>
								</Grid>


								<Grid item xs={4} sm={4} md={4}>
								<Card>

									<CardMedia
										style={{height: 0,
											padding: '15%'}}
										image='./map.png'
										title="house-card"
									/>


									<CardContent>
											{house_type_dict[values.type_of_house]} Your locality
												<br/>
												<br/>
												<Typography variant="body2" color="textSecondary" component="p">
												Monthly Rent : Rs. { check_rent? 10000 : Math.round((values.monthly_rent/1000)*1000) }
												</Typography>
												<br/>
												<Typography variant="body2" color={ "textSecondary"} component="p">
												Travel Time to work by {dict[values.job_mode]} : {values.job_time} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={"textSecondary"} component="p">
												Travel Time to School/College by {dict[values.education_mode]} : {values.education_time} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={"textSecondary"} component="p">
												Travel Time to Shopping by {dict[values.shopping_mode]} : {values.shopping_time} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={"textSecondary"} component="p">
												Travel Time to Hospital by {dict[values.hospital_mode]} : {values.hospital_time} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ "textSecondary"} component="p">
												Travel Time to Park by {dict[values.garden_mode]} : {values.garden_time} mins
											</Typography>
											<br/>
											<Typography variant="body2" color={ "textSecondary"} component="p">
												Travel Time to Good Restaurant by {dict[values.resto_mode]} : {values.resto_time} mins
											</Typography>
											</CardContent>
									</Card>
								</Grid>



						</Grid>

		
					
						{/* Values.case_1 = {values[para]} */}
						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">My Preference</InputLabel>
						
						<Select
							native
							value={values[case_var]}
							onChange={handleChange(case_var)}
							// style={{marginLeft:10}}
						>
							<option aria-label="None" value="" />
							<option value={1}>House locality A</option>
							<option value={2}>House locality B</option>
							<option value={3}>Prefer my current location</option>
						</Select>
						</FormControl>


						<br/>
						<br/>
						<RaisedButton 
							label="Back"
							primary={false}
							style={styles.button}
							onClick={this.back}
						/>
						<RaisedButton 
							label="Continue"
							primary="true"
							style={styles.button}
							onClick={this.continue(case_var)}
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
	}
}

export default FormCases;
