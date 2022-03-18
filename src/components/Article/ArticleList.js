import React from 'react'
import ArticleCard from './ArticleCard'

const ArticleList = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
    </div>
  )
}

export default ArticleList