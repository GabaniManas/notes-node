console.log('Starting notes.js!');
// console.log(module);
// module.exports.age=20;
// module.exports.addNote=function(){
// 	console.log('addNote');
// 	return 'new note';
// };
// module.exports.add=(a,b)=>{return a+b;};
const fs = require('fs');

var fetchNotes = () => {
	try {
		var noteString = fs.readFileSync('notes-data.json');
		return JSON.parse(noteString);	
	} catch (e) {
		return [];
	}
}
var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var addNote = (title,body) => {
	var notes=fetchNotes();
	var note={
		title,//similar to title: title
		body
	}
	
	var duplicateNotes = notes.filter((note)=>note.title === title);
	//similar to (note)=>{	return note.title === title;}
	//console.log(duplicateNotes);
	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
}
var getAll = () => {
	return fetchNotes();
}
var getNote = (title) => {
	var notes = fetchNotes();
	var read = notes.filter((note)=>note.title===title);
	//console.log(read);
	return read[0];
}
var removeNote = (title) => {
	var notes = fetchNotes();
	// filter notes and remove the one with title of argument
	var filteredNotes = notes.filter((note)=>note.title!=title);

	saveNotes(filteredNotes);
	return (notes.length === filteredNotes.length);
}
var display = (note)=>{
	debugger;// n for next, c to continue, repl to run some js, exit or CTRL+C to get out from debugging 
	console.log('--*--*--*--*--*--*--*--*--');
	console.log('Title:',note.title);
	console.log('Body:',note.body);
}
module.exports={
	addNote,getAll,getNote,removeNote,display      //Similar to addNote : addNote and so on...
}