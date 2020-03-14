import { Link } from "gatsby"
import React from "react"
import { useSelector } from "react-redux"

export default () => {
  const message = useSelector(state => state.message, [])

  return (
    <div>
      login
      {message}
      <Link to="/">Go to home</Link>
    </div>
  )
}
