let myNotes = [];
let noteEl = document.getElementById("note");
const saveBtn = document.getElementById("save");
let ulEl = document.getElementById("ul-el");
const deleteBtn = document.querySelector(".delete-btn");


function inputLength() {
	return noteEl.value.length;
}

function newNote() {
	myNotes.push(noteEl.value);
	noteEl.value = "";
	renderNotes();
}

saveBtn.addEventListener("click", function() {
	if (inputLength() > 0) {
		newNote();
	}
})

noteEl.addEventListener("keypress", function(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		newNote();
	}
})


function renderNotes() {
	let listItems = "";
	for (let i = 0; i < myNotes.length; i++) {
		listItems += `
		<div class="list-container">
			<li>
			${myNotes[i]}
			</li>
			<button class="delete-btn" onClick="removeItem()">x</button>
		</div>	
		`;
	}
	ulEl.innerHTML = listItems;
}


function removeItem(e) {
	//var listContainer = document.querySelector(".list-container");
	//listContainer.remove();
	myNotes.splice(e);
}
