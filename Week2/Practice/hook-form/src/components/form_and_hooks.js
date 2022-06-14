import React, {useState} from 'react';

const UserForm = (props) =>
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser= (e) =>
    {
        e.preventDefault();

        const newUser = {firstName, lastName, username, email, password};

        console.log("Welcome", newUser);

        setFirstName("");
        setLastName("")
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };

    return (
        <>
        <form onSubmit={ createUser}>
            <div>
                <label>First Name:</label>
                <input type={"text"} value={firstName} onChange= { (e) => setFirstName(e.target.value) }/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type={"text"} value={lastName} onChange= { (e) => setLastName(e.target.value) }/>
            </div>
            <div>
                <label>Username:</label>
                <input type={"text"} value={username} onChange= { (e) => setUsername(e.target.value) }/>
            </div>
            <div>
                <label>Email:</label>
                <input type={"text"} value={email} onChange= { (e) => setEmail(e.target.value) }/>
            </div>
            <div>
                <label>Password:</label>
                <input type={"Password"} value={password} onChange= { (e) => setPassword(e.target.value) }/>
            </div>
            <div>
                <label>ConfirmPassword:</label>
                <input type={"Password"} value={confirmPassword} onChange= { (e) => setConfirmPassword(e.target.value) }/>
            </div>

            <input type={"Submit"} value={"Create User"}/>

        </form>
            <>
            <p>
                <label>First Name:</label> {firstName}
            </p>
            <p>
                <label>Last Name:</label> {lastName}
            </p>
            <p>
                <label>Username:</label> {username}
            </p>
            <p>
                <label>Email:</label> {email}
            </p>
            <p>
                <label>Password:</label> {password}
            </p>
            <p>
                <label>ConfrimPassword:</label> {confirmPassword}
            </p>


            </>

        </>
    )
};

export default UserForm;