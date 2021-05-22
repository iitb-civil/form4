import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { RaisedButton } from 'material-ui';
import FormControl from '@material-ui/core/FormControl';

export class FormPersonalDetails extends Component {
	
	continue = e => {
		e.preventDefault();

		const {house_ownership, monthly_rent, occupation,
			area,
			address,
			family_members,
			num_adults,
			num_working_male,
			num_working_female,
			num_two_license_male,
			num_two_license_female,
			num_four_license_male,
			num_four_license_female,
			num_two_motarized_license_male,
			num_two_veh,
			num_four_veh,
			age_grp,
			monthly_income,
			education_level,
			type_of_house,
		} = this.props.values;


		if(house_ownership == '' || monthly_rent == '' || area == '' || 
		family_members == '' || num_adults == '' || num_working_male == '' || num_working_female == '' || 
		num_two_veh == '' || num_four_veh == ''||
		age_grp == '' || occupation == '' || monthly_income == '' || education_level == '' || type_of_house == ''
		){
			alert("Please enter all the fields");
		}
		else if(
			isNaN(monthly_rent) || isNaN(family_members) || isNaN(num_adults) || isNaN(num_working_male) || isNaN(num_working_female) ||
			isNaN(num_two_license_male) || isNaN(num_two_license_female) || isNaN(num_four_license_male) || isNaN(num_four_license_female) || isNaN(num_two_veh) || isNaN(num_four_veh)
		){
			alert("Please enter valid numeric input in the fields");
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
		const { values, handleChange } = this.props;
		return (
			<div>
				<MuiThemeProvider>
					<React.Fragment>
						<AppBar title="General information"  showMenuIconButton={false} />
						<br/>
						<FormControl style={{width:500}}>
						<FormControl>
							Family Household Details
						<InputLabel htmlFor="ownership-native-simple" style={{marginTop:20}}>Type of your House Ownership</InputLabel>
						<Select
							native
							value={values.house_ownership}
							onChange={handleChange('house_ownership')}
						>
							<option aria-label="None" value="" />
							<option value={1}>Own House</option>
							<option value={2}>Rented House</option>
							<option value={3}>Provided by Company/Organization</option>
						</Select>
						<br/>
						</FormControl>

						<FormControl>
						<InputLabel htmlFor="agegrp-native-simple">Type of House</InputLabel>
						
						<Select
							native
							value={values.type_of_house}
							onChange={handleChange('type_of_house')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>&nbsp;&nbsp; 1 RK (one Room Kitchen)</option>
							<option value={2}>&nbsp;&nbsp; 1 BHK (one Bedroom Hall Kitchen)</option>
							<option value={3}>&nbsp;&nbsp; 2 BHK </option>
							<option value={4}>&nbsp;&nbsp; 2+ BHK (more than 2 Bedroom Hall Kitchen)</option>
						</Select>
						</FormControl>

						<br/>
						<FormControl>
						<TextField 
							style={{width:500}}
							hintText="Please enter in digits"
							floatingLabelText="Approx. monthly house rental value in Rs."
							onChange={handleChange('monthly_rent')}
							defaultValue={values.monthly_rent}
						/>
						</FormControl>
						<br/>


						<FormControl>
						<br/>
						<TextField 
							style={{width:500}}	
							hintText="Area / Locality eg. POWAI, MALAD"
							floatingLabelText="Area or Locality of your house"
							onChange={handleChange('area')}
							defaultValue={values.area}
						/>
						</FormControl>
						<br/>

						<FormControl>
						<br/>
						<TextField 
							style={{width:500}}
							hintText="Address "
							floatingLabelText="Address (Optional)"
							onChange={handleChange('address')}
							defaultValue={values.address}
						/>
						</FormControl>
						<br/>
						<FormControl>
						<br/>
						<TextField 
							style={{width:500}}
							hintText="Please enter digits, eg. 4, 5"
							floatingLabelText="Number of Family Members"
							onChange={handleChange('family_members')}
							defaultValue={values.family_members}
						/>
						</FormControl>
						<br/>
						<FormControl>
						<TextField 
							style={{width:500}}
							hintText="Please enter digits, eg. 1, 2"
							floatingLabelText="Number of Adults in Family (>18yr)"
							onChange={handleChange('num_adults')}
							defaultValue={values.num_adults}
						/>
						</FormControl>
						<br/>
						<FormControl>
						<TextField 
							style={{width:500}}
							hintText="Please enter digits, eg. 1, 2"
							floatingLabelText="Number of Working Male Adults"
							onChange={handleChange('num_working_male')}
							required={1}
							defaultValue={values.num_working_male}
						/>
						</FormControl>
						<br/>
						<FormControl>
						<TextField 
							style={{width:500}}
							hintText="Please enter digits, eg. 1, 2"
							floatingLabelText="Number of Working Female Adults"
							onChange={handleChange('num_working_female')}
							required={1}
							defaultValue={values.num_working_female}
						/>
						</FormControl>
						<br/>
						<FormControl>
						<TextField 
							style={{width:500}}
							hintText="Please enter digits, eg. 1, 2"
							floatingLabelText="Number of Two wheeler licence - Male (Optional)"
							onChange={handleChange('num_two_license_male')}
							required={1}
							defaultValue={values.num_two_license_male}
						/>
						</FormControl>
						<br/>
						<FormControl>
						<TextField 
							style={{width:500}}
							hintText="Please enter digits, eg. 1, 2"
							floatingLabelText="Number of Two wheeler licence - Female (Optional)"
							onChange={handleChange('num_two_license_female')}
							required={1}
							defaultValue={values.num_two_license_female}
						/>
						</FormControl>
						<br/>
						<FormControl>
						<TextField 
							style={{width:500}}
							hintText="Please enter digits, eg. 1, 2"
							floatingLabelText="Number of Four wheeler licence - Male (Optional)"
							onChange={handleChange('num_four_license_male')}
							required={1}
							defaultValue={values.num_four_license_male}
						/>
						</FormControl>
						<br/>
						<FormControl>
						<TextField 
							style={{width:500}}
							hintText="Please enter digits, eg. 1, 2"
							floatingLabelText="Number of Four wheeler licence - Female (Optional)"
							onChange={handleChange('num_four_license_female')}
							required={1}
							defaultValue={values.num_four_license_female}
						/>
						</FormControl>
						<br/>
						<br/>
						<FormControl>
						Number of vehicles
						<TextField 
							style={{width:500}}
							hintText="Please enter digits, eg. 1, 2"
							floatingLabelText="Number of Two wheelers"
							onChange={handleChange('num_two_veh')}
							required={1}
							defaultValue={values.num_two_veh}
						/>
						</FormControl>
						<br/>
						<FormControl>
						<TextField 
							style={{width:500}}
							hintText="Please enter digits, eg. 1, 2"
							floatingLabelText="Number of Four wheelers"
							onChange={handleChange('num_four_veh')}
							required={1}
							defaultValue={values.num_four_veh}
						/>
						</FormControl>
						<br/>
						<br/>

						Family Details
						<br/>
						<FormControl>
						<InputLabel htmlFor="agegrp-native-simple">Age group of head of the Family</InputLabel>
						
						<Select
							native
							value={values.age_grp}
							onChange={handleChange('age_grp')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>18-30yr</option>
							<option value={2}>30-45yr</option>
							<option value={3}>45-60yr</option>
							<option value={4}>Above 60yr</option>
						</Select>
						</FormControl>
						<br/>

						<FormControl>
						<InputLabel htmlFor="agegrp-native-simple">Occupation of head of the Family</InputLabel>
						
						<Select
							native
							value={values.occupation}
							onChange={handleChange('occupation')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>Govt. Employee</option>
							<option value={2}>Business/Self Emplyed</option>
							<option value={3}>Private office Service</option>
							<option value={4}>Student</option>
							<option value={5}>Private Job</option>
							<option value={6}>Unemplyed</option>
						</Select>
						</FormControl>
						<br/>

						<FormControl>
						<InputLabel htmlFor="agegrp-native-simple">Approx. family monthly income range</InputLabel>
						
						<Select
							native
							value={values.monthly_income}
							onChange={handleChange('monthly_income')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}> &lt; Rs.30,000</option>
							<option value={2}>Rs.30,000-Rs.80,000</option>
							<option value={3}>Rs.80,000-Rs.1,50,000</option>
							<option value={4}>Rs.1,50,000-Rs.2,50,000</option>
							<option value={5}>&gt; Rs.2,50,000 </option>
						</Select>
						</FormControl>
						<br/>


						<FormControl>
						<InputLabel htmlFor="agegrp-native-simple">Education Level of Head of the Family</InputLabel>
						
						<Select
							native
							value={values.education_level}
							onChange={handleChange('education_level')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>Graduated and Above</option>
							<option value={2}>Till 12th or SSC</option>
							<option value={3}>Till 12th / Diploma</option>
							<option value={4}>Illiterate</option>
						</Select>
						</FormControl>
						</FormControl>
						<br/>


						<RaisedButton 
							label="Back"
							primary={false}
							style={styles.button}
							onClick={this.back}
						/>
						<RaisedButton 
							label="Continue"
							primary={true}
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
	}
}

export default FormPersonalDetails;
