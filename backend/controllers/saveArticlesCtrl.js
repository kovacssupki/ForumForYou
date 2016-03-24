'use strict';

exports = module.exports = ( Article) => {
    return function* ( ) {

        var article = new Article(this.request.body);
        var saveArticle = yield article.save();

        this.success(saveArticle);
    };
};

exports[ 'singleton' ] = true;
exports['@require'] = [
  'models/article'
];
