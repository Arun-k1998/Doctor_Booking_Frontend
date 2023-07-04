export default function validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z0-9.-]+$/
    const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{4,10}$/


    if(!values.firstName.trim()){
        error.firstName = 'First Name required'
    }
    if(!values.lastName.trim()){
        error.lastName = 'Last Name required'
    }

    if(values.email.trim() == ""){
        error.email = "Email Required"
    }else if(!email_pattern.test(values.email)){
        error.email = "Enter the correct format example@gmai.com"
    }

    if(!values.countryCode){
        error.countryCode = 'select country code'
    }
    if(!values.phoneNumber){
        error.phoneNumber = 'Enter Phone number'
    }

    if(values.password.trim() == ""){
        error.password = "Password Required"
    }else if(!password_pattern.test(values.password)){
        error.password = "Password need a correct format"
    }
    if(!values.confirmPassword.trim()){
        error.confirmPassword = 'Confirm Password Required'
    }
    else if(values.confirmPassword !== values.password){
        error.confirmPassword = "Password didn't match"
    }
    return error
}