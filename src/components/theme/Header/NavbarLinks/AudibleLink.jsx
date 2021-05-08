import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

const AudibleLink = ({ to, audio, handleClick, ...rest }) => {

    // console.log('AudibleLink with handleClick', handleClick)
    // const [isPlaying, setIsPlaying] = useState(false)

    // useEffect(() => {
    //     // play audio on click
    //     if (audio && isPlaying) {
    //         audio.currentTime = 0
    //         audio.play()
    //     }
    // }, [isPlaying])

    // const play = (e) => {
    //     setIsPlaying(true)
    // }

    return (
        <Link to={to} onClick={(e) => console.log('onClick AudibleLink with audio', audio) || handleClick(audio)} {...rest}/>
    )
}

export default AudibleLink