import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onInputTitleHandler = this.onInputTitleHandler.bind(this)
        this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onInputTitleHandler = (event) => {
        this.setState((prevState) => {
            return {
              ...prevState,
              title: event.target.value,
            }
        });
    }

    onChangeBodyHandler = (event) => {
        this.setState((prevState) => {
            return {
              ...prevState,
              body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render () {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa Karakter: {50 - this.state.title.length} </p>
                    <input type="text" className="note-input__title" placeholder="Ini adalah judul..." required="Kolom tidak boleh kosong!" value={this.state.title} onInput={this.onInputTitleHandler} maxLength = "50"/>
                    <textarea type="text" className="note-input__body" placeholder="Tuliskan catatanmu disini" required="Kolom tidak boleh kosong!" value={this.state.body} onChange={this.onChangeBodyHandler}></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;