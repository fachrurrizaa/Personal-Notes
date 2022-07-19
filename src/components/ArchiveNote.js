import React from "react";
import NoteList from "./NoteList"

function ArchiveNote( { archives, onDelete, onMove } ){
    if(archives.length <= 0){
        return <p className="notes-list__empty-message">Tidak ada catatan</p>
    }else{
        return <NoteList archives={archives} onDelete={onDelete} onMove={onMove}/>
    }
}

export default ArchiveNote;