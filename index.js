const nmap = require('node-nmap');

nmap.nmapLocation = 'nmap'; //default
var quickscan = new nmap.NmapScan('-sP 192.168.0.0/24');

quickscan.on('complete', function (data){
    console.log("Clients found: " + data.length);

    for ( i = 0; i < data.length; i++ ) {
        var line   = data[i]['ip'] + ";";

        var host   = data[i]['hostname'];
        var mac    = data[i]['mac'];
        var vendor = data[i]['vendor'];

        if ( !host )   host   = '';
        if ( !mac )    mac    = '';
        if ( !vendor ) vendor = '';

        line += mac + ";";
        line += host + ";";
        line += vendor + ";";

        console.log( line );
    }

});

quickscan.on('error', function(error){
  console.log(error);
});
