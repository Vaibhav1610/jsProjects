console.log("Notes app")
shownotes();
//if user add a note add to add event listner and add it to local storage
let addbtn = document .getElementById('addbtn');
addbtn.addEventListener("click", function(e){

    let addtitle = document.getElementById('addtitle');
    let adddesc = document.getElementById('adddesc');
    let notes = localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    let myobj = {
        title:addtitle.value,
        description:adddesc.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtitle.value="";
    adddesc.value="";
    console.log(notesObj);
    shownotes();
});

function shownotes()
{
    let notes= localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes)
    }

    let html="";

    notesObj.forEach(function(element,index) {
    
      html +=  `
      <div class="noteCard card my-2 mx-2" style="width: 18rem;" >            
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.description}</p>
              <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary my-3" id="delbtn">Delete Note</button>
            </div>
          </div>

      `
    });

    let noteElm = document.getElementById("notes");
    if(notesObj.length!=null)
    {
        noteElm.innerHTML=html;
    }
    else{

        noteElm.innerHTML("Please add some Notes to display")
    }

}


function deletenote(index)
{
    console.log("deleting",index)
    let notes = localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}



let searchtxt = document.getElementById("search");

searchtxt.addEventListener("input",function(){
    let inpval = searchtxt.value;

    let notecards = document.getElementsByClassName("noteCard");
    Array.from(notecards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inpval))
        {
            element.style.display = "block";
        }
        else{
            element.style.display="none";
        }
    })
});