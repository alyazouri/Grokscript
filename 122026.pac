// DNS *82.212.106.11 and *212.35.72.10

// ================= PROXIES =================
var MATCH_PROXY = "PROXY 46.185.131.218:20001";
var LOBBY_PROXY = "PROXY 46.185.131.218:443";
var FALLBACK = "DIRECT";

// ================= JORDAN IPv4 SET =================
var JORDAN_IPV4 = [
  ["46.185.128.0","255.255.128.0"],
  ["176.29.0.0","255.255.0.0"],
  ["82.212.64.0","255.255.192.0"],
  ["86.108.0.0","255.255.128.0"],
  ["92.253.0.0","255.255.128.0"],
  ["188.247.64.0","255.255.224.0"]
];

// ================= SESSION DNS CACHE =================
var SESSION = {
  matchHost: null,
  dnsCache: {}
};

// ================= HELPERS =================
function normHost(host) {
  var i = host.indexOf(":");
  return i > -1 ? host.substring(0, i) : host;
}

function resolveIP(host) {
  if (SESSION.dnsCache[host]) return SESSION.dnsCache[host];
  var ip = dnsResolve(host);
  if (ip) SESSION.dnsCache[host] = ip;
  return ip;
}

function inList(ip, list) {
  for (var i = 0; i < list.length; i++) {
    if (isInNet(ip, list[i][0], list[i][1])) return true;
  }
  return false;
}

// ================= DETECTORS =================
function isPUBGHost(host) {
  return /pubg|pubgm|tencent|krafton|lightspeed|levelinfinite/i.test(host);
}

function isMatchTraffic(url, host) {
  return /match|battle|udp|realtime|sync|room|tick/i.test(url + host);
}

function isLobbyTraffic(url, host) {
  return /lobby|matchmaking|queue|gateway|dispatch|region|join/i.test(url + host);
}

function isCDNTraffic(url, host) {
  return /cdn|asset|resource|patch|update|media/i.test(url + host);
}

// ================= MAIN PAC =================
function FindProxyForURL(url, host) {
  host = normHost(host.toLowerCase());

  // 1) Non PUBG traffic => DIRECT
  if (!isPUBGHost(host)) {
    return FALLBACK;
  }

  // 2) Resolve host -> IP
  var ip = resolveIP(host);
  if (!ip) return FALLBACK; // iOS safety

  // 3) Game match traffic (pin on first match)
  if (isMatchTraffic(url, host)) {
    if (!SESSION.matchHost) {
      SESSION.matchHost = host;
    }
    return MATCH_PROXY;
  }

  // 4) Lobby / social / matchmaking / region
  if (isLobbyTraffic(url, host) || isCDNTraffic(url, host)) {
    if (inList(ip, JORDAN_IPV4)) {
      return LOBBY_PROXY;
    }
    return FALLBACK; 
  }

  // 5) Default fallback for other PUBG resources
  return LOBBY_PROXY;
}
