const Validator = require("validator");
const isEmpty = require("is-empty");
var passwordValidator = require('password-validator');
var schema = new passwordValidator();

function checkAllNUSemail(emailstring){
    let normalemail = /^(e[0-9]{7})@u.nus.edu$/i;
    let dukeNUSemail = /^(e[0-9]{7})@u.duke.nus.edu$/i;
    let yaleNUSemail = /^(e[0-9]{7})@u.yale-nus.edu.sg $/i;
    var validNUS = true;
    if(!normalemail.test(emailstring)&& !dukeNUSemail.test(emailstring) && !yaleNUSemail.test(emailstring)){
        validNUS=false;
    }
    return validNUS;
}

module.exports = function validateRegisterInput(data) {
    let errors = {};
    
    schema
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().symbols()
    .has().not().spaces();

    console.log("data name", data.name);
    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    } else if (!checkAllNUSemail(data.email)){
        errors.email = "NUS Email is invalid";
    }
    
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 12, max: 30 })) {
        errors.password = "Password must be at least 12 characters";
    }
    if (!schema.validate(data.password)){
        //console.log("Not strong password");
        errors.password = "Include at least 1 symbol,uppercase letter,lowercase letter and no";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};