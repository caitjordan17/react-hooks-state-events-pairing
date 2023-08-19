import React from "react";

function Header({url, title, created, views }){
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={url}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{title}</h1>
            <p>{views} Views | Updated {created}</p>
        </div>
    )
}

export default Header;