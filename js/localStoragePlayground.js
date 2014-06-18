//get the input fields from html to create populate the localStorage
var inputUserName = document.getElementById("userName");
localStorage.setItem("editUserData:userName", input.value);
var inputUserEmail = document.getElementById("userEmail");
localStorage.setItem("editUserData:userEmail", input.value);
var inputUserPhone = document.getElementById("userPhone");
localStorage.setItem("editUserData:userPhone", input.value);
var inputUserContact = document.getElementById("userContact");
localStorage.setItem("editUserData:userContact", input.value);

function displayUserData () {
    //Indicates we are working with the form userData
    var userData            = document.forms["userData"];
    //!!!Unsure of the purpose!!!!
    var userName            = userData.userName.value;
    //Gets the user data from local storage
    var storageUserData     = localStorage.getItem(userData);

    //User properties (name, email, phone, contact preferences, )
    var splitItem           = item.split(":");
    var userName            = splitItem[0];
    var userEmail           = splitItem[1];
    var userPhone           = splitItem[2];
    var userContact         = splitItem[3];
    var userRestaurant      = splitItem[4];
    var userMenuChoice      = splitItem[5];

    //Defining the values
    userData.userName.value             = userName;
    userData.userEmail.value            = userEmail;
    userData.userPhone.value            = userPhone;
    userData.userContact.value          = userContact;
    userData.userRestaurant.value       = userRestaurant;
    userData.userMenuChoice.value       = userMenuChoice;
}

function editUserData () {
    //Indicates we are working on form for user data
    var userData            = document.forms["userData"];

    //Defining the data set
    var userName            = userData.userName.value;
    var userEmail           = userData.userEmail.value;
    var userPhone           = userData.userPhone.value;
    var userContact         = userData.userContact.value
    var userRestaurant      = userData.userRestaurant.value;
    var userMenuChoice      = userData.userMenuChoice.value;
    //!!!unsure if the incomplete value = 0 is smart if we are using booleans values for preferences about contact!!!
    var incomplete          = 0;

    //creates the concatenated string of the values, which saves space in the storage
    var concatenated        =   userName + ":" + userEmail + ":" + userPhone + ":"
                                + userContactEmail + ":" + userContactPhone;

    //Defining if any of our values are equal = "" how do we handle them
    if      (userName == "" ||userEmail == ""||userPhone == ""||
            userContact == ""||userRestaurant == ""||userMenuChoice == "")
    {
        ++incomplete;
        console.log("Skipping incomplete/empty row!");
        return;
    }

    try  {
        //unsure if it should be userName or userData
        localStorage.setItem(userData, concatenated);
        //this will inform the user about the input about the person has changed
        alert("Changed your user data: " + concatenated);
        //!!! unsure if it makes sense to use line 55 - 57 in MultiLingualForm2!!!
    }
    //inform user about the storage quota has been exceeded
    catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            alert("Local Storage Quota exceeded");
            // you can clear local storage here:
            //clearLocalStorage();
        }
    // MultiLingualForm2 offers the possibility to clear fields and set their value = "",
    // this does not make sense in the terms of the user data, has been purposely left out.
}
    // the time stamp - working
    var timeStamp = new Date()
    var date = timeStamp.getDate()
    var hours = timeStamp.getHours()
    var minutes = timeStamp.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    console.log(date + ":" + hours + ":" + minutes + " ")
    if(hours > 11){
        console.log("PM")
    } else {
        console.log("AM")
    }

