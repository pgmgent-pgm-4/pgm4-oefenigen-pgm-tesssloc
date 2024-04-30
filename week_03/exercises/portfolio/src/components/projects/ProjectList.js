import React from 'react'
import Project from './Project'

export default function ProjectList() {
    const projects = [
        {
            title: 'Project 1',
            date: 'juli 2023',
            content: 'This was a project about something.'
        },
        {
            title: 'Project 2',
            date: 'oktober 2023',
            content: 'This was a project about something else.'
        },
        {
            title: 'Project 3',
            date: 'december 2023',
            content: 'This was a project about something entirely different.'
        },
    ]
  return (
    <div>
        {projects.map((project) => (<Project title={project.title} date={project.date} content={project.content}/>))}
    </div>
  )
}