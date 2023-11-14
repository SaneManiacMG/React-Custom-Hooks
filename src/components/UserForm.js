import React from "react";
import useInput from "../hooks/useInput";

const UserForm = () => {
	const [firstName, bindFirstName, resetFirstName] = useInput("");
	const [lastName, bindLastName, resetLastName] = useInput("");

	const submitHandler = (e) => {
		e.preventDefault();
		alert(`Hello ${firstName} ${lastName}`);
		resetFirstName();
		resetLastName();
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="firstName">First Name</label>
					<input type="text" {...bindFirstName} />
				</div>
				<div>
					<label htmlFor="lastName">Last Name</label>
					<input type="text" {...bindLastName} />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default UserForm;
