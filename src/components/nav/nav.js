import React from "react"  
import { Link, StaticQuery, graphql } from "gatsby"
import "./nav.scss"

const Nav = () => (  
      <nav className="nav" data-uk-navbar>
        <div className="nav__left">
          {/* <ul className="nav__left--block">
            <li>
              <Link to="/">Str</Link>
            </li>
          </ul> */}
        </div>

        <div className="nav__right">
          <ul className="nav__right--block">
            <StaticQuery
              query={graphql`
                query {
                  allStrapiCategory {
                    edges {
                      node {
                        strapiId
                        name
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.allStrapiCategory.edges.map((category, i) => {
                  return (
                    <li key={category.node.strapiId}>
                      <Link to={`/category/${category.node.strapiId}`}>
                        {category.node.name}
                      </Link>
                    </li>
                  )
                })
              }
            />
          </ul>
        </div>
      </nav>
)

export default Nav  