                /* Magic Mirror Config 
 *
 * By Sachin Subramanian, Amer Din, Sebastian Armale Khan, Sebastian Moreno
 * 
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 * 
 */

var config = {
//address: "localhost", // Address to listen on, can be:
address : "100.65.164.63",
                     // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                     // - another specific IPv4/6 to listen on a specific interface
                     // - "", "0.0.0.0", "::" to listen on any interface
                     // Default, when address config is left out, is "localhost"
port: 8080,
//ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
ipWhitelist: [],
                                                      // or add a specific IPv4 of 192.168.1.5 :
                                                      // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                      // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                      // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

language: "en",
timeFormat: 12,
units: "imperial",

modules: [
{
module: "alert",
},
{
module: "updatenotification",
position: "top_bar"
},
{
module: "clock",
position: "top_left"
},
{
module: "calendar",
header: "Events",
position: "top_left",
config: {
calendars: [
{
symbol: "calendar-check",
                                                url: "https://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
                                                },
                                                {
symbol: "MyCalendar",
url: "https://calendar.google.com/calendar/ical/sachman1000%40gmail.com/public/basic.ics"
}
]
}
},

{
module: "currentweather",
position: "top_left",
config: {
location: "Austin",
locationID: "4671654",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
appid: "cd1c5142420ca9d83415b70d08619cf6"
}
},
{
module: "weatherforecast",
position: "top_left",
header: "Weather Forecast",
config: {
location: "Austin",
locationID: "4671654",  //ID from https://openweathermap.org/city
appid: "cd1c5142420ca9d83415b70d08619cf6"
}
},

{
  module: "MMM-AVStock",
  position: "bottom_bar", //"bottom_bar" is better for `mode:ticker`
  config: {
    apiKey : "I1FO9LD96BAGAFQ2", // https://www.alphavantage.co/
    timeFormat: "YYYY-MM-DD HH:mm:ss",
    symbols : ["aapl", "GOOGL", "005930.KS"],
    alias: ["APPLE", "", "SAMSUNG Electronics"], //Easy name of each symbol. When you use `alias`, the number of symbols and alias should be the same. If value is null or "", symbol string will be used by default.
    tickerDuration: 60, // Ticker will be cycled once per this second.
    chartDays: 90, //For `mode:series`, how much daily data will be taken. (max. 90)
    poolInterval : 1000*15, // (Changed in ver 1.1.0) - Only For Premium Account
    mode : "table", // "table", "ticker", "series"
    decimals: 4, // number o decimals for all values including decimals (prices, price changes, change%...)
    candleSticks : false, //show candle sticks if mode is Series
    coloredCandles : false, //colored bars: red and green for negative and positive candles
    premiumAccount: false, // To change poolInterval, set this to true - Only For Premium Account
  }
},



{
  module: "MMM-NowPlayingOnSpotify",
  position: "top_left",

  config: {
    clientID: "9adc7ec4483b422e94454dae8452902c",
    clientSecret: "2dfb6bca6871437a90a005cd79845746",
    accessToken: "BQCxHnLnXkKNU9dzK7e0Iyra-gXuOsK_pNOgLTRayWqsog-lARPy0S-Z_enm3qnJ-FMQo0hEmC0bk5V8wI_FNpAEbKogEMJKkeRAwq6JWEx6rRI3yxKmVYluVeyUg_TuaI4WspBUvrOwk5JFXuJ86s6GyB8SAw",
    refreshToken: "AQA2mvqGPjpHDItsGXaBXmyiPZNdz3SrT_PHgBJAnxW4GwUAG1o0C3qXcDLeGqYUMJo4ZhG_qWRrQGzYRWqUWtVjRMvvboxiQ_Ns4MampRCqsOOLwoJnqgaNJJ2uaLWlpJ88aA"
  }
},

{
module: 'MMM-Remote-Control',
position: "bottom_left",
},

{
  module: "MMM-MyScoreboard",
  position: "top_right",
  classes: "default everyone",
  header: "Scores, Standings, and News",
  config: {
    showLeagueSeparators: true,
    colored: true,
    viewStyle: "oneLineWithLogos",
    sports: [
      {
        league: "NBA",
        groups: ["Central"]
      },
      {
        league: "MLB",
        groups: ["NL West"]
      },
      {
        league: "NFL",
        groups: ["NFC North"]
      },
      {
league: "NCAAF",
groups: ["Big 12"]
      },
      {
        league: "NCAAM_MM",
        label: "March Madness"
      }
    ]

  }
},


  {
module: "MMM-MyStandings",
position: "top_right",
config: {
updateInterval: 1 * 60 * 1000, // every 15 minutes
rotateInterval: 0.167 * 60 * 1000, // every 30 seconds
sports: [
{ league: "NBA", groups: ["Central"] },
{ league: "MLB", groups: ["National League West"] },
{ league: "NFL", groups: ["NFC North"] },

],
nameStyle: "short",
showLogos: true,
useLocalLogos: true,
showByDivision: true,
fadeSpeed: 2000,
}
  },

{
module: "MMM-Reddit",
position: "top_right",
    config: {
subreddit: ['nba', 'nfl', 'mlb'],
headerType: 'chained',
displayType: 'headlines',
count: 12,
show: 2,
width: 410,
showScore: false,
showSubreddit: true,
colorText: false,
showThumbnail: false,
}
},

{
module: "MMM-MovieListings",
position:  'top_right',
config: {
    apiKey: 'f64768afa93411d30eab262af5a46e45',
region: 'US',
    language: 'EN',
    interface: 'poster', //'list', 'poster', 'detailed'
    includeMoviePlot: false,
    maxPlotLength: 200,
    header: 'Top Movies Around Me',
    moviesPerPage: 0,
    refreshInterval: 1000 * 60 * 60 * 1, //Once a day
    baseUrl: 'https://api.themoviedb.org/3/movie/now_playing',
    animationSpeed: 2 * 1000,
    pageChangeInterval: 30 * 1000
}
},

{
module: 'MMM-Screencast',
position: 'bottom_right', // This position is for a hidden <div /> and not the screencast window
config: {
position: 'bottomRight',
height: 500,
width: 500,
}
},




{
module: "newsfeed",
position: "bottom_bar",
config: {
feeds: [
{
title: "New York Times",
url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
}
],
showSourceTitle: true,
showPublishDate: true
}
},
]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}