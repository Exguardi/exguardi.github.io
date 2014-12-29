var runVerbs = ! (navigator.userAgent.match(/Safari/i));
var verb_lastCmd = "";

function verb(cmd) {
	if (runVerbs) {
		cmd = cmd.replace( new RegExp("&", "gi"), "%26");
		verb_lastCmd = verb_lastCmd + "&" + cmd;
		// Brute force solution to verb order: all verbs done later
		setTimeout(function() {
			document.location = "verb://?"+verb_lastCmd;
		},0);
	}
	else
		console.log( "VERB: " + cmd );
}

function go_home() {
	verb( "go_home" );
}

function update_file(filePath) {
	verb( "update_file="+filePath );
}

function hideNavBar(how) {
	verb('hide_navbar='+how);
}

function video_loc_fullscreen()	{
	video_loc("fullscreen");
}

function video_play_file(filePath) {
	verb( "video_play_file="+filePath );
}

function video_play(state) {
	verb( "video_play="+state );
}

function video_close() {
	verb( "video_close" );
}

function video_loc(locStr) {
	verb( "video_loc="+locStr );
}

function video_done(doneStr) {
	verb( "video_done="+doneStr );
}

function video_control(type) {
	verb( "video_control="+type );
}

function video_settime(newTime) {
	verb( "video_settime="+newTime );
}

function video_getstatus(resultFunc) {
	verb( "video_getstatus="+resultFunc );
}

function video_show(how) {
	verb( "video_show="+how );
}

function download_file(dir) {
	verb( "download_file="+dir );
}

var g_pop_up_shown = false;

function download_getstatus() {
 	//verb( "download_getstatus=download_getstatus_func" );
	//alert('download_getstatus_func vstore_name='+vstore_name+' getItem='+localStorage.getItem(vstore_name+'exitCheck'));
	if (localStorage.getItem(vstore_name+'exitCheck')) {
		localStorage.removeItem(vstore_name+'exitCheck');
		g_pop_up_shown = true;
		setTimeout(function() {
			// alert('download_getstatus_func');
			$('#popup-update-complete').modal('show');
		}, 0);
	}
}

function exitCheck_clear() {
 	localStorage.removeItem(vstore_name+'exitCheck');
}

function exitCheck_set() {
	localStorage.setItem(vstore_name+'exitCheck','Yes');
}