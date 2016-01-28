angular
  .module('Blog')
  .service('Users',function() {
    return {
      stefan: {
          id: 'stefan',
          firstName: 'Stefan',
          lastName: 'Chira',
          username: 'stefan.chira',
          email: 'stefan.chira@fortech.ro',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          quote: 'We are all apprentices in a craft where no one ever becomes a master.',
          quoteAuthor: 'Ernest Hemingway',
          quoteSource: 'The Wild Years'
      },
      stanca: {
          id: 'stanca',
          firstName: 'Stanca',
          lastName: 'Pop',
          username: 'stanca.pop',
          email: 'stanca.pop@fortech.ro',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          quote: 'No one can make you feel inferior without your consent.',
          quoteAuthor: 'Eleanor Roosevelt',
          quoteSource: 'This is My Story'
      }
    }
});
