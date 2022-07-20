// index.js
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

/**
 * logic for our api will go here
 */
export default {
  path: '/api',
  handler: app,
}

// ------------------------------------------------------------- User API -----------------------------------------------------------------

// Register USER for Newsletter
app.post(`/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      email: req.body.email,
    },
  })
  res.json(result)
})

// Get list of USER
app.get(`/user`, async (req, res) => {
  const result = await prisma.user.findMany()
  res.json(result)
})

// ------------------------------------------------------------- Admin API -----------------------------------------------------------------

// Register new ADMIN
app.post(`/admin`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      email: req.body.email,
    },
  })
  res.json(result)
})

// ------------------------------------------------------------- Article API -----------------------------------------------------------------

// Creating an ARTICLE
app.post('/article', async (req, res) => {
  const { title, imageURL, tags, summary, content, author } = req.body

  const article = await prisma.article.create({
    data: {
      title,
      imageURL,
      tags,
      summary,
      content,
      author,
    },
  })
  res.status(200).json(article)
})

// Get drafts
app.get('/article/drafts', async (req, res) => {
  const articles = await prisma.post.findMany({
    where: { published: false },
    include: { author: true },
  })
  res.json(articles)
})

// Get Article by Id
app.get('/article/:id', async (req, res) => {
  const { id } = req.params
  const article = await prisma.article.findUnique({
    where: {
      id: Number(id),
    },
    include: { author: true },
  })
  res.json(article)
})

// Publish an ARTICLE
app.put('/article/publish/:id', async (req, res) => {
  const { id } = req.params
  const article = await prisma.article.update({
    where: {
      id: Number(id),
    },
    data: { published: true },
  })
  res.json(article)
})

// Get all Article published
app.get('/article/feed', async (req, res) => {
  const articles = await prisma.article.findMany({
    where: { published: true },
    include: { author: true },
  })
  res.json(articles)
})

// Deleting an Article
app.delete(`/article/:id`, async (req, res) => {
  const { id } = req.params
  const article = await prisma.article.delete({
    where: {
      id: parseInt(id),
    },
  })
  res.json(article)
})

// Search for an Article
app.get('/article/filter', async (req, res) => {
  const { searchString } = req.query
  const draftArticles = await prisma.article.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchString,
          },
        },
        {
          content: {
            contains: searchString,
          },
        },
        {
          tags: {
            contains: searchString,
          },
        },
      ],
    },
  })
  res.send(draftArticles)
})

// ------------------------------------------------------------- Videos API -----------------------------------------------------------------

// Creating an video
app.post('/video', async (req, res) => {
  const { title, imageURL, tags, summary, content, author } = req.body

  const video = await prisma.video.create({
    data: {
      title,
      imageURL,
      tags,
      summary,
      content,
      author,
    },
  })
  res.status(200).json(video)
})

// Get drafts
app.get('/video/drafts', async (req, res) => {
  const videos = await prisma.post.findMany({
    where: { published: false },
    include: { author: true },
  })
  res.json(videos)
})

// Get video by Id
app.get('/video/:id', async (req, res) => {
  const { id } = req.params
  const video = await prisma.video.findUnique({
    where: {
      id: Number(id),
    },
    include: { author: true },
  })
  res.json(video)
})

// Publish an video
app.put('/video/publish/:id', async (req, res) => {
  const { id } = req.params
  const video = await prisma.video.update({
    where: {
      id: Number(id),
    },
    data: { published: true },
  })
  res.json(video)
})

// Get all video published
app.get('/video/feed', async (req, res) => {
  const videos = await prisma.video.findMany({
    where: { published: true },
    include: { author: true },
  })
  res.json(videos)
})

// Deleting an video
app.delete(`/video/:id`, async (req, res) => {
  const { id } = req.params
  const video = await prisma.video.delete({
    where: {
      id: parseInt(id),
    },
  })
  res.json(video)
})

// Search for an video
app.get('/video/filter', async (req, res) => {
  const { searchString } = req.query
  const draftvideos = await prisma.video.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchString,
          },
        },
        {
          content: {
            contains: searchString,
          },
        },
        {
          tags: {
            contains: searchString,
          },
        },
      ],
    },
  })
  res.send(draftvideos)
})