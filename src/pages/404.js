import React from "react"

import OuterLayout from "../components/OuterLayout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <OuterLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </OuterLayout>
)

export default NotFoundPage
