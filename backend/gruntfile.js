module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      watch: {
        scripts: {
          files: ['**/*.js'],
          tasks: ['watch'],
          options: {
            livereload: 200
          }
        }
      }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['watch']);
};
