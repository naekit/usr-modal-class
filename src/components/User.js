import React from "react"
import classes from "./User.module.css"

class User extends React.Component {
	componentWillUnmount() {
		console.log("unmount")
	}

	render() {
		return <li className={classes.user}>{this.props.name}</li>
	}
}

// Functional component version
// const User = (props) => {
// 	return <li className={classes.user}>{props.name}</li>
// }

export default User
