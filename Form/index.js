const validateForm = (event)=>{
    const first_name= document.getElementById("first-name");
    console.log("First Name is  ", first_name.value)
    if(first_name.value==""){
        alert("The first name field cannot  be empty");
    event.preventDefault();

        return false;
        
    }
    return true;
}