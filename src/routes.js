import express from 'express'

const router = express.Router()

router.route('/home')
  .get(function (req, res) {
    res.status(200)
    .json({
      data: 'test'
    })
  })

export default router
