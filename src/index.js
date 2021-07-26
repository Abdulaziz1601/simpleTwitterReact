import React from 'react';  // We are importing react to work with it
import ReactDOM from 'react-dom'; // react-dom to work with DOM
import './index.css';
import App from './components/app/';

// // If we leave our WhoAmI component like this, It'll give us error
// // But in react we have technique, that helps us to avoid EXTRA divs
// // function WhoAmI() {
// // 	return (
// // 		<h1>My name is , surname - </h1>
// // 		<a href="">My profile</a>
// // 	)
// // }

// // Technique is
// // To use "React.Fragment" instead of divs
// // function WhoAmI() {
// // 	return (
// // 		<React.Fragment>
// // 			<h1>My name is , surname - </h1>
// // 			<a href="">My profile</a>
// // 		</React.Fragment>
// // 	)
// // } //We checked it is working, really good

// // // We can also leave it like this:
// // function WhoAmI() {
// // 	return (
// // 		<>
// // 			<h1>My name is , surname - </h1>
// // 			<a href="">My profile</a>
// // 		</>
// // 	)
// // } //We checked it also, it is working !!

// // To pass name and surname we can use props - properties
// // props is obj, with all properties that we are passing
// // It will be created automatically, even if we do not write it
// // function WhoAmI(props) {
// // 	return (
// // 		<>
// // 			<h1>My name is {props.name}, surname - {props.surname} </h1>
// // 			<a href={props.link}>My profile</a>
// // 		</>
// // 	)
// // }
// // // elements of our components are h1 and a - tags
// // // We cannot change them after they've been brought to browser
// // // To change we have re-render our component
// // function WhoAmI({name, surname, link}) {
// // 	return (
// // 		<>
// // 			<h1>My name is {name}, surname - {surname} </h1>
// // 			<a href={link}>My profile</a>
// // 		</>
// // 	)
// // }
// // // We can use obj destructuring and get all properties, look at the code aboove
// // // It will be like this: {name, surname, link} = props

// // const All = () => { //We've reused and combined whoAmi components
// // 	return (
// // 		<>
// // 			<WhoAmI name="John" surname="Smith" link="facebook.com" />
// // 			<WhoAmI name="Abdulaziz" surname="Abdullaev" link="youtube.com" />
// // 			<WhoAmI name="Sonya" surname="Blade" link="facebook.com" />
// // 			<WhoAmI name="Ivan" surname="Petrychenko" link="facebook.com" />
// // 		</> //It is all same components, but properties are completely different
// // 	)
// // }

// // for example we have sliders, and all slider has an active class on some element
// // Here we cannot do it like unique and one active class on some one elem
// // is used and it is pretty messed up
// // so what we can do, is to use classes
// // and objects, to make active class on only one elem
// // like object will have only on active class on one elem, that is used by only one slider

// // Remaking whoami component using CLASS

// class WhoAmI extends Component {
// 	constructor(props) { // we cannot chnage dynamically props
// 		super(props);
// 		// so we can create our own, obj
// 		this.state = {
// 			years: 19
// 		}
// 		// 1st way
// 		// this.nextYear = this.nextYear.bind(this); 
// 		// 2nd way
// 		this.nextYear = () => {
// 			this.setState(state => ({
// 				years:++state.years
// 			}))
// 		}  


// 	}
// 	nextYear() {
// 		console.log(1);
// 		// we have written an event to increment the age of person
// 		// We cannot change directly like this:
// 		// this.state.years++; // it says we have to use setState
// 		// right way is
// 		// setState overwrites the obj with our states
// 		// 2nd way
// 		// this.setState(state => ({
// 		// 	years:++state.years //In state there are a lot of things, but only years will be changed (overwritten)
// 		// }))
// 		// this.setState(state => ({
// 		// 	years:++state.years //In state there are a lot of things, but only years will be changed (overwritten)
// 		// }))
// 	}
// 	render() {
// 		// All component, will create every time new object
// 		// So, every instance will have its own PROPS
// 		// So, here we are destructuring obj and getting three properties
// 		const {name, surname, link} = this.props;
// 		const {years} = this.state;
// 		// const {years:age} = this.state;
// 		return (
// 			<>	
// 				{/* This only won't work we have 3 ways to fix it */}
// 				<button onClick={this.nextYear}>++</button> 
// 				<h1>My name is {name}, surname - {surname}, {years} years old </h1>
// 				<a href={link}>My profile</a>
// 			</>
// 		)
// 	}
// }

// const All = () => { //We've reused and combined whoAmi components
// 	return (
// 		<>
// 			<WhoAmI name="John" surname="Smith" link="facebook.com" />
// 			<WhoAmI name="Abdulaziz" surname="Abdullaev" link="youtube.com" />
// 			<WhoAmI name="Sonya" surname="Blade" link="facebook.com" />
// 			<WhoAmI name="Ivan" surname="Petrychenko" link="facebook.com" />
// 		</> //It is all same components, but properties are completely different
// 	)
// }

// ReactDOM.render(
//   <React.StrictMode>
// 	  <All/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
	  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);