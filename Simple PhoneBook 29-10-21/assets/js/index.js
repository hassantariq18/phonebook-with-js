// // var data = localStorage.getItem('PhoneBook')


// // window.onload = function(){
// //     document.getElementById("icons").style.display = 'none';

//     // table = document.getElementById("table");
//     // for(var i=0; i < table.rows.length; i++){

//     //     for(var j=0; j < table.rows[i].cells.length; j++){

//     //         table.rows[i].cells[j].innerHTML = arr[i][j];
//     //     }
//     //     document.getElementById("icons").style.display = 'block';
//     // }
// //     };
// let idk = localStorage.getItem('PhoneBook');

// console.log(idk);


// window.onload = function(){

//     deleteIcon = document.getElementById("delbtn");
//     editIcon = document.getElementById("editbtn");
//     table = document.getElementById("table");
    
//     for(var i=0; i < 10; i++){

//         let x = table.insertRow(3);

//         for(var j=0; j < 4; j++){

//             let y = x.insertCell(0);
//             y.innerHTML = "yo";
//             // y.Cell(3) = document.getElementById("icons");
       

//         }
//     }
// };

// function index(){

document.addEventListener("DOMContentLoaded", function(event) { 
        // idk how to do it but i try (getting for loop value outside of it)
        var rowId =[];
        //adding a del btn 
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.type = "button";
        

        // a edit btn
        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.type = "button";
        
        let idkk = JSON.parse(localStorage.getItem('PhoneBook'));
        console.log(idkk);
    
        let tablee = document.getElementById('table');
        if (idkk == null){
            console.log("null");
        }
        else {
            for(var i = 0; i < idkk.length; i++){
    
    
                console.log(idkk[i]);
                   // create a new row
                   var newRow = tablee.insertRow();
                   console.log(newRow);
                   newRow.setAttribute("id", i);
                   newCell = newRow.insertCell(0);
                   newCell.innerHTML = idkk[i].name;
                   newCell = newRow.insertCell(1);
                   newCell.innerHTML = idkk[i].email;
                   newCell = newRow.insertCell(2); 
                   newCell.innerHTML = idkk[i].phone;
                   newCell = newRow.insertCell(3);
                   
                   newCell.innerHTML=
                   `<button onclick=editRow(this) class="btn btn-inf" data-toggle="modal" data-target="#exampleModalCenter" style"border: none;
                   outline: none;"><img src="assets/edit-icon.png" width="22px" height="22px" ></button>
                   <button onclick=deleteRow(this) class="btn btn-info" style="border: none ;
                   outline: none;"><img src="assets/delete-icon.png" width="22px" height="22px"></button>`;
                   
                //    rowId.push(i);
                //    deleteBtn.setAttribute.id=rowId[i];


                 //    newCell.appendChild(deleteBtn).setAttribute("class", "btn btn-info");
                //    newCell.appendChild(editBtn).setAttribute("class", "btn btn-info");
                   

            }
            //  pehly sense bnrai thi ab ni bnrai
            // console.log(rowId);


             

        }
});
   

// making buttons work for edit and delete

// delete a row!

function deleteRow(button){
    var x = button.parentNode.parentNode.id;
    document.getElementById(x).remove();
    del = JSON.parse(localStorage.getItem('PhoneBook'));
    del.splice(x,1);
    localStorage.setItem('PhoneBook', JSON.stringify(del));


}


// edit a row!

function editRow(button){
    document.getElementById("save").disabled = false;
    // getting values of added form 
    var y = button.parentNode.parentNode.id;
    editing = document.getElementById(y);
    editName = editing.cells[0].innerHTML;
    editEmail = editing.cells[1].innerHTML;
    editNumber = editing.cells[2].innerHTML;
    document.getElementById("name").value = editName;
    document.getElementById("email").value = editEmail;
    document.getElementById("number").value = editNumber;


    newName = document.getElementById("name").value;
    newEmail = document.getElementById("email").value;
    newNumber = document.getElementById("number").value;

    editing.cells[0].innerHTML = newName;
    editing.cells[1].innerHTML = newEmail;
    editing.cells[2].innerHTML = newNumber;


    document.getElementById(y).remove();
    del = JSON.parse(localStorage.getItem('PhoneBook'));
    del.splice(y,1);
    localStorage.setItem('PhoneBook', JSON.stringify(del));




    



    // idkkk = document.getElementById("name").onchange.value;

    // editDone = JSON.parse(localStorage.getItem('PhoneBook'));
    // localStorage.setItem('PhoneBook', JSON.stringify(editDone));



    // saving values of into the same row 



// To check if m doing wrong or right
//     console.log(editName);
//     console.log(editEmail);
//     console.log(editNumber);

}

function searchContacts(){
    console.log("working");
    var input = document.getElementById("searchData");
    var table = document.getElementById("table");
    var filter = input.value.toUpperCase();
    var filterfornum = input.value;
    var TableRows = table.getElementsByTagName("tr");
    var TableData = table.getElementsByTagName("td");
    
    for (i = 0; i < TableRows.length; i++) {
        namee = TableRows[i].getElementsByTagName("td")[0];
        email = TableRows[i].getElementsByTagName("td")[1];
        number = TableRows[i].getElementsByTagName("td")[2];
        
        if (namee || email || number) {
         var txtValue = namee.textContent || namee.innerText;
         var emailValue = email.textContent || email.innerText;
         var numberValue = number.innerHTML || number.value;

         idk = txtValue.toUpperCase().indexOf(filter);
         idkk = emailValue.toUpperCase().indexOf(filter);
         idkkk = numberValue.indexOf(filterfornum);
          if ((idk > -1) || (idkk > -1) || (idkkk > -1) ) {
            TableRows[i].style.display = "";
          } 
          else {
            TableRows[i].style.display = "none";
          }
          // if (emailValue.toUpperCase().indexOf(filter) > -1) {
          //   TableRows[i].style.display = "";
          // }
          // else {
          //   TableRows[i].style.display = "none";
          // }
          // if (numberValue.toUpperCase().indexOf(filter) > -1) {
          //   TableRows[i].style.display = "";
          // }
          // else {
          //   TableRows[i].style.display = "none";
          }
        
        // TableData = TableRows[i].getElementsByTagName("td")[1];
        // if (TableData) {
        //  var txtValue = TableData.textContent || TableData.innerText;
        //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //     TableRows[i].style.display = "";
        //   } else {
        //     TableRows[i].style.display = "none";
        //   }
        // }       
    }
      
    

}


