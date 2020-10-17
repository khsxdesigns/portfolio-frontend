// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(
//     `
//       {
//         projects: allStrapiProject {
//           edges {
//             node {
//               strapiId
//             }
//           }
//         }
//         categories: allStrapiCategory {
//           edges {
//             node {
//               strapiId
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     throw result.errors
//   }

//   // Create blog projects pages.
//   const projects = result.data.projects.edges
//   const categories = result.data.categories.edges

//   projects.forEach((project, index) => {
//     createPage({
//       path: `/project/${project.node.strapiId}`,
//       component: require.resolve("./src/layouts/project.js"),
//       context: {
//         id: project.node.strapiId,
//       },
//     })
//   })

//   categories.forEach((category, index) => {
//     createPage({
//       path: `/category/${category.node.strapiId}`,
//       component: require.resolve("./src/layouts/category.js"),
//       context: {
//         id: category.node.strapiId,
//       },
//     })
//   })
// }
