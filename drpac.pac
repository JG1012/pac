function FindProxyForURL(url, host) {
    // Allow these domains
    if (dnsDomainIs(host, ".google.com") ||
        dnsDomainIs(host, ".salesforce.com") ||
        dnsDomainIs(host, ".microsoft.com") ||
        dnsDomainIs(host, ".hanuman.com") ||
        dnsDomainIs(host, ".flipkart.com") ||
        dnsDomainIs(host, ".zscaler.com")) {
        return "DIRECT";
    }
/* Default Block Statement to block anything not allowed above */
return drop;   
}
