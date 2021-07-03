//Check for valid task numbers
var taskNum = 0;
while (taskNum < 1 || taskNum > 4 || taskNum === "" || taskNum === null || taskNum != Number(taskNum)) {
    taskNum = prompt("Enter task number:");
    if (taskNum === null || taskNum === "") {
        alert("Please enter some value!");
    } else if (taskNum < 1 || taskNum > 4) {
        alert("There is no such task!");
    } else if (taskNum != Number(taskNum)) {
        alert("Only numbers allowed!");
    }
}

document.write("<h1>Object Manipulation</h1>");

//Code for calculating total price of items
if (taskNum == 1) {
    document.write("<h1>Calculating Total Price</h1>");
    var itemsArray = [
        { name: "juice", price: "50", quantity: "3" },
        { name: "cookie", price: "30", quantity: "9" },
        { name: "shirt", price: "880", quantity: "1" },
        { name: "pen", price: "100", quantity: "2" },
    ];
    var totalPrice = 0;
    for (var i = 0; i < itemsArray.length; i++) {
        document.write("The price of 1 " + itemsArray[i].name + " is " + itemsArray[i].price + " Rs.<br />");
        document.write("The price of " + itemsArray[i].quantity + " " + itemsArray[i].name + "(s) is " + itemsArray[i].price * itemsArray[i].quantity + " Rs.<br /><br />");
        totalPrice += itemsArray[i].price * itemsArray[i].quantity;
    }
    document.write("The total price of all the items is " + totalPrice + " Rs.");
}

//Code for checking presence of properties in an object
else if (taskNum == 2) {
    document.write("<h1>Checking For Properties</h1>");
    var testObj = {
        name: "Muhammad Adil",
        email: "adilafsar99@gmail.com",
        password: "********",
        age: 20,
        gender: "Male",
        city: "Karachi",
        country: "Pakistan",
    };
    document.write("The object 'testObj' has the following properties: <br />");
    document.write("name: " + testObj.name + "<br />");
    document.write("email: " + testObj.email + "<br />");
    document.write("password: " + testObj.password + "<br />");
    document.write("age: " + testObj.age + "<br />");
    document.write("gender: " + testObj.gender + "<br />");
    document.write("city: " + testObj.city + "<br />");
    document.write("country: " + testObj.country + "<br /><br />");
    document.write("Does this object have the property 'age'?<br />");
    document.write("age" in testObj);
    document.write("<br />");
    document.write("Does this object have the property 'country'?<br />");
    document.write("country" in testObj);
    document.write("<br />");
    document.write("Does this object have the property 'firstName'?<br />");
    document.write("firstName" in testObj);
    document.write("<br />");
    document.write("Does this object have the property 'lastName'?<br />");
    document.write("lastName" in testObj);
}

//Code for creating object instances via the constructor function
else if (taskNum == 3) {
    document.write("<h1>Constructors</h1>");
    function Date_of_birth(date, month, year) {
        this.date = date;
        this.month = month;
        this.year = year;
        this.getBirthday = function () {
            return "Your date of birth is " + this.date + "-" + this.month + "-" + this.year + ".";
        };
    }
    var birthday1 = new Date_of_birth(19, "April", 2001);
    var birthday2 = new Date_of_birth(8, "December", 2004);
    var birthday3 = new Date_of_birth(18, "November", 2007);
    document.write(birthday1.getBirthday());
    document.write("<br />");
    document.write(birthday2.getBirthday());
    document.write("<br />");
    document.write(birthday3.getBirthday());
}

