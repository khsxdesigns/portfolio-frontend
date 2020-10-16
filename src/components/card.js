import React from "react"  
import { Link } from "gatsby"

const Card = ({ project }) => {  
  return (
    <Link to={`/project/${project.node.strapiId}`}>
      <div>
        <div>
          <img
            src={project.node.image.publicURL}
            alt={project.node.image.publicURL}
            height="100"
          />
        </div>
        <div>
          <p id="category">
            {project.node.category.name}
          </p>
          <p id="title">
            {project.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card  