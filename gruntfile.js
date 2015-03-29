"use strict";
module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      	watch: {
      		livereload: {
    			files: [
    				'*.js',
		            '*/*.js',
		            'public/*/*',
		            '!node_modules/*.js',
		            '!public/js/master.min.js'
    			],
    			tasks: [],
    			options: {
      				livereload: true
    			}	
    		},
		    js: {
	          	files: [
	          		'*.js',
		            '*/*.js',
		            '!node_modules/*.js',
		            'public/js/*.js',
		            '!public/js/master.min.js'
	            ],
	          	tasks: ['jshint']
    		},
    		css: {
    			files: [
    				'public/css/*.scss'
    			],
    			tasks: ['sass']
    		}	
		},
	    pkg: grunt.file.readJSON('package.json'),
      	concat: {
		    js: {
		      	src: ['public/dist/js/angular.min.js', 'public/dist/js/angular-route.js', 
		      		'public/dist/js/moment.js', 'public/dist/js/angular-moment.min.js', 'public/js/*.js'],
		      	dest: 'public/js/master.min.js'
		    },
		    css: {
		      	src: ['public/dist/css/bootstrap.min.css', 'public/css/style.css'],
		      	dest: "public/css/style.min.css"
		    }
		},
		sass: {                              // Task
		    dist: {                            // Target
			    options: {                       // Target options
			        style: 'expanded'
			    },
			    files: {                         // Dictionary of files
			        'public/css/style.css': 'public/css/style.scss',       // 'destination': 'source'
			    }
		    }
		},
		jshint: {
      		files: [
      			'*.js',
	            '*/*.js',
	            '!node_modules/*.js',
	            'public/js/*.js',
	            '!public/js/master.min.js'
	        ],
	    	options: {
	        // options here to override JSHint defaults
	        	node: true,
	        	loopfunc: true,
		        globals: {
		        	angular: true,
		        	chatApp: true,
		        	chatIoData: true,
		        	document:true,
		        	io:true,
		        	jQuery: false,
		        	console: true,
		        	module: true,
					require: true
		        }
		    }
      	},
	    uglify: {
			build:  {
			    files: {
			      	'public/js/master.min.js': 'public/js/master.min.js'
			    }
			}
		},
		cssmin: {
		    build: {
		        src: 'public/css/style.min.css',
		        dest: 'public/css/style.min.css'
		    }
    	}
    });
	grunt.registerTask('production', ['sass', 'concat', 'uglify','cssmin']);

    grunt.registerTask('default', []);
};