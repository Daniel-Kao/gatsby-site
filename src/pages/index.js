import { graphql, Link } from "gatsby"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const message = useSelector(state => state.message, [])
  const dispatch = useDispatch()

  function onClick() {
    dispatch({
      type: "SET_MESSAGE",
      message: "hi you",
    })
  }

  return (
    <Layout>
      <SEO title="404: Not found" />
      <section>
        <h1>{message}</h1>
        <Link to="/login">login page</Link>
        <h1>NOT FOUND</h1>
        <p>You just hit a page that doesn't exist... the sadness.</p>
        <p>May I suggest a video instead?</p>
        <button class="primary-button" onClick={onClick}>
          change it to hi
        </button>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "high.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
