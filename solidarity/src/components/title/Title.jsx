import React from "react"

const Title = ({ subtitle, title }) => {
    return (
        <div>
            <div id="heading">
                <h1>{subtitle}</h1>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Title;