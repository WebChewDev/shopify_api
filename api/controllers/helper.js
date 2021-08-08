const express = require('express')
const app = express()
const getRawBody = require('raw-body')
const crypto = require('crypto')
const secretKey = process.env.SECRET_KEY


module.exports = {
    getCreatedByDate(res) {
        const data = res.data

        let dates = []

        data.products.forEach(product => {
            const parsedTime = Date.parse(product.created_at)
            dates.push(parsedTime)
        })

        const latestDate = Math.max.apply(Math, dates)

        console.log(latestDate)
    },

    async verifyHMAC(req, res) {
        const hmac = req.get('X-Shopify-Hmac-Sha256')

        const body = await getRawBody(req)

        const hash = crypto
            .createHmac('sha256', secretKey)
            .update(body, 'utf8', 'hex')
            .digest('base64')

        if (hash === hmac) {
            // It's a match! All good
            console.log('Phew, it came from Shopify!')
            res.sendStatus(200)
            console.log(res)
        } else {
            // No match! This request didn't originate from Shopify
            console.log('Danger! Not from Shopify!')
            res.sendStatus(403)
        }
    }
}