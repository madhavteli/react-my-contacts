import classes from './Note.module.css';

function Note() {
	return(
		<div className={classes.note}>
			<h1>This is the title</h1>
			<p>This is the note content</p>
		</div>
	)
}

export default Note;