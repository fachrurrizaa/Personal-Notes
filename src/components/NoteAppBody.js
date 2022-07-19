import React from "react";
import NoteInput from "./NoteInput";
import ActiveNote from "./ActiveNote";
import ArchiveNote from "./ArchiveNote"

function NoteAppBody( { notes, archives, onDelete, onArchive, onMove, addNotes } ){
    return(
        <div className="note-app__body">
            <NoteInput addNotes={addNotes}/>
            <h2>Catatan Aktif</h2>
            <ActiveNote notes={notes} onDelete={onDelete} onArchive={onArchive}/>
            <h2>Arsip</h2>
            <ArchiveNote archives={archives} onDelete={onDelete} onMove={onMove}/>
        </div>
    )
}

export default NoteAppBody;