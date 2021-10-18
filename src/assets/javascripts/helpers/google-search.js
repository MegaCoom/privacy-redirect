const targets = /https?:\/\/(((www|maps)\.)?(google\.).*(\/search)|search\.(google\.).*)/;
const redirects = [
  { link: "https://sx.alefvanoon.xyz", q: "/search" },
  { link: "https://s.alefvanoon.xyz", q: "/search" },
  { link: "https://search.disroot.org", q: "/search" },
  { link: "https://searx.tuxcloud.net", q: "/search" },
  { link: "https://search.zdechov.net", q: "/search" }
];

export default {
  targets,
  redirects,
};
