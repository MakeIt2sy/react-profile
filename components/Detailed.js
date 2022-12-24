import React from "react"

export default function Detailed(){
    
    return (
        <div className="container--detailed">
            <About />
            <Interests />
        </div>
    )
}

function About(){
   return (
       <div className="container--detailed_about">
            <h4>About</h4>
            <p>I am a new developer who fell in love with the development culture that helps each other grow. I strive to write clear, logical code that other team members can understand immediately when they see it. </p>
        </div>
   )
}

function Interests(){
   return (
       <div className="container--detailed_interests">
            <h4>Interests</h4>
            <p>Agatha Christie. Pingpong. Improving my English skills. Skating. Anyfood made with tomatoes. </p>
        </div>
   )
}