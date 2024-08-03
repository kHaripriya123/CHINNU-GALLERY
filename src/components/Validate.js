const Validate = (email, password) => {

    const emailValidate = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const passwordValidate = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  

   if(!emailValidate) return "Email is not valid"

        if(!passwordValidate) return "Password is not valid"

           

  return null;

}

export default Validate;