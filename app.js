console.log('Starting app!');
// const fs = require('fs');
// const _ = require('lodash');
const yargs = require('yargs');
/*fs.appendFile('greetings.txt','Hello World!',function(err){
	if(err){
		console.log('unable to write to the file');
	}
});*/
const notes = require('./notes.js');
// console.log(n);
// const os=require('os');
// console.log(os.userInfo().username);
// fs.appendFileSync('new.txt','Hello '+os.userInfo().username+'!');
// fs.appendFileSync('greetings.txt',`Hello ${os.userInfo().username}! You are ${notes.age}`);
// console.log(notes.addNote());
// console.log(notes.add(3,4));

// console.log(_.isString('Hello World!'));
// console.log(_.isString(true));
// var arr=[5,6,4,5,3,4,5,6,5,4,3,4,5,5];
// console.log(_.uniq(arr));
// *************************************************** //
const titleOptions={
	describe: 'Title of the note',
	demand: true,
	alias: 't'
};
const bodyOptions={
	describe: 'Body of the note',
	demand:true,
	alias: 'b'
};
const argv = yargs
.command('add','Add a new note',{
	title:titleOptions,
	body:bodyOptions
})
.command('read','Read a note',{
	title:titleOptions
})
.command('remove','Remove a note',{
	title:titleOptions
})
.command('list','List all notes')
.help()
.argv;
// console.log(argv._[0]);
var arg=process.argv[2];



if (arg === 'add') {
	var note = notes.addNote(argv.title,argv.body);
	//console.log(note);
	if (note) {
		console.log('Note added Successfully.');
		notes.display(note);
	} else {
		console.log('Node with',argv.title,'already exists.');
	}
} else if(arg === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Note Found!');
		notes.display(note);
	} else {
		console.log('Note with title',argv.title,'not found.');
	}
} else if(arg === 'list') {
	var notesList = notes.getAll();
	console.log(`Listing ${notesList.length} note(s).`);
	notesList.forEach((note) => notes.display(note));
} else if(arg === 'remove') {
	var remove = notes.removeNote(argv.title);
	//console.log(remove);
	if (remove) {
		console.log('Note is already absent!');
	} else {
		console.log('Note Removed Successfully!');
	}
} else {
	console.log('Command not recognized.');
}