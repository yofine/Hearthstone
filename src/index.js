import * as request from 'superagent'
import * as _ from 'lodash'
import {eachLimit} from 'async'
import {opts} from './options'
import {MongoClient} from 'mongodb'

let spider = function(opt, callback) {
  const {cardClass, p} = opt
  request
    .get('http://www.hearthstone.com.cn/cards/query')
    .query({cardClass, p})
    .end((err, res) => {
      if(err) callback(err)
      callback(null, res.body.cards)
    })
}

let temp = []

eachLimit(opts, 10, (opt, callback) => {
  spider(opt, (err, res) => {
    if(err) throw err
    temp.push(res)
    callback(null)
  })
}, results => {
  MongoClient
    .connect('mongodb://localhost:27017/hs', (err, db) => {
      var collection = db.collection('hearthstone')
      var docs = _.flatten(temp)
      collection.insertMany(docs, {w: 1}, (err, result) => {
        console.log(err)
        console.log(result)
        db.close()
      })
    })
})

