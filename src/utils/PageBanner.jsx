import React from 'react'

function PageBanner({ bannertext = "" }) {
    return (
        <div className="about-banner--bg">
            <h3>{bannertext}</h3>
        </div>
    )
}

export default PageBanner
