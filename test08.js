(function() {
    var s = {};
    (function() {
        var e = {};
        /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */
        var f = this || self;
        var g, k;
        a: {
            for (var l = ["CLOSURE_FLAGS"], p = f, q = 0; q < l.length; q++)
                if (p = p[l[q]],
                p == null) {
                    k = null;
                    break a
                }
            k = p
        }
        var r = k && k[610401301];
        g = r != null ? r : !1;
        var t, v = f.navigator;
        t = v ? v.userAgentData || null : null;
        function w(d) {
            return g ? t ? t.brands.some(function(a) {
                return (a = a.brand) && a.indexOf(d) != -1
            }) : !1 : !1
        }
        function x(d) {
            var a;
            a: {
                if (a = f.navigator)
                    if (a = a.userAgent)
                        break a;
                a = ""
            }
            return a.indexOf(d) != -1
        }
        ;function y() {
            return g ? !!t && t.brands.length > 0 : !1
        }
        function z() {
            return y() ? w("Chromium") : (x("Chrome") || x("CriOS")) && !(y() ? 0 : x("Edge")) || x("Silk")
        }
        ;!x("Android") || z();
        z();
        !x("Safari") || z() || (y() ? 0 : x("Coast")) || (y() ? 0 : x("Opera")) || (y() ? 0 : x("Edge")) || (y() ? w("Microsoft Edge") : x("Edg/")) || y() && w("Opera");
        var A = /#|$/;
        function B(d) {
            var a = d.search(A), b;
            a: {
                for (b = 0; (b = d.indexOf("fmt", b)) >= 0 && b < a; ) {
                    var c = d.charCodeAt(b - 1);
                    if (c == 38 || c == 63)
                        if (c = d.charCodeAt(b + 3),
                        !c || c == 61 || c == 38 || c == 35)
                            break a;
                    b += 4
                }
                b = -1
            }
            if (b < 0)
                return null;
            c = d.indexOf("&", b);
            if (c < 0 || c > a)
                c = a;
            return decodeURIComponent(d.slice(b + 4, c !== -1 ? c : 0).replace(/\+/g, " "))
        }
        ;function C(d, a, b) {
            function c() {
                --D;
                if (D <= 0) {
                    var h;
                    (h = d.GooglebQhCsO) || (h = {});
                    var E = h[a];
                    E && (delete h[a],
                    (h = E[0]) && h.call && h())
                }
            }
            for (var D = b.length + 1, u = 0; u < b.length; u++) {
                var m = Number(B(b[u]))
                  , n = null;
                m !== 1 && m !== 2 || !(m = d.document.getElementById("goog_conv_iframe")) || m.src || (n = m);
                n || (n = new Image);
                n.onload = c;
                n.src = b[u]
            }
            c()
        }
        var F = ["ss_"]
          , G = s || f;
        F[0]in G || typeof G.execScript == "undefined" || G.execScript("var " + F[0]);
        for (var H; F.length && (H = F.shift()); )
            F.length || C === void 0 ? G[H] && G[H] !== Object.prototype[H] ? G = G[H] : G = G[H] = {} : G[H] = C;
    }
    ).call(this);
    ;s.ss_(window, 'OjE3MjQzMjE0NzIzMTY', ['https://www.google.com/pagead/1p-user-list/1055501650/?random\x3d1724321472316\x26cv\x3d11\x26fst\x3d1724320800000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45je48j0v888112008z8832537482za200zb832537482\x26gcd\x3d13l3l3l3l1l1\x26dma\x3d0\x26tag_exp\x3d0\x26u_w\x3d1920\x26u_h\x3d1080\x26url\x3dhttps%3A%2F%2Fwww.domains.co.za%2Flogin%2Fdashboard\x26ref\x3dhttps%3A%2F%2Fwww.domains.co.za%2Fclient%2Fservices%2Fdomains\x26hn\x3dwww.googleadservices.com\x26frm\x3d0\x26tiba\x3dDomains%20%7C%20Web%20Hosting%20%7C%20Cloud%20Servers%20Hosting%20%7C%20Reseller%20Hosting%20%7C%20Reseller%20Domains%20%7C%20SSL%20Certificates%20%7C%20Domains%20South%20Africa%20%7C%20Web%20Hosting%20South%20Africa%20-%20Domains.co.za\x26npa\x3d0\x26pscdl\x3dnoapi\x26auid\x3d634043191.1724310509\x26uaa\x3dx86\x26uab\x3d64\x26uafvl\x3dNot)A%253BBrand%3B99.0.0.0%7CGoogle%2520Chrome%3B127.0.6533.120%7CChromium%3B127.0.6533.120\x26uamb\x3d0\x26uam\x3d\x26uap\x3dWindows\x26uapv\x3d15.0.0\x26uaw\x3d0\x26fledge\x3d1\x26data\x3devent%3Dgtag.config\x26rfmt\x3d3\x26fmt\x3d3\x26is_vtc\x3d1\x26cid\x3dCAQSGwDpaXnfHtmOcL_XX5g58pDJu-V73WavAQ_FxA\x26random\x3d2723671214\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.za/pagead/1p-user-list/1055501650/?random\x3d1724321472316\x26cv\x3d11\x26fst\x3d1724320800000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45je48j0v888112008z8832537482za200zb832537482\x26gcd\x3d13l3l3l3l1l1\x26dma\x3d0\x26tag_exp\x3d0\x26u_w\x3d1920\x26u_h\x3d1080\x26url\x3dhttps%3A%2F%2Fwww.domains.co.za%2Flogin%2Fdashboard\x26ref\x3dhttps%3A%2F%2Fwww.domains.co.za%2Fclient%2Fservices%2Fdomains\x26hn\x3dwww.googleadservices.com\x26frm\x3d0\x26tiba\x3dDomains%20%7C%20Web%20Hosting%20%7C%20Cloud%20Servers%20Hosting%20%7C%20Reseller%20Hosting%20%7C%20Reseller%20Domains%20%7C%20SSL%20Certificates%20%7C%20Domains%20South%20Africa%20%7C%20Web%20Hosting%20South%20Africa%20-%20Domains.co.za\x26npa\x3d0\x26pscdl\x3dnoapi\x26auid\x3d634043191.1724310509\x26uaa\x3dx86\x26uab\x3d64\x26uafvl\x3dNot)A%253BBrand%3B99.0.0.0%7CGoogle%2520Chrome%3B127.0.6533.120%7CChromium%3B127.0.6533.120\x26uamb\x3d0\x26uam\x3d\x26uap\x3dWindows\x26uapv\x3d15.0.0\x26uaw\x3d0\x26fledge\x3d1\x26data\x3devent%3Dgtag.config\x26rfmt\x3d3\x26fmt\x3d3\x26is_vtc\x3d1\x26cid\x3dCAQSGwDpaXnfHtmOcL_XX5g58pDJu-V73WavAQ_FxA\x26random\x3d2723671214\x26rmt_tld\x3d1\x26ipr\x3dy'], []);
}
)();
