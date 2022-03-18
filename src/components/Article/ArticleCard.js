import React from 'react'

const ArticleCard = () => {
  return (

<div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-100">
    <a href="/">
        <img class="rounded-t-lg" src="/images/article1.png" alt="" />
    </a>
    <div class="p-5">
        <a href="/">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-200 dark:text-black">
                Noteworthy technology acquisitions 2021
            </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
        <a href="/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sred rounded-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-sred dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Lire plus
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

  )
}

export default ArticleCard