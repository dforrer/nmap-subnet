const nmap = require('node-nmap');

nmap.nmapLocation = 'nmap'; //default
let quickscan = new nmap.NmapScan('-sn --min-parallelism 20 --host-timeout 4m 192.168.0.0/20');

var rv = {
    num_clients: 0,
    clients : [],
    error : 0
};

quickscan.on( 'complete', function( data ) {
    try {
        rv['num_clients'] = data.length;

        for ( i = 0; i < data.length; i++ ) {
            var ip     = data[i]['ip'];
            var host   = data[i]['hostname'];
            var mac    = data[i]['mac'];
            var vendor = data[i]['vendor'];

            if ( !ip )     ip     = '';
            if ( !host )   host   = '';
            if ( !mac )    mac    = '';
            if ( !vendor ) vendor = '';

            var c = {
                ip : ip,
                host : host,
                mac : mac,
                vendor : vendor
            };

            rv['clients'].push(c);
        }
    } catch (err) {
        rv['error'] = 1;
    }
    console.log( JSON.stringify(rv) );
});

quickscan.on('error', function(error){
    rv['error'] = 2;
    console.log( JSON.stringify(rv) );
});
