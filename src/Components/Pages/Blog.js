import React from 'react'
import BlogMainBanner from '../../Layout/BlogPageLayout/BlogMainBanner'
import BlogPageAIIntelligence from '../../Layout/BlogPageLayout/BlogPageAIIntelligence'
import BlogPageOutsourceImportance from '../../Layout/BlogPageLayout/BlogPageOutsourceImportance'
import BlogPageSlider from '../../Layout/BlogPageLayout/BlogPageSlider'

const Blog = () => {
    return (
        <div>
            <BlogMainBanner/>
            <BlogPageSlider/>
            <BlogPageAIIntelligence/>
            <BlogPageOutsourceImportance/>
        </div>
    )
}

export default Blog
