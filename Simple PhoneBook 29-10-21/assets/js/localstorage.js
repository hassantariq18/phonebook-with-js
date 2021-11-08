


function saveData(){
    // index();

    document.getElementById("formSubmit").submit();

    let  naam, emailid, numberr, table;
    
    naam = document.getElementById('name').value; 
    emailid = document.getElementById('email').value; 
    numberr = document.getElementById('number').value; 
    const contact={
        name:naam,
        email:emailid,
        phone:numberr
    }
    
    
    let contacts=localStorage.getItem('PhoneBook') || "[]";
    let arr=[];
    if(contacts==null){
        arr.push(contact);
        console.log(arr,"null");
        
    }
    else{
        arr=JSON.parse(contacts);
        console.log(arr.push(contact));
    }
localStorage.setItem('PhoneBook', JSON.stringify(arr));


    

    
   

        //    let ptanai = document.getElementById('table');
        //    for (var i=0; i < 10; i++){
        //        var row = ptanai.insertRow(i);
        //        for(var j=0; j < 10; j++){
        //         var cell = row.insertCell(j);
        //        }
        //        cell.innerHTML = "yo";
        //    } 


    // buildTable(idk)
    // function buildTable(data){
    //     var table  = document.getElementById('table');

    //     for(var i=0; i < data.length; i++){
    //         var row =   <tr>
    //                         <td>$data[i].name</td>
    //                         <td>$data[i].email</td>
    //                         <td>$data[i].phone</td>
    //                     </tr>
    //         table.innerHTML += row;
    //     }
    // }

}



// function showData(){

//     alert('heyhey');



    
//     var namee = document.getElementById("hey");
//     namee.innerHTML = "heyhey";
// }


 // var emailidd = localStorage.getItem('email');
    // var numberrr = localStorage.getItem('number');

    // namee = document.getElementById('hey').innerHTML;
    // document.getElementById('hey').innerHTML = namee;
    // document.getElementById('heyhey').innerHTML = emailidd;
    // document.getElementById('hey').innerHTML = numberrr;


// function woah (){
//     console.log();
//     document.getElementById("yo").textContent = "yo";
//     document.getElementById("yoyo").textContent = "yoyo";
//     document.getElementById("yoyoyo").textContent = "yoyoyo";
// }
// window.addEventListener("load",woah);