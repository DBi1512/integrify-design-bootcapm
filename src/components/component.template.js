import React from "react";
import './style.css'

const App = ({ data }) => {

  const { contentfulIndex } = data;
  const { headerTitle, headerSubtitle, headerPill, headerImage, headerImageAlt, main } = contentfulIndex;
  const jsx = (
    <div>
      <h1>{headerTitle}</h1>
      <h2>{headerSubtitle}</h2>
      </div>
  )
  return jsx;
}

export default App;