var express = require('express');
var router = express.Router();
var articles = require('../../models/articles');

router.get('/', function(req, res, next) {

  articles.find({},function (err, aricles){
     if(err){
      return res.json({'success':false, 'error': err});
    }
      return res.json({'success':true, 'articles': articles});
    });
});

router.get('/:Id', function(req,res){

    var Id = req.params.Id;
    articles.findOne({'_id':Id}, function(err, user){
      if(err){
       return res.json({'success':false, 'error': err});
     }
      return res.json({'success':true, 'article': user});
    });
  });

router.post('/', function(req, res) {
    articles.create(new articles({
    title: req.body.title,
    description: req.body.description,
    //meta data is keywords
    keywords: req.body.keywords,
    //article part of article
    body: req.body.body,
    //when it was published
    published: req.body.published
 }), function(err, article){
    
    if(err){
      return res.json({success: false, article: req.body, error: err});
    }

    return res.json({success: true, article: artcile});
    
  });
});

router.put('/', function(req, res){
    articles.findOne({'_id': req.body._id}, function(err, user){
  
        if(err) {
          return res.json({success: false, error: err});
        }else if (article)
     
        if(user) {
     
         let data = req.body;
     
         if(data.title){
         article.title = data.title;
         };
     
         if(data.description){
         article.description = data.description;
         };
     
         if(data.body){
         article.body = data.body;
         };
     
         if(data.published){
            article.published = data.published;
            article.offset = new Date(data.published).getTimezoneOffset();
            };
 
         article.save(function(err){
           if(err){
             return res.json({success: false, error: err});
           }else{
             return res.json({success: true, article:article});
           }
         });
     
        }
     
       });
       
     });

router.delete('/:articleId', function(req,res){

    var articleId = req.params.articleId;
      
    articles.remove({'_id':articleId}, function(err,removed){
      
         if(err){
          return res.json({success: false, error: err});
          }
      
          return res.json({success: true, status: removed});
      
        });
      
      });
      
module.exports = router;