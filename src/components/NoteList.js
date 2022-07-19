import React from "react";
import NoteItem from "./NoteItem"

function NoteList( { notes, archives, onDelete, onArchive, onMove} ){
    if ( notes ){
        return (
            <div className="notes-list">
                {
                    notes.map((note) => (
                        <NoteItem key={note.id} id={note.id} archived={note.archived} onDelete={onDelete} onArchive={onArchive} {...note} />
                    ))
                }
            </div>
        )
    }else if ( archives ){
        return (
            <div className="notes-list">
                {
                    archives.map((archive) => (
                        <NoteItem key={archive.id} id={archive.id} archived={archive.archived} onDelete={onDelete} onMove={onMove} {...archive} />
                    ))
                }
            </div>
        )
    }
}

export default NoteList;