import React, { useState } from 'react'

/**
 * This component receives an "addSong" method.
 */
const NewSongForm = ({ addSong }) => {

    //This component has a single state called 'title':
    const [title, setTitle] = useState('')

    //Runs the addSong method upon submitting the form:
    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(title)

        setTitle('')    //To clear the field.
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Song Name:</label>

            {/* Here we sync what the user types to the state of the component: */}
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />

            <input type="submit" value="add song" />
        </form>
    );
}

export default NewSongForm;