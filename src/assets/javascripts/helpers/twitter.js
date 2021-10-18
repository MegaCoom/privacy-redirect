/*
    Please remember to also update the src/manifest.json file 
    (content_scripts > matches, 'remove-twitter-sw.js') 
    when updating this list:
  */
const targets = [
  "twitter.com",
  "www.twitter.com",
  "mobile.twitter.com",
  "pbs.twimg.com",
  "video.twimg.com",
];
/*
    Please remember to also update the 
    src/assets/javascripts/remove-twitter-sw.js file 
    (const nitterInstances) when updating this list:
  */
const redirects = [
  "https://nitter.net",
  "https://nitter.snopyta.org",
  "https://nitter.42l.fr",
  "https://nitter.nixnet.services",
  "https://nitter.pussthecat.org",
  "https://nitter.fdn.fr",
  "https://nitter.1d4.us",
  "https://nitter.kavin.rocks",
  "https://nitter.vxempire.xyz",
  "https://nitter.unixfox.eu",
  "https://bird.trom.tf",
  "http://3nzoldnxplag42gqjs23xvghtzf6t6yzssrtytnntc6ppc7xxuoneoad.onion",
  "https://nitter.alefvanoon.xyz",
  "https://nitter.actionsack.com",
  "https://nitter.namazso.eu",
  "https://nitter.moomoo.me",
  "http://nitterrrs6bbcba2bxjviwxzzapkhuuelljtig2ku2rxasweckxxxhid.onion",
  "http://6wtik35qytedxazoefyol74tb5qnwknxj3plr4czxlywlod5avkxskyd.onion",
  "https://nitter.silkky.cloud"
];

export default {
  targets,
  redirects,
};
