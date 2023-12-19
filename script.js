// Creating Html Elements

var main=document.createElement("main");
main.setAttribute("class","container");
main.innerHTML="<h1 class='container'>Admission Form</h1>";

document.body.append(main);

var form=document.createElement("form")
form.setAttribute("id","myForm");
form.setAttribute("class","needs-validation") 
main.append(form);

var div=document.createElement("div")
div.setAttribute("class","form-row"); 
form.append(div);

var tr1=document.createElement("div")
tr1.setAttribute("class","col-md-4 mb-3");
tr1.innerHTML="<label for='firstname'>First name</label> <input type='text' class='form-control' id='firstname' name='firstName' placeholder='Enter your First name' 'required'>"
div.append(tr1);

var tr2=document.createElement("div");
tr2.setAttribute("class","col-md-4 mb-3");
tr2.innerHTML="<label for='lastname'>Last name</label>  <input type='text' class='form-control' id='lastname' name='lastName' placeholder='Enter your Last name' 'required'>"
div.append(tr2);

var tr3=document.createElement("div");
tr3.setAttribute("class","col-md-6 mb-3");
tr3.innerHTML="<label for='address'>Address</label> <textarea id='address' name='address' rows='2' cols='50' class='form-control' id='address' placeholder='Address' 'required'></textarea>"
div.append(tr3);

var tr4=document.createElement("div");
tr4.setAttribute("class","col-md-4 mb-3");
tr4.innerHTML=" <label for='pincode'>Pincode</label>    <input type='number' class='form-control' id='pincode' name='pincode' placeholder='pincode' 'required'>"
div.append(tr4);

var tr5=document.createElement("div");
tr5.setAttribute("class","col-md-4 mb-3");
tr5.innerHTML="<label class='my-1 mr-2' for='gender' name='gender'>Gender</label>   <select class='custom-select my-1 mr-sm-2' id='gender'><option selected value''>Choose one... </option><option value='Male'>Male</option><option value='Female'>Female</option><option value='Other'>Other</option></select>";
div.append(tr5);

var tr6=document.createElement("div");
tr6.setAttribute("class","col-md-3 mb-3");
tr6.innerHTML="<label class='my-1 mr-2' id='food'>Choose at least two food:</label><div class='form-check form-check-inline'><input class='form-check-input' type='checkbox' id='indian' name='food' value='Indian'><label class='form-check-label' for='indian'>Indian</label> </div>   <div class='form-check form-check-inline'> <input class='form-check-input' type='checkbox' id='chineese' name='food' value='Chineese'>  <label class='form-check-label' for='chineese'>Chineese</label>   </div> <div class='form-check form-check-inline'>   <input class='form-check-input' type='checkbox' id='jappanies' name='food' value='Jappanies'>  <label class='form-check-label' for='jappanies'>Jappanies</label> </div>   <div class='form-check form-check-inline'> <input class='form-check-input' type='checkbox' name='food' id='usa' value='USA' >   <label class='form-check-label' for='usa'>USA</label>  </div>    <div class='form-check form-check-inline'><input class='form-check-input' type='checkbox' name='food' id='thailand' value='Thailand' >  <label class='form-check-label' for='thailand'>Tailand</label></div>";
div.append(tr6);

var tr7=document.createElement("div");
tr7.setAttribute("class","col-md-3 mb-3");
tr7.innerHTML=" <label for='state'>State</label>    <input type='text' class='form-control' name='state' id='state' placeholder='State' 'required'>";
div.append(tr7);

var tr8=document.createElement("div");
tr8.setAttribute("class","col-md-3 mb-3");
tr8.innerHTML="<label for='country'>Country</label> <input type='text' class='form-control' name='country' id='country' placeholder='Country' 'required'>  <br> <button type='button' class='btn btn-primary' type='submit' onclick='submitForm()'>Submit form</button> ";
div.append(tr8);


var table=document.createElement("div");
table.setAttribute("class","container");
table.innerHTML="<table id='dataTable' class='table table-striped'><thead><tr><th scope='col'>First Name</th><th scope='col'>Last Name</th><th scope='col'>Address</th><th scope='col'>Pincode</th><th scope='col'>Gender</th><th scope='col'>Food</th><th scope='col'>State</th><th scope='col'>Country</th></tr></thead><tbody></tbody> </table>"

main.append(table);
 
 
 //========================================================================================================
 
 // Get form values
function submitForm() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var choosefood = document.querySelectorAll('input[name="food"]:checked'); 
    const food = Array.from(choosefood).map(option => option.value);
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

    // Create a new row
    var table = document.getElementById('dataTable');
    var row = table.insertRow(-1);

    // Insert cells into the row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    // Append values to the cells
    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = food.join(',');
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    // Clear form fields
    document.getElementById('myForm').reset();
}
