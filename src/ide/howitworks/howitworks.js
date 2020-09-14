import React from 'react'
import "./howitworks.scss"
function howitworks() {
  return (
    <div>
       <section id="Steps" class="steps-section">

    <h2 class="steps-header">
      How It Works
    </h2>

    <div class="steps-timeline">

      <div class="steps-one">
        <img class="steps-img" src={require("./think.png")} alt="" />
        <h3 class="steps-name">
          Think
        </h3>
        <p class="steps-description">
          Easy Problems can be solved directly by Mental Mathematics.
        </p>
      </div>

      <div class="steps-two">
        <img class="steps-img" src={require("./write.jpeg")} alt="" />
        <h3 class="steps-name">
          Write
        </h3>
        <p class="steps-description">
           Medium Problems can be solved by writing Equations and Formulas
        </p>
      </div>

      <div class="steps-three">
        <img class="steps-img" src={require("./code.jpg")} alt="" />
        <h3 class="steps-name">
          Code
        </h3>
        <p class="steps-description">
           Hard Problems must be solved by coding on our Online Code Editor directly.
        </p>
      </div>

    </div>

  </section>
    </div>
  )
}

export default howitworks