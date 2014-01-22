'use strict';
(function() {
  module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var ieOnlyLibs = ['js/nwmatcher.js', 'js/libs/selectivizr.js', 'js/libs/html5shiv/html5shiv-printshiv.js', 'js/libs/PIE.js'];

    grunt.initConfig({
      bower: {
        install: {
          options: {
            copy: false
          }
        },
        uninstall: {
          options: {
            cleanBowerDir: true,
            copy: false,
            install: false
          }
        }
      },
      copy: {
        assets: {
          files: [{
            cwd: "src/",
            src: ["**/*", '!sass/**', '!html/**'],
            dest: 'dist/',
            expand: true
          }]
        }
      },
      clean: {
        dist: ['dist/**/*', '!dist/js', '!dist/js/libs/**'],
      },
      template: {
        dev: {
          src: "src/html/**/*.html",
          dest: "dist/"
        },
        prod: {
          src: "src/html/**/*.html",
          dest: "dist/",
          environment: 'prod'
        }
      },
      watch: {
        options: {
          livereload: true
        },
        sass: {
          files: ['src/sass/{,**/}*.{scss,sass}'],
          tasks: ['compass:dev'],
          livereload: false
        },
        css: {
          files: ['dist/css/**'],
          tasks: []
        },
        images: {
          files: ['src/images/**'],
          tasks: ['copy:assets']
        },
        js: {
          files: ['src/js/{,**/}*.js', '!src/js/{,**/}*.min.js'],
          tasks: ['copy:assets', 'uglify:dev']
        },
        html: {
          files: ['src/html/{,**/}*.html'],
          tasks: ['template:dev']
        }
      },
      compass: {
        options: {
          config: 'config.rb',
          bundleExec: true
        },
        dev: {
          options: {
            environment: 'development',
            force: true
          }
        },
        dist: {
          options: {
            environment: 'production',
            force: true
          }
        }
      },
      uglify: {
        dev: {
          options: {
            mangle: false,
            compress: false,
            beautify: true
          },
          files: [{
            expand: true,
            cwd: 'dist/js/',
            src: ['**/*.js', '!libs/**/*', '!**/*.min.js'],
            dest: 'dist/js/',
            ext: '.min.js'
          }]
        },
        dist: {
          options: {
            mangle: true,
            compress: true
          },
          files: [{
            expand: true,
            cwd: 'dist/js/',
            src: ['**/*.js', '!libs/**/*', '!**/*.min.js'],
            dest: 'dist/js/',
            ext: '.min.js'
          }]
        }
      },
      connect: {
        dev: {
          options: {
            base: 'dist/',
            livereload: true,
            middleware: require('./middleware'),
            open: true
          }
        },
        prod: {
          options: {
            base: 'dist/',
            livereload: false,
            middleware: require('./middleware'),
            open: true
          }
        }
      }
    });

    grunt.event.on('watch', function(action, filepath, key) {
      console.log(arguments);
    });

    // grunt.event.on('watch', function(action, filepath, key) {
    //   var basename, dirname, ext, file, path, task, config;
    //   var srcPath = 'src/';
    //   path = require('path');
    //   file = filepath.substr(srcPath.length);
    //   console.log('processing file ' + file);
    //   ext = path.extname(file);
    //   if(ext === '.html'){
    //     task = ['template', 'dev'];
    //     config = {
    //       src: filepath,
    //       dest: 'dist/'
    //     };
    //     return grunt.config(['template', 'dev'], config);
    //   }
    //   else if(ext === '.scss'){
    //     return;
    //   }
      
    //   task = ['copy', 'assets'];
    //   config = {
    //     cwd: srcPath,
    //     src: file,
    //     dest: 'dist/',
    //     expand: true
    //   };
      
    //   return grunt.config(['copy', 'dev'], config);
    // });

    grunt.registerTask('build', ['clean:dist', 'copy:assets', 'template:prod', 'compass:dist', 'uglify:dist', 'connect:prod']);

    return grunt.registerTask('default', ['copy:assets', 'template:dev', 'compass:dev', 'uglify:dev', 'connect:dev', 'watch']);
  };

}).call(this);