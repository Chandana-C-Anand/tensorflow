var selectedRow = null

function onFormSubmit() {
    if (validatenew()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
	formData["lastName"] = document.getElementById("lastName").value;
    formData["email"] = document.getElementById("email").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.salary;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.city;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[4].innerHTML;
    document.getElementById("city").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.phone;
    selectedRow.cells[4].innerHTML = formData.salary;
    selectedRow.cells[5].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("firstName").value == "") {
        isValid = false;
        document.getElementById("firstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
            document.getElementById("firstNameValidationError").classList.add("hide");
    }
    return isValid;
}

function validatenew() {
    var firstName = document.forms["RegForm"]["firstName"];
    var lastName = document.forms["RegForm"]["lastName"];
    var email = document.forms["RegForm"]["email"];
    var phone = document.forms["RegForm"]["phone"];
    var salary = document.forms["RegForm"]["salary"];
    var city = document.forms["RegForm"]["city"];
    var regexp = /^[a-zA-Z]+$/;

    if (firstName.value == "") {
        window.alert("Please enter your First name.");
        name.focus();
        return false;
    }
	 
	
    if (lastName.value == "") {
        window.alert("Please enter your Last name.");
        name.focus();
        return false;
    }
	
	if (!lastName.value.match(regexp))
	{
		window.alert("Please provide only alphabets for  Last name.");
        lastName.focus();
        return false;
    }
    
    if (email.value == "") {
        window.alert("Please enter your e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert("Please enter your telephone number.");
        phone.focus();
        return false;
    }
    if (phone.value.length < 10 || phone.value.length > 10) {
        window.alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
        phone.focus();
        return false;
    }
	if (isNaN(phone.value)){
        window.alert("Please  enter only  numeric value for phone no.");
        phone.focus();
        return false ;
    }
     

    if (salary.value == "") {
        window.alert("Please enter your expected salary");
        salary.focus();
        return false;
    }
	
	if (isNaN(salary.value)){
        window.alert("Please  enter only  numeric value for Salary.");
        salary.focus();
        return false ;
    }
	
	if (city.value == "") {
        window.alert("Please enter your city.");
        city.focus();
        return false;
    }




    return true;
}