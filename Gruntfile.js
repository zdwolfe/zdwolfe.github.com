'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
      connect: {
        server: {
          options: {
            port: 9091,
          }
        }
      },
      watch: {
        options: {
          livereload: true
        },
        files: ['**/*.swig', '**/*.css'],
        tasks: ['bower-install']
      },
      'bower-install': {
        target: {
          src: ['index.html'],
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-install');

    // Default task
    grunt.registerTask('default', ['bower-install', 'connect', 'watch']);
};
