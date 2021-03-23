import React, { useContext }  from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeContext } from 'providers/ThemeProvider'
import MarkdownView from 'react-showdown'

export const Feature = ({feature}) => {
    console.log("Feature", feature)

    const title = feature.title || feature.drawing?.title || feature.theme?.name || feature.download?.title
    const description = feature.description || feature.drawing?.description || feature.theme?.description || feature.download?.description || ''

    return (
        <>
            <h4>{title}</h4>
            <MarkdownView markdown={description}/>
        </>
    )
}
