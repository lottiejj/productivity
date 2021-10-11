
import React, { Component } from 'react'
import NoteData from '../data/notes.json'
class Notes extends Component {
render () {
    return (
        <div >
            <h1>My Notes</h1>
            {NoteData.map((noteContent, index)=>{
                return <div>
                    <h1>{noteContent.day}</h1>
                    <p>{noteContent.task}</p>
                    <p>{noteContent.done}</p>
                
                
                </div>
            })}
            </div>
       
    )
}
}
export default Notes