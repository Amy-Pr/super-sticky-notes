import React from "react";

const Note = (props) => {
  const updateTitle = (event) => {
    const updatedValue = event.target.value; //interrogate the event (What's this event? Oh a value was typed!) and save it to a variable
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue); //we just called the onType function from App and fed it specific parameters
  };

  const updateDescription = (event) => {
    const updatedValue = event.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };

  const clickDelete = () => {
    props.removeNote(props.note.id);
  };

  return (
    <li className="note">
      <input
        value={props.note.title} //The "note" prop will be passed over to <Note /> in NoteList.js which sets note={noteObj}; Alternative: could also pass as "props.title" and set title={noteObj.title} in <Note />.
        type="text"
        className="note__title"
        placeholder="Title"
        onChange={updateTitle}
      />
      <textarea
        value={props.note.description}
        className="note__description"
        placeholder="Description..."
        onChange={updateDescription}
      />
      <span onClick={clickDelete} className="note__delete hover">
        X
      </span>
    </li>
  );
};

export default Note;
