const bucketList = require('./db.json')
let globalId = 4

module.exports = {
    getBucketList: (req, res) => {
        res.status(200).send(bucketList)
    },
    createBucketList: (req, res) => {
        let {location, price, imageURL} = req.body
        let newBucketList = {
            id: globalId,
            location,
            price,
            imageURL
        }
        bucketList.push(newBucketList)
        res.status(200).send(bucketList)
        globalId++
    },
    deleteBucketList: (req, res) => {
        let index = bucketList.findIndex(elem => elem.id === +req.params.id)
        bucketList.splice(index, 1)
        res.status(200).send(bucketList)
    }
}