// index.js
const express = require('express')
const createError = require('http-errors')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

// ------------------------------------------------------------- Auth API -----------------------------------------------------------------
// Register Admin
app.post(`/admin/register`, async (req, res) => {
  const { email, password } = req.body
  const result = await prisma.admin.create({
    data: {
      email,
      password: bcrypt.hashSync(password, 8),
    },
  })
  res.json(result)
})

// login Admin

app.post(`/login`, async (req, res) => {
  const { email, password } = req.body
  const user = await prisma.admin.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    throw createError.NotFound('User not registered')
  }

  const checkPassword = bcrypt.compareSync(password, user.password)
  if (!checkPassword)
    throw createError.Unauthorized('Email address or password not valid')

  delete user.password
  const jwToken = jwt.sign(user, process.env.PRIVATE_TOKEN_KEY)
  await prisma.token.create({
    data: {
      token: jwToken,
      ownerId: user.id,
    },
  })
  const data = { user, token: jwToken }
  res.json({ data })
})

// get one admin
app.get(`/admin`, async (req, res) => {
  console.log(req.body)
  const { user, token } = req.body
  const data = await prisma.admin.findUnique({
    where: { id: Number(user.id), token },
  })
  res.json(data)
})

// ------------------------------------------------------------- Access Token API -----------------------------------------------------------------

// create new access token
app.post(`/token`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      email: req.body.email,
    },
  })
  res.json(result)
})

// ------------------------------------------------------------- Email Newsletters API -----------------------------------------------------------------

// Register USER for Newsletter
app.post(`/newsletter`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      email: req.body.email,
    },
  })
  res.json(result)
})

// Get list of USER
app.get(`/newsletter`, async (req, res) => {
  const result = await prisma.user.findMany()
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
app.get('/article', async (req, res) => {
  const articles = await prisma.article.findMany()
  res.json(articles)
})

// Get Article by Id
app.get('/article/all/:id', async (req, res) => {
  const { id } = req.params
  const article = await prisma.article.findUnique({
    where: {
      id: Number(id),
    },
  })
  res.json(article)
})

// Publish an ARTICLE
app.put('/article/publish/:id', async (req, res) => {
  const { id } = req.params
  const { published } = req.body
  const article = await prisma.article.update({
    where: {
      id: Number(id),
    },
    data: { published },
  })
  res.json(article)
})

// get one Published ARTICLE
app.get('/article/publish/:id', async (req, res) => {
  const { id } = req.params
  const article = await prisma.article.findUnique({
    where: {
      id: Number(id),
    },
  })
  res.json(article)
})

// Get all Article published
app.get('/article/publish', async (req, res) => {
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
app.get('/article/filter/:searchString', async (req, res) => {
  const { searchString } = req.params
  const filterArticles = await prisma.article.findMany({
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
            equals: searchString,
          },
        },
      ],
      NOT: {
        published: false,
      },
    },
  })
  res.send(filterArticles)
})

// ------------------------------------------------------------- Videos API -----------------------------------------------------------------

// Creating an video
app.post('/video', async (req, res) => {
  const { title, videoURL, tags, summary, authorId } = req.body

  const video = await prisma.video.create({
    data: {
      title,
      videoURL,
      tags,
      summary,
      authorId,
    },
  })
  res.status(200).json(video)
})

// Get drafts
app.get('/video', async (req, res) => {
  const videos = await prisma.video.findMany()
  res.json(videos)
})

// Get video by Id
app.get('/video/all/:id', async (req, res) => {
  const { id } = req.params
  const video = await prisma.video.findUnique({
    where: {
      id: Number(id),
    },
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

// get one Published video
app.get('/video/publish/:id', async (req, res) => {
  const { id } = req.params
  const video = await prisma.video.findUnique({
    where: {
      id: Number(id),
    },
  })
  res.json(video)
})

// Get all video published
app.get('/video/publish', async (req, res) => {
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
