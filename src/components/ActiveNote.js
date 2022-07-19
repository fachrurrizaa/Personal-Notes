import React from "react";
import NoteList from "./NoteList"

function ActiveNote( { notes, onDelete, onArchive } ){
    if(notes.length <= 0){
        return <p className="notes-list__empty-message">Tidak ada catatan</p>
    }else{
        return <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive}/>
    }
}

export default ActiveNote;