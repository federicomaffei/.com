'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: [ './*.js', './src', './test' ]
        }
    });

    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('lint', ['eslint']);
};