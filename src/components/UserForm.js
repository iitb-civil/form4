import React, { Component } from 'react';
import FormConfirm from './FormConfirm';
import FormFamilyDetails from './FormFamilyDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
import FormCases from './FormCases';
import Success from './Success';
// import FormPersonalDetails from './FormPersonalDetails';

export class UserForm extends Component {

	state = {
		step : 1,
		name: '',
		mobile: '',
		email: '',
		city: '',
		bio: '',
		house_ownership: '',
		monthly_rent: '',
		area: '',
		address: '',
		family_members:'',
		num_adults:'',
		num_working_male:'',
		num_working_female:'',
		num_two_license_male:'',
		num_two_license_female:'',
		num_four_license_male:'',
		num_four_license_female:'',
		num_two_motarized_license_male:'',
		num_two_veh:'',
		num_four_veh:'',
		age_grp: '',
		occupation: '',
		monthly_income:'',
		education_level:'',
		job_time:'',
		job_mode:'',
		education_time:'',
		education_mode:'',
		shopping_time:'',
		shopping_mode:'',
		hospital_time:'',
		hospital_mode:'',
		resto_time:'',
		resto_mode:'',
		garden_time:'',
		garden_mode:'',
		rate_job:'',
		rate_school: '',
		rate_shopping: '',
		rate_hospital: '',
		rate_parks: '',
		rate_resto: '',
		case_1:'',
		case_2:'',
		case_3:'',
		case_4:'',
		case_5:'',
		case_6:'',
		case_7:'',
		case_8:'',
		case_9:'',
		case_10:'',
		case_11:'',
		case_12:'',
		case_13:'',
		case_14:'',
		case_15:'',
		case_16:'',
		type_of_house:'',
	}


	nextStep = () =>{
		const { step } = this.state; 
		this.setState({
			step: step+1
		});
	}
	prevStep = () =>{
		const { step } = this.state; 
		this.setState({
			step: step-1
		});
	}

	handleChange = input=>e =>{
		this.setState({ [input]: e.target.value});
	}


	render() {
		const { step } = this.state; 
		const { name, mobile, email, occupation, city, bio, house_ownership, monthly_rent,
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
			job_time,
			job_mode,
			education_time,
			education_mode,
			shopping_time,
			shopping_mode,
			hospital_time,
			hospital_mode,
			resto_time,
			resto_mode,
			garden_time,
			garden_mode,
			rate_job,
			rate_school,
			rate_shopping,
			rate_hospital,
			rate_parks,
			rate_resto,
			case_1,
			case_2,
			case_3,
			case_4,
			case_5,
			case_6,
			case_7,
			case_8,
			case_9,
			case_10,
			case_11,
			case_12,
			case_13,
			case_14,
			case_15,
			case_16,
			type_of_house,
		 } = this.state; 
		const values = { name, mobile, email, occupation, city, bio, house_ownership, monthly_rent,
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
			job_time,
			job_mode,
			education_time,
			education_mode,
			shopping_time,
			shopping_mode,
			hospital_time,
			hospital_mode,
			resto_time,
			resto_mode,
			garden_time,
			garden_mode,
			rate_job,
			rate_school,
			rate_shopping,
			rate_hospital,
			rate_parks,
			rate_resto,
			case_1,
			case_2,
			case_3,
			case_4,
			case_5,
			case_6,
			case_7,
			case_8,
			case_9,
			case_10,
			case_11,
			case_12,
			case_13,
			case_14,
			case_15,
			case_16,
			type_of_house,		
		}

		const cases_times = { 
			case_1:{
			val: 1,
			case_a_rent:0.8,
			case_b_rent:1.2,
			case_a_time:[20, 15, 20, 40, 20, 15],
			case_b_time:[20, 15, 10, 20, 20, 30]
			},

			case_2:{
				val: 2,
				case_a_rent:1.2,
				case_b_rent:0.8,
				case_a_time:[20, 15, 10, 40, 20, 30],
				case_b_time:[40, 30, 20, 40, 10, 30]
			},
			
			case_3:{
				val: 3,
				case_a_rent:1.2,
				case_b_rent:1,
				case_a_time:[20, 15, 20, 40, 10, 15],
				case_b_time:[20, 30, 10, 20, 20, 15]
			},

			case_4:{
				val: 4,
				case_a_rent:0.8,
				case_b_rent:1.2,
				case_a_time:[20, 15, 10, 40, 10, 30],
				case_b_time:[20, 30, 20, 40, 20, 30]
			},

			case_5:{
				val: 5,
				case_a_rent:1.2,
				case_b_rent:1,
				case_a_time:[20, 30, 10, 20, 10, 15],
				case_b_time:[20, 30, 10, 40, 20, 15]
			},

			case_6:{
				val: 6,
				case_a_rent:1,
				case_b_rent:1.2,
				case_a_time:[20, 30, 20, 40, 10, 30],
				case_b_time:[40, 30, 10, 40, 10, 15]
			},

			case_7:{
				val: 7,
				case_a_rent:0.8,
				case_b_rent:1.2,
				case_a_time:[20, 15, 10, 20, 10, 30],
				case_b_time:[20, 30, 10, 40, 10, 15]
			},

			case_8:{
				val: 8,
				case_a_rent:1,
				case_b_rent:1.2,
				case_a_time:[40, 15, 10, 40, 10, 30],
				case_b_time:[40, 15, 20, 40, 10, 15]
			},

		}
		
		switch(step){
			case 1:
				return(
					<FormUserDetails 
						nextStep = {this.nextStep}
						handleChange= {this.handleChange}
						values= {values}
					/>
				)
			case 2:
				return(
					<FormPersonalDetails 
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
					/>
				)
			case 3:
				return(
					<FormFamilyDetails 
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
					/>
				)
			case 4:
				return(
					<FormCases
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
						times= {cases_times.case_1}
					/>
				)
			case 5:
				return(
					<FormCases
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
						times= {cases_times.case_2}
					/>
				)
			case 6:
				return(
					<FormCases
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
						times= {cases_times.case_3}
					/>
				)
			case 7:
				return(
					<FormCases
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
						times= {cases_times.case_4}
					/>
				)
			case 8:
				return(
					<FormCases
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
						times= {cases_times.case_5}
					/>
				)
			case 9:
				return(
					<FormCases
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
						times= {cases_times.case_6}
					/>
				)
			case 10:
				return(
					<FormCases
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
						times= {cases_times.case_7}
					/>
				)
			case 11:
				return(
					<FormCases
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
						times= {cases_times.case_8}
					/>
				)
			case 12:
				return(
					<FormConfirm 
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
					/>
				)	
			case 13:
				return(
					<Success />
				)
			default:
				return(
					<FormUserDetails 
						nextStep = {this.nextStep}
						handleChange= {this.handleChange}
						values= {values}
					/>
				)
		}


		// return (
		// 	<div>
				
		// 	</div>
		// )
	}
}

export default UserForm;
