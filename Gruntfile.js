<<<<<<< HEAD
var LIVERELOAD_PORT = 35729;

module.exports = function(grunt) {

  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-jade');
  // grunt.loadNpmTasks('grunt-babel');
  // grunt.loadNpmTasks('grunt-sass');

=======
module.exports = function(grunt) {

>>>>>>> upstream/master
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
<<<<<<< HEAD
    	main: {
        options: ['>1% in US'],
        src: 'public/css/main.css'
    	}
=======
      main: {
        options: ['>1% in US'],
        src: 'public/css/main.css'
      }
>>>>>>> upstream/master
    },
    babel: {
      dev: {
        options: {
          sourceMap: 'inline'
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      },
      prod: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      }
    },
    bower_concat: {
      main: {
<<<<<<< HEAD
      	dest: 'public/lib/build.js',
      	cssDest: 'public/lib/build.css'
=======
        dest: 'public/lib/build.js',
        cssDest: 'public/lib/build.css'
>>>>>>> upstream/master
      }
    },
    clean: ['public'],
    connect: {
<<<<<<< HEAD
	    main: {
	      options: {
	        port: 8080,
	        base: 'public/',
	        open: true,
	        keepalive: true,
	        livereload: LIVERELOAD_PORT
	      }
	    }
	  },
=======
      main: {
        options: {
          port: 8080,
          base: 'public/',
          open: true,
          livereload: true
        }
      }
    },
>>>>>>> upstream/master
    copy: {
      main: {
        files: [
          {
<<<<<<< HEAD
          	// copy over everything that the
          	// preprocessor tasks won't.
=======
>>>>>>> upstream/master
            expand: true,
            cwd: 'src/',
            src: [
              '**',
              '!**/*.jade',
              '!**/*.scss',
              '!**/*.js'
            ],
            dest: 'public/',
            filter: 'isFile'
          }
        ]
      }
    },
    cssmin: {
      main: {
        files: {
          'public/lib/build.css': 'public/lib/build.css'
        }
      }
    },
    jade: {
      dev: {
        options: {
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.jade', '!**/_*.jade'],
            dest: 'public/',
            ext: '.html'
          }
        ]
      },
      prod: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.jade', '!**/_*.jade'],
            dest: 'public/',
            ext: '.html'
          }
        ]
      }
    },
    sass: {
<<<<<<< HEAD
    	prod: {
    		options: {
    			outputStyle: 'compressed',
    		},
    		files: {
    			'public/css/main.css': 'src/_styles/main.scss'
    		}
    	},
    	dev: {
    		files: {
    			'public/css/main.css': 'src/_styles/main.scss'
    		},
    		options: {
    		  sourceMap: true,
    		  sourceMapEmbed: true
    		}
    	}
    },
    uglify: {
    	bower: {
    		files: {
    			'public/lib/build.js': 'public/lib/build.js'
    		}
    	},
    	main: {
    		files: [
    		{
    			expand: true,
    			cwd: 'public/',
    			src: ['**/*.js'],
    			dest: 'public/'
    		}]
    	}
    },
    watch: {
    	livereload: {
    		options: {
    			livereload: LIVERELOAD_PORT,
    		},
    		files: [
          'public/css/main.css',
          'public/js/**/*.js',
          'public/**/*.html'
    		]
    	},
    	sass: {
    		files: ['src/**/*.scss'],
    		tasks: ['sass:dev']
    	},
    	jade: {
    		files: ['src/**/*.jade'],
    		tasks: ['jade:dev']
    	},
    	babel: {
    		files: ['src/js/**/*.js'],
    		tasks: ['babel:dev']
    	}
=======
      prod: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/css/main.css': 'src/_styles/main.scss'
        }
      },
      dev: {
        options: {
          sourceMap: true,
          sourceMapEmbed: true
        },
        files: {
          'public/css/main.css': 'src/_styles/main.scss'
        }
      }
    },
    uglify: {
      bower: {
        files: {
          'public/lib/build.js': 'public/lib/build.js'
        }
      },
      main: {
        files: [
          {
            expand: true,
            cwd: 'public/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: true
        },

        files: [
          'public/css/main.css',
          'public/js/**/*.js',
          'public/**/*.html'
        ]
      },
      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade:dev']
      },
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['babel:dev']
      }

>>>>>>> upstream/master
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'babel:prod',
    'bower_concat',
    'jade:prod',
    'sass:prod',
    'autoprefixer',
    'uglify',
    'cssmin'
  ]);
  grunt.registerTask('build-dev', [
    'clean',
    'copy',
    'babel:dev',
    'bower_concat',
    'jade:dev',
    'sass:dev',
    'autoprefixer'
  ]);

  grunt.registerTask('serve', [
    'build-dev',
    'connect',
    'watch'
  ]);

};
