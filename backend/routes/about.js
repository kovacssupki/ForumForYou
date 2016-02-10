
var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('about', {
    title: 'Home Page'
  });
});

module.exports = router;
