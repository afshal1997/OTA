import React from 'react'
import '../SectionMainHeadings/SectionMainHeadings.css'

const SectionMainHeadings = ({ text }) => {
    return (
        <div>
            <svg width="100%">
                <defs>
                    <linearGradient id="gradient" y1="0" y2="1">
                        <stop stopColor="#696368" offset="0" />
                        <stop stopColor="#76485f" offset="1" />
                    </linearGradient>
                </defs>
                <g>
                    <text id="text" y="100" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">{text}</text>
                </g>
            </svg>
        </div>
    )
}

export default SectionMainHeadings
