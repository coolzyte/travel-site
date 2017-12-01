var $ = require('jquery');
var Person = require('./modules/Person');
var camera = require('./modules/camera');


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

var obj;

    if ((obj = $('#camera')).length > 0) {
        obj.camera({
            autoAdvance: true,
            height: '46.67%',
            minHeight: '280px',
            pagination: true,
            thumbnails: false,
            playPause: false,
            hover: false,
            loader: 'none',
            navigation: false,
            navigationHover: false,
            mobileNavHover: false,
            fx: 'simpleFade',
            
        })
    }