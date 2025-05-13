function FindProxyForURL(url, host) {
var drop = "BLOCK";
/* Return DIRECT to Allow access */
if ((localHostOrDomainIs(host, "google.com")) ||
(localHostOrDomainIs(host, "salesforce.com")) ||
(localHostOrDomainIs(host, "microsoft.com")) ||
(localHostOrDomainIs(host, "www.hanuman.com")) ||
(localHostOrDomainIs(host, "www.flipkart.com")) ||
(localHostOrDomainIs(host, "zscaler.com")) )
return "DIRECT";
/* Default Block Statement to block anything not allowed above */
return drop;      
