// DNS 213.186.164.5 or 212.35.72.10 
// ================= PROXIES =================
var MATCH_JO = "PROXY 213.186.179.24:8080";

var LOBBY_POOL = [
  "PROXY 213.186.174.124:8080",
  "PROXY 213.186.179.162:8080",
  "PROXY 213.186.180.158:8080",
  "PROXY 213.186.160.188:8080",
  "PROXY 213.186.164.40:8000",
  "PROXY 213.186.164.45:8000"
];

var BLOCK  = "PROXY 127.0.0.1:9";
var DIRECT = "DIRECT";

// ================= JORDAN MATCH (STRONG) =================
var JORDAN_MATCH_IPV4 = [
  ["213.186.160.0","255.255.224.0"], // /19
  ["212.35.64.0","255.255.192.0"],   // /18
  ["212.34.0.0","255.255.0.0"],      // /16
  ["213.139.32.0","255.255.224.0"],  // /19
  ["194.165.128.0","255.255.224.0"], // /19
  ["149.200.128.0","255.255.128.0"], // /17
  ["37.202.64.0","255.255.192.0"],   // /18
  ["46.185.128.0","255.255.128.0"],  // /17
  ["176.28.0.0","255.252.0.0"],      // /14
  ["178.238.184.0","255.255.252.0"], // /22
  ["94.142.32.0","255.255.224.0"]    // /19
];

// ================= JORDAN WIDE (LOBBY) =================
var JORDAN_WIDE_IPV4 = JORDAN_MATCH_IPV4;

// ================= BLACKLIST: EU + RUSSIA + ASIA =================
var GEO_BLACKLIST = [
  ["5.0.0.0","255.0.0.0"],
  ["37.0.0.0","255.0.0.0"],
  ["51.0.0.0","255.0.0.0"],
  ["5.136.0.0","255.248.0.0"],
  ["31.128.0.0","255.192.0.0"],
  ["46.16.0.0","255.240.0.0"],
  ["95.24.0.0","255.248.0.0"],
  ["178.64.0.0","255.192.0.0"],
  ["1.0.0.0","255.0.0.0"],
  ["14.0.0.0","255.0.0.0"],
  ["27.0.0.0","255.0.0.0"],
  ["36.0.0.0","255.0.0.0"],
  ["39.0.0.0","255.0.0.0"],
  ["42.0.0.0","255.0.0.0"],
  ["49.0.0.0","255.0.0.0"],
  ["58.0.0.0","255.0.0.0"],
  ["59.0.0.0","255.0.0.0"],
  ["60.0.0.0","255.0.0.0"],
// ===== Added BLOCK RANGES =====
["23.88.192.0","255.255.224.0"],   // /19
["36.50.21.0","255.255.255.0"],    // /24
["43.230.209.0","255.255.255.0"],  // /24
["43.250.136.0","255.255.252.0"],  // /22
["45.65.56.0","255.255.254.0"],    // /23
["45.65.58.0","255.255.254.0"],    // /23
["58.147.128.0","255.255.224.0"],  // /19
["59.153.124.0","255.255.252.0"],  // /22
["61.5.192.0","255.255.240.0"],    // /20
["64.207.208.0","255.255.248.0"],  // /21
["74.118.80.0","255.255.252.0"],   // /22
["91.109.216.0","255.255.255.0"],  // /24
["103.5.172.0","255.255.252.0"],   // /22
["103.13.64.0","255.255.252.0"],   // /22
["103.15.38.0","255.255.255.0"],   // /24
["103.15.238.0","255.255.254.0"],  // /23

["102.61.160.0","255.255.224.0"],  // /19
["197.149.64.0","255.255.192.0"],  // /18
["41.223.0.0","255.255.0.0"],      // /16
["197.234.0.0","255.255.0.0"],     // /16
["197.181.0.0","255.255.0.0"],     // /16
["213.158.0.0","255.255.0.0"],     // /16
["41.206.0.0","255.254.0.0"],      // /15

["103.1.156.0","255.255.252.0"],   // /22
["103.13.104.0","255.255.252.0"],  // /22
["103.145.40.0","255.255.254.0"],  // /23
["103.166.104.0","255.255.252.0"], // /22
["185.31.64.0","255.255.252.0"],   // /22

["37.120.0.0","255.255.128.0"],    // /17
["45.153.112.0","255.255.240.0"],  // /20
["62.201.232.0","255.255.248.0"],  // /21
["78.96.0.0","255.240.0.0"],       // /12
["185.76.32.0","255.255.252.0"],   // /22
["193.8.92.0","255.255.252.0"]     // /22
];

// ================= SESSION =================
var SESSION = {
  matchNet: null,
  matchHost: null,
  dnsCache: {}
};

// ================= HELPERS =================
function norm(h){ var i=h.indexOf(":"); return i>-1?h.substring(0,i):h; }

function isInList(ip, list){
  for (var i=0;i<list.length;i++)
    if (isInNet(ip, list[i][0], list[i][1])) return true;
  return false;
}

function resolvePinned(host){
  if (SESSION.dnsCache[host]) return SESSION.dnsCache[host];
  var ip = dnsResolve(host);
  if (ip) SESSION.dnsCache[host] = ip;
  return ip;
}

function pickLobbyProxy(host){
  var h=0;
  for (var i=0;i<host.length;i++)
    h=(h+host.charCodeAt(i))%LOBBY_POOL.length;
  return LOBBY_POOL[h];
}

// ================= DETECTION =================
function isPUBG(h){
  return /pubg|pubgm|tencent|krafton|lightspeed|levelinfinite/i.test(h);
}
function isMatch(u,h){
  return /match|battle|game|combat|realtime|sync|udp|tick|room/i.test(u+h);
}
function isLobby(u,h){
  return /lobby|matchmaking|queue|dispatch|gateway|region|join|recruit/i.test(u+h);
}
function isSocial(u,h){
  return /friend|invite|squad|team|party|clan|presence|social/i.test(u+h);
}
function isCDN(u,h){
  return /cdn|asset|resource|patch|update|media|content/i.test(u+h);
}

// ================= MAIN =================
function FindProxyForURL(url, host) {

  host = norm(host.toLowerCase());
  if (!isPUBG(host)) return DIRECT;

  var ip = resolvePinned(host);
  if (!ip || ip.indexOf(":")>-1) return BLOCK;

  if (isInList(ip, GEO_BLACKLIST)) return BLOCK;

  if (isMatch(url, host)) {
    if (!isInList(ip, JORDAN_MATCH_IPV4)) return BLOCK;

    var net24 = ip.split('.').slice(0,3).join('.');
    if (!SESSION.matchNet) {
      SESSION.matchNet = net24;
      SESSION.matchHost = host;
      return MATCH_JO;
    }
    if (host !== SESSION.matchHost) return BLOCK;
    if (net24 !== SESSION.matchNet) return BLOCK;

    return MATCH_JO;
  }

  if (isLobby(url, host) || isSocial(url, host) || isCDN(url, host)) {
    if (!isInList(ip, JORDAN_WIDE_IPV4)) return BLOCK;
    return pickLobbyProxy(host);
  }

  return pickLobbyProxy(host);
}
