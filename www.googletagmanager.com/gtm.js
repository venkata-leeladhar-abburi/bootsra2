// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [{
                "function": "__googtag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_tagId": "G-SSKF2TQXE6",
                "vtp_configSettingsTable": ["list", ["map", "parameter", "send_page_view", "parameterValue", "true"]],
                "tag_id": 3
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ]
            ]
        },
        "runtime": [
            [50, "__googtag", [46, "a"],
                [50, "m", [46, "v", "w"],
                    [66, "x", [2, [15, "b"], "keys", [7, [15, "w"]]],
                        [46, [43, [15, "v"],
                            [15, "x"],
                            [16, [15, "w"],
                                [15, "x"]
                            ]
                        ]]
                    ]
                ],
                [50, "n", [46],
                    [36, [7, [17, [17, [15, "e"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
                        [17, [17, [15, "e"], "SCHEMA"], "EP_TRANSPORT_URL"]
                    ]]
                ],
                [50, "o", [46, "v"],
                    [52, "w", ["n"]],
                    [65, "x", [15, "w"],
                        [46, [53, [52, "y", [16, [15, "v"],
                                [15, "x"]
                            ]],
                            [22, [15, "y"],
                                [46, [36, [15, "y"]]]
                            ]
                        ]]
                    ],
                    [36, [44]]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", ["require", "createArgumentsQueue"]],
                [52, "d", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "e", [15, "__module_gtag"]],
                [52, "f", ["require", "internal.gtagConfig"]],
                [52, "g", ["require", "getType"]],
                [52, "h", ["require", "internal.loadGoogleTag"]],
                [52, "i", ["require", "logToConsole"]],
                [52, "j", ["require", "makeNumber"]],
                [52, "k", ["require", "makeString"]],
                [52, "l", ["require", "makeTableMap"]],
                [52, "p", [30, [17, [15, "a"], "tagId"], ""]],
                [22, [30, [21, ["g", [15, "p"]], "string"],
                        [24, [2, [15, "p"], "indexOf", [7, "-"]], 0]
                    ],
                    [46, ["i", [0, "Invalid Measurement ID for the GA4 Configuration tag: ", [15, "p"]]],
                        [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [52, "q", [30, [17, [15, "a"], "configSettingsVariable"],
                    [8]
                ]],
                [52, "r", [30, ["l", [30, [17, [15, "a"], "configSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["m", [15, "q"],
                    [15, "r"]
                ],
                [52, "s", [30, [17, [15, "a"], "eventSettingsVariable"],
                    [8]
                ]],
                [52, "t", [30, ["l", [30, [17, [15, "a"], "eventSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["m", [15, "s"],
                    [15, "t"]
                ],
                [52, "u", [15, "q"]],
                ["m", [15, "u"],
                    [15, "s"]
                ],
                [22, [30, [2, [15, "u"], "hasOwnProperty", [7, [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"]]],
                        [17, [15, "a"], "userProperties"]
                    ],
                    [46, [53, [52, "v", [30, [16, [15, "u"],
                                [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"]
                            ],
                            [8]
                        ]],
                        ["m", [15, "v"],
                            [30, ["l", [30, [17, [15, "a"], "userProperties"],
                                    [7]
                                ], "name", "value"],
                                [8]
                            ]
                        ],
                        [43, [15, "u"],
                            [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"],
                            [15, "v"]
                        ]
                    ]]
                ],
                [2, [15, "e"], "convertParameters", [7, [15, "u"],
                    [17, [15, "e"], "GOLD_BOOLEAN_FIELDS"],
                    [51, "", [7, "v"],
                        [36, [39, [20, "false", [2, ["k", [15, "v"]], "toLowerCase", [7]]], false, [28, [28, [15, "v"]]]]]
                    ]
                ]],
                [2, [15, "e"], "convertParameters", [7, [15, "u"],
                    [17, [15, "e"], "GOLD_NUMERIC_FIELDS"],
                    [51, "", [7, "v"],
                        [36, ["j", [15, "v"]]]
                    ]
                ]],
                [22, [16, [15, "d"], "enableDirectTagLoadingInGoogleTag"],
                    [46, [22, [16, [15, "d"], "enableLoadGoogleTagOptionsObject"],
                        [46, ["h", [15, "p"],
                            [8, "firstPartyUrl", ["o", [15, "u"]]]
                        ]],
                        [46, ["h", [15, "p"],
                            ["o", [15, "u"]]
                        ]]
                    ]]
                ],
                ["f", [15, "p"],
                    [15, "u"],
                    [8, "noTargetGroup", true]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [52, "__module_gtag", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "f", [46, "g", "h", "i"],
                            [65, "j", [15, "h"],
                                [46, [22, [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                                    [46, [43, [15, "g"],
                                        [15, "j"],
                                        ["i", [16, [15, "g"],
                                            [15, "j"]
                                        ]]
                                    ]]
                                ]]
                            ]
                        ],
                        [52, "b", ["require", "Object"]],
                        [52, "c", [2, [15, "b"], "freeze", [7, [8, "EP_FIRST_PARTY_COLLECTION", "first_party_collection", "EP_SERVER_CONTAINER_URL", "server_container_url", "EP_TRANSPORT_URL", "transport_url", "EP_USER_PROPERTIES", "user_properties"]]]],
                        [52, "d", [2, [15, "b"], "freeze", [7, [7, "allow_ad_personalization_signals", "allow_google_signals", "cookie_update", "ignore_referrer", "update", "first_party_collection", "send_page_view"]]]],
                        [52, "e", [2, [15, "b"], "freeze", [7, [7, "cookie_expires", "event_timeout", "session_duration", "session_engaged_time", "engagement_time_msec"]]]],
                        [36, [8, "SCHEMA", [15, "c"], "GOLD_BOOLEAN_FIELDS", [15, "d"], "GOLD_NUMERIC_FIELDS", [15, "e"], "convertParameters", [15, "f"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]]

        ],
        "entities": {
            "__googtag": {
                "1": 10
            }


        },
        "permissions": {
            "__googtag": {
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "gtag",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "dataLayer",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "configure_google_tags": {
                    "allowedTagIds": "any"
                },
                "load_google_tags": {
                    "allowedTagIds": "any",
                    "allowFirstPartyUrls": true,
                    "allowedFirstPartyUrls": "any"
                }
            }


        }



        ,
        "security_groups": {
            "google": [
                "__googtag"

            ]


        }



    };


    var ba, ca = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        da = function(a) {
            return a.raw = a
        },
        fa = function(a, b) {
            a.raw = b;
            return a
        },
        ha = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ca(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ia = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ja = function(a) {
            return a instanceof Array ? a :
                ia(ha(a))
        },
        ma = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        na;
    if ("function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                oa = ra.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = na,
        ta = function(a, b) {
            a.prototype = ma(b.prototype);
            a.prototype.constructor = a;
            if (sa) sa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.fo = b.prototype
        },
        ua = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var va = this || self,
        wa = function(a) {
            return a
        };
    var xa = function(a, b) {
        this.h = a;
        this.s = b
    };
    var ya = function() {
        this.h = {};
        this.C = {}
    };
    ba = ya.prototype;
    ba.get = function(a) {
        return this.h["dust." + a]
    };
    ba.set = function(a, b) {
        a = "dust." + a;
        this.C.hasOwnProperty(a) || (this.h[a] = b)
    };
    ba.Uh = function(a, b) {
        this.set(a, b);
        this.C["dust." + a] = !0
    };
    ba.has = function(a) {
        return this.h.hasOwnProperty("dust." + a)
    };
    ba.remove = function(a) {
        a = "dust." + a;
        this.C.hasOwnProperty(a) || delete this.h[a]
    };
    var za = function() {
        this.quota = {}
    };
    za.prototype.reset = function() {
        this.quota = {}
    };
    var Aa = function(a, b) {
        this.X = a;
        this.M = function(c, d, e) {
            return c.apply(d, e)
        };
        this.C = b;
        this.s = new ya;
        this.h = this.F = void 0
    };
    Aa.prototype.add = function(a, b) {
        Ba(this, a, b, !1)
    };
    var Ba = function(a, b, c, d) {
        d ? a.s.Uh(b, c) : a.s.set(b, c)
    };
    Aa.prototype.set = function(a, b) {
        !this.s.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : this.s.set(a, b)
    };
    Aa.prototype.get = function(a) {
        return this.s.has(a) ? this.s.get(a) : this.C ? this.C.get(a) : void 0
    };
    Aa.prototype.has = function(a) {
        return !!this.s.has(a) || !(!this.C || !this.C.has(a))
    };
    var Ca = function(a) {
        var b = new Aa(a.X, a);
        a.F && (b.F = a.F);
        b.M = a.M;
        b.h = a.h;
        return b
    };
    var Da = function() {},
        Ga = function(a) {
            return "function" === typeof a
        },
        k = function(a) {
            return "string" === typeof a
        },
        Ha = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Ia = Array.isArray,
        Ja = function(a, b) {
            if (a && Ia(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ka = function(a, b) {
            if (!Ha(a) || !Ha(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ma = function(a, b) {
            for (var c = new La, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        l = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Na = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Oa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Pa = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Qa = function(a) {
            var b = [];
            if (Ia(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ra = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Sa = function() {
            return new Date(Date.now())
        },
        Ua = function() {
            return Sa().getTime()
        },
        La = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    La.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    La.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Va = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Wa = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Xa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ya = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Za = function(a, b) {
            return a.substring(0, b.length) === b
        },
        $a = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <= b.indexOf(d)) return
            }
            return d
        },
        ab = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        bb = /^\w{1,9}$/,
        cb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            l(a, function(d, e) {
                bb.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        db = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function eb(a, b) {
        for (var c, d = 0; d < b.length && !(c = fb(a, b[d]), c instanceof xa); d++);
        return c
    }

    function fb(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!c || "function" !== typeof c.invoke) throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.invoke.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.F;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    };
    var gb = function() {
        this.C = new za;
        this.h = new Aa(this.C)
    };
    gb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.s(c)
    };
    gb.prototype.s = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = fb(this.h, arguments[c]);
        return b
    };
    gb.prototype.F = function(a, b) {
        var c = Ca(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++) d = fb(c, arguments[e]);
        return d
    };
    var hb = function() {
        ya.call(this);
        this.s = !1
    };
    ta(hb, ya);
    var ib = function(a, b) {
        var c = [],
            d;
        for (d in a.h)
            if (a.h.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
            }
        return c
    };
    hb.prototype.set = function(a, b) {
        this.s || ya.prototype.set.call(this, a, b)
    };
    hb.prototype.Uh = function(a, b) {
        this.s || ya.prototype.Uh.call(this, a, b)
    };
    hb.prototype.remove = function(a) {
        this.s || ya.prototype.remove.call(this, a)
    };
    hb.prototype.Eb = function() {
        this.s = !0
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var jb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        kb = function(a) {
            if (null == a) return String(a);
            var b = jb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        lb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        nb = function(a) {
            if (!a || "object" != kb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !lb(a, "constructor") && !lb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || lb(a, b)
        },
        C = function(a, b) {
            var c = b || ("array" == kb(a) ? [] : {}),
                d;
            for (d in a)
                if (lb(a, d)) {
                    var e = a[d];
                    "array" == kb(e) ? ("array" != kb(c[d]) && (c[d] = []), c[d] = C(e, c[d])) : nb(e) ? (nb(c[d]) || (c[d] = {}), c[d] = C(e, c[d])) : c[d] = e
                }
            return c
        };
    var ob = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        pb = function(a) {
            if (void 0 == a || Ia(a) || nb(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        },
        qb = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        };
    var rb = function(a) {
        this.s = new hb;
        this.h = [];
        this.C = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (qb(b) ? this.h[Number(b)] = a[Number(b)] : this.s.set(b, a[b]))
    };
    ba = rb.prototype;
    ba.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof rb ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    ba.set = function(a, b) {
        if (!this.C)
            if ("length" === a) {
                if (!qb(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else qb(a) ? this.h[Number(a)] = b : this.s.set(a, b)
    };
    ba.get = function(a) {
        return "length" === a ? this.length() : qb(a) ? this.h[Number(a)] : this.s.get(a)
    };
    ba.length = function() {
        return this.h.length
    };
    ba.Tb = function() {
        for (var a = ib(this.s, 1), b = 0; b < this.h.length; b++) a.push(b + "");
        return new rb(a)
    };
    ba.remove = function(a) {
        qb(a) ? delete this.h[Number(a)] : this.s.remove(a)
    };
    ba.pop = function() {
        return this.h.pop()
    };
    ba.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    ba.shift = function() {
        return this.h.shift()
    };
    ba.splice = function(a, b, c) {
        return new rb(this.h.splice.apply(this.h, arguments))
    };
    ba.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    ba.has = function(a) {
        return qb(a) && this.h.hasOwnProperty(a) || this.s.has(a)
    };
    ba.Eb = function() {
        this.C = !0;
        Object.freeze(this.h);
        this.s.Eb()
    };
    var sb = function() {
        hb.call(this)
    };
    ta(sb, hb);
    sb.prototype.Tb = function() {
        return new rb(ib(this, 1))
    };

    function tb() {
        for (var a = ub, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function vb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var ub, wb;

    function xb(a) {
        ub = ub || vb();
        wb = wb || tb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(ub[m], ub[n], ub[p], ub[q])
        }
        return b.join("")
    }

    function yb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = wb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        ub = ub || vb();
        wb = wb || tb();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var zb = {},
        Ab = function(a, b) {
            zb[a] = zb[a] || [];
            zb[a][b] = !0
        },
        Bb = function() {
            delete zb.GA4_EVENT
        },
        Cb = function(a) {
            var b = zb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return xb(c.join("")).replace(/\.+$/, "")
        };
    var Db = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var Eb, Fb = function() {
        if (void 0 === Eb) {
            var a = null,
                b = va.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: wa,
                        createScript: wa,
                        createScriptURL: wa
                    })
                } catch (c) {
                    va.console && va.console.error(c.message)
                }
                Eb = a
            } else Eb = a
        }
        return Eb
    };
    var Gb = function(a) {
        this.h = a
    };
    Gb.prototype.toString = function() {
        return this.h + ""
    };
    var Hb = function(a) {
            return a instanceof Gb && a.constructor === Gb ? a.h : "type_error:TrustedResourceUrl"
        },
        Jb = {},
        Kb = function(a) {
            var b = a,
                c = Fb(),
                d = c ? c.createScriptURL(b) : b;
            return new Gb(d, Jb)
        };
    var Lb = function(a) {
        this.h = a
    };
    Lb.prototype.toString = function() {
        return this.h.toString()
    };
    var Mb = function(a) {
            return a instanceof Lb && a.constructor === Lb ? a.h : "type_error:SafeUrl"
        },
        Nb = {},
        Ob = new Lb("about:invalid#zClosurez", Nb);
    var Pb, Qb;
    a: {
        for (var Rb = ["CLOSURE_FLAGS"], Sb = va, Tb = 0; Tb < Rb.length; Tb++)
            if (Sb = Sb[Rb[Tb]], null == Sb) {
                Qb = null;
                break a
            }
        Qb = Sb
    }
    var Ub = Qb && Qb[610401301];
    Pb = null != Ub ? Ub : !1;

    function Vb() {
        var a = va.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Wb, Xb = va.navigator;
    Wb = Xb ? Xb.userAgentData || null : null;

    function Yb(a) {
        return Pb ? Wb ? Wb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function Zb(a) {
        return -1 != Vb().indexOf(a)
    };

    function $b() {
        return Pb ? !!Wb && 0 < Wb.brands.length : !1
    }

    function ac() {
        return $b() ? !1 : Zb("Opera")
    }

    function bc() {
        return Zb("Firefox") || Zb("FxiOS")
    }

    function cc() {
        return $b() ? Yb("Chromium") : (Zb("Chrome") || Zb("CriOS")) && !($b() ? 0 : Zb("Edge")) || Zb("Silk")
    };
    var dc = {},
        ec = function(a) {
            this.h = a
        };
    ec.prototype.toString = function() {
        return this.h.toString()
    };
    var fc = function(a) {
        return a instanceof ec && a.constructor === ec ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var gc = da([""]),
        hc = fa(["\x00"], ["\\0"]),
        ic = fa(["\n"], ["\\n"]),
        jc = fa(["\x00"], ["\\u0000"]);

    function kc(a) {
        return -1 === a.toString().indexOf("`")
    }
    kc(function(a) {
        return a(gc)
    }) || kc(function(a) {
        return a(hc)
    }) || kc(function(a) {
        return a(ic)
    }) || kc(function(a) {
        return a(jc)
    });
    var lc = function(a) {
        this.mm = a
    };

    function mc(a) {
        return new lc(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var nc = [mc("data"), mc("http"), mc("https"), mc("mailto"), mc("ftp"), new lc(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function oc(a, b) {
        b = void 0 === b ? nc : b;
        if (a instanceof Lb) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof lc && d.mm(a)) return new Lb(a, Nb)
        }
    }

    function pc(a) {
        var b;
        b = void 0 === b ? nc : b;
        return oc(a, b) || Ob
    }
    var qc = "function" === typeof URL;

    function rc(a) {
        var b;
        a: if (qc) {
            var c;
            try {
                c = new URL(a)
            } catch (g) {
                b = "https:";
                break a
            }
            b = c.protocol
        } else {
            var d;
            b: {
                var e = document.createElement("a");
                try {
                    e.href = a
                } catch (g) {
                    d = void 0;
                    break b
                }
                var f = e.protocol;d = ":" === f || "" === f ? "https:" : f
            }
            b = d
        }
        if ("javascript:" !== b) return a
    }
    var sc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
    var tc = {};
    var uc = function() {},
        vc = function(a) {
            this.h = a
        };
    ta(vc, uc);
    vc.prototype.toString = function() {
        return this.h
    };

    function wc(a, b) {
        var c = [new vc(xc[0].toLowerCase(), tc)];
        if (0 === c.length) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof vc) g = f.h;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return 0 !== e.indexOf(f)
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }

    function yc(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };

    function zc(a, b) {
        var c = b instanceof Lb ? Mb(b) : rc(b);
        void 0 !== c && (a.action = c)
    };

    function Ac(a) {
        var b = a = Bc(a),
            c = Fb(),
            d = c ? c.createHTML(b) : b;
        return new ec(d, dc)
    }

    function Bc(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        G = document,
        Cc = navigator,
        Dc = G.currentScript && G.currentScript.src,
        Ec = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Fc = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Gc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Hc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Ic(a, b, c) {
        b && l(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Jc = function(a, b, c, d, e) {
            var f = G.createElement("script");
            Ic(f, d, Gc);
            f.type = "text/javascript";
            f.async = d && !1 === d.async ? !1 : !0;
            var g;
            g = Kb(Bc(a));
            f.src = Hb(g);
            var h, m, n, p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
            (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
            Fc(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var q = G.getElementsByTagName("script")[0] || G.body || G.head;
                q.parentNode.insertBefore(f,
                    q)
            }
            return f
        },
        Kc = function() {
            if (Dc) {
                var a = Dc.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Lc = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                h = !1;
            g || (g = G.createElement("iframe"), h = !0);
            Ic(g, c, Hc);
            d && l(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (h) {
                var m = G.body && G.body.lastChild || G.body || G.head;
                m.parentNode.insertBefore(g, m)
            }
            Fc(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Mc = function(a,
            b, c, d) {
            var e = new Image(1, 1);
            Ic(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Nc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Oc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        H = function(a) {
            z.setTimeout(a, 0)
        },
        Pc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Qc = function(a) {
            var b = a.innerText ||
                a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Rc = function(a) {
            var b = G.createElement("div"),
                c = b,
                d = Ac("A<div>" + a + "</div>");
            1 === c.nodeType && yc(c);
            c.innerHTML = fc(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Sc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Tc = function(a) {
            var b;
            try {
                b = Cc.sendBeacon && Cc.sendBeacon(a)
            } catch (c) {
                Ab("TAGGING", 15)
            }
            b || Mc(a)
        },
        Uc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Vc = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Wc = function() {
            var a = z.performance;
            if (a && Ga(a.now)) return a.now()
        },
        Xc = function() {
            return z.performance || void 0
        };
    var Yc = function(a, b) {
            return I(this, a) && I(this, b)
        },
        Zc = function(a, b) {
            return I(this, a) === I(this, b)
        },
        $c = function(a, b) {
            return I(this, a) || I(this, b)
        },
        ad = function(a, b) {
            a = I(this, a);
            b = I(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        bd = function(a, b) {
            a = String(I(this, a));
            b = String(I(this, b));
            return a.substring(0, b.length) === b
        },
        cd = function(a, b) {
            a = I(this, a);
            b = I(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof sb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var dd = function(a, b) {
        hb.call(this);
        this.F = a;
        this.M = b
    };
    ta(dd, hb);
    dd.prototype.toString = function() {
        return this.F
    };
    dd.prototype.Tb = function() {
        return new rb(ib(this, 1))
    };
    dd.prototype.invoke = function(a, b) {
        return this.M.apply(new ed(this, a), Array.prototype.slice.call(arguments, 1))
    };
    dd.prototype.Ya = function(a, b) {
        try {
            return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var ed = function(a, b) {
            this.s = a;
            this.h = b
        },
        I = function(a, b) {
            var c = a.h;
            return Ia(b) ? fb(c, b) : b
        },
        J = function(a) {
            return a.s.F
        };
    var fd = function() {
        this.map = new Map
    };
    fd.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    fd.prototype.get = function(a) {
        return this.map.get(a)
    };
    var gd = function() {
        this.keys = [];
        this.values = []
    };
    gd.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    gd.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (-1 < b) return this.values[b]
    };

    function hd() {
        try {
            return Map ? new fd : new gd
        } catch (a) {
            return new gd
        }
    };
    var id = function(a) {
        if (a instanceof id) return a;
        if (pb(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.h = a
    };
    id.prototype.toString = function() {
        return String(this.h)
    };
    var kd = function(a) {
        hb.call(this);
        this.F = a;
        this.set("then", jd(this));
        this.set("catch", jd(this, !0));
        this.set("finally", jd(this, !1, !0))
    };
    ta(kd, sb);
    var jd = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new dd("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof dd || (d = void 0);
            e instanceof dd || (e = void 0);
            var f = Ca(this.h),
                g = function(m) {
                    return function(n) {
                        return c ? (m.invoke(f), a.F) : m.invoke(f, n)
                    }
                },
                h = a.F.then(d && g(d), e && g(e));
            return new kd(h)
        })
    };
    var md = function(a, b, c) {
            var d = hd(),
                e = function(g, h) {
                    for (var m = ib(g, 1), n = 0; n < m.length; n++) h[m[n]] = f(g.get(m[n]))
                },
                f = function(g) {
                    var h = d.get(g);
                    if (h) return h;
                    if (g instanceof rb) {
                        var m = [];
                        d.set(g, m);
                        for (var n = g.Tb(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
                        return m
                    }
                    if (g instanceof kd) return g.F;
                    if (g instanceof sb) {
                        var q = {};
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    if (g instanceof dd) {
                        var r = function() {
                            for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = ld(u[v], b, c);
                            var w = new Aa(b ? b.X :
                                new za);
                            b && (w.h = b.h);
                            return f(g.invoke.apply(g, [w].concat(u)))
                        };
                        d.set(g, r);
                        e(g, r);
                        return r
                    }
                    var t = !1;
                    switch (c) {
                        case 1:
                            t = !0;
                            break;
                        case 2:
                            t = !1;
                            break;
                        case 3:
                            t = !1;
                            break;
                        default:
                    }
                    if (g instanceof id && t) return g.h;
                    switch (typeof g) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return g;
                        case "object":
                            if (null === g) return null
                    }
                };
            return f(a)
        },
        ld = function(a, b, c) {
            var d = hd(),
                e = function(g,
                    h) {
                    for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]))
                },
                f = function(g) {
                    var h = d.get(g);
                    if (h) return h;
                    if (Ia(g) || Na(g)) {
                        var m = new rb([]);
                        d.set(g, m);
                        for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                        return m
                    }
                    if (nb(g)) {
                        var p = new sb;
                        d.set(g, p);
                        e(g, p);
                        return p
                    }
                    if ("function" === typeof g) {
                        var q = new dd("", function(x) {
                            for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = md(I(this, y[A]), b, c);
                            return f((0, this.h.M)(g, g, y))
                        });
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    var v = typeof g;
                    if (null === g || "string" === v || "number" === v || "boolean" === v) return g;
                    var w = !1;
                    switch (c) {
                        case 1:
                            w = !0;
                            break;
                        case 2:
                            w = !1;
                            break;
                        default:
                    }
                    if (void 0 !== g && w) return new id(g)
                };
            return f(a)
        };
    var nd = function() {
        var a = !1;
        return a
    };
    var od = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof rb)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new rb(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new rb(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new rb(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a,
            b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 ===
                    d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = ob(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new rb(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = ob(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var pd = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack)
    };
    ta(pd, Error);
    var qd = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        rd = new xa("break"),
        td = new xa("continue"),
        ud = function(a, b) {
            return I(this, a) + I(this, b)
        },
        vd = function(a, b) {
            return I(this, a) && I(this, b)
        },
        wd = function(a, b, c) {
            a = I(this, a);
            b = I(this, b);
            c = I(this, c);
            if (!(c instanceof rb)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) {
                var d = "TypeError: Can't read property " +
                    b + " of " + a + ".";
                if (nd()) throw new pd(d);
                throw Error(d);
            }
            var e = "number" === typeof a;
            if ("boolean" === typeof a || e) {
                if ("toString" === b) {
                    if (e && c.length()) {
                        var f = md(c.get(0));
                        try {
                            return a.toString(f)
                        } catch (y) {}
                    }
                    return a.toString()
                }
                var g = "TypeError: " + a + "." + b + " is not a function.";
                if (nd()) throw new pd(g);
                throw Error(g);
            }
            if ("string" === typeof a) {
                if (qd.hasOwnProperty(b)) {
                    var h = 2;
                    h = 1;
                    var m = md(c, void 0, h);
                    return ld(a[b].apply(a, m), this.h)
                }
                var n = "TypeError: " + b + " is not a function";
                if (nd()) throw new pd(n);
                throw Error(n);
            }
            if (a instanceof rb) {
                if (a.has(b)) {
                    var p = a.get(b);
                    if (p instanceof dd) {
                        var q = ob(c);
                        q.unshift(this.h);
                        return p.invoke.apply(p, q)
                    }
                    var r = "TypeError: " + b + " is not a function";
                    if (nd()) throw new pd(r);
                    throw Error(r);
                }
                if (0 <= od.supportedMethods.indexOf(b)) {
                    var t = ob(c);
                    t.unshift(this.h);
                    return od[b].apply(a, t)
                }
            }
            if (a instanceof dd || a instanceof sb) {
                if (a.has(b)) {
                    var u = a.get(b);
                    if (u instanceof dd) {
                        var v = ob(c);
                        v.unshift(this.h);
                        return u.invoke.apply(u, v)
                    }
                    var w = "TypeError: " + b + " is not a function";
                    if (nd()) throw new pd(w);
                    throw Error(w);
                }
                if ("toString" === b) return a instanceof dd ? a.F : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, ob(c))
            }
            if (a instanceof id && "toString" === b) return a.toString();
            var x = "TypeError: Object has no '" + b + "' property.";
            if (nd()) throw new pd(x);
            throw Error(x);
        },
        xd = function(a, b) {
            a = I(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.h;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = I(this, b);
            c.set(a, d);
            return d
        },
        yd = function(a) {
            var b = Ca(this.h),
                c = eb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof xa) return c
        },
        zd = function() {
            return rd
        },
        Ad = function(a) {
            for (var b = I(this, a), c = 0; c < b.length; c++) {
                var d = I(this, b[c]);
                if (d instanceof xa) return d
            }
        },
        Bd = function(a) {
            for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = I(this, arguments[c + 1]);
                    Ba(b, d, e, !0)
                }
            }
        },
        Cd = function() {
            return td
        },
        Dd = function(a, b) {
            return new xa(a, I(this, b))
        },
        Ed = function(a, b, c) {
            var d = new rb;
            b = I(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.h.add(a, I(this, f))
        },
        Fd = function(a, b) {
            return I(this, a) / I(this, b)
        },
        Gd = function(a, b) {
            a = I(this, a);
            b = I(this, b);
            var c = a instanceof id,
                d = b instanceof id;
            return c || d ? c && d ? a.h == b.h : !1 : a == b
        },
        Hd = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = I(this, arguments[c]);
            return b
        };

    function Id(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = eb(f, d);
            if (g instanceof xa) {
                if ("break" === g.h) break;
                if ("return" === g.h) return g
            }
        }
    }

    function Jd(a, b, c) {
        if ("string" === typeof b) return Id(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof sb || b instanceof rb || b instanceof dd) {
            var d = b.Tb(),
                e = d.length();
            return Id(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Kd = function(a, b, c) {
            a = I(this, a);
            b = I(this, b);
            c = I(this, c);
            var d = this.h;
            return Jd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Ld = function(a, b, c) {
            a = I(this, a);
            b = I(this, b);
            c = I(this, c);
            var d = this.h;
            return Jd(function(e) {
                var f = Ca(d);
                Ba(f, a, e, !0);
                return f
            }, b, c)
        },
        Md = function(a, b, c) {
            a = I(this, a);
            b = I(this, b);
            c = I(this, c);
            var d = this.h;
            return Jd(function(e) {
                var f = Ca(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        Od = function(a, b, c) {
            a = I(this, a);
            b = I(this, b);
            c = I(this, c);
            var d = this.h;
            return Nd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Pd =
        function(a, b, c) {
            a = I(this, a);
            b = I(this, b);
            c = I(this, c);
            var d = this.h;
            return Nd(function(e) {
                var f = Ca(d);
                Ba(f, a, e, !0);
                return f
            }, b, c)
        },
        Qd = function(a, b, c) {
            a = I(this, a);
            b = I(this, b);
            c = I(this, c);
            var d = this.h;
            return Nd(function(e) {
                var f = Ca(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function Nd(a, b, c) {
        if ("string" === typeof b) return Id(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof rb) return Id(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        if (nd()) throw new pd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }
    var Rd = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var t = f.get(r);
                    q.add(t, p.get(t))
                }
            }
            var f = I(this, a);
            if (!(f instanceof rb)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.h;
            d = I(this, d);
            var h = Ca(g);
            for (e(g, h); fb(h, b);) {
                var m = eb(h, d);
                if (m instanceof xa) {
                    if ("break" === m.h) break;
                    if ("return" === m.h) return m
                }
                var n = Ca(g);
                e(h, n);
                fb(n, c);
                h = n
            }
        },
        Sd = function(a, b, c) {
            var d = this.h,
                e = I(this, b);
            if (!(e instanceof rb)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new dd(a, function() {
                return function(g) {
                    var h = Ca(d);
                    void 0 === h.h && (h.h = this.h.h);
                    for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++)
                        if (m[n] = I(this, m[n]), m[n] instanceof xa) return m[n];
                    for (var p = e.get("length"), q = 0; q < p; q++) q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new rb(m));
                    var r = eb(h, f);
                    if (r instanceof xa) return "return" === r.h ? r.s : r
                }
            }())
        },
        Td = function(a) {
            a = I(this, a);
            var b = this.h,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        Ud = function(a, b) {
            var c;
            a = I(this, a);
            b = I(this, b);
            if (void 0 === a || null === a) {
                var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
                if (nd()) throw new pd(d);
                throw Error(d);
            }
            if (a instanceof sb || a instanceof rb || a instanceof dd) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : qb(b) && (c = a[b]);
            else if (a instanceof id) return;
            return c
        },
        Vd = function(a, b) {
            return I(this, a) > I(this, b)
        },
        Wd = function(a, b) {
            return I(this, a) >= I(this, b)
        },
        Xd = function(a, b) {
            a = I(this, a);
            b = I(this, b);
            a instanceof id && (a = a.h);
            b instanceof id && (b = b.h);
            return a === b
        },
        Yd = function(a, b) {
            return !Xd.call(this, a, b)
        },
        Zd = function(a, b, c) {
            var d = [];
            I(this, a) ? d = I(this, b) : c && (d = I(this, c));
            var e = eb(this.h, d);
            if (e instanceof xa) return e
        },
        $d = function(a, b) {
            return I(this, a) < I(this, b)
        },
        ae = function(a, b) {
            return I(this, a) <= I(this, b)
        },
        be = function(a) {
            for (var b = new rb, c = 0; c < arguments.length; c++) {
                var d =
                    I(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        ce = function(a) {
            for (var b = new sb, c = 0; c < arguments.length - 1; c += 2) {
                var d = I(this, arguments[c]) + "",
                    e = I(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        de = function(a, b) {
            return I(this, a) % I(this, b)
        },
        ee = function(a, b) {
            return I(this, a) * I(this, b)
        },
        fe = function(a) {
            return -I(this, a)
        },
        ge = function(a) {
            return !I(this, a)
        },
        he = function(a, b) {
            return !Gd.call(this, a, b)
        },
        ie = function() {
            return null
        },
        je = function(a, b) {
            return I(this, a) || I(this, b)
        },
        ke = function(a, b) {
            var c = I(this, a);
            I(this, b);
            return c
        },
        le = function(a) {
            return I(this, a)
        },
        me = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        ne = function(a) {
            return new xa("return", I(this, a))
        },
        oe = function(a, b, c) {
            a = I(this, a);
            b = I(this, b);
            c = I(this, c);
            if (null === a || void 0 === a) {
                var d = "TypeError: Can't set property " + b + " of " + a + ".";
                if (nd()) throw new pd(d);
                throw Error(d);
            }(a instanceof dd || a instanceof rb || a instanceof sb) && a.set(b, c);
            return c
        },
        pe = function(a, b) {
            return I(this, a) - I(this, b)
        },
        qe = function(a, b, c) {
            a = I(this, a);
            var d = I(this, b),
                e = I(this, c);
            if (!Ia(d) ||
                !Ia(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === I(this, d[h]))
                    if (f = I(this, e[h]), f instanceof xa) {
                        var m = f.h;
                        if ("break" === m) return;
                        if ("return" === m || "continue" === m) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = I(this, e[e.length - 1]), f instanceof xa && ("return" === f.h || "continue" === f.h))) return f
        },
        re = function(a, b, c) {
            return I(this, a) ? I(this, b) : I(this, c)
        },
        se = function(a) {
            a = I(this, a);
            return a instanceof dd ? "function" : typeof a
        },
        te = function(a) {
            for (var b =
                    this.h, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        ue = function(a, b, c, d) {
            var e = I(this, d);
            if (I(this, c)) {
                var f = eb(this.h, e);
                if (f instanceof xa) {
                    if ("break" === f.h) return;
                    if ("return" === f.h) return f
                }
            }
            for (; I(this, a);) {
                var g = eb(this.h, e);
                if (g instanceof xa) {
                    if ("break" === g.h) break;
                    if ("return" === g.h) return g
                }
                I(this, b)
            }
        },
        ve = function(a) {
            return ~Number(I(this, a))
        },
        we = function(a, b) {
            return Number(I(this, a)) << Number(I(this, b))
        },
        xe = function(a, b) {
            return Number(I(this, a)) >> Number(I(this,
                b))
        },
        ye = function(a, b) {
            return Number(I(this, a)) >>> Number(I(this, b))
        },
        ze = function(a, b) {
            return Number(I(this, a)) & Number(I(this, b))
        },
        Ae = function(a, b) {
            return Number(I(this, a)) ^ Number(I(this, b))
        },
        Be = function(a, b) {
            return Number(I(this, a)) | Number(I(this, b))
        },
        Ce = function() {},
        De = function(a, b, c, d, e) {
            var f = !0;
            try {
                var g = I(this, c);
                if (g instanceof xa) return g
            } catch (r) {
                if (!(r instanceof pd && a)) throw f = r instanceof pd, r;
                var h = Ca(this.h),
                    m = new id(r);
                h.add(b, m);
                var n = I(this, d),
                    p = eb(h, n);
                if (p instanceof xa) return p
            } finally {
                if (f &&
                    void 0 !== e) {
                    var q = I(this, e);
                    if (q instanceof xa) return q
                }
            }
        };
    var Fe = function() {
        this.h = new gb;
        Ee(this)
    };
    Fe.prototype.execute = function(a) {
        return this.h.s(a)
    };
    var Ee = function(a) {
        var b = function(c, d) {
            var e = new dd(String(c), d);
            e.Eb();
            a.h.h.set(String(c), e)
        };
        b("map", ce);
        b("and", Yc);
        b("contains", ad);
        b("equals", Zc);
        b("or", $c);
        b("startsWith", bd);
        b("variable", cd)
    };
    var He = function() {
        this.h = new gb;
        Ge(this)
    };
    He.prototype.execute = function(a) {
        return Ie(this.h.s(a))
    };
    var Je = function(a, b, c) {
            return Ie(a.h.F(b, c))
        },
        Ge = function(a) {
            var b = function(c, d) {
                var e = String(c),
                    f = new dd(e, d);
                f.Eb();
                a.h.h.set(e, f)
            };
            b(0, ud);
            b(1, vd);
            b(2, wd);
            b(3, xd);
            b(56, ze);
            b(57, we);
            b(58, ve);
            b(59, Be);
            b(60, xe);
            b(61, ye);
            b(62, Ae);
            b(53, yd);
            b(4, zd);
            b(5, Ad);
            b(52, Bd);
            b(6, Cd);
            b(49, Dd);
            b(7, be);
            b(8, ce);
            b(9, Ad);
            b(50, Ed);
            b(10, Fd);
            b(12, Gd);
            b(13, Hd);
            b(51, Sd);
            b(47, Kd);
            b(54, Ld);
            b(55, Md);
            b(63, Rd);
            b(64, Od);
            b(65, Pd);
            b(66, Qd);
            b(15, Td);
            b(16, Ud);
            b(17, Ud);
            b(18, Vd);
            b(19, Wd);
            b(20, Xd);
            b(21, Yd);
            b(22, Zd);
            b(23, $d);
            b(24, ae);
            b(25, de);
            b(26, ee);
            b(27, fe);
            b(28, ge);
            b(29, he);
            b(45, ie);
            b(30, je);
            b(32, ke);
            b(33, ke);
            b(34, le);
            b(35, le);
            b(46, me);
            b(36, ne);
            b(43, oe);
            b(37, pe);
            b(38, qe);
            b(39, re);
            b(67, De);
            b(40, se);
            b(44, Ce);
            b(41, te);
            b(42, ue)
        };

    function Ie(a) {
        if (a instanceof xa || a instanceof dd || a instanceof rb || a instanceof sb || a instanceof id || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };

    function Ke(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var Le = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            kk: a("consent"),
            fi: a("convert_case_to"),
            gi: a("convert_false_to"),
            hi: a("convert_null_to"),
            ii: a("convert_true_to"),
            ji: a("convert_undefined_to"),
            tn: a("debug_mode_metadata"),
            ka: a("function"),
            Tg: a("instance_name"),
            Rk: a("live_only"),
            Sk: a("malware_disabled"),
            Tk: a("metadata"),
            Wk: a("original_activity_id"),
            Nn: a("original_vendor_template_id"),
            Mn: a("once_on_load"),
            Vk: a("once_per_event"),
            fj: a("once_per_load"),
            Rn: a("priority_override"),
            Sn: a("respected_consent_types"),
            lj: a("setup_tags"),
            oe: a("tag_id"),
            qj: a("teardown_tags")
        }
    }();
    var gf;
    var hf = [],
        jf = [],
        kf = [],
        lf = [],
        mf = [],
        nf = {},
        of , pf, qf = function(a) {
            pf = pf || a
        },
        rf = function(a) {},
        sf, tf = [],
        uf = function(a, b) {
            var c = {};
            c[Le.ka] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        vf = function(a,
            b) {
            var c = a[Le.ka],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = nf[c],
                f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== tf.indexOf(c),
                g = {},
                h = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && (g[m] = a[m]), !e || f) && (h[m.substr(4)] = a[m]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (null == q) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = hf[q];
                                    break;
                                case 1:
                                    r = lf[q];
                                    break;
                                default:
                                    n =
                                        "";
                                    break a
                            }
                            var t = r && r[Le.Tg];
                            n = t ? String(t) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var u, v;
            e && (u = e(g));
            if (!e || f) v = gf(c, h, b);
            f && d && (pb(u) ? typeof u !== typeof v && d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c));
            return e ? u : v
        },
        xf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = wf(a[e], b, c));
            return d
        },
        wf = function(a, b, c) {
            if (Ia(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(wf(a[e],
                            b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = hf[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var h = String(g[Le.Tg]);
                        try {
                            var m = xf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = vf(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: h
                            });
                            sf && (d = sf.wl(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), h), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[wf(a[n], b, c)] = wf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = wf(a[q],
                                b, c);
                            pf && (p = p || pf.jm(r));
                            d.push(r)
                        }
                        return pf && p ? pf.yl(d) : d.join("");
                    case "escape":
                        d = wf(a[1], b, c);
                        if (pf && Ia(a[1]) && "macro" === a[1][0] && pf.km(a)) return pf.Om(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Me[a[t]] && (d = Me[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!lf[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Bj: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[Le.ka] = a[1];
                        var w = yf(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " +
                            a[0] + ".");
                }
            }
            return a
        },
        yf = function(a, b, c) {
            try {
                return of(xf(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        zf = function(a) {
            var b = a[Le.ka];
            if (!b) throw Error("Error: No function name given for function call.");
            return !!nf[b]
        };
    var Af = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.h = a
    };
    ta(Af, Error);

    function Bf(a, b) {
        if (Ia(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Bf(a[c], b[c])
        }
    };
    var Cf = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Jm = a;
        this.s = b;
        this.h = []
    };
    ta(Cf, Error);
    var Ef = function() {
        return function(a, b) {
            a instanceof Cf || (a = new Cf(a, Df));
            b && a.h.push(b);
            throw a;
        }
    };

    function Df(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ha(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var Hf = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Ff(a), f = 0; f < jf.length; f++) {
                var g = jf[f],
                    h = Gf(g, e);
                if (h) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < lf.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Gf = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f = a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        Ff = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = yf(kf[c], a));
                return b[c]
            }
        };
    var If = {
        wl: function(a, b) {
            b[Le.fi] && "string" === typeof a && (a = 1 == b[Le.fi] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Le.hi) && null === a && (a = b[Le.hi]);
            b.hasOwnProperty(Le.ji) && void 0 === a && (a = b[Le.ji]);
            b.hasOwnProperty(Le.ii) && !0 === a && (a = b[Le.ii]);
            b.hasOwnProperty(Le.gi) && !1 === a && (a = b[Le.gi]);
            return a
        }
    };
    var Jf = function() {
            this.h = {}
        },
        Lf = function(a, b) {
            var c = Kf.s,
                d;
            null != (d = c.h)[a] || (d[a] = []);
            c.h[a].push(function() {
                return b.apply(null, ja(ua.apply(0, arguments)))
            })
        };

    function Mf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new Af(c, d, g);
            }
    }

    function Nf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d],
                    f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Mf(e, b, d, g);
                    Mf(f, b, d, g)
                }
            }
        }
    };
    var Of = [],
        Pf = function(a) {
            return void 0 == Of[a] ? !1 : Of[a]
        };
    var Tf = function() {
            var a = data.permissions || {},
                b = Qf.ctid,
                c = this;
            this.s = new Jf;
            this.h = {};
            var d = Pf(15),
                e = {},
                f = {},
                g = Nf(this.s, b, function() {
                    var h = arguments[0];
                    return h && e[h] ? e[h].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            l(a, function(h, m) {
                var n = {};
                l(m, function(q, r) {
                    var t = Rf(q, r);
                    n[q] = t.assert;
                    e[q] || (e[q] = t.K);
                    d && t.tj && !f[q] && (f[q] = t.tj)
                });
                var p;
                d && (p = function(q) {
                    var r = ua.apply(1, arguments);
                    if (!n[q]) throw Sf(q, {}, "The requested additional permission " + q + " is not configured.");
                    g.apply(null, [q].concat(ja(r)))
                });
                c.h[h] = function(q, r) {
                    var t = n[q];
                    if (!t) throw Sf(q, {}, "The requested permission " + q + " is not configured.");
                    var u = Array.prototype.slice.call(arguments, 0);
                    t.apply(void 0, u);
                    g.apply(void 0, u);
                    if (d) {
                        var v = f[q];
                        v && v.apply(null, [p].concat(ja(u.slice(1))))
                    }
                }
            })
        },
        Uf = function(a) {
            return Kf.h[a] || function() {}
        };

    function Rf(a, b) {
        var c = uf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Sf;
        try {
            return vf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Af(e, {}, "Permission " + e + " is unknown.");
                },
                K: function() {
                    if (Pf(15)) throw new Af(a, {}, "Permission " + a + " is unknown.");
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function Sf(a, b, c) {
        return new Af(a, b, c)
    };
    var Vf = !1;
    var Wf = {};
    Wf.pn = Pa('');
    Wf.Al = Pa('');
    var Xf = Vf,
        Yf = Wf.Al,
        Zf = Wf.pn;
    var mg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function ng(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var og = new La;

    function pg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = og.get(e);
            f || (f = new RegExp(b, d), og.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function qg(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }

    function rg(a, b) {
        return String(a) === String(b)
    }

    function sg(a, b) {
        return Number(a) >= Number(b)
    }

    function tg(a, b) {
        return Number(a) <= Number(b)
    }

    function ug(a, b) {
        return Number(a) > Number(b)
    }

    function vg(a, b) {
        return Number(a) < Number(b)
    }

    function wg(a, b) {
        return 0 === String(a).indexOf(String(b))
    };
    var Dg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Eg(a, b) {
        for (var c = "", d = !0; 7 < a;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a | b] + c
    };
    var Fg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Gg = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        },
        K = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = Fg.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    m = c[d];
                if (null == m) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var n = typeof m;
                    m instanceof dd ? n = "Fn" : m instanceof rb ? n = "List" : m instanceof sb ? n = "PixieMap" : m instanceof id && (n =
                        "OpaqueValue");
                    if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (Gg[n] || n) + ", which does not match required type " + (Gg[h] || h) + ".");
                }
            }
        };

    function Hg(a) {
        return "" + a
    }

    function Ig(a, b) {
        var c = [];
        return c
    };
    var Jg = function(a, b) {
            var c = new dd(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = I(this, d[e]);
                try {
                    return b.apply(this, d)
                } catch (g) {
                    if (nd()) throw new pd(g.message);
                    throw g;
                }
            });
            c.Eb();
            return c
        },
        Kg = function(a, b) {
            var c = new sb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ga(e) ? c.set(d, Jg(a + "_" + d, e)) : nb(e) ? c.set(d, Kg(a + "_" + d,
                        e)) : (Ha(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.Eb();
            return c
        };
    var Lg = function(a, b) {
        K(J(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new sb;
        return d = Kg("AssertApiSubject", c)
    };
    var Mg = function(a, b) {
        K(J(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof kd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new sb;
        return d = Kg("AssertThatSubject", c)
    };

    function Ng(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(md(arguments[d], c));
            return ld(a.apply(null, b))
        }
    }
    var Pg = function() {
        for (var a = Math, b = Og, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Ng(a[e].bind(a)))
        }
        return c
    };
    var Qg = function(a) {
        var b;
        return b
    };
    var Rg = function(a) {
        var b;
        return b
    };
    var Sg = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var Tg = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };

    function Ug(a, b) {
        var c = !1;
        return c
    }
    Ug.D = "internal.evaluateBooleanExpression";
    var Zg = function(a) {
        K(J(this), ["message:?string"], arguments);
    };
    var $g = function(a, b) {
        K(J(this), ["min:!number", "max:!number"], arguments);
        return Ka(a, b)
    };
    var ah = function() {
        return (new Date).getTime()
    };
    var bh = function(a) {
        if (null === a) return "null";
        if (a instanceof rb) return "array";
        if (a instanceof dd) return "function";
        if (a instanceof id) {
            a = a.h;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var ch = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Xf || Zf) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return ld(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(md(c))
            })
        }
    };
    var dh = function(a) {
        return Oa(md(a, this.h))
    };
    var eh = function(a) {
        return Number(md(a, this.h))
    };
    var fh = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var kh = function(a, b, c) {
        var d = null,
            e = !1;
        K(J(this), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new sb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof sb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Og = "floor ceil round max min abs pow sqrt".split(" ");
    var lh = function() {
            var a = {};
            return {
                Nl: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                gn: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        mh = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return dd.prototype.invoke.apply(a, c)
            }
        },
        nh = function(a, b) {
            K(J(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var oh = {};
    var ph = function(a) {
        var b = new sb;
        if (a instanceof rb)
            for (var c = a.Tb(), d = 0; d < c.length(); d++) {
                var e = c.get(d);
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof dd)
                for (var f = ib(a, 1), g = 0; g < f.length; g++) {
                    var h = f[g];
                    b.set(h, a.get(h))
                } else
                    for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b
    };
    oh.keys = function(a) {
        K(J(this), ["input:!*"], arguments);
        if (a instanceof rb || a instanceof dd || "string" === typeof a) a = ph(a);
        if (a instanceof sb) return a.Tb();
        return new rb
    };
    oh.values = function(a) {
        K(J(this), ["input:!*"], arguments);
        if (a instanceof rb || a instanceof dd || "string" === typeof a) a = ph(a);
        if (a instanceof sb) return new rb(ib(a, 2));
        return new rb
    };
    oh.entries = function(a) {
        K(J(this), ["input:!*"], arguments);
        if (a instanceof rb || a instanceof dd || "string" === typeof a) a = ph(a);
        if (a instanceof sb) {
            for (var b = ib(a, 3), c = new rb, d = 0; d < b.length; d++) {
                var e = new rb(b[d]);
                c.push(e)
            }
            return c
        }
        return new rb
    };
    oh.freeze = function(a) {
        (a instanceof sb || a instanceof rb || a instanceof dd) && a.Eb();
        return a
    };
    oh.delete = function(a, b) {
        if (a instanceof sb && !a.s) return a.remove(b), !0;
        return !1
    };
    var L = function(a, b, c) {
        var d = a.h.h;
        if (!d) throw Error("Missing program state.");
        if (d.Vm) {
            try {
                d.vj.apply(null, Array.prototype.slice.call(arguments, 1))
            } catch (e) {
                throw Ab("TAGGING", 21), e;
            }
            return
        }
        d.vj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var qh = function() {
        this.h = {};
        this.s = {};
    };
    qh.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    };
    qh.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.s.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ga(b) ? Jg(a, b) : Kg(a, b)
    };

    function rh(a, b) {
        var c = void 0;
        return c
    };

    function sh() {
        var a = {};
        return a
    };
    var uh = function(a) {
            return th ? G.querySelectorAll(a) : null
        },
        vh = function(a, b) {
            if (!th) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!G.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        wh = !1;
    if (G.querySelectorAll) try {
        var xh = G.querySelectorAll(":root");
        xh && 1 == xh.length && xh[0] == G.documentElement && (wh = !0)
    } catch (a) {}
    var th = wh;
    var N = function(a) {
        Ab("GTM", a)
    };
    var Q = {
            g: {
                Ea: "ad_personalization",
                J: "ad_storage",
                N: "ad_user_data",
                R: "analytics_storage",
                Ta: "region",
                vd: "consent_updated",
                We: "wait_for_update",
                ki: "ads",
                ag: "all",
                pk: "maps",
                qk: "playstore",
                rk: "search",
                sk: "shopping",
                tk: "youtube",
                li: "app_remove",
                mi: "app_store_refund",
                ni: "app_store_subscription_cancel",
                oi: "app_store_subscription_convert",
                ri: "app_store_subscription_renew",
                dg: "add_payment_info",
                eg: "add_shipping_info",
                Zb: "add_to_cart",
                ac: "remove_from_cart",
                fg: "view_cart",
                Hb: "begin_checkout",
                bc: "select_item",
                cb: "view_item_list",
                sb: "select_promotion",
                eb: "view_promotion",
                ra: "purchase",
                fc: "refund",
                Fa: "view_item",
                gg: "add_to_wishlist",
                vk: "exception",
                si: "first_open",
                ui: "first_visit",
                sa: "gtag.config",
                Pa: "gtag.get",
                vi: "in_app_purchase",
                hc: "page_view",
                wk: "screen_view",
                wi: "session_start",
                xk: "timing_complete",
                yk: "track_social",
                yd: "user_engagement",
                ic: "gclgb",
                tb: "gclid",
                wa: "ads_data_redaction",
                wn: "gad_source",
                xn: "gclid_url",
                yn: "gclsrc",
                zn: "wbraid",
                ja: "allow_ad_personalization_signals",
                Xe: "allow_custom_scripts",
                Ye: "allow_display_features",
                zd: "allow_enhanced_conversions",
                fb: "allow_google_signals",
                Ga: "allow_interest_groups",
                zk: "app_id",
                Ak: "app_installer_id",
                Bk: "app_name",
                Ck: "app_version",
                jc: "auid",
                xi: "auto_detection_enabled",
                Ib: "aw_remarketing",
                Ze: "aw_remarketing_only",
                Ad: "discount",
                Bd: "aw_feed_country",
                Cd: "aw_feed_language",
                Z: "items",
                Dd: "aw_merchant_id",
                hg: "aw_basket_type",
                Ic: "campaign_content",
                Jc: "campaign_id",
                Kc: "campaign_medium",
                Lc: "campaign_name",
                Mc: "campaign",
                Nc: "campaign_source",
                Oc: "campaign_term",
                ub: "client_id",
                yi: "content_group",
                zi: "content_type",
                Ua: "conversion_cookie_prefix",
                Pc: "conversion_id",
                Ha: "conversion_linker",
                Jb: "conversion_api",
                af: "cookie_deprecation",
                ib: "cookie_domain",
                Qa: "cookie_expires",
                jb: "cookie_flags",
                kc: "cookie_name",
                Qc: "cookie_path",
                Va: "cookie_prefix",
                mc: "cookie_update",
                nc: "country",
                xa: "currency",
                Ed: "customer_lifetime_value",
                Rc: "custom_map",
                Ai: "gcldc",
                An: "dclid",
                Bi: "debug_mode",
                ba: "developer_id",
                Ci: "disable_merchant_reported_purchases",
                Sc: "dc_custom_params",
                Di: "dc_natural_search",
                ig: "dynamic_event_settings",
                jg: "affiliation",
                Fd: "checkout_option",
                bf: "checkout_step",
                kg: "coupon",
                Tc: "item_list_name",
                cf: "list_name",
                Ei: "promotions",
                Uc: "shipping",
                df: "tax",
                Gd: "engagement_time_msec",
                Hd: "enhanced_client_id",
                Id: "enhanced_conversions",
                lg: "enhanced_conversions_automatic_settings",
                Jd: "estimated_delivery_date",
                ef: "euid_logged_in_state",
                Vc: "event_callback",
                Dk: "event_category",
                vb: "event_developer_id_string",
                Ek: "event_label",
                mg: "event",
                Kd: "event_settings",
                Ld: "event_timeout",
                Fk: "description",
                Gk: "fatal",
                Fi: "experiments",
                ff: "firebase_id",
                Wc: "first_party_collection",
                Md: "_x_20",
                kb: "_x_19",
                ng: "fledge",
                og: "flight_error_code",
                pg: "flight_error_message",
                Gi: "fl_activity_category",
                Hi: "fl_activity_group",
                qg: "fl_advertiser_id",
                Ii: "fl_ar_dedupe",
                rg: "match_id",
                Ji: "fl_random_number",
                Ki: "tran",
                Li: "u",
                Nd: "gac_gclid",
                oc: "gac_wbraid",
                sg: "gac_wbraid_multiple_conversions",
                ug: "ga_restrict_domain",
                vg: "ga_temp_client_id",
                Od: "gdpr_applies",
                wg: "geo_granularity",
                wb: "value_callback",
                lb: "value_key",
                Hk: "google_ono",
                Kb: "google_signals",
                xg: "google_tld",
                Pd: "groups",
                yg: "gsa_experiment_id",
                zg: "iframe_state",
                Xc: "ignore_referrer",
                hf: "internal_traffic_results",
                Lb: "is_legacy_converted",
                yb: "is_legacy_loaded",
                Qd: "is_passthrough",
                jf: "_lps",
                Ka: "language",
                kf: "legacy_developer_id_string",
                La: "linker",
                qc: "accept_incoming",
                zb: "decorate_forms",
                W: "domains",
                Mb: "url_position",
                Ag: "method",
                Ik: "name",
                Yc: "new_customer",
                Bg: "non_interaction",
                Mi: "optimize_id",
                Ni: "page_hostname",
                Zc: "page_path",
                Ma: "page_referrer",
                Ab: "page_title",
                Cg: "passengers",
                Dg: "phone_conversion_callback",
                Oi: "phone_conversion_country_code",
                Eg: "phone_conversion_css_class",
                Pi: "phone_conversion_ids",
                Fg: "phone_conversion_number",
                Gg: "phone_conversion_options",
                Hg: "_protected_audience_enabled",
                ad: "quantity",
                Rd: "redact_device_info",
                lf: "referral_exclusion_definition",
                Nb: "restricted_data_processing",
                Qi: "retoken",
                Jk: "sample_rate",
                nf: "screen_name",
                Bb: "screen_resolution",
                Ri: "search_term",
                Na: "send_page_view",
                Ob: "send_to",
                Sd: "server_container_url",
                bd: "session_duration",
                Td: "session_engaged",
                pf: "session_engaged_time",
                Cb: "session_id",
                Ud: "session_number",
                dd: "delivery_postal_code",
                Kk: "temporary_client_id",
                qf: "topmost_url",
                Si: "tracking_id",
                rf: "traffic_type",
                ya: "transaction_id",
                Pb: "transport_url",
                Ig: "trip_type",
                Qb: "update",
                Db: "url_passthrough",
                Wd: "_user_agent_architecture",
                Xd: "_user_agent_bitness",
                Yd: "_user_agent_full_version_list",
                Zd: "_user_agent_mobile",
                ae: "_user_agent_model",
                be: "_user_agent_platform",
                ce: "_user_agent_platform_version",
                de: "_user_agent_wow64",
                Ba: "user_data",
                Jg: "user_data_auto_latency",
                Kg: "user_data_auto_meta",
                Lg: "user_data_auto_multi",
                Mg: "user_data_auto_selectors",
                Ng: "user_data_auto_status",
                ee: "user_data_mode",
                fe: "user_data_settings",
                Ra: "user_id",
                Wa: "user_properties",
                Ti: "_user_region",
                Og: "us_privacy_string",
                ia: "value",
                Pg: "wbraid_multiple_conversions",
                Zi: "_host_name",
                aj: "_in_page_command",
                bj: "_is_passthrough_cid",
                gd: "non_personalized_ads",
                ne: "_sst_parameters",
                hb: "conversion_label",
                Aa: "page_location",
                xb: "global_developer_id_string",
                Vd: "tc_privacy_string"
            }
        },
        Xh = {},
        Yh = Object.freeze((Xh[Q.g.ja] = 1, Xh[Q.g.Ye] =
            1, Xh[Q.g.zd] = 1, Xh[Q.g.fb] = 1, Xh[Q.g.Z] = 1, Xh[Q.g.ib] = 1, Xh[Q.g.Qa] = 1, Xh[Q.g.jb] = 1, Xh[Q.g.kc] = 1, Xh[Q.g.Qc] = 1, Xh[Q.g.Va] = 1, Xh[Q.g.mc] = 1, Xh[Q.g.Rc] = 1, Xh[Q.g.ba] = 1, Xh[Q.g.ig] = 1, Xh[Q.g.Vc] = 1, Xh[Q.g.Kd] = 1, Xh[Q.g.Ld] = 1, Xh[Q.g.Wc] = 1, Xh[Q.g.ug] = 1, Xh[Q.g.Kb] = 1, Xh[Q.g.xg] = 1, Xh[Q.g.Pd] = 1, Xh[Q.g.hf] = 1, Xh[Q.g.Lb] = 1, Xh[Q.g.yb] = 1, Xh[Q.g.La] = 1, Xh[Q.g.lf] = 1, Xh[Q.g.Nb] = 1, Xh[Q.g.Na] = 1, Xh[Q.g.Ob] = 1, Xh[Q.g.Sd] = 1, Xh[Q.g.bd] = 1, Xh[Q.g.pf] = 1, Xh[Q.g.dd] = 1, Xh[Q.g.Pb] = 1, Xh[Q.g.Qb] = 1, Xh[Q.g.fe] = 1, Xh[Q.g.Wa] = 1, Xh[Q.g.ne] = 1, Xh));
    Object.freeze([Q.g.Aa, Q.g.Ma, Q.g.Ab, Q.g.Ka, Q.g.nf, Q.g.Ra, Q.g.ff, Q.g.yi]);
    var Zh = {},
        $h = Object.freeze((Zh[Q.g.li] = 1, Zh[Q.g.mi] = 1, Zh[Q.g.ni] = 1, Zh[Q.g.oi] = 1, Zh[Q.g.ri] = 1, Zh[Q.g.si] = 1, Zh[Q.g.ui] = 1, Zh[Q.g.vi] = 1, Zh[Q.g.wi] = 1, Zh[Q.g.yd] = 1, Zh)),
        ai = {},
        bi = Object.freeze((ai[Q.g.dg] = 1, ai[Q.g.eg] = 1, ai[Q.g.Zb] = 1, ai[Q.g.ac] = 1, ai[Q.g.fg] = 1, ai[Q.g.Hb] = 1, ai[Q.g.bc] = 1, ai[Q.g.cb] = 1, ai[Q.g.sb] = 1, ai[Q.g.eb] = 1, ai[Q.g.ra] = 1, ai[Q.g.fc] = 1, ai[Q.g.Fa] = 1, ai[Q.g.gg] = 1, ai)),
        ci = Object.freeze([Q.g.ja, Q.g.fb, Q.g.mc, Q.g.Wc, Q.g.Xc, Q.g.Na, Q.g.Qb]),
        di = Object.freeze([].concat(ci)),
        ei = Object.freeze([Q.g.Qa, Q.g.Ld,
            Q.g.bd, Q.g.pf, Q.g.Gd
        ]),
        fi = Object.freeze([].concat(ei)),
        gi = {},
        hi = (gi[Q.g.J] = "1", gi[Q.g.R] = "2", gi[Q.g.N] = "3", gi[Q.g.Ea] = "4", gi),
        ii = {},
        ji = Object.freeze((ii[Q.g.ja] = 1, ii[Q.g.zd] = 1, ii[Q.g.Ga] = 1, ii[Q.g.Ib] = 1, ii[Q.g.Ze] = 1, ii[Q.g.Ad] = 1, ii[Q.g.Bd] = 1, ii[Q.g.Cd] = 1, ii[Q.g.Z] = 1, ii[Q.g.Dd] = 1, ii[Q.g.Ua] = 1, ii[Q.g.Ha] = 1, ii[Q.g.ib] = 1, ii[Q.g.Qa] = 1, ii[Q.g.jb] = 1, ii[Q.g.Va] = 1, ii[Q.g.xa] = 1, ii[Q.g.Ed] = 1, ii[Q.g.ba] = 1, ii[Q.g.Ci] = 1, ii[Q.g.Id] = 1, ii[Q.g.Jd] = 1, ii[Q.g.ff] = 1, ii[Q.g.Wc] = 1, ii[Q.g.Lb] = 1, ii[Q.g.yb] = 1, ii[Q.g.Ka] = 1, ii[Q.g.Yc] =
            1, ii[Q.g.Aa] = 1, ii[Q.g.Ma] = 1, ii[Q.g.Dg] = 1, ii[Q.g.Eg] = 1, ii[Q.g.Fg] = 1, ii[Q.g.Gg] = 1, ii[Q.g.Nb] = 1, ii[Q.g.Na] = 1, ii[Q.g.Ob] = 1, ii[Q.g.Sd] = 1, ii[Q.g.dd] = 1, ii[Q.g.ya] = 1, ii[Q.g.Pb] = 1, ii[Q.g.Qb] = 1, ii[Q.g.Db] = 1, ii[Q.g.Ba] = 1, ii[Q.g.Ra] = 1, ii[Q.g.ia] = 1, ii)),
        ki = {},
        li = Object.freeze((ki[Q.g.rk] = "s", ki[Q.g.tk] = "y", ki[Q.g.qk] = "p", ki[Q.g.sk] = "h", ki[Q.g.ki] = "a", ki[Q.g.pk] = "m", ki));
    Object.freeze(Q.g);
    var mi = {},
        ni = z.google_tag_manager = z.google_tag_manager || {},
        oi = Math.random();
    mi.Ug = "41o0";
    mi.me = Number("0") || 0;
    mi.fa = "dataLayer";
    mi.mk = "ChAIgNnirQYQ/aaz6/2rkvQbEiQA1nw8cwyTea1FAKw4gnvm78ZMIeqYE8cKJQCNWnpHzir/eCcaAs8d";
    var pi = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        qi = {
            __paused: 1,
            __tg: 1
        },
        ri;
    for (ri in pi) pi.hasOwnProperty(ri) && (qi[ri] = 1);
    var si = Pa(""),
        ti, ui = !1;
    ti = ui;
    var vi, wi = !1;
    vi = wi;
    var xi, yi = !1;
    xi = yi;
    mi.xd = "www.googletagmanager.com";
    var zi = "" + mi.xd + (ti ? "/gtag/js" : "/gtm.js"),
        Ai = null,
        Bi = null,
        Ci = {},
        Di = {},
        Ei = function() {
            var a = ni.sequence || 1;
            ni.sequence = a + 1;
            return a
        };
    mi.lk = "";
    var Fi = "";
    mi.zf = Fi;
    var Gi = new function() {
        this.h = "";
        this.s = !1;
        this.F = this.M = this.C = ""
    };

    function Hi(a) {
        for (var b = {}, c = ha(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    }
    var Ii = new La,
        Ji = {},
        Ki = {},
        Ni = {
            name: mi.fa,
            set: function(a, b) {
                C(ab(a, b), Ji);
                Li()
            },
            get: function(a) {
                return Mi(a, 2)
            },
            reset: function() {
                Ii = new La;
                Ji = {};
                Li()
            }
        },
        Mi = function(a, b) {
            return 2 != b ? Ii.get(a) : Oi(a)
        },
        Oi = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = Ji, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Pi = function(a, b) {
            Ki.hasOwnProperty(a) || (Ii.set(a, b), C(ab(a, b), Ji), Li())
        },
        Qi = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = Mi(c, 1);
                if (Ia(d) || nb(d)) d = C(d);
                Ki[c] = d
            }
        },
        Li = function(a) {
            l(Ki, function(b, c) {
                Ii.set(b, c);
                C(ab(b), Ji);
                C(ab(b, c), Ji);
                a && delete Ki[b]
            })
        },
        Ri = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Oi(a) : Ii.get(a);
            "array" === kb(d) || "object" === kb(d) ? c = C(d) : c = d;
            return c
        };
    var Vi = [];

    function Wi(a) {
        switch (a) {
            case 24:
                return 3;
            case 45:
                return 14;
            case 55:
                return 11;
            case 56:
                return 12;
            case 60:
                return 13;
            case 57:
                return 15;
            case 96:
                return 16;
            case 100:
                return 17
        }
    }

    function R(a) {
        Vi[a] = !0;
        var b = Wi(a);
        b && (Of[b] = !0)
    }
    R(5);
    R(6);
    R(7);
    R(9);
    R(10);
    R(14);
    R(11);
    R(15);
    R(18);
    R(19);
    R(20);
    R(22);
    R(23);
    R(28);
    R(29);
    R(30);
    R(32);
    R(33);
    R(37);
    R(39);
    R(42);
    R(43);
    R(44);
    R(46);
    R(47);
    R(48);
    R(50);
    R(51);
    R(52);
    R(57);
    R(59);
    R(62);
    R(63);
    R(64);
    R(69);

    R(75);
    R(78);
    R(81);
    R(82);
    R(84);
    R(85);
    R(90);
    R(91);
    R(92);
    R(93);
    R(94);
    R(101);
    R(100);

    function S(a) {
        return !!Vi[a]
    }
    var $i = function(a) {
        Ab("HEALTH", a)
    };
    var aj;
    try {
        aj = JSON.parse(yb("eyIwIjoiSU4iLCIxIjoiSU4tVEciLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        N(123), $i(2), aj = {}
    }
    var bj = function() {
            return aj["0"] || ""
        },
        cj = function() {
            return aj["1"] || ""
        },
        dj = function() {
            var a = !1;
            return a
        },
        ej = function() {
            return !1 !== aj["6"]
        },
        fj = function() {
            var a = "";
            return a
        },
        gj = function() {
            var a = !1;
            return a
        },
        hj = function() {
            var a = "";
            return a
        };
    var ij = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var jj = function(a) {
        jj[" "](a);
        return a
    };
    jj[" "] = function() {};
    var lj = function() {
        var a = kj,
            b = "th";
        if (a.th && a.hasOwnProperty(b)) return a.th;
        var c = new a;
        return a.th = c
    };
    var kj = function() {
        var a = {};
        this.h = function() {
            var b = ij.h,
                c = ij.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.s = function() {
            a[ij.h] = !0
        }
    };
    var rj = !1,
        sj = !1,
        tj = {},
        uj = {},
        vj = !1,
        wj = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function xj() {
        var a = Ec("google_tag_data", {});
        return a.ics = a.ics || new yj
    }
    var yj = function() {
        this.entries = {};
        this.cps = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    yj.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Ab("TAGGING", 19);
        void 0 == b ? Ab("TAGGING", 18) : zj(this, a, "granted" === b, c, d, e, f)
    };
    yj.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++) zj(this, a[c], void 0, void 0, "", "", b)
    };
    var zj = function(a, b, c, d, e, f, g) {
        var h = a.entries,
            m = h[b] || {},
            n = m.region,
            p = d && k(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Aj(p, n, e, f)) {
            var q = !!(g && 0 < g && void 0 === m.update),
                r = {
                    region: p,
                    declare_region: m.declare_region,
                    implicit: m.implicit,
                    default: void 0 !== c ? c : m.default,
                    declare: m.declare,
                    update: m.update,
                    quiet: q
                };
            if ("" !== e || !1 !== m.default) h[b] = r;
            q && z.setTimeout(function() {
                h[b] === r && r.quiet && (Ab("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners())
            }, g)
        }
    };
    ba = yj.prototype;
    ba.clearTimeout = function(a, b) {
        var c = [a],
            d;
        for (d in tj) tj.hasOwnProperty(d) && tj[d] === a && c.push(d);
        var e = this.entries[a] || {},
            f = this.getConsentState(a);
        if (e.quiet) {
            e.quiet = !1;
            for (var g = ha(c), h = g.next(); !h.done; h = g.next()) Bj(this, h.value)
        } else if (void 0 !== b && f !== b)
            for (var m = ha(c), n = m.next(); !n.done; n = m.next()) Bj(this, n.value)
    };
    ba.update = function(a, b) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a),
                d = this.entries;
            (d[a] = d[a] || {}).update = "granted" === b;
            this.clearTimeout(a, c)
        }
    };
    ba.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            h = g.declare_region,
            m = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Aj(m, h, d, e)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if ("" !== d || !1 !== g.declare) f[a] = n
        }
    };
    ba.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    };
    ba.getConsentState = function(a) {
        var b = this.entries,
            c = b[a] || {},
            d = c.update;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d) return d ? 1 : 2;
        if (tj.hasOwnProperty(a)) {
            var e = b[tj[a]] || {};
            d = e.update;
            if (void 0 !== d) return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d) return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d) return d ? 1 : 2;
        if (Pf(3)) {
            d = c.implicit;
            if (void 0 !== d) return d ? 3 : 4;
            if (wj.hasOwnProperty(a)) return Ab("TAGGING", 22), wj[a] ? 3 : 4
        }
        return 0
    };
    ba.setCps = function(a, b, c, d, e) {
        Cj(this.cps, a, b, c, d, e) && (this.usedSetCps = !0)
    };
    ba.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            Fl: b
        })
    };
    var Bj = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            Ia(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Nj = !0)
        }
    };
    yj.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.Nj) {
                d.Nj = !1;
                try {
                    d.Fl({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };

    function Aj(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function Cj(a, b, c, d, e, f) {
        var g = a[b] || {},
            h = g.region,
            m = d && k(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Aj(m, h, e, f)) {
            var n = {
                enabled: "granted" === c,
                region: m
            };
            if ("" !== e || !1 !== g.enabled) return a[b] = n, !0
        }
        return !1
    }
    var Dj = function(a) {
            var b = xj();
            b.accessedAny = !0;
            return (k(a) ? [a] : a).every(function(c) {
                switch (b.getConsentState(c)) {
                    case 1:
                    case 3:
                        return !0;
                    case 2:
                    case 4:
                        return !1;
                    default:
                        return !0
                }
            })
        },
        Ej = function(a) {
            var b = xj();
            b.accessedAny = !0;
            return b.getConsentState(a)
        },
        Fj = function() {
            var a = xj(),
                b = vj,
                c = a.cps,
                d = a.usedSetCps,
                e = {};
            if (b && d)
                for (var f in uj) uj.hasOwnProperty(f) && uj[f].enabled && c.hasOwnProperty(f) && c[f].enabled ? e[f] = {
                    enabled: !0,
                    region: uj[f].region
                } : e[f] = {
                    enabled: !1,
                    region: uj[f].region
                };
            else {
                var g = b ? uj : c,
                    h;
                for (h in g) g.hasOwnProperty(h) && (e[h] = {
                    enabled: g[h].enabled,
                    region: g[h].region
                })
            }
            for (var m = {}, n = ha(Object.keys(e)), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                m[q] = e[q].enabled
            }
            return m
        },
        Gj = function(a) {
            var b = xj();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Hj = function() {
            if (!lj().h()) return !1;
            var a = xj();
            a.accessedAny = !0;
            return a.active
        },
        Ij = function(a, b) {
            xj().addListener(a, b)
        },
        Jj = function(a, b) {
            xj().notifyListeners(a, b)
        },
        Kj = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Gj(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Ij(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Lj = function(a, b) {
            function c() {
                for (var h = [], m = 0; m < e.length; m++) {
                    var n = e[m];
                    Dj(n) && !f[n] && h.push(n)
                }
                return h
            }

            function d(h) {
                for (var m = 0; m < h.length; m++) f[h[m]] = !0
            }
            var e = k(b) ? [b] : b,
                f = {},
                g = c();
            g.length !== e.length && (d(g), Ij(e, function(h) {
                function m(q) {
                    0 !== q.length && (d(q), h.consentTypes = q, a(h))
                }
                var n = c();
                if (0 !== n.length) {
                    var p = Object.keys(f).length;
                    n.length + p >= e.length ? m(n) : z.setTimeout(function() {
                        m(c())
                    }, 500)
                }
            }))
        };

    function Mj() {}

    function Nj() {};
    var Oj = [Q.g.J, Q.g.R, Q.g.N, Q.g.Ea],
        Pj = function(a) {
            for (var b = a[Q.g.Ta], c = Array.isArray(b) ? b : [b], d = {
                    Ce: 0
                }; d.Ce < c.length; d = {
                    Ce: d.Ce
                }, ++d.Ce) l(a, function(e) {
                return function(f, g) {
                    if (f !== Q.g.Ta) {
                        var h = c[e.Ce],
                            m = bj(),
                            n = cj();
                        sj = !0;
                        rj && Ab("TAGGING", 20);
                        xj().declare(f, g, h, m, n)
                    }
                }
            }(d))
        },
        Qj = function(a) {
            var b = a[Q.g.Ta];
            b && N(40);
            var c = a[Q.g.We];
            c && N(41);
            for (var d = Ia(b) ? b : [b], e = {
                    De: 0
                }; e.De < d.length; e = {
                    De: e.De
                }, ++e.De) l(a, function(f) {
                return function(g, h) {
                    if (g !== Q.g.Ta && g !== Q.g.We) {
                        var m = d[f.De],
                            n = Number(c),
                            p = bj(),
                            q = cj();
                        rj = !0;
                        sj && Ab("TAGGING", 20);
                        xj().default(g, h, m, p, q, n)
                    }
                }
            }(e))
        },
        Rj = function(a, b) {
            l(a, function(c, d) {
                rj = !0;
                sj && Ab("TAGGING", 20);
                xj().update(c, d)
            });
            Jj(b.eventId, b.priorityId)
        },
        Sj = function(a) {
            for (var b = a[Q.g.Ta], c = Array.isArray(b) ? b : [b], d = {
                    Ee: 0
                }; d.Ee < c.length; d = {
                    Ee: d.Ee
                }, ++d.Ee) l(a, function(e) {
                return function(f, g) {
                    if (f !== Q.g.Ta) {
                        var h = c[e.Ee],
                            m = bj(),
                            n = cj();
                        xj().setCps(f, g, h, m, n)
                    }
                }
            }(d))
        },
        Tj = function(a) {
            for (var b = a[Q.g.Ta], c = Array.isArray(b) ? b : [b], d = {
                    ld: 0
                }; d.ld < c.length; d = {
                    ld: d.ld
                }, ++d.ld) a.hasOwnProperty(Q.g.ag) &&
                l(li, function(e) {
                    return function(f) {
                        Cj(uj, f, a[Q.g.ag], c[e.ld], bj(), cj()) && (vj = !0)
                    }
                }(d)), l(a, function(e) {
                    return function(f, g) {
                        f !== Q.g.Ta && f !== Q.g.ag && Cj(uj, f, g, c[e.ld], bj(), cj()) && (vj = !0)
                    }
                }(d))
        },
        Uj = function(a) {
            Array.isArray(a) || (a = [a]);
            return a.every(function(b) {
                return Dj(b)
            })
        },
        Vj = function(a, b) {
            Ij(a, b)
        },
        Wj = function(a, b) {
            Lj(a, b)
        },
        Xj = function(a, b) {
            Kj(a, b)
        },
        Yj = function() {
            var a = [Q.g.J, Q.g.Ea, Q.g.N];
            xj().waitForUpdate(a, 500)
        },
        Zj = function(a) {
            for (var b = ha(a), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                xj().clearTimeout(d,
                    void 0)
            }
            Jj()
        };
    var ak = function() {
        function a(b) {
            ni.pscdl = b
        }
        if (void 0 === ni.pscdl) try {
            "cookieDeprecationLabel" in Cc ? (a("pending"), Cc.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
        } catch (b) {
            a("error")
        }
    };
    var bk = /[A-Z]+/,
        ck = /\s/,
        dk = function(a, b) {
            if (k(a)) {
                a = Ra(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (bk.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var g = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = g(e);
                            if ("DC" === d && 2 === f.length) {
                                var h = g(f[1]);
                                2 === h.length && (f[1] = h[0], f.push(h[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || ck.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            da: d + "-" + f[0],
                            P: f
                        }
                    }
                }
            }
        },
        fk = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = dk(a[d], b);
                e && (c[e.id] = e)
            }
            ek(c);
            var f = [];
            l(c, function(g, h) {
                f.push(h)
            });
            return f
        };

    function ek(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.P[1] && b.push(d.da)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var gk = function(a) {
            var b = String(a[Le.ka] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        hk = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var jk = function(a, b) {
            var c = ik();
            c.pending || (c.pending = []);
            Ja(c.pending, function(d) {
                return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
            }) || c.pending.push({
                target: a,
                onLoad: b
            })
        },
        kk = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        ik = function() {
            var a = Ec("google_tag_data", {}),
                b = a.tidr;
            b || (b = new kk, a.tidr = b);
            return b
        };
    var lk = {},
        mk = !1,
        Qf = {
            ctid: "GTM-KLSBKGW",
            Ef: "42095991",
            Lj: "GTM-KLSBKGW",
            Mj: "GTM-KLSBKGW"
        };
    lk.ie = Pa("");
    var pk = function() {
            var a = nk();
            return mk ? a.map(ok) : a
        },
        rk = function() {
            var a = qk();
            return mk ? a.map(ok) : a
        },
        tk = function() {
            return sk(Qf.ctid)
        },
        uk = function() {
            return sk(Qf.Ef || "_" + Qf.ctid)
        },
        nk = function() {
            return Qf.Lj ? Qf.Lj.split("|") : [Qf.ctid]
        },
        qk = function() {
            return Qf.Mj ? Qf.Mj.split("|") : []
        },
        vk = function(a) {
            var b = ik();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        sk = function(a) {
            return mk ? ok(a) : a
        },
        ok = function(a) {
            return "siloed_" + a
        },
        wk = function(a) {
            a = String(a);
            return mk && 0 === a.indexOf("siloed_") ?
                a.substring(7) : a
        },
        xk = function() {
            var a = !1;
            if (a) {
                var b = ik();
                if (b.siloed) {
                    for (var c = [], d = nk(), e = qk(), f = {}, g = 0; g < b.siloed.length; f = {
                            Ff: void 0
                        }, g++) f.Ff = b.siloed[g], !mk && Ja(f.Ff.isDestination ? e : d, function(h) {
                        return function(m) {
                            return m === h.Ff.ctid
                        }
                    }(f)) ? mk = !0 : c.push(f.Ff);
                    b.siloed = c
                }
            }
        };

    function yk() {
        var a = ik();
        if (a.pending) {
            for (var b, c = [], d = !1, e = pk(), f = rk(), g = {}, h = 0; h < a.pending.length; g = {
                    Oe: void 0
                }, h++) g.Oe = a.pending[h], Ja(g.Oe.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Oe.target.ctid
                }
            }(g)) ? d || (b = g.Oe.onLoad, d = !0) : c.push(g.Oe);
            a.pending = c;
            if (b) try {
                b(uk())
            } catch (m) {}
        }
    }
    var zk = function() {
            for (var a = ik(), b = pk(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = pk(), d.destinations = rk()) : a.container[b[c]] = {
                    state: 2,
                    containers: pk(),
                    destinations: rk()
                }
            }
            for (var e = rk(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && N(93);
                g ? (g.state = 2, g.containers = pk(), g.destinations = rk()) : a.destination[e[f]] = {
                    state: 2,
                    containers: pk(),
                    destinations: rk()
                }
            }
            a.canonical[uk()] = {};
            yk()
        },
        Ak = function(a) {
            return !!ik().container[a]
        },
        Bk = function(a) {
            var b = ik().destination[a];
            return !!b && !!b.state
        },
        Ck = function() {
            return {
                ctid: tk(),
                isDestination: lk.ie
            }
        };

    function Dk(a) {
        var b = ik();
        (b.siloed = b.siloed || []).push(a)
    }
    var Ek = function() {
            var a = ik().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Fk = function() {
            var a = {};
            l(ik().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        },
        Gk = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var Hk = {
            sampleRate: "0.005000",
            hk: "",
            gk: Number("5"),
            ho: Number("")
        },
        Ik = [];

    function Jk(a) {
        Ik.push(a)
    }
    var Kk = !1,
        Lk;
    if (!(Lk = hk)) {
        var Mk = Math.random(),
            Nk = Hk.sampleRate;
        Lk = Mk < Number(Nk)
    }
    var Ok = Lk,
        Pk = "/a?id=" + Qf.ctid,
        Qk = "https://www.googletagmanager.com" + Pk,
        Rk = void 0,
        Sk = {},
        Tk = void 0,
        Uk = new function() {
            var a = 5;
            0 < Hk.gk && (a = Hk.gk);
            this.h = 0;
            this.C = [];
            this.s = a
        },
        Vk = 1E3;

    function Wk(a, b) {
        var c = Rk;
        if (void 0 === c)
            if (b) c = Ei();
            else return "";
        for (var d = [Gi.s ? "" + Gi.C + Pk : Qk], e = ha(Ik), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, h = g({
                    eventId: c,
                    Hc: !!a,
                    Vj: function() {
                        Kk = !0
                    }
                }), m = ha(h), n = m.next(); !n.done; n = m.next()) {
                var p = ha(n.value),
                    q = p.next().value,
                    r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }

    function Xk() {
        Tk && (z.clearTimeout(Tk), Tk = void 0);
        if (void 0 !== Rk && Yk) {
            var a;
            (a = Sk[Rk]) || (a = Uk.h < Uk.s ? !1 : 1E3 > Ua() - Uk.C[Uk.h % Uk.s]);
            if (a || 0 >= Vk--) N(1), Sk[Rk] = !0;
            else {
                var b = Uk.h++ % Uk.s;
                Uk.C[b] = Ua();
                var c = Wk(!0);
                Mc(c);
                if (Kk) {
                    var d = c.replace("/a?", "/td?");
                    Mc(d)
                }
                Yk = Kk = !1
            }
        }
    }
    var Yk = !1;

    function Zk(a) {
        Sk[a] || (a !== Rk && (Xk(), Rk = a), Yk = !0, Tk || (Tk = z.setTimeout(Xk, 500)), 2022 <= Wk().length && Xk())
    }
    var $k = Ka();

    function al() {
        $k = Ka()
    }

    function bl() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", $k]
        ]
    };
    var cl = "",
        dl = [];

    function el(a) {
        var b = [];
        cl && b.push(["dl", encodeURIComponent(cl)]);
        0 < dl.length && b.push(["tdp", dl.join(".")]);
        a.Hc && (cl = "", dl.length = 0, b.length && a.Vj());
        return b
    };
    var fl = [];

    function gl(a) {
        if (!fl.length) return [];
        var b = [
            ["tdc", fl.join("!")]
        ];
        a.Hc && (a.Vj(), fl.length = 0);
        return b
    };
    var hl = /:[0-9]+$/,
        il = /^\d+\.fls\.doubleclick\.net$/,
        jl = function(a, b, c, d) {
            for (var e = [], f = ha(a.split("&")), g = f.next(); !g.done; g = f.next()) {
                var h = ha(g.value.split("=")),
                    m = h.next().value,
                    n = ia(h);
                if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                    var p = n.join("=");
                    if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                    e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
                }
            }
            return c ? e : void 0
        },
        ml = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = kl(a.protocol) || kl(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(hl, "").toLowerCase());
            return ll(a, b, c, d, e)
        },
        ll = function(a, b, c, d, e) {
            var f, g = kl(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = nl(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(hl, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Ab("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = jl(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f =
                        a && a.href
            }
            return f
        },
        kl = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        nl = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        ol = {},
        pl = 0,
        rl = function(a) {
            if (Pf(17)) {
                var b = ol[a];
                b || (b = ql(a), 5 > pl && (ol[a] = b, pl++));
                return b
            }
            return ql(a)
        },
        ql = function(a) {
            var b = G.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Ab("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(hl, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        sl = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = rl(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var m = "" + f + g + h;
            "/" === m[m.length - 1] && (m = m.substring(0,
                m.length - 1));
            return m
        },
        tl = function(a) {
            var b = rl(z.location.href),
                c = ml(b, "host", !1);
            if (c && c.match(il)) {
                var d = ml(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var ul = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        vl = {},
        wl = Object.freeze((vl[Q.g.Na] = !0, vl)),
        xl = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics="),
        zl = function(a, b, c) {
            if (Ok && "config" === a && !(1 < dk(b).P.length)) {
                var d, e = Ec("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = C(c.F);
                C(c.h, f);
                var g = [],
                    h;
                for (h in d) {
                    var m = yl(d[h], f);
                    m.length && (xl && console.log(m), g.push(h))
                }
                g.length && (g.length && Ok && fl.push(b + "*" + g.join(".")), Ab("TAGGING", ul[G.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Al(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function yl(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? wl[q] : t
            },
            f;
        for (f in Al(a, b)) {
            var g = (d ? d + "." : "") + f,
                h = e(f, a),
                m = e(f, b),
                n = "object" === kb(h) || "array" === kb(h),
                p = "object" === kb(m) || "array" === kb(m);
            if (n && p) yl(h, m, c, g);
            else if (n || p || h !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var Bl = function(a, b, c, d, e, f, g, h, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.C = e;
            this.F = f;
            this.s = g;
            this.eventMetadata = h;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        Cl = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.h);
                    c.push(a.M);
                    c.push(a.C);
                    c.push(a.F);
                    c.push(a.s);
                    break;
                case 2:
                    c.push(a.h);
                    break;
                case 1:
                    c.push(a.M);
                    c.push(a.C);
                    c.push(a.F);
                    c.push(a.s);
                    break;
                case 4:
                    c.push(a.h), c.push(a.M), c.push(a.C), c.push(a.F)
            }
            return c
        },
        U = function(a, b, c, d) {
            for (var e = ha(Cl(a, void 0 === d ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (void 0 !== g[b]) return g[b]
            }
            return c
        },
        Dl = function(a) {
            for (var b = {}, c = Cl(a, 4), d = ha(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = ha(f), h = g.next(); !h.done; h = g.next()) b[h.value] = 1;
            return Object.keys(b)
        },
        El = function(a, b, c) {
            function d(n) {
                nb(n) && l(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                g = Cl(a, void 0 === c ? 3 : c);
            g.reverse();
            for (var h = ha(g), m = h.next(); !m.done; m = h.next()) d(m.value[b]);
            return f ? e : void 0
        },
        Fl = function(a) {
            for (var b = [Q.g.Mc,
                    Q.g.Ic, Q.g.Jc, Q.g.Kc, Q.g.Lc, Q.g.Nc, Q.g.Oc
                ], c = Cl(a, 3), d = ha(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, h = !1, m = ha(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    void 0 !== f[p] && (g[p] = f[p], h = !0)
                }
                var q = h ? g : void 0;
                if (q) return q
            }
            return {}
        },
        Gl = function(a, b) {
            this.uf = a;
            this.vf = b;
            this.C = {};
            this.Sb = {};
            this.h = {};
            this.F = {};
            this.fd = {};
            this.Rb = {};
            this.s = {};
            this.Oa = function() {};
            this.X = function() {};
            this.M = !1
        },
        Hl = function(a, b) {
            a.C = b;
            return a
        },
        Il = function(a, b) {
            a.Sb = b;
            return a
        },
        Jl = function(a, b) {
            a.h = b;
            return a
        },
        Kl = function(a, b) {
            a.F = b;
            return a
        },
        Ll = function(a, b) {
            a.fd = b;
            return a
        },
        Ml = function(a, b) {
            a.Rb = b;
            return a
        },
        Nl = function(a, b) {
            a.s = b || {};
            return a
        },
        Ol = function(a, b) {
            a.Oa = b;
            return a
        },
        Pl = function(a, b) {
            a.X = b;
            return a
        },
        Ql = function(a, b) {
            a.M = b;
            return a
        },
        Rl = function(a) {
            return new Bl(a.uf, a.vf, a.C, a.Sb, a.h, a.F, a.Rb, a.s, a.Oa, a.X, a.M)
        };
    var Sl = {};

    function Tl(a, b, c) {
        Ok && void 0 !== a && (Sl[a] = Sl[a] || [], Sl[a].push(c + b), Zk(a))
    }

    function Ul(a) {
        var b = a.eventId,
            c = a.Hc,
            d = [],
            e = Sl[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete Sl[b];
        return d
    };
    var Wl = function(a, b) {
            var c = dk(sk(a), !0);
            c && Vl.register(c, b)
        },
        Xl = function(a, b, c, d) {
            var e = dk(c, d.isGtmEvent);
            e && Vl.push("event", [b, a], e, d)
        },
        Yl = function(a, b, c, d) {
            var e = dk(c, d.isGtmEvent);
            e && Vl.push("get", [a, b], e, d)
        },
        $l = function(a) {
            var b = dk(sk(a), !0),
                c;
            b ? c = Zl(Vl, b).h : c = {};
            return c
        },
        am = function(a, b) {
            var c = dk(sk(a), !0);
            if (c) {
                var d = Vl,
                    e = C(b);
                C(Zl(d, c).h, e);
                Zl(d, c).h = e
            }
        },
        bm = function() {
            this.status = 1;
            this.M = {};
            this.h = {};
            this.s = {};
            this.X = null;
            this.F = {};
            this.C = !1
        },
        cm = function(a, b, c, d) {
            var e = Ua();
            this.type = a;
            this.C = e;
            this.h = b;
            this.s = c;
            this.messageContext = d
        },
        dm = function() {
            this.s = {};
            this.C = {};
            this.h = []
        },
        Zl = function(a, b) {
            var c = b.da;
            return a.s[c] = a.s[c] || new bm
        },
        em = function(a, b, c, d) {
            if (d.h) {
                var e = Zl(a, d.h),
                    f = e.X;
                if (f) {
                    var g = C(c),
                        h = C(e.M[d.h.id]),
                        m = C(e.F),
                        n = C(e.h),
                        p = C(a.C),
                        q = {};
                    if (Ok) try {
                        q = C(Ji)
                    } catch (v) {
                        N(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Tl(d.messageContext.eventId, r, v)
                        },
                        u = Rl(Ql(Pl(Ol(Nl(Ll(Kl(Ml(Jl(Il(Hl(new Gl(d.messageContext.eventId, d.messageContext.priorityId), g), h), m), n), p), q), d.messageContext.eventMetadata),
                            function() {
                                if (t) {
                                    var v = t;
                                    t = void 0;
                                    v("2");
                                    if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                                }
                            }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Tl(d.messageContext.eventId, r, "1"), zl(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        Tl(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    dm.prototype.register = function(a, b, c) {
        var d = Zl(this, a);
        3 !== d.status && (d.X = b, d.status = 3, c && (C(d.h, c), d.h = c), this.flush())
    };
    dm.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === Zl(this, c).status && (Zl(this, c).status = 2, this.push("require", [{}], c, {})), Zl(this, c).C && (d.deferrable = !1));
        this.h.push(new cm(a, c, b, d));
        d.deferrable || this.flush()
    };
    dm.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; e = {
                uc: void 0,
                lh: void 0
            }) {
            var f = this.h[0],
                g = f.h;
            if (f.messageContext.deferrable) !g || Zl(this, g).C ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Zl(this, g).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        l(f.s[0], function(r, t) {
                            C(ab(r, t), b.C)
                        });
                        break;
                    case "config":
                        var h = Zl(this, g);
                        e.uc = {};
                        l(f.s[0], function(r) {
                            return function(t, u) {
                                C(ab(t, u), r.uc)
                            }
                        }(e));
                        var m = !!e.uc[Q.g.Qb];
                        delete e.uc[Q.g.Qb];
                        var n = g.da === g.id;
                        m || (n ? h.F = {} : h.M[g.id] = {});
                        h.C && m || em(this, Q.g.sa, e.uc, f);
                        h.C = !0;
                        n ? C(e.uc, h.F) : (C(e.uc, h.M[g.id]), N(70));
                        d = !0;
                        break;
                    case "event":
                        e.lh = {};
                        l(f.s[0], function(r) {
                            return function(t, u) {
                                C(ab(t, u), r.lh)
                            }
                        }(e));
                        em(this, f.s[1], e.lh, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[Q.g.lb] = f.s[0], p[Q.g.wb] = f.s[1], p);
                        em(this, Q.g.Pa, q, f)
                }
                this.h.shift();
                fm(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var fm = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = Zl(a, b.h).s[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.s)
                        if (a.s.hasOwnProperty(e)) {
                            var f = a.s[e];
                            if (f && f.s)
                                for (var g = f.s[b.type] || [], h = 0; h < g.length; h++) g[h]()
                        }
        },
        Vl = new dm;

    function gm(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var hm = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        im = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var jm = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function km() {
        return Pb ? !!Wb && !!Wb.platform : !1
    }

    function lm() {
        return Zb("iPhone") && !Zb("iPod") && !Zb("iPad")
    }

    function mm() {
        lm() || Zb("iPad") || Zb("iPod")
    };
    ac();
    $b() || Zb("Trident") || Zb("MSIE");
    Zb("Edge");
    !Zb("Gecko") || -1 != Vb().toLowerCase().indexOf("webkit") && !Zb("Edge") || Zb("Trident") || Zb("MSIE") || Zb("Edge"); - 1 != Vb().toLowerCase().indexOf("webkit") && !Zb("Edge") && Zb("Mobile");
    km() || Zb("Macintosh");
    km() || Zb("Windows");
    (km() ? "Linux" === Wb.platform : Zb("Linux")) || km() || Zb("CrOS");
    km() || Zb("Android");
    lm();
    Zb("iPad");
    Zb("iPod");
    mm();
    Vb().toLowerCase().indexOf("kaios");
    var nm = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var h = a.charCodeAt(e + f);
                    if (!h || 61 == h || 38 == h || 35 == h) return e
                }
                e += f + 1
            }
            return -1
        },
        om = /#|$/,
        pm = function(a, b) {
            var c = a.search(om),
                d = nm(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        qm = /[?&]($|#)/,
        rm = function(a, b, c) {
            for (var d, e = a.search(om), f = 0, g, h = []; 0 <= (g = nm(a, f, b, e));) h.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            h.push(a.slice(f));
            d = h.join("").replace(qm, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var sm = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        jj(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        tm = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function um(a) {
        if (!a || !G.head) return null;
        var b = vm("META");
        G.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var wm = function(a) {
            if (z.top == z) return 0;
            if (void 0 === a ? 0 : a) {
                var b = z.location.ancestorOrigins;
                if (b) return b[b.length - 1] == z.location.origin ? 1 : 2
            }
            return sm(z.top) ? 1 : 2
        },
        vm = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function xm(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = vm("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = Db(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            jm(e, "load", f);
            jm(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var zm = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            tm(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            ym(c, b)
        },
        ym = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else xm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Am = function() {};
    var Bm = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Cm = function(a, b) {
            b = void 0 === b ? {} : b;
            this.s = a;
            this.h = null;
            this.M = {};
            this.Oa = 0;
            var c;
            this.X = null != (c = b.ln) ? c : 500;
            var d;
            this.F = null != (d = b.Yn) ? d : !1;
            this.C = null
        };
    ta(Cm, Am);
    var Em = function(a) {
        return "function" === typeof a.s.__tcfapi || null != Dm(a)
    };
    Cm.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.F
            },
            d = im(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.X && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.X));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Bm(c), c.internalBlockOnErrors = b.F, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Fm(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Cm.prototype.removeEventListener = function(a) {
        a && a.listenerId && Fm(this, "removeEventListener", null, a.listenerId)
    };
    var Hm = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var m;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Gm(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Gm(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === h ? a.purpose && a.vendor ? Gm(a.purpose.legitimateInterests,
                b) && Gm(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Gm = function(a, b) {
            return !(!a || !a[b])
        },
        Fm = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.s.__tcfapi) {
                var e = a.s.__tcfapi;
                e(b, 2, c, d)
            } else if (Dm(a)) {
                Im(a);
                var f = ++a.Oa;
                a.M[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Dm = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.s, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (h) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (h) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Im = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, jm(a.s, "message", a.C))
        },
        Jm = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Bm(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (zm({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Km = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function Lm() {
        var a = ni.tcf || {};
        return ni.tcf = a
    }
    var Mm = function() {
            return new Cm(z, {
                ln: -1
            })
        },
        Sm = function() {
            var a = Lm(),
                b = Mm();
            Em(b) && !Nm() && !Om() && N(124);
            if (!a.active && Em(b)) {
                Nm() && (a.active = !0, a.Xb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, xj().active = !0, a.tcString = "tcunavailable");
                Yj();
                try {
                    b.addEventListener(function(c) {
                        if (0 !== c.internalErrorState) Pm(a), Zj([Q.g.J, Q.g.Ea, Q.g.N]), xj().active = !0;
                        else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, Om() && (a.active = !0), !Qm(c) || Nm() || Om()) {
                            a.tcfPolicyVersion =
                                c.tcfPolicyVersion;
                            var d;
                            if (!1 === c.gdprApplies) {
                                var e = {},
                                    f;
                                for (f in Km) Km.hasOwnProperty(f) && (e[f] = !0);
                                d = e;
                                b.removeEventListener(c)
                            } else if (Qm(c)) {
                                var g = {},
                                    h;
                                for (h in Km)
                                    if (Km.hasOwnProperty(h))
                                        if ("1" === h) {
                                            var m, n = c,
                                                p = {
                                                    Kl: !0
                                                };
                                            p = void 0 === p ? {} : p;
                                            m = Jm(n) ? !1 === n.gdprApplies ? !0 : "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p.Kl || "string" !== typeof n.tcString || !n.tcString.length ? !p.bo : Hm(n, "1", 0) : !1;
                                            g["1"] = m
                                        } else g[h] = Hm(c, h, Km[h]);
                                d = g
                            }
                            if (d) {
                                a.tcString = c.tcString || "tcempty";
                                a.Xb = d;
                                var q = {},
                                    r = (q[Q.g.J] =
                                        a.Xb["1"] ? "granted" : "denied", q);
                                !0 !== a.gdprApplies ? (Zj([Q.g.J, Q.g.Ea, Q.g.N]), xj().active = !0) : (r[Q.g.Ea] = a.Xb["3"] && a.Xb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? r[Q.g.N] = a.Xb["1"] && a.Xb["7"] ? "granted" : "denied" : Zj([Q.g.N]), Rj(r, {
                                    eventId: 0
                                }, {
                                    gdprApplies: a ? a.gdprApplies : void 0,
                                    tcString: Rm() || ""
                                }))
                            }
                        } else Zj([Q.g.J, Q.g.Ea, Q.g.N])
                    })
                } catch (c) {
                    Pm(a), Zj([Q.g.J, Q.g.Ea, Q.g.N]), xj().active = !0
                }
            }
        };

    function Pm(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Qm(a) {
        return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus
    }
    var Nm = function() {
        return !0 === z.gtag_enable_tcf_support
    };

    function Om() {
        return !0 === Lm().enableAdvertiserConsentMode
    }
    var Rm = function() {
            var a = Lm();
            if (a.active) return a.tcString
        },
        Tm = function() {
            var a = Lm();
            if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0"
        },
        Um = function(a) {
            if (!Km.hasOwnProperty(String(a))) return !0;
            var b = Lm();
            return b.active && b.Xb ? !!b.Xb[String(a)] : !0
        };
    var Vm = [Q.g.J, Q.g.R, Q.g.N, Q.g.Ea],
        Wm = {},
        Xm = (Wm[Q.g.J] = 1, Wm[Q.g.R] = 2, Wm);

    function Ym(a) {
        if (void 0 === a) return 0;
        switch (U(a, Q.g.ja)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var Zm = function(a) {
            var b = Ym(a);
            if (3 === b) return !1;
            switch (Ej(Q.g.Ea)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                    return !1;
                case 4:
                    return 2 === b;
                case 0:
                    return !0;
                default:
                    return !1
            }
        },
        $m = function() {
            return Hj() || !Dj(Q.g.J) || !Dj(Q.g.R)
        },
        an = function() {
            var a = {},
                b;
            for (b in Xm) Xm.hasOwnProperty(b) && (a[Xm[b]] = Ej(b));
            return "G1" + Ke(a[1] || 0) + Ke(a[2] || 0)
        },
        bn = {},
        cn = (bn[Q.g.J] = 0, bn[Q.g.R] = 1, bn[Q.g.N] = 2, bn[Q.g.Ea] = 3, bn);

    function dn(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var pn = function(a) {
            for (var b = "1", c = 0; c < Vm.length; c++) {
                var d = b,
                    e, f = Vm[c],
                    g = tj[f];
                e = void 0 === g ? 0 : cn.hasOwnProperty(g) ? 12 | cn[g] : 8;
                var h = xj();
                h.accessedAny = !0;
                var m = h.entries[f] || {};
                e = e << 2 | dn(m.implicit);
                b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [dn(m.declare) << 4 | dn(m.default) << 2 | dn(m.update)])
            }
            var n = b,
                p;
            p = "" + (Hj() << 2 | Ym(a));
            return n + p
        },
        qn = function() {
            if (!Dj(Q.g.N)) return "-";
            for (var a = Fj(), b = "", c = ha(Object.keys(li)),
                    d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                !1 !== a[e] && (b += li[e])
            }
            return "" === b ? "-" : b
        },
        rn = function() {
            return ej() || (Nm() || Om()) && "1" === Tm() ? "1" : "0"
        },
        sn = function() {
            return (ej() ? !0 : !(!Nm() && !Om()) && "1" === Tm()) || xj().usedSetCps || !Dj(Q.g.N)
        },
        tn = function() {
            var a = "0",
                b = "0",
                c;
            var d = Lm();
            c = d.active ? d.cmpId : void 0;
            "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
            var e =
                "0",
                f;
            var g = Lm();
            f = g.active ? g.tcfPolicyVersion : void 0;
            "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var h = 0;
            ej() && (h |= 1);
            "1" === Tm() && (h |= 2);
            Nm() && (h |= 4);
            var m;
            var n = Lm();
            m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            "1" === m && (h |= 8);
            xj().waitPeriodTimedOut && (h |= 16);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h]
        };
    var un = function() {
        var a = !1;
        return a
    };
    var vn = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        wn = function(a, b) {
            var c = Qf.ctid.split("-")[0].toUpperCase(),
                d = {};
            d.ctid = Qf.ctid;
            d.Um = mi.me;
            d.Wm = mi.Ug;
            d.zm = lk.ie ? 2 : 1;
            d.sc = Qf.Ef;
            d.sc !== a && (d.Tf = a);
            S(70) ? d.Xj = 2 : S(71) && (d.Xj = 1);
            ti ? (d.Rf = vn[c], d.Rf || (d.Rf = 0)) : d.Rf = xi ? 13 : 10;
            vi ? d.Ch = 1 : un() ? d.Ch = 2 : d.Ch = 3;
            var e;
            var f = d.Rf,
                g = d.Ch;
            void 0 === f ? e = "" : (g || (g = 0), e = "" + Eg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | g]);
            var h = d.Xn,
                m = 4 + e + (h ? "" + Eg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h] :
                    ""),
                n, p = d.Wm;
            n = p && Dg.test(p) ? "" + Eg(3, 2) + p : "";
            var q, r = d.Um;
            q = r ? "" + Eg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [r] : "";
            var t;
            var u = d.ctid;
            if (u && b) {
                var v = u.split("-"),
                    w = v[0].toUpperCase();
                if ("GTM" !== w && "OPT" !== w) t = "";
                else {
                    var x = v[1];
                    t = "" + Eg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + x.length] + (d.zm || 0) + x
                }
            } else t = "";
            var y = d.Xj,
                A = d.sc,
                B = d.Tf,
                E = d.eo;
            return m + n + q + t + (y ? "" + Eg(6, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [y] :
                "") + (A ? "" + Eg(7, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [A.length] + A : "") + (B ? "" + Eg(8, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [B.length] + B : "") + (E ? "" + Eg(9, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [E.length] + E : "")
        };
    var xn = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var yn = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Bn = function(a, b, c, d) {
            return zn(d) ? yn(a, String(b || An()), c) : []
        },
        En = function(a, b, c, d, e) {
            if (zn(e)) {
                var f = Cn(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Dn(f, function(g) {
                        return g.Gf
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Dn(f, function(g) {
                        return g.Ne
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Fn(a, b, c, d) {
        var e = An(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        var g = An();
        return e != g || void 0 != c && 0 <= Bn(b, g, !1, d).indexOf(c)
    }
    var Jn = function(a, b, c, d) {
            function e(w, x, y) {
                if (null == y) return delete h[x], w;
                h[x] = y;
                return w + "; " + x + "=" + y
            }

            function f(w, x) {
                if (null == x) return delete h[x], w;
                h[x] = !0;
                return w + "; " + x
            }
            if (!zn(c.Gb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Gn(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var m;
            c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
            g = e(g, "expires", m);
            g = e(g, "max-age", c.Dm);
            g = e(g, "samesite",
                c.Xm);
            c.Zm && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = Hn(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                    var u = "none" !== p[t] ? p[t] : void 0,
                        v = e(g, "domain", u);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (w) {
                        q = w;
                        continue
                    }
                    r = !0;
                    if (!In(u, c.path) && Fn(v, a, b, c.Gb)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return In(n, c.path) ? 1 : Fn(g, a, b, c.Gb) ? 0 : 1
        },
        Kn = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Jn(a,
                b, c)
        };

    function Dn(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                m = b(h);
            m === c ? d.push(h) : void 0 === f || m < f ? (e = [h], f = m) : m === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function Cn(a, b, c) {
        for (var d = [], e = Bn(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Gf: 1 * m[0] || 1,
                    Ne: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Gn = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Ln = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Mn = /(^|\.)doubleclick\.net$/i,
        In = function(a, b) {
            return Mn.test(window.document.location.hostname) || "/" === b && Ln.test(a)
        },
        An = function() {
            return "null" !== window.origin ? window.document.cookie : ""
        },
        Hn = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Mn.test(e) || Ln.test(e) || a.push("none");
            return a
        },
        zn = function(a) {
            return a && lj().h() ? (k(a) ? [a] : a).every(function(b) {
                return Gj(b) && Dj(b)
            }) : !0
        },
        Nn = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        On = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    var Pn = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ xn(a) & 2147483647) : String(b)
        },
        Qn = function(a) {
            return [Pn(a), Math.round(Ua() / 1E3)].join(".")
        },
        Rn = function(a, b, c, d, e) {
            var f = Nn(b);
            return En(a, f, On(c), d, e)
        },
        Sn = function(a, b, c, d) {
            var e = "" + Nn(c),
                f = On(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        };

    function Tn(a, b, c, d) {
        var e, f = Number(null != a.Ac ? a.Ac : void 0);
        0 !== f && (e = new Date((b || Ua()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Gb: d
        }
    };
    var Un;
    var Yn = function() {
            var a = Vn,
                b = Wn,
                c = Xn(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Nc(G, "mousedown", d);
                Nc(G, "keyup", d);
                Nc(G, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Zn = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Xn().decorators.push(f)
        },
        $n = function(a, b, c) {
            for (var d = Xn().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== G.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Xa(e, g.callback())
                }
            }
            return e
        };

    function Xn() {
        var a = Ec("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var ao = /(.*?)\*(.*?)\*(.*)/,
        bo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        co = /^(?:www\.|m\.|amp\.)+/,
        eo = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function fo(a) {
        var b = eo.exec(a);
        if (b) return {
            Ih: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function go(a, b) {
        var c = [Cc.userAgent, (new Date).getTimezoneOffset(), Cc.userLanguage || Cc.language, Math.floor(Ua() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Un)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Un = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Un[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function ho() {
        return function(a) {
            var b = rl(z.location.href),
                c = b.search.replace("?", ""),
                d = jl(c, "_gl", !1, !0) || "";
            a.query = io(d) || {};
            var e = ml(b, "fragment"),
                f;
            var g = -1;
            if (Za(e, "_gl=")) g = 4;
            else {
                var h = e.indexOf("&_gl=");
                0 < h && (g = h + 3 + 2)
            }
            if (0 > g) f = void 0;
            else {
                var m = e.indexOf("&", g);
                f = 0 > m ? e.substring(g) : e.substring(g, m)
            }
            a.fragment = io(f || "") || {}
        }
    }
    var jo = function(a) {
            var b = ho(),
                c = Xn();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Xa(d, e.query), a && Xa(d, e.fragment));
            return d
        },
        io = function(a) {
            try {
                var b = ko(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = yb(d[e + 1]);
                        c[f] = g
                    }
                    Ab("TAGGING", 6);
                    return c
                }
            } catch (h) {
                Ab("TAGGING", 8)
            }
        };

    function ko(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = ao.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === go(h, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return h;
                Ab("TAGGING", 7)
            }
        }
    }

    function lo(a, b, c, d, e) {
        function f(p) {
            var q = p,
                r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
                t = q;
            if (r) {
                var u = r[2],
                    v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var g = fo(c);
        if (!g) return "";
        var h = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? 0 !== m.substring(1).length && e || (m = "#" + f(m.substring(1))) : h = "?" + f(h.substring(1));
        return "" + g.Ih + h + m
    }

    function mo(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, v = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        void 0 !== x && x === x && null !== x && "[object Object]" !== x.toString() && (v.push(w), v.push(xb(String(x))))
                    }
                var y = v.join("*");
                u = ["1", go(y), y].join("*");
                d ? (Pf(13) || Pf(11) || !p) && no("_gl", u, a, p, q) : oo("_gl", u, a, p, q)
            }
        }
        var d = "FORM" === (a.tagName || "").toUpperCase(),
            e = $n(b, 1, d),
            f = $n(b, 2, d),
            g = $n(b, 4, d),
            h = $n(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        Pf(11) && c(g, !0, !0);
        for (var m in h) h.hasOwnProperty(m) && po(m, h[m], a)
    }

    function po(a, b, c) {
        "a" === c.tagName.toLowerCase() ? oo(a, b, c) : "form" === c.tagName.toLowerCase() && no(a, b, c)
    }

    function oo(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !Pf(16) || d)) {
                var h = z.location.href,
                    m = fo(c.href),
                    n = fo(h);
                g = !(m && n && m.Ih === n.Ih && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = lo(a, b, c.href, d, e);
            sc.test(p) && (c.href = p)
        }
    }

    function no(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if ("get" !== f || d) {
                if ("get" === f || "post" === f) {
                    var g = lo(a, b, c.action, d, e);
                    sc.test(g) && (c.action = g)
                }
            } else {
                for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
                    var p = h[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = G.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Vn(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || mo(e, e.hostname)
            }
        } catch (g) {}
    }

    function Wn(a) {
        try {
            if (a.action) {
                var b = ml(rl(a.action), "host");
                mo(a, b)
            }
        } catch (c) {}
    }
    var qo = function(a, b, c, d) {
            Yn();
            Zn(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        ro = function(a, b) {
            Yn();
            Zn(a, [ll(z.location, "host", !0)], b, !0, !0)
        },
        so = function() {
            var a = G.location.hostname,
                b = bo.exec(G.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(co, ""),
                m = e.replace(co, ""),
                n;
            if (!(n = h === m)) {
                var p = "." + m;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        to = function(a, b) {
            return !1 === a ? !1 : a || b || so()
        };
    var uo = ["1"],
        vo = {},
        wo = {},
        Bo = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = xo(a.prefix);
            if (!vo[c])
                if (yo(c, a.path, a.domain)) {
                    var d = wo[xo(a.prefix)];
                    zo(a, d ? d.id : void 0, d ? d.Bh : void 0)
                } else {
                    var e = tl("auiddc");
                    if (e) Ab("TAGGING", 17), vo[c] = e;
                    else if (b) {
                        var f = xo(a.prefix),
                            g = Qn();
                        if (0 === Ao(f, g, a)) {
                            var h = Ec("google_tag_data", {});
                            h._gcl_au || (h._gcl_au = g)
                        }
                        yo(c, a.path, a.domain)
                    }
                }
        };

    function zo(a, b, c) {
        var d = xo(a.prefix),
            e = vo[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Ua() / 1E3)));
                    Ao(d, h, a, 1E3 * g)
                }
            }
        }
    }

    function Ao(a, b, c, d) {
        var e = Sn(b, "1", c.domain, c.path),
            f = Tn(c, d);
        f.Gb = Co();
        return Kn(a, e, f)
    }

    function yo(a, b, c) {
        var d = Rn(a, b, c, uo, Co());
        if (!d) return !1;
        Do(a, d);
        return !0
    }

    function Do(a, b) {
        var c = b.split(".");
        5 === c.length ? (vo[a] = c.slice(0, 2).join("."), wo[a] = {
            id: c.slice(2, 4).join("."),
            Bh: Number(c[4]) || 0
        }) : 3 === c.length ? wo[a] = {
            id: c.slice(0, 2).join("."),
            Bh: Number(c[2]) || 0
        } : vo[a] = b
    }

    function xo(a) {
        return (a || "_gcl") + "_au"
    }

    function Eo(a) {
        function b() {
            Dj(c) && a()
        }
        var c = Co();
        Kj(function() {
            b();
            Dj(c) || Lj(b, c)
        }, c)
    }

    function Fo(a) {
        var b = jo(!0),
            c = xo(a.prefix);
        Eo(function() {
            var d = b[c];
            if (d) {
                Do(c, d);
                var e = 1E3 * Number(vo[c].split(".")[1]);
                if (e) {
                    Ab("TAGGING", 16);
                    var f = Tn(a, e);
                    f.Gb = Co();
                    var g = Sn(d, "1", a.domain, a.path);
                    Kn(c, g, f)
                }
            }
        })
    }

    function Go(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                h = Rn(a, e.path, e.domain, uo, Co());
            h && (g[a] = h);
            return g
        };
        Eo(function() {
            qo(f, b, c, d)
        })
    }

    function Co() {
        return Pf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    };
    var Ho = function(a) {
        for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Wh: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function Io(a, b) {
        var c = Ho(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Wh] || (d[c[e].Wh] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    aa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Wh].push(g)
            }
        }
        return d
    };
    var Jo = /^\w+$/,
        Ko = /^[\w-]+$/,
        Lo = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function Mo() {
        return Pf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    var No = function(a) {
            return !lj().h() || Dj(a)
        },
        Oo = function(a) {
            function b() {
                var d = No(c);
                d && a();
                return d
            }
            var c = Mo();
            Kj(function() {
                b() || Lj(b, c)
            }, c)
        },
        Qo = function(a) {
            return Po(a).map(function(b) {
                return b.aa
            })
        },
        Po = function(a) {
            var b = [],
                c = Bn(a, G.cookie, void 0, Mo());
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    aa: void 0
                }, e++) {
                var f = Ro(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.aa = g.aa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = Ja(b, function(q) {
                            return function(r) {
                                return r.aa === q.aa
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp,
                        m), p.labels = So(p.labels, n || [])) : b.push({
                        version: h,
                        aa: d.aa,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return To(b)
        };

    function So(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Uo(a) {
        return a && "string" == typeof a && a.match(Jo) ? a : "_gcl"
    }
    var Wo = function() {
            var a = rl(z.location.href),
                b = ml(a, "query", !1, void 0, "gclid"),
                c = ml(a, "query", !1, void 0, "gclsrc"),
                d = ml(a, "query", !1, void 0, "wbraid"),
                e = ml(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || jl(f, "gclid", !1);
                c = c || jl(f, "gclsrc", !1);
                d = d || jl(f, "wbraid", !1)
            }
            return Vo(b, c, e, d)
        },
        Vo = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Ko.test(d) && (e.wbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Ko)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Yo = function(a) {
            var b = Wo();
            Oo(function() {
                Xo(b, !1, a)
            })
        };

    function Xo(a, b, c, d, e) {
        function f(w, x) {
            var y = Zo(w, g);
            y && (Kn(y, x, h), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = Uo(c.prefix);
        d = d || Ua();
        var h = Tn(c, d, !0);
        h.Gb = Mo();
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = Zo("gb", g),
                t = !1;
            if (!b)
                for (var u = Po(r), v = 0; v < u.length; v++) u[v].aa === q && u[v].labels && 0 < u[v].labels.length &&
                    (t = !0);
            t || f("gb", p(q))
        }
    }
    var ap = function(a, b) {
            var c = jo(!0);
            Oo(function() {
                for (var d = Uo(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Lo[f]) {
                        var g = Zo(f, d),
                            h = c[g];
                        if (h) {
                            var m = Math.min($o(h), Ua()),
                                n;
                            b: {
                                for (var p = m, q = Bn(g, G.cookie, void 0, Mo()), r = 0; r < q.length; ++r)
                                    if ($o(q[r]) > p) {
                                        n = !0;
                                        break b
                                    }
                                n = !1
                            }
                            if (!n) {
                                var t = Tn(b, m, !0);
                                t.Gb = Mo();
                                Kn(g, h, t)
                            }
                        }
                    }
                }
                Xo(Vo(c.gclid, c.gclsrc), !1, b)
            })
        },
        Zo = function(a, b) {
            var c = Lo[a];
            if (void 0 !== c) return b + c
        },
        $o = function(a) {
            return 0 !== bp(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
        };

    function Ro(a) {
        var b = bp(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            aa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function bp(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Ko.test(a[2]) ? [] : a
    }
    var cp = function(a, b, c, d, e) {
            if (Ia(b) && "null" !== z.origin) {
                var f = Uo(e),
                    g = function() {
                        for (var h = {}, m = 0; m < a.length; ++m) {
                            var n = Zo(a[m], f);
                            if (n) {
                                var p = Bn(n, G.cookie, void 0, Mo());
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                Oo(function() {
                    qo(g, b, c, d)
                })
            }
        },
        To = function(a) {
            return a.filter(function(b) {
                return Ko.test(b.aa)
            })
        },
        dp = function(a, b) {
            if ("null" !== z.origin) {
                for (var c = Uo(b.prefix), d = {}, e = 0; e < a.length; e++) Lo[a[e]] && (d[a[e]] = Lo[a[e]]);
                Oo(function() {
                    l(d, function(f, g) {
                        var h = Bn(c + g, G.cookie, void 0, Mo());
                        h.sort(function(t,
                            u) {
                            return $o(u) - $o(t)
                        });
                        if (h.length) {
                            var m = h[0],
                                n = $o(m),
                                p = 0 !== bp(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== bp(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Xo(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function ep(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var fp = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Hj()) {
                var c = Wo();
                if (ep(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.wbraid);
                    ro(function() {
                        return d
                    }, 3);
                    ro(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        gp = function(a) {
            if (!Pf(11)) return null;
            var b = jo(!0).gad_source;
            if (null != b) return z.location.hash = "", b;
            if (Pf(12)) {
                var c = rl(z.location.href);
                b = ml(c, "query", !1, void 0, "gad_source");
                if (null != b) return b;
                var d = Wo();
                if (ep(d, a)) return "0"
            }
            return null
        },
        hp = function(a) {
            var b =
                gp(a);
            null != b && ro(function() {
                var c = {};
                return c.gad_source = b, c
            }, 4)
        },
        ip = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!No(Mo())) return e;
            var f = Po(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var h = f[0],
                    m = f[0].timestamp,
                    n = [h.version, Math.round(m / 1E3), h.aa].concat(h.labels || [], [b]).join("."),
                    p = Tn(c, m, !0);
                p.Gb = Mo();
                Kn(a, n, p)
            }
            return e
        };

    function jp(a, b) {
        var c = Uo(b),
            d = Zo(a, c);
        if (!d) return 0;
        for (var e = Po(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function kp(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var lp = function(a) {
        var b = Math.max(jp("aw", a), kp(No(Mo()) ? Io() : {}));
        return Math.max(jp("gb", a), kp(No(Mo()) ? Io("_gac_gb", !0) : {})) > b
    };
    var Bp, Cp = !1;

    function Dp() {
        Cp = !0;
        Bp = Bp || {}
    }
    var Ep = function(a) {
        Cp || Dp();
        return Bp[a]
    };
    var Fp = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.o = c;
        this.h = {};
        this.metadata = C(c.eventMetadata || {});
        this.isAborted = !1
    };
    Fp.prototype.copyToHitData = function(a, b, c) {
        var d = U(this.o, a);
        void 0 === d && (d = b);
        if (void 0 !== d && void 0 !== c && k(d) && S(50)) try {
            d = c(d)
        } catch (e) {}
        void 0 !== d && (this.h[a] = d)
    };
    var Gp = function(a) {
            return a.metadata.source_canonical_id
        },
        Hp = function(a, b, c) {
            var d = Ep(a.target.da);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };
    var Ip = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Jp = /^www.googleadservices.com$/,
        Lp = function(a) {
            a || (a = Kp());
            return a.qn ? !1 : a.Zl || a.am || a.bm || a.rh || a.If || a.Jl || a.Rl ? !0 : !1
        },
        Kp = function() {
            var a = {},
                b = jo(!0);
            a.qn = !!b._up;
            var c = Wo();
            a.Zl = void 0 !== c.aw;
            a.am = void 0 !== c.dc;
            a.bm = void 0 !== c.wbraid;
            var d = rl(z.location.href),
                e = ml(d, "query", !1, void 0, "gad");
            a.rh = void 0 !== e;
            if (!a.rh) {
                var f = d.hash.replace("#", ""),
                    g = jl(f, "gad", !1);
                a.rh = void 0 !== g
            }
            a.If = void 0;
            if (S(57)) {
                var h = ml(d, "query", !1, void 0, "gad_source");
                a.If =
                    h;
                if (void 0 === a.If) {
                    var m = d.hash.replace("#", ""),
                        n = jl(m, "gad_source", !1);
                    a.If = n
                }
            }
            var p = G.referrer ? ml(rl(G.referrer), "host") : "";
            a.Rl = Ip.test(p);
            a.Jl = Jp.test(p);
            return a
        };
    var Mp = function() {
        if (Ga(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };

    function Rp(a) {
        var b = U(a.o, Q.g.yb),
            c = U(a.o, Q.g.Lb);
        b && !c ? (a.eventName !== Q.g.sa && a.eventName !== Q.g.yd && N(131), a.isAborted = !0) : !b && c && (N(132), a.isAborted = !0)
    }

    function Sp(a) {
        var b = Uj(Q.g.J) ? ni.pscdl : "denied";
        a.h[Q.g.af] = b
    };
    var Wp = function() {
        ni.dedupe_gclid || (ni.dedupe_gclid = "" + Qn());
        return ni.dedupe_gclid
    };
    var bq = function(a, b, c, d) {
        var e = Kc(),
            f;
        if (1 === e) a: {
            var g = zi;g = g.toLowerCase();
            for (var h = "https://" + g, m = "http://" + g, n = 1, p = G.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(h) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };

    function nq(a) {
        return {
            getDestinationId: function() {
                return a.target.da
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return U(a.o, b)
            },
            Ej: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };

    function uq(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return rl("" + c + b).href
        }
    }

    function vq() {
        return Gi.s || vi
    }

    function wq() {
        return !!mi.zf && "SGTM_TOKEN" !== mi.zf.split("@@").join("")
    }

    function xq(a) {
        for (var b = ha([Q.g.Sd, Q.g.Pb]), c = b.next(); !c.done; c = b.next()) {
            var d = U(a, c.value);
            if (d) return d
        }
    };
    var zq = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Aq = function(a) {
            if (G.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var h = g.indexOf("opacity(");
                    0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var zr = {
        il: Number('') || 500,
        Nk: Number('') || 5E3,
        cj: Number('') || 10,
        uk: Number('') || 5E3
    };

    function Ar(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var Br = function(a, b) {
        var c;
        return c
    };
    var Cr = "https://" + mi.xd,
        Dr = Cr + "/gtm/static/",
        Er = Number('') || 5,
        Fr = Number('') || 50,
        Gr = Cr,
        Hr = Dr,
        Ir = !1,
        Jr = 0,
        Kr = Ka();

    function Tr() {
        var a = !1;
        return a
    }

    function Ur(a) {}

    function Wr(a, b, c) {}

    function Pr(a, b, c, d) {}

    function Vr(a, b, c, d, e) {}

    function Xr(a, b, c, d) {}

    function Yr(a, b, c, d) {}

    function Zr(a) {
        var b = {},
            c = ["tv.1"],
            d = 0;
        var u = c.join("~");
        return {
            U: b,
            Nf: u
        }
    }
    var $r = void 0;

    function as(a) {
        var b = [];
        return b
    };
    var bs = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    bc();
    lm() || Zb("iPod");
    Zb("iPad");
    !Zb("Android") || cc() || bc() || ac() || Zb("Silk");
    cc();
    !Zb("Safari") || cc() || ($b() ? 0 : Zb("Coast")) || ac() || ($b() ? 0 : Zb("Edge")) || ($b() ? Yb("Microsoft Edge") : Zb("Edg/")) || ($b() ? Yb("Opera") : Zb("OPR")) || bc() || Zb("Silk") || Zb("Android") || mm();
    var cs = {},
        ds = null,
        es = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!ds) {
                ds = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(h[m].split(""));
                    cs[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === ds[q] && (ds[q] = p)
                    }
                }
            }
            for (var r = cs[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    E = r[(x & 3) << 4 | y >> 4],
                    F = r[(y & 15) << 2 | A >> 6],
                    D = r[A & 63];
                t[w++] = "" + B + E + F + D
            }
            var M = 0,
                O = u;
            switch (b.length - v) {
                case 2:
                    M = b[v + 1], O = r[(M & 15) << 2] || u;
                case 1:
                    var P = b[v];
                    t[w] = "" + r[P >> 2] + r[(P & 3) << 4 | M >> 4] + O + u
            }
            return t.join("")
        };
    Object.freeze(new function() {});
    Object.freeze(new function() {});
    var fs = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function gs(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function hs() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function is() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function js(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function ks() {
        var a = z;
        if (!js(a)) return null;
        var b = gs(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(fs).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };

    function qs() {
        return "attribution-reporting"
    }

    function rs(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var ss = !1;

    function ts() {
        if (rs("join-ad-interest-group") && Ga(Cc.joinAdInterestGroup)) return !0;
        ss || (um('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), ss = !0);
        return rs("join-ad-interest-group") && Ga(Cc.joinAdInterestGroup)
    }

    function us(a, b) {
        var c = void 0;
        try {
            c = G.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ua() - d) {
                Ab("TAGGING", 9);
                return
            }
            try {
                c.parentNode.removeChild(c)
            } catch (e) {}
            c = void 0
        } else try {
            if (50 <= G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Ab("TAGGING", 10);
                return
            }
        } catch (e) {}
        Lc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ua()
        }, c)
    }

    function vs() {
        return "https://td.doubleclick.net"
    };
    var ws = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        xs = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        ys = /^\d+\.fls\.doubleclick\.net$/,
        zs = /;gac=([^;?]+)/,
        As = /;gacgb=([^;?]+)/,
        Bs = /;gclaw=([^;?]+)/,
        Cs = /;gclgb=([^;?]+)/;

    function Ds(a, b) {
        if (ys.test(G.location.host)) {
            var c = G.location.href.match(b);
            return c && 2 == c.length && c[1].match(ws) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].aa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Es = function(a, b, c) {
        var d = No(Mo()) ? Io("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var h = ip("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            Il: f ? e.join(";") : "",
            Hl: Ds(d, As)
        }
    };

    function Fs(a, b, c) {
        if (ys.test(G.location.host)) {
            var d = G.location.href.match(c);
            if (d && 2 == d.length && d[1].match(xs)) return [{
                aa: d[1]
            }]
        } else return Po((a || "_gcl") + b);
        return []
    }
    var Gs = function(a) {
            return Fs(a, "_aw", Bs).map(function(b) {
                return b.aa
            }).join(".")
        },
        Hs = function(a) {
            return Fs(a, "_gb", Cs).map(function(b) {
                return b.aa
            }).join(".")
        },
        Is = function(a, b) {
            var c = ip((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var wt = {
        H: {
            Zh: "ads_conversion_hit",
            wd: "container_execute_start",
            di: "container_setup_end",
            Yf: "container_setup_start",
            ai: "container_blocking_end",
            bi: "container_execute_end",
            ei: "container_yield_end",
            Zf: "container_yield_start",
            Vi: "event_execute_end",
            Ui: "event_evaluation_end",
            Qg: "event_evaluation_start",
            Wi: "event_setup_end",
            he: "event_setup_start",
            Xi: "ga4_conversion_hit",
            je: "page_load",
            On: "pageview",
            Ub: "snippet_load",
            mj: "tag_callback_error",
            nj: "tag_callback_failure",
            oj: "tag_callback_success",
            pj: "tag_execute_end",
            hd: "tag_execute_start"
        }
    };

    function xt() {
        function a(c, d) {
            var e = Cb(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var zt = !1;
    var gu = function(a, b) {},
        hu = function(a, b) {},
        iu = function(a, b) {},
        ju = function(a, b) {},
        ku = function() {
            var a = {};
            return a
        },
        Zt = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        lu = function() {},
        mu = function(a, b) {},
        nu = function(a, b, c) {},
        ou = function() {};
    var pu = function(a, b) {
        var c = z,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var qu = function(a, b, c) {
        var d = pm(a, "fmt");
        if (b) {
            var e = pm(a, "random"),
                f = pm(a, "label") || "";
            if (!e) return !1;
            var g = es(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!pu(g, b)) return !1
        }
        d && 4 != d && (a = rm(a, "rfmt", d));
        var h = rm(a, "fmt", 4);
        Jc(h, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, G.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Iu = function() {
            this.h = {}
        },
        Ju = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Ku = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Mu = function(a, b, c, d) {};

    function Ou(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var Su = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            if (Pu()) Qu().addRestriction(0, a, b, c);
            else {
                var d = Ru(a);
                d.entity.push(b);
                d._entity || (d._entity = {
                    internal: [],
                    external: []
                });
                c ? d._entity.external.push(b) : d._entity.internal.push(b)
            }
        },
        Tu = function() {
            var a = uk();
            if (Pu()) return Qu().getRestrictions(0, a);
            var b = Ru(a);
            if (S(91)) {
                var c, d;
                return [].concat(ja((null == b ? void 0 : null == (c = b._entity) ? void 0 : c.internal) || []), ja((null == b ? void 0 : null == (d = b._entity) ? void 0 : d.external) || []))
            }
            return b.entity
        },
        Uu = function(a, b, c) {
            c = void 0 ===
                c ? !1 : c;
            if (Pu()) Qu().addRestriction(1, a, b, c);
            else {
                var d = Ru(a);
                d.event && (d.event.push(b), d._event || (d._event = {
                    internal: [],
                    external: []
                }), c ? d._event.external.push(b) : d._event.internal.push(b))
            }
        },
        Vu = function() {
            var a = uk();
            if (Pu()) return Qu().getRestrictions(1, a);
            var b = Ru(a);
            if (S(91)) {
                var c, d;
                return [].concat(ja((null == b ? void 0 : null == (c = b._event) ? void 0 : c.internal) || []), ja((null == b ? void 0 : null == (d = b._event) ? void 0 : d.external) || []))
            }
            return b.event || []
        };

    function Ru(a) {
        var b = Qu(),
            c = b.container[a];
        c || (c = {
            entity: [],
            event: [],
            _entity: {
                internal: [],
                external: []
            },
            _event: {
                internal: [],
                external: []
            }
        }, b.container[a] = c);
        return c
    }
    var Wu = function() {
            this.container = {};
            this.h = {}
        },
        Xu = function(a, b) {
            var c = a.container[b];
            c || (c = {
                entity: [],
                event: [],
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.container[b] = c);
            return c
        };
    Wu.prototype.addRestriction = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (!d || !this.h[b]) {
            var e = Xu(this, b);
            0 === a ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : 1 === a && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    Wu.prototype.getRestrictions = function(a, b) {
        var c = Xu(this, b);
        if (0 === a) {
            var d, e;
            return [].concat(ja((null == c ? void 0 : null == (d = c._entity) ? void 0 : d.internal) || []), ja((null == c ? void 0 : null == (e = c._entity) ? void 0 : e.external) || []))
        }
        if (1 === a) {
            var f, g;
            return [].concat(ja((null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) || []), ja((null == c ? void 0 : null == (g = c._event) ? void 0 : g.external) || []))
        }
        return []
    };
    Wu.prototype.getExternalRestrictions = function(a, b) {
        var c = Xu(this, b),
            d, e;
        return 0 === a ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) || [] : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) || []
    };
    Wu.prototype.removeExternalRestrictions = function(a) {
        var b = Xu(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.h[a] = !0
    };

    function Qu() {
        var a = ni.r;
        a || (a = new Wu, ni.r = a);
        return a
    }

    function Pu() {
        return S(91) && S(105)
    };
    var Yu = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Zu = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        $u = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        av = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        dv = function(a) {
            var b = Mi("gtm.allowlist") || Mi("gtm.whitelist");
            b && N(9);
            ti && (b = ["google", "gtagfl",
                "lcl", "zone"
            ]);
            bv() && (ti ? N(116) : (N(117), cv && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
            var c = b && Ya(Qa(b), Zu),
                d = Mi("gtm.blocklist") || Mi("gtm.blacklist");
            d || (d = Mi("tagTypeBlacklist")) && N(3);
            d ? N(8) : d = [];
            bv() && (d = Qa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Qa(d).indexOf("google") && N(2);
            var e = d && Ya(Qa(d), $u),
                f = {};
            return function(g) {
                var h = g && g[Le.ka];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var m = Di[h] || [],
                    n = a(h, m);
                if (!S(88))
                    for (var p = Tu(), q = 0; q < p.length; q++) try {
                        n = n && p[q](h, m)
                    } catch (y) {
                        n = !1
                    }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(h))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        N(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(h);
                    if (v) u = v;
                    else {
                        var w = Ma(e, m || []);
                        w && N(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ma(e, av));
                return f[h] = x
            }
        },
        cv = !1;
    cv = !0;
    var bv = function() {
            return Yu.test(z.location && z.location.hostname)
        },
        ev = function() {
            if (mk) {
                var a = function(b) {
                    var c = uf(b),
                        d;
                    if (zf(c)) {
                        var e = c[Le.ka];
                        if (!e) throw "Error: No function name given for function call.";
                        var f = nf[e];
                        d = !!f && !!f.runInSiloedMode
                    } else d = !!Ou(c[Le.ka], 4);
                    return d
                };
                S(88) ? Su(uk(), function(b) {
                    return a(b.entityId)
                }) : Su(uk(), a)
            }
        };
    var gv = function(a, b, c, d, e) {
            if (!fv() && !Ak(a)) {
                var f = "?id=" + encodeURIComponent(a) + "&l=" + mi.fa,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                S(38) && (f += "&gtm=" + wn());
                var h = wq();
                h && (f += "&sign=" + mi.zf);
                var m = c ? "/gtag/js" : "/gtm.js",
                    n = vq() ? uq(b, m + f) : void 0;
                if (!n) {
                    var p = mi.xd + m;
                    h && Dc && g && (p = Dc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    n = bq("https://", "http://", p + f)
                }
                var q = a;
                d.siloed && (Dk({
                    ctid: q,
                    isDestination: !1
                }), q = ok(q));
                var r = q,
                    t = Ck();
                ik().container[r] = {
                    state: 1,
                    context: d,
                    parent: t
                };
                jk({
                        ctid: r,
                        isDestination: !1
                    },
                    e);
                Jc(n)
            }
        },
        hv = function(a, b, c, d) {
            if (!fv() && !Bk(a))
                if (Ek()) ik().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Ck()
                }, jk({
                    ctid: a,
                    isDestination: !0
                }, d), N(91);
                else {
                    var e = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + mi.fa + "&cx=c";
                    S(38) && (e += "&gtm=" + wn());
                    wq() && (e += "&sign=" + mi.zf);
                    var f = vq() ? uq(b, e) : void 0;
                    f || (f = bq("https://", "http://", mi.xd + e));
                    var g = a;
                    c.siloed && (Dk({
                        ctid: g,
                        isDestination: !0
                    }), g = ok(g));
                    ik().destination[g] = {
                        state: 1,
                        context: c,
                        parent: Ck()
                    };
                    jk({
                        ctid: g,
                        isDestination: !0
                    }, d);
                    Jc(f)
                }
        };

    function fv() {
        if (un()) {
            return !0
        }
        return !1
    };
    var iv = !1,
        jv = 0,
        kv = [];

    function lv(a) {
        if (!iv) {
            var b = G.createEventObject,
                c = "complete" == G.readyState,
                d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                iv = !0;
                for (var e = 0; e < kv.length; e++) H(kv[e])
            }
            kv.push = function() {
                for (var f = 0; f < arguments.length; f++) H(arguments[f]);
                return 0
            }
        }
    }

    function mv() {
        if (!iv && 140 > jv) {
            jv++;
            try {
                G.documentElement.doScroll("left"), lv()
            } catch (a) {
                z.setTimeout(mv, 50)
            }
        }
    }
    var nv = function(a) {
        iv ? a() : kv.push(a)
    };
    var pv = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: tk()
        }
    };
    var rv = function(a, b) {
            this.h = !1;
            this.F = [];
            this.M = {
                tags: []
            };
            this.X = !1;
            this.s = this.C = 0;
            qv(this, a, b)
        },
        sv = function(a, b, c, d) {
            if (qi.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            nb(d) && (e = C(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        tv = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        uv = function(a) {
            if (!a.h) {
                for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.F.length = 0
            }
        },
        qv = function(a, b, c) {
            void 0 !== b && a.Bf(b);
            c && z.setTimeout(function() {
                return uv(a)
            }, Number(c))
        };
    rv.prototype.Bf = function(a) {
        var b = this,
            c = Wa(function() {
                return H(function() {
                    a(tk(), b.M)
                })
            });
        this.h ? c() : this.F.push(c)
    };
    var vv = function(a) {
            a.C++;
            return Wa(function() {
                a.s++;
                a.X && a.s >= a.C && uv(a)
            })
        },
        wv = function(a) {
            a.X = !0;
            a.s >= a.C && uv(a)
        };
    var xv = {},
        zv = function() {
            return z[yv()]
        },
        Av = !1;

    function yv() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var Dv = function(a) {},
        Ev = function(a, b) {
            return function() {
                var c = zv(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Jv = ["es", "1"],
        Kv = {},
        Lv = {};

    function Mv(a, b) {
        if (Ok) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Kv[a] = [
                ["e", c],
                ["eid", a]
            ];
            Zk(a)
        }
    }

    function Nv(a) {
        var b = a.eventId,
            c = a.Hc;
        if (!Kv[b]) return [];
        var d = [];
        Lv[b] || d.push(Jv);
        d.push.apply(d, ja(Kv[b]));
        c && (Lv[b] = !0);
        return d
    };
    var Ov = {};

    function Pv(a, b) {
        Ok && (Ov[a] = Ov[a] || {}, Ov[a][b] = (Ov[a][b] || 0) + 1)
    }

    function Qv(a) {
        var b = a.eventId,
            c = a.Hc,
            d = Ov[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Ov[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    };
    var Rv = {},
        Sv = {};

    function Tv(a, b, c) {
        if (Ok && b) {
            var d = gk(b);
            Rv[a] = Rv[a] || [];
            Rv[a].push(c + d);
            var e = (zf(b) ? "1" : "2") + d;
            Sv[a] = Sv[a] || [];
            Sv[a].push(e);
            Zk(a)
        }
    }

    function Uv(a) {
        var b = a.eventId,
            c = a.Hc,
            d = [],
            e = Rv[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = Sv[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete Rv[b], delete Sv[b]);
        return d
    };

    function Vv(a, b, c, d) {
        var e = lf[a],
            f = Wv(a, b, c, d);
        if (!f) return null;
        var g = wf(e[Le.lj], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Vv(h.index, {
                onSuccess: f,
                onFailure: 1 === h.Bj ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Wv(a, b, c, d) {
        function e() {
            if (f[Le.Sk]) h();
            else {
                var w = xf(f, c, []),
                    x = w[Le.kk];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!Uj(x[y])) {
                            h();
                            return
                        }
                var A = sv(c.Vb, String(f[Le.ka]), Number(f[Le.oe]), w[Le.Tk]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var D = Ua() - F;
                        Tv(c.id, lf[a], "5");
                        tv(c.Vb, A, "success", D);
                        S(16) && nu(c, f, wt.H.oj);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var D = Ua() - F;
                        Tv(c.id, lf[a], "6");
                        tv(c.Vb, A, "failure", D);
                        S(16) && nu(c, f, wt.H.nj);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Tv(c.id, f, "1");
                var E = function() {
                    $i(3);
                    var D = Ua() - F;
                    Tv(c.id, f, "7");
                    tv(c.Vb, A, "exception", D);
                    S(16) && nu(c, f, wt.H.mj);
                    B || (B = !0, h())
                };
                S(16) && mu(c, f);
                var F = Ua();
                try {
                    vf(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    E(D)
                }
                S(16) && nu(c, f, wt.H.pj)
            }
        }
        var f = lf[a],
            g = b.onSuccess,
            h = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = wf(f[Le.qj], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Vv(p.index, {
                    onSuccess: g,
                    onFailure: h,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 ===
                p.Bj ? m : q
        }
        if (f[Le.fj] || f[Le.Vk]) {
            var r = f[Le.fj] ? mf : c.hn,
                t = g,
                u = h;
            if (!r[a]) {
                e = Wa(e);
                var v = Xv(a, r, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function Xv(a, b, c) {
        var d = [],
            e = [];
        b[a] = Yv(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Zv;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = $v;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Yv(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Zv(a) {
        a()
    }

    function $v(a, b) {
        b()
    };
    var bw = function(a, b) {
            return 1 === arguments.length ? aw("set", a) : aw("set", a, b)
        },
        cw = function(a, b) {
            return 1 === arguments.length ? aw("config", a) : aw("config", a, b)
        },
        dw = function(a, b, c) {
            c = c || {};
            c[Q.g.Ob] = a;
            return aw("event", b, c)
        };

    function aw(a) {
        return arguments
    }
    var Aw = function() {
        this.h = [];
        this.s = []
    };
    Aw.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.s.length; f++) try {
            this.s[f](e)
        } catch (g) {}
    };
    Aw.prototype.listen = function(a) {
        this.s.push(a)
    };
    Aw.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Aw.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Iw = function(a, b, c) {
            c.eventMetadata = c.eventMetadata || {};
            c.eventMetadata.source_canonical_id = Qf.Ef;
            Hw().enqueue(a, b, c)
        },
        Kw = function() {
            var a = Jw;
            Hw().listen(a)
        };

    function Hw() {
        var a = ni.mb;
        a || (a = new Aw, ni.mb = a);
        return a
    }
    var Mw = function() {
            var a = ni.zones;
            a || (a = ni.zones = new Lw);
            return a
        },
        Nw = {
            zone: 1,
            cn: 1,
            css: 1,
            ew: 1,
            eq: 1,
            ge: 1,
            gt: 1,
            lc: 1,
            le: 1,
            lt: 1,
            re: 1,
            sw: 1,
            um: 1
        },
        Ow = {
            cl: ["ecl"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"]
        },
        Lw = function() {
            this.h = {};
            this.s = {};
            this.C = 0
        };
    ba = Lw.prototype;
    ba.isActive = function(a, b) {
        for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
        if (!c) return !0;
        if (!this.isActive([c.Jh], b)) return !1;
        for (var e = 0; e < c.Ve.length; e++)
            if (this.s[c.Ve[e]].md(b)) return !0;
        return !1
    };
    ba.getIsAllowedFn = function(a, b) {
        if (!this.isActive(a,
                b)) return function() {
            return !1
        };
        for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
        if (!c) return function() {
            return !0
        };
        for (var e = [], f = 0; f < c.Ve.length; f++) {
            var g = this.s[c.Ve[f]];
            g.md(b) && e.push(g)
        }
        if (!e.length) return function() {
            return !1
        };
        var h = this.getIsAllowedFn([c.Jh], b);
        return function(m, n) {
            n = n || [];
            if (!h(m, n)) return !1;
            for (var p = 0; p < e.length; ++p)
                if (e[p].C(m, n)) return !0;
            return !1
        }
    };
    ba.unregisterChild = function(a) {
        for (var b = 0; b < a.length; b++) delete this.h[a[b]]
    };
    ba.createZone = function(a, b) {
        var c = String(++this.C);
        this.s[c] = new Pw(a, b);
        return c
    };
    ba.updateZone = function(a, b, c) {
        var d = this.s[a];
        d && d.F(b, c)
    };
    ba.registerChild = function(a, b, c) {
        var d = this.h[a];
        if (!d && ni[a] || !d && Ak(a) || d && d.Jh !== b) return !1;
        if (d) return d.Ve.push(c), !1;
        this.h[a] = {
            Jh: b,
            Ve: [c]
        };
        return !0
    };
    var Pw = function(a, b) {
        this.h = [{
            eventId: a,
            md: !0
        }];
        this.s = null;
        if (b) {
            this.s = {};
            for (var c = 0; c < b.length; c++) this.s[b[c]] = !0
        }
    };
    Pw.prototype.F = function(a, b) {
        var c = this.h[this.h.length - 1];
        a <= c.eventId || c.md !== b && this.h.push({
            eventId: a,
            md: b
        })
    };
    Pw.prototype.md = function(a) {
        for (var b =
                this.h.length - 1; 0 <= b; b--)
            if (this.h[b].eventId <= a) return this.h[b].md;
        return !1
    };
    Pw.prototype.C = function(a, b) {
        b = b || [];
        if (!this.s || Nw[a] || this.s[a]) return !0;
        for (var c = 0; c < b.length; ++c)
            if (this.s[b[c]]) return !0;
        return !1
    };
    var Qw = function(a, b, c, d, e, f) {
            var g = Mw();
            c = c && Ya(c, Ow);
            for (var h = g.createZone(a, c), m = 0; m < b.length; m++) {
                var n = String(b[m]);
                if (g.registerChild(n, tk(), h)) {
                    var p = n,
                        q = a,
                        r = d,
                        t = e,
                        u = f;
                    if (0 === p.indexOf("GTM-")) gv(p, void 0, !1, {
                        source: 1,
                        fromContainerExecution: !0
                    });
                    else {
                        var v = aw("js", Sa());
                        gv(p, void 0, !0, {
                            source: 1,
                            fromContainerExecution: !0
                        });
                        var w = {
                            originatingEntity: t,
                            inheritParentConfig: u
                        };
                        S(40) || Iw(v, q, w);
                        Iw(cw(p, r), q, w)
                    }
                }
            }
            return h
        },
        Rw = function(a, b, c) {
            Mw().updateZone(a, b, c)
        };
    var Sw = function(a) {
            var b = ni.zones;
            return b ? b.getIsAllowedFn(pk(), a) : function() {
                return !0
            }
        },
        Tw = function(a) {
            var b = ni.zones;
            return b ? b.isActive(pk(), a) : !0
        },
        Uw = function() {
            S(87) ? Uu(uk(), function(a) {
                return Tw(a.originalEventData["gtm.uniqueEventId"])
            }) : Uu(uk(), function(a, b) {
                return Tw(b)
            });
            S(88) && S(89) && Su(uk(), function(a) {
                var b = a.entityId,
                    c = a.securityGroups;
                return Sw(a.originalEventData["gtm.uniqueEventId"])(b, c)
            })
        };
    var Xw = function(a, b) {
        for (var c = [], d = 0; d < lf.length; d++)
            if (a[d]) {
                var e = lf[d];
                var f = vv(b.Vb);
                try {
                    var g = Vv(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = e[Le.ka];
                        if (!h) throw "Error: No function name given for function call.";
                        var m = nf[h];
                        c.push({
                            Yj: d,
                            Oj: (m ? m.priorityOverride || 0 : 0) || Ou(e[Le.ka], 1) || 0,
                            execute: g
                        })
                    } else Vw(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Ww);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function Ww(a, b) {
        var c, d = b.Oj,
            e = a.Oj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Yj,
                h = b.Yj;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function Vw(a, b) {
        if (Ok) {
            var c = function(d) {
                var e = b.isBlocked(lf[d]) ? "3" : "4",
                    f = wf(lf[d][Le.lj], b, []);
                f && f.length && c(f[0].index);
                Tv(b.id, lf[d], e);
                var g = wf(lf[d][Le.qj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var $w = !1,
        Yw;
    var fx = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (S(16)) {}
        if ("gtm.js" === d) {
            if ($w) return !1;
            $w = !0
        }
        var e, f = !1,
            g = Vu(),
            h;
        if (S(87)) {
            var m = C(a);
            h = g.every(function(w) {
                return w({
                    originalEventData: m
                })
            })
        } else h = g.every(function(w) {
            return w(d, b)
        });
        if (h) e = Sw(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !==
                d) return !1;
            f = !0;
            e = Sw(Number.MAX_SAFE_INTEGER)
        }
        Mv(b, d);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = C(a),
            r = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: bx(e, q, f),
                hn: [],
                logMacroError: function() {
                    N(6);
                    $i(0)
                },
                cachedModelValues: cx(),
                Vb: new rv(function() {
                    if (S(16)) {}
                    n &&
                        n.apply(n, [].slice.call(arguments, 0))
                }, p),
                originalEventData: q
            };
        S(29) && (r.reportMacroDiscrepancy = Pv);
        S(16) && iu(r.id, r.name);
        var t = Hf(r);
        S(16) && ju(r.id, r.name);
        f && (t = dx(t));
        if (S(16)) {}
        var u = Xw(t, r),
            v = !1;
        wv(r.Vb);
        "gtm.js" !== d && "gtm.sync" !== d || Dv(tk());
        return ex(t, u) || v
    };

    function cx() {
        var a = {};
        a.event = Ri("event", 1);
        a.ecommerce = Ri("ecommerce", 1);
        a.gtm = Ri("gtm");
        a.eventModel = Ri("eventModel");
        return a
    }

    function bx(a, b, c) {
        var d = dv(a);
        return S(88) ? function(e) {
            if (d(e)) return !0;
            var f = e && e[Le.ka];
            if (!f || "string" != typeof f) return !0;
            f = f.replace(/^_*/, "");
            var g = Tu(),
                h = b;
            c && (h = C(b), h["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = Di[f] || [], n = ha(g), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                            entityId: f,
                            securityGroups: m,
                            originalEventData: h
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        } : d
    }

    function dx(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(lf[c][Le.ka]);
                if (pi[d] || void 0 !== lf[c][Le.Wk] || Ou(d, 2)) b[c] = !0
            }
        return b
    }

    function ex(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && lf[c] && !qi[String(lf[c][Le.ka])]) return !0;
        return !1
    }
    var Kf;
    var gx = {},
        hx = {},
        ix = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Kh: void 0,
                    qh: void 0
                }, f++) {
                var g = a[f];
                if (0 <= g.indexOf("-")) {
                    if (e.Kh = dk(g, b), e.Kh) {
                        var h = rk();
                        Ja(h, function(r) {
                            return function(t) {
                                return r.Kh.da === t
                            }
                        }(e)) ? c.push(g) : d.push(g)
                    }
                } else {
                    var m = gx[g] || [];
                    e.qh = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.qh[t] = !0
                        }
                    }(e));
                    for (var n = pk(), p = 0; p < n.length; p++)
                        if (e.qh[n[p]]) {
                            c = c.concat(rk());
                            break
                        }
                    var q = hx[g] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Bm: c,
                Em: d
            }
        },
        jx = function(a) {
            l(gx, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        kx = function(a) {
            l(hx, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var lx = "HA GF G UA AW DC MC".split(" "),
        mx = !1,
        nx = !1;

    function ox(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ei()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var px = void 0,
        qx = void 0;

    function rx(a, b, c) {
        var d = C(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && N(136);
        var e = C(b);
        C(c, e);
        Iw(cw(pk()[0], e), a.eventId, d)
    }

    function sx(a) {
        for (var b = ha([Q.g.Sd, Q.g.Pb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || Vl.C[d];
            if (e) return e
        }
    }
    var tx = {
            config: function(a, b) {
                var c = S(30),
                    d = ox(a, b);
                if (!(2 > a.length) && k(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !nb(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = dk(a[1], b.isGtmEvent);
                    if (f) {
                        var g, h, m;
                        a: {
                            if (!lk.ie) {
                                var n = vk(Ck());
                                if (Gk(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        Km: vk(p),
                                        Am: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (g = r.Km, h = r.Am);
                        Mv(d.eventId, "gtag.config");
                        var t = f.da,
                            u = f.id !== t;
                        if (u ? -1 === rk().indexOf(t) : -1 === pk().indexOf(t)) {
                            if (!(c && b.inheritParentConfig || e[Q.g.yb])) {
                                var v = sx(e);
                                if (u) hv(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                                    var w = e;
                                    px ? rx(b, w, px) : qx || (qx = C(w))
                                } else gv(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (g && (N(128), h && N(130), c && b.inheritParentConfig)) {
                                var x;
                                var y = e;
                                qx ? (rx(b, qx, y), x = !1) : (!y[Q.g.Qb] && si && px || (px = C(y)), x = !0);
                                x && g.containers && g.containers.join(",");
                                return
                            }
                            if (si && !u && !e[Q.g.Qb]) {
                                var A = nx;
                                nx = !0;
                                if (A) return
                            }
                            mx || N(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    kx(f.id);
                                    var B = f.id,
                                        E = e[Q.g.Pd] ||
                                        "default";
                                    E = String(E).split(",");
                                    for (var F = 0; F < E.length; F++) {
                                        var D = hx[E[F]] || [];
                                        hx[E[F]] = D;
                                        0 > D.indexOf(B) && D.push(B)
                                    }
                                } else {
                                    jx(f.id);
                                    var M = f.id,
                                        O = e[Q.g.Pd] || "default";
                                    O = O.toString().split(",");
                                    for (var P = 0; P < O.length; P++) {
                                        var T = gx[O[P]] || [];
                                        gx[O[P]] = T;
                                        0 > T.indexOf(M) && T.push(M)
                                    }
                                }
                            delete e[Q.g.Pd];
                            var aa = b.eventMetadata || {};
                            aa.hasOwnProperty("is_external_event") || (aa.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = aa;
                            delete e[Q.g.Vc];
                            for (var W = u ? [f.id] : rk(), X = 0; X < W.length; X++) {
                                var la = e,
                                    ka =
                                    W[X],
                                    ea = C(b),
                                    Fa = dk(ka, ea.isGtmEvent);
                                Fa && Vl.push("config", [la], Fa, ea)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    N(39);
                    var c = ox(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[Q.g.N] && N(139), e[Q.g.Ea] && N(140));
                    "default" === d ? Qj(e) : "update" === d ? Rj(e, c) : "declare" === d ? b.fromContainerExecution && Pj(e) : S(61) && "core_platform_services" === d && Sj(e)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && k(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!nb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = C(e), e[Q.g.Vc] && (g.eventCallback = e[Q.g.Vc]), e[Q.g.Ld] && (g.eventTimeout = e[Q.g.Ld]));
                    var h = ox(a, b),
                        m = h.eventId,
                        n = h.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[Q.g.Ob];
                    void 0 === r && (r = Mi(Q.g.Ob, 2), void 0 === r && (r = "default"));
                    if (k(r) || Ia(r)) {
                        var t;
                        b.isGtmEvent ? t = k(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = ix(t, b.isGtmEvent),
                            v = u.Bm,
                            w = u.Em;
                        if (w.length)
                            for (var x = sx(q),
                                    y = 0; y < w.length; y++) {
                                var A = dk(w[y], b.isGtmEvent);
                                A && hv(A.da, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = fk(v, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        Mv(m, c);
                        for (var E = [], F = 0; F < B.length; F++) {
                            var D = B[F],
                                M = C(b);
                            if (-1 !== lx.indexOf(wk(D.prefix))) {
                                var O = C(d),
                                    P = M.eventMetadata || {};
                                P.hasOwnProperty("is_external_event") || (P.is_external_event = !M.fromContainerExecution);
                                M.eventMetadata = P;
                                delete O[Q.g.Vc];
                                Xl(c, O, D.id, M)
                            }
                            E.push(D.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[Q.g.Ob] =
                            E.join() : delete g.eventModel[Q.g.Ob];
                        mx || N(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        g.eventModel[Q.g.Lb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                N(53);
                if (4 === a.length && k(a[1]) && k(a[2]) && Ga(a[3])) {
                    var c = dk(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        mx || N(43);
                        var f = sx();
                        if (!Ja(rk(), function(h) {
                                return c.da === h
                            })) hv(c.da, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== lx.indexOf(wk(c.prefix))) {
                            ox(a,
                                b);
                            var g = {};
                            Mj(C((g[Q.g.lb] = d, g[Q.g.wb] = e, g)));
                            Yl(d, function(h) {
                                H(function() {
                                    return e(h)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    mx = !0;
                    var c = ox(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (3 === a.length && k(a[1]) && Ga(a[2])) {
                    Lf(a[1], a[2]);
                    if (N(74), "all" === a[1]) {
                        N(75);
                        var b = !1;
                        try {
                            b = a[2](tk(), "unknown", {})
                        } catch (c) {}
                        b || N(76)
                    }
                } else {
                    N(73);
                }
            },
            set: function(a, b) {
                var c;
                2 == a.length && nb(a[1]) ? c = C(a[1]) : 3 == a.length && k(a[1]) && (c = {}, nb(a[2]) || Ia(a[2]) ? c[a[1]] = C(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = ox(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    C(c);
                    var g = C(c);
                    Vl.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    S(9) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        ux = {
            policy: !0
        };
    var vx = function(a) {
            var b = z[mi.fa].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        wx = function(a) {
            var b = z[mi.fa],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var xx = !1,
        yx = [];

    function zx() {
        if (!xx) {
            xx = !0;
            for (var a = 0; a < yx.length; a++) H(yx[a])
        }
    }
    var Ax = function(a) {
        xx ? H(a) : yx.push(a)
    };
    var Rx = function(a) {
        if (Qx(a)) return a;
        this.h = a
    };
    Rx.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Qx = function(a) {
        return !a || "object" !== kb(a) || nb(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Rx.prototype.getUntrustedMessageValue = Rx.prototype.getUntrustedMessageValue;
    var Sx = 0,
        Tx = {},
        Ux = [],
        Vx = [],
        Wx = !1,
        Xx = !1;

    function Yx(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Zx = function(a) {
            return z[mi.fa].push(a)
        },
        $x = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return Zx(a)
        },
        ay = function(a, b) {
            if (!Ha(b) || 0 > b) b = 0;
            var c = ni[mi.fa],
                d = 0,
                e = !1,
                f = void 0;
            f = z.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var g = c ? c.subscribers : 1;
                ++d === g && (f && (z.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function by(a, b) {
        var c = a._clear || b.overwriteModelFields;
        l(a, function(e, f) {
            "_clear" !== e && (c && Pi(e), Pi(e, f))
        });
        Ai || (Ai = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Ei(), a["gtm.uniqueEventId"] = d, Pi("gtm.uniqueEventId", d));
        return fx(a)
    }

    function cy(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Na(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function dy() {
        var a;
        if (Vx.length) a = Vx.shift();
        else if (Ux.length) a = Ux.shift();
        else return;
        var b;
        var c = a;
        if (Wx || !cy(c.message)) b = c;
        else {
            Wx = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ei());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                h = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Ux.unshift(h, c);
            if (Ok) {
                var m = Qf.ctid;
                if (m) {
                    var n, p = vk(Ck());
                    n = p && p.context;
                    var q, r = rl(z.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = Qf.Ef,
                        w = lk.ie;
                    Ok && (cl || (cl = q), dl.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function ey() {
        for (var a = !1, b; !Xx && (b = dy());) {
            Xx = !0;
            delete Ji.eventModel;
            Li();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Xx = !1;
            else {
                e.fromContainerExecution && Qi();
                try {
                    if (Ga(d)) try {
                        d.call(Ni)
                    } catch (x) {} else if (Ia(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split("."),
                                h = g.pop(),
                                m = f.slice(1),
                                n = Mi(g.join("."), 2);
                            if (null != n) try {
                                n[h].apply(n, m)
                            } catch (x) {}
                        }
                    } else {
                        var p = void 0,
                            q = !1;
                        if (Na(d)) {
                            a: {
                                if (d.length && k(d[0])) {
                                    var r = tx[d[0]];
                                    if (r && (!e.fromContainerExecution || !ux[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }(q = p &&
                                "set" === d[0] && !!p.event) && N(101)
                        }
                        else p = d;
                        if (p) {
                            var t = by(p, e);
                            a = t || a;
                            q && t && N(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Li(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = Tx[String(u)] || [], w = 0; w < v.length; w++) Vx.push(fy(v[w]));
                        v.length && Vx.sort(Yx);
                        delete Tx[String(u)];
                        u > Sx && (Sx = u)
                    }
                    Xx = !1
                }
            }
        }
        return !a
    }

    function gy() {
        if (S(16)) {
            var a = hy();
        }
        var b = ey();
        if (S(16)) {}
        try {
            vx(tk())
        } catch (c) {}
        return b
    }

    function Jw(a) {
        if (Sx < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Tx[b] = Tx[b] || [];
            Tx[b].push(a)
        } else Vx.push(fy(a)), Vx.sort(Yx), H(function() {
            Xx || ey()
        })
    }

    function fy(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var iy = function() {
            function a(f) {
                var g = {};
                if (Qx(f)) {
                    var h = f;
                    f = Qx(h) ? h.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = Ec(mi.fa, []),
                c = ni[mi.fa] = ni[mi.fa] || {};
            !0 === c.pruned && N(83);
            Tx = Hw().get();
            Kw();
            nv(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            Ax(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < ni.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new Rx(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var h = f.map(function(q) {
                    return a(q)
                });
                Ux.push.apply(Ux, h);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (N(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return ey() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Ux.push.apply(Ux, e);
            if (hy()) {
                if (S(16)) {}
                H(gy)
            }
        },
        hy = function() {
            var a = !0;
            return a
        };

    function jy(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ua();
        return b < c + 3E5 && b > c - 9E5
    }

    function ky(a) {
        return a && 0 === a.indexOf("pending:") ? jy(a.substr(8)) : !1
    };
    var Fy = function() {};
    var Gy = function() {};
    Gy.prototype.toString = function() {
        return "undefined"
    };
    var Hy = new Gy;
    var oz = z.clearTimeout,
        pz = z.setTimeout,
        qz = function(a, b, c, d) {
            if (un()) {
                b && H(b)
            } else return Jc(a, b, c, d)
        },
        rz = function() {
            return new Date
        },
        sz = function() {
            return z.location.href
        },
        tz = function(a) {
            return ml(rl(a), "fragment")
        },
        uz = function(a) {
            return nl(rl(a))
        },
        vz = function(a, b) {
            return Mi(a, b || 2)
        },
        wz = function(a, b, c) {
            return b ? $x(a, b, c) : Zx(a)
        },
        xz = function(a, b) {
            z[a] = b
        },
        V = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        yz = function(a, b, c) {
            return Bn(a, b, void 0 === c ? !0 : !!c)
        },
        zz = function(a, b, c) {
            return 0 === Kn(a, b, c)
        },
        Az = function(a, b) {
            if (un()) {
                b && H(b)
            } else Lc(a, b)
        },
        Bz = function(a) {
            return !!Sy(a, "init", !1)
        },
        Cz = function(a) {
            Qy(a, "init", !0)
        };

    function Zz(a, b) {
        function c(g) {
            var h = rl(g),
                m = ml(h, "protocol"),
                n = ml(h, "host", !0),
                p = ml(h, "port"),
                q = ml(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function $z(a) {
        return aA(a) ? 1 : 0
    }

    function aA(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = C(a, {});
                C({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if ($z(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return qg(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < mg.length; g++) {
                            var h = mg[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return ng(b, c);
            case "_eq":
                return rg(b, c);
            case "_ge":
                return sg(b, c);
            case "_gt":
                return ug(b, c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return tg(b, c);
            case "_lt":
                return vg(b, c);
            case "_re":
                return pg(b, c, a.ignore_case);
            case "_sw":
                return wg(b, c);
            case "_um":
                return Zz(b, c)
        }
        return !1
    };

    function bA() {
        var a = [
            ["cv", "1"],
            ["rv", mi.Ug],
            ["tc", lf.filter(function(b) {
                return b
            }).length]
        ];
        mi.me && a.push(["x", mi.me]);
        Gi.h && a.push(["tag_exp", Gi.h]);
        return a
    };

    function cA() {
        var a = bj();
        return a.length ? [
            ["exp_geo", a]
        ] : []
    }
    var dA;

    function eA() {
        try {
            null != dA || (dA = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return (null == (a = dA) ? 0 : a.length) ? [
            ["exp_tz", dA]
        ] : []
    };
    var fA = function() {
            return !1
        },
        gA = function() {
            var a = {};
            return function(b, c, d) {}
        };

    function hA() {
        var a = iA;
        return function(b, c, d) {
            var e = d && d.event;
            jA(c);
            var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
                g = new sb;
            l(c, function(r, t) {
                var u = ld(t, void 0, f);
                void 0 === u && void 0 !== t && N(44);
                g.set(r, u)
            });
            a.h.h.F = Ef();
            var h = {
                vj: Uf(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                Bf: void 0 !== e ? function(r) {
                    return e.Vb.Bf(r)
                } : void 0,
                Wb: function() {
                    return b
                },
                log: function() {},
                El: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                },
                Vm: !!Ou(b, 3),
                originalEventData: null == e ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (h.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (fA()) {
                var m = gA(),
                    n = void 0,
                    p = void 0;
                h.ab = {
                    Vh: [],
                    pe: {},
                    pb: function(r, t, u) {
                        1 === t && (n = r);
                        7 === t && (p = u);
                        m(r, t, u)
                    },
                    Dh: lh()
                };
                h.log = function(r, t) {
                    if (n) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        m(n, 4, {
                            level: r,
                            source: p,
                            message: u
                        })
                    }
                }
            }
            var q = Je(a, h, [b, g]);
            a.h.h.F = void 0;
            q instanceof xa && "return" === q.h && (q = q.s);
            return md(q, void 0, f)
        }
    }

    function jA(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ga(b) && (a.gtmOnSuccess = function() {
            H(b)
        });
        Ga(c) && (a.gtmOnFailure = function() {
            H(c)
        })
    };

    function kA(a, b) {
        var c = this;
    }
    kA.O = "addConsentListener";
    var lA;
    var mA = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (lA) try {
                a[b]()
            } catch (c) {
                N(77)
            } else a[b]()
    };

    function nA(a, b, c) {
        var d = this,
            e;
        return e
    }
    nA.D = "internal.addDataLayerEventListener";

    function oA(a, b, c) {}
    oA.O = "addDocumentEventListener";

    function pA(a, b, c, d) {}
    pA.O = "addElementEventListener";

    function qA(a) {}
    qA.O = "addEventCallback";

    function uA(a) {}
    uA.D = "internal.addFormAbandonmentListener";

    function vA(a, b, c, d) {}
    vA.D = "internal.addFormData";
    var wA = {},
        xA = [],
        yA = {},
        zA = 0,
        AA = 0;

    function HA(a, b) {}
    HA.D = "internal.addFormInteractionListener";

    function OA(a, b) {}
    OA.D = "internal.addFormSubmitListener";

    function TA(a) {}
    TA.D = "internal.addGaSendListener";

    function UA(a) {
        if (!a) return {};
        var b = a.El;
        return pv(b.type, b.index, b.name)
    }

    function VA(a) {
        return a ? {
            originatingEntity: UA(a)
        } : {}
    };
    var WA = function(a, b) {
        this.tagId = a;
        this.sc = b
    };

    function XA(a, b, c) {
        var d = this;
        var e = function(w) {
                S(90) && (Su(w, function(x) {
                    var y;
                    if (Pu()) y = Qu().getExternalRestrictions(0, uk());
                    else {
                        var A, B;
                        y = (null == (A = Ru(uk())) ? void 0 : null == (B = A._entity) ? void 0 : B.external) || []
                    }
                    for (var E = ha(y), F = E.next(); !F.done; F = E.next()) {
                        var D = F.value;
                        if (!D(x)) return !1
                    }
                    return !0
                }, !0), Uu(w, function(x) {
                    var y;
                    if (Pu()) y = Qu().getExternalRestrictions(1, uk());
                    else {
                        var A, B;
                        y = (null == (A = Ru(uk())) ? void 0 : null == (B = A._event) ? void 0 :
                            B.external) || []
                    }
                    for (var E = ha(y), F = E.next(); !F.done; F = E.next()) {
                        var D = F.value;
                        if (!D(x)) return !1
                    }
                    return !0
                }, !0));
                m && m(new WA(a, w))
            },
            f = S(63);
        f ? K(J(this), ["tagId:!string", "options:?PixieMap"], arguments) : K(J(this), ["tagId:!string", "firstPartyUrl:?string", "onLoad:?Fn"], arguments);
        var g = md(b, this.h, 1) || {},
            h = f ? g.firstPartyUrl : b,
            m = f ? g.onLoad : md(c, this.h, 1),
            n = f && !0 === g.loadByDestination,
            p = f && !0 === g.isGtmEvent,
            q = f && !0 === g.siloed;
        mA([function() {
            return L(d, "load_google_tags", a, h)
        }]);
        if (n) {
            if (Bk(a)) return
        } else if (Ak(a)) return;
        var r = 6,
            t = this.h.h;
        p && (r = 7);
        "__zone" === t.Wb() && (r = 1);
        var u = {
            source: r,
            fromContainerExecution: !0,
            siloed: q
        };
        if (n) hv(a, h, u, e);
        else {
            var v = 0 === a.indexOf("GTM-");
            gv(a, h, !v, u, e)
        }
        m && "__zone" === t.Wb() && Qw(Number.MIN_SAFE_INTEGER, [a], null, {}, UA(this.h.h));
        if (f) return q ? ok(a) : a;
    }
    XA.D = "internal.loadGoogleTag";

    function YA(a) {
        return new dd("", function(b) {
            b = I(this, b);
            if (b instanceof dd) return new dd("", function() {
                var c = ua.apply(0, arguments),
                    d = this,
                    e = C(this.h.h);
                e.eventId = a.eventId;
                e.priorityId = a.priorityId;
                e.originalEventData = a.originalEventData;
                var f = c.map(function(h) {
                        return I(d, h)
                    }),
                    g = Ca(this.h);
                g.h = e;
                return b.Ya.apply(b, [g].concat(ja(f)))
            })
        })
    };

    function ZA(a, b, c) {
        var d = this;
    }
    ZA.D = "internal.addGoogleTagRestriction";
    var $A = {},
        aB = [];
    var hB = function(a, b) {};
    hB.D = "internal.addHistoryChangeListener";

    function iB(a, b, c) {}
    iB.O = "addWindowEventListener";

    function jB(a, b) {
        return !0
    }
    jB.O = "aliasInWindow";

    function kB(a, b, c) {}
    kB.D = "internal.appendRemoteConfigParameter";

    function lB() {
        var a = 2;
        return a
    };

    function mB(a, b) {
        var c;
        return c
    }
    mB.O = "callInWindow";

    function nB(a) {}
    nB.O = "callLater";

    function oB(a) {}
    oB.D = "callOnDomReady";

    function pB(a) {}
    pB.D = "callOnWindowLoad";

    function qB(a, b) {
        var c;
        return c
    }
    qB.D = "internal.computeGtmParameter";

    function rB(a, b) {
        var c;
        var d = ld(c, this.h, lB());
        void 0 === d && void 0 !== c && N(45);
        return d
    }
    rB.O = "copyFromDataLayer";

    function sB(a) {
        var b = void 0;
        return b
    }
    sB.D = "internal.copyFromDataLayerCache";

    function tB(a) {
        var b;
        return b
    }
    tB.O = "copyFromWindow";

    function uB(a) {
        var b = void 0;
        return ld(b, this.h, lB())
    }
    uB.D = "internal.copyKeyFromWindow";

    function vB(a, b) {
        var c;
        return c
    }
    vB.D = "internal.copyPreHit";

    function wB(a, b) {
        var c = null,
            d = lB();
        K(J(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        L(this, "access_globals", "readwrite", a);
        L(this, "access_globals", "readwrite", b);
        var e = [z, G],
            f = a.split("."),
            g = $a(f, e),
            h = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var m = g[h];
        if (m && !Ga(m)) return null;
        if (m) return ld(m, this.h, d);
        var n;
        m = function() {
            if (!Ga(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[h] = m;
        var p = b.split("."),
            q = $a(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && (n = [], q[r] = n);
        c = function() {
            m.apply(m, Array.prototype.slice.call(arguments, 0))
        };
        return ld(c, this.h, d)
    }
    wB.O = "createArgumentsQueue";

    function xB(a) {
        var b;
        return ld(b, this.h, 1)
    }
    xB.D = "internal.createGaCommandQueue";

    function yB(a) {
        var b;
        return ld(b, this.h,
            lB())
    }
    yB.O = "createQueue";

    function zB(a, b) {
        var c = null;
        return c
    }
    zB.D = "internal.createRegex";

    function AB(a) {}
    AB.D = "internal.declareConsentState";

    function BB(a) {
        var b = "";
        return b
    }
    BB.D = "internal.decodeUrlHtmlEntities";

    function CB(a, b, c) {
        var d;
        return d
    }
    CB.D = "internal.decorateUrlWithGaCookies";

    function DB(a) {
        var b;
        return b
    }
    DB.D = "internal.detectUserProvidedData";

    function HB(a, b) {
        return b
    }
    HB.D = "internal.enableAutoEventOnClick";

    function MB(a, b) {
        return b
    }
    MB.D = "internal.enableAutoEventOnElementVisibility";

    function NB() {}
    NB.D = "internal.enableAutoEventOnError";
    var OB = {},
        PB = [],
        QB = {},
        RB = 0,
        SB = 0;

    function YB(a, b) {
        var c = this;
        return b
    }
    YB.D = "internal.enableAutoEventOnFormInteraction";

    function cC(a, b) {
        var c = this;
        return b
    }
    cC.D = "internal.enableAutoEventOnFormSubmit";

    function hC() {
        var a = this;
    }
    hC.D = "internal.enableAutoEventOnGaSend";
    var iC = {},
        jC = [];

    function qC(a, b) {
        var c = this;
        return b
    }
    qC.D = "internal.enableAutoEventOnHistoryChange";
    var rC = ["http://", "https://", "javascript:", "file://"];

    function vC(a, b) {
        var c = this;
        return b
    }
    vC.D = "internal.enableAutoEventOnLinkClick";
    var wC, xC;

    function IC(a, b) {
        var c = this;
        return b
    }
    IC.D = "internal.enableAutoEventOnScroll";

    function JC(a) {
        return function() {
            if (a.yc && a.Bc >= a.yc) a.wc && z.clearInterval(a.wc);
            else {
                a.Bc++;
                var b = Ua();
                Zx({
                    event: a.eventName,
                    "gtm.timerId": a.wc,
                    "gtm.timerEventNumber": a.Bc,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.yc,
                    "gtm.timerStartTime": a.Se,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.Se,
                    "gtm.triggers": a.Xh
                })
            }
        }
    }

    function KC(a, b) {
        return b
    }
    KC.D = "internal.enableAutoEventOnTimer";
    var xc = da(["data-gtm-yt-inspected-"]),
        LC = ["www.youtube.com", "www.youtube-nocookie.com"],
        MC, NC = !1;

    function XC(a, b) {
        var c = this;
        return b
    }
    XC.D = "internal.enableAutoEventOnYouTubeActivity";
    var YC;

    function ZC(a) {
        var b = !1;
        return b
    }
    ZC.D = "internal.evaluateMatchingRules";
    var CD = function() {
        var a = !0;
        Um(7) && Um(9) && Um(10) || (a = !1);
        return a
    };

    function xE(a, b, c, d) {}
    xE.D = "internal.executeEventProcessor";

    function yE(a) {
        var b = void 0;
        return ld(b, this.h, 1)
    }
    yE.D = "internal.executeJavascriptString";
    var zE = function(a) {
        var b;
        return b
    };

    function AE() {
        var a = new sb;
        return a
    }
    AE.O = "getContainerVersion";

    function BE(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    BE.O = "getCookieValues";

    function CE() {
        return bj()
    }
    CE.D = "internal.getCountryCode";

    function DE() {
        var a = [];
        return ld(a)
    }
    DE.D = "internal.getDestinationIds";

    function EE(a, b) {
        var c = "";
        return c
    }
    EE.D = "internal.getElementAttribute";

    function FE(a) {
        var b = null;
        return b
    }
    FE.D = "internal.getElementById";

    function GE(a) {
        var b = "";
        return b
    }
    GE.D = "internal.getElementInnerText";

    function HE(a, b) {
        var c = null;
        return c
    }
    HE.D = "internal.getElementProperty";

    function IE(a) {
        var b;
        return b
    }
    IE.D = "internal.getElementValue";

    function JE(a) {
        var b = 0;
        return b
    }
    JE.D = "internal.getElementVisibilityRatio";

    function KE(a) {
        var b = null;
        return b
    }
    KE.D = "internal.getElementsByCssSelector";

    function LE(a) {
        var b = void 0;
        return b
    }
    LE.D = "internal.getEventData";
    var ME = {};
    ME.enableAWFledge = S(6);
    ME.enableAdsConversionValidation = S(20);
    ME.enableAutoPiiOnPhoneAndAddress = S(27);
    ME.enableCachedEcommerceData = S(83);
    ME.enableCcdPreAutoPiiDetection = S(11);
    ME.enableCloudRecommentationsErrorLogging = S(68);
    ME.enableCloudRecommentationsSchemaIngestion = S(67);
    ME.enableCloudRetailInjectPurchaseMetadata = S(66);
    ME.enableCloudRetailLogging = S(65);
    ME.enableCloudRetailPageCategories = S(17);
    ME.enableConsentDisclosureActivity = S(32);
    ME.enableDCFledge = S(7);
    ME.enableDecodeUri = S(50);
    ME.enableDeferAllEnhancedMeasurement = S(34);
    ME.enableDirectTagLoadingInGoogleTag = S(59);
    ME.enableEuidAutoMode = S(10);
    ME.enableFormSkipValidation = S(28);
    ME.enableLoadGoogleTagOptionsObject = S(63);
    ME.enableUrlDecodeEventUsage = S(44);
    ME.enableV1HistoryEventInApi = S(73);
    ME.enableZoneConfigInChildContainers = S(99);
    ME.loadContainerForGtmEventTags = S(31);
    ME.useEnableAutoEventOnFormApis = S(21);
    ME.autoPiiEligible = gj();

    function NE() {
        return ld(ME)
    }
    NE.D = "internal.getFlags";

    function OE() {
        return new id(Hy)
    }
    OE.D = "internal.getHtmlId";

    function PE(a, b) {
        var c;
        return c
    }
    PE.D = "internal.getProductSettingsParameter";

    function QE(a, b) {
        var c;
        return c
    }
    QE.O = "getQueryParameters";

    function RE(a, b) {
        var c;
        return c
    }
    RE.O = "getReferrerQueryParameters";

    function SE(a) {
        var b = "";
        return b
    }
    SE.O = "getReferrerUrl";

    function TE() {
        return cj()
    }
    TE.D = "internal.getRegionCode";

    function UE(a, b) {
        var c;
        return c
    }
    UE.D = "internal.getRemoteConfigParameter";

    function VE(a) {
        var b = "";
        return b
    }
    VE.O = "getUrl";

    function WE() {
        L(this, "get_user_agent");
        return Cc.userAgent
    }
    WE.O = "getUserAgent";

    function bF() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var cF = function() {
            var a = bF();
            a.hid = a.hid || Ka();
            return a.hid
        },
        dF = function(a, b) {
            var c = bF();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var LF = function(a) {
            this.s = a;
            this.C = "";
            this.h = this.s
        },
        MF = function(a, b) {
            a.h = b;
            return a
        };

    function NF(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function OF(a, b, c) {
        if (a) {
            var d = a || [],
                e = nb(b) ? b : {};
            if (Array.isArray(d))
                for (var f = 0; f < d.length; f++) c(d[f], e)
        }
    };
    var cG = window,
        dG = document,
        eG = function(a) {
            var b = cG._gaUserPrefs;
            if (b && b.ioo && b.ioo() || dG.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === cG["ga-disable-" + a]) return !0;
            try {
                var c = cG.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = yn("AMP_TOKEN", String(dG.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return dG.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function nG(a) {
        l(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[Q.g.Wa] || {};
        l(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var vG = function(a, b) {};

    function uG(a, b) {
        var c = function() {};
        return c
    }

    function wG(a, b, c) {};
    var xG = uG;

    function zG(a, b, c) {
        var d = this;
        K(J(this), ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"], arguments);
        var e = b ? md(b) : {};
        mA([function() {
            return L(d, "configure_google_tags", a, e)
        }]);
        var f = c ? md(c) : {},
            g = this.h.h;
        f.originatingEntity = UA(g);
        Iw(cw(a, e), g.eventId, f);
    }
    zG.D = "internal.gtagConfig";

    function AG() {
        var a = {};
        return a
    };

    function CG(a, b) {}
    CG.O = "gtagSet";

    function DG(a, b) {}
    DG.O = "injectHiddenIframe";

    function EG(a, b, c, d, e) {}
    EG.D = "internal.injectHtml";
    var IG = {};

    function KG(a, b, c, d) {}
    var LG = Object.freeze({
            dl: 1,
            id: 1
        }),
        MG = {};

    function NG(a, b, c, d) {}
    KG.O = "injectScript";
    NG.D = "internal.injectScript";

    function OG(a) {
        var b = !0;
        return b
    }
    OG.O = "isConsentGranted";

    function PG(a) {
        var b = !1;
        return b
    }
    PG.D = "internal.isEntityInfrastructure";
    var QG = function() {
        var a = ch(function(b) {
            this.h.h.log("error", b)
        });
        a.O = "JSON";
        return a
    };

    function RG(a) {
        var b = void 0;
        return ld(b)
    }
    RG.D = "internal.legacyParseUrl";
    var SG = function() {
            return !1
        },
        TG = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };

    function UG() {
        try {
            L(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = md(a[b], this.h);
        console.log.apply(console, a);
    }
    UG.O = "logToConsole";

    function VG(a, b) {}
    VG.D = "internal.mergeRemoteConfig";

    function WG(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d = [];
        return ld(d)
    }
    WG.D = "internal.parseCookieValuesFromString";

    function XG(a) {
        var b = void 0;
        return b
    }
    XG.O = "parseUrl";

    function YG(a) {}
    YG.D = "internal.processAsNewEvent";

    function ZG(a, b, c) {
        var d;
        return d
    }
    ZG.D = "internal.pushToDataLayer";

    function $G(a, b) {
        var c = !1;
        return c
    }
    $G.O = "queryPermission";

    function aH() {
        var a = "";
        return a
    }
    aH.O = "readCharacterSet";

    function bH() {
        return mi.fa
    }
    bH.D = "internal.readDataLayerName";

    function cH() {
        var a = "";
        return a
    }
    cH.O = "readTitle";

    function dH(a, b) {
        var c = this;
    }
    dH.D = "internal.registerCcdCallback";

    function eH(a) {
        return !0
    }
    eH.D = "internal.registerDestination";
    var fH = Object.freeze(["config", "event", "get", "set"]);

    function gH(a, b, c) {}
    gH.D = "internal.registerGtagCommandListener";

    function hH(a, b) {
        var c = !1;
        return c
    }
    hH.D = "internal.removeDataLayerEventListener";

    function iH(a, b) {}
    iH.D = "internal.removeFormData";

    function jH() {}
    jH.O = "resetDataLayer";

    function kH(a, b, c, d) {}
    kH.D = "internal.sendGtagEvent";

    function lH(a, b, c) {}
    lH.O = "sendPixel";

    function mH(a, b) {}
    mH.D = "internal.setAnchorHref";

    function nH(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    nH.O = "setCookie";

    function oH(a, b) {}
    oH.D = "internal.setCorePlatformServices";

    function pH(a, b) {}
    pH.D = "internal.setDataLayerValue";

    function qH(a) {}
    qH.O = "setDefaultConsentState";

    function rH(a, b) {}
    rH.D = "internal.setDelegatedConsentType";

    function sH(a, b) {}
    sH.D = "internal.setFormAction";

    function tH(a, b, c) {
        return !1
    }
    tH.O = "setInWindow";

    function uH(a, b, c) {}
    uH.D = "internal.setProductSettingsParameter";

    function vH(a, b, c) {}
    vH.D = "internal.setRemoteConfigParameter";

    function wH(a, b) {
        var c = this;
    }
    wH.D = "internal.setupConversionLinker";

    function xH(a, b, c, d) {
        var e = this;
    }
    xH.O = "sha256";

    function yH(a, b, c) {}
    yH.D = "internal.sortRemoteConfigParameters";
    var zH = {},
        AH = {};
    zH.O = "templateStorage";
    zH.getItem = function(a) {
        var b = null;
        return b
    };
    zH.setItem = function(a, b) {};
    zH.removeItem = function(a) {};
    zH.clear = function() {};

    function BH(a, b) {
        var c = !1;
        return c
    }
    BH.D = "internal.testRegex";
    var CH = function(a) {
        var b;
        return b
    };

    function DH(a) {
        var b;
        return b
    }
    DH.D = "internal.unsiloId";

    function EH(a) {}
    EH.O = "updateConsentState";
    var FH;

    function GH(a, b, c) {
        FH = FH || new qh;
        FH.add(a, b, c)
    }

    function HH(a, b) {
        var c = FH = FH || new qh;
        if (c.s.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
        if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
        c.s[a] = Ga(b) ? Jg(a, b) : Kg(a, b)
    }

    function IH() {
        return function(a) {
            var b;
            var c = FH;
            if (c.h.hasOwnProperty(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.s.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.h.h;
                    if (f) {
                        var g = f.Wb();
                        if (g) {
                            0 !== g.indexOf("__cvt_") && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var h = c.s.hasOwnProperty(a) ? c.s[a] : void 0;
                    b = h
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };
    var JH = function() {
        var a = function(c) {
                return HH(c.D, c)
            },
            b = function(c) {
                return GH(c.O, c)
            };
        b(kA);
        b(qA);
        b(jB);
        b(mB);
        b(nB);
        b(rB);
        b(tB);
        b(wB);
        b(QG());
        b(yB);
        b(AE);
        b(BE);
        b(QE);
        b(RE);
        b(SE);
        b(VE);
        b(CG);
        b(DG);
        b(KG);
        b(OG);
        b(UG);
        b(XG);
        b($G);
        b(aH);
        b(cH);
        b(lH);
        b(nH);
        b(qH);
        b(tH);
        b(xH);
        b(zH);
        b(EH);
        GH("Math", Pg());
        GH("Object", oh);
        GH("TestHelper", sh());
        GH("assertApi", Lg);
        GH("assertThat", Mg);
        GH("decodeUri", Qg);
        GH("decodeUriComponent", Rg);
        GH("encodeUri", Sg);
        GH("encodeUriComponent", Tg);
        GH("fail", Zg);
        GH("generateRandom",
            $g);
        GH("getTimestamp", ah);
        GH("getTimestampMillis", ah);
        GH("getType", bh);
        GH("makeInteger", dh);
        GH("makeNumber", eh);
        GH("makeString", fh);
        GH("makeTableMap", kh);
        GH("mock", nh);
        GH("fromBase64", zE, !("atob" in z));
        GH("localStorage", TG, !SG());
        GH("toBase64", CH, !("btoa" in z));
        a(nA);
        a(vA);
        a(HA);
        a(OA);
        a(TA);
        a(ZA);
        a(hB);
        a(kB);
        a(oB);
        a(pB);
        a(sB);
        a(uB);
        a(vB);
        a(xB);
        a(zB);
        a(AB);
        a(BB);
        a(DB);
        a(HB);
        a(MB);
        a(NB);
        a(YB);
        a(cC);
        a(hC);
        a(qC);
        a(vC);
        a(IC);
        a(KC);
        a(XC);
        a(Ug);
        a(ZC);
        a(xE);
        a(yE);
        a(CE);
        a(DE);
        a(EE);
        a(FE);
        a(GE);
        a(HE);
        a(IE);
        a(JE);
        a(KE);
        a(LE);
        a(NE);
        a(OE);
        a(PE);
        a(TE);
        a(UE);
        a(zG);
        a(EG);
        a(NG);
        a(RG);
        a(XA);
        a(VG);
        a(WG);
        a(YG);
        a(ZG);
        a(bH);
        a(dH);
        a(eH);
        a(gH);
        a(hH);
        a(iH);
        a(kH);
        a(mH);
        a(oH);
        a(rH);
        a(sH);
        a(uH);
        a(vH);
        a(yH);
        a(BH);
        HH("internal.GtagSchema", AG());
        S(78) && a(CB);
        S(84) && a(DH);
        S(82) && a(pH);
        S(95) && a(wH);
        S(101) && a(PG);
        return IH()
    };
    var iA;

    function KH() {
        iA.h.h.M = function(a, b, c) {
            ni.SANDBOXED_JS_SEMAPHORE = ni.SANDBOXED_JS_SEMAPHORE || 0;
            ni.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                ni.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function LH(a) {
        void 0 !== a && l(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Di[e] = Di[e] || [];
                Di[e].push(b)
            }
        })
    };
    var MH = encodeURI,
        Y = encodeURIComponent,
        NH = function(a, b, c) {
            Mc(a, b, c)
        },
        OH = function(a, b) {
            if (!a) return !1;
            var c = ml(rl(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        PH = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        securityGroups: {}
    };
    Z.securityGroups.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.m = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !0;
                Z.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.securityGroups.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.m = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !0;
                Z.__f.runInSiloedMode = !1
            })(function(a) {
                var b = vz("gtm.referrer", 1) || G.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? ml(rl(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : uz(String(b)) : String(b)
            })
        }();
    Z.securityGroups.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.m = "access_globals";
                Z.__access_globals.isVendorTemplate = !0;
                Z.__access_globals.priorityOverride = 0;
                Z.__access_globals.isInfrastructure = !1;
                Z.__access_globals.runInSiloedMode = !1
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var m = c[h],
                        n = m.key;
                    m.read && e.push(n);
                    m.write && f.push(n);
                    m.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!k(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
                        } else if ("execute" === q) {
                            if (-1 < g.indexOf(r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    K: a
                }
            })
        }();
    Z.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.m = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !0;
                Z.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : vz("gtm.url", 1)) || sz();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return uz(String(c));
                var e = rl(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ia(h) ? n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = ml(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = ml(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();











    Z.securityGroups.load_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    firstPartyUrl: d
                }
            }(function(b) {
                Z.__load_google_tags = b;
                Z.__load_google_tags.m = "load_google_tags";
                Z.__load_google_tags.isVendorTemplate = !0;
                Z.__load_google_tags.priorityOverride = 0;
                Z.__load_google_tags.isInfrastructure = !1;
                Z.__load_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_allowFirstPartyUrls || !1,
                    e = b.vtp_allowedFirstPartyUrls || "specific",
                    f = b.vtp_urls || [],
                    g = b.vtp_tagIds || [],
                    h = b.vtp_createPermissionError;
                return {
                    assert: function(m, n, p) {
                        (function(q) {
                            if (!k(q)) throw h(m, {}, "Tag ID must be a string.");
                            if ("any" !== c && ("specific" !== c || -1 === g.indexOf(q))) throw h(m, {}, "Prohibited Tag ID: " + q + ".");
                        })(n);
                        (function(q) {
                            if (void 0 !== q) {
                                if (!k(q)) throw h(m, {}, "First party URL must be a string.");
                                if (d) {
                                    if ("any" === e) return;
                                    if ("specific" === e) try {
                                        if (Cg(rl(q), f)) return
                                    } catch (r) {
                                        throw h(m, {}, "Invalid first party URL filter.");
                                    }
                                }
                                throw h(m, {}, "Prohibited first party URL: " + q);
                            }
                        })(p)
                    },
                    K: a
                }
            })
        }();





    Z.securityGroups.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__logging = b;
                Z.__logging.m = "logging";
                Z.__logging.isVendorTemplate = !0;
                Z.__logging.priorityOverride = 0;
                Z.__logging.isInfrastructure = !1;
                Z.__logging.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = "all" !== c && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    K: a
                }
            })
        }();

    Z.securityGroups.configure_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    configuration: d
                }
            }(function(b) {
                Z.__configure_google_tags = b;
                Z.__configure_google_tags.m = "configure_google_tags";
                Z.__configure_google_tags.isVendorTemplate = !0;
                Z.__configure_google_tags.priorityOverride = 0;
                Z.__configure_google_tags.isInfrastructure = !1;
                Z.__configure_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_tagIds || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f,
                        g) {
                        if (!k(g)) throw e(f, {}, "Tag ID must be a string.");
                        if ("any" !== c && ("specific" !== c || -1 === d.indexOf(g))) throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
                    },
                    K: a
                }
            })
        }();





    var kJ = {};
    kJ.dataLayer = Ni;
    kJ.callback = function(a) {
        Ci.hasOwnProperty(a) && Ga(Ci[a]) && Ci[a]();
        delete Ci[a]
    };
    kJ.bootstrap = 0;
    kJ._spx = !1;

    function lJ() {
        ni[tk()] = ni[tk()] || kJ;
        zk();
        Ek() || l(Fk(), function(d, e) {
            hv(d, e.transportUrl, e.context);
            N(92)
        });
        Xa(Di, Z.securityGroups);
        var a = vk(Ck()),
            b, c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
        2 !== c && 4 !== c && 3 !== c || N(142);
        sf = If
    }
    (function(a) {
        function b() {
            m = G.documentElement.getAttribute("data-tag-assistant-present");
            jy(m) && (h = g.Lk)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (G.referrer) {
                var d = rl(G.referrer);
                c = "cct.google" === ll(d, "host")
            }
            if (!c) {
                var e = Bn("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Jc("https://cct.google/taggy/agent.js"))
        }
        if (xi) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    ti ? (v = "OGT", w = "GTAG") : xi && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, Jc("https://" + mi.xd + "/debug/bootstrap?id=" + Qf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + wn()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Dc,
                            containerProduct: v,
                            debug: !1,
                            id: Qf.ctid,
                            targetRef: {
                                ctid: Qf.ctid,
                                isDestination: lk.ie
                            },
                            aliases: nk(),
                            destinations: qk()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    mi.lk && (y.data.initialPublish = !0);
                    x.push(y)
                },
                g = {
                    Gn: 1,
                    Mk: 2,
                    Yk: 3,
                    nk: 4,
                    Lk: 5
                },
                h = void 0,
                m = void 0,
                n = ml(z.location, "query", !1, void 0, "gtm_debug");
            jy(n) && (h = g.Mk);
            if (!h && G.referrer) {
                var p = rl(G.referrer);
                "tagassistant.google.com" === ll(p, "host") && (h = g.Yk)
            }
            if (!h) {
                var q = Bn("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.nk)
            }
            h || b();
            if (!h && ky(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        h && Dc ? f(h) : a()
                    },
                    t = !1;
                Nc(G, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else h && Dc ? f(h) : a()
        }
    })(function() {
        try {
            xk();
            if (S(16)) {}
            lj().s();
            Sm();
            (S(92) || S(93) || S(94)) &&
            ak();
            var a = uk();
            if (ik().canonical[a]) {
                var b = ni.zones;
                b && b.unregisterChild(pk());
                if (Pu()) Qu().removeExternalRestrictions(uk());
                else {
                    var c = Ru(uk());
                    c._event && (c._event.external = []);
                    c._entity && (c._entity.external = [])
                }
            } else {
                Gi.h = "";
                Gi.C = "";
                Gi.M = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Gi.F = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                ev();
                for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) hf.push(e[f]);
                for (var g = d.tags || [], h = 0; h < g.length; h++) lf.push(g[h]);
                for (var m = d.predicates || [], n = 0; n < m.length; n++) kf.push(m[n]);
                for (var p = d.rules || [], q = 0; q < p.length; q++) {
                    for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
                        var v = r[u][0];
                        t[v] = Array.prototype.slice.call(r[u], 1);
                        "if" !== v && "unless" !== v || rf(t[v])
                    }
                    jf.push(t)
                }
                nf = Z; of = $z;
                Kf = new Tf;
                var w = data.sandboxed_scripts,
                    x = data.security_groups;
                a: {
                    var y = data.runtime || [],
                        A = data.runtime_lines;iA = new He;KH();gf = hA();
                    var B = iA,
                        E = JH(),
                        F = new dd("require", E);F.Eb();B.h.h.set("require", F);
                    for (var D = [], M = 0; M < y.length; M++) {
                        var O = y[M];
                        if (!Ia(O) || 3 > O.length) {
                            if (0 === O.length) continue;
                            break a
                        }
                        A && A[M] && A[M].length && Bf(O, A[M]);
                        try {
                            iA.execute(O), S(29) && Ok && 50 === O[0] && D.push(O[1])
                        } catch (Ib) {}
                    }
                    S(29) && (tf = D)
                }
                if (void 0 !== w)
                    for (var P = ["sandboxedScripts"], T = 0; T < w.length; T++) {
                        var aa = w[T].replace(/^_*/, "");
                        Di[aa] = P
                    }
                LH(x);
                lJ();
                if (S(24) && !xi)
                    for (var W = ej() ? Hi(Gi.F) : Hi(Gi.M), X = 0; X < Oj.length; X++) {
                        var la = Oj[X],
                            ka = la,
                            ea = W[la] ? "granted" : "denied";
                        xj().implicit(ka, ea)
                    }
                iy();
                iv = !1;
                jv = 0;
                if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState) lv();
                else {
                    Nc(G, "DOMContentLoaded", lv);
                    Nc(G, "readystatechange", lv);
                    if (G.createEventObject &&
                        G.documentElement.doScroll) {
                        var Fa = !0;
                        try {
                            Fa = !z.frameElement
                        } catch (Ib) {}
                        Fa && mv()
                    }
                    Nc(z, "load", lv)
                }
                xx = !1;
                "complete" === G.readyState ? zx() : Nc(z, "load", zx);
                Ok && (Jk(bl), z.setInterval(al, 864E5));
                Jk(bA);
                Jk(Nv);
                Jk(xt);
                Jk(Ul);
                Jk(Uv);
                Jk(gl);
                Jk(as);
                Jk(el);
                S(29) && Jk(Qv);
                S(102) && (Jk(cA), Jk(eA));
                Fy();
                $i(1);
                Uw();
                Bi = Ua();
                kJ.bootstrap = Bi;
                if (S(16)) {}
            }
        } catch (Ib) {
            if ($i(4),
                Ok) {
                var mb = Wk(!0, !0);
                Mc(mb)
            }
        }
    });

})()