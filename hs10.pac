function FindProxyForURL(url, host){
    var resolved_ip = dnsResolve(host);
    if(isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") ||
        isInNet(resolved_ip, "172.16.0.0", "255.240.0.0") ||
        isInNet(resolved_ip, "192.168.0.0", "255.255.0.0"))
        return "DIRECT";
    return "PROXY 192.168.1.10:10808; SOCKS 192.168.1.10:10809; DIRECT";
}
