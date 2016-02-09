
  var koa = require('koa');
  var router = require('koa-router')();
  var livereload = require('koa-livereload');

  var port = 200;
  var app = koa();

  var index = require('./routes/index');
  var about = require('./routes/about');

  // router.get('/', function *(next) {
  //   this.body = 'Home';
  // });
  // router.get('/users', function *(next) {
  //   this.body = 'Users';
  // });
  router.use('/', index.routes(), index.allowedMethods());
  router.use('/about', about.routes(), about.allowedMethods());

  app.use(livereload());
  app.use(router.routes());


  app.listen(port);
  console.log('Server is running at port ' + port);
