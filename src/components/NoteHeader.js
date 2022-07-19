import React from "react";

function NoteHeader( { searchText, onChange } ) {
    return (
        <div className="note-app__header">
            <h1>Rizaa</h1>
            <div className="note-search">
                <input type="text" placeholder="Cari catatan" value={searchText} onChange={onChange}/>
            </div>
        </div>
    )
}

export default NoteHeader;