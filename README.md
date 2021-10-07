# geo-from-ip

Get geolocation 🌐 information about an IP 📲

![Build Status](https://github.com/VikramTiwari/geo-from-ip/workflows/Build%20Status/badge.svg) [![NPM Version](https://img.shields.io/npm/v/geo-from-ip.svg)](https://www.npmjs.com/package/geo-from-ip) [![NPM Download](https://img.shields.io/npm/dm/geo-from-ip.svg)](https://www.npmjs.com/package/geo-from-ip)

## Features

- No frills install 🚀
- Downloads GeoLite2 databases automatically during installation 🔋
- Run `npm install` to upgrade databases which means automatic updates on deployments 💎

## How to use

- Include package in your project

```sh
npm install --save geo-from-ip
# or, if you are using yarn
yarn add --save geo-from-ip
```

- Set `MAXMIND_LICENSE_KEY=<your_maxmind_license_key>` in your environment variables. Read more about [this change on MaxMind's blog](https://blog.maxmind.com/2019/12/18/significant-changes-to-accessing-and-using-geolite2-databases/).

- Use package to get geo data from IP

```javascript
const geoip = require('geo-from-ip')
console.log(geoip.allData('199.188.195.120'))
```

- And the complete response will be returned

```json
{
  "code": {
    "state": "CA",
    "country": "US",
    "registeredCountry": "US",
    "continent": "NA"
  },
  "geonameId": {
    "city": 5391959,
    "state": 5332921,
    "country": 6252001,
    "registeredCountry": 6252001,
    "continent": 6255149
  },
  "city": "San Francisco",
  "state": "California",
  "country": "United States",
  "registeredCountry": "United States",
  "continent": "North America",
  "postal": "94107",
  "location": {
    "accuracy_radius": 5,
    "latitude": 37.7642,
    "longitude": -122.3993,
    "metro_code": 807,
    "time_zone": "America/Los_Angeles"
  }
}
```

- Update database

Database will get automatically updated every time deployment happens. But if you would like to force an update, just run:

```sh
npm install
# or, if you are using yarn
yarn
```

Remember that you will need to have `MAXMIND_LICENSE_KEY` set in your environment variables.

## Debugging / Developing

Run your code using `geo-from-ip` as debug flag. Look into `pacakge.json` for example.

## Credits

### Database: Max-Mind

This product includes GeoLite2 data created by MaxMind, available from <https://www.maxmind.com>
