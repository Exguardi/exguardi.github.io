require.config({
    //baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-2.1.1',
        jquerym: 'lib/jquery.mobile-1.4.5',
        jqueryd: 'lib/jquery.dropdown',
        d3: 'lib/d3'
    }
});

//Load libraries
require(['jquery', 'jquerym', 'jqueryd', 'd3'], function() {
    console.log("Libraries have loaded.");
    // Load the UI handler
    require(['ui'], function (ui) {
        console.log("UI has loaded.");
    });
});