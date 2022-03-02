import React, { createRef, useEffect, useState } from 'react'
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material'

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) => {
  const [elementRefs, setElementRefs] = useState([])

  useEffect(() => {
    setElementRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    )
  }, [])

  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)

  useEffect(() => {
    if (i === activeArticle && elementRefs[activeArticle]) {
      scrollToRef(elementRefs[activeArticle])
    }
  }, [i, activeArticle, elementRefs])

  return (
    <Card
      ref={elementRefs[i]}
      className={`flex flex-col justify-between border-b-[10px] border-white ${
        activeArticle === i && 'border-b-[10px] border-[#22289a]'
      }`}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className="h-[250px]"
          image={
            urlToImage ||
            'https://ichef.bbci.co.uk/news/1024/branded_news/20FF/production/_123474480_gettyimages-1351286846.jpg'
          }
        />
        <div className="m-[20px] flex justify-between">
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography gutterBottom variant="h5" className="px-[16px]">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex justify-between py-[16px] px-[8px]">
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard
