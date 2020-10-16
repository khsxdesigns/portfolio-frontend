import React from "react"

// Context
import { ContextProviderComponent as ContextProvider } from "../components/context"

// SEO
import SEO from "../components/seo/"

// Styles
import "../assets/globalStyles/reset.css"
import GlobalStyles from "../assets/globalStyles/"

// Components
import Menu from "../components/menu/"
import Footer from "../components/footer/"

const LayoutPrimary = props => (
  <ContextProvider>
    <SEO />
    <GlobalStyles />
    <Menu backgroundColor={props.menuColor} />
    {props.children}
    <Footer />
  </ContextProvider>
)

export default LayoutPrimary
