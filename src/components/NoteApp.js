import React from "react";
import NoteHeader from "./NoteHeader"
import NoteAppBody from "./NoteAppBody";
import { getInitialData, showFormattedDate } from "../utils/index"

let activeData = getInitialData();
let archiveData = [];

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeData,
            archiveData,
            notes: activeData,
            archives: archiveData,
            searchText: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onMoveHandler = this.onMoveHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteHandler(id, archived) {
        if(archived === false) {
          const activeData = this.state.activeData.filter (datum => datum.id !== id);
          this.setState({ activeData },()=>{
              this.setState({
                  notes: this.state.activeData
              })
          });
        }else if(archived === true){
          const archiveData = this.state.archiveData.filter (datum => datum.id !== id);
          this.setState({ archiveData },()=>{
              this.setState({
                  archives: this.state.archiveData
              })
          });
        }
    }

    onChangeHandler = (event) => {
        this.setState({
              searchText: event.target.value,
        },  () => {
              const notes = this.state.activeData.filter (datum => datum.title.toLowerCase().includes(this.state.searchText.toLowerCase()));
              this.setState({ notes }, () => {
                const archives = this.state.archiveData.filter (datum => datum.title.toLowerCase().includes(this.state.searchText.toLowerCase()));
                this.setState({ archives });
            });
        })
    }

    onArchiveHandler = (id) => {
      const archive = this.state.activeData.filter (datum => datum.id === id);
      this.setState((prevState) => {
        return {
          archiveData: [
            ...prevState.archiveData,
            {
              id: archive[0].id,
              title: archive[0].title,
              body: archive[0].body,
              createdAt: archive[0].createdAt,
              archived: true,
            }
          ]
        }
      },()=>{
        this.setState({
          archives: this.state.archiveData
        },() => {
          const activeData = this.state.activeData.filter (datum => datum.id !== id);
          this.setState({ activeData },()=>{
              this.setState({
                  notes: this.state.activeData
              })
          });
          })
        })
    }

    onMoveHandler = (id) => {
      const note = this.state.archiveData.filter (datum => datum.id === id);
      this.setState((prevState) => {
        return {
          activeData: [
            ...prevState.activeData,
            {
              id: note[0].id,
              title: note[0].title,
              body: note[0].body,
              createdAt: note[0].createdAt,
              archived: false,
            }
          ]
        }
      },()=>{
        this.setState({
          notes: this.state.activeData
        },() => {
          const archiveData = this.state.archiveData.filter (datum => datum.id !== id);
          this.setState({ archiveData },()=>{
              this.setState({
                  archives: this.state.archiveData
              })
          });
          })
        })
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
          return {
            activeData: [
              ...prevState.activeData,
              {
                id: +new Date(),
                title,
                body,
                createdAt: showFormattedDate(+new Date()),
                archived: false,
              }
            ]
          }
        },() => {
            this.setState({
                notes: this.state.activeData
            })
        });
    }
      

    render () {
        return (
            <div className="note-app">
                <NoteHeader value={this.state.searchText} onChange={this.onChangeHandler}/>
                <NoteAppBody notes={this.state.notes} archives={this.state.archives} onDelete={this.onDeleteHandler} addNotes={this.onAddNotesHandler} onArchive={this.onArchiveHandler} onMove={this.onMoveHandler}/>
            </div>
        )
    }
}

export default NoteApp;