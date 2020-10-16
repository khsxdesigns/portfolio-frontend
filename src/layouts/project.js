// import React from "react"
// import { graphql } from "gatsby"

// import ReactMarkdown from "react-markdown"
// import Moment from "react-moment"

// import Layout from "../layouts/primary"

// export const query = graphql`
// query projectQuery($id: Int!) {
//   strapiProject(strapiId: { eq: $id }) {
//     strapiId
//     title
//     content
//     published_at
//     image {
//       publicURL
//     }
//   }
// }
// `

// const Project = ({ data }) => {
//   const project = data.strapiProject
//   return (
//     <Layout>
//       <div>
//         <div
//           id="banner"
//           data-src={project.image.publicURL}
//           data-srcset={project.image.publicURL}
//           data-uk-img
//         >
//           <h1>{project.title}</h1>
//         </div>

//         <div>
//           <div>
//             <ReactMarkdown source={project.content} />
//             <p>
//               <Moment format="MMM Do YYYY">{project.published_at}</Moment>
//             </p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Project
