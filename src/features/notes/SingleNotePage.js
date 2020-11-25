import React from "react";
import Button from "../../Components/OutlinedButton";
import { findNoteById } from "./notesSlice";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { TimeAgo } from "./TimeAgo";
import { DeleteNote } from "./DeleteNote";
import { NoteStatus } from "./NoteStatus";
import { NotFound } from "./NotFound";

export default function SingleNotePage({ match }) {
  const { noteId } = match.params;

  const history = useHistory();

  console.log(noteId);

  const note = useSelector((state) => findNoteById(state, noteId));

  let content;

  if (note) {
    content = (
      <>
        <div className="prevPage" title="go to previous page">
          <button type="button" onClick={() => history.goBack()}>
            <span>&larr;</span>
          </button>
        </div>
        <h1>{note.title}</h1>
        <p className="spNoteStatus">
          <NoteStatus status={note.status} />
        </p>
        <p className="spTimeAgo">
          <TimeAgo timeStamp={note.created} />
        </p>
        <p className="spNoteDesc">{note.description}</p>
        <Button
          className="mr-2"
          context="info"
          onClick={() => history.push(`/editNote/${note._id}`)}
        >
          EDIT
        </Button>
        <DeleteNote
          noteId={noteId}
          size="md"
          onClick={() => history.goBack()}
        />
      </>
    );
  } else {
    content = <NotFound />;
  }

  return (
    <>
      <Container className="singleNotePage">{content}</Container>
    </>
  );
}