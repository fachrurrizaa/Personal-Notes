import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemActions from "./NoteItemActions";
import { showFormattedDate } from "../utils/index"

function NoteItem( { title, createdAt, body, id, archived, onDelete, onArchive, onMove} ){
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body}/>
            <NoteItemActions id={id} onDelete={onDelete} archived={archived} onArchive={onArchive} onMove={onMove}/>
        </div>
    )
}

export default NoteItem;