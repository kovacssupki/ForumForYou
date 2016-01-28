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
          quoteSource: 'The Wild Years',
          photo: 'assets/images/stefan.jpg',
          messages: [
            {
              date: '2016/12/23',
              from: 'person1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed onsectetur adipisicing onsectetur adipisicing do eiusmod tempor incididunt ut labore'
            },
            {
              date: '2014/09/03',
              from: 'person3',
              body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
            },
            {
              date: '2015/11/15',
              from: 'person2',
              body: 'Lorem ipsum dolor sit amet,  elit, sed do onsectetur adipisicing onsectetur adipisicing eiusmod tempor incididunt ut labore'
            },
            {
              date: '2016/07/07',
              from: 'person3',
              body: 'Lorem ipsum dolor sit amet,  incididunt ut labore'
            },
            {
              date: '2013/04/10',
              from: 'person1',
              body: 'Lorem consectetur adipisicing elit, sed onsectetur adipisicing do eiusmod tempor incididunt ut labore'
            }
          ]
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
          quoteSource: 'This is My Story',
          photo: 'assets/images/stanca.jpg',
          messages: [
            {
              date: '2016/01/23',
              from: 'person1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore'
            },
            {
              date: '2015/04/11',
              from: 'person3',
              body: 'Lorem ipsum dolor sit amet, consectetur onsectetur adipisicing onsectetur adipisicing adipisicing elit consectetur adipisicing'
            },
            {
              date: '2013/12/14',
              from: 'person2',
              body: 'Lorem ipsum dolor sit amet,  elit, sed do onsectetur adipisicing onsectetur adipisicing eiusmod tempor incididunt ut labore consectetur adipisicing'
            },
            {
              date: '2013/07/05',
              from: 'person3',
              body: 'Lorem ipsum dolor sit amet,  incididunt ut labore consectetur adipisicing consectetur adipisicing'
            },
            {
              date: '2014/04/23',
              from: 'person1',
              body: 'Lorem consectetur adipisicing elit, sed do eiusmod tempor incididunt consectetur adipisicing consectetur adipisicing ut labore'
            }
          ]
      }
    }
});
