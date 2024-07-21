const Validate = (Email, Password, mobileNumber) => {

    const emailValidate = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(Email);
    const passwordValidate = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(Password);
  

   if(!emailValidate) return "Email is not valid"

        if(!passwordValidate) return "Password is not valid"

           

  return null;

}

export default Validate;