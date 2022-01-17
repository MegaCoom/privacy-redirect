const targets = /https?:\/\/(((www|maps)\.)?(google\.).*(\/search)|search\.(google\.).*)/;
const redirects = [
  { link: "https://search.disroot.org", q: "/search" },
  { link: "https://searx.tuxcloud.net", q: "/search" },
//  { link: "https://search.zdechov.net", q: "/search" }
];

export default {
  targets,
  redirects,
};
