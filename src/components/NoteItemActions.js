import React from "react";

function NoteItemActions( { id, archived, onDelete, onArchive, onMove }){
    if ( archived === false ) {
        return (
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={()=> onDelete(id, archived)}>Hapus</button>
                <button className="note-item__archive-button" onClick={()=> onArchive(id)}>Arsipkan</button>
            </div>
        )
    } else if ( archived === true ) {
        return (
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={()=> onDelete(id, archived)}>Hapus</button>
                <button className="note-item__archive-button" onClick={()=> onMove(id)}>Pindahkan</button>
            </div>
        )
    }
}

export default NoteItemActions;