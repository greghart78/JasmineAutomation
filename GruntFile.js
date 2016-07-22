module.exports = function (grunt) {
	"use strict";
	grunt.initConfig ({
		ts:{
			options: {
				compiler: './node_modules/typescript/bin/tsc'
				//note, this relies on the package.json file to specify the typescript version the project is using.
			},
			default : {
				src: ['typings_manual/*d.ts','src/**/*.ts'],
				"options": {
					"target": "ES5",
					"module": "commonjs",
					"moduleResolution": "node",
					"sourceMap": true,
					"emitDecoratorMetadata": true,
					"experimentalDecorators": true,
					"removeComments": false,
					"noImplicitAny": false,
					"outDir": "target/"
				},
				"exclude": [
					"node_modules",
					".idea",
					"target",
					"typings/main",
					"typings/main.d.ts"
				]
			}
		},
		karma:{
			unit: {
				configFile: 'karma.conf.js'
			}
		}

// 		karma: {
// 			unit: {
// 				logLevel:"debug",
// 				frameworks: ['systemjs','jasmine'],
// 				singleRun: false,
// 				browsers: ['PhantomJS'],
// 				plugins: ['karma-systemjs','karma-jasmine','karma-phantomjs-launcher'],
// 				systemjs: {
// 					// Path to your SystemJS configuration file
// 					configFile: 'system.conf.js',
//
// 					// Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
// 					serveFiles: [
// 						{pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true},
// 						{pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true},
// 						{pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true},
// 						{pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: true},
// 						{pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true},
// 						{pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
// 						{pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
// 						{pattern: 'node_modules/@angular/**/*.js', included: false, watched: false}
// 					]
// 				},
// 				options: {
// 					files: [
// 						// paths loaded by Karma
//
//
// 						// Paths loaded via module imports
// 						{pattern: 'src/app/bootstrap.js', included: true, watched: true},
// 						//{pattern: 'src/app/services/*.js', included: true, watched: true},
// //						{pattern: 'src/app/Components/*.js', included: true, watched: true},
// 						{pattern: 'src/test/specs/*.js', included: true, watched: true},
// //						{pattern: 'src/app/Components/*Spec.js', included: true, watched: true},
//
// 						// Paths to support debugging with source maps in dev tools
// //						{pattern: 'src/app/Components/*.ts', included: false, watched: true},
// //						{pattern: 'src/app/Components/*.js.map', included: false, watched: false}
// 					]
// 				}
// 			}
// 		}
 	});

	grunt.registerTask ('compile', ['ts:default']);
	grunt.registerTask ('test', ['karma:unit']);
	grunt.registerTask ('deploy', ['less:default']);
	grunt.registerTask ('default', 'Log some stuff.', function () {
		grunt.log.write ('Logging some stuff...').ok ();
	});
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-karma');
};