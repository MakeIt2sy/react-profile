import React from "react"

export default function Brief(){
    
    return (
        <div className="container--brief">
            <img src="../img.jpg"/>
            <div className="container--information">
                <h2>Summer</h2>
                <p>Developer</p>
                <small><a href="https://velog.io/@fivepiggie10">blog</a></small>
                <div className="container--brief_button">
                    <EmailButton />
                    <GithubButton />
                </div>
            </div>
        </div>
    )
}

function EmailButton(){
    
    return (
        <button className="emailBttn"
        type="button" 
        onClick={() => window.open('mailto:fivepiggie10@gmail.com', "_blank")}>Email</button>
    )
}

function GithubButton(){
    
    return (
        <button className="githubBttn"
        type="button" 
        onClick={() => window.open('https://github.com/MakeIt2sy', "_blank")}>Github</button>
    )
}
