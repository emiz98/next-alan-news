import Head from 'next/head'
import { useEffect, useState } from 'react'
import NewsCards from '../components/NewsCards'
import Header from '../components/Header'
import data from '../data/data'
import wordsToNumbers from 'words-to-numbers'

let alanState = true

const Home = () => {
  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)

  useEffect(() => {
    // setNewsArticles(data.news)
    if (alanState) {
      const alanBtn = require('@alan-ai/alan-sdk-web')
      alanState = false
    }
    alanBtn({
      key: process.env.NEXT_PUBLIC_SECRET_KEY,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setActiveArticle(-1)
          setNewsArticles(articles)
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        } else if (command === 'open') {
          const parseNumber =
            number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number
          const article = articles[parseNumber - 1]
          if (parseNumber > 20) {
            // alanBtn().playText('Please try again!')
          } else if (article) {
            window.open(article.url, '_blank')
            // alanBtn().playText('opening in new tab')
          }
        }
      },
    })
  }, [])

  return (
    <div className="h-screen scroll-smooth bg-white">
      <Head>
        <title>Alan Ai News 1.0</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="mx-auto w-11/12">
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      </div>
    </div>
  )
}

export default Home
