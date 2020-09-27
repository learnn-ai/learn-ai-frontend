import React from "react";
import { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import api from "../api";
import Note from "./Note";

let NoteList = function (props) {
  const [notes, setNotes] = useState([]);
  // const [scripts, setScript] = useState([]);

  const fetchNotes = async () => {
    const { status, data } = await api.todos.getAllNotes();
    if (status === 200) {
      setNotes(data);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // const fetchScript = async () => {
  //   const { status, data } = await api.todos.getScript("https://www.youtube.com/watch?v=k1aV0FBf_8Q");
  //   if (status === 200) {
  //     // setScript(data);
  //     console.log(data)
  //   }
  // };

  // useEffect(() => {
  //   fetchScript();
  // }, []);





  return (
    <Scrollbars
      style={{ height: "calc(100vh - 200px)", minHeight: "200px" }}
      autoHide
      className="noteElement"
    >
      {notes.map((note, index) => (
        <Note
          note={note}
          index={index}
          // handleDeleteTodo={handleDeleteTodo}
          key={note._id}
        />
      ))}
    </Scrollbars>
  );
};


export default NoteList;
