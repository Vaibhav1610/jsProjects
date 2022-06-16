console.log("app.js page loaded");

//book constructor
function Book(title,author,category)
{
    this.title=title;
    this.author=author;
    this.category=category;

}

//display constructor
function Display()
{


}

//add methods to display prototype
Display.prototype.add = function(book){

   let  tableBody = document.getElementById("tablebody");
    let tableData = `
    <tr>
                      
                      <td>${book.title}</td>
                      <td>${book.author}</td>
                      <td>${book.category}</td>
                    </tr>`;

     tableBody.innerHTML += tableData;               

}

Display.prototype.clear = function(){
    let libraryForm = document.getElementById("myform");
    libraryForm.reset();
}

Display.prototype.validate = function(book){
    if(book.title.length<2||book.author.length<2)
    {
        return false;
    }
    else
    {
        return true;
    }
}

Display.prototype.show = function(type,response){

    let message = document.getElementById("message");
    
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${response}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;

  setTimeout(function(){
      message.innerHTML='';
  },2000);

    
    
}

//add listner t submit form
let libraryForm = document.getElementById("myform");
libraryForm.addEventListener('submit' ,libraryFormSubmit);

function libraryFormSubmit(e)
{
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let fiction = document.getElementById("fiction");
    let nonfiction = document.getElementById("nonfiction");
    let motivational = document.getElementById("motivational");
    let educational = document.getElementById("educational");
    let category;
    if(fiction.checked)
    {
        category=fiction.value;
    }
    else if(nonfiction.checked)
    {
        category = nonfiction.value;
    }
    else if(motivational.checked)
    {
        category = motivational.value;
    }
    else
    {
        category = educational.value;
    }
    let book = new Book(title,author,category)
    console.log("form submitted");
    console.log(book);

    let display = new Display();
    if(display.validate(book))
    {
        display.add(book);
        display.clear()
        display.show('success',"Book has been added successfully");

    }
    else
    {
        display.show('danger',"You cannot add the Book");
    }
    
    e.preventDefault();
    
}