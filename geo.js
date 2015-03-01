var mmdbreader = require('maxmind-db-reader'),
    fs = require('fs');

// read file for IPs
function getIP(filename) {
    fs.readFile(filename, 'utf-8', function(err, data) {
        if (err) throw err;
        ips = data.split('\n');
        // console.log(ips)      
        ips.forEach(getGeo);
    });
}

// get geo using each ip
function getGeo(ip, index, array) {
    // get geodata db
    var city = mmdbreader.openSync('./mmdb/GeoIP2-City.mmdb');
    var geodata = city.getGeoDataSync(ip);
    // form output
    var city = 'NA',
        country = 'NA';

    // consolidate data
    if (geodata) {
        if (geodata.city) {
            country = geodata.country.names.en;
            city = geodata.city.names.en;
        } else if (geodata.country) {
            country = geodata.country.names.en;
        }
    }

    // get ISP db
    var isp = mmdbreader.openSync('./mmdb/GeoIP2-ISP.mmdb');
    var ispdata = isp.getGeoDataSync(ip);

    var isp = 'NA',
        org = 'NA';

    if (ispdata) {
        if (ispdata.isp) {
            isp = ispdata.isp;
        }
        if (ispdata.organization) {
            org = ispdata.organization;
        }
    }

    console.log(city + ', ' + country + ': ' + isp + ', ' + org);
}

getIP('ips.csv');
