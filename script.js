entry.addEventListener("click", AddRow);
entry.addEventListener("click", SubmitEvent);

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];


var n = 1;
var x = 0;

function AddRow(){
    var AddingRow = document.getElementById('show submit');
	var NewRow = AddingRow.insertRow(n);

}


function AddRow(){

	var AddingRow = document.getElementById('show');
	var NewRow = AddingRow.insertRow(n);

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("phone").value;
    var mob = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var address = document.getElementById("address").value;
    var pin = document.getElementById("pin").value;
    
    if( !name || !email || !phone || ! Addtionalphone|| !date || !address  || !pin ){
        alert("Please enter all the information");
        alert("click on submit")
        return;
    }

	list1[x] = document.getElementById("name").value;
	list2[x] = document.getElementById("email").value;
	list3[x] = document.getElementById("phone").value;
    list4[x] = document.getElementById("Addtionalphone").value;
    list5[x] = document.getElementById("date").value;
    list6[x] = document.getElementById("address").value;
    list7[x] = document.getElementById("pin").value

	var cel1 = NewRow.insertCell(0);
	var cel2 = NewRow.insertCell(1);
	var cel3 = NewRow.insertCell(2);
	var cel4 = NewRow.insertCell(3);
    var cel4 = NewRow.insertCell(4);
    var cel5 = NewRow.insertCell(5);
    var cel6 = NewRow.insertCell(6);


	cel1.innerHTML = list1[x];
	cel2.innerHTML = list2[x];
	cel3.innerHTML = list3[x];
    cel3.innerHTML = list4[x];
	cel4.innerHTML = list5[x];
    cel5.innerHTML = list6[x];
    cel3.innerHTML = list7[x];

	n++;
	x++;

	document.getElementById("form").reset();
    document.getElementById("form submit").reset();
    
}