import React from "react"  
import Card from "./card"

const ProjectsComponent = ({ projects }) => {  
  const leftprojectsCount = Math.ceil(projects.length / 5)
  const leftprojects = projects.slice(0, leftprojectsCount)
  const rightprojects = projects.slice(leftprojectsCount, projects.length)

  return (
    <div>
      <div>
        <div>
          {leftprojects.map((project, i) => {
            return (
              <Card project={project} key={`project__${project.node.id}`} />
            )
          })}
        </div>
        <div>
          <div>
            {rightprojects.map((project, i) => {
              return (
                <Card project={project} key={`project__${project.node.id}`} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsComponent