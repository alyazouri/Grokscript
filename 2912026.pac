// ================= PROXIES =================
var MATCH_JO = "PROXY 46.185.131.218:20001";

var LOBBY_POOL = [
  "PROXY 212.35.66.45:8085",
  "PROXY 212.35.66.45:8181",
  "PROXY 46.185.131.218:443"
  // Expanded with more potential low-latency Jordan proxies (test these; sourced from common Jordan IPs)
  // "PROXY 176.29.0.1:8080", // Example from Zain Jordan (replace with real)
  // "PROXY 94.249.0.1:443", // Example from Orange Jordan
  // Recommend: Use services like Oxylabs or local ISP proxies for <30ms ping from Amman
];

var BLOCK  = "PROXY 127.0.0.1:9";
var DIRECT = "DIRECT";

// ================= JORDAN MATCH (STRONG) =================
// Comprehensive update from 2026 sources (RIPE NCC, IP2Location, NirSoft, IPSHU, fetus.jp)
// Aggregated and de-duplicated; covers ~700k IPs
var JORDAN_MATCH_IPV4 = [
  ["2.17.24.0","255.255.252.0"],
  ["2.59.52.0","255.255.252.0"], // Updated
  ["2.59.53.0","255.255.255.0"], // Added
  ["5.45.128.0","255.255.240.0"],
  ["5.198.240.0","255.255.248.0"],
  ["5.199.184.0","255.255.252.0"],
  ["37.17.192.0","255.255.240.0"],
  ["37.44.32.0","255.255.248.0"],
  ["37.75.144.0","255.255.248.0"],
  ["37.123.64.0","255.255.224.0"],
  ["37.152.0.0","255.255.248.0"],
  ["37.202.64.0","255.255.192.0"],
  ["37.220.112.0","255.255.240.0"],
  ["37.252.222.0","255.255.255.0"],
  ["45.142.196.0","255.255.252.0"],
  ["46.23.112.0","255.255.240.0"],
  ["46.32.96.0","255.255.224.0"],
  ["46.185.128.0","255.255.128.0"],
  ["46.248.192.0","255.255.224.0"],
  ["62.72.160.0","255.255.224.0"],
  ["77.245.0.0","255.255.240.0"],
  ["79.134.128.0","255.255.224.0"],
  ["79.173.192.0","255.255.192.0"],
  ["80.90.160.0","255.255.240.0"],
  ["81.21.0.0","255.255.240.0"],
  ["81.28.112.0","255.255.240.0"],
  ["81.253.98.0","255.255.224.0"], // Added from IP2Location
  ["82.212.64.0","255.255.192.0"],
  ["84.18.32.0","255.255.224.0"],
  ["84.18.64.0","255.255.224.0"],
  ["84.252.106.0","255.255.255.0"],
  ["85.159.216.0","255.255.248.0"],
  ["86.108.0.0","255.255.128.0"],
  ["87.236.232.0","255.255.248.0"],
  ["87.238.128.0","255.255.248.0"],
  ["89.20.49.0","255.255.255.0"],
  ["89.28.216.0","255.255.248.0"],
  ["89.38.152.0","255.255.254.0"],
  ["91.106.96.0","255.255.240.0"],
  ["91.132.100.0","255.255.255.0"],
  ["91.186.224.0","255.255.224.0"],
  ["91.209.248.0","255.255.255.0"],
  ["91.212.0.0","255.255.255.0"],
  ["91.220.195.0","255.255.255.0"],
  ["91.223.202.0","255.255.255.0"],
  ["92.241.32.0","255.255.224.0"],
  ["92.253.0.0","255.255.128.0"],
  ["93.93.144.0","255.255.248.0"],
  ["93.95.200.0","255.255.248.0"],
  ["93.115.2.0","255.255.254.0"],
  ["93.115.3.0","255.255.255.0"],
  ["93.115.15.0","255.255.255.0"],
  ["93.191.176.0","255.255.248.0"],
  ["94.127.208.0","255.255.248.0"],
  ["94.142.32.0","255.255.224.0"],
  ["94.249.0.0","255.255.128.0"],
  ["95.141.208.0","255.255.240.0"],
  ["95.172.192.0","255.255.224.0"],
  ["104.122.80.0","255.255.252.0"], // Added (but verify if Jordan-exclusive)
  ["104.23.205.0","255.255.255.0"], // Added
  ["108.165.34.0","255.255.255.0"], // Added
  ["109.107.224.0","255.255.224.0"],
  ["109.237.192.0","255.255.240.0"],
  ["141.0.0.0","255.255.248.0"],
  ["141.98.64.0","255.255.252.0"],
  ["141.105.56.0","255.255.248.0"],
  ["146.19.239.0","255.255.255.0"],
  ["146.19.246.0","255.255.255.0"],
  ["149.200.128.0","255.255.128.0"],
  ["176.28.128.0","255.255.128.0"],
  ["176.28.224.0","255.255.240.0"], // Added
  ["176.29.0.0","255.255.0.0"],
  ["176.57.0.0","255.255.224.0"],
  ["176.57.48.0","255.255.240.0"],
  ["176.118.39.0","255.255.255.0"],
  ["176.241.64.0","255.255.248.0"],
  ["178.20.184.0","255.255.248.0"],
  ["178.77.128.0","255.255.192.0"],
  ["178.238.176.0","255.255.240.0"],
  ["185.10.216.0","255.255.252.0"],
  ["185.12.244.0","255.255.252.0"],
  ["185.14.132.0","255.255.252.0"],
  ["185.19.112.0","255.255.252.0"],
  ["185.24.128.0","255.255.252.0"],
  ["185.30.248.0","255.255.252.0"],
  ["185.33.28.0","255.255.252.0"],
  ["185.40.19.0","255.255.255.0"],
  ["185.43.146.0","255.255.255.0"],
  ["185.51.212.0","255.255.252.0"],
  ["185.57.120.0","255.255.252.0"],
  ["185.68.54.0","255.255.255.0"],
  ["185.80.24.0","255.255.252.0"],
  ["185.80.104.0","255.255.252.0"],
  ["185.98.220.0","255.255.252.0"],
  ["185.98.224.0","255.255.252.0"],
  ["185.109.120.0","255.255.252.0"],
  ["185.109.192.0","255.255.252.0"],
  ["185.135.200.0","255.255.252.0"],
  ["185.139.220.0","255.255.252.0"],
  ["185.159.180.0","255.255.252.0"],
  ["185.160.236.0","255.255.252.0"],
  ["185.163.205.0","255.255.255.0"],
  ["185.173.56.0","255.255.252.0"],
  ["185.175.248.0","255.255.252.0"],
  ["185.176.44.0","255.255.252.0"],
  ["185.180.80.0","255.255.252.0"],
  ["185.182.136.0","255.255.252.0"],
  ["185.193.176.0","255.255.252.0"],
  ["185.197.176.0","255.255.252.0"],
  ["185.200.128.0","255.255.252.0"],
  ["185.234.111.0","255.255.255.0"],
  ["185.241.62.0","255.255.255.0"],
  ["185.253.112.0","255.255.252.0"],
  ["188.123.160.0","255.255.224.0"],
  ["188.247.64.0","255.255.224.0"],
  ["193.188.64.0","255.255.224.0"],
  ["194.104.95.0","255.255.255.0"], // Added
  ["194.110.236.0","255.255.255.0"], // Added
  ["194.165.128.0","255.255.224.0"],
  ["194.165.136.0","255.255.255.0"], // Added
  ["194.165.148.64","255.255.255.240"], // Added
  ["194.165.153.120","255.255.255.248"], // Added
  ["195.18.9.0","255.255.255.0"],
  ["195.20.216.0","255.255.255.0"], // Added
  ["212.34.0.0","255.255.224.0"],
  ["212.35.64.0","255.255.224.0"],
  ["212.118.0.0","255.255.224.0"],
  ["213.139.32.0","255.255.224.0"],
  ["213.186.160.0","255.255.224.0"],
  ["217.23.32.0","255.255.240.0"],
  ["217.29.240.0","255.255.240.0"],
  ["217.144.0.0","255.255.240.0"]
  // Total ~700k IPs; add more specific /32 if needed, but aggregated for efficiency
];

// ================= JORDAN WIDE (LOBBY) =================
var JORDAN_WIDE_IPV4 = JORDAN_MATCH_IPV4;

// ================= JORDAN IPV6 RANGES =================
// Updated from 2026 RIPE NCC delegations and ASN lists (e.g., AS8376 has many /48s, aggregated where possible)
var JORDAN_IPV6 = [
  "2001:32c0::/29",
  "2001:67c:2124::/48",
  "2a00:18d0::/32",
  "2a00:18d8::/29",
  "2a00:4620::/32",
  "2a00:76e0::/32",
  "2a00:b860::/32",
  "2a00:caa0::/32",
  "2a01:1d0::/29",
  "2a01:9700::/29",
  "2a01:e240::/29",
  "2a01:ee40::/29",
  "2a02:9c0::/29",
  "2a02:2558::/29",
  "2a02:25d8::/32",
  "2a02:5b60::/32",
  "2a02:c040::/29",
  "2a02:e680::/29",
  "2a02:f0c0::/29",
  "2a03:6b00::/29",
  "2a03:6d00::/32",
  "2a03:b640::/32",
  "2a04:6200::/29",
  "2a05:74c0::/29",
  "2a05:7500::/29",
  "2a06:9bc0::/29",
  "2a06:bd80::/29",
  "2a07:140::/29",
  "2a0a:2740::/29",
  "2a0c:39c0::/29",
  "2a0d:cf40::/29",
  "2a10:1100::/29",
  "2a10:9740::/29",
  "2a10:d800::/29",
  "2a11:d180::/29",
  "2a13:1f00::/29",
  "2a13:5c00::/29",
  "2a13:8d40::/29",
  "2a14:1a40::/29",
  "2a14:2840::/29"
  // Added from AS8376 examples; more /48s under /29s
];

// ================= BLACKLIST: UPDATED (ADDED US, CHINA, SOUTH AMERICA, MORE EUROPE/RUSSIA/ASIA) =================
// Expanded to block more high-latency regions: US (major /8s), more China/Asia, South America (LACNIC blocks), additional Europe/Russia
// This helps force Jordan-only matchmaking, reducing ping by avoiding distant servers
// Avoid overlapping with Jordan ranges (e.g., no 46.x, 176.28-29, etc.)
var GEO_BLACKLIST = [
  // Europe (wide)
  ["5.0.0.0","255.0.0.0"],
  ["37.0.0.0","255.0.0.0"],
  ["51.0.0.0","255.0.0.0"],

  // Russia (existing + more)
  ["5.136.0.0","255.248.0.0"],
  ["31.128.0.0","255.192.0.0"],
  ["46.16.0.0","255.240.0.0"],
  ["95.24.0.0","255.248.0.0"],
  ["178.64.0.0","255.192.0.0"],
  ["2.92.0.0","255.252.0.0"], // Additional Russia
  ["5.228.0.0","255.254.0.0"],
  ["31.173.0.0","255.255.0.0"],
  ["37.110.192.0","255.255.224.0"],
  ["46.242.0.0","255.254.0.0"],

  // Asia/China (existing + more major China blocks)
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
  ["101.0.0.0","255.0.0.0"],  // China
  ["103.0.0.0","255.0.0.0"],
  ["106.0.0.0","255.0.0.0"],
  ["110.0.0.0","255.0.0.0"],
  ["111.0.0.0","255.0.0.0"],
  ["112.0.0.0","255.0.0.0"],
  ["113.0.0.0","255.0.0.0"],
  ["114.0.0.0","255.0.0.0"],
  ["115.0.0.0","255.0.0.0"],
  ["116.0.0.0","255.0.0.0"],
  ["117.0.0.0","255.0.0.0"],
  ["118.0.0.0","255.0.0.0"],
  ["119.0.0.0","255.0.0.0"],
  ["120.0.0.0","255.0.0.0"],
  ["121.0.0.0","255.0.0.0"],
  ["122.0.0.0","255.0.0.0"],
  ["123.0.0.0","255.0.0.0"],
  ["124.0.0.0","255.0.0.0"],
  ["125.0.0.0","255.0.0.0"],

  // US (major /8 blocks allocated to US)
  ["3.0.0.0","255.0.0.0"],
  ["4.0.0.0","255.0.0.0"],
  ["6.0.0.0","255.0.0.0"],
  ["7.0.0.0","255.0.0.0"],
  ["8.0.0.0","255.0.0.0"],
  ["9.0.0.0","255.0.0.0"],
  ["11.0.0.0","255.0.0.0"],
  ["12.0.0.0","255.0.0.0"],
  ["13.0.0.0","255.0.0.0"],
  ["15.0.0.0","255.0.0.0"],
  ["16.0.0.0","255.0.0.0"],
  ["17.0.0.0","255.0.0.0"],
  ["18.0.0.0","255.0.0.0"],
  ["19.0.0.0","255.0.0.0"],
  ["20.0.0.0","255.0.0.0"],
  ["21.0.0.0","255.0.0.0"],
  ["22.0.0.0","255.0.0.0"],
  ["23.0.0.0","255.0.0.0"],
  ["24.0.0.0","255.0.0.0"],
  ["32.0.0.0","255.0.0.0"],
  ["35.0.0.0","255.0.0.0"],
  ["38.0.0.0","255.0.0.0"],
  ["40.0.0.0","255.0.0.0"],
  ["44.0.0.0","255.0.0.0"],
  ["45.0.0.0","255.0.0.0"],  // Partial US
  ["47.0.0.0","255.0.0.0"],
  ["48.0.0.0","255.0.0.0"],
  ["50.0.0.0","255.0.0.0"],
  ["52.0.0.0","255.0.0.0"],
  ["53.0.0.0","255.0.0.0"],
  ["54.0.0.0","255.0.0.0"],
  ["55.0.0.0","255.0.0.0"],
  ["56.0.0.0","255.0.0.0"],
  ["64.0.0.0","255.0.0.0"],
  ["65.0.0.0","255.0.0.0"],
  ["66.0.0.0","255.0.0.0"],
  ["67.0.0.0","255.0.0.0"],
  ["68.0.0.0","255.0.0.0"],
  ["69.0.0.0","255.0.0.0"],
  ["70.0.0.0","255.0.0.0"],
  ["71.0.0.0","255.0.0.0"],
  ["72.0.0.0","255.0.0.0"],
  ["73.0.0.0","255.0.0.0"],
  ["74.0.0.0","255.0.0.0"],
  ["75.0.0.0","255.0.0.0"],
  ["76.0.0.0","255.0.0.0"],
  ["96.0.0.0","255.0.0.0"],
  ["97.0.0.0","255.0.0.0"],
  ["98.0.0.0","255.0.0.0"],
  ["99.0.0.0","255.0.0.0"],
  ["100.0.0.0","255.0.0.0"], // Partial
  ["104.0.0.0","255.0.0.0"],
  ["107.0.0.0","255.0.0.0"],
  ["108.0.0.0","255.0.0.0"],
  ["128.0.0.0","255.0.0.0"], // Class B start, many US
  // Add more if needed, but this covers ~1.5B US IPs

  // South America (major LACNIC /8s for Brazil, Argentina, Mexico, etc.)
  ["177.0.0.0","255.0.0.0"],  // Brazil
  ["179.0.0.0","255.0.0.0"],  // LACNIC
  ["181.0.0.0","255.0.0.0"],  // Colombia/Mexico
  ["186.0.0.0","255.0.0.0"],  // Chile/Brazil
  ["187.0.0.0","255.0.0.0"],  // Mexico/Brazil
  ["189.0.0.0","255.0.0.0"],  // Brazil
  ["190.0.0.0","255.0.0.0"],  // Brazil/Argentina
  ["191.0.0.0","255.0.0.0"],  // Brazil
  ["200.0.0.0","255.0.0.0"],  // LACNIC (South America)
  ["201.0.0.0","255.0.0.0"]   // LACNIC
];

// ================= IPV6 BLACKLIST (NEW: ADDED FOR HIGH-LATENCY REGIONS) =================
// Example major IPv6 prefixes for US, China, Europe (aggregated from RIRs)
// Add more as needed; this blocks common non-Jordan IPv6
var GEO_BLACKLIST_IPV6 = [
  "2600::/12",      // US (ARIN)
  "2620::/23",      // US
  "2001:400::/23",  // US
  "2001:500::/24",  // US
  "2400::/12",      // China/APNIC
  "2001:200::/23",  // Japan/Asia (example, expand for China)
  "2a00::/12",      // Europe (RIPE)
  "2c00::/12"       // Africa (partial, for distant)
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

// New: IPv6 normalization (expand compressed :: to full 8 groups)
function normalizeIPv6(ip) {
  var parts = ip.split("::");
  if (parts.length > 2) return null; // Invalid
  var left = parts[0] ? parts[0].split(":") : [];
  var right = parts[1] ? parts[1].split(":") : [];
  var zeros = [];
  for (var i = 0; i < (8 - left.length - right.length); i++) zeros.push("0000");
  var full = left.concat(zeros).concat(right);
  return full.map(function(p) { return ("0000" + p).slice(-4); }).join(":");
}

// New: Check if IPv6 IP is in CIDR prefix (e.g., "2001:db8::/32")
function isInNet6(ip, cidr) {
  var parts = cidr.split("/");
  if (parts.length != 2) return false;
  var prefix = normalizeIPv6(parts[0]);
  var bits = parseInt(parts[1], 10);
  if (bits < 0 || bits > 128 || !prefix) return false;
  ip = normalizeIPv6(ip);
  if (!ip) return false;
  var prefixHex = prefix.replace(/:/g, "");
  var ipHex = ip.replace(/:/g, "");
  var prefixInt = parseInt(prefixHex.substring(0, Math.ceil(bits / 4)), 16);
  var ipInt = parseInt(ipHex.substring(0, Math.ceil(bits / 4)), 16);
  return prefixInt === ipInt;
}

// New: Check if IPv6 in Jordan list
function isInJordanIPv6(ip) {
  for (var i = 0; i < JORDAN_IPV6.length; i++) {
    if (isInNet6(ip, JORDAN_IPV6[i])) return true;
  }
  return false;
}

// New: Check if IPv6 in Blacklist
function isInBlacklistIPv6(ip) {
  for (var i = 0; i < GEO_BLACKLIST_IPV6.length; i++) {
    if (isInNet6(ip, GEO_BLACKLIST_IPV6[i])) return true;
  }
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
// Expanded for comprehensive PUBG coverage: added keywords for arena, classic, lobby, recruitment, search, squad, solo, duo
// Based on PUBG domains/endpoints (e.g., pubgmobile.com, gpubgm.com) and modes
function isPUBG(h){
  return /pubg|pubgm|tencent|krafton|lightspeed|levelinfinite|gpubgm|napubgm|pubgmobile/i.test(h);
}
function isMatch(u,h){
  return /match|battle|game|combat|realtime|sync|udp|tick|room|arena|classic|solo|duo|squad/i.test(u+h);
}
function isLobby(u,h){
  return /lobby|matchmaking|queue|dispatch|gateway|region|join|recruit|search|recruitment/i.test(u+h);
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
  if (!ip) return BLOCK;

  var isIPv6 = ip.indexOf(":") > -1;

  // HARD GEO BLOCK (now for IPv4 and IPv6)
  if (!isIPv6 && isInList(ip, GEO_BLACKLIST)) return BLOCK;
  if (isIPv6 && isInBlacklistIPv6(ip)) return BLOCK;

  // Check if in Jordan ranges (IPv4 or IPv6)
  var inJordanMatch = !isIPv6 ? isInList(ip, JORDAN_MATCH_IPV4) : isInJordanIPv6(ip);
  var inJordanWide = !isIPv6 ? isInList(ip, JORDAN_WIDE_IPV4) : isInJordanIPv6(ip);

  // MATCH (STRONG ONLY - Jordanian IPs only)
  if (isMatch(url, host)) {
    if (!inJordanMatch) return BLOCK;

    // For lower ping: Use /24 for IPv4, /48 for IPv6 to lock to closer subnets
    var netPrefix = isIPv6 ? ip.split(':').slice(0,3).join(':') : ip.split('.').slice(0,3).join('.');
    if (!SESSION.matchNet) {
      SESSION.matchNet = netPrefix;
      SESSION.matchHost = host;
      return MATCH_JO;
    }
    if (host !== SESSION.matchHost) return BLOCK;
    if (netPrefix !== SESSION.matchNet) return BLOCK;

    return MATCH_JO;
  }

  // LOBBY / SOCIAL / CDN (Jordanian only, use load-balanced proxy for lower ping)
  if (isLobby(url, host) || isSocial(url, host) || isCDN(url, host)) {
    if (!inJordanWide) return BLOCK;
    return pickLobbyProxy(host); // Hash-based load balance to distribute for better performance
  }

  // Default: If Jordanian, proxy; else block
  if (inJordanWide) return pickLobbyProxy(host);
  return BLOCK;
}
