import React from 'react'
import { Link } from 'gatsby'

const AudibleLink = ({ to, audio, handleAudio, ...rest }) => {

    return to 
        ? <Link to={to} onClick={(e) => handleAudio(audio)} {...rest} />
        : (
            rest?.href ? <a onClick={(e) => handleAudio(audio)} {...rest} /> 
            : <span onClick={(e) => handleAudio(audio)} {...rest} />
          )

}

export default AudibleLink