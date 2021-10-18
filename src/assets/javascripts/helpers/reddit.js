const targets = [
  "www.reddit.com",
  "np.reddit.com",
  "new.reddit.com",
  "amp.reddit.com",
  "i.redd.it",
  "redd.it",
];
const redirects = [
// special
  "https://reddit.artemislena.eu",

// teddit: privacy w/ old UI
  "https://teddit.net",
  "https://teddit.ggc-project.de",
  "https://teddit.kavin.rocks",
  "https://teddit.zaggy.nl",
  "http://teddit4w6cmzmj5kimhfcavs7yo5s7alszvsi2khqutqtlaanpcftfyd.onion",
  "https://teddit.namazso.eu",
  "https://teddit.nautolan.racing",
  "http://ibarajztopxnuhabfu7fg6gbudynxofbnmvis3ltj6lfx47b6fhrd5qd.onion",
  "https://teddit.pussthecat.org",
  "https://teddit.alefvanoon.xyz",
  "https://teddit.sethforprivacy.com",
  "http://qtpvyiaqhmwccxwzsqubd23xhmmrt75tdyw35kp43w4hvamsgl3x27ad.onion"
];
const bypassPaths = /\/(gallery\/poll\/rpan\/settings\/topics)/;

export default {
  targets,
  redirects,
  bypassPaths,
};
