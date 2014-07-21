module.exports = function (grunt){



    // Project configuration.
    grunt.initConfig({

        // load all grunt tasks matching the `grunt-*` pattern


        jshint: {
            all: ['js/*.js','js/**/*.js','!js/min.js','!foundation.min.js']
        },

        concat: {
            dist: {
                src: ['js/foundation.min.js','js/vendor/*.js'],
                dest: 'js/min.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    'js/min.js': ['js/min.js']
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'css/min.css': ['css/*.css', 'css/**/*.css', '!css/foundation.css']
                }
            }
        },

        watch: {
            js: {
                files: ['js/*.js','js/**/*.js','!js/min.js'],
                tasks:['jshint','uglify'],
                options:{spawn: false}
            },
            css: {
                files: ['css/*.css','css/**/*.css','!css/min.css'],
                tasks:['cssmin'],
                options:{spawn: false}
            }

        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'img/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'img/min'                  // Destination path prefix
                }]
            }
        },

        replace: {
            dist: {
                src: ['css/min.css'],
                overwrite: true,                 // overwrite matched source files
                replacements: [{
                    from: "img/",
                    to: "img/min/"
                }]
            }
        }

    });

    // Load des libraries
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-text-replace');

    // Default task(s).
    grunt.registerTask('default', ['jshint','concat','uglify','cssmin','imagemin',"replace"]);

}