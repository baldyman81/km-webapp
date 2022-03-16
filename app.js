function addBrief() {
    let newBrief = "";
    newBrief = document.getElementById('item');
    console.log(newBrief.value);
}

let elAdd = document.getElementById('add');
elAdd.addEventListener('click', addBrief, false);