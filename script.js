let selectedRow = null

var open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');


function openFunction(){
container.classList.add("show-nav")}
function closeFunction (){

    container.classList.remove('show-nav')
}

function onFormSubmit(){
    let formData = readFormData();
    if(selectedRow === null)
       insertNewRecord(formData);
       else  
       updateRecord(formData); 
    resetForm();

}
function readFormData(){
    let formData = {};
    formData["titre"]=document.getElementById("titre").value;
    formData["auteur"]=document.getElementById("auteur").value;
    formData["prix"]=document.getElementById("prix").value;
    formData["langue"]=document.getElementById("langue").value;
    formData["type"]=document.querySelector('input[name="typeradio"]:checked').value;
    formData["date"]=document.getElementById("date").value; 
    return formData;
}



function insertNewRecord(data){
    let table = document.getElementById("infolist").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.lenght);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.titre; 
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.auteur;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.prix;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.langue;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.type;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.date; 
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;  
}
function resetForm(){
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("langue").value = "";
    document.querySelector("type").value = "";
    document.getElementById("date").value = ""; 


}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("langue").value = selectedRow.cells[3].innerHTML;
    document.getElementById("type").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML; 
    
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML= formData.titre;
    selectedRow.cells[1].innerHTML= formData.auteur;
    selectedRow.cells[2].innerHTML= formData.prix;
    selectedRow.cells[3].innerHTML= formData.langue;
    selectedRow.cells[4].innerHTML= formData.type;
    selectedRow.cells[5].innerHTML= formData.date;
}
function onDelete(td){
    if (confirm('vous êtes sûr pour suprimer la fenêtre ?')){
        row = td.parentElement.parentElement;
        document.getElementById("infolist").deleteRow(row.rowIndex);
        resetForm();
    }
}

