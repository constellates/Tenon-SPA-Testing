module.exports = function (grunt) {

// grunt modules ------------------------------------------------------------

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-tenon-client');

// config -------------------------------------------------------------------

    grunt.initConfig({

    // end to end testing ---------------------------------------------------

        protractor: {
            options: {
                configFile: "node_modules/protractor/referenceConf.js", // default config
                keepAlive: true,
                noColor: false,
                args: {}
            },
            main: {
                options: {
                    configFile: "protractor.conf.js", // project specific config file
                    args: {
                        specs: ['DOM-plopper.js']
                    }
                }
            }
        },


    // start dev server -----------------------------------------------------

        express: {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },

    // make tenon requests --------------------------------------------------

        tenon: {
            options: {
                key: '7d1cac47b1786ec776e94a2b23cb98d7',
                inline: false,
                level: 'AAA'
            },
            all: {
                options: {
                    saveOutputIn: 'tests/accessibility/results.js',
                    snippet: false,
                    asyncLim: 2
                },
                src: [
                    'tests/accessibility/dom-captures/*'
                ]
            }
        }

    });

// tasks --------------------------------------------------------------------

    grunt.registerTask('default', ['protractor', 'tenon']);

};