angular
  .module('Blog')
  .service('Articles',function() {
      return {
        articles: [
          {
            title: 'Fun facts!',
            author: 'Stanca Pop',
            authorPage: 'stanca',
            date: '20/01/2016',
            image: 'assets/images/article-fun.png',
            contentTrimmed: 'Lorem ipsum dolor sit amet, posuere ultrices, ullamcorper vel enim. Ut felis turpis, sodales a sapien ut, ornare porttitor nibh. Vestibulum vel est laoreet, maximus ante eget, consequat ante. Aenean vestibulum nibh eget euismod vulputate. Aliquam erat volutpat. Sed imperdiet malesuada posuere. Morbi posuere risus at massa egestas, accumsan, ipsum eget rutrum tincidunt, mauris felis interdum velit, eu cursus sem dui vel justo...',
            categories: ['nature', 'wildlife', 'science', 'technology', 'health', 'food', 'history', 'music'],
            id: 6
          },
          {
            title: 'Learning Angular JS',
            author: 'Stefan Chira',
            authorPage: 'stefan',
            date: '02/12/2015',
            image: 'assets/images/article-angular.png',
            contentTrimmed: 'Nulla convallis justo est, eu lobortis arcu condimentum eu. In dignissim, erat eros iaculis purus, quis aliquam nisi elit id purus. Duis vehicula sed ligula ac dictum. Sed quis arcu consectetur, posuere lorem eget, ultrices enim. Vestibulum auctor bibendum leo in hendrerit. Maecenas euismod magna massa, eu laoreet urna luctus ut. Maecenas dui tortor, bibendum sit amet urna eu, rhoncus tempor massa...',
            categories: ['science', 'technology'],
            id: 5
          },
          {
            title: '100 Good Books to Read: Book Recommendations',
            author: 'Stanca Pop',
            authorPage: 'stanca',
            date: '16/09/2015',
            image: 'assets/images/article-book.png',
            contentTrimmed: 'Nunc ac purus sed tellus consequat iaculis eget eleifend ex. Suspendisse vitae euismod urna. Nam vitae gravida metus. Maecenas dignissim sit amet nibh ac ultrices. Sed sodales mi nec vehicula dapibus. Fusce accumsan ante sed lacus lacinia, vitae mollis ipsum suscipit. Praesent ornare ultrices quam, laoreet, dolor in blandit sodales, elit dolor tincidunt lacus, interdum odio a, accumsan dolor. Cras volutpat nec erat venenatis rhoncus...',
            categories: ['nature', 'science', 'technology', 'health', 'food', 'history'],
            id: 4
          },
          {
            title: 'Android 6 Vs. iOS 9: The Showdown',
            author: 'Stefan Chira',
            authorPage: 'stefan',
            date: '08/08/2015',
            image: 'assets/images/article-android.png',
            contentTrimmed: 'Lorem ipsum dolor sit amet, nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto. Mirum est notare quam littera gothica, per quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum...',
            categories: ['science', 'technology'],
            id: 3
          },
          {
            title: 'The Organic Effect...',
            author: 'Stanca Pop',
            authorPage: 'stanca',
            date: '18/04/2015',
            image: 'assets/images/article-bio.png',
            contentTrimmed: 'Sed convallis mauris id elementum ultricies. Morbi vitae lorem nec metus semper iaculis. Ut sit amet lorem ultrices, tristique ligula at, finibus nulla. Maecenas quis orci ac ligula tincidunt scelerisque et sed purus. Nam pulvinar mauris nec mi aliquam fermentum. Ut orci velit, dictum vitae magna ut, orci rhoncus iaculis non quis libero. Proin commodo enim eget varius vehicula...',
            categories: ['nature', 'health', 'food'],
            id: 2
          },
          {
            title: 'Breaking news about Facebook!',
            author: 'Stefan Chira',
            authorPage: 'stefan',
            date: '30/06/2014',
            image: 'assets/images/article-facebook.png',
            contentTrimmed: 'Fusce sed consectetur odio. Sed at metus ac nibh laoreet aliquet iaculis a justo. Aenean faucibus, arcu sed consequat consectetur, risus ligula consectetur diam, et bibendum justo justo ut quam. Etiam vitae finibus lacus. Duis ultrices porttitor magna, a gravida tellus scelerisque quis. Nullam consectetur sed nisi et efficitur. Suspendisse volutpat aliquam magna vel mollis. Sed auctor eu mauris...',
            categories: ['technology'],
            id: 1
          }
        ],
        newArticle: {
          title: 'Breaking news about Facebook!',
          author: 'Stefan Chira',
          authorPage: 'stefan',
          date: '28/01/2016',
          image: 'assets/images/article-facebook.png',
          contentTrimmed: 'Fusce sed consectetur odio. Sed at metus ac nibh laoreet aliquet iaculis a justo. Aenean faucibus, arcu sed consequat consectetur, risus ligula consectetur diam, et bibendum justo justo ut quam. Etiam vitae finibus lacus. Duis ultrices porttitor magna, a gravida tellus scelerisque quis. Nullam consectetur sed nisi et efficitur. Suspendisse volutpat aliquam magna vel mollis. Sed auctor eu mauris...',
          categories: ['Technology','Science'],
          id: 1
        },
        styles: ['default', 'danger', 'info', 'warning', 'success','primary'],
        categories: ['Nature','Science','Health','Wildlife','Food','History','Technology','Music']
      }
});
