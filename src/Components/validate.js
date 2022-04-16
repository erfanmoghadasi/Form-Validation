export const validate = data => {
    const errors = {};
    const regexEmailValid =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!data.name.trim()){
        errors.name = "Username is required"
    } else {
        delete errors.name
    }

    if(!data.email){
        errors.email = 'Email is required'
    }else if(data.email.match(regexEmailValid)){
        errors.email = 'Email is invalid'
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password = 'Password is required'
    }else if(data.password.length < 6){
        errors.password = 'Password must be 6 characters at least'
    }else{
        delete errors.password
    }

    if(!data.confirmPassword){
        errors.confirmPassword = 'Confirm the password please'
    }else if(data.confirmPassword !== data.password){
        errors.confirmPassword = "pass doesn't match"
    }else{
        delete errors.confirmPassword
    }

    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted = 'please accept our regulation'
    }

    return errors;
}