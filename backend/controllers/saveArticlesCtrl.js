'use strict';

exports = module.exports = ( Article, database) => {
    return function* ( ) {
      //var gridfs = database.get('gridfs');

      var received = this.request.body;
      console.log(received);

        var article = new Article(this.request.body);
        console.log(article);
        var saveArticle = yield article.save();

        this.success(saveArticle);
    };
};

exports[ 'singleton' ] = true;
exports['@require'] = [
  'models/article', 'library/database'
];
