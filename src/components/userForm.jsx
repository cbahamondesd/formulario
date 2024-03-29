import React from 'react';
    
const UserForm = props => {
    const { inputs, setInputs } = props;
    
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        });
    };

    return(
        <form>
            <div>
            <label>Firstname: </label><input type="text" onChange={onChange} name="firstName" />
            </div>
            <div>
            <label>lastName: </label><input type="text" onChange={onChange} name="lastName" />
            </div>
            <div>
            <label>Email: </label><input type="text" onChange={onChange} name="email" />
            </div>
            <div>
            <label>Password: </label><input type="text" onChange={onChange} name="password" />
            </div>
            <div>
            <label>Confirm Password: </label><input type="text" onChange={onChange} name="confirmpassword" />
            </div>
        </form>
    );
};
    
export default UserForm;
