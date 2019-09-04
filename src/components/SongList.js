import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm'
import uuid from 'uuid/v1'

const SongList = () => {

    //Usestate method receives an array for the state, and returns
    // An array with the state and some set method.
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 }
    ])

    const [age, setAge] = useState(20)

    const addSong = (title) => {

        //This will change the whole state...
        //So dont forget to spread the current and add the new.
        setSongs([
            ...songs,
            { title, id: uuid() }
        ])
    }

    //Runs every time the component renders or re-renders
    // useEffect(() => {
    //     console.log('useEffect run...');  
    // })

    //Will only run when SONGS changed:
    useEffect(() => {
        console.log('useEffect run for songs...');
        
    }, [songs])

    //Will only run when AGE is changed:
    useEffect(() => {
        console.log('useEffect run for age...');
        
    }, [age])

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)} > Add 1 to age: {age}</button>
        </div>
    );
}

export default SongList;