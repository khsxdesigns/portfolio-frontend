import React from "react"  
import { Link } from "gatsby"

const Card = ({ project }) => {  
  return (
    <Link to={`/project/${project.node.strapiId}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={project.node.image.publicURL}
            alt={project.node.image.publicURL}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {project.node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {project.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card  