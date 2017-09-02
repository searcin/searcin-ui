'use strict';

module.exports = function(){
    let tmp = "./.tmp";
    let src = "./src/main/resources";
    let webapp = "./src/main/webapp";
    return {
        tmp: {
            target: tmp,
            index: tmp + '/index.html',
            script: tmp + '/script',
            style: tmp + '/style',
            fonts: tmp + '/fonts',
            images: tmp + '/images',
            stylefiles: [tmp + '/style/*.css',tmp+'/style/**/*.css'],
            scriptfiles: [tmp + '/script/app.js'],
            partials: [tmp + '/partials/templates.js'],
            env: tmp + '/env',
            envFile: tmp + '/env/env.js'
        },
        src: {
            index: src + '/index.html',
            allCss: [src + '/app/*.scss', src + '/app/**/*.scss'],
            moduleJs: src + '/**/*.module.js',
            allJs: src + '/**/*.js',
            templates: [src + '/app/*.html',src + '/app/**/*.html'],
            fonts: [src + '/assets/fonts/*.*','./bower_components/bootstrap/fonts/*.*','./bower_components/components-font-awesome/fonts/*.*'],
            images: [src + '/assets/images/*.*',src + '/assets/images/**/*.*'],
            env_dev: src +  '/env/env.js',
            env: function(str) {
                switch(str) {
                    case "DEV":
                        return src + '/env/dev.js';
                    case "QA":
                        return src + '/env/qa.js';
                    case "UAT":
                        return src + '/env/uat.js';
                    case "PROD":
                        return src + '/env/prod.js';
                    default: 
                        return src + '/env/env.js';
                }
            }
        },
        webapp: {
            target: webapp,
            index: webapp + '/index.html',
            images: webapp + '/images',
            fonts: webapp + '/fonts'
        }
    }
};