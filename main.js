let noteToDiv = note => {
    let div = document.createElement("div");
    div.className = "note";
    div.innerHTML = '<h4>' + note.header + '</h4>' + "<p>" + note.text + "</p>";
    return div;
}

let notes = [];
//
notes.push({header: "Note 1", text: "This is note 1"});
notes.push({header: "Note 2", text: "This is note 2"});
notes.push({header: "Note 3", text: "This is note 3"});

let divAddNote = document.createElement('div');
divAddNote.className = 'add-note note';
divAddNote.innerHTML = '<img src="add.ico" alt="add note" />';

let grid = document.querySelector('.grid');
grid.append(divAddNote);
for (const note of notes) {
    grid.append(noteToDiv(note));
}