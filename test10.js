/*!
 * Dashmix - v3.0.0
 * @author pixelcave - https://pixelcave.com
 * Copyright (c) 2020
 */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(x, e) {
    "use strict";
    function g(e) {
        return null != e && e === e.window
    }
    var t = []
      , i = Object.getPrototypeOf
      , a = t.slice
      , m = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , l = t.push
      , r = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , s = v.toString
      , c = s.call(Object)
      , y = {}
      , b = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , T = x.document
      , u = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function _(e, t, n) {
        var i, r, o = (n = n || T).createElement("script");
        if (o.text = e,
        t)
            for (i in u)
                (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1"
      , C = function(e, t) {
        return new C.fn.init(e,t)
    };
    function h(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: f,
        constructor: C,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(C.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(C.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    },
    C.extend = C.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || b(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    i = e[t],
                    "__proto__" !== t && s !== i && (c && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t],
                    o = r && !Array.isArray(n) ? [] : r || C.isPlainObject(n) ? n : {},
                    r = !1,
                    s[t] = C.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    C.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = i(e)) && ("function" != typeof (n = v.call(t, "constructor") && t.constructor) || s.call(n) !== c))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            _(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (h(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                !t(e[r], r) != s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0, s = [];
            if (h(e))
                for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e)
                    null != (r = t(e[o], o, n)) && s.push(r);
            return m(s)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]),
    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        function f(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }
        function r() {
            E()
        }
        var e, d, _, o, s, p, h, g, w, l, c, E, x, a, T, m, u, v, y, C = "sizzle" + +new Date, b = n.document, S = 0, i = 0, A = le(), k = le(), O = le(), N = le(), D = function(e, t) {
            return e === t && (c = !0),
            0
        }, j = {}.hasOwnProperty, t = [], L = t.pop, I = t.push, M = t.push, R = t.slice, P = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", H = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", F = "\\[" + H + "*(" + W + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + H + "*\\]", B = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", z = new RegExp(H + "+","g"), $ = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$","g"), V = new RegExp("^" + H + "*," + H + "*"), U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"), Q = new RegExp(H + "|>"), Y = new RegExp(B), X = new RegExp("^" + W + "$"), G = {
            ID: new RegExp("^#(" + W + ")"),
            CLASS: new RegExp("^\\.(" + W + ")"),
            TAG: new RegExp("^(" + W + "|[*])"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + B),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)","i"),
            bool: new RegExp("^(?:" + q + ")$","i"),
            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)","i")
        }, K = /HTML$/i, J = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, ee = /^[^{]+\{\s*\[native \w/, te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ne = /[+~]/, ie = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])","g"), re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, se = ye(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            M.apply(t = R.call(b.childNodes), b.childNodes),
            t[b.childNodes.length].nodeType
        } catch (e) {
            M = {
                apply: t.length ? function(e, t) {
                    I.apply(e, R.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function ae(e, t, n, i) {
            var r, o, s, a, l, c, u, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!i && (E(t),
            t = t || x,
            T)) {
                if (11 !== h && (l = te.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(r)))
                                return n;
                            if (s.id === r)
                                return n.push(s),
                                n
                        } else if (f && (s = f.getElementById(r)) && y(t, s) && s.id === r)
                            return n.push(s),
                            n
                    } else {
                        if (l[2])
                            return M.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = l[3]) && d.getElementsByClassName && t.getElementsByClassName)
                            return M.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (d.qsa && !N[e + " "] && (!m || !m.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                    if (u = e,
                    f = t,
                    1 === h && (Q.test(e) || U.test(e))) {
                        for ((f = ne.test(e) && ge(t.parentNode) || t) === t && d.scope || ((a = t.getAttribute("id")) ? a = a.replace(re, oe) : t.setAttribute("id", a = C)),
                        o = (c = p(e)).length; o--; )
                            c[o] = (a ? "#" + a : ":scope") + " " + ve(c[o]);
                        u = c.join(",")
                    }
                    try {
                        return M.apply(n, f.querySelectorAll(u)),
                        n
                    } catch (t) {
                        N(e, !0)
                    } finally {
                        a === C && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace($, "$1"), t, n, i)
        }
        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > _.cacheLength && delete e[i.shift()],
                e[t + " "] = n
            }
        }
        function ce(e) {
            return e[C] = !0,
            e
        }
        function ue(e) {
            var t = x.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                _.attrHandle[n[i]] = t
        }
        function he(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function pe(s) {
            return ce(function(o) {
                return o = +o,
                ce(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--; )
                        e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = ae.support = {},
        s = ae.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !K.test(t || n && n.nodeName || "HTML")
        }
        ,
        E = ae.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : b;
            return i != x && 9 === i.nodeType && i.documentElement && (a = (x = i).documentElement,
            T = !s(x),
            b != x && (n = x.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)),
            d.scope = ue(function(e) {
                return a.appendChild(e).appendChild(x.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ue(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ue(function(e) {
                return e.appendChild(x.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = ee.test(x.getElementsByClassName),
            d.getById = ue(function(e) {
                return a.appendChild(e).id = C,
                !x.getElementsByName || !x.getElementsByName(C).length
            }),
            d.getById ? (_.filter.ID = function(e) {
                var t = e.replace(ie, f);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            _.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && T) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (_.filter.ID = function(e) {
                var n = e.replace(ie, f);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            _.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && T) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            _.find.TAG = d.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" !== e)
                    return o;
                for (; n = o[r++]; )
                    1 === n.nodeType && i.push(n);
                return i
            }
            ,
            _.find.CLASS = d.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && T)
                    return t.getElementsByClassName(e)
            }
            ,
            u = [],
            m = [],
            (d.qsa = ee.test(x.querySelectorAll)) && (ue(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + q + ")"),
                e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="),
                (t = x.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || m.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                m.push("[\\r\\n\\f]")
            }),
            ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = x.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (d.matchesSelector = ee.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                d.disconnectedMatch = v.call(e, "*"),
                v.call(e, "[s!='']:x"),
                u.push("!=", B)
            }),
            m = m.length && new RegExp(m.join("|")),
            u = u.length && new RegExp(u.join("|")),
            t = ee.test(a.compareDocumentPosition),
            y = t || ee.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == x || e.ownerDocument == b && y(b, e) ? -1 : t == x || t.ownerDocument == b && y(b, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!r || !o)
                    return e == x ? -1 : t == x ? 1 : r ? -1 : o ? 1 : l ? P(l, e) - P(l, t) : 0;
                if (r === o)
                    return he(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? he(s[i], a[i]) : s[i] == b ? -1 : a[i] == b ? 1 : 0
            }
            ),
            x
        }
        ,
        ae.matches = function(e, t) {
            return ae(e, null, null, t)
        }
        ,
        ae.matchesSelector = function(e, t) {
            if (E(e),
            d.matchesSelector && T && !N[t + " "] && (!u || !u.test(t)) && (!m || !m.test(t)))
                try {
                    var n = v.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < ae(t, x, null, [e]).length
        }
        ,
        ae.contains = function(e, t) {
            return (e.ownerDocument || e) != x && E(e),
            y(e, t)
        }
        ,
        ae.attr = function(e, t) {
            (e.ownerDocument || e) != x && E(e);
            var n = _.attrHandle[t.toLowerCase()]
              , i = n && j.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
            return void 0 !== i ? i : d.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        ae.escape = function(e) {
            return (e + "").replace(re, oe)
        }
        ,
        ae.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ae.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (c = !d.detectDuplicates,
            l = !d.sortStable && e.slice(0),
            e.sort(D),
            c) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return l = null,
            e
        }
        ,
        o = ae.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += o(t);
            return n
        }
        ,
        (_ = ae.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ie, f),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ie, f),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ie, f).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = A[e + " "];
                    return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && A(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, i, r) {
                    return function(e) {
                        var t = ae.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "",
                        "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(z, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(p, e, t, g, m) {
                    var v = "nth" !== p.slice(0, 3)
                      , y = "last" !== p.slice(-4)
                      , b = "of-type" === e;
                    return 1 === g && 0 === m ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var i, r, o, s, a, l, c = v != y ? "nextSibling" : "previousSibling", u = e.parentNode, f = b && e.nodeName.toLowerCase(), h = !n && !b, d = !1;
                        if (u) {
                            if (v) {
                                for (; c; ) {
                                    for (s = e; s = s[c]; )
                                        if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType)
                                            return !1;
                                    l = c = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? u.firstChild : u.lastChild],
                            y && h) {
                                for (d = (a = (i = (r = (o = (s = u)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2],
                                s = a && u.childNodes[a]; s = ++a && s && s[c] || (d = a = 0) || l.pop(); )
                                    if (1 === s.nodeType && ++d && s === e) {
                                        r[p] = [S, a, d];
                                        break
                                    }
                            } else if (h && (d = a = (i = (r = (o = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]),
                            !1 === d)
                                for (; (s = ++a && s && s[c] || (d = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (h && ((r = (o = s[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [S, d]),
                                s !== e)); )
                                    ;
                            return (d -= m) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return s[C] ? s(o) : 1 < s.length ? (t = [e, e, "", o],
                    _.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
                        for (var n, i = s(e, o), r = i.length; r--; )
                            e[n = P(e, i[r])] = !(t[n] = i[r])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: ce(function(e) {
                    var i = []
                      , r = []
                      , a = h(e.replace($, "$1"));
                    return a[C] ? ce(function(e, t, n, i) {
                        for (var r, o = a(e, null, i, []), s = e.length; s--; )
                            (r = o[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, t, n) {
                        return i[0] = e,
                        a(i, null, n, r),
                        i[0] = null,
                        !r.pop()
                    }
                }),
                has: ce(function(t) {
                    return function(e) {
                        return 0 < ae(t, e).length
                    }
                }),
                contains: ce(function(t) {
                    return t = t.replace(ie, f),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: ce(function(n) {
                    return X.test(n || "") || ae.error("unsupported lang: " + n),
                    n = n.replace(ie, f).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return Z.test(e.nodeName)
                },
                input: function(e) {
                    return J.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: pe(function() {
                    return [0]
                }),
                last: pe(function(e, t) {
                    return [t - 1]
                }),
                eq: pe(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: pe(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: pe(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: pe(function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: pe(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = _.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            _.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            _.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function me() {}
        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ye(a, e, t) {
            var l = e.dir
              , c = e.next
              , u = c || l
              , f = t && "parentNode" === u
              , h = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l]; )
                    if (1 === e.nodeType || f)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var i, r, o, s = [S, h];
                if (n) {
                    for (; e = e[l]; )
                        if ((1 === e.nodeType || f) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[l]; )
                        if (1 === e.nodeType || f)
                            if (r = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            c && c === e.nodeName.toLowerCase())
                                e = e[l] || e;
                            else {
                                if ((i = r[u]) && i[0] === S && i[1] === h)
                                    return s[2] = i[2];
                                if ((r[u] = s)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function be(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--; )
                    if (!r[i](e, t, n))
                        return !1;
                return !0
            }
            : r[0]
        }
        function _e(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                c && t.push(a)));
            return s
        }
        function we(e) {
            for (var r, t, n, i = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = ye(function(e) {
                return e === r
            }, s, !0), c = ye(function(e) {
                return -1 < P(r, e)
            }, s, !0), u = [function(e, t, n) {
                var i = !o && (n || t !== w) || ((r = t).nodeType ? l : c)(e, t, n);
                return r = null,
                i
            }
            ]; a < i; a++)
                if (t = _.relative[e[a].type])
                    u = [ye(be(u), t)];
                else {
                    if ((t = _.filter[e[a].type].apply(null, e[a].matches))[C]) {
                        for (n = ++a; n < i && !_.relative[e[n].type]; n++)
                            ;
                        return function e(d, p, g, m, v, t) {
                            return m && !m[C] && (m = e(m)),
                            v && !v[C] && (v = e(v, t)),
                            ce(function(e, t, n, i) {
                                var r, o, s, a = [], l = [], c = t.length, u = e || function(e, t, n) {
                                    for (var i = 0, r = t.length; i < r; i++)
                                        ae(e, t[i], n);
                                    return n
                                }(p || "*", n.nodeType ? [n] : n, []), f = !d || !e && p ? u : _e(u, a, d, n, i), h = g ? v || (e ? d : c || m) ? [] : t : f;
                                if (g && g(f, h, n, i),
                                m)
                                    for (r = _e(h, l),
                                    m(r, [], n, i),
                                    o = r.length; o--; )
                                        (s = r[o]) && (h[l[o]] = !(f[l[o]] = s));
                                if (e) {
                                    if (v || d) {
                                        if (v) {
                                            for (r = [],
                                            o = h.length; o--; )
                                                (s = h[o]) && r.push(f[o] = s);
                                            v(null, h = [], r, i)
                                        }
                                        for (o = h.length; o--; )
                                            (s = h[o]) && -1 < (r = v ? P(e, s) : a[o]) && (e[r] = !(t[r] = s))
                                    }
                                } else
                                    h = _e(h === t ? h.splice(c, h.length) : h),
                                    v ? v(null, t, h, i) : M.apply(t, h)
                            })
                        }(1 < a && be(u), 1 < a && ve(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace($, "$1"), t, a < n && we(e.slice(a, n)), n < i && we(e = e.slice(n)), n < i && ve(e))
                    }
                    u.push(t)
                }
            return be(u)
        }
        return me.prototype = _.filters = _.pseudos,
        _.setFilters = new me,
        p = ae.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            a = [],
            l = _.preFilter; s; ) {
                for (o in n && !(i = V.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                a.push(r = [])),
                n = !1,
                (i = U.exec(s)) && (n = i.shift(),
                r.push({
                    value: n,
                    type: i[0].replace($, " ")
                }),
                s = s.slice(n.length)),
                _.filter)
                    !(i = G[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(),
                    r.push({
                        value: n,
                        type: o,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? ae.error(e) : k(e, a).slice(0)
        }
        ,
        h = ae.compile = function(e, t) {
            var n, m, v, y, b, i, r = [], o = [], s = O[e + " "];
            if (!s) {
                for (n = (t = t || p(e)).length; n--; )
                    (s = we(t[n]))[C] ? r.push(s) : o.push(s);
                (s = O(e, (m = o,
                y = 0 < (v = r).length,
                b = 0 < m.length,
                i = function(e, t, n, i, r) {
                    var o, s, a, l = 0, c = "0", u = e && [], f = [], h = w, d = e || b && _.find.TAG("*", r), p = S += null == h ? 1 : Math.random() || .1, g = d.length;
                    for (r && (w = t == x || t || r); c !== g && null != (o = d[c]); c++) {
                        if (b && o) {
                            for (s = 0,
                            t || o.ownerDocument == x || (E(o),
                            n = !T); a = m[s++]; )
                                if (a(o, t || x, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (S = p)
                        }
                        y && ((o = !a && o) && l--,
                        e && u.push(o))
                    }
                    if (l += c,
                    y && c !== l) {
                        for (s = 0; a = v[s++]; )
                            a(u, f, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--; )
                                    u[c] || f[c] || (f[c] = L.call(i));
                            f = _e(f)
                        }
                        M.apply(i, f),
                        r && !e && 0 < f.length && 1 < l + v.length && ae.uniqueSort(i)
                    }
                    return r && (S = p,
                    w = h),
                    u
                }
                ,
                y ? ce(i) : i))).selector = e
            }
            return s
        }
        ,
        g = ae.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e, u = !i && p(e = c.selector || e);
            if (n = n || [],
            1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && T && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(s.matches[0].replace(ie, f), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = G.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                !_.relative[a = s.type]); )
                    if ((l = _.find[a]) && (i = l(s.matches[0].replace(ie, f), ne.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        !(e = i.length && ve(o)))
                            return M.apply(n, i),
                            n;
                        break
                    }
            }
            return (c || h(e, u))(i, t, !T, n, !t || ne.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = C.split("").sort(D).join("") === C,
        d.detectDuplicates = !!c,
        E(),
        d.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(x.createElement("fieldset"))
        }),
        ue(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ue(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(q, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        ae
    }(x);
    C.find = d,
    C.expr = d.selectors,
    C.expr[":"] = C.expr.pseudos,
    C.uniqueSort = C.unique = d.uniqueSort,
    C.text = d.getText,
    C.isXMLDoc = d.isXML,
    C.contains = d.contains,
    C.escapeSelector = d.escape;
    function p(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && C(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
    function E(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var S = C.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function O(e, n, i) {
        return b(n) ? C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? C.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? C.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : C.filter(n, e, i)
    }
    C.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    C.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (C.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                C.find(e, r[t], n);
            return 1 < i ? C.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(O(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(O(this, e || [], !0))
        },
        is: function(e) {
            return !!O(this, "string" == typeof e && S.test(e) ? C(e) : e || [], !1).length
        }
    });
    var N, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || N,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !i[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof C ? t[0] : t,
            C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)),
            k.test(i[1]) && C.isPlainObject(t))
                for (i in t)
                    b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = T.getElementById(i[2])) && (this[0] = r,
        this.length = 1),
        this
    }
    ).prototype = C.fn,
    N = C(T);
    var j = /^(?:parents|prev(?:Until|All))/
      , L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function I(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && C(e);
            if (!S.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return p(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return p(e, "parentNode", n)
        },
        next: function(e) {
            return I(e, "nextSibling")
        },
        prev: function(e) {
            return I(e, "previousSibling")
        },
        nextAll: function(e) {
            return p(e, "nextSibling")
        },
        prevAll: function(e) {
            return p(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return p(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return p(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            C.merge([], e.childNodes))
        }
    }, function(i, r) {
        C.fn[i] = function(e, t) {
            var n = C.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = C.filter(t, n)),
            1 < this.length && (L[i] || C.uniqueSort(n),
            j.test(i) && n.reverse()),
            this.pushStack(n)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function P(e) {
        throw e
    }
    function q(e, t, n, i) {
        var r;
        try {
            e && b(r = e.promise) ? r.call(e).done(t).fail(n) : e && b(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    C.Callbacks = function(i) {
        var n;
        i = "string" == typeof i ? (n = {},
        C.each(i.match(M) || [], function(e, t) {
            n[t] = !0
        }),
        n) : C.extend({}, i);
        function r() {
            for (s = s || i.once,
            t = o = !0; l.length; c = -1)
                for (e = l.shift(); ++c < a.length; )
                    !1 === a[c].apply(e[0], e[1]) && i.stopOnFalse && (c = a.length,
                    e = !1);
            i.memory || (e = !1),
            o = !1,
            s && (a = e ? [] : "")
        }
        var o, e, t, s, a = [], l = [], c = -1, u = {
            add: function() {
                return a && (e && !o && (c = a.length - 1,
                l.push(e)),
                function n(e) {
                    C.each(e, function(e, t) {
                        b(t) ? i.unique && u.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                e && !o && r()),
                this
            },
            remove: function() {
                return C.each(arguments, function(e, t) {
                    for (var n; -1 < (n = C.inArray(t, a, n)); )
                        a.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < C.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a = a && [],
                this
            },
            disable: function() {
                return s = l = [],
                a = e = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return s = l = [],
                e || o || (a = e = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                o || r()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!t
            }
        };
        return u
    }
    ,
    C.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , s = {
                state: function() {
                    return r
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var r = arguments;
                    return C.Deferred(function(i) {
                        C.each(o, function(e, t) {
                            var n = b(r[t[4]]) && r[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        r = null
                    }).promise()
                },
                then: function(t, n, i) {
                    var l = 0;
                    function c(r, o, s, a) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(r < l)) {
                                    if ((e = s.apply(n, i)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    b(t) ? a ? t.call(e, c(l, o, R, a), c(l, o, P, a)) : (l++,
                                    t.call(e, c(l, o, R, a), c(l, o, P, a), c(l, o, R, o.notifyWith))) : (s !== R && (n = void 0,
                                    i = [e]),
                                    (a || o.resolveWith)(n, i))
                                }
                            }
                            var n = this
                              , i = arguments
                              , t = a ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= r + 1 && (s !== P && (n = void 0,
                                    i = [e]),
                                    o.rejectWith(n, i))
                                }
                            }
                            ;
                            r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()),
                            x.setTimeout(t))
                        }
                    }
                    return C.Deferred(function(e) {
                        o[0][3].add(c(0, e, b(i) ? i : R, e.notifyWith)),
                        o[1][3].add(c(0, e, b(t) ? t : R)),
                        o[2][3].add(c(0, e, b(n) ? n : P))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? C.extend(e, s) : s
                }
            }
              , a = {};
            return C.each(o, function(e, t) {
                var n = t[2]
                  , i = t[5];
                s[t[1]] = n.add,
                i && n.add(function() {
                    r = i
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    r[t] = this,
                    o[t] = 1 < arguments.length ? a.call(arguments) : e,
                    --n || s.resolveWith(r, o)
                }
            }
            var n = arguments.length
              , i = n
              , r = Array(i)
              , o = a.call(arguments)
              , s = C.Deferred();
            if (n <= 1 && (q(e, s.done(t(i)).resolve, s.reject, !n),
            "pending" === s.state() || b(o[i] && o[i].then)))
                return s.then();
            for (; i--; )
                q(o[i], t(i), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        x.console && x.console.warn && e && H.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    C.readyException = function(e) {
        x.setTimeout(function() {
            throw e
        })
    }
    ;
    var W = C.Deferred();
    function F() {
        T.removeEventListener("DOMContentLoaded", F),
        x.removeEventListener("load", F),
        C.ready()
    }
    C.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            C.readyException(e)
        }),
        this
    }
    ,
    C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || W.resolveWith(T, [C])
        }
    }),
    C.ready.then = W.then,
    "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? x.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", F),
    x.addEventListener("load", F));
    var B = function(e, t, n, i, r, o, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === w(n))
            for (a in r = !0,
            n)
                B(e, t, a, n[a], !0, o, s);
        else if (void 0 !== i && (r = !0,
        b(i) || (s = !0),
        c && (t = s ? (t.call(e, i),
        null) : (c = t,
        function(e, t, n) {
            return c.call(C(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }
      , z = /^-ms-/
      , $ = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase()
    }
    function U(e) {
        return e.replace(z, "ms-").replace($, V)
    }
    function Q(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function Y() {
        this.expando = C.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[U(t)] = n;
            else
                for (i in t)
                    r[U(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t))in i ? [t] : t.match(M) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var X = new Y
      , G = new Y
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , J = /[A-Z]/g;
    function Z(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : K.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                G.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    C.extend({
        hasData: function(e) {
            return G.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }),
    C.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0], s = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    G.set(this, n)
                }) : B(this, function(e) {
                    var t;
                    return o && void 0 === e ? void 0 !== (t = G.get(o, n)) || void 0 !== (t = Z(o, n)) ? t : void 0 : void this.each(function() {
                        G.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = G.get(o),
            1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--; )
                    s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = U(i.slice(5)),
                    Z(o, i, r[i]));
                X.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }),
    C.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = X.get(e, t),
                n && (!i || Array.isArray(n) ? i = X.access(e, t, C.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = C._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, function() {
                C.dequeue(e, t)
            }, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --r || o.resolveWith(s, [s])
            }
            var i, r = 1, o = C.Deferred(), s = this, a = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (i = X.get(s[a], e + "queueHooks")) && i.empty && (r++,
                i.empty.add(n));
            return n(),
            o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , ie = T.documentElement
      , re = function(e) {
        return C.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    ie.getRootNode && (re = function(e) {
        return C.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    function se(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === C.css(e, "display")
    }
    function ae(e, t, n, i) {
        var r, o, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return C.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (C.cssNumber[t] ? "" : "px"), u = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && te.exec(C.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2,
            c = c || u[3],
            u = +l || 1; s--; )
                C.style(e, t, u + c),
                (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                u /= o;
            u *= 2,
            C.style(e, t, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = r)),
        r
    }
    var le = {};
    function ce(e, t) {
        for (var n, i, r, o, s, a, l = [], c = 0, u = e.length; c < u; c++)
            (i = e[c]).style && (n = i.style.display,
            t ? ("none" === n && (l[c] = X.get(i, "display") || null,
            l[c] || (i.style.display = "")),
            "" === i.style.display && se(i) && (l[c] = (a = o = r = void 0,
            o = i.ownerDocument,
            s = i.nodeName,
            (a = le[s]) || (r = o.body.appendChild(o.createElement(s)),
            a = C.css(r, "display"),
            r.parentNode.removeChild(r),
            "none" === a && (a = "block"),
            le[s] = a)))) : "none" !== n && (l[c] = "none",
            X.set(i, "display", n)));
        for (c = 0; c < u; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    C.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var ue, fe = /^(?:checkbox|radio)$/i, he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, de = /^$|^module$|\/(?:java|ecma)script/i, pe = T.createDocumentFragment().appendChild(T.createElement("div"));
    (ue = T.createElement("input")).setAttribute("type", "radio"),
    ue.setAttribute("checked", "checked"),
    ue.setAttribute("name", "t"),
    pe.appendChild(ue),
    y.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked,
    pe.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue,
    pe.innerHTML = "<option></option>",
    y.option = !!pe.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function me(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && A(e, t) ? C.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;
    function be(e, t, n, i, r) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    C.merge(h, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")),
                    a = (he.exec(o) || ["", ""])[1].toLowerCase(),
                    l = ge[a] || ge._default,
                    s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                    u = l[0]; u--; )
                        s = s.lastChild;
                    C.merge(h, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    h.push(t.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = h[d++]; )
            if (i && -1 < C.inArray(o, i))
                r && r.push(o);
            else if (c = re(o),
            s = me(f.appendChild(o), "script"),
            c && ve(s),
            n)
                for (u = 0; o = s[u++]; )
                    de.test(o.type || "") && n.push(o);
        return f
    }
    var _e = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ee = /^([^.]*)(?:\.(.+)|)/;
    function xe() {
        return !0
    }
    function Te() {
        return !1
    }
    function Ce(e, t) {
        return e === function() {
            try {
                return T.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Se(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Se(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = Te;
        else if (!r)
            return e;
        return 1 === o && (s = r,
        (r = function(e) {
            return C().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = C.guid++)),
        e.each(function() {
            C.event.add(this, t, r, i, n)
        })
    }
    function Ae(e, r, o) {
        o ? (X.set(e, r, !1),
        C.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = X.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (i.length)
                        (C.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (i = a.call(arguments),
                    X.set(this, r, i),
                    t = o(this, r),
                    this[r](),
                    i !== (n = X.get(this, r)) || t ? X.set(this, r, !1) : n = {},
                    i !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    i.length && (X.set(this, r, {
                        value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === X.get(e, r) && C.event.add(e, r, xe)
    }
    C.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, c, u, f, h, d, p, g, m = X.get(t);
            if (Q(t))
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && C.find.matchesSelector(ie, r),
                n.guid || (n.guid = C.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (s = m.handle) || (s = m.handle = function(e) {
                    return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                c = (e = (e || "").match(M) || [""]).length; c--; )
                    d = g = (a = Ee.exec(e[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    d && (f = C.event.special[d] || {},
                    d = (r ? f.delegateType : f.bindType) || d,
                    f = C.event.special[d] || {},
                    u = C.extend({
                        type: d,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && C.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o),
                    (h = l[d]) || ((h = l[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)),
                    f.add && (f.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    r ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                    C.event.global[d] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, h, d, p, g, m = X.hasData(e) && X.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(M) || [""]).length; c--; )
                    if (d = g = (a = Ee.exec(t[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = C.event.special[d] || {},
                        h = l[d = (i ? f.delegateType : f.bindType) || d] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = h.length; o--; )
                            u = h[o],
                            !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1),
                            u.selector && h.delegateCount--,
                            f.remove && f.remove.call(e, u));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || C.removeEvent(e, d, m.handle),
                        delete l[d])
                    } else
                        for (d in l)
                            C.event.remove(e, d + t[c], n, i, !0);
                C.isEmptyObject(l) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = new Array(arguments.length), l = C.event.fix(e), c = (X.get(this, "events") || Object.create(null))[l.type] || [], u = C.event.special[l.type] || {};
            for (a[0] = l,
            t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (l.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (s = C.event.handlers.call(this, l, c),
                t = 0; (r = s[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o,
                        l.data = o.data,
                        void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(),
                        l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l),
                l.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < C(r, this).index(c) : C.find(r, this, null, [c]).length),
                            s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", xe),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && A(t, "input") && X.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    C.Event = function(e, t) {
        if (!(this instanceof C.Event))
            return new C.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && C.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[C.expando] = !0
    }
    ,
    C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp),
    C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        C.event.special[e] = {
            setup: function() {
                return Ae(this, e, Ce),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }),
    C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        C.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = r),
                t
            }
        }
    }),
    C.fn.extend({
        on: function(e, t, n, i) {
            return Se(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Se(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Te),
                this.each(function() {
                    C.event.remove(this, e, n, t)
                });
            for (r in e)
                this.off(r, t, e[r]);
            return this
        }
    });
    var ke = /<script|<style|<link/i
      , Oe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function De(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }
    function je(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ie(e, t) {
        var n, i, r, o, s, a;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (a = X.get(e).events))
                for (r in X.remove(t, "handle events"),
                a)
                    for (n = 0,
                    i = a[r].length; n < i; n++)
                        C.event.add(t, r, a[r][n]);
            G.hasData(e) && (o = G.access(e),
            s = C.extend({}, o),
            G.set(t, s))
        }
    }
    function Me(n, i, r, o) {
        i = m(i);
        var e, t, s, a, l, c, u = 0, f = n.length, h = f - 1, d = i[0], p = b(d);
        if (p || 1 < f && "string" == typeof d && !y.checkClone && Oe.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                p && (i[0] = d.call(this, e, t.html())),
                Me(t, i, r, o)
            });
        if (f && (t = (e = be(i, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (a = (s = C.map(me(e, "script"), je)).length; u < f; u++)
                l = e,
                u !== h && (l = C.clone(l, !0, !0),
                a && C.merge(s, me(l, "script"))),
                r.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument,
                C.map(s, Le),
                u = 0; u < a; u++)
                    l = s[u],
                    de.test(l.type || "") && !X.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : _(l.textContent.replace(Ne, ""), l, c))
        }
        return n
    }
    function Re(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || C.cleanData(me(i)),
            i.parentNode && (n && re(i) && ve(me(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, c, u = e.cloneNode(!0), f = re(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (s = me(u),
                i = 0,
                r = (o = me(e)).length; i < r; i++)
                    a = o[i],
                    "input" === (c = (l = s[i]).nodeName.toLowerCase()) && fe.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e),
                    s = s || me(u),
                    i = 0,
                    r = o.length; i < r; i++)
                        Ie(o[i], s[i]);
                else
                    Ie(e, u);
            return 0 < (s = me(u, "script")).length && ve(s, !f && me(e, "script")),
            u
        },
        cleanData: function(e) {
            for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Q(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[X.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }),
    C.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Me(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Me(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = De(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (C.cleanData(me(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Me(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(me(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        C.fn[e] = function(e) {
            for (var t, n = [], i = C(e), r = i.length - 1, o = 0; o <= r; o++)
                t = o === r ? this : this.clone(!0),
                C(i[o])[s](t),
                l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function Pe(e, t, n) {
        var i, r, o = {};
        for (r in t)
            o[r] = e.style[r],
            e.style[r] = t[r];
        for (r in i = n.call(e),
        t)
            e.style[r] = o[r];
        return i
    }
    var qe, He, We, Fe, Be, ze, $e, Ve, Ue = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i"), Qe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = x),
        t.getComputedStyle(e)
    }, Ye = new RegExp(ne.join("|"),"i");
    function Xe(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || Qe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = C.style(e, t)),
        !y.pixelBoxStyles() && Ue.test(s) && Ye.test(t) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function Ge(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function Ke() {
        var e;
        Ve && ($e.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        Ve.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        ie.appendChild($e).appendChild(Ve),
        e = x.getComputedStyle(Ve),
        qe = "1%" !== e.top,
        ze = 12 === Je(e.marginLeft),
        Ve.style.right = "60%",
        Fe = 36 === Je(e.right),
        He = 36 === Je(e.width),
        Ve.style.position = "absolute",
        We = 12 === Je(Ve.offsetWidth / 3),
        ie.removeChild($e),
        Ve = null)
    }
    function Je(e) {
        return Math.round(parseFloat(e))
    }
    $e = T.createElement("div"),
    (Ve = T.createElement("div")).style && (Ve.style.backgroundClip = "content-box",
    Ve.cloneNode(!0).style.backgroundClip = "",
    y.clearCloneStyle = "content-box" === Ve.style.backgroundClip,
    C.extend(y, {
        boxSizingReliable: function() {
            return Ke(),
            He
        },
        pixelBoxStyles: function() {
            return Ke(),
            Fe
        },
        pixelPosition: function() {
            return Ke(),
            qe
        },
        reliableMarginLeft: function() {
            return Ke(),
            ze
        },
        scrollboxSize: function() {
            return Ke(),
            We
        },
        reliableTrDimensions: function() {
            var e, t, n, i;
            return null == Be && (e = T.createElement("table"),
            t = T.createElement("tr"),
            n = T.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px",
            t.style.height = "1px",
            n.style.height = "9px",
            ie.appendChild(e).appendChild(t).appendChild(n),
            i = x.getComputedStyle(t),
            Be = 3 < parseInt(i.height),
            ie.removeChild(e)),
            Be
        }
    }));
    var Ze = ["Webkit", "Moz", "ms"]
      , et = T.createElement("div").style
      , tt = {};
    function nt(e) {
        return C.cssProps[e] || tt[e] || (e in et ? e : tt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ze.length; n--; )
                if ((e = Ze[n] + t)in et)
                    return e
        }(e) || e)
    }
    var it = /^(none|table(?!-c[ea]).+)/
      , rt = /^--/
      , ot = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , st = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function at(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function lt(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += C.css(e, n + ne[s], !0, r)),
            i ? ("content" === n && (l -= C.css(e, "padding" + ne[s], !0, r)),
            "margin" !== n && (l -= C.css(e, "border" + ne[s] + "Width", !0, r))) : (l += C.css(e, "padding" + ne[s], !0, r),
            "padding" !== n ? l += C.css(e, "border" + ne[s] + "Width", !0, r) : a += C.css(e, "border" + ne[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
        l
    }
    function ct(e, t, n) {
        var i = Qe(e)
          , r = (!y.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i)
          , o = r
          , s = Xe(e, t, i)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ue.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!y.boxSizingReliable() && r || !y.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === C.css(e, "boxSizing", !1, i),
        (o = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) + lt(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }
    function ut(e, t, n, i, r) {
        return new ut.prototype.init(e,t,n,i,r)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Xe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = U(t), l = rt.test(t), c = e.style;
                if (l || (t = nt(a)),
                s = C.cssHooks[t] || C.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = ae(e, t, r),
                o = "number"),
                null != n && n == n && ("number" !== o || l || (n += r && r[3] || (C.cssNumber[a] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = U(t);
            return rt.test(t) || (t = nt(a)),
            (s = C.cssHooks[t] || C.cssHooks[a]) && "get"in s && (r = s.get(e, !0, n)),
            void 0 === r && (r = Xe(e, t, i)),
            "normal" === r && t in st && (r = st[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    C.each(["height", "width"], function(e, l) {
        C.cssHooks[l] = {
            get: function(e, t, n) {
                if (t)
                    return !it.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, l, n) : Pe(e, ot, function() {
                        return ct(e, l, n)
                    })
            },
            set: function(e, t, n) {
                var i, r = Qe(e), o = !y.scrollboxSize() && "absolute" === r.position, s = (o || n) && "border-box" === C.css(e, "boxSizing", !1, r), a = n ? lt(e, l, n, s, r) : 0;
                return s && o && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - lt(e, l, "border", !1, r) - .5)),
                a && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t,
                t = C.css(e, l)),
                at(0, t, a)
            }
        }
    }),
    C.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - Pe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        C.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[r + ne[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        "margin" !== r && (C.cssHooks[r + o].set = at)
    }),
    C.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = Qe(e),
                    r = t.length; s < r; s++)
                        o[t[s]] = C.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((C.Tween = ut).prototype = {
        constructor: ut,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || C.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ut.propHooks[this.prop];
            return e && e.get ? e.get(this) : ut.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ut.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : ut.propHooks._default.set(this),
            this
        }
    }).init.prototype = ut.prototype,
    (ut.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = ut.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    C.fx = ut.prototype.init,
    C.fx.step = {};
    var ft, ht, dt, pt, gt = /^(?:toggle|show|hide)$/, mt = /queueHooks$/;
    function vt() {
        ht && (!1 === T.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(vt) : x.setTimeout(vt, C.fx.interval),
        C.fx.tick())
    }
    function yt() {
        return x.setTimeout(function() {
            ft = void 0
        }),
        ft = Date.now()
    }
    function bt(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function _t(e, t, n) {
        for (var i, r = (wt.tweeners[t] || []).concat(wt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function wt(o, e, t) {
        var n, s, i = 0, r = wt.prefilters.length, a = C.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (s)
                return !1;
            for (var e = ft || yt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++)
                c.tweens[i].run(n);
            return a.notifyWith(o, [c, n, t]),
            n < 1 && r ? t : (r || a.notifyWith(o, [c, 1, 0]),
            a.resolveWith(o, [c]),
            !1)
        }, c = a.promise({
            elem: o,
            props: C.extend({}, e),
            opts: C.extend(!0, {
                specialEasing: {},
                easing: C.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: ft || yt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? c.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; t < n; t++)
                    c.tweens[t].run(1);
                return e ? (a.notifyWith(o, [c, 1, 0]),
                a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]),
                this
            }
        }), u = c.props;
        for (function(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (r = t[i = U(n)],
                o = e[n],
                Array.isArray(o) && (r = o[1],
                o = e[n] = o[0]),
                n !== i && (e[i] = o,
                delete e[n]),
                (s = C.cssHooks[i]) && "expand"in s)
                    for (n in o = s.expand(o),
                    delete e[i],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = r);
                else
                    t[i] = r
        }(u, c.opts.specialEasing); i < r; i++)
            if (n = wt.prefilters[i].call(c, o, u, c.opts))
                return b(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                n;
        return C.map(u, _t, c),
        b(c.opts.start) && c.opts.start.call(o, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        C.fx.timer(C.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    C.Animation = C.extend(wt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = b(e) ? (t = e,
            ["*"]) : e.match(M)).length; i < r; i++)
                n = e[i],
                wt.tweeners[n] = wt.tweeners[n] || [],
                wt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, c, u, f = "width"in t || "height"in t, h = this, d = {}, p = e.style, g = e.nodeType && se(e), m = X.get(e, "fxshow");
            for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            h.always(function() {
                h.always(function() {
                    s.unqueued--,
                    C.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (r = t[i],
                gt.test(r)) {
                    if (delete t[i],
                    o = o || "toggle" === r,
                    r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])
                            continue;
                        g = !0
                    }
                    d[i] = m && m[i] || C.style(e, i)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
                for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (c = m && m.display) && (c = X.get(e, "display")),
                "none" === (u = C.css(e, "display")) && (c ? u = c : (ce([e], !0),
                c = e.style.display || c,
                u = C.css(e, "display"),
                ce([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (h.done(function() {
                    p.display = c
                }),
                null == c && (u = p.display,
                c = "none" === u ? "" : u)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                h.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1,
                d)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = X.access(e, "fxshow", {
                        display: c
                    }),
                    o && (m.hidden = !g),
                    g && ce([e], !0),
                    h.done(function() {
                        for (i in g || ce([e]),
                        X.remove(e, "fxshow"),
                        d)
                            C.style(e, i, d[i])
                    })),
                    l = _t(g ? m[i] : 0, i, h),
                    i in m || (m[i] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? wt.prefilters.unshift(e) : wt.prefilters.push(e)
        }
    }),
    C.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            b(i.old) && i.old.call(this),
            i.queue && C.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    C.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function r() {
                var e = wt(this, C.extend({}, t), s);
                (o || X.get(this, "finish")) && e.stop(!0)
            }
            var o = C.isEmptyObject(t)
              , s = C.speed(e, n, i);
            return r.finish = r,
            o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(r, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            }
            return "string" != typeof r && (o = e,
            e = r,
            r = void 0),
            e && this.queue(r || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != r && r + "queueHooks"
                  , n = C.timers
                  , i = X.get(this);
                if (t)
                    i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && mt.test(t) && s(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || C.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = X.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], r = C.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                C.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    C.each(["toggle", "show", "hide"], function(e, i) {
        var r = C.fn[i];
        C.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(bt(i, !0), e, t, n)
        }
    }),
    C.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        C.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    C.timers = [],
    C.fx.tick = function() {
        var e, t = 0, n = C.timers;
        for (ft = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(),
        ft = void 0
    }
    ,
    C.fx.timer = function(e) {
        C.timers.push(e),
        C.fx.start()
    }
    ,
    C.fx.interval = 13,
    C.fx.start = function() {
        ht || (ht = !0,
        vt())
    }
    ,
    C.fx.stop = function() {
        ht = null
    }
    ,
    C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    C.fn.delay = function(i, e) {
        return i = C.fx && C.fx.speeds[i] || i,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = x.setTimeout(e, i);
            t.stop = function() {
                x.clearTimeout(n)
            }
        })
    }
    ,
    dt = T.createElement("input"),
    pt = T.createElement("select").appendChild(T.createElement("option")),
    dt.type = "checkbox",
    y.checkOn = "" !== dt.value,
    y.optSelected = pt.selected,
    (dt = T.createElement("input")).value = "t",
    dt.type = "radio",
    y.radioValue = "t" === dt.value;
    var Et, xt = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return B(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }),
    C.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? Et : void 0)),
                void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : !(r && "get"in r && null !== (i = r.get(e, t))) && null == (i = C.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(M);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    Et = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = xt[t] || C.find.attr;
        xt[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = xt[o],
            xt[o] = i,
            i = null != s(e, t, n) ? o : null,
            xt[o] = r),
            i
        }
    });
    var Tt = /^(?:input|select|textarea|button)$/i
      , Ct = /^(?:a|area)$/i;
    function St(e) {
        return (e.match(M) || []).join(" ")
    }
    function At(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
    }
    C.fn.extend({
        prop: function(e, t) {
            return B(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }),
    C.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                r = C.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    y.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }),
    C.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (b(t))
                return this.each(function(e) {
                    C(this).addClass(t.call(this, e, At(this)))
                });
            if ((e = kt(t)).length)
                for (; n = this[l++]; )
                    if (r = At(n),
                    i = 1 === n.nodeType && " " + St(r) + " ") {
                        for (s = 0; o = e[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = St(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (b(t))
                return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, At(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = kt(t)).length)
                for (; n = this[l++]; )
                    if (r = At(n),
                    i = 1 === n.nodeType && " " + St(r) + " ") {
                        for (s = 0; o = e[s++]; )
                            for (; -1 < i.indexOf(" " + o + " "); )
                                i = i.replace(" " + o + " ", " ");
                        r !== (a = St(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var o = typeof r
              , s = "string" == o || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : b(r) ? this.each(function(e) {
                C(this).toggleClass(r.call(this, e, At(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0,
                    n = C(this),
                    i = kt(r); e = i[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== r && "boolean" != o || ((e = At(this)) && X.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", !e && !1 !== r && X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + St(At(t)) + " ").indexOf(i))
                    return !0;
            return !1
        }
    });
    var Ot = /\r/g;
    C.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = b(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get"in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Ot, "") : null == e ? "" : e : void 0
        }
    }),
    C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : St(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (((n = i[l]).selected || l === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = C.makeArray(t), s = r.length; s--; )
                        ((i = r[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        },
        y.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in x;
    function Nt(e) {
        e.stopPropagation()
    }
    var Dt = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, c, u, f = [n || T], h = v.call(e, "type") ? e.type : e, d = v.call(e, "namespace") ? e.namespace.split(".") : [], p = u = o = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (d = h.split(".")).shift(),
            d.sort()),
            a = h.indexOf(":") < 0 && "on" + h,
            (e = e[C.expando] ? e : new C.Event(h,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = d.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : C.makeArray(t, [e]),
            c = C.event.special[h] || {},
            i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !g(n)) {
                    for (s = c.delegateType || h,
                    Dt.test(s + h) || (p = p.parentNode); p; p = p.parentNode)
                        f.push(p),
                        o = p;
                    o === (n.ownerDocument || T) && f.push(o.defaultView || o.parentWindow || x)
                }
                for (r = 0; (p = f[r++]) && !e.isPropagationStopped(); )
                    u = p,
                    e.type = 1 < r ? s : c.bindType || h,
                    (l = (X.get(p, "events") || Object.create(null))[e.type] && X.get(p, "handle")) && l.apply(p, t),
                    (l = a && p[a]) && l.apply && Q(p) && (e.result = l.apply(p, t),
                    !1 === e.result && e.preventDefault());
                return e.type = h,
                i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !Q(n) || a && b(n[h]) && !g(n) && ((o = n[a]) && (n[a] = null),
                C.event.triggered = h,
                e.isPropagationStopped() && u.addEventListener(h, Nt),
                n[h](),
                e.isPropagationStopped() && u.removeEventListener(h, Nt),
                C.event.triggered = void 0,
                o && (n[a] = o)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var i = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(i, null, t)
        }
    }),
    C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return C.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function r(e) {
            C.event.simulate(i, e.target, C.event.fix(e))
        }
        C.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = X.access(e, i);
                t || e.addEventListener(n, r, !0),
                X.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = X.access(e, i) - 1;
                t ? X.access(e, i, t) : (e.removeEventListener(n, r, !0),
                X.remove(e, i))
            }
        }
    });
    var jt = x.location
      , Lt = {
        guid: Date.now()
    }
      , It = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new x.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e),
        t
    }
    ;
    var Mt = /\[\]$/
      , Rt = /\r?\n/g
      , Pt = /^(?:submit|button|image|reset|file)$/i
      , qt = /^(?:input|select|textarea|keygen)/i;
    C.param = function(e, t) {
        function n(e, t) {
            var n = b(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var i, r = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
            C.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (i in e)
                !function n(i, e, r, o) {
                    var t;
                    if (Array.isArray(e))
                        C.each(e, function(e, t) {
                            r || Mt.test(i) ? o(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o)
                        });
                    else if (r || "object" !== w(e))
                        o(i, e);
                    else
                        for (t in e)
                            n(i + "[" + t + "]", e[t], r, o)
                }(i, e[i], t, n);
        return r.join("&")
    }
    ,
    C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && qt.test(this.nodeName) && !Pt.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Rt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Rt, "\r\n")
                }
            }).get()
        }
    });
    var Ht = /%20/g
      , Wt = /#.*$/
      , Ft = /([?&])_=[^&]*/
      , Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , zt = /^(?:GET|HEAD)$/
      , $t = /^\/\//
      , Vt = {}
      , Ut = {}
      , Qt = "*/".concat("*")
      , Yt = T.createElement("a");
    function Xt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, r = e.toLowerCase().match(M) || [];
            if (b(t))
                for (; n = r[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Gt(t, r, o, s) {
        var a = {}
          , l = t === Ut;
        function c(e) {
            var i;
            return a[e] = !0,
            C.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n),
                c(n),
                !1)
            }),
            i
        }
        return c(r.dataTypes[0]) || !a["*"] && c("*")
    }
    function Kt(e, t) {
        var n, i, r = C.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && C.extend(!0, e, i),
        e
    }
    Yt.href = jt.href,
    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Kt(Kt(e, C.ajaxSettings), t) : Kt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Xt(Vt),
        ajaxTransport: Xt(Ut),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var u, f, h, n, d, i, p, g, r, o, m = C.ajaxSetup({}, t), v = m.context || m, y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event, b = C.Deferred(), _ = C.Callbacks("once memory"), w = m.statusCode || {}, s = {}, a = {}, l = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!n)
                            for (n = {}; t = Bt.exec(h); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return p ? h : null
                },
                setRequestHeader: function(e, t) {
                    return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    s[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == p && (m.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (p)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return u && u.abort(t),
                    c(0, t),
                    this
                }
            };
            if (b.promise(E),
            m.url = ((e || m.url || jt.href) + "").replace($t, jt.protocol + "//"),
            m.type = t.method || t.type || m.method || m.type,
            m.dataTypes = (m.dataType || "*").toLowerCase().match(M) || [""],
            null == m.crossDomain) {
                i = T.createElement("a");
                try {
                    i.href = m.url,
                    i.href = i.href,
                    m.crossDomain = Yt.protocol + "//" + Yt.host != i.protocol + "//" + i.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)),
            Gt(Vt, m, t, E),
            p)
                return E;
            for (r in (g = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !zt.test(m.type),
            f = m.url.replace(Wt, ""),
            m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ht, "+")) : (o = m.url.slice(f.length),
            m.data && (m.processData || "string" == typeof m.data) && (f += (It.test(f) ? "&" : "?") + m.data,
            delete m.data),
            !1 === m.cache && (f = f.replace(Ft, "$1"),
            o = (It.test(f) ? "&" : "?") + "_=" + Lt.guid++ + o),
            m.url = f + o),
            m.ifModified && (C.lastModified[f] && E.setRequestHeader("If-Modified-Since", C.lastModified[f]),
            C.etag[f] && E.setRequestHeader("If-None-Match", C.etag[f])),
            (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && E.setRequestHeader("Content-Type", m.contentType),
            E.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : m.accepts["*"]),
            m.headers)
                E.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, E, m) || p))
                return E.abort();
            if (l = "abort",
            _.add(m.complete),
            E.done(m.success),
            E.fail(m.error),
            u = Gt(Ut, m, t, E)) {
                if (E.readyState = 1,
                g && y.trigger("ajaxSend", [E, m]),
                p)
                    return E;
                m.async && 0 < m.timeout && (d = x.setTimeout(function() {
                    E.abort("timeout")
                }, m.timeout));
                try {
                    p = !1,
                    u.send(s, c)
                } catch (e) {
                    if (p)
                        throw e;
                    c(-1, e)
                }
            } else
                c(-1, "No Transport");
            function c(e, t, n, i) {
                var r, o, s, a, l, c = t;
                p || (p = !0,
                d && x.clearTimeout(d),
                u = void 0,
                h = i || "",
                E.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s = s || r
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(m, E, n)),
                !r && -1 < C.inArray("script", m.dataTypes) && (m.converters["text script"] = function() {}
                ),
                a = function(e, t, n, i) {
                    var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = u.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = c[l + " " + o] || c["* " + o]))
                                    for (r in c)
                                        if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0],
                                            u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, a, E, r),
                r ? (m.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (C.lastModified[f] = l),
                (l = E.getResponseHeader("etag")) && (C.etag[f] = l)),
                204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state,
                o = a.data,
                r = !(s = a.error))) : (s = c,
                !e && c || (c = "error",
                e < 0 && (e = 0))),
                E.status = e,
                E.statusText = (t || c) + "",
                r ? b.resolveWith(v, [o, c, E]) : b.rejectWith(v, [E, c, s]),
                E.statusCode(w),
                w = void 0,
                g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [E, m, r ? o : s]),
                _.fireWith(v, [E, c]),
                g && (y.trigger("ajaxComplete", [E, m]),
                --C.active || C.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }),
    C.each(["get", "post"], function(e, r) {
        C[r] = function(e, t, n, i) {
            return b(t) && (i = i || n,
            n = t,
            t = void 0),
            C.ajax(C.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }),
    C.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    C._evalUrl = function(e, t, n) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                C.globalEval(e, t, n)
            }
        })
    }
    ,
    C.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])),
            t = C(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = C(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }
    ,
    C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    C.ajaxSettings.xhr = function() {
        try {
            return new x.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Jt = {
        0: 200,
        1223: 204
    }
      , Zt = C.ajaxSettings.xhr();
    y.cors = !!Zt && "withCredentials"in Zt,
    y.ajax = Zt = !!Zt,
    C.ajaxTransport(function(r) {
        var o, s;
        if (y.cors || Zt && !r.crossDomain)
            return {
                send: function(e, t) {
                    var n, i = r.xhr();
                    if (i.open(r.type, r.url, r.async, r.username, r.password),
                    r.xhrFields)
                        for (n in r.xhrFields)
                            i[n] = r.xhrFields[n];
                    for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType),
                    r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        i.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Jt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = o(),
                    s = i.onerror = i.ontimeout = o("error"),
                    void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                        4 === i.readyState && x.setTimeout(function() {
                            o && s()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        i.send(r.hasContent && r.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e),
                e
            }
        }
    }),
    C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    C.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    i = C("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(e) {
                        i.remove(),
                        r = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    T.head.appendChild(i[0])
                },
                abort: function() {
                    r && r()
                }
            }
    });
    var en, tn = [], nn = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tn.pop() || C.expando + "_" + Lt.guid++;
            return this[e] = !0,
            e
        }
    }),
    C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(nn, "$1" + i) : !1 !== e.jsonp && (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return o || C.error(i + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            r = x[i],
            x[i] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === r ? C(x).removeProp(i) : x[i] = r,
                e[i] && (e.jsonpCallback = t.jsonpCallback,
                tn.push(i)),
                o && b(r) && r(o[0]),
                o = r = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((en = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === en.childNodes.length),
    C.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href,
        t.head.appendChild(i)) : t = T),
        o = !n && [],
        (r = k.exec(e)) ? [t.createElement(r[1])] : (r = be([e], t, o),
        o && o.length && C(o).remove(),
        C.merge([], r.childNodes)));
        var i, r, o
    }
    ,
    C.fn.load = function(e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return -1 < a && (i = St(e.slice(a)),
        e = e.slice(0, a)),
        b(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        0 < s.length && C.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    C.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = C.css(e, "position"), u = C(e), f = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            o = C.css(e, "top"),
            l = C.css(e, "left"),
            r = ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top,
            i.left) : (s = parseFloat(o) || 0,
            parseFloat(l) || 0),
            b(t) && (t = t.call(e, n, C.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            u.css(f))
        }
    },
    C.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === C.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0),
                    r.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                    e = e.offsetParent;
                return e || ie
            })
        }
    }),
    C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        C.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var i;
                return g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n ? i ? i[r] : e[t] : void (i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }),
    C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = Ge(y.pixelPosition, function(e, t) {
            if (t)
                return t = Xe(e, n),
                Ue.test(t) ? C(e).position()[n] + "px" : t
        })
    }),
    C.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        C.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            C.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , r = i || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var i;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
                }, a, n ? e : void 0, n)
            }
        })
    }),
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    C.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    C.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        b(e))
            return i = a.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, i.concat(a.call(arguments)))
            }
            ).guid = e.guid = e.guid || C.guid++,
            r
    }
    ,
    C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0)
    }
    ,
    C.isArray = Array.isArray,
    C.parseJSON = JSON.parse,
    C.nodeName = A,
    C.isFunction = b,
    C.isWindow = g,
    C.camelCase = U,
    C.type = w,
    C.now = Date.now,
    C.isNumeric = function(e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    C.trim = function(e) {
        return null == e ? "" : (e + "").replace(rn, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var on = x.jQuery
      , sn = x.$;
    return C.noConflict = function(e) {
        return x.$ === C && (x.$ = sn),
        e && x.jQuery === C && (x.jQuery = on),
        C
    }
    ,
    void 0 === e && (x.jQuery = x.$ = C),
    C
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function(e, p) {
    "use strict";
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function o(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
    function t(t, e) {
        var n, i = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
        e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })),
        i.push.apply(i, n)),
        i
    }
    function s(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(o), !0).forEach(function(e) {
                var t, n, i;
                t = r,
                i = o[n = e],
                n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
            })
        }
        return r
    }
    p = p && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
    var g = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()),
            document.getElementById(e); )
                ;
            return e
        },
        getSelectorFromElement: function(e) {
            var t, n = e.getAttribute("data-target");
            n && "#" !== n || (n = (t = e.getAttribute("href")) && "#" !== t ? t.trim() : "");
            try {
                return document.querySelector(n) ? n : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var t = p(e).css("transition-duration")
              , n = p(e).css("transition-delay")
              , i = parseFloat(t)
              , r = parseFloat(n);
            return i || r ? (t = t.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            p(e).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend")
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i]
                      , o = t[i]
                      , s = o && g.isElement(o) ? "element" : null === o || void 0 === o ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(r).test(s))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof e.getRootNode)
                return e instanceof ShadowRoot ? e : e.parentNode ? g.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        },
        jQueryDetection: function() {
            if (void 0 === p)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = p.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    g.jQueryDetection(),
    p.fn.emulateTransitionEnd = function(e) {
        var t = this
          , n = !1;
        return p(this).one(g.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || g.triggerTransitionEnd(t)
        }, e),
        this
    }
    ,
    p.event.special[g.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(e) {
            if (p(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    };
    var n, r = "alert", a = p.fn[r], l = ((n = c.prototype).close = function(e) {
        var t = this._element;
        e && (t = this._getRootElement(e)),
        this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
    }
    ,
    n.dispose = function() {
        p.removeData(this._element, "bs.alert"),
        this._element = null
    }
    ,
    n._getRootElement = function(e) {
        var t = g.getSelectorFromElement(e)
          , n = !1;
        return t && (n = document.querySelector(t)),
        n = n || p(e).closest(".alert")[0]
    }
    ,
    n._triggerCloseEvent = function(e) {
        var t = p.Event("close.bs.alert");
        return p(e).trigger(t),
        t
    }
    ,
    n._removeElement = function(t) {
        var e, n = this;
        p(t).removeClass("show"),
        p(t).hasClass("fade") ? (e = g.getTransitionDurationFromElement(t),
        p(t).one(g.TRANSITION_END, function(e) {
            return n._destroyElement(t, e)
        }).emulateTransitionEnd(e)) : this._destroyElement(t)
    }
    ,
    n._destroyElement = function(e) {
        p(e).detach().trigger("closed.bs.alert").remove()
    }
    ,
    c._jQueryInterface = function(n) {
        return this.each(function() {
            var e = p(this)
              , t = e.data("bs.alert");
            t || (t = new c(this),
            e.data("bs.alert", t)),
            "close" === n && t[n](this)
        })
    }
    ,
    c._handleDismiss = function(t) {
        return function(e) {
            e && e.preventDefault(),
            t.close(this)
        }
    }
    ,
    o(c, null, [{
        key: "VERSION",
        get: function() {
            return "4.5.0"
        }
    }]),
    c);
    function c(e) {
        this._element = e
    }
    p(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', l._handleDismiss(new l)),
    p.fn[r] = l._jQueryInterface,
    p.fn[r].Constructor = l,
    p.fn[r].noConflict = function() {
        return p.fn[r] = a,
        l._jQueryInterface
    }
    ;
    var u, f = p.fn.button, h = ((u = d.prototype).toggle = function() {
        var e, t, n = !0, i = !0, r = p(this._element).closest('[data-toggle="buttons"]')[0];
        !r || (e = this._element.querySelector('input:not([type="hidden"])')) && ("radio" === e.type && (e.checked && this._element.classList.contains("active") ? n = !1 : (t = r.querySelector(".active")) && p(t).removeClass("active")),
        n && ("checkbox" !== e.type && "radio" !== e.type || (e.checked = !this._element.classList.contains("active")),
        p(e).trigger("change")),
        e.focus(),
        i = !1),
        this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (i && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")),
        n && p(this._element).toggleClass("active"))
    }
    ,
    u.dispose = function() {
        p.removeData(this._element, "bs.button"),
        this._element = null
    }
    ,
    d._jQueryInterface = function(t) {
        return this.each(function() {
            var e = p(this).data("bs.button");
            e || (e = new d(this),
            p(this).data("bs.button", e)),
            "toggle" === t && e[t]()
        })
    }
    ,
    o(d, null, [{
        key: "VERSION",
        get: function() {
            return "4.5.0"
        }
    }]),
    d);
    function d(e) {
        this._element = e
    }
    p(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = e.target
          , n = t;
        if (p(t).hasClass("btn") || (t = p(t).closest(".btn")[0]),
        !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
            e.preventDefault();
        else {
            var i = t.querySelector('input:not([type="hidden"])');
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled")))
                return void e.preventDefault();
            "LABEL" === n.tagName && i && "checkbox" === i.type && e.preventDefault(),
            h._jQueryInterface.call(p(t), "toggle")
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = p(e.target).closest(".btn")[0];
        p(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }),
    p(window).on("load.bs.button.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var i = e[t]
              , r = i.querySelector('input:not([type="hidden"])');
            r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
        }
        for (var o = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
            var a = e[o];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
        }
    }),
    p.fn.button = h._jQueryInterface,
    p.fn.button.Constructor = h,
    p.fn.button.noConflict = function() {
        return p.fn.button = f,
        h._jQueryInterface
    }
    ;
    var m, v = "carousel", y = p.fn[v], b = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, _ = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, w = {
        TOUCH: "touch",
        PEN: "pen"
    }, E = ((m = x.prototype).next = function() {
        this._isSliding || this._slide("next")
    }
    ,
    m.nextWhenVisible = function() {
        !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
    }
    ,
    m.prev = function() {
        this._isSliding || this._slide("prev")
    }
    ,
    m.pause = function(e) {
        e || (this._isPaused = !0),
        this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (g.triggerTransitionEnd(this._element),
        this.cycle(!0)),
        clearInterval(this._interval),
        this._interval = null
    }
    ,
    m.cycle = function(e) {
        e || (this._isPaused = !1),
        this._interval && (clearInterval(this._interval),
        this._interval = null),
        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
    }
    ,
    m.to = function(e) {
        var t = this;
        this._activeElement = this._element.querySelector(".active.carousel-item");
        var n = this._getItemIndex(this._activeElement);
        if (!(e > this._items.length - 1 || e < 0))
            if (this._isSliding)
                p(this._element).one("slid.bs.carousel", function() {
                    return t.to(e)
                });
            else {
                if (n === e)
                    return this.pause(),
                    void this.cycle();
                var i = n < e ? "next" : "prev";
                this._slide(i, this._items[e])
            }
    }
    ,
    m.dispose = function() {
        p(this._element).off(".bs.carousel"),
        p.removeData(this._element, "bs.carousel"),
        this._items = null,
        this._config = null,
        this._element = null,
        this._interval = null,
        this._isPaused = null,
        this._isSliding = null,
        this._activeElement = null,
        this._indicatorsElement = null
    }
    ,
    m._getConfig = function(e) {
        return e = s(s({}, b), e),
        g.typeCheckConfig(v, e, _),
        e
    }
    ,
    m._handleSwipe = function() {
        var e, t = Math.abs(this.touchDeltaX);
        t <= 40 || (e = t / this.touchDeltaX,
        (this.touchDeltaX = 0) < e && this.prev(),
        e < 0 && this.next())
    }
    ,
    m._addEventListeners = function() {
        var t = this;
        this._config.keyboard && p(this._element).on("keydown.bs.carousel", function(e) {
            return t._keydown(e)
        }),
        "hover" === this._config.pause && p(this._element).on("mouseenter.bs.carousel", function(e) {
            return t.pause(e)
        }).on("mouseleave.bs.carousel", function(e) {
            return t.cycle(e)
        }),
        this._config.touch && this._addTouchEventListeners()
    }
    ,
    m._addTouchEventListeners = function() {
        var e, t, n = this;
        this._touchSupported && (e = function(e) {
            n._pointerEvent && w[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
        }
        ,
        t = function(e) {
            n._pointerEvent && w[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX),
            n._handleSwipe(),
            "hover" === n._config.pause && (n.pause(),
            n.touchTimeout && clearTimeout(n.touchTimeout),
            n.touchTimeout = setTimeout(function(e) {
                return n.cycle(e)
            }, 500 + n._config.interval))
        }
        ,
        p(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(e) {
            return e.preventDefault()
        }),
        this._pointerEvent ? (p(this._element).on("pointerdown.bs.carousel", e),
        p(this._element).on("pointerup.bs.carousel", t),
        this._element.classList.add("pointer-event")) : (p(this._element).on("touchstart.bs.carousel", e),
        p(this._element).on("touchmove.bs.carousel", function(e) {
            var t;
            (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
        }),
        p(this._element).on("touchend.bs.carousel", t)))
    }
    ,
    m._keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName))
            switch (e.which) {
            case 37:
                e.preventDefault(),
                this.prev();
                break;
            case 39:
                e.preventDefault(),
                this.next()
            }
    }
    ,
    m._getItemIndex = function(e) {
        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [],
        this._items.indexOf(e)
    }
    ,
    m._getItemByDirection = function(e, t) {
        var n = "next" === e
          , i = "prev" === e
          , r = this._getItemIndex(t)
          , o = this._items.length - 1;
        if ((i && 0 === r || n && r === o) && !this._config.wrap)
            return t;
        var s = (r + ("prev" === e ? -1 : 1)) % this._items.length;
        return -1 == s ? this._items[this._items.length - 1] : this._items[s]
    }
    ,
    m._triggerSlideEvent = function(e, t) {
        var n = this._getItemIndex(e)
          , i = this._getItemIndex(this._element.querySelector(".active.carousel-item"))
          , r = p.Event("slide.bs.carousel", {
            relatedTarget: e,
            direction: t,
            from: i,
            to: n
        });
        return p(this._element).trigger(r),
        r
    }
    ,
    m._setActiveIndicatorElement = function(e) {
        var t, n;
        this._indicatorsElement && (t = [].slice.call(this._indicatorsElement.querySelectorAll(".active")),
        p(t).removeClass("active"),
        (n = this._indicatorsElement.children[this._getItemIndex(e)]) && p(n).addClass("active"))
    }
    ,
    m._slide = function(e, t) {
        var n, i, r, o, s, a = this, l = this._element.querySelector(".active.carousel-item"), c = this._getItemIndex(l), u = t || l && this._getItemByDirection(e, l), f = this._getItemIndex(u), h = Boolean(this._interval), d = "next" === e ? (n = "carousel-item-left",
        i = "carousel-item-next",
        "left") : (n = "carousel-item-right",
        i = "carousel-item-prev",
        "right");
        u && p(u).hasClass("active") ? this._isSliding = !1 : !this._triggerSlideEvent(u, d).isDefaultPrevented() && l && u && (this._isSliding = !0,
        h && this.pause(),
        this._setActiveIndicatorElement(u),
        r = p.Event("slid.bs.carousel", {
            relatedTarget: u,
            direction: d,
            from: c,
            to: f
        }),
        p(this._element).hasClass("slide") ? (p(u).addClass(i),
        g.reflow(u),
        p(l).addClass(n),
        p(u).addClass(n),
        (o = parseInt(u.getAttribute("data-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
        this._config.interval = o) : this._config.interval = this._config.defaultInterval || this._config.interval,
        s = g.getTransitionDurationFromElement(l),
        p(l).one(g.TRANSITION_END, function() {
            p(u).removeClass(n + " " + i).addClass("active"),
            p(l).removeClass("active " + i + " " + n),
            a._isSliding = !1,
            setTimeout(function() {
                return p(a._element).trigger(r)
            }, 0)
        }).emulateTransitionEnd(s)) : (p(l).removeClass("active"),
        p(u).addClass("active"),
        this._isSliding = !1,
        p(this._element).trigger(r)),
        h && this.cycle())
    }
    ,
    x._jQueryInterface = function(i) {
        return this.each(function() {
            var e = p(this).data("bs.carousel")
              , t = s(s({}, b), p(this).data());
            "object" == typeof i && (t = s(s({}, t), i));
            var n = "string" == typeof i ? i : t.slide;
            if (e || (e = new x(this,t),
            p(this).data("bs.carousel", e)),
            "number" == typeof i)
                e.to(i);
            else if ("string" == typeof n) {
                if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                e[n]()
            } else
                t.interval && t.ride && (e.pause(),
                e.cycle())
        })
    }
    ,
    x._dataApiClickHandler = function(e) {
        var t, n, i, r = g.getSelectorFromElement(this);
        !r || (t = p(r)[0]) && p(t).hasClass("carousel") && (n = s(s({}, p(t).data()), p(this).data()),
        (i = this.getAttribute("data-slide-to")) && (n.interval = !1),
        x._jQueryInterface.call(p(t), n),
        i && p(t).data("bs.carousel").to(i),
        e.preventDefault())
    }
    ,
    o(x, null, [{
        key: "VERSION",
        get: function() {
            return "4.5.0"
        }
    }, {
        key: "Default",
        get: function() {
            return b
        }
    }]),
    x);
    function x(e, t) {
        this._items = null,
        this._interval = null,
        this._activeElement = null,
        this._isPaused = !1,
        this._isSliding = !1,
        this.touchTimeout = null,
        this.touchStartX = 0,
        this.touchDeltaX = 0,
        this._config = this._getConfig(t),
        this._element = e,
        this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
        this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
        this._addEventListeners()
    }
    p(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", E._dataApiClickHandler),
    p(window).on("load.bs.carousel.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            E._jQueryInterface.call(i, i.data())
        }
    }),
    p.fn[v] = E._jQueryInterface,
    p.fn[v].Constructor = E,
    p.fn[v].noConflict = function() {
        return p.fn[v] = y,
        E._jQueryInterface
    }
    ;
    var T, C = "collapse", S = p.fn[C], A = {
        toggle: !0,
        parent: ""
    }, k = {
        toggle: "boolean",
        parent: "(string|element)"
    }, O = ((T = N.prototype).toggle = function() {
        p(this._element).hasClass("show") ? this.hide() : this.show()
    }
    ,
    T.show = function() {
        var e, t, n, i, r, o, s = this;
        this._isTransitioning || p(this._element).hasClass("show") || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
            return "string" == typeof s._config.parent ? e.getAttribute("data-parent") === s._config.parent : e.classList.contains("collapse")
        })).length && (e = null),
        e && (t = p(e).not(this._selector).data("bs.collapse")) && t._isTransitioning) || (n = p.Event("show.bs.collapse"),
        p(this._element).trigger(n),
        n.isDefaultPrevented() || (e && (N._jQueryInterface.call(p(e).not(this._selector), "hide"),
        t || p(e).data("bs.collapse", null)),
        i = this._getDimension(),
        p(this._element).removeClass("collapse").addClass("collapsing"),
        this._element.style[i] = 0,
        this._triggerArray.length && p(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
        this.setTransitioning(!0),
        r = "scroll" + (i[0].toUpperCase() + i.slice(1)),
        o = g.getTransitionDurationFromElement(this._element),
        p(this._element).one(g.TRANSITION_END, function() {
            p(s._element).removeClass("collapsing").addClass("collapse show"),
            s._element.style[i] = "",
            s.setTransitioning(!1),
            p(s._element).trigger("shown.bs.collapse")
        }).emulateTransitionEnd(o),
        this._element.style[i] = this._element[r] + "px"))
    }
    ,
    T.hide = function() {
        var e = this;
        if (!this._isTransitioning && p(this._element).hasClass("show")) {
            var t = p.Event("hide.bs.collapse");
            if (p(this._element).trigger(t),
            !t.isDefaultPrevented()) {
                var n = this._getDimension();
                this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                g.reflow(this._element),
                p(this._element).addClass("collapsing").removeClass("collapse show");
                var i = this._triggerArray.length;
                if (0 < i)
                    for (var r = 0; r < i; r++) {
                        var o = this._triggerArray[r]
                          , s = g.getSelectorFromElement(o);
                        null !== s && (p([].slice.call(document.querySelectorAll(s))).hasClass("show") || p(o).addClass("collapsed").attr("aria-expanded", !1))
                    }
                this.setTransitioning(!0),
                this._element.style[n] = "";
                var a = g.getTransitionDurationFromElement(this._element);
                p(this._element).one(g.TRANSITION_END, function() {
                    e.setTransitioning(!1),
                    p(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }).emulateTransitionEnd(a)
            }
        }
    }
    ,
    T.setTransitioning = function(e) {
        this._isTransitioning = e
    }
    ,
    T.dispose = function() {
        p.removeData(this._element, "bs.collapse"),
        this._config = null,
        this._parent = null,
        this._element = null,
        this._triggerArray = null,
        this._isTransitioning = null
    }
    ,
    T._getConfig = function(e) {
        return (e = s(s({}, A), e)).toggle = Boolean(e.toggle),
        g.typeCheckConfig(C, e, k),
        e
    }
    ,
    T._getDimension = function() {
        return p(this._element).hasClass("width") ? "width" : "height"
    }
    ,
    T._getParent = function() {
        var e, n = this;
        g.isElement(this._config.parent) ? (e = this._config.parent,
        void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
        var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
          , i = [].slice.call(e.querySelectorAll(t));
        return p(i).each(function(e, t) {
            n._addAriaAndCollapsedClass(N._getTargetFromElement(t), [t])
        }),
        e
    }
    ,
    T._addAriaAndCollapsedClass = function(e, t) {
        var n = p(e).hasClass("show");
        t.length && p(t).toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ,
    N._getTargetFromElement = function(e) {
        var t = g.getSelectorFromElement(e);
        return t ? document.querySelector(t) : null
    }
    ,
    N._jQueryInterface = function(i) {
        return this.each(function() {
            var e = p(this)
              , t = e.data("bs.collapse")
              , n = s(s(s({}, A), e.data()), "object" == typeof i && i ? i : {});
            if (!t && n.toggle && "string" == typeof i && /show|hide/.test(i) && (n.toggle = !1),
            t || (t = new N(this,n),
            e.data("bs.collapse", t)),
            "string" == typeof i) {
                if (void 0 === t[i])
                    throw new TypeError('No method named "' + i + '"');
                t[i]()
            }
        })
    }
    ,
    o(N, null, [{
        key: "VERSION",
        get: function() {
            return "4.5.0"
        }
    }, {
        key: "Default",
        get: function() {
            return A
        }
    }]),
    N);
    function N(t, e) {
        this._isTransitioning = !1,
        this._element = t,
        this._config = this._getConfig(e),
        this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
        for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, r = n.length; i < r; i++) {
            var o = n[i]
              , s = g.getSelectorFromElement(o)
              , a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                return e === t
            });
            null !== s && 0 < a.length && (this._selector = s,
            this._triggerArray.push(o))
        }
        this._parent = this._config.parent ? this._getParent() : null,
        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle()
    }
    p(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this)
          , t = g.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function() {
            var e = p(this)
              , t = e.data("bs.collapse") ? "toggle" : n.data();
            O._jQueryInterface.call(e, t)
        })
    }),
    p.fn[C] = O._jQueryInterface,
    p.fn[C].Constructor = O,
    p.fn[C].noConflict = function() {
        return p.fn[C] = S,
        O._jQueryInterface
    }
    ;
    var D = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
      , j = function() {
        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
            if (D && 0 <= navigator.userAgent.indexOf(e[t]))
                return 1;
        return 0
    }()
      , L = D && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, j))
        }
    }
    ;
    function I(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function M(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function R(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function P(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = M(e)
          , n = t.overflow
          , i = t.overflowX
          , r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : P(R(e))
    }
    function q(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    var H = D && !(!window.MSInputMethodContext || !document.documentMode)
      , W = D && /MSIE 10/.test(navigator.userAgent);
    function F(e) {
        return 11 === e ? H : 10 !== e && H || W
    }
    function B(e) {
        if (!e)
            return document.documentElement;
        for (var t = F(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === M(n, "position") ? B(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function z(e) {
        return null !== e.parentNode ? z(e.parentNode) : e
    }
    function $(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , r = n ? t : e
          , o = document.createRange();
        o.setStart(i, 0),
        o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r))
            return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && B(s.firstElementChild) !== s ? B(l) : l;
        var c = z(e);
        return c.host ? $(c.host, t) : $(e, z(t).host)
    }
    function V(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft"
          , i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i)
            return e[n];
        var r = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || r)[n]
    }
    function U(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }
    function Q(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], F(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function Y(e) {
        var t = e.body
          , n = e.documentElement
          , i = F(10) && getComputedStyle(n);
        return {
            height: Q("Height", t, n, i),
            width: Q("Width", t, n, i)
        }
    }
    function X(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var G = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , K = function(e, t, n) {
        return t && Z(e.prototype, t),
        n && Z(e, n),
        e
    }
      , J = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    function Z(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function ee(e) {
        return J({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function te(e) {
        var t, n, i = {};
        try {
            F(10) ? (i = e.getBoundingClientRect(),
            t = V(e, "top"),
            n = V(e, "left"),
            i.top += t,
            i.left += n,
            i.bottom += t,
            i.right += n) : i = e.getBoundingClientRect()
        } catch (e) {}
        var r, o = {
            left: i.left,
            top: i.top,
            width: i.right - i.left,
            height: i.bottom - i.top
        }, s = "HTML" === e.nodeName ? Y(e.ownerDocument) : {}, a = s.width || e.clientWidth || o.width, l = s.height || e.clientHeight || o.height, c = e.offsetWidth - a, u = e.offsetHeight - l;
        return (c || u) && (c -= U(r = M(e), "x"),
        u -= U(r, "y"),
        o.width -= c,
        o.height -= u),
        ee(o)
    }
    function ne(e, t, n) {
        var i = 2 < arguments.length && void 0 !== n && n
          , r = F(10)
          , o = "HTML" === t.nodeName
          , s = te(e)
          , a = te(t)
          , l = P(e)
          , c = M(t)
          , u = parseFloat(c.borderTopWidth, 10)
          , f = parseFloat(c.borderLeftWidth, 10);
        i && o && (a.top = Math.max(a.top, 0),
        a.left = Math.max(a.left, 0));
        var h, d, p = ee({
            top: s.top - a.top - u,
            left: s.left - a.left - f,
            width: s.width,
            height: s.height
        });
        return p.marginTop = 0,
        p.marginLeft = 0,
        !r && o && (h = parseFloat(c.marginTop, 10),
        d = parseFloat(c.marginLeft, 10),
        p.top -= u - h,
        p.bottom -= u - h,
        p.left -= f - d,
        p.right -= f - d,
        p.marginTop = h,
        p.marginLeft = d),
        (r && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (p = function(e, t, n) {
            var i = 2 < arguments.length && void 0 !== n && n
              , r = V(t, "top")
              , o = V(t, "left")
              , s = i ? -1 : 1;
            return e.top += r * s,
            e.bottom += r * s,
            e.left += o * s,
            e.right += o * s,
            e
        }(p, t)),
        p
    }
    function ie(e) {
        if (!e || !e.parentElement || F())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === M(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function re(e, t, n, i, r) {
        var o, s, a, l, c, u = 4 < arguments.length && void 0 !== r && r, f = {
            top: 0,
            left: 0
        }, h = u ? ie(e) : $(e, q(t));
        "viewport" === i ? f = function(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t
              , i = e.ownerDocument.documentElement
              , r = ne(e, i)
              , o = Math.max(i.clientWidth, window.innerWidth || 0)
              , s = Math.max(i.clientHeight, window.innerHeight || 0)
              , a = n ? 0 : V(i)
              , l = n ? 0 : V(i, "left");
            return ee({
                top: a - r.top + r.marginTop,
                left: l - r.left + r.marginLeft,
                width: o,
                height: s
            })
        }(h, u) : (o = void 0,
        "scrollParent" === i ? "BODY" === (o = P(R(t))).nodeName && (o = e.ownerDocument.documentElement) : o = "window" === i ? e.ownerDocument.documentElement : i,
        s = ne(o, h, u),
        "HTML" !== o.nodeName || function e(t) {
            var n = t.nodeName;
            if ("BODY" === n || "HTML" === n)
                return !1;
            if ("fixed" === M(t, "position"))
                return !0;
            var i = R(t);
            return !!i && e(i)
        }(h) ? f = s : (l = (a = Y(e.ownerDocument)).height,
        c = a.width,
        f.top += s.top - s.marginTop,
        f.bottom = l + s.top,
        f.left += s.left - s.marginLeft,
        f.right = c + s.left));
        var d = "number" == typeof (n = n || 0);
        return f.left += d ? n : n.left || 0,
        f.top += d ? n : n.top || 0,
        f.right -= d ? n : n.right || 0,
        f.bottom -= d ? n : n.bottom || 0,
        f
    }
    function oe(e, t, i, n, r, o) {
        var s = 5 < arguments.length && void 0 !== o ? o : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var a = re(i, n, s, r)
          , l = {
            top: {
                width: a.width,
                height: t.top - a.top
            },
            right: {
                width: a.right - t.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - t.bottom
            },
            left: {
                width: t.left - a.left,
                height: a.height
            }
        }
          , c = Object.keys(l).map(function(e) {
            return J({
                key: e
            }, l[e], {
                area: (t = l[e]).width * t.height
            });
            var t
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , u = c.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= i.clientWidth && n >= i.clientHeight
        })
          , f = 0 < u.length ? u[0].key : c[0].key
          , h = e.split("-")[1];
        return f + (h ? "-" + h : "")
    }
    function se(e, t, n, i) {
        var r = 3 < arguments.length && void 0 !== i ? i : null;
        return ne(n, r ? ie(t) : $(t, q(n)), r)
    }
    function ae(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e)
          , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function le(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function ce(e, t, n) {
        n = n.split("-")[0];
        var i = ae(e)
          , r = {
            width: i.width,
            height: i.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , s = o ? "top" : "left"
          , a = o ? "left" : "top"
          , l = o ? "height" : "width"
          , c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2,
        r[a] = n === a ? t[a] - i[c] : t[le(a)],
        r
    }
    function ue(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function fe(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e.name === t
                });
            var n = ue(e, function(e) {
                return e.name === t
            });
            return e.indexOf(n)
        }(e, t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && I(t) && (n.offsets.popper = ee(n.offsets.popper),
            n.offsets.reference = ee(n.offsets.reference),
            n = t(n, e))
        }),
        n
    }
    function he(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }
    function de(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i]
              , o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o])
                return o
        }
        return null
    }
    function pe(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function ge() {
        this.state.eventsEnabled || (this.state = function(e, t, n) {
            t.updateBound = n,
            pe(e).addEventListener("resize", t.updateBound, {
                passive: !0
            });
            var i = P(e);
            return function e(t, n, i, r) {
                var o = "BODY" === t.nodeName
                  , s = o ? t.ownerDocument.defaultView : t;
                s.addEventListener(n, i, {
                    passive: !0
                }),
                o || e(P(s.parentNode), n, i, r),
                r.push(s)
            }(i, "scroll", t.updateBound, t.scrollParents),
            t.scrollElement = i,
            t.eventsEnabled = !0,
            t
        }(this.reference, (this.options,
        this.state), this.scheduleUpdate))
    }
    function me(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function ve(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && me(i[e]) && (t = "px"),
            n.style[e] = i[e] + t
        })
    }
    var ye = D && /Firefox/i.test(navigator.userAgent);
    function be(e, t, n) {
        var i, r, o = ue(e, function(e) {
            return e.name === t
        }), s = !!o && e.some(function(e) {
            return e.name === n && e.enabled && e.order < o.order
        });
        return s || (i = "`" + t + "`",
        r = "`" + n + "`",
        console.warn(r + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")),
        s
    }
    var _e = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , we = _e.slice(3);
    function Ee(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t
          , i = we.indexOf(e)
          , r = we.slice(i + 1).concat(we.slice(0, i));
        return n ? r.reverse() : r
    }
    var xe = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t, n, i, r, o, s, a, l = e.placement, c = l.split("-")[0], u = l.split("-")[1];
                    return u && (n = (t = e.offsets).reference,
                    i = t.popper,
                    s = (r = -1 !== ["bottom", "top"].indexOf(c)) ? "width" : "height",
                    a = {
                        start: X({}, o = r ? "left" : "top", n[o]),
                        end: X({}, o, n[o] + n[s] - i[s])
                    },
                    e.offsets.popper = J({}, i, a[u])),
                    e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.offset
                      , i = e.placement
                      , r = e.offsets
                      , o = r.popper
                      , s = r.reference
                      , a = i.split("-")[0]
                      , l = me(+n) ? [+n, 0] : function(e, r, o, t) {
                        var s = [0, 0]
                          , a = -1 !== ["right", "left"].indexOf(t)
                          , n = e.split(/(\+|\-)/).map(function(e) {
                            return e.trim()
                        })
                          , i = n.indexOf(ue(n, function(e) {
                            return -1 !== e.search(/,|\s/)
                        }));
                        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var l = /\s*,\s*|\s+/;
                        return (-1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n]).map(function(e, t) {
                            var n = (1 === t ? !a : a) ? "height" : "width"
                              , i = !1;
                            return e.reduce(function(e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                                i = !0,
                                e) : i ? (e[e.length - 1] += t,
                                i = !1,
                                e) : e.concat(t)
                            }, []).map(function(e) {
                                return function(e, t, n, i) {
                                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                                      , o = +r[1]
                                      , s = r[2];
                                    if (!o)
                                        return e;
                                    if (0 !== s.indexOf("%"))
                                        return "vh" === s || "vw" === s ? ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o;
                                    var a = void 0;
                                    switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i
                                    }
                                    return ee(a)[t] / 100 * o
                                }(e, n, r, o)
                            })
                        }).forEach(function(n, i) {
                            n.forEach(function(e, t) {
                                me(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
                            })
                        }),
                        s
                    }(n, o, s, a);
                    return "left" === a ? (o.top += l[0],
                    o.left -= l[1]) : "right" === a ? (o.top += l[0],
                    o.left += l[1]) : "top" === a ? (o.left += l[0],
                    o.top -= l[1]) : "bottom" === a && (o.left += l[0],
                    o.top += l[1]),
                    e.popper = o,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || B(e.instance.popper);
                    e.instance.reference === t && (t = B(t));
                    var n = de("transform")
                      , r = e.instance.popper.style
                      , o = r.top
                      , s = r.left
                      , a = r[n];
                    r.top = "",
                    r.left = "",
                    r[n] = "";
                    var l = re(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                    r.top = o,
                    r.left = s,
                    r[n] = a,
                    i.boundaries = l;
                    var c = i.priority
                      , u = e.offsets.popper
                      , f = {
                        primary: function(e) {
                            var t = u[e];
                            return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])),
                            X({}, e, t)
                        },
                        secondary: function(e) {
                            var t = "right" === e ? "left" : "top"
                              , n = u[t];
                            return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))),
                            X({}, t, n)
                        }
                    };
                    return c.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        u = J({}, u, f[t](e))
                    }),
                    e.offsets.popper = u,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , r = e.placement.split("-")[0]
                      , o = Math.floor
                      , s = -1 !== ["top", "bottom"].indexOf(r)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]),
                    n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!be(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i)))
                            return e
                    } else if (!e.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var r = e.placement.split("-")[0]
                      , o = e.offsets
                      , s = o.popper
                      , a = o.reference
                      , l = -1 !== ["left", "right"].indexOf(r)
                      , c = l ? "height" : "width"
                      , u = l ? "Top" : "Left"
                      , f = u.toLowerCase()
                      , h = l ? "left" : "top"
                      , d = l ? "bottom" : "right"
                      , p = ae(i)[c];
                    a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)),
                    a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]),
                    e.offsets.popper = ee(e.offsets.popper);
                    var g = a[f] + a[c] / 2 - p / 2
                      , m = M(e.instance.popper)
                      , v = parseFloat(m["margin" + u], 10)
                      , y = parseFloat(m["border" + u + "Width"], 10)
                      , b = g - e.offsets.popper[f] - v - y
                      , b = Math.max(Math.min(s[c] - p, b), 0);
                    return e.arrowElement = i,
                    e.offsets.arrow = (X(n = {}, f, Math.round(b)),
                    X(n, h, ""),
                    n),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(g, m) {
                    if (he(g.instance.modifiers, "inner"))
                        return g;
                    if (g.flipped && g.placement === g.originalPlacement)
                        return g;
                    var v = re(g.instance.popper, g.instance.reference, m.padding, m.boundariesElement, g.positionFixed)
                      , y = g.placement.split("-")[0]
                      , b = le(y)
                      , _ = g.placement.split("-")[1] || ""
                      , w = [];
                    switch (m.behavior) {
                    case "flip":
                        w = [y, b];
                        break;
                    case "clockwise":
                        w = Ee(y);
                        break;
                    case "counterclockwise":
                        w = Ee(y, !0);
                        break;
                    default:
                        w = m.behavior
                    }
                    return w.forEach(function(e, t) {
                        if (y !== e || w.length === t + 1)
                            return g;
                        y = g.placement.split("-")[0],
                        b = le(y);
                        var n = g.offsets.popper
                          , i = g.offsets.reference
                          , r = Math.floor
                          , o = "left" === y && r(n.right) > r(i.left) || "right" === y && r(n.left) < r(i.right) || "top" === y && r(n.bottom) > r(i.top) || "bottom" === y && r(n.top) < r(i.bottom)
                          , s = r(n.left) < r(v.left)
                          , a = r(n.right) > r(v.right)
                          , l = r(n.top) < r(v.top)
                          , c = r(n.bottom) > r(v.bottom)
                          , u = "left" === y && s || "right" === y && a || "top" === y && l || "bottom" === y && c
                          , f = -1 !== ["top", "bottom"].indexOf(y)
                          , h = !!m.flipVariations && (f && "start" === _ && s || f && "end" === _ && a || !f && "start" === _ && l || !f && "end" === _ && c)
                          , d = !!m.flipVariationsByContent && (f && "start" === _ && a || f && "end" === _ && s || !f && "start" === _ && c || !f && "end" === _ && l)
                          , p = h || d;
                        (o || u || p) && (g.flipped = !0,
                        (o || u) && (y = w[t + 1]),
                        p && (_ = "end" === _ ? "start" : "start" === _ ? "end" : _),
                        g.placement = y + (_ ? "-" + _ : ""),
                        g.offsets.popper = J({}, g.offsets.popper, ce(g.instance.popper, g.offsets.reference, g.placement)),
                        g = fe(g.instance.modifiers, g, "flip"))
                    }),
                    g
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , r = i.popper
                      , o = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0),
                    e.placement = le(t),
                    e.offsets.popper = ee(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!be(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = ue(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , r = e.offsets.popper
                      , o = ue(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, l, c, u, f, h, d, p, g, m, v, y, b, _, w, E, x = void 0 !== o ? o : t.gpuAcceleration, T = B(e.instance.popper), C = te(T), S = {
                        position: r.position
                    }, A = (l = e,
                    c = window.devicePixelRatio < 2 || !ye,
                    u = l.offsets,
                    f = u.popper,
                    h = u.reference,
                    d = Math.round,
                    p = Math.floor,
                    g = d(h.width),
                    m = d(f.width),
                    v = -1 !== ["left", "right"].indexOf(l.placement),
                    y = -1 !== l.placement.indexOf("-"),
                    _ = c ? d : D,
                    {
                        left: (b = c ? v || y || g % 2 == m % 2 ? d : p : D)(g % 2 == 1 && m % 2 == 1 && !y && c ? f.left - 1 : f.left),
                        top: _(f.top),
                        bottom: _(f.bottom),
                        right: b(f.right)
                    }), k = "bottom" === n ? "top" : "bottom", O = "right" === i ? "left" : "right", N = de("transform");
                    function D(e) {
                        return e
                    }
                    a = "bottom" == k ? "HTML" === T.nodeName ? -T.clientHeight + A.bottom : -C.height + A.bottom : A.top,
                    s = "right" == O ? "HTML" === T.nodeName ? -T.clientWidth + A.right : -C.width + A.right : A.left,
                    x && N ? (S[N] = "translate3d(" + s + "px, " + a + "px, 0)",
                    S[k] = 0,
                    S[O] = 0,
                    S.willChange = "transform") : (w = "bottom" == k ? -1 : 1,
                    E = "right" == O ? -1 : 1,
                    S[k] = a * w,
                    S[O] = s * E,
                    S.willChange = k + ", " + O);
                    var j = {
                        "x-placement": e.placement
                    };
                    return e.attributes = J({}, j, e.attributes),
                    e.styles = J({}, S, e.styles),
                    e.arrowStyles = J({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, n;
                    return ve(e.instance.popper, e.styles),
                    t = e.instance.popper,
                    n = e.attributes,
                    Object.keys(n).forEach(function(e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && ve(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = se(r, t, e, n.positionFixed)
                      , s = oe(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s),
                    ve(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , Te = (K(Ce, [{
        key: "update",
        value: function() {
            return function() {
                var e;
                this.state.isDestroyed || ((e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                }).offsets.reference = se(this.state, this.popper, this.reference, this.options.positionFixed),
                e.placement = oe(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                e.originalPlacement = e.placement,
                e.positionFixed = this.options.positionFixed,
                e.offsets.popper = ce(this.popper, e.offsets.reference, e.placement),
                e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                e = fe(this.modifiers, e),
                this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                this.options.onCreate(e)))
            }
            .call(this)
        }
    }, {
        key: "destroy",
        value: function() {
            return function() {
                return this.state.isDestroyed = !0,
                he(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                this.popper.style.position = "",
                this.popper.style.top = "",
                this.popper.style.left = "",
                this.popper.style.right = "",
                this.popper.style.bottom = "",
                this.popper.style.willChange = "",
                this.popper.style[de("transform")] = ""),
                this.disableEventListeners(),
                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                this
            }
            .call(this)
        }
    }, {
        key: "enableEventListeners",
        value: function() {
            return ge.call(this)
        }
    }, {
        key: "disableEventListeners",
        value: function() {
            return function() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
                this.state = (e = this.reference,
                t = this.state,
                pe(e).removeEventListener("resize", t.updateBound),
                t.scrollParents.forEach(function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                }),
                t.updateBound = null,
                t.scrollParents = [],
                t.scrollElement = null,
                t.eventsEnabled = !1,
                t))
            }
            .call(this)
        }
    }]),
    Ce);
    function Ce(e, t) {
        var n = this
          , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        G(this, Ce),
        this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update)
        }
        ,
        this.update = L(this.update.bind(this)),
        this.options = J({}, Ce.Defaults, i),
        this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        },
        this.reference = e && e.jquery ? e[0] : e,
        this.popper = t && t.jquery ? t[0] : t,
        this.options.modifiers = {},
        Object.keys(J({}, Ce.Defaults.modifiers, i.modifiers)).forEach(function(e) {
            n.options.modifiers[e] = J({}, Ce.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
        }),
        this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
            return J({
                name: e
            }, n.options.modifiers[e])
        }).sort(function(e, t) {
            return e.order - t.order
        }),
        this.modifiers.forEach(function(e) {
            e.enabled && I(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }),
        this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(),
        this.state.eventsEnabled = r
    }
    Te.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    Te.placements = _e,
    Te.Defaults = xe;
    var Se, Ae = "dropdown", ke = p.fn[Ae], Oe = new RegExp("38|40|27"), Ne = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }, De = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }, je = ((Se = Le.prototype).toggle = function() {
        var e;
        this._element.disabled || p(this._element).hasClass("disabled") || (e = p(this._menu).hasClass("show"),
        Le._clearMenus(),
        e || this.show(!0))
    }
    ,
    Se.show = function(e) {
        if (void 0 === e && (e = !1),
        !(this._element.disabled || p(this._element).hasClass("disabled") || p(this._menu).hasClass("show"))) {
            var t = {
                relatedTarget: this._element
            }
              , n = p.Event("show.bs.dropdown", t)
              , i = Le._getParentFromElement(this._element);
            if (p(i).trigger(n),
            !n.isDefaultPrevented()) {
                if (!this._inNavbar && e) {
                    if (void 0 === Te)
                        throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                    var r = this._element;
                    "parent" === this._config.reference ? r = i : g.isElement(this._config.reference) && (r = this._config.reference,
                    void 0 !== this._config.reference.jquery && (r = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary && p(i).addClass("position-static"),
                    this._popper = new Te(r,this._menu,this._getPopperConfig())
                }
                "ontouchstart"in document.documentElement && 0 === p(i).closest(".navbar-nav").length && p(document.body).children().on("mouseover", null, p.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                p(this._menu).toggleClass("show"),
                p(i).toggleClass("show").trigger(p.Event("shown.bs.dropdown", t))
            }
        }
    }
    ,
    Se.hide = function() {
        var e, t, n;
        this._element.disabled || p(this._element).hasClass("disabled") || !p(this._menu).hasClass("show") || (e = {
            relatedTarget: this._element
        },
        t = p.Event("hide.bs.dropdown", e),
        n = Le._getParentFromElement(this._element),
        p(n).trigger(t),
        t.isDefaultPrevented() || (this._popper && this._popper.destroy(),
        p(this._menu).toggleClass("show"),
        p(n).toggleClass("show").trigger(p.Event("hidden.bs.dropdown", e))))
    }
    ,
    Se.dispose = function() {
        p.removeData(this._element, "bs.dropdown"),
        p(this._element).off(".bs.dropdown"),
        this._element = null,
        (this._menu = null) !== this._popper && (this._popper.destroy(),
        this._popper = null)
    }
    ,
    Se.update = function() {
        this._inNavbar = this._detectNavbar(),
        null !== this._popper && this._popper.scheduleUpdate()
    }
    ,
    Se._addEventListeners = function() {
        var t = this;
        p(this._element).on("click.bs.dropdown", function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            t.toggle()
        })
    }
    ,
    Se._getConfig = function(e) {
        return e = s(s(s({}, this.constructor.Default), p(this._element).data()), e),
        g.typeCheckConfig(Ae, e, this.constructor.DefaultType),
        e
    }
    ,
    Se._getMenuElement = function() {
        var e;
        return this._menu || (e = Le._getParentFromElement(this._element)) && (this._menu = e.querySelector(".dropdown-menu")),
        this._menu
    }
    ,
    Se._getPlacement = function() {
        var e = p(this._element.parentNode)
          , t = "bottom-start";
        return e.hasClass("dropup") ? t = p(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : p(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"),
        t
    }
    ,
    Se._detectNavbar = function() {
        return 0 < p(this._element).closest(".navbar").length
    }
    ,
    Se._getOffset = function() {
        var t = this
          , e = {};
        return "function" == typeof this._config.offset ? e.fn = function(e) {
            return e.offsets = s(s({}, e.offsets), t._config.offset(e.offsets, t._element) || {}),
            e
        }
        : e.offset = this._config.offset,
        e
    }
    ,
    Se._getPopperConfig = function() {
        var e = {
            placement: this._getPlacement(),
            modifiers: {
                offset: this._getOffset(),
                flip: {
                    enabled: this._config.flip
                },
                preventOverflow: {
                    boundariesElement: this._config.boundary
                }
            }
        };
        return "static" === this._config.display && (e.modifiers.applyStyle = {
            enabled: !1
        }),
        s(s({}, e), this._config.popperConfig)
    }
    ,
    Le._jQueryInterface = function(t) {
        return this.each(function() {
            var e = p(this).data("bs.dropdown");
            if (e || (e = new Le(this,"object" == typeof t ? t : null),
            p(this).data("bs.dropdown", e)),
            "string" == typeof t) {
                if (void 0 === e[t])
                    throw new TypeError('No method named "' + t + '"');
                e[t]()
            }
        })
    }
    ,
    Le._clearMenus = function(e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
            for (var t = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), n = 0, i = t.length; n < i; n++) {
                var r, o, s = Le._getParentFromElement(t[n]), a = p(t[n]).data("bs.dropdown"), l = {
                    relatedTarget: t[n]
                };
                e && "click" === e.type && (l.clickEvent = e),
                a && (r = a._menu,
                !p(s).hasClass("show") || e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(s, e.target) || (o = p.Event("hide.bs.dropdown", l),
                p(s).trigger(o),
                o.isDefaultPrevented() || ("ontouchstart"in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
                t[n].setAttribute("aria-expanded", "false"),
                a._popper && a._popper.destroy(),
                p(r).removeClass("show"),
                p(s).removeClass("show").trigger(p.Event("hidden.bs.dropdown", l)))))
            }
    }
    ,
    Le._getParentFromElement = function(e) {
        var t, n = g.getSelectorFromElement(e);
        return n && (t = document.querySelector(n)),
        t || e.parentNode
    }
    ,
    Le._dataApiKeydownHandler = function(e) {
        if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(".dropdown-menu").length) : !Oe.test(e.which)) && !this.disabled && !p(this).hasClass("disabled")) {
            var t = Le._getParentFromElement(this)
              , n = p(t).hasClass("show");
            if (n || 27 !== e.which) {
                if (e.preventDefault(),
                e.stopPropagation(),
                !n || n && (27 === e.which || 32 === e.which))
                    return 27 === e.which && p(t.querySelector('[data-toggle="dropdown"]')).trigger("focus"),
                    void p(this).trigger("click");
                var i, r = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                    return p(e).is(":visible")
                });
                0 !== r.length && (i = r.indexOf(e.target),
                38 === e.which && 0 < i && i--,
                40 === e.which && i < r.length - 1 && i++,
                i < 0 && (i = 0),
                r[i].focus())
            }
        }
    }
    ,
    o(Le, null, [{
        key: "VERSION",
        get: function() {
            return "4.5.0"
        }
    }, {
        key: "Default",
        get: function() {
            return Ne
        }
    }, {
        key: "DefaultType",
        get: function() {
            return De
        }
    }]),
    Le);
    function Le(e, t) {
        this._element = e,
        this._popper = null,
        this._config = this._getConfig(t),
        this._menu = this._getMenuElement(),
        this._inNavbar = this._detectNavbar(),
        this._addEventListeners()
    }
    p(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', je._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", je._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", je._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        je._jQueryInterface.call(p(this), "toggle")
    }).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }),
    p.fn[Ae] = je._jQueryInterface,
    p.fn[Ae].Constructor = je,
    p.fn[Ae].noConflict = function() {
        return p.fn[Ae] = ke,
        je._jQueryInterface
    }
    ;
    var Ie, Me = p.fn.modal, Re = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }, Pe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }, qe = ((Ie = He.prototype).toggle = function(e) {
        return this._isShown ? this.hide() : this.show(e)
    }
    ,
    Ie.show = function(e) {
        var t, n = this;
        this._isShown || this._isTransitioning || (p(this._element).hasClass("fade") && (this._isTransitioning = !0),
        t = p.Event("show.bs.modal", {
            relatedTarget: e
        }),
        p(this._element).trigger(t),
        this._isShown || t.isDefaultPrevented() || (this._isShown = !0,
        this._checkScrollbar(),
        this._setScrollbar(),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        p(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function(e) {
            return n.hide(e)
        }),
        p(this._dialog).on("mousedown.dismiss.bs.modal", function() {
            p(n._element).one("mouseup.dismiss.bs.modal", function(e) {
                p(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
            })
        }),
        this._showBackdrop(function() {
            return n._showElement(e)
        })))
    }
    ,
    Ie.hide = function(e) {
        var t, n, i, r = this;
        e && e.preventDefault(),
        this._isShown && !this._isTransitioning && (t = p.Event("hide.bs.modal"),
        p(this._element).trigger(t),
        this._isShown && !t.isDefaultPrevented() && (this._isShown = !1,
        (n = p(this._element).hasClass("fade")) && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        p(document).off("focusin.bs.modal"),
        p(this._element).removeClass("show"),
        p(this._element).off("click.dismiss.bs.modal"),
        p(this._dialog).off("mousedown.dismiss.bs.modal"),
        n ? (i = g.getTransitionDurationFromElement(this._element),
        p(this._element).one(g.TRANSITION_END, function(e) {
            return r._hideModal(e)
        }).emulateTransitionEnd(i)) : this._hideModal()))
    }
    ,
    Ie.dispose = function() {
        [window, this._element, this._dialog].forEach(function(e) {
            return p(e).off(".bs.modal")
        }),
        p(document).off("focusin.bs.modal"),
        p.removeData(this._element, "bs.modal"),
        this._config = null,
        this._element = null,
        this._dialog = null,
        this._backdrop = null,
        this._isShown = null,
        this._isBodyOverflowing = null,
        this._ignoreBackdropClick = null,
        this._isTransitioning = null,
        this._scrollbarWidth = null
    }
    ,
    Ie.handleUpdate = function() {
        this._adjustDialog()
    }
    ,
    Ie._getConfig = function(e) {
        return e = s(s({}, Re), e),
        g.typeCheckConfig("modal", e, Pe),
        e
    }
    ,
    Ie._triggerBackdropTransition = function() {
        var e = this;
        if ("static" === this._config.backdrop) {
            var t = p.Event("hidePrevented.bs.modal");
            if (p(this._element).trigger(t),
            t.defaultPrevented)
                return;
            this._element.classList.add("modal-static");
            var n = g.getTransitionDurationFromElement(this._element);
            p(this._element).one(g.TRANSITION_END, function() {
                e._element.classList.remove("modal-static")
            }).emulateTransitionEnd(n),
            this._element.focus()
        } else
            this.hide()
    }
    ,
    Ie._showElement = function(e) {
        var t = this
          , n = p(this._element).hasClass("fade")
          , i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
        function r() {
            t._config.focus && t._element.focus(),
            t._isTransitioning = !1,
            p(t._element).trigger(s)
        }
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
        this._element.style.display = "block",
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        p(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0,
        n && g.reflow(this._element),
        p(this._element).addClass("show"),
        this._config.focus && this._enforceFocus();
        var o, s = p.Event("shown.bs.modal", {
            relatedTarget: e
        });
        n ? (o = g.getTransitionDurationFromElement(this._dialog),
        p(this._dialog).one(g.TRANSITION_END, r).emulateTransitionEnd(o)) : r()
    }
    ,
    Ie._enforceFocus = function() {
        var t = this;
        p(document).off("focusin.bs.modal").on("focusin.bs.modal", function(e) {
            document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus()
        })
    }
    ,
    Ie._setEscapeEvent = function() {
        var t = this;
        this._isShown ? p(this._element).on("keydown.dismiss.bs.modal", function(e) {
            t._config.keyboard && 27 === e.which ? (e.preventDefault(),
            t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
        }) : this._isShown || p(this._element).off("keydown.dismiss.bs.modal")
    }
    ,
    Ie._setResizeEvent = function() {
        var t = this;
        this._isShown ? p(window).on("resize.bs.modal", function(e) {
            return t.handleUpdate(e)
        }) : p(window).off("resize.bs.modal")
    }
    ,
    Ie._hideModal = function() {
        var e = this;
        this._element.style.display = "none",
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._isTransitioning = !1,
        this._showBackdrop(function() {
            p(document.body).removeClass("modal-open"),
            e._resetAdjustments(),
            e._resetScrollbar(),
            p(e._element).trigger("hidden.bs.modal")
        })
    }
    ,
    Ie._removeBackdrop = function() {
        this._backdrop && (p(this._backdrop).remove(),
        this._backdrop = null)
    }
    ,
    Ie._showBackdrop = function(e) {
        var t, n, i = this, r = p(this._element).hasClass("fade") ? "fade" : "";
        if (this._isShown && this._config.backdrop) {
            if (this._backdrop = document.createElement("div"),
            this._backdrop.className = "modal-backdrop",
            r && this._backdrop.classList.add(r),
            p(this._backdrop).appendTo(document.body),
            p(this._element).on("click.dismiss.bs.modal", function(e) {
                i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : e.target === e.currentTarget && i._triggerBackdropTransition()
            }),
            r && g.reflow(this._backdrop),
            p(this._backdrop).addClass("show"),
            !e)
                return;
            if (!r)
                return void e();
            var o = g.getTransitionDurationFromElement(this._backdrop);
            p(this._backdrop).one(g.TRANSITION_END, e).emulateTransitionEnd(o)
        } else
            !this._isShown && this._backdrop ? (p(this._backdrop).removeClass("show"),
            t = function() {
                i._removeBackdrop(),
                e && e()
            }
            ,
            p(this._element).hasClass("fade") ? (n = g.getTransitionDurationFromElement(this._backdrop),
            p(this._backdrop).one(g.TRANSITION_END, t).emulateTransitionEnd(n)) : t()) : e && e()
    }
    ,
    Ie._adjustDialog = function() {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
        this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
    }
    ,
    Ie._resetAdjustments = function() {
        this._element.style.paddingLeft = "",
        this._element.style.paddingRight = ""
    }
    ,
    Ie._checkScrollbar = function() {
        var e = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth,
        this._scrollbarWidth = this._getScrollbarWidth()
    }
    ,
    Ie._setScrollbar = function() {
        var e, t, n, i, r = this;
        this._isBodyOverflowing && (e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
        t = [].slice.call(document.querySelectorAll(".sticky-top")),
        p(e).each(function(e, t) {
            var n = t.style.paddingRight
              , i = p(t).css("padding-right");
            p(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
        }),
        p(t).each(function(e, t) {
            var n = t.style.marginRight
              , i = p(t).css("margin-right");
            p(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
        }),
        n = document.body.style.paddingRight,
        i = p(document.body).css("padding-right"),
        p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")),
        p(document.body).addClass("modal-open")
    }
    ,
    Ie._resetScrollbar = function() {
        var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
        p(e).each(function(e, t) {
            var n = p(t).data("padding-right");
            p(t).removeData("padding-right"),
            t.style.paddingRight = n || ""
        });
        var t = [].slice.call(document.querySelectorAll(".sticky-top"));
        p(t).each(function(e, t) {
            var n = p(t).data("margin-right");
            void 0 !== n && p(t).css("margin-right", n).removeData("margin-right")
        });
        var n = p(document.body).data("padding-right");
        p(document.body).removeData("padding-right"),
        document.body.style.paddingRight = n || ""
    }
    ,
    Ie._getScrollbarWidth = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
        document.body.appendChild(e);
        var t = e.getBoundingClientRect().width - e.clientWidth;
        return document.body.removeChild(e),
        t
    }
    ,
    He._jQueryInterface = function(n, i) {
        return this.each(function() {
            var e = p(this).data("bs.modal")
              , t = s(s(s({}, Re), p(this).data()), "object" == typeof n && n ? n : {});
            if (e || (e = new He(this,t),
            p(this).data("bs.modal", e)),
            "string" == typeof n) {
                if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                e[n](i)
            } else
                t.show && e.show(i)
        })
    }
    ,
    o(He, null, [{
        key: "VERSION",
        get: function() {
            return "4.5.0"
        }
    }, {
        key: "Default",
        get: function() {
            return Re
        }
    }]),
    He);
    function He(e, t) {
        this._config = this._getConfig(t),
        this._element = e,
        this._dialog = e.querySelector(".modal-dialog"),
        this._backdrop = null,
        this._isShown = !1,
        this._isBodyOverflowing = !1,
        this._ignoreBackdropClick = !1,
        this._isTransitioning = !1,
        this._scrollbarWidth = 0
    }
    p(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t, n = this, i = g.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = p(t).data("bs.modal") ? "toggle" : s(s({}, p(t).data()), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = p(t).one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                p(n).is(":visible") && n.focus()
            })
        });
        qe._jQueryInterface.call(p(t), r, this)
    }),
    p.fn.modal = qe._jQueryInterface,
    p.fn.modal.Constructor = qe,
    p.fn.modal.noConflict = function() {
        return p.fn.modal = Me,
        qe._jQueryInterface
    }
    ;
    var We = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Fe = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi
      , Be = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function ze(e, o, t) {
        if (0 === e.length)
            return e;
        if (t && "function" == typeof t)
            return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), s = Object.keys(o), a = [].slice.call(n.body.querySelectorAll("*")), i = 0, r = a.length; i < r; i++)
            !function(e) {
                var t = a[e]
                  , n = t.nodeName.toLowerCase();
                if (-1 === s.indexOf(t.nodeName.toLowerCase()))
                    return t.parentNode.removeChild(t);
                var i = [].slice.call(t.attributes)
                  , r = [].concat(o["*"] || [], o[n] || []);
                i.forEach(function(e) {
                    !function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n))
                            return -1 === We.indexOf(n) || Boolean(e.nodeValue.match(Fe) || e.nodeValue.match(Be));
                        for (var i = t.filter(function(e) {
                            return e instanceof RegExp
                        }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r]))
                                return 1
                    }(e, r) && t.removeAttribute(e.nodeName)
                })
            }(i);
        return n.body.innerHTML
    }
    var $e, Ve = "tooltip", Ue = p.fn[Ve], Qe = new RegExp("(^|\\s)bs-tooltip\\S+","g"), Ye = ["sanitize", "whiteList", "sanitizeFn"], Xe = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }, Ge = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }, Ke = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }, Je = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }, Ze = (($e = et.prototype).enable = function() {
        this._isEnabled = !0
    }
    ,
    $e.disable = function() {
        this._isEnabled = !1
    }
    ,
    $e.toggleEnabled = function() {
        this._isEnabled = !this._isEnabled
    }
    ,
    $e.toggle = function(e) {
        if (this._isEnabled)
            if (e) {
                var t = this.constructor.DATA_KEY
                  , n = p(e.currentTarget).data(t);
                n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                p(e.currentTarget).data(t, n)),
                n._activeTrigger.click = !n._activeTrigger.click,
                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
            } else {
                if (p(this.getTipElement()).hasClass("show"))
                    return void this._leave(null, this);
                this._enter(null, this)
            }
    }
    ,
    $e.dispose = function() {
        clearTimeout(this._timeout),
        p.removeData(this.element, this.constructor.DATA_KEY),
        p(this.element).off(this.constructor.EVENT_KEY),
        p(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
        this.tip && p(this.tip).remove(),
        this._isEnabled = null,
        this._timeout = null,
        this._hoverState = null,
        this._activeTrigger = null,
        this._popper && this._popper.destroy(),
        this._popper = null,
        this.element = null,
        this.config = null,
        this.tip = null
    }
    ,
    $e.show = function() {
        var t = this;
        if ("none" === p(this.element).css("display"))
            throw new Error("Please use show on visible elements");
        var e = p.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
            p(this.element).trigger(e);
            var n = g.findShadowRoot(this.element)
              , i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
            if (e.isDefaultPrevented() || !i)
                return;
            var r = this.getTipElement()
              , o = g.getUID(this.constructor.NAME);
            r.setAttribute("id", o),
            this.element.setAttribute("aria-describedby", o),
            this.setContent(),
            this.config.animation && p(r).addClass("fade");
            var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
              , a = this._getAttachment(s);
            this.addAttachmentClass(a);
            var l = this._getContainer();
            p(r).data(this.constructor.DATA_KEY, this),
            p.contains(this.element.ownerDocument.documentElement, this.tip) || p(r).appendTo(l),
            p(this.element).trigger(this.constructor.Event.INSERTED),
            this._popper = new Te(this.element,r,this._getPopperConfig(a)),
            p(r).addClass("show"),
            "ontouchstart"in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
            var c, u = function() {
                t.config.animation && t._fixTransition();
                var e = t._hoverState;
                t._hoverState = null,
                p(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === e && t._leave(null, t)
            };
            p(this.tip).hasClass("fade") ? (c = g.getTransitionDurationFromElement(this.tip),
            p(this.tip).one(g.TRANSITION_END, u).emulateTransitionEnd(c)) : u()
        }
    }
    ,
    $e.hide = function(e) {
        function t() {
            "show" !== i._hoverState && r.parentNode && r.parentNode.removeChild(r),
            i._cleanTipClass(),
            i.element.removeAttribute("aria-describedby"),
            p(i.element).trigger(i.constructor.Event.HIDDEN),
            null !== i._popper && i._popper.destroy(),
            e && e()
        }
        var n, i = this, r = this.getTipElement(), o = p.Event(this.constructor.Event.HIDE);
        p(this.element).trigger(o),
        o.isDefaultPrevented() || (p(r).removeClass("show"),
        "ontouchstart"in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
        this._activeTrigger.click = !1,
        this._activeTrigger.focus = !1,
        this._activeTrigger.hover = !1,
        p(this.tip).hasClass("fade") ? (n = g.getTransitionDurationFromElement(r),
        p(r).one(g.TRANSITION_END, t).emulateTransitionEnd(n)) : t(),
        this._hoverState = "")
    }
    ,
    $e.update = function() {
        null !== this._popper && this._popper.scheduleUpdate()
    }
    ,
    $e.isWithContent = function() {
        return Boolean(this.getTitle())
    }
    ,
    $e.addAttachmentClass = function(e) {
        p(this.getTipElement()).addClass("bs-tooltip-" + e)
    }
    ,
    $e.getTipElement = function() {
        return this.tip = this.tip || p(this.config.template)[0],
        this.tip
    }
    ,
    $e.setContent = function() {
        var e = this.getTipElement();
        this.setElementContent(p(e.querySelectorAll(".tooltip-inner")), this.getTitle()),
        p(e).removeClass("fade show")
    }
    ,
    $e.setElementContent = function(e, t) {
        "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = ze(t, this.config.whiteList, this.config.sanitizeFn)),
        e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text())
    }
    ,
    $e.getTitle = function() {
        return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
    }
    ,
    $e._getPopperConfig = function(e) {
        var t = this;
        return s(s({}, {
            placement: e,
            modifiers: {
                offset: this._getOffset(),
                flip: {
                    behavior: this.config.fallbackPlacement
                },
                arrow: {
                    element: ".arrow"
                },
                preventOverflow: {
                    boundariesElement: this.config.boundary
                }
            },
            onCreate: function(e) {
                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
            },
            onUpdate: function(e) {
                return t._handlePopperPlacementChange(e)
            }
        }), this.config.popperConfig)
    }
    ,
    $e._getOffset = function() {
        var t = this
          , e = {};
        return "function" == typeof this.config.offset ? e.fn = function(e) {
            return e.offsets = s(s({}, e.offsets), t.config.offset(e.offsets, t.element) || {}),
            e
        }
        : e.offset = this.config.offset,
        e
    }
    ,
    $e._getContainer = function() {
        return !1 === this.config.container ? document.body : g.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
    }
    ,
    $e._getAttachment = function(e) {
        return Ge[e.toUpperCase()]
    }
    ,
    $e._setListeners = function() {
        var i = this;
        this.config.trigger.split(" ").forEach(function(e) {
            var t, n;
            "click" === e ? p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                return i.toggle(e)
            }) : "manual" !== e && (t = "hover" === e ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
            n = "hover" === e ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT,
            p(i.element).on(t, i.config.selector, function(e) {
                return i._enter(e)
            }).on(n, i.config.selector, function(e) {
                return i._leave(e)
            }))
        }),
        this._hideModalHandler = function() {
            i.element && i.hide()
        }
        ,
        p(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
        this.config.selector ? this.config = s(s({}, this.config), {}, {
            trigger: "manual",
            selector: ""
        }) : this._fixTitle()
    }
    ,
    $e._fixTitle = function() {
        var e = typeof this.element.getAttribute("data-original-title");
        !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
        this.element.setAttribute("title", ""))
    }
    ,
    $e._enter = function(e, t) {
        var n = this.constructor.DATA_KEY;
        (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
        p(e.currentTarget).data(n, t)),
        e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
        p(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout),
        t._hoverState = "show",
        t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
            "show" === t._hoverState && t.show()
        }, t.config.delay.show) : t.show())
    }
    ,
    $e._leave = function(e, t) {
        var n = this.constructor.DATA_KEY;
        (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
        p(e.currentTarget).data(n, t)),
        e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1),
        t._isWithActiveTrigger() || (clearTimeout(t._timeout),
        t._hoverState = "out",
        t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
            "out" === t._hoverState && t.hide()
        }, t.config.delay.hide) : t.hide())
    }
    ,
    $e._isWithActiveTrigger = function() {
        for (var e in this._activeTrigger)
            if (this._activeTrigger[e])
                return !0;
        return !1
    }
    ,
    $e._getConfig = function(e) {
        var t = p(this.element).data();
        return Object.keys(t).forEach(function(e) {
            -1 !== Ye.indexOf(e) && delete t[e]
        }),
        "number" == typeof (e = s(s(s({}, this.constructor.Default), t), "object" == typeof e && e ? e : {})).delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        "number" == typeof e.title && (e.title = e.title.toString()),
        "number" == typeof e.content && (e.content = e.content.toString()),
        g.typeCheckConfig(Ve, e, this.constructor.DefaultType),
        e.sanitize && (e.template = ze(e.template, e.whiteList, e.sanitizeFn)),
        e
    }
    ,
    $e._getDelegateConfig = function() {
        var e = {};
        if (this.config)
            for (var t in this.config)
                this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        return e
    }
    ,
    $e._cleanTipClass = function() {
        var e = p(this.getTipElement())
          , t = e.attr("class").match(Qe);
        null !== t && t.length && e.removeClass(t.join(""))
    }
    ,
    $e._handlePopperPlacementChange = function(e) {
        this.tip = e.instance.popper,
        this._cleanTipClass(),
        this.addAttachmentClass(this._getAttachment(e.placement))
    }
    ,
    $e._fixTransition = function() {
        var e = this.getTipElement()
          , t = this.config.animation;
        null === e.getAttribute("x-placement") && (p(e).removeClass("fade"),
        this.config.animation = !1,
        this.hide(),
        this.show(),
        this.config.animation = t)
    }
    ,
    et._jQueryInterface = function(n) {
        return this.each(function() {
            var e = p(this).data("bs.tooltip")
              , t = "object" == typeof n && n;
            if ((e || !/dispose|hide/.test(n)) && (e || (e = new et(this,t),
            p(this).data("bs.tooltip", e)),
            "string" == typeof n)) {
                if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                e[n]()
            }
        })
    }
    ,
    o(et, null, [{
        key: "VERSION",
        get: function() {
            return "4.5.0"
        }
    }, {
        key: "Default",
        get: function() {
            return Ke
        }
    }, {
        key: "NAME",
        get: function() {
            return Ve
        }
    }, {
        key: "DATA_KEY",
        get: function() {
            return "bs.tooltip"
        }
    }, {
        key: "Event",
        get: function() {
            return Je
        }
    }, {
        key: "EVENT_KEY",
        get: function() {
            return ".bs.tooltip"
        }
    }, {
        key: "DefaultType",
        get: function() {
            return Xe
        }
    }]),
    et);
    function et(e, t) {
        if (void 0 === Te)
            throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        this._isEnabled = !0,
        this._timeout = 0,
        this._hoverState = "",
        this._activeTrigger = {},
        this._popper = null,
        this.element = e,
        this.config = this._getConfig(t),
        this.tip = null,
        this._setListeners()
    }
    p.fn[Ve] = Ze._jQueryInterface,
    p.fn[Ve].Constructor = Ze,
    p.fn[Ve].noConflict = function() {
        return p.fn[Ve] = Ue,
        Ze._jQueryInterface
    }
    ;
    var tt = "popover"
      , nt = p.fn[tt]
      , it = new RegExp("(^|\\s)bs-popover\\S+","g")
      , rt = s(s({}, Ze.Default), {}, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , ot = s(s({}, Ze.DefaultType), {}, {
        content: "(string|element|function)"
    })
      , st = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , at = function(e) {
        var t, n;
        function i() {
            return e.apply(this, arguments) || this
        }
        n = e,
        (t = i).prototype = Object.create(n.prototype),
        (t.prototype.constructor = t).__proto__ = n;
        var r = i.prototype;
        return r.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        r.addAttachmentClass = function(e) {
            p(this.getTipElement()).addClass("bs-popover-" + e)
        }
        ,
        r.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0],
            this.tip
        }
        ,
        r.setContent = function() {
            var e = p(this.getTipElement());
            this.setElementContent(e.find(".popover-header"), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find(".popover-body"), t),
            e.removeClass("fade show")
        }
        ,
        r._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        r._cleanTipClass = function() {
            var e = p(this.getTipElement())
              , t = e.attr("class").match(it);
            null !== t && 0 < t.length && e.removeClass(t.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this).data("bs.popover")
                  , t = "object" == typeof n ? n : null;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this,t),
                p(this).data("bs.popover", e)),
                "string" == typeof n)) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        o(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.0"
            }
        }, {
            key: "Default",
            get: function() {
                return rt
            }
        }, {
            key: "NAME",
            get: function() {
                return tt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.popover"
            }
        }, {
            key: "Event",
            get: function() {
                return st
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ot
            }
        }]),
        i
    }(Ze);
    p.fn[tt] = at._jQueryInterface,
    p.fn[tt].Constructor = at,
    p.fn[tt].noConflict = function() {
        return p.fn[tt] = nt,
        at._jQueryInterface
    }
    ;
    var lt, ct = "scrollspy", ut = p.fn[ct], ft = {
        offset: 10,
        method: "auto",
        target: ""
    }, ht = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, dt = ((lt = pt.prototype).refresh = function() {
        var t = this
          , e = this._scrollElement === this._scrollElement.window ? "offset" : "position"
          , r = "auto" === this._config.method ? e : this._config.method
          , o = "position" === r ? this._getScrollTop() : 0;
        this._offsets = [],
        this._targets = [],
        this._scrollHeight = this._getScrollHeight(),
        [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
            var t, n = g.getSelectorFromElement(e);
            if (n && (t = document.querySelector(n)),
            t) {
                var i = t.getBoundingClientRect();
                if (i.width || i.height)
                    return [p(t)[r]().top + o, n]
            }
            return null
        }).filter(function(e) {
            return e
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).forEach(function(e) {
            t._offsets.push(e[0]),
            t._targets.push(e[1])
        })
    }
    ,
    lt.dispose = function() {
        p.removeData(this._element, "bs.scrollspy"),
        p(this._scrollElement).off(".bs.scrollspy"),
        this._element = null,
        this._scrollElement = null,
        this._config = null,
        this._selector = null,
        this._offsets = null,
        this._targets = null,
        this._activeTarget = null,
        this._scrollHeight = null
    }
    ,
    lt._getConfig = function(e) {
        var t;
        return "string" != typeof (e = s(s({}, ft), "object" == typeof e && e ? e : {})).target && g.isElement(e.target) && ((t = p(e.target).attr("id")) || (t = g.getUID(ct),
        p(e.target).attr("id", t)),
        e.target = "#" + t),
        g.typeCheckConfig(ct, e, ht),
        e
    }
    ,
    lt._getScrollTop = function() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
    }
    ,
    lt._getScrollHeight = function() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    lt._getOffsetHeight = function() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
    }
    ,
    lt._process = function() {
        var e = this._getScrollTop() + this._config.offset
          , t = this._getScrollHeight()
          , n = this._config.offset + t - this._getOffsetHeight();
        if (this._scrollHeight !== t && this.refresh(),
        n <= e) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i)
        } else {
            if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                return this._activeTarget = null,
                void this._clear();
            for (var r = this._offsets.length; r--; )
                this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
        }
    }
    ,
    lt._activate = function(t) {
        this._activeTarget = t,
        this._clear();
        var e = this._selector.split(",").map(function(e) {
            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
        })
          , n = p([].slice.call(document.querySelectorAll(e.join(","))));
        n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"),
        n.addClass("active")) : (n.addClass("active"),
        n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),
        n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
        p(this._scrollElement).trigger("activate.bs.scrollspy", {
            relatedTarget: t
        })
    }
    ,
    lt._clear = function() {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
            return e.classList.contains("active")
        }).forEach(function(e) {
            return e.classList.remove("active")
        })
    }
    ,
    pt._jQueryInterface = function(t) {
        return this.each(function() {
            var e = p(this).data("bs.scrollspy");
            if (e || (e = new pt(this,"object" == typeof t && t),
            p(this).data("bs.scrollspy", e)),
            "string" == typeof t) {
                if (void 0 === e[t])
                    throw new TypeError('No method named "' + t + '"');
                e[t]()
            }
        })
    }
    ,
    o(pt, null, [{
        key: "VERSION",
        get: function() {
            return "4.5.0"
        }
    }, {
        key: "Default",
        get: function() {
            return ft
        }
    }]),
    pt);
    function pt(e, t) {
        var n = this;
        this._element = e,
        this._scrollElement = "BODY" === e.tagName ? window : e,
        this._config = this._getConfig(t),
        this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item",
        this._offsets = [],
        this._targets = [],
        this._activeTarget = null,
        this._scrollHeight = 0,
        p(this._scrollElement).on("scroll.bs.scrollspy", function(e) {
            return n._process(e)
        }),
        this.refresh(),
        this._process()
    }
    p(window).on("load.bs.scrollspy.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--; ) {
            var n = p(e[t]);
            dt._jQueryInterface.call(n, n.data())
        }
    }),
    p.fn[ct] = dt._jQueryInterface,
    p.fn[ct].Constructor = dt,
    p.fn[ct].noConflict = function() {
        return p.fn[ct] = ut,
        dt._jQueryInterface
    }
    ;
    var gt, mt = p.fn.tab, vt = ((gt = yt.prototype).show = function() {
        var e, t, n, i, r, o, s, a, l = this;
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass("active") || p(this._element).hasClass("disabled") || (t = p(this._element).closest(".nav, .list-group")[0],
        n = g.getSelectorFromElement(this._element),
        t && (i = "UL" === t.nodeName || "OL" === t.nodeName ? "> li > .active" : ".active",
        r = (r = p.makeArray(p(t).find(i)))[r.length - 1]),
        o = p.Event("hide.bs.tab", {
            relatedTarget: this._element
        }),
        s = p.Event("show.bs.tab", {
            relatedTarget: r
        }),
        r && p(r).trigger(o),
        p(this._element).trigger(s),
        s.isDefaultPrevented() || o.isDefaultPrevented() || (n && (e = document.querySelector(n)),
        this._activate(this._element, t),
        a = function() {
            var e = p.Event("hidden.bs.tab", {
                relatedTarget: l._element
            })
              , t = p.Event("shown.bs.tab", {
                relatedTarget: r
            });
            p(r).trigger(e),
            p(l._element).trigger(t)
        }
        ,
        e ? this._activate(e, e.parentNode, a) : a()))
    }
    ,
    gt.dispose = function() {
        p.removeData(this._element, "bs.tab"),
        this._element = null
    }
    ,
    gt._activate = function(e, t, n) {
        function i() {
            return o._transitionComplete(e, s, n)
        }
        var r, o = this, s = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(".active") : p(t).find("> li > .active"))[0], a = n && s && p(s).hasClass("fade");
        s && a ? (r = g.getTransitionDurationFromElement(s),
        p(s).removeClass("show").one(g.TRANSITION_END, i).emulateTransitionEnd(r)) : i()
    }
    ,
    gt._transitionComplete = function(e, t, n) {
        var i, r, o;
        t && (p(t).removeClass("active"),
        (i = p(t.parentNode).find("> .dropdown-menu .active")[0]) && p(i).removeClass("active"),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)),
        p(e).addClass("active"),
        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
        g.reflow(e),
        e.classList.contains("fade") && e.classList.add("show"),
        e.parentNode && p(e.parentNode).hasClass("dropdown-menu") && ((r = p(e).closest(".dropdown")[0]) && (o = [].slice.call(r.querySelectorAll(".dropdown-toggle")),
        p(o).addClass("active")),
        e.setAttribute("aria-expanded", !0)),
        n && n()
    }
    ,
    yt._jQueryInterface = function(n) {
        return this.each(function() {
            var e = p(this)
              , t = e.data("bs.tab");
            if (t || (t = new yt(this),
            e.data("bs.tab", t)),
            "string" == typeof n) {
                if (void 0 === t[n])
                    throw new TypeError('No method named "' + n + '"');
                t[n]()
            }
        })
    }
    ,
    o(yt, null, [{
        key: "VERSION",
        get: function() {
            return "4.5.0"
        }
    }]),
    yt);
    function yt(e) {
        this._element = e
    }
    p(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(),
        vt._jQueryInterface.call(p(this), "show")
    }),
    p.fn.tab = vt._jQueryInterface,
    p.fn.tab.Constructor = vt,
    p.fn.tab.noConflict = function() {
        return p.fn.tab = mt,
        vt._jQueryInterface
    }
    ;
    var bt, _t = p.fn.toast, wt = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, Et = {
        animation: !0,
        autohide: !0,
        delay: 500
    }, xt = ((bt = Tt.prototype).show = function() {
        var e, t, n = this, i = p.Event("show.bs.toast");
        p(this._element).trigger(i),
        i.isDefaultPrevented() || (this._config.animation && this._element.classList.add("fade"),
        e = function() {
            n._element.classList.remove("showing"),
            n._element.classList.add("show"),
            p(n._element).trigger("shown.bs.toast"),
            n._config.autohide && (n._timeout = setTimeout(function() {
                n.hide()
            }, n._config.delay))
        }
        ,
        this._element.classList.remove("hide"),
        g.reflow(this._element),
        this._element.classList.add("showing"),
        this._config.animation ? (t = g.getTransitionDurationFromElement(this._element),
        p(this._element).one(g.TRANSITION_END, e).emulateTransitionEnd(t)) : e())
    }
    ,
    bt.hide = function() {
        var e;
        this._element.classList.contains("show") && (e = p.Event("hide.bs.toast"),
        p(this._element).trigger(e),
        e.isDefaultPrevented() || this._close())
    }
    ,
    bt.dispose = function() {
        clearTimeout(this._timeout),
        this._timeout = null,
        this._element.classList.contains("show") && this._element.classList.remove("show"),
        p(this._element).off("click.dismiss.bs.toast"),
        p.removeData(this._element, "bs.toast"),
        this._element = null,
        this._config = null
    }
    ,
    bt._getConfig = function(e) {
        return e = s(s(s({}, Et), p(this._element).data()), "object" == typeof e && e ? e : {}),
        g.typeCheckConfig("toast", e, this.constructor.DefaultType),
        e
    }
    ,
    bt._setListeners = function() {
        var e = this;
        p(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function() {
            return e.hide()
        })
    }
    ,
    bt._close = function() {
        function e() {
            n._element.classList.add("hide"),
            p(n._element).trigger("hidden.bs.toast")
        }
        var t, n = this;
        this._element.classList.remove("show"),
        this._config.animation ? (t = g.getTransitionDurationFromElement(this._element),
        p(this._element).one(g.TRANSITION_END, e).emulateTransitionEnd(t)) : e()
    }
    ,
    Tt._jQueryInterface = function(n) {
        return this.each(function() {
            var e = p(this)
              , t = e.data("bs.toast");
            if (t || (t = new Tt(this,"object" == typeof n && n),
            e.data("bs.toast", t)),
            "string" == typeof n) {
                if (void 0 === t[n])
                    throw new TypeError('No method named "' + n + '"');
                t[n](this)
            }
        })
    }
    ,
    o(Tt, null, [{
        key: "VERSION",
        get: function() {
            return "4.5.0"
        }
    }, {
        key: "DefaultType",
        get: function() {
            return wt
        }
    }, {
        key: "Default",
        get: function() {
            return Et
        }
    }]),
    Tt);
    function Tt(e, t) {
        this._element = e,
        this._config = this._getConfig(t),
        this._timeout = null,
        this._setListeners()
    }
    p.fn.toast = xt._jQueryInterface,
    p.fn.toast.Constructor = xt,
    p.fn.toast.noConflict = function() {
        return p.fn.toast = _t,
        xt._jQueryInterface
    }
    ,
    e.Alert = l,
    e.Button = h,
    e.Carousel = E,
    e.Collapse = O,
    e.Dropdown = je,
    e.Modal = qe,
    e.Popover = at,
    e.Scrollspy = dt,
    e.Tab = vt,
    e.Toast = xt,
    e.Tooltip = Ze,
    e.Util = g,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).SimpleBar = t()
}(this, function() {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    function n(e) {
        return e && e.Math == Math && e
    }
    function m(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
    function b(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
    function r(e) {
        return N.call(e).slice(8, -1)
    }
    function l(e) {
        if (null == e)
            throw TypeError("Can't call method on " + e);
        return e
    }
    function u(e) {
        return j(l(e))
    }
    function v(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
    function i(e, t) {
        if (!v(e))
            return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !v(i = n.call(e)))
            return i;
        if ("function" == typeof (n = e.valueOf) && !v(i = n.call(e)))
            return i;
        if (!t && "function" == typeof (n = e.toString) && !v(i = n.call(e)))
            return i;
        throw TypeError("Can't convert object to primitive value")
    }
    function f(e, t) {
        return L.call(e, t)
    }
    function o(e) {
        return M ? I.createElement(e) : {}
    }
    function x(e) {
        if (!v(e))
            throw TypeError(String(e) + " is not an object");
        return e
    }
    function h(t, n) {
        try {
            F(C, t, n)
        } catch (e) {
            C[t] = n
        }
        return n
    }
    function a(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++U + Q).toString(36)
    }
    function s(e) {
        return Y[e] || (Y[e] = a(e))
    }
    var c, d, p, g, y, _, w, E, T = "object", C = n(typeof globalThis == T && globalThis) || n(typeof window == T && window) || n(typeof self == T && self) || n(typeof e == T && e) || Function("return this")(), S = !m(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }), A = {}.propertyIsEnumerable, k = Object.getOwnPropertyDescriptor, O = {
        f: k && !A.call({
            1: 2
        }, 1) ? function(e) {
            var t = k(this, e);
            return !!t && t.enumerable
        }
        : A
    }, N = {}.toString, D = "".split, j = m(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(e) {
        return "String" == r(e) ? D.call(e, "") : Object(e)
    }
    : Object, L = {}.hasOwnProperty, I = C.document, M = v(I) && v(I.createElement), R = !S && !m(function() {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }), P = Object.getOwnPropertyDescriptor, q = {
        f: S ? P : function(e, t) {
            if (e = u(e),
            t = i(t, !0),
            R)
                try {
                    return P(e, t)
                } catch (e) {}
            if (f(e, t))
                return b(!O.f.call(e, t), e[t])
        }
    }, H = Object.defineProperty, W = {
        f: S ? H : function(e, t, n) {
            if (x(e),
            t = i(t, !0),
            x(n),
            R)
                try {
                    return H(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }, F = S ? function(e, t, n) {
        return W.f(e, t, b(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
    , B = t(function(e) {
        var t = "__core-js_shared__"
          , n = C[t] || h(t, {});
        (e.exports = function(e, t) {
            return n[e] || (n[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.2.1",
            mode: "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }), z = B("native-function-to-string", Function.toString), $ = C.WeakMap, V = "function" == typeof $ && /native code/.test(z.call($)), U = 0, Q = Math.random(), Y = B("keys"), X = {}, G = C.WeakMap;
    function K(e) {
        return "function" == typeof e ? e : void 0
    }
    function J(e, t) {
        return arguments.length < 2 ? K(pe[e]) || K(C[e]) : pe[e] && pe[e][t] || C[e] && C[e][t]
    }
    function Z(e) {
        return isNaN(e = +e) ? 0 : (0 < e ? me : ge)(e)
    }
    function ee(e) {
        return 0 < e ? ve(Z(e), 9007199254740991) : 0
    }
    function te(c) {
        return function(e, t, n) {
            var i, r, o, s = u(e), a = ee(s.length), l = (i = a,
            (r = Z(n)) < 0 ? ye(r + i, 0) : be(r, i));
            if (c && t != t) {
                for (; l < a; )
                    if ((o = s[l++]) != o)
                        return !0
            } else
                for (; l < a; l++)
                    if ((c || l in s) && s[l] === t)
                        return c || l || 0;
            return !c && -1
        }
    }
    function ne(e, t) {
        var n, i = u(e), r = 0, o = [];
        for (n in i)
            !f(X, n) && f(i, n) && o.push(n);
        for (; t.length > r; )
            f(i, n = t[r++]) && (~_e(o, n) || o.push(n));
        return o
    }
    function ie(e, t) {
        var n = ke[Ae(e)];
        return n == Ne || n != Oe && ("function" == typeof t ? m(t) : !!t)
    }
    function re(e, t) {
        var n, i, r, o, s = e.target, a = e.global, l = e.stat, c = a ? C : l ? C[s] || h(s, {}) : (C[s] || {}).prototype;
        if (c)
            for (n in t) {
                if (r = t[n],
                i = e.noTargetGet ? (o = je(c, n)) && o.value : c[n],
                !De(a ? n : s + (l ? "." : "#") + n, e.forced) && void 0 !== i) {
                    if (typeof r == typeof i)
                        continue;
                    !function(e, t) {
                        for (var n = Ce(t), i = W.f, r = q.f, o = 0; o < n.length; o++) {
                            var s = n[o];
                            f(e, s) || i(e, s, r(t, s))
                        }
                    }(r, i)
                }
                (e.sham || i && i.sham) && F(r, "sham", !0),
                de(c, n, r, e)
            }
    }
    function oe(e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e
    }
    function se(i, r, e) {
        if (oe(i),
        void 0 === r)
            return i;
        switch (e) {
        case 0:
            return function() {
                return i.call(r)
            }
            ;
        case 1:
            return function(e) {
                return i.call(r, e)
            }
            ;
        case 2:
            return function(e, t) {
                return i.call(r, e, t)
            }
            ;
        case 3:
            return function(e, t, n) {
                return i.call(r, e, t, n)
            }
        }
        return function() {
            return i.apply(r, arguments)
        }
    }
    function ae(e) {
        return Object(l(e))
    }
    function le(e) {
        return Re[e] || (Re[e] = Ie && Me[e] || (Ie ? Me : a)("Symbol." + e))
    }
    function ce(e, t) {
        var n;
        return Le(e) && ("function" == typeof (n = e.constructor) && (n === Array || Le(n.prototype)) || v(n) && null === (n = n[Pe])) && (n = void 0),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
    }
    function ue(d) {
        var p = 1 == d
          , g = 2 == d
          , m = 3 == d
          , v = 4 == d
          , y = 6 == d
          , b = 5 == d || y;
        return function(e, t, n, i) {
            for (var r, o, s = ae(e), a = j(s), l = se(t, n, 3), c = ee(a.length), u = 0, f = i || ce, h = p ? f(e, c) : g ? f(e, 0) : void 0; u < c; u++)
                if ((b || u in a) && (o = l(r = a[u], u, s),
                d))
                    if (p)
                        h[u] = o;
                    else if (o)
                        switch (d) {
                        case 3:
                            return !0;
                        case 5:
                            return r;
                        case 6:
                            return u;
                        case 2:
                            qe.call(h, r)
                        }
                    else if (v)
                        return !1;
            return y ? -1 : m || v ? v : h
        }
    }
    function fe(e, t) {
        var n = [][e];
        return !n || !m(function() {
            n.call(null, t || function() {
                throw 1
            }
            , 1)
        })
    }
    w = V ? (c = new G,
    d = c.get,
    p = c.has,
    g = c.set,
    y = function(e, t) {
        return g.call(c, e, t),
        t
    }
    ,
    _ = function(e) {
        return d.call(c, e) || {}
    }
    ,
    function(e) {
        return p.call(c, e)
    }
    ) : (E = s("state"),
    X[E] = !0,
    y = function(e, t) {
        return F(e, E, t),
        t
    }
    ,
    _ = function(e) {
        return f(e, E) ? e[E] : {}
    }
    ,
    function(e) {
        return f(e, E)
    }
    );
    var he = {
        set: y,
        get: _,
        has: w,
        enforce: function(e) {
            return w(e) ? _(e) : y(e, {})
        },
        getterFor: function(n) {
            return function(e) {
                var t;
                if (!v(e) || (t = _(e)).type !== n)
                    throw TypeError("Incompatible receiver, " + n + " required");
                return t
            }
        }
    }
      , de = t(function(e) {
        var t = he.get
          , a = he.enforce
          , l = String(z).split("toString");
        B("inspectSource", function(e) {
            return z.call(e)
        }),
        (e.exports = function(e, t, n, i) {
            var r = !!i && !!i.unsafe
              , o = !!i && !!i.enumerable
              , s = !!i && !!i.noTargetGet;
            "function" == typeof n && ("string" != typeof t || f(n, "name") || F(n, "name", t),
            a(n).source = l.join("string" == typeof t ? t : "")),
            e !== C ? (r ? !s && e[t] && (o = !0) : delete e[t],
            o ? e[t] = n : F(e, t, n)) : o ? e[t] = n : h(t, n)
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && t(this).source || z.call(this)
        })
    })
      , pe = C
      , ge = Math.ceil
      , me = Math.floor
      , ve = Math.min
      , ye = Math.max
      , be = Math.min
      , _e = (te(!0),
    te(!1))
      , we = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
      , Ee = we.concat("length", "prototype")
      , xe = {
        f: Object.getOwnPropertyNames || function(e) {
            return ne(e, Ee)
        }
    }
      , Te = {
        f: Object.getOwnPropertySymbols
    }
      , Ce = J("Reflect", "ownKeys") || function(e) {
        var t = xe.f(x(e))
          , n = Te.f;
        return n ? t.concat(n(e)) : t
    }
      , Se = /#|\.prototype\./
      , Ae = ie.normalize = function(e) {
        return String(e).replace(Se, ".").toLowerCase()
    }
      , ke = ie.data = {}
      , Oe = ie.NATIVE = "N"
      , Ne = ie.POLYFILL = "P"
      , De = ie
      , je = q.f
      , Le = Array.isArray || function(e) {
        return "Array" == r(e)
    }
      , Ie = !!Object.getOwnPropertySymbols && !m(function() {
        return !String(Symbol())
    })
      , Me = C.Symbol
      , Re = B("wks")
      , Pe = le("species")
      , qe = [].push
      , He = {
        forEach: ue(0),
        map: ue(1),
        filter: ue(2),
        some: ue(3),
        every: ue(4),
        find: ue(5),
        findIndex: ue(6)
    }
      , We = He.forEach
      , Fe = fe("forEach") ? function(e, t) {
        return We(this, e, 1 < arguments.length ? t : void 0)
    }
    : [].forEach;
    re({
        target: "Array",
        proto: !0,
        forced: [].forEach != Fe
    }, {
        forEach: Fe
    });
    var Be = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var ze in Be) {
        var $e = C[ze]
          , Ve = $e && $e.prototype;
        if (Ve && Ve.forEach !== Fe)
            try {
                F(Ve, "forEach", Fe)
            } catch (e) {
                Ve.forEach = Fe
            }
    }
    var Ue = !("undefined" == typeof window || !window.document || !window.document.createElement)
      , Qe = le("species")
      , Ye = He.filter;
    function Xe() {}
    re({
        target: "Array",
        proto: !0,
        forced: !!m(function() {
            var e = [];
            return (e.constructor = {})[Qe] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== e.filter(Boolean).foo
        })
    }, {
        filter: function(e, t) {
            return Ye(this, e, 1 < arguments.length ? t : void 0)
        }
    });
    var Ge = Object.keys || function(e) {
        return ne(e, we)
    }
      , Ke = S ? Object.defineProperties : function(e, t) {
        x(e);
        for (var n, i = Ge(t), r = i.length, o = 0; o < r; )
            W.f(e, n = i[o++], t[n]);
        return e
    }
      , Je = J("document", "documentElement")
      , Ze = s("IE_PROTO")
      , et = "prototype"
      , tt = function() {
        var e, t = o("iframe"), n = we.length;
        for (t.style.display = "none",
        Je.appendChild(t),
        t.src = String("javascript:"),
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        tt = e.F; n--; )
            delete tt[et][we[n]];
        return tt()
    }
      , nt = Object.create || function(e, t) {
        var n;
        return null !== e ? (Xe[et] = x(e),
        n = new Xe,
        Xe[et] = null,
        n[Ze] = e) : n = tt(),
        void 0 === t ? n : Ke(n, t)
    }
    ;
    X[Ze] = !0;
    var it = le("unscopables")
      , rt = Array.prototype;
    function ot(e) {
        rt[it][e] = !0
    }
    null == rt[it] && F(rt, it, nt(null));
    var st, at, lt, ct = {}, ut = !m(function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }), ft = s("IE_PROTO"), ht = Object.prototype, dt = ut ? Object.getPrototypeOf : function(e) {
        return f(e = ae(e), ft) ? e[ft] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? ht : null
    }
    , pt = le("iterator"), gt = !1;
    function mt(e, t, n) {
        e && !f(e = n ? e : e.prototype, Et) && wt(e, Et, {
            configurable: !0,
            value: t
        })
    }
    function vt() {
        return this
    }
    function yt() {
        return this
    }
    function bt(e, t, n, i, r, o, s) {
        var a, l;
        function c(e) {
            if (e === r && v)
                return v;
            if (!St && e in g)
                return g[e];
            switch (e) {
            case "keys":
            case kt:
            case Ot:
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this)
            }
        }
        l = t + " Iterator",
        (a = n).prototype = nt(xt, {
            next: b(1, i)
        }),
        mt(a, l, !1),
        ct[l] = vt;
        var u, f, h, d = t + " Iterator", p = !1, g = e.prototype, m = g[At] || g["@@iterator"] || r && g[r], v = !St && m || c(r), y = "Array" == t && g.entries || m;
        if (y && (u = dt(y.call(new e)),
        Ct !== Object.prototype && u.next && (dt(u) !== Ct && (Tt ? Tt(u, Ct) : "function" != typeof u[At] && F(u, At, yt)),
        mt(u, d, !0))),
        r == kt && m && m.name !== kt && (p = !0,
        v = function() {
            return m.call(this)
        }
        ),
        g[At] !== v && F(g, At, v),
        ct[t] = v,
        r)
            if (f = {
                values: c(kt),
                keys: o ? v : c("keys"),
                entries: c(Ot)
            },
            s)
                for (h in f)
                    !St && !p && h in g || de(g, h, f[h]);
            else
                re({
                    target: t,
                    proto: !0,
                    forced: St || p
                }, f);
        return f
    }
    [].keys && ("next"in (lt = [].keys()) ? (at = dt(dt(lt))) !== Object.prototype && (st = at) : gt = !0),
    null == st && (st = {}),
    f(st, pt) || F(st, pt, function() {
        return this
    });
    var _t = {
        IteratorPrototype: st,
        BUGGY_SAFARI_ITERATORS: gt
    }
      , wt = W.f
      , Et = le("toStringTag")
      , xt = _t.IteratorPrototype
      , Tt = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var n, i = !1, e = {};
        try {
            (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []),
            i = e instanceof Array
        } catch (e) {}
        return function(e, t) {
            return x(e),
            function() {
                if (!v(t) && null !== t)
                    throw TypeError("Can't set " + String(t) + " as a prototype")
            }(),
            i ? n.call(e, t) : e.__proto__ = t,
            e
        }
    }() : void 0)
      , Ct = _t.IteratorPrototype
      , St = _t.BUGGY_SAFARI_ITERATORS
      , At = le("iterator")
      , kt = "values"
      , Ot = "entries"
      , Nt = "Array Iterator"
      , Dt = he.set
      , jt = he.getterFor(Nt)
      , Lt = bt(Array, "Array", function(e, t) {
        Dt(this, {
            type: Nt,
            target: u(e),
            index: 0,
            kind: t
        })
    }, function() {
        var e = jt(this)
          , t = e.target
          , n = e.kind
          , i = e.index++;
        return !t || i >= t.length ? {
            value: e.target = void 0,
            done: !0
        } : "keys" == n ? {
            value: i,
            done: !1
        } : "values" == n ? {
            value: t[i],
            done: !1
        } : {
            value: [i, t[i]],
            done: !1
        }
    }, "values");
    ct.Arguments = ct.Array,
    ot("keys"),
    ot("values"),
    ot("entries");
    var It = Object.assign
      , Mt = !It || m(function() {
        var e = {}
          , t = {}
          , n = Symbol()
          , i = "abcdefghijklmnopqrst";
        return e[n] = 7,
        i.split("").forEach(function(e) {
            t[e] = e
        }),
        7 != It({}, e)[n] || Ge(It({}, t)).join("") != i
    }) ? function(e, t) {
        for (var n = ae(e), i = arguments.length, r = 1, o = Te.f, s = O.f; r < i; )
            for (var a, l = j(arguments[r++]), c = o ? Ge(l).concat(o(l)) : Ge(l), u = c.length, f = 0; f < u; )
                a = c[f++],
                S && !s.call(l, a) || (n[a] = l[a]);
        return n
    }
    : It;
    function Rt(e) {
        var t, n, i;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), Pt)) ? n : qt ? r(t) : "Object" == (i = r(t)) && "function" == typeof t.callee ? "Arguments" : i
    }
    re({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Mt
    }, {
        assign: Mt
    });
    var Pt = le("toStringTag")
      , qt = "Arguments" == r(function() {
        return arguments
    }())
      , Ht = {};
    Ht[le("toStringTag")] = "z";
    var Wt = "[object z]" !== String(Ht) ? function() {
        return "[object " + Rt(this) + "]"
    }
    : Ht.toString
      , Ft = Object.prototype;
    function Bt(n) {
        return function(e) {
            var t = String(l(e));
            return 1 & n && (t = t.replace(Vt, "")),
            2 & n && (t = t.replace(Ut, "")),
            t
        }
    }
    Wt !== Ft.toString && de(Ft, "toString", Wt, {
        unsafe: !0
    });
    var zt = "\t\n\v\f\r                　\u2028\u2029\ufeff"
      , $t = "[" + zt + "]"
      , Vt = RegExp("^" + $t + $t + "*")
      , Ut = RegExp($t + $t + "*$")
      , Qt = (Bt(1),
    Bt(2),
    Bt(3))
      , Yt = C.parseInt
      , Xt = /^[+-]?0[Xx]/
      , Gt = 8 !== Yt(zt + "08") || 22 !== Yt(zt + "0x16") ? function(e, t) {
        var n = Qt(String(e));
        return Yt(n, t >>> 0 || (Xt.test(n) ? 16 : 10))
    }
    : Yt;
    function Kt(a) {
        return function(e, t) {
            var n, i, r = String(l(e)), o = Z(t), s = r.length;
            return o < 0 || s <= o ? a ? "" : void 0 : (n = r.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === s || (i = r.charCodeAt(o + 1)) < 56320 || 57343 < i ? a ? r.charAt(o) : n : a ? r.slice(o, o + 2) : i - 56320 + (n - 55296 << 10) + 65536
        }
    }
    re({
        global: !0,
        forced: parseInt != Gt
    }, {
        parseInt: Gt
    });
    var Jt = {
        codeAt: Kt(!1),
        charAt: Kt(!0)
    }
      , Zt = Jt.charAt
      , en = "String Iterator"
      , tn = he.set
      , nn = he.getterFor(en);
    function rn(e, t, n) {
        for (var i in t)
            de(e, i, t[i], n);
        return e
    }
    function on(e, t, n) {
        if (!(e instanceof t))
            throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e
    }
    bt(String, "String", function(e) {
        tn(this, {
            type: en,
            string: String(e),
            index: 0
        })
    }, function() {
        var e, t = nn(this), n = t.string, i = t.index;
        return i >= n.length ? {
            value: void 0,
            done: !0
        } : (e = Zt(n, i),
        t.index += e.length,
        {
            value: e,
            done: !1
        })
    });
    var sn = !m(function() {
        return Object.isExtensible(Object.preventExtensions({}))
    })
      , an = t(function(e) {
        function n(e) {
            t(e, i, {
                value: {
                    objectID: "O" + ++r,
                    weakData: {}
                }
            })
        }
        var t = W.f
          , i = a("meta")
          , r = 0
          , o = Object.isExtensible || function() {
            return !0
        }
          , s = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!v(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!f(e, i)) {
                    if (!o(e))
                        return "F";
                    if (!t)
                        return "E";
                    n(e)
                }
                return e[i].objectID
            },
            getWeakData: function(e, t) {
                if (!f(e, i)) {
                    if (!o(e))
                        return !0;
                    if (!t)
                        return !1;
                    n(e)
                }
                return e[i].weakData
            },
            onFreeze: function(e) {
                return sn && s.REQUIRED && o(e) && !f(e, i) && n(e),
                e
            }
        };
        X[i] = !0
    })
      , ln = (an.REQUIRED,
    an.fastKey,
    an.getWeakData,
    an.onFreeze,
    le("iterator"))
      , cn = Array.prototype
      , un = le("iterator")
      , fn = t(function(e) {
        function h(e, t) {
            this.stopped = e,
            this.result = t
        }
        (e.exports = function(e, t, n, i, r) {
            var o, s, a, l, c, u, f = se(t, n, i ? 2 : 1);
            if (r)
                o = e;
            else {
                if ("function" != typeof (s = function() {
                    if (null != e)
                        return e[un] || e["@@iterator"] || ct[Rt(e)]
                }()))
                    throw TypeError("Target is not iterable");
                if (void 0 !== s && (ct.Array === s || cn[ln] === s)) {
                    for (a = 0,
                    l = ee(e.length); a < l; a++)
                        if ((c = i ? f(x(u = e[a])[0], u[1]) : f(e[a])) && c instanceof h)
                            return c;
                    return new h(!1)
                }
                o = s.call(e)
            }
            for (; !(u = o.next()).done; )
                if ((c = function(e, t, n, i) {
                    try {
                        return i ? t(x(n)[0], n[1]) : t(n)
                    } catch (t) {
                        var r = e.return;
                        throw void 0 !== r && x(r.call(e)),
                        t
                    }
                }(o, f, u.value, i)) && c instanceof h)
                    return c;
            return new h(!1)
        }
        ).stop = function(e) {
            return new h(!0,e)
        }
    })
      , hn = le("iterator")
      , dn = !1;
    try {
        var pn = 0
          , gn = {
            next: function() {
                return {
                    done: !!pn++
                }
            },
            return: function() {
                dn = !0
            }
        };
        gn[hn] = function() {
            return this
        }
        ,
        Array.from(gn, function() {
            throw 2
        })
    } catch (e) {}
    function mn(s, e, t, a, i) {
        function n(e) {
            var n = h[e];
            de(h, e, "add" == e ? function(e) {
                return n.call(this, 0 === e ? 0 : e),
                this
            }
            : "delete" == e ? function(e) {
                return !(i && !v(e)) && n.call(this, 0 === e ? 0 : e)
            }
            : "get" == e ? function(e) {
                return i && !v(e) ? void 0 : n.call(this, 0 === e ? 0 : e)
            }
            : "has" == e ? function(e) {
                return !(i && !v(e)) && n.call(this, 0 === e ? 0 : e)
            }
            : function(e, t) {
                return n.call(this, 0 === e ? 0 : e, t),
                this
            }
            )
        }
        var r, o, l, c, u, f = C[s], h = f && f.prototype, d = f, p = a ? "set" : "add", g = {};
        return De(s, "function" != typeof f || !(i || h.forEach && !m(function() {
            (new f).entries().next()
        }))) ? (d = t.getConstructor(e, s, a, p),
        an.REQUIRED = !0) : De(s, !0) && (o = (r = new d)[p](i ? {} : -0, 1) != r,
        l = m(function() {
            r.has(1)
        }),
        c = function() {
            if (!dn)
                return !1;
            var e = !1;
            try {
                var t = {};
                t[hn] = function() {
                    return {
                        next: function() {
                            return {
                                done: e = !0
                            }
                        }
                    }
                }
                ,
                new f(t)
            } catch (e) {}
            return e
        }(),
        u = !i && m(function() {
            for (var e = new f, t = 5; t--; )
                e[p](t, t);
            return !e.has(-0)
        }),
        c || (((d = e(function(e, t) {
            on(e, d, s);
            var n, i, r, o = (n = new f,
            Tt && "function" == typeof (i = e.constructor) && i !== d && v(r = i.prototype) && r !== d.prototype && Tt(n, r),
            n);
            return null != t && fn(t, o[p], o, a),
            o
        })).prototype = h).constructor = d),
        (l || u) && (n("delete"),
        n("has"),
        a && n("get")),
        (u || o) && n(p),
        i && h.clear && delete h.clear),
        re({
            global: !0,
            forced: (g[s] = d) != f
        }, g),
        mt(d, s),
        i || t.setStrong(d, s, a),
        d
    }
    function vn(e) {
        return e.frozen || (e.frozen = new Cn)
    }
    function yn(e, t) {
        return En(e.entries, function(e) {
            return e[0] === t
        })
    }
    var bn = an.getWeakData
      , _n = he.set
      , wn = he.getterFor
      , En = He.find
      , xn = He.findIndex
      , Tn = 0
      , Cn = function() {
        this.entries = []
    };
    Cn.prototype = {
        get: function(e) {
            var t = yn(this, e);
            if (t)
                return t[1]
        },
        has: function(e) {
            return !!yn(this, e)
        },
        set: function(e, t) {
            var n = yn(this, e);
            n ? n[1] = t : this.entries.push([e, t])
        },
        delete: function(t) {
            var e = xn(this.entries, function(e) {
                return e[0] === t
            });
            return ~e && this.entries.splice(e, 1),
            !!~e
        }
    };
    var Sn = {
        getConstructor: function(e, n, i, r) {
            function o(e, t, n) {
                var i = a(e)
                  , r = bn(x(t), !0);
                return !0 === r ? vn(i).set(t, n) : r[i.id] = n,
                e
            }
            var s = e(function(e, t) {
                on(e, s, n),
                _n(e, {
                    type: n,
                    id: Tn++,
                    frozen: void 0
                }),
                null != t && fn(t, e[r], e, i)
            })
              , a = wn(n);
            return rn(s.prototype, {
                delete: function(e) {
                    var t = a(this);
                    if (!v(e))
                        return !1;
                    var n = bn(e);
                    return !0 === n ? vn(t).delete(e) : n && f(n, t.id) && delete n[t.id]
                },
                has: function(e) {
                    var t = a(this);
                    if (!v(e))
                        return !1;
                    var n = bn(e);
                    return !0 === n ? vn(t).has(e) : n && f(n, t.id)
                }
            }),
            rn(s.prototype, i ? {
                get: function(e) {
                    var t = a(this);
                    if (v(e)) {
                        var n = bn(e);
                        return !0 === n ? vn(t).get(e) : n ? n[t.id] : void 0
                    }
                },
                set: function(e, t) {
                    return o(this, e, t)
                }
            } : {
                add: function(e) {
                    return o(this, e, !0)
                }
            }),
            s
        }
    }
      , An = (t(function(e) {
        function t(t) {
            return function(e) {
                return t(this, arguments.length ? e : void 0)
            }
        }
        var i, n, r, o, s, a, l = he.enforce, c = !C.ActiveXObject && "ActiveXObject"in C, u = Object.isExtensible, f = e.exports = mn("WeakMap", t, Sn, !0, !0);
        V && c && (i = Sn.getConstructor(t, "WeakMap", !0),
        an.REQUIRED = !0,
        n = f.prototype,
        r = n.delete,
        o = n.has,
        s = n.get,
        a = n.set,
        rn(n, {
            delete: function(e) {
                if (!v(e) || u(e))
                    return r.call(this, e);
                var t = l(this);
                return t.frozen || (t.frozen = new i),
                r.call(this, e) || t.frozen.delete(e)
            },
            has: function(e) {
                if (!v(e) || u(e))
                    return o.call(this, e);
                var t = l(this);
                return t.frozen || (t.frozen = new i),
                o.call(this, e) || t.frozen.has(e)
            },
            get: function(e) {
                if (!v(e) || u(e))
                    return s.call(this, e);
                var t = l(this);
                return t.frozen || (t.frozen = new i),
                o.call(this, e) ? s.call(this, e) : t.frozen.get(e)
            },
            set: function(e, t) {
                var n;
                return v(e) && !u(e) ? ((n = l(this)).frozen || (n.frozen = new i),
                o.call(this, e) ? a.call(this, e, t) : n.frozen.set(e, t)) : a.call(this, e, t),
                this
            }
        }))
    }),
    le("iterator"))
      , kn = le("toStringTag")
      , On = Lt.values;
    for (var Nn in Be) {
        var Dn = C[Nn]
          , jn = Dn && Dn.prototype;
        if (jn) {
            if (jn[An] !== On)
                try {
                    F(jn, An, On)
                } catch (e) {
                    jn[An] = On
                }
            if (jn[kn] || F(jn, kn, Nn),
            Be[Nn])
                for (var Ln in Lt)
                    if (jn[Ln] !== Lt[Ln])
                        try {
                            F(jn, Ln, Lt[Ln])
                        } catch (e) {
                            jn[Ln] = Lt[Ln]
                        }
        }
    }
    function In() {
        return Vn.Date.now()
    }
    var Mn = "Expected a function"
      , Rn = NaN
      , Pn = "[object Symbol]"
      , qn = /^\s+|\s+$/g
      , Hn = /^[-+]0x[0-9a-f]+$/i
      , Wn = /^0b[01]+$/i
      , Fn = /^0o[0-7]+$/i
      , Bn = parseInt
      , zn = "object" == typeof e && e && e.Object === Object && e
      , $n = "object" == typeof self && self && self.Object === Object && self
      , Vn = zn || $n || Function("return this")()
      , Un = Object.prototype.toString
      , Qn = Math.max
      , Yn = Math.min;
    function Xn(e) {
        var t = typeof e;
        return e && ("object" == t || "function" == t)
    }
    function Gn(e) {
        if ("number" == typeof e)
            return e;
        if ("symbol" == typeof e || e && "object" == typeof e && Un.call(e) == Pn)
            return Rn;
        var t;
        if (Xn(e) && (e = Xn(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t),
        "string" != typeof e)
            return 0 === e ? e : +e;
        e = e.replace(qn, "");
        var n = Wn.test(e);
        return n || Fn.test(e) ? Bn(e.slice(2), n ? 2 : 8) : Hn.test(e) ? Rn : +e
    }
    function Kn() {
        return si.Date.now()
    }
    var Jn = function(e, t, n) {
        var i = !0
          , r = !0;
        if ("function" != typeof e)
            throw new TypeError(Mn);
        return Xn(n) && (i = "leading"in n ? !!n.leading : i,
        r = "trailing"in n ? !!n.trailing : r),
        function(i, r, e) {
            var o, s, n, a, l, c, u = 0, f = !1, h = !1, t = !0;
            if ("function" != typeof i)
                throw new TypeError(Mn);
            function d(e) {
                var t = o
                  , n = s;
                return o = s = void 0,
                u = e,
                a = i.apply(n, t)
            }
            function p(e) {
                var t = e - c;
                return void 0 === c || r <= t || t < 0 || h && n <= e - u
            }
            function g() {
                var e, t = In();
                if (p(t))
                    return m(t);
                l = setTimeout(g, (e = r - (t - c),
                h ? Yn(e, n - (t - u)) : e))
            }
            function m(e) {
                return l = void 0,
                t && o ? d(e) : (o = s = void 0,
                a)
            }
            function v() {
                var e, t = In(), n = p(t);
                if (o = arguments,
                s = this,
                c = t,
                n) {
                    if (void 0 === l)
                        return u = e = c,
                        l = setTimeout(g, r),
                        f ? d(e) : a;
                    if (h)
                        return l = setTimeout(g, r),
                        d(c)
                }
                return void 0 === l && (l = setTimeout(g, r)),
                a
            }
            return r = Gn(r) || 0,
            Xn(e) && (f = !!e.leading,
            n = (h = "maxWait"in e) ? Qn(Gn(e.maxWait) || 0, r) : n,
            t = "trailing"in e ? !!e.trailing : t),
            v.cancel = function() {
                void 0 !== l && clearTimeout(l),
                o = c = s = l = void (u = 0)
            }
            ,
            v.flush = function() {
                return void 0 === l ? a : m(In())
            }
            ,
            v
        }(e, t, {
            leading: i,
            maxWait: t,
            trailing: r
        })
    }
      , Zn = /^\s+|\s+$/g
      , ei = /^[-+]0x[0-9a-f]+$/i
      , ti = /^0b[01]+$/i
      , ni = /^0o[0-7]+$/i
      , ii = parseInt
      , ri = "object" == typeof e && e && e.Object === Object && e
      , oi = "object" == typeof self && self && self.Object === Object && self
      , si = ri || oi || Function("return this")()
      , ai = Object.prototype.toString
      , li = Math.max
      , ci = Math.min;
    function ui(e) {
        var t = typeof e;
        return e && ("object" == t || "function" == t)
    }
    function fi(e) {
        if ("number" == typeof e)
            return e;
        if ("symbol" == typeof e || e && "object" == typeof e && "[object Symbol]" == ai.call(e))
            return NaN;
        var t;
        if (ui(e) && (e = ui(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t),
        "string" != typeof e)
            return 0 === e ? e : +e;
        e = e.replace(Zn, "");
        var n = ti.test(e);
        return n || ni.test(e) ? ii(e.slice(2), n ? 2 : 8) : ei.test(e) ? NaN : +e
    }
    var hi, di = function(i, r, e) {
        var o, s, n, a, l, c, u = 0, f = !1, h = !1, t = !0;
        if ("function" != typeof i)
            throw new TypeError("Expected a function");
        function d(e) {
            var t = o
              , n = s;
            return o = s = void 0,
            u = e,
            a = i.apply(n, t)
        }
        function p(e) {
            var t = e - c;
            return void 0 === c || r <= t || t < 0 || h && n <= e - u
        }
        function g() {
            var e, t = Kn();
            if (p(t))
                return m(t);
            l = setTimeout(g, (e = r - (t - c),
            h ? ci(e, n - (t - u)) : e))
        }
        function m(e) {
            return l = void 0,
            t && o ? d(e) : (o = s = void 0,
            a)
        }
        function v() {
            var e, t = Kn(), n = p(t);
            if (o = arguments,
            s = this,
            c = t,
            n) {
                if (void 0 === l)
                    return u = e = c,
                    l = setTimeout(g, r),
                    f ? d(e) : a;
                if (h)
                    return l = setTimeout(g, r),
                    d(c)
            }
            return void 0 === l && (l = setTimeout(g, r)),
            a
        }
        return r = fi(r) || 0,
        ui(e) && (f = !!e.leading,
        n = (h = "maxWait"in e) ? li(fi(e.maxWait) || 0, r) : n,
        t = "trailing"in e ? !!e.trailing : t),
        v.cancel = function() {
            void 0 !== l && clearTimeout(l),
            o = c = s = l = void (u = 0)
        }
        ,
        v.flush = function() {
            return void 0 === l ? a : m(Kn())
        }
        ,
        v
    }, pi = "Expected a function", gi = "__lodash_hash_undefined__", mi = "[object Function]", vi = "[object GeneratorFunction]", yi = /^\[object .+?Constructor\]$/, bi = "object" == typeof e && e && e.Object === Object && e, _i = "object" == typeof self && self && self.Object === Object && self, wi = bi || _i || Function("return this")(), Ei = Array.prototype, xi = Function.prototype, Ti = Object.prototype, Ci = wi["__core-js_shared__"], Si = (hi = /[^.]+$/.exec(Ci && Ci.keys && Ci.keys.IE_PROTO || "")) ? "Symbol(src)_1." + hi : "", Ai = xi.toString, ki = Ti.hasOwnProperty, Oi = Ti.toString, Ni = RegExp("^" + Ai.call(ki).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Di = Ei.splice, ji = Hi(wi, "Map"), Li = Hi(Object, "create");
    function Ii(e) {
        var t = -1
          , n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    function Mi(e) {
        var t = -1
          , n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    function Ri(e) {
        var t = -1
          , n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    function Pi(e, t) {
        for (var n, i = e.length; i--; )
            if ((n = e[i][0]) === t || n != n && t != t)
                return i;
        return -1
    }
    function qi(e, t) {
        var n, i = e.__data__;
        return ("string" == (n = typeof t) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
    }
    function Hi(e, t) {
        var n, i, r, o = null == e ? void 0 : e[t];
        return !Fi(n = o) || Si && Si in n || !((r = Fi(i = n) ? Oi.call(i) : "") == mi || r == vi || function(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
                try {
                    t = !!(e + "")
                } catch (e) {}
            return t
        }(n) ? Ni : yi).test(function(e) {
            if (null != e) {
                try {
                    return Ai.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(n)) ? void 0 : o
    }
    function Wi(r, o) {
        if ("function" != typeof r || o && "function" != typeof o)
            throw new TypeError(pi);
        var s = function() {
            var e = arguments
              , t = o ? o.apply(this, e) : e[0]
              , n = s.cache;
            if (n.has(t))
                return n.get(t);
            var i = r.apply(this, e);
            return s.cache = n.set(t, i),
            i
        };
        return s.cache = new (Wi.Cache || Ri),
        s
    }
    function Fi(e) {
        var t = typeof e;
        return e && ("object" == t || "function" == t)
    }
    Ii.prototype.clear = function() {
        this.__data__ = Li ? Li(null) : {}
    }
    ,
    Ii.prototype.delete = function(e) {
        return this.has(e) && delete this.__data__[e]
    }
    ,
    Ii.prototype.get = function(e) {
        var t = this.__data__;
        if (Li) {
            var n = t[e];
            return n === gi ? void 0 : n
        }
        return ki.call(t, e) ? t[e] : void 0
    }
    ,
    Ii.prototype.has = function(e) {
        var t = this.__data__;
        return Li ? void 0 !== t[e] : ki.call(t, e)
    }
    ,
    Ii.prototype.set = function(e, t) {
        return this.__data__[e] = Li && void 0 === t ? gi : t,
        this
    }
    ,
    Mi.prototype.clear = function() {
        this.__data__ = []
    }
    ,
    Mi.prototype.delete = function(e) {
        var t = this.__data__
          , n = Pi(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : Di.call(t, n, 1),
        0))
    }
    ,
    Mi.prototype.get = function(e) {
        var t = this.__data__
          , n = Pi(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
    ,
    Mi.prototype.has = function(e) {
        return -1 < Pi(this.__data__, e)
    }
    ,
    Mi.prototype.set = function(e, t) {
        var n = this.__data__
          , i = Pi(n, e);
        return i < 0 ? n.push([e, t]) : n[i][1] = t,
        this
    }
    ,
    Ri.prototype.clear = function() {
        this.__data__ = {
            hash: new Ii,
            map: new (ji || Mi),
            string: new Ii
        }
    }
    ,
    Ri.prototype.delete = function(e) {
        return qi(this, e).delete(e)
    }
    ,
    Ri.prototype.get = function(e) {
        return qi(this, e).get(e)
    }
    ,
    Ri.prototype.has = function(e) {
        return qi(this, e).has(e)
    }
    ,
    Ri.prototype.set = function(e, t) {
        return qi(this, e).set(e, t),
        this
    }
    ,
    Wi.Cache = Ri;
    var Bi = Wi
      , zi = function() {
        if ("undefined" != typeof Map)
            return Map;
        function i(e, n) {
            var i = -1;
            return e.some(function(e, t) {
                return e[0] === n && (i = t,
                !0)
            }),
            i
        }
        return Object.defineProperty(e.prototype, "size", {
            get: function() {
                return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.get = function(e) {
            var t = i(this.__entries__, e)
              , n = this.__entries__[t];
            return n && n[1]
        }
        ,
        e.prototype.set = function(e, t) {
            var n = i(this.__entries__, e);
            ~n ? this.__entries__[n][1] = t : this.__entries__.push([e, t])
        }
        ,
        e.prototype.delete = function(e) {
            var t = this.__entries__
              , n = i(t, e);
            ~n && t.splice(n, 1)
        }
        ,
        e.prototype.has = function(e) {
            return !!~i(this.__entries__, e)
        }
        ,
        e.prototype.clear = function() {
            this.__entries__.splice(0)
        }
        ,
        e.prototype.forEach = function(e, t) {
            void 0 === t && (t = null);
            for (var n = 0, i = this.__entries__; n < i.length; n++) {
                var r = i[n];
                e.call(t, r[1], r[0])
            }
        }
        ,
        e;
        function e() {
            this.__entries__ = []
        }
    }()
      , $i = "undefined" != typeof window && "undefined" != typeof document && window.document === document
      , Vi = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")()
      , Ui = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Vi) : function(e) {
        return setTimeout(function() {
            return e(Date.now())
        }, 1e3 / 60)
    }
      , Qi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
      , Yi = "undefined" != typeof MutationObserver
      , Xi = (Gi.prototype.addObserver = function(e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e),
        this.connected_ || this.connect_()
    }
    ,
    Gi.prototype.removeObserver = function(e) {
        var t = this.observers_
          , n = t.indexOf(e);
        ~n && t.splice(n, 1),
        !t.length && this.connected_ && this.disconnect_()
    }
    ,
    Gi.prototype.refresh = function() {
        this.updateObservers_() && this.refresh()
    }
    ,
    Gi.prototype.updateObservers_ = function() {
        var e = this.observers_.filter(function(e) {
            return e.gatherActive(),
            e.hasActive()
        });
        return e.forEach(function(e) {
            return e.broadcastActive()
        }),
        0 < e.length
    }
    ,
    Gi.prototype.connect_ = function() {
        $i && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_),
        window.addEventListener("resize", this.refresh),
        Yi ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
        this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
        this.mutationEventsAdded_ = !0),
        this.connected_ = !0)
    }
    ,
    Gi.prototype.disconnect_ = function() {
        $i && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
        window.removeEventListener("resize", this.refresh),
        this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
        this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
        this.mutationsObserver_ = null,
        this.mutationEventsAdded_ = !1,
        this.connected_ = !1)
    }
    ,
    Gi.prototype.onTransitionEnd_ = function(e) {
        var t = e.propertyName
          , n = void 0 === t ? "" : t;
        Qi.some(function(e) {
            return !!~n.indexOf(e)
        }) && this.refresh()
    }
    ,
    Gi.getInstance = function() {
        return this.instance_ || (this.instance_ = new Gi),
        this.instance_
    }
    ,
    Gi.instance_ = null,
    Gi);
    function Gi() {
        function e() {
            o && (o = !1,
            i()),
            s && n()
        }
        function t() {
            Ui(e)
        }
        function n() {
            var e = Date.now();
            if (o) {
                if (e - a < 2)
                    return;
                s = !0
            } else
                s = !(o = !0),
                setTimeout(t, r);
            a = e
        }
        var i, r, o, s, a;
        this.connected_ = !1,
        this.mutationEventsAdded_ = !1,
        this.mutationsObserver_ = null,
        this.observers_ = [],
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
        this.refresh = (i = this.refresh.bind(this),
        s = o = !(r = 20),
        a = 0,
        n)
    }
    function Ki(e, t) {
        for (var n = 0, i = Object.keys(t); n < i.length; n++) {
            var r = i[n];
            Object.defineProperty(e, r, {
                value: t[r],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    }
    var Ji = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || Vi
    }
      , Zi = rr(0, 0, 0, 0);
    function er(e) {
        return parseFloat(e) || 0
    }
    function tr(n) {
        for (var e = [], t = 1; t < arguments.length; t++)
            e[t - 1] = arguments[t];
        return e.reduce(function(e, t) {
            return e + er(n["border-" + t + "-width"])
        }, 0)
    }
    var nr = "undefined" != typeof SVGGraphicsElement ? function(e) {
        return e instanceof Ji(e).SVGGraphicsElement
    }
    : function(e) {
        return e instanceof Ji(e).SVGElement && "function" == typeof e.getBBox
    }
    ;
    function ir(e) {
        return $i ? nr(e) ? rr(0, 0, (t = e.getBBox()).width, t.height) : function(e) {
            var t = e.clientWidth
              , n = e.clientHeight;
            if (!t && !n)
                return Zi;
            var i, r, o = Ji(e).getComputedStyle(e), s = function(e) {
                for (var t = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n++) {
                    var r = i[n]
                      , o = e["padding-" + r];
                    t[r] = er(o)
                }
                return t
            }(o), a = s.left + s.right, l = s.top + s.bottom, c = er(o.width), u = er(o.height);
            return "border-box" === o.boxSizing && (Math.round(c + a) !== t && (c -= tr(o, "left", "right") + a),
            Math.round(u + l) !== n && (u -= tr(o, "top", "bottom") + l)),
            e !== Ji(e).document.documentElement && (i = Math.round(c + a) - t,
            r = Math.round(u + l) - n,
            1 !== Math.abs(i) && (c -= i),
            1 !== Math.abs(r) && (u -= r)),
            rr(s.left, s.top, c, u)
        }(e) : Zi;
        var t
    }
    function rr(e, t, n, i) {
        return {
            x: e,
            y: t,
            width: n,
            height: i
        }
    }
    var or = (sr.prototype.isActive = function() {
        var e = ir(this.target);
        return (this.contentRect_ = e).width !== this.broadcastWidth || e.height !== this.broadcastHeight
    }
    ,
    sr.prototype.broadcastRect = function() {
        var e = this.contentRect_;
        return this.broadcastWidth = e.width,
        this.broadcastHeight = e.height,
        e
    }
    ,
    sr);
    function sr(e) {
        this.broadcastWidth = 0,
        this.broadcastHeight = 0,
        this.contentRect_ = rr(0, 0, 0, 0),
        this.target = e
    }
    function ar(e, t) {
        var n, i, r, o, s, a, l = (n = t.x,
        i = t.y,
        r = t.width,
        o = t.height,
        s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
        a = Object.create(s.prototype),
        Ki(a, {
            x: n,
            y: i,
            width: r,
            height: o,
            top: i,
            right: n + r,
            bottom: o + i,
            left: n
        }),
        a);
        Ki(this, {
            target: e,
            contentRect: l
        })
    }
    var lr = (cr.prototype.observe = function(e) {
        if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(e instanceof Ji(e).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
            var t = this.observations_;
            t.has(e) || (t.set(e, new or(e)),
            this.controller_.addObserver(this),
            this.controller_.refresh())
        }
    }
    ,
    cr.prototype.unobserve = function(e) {
        if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(e instanceof Ji(e).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
            var t = this.observations_;
            t.has(e) && (t.delete(e),
            t.size || this.controller_.removeObserver(this))
        }
    }
    ,
    cr.prototype.disconnect = function() {
        this.clearActive(),
        this.observations_.clear(),
        this.controller_.removeObserver(this)
    }
    ,
    cr.prototype.gatherActive = function() {
        var t = this;
        this.clearActive(),
        this.observations_.forEach(function(e) {
            e.isActive() && t.activeObservations_.push(e)
        })
    }
    ,
    cr.prototype.broadcastActive = function() {
        var e, t;
        this.hasActive() && (e = this.callbackCtx_,
        t = this.activeObservations_.map(function(e) {
            return new ar(e.target,e.broadcastRect())
        }),
        this.callback_.call(e, t, e),
        this.clearActive())
    }
    ,
    cr.prototype.clearActive = function() {
        this.activeObservations_.splice(0)
    }
    ,
    cr.prototype.hasActive = function() {
        return 0 < this.activeObservations_.length
    }
    ,
    cr);
    function cr(e, t, n) {
        if (this.activeObservations_ = [],
        this.observations_ = new zi,
        "function" != typeof e)
            throw new TypeError("The callback provided as parameter 1 is not a function.");
        this.callback_ = e,
        this.controller_ = t,
        this.callbackCtx_ = n
    }
    function ur(e) {
        if (!(this instanceof ur))
            throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
        var t = Xi.getInstance()
          , n = new lr(e,t,this);
        fr.set(this, n)
    }
    var fr = new ("undefined" != typeof WeakMap ? WeakMap : zi);
    ["observe", "unobserve", "disconnect"].forEach(function(t) {
        ur.prototype[t] = function() {
            var e;
            return (e = fr.get(this))[t].apply(e, arguments)
        }
    });
    var hr = void 0 !== Vi.ResizeObserver ? Vi.ResizeObserver : ur
      , dr = null
      , pr = null;
    function gr() {
        if (null === dr) {
            if ("undefined" == typeof document)
                return dr = 0;
            var e = document.body
              , t = document.createElement("div");
            t.classList.add("simplebar-hide-scrollbar"),
            e.appendChild(t);
            var n = t.getBoundingClientRect().right;
            e.removeChild(t),
            dr = n
        }
        return dr
    }
    function mr(c) {
        return function(e, t, n, i) {
            oe(t);
            var r = ae(e)
              , o = j(r)
              , s = ee(r.length)
              , a = c ? s - 1 : 0
              , l = c ? -1 : 1;
            if (n < 2)
                for (; ; ) {
                    if (a in o) {
                        i = o[a],
                        a += l;
                        break
                    }
                    if (a += l,
                    c ? a < 0 : s <= a)
                        throw TypeError("Reduce of empty array with no initial value")
                }
            for (; c ? 0 <= a : a < s; a += l)
                a in o && (i = t(i, o[a], a, r));
            return i
        }
    }
    Ue && window.addEventListener("resize", function() {
        pr !== window.devicePixelRatio && (pr = window.devicePixelRatio,
        dr = null)
    });
    var vr = [mr(!1), mr(!0)][0];
    re({
        target: "Array",
        proto: !0,
        forced: fe("reduce")
    }, {
        reduce: function(e, t) {
            return vr(this, e, arguments.length, 1 < arguments.length ? t : void 0)
        }
    });
    var yr = W.f
      , br = Function.prototype
      , _r = br.toString
      , wr = /^\s*function ([^ (]*)/;
    !S || "name"in br || yr(br, "name", {
        configurable: !0,
        get: function() {
            try {
                return _r.call(this).match(wr)[1]
            } catch (e) {
                return ""
            }
        }
    });
    var Er, xr, Tr = RegExp.prototype.exec, Cr = String.prototype.replace, Sr = Tr, Ar = (Er = /a/,
    xr = /b*/g,
    Tr.call(Er, "a"),
    Tr.call(xr, "a"),
    0 !== Er.lastIndex || 0 !== xr.lastIndex), kr = void 0 !== /()??/.exec("")[1];
    (Ar || kr) && (Sr = function(e) {
        var t, n, i, r;
        return kr && (n = new RegExp("^" + this.source + "$(?!\\s)",function() {
            var e = x(this)
              , t = "";
            return e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
        }
        .call(this))),
        Ar && (t = this.lastIndex),
        i = Tr.call(this, e),
        Ar && i && (this.lastIndex = this.global ? i.index + i[0].length : t),
        kr && i && 1 < i.length && Cr.call(i[0], n, function() {
            for (r = 1; r < arguments.length - 2; r++)
                void 0 === arguments[r] && (i[r] = void 0)
        }),
        i
    }
    );
    var Or = Sr;
    function Nr(n, e, t, i) {
        var o, r, s, a, l = le(n), c = !m(function() {
            var e = {};
            return e[l] = function() {
                return 7
            }
            ,
            7 != ""[n](e)
        }), u = c && !m(function() {
            var e = !1
              , t = /a/;
            return t.exec = function() {
                return e = !0,
                null
            }
            ,
            "split" === n && (t.constructor = {},
            t.constructor[Lr] = function() {
                return t
            }
            ),
            t[l](""),
            !e
        });
        c && u && ("replace" !== n || Ir) && ("split" !== n || Mr) || (o = /./[l],
        s = (r = t(l, ""[n], function(e, t, n, i, r) {
            return t.exec === Or ? c && !r ? {
                done: !0,
                value: o.call(t, n, i)
            } : {
                done: !0,
                value: e.call(n, t, i)
            } : {
                done: !1
            }
        }))[0],
        a = r[1],
        de(String.prototype, n, s),
        de(RegExp.prototype, l, 2 == e ? function(e, t) {
            return a.call(e, this, t)
        }
        : function(e) {
            return a.call(e, this)
        }
        ),
        i && F(RegExp.prototype[l], "sham", !0))
    }
    function Dr(e, t, n) {
        return t + (n ? Rr(e, t).length : 1)
    }
    function jr(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var i = n.call(e, t);
            if ("object" != typeof i)
                throw TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== r(e))
            throw TypeError("RegExp#exec called on incompatible receiver");
        return Or.call(e, t)
    }
    re({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Or
    }, {
        exec: Or
    });
    var Lr = le("species")
      , Ir = !m(function() {
        var e = /./;
        return e.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            },
            e
        }
        ,
        "7" !== "".replace(e, "$<a>")
    })
      , Mr = !m(function() {
        var e = /(?:)/
          , t = e.exec;
        e.exec = function() {
            return t.apply(this, arguments)
        }
        ;
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
    })
      , Rr = Jt.charAt;
    Nr("match", 1, function(i, c, u) {
        return [function(e) {
            var t = l(this)
              , n = null == e ? void 0 : e[i];
            return void 0 !== n ? n.call(e, t) : new RegExp(e)[i](String(t))
        }
        , function(e) {
            var t = u(c, e, this);
            if (t.done)
                return t.value;
            var n = x(e)
              , i = String(this);
            if (!n.global)
                return jr(n, i);
            for (var r, o = n.unicode, s = [], a = n.lastIndex = 0; null !== (r = jr(n, i)); ) {
                var l = String(r[0]);
                "" === (s[a] = l) && (n.lastIndex = Dr(i, ee(n.lastIndex), o)),
                a++
            }
            return 0 === a ? null : s
        }
        ]
    });
    var Pr = Math.max
      , qr = Math.min
      , Hr = Math.floor
      , Wr = /\$([$&'`]|\d\d?|<[^>]*>)/g
      , Fr = /\$([$&'`]|\d\d?)/g;
    function Br(e) {
        return Array.prototype.reduce.call(e, function(e, t) {
            var n = t.name.match(/data-simplebar-(.+)/);
            if (n) {
                var i = n[1].replace(/\W+(.)/g, function(e, t) {
                    return t.toUpperCase()
                });
                switch (t.value) {
                case "true":
                    e[i] = !0;
                    break;
                case "false":
                    e[i] = !1;
                    break;
                case void 0:
                    e[i] = !0;
                    break;
                default:
                    e[i] = t.value
                }
            }
            return e
        }, {})
    }
    function zr(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window
    }
    function $r(e) {
        return e && e.ownerDocument ? e.ownerDocument : document
    }
    Nr("replace", 2, function(r, w, E) {
        return [function(e, t) {
            var n = l(this)
              , i = null == e ? void 0 : e[r];
            return void 0 !== i ? i.call(e, n, t) : w.call(String(n), e, t)
        }
        , function(e, t) {
            var n = E(w, e, this, t);
            if (n.done)
                return n.value;
            var i = x(e)
              , r = String(this)
              , o = "function" == typeof t;
            o || (t = String(t));
            var s, a = i.global;
            a && (s = i.unicode,
            i.lastIndex = 0);
            for (var l = []; ; ) {
                var c = jr(i, r);
                if (null === c)
                    break;
                if (l.push(c),
                !a)
                    break;
                "" === String(c[0]) && (i.lastIndex = Dr(r, ee(i.lastIndex), s))
            }
            for (var u, f = "", h = 0, d = 0; d < l.length; d++) {
                c = l[d];
                for (var p = String(c[0]), g = Pr(qr(Z(c.index), r.length), 0), m = [], v = 1; v < c.length; v++)
                    m.push(void 0 === (u = c[v]) ? u : String(u));
                var y, b = c.groups, _ = o ? (y = [p].concat(m, g, r),
                void 0 !== b && y.push(b),
                String(t.apply(void 0, y))) : function(o, s, a, l, c, e) {
                    var u = a + o.length
                      , f = l.length
                      , t = Fr;
                    return void 0 !== c && (c = ae(c),
                    t = Wr),
                    w.call(e, t, function(e, t) {
                        var n;
                        switch (t.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return o;
                        case "`":
                            return s.slice(0, a);
                        case "'":
                            return s.slice(u);
                        case "<":
                            n = c[t.slice(1, -1)];
                            break;
                        default:
                            var i = +t;
                            if (0 == i)
                                return e;
                            if (f < i) {
                                var r = Hr(i / 10);
                                return 0 !== r && r <= f ? void 0 === l[r - 1] ? t.charAt(1) : l[r - 1] + t.charAt(1) : e
                            }
                            n = l[i - 1]
                        }
                        return void 0 === n ? "" : n
                    })
                }(p, r, g, m, b, t);
                h <= g && (f += r.slice(h, g) + _,
                h = g + p.length)
            }
            return f + r.slice(h)
        }
        ]
    });
    var Vr = function() {
        function l(e, t) {
            var a = this;
            this.onScroll = function() {
                var e = zr(a.el);
                a.scrollXTicking || (e.requestAnimationFrame(a.scrollX),
                a.scrollXTicking = !0),
                a.scrollYTicking || (e.requestAnimationFrame(a.scrollY),
                a.scrollYTicking = !0)
            }
            ,
            this.scrollX = function() {
                a.axis.x.isOverflowing && (a.showScrollbar("x"),
                a.positionScrollbar("x")),
                a.scrollXTicking = !1
            }
            ,
            this.scrollY = function() {
                a.axis.y.isOverflowing && (a.showScrollbar("y"),
                a.positionScrollbar("y")),
                a.scrollYTicking = !1
            }
            ,
            this.onMouseEnter = function() {
                a.showScrollbar("x"),
                a.showScrollbar("y")
            }
            ,
            this.onMouseMove = function(e) {
                a.mouseX = e.clientX,
                a.mouseY = e.clientY,
                (a.axis.x.isOverflowing || a.axis.x.forceVisible) && a.onMouseMoveForAxis("x"),
                (a.axis.y.isOverflowing || a.axis.y.forceVisible) && a.onMouseMoveForAxis("y")
            }
            ,
            this.onMouseLeave = function() {
                a.onMouseMove.cancel(),
                (a.axis.x.isOverflowing || a.axis.x.forceVisible) && a.onMouseLeaveForAxis("x"),
                (a.axis.y.isOverflowing || a.axis.y.forceVisible) && a.onMouseLeaveForAxis("y"),
                a.mouseX = -1,
                a.mouseY = -1
            }
            ,
            this.onWindowResize = function() {
                a.scrollbarWidth = a.getScrollbarWidth(),
                a.hideNativeScrollbar()
            }
            ,
            this.hideScrollbars = function() {
                a.axis.x.track.rect = a.axis.x.track.el.getBoundingClientRect(),
                a.axis.y.track.rect = a.axis.y.track.el.getBoundingClientRect(),
                a.isWithinBounds(a.axis.y.track.rect) || (a.axis.y.scrollbar.el.classList.remove(a.classNames.visible),
                a.axis.y.isVisible = !1),
                a.isWithinBounds(a.axis.x.track.rect) || (a.axis.x.scrollbar.el.classList.remove(a.classNames.visible),
                a.axis.x.isVisible = !1)
            }
            ,
            this.onPointerEvent = function(e) {
                var t, n;
                a.axis.x.track.rect = a.axis.x.track.el.getBoundingClientRect(),
                a.axis.y.track.rect = a.axis.y.track.el.getBoundingClientRect(),
                (a.axis.x.isOverflowing || a.axis.x.forceVisible) && (t = a.isWithinBounds(a.axis.x.track.rect)),
                (a.axis.y.isOverflowing || a.axis.y.forceVisible) && (n = a.isWithinBounds(a.axis.y.track.rect)),
                (t || n) && (e.preventDefault(),
                e.stopPropagation(),
                "mousedown" === e.type && (t && (a.axis.x.scrollbar.rect = a.axis.x.scrollbar.el.getBoundingClientRect(),
                a.isWithinBounds(a.axis.x.scrollbar.rect) ? a.onDragStart(e, "x") : a.onTrackClick(e, "x")),
                n && (a.axis.y.scrollbar.rect = a.axis.y.scrollbar.el.getBoundingClientRect(),
                a.isWithinBounds(a.axis.y.scrollbar.rect) ? a.onDragStart(e, "y") : a.onTrackClick(e, "y"))))
            }
            ,
            this.drag = function(e) {
                var t = a.axis[a.draggedAxis].track
                  , n = t.rect[a.axis[a.draggedAxis].sizeAttr]
                  , i = a.axis[a.draggedAxis].scrollbar
                  , r = a.contentWrapperEl[a.axis[a.draggedAxis].scrollSizeAttr]
                  , o = parseInt(a.elStyles[a.axis[a.draggedAxis].sizeAttr], 10);
                e.preventDefault(),
                e.stopPropagation();
                var s = (("y" === a.draggedAxis ? e.pageY : e.pageX) - t.rect[a.axis[a.draggedAxis].offsetAttr] - a.axis[a.draggedAxis].dragOffset) / (n - i.size) * (r - o);
                "x" === a.draggedAxis && (s = a.isRtl && l.getRtlHelpers().isRtlScrollbarInverted ? s - (n + i.size) : s,
                s = a.isRtl && l.getRtlHelpers().isRtlScrollingInverted ? -s : s),
                a.contentWrapperEl[a.axis[a.draggedAxis].scrollOffsetAttr] = s
            }
            ,
            this.onEndDrag = function(e) {
                var t = $r(a.el)
                  , n = zr(a.el);
                e.preventDefault(),
                e.stopPropagation(),
                a.el.classList.remove(a.classNames.dragging),
                t.removeEventListener("mousemove", a.drag, !0),
                t.removeEventListener("mouseup", a.onEndDrag, !0),
                a.removePreventClickId = n.setTimeout(function() {
                    t.removeEventListener("click", a.preventClick, !0),
                    t.removeEventListener("dblclick", a.preventClick, !0),
                    a.removePreventClickId = null
                })
            }
            ,
            this.preventClick = function(e) {
                e.preventDefault(),
                e.stopPropagation()
            }
            ,
            this.el = e,
            this.minScrollbarWidth = 20,
            this.options = Object.assign({}, l.defaultOptions, {}, t),
            this.classNames = Object.assign({}, l.defaultOptions.classNames, {}, this.options.classNames),
            this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetSizeAttr: "offsetWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetSizeAttr: "offsetHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            },
            this.removePreventClickId = null,
            l.instances.has(this.el) || (this.recalculate = Jn(this.recalculate.bind(this), 64),
            this.onMouseMove = Jn(this.onMouseMove.bind(this), 64),
            this.hideScrollbars = di(this.hideScrollbars.bind(this), this.options.timeout),
            this.onWindowResize = di(this.onWindowResize.bind(this), 64, {
                leading: !0
            }),
            l.getRtlHelpers = Bi(l.getRtlHelpers),
            this.init())
        }
        l.getRtlHelpers = function() {
            var e = document.createElement("div");
            e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var t = e.firstElementChild;
            document.body.appendChild(t);
            var n = t.firstElementChild;
            t.scrollLeft = 0;
            var i = l.getOffset(t)
              , r = l.getOffset(n);
            t.scrollLeft = 999;
            var o = l.getOffset(n);
            return {
                isRtlScrollingInverted: i.left !== r.left && r.left - o.left != 0,
                isRtlScrollbarInverted: i.left !== r.left
            }
        }
        ,
        l.getOffset = function(e) {
            var t = e.getBoundingClientRect()
              , n = $r(e)
              , i = zr(e);
            return {
                top: t.top + (i.pageYOffset || n.documentElement.scrollTop),
                left: t.left + (i.pageXOffset || n.documentElement.scrollLeft)
            }
        }
        ;
        var e = l.prototype;
        return e.init = function() {
            l.instances.set(this.el, this),
            Ue && (this.initDOM(),
            this.scrollbarWidth = this.getScrollbarWidth(),
            this.recalculate(),
            this.initListeners())
        }
        ,
        e.initDOM = function() {
            var e, t, n = this;
            if (Array.prototype.filter.call(this.el.children, function(e) {
                return e.classList.contains(n.classNames.wrapper)
            }).length)
                this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper),
                this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper),
                this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl),
                this.offsetEl = this.el.querySelector("." + this.classNames.offset),
                this.maskEl = this.el.querySelector("." + this.classNames.mask),
                this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder),
                this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl),
                this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl),
                this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal),
                this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
            else {
                for (this.wrapperEl = document.createElement("div"),
                this.contentWrapperEl = document.createElement("div"),
                this.offsetEl = document.createElement("div"),
                this.maskEl = document.createElement("div"),
                this.contentEl = document.createElement("div"),
                this.placeholderEl = document.createElement("div"),
                this.heightAutoObserverWrapperEl = document.createElement("div"),
                this.heightAutoObserverEl = document.createElement("div"),
                this.wrapperEl.classList.add(this.classNames.wrapper),
                this.contentWrapperEl.classList.add(this.classNames.contentWrapper),
                this.offsetEl.classList.add(this.classNames.offset),
                this.maskEl.classList.add(this.classNames.mask),
                this.contentEl.classList.add(this.classNames.contentEl),
                this.placeholderEl.classList.add(this.classNames.placeholder),
                this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),
                this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild; )
                    this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl)
            }
            this.axis.x.track.el && this.axis.y.track.el || (e = document.createElement("div"),
            t = document.createElement("div"),
            e.classList.add(this.classNames.track),
            t.classList.add(this.classNames.scrollbar),
            e.appendChild(t),
            this.axis.x.track.el = e.cloneNode(!0),
            this.axis.x.track.el.classList.add(this.classNames.horizontal),
            this.axis.y.track.el = e.cloneNode(!0),
            this.axis.y.track.el.classList.add(this.classNames.vertical),
            this.el.appendChild(this.axis.x.track.el),
            this.el.appendChild(this.axis.y.track.el)),
            this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar),
            this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar),
            this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
            this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
            this.el.setAttribute("data-simplebar", "init")
        }
        ,
        e.initListeners = function() {
            var t = this
              , e = zr(this.el);
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter),
            ["mousedown", "click", "dblclick"].forEach(function(e) {
                t.el.addEventListener(e, t.onPointerEvent, !0)
            }),
            ["touchstart", "touchend", "touchmove"].forEach(function(e) {
                t.el.addEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            }),
            this.el.addEventListener("mousemove", this.onMouseMove),
            this.el.addEventListener("mouseleave", this.onMouseLeave),
            this.contentWrapperEl.addEventListener("scroll", this.onScroll),
            e.addEventListener("resize", this.onWindowResize);
            var n = !1
              , i = e.ResizeObserver || hr;
            this.resizeObserver = new i(function() {
                n && t.recalculate()
            }
            ),
            this.resizeObserver.observe(this.el),
            this.resizeObserver.observe(this.contentEl),
            e.requestAnimationFrame(function() {
                n = !0
            }),
            this.mutationObserver = new e.MutationObserver(this.recalculate),
            this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }
        ,
        e.recalculate = function() {
            var e = zr(this.el);
            this.elStyles = e.getComputedStyle(this.el),
            this.isRtl = "rtl" === this.elStyles.direction;
            var t = this.contentEl.offsetWidth
              , n = this.heightAutoObserverEl.offsetHeight <= 1
              , i = this.heightAutoObserverEl.offsetWidth <= 1 || 0 < t
              , r = this.contentWrapperEl.offsetWidth
              , o = this.elStyles.overflowX
              , s = this.elStyles.overflowY;
            this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft,
            this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
            var a = this.contentEl.scrollHeight
              , l = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height = n ? "auto" : "100%",
            this.placeholderEl.style.width = i ? (t || l) + "px" : "auto",
            this.placeholderEl.style.height = a + "px";
            var c = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = 0 !== t && t < l,
            this.axis.y.isOverflowing = c < a,
            this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing,
            this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing,
            this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible,
            this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible,
            this.hideNativeScrollbar();
            var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0
              , f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && r - f < l,
            this.axis.y.isOverflowing = this.axis.y.isOverflowing && c - u < a,
            this.axis.x.scrollbar.size = this.getScrollbarSize("x"),
            this.axis.y.scrollbar.size = this.getScrollbarSize("y"),
            this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px",
            this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px",
            this.positionScrollbar("x"),
            this.positionScrollbar("y"),
            this.toggleTrackVisibility("x"),
            this.toggleTrackVisibility("y")
        }
        ,
        e.getScrollbarSize = function(e) {
            if (void 0 === e && (e = "y"),
            !this.axis[e].isOverflowing)
                return 0;
            var t = this.contentEl[this.axis[e].scrollSizeAttr]
              , n = this.axis[e].track.el[this.axis[e].offsetSizeAttr]
              , i = n / t
              , r = Math.max(~~(i * n), this.options.scrollbarMinSize);
            return this.options.scrollbarMaxSize && (r = Math.min(r, this.options.scrollbarMaxSize)),
            r
        }
        ,
        e.positionScrollbar = function(e) {
            var t, n, i, r, o, s, a;
            void 0 === e && (e = "y"),
            this.axis[e].isOverflowing && (t = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
            n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
            i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            r = this.axis[e].scrollbar,
            o = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            s = (o = "x" === e && this.isRtl && l.getRtlHelpers().isRtlScrollingInverted ? -o : o) / (t - i),
            a = ~~((n - r.size) * s),
            a = "x" === e && this.isRtl && l.getRtlHelpers().isRtlScrollbarInverted ? a + (n - r.size) : a,
            r.el.style.transform = "x" === e ? "translate3d(" + a + "px, 0, 0)" : "translate3d(0, " + a + "px, 0)")
        }
        ,
        e.toggleTrackVisibility = function(e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el
              , n = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible ? (t.style.visibility = "visible",
            this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll") : (t.style.visibility = "hidden",
            this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden"),
            this.axis[e].isOverflowing ? n.style.display = "block" : n.style.display = "none"
        }
        ,
        e.hideNativeScrollbar = function() {
            this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0,
            this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
        }
        ,
        e.onMouseMoveForAxis = function(e) {
            void 0 === e && (e = "y"),
            this.axis[e].track.rect = this.axis[e].track.el.getBoundingClientRect(),
            this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect(),
            this.isWithinBounds(this.axis[e].scrollbar.rect) ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover) : this.axis[e].scrollbar.el.classList.remove(this.classNames.hover),
            this.isWithinBounds(this.axis[e].track.rect) ? (this.showScrollbar(e),
            this.axis[e].track.el.classList.add(this.classNames.hover)) : this.axis[e].track.el.classList.remove(this.classNames.hover)
        }
        ,
        e.onMouseLeaveForAxis = function(e) {
            void 0 === e && (e = "y"),
            this.axis[e].track.el.classList.remove(this.classNames.hover),
            this.axis[e].scrollbar.el.classList.remove(this.classNames.hover)
        }
        ,
        e.showScrollbar = function(e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].scrollbar.el;
            this.axis[e].isVisible || (t.classList.add(this.classNames.visible),
            this.axis[e].isVisible = !0),
            this.options.autoHide && this.hideScrollbars()
        }
        ,
        e.onDragStart = function(e, t) {
            void 0 === t && (t = "y");
            var n = $r(this.el)
              , i = zr(this.el)
              , r = this.axis[t].scrollbar
              , o = "y" === t ? e.pageY : e.pageX;
            this.axis[t].dragOffset = o - r.rect[this.axis[t].offsetAttr],
            this.draggedAxis = t,
            this.el.classList.add(this.classNames.dragging),
            n.addEventListener("mousemove", this.drag, !0),
            n.addEventListener("mouseup", this.onEndDrag, !0),
            null === this.removePreventClickId ? (n.addEventListener("click", this.preventClick, !0),
            n.addEventListener("dblclick", this.preventClick, !0)) : (i.clearTimeout(this.removePreventClickId),
            this.removePreventClickId = null)
        }
        ,
        e.onTrackClick = function(e, i) {
            var r, t, n, o, s, a, l = this;
            void 0 === i && (i = "y"),
            this.options.clickOnTrack && (r = zr(this.el),
            this.axis[i].scrollbar.rect = this.axis[i].scrollbar.el.getBoundingClientRect(),
            t = this.axis[i].scrollbar.rect[this.axis[i].offsetAttr],
            n = parseInt(this.elStyles[this.axis[i].sizeAttr], 10),
            o = this.contentWrapperEl[this.axis[i].scrollOffsetAttr],
            s = ("y" === i ? this.mouseY - t : this.mouseX - t) < 0 ? -1 : 1,
            a = -1 == s ? o - n : o + n,
            function e() {
                var t, n;
                -1 == s ? a < o && (o -= 40,
                l.contentWrapperEl.scrollTo(((t = {})[l.axis[i].offsetAttr] = o,
                t)),
                r.requestAnimationFrame(e)) : o < a && (o += 40,
                l.contentWrapperEl.scrollTo(((n = {})[l.axis[i].offsetAttr] = o,
                n)),
                r.requestAnimationFrame(e))
            }())
        }
        ,
        e.getContentElement = function() {
            return this.contentEl
        }
        ,
        e.getScrollElement = function() {
            return this.contentWrapperEl
        }
        ,
        e.getScrollbarWidth = function() {
            try {
                return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth"in document.documentElement.style || "-ms-overflow-style"in document.documentElement.style ? 0 : gr()
            } catch (e) {
                return gr()
            }
        }
        ,
        e.removeListeners = function() {
            var t = this
              , e = zr(this.el);
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter),
            ["mousedown", "click", "dblclick"].forEach(function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, !0)
            }),
            ["touchstart", "touchend", "touchmove"].forEach(function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            }),
            this.el.removeEventListener("mousemove", this.onMouseMove),
            this.el.removeEventListener("mouseleave", this.onMouseLeave),
            this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
            e.removeEventListener("resize", this.onWindowResize),
            this.mutationObserver.disconnect(),
            this.resizeObserver.disconnect(),
            this.recalculate.cancel(),
            this.onMouseMove.cancel(),
            this.hideScrollbars.cancel(),
            this.onWindowResize.cancel()
        }
        ,
        e.unMount = function() {
            this.removeListeners(),
            l.instances.delete(this.el)
        }
        ,
        e.isWithinBounds = function(e) {
            return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height
        }
        ,
        e.findChild = function(e, t) {
            var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function(e) {
                return n.call(e, t)
            })[0]
        }
        ,
        l
    }();
    return Vr.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    },
    Vr.instances = new WeakMap,
    Vr.initDOMLoadedElements = function() {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements),
        window.removeEventListener("load", this.initDOMLoadedElements),
        Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(e) {
            "init" === e.getAttribute("data-simplebar") || Vr.instances.has(e) || new Vr(e,Br(e.attributes))
        })
    }
    ,
    Vr.removeObserver = function() {
        this.globalObserver.disconnect()
    }
    ,
    Vr.initHtmlApi = function() {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this),
        "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Vr.handleMutations),
        this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
        })),
        "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements),
        window.addEventListener("load", this.initDOMLoadedElements))
    }
    ,
    Vr.handleMutations = function(e) {
        e.forEach(function(e) {
            Array.prototype.forEach.call(e.addedNodes, function(e) {
                1 === e.nodeType && (e.hasAttribute("data-simplebar") ? Vr.instances.has(e) || new Vr(e,Br(e.attributes)) : Array.prototype.forEach.call(e.querySelectorAll("[data-simplebar]"), function(e) {
                    "init" === e.getAttribute("data-simplebar") || Vr.instances.has(e) || new Vr(e,Br(e.attributes))
                }))
            }),
            Array.prototype.forEach.call(e.removedNodes, function(e) {
                1 === e.nodeType && (e.hasAttribute('[data-simplebar="init"]') ? Vr.instances.has(e) && Vr.instances.get(e).unMount() : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), function(e) {
                    Vr.instances.has(e) && Vr.instances.get(e).unMount()
                }))
            })
        })
    }
    ,
    Vr.getOptions = Br,
    Ue && Vr.initHtmlApi(),
    Vr
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(c) {
    "use strict";
    function r(e, t) {
        var n, i, r = t.scrollTop(), o = t.prop("scrollHeight"), s = t.prop("clientHeight"), a = e.originalEvent.wheelDelta || -1 * e.originalEvent.detail || -1 * e.originalEvent.deltaY, l = 0;
        return "wheel" === e.type ? (n = t.height() / c(window).height(),
        l = e.originalEvent.deltaY * n) : this.options.touch && "touchmove" === e.type && (a = e.originalEvent.changedTouches[0].clientY - this.startClientY),
        {
            prevent: (i = 0 < a && r + l <= 0) || a < 0 && o - s <= r + l,
            top: i,
            scrollTop: r,
            deltaY: l
        }
    }
    function o(e, t) {
        var n, i, r = t.scrollTop(), o = {
            top: !1,
            bottom: !1
        };
        return o.top = 0 === r && (e.keyCode === a || e.keyCode === f || e.keyCode === h),
        o.top || (n = t.prop("scrollHeight"),
        i = t.prop("clientHeight"),
        o.bottom = n === r + i && (e.keyCode === s || e.keyCode === l || e.keyCode === u || e.keyCode === d)),
        o
    }
    var e, s = 32, a = 33, l = 34, u = 35, f = 36, h = 38, d = 40, p = function(e, t) {
        this.$element = e,
        this.options = c.extend({}, p.DEFAULTS, this.$element.data(), t),
        this.enabled = !0,
        this.startClientY = 0,
        this.options.unblock && this.$element.on(p.CORE.wheelEventName + p.NAMESPACE, this.options.unblock, c.proxy(p.CORE.unblockHandler, this)),
        this.$element.on(p.CORE.wheelEventName + p.NAMESPACE, this.options.selector, c.proxy(p.CORE.handler, this)),
        this.options.touch && (this.$element.on("touchstart" + p.NAMESPACE, this.options.selector, c.proxy(p.CORE.touchHandler, this)),
        this.$element.on("touchmove" + p.NAMESPACE, this.options.selector, c.proxy(p.CORE.handler, this)),
        this.options.unblock && this.$element.on("touchmove" + p.NAMESPACE, this.options.unblock, c.proxy(p.CORE.unblockHandler, this))),
        this.options.keyboard && (this.$element.attr("tabindex", this.options.keyboard.tabindex || 0),
        this.$element.on("keydown" + p.NAMESPACE, this.options.selector, c.proxy(p.CORE.keyboardHandler, this)),
        this.options.unblock && this.$element.on("keydown" + p.NAMESPACE, this.options.unblock, c.proxy(p.CORE.unblockHandler, this)))
    };
    p.NAME = "ScrollLock",
    p.VERSION = "3.1.2",
    p.NAMESPACE = ".scrollLock",
    p.ANIMATION_NAMESPACE = p.NAMESPACE + ".effect",
    p.DEFAULTS = {
        strict: !1,
        strictFn: function(e) {
            return e.prop("scrollHeight") > e.prop("clientHeight")
        },
        selector: !1,
        animation: !1,
        touch: "ontouchstart"in window,
        keyboard: !1,
        unblock: !1
    },
    p.CORE = {
        wheelEventName: "onwheel"in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
        animationEventName: ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"].join(p.ANIMATION_NAMESPACE + " ") + p.ANIMATION_NAMESPACE,
        unblockHandler: function(e) {
            e.__currentTarget = e.currentTarget
        },
        handler: function(e) {
            var t, n, i;
            this.enabled && !e.ctrlKey && (t = c(e.currentTarget),
            !0 === this.options.strict && !this.options.strictFn(t) || (e.stopPropagation(),
            n = c.proxy(r, this)(e, t),
            e.__currentTarget && (n.prevent &= c.proxy(r, this)(e, c(e.__currentTarget)).prevent),
            n.prevent && (e.preventDefault(),
            n.deltaY && t.scrollTop(n.scrollTop + n.deltaY),
            i = n.top ? "top" : "bottom",
            this.options.animation && setTimeout(p.CORE.animationHandler.bind(this, t, i), 0),
            t.trigger(c.Event(i + p.NAMESPACE)))))
        },
        touchHandler: function(e) {
            this.startClientY = e.originalEvent.touches[0].clientY
        },
        animationHandler: function(e, t) {
            var n = this.options.animation[t]
              , i = this.options.animation.top + " " + this.options.animation.bottom;
            e.off(p.ANIMATION_NAMESPACE).removeClass(i).addClass(n).one(p.CORE.animationEventName, function() {
                e.removeClass(n)
            })
        },
        keyboardHandler: function(e) {
            var t, n = c(e.currentTarget), i = (n.scrollTop(),
            o(e, n));
            return e.__currentTarget && (t = o(e, c(e.__currentTarget)),
            i.top &= t.top,
            i.bottom &= t.bottom),
            i.top ? (n.trigger(c.Event("top" + p.NAMESPACE)),
            this.options.animation && setTimeout(p.CORE.animationHandler.bind(this, n, "top"), 0),
            !1) : i.bottom ? (n.trigger(c.Event("bottom" + p.NAMESPACE)),
            this.options.animation && setTimeout(p.CORE.animationHandler.bind(this, n, "bottom"), 0),
            !1) : void 0
        }
    },
    p.prototype.toggleStrict = function() {
        this.options.strict = !this.options.strict
    }
    ,
    p.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    p.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    p.prototype.destroy = function() {
        this.disable(),
        this.$element.off(p.NAMESPACE),
        this.$element = null,
        this.options = null
    }
    ,
    e = c.fn.scrollLock,
    c.fn.scrollLock = function(i) {
        return this.each(function() {
            var e = c(this)
              , t = "object" == typeof i && i
              , n = e.data(p.NAME);
            !n && "destroy" === i || (n || e.data(p.NAME, n = new p(e,t)),
            "string" == typeof i && n[i]())
        })
    }
    ,
    c.fn.scrollLock.defaults = p.DEFAULTS,
    c.fn.scrollLock.noConflict = function() {
        return c.fn.scrollLock = e,
        this
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? t(require("jquery")) : t(e.jQuery)
}(this, function(i) {
    i.fn.appear = function(n, e) {
        var d = i.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, e);
        return this.each(function() {
            var f, t, e, h = i(this);
            h.appeared = !1,
            n ? (f = i(window),
            t = function() {
                var e, t, n, i, r, o, s, a, l, c, u;
                h.is(":visible") ? (e = f.scrollLeft(),
                t = f.scrollTop(),
                i = (n = h.offset()).left,
                r = n.top,
                o = d.accX,
                s = d.accY,
                a = h.height(),
                l = f.height(),
                c = h.width(),
                u = f.width(),
                t <= r + a + s && r <= t + l + s && e <= i + c + o && i <= e + u + o ? h.appeared || h.trigger("appear", d.data) : h.appeared = !1) : h.appeared = !1
            }
            ,
            e = function() {
                var e;
                h.appeared = !0,
                d.one && (f.unbind("scroll", t),
                0 <= (e = i.inArray(t, i.fn.appear.checks)) && i.fn.appear.checks.splice(e, 1)),
                n.apply(this, arguments)
            }
            ,
            d.one ? h.one("appear", d.data, e) : h.bind("appear", d.data, e),
            f.scroll(t),
            i.fn.appear.checks.push(t),
            t()) : h.trigger("appear", d.data)
        })
    }
    ,
    i.extend(i.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var e = i.fn.appear.checks.length;
            if (0 < e)
                for (; e--; )
                    i.fn.appear.checks[e]()
        },
        run: function() {
            i.fn.appear.timeout && clearTimeout(i.fn.appear.timeout),
            i.fn.appear.timeout = setTimeout(i.fn.appear.checkAll, 20)
        }
    }),
    i.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, t) {
        var n = i.fn[t];
        n && (i.fn[t] = function() {
            var e = n.apply(this, arguments);
            return i.fn.appear.run(),
            e
        }
        )
    })
}),
function(e) {
    var t, n, i;
    "function" == typeof define && define.amd && (define(e),
    t = !0),
    "object" == typeof exports && (module.exports = e(),
    t = !0),
    t || (n = window.Cookies,
    (i = window.Cookies = e()).noConflict = function() {
        return window.Cookies = n,
        i
    }
    )
}(function() {
    function a() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                t[i] = n[i]
        }
        return t
    }
    function c(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function e(l) {
        function s() {}
        function n(e, t, n) {
            if ("undefined" != typeof document) {
                "number" == typeof (n = a({
                    path: "/"
                }, s.defaults, n)).expires && (n.expires = new Date(+new Date + 864e5 * n.expires)),
                n.expires = n.expires ? n.expires.toUTCString() : "";
                try {
                    var i = JSON.stringify(t);
                    /^[\{\[]/.test(i) && (t = i)
                } catch (e) {}
                t = l.write ? l.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var r = "";
                for (var o in n)
                    n[o] && (r += "; " + o,
                    !0 !== n[o] && (r += "=" + n[o].split(";")[0]));
                return document.cookie = e + "=" + t + r
            }
        }
        function t(e, t) {
            if ("undefined" != typeof document) {
                for (var n = {}, i = document.cookie ? document.cookie.split("; ") : [], r = 0; r < i.length; r++) {
                    var o = i[r].split("=")
                      , s = o.slice(1).join("=");
                    t || '"' !== s.charAt(0) || (s = s.slice(1, -1));
                    try {
                        var a = c(o[0])
                          , s = (l.read || l)(s, a) || c(s);
                        if (t)
                            try {
                                s = JSON.parse(s)
                            } catch (e) {}
                        if (n[a] = s,
                        e === a)
                            break
                    } catch (e) {}
                }
                return e ? n[e] : n
            }
        }
        return s.set = n,
        s.get = function(e) {
            return t(e, !1)
        }
        ,
        s.getJSON = function(e) {
            return t(e, !0)
        }
        ,
        s.remove = function(e, t) {
            n(e, "", a(t, {
                expires: -1
            }))
        }
        ,
        s.defaults = {},
        s.withConverter = e,
        s
    }(function() {})
});
