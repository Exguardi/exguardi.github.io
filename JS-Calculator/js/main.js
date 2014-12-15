require.config({
    //baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-2.1.1',
        jquerym: 'lib/jquery.mobile-1.4.5',
        jqueryd: 'lib/jquery.dropdown.custom',
        jqueryn: 'lib/jquery.numeric',
        d3: 'lib/d3'
    }
});

//Load base libraries
require(['jquery', 'jquerym', 'd3'], function() {
    console.log("Base libraries have loaded.");
    // Load libraries dependent on jQuery
    require(['jqueryd', 'jqueryn'], function () {
        console.log("jQuery-related libraries have loaded.");
    });
    // Load the UI handler
    require(['ui'], function (ui) {
        console.log("UI has loaded.");
    });
});