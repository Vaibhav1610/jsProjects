console.log("CV Screener");

let data = [{
    name: "vaibhav",
    age: "24",
    skill: "java-springboot",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    address: "Raipur",
    contact: "9899987661"

},
{
    name: "Rahul",
    age: "45",
    skill: "hibernate-springboot",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    address: "ranchi",
    contact: "9894487661"

},
{
    name: "shyam",
    age: "33",
    skill: "python",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    address: "jharkhand",
    contact: "9895487661"

},
{
    name: "kirti",
    age: "44",
    skill: "javascript",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    address: "mumbai",
    contact: "9833987661"

}

];

//cv iterator

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}

let btnnext = document.getElementById("nextbtn");

btnnext.addEventListener('click', nextCV);

let candidates = cvIterator(data);
nextCV();
function nextCV() {
    const currentcandidate = candidates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");

    if(currentcandidate!=undefined)
    {
    image.innerHTML = `<img src='${currentcandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name: ${currentcandidate.name}</li>
                            <li class="list-group-item">Age: ${currentcandidate.age}</li>
                            <li class="list-group-item">Good At: ${currentcandidate.skill}</li>
                            <li class="list-group-item">Lives In: ${currentcandidate.address}</li>
                            <li class="list-group-item">Contact: ${currentcandidate.contact}</li>
                        </ul>`
    }
    else
    {
        alert("end of candidate list");
        window.location.reload();
        
    }

}