//Code for a survey form that asks for various attributes of the population
else if (taskNum == 4) {
    document.write("<h1>Constructors: Population Survey</h1>");
    var checkedBoxVal;
    //Constructor for survey result
    function Survey_Result(name, gender, address, education, profession) {
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.education = education;
        this.profession = profession;
    }

    //Function to validate the form
    function validateForm() {
        //Function to check name
        function checkForName() {
            var nameField = document.getElementById("name-field");
            //If no value is entered
            if (nameField.value.length === 0) {
                nameField.focus();
                nameField.style.backgroundColor = "yellow";
                nameField.setAttribute("placeholder", "Your name field is empty!");
                return false;
            }
            for (var i = 0; i < nameField.value.length; i++) {
                var isEmpty = true;
                //If value(s) other than spaces are entered
                if (nameField.value[i] != " ") {
                    isEmpty = false;
                    break;
                }
            }
            //If only space(s) are entered
            if (isEmpty) {
                nameField.focus();
                nameField.value = "";
                nameField.style.backgroundColor = "yellow";
                nameField.setAttribute("placeholder", "Your name field is empty");
                return false;
            }
            for (var i = 0; i < nameField.value.length; i++) {
                //If only number(s) are entered
                if (nameField.value[i] != " " && !isNaN(nameField.value[i])) {
                    nameField.focus();
                    nameField.value = "";
                    nameField.style.backgroundColor = "yellow";
                    nameField.setAttribute("placeholder", "Your name is invalid");
                    return false;
                }
            }
            //If name is valid
            nameField.style.backgroundColor = "white";
            nameField.setAttribute("placeholder", "");
            localStorage.setItem("name", nameField.value); //Saving the name to local storage
            return true;
        }

        //Function to check gender
        function checkForGender() {
            var isChecked = false;
            var radios = document.getElementsByName("genderRadio");
            var labels = document.getElementsByTagName("label");
            for (var i = 0; i < radios.length; i++) {
                //If a gender is selected
                if (radios[i].checked) {
                    isChecked = true;
                    checkedBoxVal = radios[i].value;
                    var checkedBox = radios[i].id;
                    break;
                }
            }
            //If no gender is selected
            if (!isChecked) {
                labels[0].style.backgroundColor = "yellow";
                labels[0].style.color = "red";
                labels[1].style.backgroundColor = "yellow";
                labels[1].style.color = "red";
                return false;
            }
            //If a gender is selected
            labels[0].style.backgroundColor = "inherit";
            labels[0].style.color = "black";
            labels[1].style.backgroundColor = "inherit";
            labels[1].style.color = "black";
            localStorage.setItem("gender", checkedBox);
            return true;
        }

        //Function to check address
        function checkForAddress() {
            var addressField = document.getElementById("address-field");
            //If no value is entered
            if (addressField.value.length === 0) {
                addressField.focus();
                addressField.style.backgroundColor = "yellow";
                addressField.setAttribute("placeholder", "Your address field is empty!");
                return false;
            }
            for (var i = 0; i < addressField.value.length; i++) {
                var isEmpty = true;
                //If value(s) other than spaces are entered
                if (addressField.value[i] != " ") {
                    isEmpty = false;
                    break;
                }
            }
            //If only space(s) are entered
            if (isEmpty) {
                addressField.focus();
                addressField.value = "";
                addressField.style.backgroundColor = "yellow";
                addressField.setAttribute("placeholder", "Your address field is empty");
                return false;
            }
            //If address is valid
            addressField.style.backgroundColor = "white";
            addressField.setAttribute("placeholder", "");
            localStorage.setItem("address", addressField.value); //Saving the address to local storage
            return true;
        }

        //Function to check education
        function checkForEducation() {
            var eSelector = document.getElementById("e-selector");
            //If the selected option is default
            if (eSelector.selectedIndex === 0) {
                eSelector.style.backgroundColor = "yellow";
                eSelector.style.color = "red";
                return false;
            }
            //If any other option is selected
            eSelector.style.backgroundColor = "white";
            eSelector.style.color = "black";
            localStorage.setItem("education", eSelector.selectedIndex); //Saving the selected education to local storage
            return true;
        }

        //Function to check profession
        function checkForProfession() {
            var pSelector = document.getElementById("p-selector");
            //If the selected option is default
            if (pSelector.selectedIndex === 0) {
                pSelector.style.backgroundColor = "yellow";
                pSelector.style.color = "red";
                return false;
            }
            //If any other option is selected
            pSelector.style.backgroundColor = "white";
            pSelector.style.color = "black";
            localStorage.setItem("profession", pSelector.selectedIndex); //Saving the selected profession to local storage
            return true;
        }

        //Calling sub-functions from within the form validation function
        var validName = checkForName();
        //If name is not valid
        if (!validName) {
            return validName;
        } else {
            var validGender = checkForGender();
            //If gender is not selected
            if (!validGender) {
                return validGender;
            } else {
                var validAddress = checkForAddress();
                //if address is not valid
                if (!validAddress) {
                    return validAddress;
                } else {
                    var validEducation = checkForEducation();
                    //If education is not selected
                    if (!validEducation) {
                        return validEducation;
                    } else {
                        var validProfession = checkForProfession();
                        if (!validProfession) {
                            return validProfession;
                        } else {
                            var name = nameField.value;
                            var gender = checkedBoxVal;
                            var address = addressField.value;
                            var education = educations[educationSelector.selectedIndex].value;
                            var profession = professions[professionSelector.selectedIndex].value;

                            var citizen = new Survey_Result(name, gender, address, education, profession);
                        }
                    }
                }
            }
        }
    }

    //Creating survey form's HTML using DOM
    var surveyDiv = document.createElement("div");
    surveyDiv.setAttribute("class", "survey-div");

    //Creating the form element
    var form = document.createElement("form");
    form.setAttribute("class", "form");
    form.setAttribute("onsubmit", "return validateForm()");

    //Creating div for name field
    var nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "name-div");

    //Creating name field
    var nameField = document.createElement("input");
    nameField.setAttribute("id", "name-field");
    nameField.setAttribute("maxlength", "30");
    nameField.setAttribute("placeholder", "Enter your name");
    //Fetching stored name from the local storage (If any)
    if (localStorage.getItem("name") != null) {
        nameField.setAttribute("value", localStorage.getItem("name"));
    }
    nameDiv.appendChild(nameField);

    //Creating div for gender radio boxes
    var genderDiv = document.createElement("div");
    genderDiv.setAttribute("class", "gender-div");

    //Creating male gender radio button
    var genderRadio1 = document.createElement("input");
    genderRadio1.setAttribute("id", "radio1");
    genderRadio1.setAttribute("type", "radio");
    genderRadio1.setAttribute("name", "genderRadio");
    genderRadio1.setAttribute("value", "Male");
    //Creating label for the male radio button
    var label1 = document.createElement("label");
    var label1Text = document.createTextNode("Male");
    label1.appendChild(label1Text);
    label1.setAttribute("for", "radio1");

    //Creating female gender radio button
    var genderRadio2 = document.createElement("input");
    genderRadio2.setAttribute("id", "radio2");
    genderRadio2.setAttribute("type", "radio");
    genderRadio2.setAttribute("name", "genderRadio");
    genderRadio2.setAttribute("value", "Female");
    //Creating label for the female radio button
    var label2 = document.createElement("label");
    var label2Text = document.createTextNode("Female");
    label2.appendChild(label2Text);
    label2.setAttribute("for", "radio2");

    //Fetching stored gender from the local storage (If any)
    if (genderRadio1.id == localStorage.getItem("gender")) {
        genderRadio1.setAttribute("checked", "checked");
    } else if (genderRadio2.id == localStorage.getItem("gender")) {
        genderRadio2.setAttribute("checked", "checked");
    }

    genderDiv.appendChild(label1);
    genderDiv.appendChild(genderRadio1);
    genderDiv.appendChild(label2);
    genderDiv.appendChild(genderRadio2);

    //Creating div for address field
    var addressDiv = document.createElement("div");
    addressDiv.setAttribute("class", "address-div");

    //Creating address field
    var addressField = document.createElement("input");
    addressField.setAttribute("id", "address-field");
    addressField.setAttribute("maxlength", "30");
    addressField.setAttribute("placeholder", "Enter your address");
    //Fetching stored address from the local storage (If any)
    if (localStorage.getItem("address") != null) {
        addressField.setAttribute("value", localStorage.getItem("address"));
    }

    addressDiv.appendChild(addressField);

    //Creating a div for holding drop-downs
    var dropdownDiv = document.createElement("div");
    dropdownDiv.setAttribute("class", "dropdown-div");

    //Creating education drop-down
    var educationSelector = document.createElement("select");
    educationSelector.setAttribute("id", "e-selector");
    var eOption1 = document.createElement("option");
    eOption1.setAttribute("value", "default");
    eOption1.setAttribute("selected", "selected");
    var eOption1Text = document.createTextNode("Select education");
    eOption1.appendChild(eOption1Text);
    educationSelector.appendChild(eOption1);
    var eOption2 = document.createElement("option");
    eOption2.setAttribute("value", "Matric");
    var eOption2Text = document.createTextNode("Matriculation");
    eOption2.appendChild(eOption2Text);
    educationSelector.appendChild(eOption2);
    var eOption3 = document.createElement("option");
    eOption3.setAttribute("value", "Inter");
    var eOption3Text = document.createTextNode("Intermediate");
    eOption3.appendChild(eOption3Text);
    educationSelector.appendChild(eOption3);
    var eOption4 = document.createElement("option");
    eOption4.setAttribute("value", "Bachelors");
    var eOption4Text = document.createTextNode("Bachelors");
    eOption4.appendChild(eOption4Text);
    educationSelector.appendChild(eOption4);
    //Fetching stored education from the local storage (If any)
    var educations = educationSelector.getElementsByTagName("option");
    for (var i = 0; i < educations.length; i++) {
        if (i == localStorage.getItem("education")) {
            educations[i].setAttribute("selected", "selected");
        }
    }

    //Creating profession drop-down
    var professionSelector = document.createElement("select");
    professionSelector.setAttribute("id", "p-selector");
    var pOption1 = document.createElement("option");
    pOption1.setAttribute("value", "default");
    pOption1.setAttribute("selected", "selected");
    var pOption1Text = document.createTextNode("Select profession");
    pOption1.appendChild(pOption1Text);
    professionSelector.appendChild(pOption1);
    var pOption2 = document.createElement("option");
    pOption2.setAttribute("value", "Teacher");
    var pOption2Text = document.createTextNode("Teacher");
    pOption2.appendChild(pOption2Text);
    professionSelector.appendChild(pOption2);
    var pOption3 = document.createElement("option");
    pOption3.setAttribute("value", "Doctor");
    var pOption3Text = document.createTextNode("Doctor");
    pOption3.appendChild(pOption3Text);
    professionSelector.appendChild(pOption3);
    var pOption4 = document.createElement("option");
    pOption4.setAttribute("value", "Office Worker");
    var pOption4Text = document.createTextNode("Office Worker");
    pOption4.appendChild(pOption4Text);
    professionSelector.appendChild(pOption4);
    //Fetching stored profession from the local storage (If any)
    var professions = professionSelector.getElementsByTagName("option");
    for (var i = 0; i < professions.length; i++) {
        if (i == localStorage.getItem("profession")) {
            professions[i].setAttribute("selected", "selected");
        }
    }

    dropdownDiv.appendChild(educationSelector);
    dropdownDiv.appendChild(professionSelector);

    //Creating div for submit button
    var submitDiv = document.createElement("div");
    submitDiv.setAttribute("class", "submit-div");

    //Creating submit button
    var submitBtn = document.createElement("input");
    submitBtn.setAttribute("id", "submit-btn");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Submit");
    submitDiv.appendChild(submitBtn);

    //Placing the divs in the form
    form.appendChild(nameDiv);
    form.appendChild(genderDiv);
    form.appendChild(addressDiv);
    form.appendChild(dropdownDiv);
    form.appendChild(submitDiv);
    surveyDiv.appendChild(form);

    //Placing the form on the document
    document.getElementById("survey-form").appendChild(surveyDiv);
}
