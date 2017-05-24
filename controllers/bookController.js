var express = require('express')
var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb')
var url = 'mongodb://nugraha:nugraha@ds149431.mlab.com:49431/library_collection';

module.exports = {
  insertBooks : (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
      var collection = db.collection('books');
      collection.insertOne({
        isbn : req.body.isbn,
        title : req.body.title,
        author : req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }, (err, result)=>{
        (err) ? res.send(`Data Not Inserted`) :
        console.log(`Inserted Data into the collection Book`);
        res.send(result);
      })
    })
  },

  findAllBooks : (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
      var collection = db.collection('books');
      collection.find({}).toArray((err, result)=>{
        res.send(result);
      })
    })
  },

  updateBookById :(req, res)=>{
    MongoClient.connect(url, (err, db)=>{
      var collection = db.collection('documents');
      collection.updateOne({_id: ObjectID(req.params.id)}, {$set: {
          isbn : req.body.isbn,
          title : req.body.title,
          author : req.body.author,
          category: req.body.category,
          stock: req.body.stock
        }}, (err, result)=>{
          if (!err){
            res.send(result)
          } else {
            res.send(err)
          }
        })
    })
  },

  deleteBookById : (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
      var collection = db.collection('documents')
      collection.findOneAndDelete({_id: ObjectID(req.params.id)}, (err, deleted)=>{
        if(!err){
          res.send(deleted)
        } else {
          res.send(err)
        }
      })
    })
  }
}
