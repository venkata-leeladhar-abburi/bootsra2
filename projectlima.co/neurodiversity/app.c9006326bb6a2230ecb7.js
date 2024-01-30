/*! For license information please see app.c9006326bb6a2230ecb7.js.LICENSE.txt */
(() => {
    var __webpack_modules__ = {
            138: function(t, e, i) {
                var r, s;
                "undefined" != typeof window && window, void 0 === (s = "function" == typeof(r = function() {
                    "use strict";

                    function t() {}
                    var e = t.prototype;
                    return e.on = function(t, e) {
                        if (t && e) {
                            var i = this._events = this._events || {},
                                r = i[t] = i[t] || [];
                            return -1 == r.indexOf(e) && r.push(e), this
                        }
                    }, e.once = function(t, e) {
                        if (t && e) {
                            this.on(t, e);
                            var i = this._onceEvents = this._onceEvents || {};
                            return (i[t] = i[t] || {})[e] = !0, this
                        }
                    }, e.off = function(t, e) {
                        var i = this._events && this._events[t];
                        if (i && i.length) {
                            var r = i.indexOf(e);
                            return -1 != r && i.splice(r, 1), this
                        }
                    }, e.emitEvent = function(t, e) {
                        var i = this._events && this._events[t];
                        if (i && i.length) {
                            i = i.slice(0), e = e || [];
                            for (var r = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                                var n = i[s];
                                r && r[n] && (this.off(t, n), delete r[n]), n.apply(this, e)
                            }
                            return this
                        }
                    }, e.allOff = function() {
                        delete this._events, delete this._onceEvents
                    }, t
                }) ? r.call(e, i, e, t) : r) || (t.exports = s)
            },
            778: t => {
                ! function() {
                    function e(t, e) {
                        document.addEventListener ? t.addEventListener("scroll", e, !1) : t.attachEvent("scroll", e)
                    }

                    function i(t) {
                        this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(t)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
                    }

                    function r(t, e) {
                        t.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + e + ";"
                    }

                    function s(t) {
                        var e = t.a.offsetWidth,
                            i = e + 100;
                        return t.f.style.width = i + "px", t.c.scrollLeft = i, t.b.scrollLeft = t.b.scrollWidth + 100, t.g !== e && (t.g = e, !0)
                    }

                    function n(t, i) {
                        function r() {
                            var t = n;
                            s(t) && t.a.parentNode && i(t.g)
                        }
                        var n = t;
                        e(t.b, r), e(t.c, r), s(t)
                    }

                    function a(t, e) {
                        var i = e || {};
                        this.family = t, this.style = i.style || "normal", this.weight = i.weight || "normal", this.stretch = i.stretch || "normal"
                    }
                    var o = null,
                        h = null,
                        l = null,
                        p = null;

                    function u() {
                        return null === p && (p = !!document.fonts), p
                    }

                    function c() {
                        if (null === l) {
                            var t = document.createElement("div");
                            try {
                                t.style.font = "condensed 100px sans-serif"
                            } catch (t) {}
                            l = "" !== t.style.font
                        }
                        return l
                    }

                    function f(t, e) {
                        return [t.style, t.weight, c() ? t.stretch : "", "100px", e].join(" ")
                    }
                    a.prototype.load = function(t, e) {
                        var s = this,
                            a = t || "BESbswy",
                            l = 0,
                            p = e || 3e3,
                            c = (new Date).getTime();
                        return new Promise((function(t, e) {
                            if (u() && ! function() {
                                    if (null === h)
                                        if (u() && /Apple/.test(window.navigator.vendor)) {
                                            var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                                            h = !!t && 603 > parseInt(t[1], 10)
                                        } else h = !1;
                                    return h
                                }()) {
                                var d = new Promise((function(t, e) {
                                        ! function i() {
                                            (new Date).getTime() - c >= p ? e(Error(p + "ms timeout exceeded")) : document.fonts.load(f(s, '"' + s.family + '"'), a).then((function(e) {
                                                1 <= e.length ? t() : setTimeout(i, 25)
                                            }), e)
                                        }()
                                    })),
                                    m = new Promise((function(t, e) {
                                        l = setTimeout((function() {
                                            e(Error(p + "ms timeout exceeded"))
                                        }), p)
                                    }));
                                Promise.race([m, d]).then((function() {
                                    clearTimeout(l), t(s)
                                }), e)
                            } else ! function(t) {
                                document.body ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", (function e() {
                                    document.removeEventListener("DOMContentLoaded", e), t()
                                })) : document.attachEvent("onreadystatechange", (function e() {
                                    "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", e), t())
                                }))
                            }((function() {
                                function h() {
                                    var e;
                                    (e = -1 != g && -1 != y || -1 != g && -1 != v || -1 != y && -1 != v) && ((e = g != y && g != v && y != v) || (null === o && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), o = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))), e = o && (g == _ && y == _ && v == _ || g == D && y == D && v == D || g == b && y == b && v == b)), e = !e), e && (x.parentNode && x.parentNode.removeChild(x), clearTimeout(l), t(s))
                                }
                                var u = new i(a),
                                    d = new i(a),
                                    m = new i(a),
                                    g = -1,
                                    y = -1,
                                    v = -1,
                                    _ = -1,
                                    D = -1,
                                    b = -1,
                                    x = document.createElement("div");
                                x.dir = "ltr", r(u, f(s, "sans-serif")), r(d, f(s, "serif")), r(m, f(s, "monospace")), x.appendChild(u.a), x.appendChild(d.a), x.appendChild(m.a), document.body.appendChild(x), _ = u.a.offsetWidth, D = d.a.offsetWidth, b = m.a.offsetWidth,
                                    function t() {
                                        if ((new Date).getTime() - c >= p) x.parentNode && x.parentNode.removeChild(x), e(Error(p + "ms timeout exceeded"));
                                        else {
                                            var i = document.hidden;
                                            !0 !== i && void 0 !== i || (g = u.a.offsetWidth, y = d.a.offsetWidth, v = m.a.offsetWidth, h()), l = setTimeout(t, 50)
                                        }
                                    }(), n(u, (function(t) {
                                        g = t, h()
                                    })), r(u, f(s, '"' + s.family + '",sans-serif')), n(d, (function(t) {
                                        y = t, h()
                                    })), r(d, f(s, '"' + s.family + '",serif')), n(m, (function(t) {
                                        v = t, h()
                                    })), r(m, f(s, '"' + s.family + '",monospace'))
                            }))
                        }))
                    }, t.exports = a
                }()
            },
            70: function(t, e, i) {
                var r, s;
                ! function(n, a) {
                    "use strict";
                    r = [i(138)], s = function(t) {
                        return function(t, e) {
                            var i = t.jQuery,
                                r = t.console;

                            function s(t, e) {
                                for (var i in e) t[i] = e[i];
                                return t
                            }
                            var n = Array.prototype.slice;

                            function a(t) {
                                return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
                            }

                            function o(t, e, n) {
                                if (!(this instanceof o)) return new o(t, e, n);
                                var h = t;
                                "string" == typeof t && (h = document.querySelectorAll(t)), h ? (this.elements = a(h), this.options = s({}, this.options), "function" == typeof e ? n = e : s(this.options, e), n && this.on("always", n), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : r.error("Bad element for imagesLoaded " + (h || t))
                            }
                            o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
                                this.images = [], this.elements.forEach(this.addElementImages, this)
                            }, o.prototype.addElementImages = function(t) {
                                "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                                var e = t.nodeType;
                                if (e && h[e]) {
                                    for (var i = t.querySelectorAll("img"), r = 0; r < i.length; r++) {
                                        var s = i[r];
                                        this.addImage(s)
                                    }
                                    if ("string" == typeof this.options.background) {
                                        var n = t.querySelectorAll(this.options.background);
                                        for (r = 0; r < n.length; r++) {
                                            var a = n[r];
                                            this.addElementBackgroundImages(a)
                                        }
                                    }
                                }
                            };
                            var h = {
                                1: !0,
                                9: !0,
                                11: !0
                            };

                            function l(t) {
                                this.img = t
                            }

                            function p(t, e) {
                                this.url = t, this.element = e, this.img = new Image
                            }
                            return o.prototype.addElementBackgroundImages = function(t) {
                                var e = getComputedStyle(t);
                                if (e)
                                    for (var i = /url\((['"])?(.*?)\1\)/gi, r = i.exec(e.backgroundImage); null !== r;) {
                                        var s = r && r[2];
                                        s && this.addBackground(s, t), r = i.exec(e.backgroundImage)
                                    }
                            }, o.prototype.addImage = function(t) {
                                var e = new l(t);
                                this.images.push(e)
                            }, o.prototype.addBackground = function(t, e) {
                                var i = new p(t, e);
                                this.images.push(i)
                            }, o.prototype.check = function() {
                                var t = this;

                                function e(e, i, r) {
                                    setTimeout((function() {
                                        t.progress(e, i, r)
                                    }))
                                }
                                this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
                                    t.once("progress", e), t.check()
                                })) : this.complete()
                            }, o.prototype.progress = function(t, e, i) {
                                this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + i, t, e)
                            }, o.prototype.complete = function() {
                                var t = this.hasAnyBroken ? "fail" : "done";
                                if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                                    var e = this.hasAnyBroken ? "reject" : "resolve";
                                    this.jqDeferred[e](this)
                                }
                            }, l.prototype = Object.create(e.prototype), l.prototype.check = function() {
                                this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                            }, l.prototype.getIsImageComplete = function() {
                                return this.img.complete && this.img.naturalWidth
                            }, l.prototype.confirm = function(t, e) {
                                this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
                            }, l.prototype.handleEvent = function(t) {
                                var e = "on" + t.type;
                                this[e] && this[e](t)
                            }, l.prototype.onload = function() {
                                this.confirm(!0, "onload"), this.unbindEvents()
                            }, l.prototype.onerror = function() {
                                this.confirm(!1, "onerror"), this.unbindEvents()
                            }, l.prototype.unbindEvents = function() {
                                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                            }, p.prototype = Object.create(l.prototype), p.prototype.check = function() {
                                this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                            }, p.prototype.unbindEvents = function() {
                                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                            }, p.prototype.confirm = function(t, e) {
                                this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
                            }, o.makeJQueryPlugin = function(e) {
                                (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                                    return new o(this, t, e).jqDeferred.promise(i(this))
                                })
                            }, o.makeJQueryPlugin(), o
                        }(n, t)
                    }.apply(e, r), void 0 === s || (t.exports = s)
                }("undefined" != typeof window ? window : this)
            },
            421: (module, exports, __webpack_require__) => {
                var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
                "undefined" != typeof navigator && (root = window || {}, factory = function(window) {
                    "use strict";
                    var svgNS = "http://www.w3.org/2000/svg",
                        locationHref = "",
                        initialDefaultFrame = -999999,
                        _useWebWorker = !1,
                        subframeEnabled = !0,
                        idPrefix = "",
                        expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                        cachedColors = {},
                        bmRnd, bmPow = Math.pow,
                        bmSqrt = Math.sqrt,
                        bmFloor = Math.floor,
                        bmMax = Math.max,
                        bmMin = Math.min,
                        BMMath = {};

                    function ProjectInterface() {
                        return {}
                    }! function() {
                        var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                            i = e.length;
                        for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
                    }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                        if ("object" == typeof t && t.length) {
                            var e, i = createSizedArray(t.length),
                                r = t.length;
                            for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
                            return i
                        }
                        return Math.abs(t)
                    };
                    var defaultCurveSegments = 150,
                        degToRads = Math.PI / 180,
                        roundCorner = .5519;

                    function roundValues(t) {
                        bmRnd = t ? Math.round : function(t) {
                            return t
                        }
                    }

                    function styleDiv(t) {
                        t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
                    }

                    function BMEnterFrameEvent(t, e, i, r) {
                        this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1
                    }

                    function BMCompleteEvent(t, e) {
                        this.type = t, this.direction = e < 0 ? -1 : 1
                    }

                    function BMCompleteLoopEvent(t, e, i, r) {
                        this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1
                    }

                    function BMSegmentStartEvent(t, e, i) {
                        this.type = t, this.firstFrame = e, this.totalFrames = i
                    }

                    function BMDestroyEvent(t, e) {
                        this.type = t, this.target = e
                    }

                    function BMRenderFrameErrorEvent(t, e) {
                        this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                    }

                    function BMConfigErrorEvent(t) {
                        this.type = "configError", this.nativeError = t
                    }

                    function BMAnimationConfigErrorEvent(t, e) {
                        this.type = t, this.nativeError = e
                    }
                    roundValues(!1);
                    var createElementID = (_count = 0, function() {
                            return idPrefix + "__lottie_element_" + (_count += 1)
                        }),
                        _count;

                    function HSVtoRGB(t, e, i) {
                        var r, s, n, a, o, h, l, p;
                        switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), a % 6) {
                            case 0:
                                r = i, s = p, n = h;
                                break;
                            case 1:
                                r = l, s = i, n = h;
                                break;
                            case 2:
                                r = h, s = i, n = p;
                                break;
                            case 3:
                                r = h, s = l, n = i;
                                break;
                            case 4:
                                r = p, s = h, n = i;
                                break;
                            case 5:
                                r = i, s = h, n = l
                        }
                        return [r, s, n]
                    }

                    function RGBtoHSV(t, e, i) {
                        var r, s = Math.max(t, e, i),
                            n = Math.min(t, e, i),
                            a = s - n,
                            o = 0 === s ? 0 : a / s,
                            h = s / 255;
                        switch (s) {
                            case n:
                                r = 0;
                                break;
                            case t:
                                r = e - i + a * (e < i ? 6 : 0), r /= 6 * a;
                                break;
                            case e:
                                r = i - t + 2 * a, r /= 6 * a;
                                break;
                            case i:
                                r = t - e + 4 * a, r /= 6 * a
                        }
                        return [r, o, h]
                    }

                    function addSaturationToRGB(t, e) {
                        var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
                    }

                    function addBrightnessToRGB(t, e) {
                        var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
                    }

                    function addHueToRGB(t, e) {
                        var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                        return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
                    }
                    var rgbToHex = function() {
                        var t, e, i = [];
                        for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
                        return function(t, e, r) {
                            return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
                        }
                    }();

                    function BaseEvent() {}
                    BaseEvent.prototype = {
                        triggerEvent: function(t, e) {
                            if (this._cbs[t])
                                for (var i = this._cbs[t], r = 0; r < i.length; r += 1) i[r](e)
                        },
                        addEventListener: function(t, e) {
                            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                                function() {
                                    this.removeEventListener(t, e)
                                }.bind(this)
                        },
                        removeEventListener: function(t, e) {
                            if (e) {
                                if (this._cbs[t]) {
                                    for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                                    this._cbs[t].length || (this._cbs[t] = null)
                                }
                            } else this._cbs[t] = null
                        }
                    };
                    var createTypedArray = function() {
                        function t(t, e) {
                            var i, r = 0,
                                s = [];
                            switch (t) {
                                case "int16":
                                case "uint8c":
                                    i = 1;
                                    break;
                                default:
                                    i = 1.1
                            }
                            for (r = 0; r < e; r += 1) s.push(i);
                            return s
                        }
                        return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                            return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                        } : t
                    }();

                    function createSizedArray(t) {
                        return Array.apply(null, {
                            length: t
                        })
                    }

                    function createNS(t) {
                        return document.createElementNS(svgNS, t)
                    }

                    function createTag(t) {
                        return document.createElement(t)
                    }

                    function DynamicPropertyContainer() {}
                    DynamicPropertyContainer.prototype = {
                        addDynamicProperty: function(t) {
                            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                        },
                        iterateDynamicProperties: function() {
                            var t;
                            this._mdf = !1;
                            var e = this.dynamicProperties.length;
                            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                        },
                        initDynamicPropertyContainer: function(t) {
                            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                        }
                    };
                    var getBlendMode = (blendModeEnums = {
                            0: "source-over",
                            1: "multiply",
                            2: "screen",
                            3: "overlay",
                            4: "darken",
                            5: "lighten",
                            6: "color-dodge",
                            7: "color-burn",
                            8: "hard-light",
                            9: "soft-light",
                            10: "difference",
                            11: "exclusion",
                            12: "hue",
                            13: "saturation",
                            14: "color",
                            15: "luminosity"
                        }, function(t) {
                            return blendModeEnums[t] || ""
                        }),
                        blendModeEnums, lineCapEnum = {
                            1: "butt",
                            2: "round",
                            3: "square"
                        },
                        lineJoinEnum = {
                            1: "miter",
                            2: "round",
                            3: "bevel"
                        },
                        Matrix = function() {
                            var t = Math.cos,
                                e = Math.sin,
                                i = Math.tan,
                                r = Math.round;

                            function s() {
                                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                            }

                            function n(i) {
                                if (0 === i) return this;
                                var r = t(i),
                                    s = e(i);
                                return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function a(i) {
                                if (0 === i) return this;
                                var r = t(i),
                                    s = e(i);
                                return this._t(1, 0, 0, 0, 0, r, -s, 0, 0, s, r, 0, 0, 0, 0, 1)
                            }

                            function o(i) {
                                if (0 === i) return this;
                                var r = t(i),
                                    s = e(i);
                                return this._t(r, 0, s, 0, 0, 1, 0, 0, -s, 0, r, 0, 0, 0, 0, 1)
                            }

                            function h(i) {
                                if (0 === i) return this;
                                var r = t(i),
                                    s = e(i);
                                return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function l(t, e) {
                                return this._t(1, e, t, 1, 0, 0)
                            }

                            function p(t, e) {
                                return this.shear(i(t), i(e))
                            }

                            function u(r, s) {
                                var n = t(s),
                                    a = e(s);
                                return this._t(n, a, 0, 0, -a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(n, -a, 0, 0, a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            }

                            function c(t, e, i) {
                                return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                            }

                            function f(t, e, i, r, s, n, a, o, h, l, p, u, c, f, d, m) {
                                return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = s, this.props[5] = n, this.props[6] = a, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = u, this.props[12] = c, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
                            }

                            function d(t, e, i) {
                                return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                            }

                            function m(t, e, i, r, s, n, a, o, h, l, p, u, c, f, d, m) {
                                var g = this.props;
                                if (1 === t && 0 === e && 0 === i && 0 === r && 0 === s && 1 === n && 0 === a && 0 === o && 0 === h && 0 === l && 1 === p && 0 === u) return g[12] = g[12] * t + g[15] * c, g[13] = g[13] * n + g[15] * f, g[14] = g[14] * p + g[15] * d, g[15] *= m, this._identityCalculated = !1, this;
                                var y = g[0],
                                    v = g[1],
                                    _ = g[2],
                                    D = g[3],
                                    b = g[4],
                                    x = g[5],
                                    E = g[6],
                                    C = g[7],
                                    P = g[8],
                                    S = g[9],
                                    w = g[10],
                                    T = g[11],
                                    A = g[12],
                                    F = g[13],
                                    k = g[14],
                                    M = g[15];
                                return g[0] = y * t + v * s + _ * h + D * c, g[1] = y * e + v * n + _ * l + D * f, g[2] = y * i + v * a + _ * p + D * d, g[3] = y * r + v * o + _ * u + D * m, g[4] = b * t + x * s + E * h + C * c, g[5] = b * e + x * n + E * l + C * f, g[6] = b * i + x * a + E * p + C * d, g[7] = b * r + x * o + E * u + C * m, g[8] = P * t + S * s + w * h + T * c, g[9] = P * e + S * n + w * l + T * f, g[10] = P * i + S * a + w * p + T * d, g[11] = P * r + S * o + w * u + T * m, g[12] = A * t + F * s + k * h + M * c, g[13] = A * e + F * n + k * l + M * f, g[14] = A * i + F * a + k * p + M * d, g[15] = A * r + F * o + k * u + M * m, this._identityCalculated = !1, this
                            }

                            function g() {
                                return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                            }

                            function y(t) {
                                for (var e = 0; e < 16;) {
                                    if (t.props[e] !== this.props[e]) return !1;
                                    e += 1
                                }
                                return !0
                            }

                            function v(t) {
                                var e;
                                for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                                return t
                            }

                            function _(t) {
                                var e;
                                for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                            }

                            function D(t, e, i) {
                                return {
                                    x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                                    y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                                    z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                                }
                            }

                            function b(t, e, i) {
                                return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                            }

                            function x(t, e, i) {
                                return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                            }

                            function E(t, e, i) {
                                return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                            }

                            function C() {
                                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                    e = this.props[5] / t,
                                    i = -this.props[1] / t,
                                    r = -this.props[4] / t,
                                    s = this.props[0] / t,
                                    n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                    a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                    o = new Matrix;
                                return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = s, o.props[12] = n, o.props[13] = a, o
                            }

                            function P(t) {
                                return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                            }

                            function S(t) {
                                var e, i = t.length,
                                    r = [];
                                for (e = 0; e < i; e += 1) r[e] = P(t[e]);
                                return r
                            }

                            function w(t, e, i) {
                                var r = createTypedArray("float32", 6);
                                if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
                                else {
                                    var s = this.props[0],
                                        n = this.props[1],
                                        a = this.props[4],
                                        o = this.props[5],
                                        h = this.props[12],
                                        l = this.props[13];
                                    r[0] = t[0] * s + t[1] * a + h, r[1] = t[0] * n + t[1] * o + l, r[2] = e[0] * s + e[1] * a + h, r[3] = e[0] * n + e[1] * o + l, r[4] = i[0] * s + i[1] * a + h, r[5] = i[0] * n + i[1] * o + l
                                }
                                return r
                            }

                            function T(t, e, i) {
                                return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                            }

                            function A(t, e) {
                                if (this.isIdentity()) return t + "," + e;
                                var i = this.props;
                                return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                            }

                            function F() {
                                for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
                                return i
                            }

                            function k(t) {
                                return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
                            }

                            function M() {
                                var t = this.props;
                                return "matrix(" + k(t[0]) + "," + k(t[1]) + "," + k(t[4]) + "," + k(t[5]) + "," + k(t[12]) + "," + k(t[13]) + ")"
                            }
                            return function() {
                                this.reset = s, this.rotate = n, this.rotateX = a, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = u, this.shear = l, this.scale = c, this.setTransform = f, this.translate = d, this.transform = m, this.applyToPoint = D, this.applyToX = b, this.applyToY = x, this.applyToZ = E, this.applyToPointArray = T, this.applyToTriplePoints = w, this.applyToPointStringified = A, this.toCSS = F, this.to2dCSS = M, this.clone = v, this.cloneFromProps = _, this.equals = y, this.inversePoints = S, this.inversePoint = P, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                            }
                        }();
                    ! function(t, e) {
                        var i = this,
                            r = 256,
                            s = e.pow(r, 6),
                            n = e.pow(2, 52),
                            a = 2 * n,
                            o = 255;

                        function h(t) {
                            var e, i = t.length,
                                s = this,
                                n = 0,
                                a = s.i = s.j = 0,
                                h = s.S = [];
                            for (i || (t = [i++]); n < r;) h[n] = n++;
                            for (n = 0; n < r; n++) h[n] = h[a = o & a + t[n % i] + (e = h[n])], h[a] = e;
                            s.g = function(t) {
                                for (var e, i = 0, n = s.i, a = s.j, h = s.S; t--;) e = h[n = o & n + 1], i = i * r + h[o & (h[n] = h[a = o & a + e]) + (h[a] = e)];
                                return s.i = n, s.j = a, i
                            }
                        }

                        function l(t, e) {
                            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                        }

                        function p(t, e) {
                            var i, r = [],
                                s = typeof t;
                            if (e && "object" == s)
                                for (i in t) try {
                                    r.push(p(t[i], e - 1))
                                } catch (t) {}
                            return r.length ? r : "string" == s ? t : t + "\0"
                        }

                        function u(t, e) {
                            for (var i, r = t + "", s = 0; s < r.length;) e[o & s] = o & (i ^= 19 * e[o & s]) + r.charCodeAt(s++);
                            return c(e)
                        }

                        function c(t) {
                            return String.fromCharCode.apply(0, t)
                        }
                        e.seedrandom = function(o, f, d) {
                            var m = [],
                                g = u(p((f = !0 === f ? {
                                    entropy: !0
                                } : f || {}).entropy ? [o, c(t)] : null === o ? function() {
                                    try {
                                        var e = new Uint8Array(r);
                                        return (i.crypto || i.msCrypto).getRandomValues(e), c(e)
                                    } catch (e) {
                                        var s = i.navigator,
                                            n = s && s.plugins;
                                        return [+new Date, i, n, i.screen, c(t)]
                                    }
                                }() : o, 3), m),
                                y = new h(m),
                                v = function() {
                                    for (var t = y.g(6), e = s, i = 0; t < n;) t = (t + i) * r, e *= r, i = y.g(1);
                                    for (; t >= a;) t /= 2, e /= 2, i >>>= 1;
                                    return (t + i) / e
                                };
                            return v.int32 = function() {
                                return 0 | y.g(4)
                            }, v.quick = function() {
                                return y.g(4) / 4294967296
                            }, v.double = v, u(c(y.S), t), (f.pass || d || function(t, i, r, s) {
                                return s && (s.S && l(s, y), t.state = function() {
                                    return l(y, {})
                                }), r ? (e.random = t, i) : t
                            })(v, g, "global" in f ? f.global : this == e, f.state)
                        }, u(e.random(), t)
                    }([], BMMath);
                    var BezierFactory = function() {
                        var t = {
                                getBezierEasing: function(t, i, r, s, n) {
                                    var a = n || ("bez_" + t + "_" + i + "_" + r + "_" + s).replace(/\./g, "p");
                                    if (e[a]) return e[a];
                                    var o = new l([t, i, r, s]);
                                    return e[a] = o, o
                                }
                            },
                            e = {},
                            i = .1,
                            r = "function" == typeof Float32Array;

                        function s(t, e) {
                            return 1 - 3 * e + 3 * t
                        }

                        function n(t, e) {
                            return 3 * e - 6 * t
                        }

                        function a(t) {
                            return 3 * t
                        }

                        function o(t, e, i) {
                            return ((s(e, i) * t + n(e, i)) * t + a(e)) * t
                        }

                        function h(t, e, i) {
                            return 3 * s(e, i) * t * t + 2 * n(e, i) * t + a(e)
                        }

                        function l(t) {
                            this._p = t, this._mSampleValues = r ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                        }
                        return l.prototype = {
                            get: function(t) {
                                var e = this._p[0],
                                    i = this._p[1],
                                    r = this._p[2],
                                    s = this._p[3];
                                return this._precomputed || this._precompute(), e === i && r === s ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), i, s)
                            },
                            _precompute: function() {
                                var t = this._p[0],
                                    e = this._p[1],
                                    i = this._p[2],
                                    r = this._p[3];
                                this._precomputed = !0, t === e && i === r || this._calcSampleValues()
                            },
                            _calcSampleValues: function() {
                                for (var t = this._p[0], e = this._p[2], r = 0; r < 11; ++r) this._mSampleValues[r] = o(r * i, t, e)
                            },
                            _getTForX: function(t) {
                                for (var e = this._p[0], r = this._p[2], s = this._mSampleValues, n = 0, a = 1; 10 !== a && s[a] <= t; ++a) n += i;
                                var l = n + (t - s[--a]) / (s[a + 1] - s[a]) * i,
                                    p = h(l, e, r);
                                return p >= .001 ? function(t, e, i, r) {
                                    for (var s = 0; s < 4; ++s) {
                                        var n = h(e, i, r);
                                        if (0 === n) return e;
                                        e -= (o(e, i, r) - t) / n
                                    }
                                    return e
                                }(t, l, e, r) : 0 === p ? l : function(t, e, i, r, s) {
                                    var n, a, h = 0;
                                    do {
                                        (n = o(a = e + (i - e) / 2, r, s) - t) > 0 ? i = a : e = a
                                    } while (Math.abs(n) > 1e-7 && ++h < 10);
                                    return a
                                }(t, n, n + i, e, r)
                            }
                        }, t
                    }();

                    function extendPrototype(t, e) {
                        var i, r, s = t.length;
                        for (i = 0; i < s; i += 1)
                            for (var n in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, n) && (e.prototype[n] = r[n])
                    }

                    function getDescriptor(t, e) {
                        return Object.getOwnPropertyDescriptor(t, e)
                    }

                    function createProxyFunction(t) {
                        function e() {}
                        return e.prototype = t, e
                    }

                    function bezFunction() {
                        var t = Math;

                        function e(t, e, i, r, s, n) {
                            var a = t * r + e * s + i * n - s * r - n * t - i * e;
                            return a > -.001 && a < .001
                        }
                        var i = function(t, e, i, r) {
                            var s, n, a, o, h, l, p = defaultCurveSegments,
                                u = 0,
                                c = [],
                                f = [],
                                d = bezierLengthPool.newElement();
                            for (a = i.length, s = 0; s < p; s += 1) {
                                for (h = s / (p - 1), l = 0, n = 0; n < a; n += 1) o = bmPow(1 - h, 3) * t[n] + 3 * bmPow(1 - h, 2) * h * i[n] + 3 * (1 - h) * bmPow(h, 2) * r[n] + bmPow(h, 3) * e[n], c[n] = o, null !== f[n] && (l += bmPow(c[n] - f[n], 2)), f[n] = c[n];
                                l && (u += l = bmSqrt(l)), d.percents[s] = h, d.lengths[s] = u
                            }
                            return d.addedLength = u, d
                        };

                        function r(t) {
                            this.segmentLength = 0, this.points = new Array(t)
                        }

                        function s(t, e) {
                            this.partialLength = t, this.point = e
                        }
                        var n, a = (n = {}, function(t, i, a, o) {
                            var h = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                            if (!n[h]) {
                                var l, p, u, c, f, d, m, g = defaultCurveSegments,
                                    y = 0,
                                    v = null;
                                2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + a[0], t[1] + a[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (g = 2);
                                var _ = new r(g);
                                for (u = a.length, l = 0; l < g; l += 1) {
                                    for (m = createSizedArray(u), f = l / (g - 1), d = 0, p = 0; p < u; p += 1) c = bmPow(1 - f, 3) * t[p] + 3 * bmPow(1 - f, 2) * f * (t[p] + a[p]) + 3 * (1 - f) * bmPow(f, 2) * (i[p] + o[p]) + bmPow(f, 3) * i[p], m[p] = c, null !== v && (d += bmPow(m[p] - v[p], 2));
                                    y += d = bmSqrt(d), _.points[l] = new s(d, m), v = m
                                }
                                _.segmentLength = y, n[h] = _
                            }
                            return n[h]
                        });

                        function o(t, e) {
                            var i = e.percents,
                                r = e.lengths,
                                s = i.length,
                                n = bmFloor((s - 1) * t),
                                a = t * e.addedLength,
                                o = 0;
                            if (n === s - 1 || 0 === n || a === r[n]) return i[n];
                            for (var h = r[n] > a ? -1 : 1, l = !0; l;)
                                if (r[n] <= a && r[n + 1] > a ? (o = (a - r[n]) / (r[n + 1] - r[n]), l = !1) : n += h, n < 0 || n >= s - 1) {
                                    if (n === s - 1) return i[n];
                                    l = !1
                                }
                            return i[n] + (i[n + 1] - i[n]) * o
                        }
                        var h = createTypedArray("float32", 8);
                        return {
                            getSegmentsLength: function(t) {
                                var e, r = segmentsLengthPool.newElement(),
                                    s = t.c,
                                    n = t.v,
                                    a = t.o,
                                    o = t.i,
                                    h = t._length,
                                    l = r.lengths,
                                    p = 0;
                                for (e = 0; e < h - 1; e += 1) l[e] = i(n[e], n[e + 1], a[e], o[e + 1]), p += l[e].addedLength;
                                return s && h && (l[e] = i(n[e], n[0], a[e], o[0]), p += l[e].addedLength), r.totalLength = p, r
                            },
                            getNewSegment: function(e, i, r, s, n, a, l) {
                                n < 0 ? n = 0 : n > 1 && (n = 1);
                                var p, u = o(n, l),
                                    c = o(a = a > 1 ? 1 : a, l),
                                    f = e.length,
                                    d = 1 - u,
                                    m = 1 - c,
                                    g = d * d * d,
                                    y = u * d * d * 3,
                                    v = u * u * d * 3,
                                    _ = u * u * u,
                                    D = d * d * m,
                                    b = u * d * m + d * u * m + d * d * c,
                                    x = u * u * m + d * u * c + u * d * c,
                                    E = u * u * c,
                                    C = d * m * m,
                                    P = u * m * m + d * c * m + d * m * c,
                                    S = u * c * m + d * c * c + u * m * c,
                                    w = u * c * c,
                                    T = m * m * m,
                                    A = c * m * m + m * c * m + m * m * c,
                                    F = c * c * m + m * c * c + c * m * c,
                                    k = c * c * c;
                                for (p = 0; p < f; p += 1) h[4 * p] = t.round(1e3 * (g * e[p] + y * r[p] + v * s[p] + _ * i[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (D * e[p] + b * r[p] + x * s[p] + E * i[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (C * e[p] + P * r[p] + S * s[p] + w * i[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (T * e[p] + A * r[p] + F * s[p] + k * i[p])) / 1e3;
                                return h
                            },
                            getPointInSegment: function(e, i, r, s, n, a) {
                                var h = o(n, a),
                                    l = 1 - h;
                                return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * r[0] + (h * h * l + l * h * h + h * l * h) * s[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * r[1] + (h * h * l + l * h * h + h * l * h) * s[1] + h * h * h * i[1])) / 1e3]
                            },
                            buildBezierData: a,
                            pointOnLine2D: e,
                            pointOnLine3D: function(i, r, s, n, a, o, h, l, p) {
                                if (0 === s && 0 === o && 0 === p) return e(i, r, n, a, h, l);
                                var u, c = t.sqrt(t.pow(n - i, 2) + t.pow(a - r, 2) + t.pow(o - s, 2)),
                                    f = t.sqrt(t.pow(h - i, 2) + t.pow(l - r, 2) + t.pow(p - s, 2)),
                                    d = t.sqrt(t.pow(h - n, 2) + t.pow(l - a, 2) + t.pow(p - o, 2));
                                return (u = c > f ? c > d ? c - f - d : d - f - c : d > f ? d - f - c : f - c - d) > -1e-4 && u < 1e-4
                            }
                        }
                    }! function() {
                        for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
                        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                            var i = (new Date).getTime(),
                                r = Math.max(0, 16 - (i - t)),
                                s = setTimeout((function() {
                                    e(i + r)
                                }), r);
                            return t = i + r, s
                        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                            clearTimeout(t)
                        })
                    }();
                    var bez = bezFunction(),
                        dataManager = function() {
                            var t, e, i = 1,
                                r = [],
                                s = {
                                    onmessage: function() {},
                                    postMessage: function(e) {
                                        t({
                                            data: e
                                        })
                                    }
                                },
                                n = {
                                    postMessage: function(t) {
                                        s.onmessage({
                                            data: t
                                        })
                                    }
                                };

                            function a() {
                                e || (e = function(e) {
                                    if (window.Worker && window.Blob && _useWebWorker) {
                                        var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                                type: "text/javascript"
                                            }),
                                            r = URL.createObjectURL(i);
                                        return new Worker(r)
                                    }
                                    return t = e, s
                                }((function(t) {
                                    if (n.dataManager || (n.dataManager = function() {
                                            function t(s, n) {
                                                var a, o, h, l, p, c, f = s.length;
                                                for (o = 0; o < f; o += 1)
                                                    if ("ks" in (a = s[o]) && !a.completed) {
                                                        if (a.completed = !0, a.tt && (s[o - 1].td = a.tt), a.hasMask) {
                                                            var d = a.masksProperties;
                                                            for (l = d.length, h = 0; h < l; h += 1)
                                                                if (d[h].pt.k.i) r(d[h].pt.k);
                                                                else
                                                                    for (c = d[h].pt.k.length, p = 0; p < c; p += 1) d[h].pt.k[p].s && r(d[h].pt.k[p].s[0]), d[h].pt.k[p].e && r(d[h].pt.k[p].e[0])
                                                        }
                                                        0 === a.ty ? (a.layers = e(a.refId, n), t(a.layers, n)) : 4 === a.ty ? i(a.shapes) : 5 === a.ty && u(a)
                                                    }
                                            }

                                            function e(t, e) {
                                                for (var i = 0, r = e.length; i < r;) {
                                                    if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
                                                    i += 1
                                                }
                                                return null
                                            }

                                            function i(t) {
                                                var e, s, n;
                                                for (e = t.length - 1; e >= 0; e -= 1)
                                                    if ("sh" === t[e].ty)
                                                        if (t[e].ks.k.i) r(t[e].ks.k);
                                                        else
                                                            for (n = t[e].ks.k.length, s = 0; s < n; s += 1) t[e].ks.k[s].s && r(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && r(t[e].ks.k[s].e[0]);
                                                else "gr" === t[e].ty && i(t[e].it)
                                            }

                                            function r(t) {
                                                var e, i = t.i.length;
                                                for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                                            }

                                            function s(t, e) {
                                                var i = e ? e.split(".") : [100, 100, 100];
                                                return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                                            }
                                            var n, a = function() {
                                                    var t = [4, 4, 14];

                                                    function e(t) {
                                                        var e, i, r, s = t.length;
                                                        for (e = 0; e < s; e += 1) 5 === t[e].ty && (r = void 0, r = (i = t[e]).t.d, i.t.d = {
                                                            k: [{
                                                                s: r,
                                                                t: 0
                                                            }]
                                                        })
                                                    }
                                                    return function(i) {
                                                        if (s(t, i.v) && (e(i.layers), i.assets)) {
                                                            var r, n = i.assets.length;
                                                            for (r = 0; r < n; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                                                        }
                                                    }
                                                }(),
                                                o = (n = [4, 7, 99], function(t) {
                                                    if (t.chars && !s(n, t.v)) {
                                                        var e, i, a, o, h, l = t.chars.length;
                                                        for (e = 0; e < l; e += 1)
                                                            if (t.chars[e].data && t.chars[e].data.shapes)
                                                                for (a = (h = t.chars[e].data.shapes[0].it).length, i = 0; i < a; i += 1)(o = h[i].ks.k).__converted || (r(h[i].ks.k), o.__converted = !0)
                                                    }
                                                }),
                                                h = function() {
                                                    var t = [5, 7, 15];

                                                    function e(t) {
                                                        var e, i, r = t.length;
                                                        for (e = 0; e < r; e += 1) 5 === t[e].ty && (i = void 0, "number" == typeof(i = t[e].t.p).a && (i.a = {
                                                            a: 0,
                                                            k: i.a
                                                        }), "number" == typeof i.p && (i.p = {
                                                            a: 0,
                                                            k: i.p
                                                        }), "number" == typeof i.r && (i.r = {
                                                            a: 0,
                                                            k: i.r
                                                        }))
                                                    }
                                                    return function(i) {
                                                        if (s(t, i.v) && (e(i.layers), i.assets)) {
                                                            var r, n = i.assets.length;
                                                            for (r = 0; r < n; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                                                        }
                                                    }
                                                }(),
                                                l = function() {
                                                    var t = [4, 1, 9];

                                                    function e(t) {
                                                        var i, r, s, n = t.length;
                                                        for (i = 0; i < n; i += 1)
                                                            if ("gr" === t[i].ty) e(t[i].it);
                                                            else if ("fl" === t[i].ty || "st" === t[i].ty)
                                                            if (t[i].c.k && t[i].c.k[0].i)
                                                                for (s = t[i].c.k.length, r = 0; r < s; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                                                            else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                                                    }

                                                    function i(t) {
                                                        var i, r = t.length;
                                                        for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes)
                                                    }
                                                    return function(e) {
                                                        if (s(t, e.v) && (i(e.layers), e.assets)) {
                                                            var r, n = e.assets.length;
                                                            for (r = 0; r < n; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                                                        }
                                                    }
                                                }(),
                                                p = function() {
                                                    var t = [4, 4, 18];

                                                    function e(t) {
                                                        var i, r, s;
                                                        for (i = t.length - 1; i >= 0; i -= 1)
                                                            if ("sh" === t[i].ty)
                                                                if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                                                else
                                                                    for (s = t[i].ks.k.length, r = 0; r < s; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                                                        else "gr" === t[i].ty && e(t[i].it)
                                                    }

                                                    function i(t) {
                                                        var i, r, s, n, a, o, h = t.length;
                                                        for (r = 0; r < h; r += 1) {
                                                            if ((i = t[r]).hasMask) {
                                                                var l = i.masksProperties;
                                                                for (n = l.length, s = 0; s < n; s += 1)
                                                                    if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl;
                                                                    else
                                                                        for (o = l[s].pt.k.length, a = 0; a < o; a += 1) l[s].pt.k[a].s && (l[s].pt.k[a].s[0].c = l[s].cl), l[s].pt.k[a].e && (l[s].pt.k[a].e[0].c = l[s].cl)
                                                            }
                                                            4 === i.ty && e(i.shapes)
                                                        }
                                                    }
                                                    return function(e) {
                                                        if (s(t, e.v) && (i(e.layers), e.assets)) {
                                                            var r, n = e.assets.length;
                                                            for (r = 0; r < n; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                                                        }
                                                    }
                                                }();

                                            function u(t) {
                                                0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
                                            }
                                            var c = {
                                                completeData: function(e) {
                                                    e.__complete || (l(e), a(e), o(e), h(e), p(e), t(e.layers, e.assets), e.__complete = !0)
                                                }
                                            };
                                            return c.checkColors = l, c.checkChars = o, c.checkPathProperties = h, c.checkShapes = p, c.completeLayers = t, c
                                        }()), n.assetLoader || (n.assetLoader = function() {
                                            function t(t) {
                                                var e = t.getResponseHeader("content-type");
                                                return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                            }
                                            return {
                                                load: function(e, i, r, s) {
                                                    var n, a = new XMLHttpRequest;
                                                    try {
                                                        a.responseType = "json"
                                                    } catch (t) {}
                                                    a.onreadystatechange = function() {
                                                        if (4 === a.readyState)
                                                            if (200 === a.status) n = t(a), r(n);
                                                            else try {
                                                                n = t(a), r(n)
                                                            } catch (t) {
                                                                s && s(t)
                                                            }
                                                    };
                                                    try {
                                                        a.open("GET", e, !0)
                                                    } catch (t) {
                                                        a.open("GET", i + "/" + e, !0)
                                                    }
                                                    a.send()
                                                }
                                            }
                                        }()), "loadAnimation" === t.data.type) n.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                        n.dataManager.completeData(e), n.postMessage({
                                            id: t.data.id,
                                            payload: e,
                                            status: "success"
                                        })
                                    }), (function() {
                                        n.postMessage({
                                            id: t.data.id,
                                            status: "error"
                                        })
                                    }));
                                    else if ("complete" === t.data.type) {
                                        var e = t.data.animation;
                                        n.dataManager.completeData(e), n.postMessage({
                                            id: t.data.id,
                                            payload: e,
                                            status: "success"
                                        })
                                    } else "loadData" === t.data.type && n.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                        n.postMessage({
                                            id: t.data.id,
                                            payload: e,
                                            status: "success"
                                        })
                                    }), (function() {
                                        n.postMessage({
                                            id: t.data.id,
                                            status: "error"
                                        })
                                    }))
                                })), e.onmessage = function(t) {
                                    var e = t.data,
                                        i = e.id,
                                        s = r[i];
                                    r[i] = null, "success" === e.status ? s.onComplete(e.payload) : s.onError && s.onError()
                                })
                            }

                            function o(t, e) {
                                var s = "processId_" + (i += 1);
                                return r[s] = {
                                    onComplete: t,
                                    onError: e
                                }, s
                            }
                            return {
                                loadAnimation: function(t, i, r) {
                                    a();
                                    var s = o(i, r);
                                    e.postMessage({
                                        type: "loadAnimation",
                                        path: t,
                                        fullPath: window.location.origin + window.location.pathname,
                                        id: s
                                    })
                                },
                                loadData: function(t, i, r) {
                                    a();
                                    var s = o(i, r);
                                    e.postMessage({
                                        type: "loadData",
                                        path: t,
                                        fullPath: window.location.origin + window.location.pathname,
                                        id: s
                                    })
                                },
                                completeAnimation: function(t, i, r) {
                                    a();
                                    var s = o(i, r);
                                    e.postMessage({
                                        type: "complete",
                                        animation: t,
                                        id: s
                                    })
                                }
                            }
                        }();

                    function getFontProperties(t) {
                        for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", s = e.length, n = 0; n < s; n += 1) switch (e[n].toLowerCase()) {
                            case "italic":
                                r = "italic";
                                break;
                            case "bold":
                                i = "700";
                                break;
                            case "black":
                                i = "900";
                                break;
                            case "medium":
                                i = "500";
                                break;
                            case "regular":
                            case "normal":
                                i = "400";
                                break;
                            case "light":
                            case "thin":
                                i = "200"
                        }
                        return {
                            style: r,
                            weight: t.fWeight || i
                        }
                    }
                    var FontManager = function() {
                            var t = {
                                    w: 0,
                                    size: 0,
                                    shapes: []
                                },
                                e = [];
                            e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                            var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                                r = [65039, 8205];

                            function s(t, e) {
                                var i = createTag("span");
                                i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                                var r = createTag("span");
                                r.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
                                var s = r.offsetWidth;
                                return r.style.fontFamily = function(t) {
                                    var e, i = t.split(","),
                                        r = i.length,
                                        s = [];
                                    for (e = 0; e < r; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && s.push(i[e]);
                                    return s.join(",")
                                }(t) + ", " + e, {
                                    node: r,
                                    w: s,
                                    parent: i
                                }
                            }

                            function n(t, e) {
                                var i = createNS("text");
                                i.style.fontSize = "100px";
                                var r = getFontProperties(e);
                                return i.setAttribute("font-family", e.fFamily), i.setAttribute("font-style", r.style), i.setAttribute("font-weight", r.weight), i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily, t.appendChild(i), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, i
                            }
                            var a = function() {
                                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                            };
                            a.isModifier = function(t, e) {
                                var r = t.toString(16) + e.toString(16);
                                return -1 !== i.indexOf(r)
                            }, a.isZeroWidthJoiner = function(t, e) {
                                return e ? t === r[0] && e === r[1] : t === r[1]
                            }, a.isCombinedCharacter = function(t) {
                                return -1 !== e.indexOf(t)
                            };
                            var o = {
                                addChars: function(t) {
                                    if (t) {
                                        var e;
                                        this.chars || (this.chars = []);
                                        var i, r, s = t.length,
                                            n = this.chars.length;
                                        for (e = 0; e < s; e += 1) {
                                            for (i = 0, r = !1; i < n;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
                                            r || (this.chars.push(t[e]), n += 1)
                                        }
                                    }
                                },
                                addFonts: function(t, e) {
                                    if (t) {
                                        if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                                        var i, r = t.list,
                                            a = r.length,
                                            o = a;
                                        for (i = 0; i < a; i += 1) {
                                            var h, l, p = !0;
                                            if (r[i].loaded = !1, r[i].monoCase = s(r[i].fFamily, "monospace"), r[i].sansCase = s(r[i].fFamily, "sans-serif"), r[i].fPath) {
                                                if ("p" === r[i].fOrigin || 3 === r[i].origin) {
                                                    if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                        var u = createTag("style");
                                                        u.setAttribute("f-forigin", r[i].fOrigin), u.setAttribute("f-origin", r[i].origin), u.setAttribute("f-family", r[i].fFamily), u.type = "text/css", u.innerText = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}", e.appendChild(u)
                                                    }
                                                } else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
                                                    for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(r[i].fPath) && (p = !1);
                                                    if (p) {
                                                        var c = createTag("link");
                                                        c.setAttribute("f-forigin", r[i].fOrigin), c.setAttribute("f-origin", r[i].origin), c.type = "text/css", c.rel = "stylesheet", c.href = r[i].fPath, document.body.appendChild(c)
                                                    }
                                                } else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
                                                    for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) r[i].fPath === h[l].src && (p = !1);
                                                    if (p) {
                                                        var f = createTag("link");
                                                        f.setAttribute("f-forigin", r[i].fOrigin), f.setAttribute("f-origin", r[i].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", r[i].fPath), e.appendChild(f)
                                                    }
                                                }
                                            } else r[i].loaded = !0, o -= 1;
                                            r[i].helper = n(e, r[i]), r[i].cache = {}, this.fonts.push(r[i])
                                        }
                                        0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                                    } else this.isLoaded = !0
                                },
                                getCharData: function(e, i, r) {
                                    for (var s = 0, n = this.chars.length; s < n;) {
                                        if (this.chars[s].ch === e && this.chars[s].style === i && this.chars[s].fFamily === r) return this.chars[s];
                                        s += 1
                                    }
                                    return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, r)), t
                                },
                                getFontByName: function(t) {
                                    for (var e = 0, i = this.fonts.length; e < i;) {
                                        if (this.fonts[e].fName === t) return this.fonts[e];
                                        e += 1
                                    }
                                    return this.fonts[0]
                                },
                                measureText: function(t, e, i) {
                                    var r = this.getFontByName(e),
                                        s = t.charCodeAt(0);
                                    if (!r.cache[s + 1]) {
                                        var n = r.helper;
                                        if (" " === t) {
                                            n.textContent = "|" + t + "|";
                                            var a = n.getComputedTextLength();
                                            n.textContent = "||";
                                            var o = n.getComputedTextLength();
                                            r.cache[s + 1] = (a - o) / 100
                                        } else n.textContent = t, r.cache[s + 1] = n.getComputedTextLength() / 100
                                    }
                                    return r.cache[s + 1] * i
                                },
                                checkLoadedFonts: function() {
                                    var t, e, i, r = this.fonts.length,
                                        s = r;
                                    for (t = 0; t < r; t += 1) this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                                    0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                                },
                                setIsLoaded: function() {
                                    this.isLoaded = !0
                                }
                            };
                            return a.prototype = o, a
                        }(),
                        PropertyFactory = function() {
                            var t = initialDefaultFrame,
                                e = Math.abs;

                            function i(t, e) {
                                var i, s = this.offsetTime;
                                "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                                for (var n, a, o, h, l, p, u, c, f, d = e.lastIndex, m = d, g = this.keyframes.length - 1, y = !0; y;) {
                                    if (n = this.keyframes[m], a = this.keyframes[m + 1], m === g - 1 && t >= a.t - s) {
                                        n.h && (n = a), d = 0;
                                        break
                                    }
                                    if (a.t - s > t) {
                                        d = m;
                                        break
                                    }
                                    m < g - 1 ? m += 1 : (d = 0, y = !1)
                                }
                                o = this.keyframesMetadata[m] || {};
                                var v, _, D, b, x, E, C, P, S, w, T = a.t - s,
                                    A = n.t - s;
                                if (n.to) {
                                    o.bezierData || (o.bezierData = bez.buildBezierData(n.s, a.s || n.e, n.to, n.ti));
                                    var F = o.bezierData;
                                    if (t >= T || t < A) {
                                        var k = t >= T ? F.points.length - 1 : 0;
                                        for (l = F.points[k].point.length, h = 0; h < l; h += 1) i[h] = F.points[k].point[h]
                                    } else {
                                        o.__fnct ? f = o.__fnct : (f = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, o.__fnct = f), p = f((t - A) / (T - A));
                                        var M, I = F.segmentLength * p,
                                            B = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                                        for (c = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, y = !0, u = F.points.length; y;) {
                                            if (B += F.points[c].partialLength, 0 === I || 0 === p || c === F.points.length - 1) {
                                                for (l = F.points[c].point.length, h = 0; h < l; h += 1) i[h] = F.points[c].point[h];
                                                break
                                            }
                                            if (I >= B && I < B + F.points[c + 1].partialLength) {
                                                for (M = (I - B) / F.points[c + 1].partialLength, l = F.points[c].point.length, h = 0; h < l; h += 1) i[h] = F.points[c].point[h] + (F.points[c + 1].point[h] - F.points[c].point[h]) * M;
                                                break
                                            }
                                            c < u - 1 ? c += 1 : y = !1
                                        }
                                        e._lastPoint = c, e._lastAddedLength = B - F.points[c].partialLength, e._lastKeyframeIndex = m
                                    }
                                } else {
                                    var O, R, L, V, z;
                                    if (g = n.s.length, v = a.s || n.e, this.sh && 1 !== n.h)
                                        if (t >= T) i[0] = v[0], i[1] = v[1], i[2] = v[2];
                                        else if (t <= A) i[0] = n.s[0], i[1] = n.s[1], i[2] = n.s[2];
                                    else {
                                        var N = r(n.s),
                                            G = r(v);
                                        _ = i, D = function(t, e, i) {
                                            var r, s, n, a, o, h = [],
                                                l = t[0],
                                                p = t[1],
                                                u = t[2],
                                                c = t[3],
                                                f = e[0],
                                                d = e[1],
                                                m = e[2],
                                                g = e[3];
                                            return (s = l * f + p * d + u * m + c * g) < 0 && (s = -s, f = -f, d = -d, m = -m, g = -g), 1 - s > 1e-6 ? (r = Math.acos(s), n = Math.sin(r), a = Math.sin((1 - i) * r) / n, o = Math.sin(i * r) / n) : (a = 1 - i, o = i), h[0] = a * l + o * f, h[1] = a * p + o * d, h[2] = a * u + o * m, h[3] = a * c + o * g, h
                                        }(N, G, (t - A) / (T - A)), b = D[0], x = D[1], E = D[2], C = D[3], P = Math.atan2(2 * x * C - 2 * b * E, 1 - 2 * x * x - 2 * E * E), S = Math.asin(2 * b * x + 2 * E * C), w = Math.atan2(2 * b * C - 2 * x * E, 1 - 2 * b * b - 2 * E * E), _[0] = P / degToRads, _[1] = S / degToRads, _[2] = w / degToRads
                                    } else
                                        for (m = 0; m < g; m += 1) 1 !== n.h && (t >= T ? p = 1 : t < A ? p = 0 : (n.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []), o.__fnct[m] ? f = o.__fnct[m] : (O = void 0 === n.o.x[m] ? n.o.x[0] : n.o.x[m], R = void 0 === n.o.y[m] ? n.o.y[0] : n.o.y[m], L = void 0 === n.i.x[m] ? n.i.x[0] : n.i.x[m], V = void 0 === n.i.y[m] ? n.i.y[0] : n.i.y[m], f = BezierFactory.getBezierEasing(O, R, L, V).get, o.__fnct[m] = f)) : o.__fnct ? f = o.__fnct : (O = n.o.x, R = n.o.y, L = n.i.x, V = n.i.y, f = BezierFactory.getBezierEasing(O, R, L, V).get, n.keyframeMetadata = f), p = f((t - A) / (T - A)))), v = a.s || n.e, z = 1 === n.h ? n.s[m] : n.s[m] + (v[m] - n.s[m]) * p, "multidimensional" === this.propType ? i[m] = z : i = z
                                }
                                return e.lastIndex = d, i
                            }

                            function r(t) {
                                var e = t[0] * degToRads,
                                    i = t[1] * degToRads,
                                    r = t[2] * degToRads,
                                    s = Math.cos(e / 2),
                                    n = Math.cos(i / 2),
                                    a = Math.cos(r / 2),
                                    o = Math.sin(e / 2),
                                    h = Math.sin(i / 2),
                                    l = Math.sin(r / 2);
                                return [o * h * a + s * n * l, o * n * a + s * h * l, s * h * a - o * n * l, s * n * a - o * h * l]
                            }

                            function s() {
                                var e = this.comp.renderedFrame - this.offsetTime,
                                    i = this.keyframes[0].t - this.offsetTime,
                                    r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                                if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < i && e < i))) {
                                    this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                    var s = this.interpolateValue(e, this._caching);
                                    this.pv = s
                                }
                                return this._caching.lastFrame = e, this.pv
                            }

                            function n(t) {
                                var i;
                                if ("unidimensional" === this.propType) i = t * this.mult, e(this.v - i) > 1e-5 && (this.v = i, this._mdf = !0);
                                else
                                    for (var r = 0, s = this.v.length; r < s;) i = t[r] * this.mult, e(this.v[r] - i) > 1e-5 && (this.v[r] = i, this._mdf = !0), r += 1
                            }

                            function a() {
                                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        var t;
                                        this.lock = !0, this._mdf = this._isFirstFrame;
                                        var e = this.effectsSequence.length,
                                            i = this.kf ? this.pv : this.data.k;
                                        for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                                        this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    }
                            }

                            function o(t) {
                                this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                            }

                            function h(t, e, i, r) {
                                this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = a, this.setVValue = n, this.addEffect = o
                            }

                            function l(t, e, i, r) {
                                var s;
                                this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                                var h = e.k.length;
                                for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), this.vel = createTypedArray("float32", h), s = 0; s < h; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
                                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = a, this.setVValue = n, this.addEffect = o
                            }

                            function p(e, r, h, l) {
                                this.propType = "unidimensional", this.keyframes = r.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                                    lastFrame: t,
                                    lastIndex: 0,
                                    value: 0,
                                    _lastKeyframeIndex: -1
                                }, this.k = !0, this.kf = !0, this.data = r, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = a, this.setVValue = n, this.interpolateValue = i, this.effectsSequence = [s.bind(this)], this.addEffect = o
                            }

                            function u(e, r, h, l) {
                                var p;
                                this.propType = "multidimensional";
                                var u, c, f, d, m = r.k.length;
                                for (p = 0; p < m - 1; p += 1) r.k[p].to && r.k[p].s && r.k[p + 1] && r.k[p + 1].s && (u = r.k[p].s, c = r.k[p + 1].s, f = r.k[p].to, d = r.k[p].ti, (2 === u.length && (u[0] !== c[0] || u[1] !== c[1]) && bez.pointOnLine2D(u[0], u[1], c[0], c[1], u[0] + f[0], u[1] + f[1]) && bez.pointOnLine2D(u[0], u[1], c[0], c[1], c[0] + d[0], c[1] + d[1]) || 3 === u.length && (u[0] !== c[0] || u[1] !== c[1] || u[2] !== c[2]) && bez.pointOnLine3D(u[0], u[1], u[2], c[0], c[1], c[2], u[0] + f[0], u[1] + f[1], u[2] + f[2]) && bez.pointOnLine3D(u[0], u[1], u[2], c[0], c[1], c[2], c[0] + d[0], c[1] + d[1], c[2] + d[2])) && (r.k[p].to = null, r.k[p].ti = null), u[0] === c[0] && u[1] === c[1] && 0 === f[0] && 0 === f[1] && 0 === d[0] && 0 === d[1] && (2 === u.length || u[2] === c[2] && 0 === f[2] && 0 === d[2]) && (r.k[p].to = null, r.k[p].ti = null));
                                this.effectsSequence = [s.bind(this)], this.data = r, this.keyframes = r.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = a, this.setVValue = n, this.interpolateValue = i, this.frameId = -1;
                                var g = r.k[0].s.length;
                                for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), p = 0; p < g; p += 1) this.v[p] = t, this.pv[p] = t;
                                this._caching = {
                                    lastFrame: t,
                                    lastIndex: 0,
                                    value: createTypedArray("float32", g)
                                }, this.addEffect = o
                            }
                            return {
                                getProp: function(t, e, i, r, s) {
                                    var n;
                                    if (e.k.length)
                                        if ("number" == typeof e.k[0]) n = new l(t, e, r, s);
                                        else switch (i) {
                                            case 0:
                                                n = new p(t, e, r, s);
                                                break;
                                            case 1:
                                                n = new u(t, e, r, s)
                                        } else n = new h(t, e, r, s);
                                    return n.effectsSequence.length && s.addDynamicProperty(n), n
                                }
                            }
                        }(),
                        TransformPropertyFactory = function() {
                            var t = [0, 0];

                            function e(t, e, i) {
                                if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                                        k: [0, 0, 0]
                                    }, 1, 0, this), e.rx) {
                                    if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                                        var r, s = e.or.k.length;
                                        for (r = 0; r < s; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null
                                    }
                                    this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                                } else this.r = PropertyFactory.getProp(t, e.r || {
                                    k: 0
                                }, 0, degToRads, this);
                                e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                                    k: [100, 100, 100]
                                }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                                    _mdf: !1,
                                    v: 1
                                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                            }
                            return e.prototype = {
                                applyToMatrix: function(t) {
                                    var e = this._mdf;
                                    this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                },
                                getValue: function(e) {
                                    if (this.elem.globalData.frameId !== this.frameId) {
                                        if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                            var i;
                                            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                                var r, s;
                                                if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                                else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                    r = [], s = [];
                                                    var n = this.px,
                                                        a = this.py;
                                                    n._caching.lastFrame + n.offsetTime <= n.keyframes[0].t ? (r[0] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), s[0] = n.getValueAtTime(n.keyframes[0].t / i, 0), s[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : n._caching.lastFrame + n.offsetTime >= n.keyframes[n.keyframes.length - 1].t ? (r[0] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), s[0] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0), s[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (r = [n.pv, a.pv], s[0] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime), s[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                                                } else r = s = t;
                                                this.v.rotate(-Math.atan2(r[1] - s[1], r[0] - s[0]))
                                            }
                                            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                        }
                                        this.frameId = this.elem.globalData.frameId
                                    }
                                },
                                precalculateMatrix: function() {
                                    if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                        }
                                        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                    }
                                },
                                autoOrient: function() {}
                            }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                                this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                            }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                                getTransformProperty: function(t, i, r) {
                                    return new e(t, i, r)
                                }
                            }
                        }();

                    function ShapePath() {
                        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                    }
                    ShapePath.prototype.setPathData = function(t, e) {
                        this.c = t, this.setLength(e);
                        for (var i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
                    }, ShapePath.prototype.setLength = function(t) {
                        for (; this._maxLength < t;) this.doubleArrayLength();
                        this._length = t
                    }, ShapePath.prototype.doubleArrayLength = function() {
                        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                    }, ShapePath.prototype.setXYAt = function(t, e, i, r, s) {
                        var n;
                        switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                            case "v":
                                n = this.v;
                                break;
                            case "i":
                                n = this.i;
                                break;
                            case "o":
                                n = this.o;
                                break;
                            default:
                                n = []
                        }(!n[r] || n[r] && !s) && (n[r] = pointPool.newElement()), n[r][0] = t, n[r][1] = e
                    }, ShapePath.prototype.setTripleAt = function(t, e, i, r, s, n, a, o) {
                        this.setXYAt(t, e, "v", a, o), this.setXYAt(i, r, "o", a, o), this.setXYAt(s, n, "i", a, o)
                    }, ShapePath.prototype.reverse = function() {
                        var t = new ShapePath;
                        t.setPathData(this.c, this._length);
                        var e = this.v,
                            i = this.o,
                            r = this.i,
                            s = 0;
                        this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), s = 1);
                        var n, a = this._length - 1,
                            o = this._length;
                        for (n = s; n < o; n += 1) t.setTripleAt(e[a][0], e[a][1], r[a][0], r[a][1], i[a][0], i[a][1], n, !1), a -= 1;
                        return t
                    };
                    var ShapePropertyFactory = function() {
                            var t = -999999;

                            function e(t, e, i) {
                                var r, s, n, a, o, h, l, p, u, c = i.lastIndex,
                                    f = this.keyframes;
                                if (t < f[0].t - this.offsetTime) r = f[0].s[0], n = !0, c = 0;
                                else if (t >= f[f.length - 1].t - this.offsetTime) r = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], n = !0;
                                else {
                                    for (var d, m, g, y = c, v = f.length - 1, _ = !0; _ && (d = f[y], !((m = f[y + 1]).t - this.offsetTime > t));) y < v - 1 ? y += 1 : _ = !1;
                                    if (g = this.keyframesMetadata[y] || {}, c = y, !(n = 1 === d.h)) {
                                        if (t >= m.t - this.offsetTime) p = 1;
                                        else if (t < d.t - this.offsetTime) p = 0;
                                        else {
                                            var D;
                                            g.__fnct ? D = g.__fnct : (D = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, g.__fnct = D), p = D((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                                        }
                                        s = m.s ? m.s[0] : d.e[0]
                                    }
                                    r = d.s[0]
                                }
                                for (h = e._length, l = r.i[0].length, i.lastIndex = c, a = 0; a < h; a += 1)
                                    for (o = 0; o < l; o += 1) u = n ? r.i[a][o] : r.i[a][o] + (s.i[a][o] - r.i[a][o]) * p, e.i[a][o] = u, u = n ? r.o[a][o] : r.o[a][o] + (s.o[a][o] - r.o[a][o]) * p, e.o[a][o] = u, u = n ? r.v[a][o] : r.v[a][o] + (s.v[a][o] - r.v[a][o]) * p, e.v[a][o] = u
                            }

                            function i() {
                                var e = this.comp.renderedFrame - this.offsetTime,
                                    i = this.keyframes[0].t - this.offsetTime,
                                    r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                    s = this._caching.lastFrame;
                                return s !== t && (s < i && e < i || s > r && e > r) || (this._caching.lastIndex = s < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                            }

                            function r() {
                                this.paths = this.localShapeCollection
                            }

                            function s(t) {
                                (function(t, e) {
                                    if (t._length !== e._length || t.c !== e.c) return !1;
                                    var i, r = t._length;
                                    for (i = 0; i < r; i += 1)
                                        if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                                    return !0
                                })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                            }

                            function n() {
                                if (this.elem.globalData.frameId !== this.frameId)
                                    if (this.effectsSequence.length)
                                        if (this.lock) this.setVValue(this.pv);
                                        else {
                                            var t, e;
                                            this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                            var i = this.effectsSequence.length;
                                            for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                                            this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                        }
                                else this._mdf = !1
                            }

                            function a(t, e, i) {
                                this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                                var s = 3 === i ? e.pt.k : e.ks.k;
                                this.v = shapePool.clone(s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
                            }

                            function o(t) {
                                this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                            }

                            function h(e, s, n) {
                                this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === n ? s.pt.k : s.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                                var a = this.keyframes[0].s[0].i.length;
                                this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
                                    lastFrame: t,
                                    lastIndex: 0
                                }, this.effectsSequence = [i.bind(this)]
                            }
                            a.prototype.interpolateShape = e, a.prototype.getValue = n, a.prototype.setVValue = s, a.prototype.addEffect = o, h.prototype.getValue = n, h.prototype.interpolateShape = e, h.prototype.setVValue = s, h.prototype.addEffect = o;
                            var l = function() {
                                    var t = roundCorner;

                                    function e(t, e) {
                                        this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                    }
                                    return e.prototype = {
                                        reset: r,
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                        },
                                        convertEllToPath: function() {
                                            var e = this.p.v[0],
                                                i = this.p.v[1],
                                                r = this.s.v[0] / 2,
                                                s = this.s.v[1] / 2,
                                                n = 3 !== this.d,
                                                a = this.v;
                                            a.v[0][0] = e, a.v[0][1] = i - s, a.v[1][0] = n ? e + r : e - r, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + s, a.v[3][0] = n ? e - r : e + r, a.v[3][1] = i, a.i[0][0] = n ? e - r * t : e + r * t, a.i[0][1] = i - s, a.i[1][0] = n ? e + r : e - r, a.i[1][1] = i - s * t, a.i[2][0] = n ? e + r * t : e - r * t, a.i[2][1] = i + s, a.i[3][0] = n ? e - r : e + r, a.i[3][1] = i + s * t, a.o[0][0] = n ? e + r * t : e - r * t, a.o[0][1] = i - s, a.o[1][0] = n ? e + r : e - r, a.o[1][1] = i + s * t, a.o[2][0] = n ? e - r * t : e + r * t, a.o[2][1] = i + s, a.o[3][0] = n ? e - r : e + r, a.o[3][1] = i - s * t
                                        }
                                    }, extendPrototype([DynamicPropertyContainer], e), e
                                }(),
                                p = function() {
                                    function t(t, e) {
                                        this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                    }
                                    return t.prototype = {
                                        reset: r,
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                        },
                                        convertStarToPath: function() {
                                            var t, e, i, r, s = 2 * Math.floor(this.pt.v),
                                                n = 2 * Math.PI / s,
                                                a = !0,
                                                o = this.or.v,
                                                h = this.ir.v,
                                                l = this.os.v,
                                                p = this.is.v,
                                                u = 2 * Math.PI * o / (2 * s),
                                                c = 2 * Math.PI * h / (2 * s),
                                                f = -Math.PI / 2;
                                            f += this.r.v;
                                            var d = 3 === this.data.d ? -1 : 1;
                                            for (this.v._length = 0, t = 0; t < s; t += 1) {
                                                i = a ? l : p, r = a ? u : c;
                                                var m = (e = a ? o : h) * Math.cos(f),
                                                    g = e * Math.sin(f),
                                                    y = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                                                    v = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                                                m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - y * r * i * d, g - v * r * i * d, m + y * r * i * d, g + v * r * i * d, t, !0), a = !a, f += n * d
                                            }
                                        },
                                        convertPolygonToPath: function() {
                                            var t, e = Math.floor(this.pt.v),
                                                i = 2 * Math.PI / e,
                                                r = this.or.v,
                                                s = this.os.v,
                                                n = 2 * Math.PI * r / (4 * e),
                                                a = .5 * -Math.PI,
                                                o = 3 === this.data.d ? -1 : 1;
                                            for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                                var h = r * Math.cos(a),
                                                    l = r * Math.sin(a),
                                                    p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                                    u = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                                h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * n * s * o, l - u * n * s * o, h + p * n * s * o, l + u * n * s * o, t, !0), a += i * o
                                            }
                                            this.paths.length = 0, this.paths[0] = this.v
                                        }
                                    }, extendPrototype([DynamicPropertyContainer], t), t
                                }(),
                                u = function() {
                                    function t(t, e) {
                                        this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                    }
                                    return t.prototype = {
                                        convertRectToPath: function() {
                                            var t = this.p.v[0],
                                                e = this.p.v[1],
                                                i = this.s.v[0] / 2,
                                                r = this.s.v[1] / 2,
                                                s = bmMin(i, r, this.r.v),
                                                n = s * (1 - roundCorner);
                                            this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + s, t + i, e - r + n, 0, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - n, t + i, e + r - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e + r, t + i - s, e + r, t + i - n, e + r, 2, !0), this.v.setTripleAt(t - i + s, e + r, t - i + n, e + r, t - i + s, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - s, t - i, e + r - n, 4, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + n, t - i, e - r + s, 5, !0), this.v.setTripleAt(t - i + s, e - r, t - i + s, e - r, t - i + n, e - r, 6, !0), this.v.setTripleAt(t + i - s, e - r, t + i - n, e - r, t + i - s, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + n, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + n, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + n, t + i, e - r + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e - r, t + i - s, e - r, t + i - n, e - r, 1, !0), this.v.setTripleAt(t - i + s, e - r, t - i + n, e - r, t - i + s, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + s, t - i, e - r + n, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - n, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i + s, e + r, t - i + s, e + r, t - i + n, e + r, 5, !0), this.v.setTripleAt(t + i - s, e + r, t + i - n, e + r, t + i - s, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - s, t + i, e + r - n, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + n, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - n, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - n, e + r, t + i, e + r, 3, !0)))
                                        },
                                        getValue: function() {
                                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                        },
                                        reset: r
                                    }, extendPrototype([DynamicPropertyContainer], t), t
                                }(),
                                c = {
                                    getShapeProp: function(t, e, i) {
                                        var r;
                                        return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new h(t, e, i) : new a(t, e, i) : 5 === i ? r = new u(t, e) : 6 === i ? r = new l(t, e) : 7 === i && (r = new p(t, e)), r.k && t.addDynamicProperty(r), r
                                    },
                                    getConstructorFunction: function() {
                                        return a
                                    },
                                    getKeyframedConstructorFunction: function() {
                                        return h
                                    }
                                };
                            return c
                        }(),
                        ShapeModifiers = (ob = {}, modifiers = {}, ob.registerModifier = function(t, e) {
                            modifiers[t] || (modifiers[t] = e)
                        }, ob.getModifier = function(t, e, i) {
                            return new modifiers[t](e, i)
                        }, ob),
                        ob, modifiers;

                    function ShapeModifier() {}

                    function TrimModifier() {}

                    function RoundCornersModifier() {}

                    function PuckerAndBloatModifier() {}

                    function RepeaterModifier() {}

                    function ShapeCollection() {
                        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                    }

                    function DashProperty(t, e, i, r) {
                        var s;
                        this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
                        var n, a = e.length || 0;
                        for (s = 0; s < a; s += 1) n = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
                            n: e[s].n,
                            p: n
                        };
                        this.k || this.getValue(!0), this._isAnimated = this.k
                    }

                    function GradientProperty(t, e, i) {
                        this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                        var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                        this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                    }
                    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                        if (!this.closed) {
                            t.sh.container.addDynamicProperty(t.sh);
                            var e = {
                                shape: t.sh,
                                data: t,
                                localShapeCollection: shapeCollectionPool.newShapeCollection()
                            };
                            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                        }
                    }, ShapeModifier.prototype.init = function(t, e) {
                        this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, ShapeModifier.prototype.processKeys = function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                    }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                        this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                    }, TrimModifier.prototype.addShapeToModifier = function(t) {
                        t.pathsData = []
                    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, s) {
                        var n = [];
                        e <= 1 ? n.push({
                            s: t,
                            e
                        }) : t >= 1 ? n.push({
                            s: t - 1,
                            e: e - 1
                        }) : (n.push({
                            s: t,
                            e: 1
                        }), n.push({
                            s: 0,
                            e: e - 1
                        }));
                        var a, o, h = [],
                            l = n.length;
                        for (a = 0; a < l; a += 1) {
                            var p, u;
                            (o = n[a]).e * s < r || o.s * s > r + i || (p = o.s * s <= r ? 0 : (o.s * s - r) / i, u = o.e * s >= r + i ? 1 : (o.e * s - r) / i, h.push([p, u]))
                        }
                        return h.length || h.push([0, 0]), h
                    }, TrimModifier.prototype.releasePathsData = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
                        return t.length = 0, t
                    }, TrimModifier.prototype.processShapes = function(t) {
                        var e, i, r, s;
                        if (this._mdf || t) {
                            var n = this.o.v % 360 / 360;
                            if (n < 0 && (n += 1), (e = this.s.v > 1 ? 1 + n : this.s.v < 0 ? 0 + n : this.s.v + n) > (i = this.e.v > 1 ? 1 + n : this.e.v < 0 ? 0 + n : this.e.v + n)) {
                                var a = e;
                                e = i, i = a
                            }
                            e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
                        } else e = this.sValue, i = this.eValue;
                        var o, h, l, p, u, c = this.shapes.length,
                            f = 0;
                        if (i === e)
                            for (s = 0; s < c; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
                        else if (1 === i && 0 === e || 0 === i && 1 === e) {
                            if (this._mdf)
                                for (s = 0; s < c; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
                        } else {
                            var d, m, g = [];
                            for (s = 0; s < c; s += 1)
                                if ((d = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
                                    if (h = (r = d.shape.paths)._length, u = 0, !d.shape._mdf && d.pathsData.length) u = d.totalShapeLength;
                                    else {
                                        for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(r.shapes[o]), l.push(p), u += p.totalLength;
                                        d.totalShapeLength = u, d.pathsData = l
                                    }
                                    f += u, d.shape._mdf = !0
                                } else d.shape.paths = d.localShapeCollection;
                            var y, v = e,
                                _ = i,
                                D = 0;
                            for (s = c - 1; s >= 0; s -= 1)
                                if ((d = this.shapes[s]).shape._mdf) {
                                    for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (y = this.calculateShapeEdges(e, i, d.totalShapeLength, D, f), D += d.totalShapeLength) : y = [
                                            [v, _]
                                        ], h = y.length, o = 0; o < h; o += 1) {
                                        v = y[o][0], _ = y[o][1], g.length = 0, _ <= 1 ? g.push({
                                            s: d.totalShapeLength * v,
                                            e: d.totalShapeLength * _
                                        }) : v >= 1 ? g.push({
                                            s: d.totalShapeLength * (v - 1),
                                            e: d.totalShapeLength * (_ - 1)
                                        }) : (g.push({
                                            s: d.totalShapeLength * v,
                                            e: d.totalShapeLength
                                        }), g.push({
                                            s: 0,
                                            e: d.totalShapeLength * (_ - 1)
                                        }));
                                        var b = this.addShapes(d, g[0]);
                                        if (g[0].s !== g[0].e) {
                                            if (g.length > 1)
                                                if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                                    var x = b.pop();
                                                    this.addPaths(b, m), b = this.addShapes(d, g[1], x)
                                                } else this.addPaths(b, m), b = this.addShapes(d, g[1]);
                                            this.addPaths(b, m)
                                        }
                                    }
                                    d.shape.paths = m
                                }
                        }
                    }, TrimModifier.prototype.addPaths = function(t, e) {
                        var i, r = t.length;
                        for (i = 0; i < r; i += 1) e.addShape(t[i])
                    }, TrimModifier.prototype.addSegment = function(t, e, i, r, s, n, a) {
                        s.setXYAt(e[0], e[1], "o", n), s.setXYAt(i[0], i[1], "i", n + 1), a && s.setXYAt(t[0], t[1], "v", n), s.setXYAt(r[0], r[1], "v", n + 1)
                    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
                        e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
                    }, TrimModifier.prototype.addShapes = function(t, e, i) {
                        var r, s, n, a, o, h, l, p, u = t.pathsData,
                            c = t.shape.paths.shapes,
                            f = t.shape.paths._length,
                            d = 0,
                            m = [],
                            g = !0;
                        for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), m.push(i), r = 0; r < f; r += 1) {
                            for (h = u[r].lengths, i.c = c[r].c, n = c[r].c ? h.length : h.length + 1, s = 1; s < n; s += 1)
                                if (d + (a = h[s - 1]).addedLength < e.s) d += a.addedLength, i.c = !1;
                                else {
                                    if (d > e.e) {
                                        i.c = !1;
                                        break
                                    }
                                    e.s <= d && e.e >= d + a.addedLength ? (this.addSegment(c[r].v[s - 1], c[r].o[s - 1], c[r].i[s], c[r].v[s], i, o, g), g = !1) : (l = bez.getNewSegment(c[r].v[s - 1], c[r].v[s], c[r].o[s - 1], c[r].i[s], (e.s - d) / a.addedLength, (e.e - d) / a.addedLength, h[s - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1), d += a.addedLength, o += 1
                                }
                            if (c[r].c && h.length) {
                                if (a = h[s - 1], d <= e.e) {
                                    var y = h[s - 1].addedLength;
                                    e.s <= d && e.e >= d + y ? (this.addSegment(c[r].v[s - 1], c[r].o[s - 1], c[r].i[0], c[r].v[0], i, o, g), g = !1) : (l = bez.getNewSegment(c[r].v[s - 1], c[r].v[0], c[r].o[s - 1], c[r].i[0], (e.s - d) / y, (e.e - d) / y, h[s - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1)
                                } else i.c = !1;
                                d += a.addedLength, o += 1
                            }
                            if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
                            r < f - 1 && (i = shapePool.newElement(), g = !0, m.push(i), o = 0)
                        }
                        return m
                    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                    }, RoundCornersModifier.prototype.processPath = function(t, e) {
                        var i, r = shapePool.newElement();
                        r.c = t.c;
                        var s, n, a, o, h, l, p, u, c, f, d, m, g = t._length,
                            y = 0;
                        for (i = 0; i < g; i += 1) s = t.v[i], a = t.o[i], n = t.i[i], s[0] === a[0] && s[1] === a[1] && s[0] === n[0] && s[1] === n[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = s[0] + (o[0] - s[0]) * l, u = m = s[1] - (s[1] - o[1]) * l, c = p - (p - s[0]) * roundCorner, f = u - (u - s[1]) * roundCorner, r.setTripleAt(p, u, c, f, d, m, y), y += 1, o = i === g - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = s[0] + (o[0] - s[0]) * l, u = f = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, m = u - (u - s[1]) * roundCorner, r.setTripleAt(p, u, c, f, d, m, y), y += 1) : (r.setTripleAt(s[0], s[1], a[0], a[1], n[0], n[1], y), y += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), y += 1);
                        return r
                    }, RoundCornersModifier.prototype.processShapes = function(t) {
                        var e, i, r, s, n, a, o = this.shapes.length,
                            h = this.rd.v;
                        if (0 !== h)
                            for (i = 0; i < o; i += 1) {
                                if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
                                    for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], h));
                                n.shape.paths = n.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                    }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                        var i = e / 100,
                            r = [0, 0],
                            s = t._length,
                            n = 0;
                        for (n = 0; n < s; n += 1) r[0] += t.v[n][0], r[1] += t.v[n][1];
                        r[0] /= s, r[1] /= s;
                        var a, o, h, l, p, u, c = shapePool.newElement();
                        for (c.c = t.c, n = 0; n < s; n += 1) a = t.v[n][0] + (r[0] - t.v[n][0]) * i, o = t.v[n][1] + (r[1] - t.v[n][1]) * i, h = t.o[n][0] + (r[0] - t.o[n][0]) * -i, l = t.o[n][1] + (r[1] - t.o[n][1]) * -i, p = t.i[n][0] + (r[0] - t.i[n][0]) * -i, u = t.i[n][1] + (r[1] - t.i[n][1]) * -i, c.setTripleAt(a, o, h, l, p, u, n);
                        return c
                    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                        var e, i, r, s, n, a, o = this.shapes.length,
                            h = this.amount.v;
                        if (0 !== h)
                            for (i = 0; i < o; i += 1) {
                                if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
                                    for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], h));
                                n.shape.paths = n.localShapeCollection
                            }
                        this.dynamicProperties.length || (this._mdf = !1)
                    }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                    }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, s, n) {
                        var a = n ? -1 : 1,
                            o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s),
                            h = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
                        t.translate(r.p.v[0] * a * s, r.p.v[1] * a * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * a * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(n ? 1 / o : o, n ? 1 / h : h), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                    }, RepeaterModifier.prototype.init = function(t, e, i, r) {
                        for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
                        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                    }, RepeaterModifier.prototype.resetElements = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                    }, RepeaterModifier.prototype.cloneElements = function(t) {
                        var e = JSON.parse(JSON.stringify(t));
                        return this.resetElements(e), e
                    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                        var i, r = t.length;
                        for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
                    }, RepeaterModifier.prototype.processShapes = function(t) {
                        var e, i, r, s, n, a = !1;
                        if (this._mdf || t) {
                            var o, h = Math.ceil(this.c.v);
                            if (this._groups.length < h) {
                                for (; this._groups.length < h;) {
                                    var l = {
                                        it: this.cloneElements(this._elements),
                                        ty: "gr"
                                    };
                                    l.it.push({
                                        a: {
                                            a: 0,
                                            ix: 1,
                                            k: [0, 0]
                                        },
                                        nm: "Transform",
                                        o: {
                                            a: 0,
                                            ix: 7,
                                            k: 100
                                        },
                                        p: {
                                            a: 0,
                                            ix: 2,
                                            k: [0, 0]
                                        },
                                        r: {
                                            a: 1,
                                            ix: 6,
                                            k: [{
                                                s: 0,
                                                e: 0,
                                                t: 0
                                            }, {
                                                s: 0,
                                                e: 0,
                                                t: 1
                                            }]
                                        },
                                        s: {
                                            a: 0,
                                            ix: 3,
                                            k: [100, 100]
                                        },
                                        sa: {
                                            a: 0,
                                            ix: 5,
                                            k: 0
                                        },
                                        sk: {
                                            a: 0,
                                            ix: 4,
                                            k: 0
                                        },
                                        ty: "tr"
                                    }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                                }
                                this.elem.reloadShapes(), a = !0
                            }
                            for (n = 0, r = 0; r <= this._groups.length - 1; r += 1) {
                                if (o = n < h, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
                                    var p = this.elemsData[r].it,
                                        u = p[p.length - 1];
                                    0 !== u.transform.op.v ? (u.transform.op._mdf = !0, u.transform.op.v = 0) : u.transform.op._mdf = !1
                                }
                                n += 1
                            }
                            this._currentCopies = h;
                            var c = this.o.v,
                                f = c % 1,
                                d = c > 0 ? Math.floor(c) : Math.ceil(c),
                                m = this.pMatrix.props,
                                g = this.rMatrix.props,
                                y = this.sMatrix.props;
                            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                            var v, _, D = 0;
                            if (c > 0) {
                                for (; D < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), D += 1;
                                f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), D += f)
                            } else if (c < 0) {
                                for (; D > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), D -= 1;
                                f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), D -= f)
                            }
                            for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, n = this._currentCopies; n;) {
                                if (_ = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== D) {
                                    for ((0 !== r && 1 === s || r !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < _; v += 1) i[v] = this.matrix.props[v];
                                    this.matrix.reset()
                                } else
                                    for (this.matrix.reset(), v = 0; v < _; v += 1) i[v] = this.matrix.props[v];
                                D += 1, n -= 1, r += s
                            }
                        } else
                            for (n = this._currentCopies, r = 0, s = 1; n;) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, n -= 1, r += s;
                        return a
                    }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
                        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                    }, ShapeCollection.prototype.releaseShapes = function() {
                        var t;
                        for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
                        this._length = 0
                    }, DashProperty.prototype.getValue = function(t) {
                        if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                            var e = 0,
                                i = this.dataProps.length;
                            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                        }
                    }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
                        for (var i = 0, r = this.o.length / 2; i < r;) {
                            if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                            i += 1
                        }
                        return !0
                    }, GradientProperty.prototype.checkCollapsable = function() {
                        if (this.o.length / 2 != this.c.length / 4) return !1;
                        if (this.data.k.k[0].s)
                            for (var t = 0, e = this.data.k.k.length; t < e;) {
                                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                                t += 1
                            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                        return !0
                    }, GradientProperty.prototype.getValue = function(t) {
                        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                            var e, i, r, s = 4 * this.data.p;
                            for (e = 0; e < s; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
                            if (this.o.length)
                                for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
                            this._mdf = !t
                        }
                    }, extendPrototype([DynamicPropertyContainer], GradientProperty);
                    var buildShapeString = function(t, e, i, r) {
                            if (0 === e) return "";
                            var s, n = t.o,
                                a = t.i,
                                o = t.v,
                                h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
                            for (s = 1; s < e; s += 1) h += " C" + r.applyToPointStringified(n[s - 1][0], n[s - 1][1]) + " " + r.applyToPointStringified(a[s][0], a[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
                            return i && e && (h += " C" + r.applyToPointStringified(n[s - 1][0], n[s - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
                        },
                        audioControllerFactory = function() {
                            function t(t) {
                                this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                            }
                            return t.prototype = {
                                    addAudio: function(t) {
                                        this.audios.push(t)
                                    },
                                    pause: function() {
                                        var t, e = this.audios.length;
                                        for (t = 0; t < e; t += 1) this.audios[t].pause()
                                    },
                                    resume: function() {
                                        var t, e = this.audios.length;
                                        for (t = 0; t < e; t += 1) this.audios[t].resume()
                                    },
                                    setRate: function(t) {
                                        var e, i = this.audios.length;
                                        for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                                    },
                                    createAudio: function(t) {
                                        return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                                            src: [t]
                                        }) : {
                                            isPlaying: !1,
                                            play: function() {
                                                this.isPlaying = !0
                                            },
                                            seek: function() {
                                                this.isPlaying = !1
                                            },
                                            playing: function() {},
                                            rate: function() {},
                                            setVolume: function() {}
                                        }
                                    },
                                    setAudioFactory: function(t) {
                                        this.audioFactory = t
                                    },
                                    setVolume: function(t) {
                                        this._volume = t, this._updateVolume()
                                    },
                                    mute: function() {
                                        this._isMuted = !0, this._updateVolume()
                                    },
                                    unmute: function() {
                                        this._isMuted = !1, this._updateVolume()
                                    },
                                    getVolume: function() {
                                        return this._volume
                                    },
                                    _updateVolume: function() {
                                        var t, e = this.audios.length;
                                        for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                                    }
                                },
                                function() {
                                    return new t
                                }
                        }(),
                        ImagePreloader = function() {
                            var t = function() {
                                var t = createTag("canvas");
                                t.width = 1, t.height = 1;
                                var e = t.getContext("2d");
                                return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                            }();

                            function e() {
                                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function i() {
                                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                            }

                            function r(t, e, i) {
                                var r = "";
                                if (t.e) r = t.p;
                                else if (e) {
                                    var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), r = e + s
                                } else r = i, r += t.u ? t.u : "", r += t.p;
                                return r
                            }

                            function s(t) {
                                var e = 0,
                                    i = setInterval(function() {
                                        (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                                    }.bind(this), 50)
                            }

                            function n(t) {
                                var e = {
                                        assetData: t
                                    },
                                    i = r(t, this.assetsPath, this.path);
                                return dataManager.loadData(i, function(t) {
                                    e.img = t, this._footageLoaded()
                                }.bind(this), function() {
                                    e.img = {}, this._footageLoaded()
                                }.bind(this)), e
                            }

                            function a() {
                                this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = n.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                            }
                            return a.prototype = {
                                loadAssets: function(t, e) {
                                    var i;
                                    this.imagesLoadedCb = e;
                                    var r = t.length;
                                    for (i = 0; i < r; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                                },
                                setAssetsPath: function(t) {
                                    this.assetsPath = t || ""
                                },
                                setPath: function(t) {
                                    this.path = t || ""
                                },
                                loadedImages: function() {
                                    return this.totalImages === this.loadedAssets
                                },
                                loadedFootages: function() {
                                    return this.totalFootages === this.loadedFootagesCount
                                },
                                destroy: function() {
                                    this.imagesLoadedCb = null, this.images.length = 0
                                },
                                getAsset: function(t) {
                                    for (var e = 0, i = this.images.length; e < i;) {
                                        if (this.images[e].assetData === t) return this.images[e].img;
                                        e += 1
                                    }
                                    return null
                                },
                                createImgData: function(e) {
                                    var i = r(e, this.assetsPath, this.path),
                                        s = createTag("img");
                                    s.crossOrigin = "anonymous", s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
                                        n.img = t, this._imageLoaded()
                                    }.bind(this), !1), s.src = i;
                                    var n = {
                                        img: s,
                                        assetData: e
                                    };
                                    return n
                                },
                                createImageData: function(e) {
                                    var i = r(e, this.assetsPath, this.path),
                                        s = createNS("image");
                                    isSafari ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
                                        n.img = t, this._imageLoaded()
                                    }.bind(this), !1), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s);
                                    var n = {
                                        img: s,
                                        assetData: e
                                    };
                                    return n
                                },
                                imageLoaded: e,
                                footageLoaded: i,
                                setCacheType: function(t, e) {
                                    "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                                }
                            }, a
                        }(),
                        featureSupport = function() {
                            var t = {
                                maskType: !0
                            };
                            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
                        }(),
                        filtersFactory = function() {
                            var t = {
                                createFilter: function(t, e) {
                                    var i = createNS("filter");
                                    return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                                },
                                createAlphaToLuminanceFilter: function() {
                                    var t = createNS("feColorMatrix");
                                    return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                                }
                            };
                            return t
                        }();

                    function TextAnimatorProperty(t, e, i) {
                        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                            alignment: {}
                        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
                    }

                    function TextAnimatorDataProperty(t, e, i) {
                        var r = {
                                propType: !1
                            },
                            s = PropertyFactory.getProp,
                            n = e.a;
                        this.a = {
                            r: n.r ? s(t, n.r, 0, degToRads, i) : r,
                            rx: n.rx ? s(t, n.rx, 0, degToRads, i) : r,
                            ry: n.ry ? s(t, n.ry, 0, degToRads, i) : r,
                            sk: n.sk ? s(t, n.sk, 0, degToRads, i) : r,
                            sa: n.sa ? s(t, n.sa, 0, degToRads, i) : r,
                            s: n.s ? s(t, n.s, 1, .01, i) : r,
                            a: n.a ? s(t, n.a, 1, 0, i) : r,
                            o: n.o ? s(t, n.o, 0, .01, i) : r,
                            p: n.p ? s(t, n.p, 1, 0, i) : r,
                            sw: n.sw ? s(t, n.sw, 0, 0, i) : r,
                            sc: n.sc ? s(t, n.sc, 1, 0, i) : r,
                            fc: n.fc ? s(t, n.fc, 1, 0, i) : r,
                            fh: n.fh ? s(t, n.fh, 0, 0, i) : r,
                            fs: n.fs ? s(t, n.fs, 0, .01, i) : r,
                            fb: n.fb ? s(t, n.fb, 0, .01, i) : r,
                            t: n.t ? s(t, n.t, 0, 0, i) : r
                        }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
                    }

                    function LetterProps(t, e, i, r, s, n) {
                        this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = n, this._mdf = {
                            o: !0,
                            sw: !!e,
                            sc: !!i,
                            fc: !!r,
                            m: !0,
                            p: !0
                        }
                    }

                    function TextProperty(t, e) {
                        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                            ascent: 0,
                            boxWidth: this.defaultBoxWidth,
                            f: "",
                            fStyle: "",
                            fWeight: "",
                            fc: "",
                            j: "",
                            justifyOffset: "",
                            l: [],
                            lh: 0,
                            lineWidths: [],
                            ls: "",
                            of: "",
                            s: "",
                            sc: "",
                            sw: 0,
                            t: 0,
                            tr: 0,
                            sz: 0,
                            ps: null,
                            fillColorAnim: !1,
                            strokeColorAnim: !1,
                            strokeWidthAnim: !1,
                            yOffset: 0,
                            finalSize: 0,
                            finalText: [],
                            finalLineHeight: 0,
                            __complete: !1
                        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                    }
                    TextAnimatorProperty.prototype.searchProperties = function() {
                        var t, e, i = this._textData.a.length,
                            r = PropertyFactory.getProp;
                        for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                        this._textData.p && "m" in this._textData.p ? (this._pathData = {
                            a: r(this._elem, this._textData.p.a, 0, 0, this),
                            f: r(this._elem, this._textData.p.f, 0, 0, this),
                            l: r(this._elem, this._textData.p.l, 0, 0, this),
                            r: r(this._elem, this._textData.p.r, 0, 0, this),
                            p: r(this._elem, this._textData.p.p, 0, 0, this),
                            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
                    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                        if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                            this._isFirstFrame = !1;
                            var i, r, s, n, a, o, h, l, p, u, c, f, d, m, g, y, v, _, D, b = this._moreOptions.alignment.v,
                                x = this._animatorsData,
                                E = this._textData,
                                C = this.mHelper,
                                P = this._renderType,
                                S = this.renderedLetters.length,
                                w = t.l;
                            if (this._hasMaskedPath) {
                                if (D = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                    var T, A = D.v;
                                    for (this._pathData.r.v && (A = A.reverse()), a = {
                                            tLength: 0,
                                            segments: []
                                        }, n = A._length - 1, y = 0, s = 0; s < n; s += 1) T = bez.buildBezierData(A.v[s], A.v[s + 1], [A.o[s][0] - A.v[s][0], A.o[s][1] - A.v[s][1]], [A.i[s + 1][0] - A.v[s + 1][0], A.i[s + 1][1] - A.v[s + 1][1]]), a.tLength += T.segmentLength, a.segments.push(T), y += T.segmentLength;
                                    s = n, D.v.c && (T = bez.buildBezierData(A.v[s], A.v[0], [A.o[s][0] - A.v[s][0], A.o[s][1] - A.v[s][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), a.tLength += T.segmentLength, a.segments.push(T), y += T.segmentLength), this._pathData.pi = a
                                }
                                if (a = this._pathData.pi, o = this._pathData.f.v, c = 0, u = 1, l = 0, p = !0, m = a.segments, o < 0 && D.v.c)
                                    for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), u = (d = m[c = m.length - 1].points).length - 1; o < 0;) o += d[u].partialLength, (u -= 1) < 0 && (u = (d = m[c -= 1].points).length - 1);
                                f = (d = m[c].points)[u - 1], g = (h = d[u]).partialLength
                            }
                            n = w.length, i = 0, r = 0;
                            var F, k, M, I, B, O = 1.2 * t.finalSize * .714,
                                R = !0;
                            M = x.length;
                            var L, V, z, N, G, H, q, j, W, Y, X, U, $ = -1,
                                Z = o,
                                K = c,
                                J = u,
                                Q = -1,
                                tt = "",
                                et = this.defaultPropsArray;
                            if (2 === t.j || 1 === t.j) {
                                var it = 0,
                                    rt = 0,
                                    st = 2 === t.j ? -.5 : -1,
                                    nt = 0,
                                    at = !0;
                                for (s = 0; s < n; s += 1)
                                    if (w[s].n) {
                                        for (it && (it += rt); nt < s;) w[nt].animatorJustifyOffset = it, nt += 1;
                                        it = 0, at = !0
                                    } else {
                                        for (k = 0; k < M; k += 1)(F = x[k].a).t.propType && (at && 2 === t.j && (rt += F.t.v * st), (B = x[k].s.getMult(w[s].anIndexes[k], E.a[k].s.totalChars)).length ? it += F.t.v * B[0] * st : it += F.t.v * B * st);
                                        at = !1
                                    }
                                for (it && (it += rt); nt < s;) w[nt].animatorJustifyOffset = it, nt += 1
                            }
                            for (s = 0; s < n; s += 1) {
                                if (C.reset(), N = 1, w[s].n) i = 0, r += t.yOffset, r += R ? 1 : 0, o = Z, R = !1, this._hasMaskedPath && (u = J, f = (d = m[c = K].points)[u - 1], g = (h = d[u]).partialLength, l = 0), tt = "", X = "", W = "", U = "", et = this.defaultPropsArray;
                                else {
                                    if (this._hasMaskedPath) {
                                        if (Q !== w[s].line) {
                                            switch (t.j) {
                                                case 1:
                                                    o += y - t.lineWidths[w[s].line];
                                                    break;
                                                case 2:
                                                    o += (y - t.lineWidths[w[s].line]) / 2
                                            }
                                            Q = w[s].line
                                        }
                                        $ !== w[s].ind && (w[$] && (o += w[$].extra), o += w[s].an / 2, $ = w[s].ind), o += b[0] * w[s].an * .005;
                                        var ot = 0;
                                        for (k = 0; k < M; k += 1)(F = x[k].a).p.propType && ((B = x[k].s.getMult(w[s].anIndexes[k], E.a[k].s.totalChars)).length ? ot += F.p.v[0] * B[0] : ot += F.p.v[0] * B), F.a.propType && ((B = x[k].s.getMult(w[s].anIndexes[k], E.a[k].s.totalChars)).length ? ot += F.a.v[0] * B[0] : ot += F.a.v[0] * B);
                                        for (p = !0, this._pathData.a.v && (o = .5 * w[0].an + (y - this._pathData.f.v - .5 * w[0].an - .5 * w[w.length - 1].an) * $ / (n - 1), o += this._pathData.f.v); p;) l + g >= o + ot || !d ? (v = (o + ot - l) / h.partialLength, V = f.point[0] + (h.point[0] - f.point[0]) * v, z = f.point[1] + (h.point[1] - f.point[1]) * v, C.translate(-b[0] * w[s].an * .005, -b[1] * O * .01), p = !1) : d && (l += h.partialLength, (u += 1) >= d.length && (u = 0, m[c += 1] ? d = m[c].points : D.v.c ? (u = 0, d = m[c = 0].points) : (l -= h.partialLength, d = null)), d && (f = h, g = (h = d[u]).partialLength));
                                        L = w[s].an / 2 - w[s].add, C.translate(-L, 0, 0)
                                    } else L = w[s].an / 2 - w[s].add, C.translate(-L, 0, 0), C.translate(-b[0] * w[s].an * .005, -b[1] * O * .01, 0);
                                    for (k = 0; k < M; k += 1)(F = x[k].a).t.propType && (B = x[k].s.getMult(w[s].anIndexes[k], E.a[k].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? B.length ? o += F.t.v * B[0] : o += F.t.v * B : B.length ? i += F.t.v * B[0] : i += F.t.v * B));
                                    for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (q = [t.fc[0], t.fc[1], t.fc[2]]), k = 0; k < M; k += 1)(F = x[k].a).a.propType && ((B = x[k].s.getMult(w[s].anIndexes[k], E.a[k].s.totalChars)).length ? C.translate(-F.a.v[0] * B[0], -F.a.v[1] * B[1], F.a.v[2] * B[2]) : C.translate(-F.a.v[0] * B, -F.a.v[1] * B, F.a.v[2] * B));
                                    for (k = 0; k < M; k += 1)(F = x[k].a).s.propType && ((B = x[k].s.getMult(w[s].anIndexes[k], E.a[k].s.totalChars)).length ? C.scale(1 + (F.s.v[0] - 1) * B[0], 1 + (F.s.v[1] - 1) * B[1], 1) : C.scale(1 + (F.s.v[0] - 1) * B, 1 + (F.s.v[1] - 1) * B, 1));
                                    for (k = 0; k < M; k += 1) {
                                        if (F = x[k].a, B = x[k].s.getMult(w[s].anIndexes[k], E.a[k].s.totalChars), F.sk.propType && (B.length ? C.skewFromAxis(-F.sk.v * B[0], F.sa.v * B[1]) : C.skewFromAxis(-F.sk.v * B, F.sa.v * B)), F.r.propType && (B.length ? C.rotateZ(-F.r.v * B[2]) : C.rotateZ(-F.r.v * B)), F.ry.propType && (B.length ? C.rotateY(F.ry.v * B[1]) : C.rotateY(F.ry.v * B)), F.rx.propType && (B.length ? C.rotateX(F.rx.v * B[0]) : C.rotateX(F.rx.v * B)), F.o.propType && (B.length ? N += (F.o.v * B[0] - N) * B[0] : N += (F.o.v * B - N) * B), t.strokeWidthAnim && F.sw.propType && (B.length ? H += F.sw.v * B[0] : H += F.sw.v * B), t.strokeColorAnim && F.sc.propType)
                                            for (j = 0; j < 3; j += 1) B.length ? G[j] += (F.sc.v[j] - G[j]) * B[0] : G[j] += (F.sc.v[j] - G[j]) * B;
                                        if (t.fillColorAnim && t.fc) {
                                            if (F.fc.propType)
                                                for (j = 0; j < 3; j += 1) B.length ? q[j] += (F.fc.v[j] - q[j]) * B[0] : q[j] += (F.fc.v[j] - q[j]) * B;
                                            F.fh.propType && (q = B.length ? addHueToRGB(q, F.fh.v * B[0]) : addHueToRGB(q, F.fh.v * B)), F.fs.propType && (q = B.length ? addSaturationToRGB(q, F.fs.v * B[0]) : addSaturationToRGB(q, F.fs.v * B)), F.fb.propType && (q = B.length ? addBrightnessToRGB(q, F.fb.v * B[0]) : addBrightnessToRGB(q, F.fb.v * B))
                                        }
                                    }
                                    for (k = 0; k < M; k += 1)(F = x[k].a).p.propType && (B = x[k].s.getMult(w[s].anIndexes[k], E.a[k].s.totalChars), this._hasMaskedPath ? B.length ? C.translate(0, F.p.v[1] * B[0], -F.p.v[2] * B[1]) : C.translate(0, F.p.v[1] * B, -F.p.v[2] * B) : B.length ? C.translate(F.p.v[0] * B[0], F.p.v[1] * B[1], -F.p.v[2] * B[2]) : C.translate(F.p.v[0] * B, F.p.v[1] * B, -F.p.v[2] * B));
                                    if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * q[0]) + "," + Math.round(255 * q[1]) + "," + Math.round(255 * q[2]) + ")"), this._hasMaskedPath) {
                                        if (C.translate(0, -t.ls), C.translate(0, b[1] * O * .01 + r, 0), this._pathData.p.v) {
                                            _ = (h.point[1] - f.point[1]) / (h.point[0] - f.point[0]);
                                            var ht = 180 * Math.atan(_) / Math.PI;
                                            h.point[0] < f.point[0] && (ht += 180), C.rotate(-ht * Math.PI / 180)
                                        }
                                        C.translate(V, z, 0), o -= b[0] * w[s].an * .005, w[s + 1] && $ !== w[s + 1].ind && (o += w[s].an / 2, o += .001 * t.tr * t.finalSize)
                                    } else {
                                        switch (C.translate(i, r, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                            case 1:
                                                C.translate(w[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[w[s].line]), 0, 0);
                                                break;
                                            case 2:
                                                C.translate(w[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[w[s].line]) / 2, 0, 0)
                                        }
                                        C.translate(0, -t.ls), C.translate(L, 0, 0), C.translate(b[0] * w[s].an * .005, b[1] * O * .01, 0), i += w[s].l + .001 * t.tr * t.finalSize
                                    }
                                    "html" === P ? tt = C.toCSS() : "svg" === P ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], U = N
                                }
                                S <= s ? (I = new LetterProps(U, W, Y, X, tt, et), this.renderedLetters.push(I), S += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[s], this.lettersChangedFlag = I.update(U, W, Y, X, tt, et) || this.lettersChangedFlag)
                            }
                        }
                    }, TextAnimatorProperty.prototype.getValue = function() {
                        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                    }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, i, r, s, n) {
                        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                        var a = !1;
                        return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, a = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, a = !0), this.m !== s && (this.m = s, this._mdf.m = !0, a = !0), !n.length || this.p[0] === n[0] && this.p[1] === n[1] && this.p[4] === n[4] && this.p[5] === n[5] && this.p[12] === n[12] && this.p[13] === n[13] || (this.p = n, this._mdf.p = !0, a = !0), a
                    }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }, TextProperty.prototype.setCurrentData = function(t) {
                        t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                    }, TextProperty.prototype.searchProperty = function() {
                        return this.searchKeyframes()
                    }, TextProperty.prototype.searchKeyframes = function() {
                        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                    }, TextProperty.prototype.addEffect = function(t) {
                        this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                    }, TextProperty.prototype.getValue = function(t) {
                        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                            var e = this.currentData,
                                i = this.keysIndex;
                            if (this.lock) this.setCurrentData(this.currentData);
                            else {
                                var r;
                                this.lock = !0, this._mdf = !1;
                                var s = this.effectsSequence.length,
                                    n = t || this.data.d.k[this.keysIndex].s;
                                for (r = 0; r < s; r += 1) n = i !== this.keysIndex ? this.effectsSequence[r](n, n.t) : this.effectsSequence[r](this.currentData, n.t);
                                e !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                        }
                    }, TextProperty.prototype.getKeyframeValue = function() {
                        for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);) i += 1;
                        return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
                    }, TextProperty.prototype.buildFinalText = function(t) {
                        for (var e, i, r = [], s = 0, n = t.length, a = !1; s < n;) e = t.charCodeAt(s), FontManager.isCombinedCharacter(e) ? r[r.length - 1] += t.charAt(s) : e >= 55296 && e <= 56319 ? (i = t.charCodeAt(s + 1)) >= 56320 && i <= 57343 ? (a || FontManager.isModifier(e, i) ? (r[r.length - 1] += t.substr(s, 2), a = !1) : r.push(t.substr(s, 2)), s += 1) : r.push(t.charAt(s)) : e > 56319 ? (i = t.charCodeAt(s + 1), FontManager.isZeroWidthJoiner(e, i) ? (a = !0, r[r.length - 1] += t.substr(s, 2), s += 1) : r.push(t.charAt(s))) : FontManager.isZeroWidthJoiner(e) ? (r[r.length - 1] += t.charAt(s), a = !0) : r.push(t.charAt(s)), s += 1;
                        return r
                    }, TextProperty.prototype.completeTextData = function(t) {
                        t.__complete = !0;
                        var e, i, r, s, n, a, o, h = this.elem.globalData.fontManager,
                            l = this.data,
                            p = [],
                            u = 0,
                            c = l.m.g,
                            f = 0,
                            d = 0,
                            m = 0,
                            g = [],
                            y = 0,
                            v = 0,
                            _ = h.getFontByName(t.f),
                            D = 0,
                            b = getFontProperties(_);
                        t.fWeight = b.weight, t.fStyle = b.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                        var x, E = t.tr / 1e3 * t.finalSize;
                        if (t.sz)
                            for (var C, P, S = !0, w = t.sz[0], T = t.sz[1]; S;) {
                                C = 0, y = 0, i = (P = this.buildFinalText(t.t)).length, E = t.tr / 1e3 * t.finalSize;
                                var A = -1;
                                for (e = 0; e < i; e += 1) x = P[e].charCodeAt(0), r = !1, " " === P[e] ? A = e : 13 !== x && 3 !== x || (y = 0, r = !0, C += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(P[e], _.fStyle, _.fFamily), D = r ? 0 : o.w * t.finalSize / 100) : D = h.measureText(P[e], t.f, t.finalSize), y + D > w && " " !== P[e] ? (-1 === A ? i += 1 : e = A, C += t.finalLineHeight || 1.2 * t.finalSize, P.splice(e, A === e ? 1 : 0, "\r"), A = -1, y = 0) : (y += D, y += E);
                                C += _.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && T < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = P, i = t.finalText.length, S = !1)
                            }
                        y = -E, D = 0;
                        var F, k = 0;
                        for (e = 0; e < i; e += 1)
                            if (r = !1, 13 === (x = (F = t.finalText[e]).charCodeAt(0)) || 3 === x ? (k = 0, g.push(y), v = y > v ? y : v, y = -2 * E, s = "", r = !0, m += 1) : s = F, h.chars ? (o = h.getCharData(F, _.fStyle, h.getFontByName(t.f).fFamily), D = r ? 0 : o.w * t.finalSize / 100) : D = h.measureText(s, t.f, t.finalSize), " " === F ? k += D + E : (y += D + E + k, k = 0), p.push({
                                    l: D,
                                    an: D,
                                    add: f,
                                    n: r,
                                    anIndexes: [],
                                    val: s,
                                    line: m,
                                    animatorJustifyOffset: 0
                                }), 2 == c) {
                                if (f += D, "" === s || " " === s || e === i - 1) {
                                    for ("" !== s && " " !== s || (f -= D); d <= e;) p[d].an = f, p[d].ind = u, p[d].extra = D, d += 1;
                                    u += 1, f = 0
                                }
                            } else if (3 == c) {
                            if (f += D, "" === s || e === i - 1) {
                                for ("" === s && (f -= D); d <= e;) p[d].an = f, p[d].ind = u, p[d].extra = D, d += 1;
                                f = 0, u += 1
                            }
                        } else p[u].ind = u, p[u].extra = 0, u += 1;
                        if (t.l = p, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                        else switch (t.boxWidth = v, t.j) {
                            case 1:
                                t.justifyOffset = -t.boxWidth;
                                break;
                            case 2:
                                t.justifyOffset = -t.boxWidth / 2;
                                break;
                            default:
                                t.justifyOffset = 0
                        }
                        t.lineWidths = g;
                        var M, I, B, O, R = l.a;
                        a = R.length;
                        var L = [];
                        for (n = 0; n < a; n += 1) {
                            for ((M = R[n]).a.sc && (t.strokeColorAnim = !0), M.a.sw && (t.strokeWidthAnim = !0), (M.a.fc || M.a.fh || M.a.fs || M.a.fb) && (t.fillColorAnim = !0), O = 0, B = M.s.b, e = 0; e < i; e += 1)(I = p[e]).anIndexes[n] = O, (1 == B && "" !== I.val || 2 == B && "" !== I.val && " " !== I.val || 3 == B && (I.n || " " == I.val || e == i - 1) || 4 == B && (I.n || e == i - 1)) && (1 === M.s.rn && L.push(O), O += 1);
                            l.a[n].s.totalChars = O;
                            var V, z = -1;
                            if (1 === M.s.rn)
                                for (e = 0; e < i; e += 1) z != (I = p[e]).anIndexes[n] && (z = I.anIndexes[n], V = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[n] = V
                        }
                        t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = _.ascent * t.finalSize / 100
                    }, TextProperty.prototype.updateDocumentData = function(t, e) {
                        e = void 0 === e ? this.keysIndex : e;
                        var i = this.copyData({}, this.data.d.k[e].s);
                        i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this)
                    }, TextProperty.prototype.recalculate = function(t) {
                        var e = this.data.d.k[t].s;
                        e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                    }, TextProperty.prototype.canResizeFont = function(t) {
                        this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    }, TextProperty.prototype.setMinimumFontSize = function(t) {
                        this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                    };
                    var TextSelectorProp = function() {
                            var t = Math.max,
                                e = Math.min,
                                i = Math.floor;

                            function r(t, e) {
                                this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                                    k: 0
                                }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                                    v: 100
                                }, this.o = PropertyFactory.getProp(t, e.o || {
                                    k: 0
                                }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                                    k: 0
                                }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                                    k: 0
                                }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
                                    k: 100
                                }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                            }
                            return r.prototype = {
                                getMult: function(r) {
                                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                    var s = 0,
                                        n = 0,
                                        a = 1,
                                        o = 1;
                                    this.ne.v > 0 ? s = this.ne.v / 100 : n = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                                    var h = BezierFactory.getBezierEasing(s, n, a, o).get,
                                        l = 0,
                                        p = this.finalS,
                                        u = this.finalE,
                                        c = this.data.sh;
                                    if (2 === c) l = h(l = u === p ? r >= u ? 1 : 0 : t(0, e(.5 / (u - p) + (r - p) / (u - p), 1)));
                                    else if (3 === c) l = h(l = u === p ? r >= u ? 0 : 1 : 1 - t(0, e(.5 / (u - p) + (r - p) / (u - p), 1)));
                                    else if (4 === c) u === p ? l = 0 : (l = t(0, e(.5 / (u - p) + (r - p) / (u - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                                    else if (5 === c) {
                                        if (u === p) l = 0;
                                        else {
                                            var f = u - p,
                                                d = -f / 2 + (r = e(t(0, r + .5 - p), u - p)),
                                                m = f / 2;
                                            l = Math.sqrt(1 - d * d / (m * m))
                                        }
                                        l = h(l)
                                    } else 6 === c ? (u === p ? l = 0 : (r = e(t(0, r + .5 - p), u - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (u - p))) / 2), l = h(l)) : (r >= i(p) && (l = t(0, e(r - p < 0 ? e(u, 1) - (p - r) : u - r, 1))), l = h(l));
                                    if (100 !== this.sm.v) {
                                        var g = .01 * this.sm.v;
                                        0 === g && (g = 1e-8);
                                        var y = .5 - .5 * g;
                                        l < y ? l = 0 : (l = (l - y) / g) > 1 && (l = 1)
                                    }
                                    return l * this.a.v
                                },
                                getValue: function(t) {
                                    this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                        i = this.o.v / e,
                                        r = this.s.v / e + i,
                                        s = this.e.v / e + i;
                                    if (r > s) {
                                        var n = r;
                                        r = s, s = n
                                    }
                                    this.finalS = r, this.finalE = s
                                }
                            }, extendPrototype([DynamicPropertyContainer], r), {
                                getTextSelectorProp: function(t, e, i) {
                                    return new r(t, e, i)
                                }
                            }
                        }(),
                        poolFactory = function(t, e, i) {
                            var r = 0,
                                s = t,
                                n = createSizedArray(s);
                            return {
                                newElement: function() {
                                    return r ? n[r -= 1] : e()
                                },
                                release: function(t) {
                                    r === s && (n = pooling.double(n), s *= 2), i && i(t), n[r] = t, r += 1
                                }
                            }
                        },
                        pooling = {
                            double: function(t) {
                                return t.concat(createSizedArray(t.length))
                            }
                        },
                        pointPool = poolFactory(8, (function() {
                            return createTypedArray("float32", 2)
                        })),
                        shapePool = (factory = poolFactory(4, (function() {
                            return new ShapePath
                        }), (function(t) {
                            var e, i = t._length;
                            for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                            t._length = 0, t.c = !1
                        })), factory.clone = function(t) {
                            var e, i = factory.newElement(),
                                r = void 0 === t._length ? t.v.length : t._length;
                            for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                            return i
                        }, factory),
                        factory, shapeCollectionPool = function() {
                            var t = {
                                    newShapeCollection: function() {
                                        return e ? r[e -= 1] : new ShapeCollection
                                    },
                                    release: function(t) {
                                        var s, n = t._length;
                                        for (s = 0; s < n; s += 1) shapePool.release(t.shapes[s]);
                                        t._length = 0, e === i && (r = pooling.double(r), i *= 2), r[e] = t, e += 1
                                    }
                                },
                                e = 0,
                                i = 4,
                                r = createSizedArray(i);
                            return t
                        }(),
                        segmentsLengthPool = poolFactory(8, (function() {
                            return {
                                lengths: [],
                                totalLength: 0
                            }
                        }), (function(t) {
                            var e, i = t.lengths.length;
                            for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
                            t.lengths.length = 0
                        })),
                        bezierLengthPool = poolFactory(8, (function() {
                            return {
                                addedLength: 0,
                                percents: createTypedArray("float32", defaultCurveSegments),
                                lengths: createTypedArray("float32", defaultCurveSegments)
                            }
                        })),
                        markerParser = function() {
                            function t(t) {
                                for (var e, i = t.split("\r\n"), r = {}, s = 0, n = 0; n < i.length; n += 1) 2 === (e = i[n].split(":")).length && (r[e[0]] = e[1].trim(), s += 1);
                                if (0 === s) throw new Error;
                                return r
                            }
                            return function(e) {
                                for (var i = [], r = 0; r < e.length; r += 1) {
                                    var s = e[r],
                                        n = {
                                            time: s.tm,
                                            duration: s.dr
                                        };
                                    try {
                                        n.payload = JSON.parse(e[r].cm)
                                    } catch (i) {
                                        try {
                                            n.payload = t(e[r].cm)
                                        } catch (t) {
                                            n.payload = {
                                                name: e[r]
                                            }
                                        }
                                    }
                                    i.push(n)
                                }
                                return i
                            }
                        }();

                    function BaseRenderer() {}

                    function SVGRenderer(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                        var i = "";
                        if (e && e.title) {
                            var r = createNS("title"),
                                s = createElementID();
                            r.setAttribute("id", s), r.textContent = e.title, this.svgElement.appendChild(r), i += s
                        }
                        if (e && e.description) {
                            var n = createNS("desc"),
                                a = createElementID();
                            n.setAttribute("id", a), n.textContent = e.description, this.svgElement.appendChild(n), i += " " + a
                        }
                        i && this.svgElement.setAttribute("aria-labelledby", i);
                        var o = createNS("defs");
                        this.svgElement.appendChild(o);
                        var h = createNS("g");
                        this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            contentVisibility: e && e.contentVisibility || "visible",
                            progressiveLoad: e && e.progressiveLoad || !1,
                            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                            viewBoxOnly: e && e.viewBoxOnly || !1,
                            viewBoxSize: e && e.viewBoxSize || !1,
                            className: e && e.className || "",
                            id: e && e.id || "",
                            focusable: e && e.focusable,
                            filterSize: {
                                width: e && e.filterSize && e.filterSize.width || "100%",
                                height: e && e.filterSize && e.filterSize.height || "100%",
                                x: e && e.filterSize && e.filterSize.x || "0%",
                                y: e && e.filterSize && e.filterSize.y || "0%"
                            }
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            defs: o,
                            renderConfig: this.renderConfig
                        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                    }

                    function CanvasRenderer(t, e) {
                        this.animationItem = t, this.renderConfig = {
                            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                            context: e && e.context || null,
                            progressiveLoad: e && e.progressiveLoad || !1,
                            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            contentVisibility: e && e.contentVisibility || "visible",
                            className: e && e.className || "",
                            id: e && e.id || ""
                        }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                            frameNum: -1,
                            _mdf: !1,
                            renderConfig: this.renderConfig,
                            currentGlobalAlpha: -1
                        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                    }

                    function HybridRenderer(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                            className: e && e.className || "",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                            filterSize: {
                                width: e && e.filterSize && e.filterSize.width || "400%",
                                height: e && e.filterSize && e.filterSize.height || "400%",
                                x: e && e.filterSize && e.filterSize.x || "-100%",
                                y: e && e.filterSize && e.filterSize.y || "-100%"
                            }
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            renderConfig: this.renderConfig
                        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                    }

                    function MaskElement(t, e, i) {
                        this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                        var r, s, n = this.globalData.defs,
                            a = this.masksProperties ? this.masksProperties.length : 0;
                        this.viewData = createSizedArray(a), this.solidPath = "";
                        var o, h, l, p, u, c, f = this.masksProperties,
                            d = 0,
                            m = [],
                            g = createElementID(),
                            y = "clipPath",
                            v = "clip-path";
                        for (r = 0; r < a; r += 1)
                            if (("a" !== f[r].mode && "n" !== f[r].mode || f[r].inv || 100 !== f[r].o.k || f[r].o.x) && (y = "mask", v = "mask"), "s" !== f[r].mode && "i" !== f[r].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), m.push(l)), s = createNS("path"), "n" === f[r].mode) this.viewData[r] = {
                                op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                                elem: s,
                                lastPath: ""
                            }, n.appendChild(s);
                            else {
                                var _;
                                if (d += 1, s.setAttribute("fill", "s" === f[r].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== f[r].x.k ? (y = "mask", v = "mask", c = PropertyFactory.getProp(this.element, f[r].x, 0, null, this.element), _ = createElementID(), (p = createNS("filter")).setAttribute("id", _), (u = createNS("feMorphology")).setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), p.appendChild(u), n.appendChild(p), s.setAttribute("stroke", "s" === f[r].mode ? "#000000" : "#ffffff")) : (u = null, c = null), this.storedData[r] = {
                                        elem: s,
                                        x: c,
                                        expan: u,
                                        lastPath: "",
                                        lastOperator: "",
                                        filterId: _,
                                        lastRadius: 0
                                    }, "i" === f[r].mode) {
                                    h = m.length;
                                    var D = createNS("g");
                                    for (o = 0; o < h; o += 1) D.appendChild(m[o]);
                                    var b = createNS("mask");
                                    b.setAttribute("mask-type", "alpha"), b.setAttribute("id", g + "_" + d), b.appendChild(s), n.appendChild(b), D.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + d + ")"), m.length = 0, m.push(D)
                                } else m.push(s);
                                f[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                                    elem: s,
                                    lastPath: "",
                                    op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                                    prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                                    invRect: l
                                }, this.viewData[r].prop.k || this.drawPath(f[r], this.viewData[r].prop.v, this.viewData[r])
                            }
                        for (this.maskElement = createNS(y), a = m.length, r = 0; r < a; r += 1) this.maskElement.appendChild(m[r]);
                        d > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                    }

                    function HierarchyElement() {}

                    function FrameElement() {}

                    function TransformElement() {}

                    function RenderableElement() {}

                    function RenderableDOMElement() {}

                    function ProcessedElement(t, e) {
                        this.elem = t, this.pos = e
                    }

                    function SVGStyleData(t, e) {
                        this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
                    }

                    function SVGShapeData(t, e, i) {
                        this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                        for (var r = 0, s = t.length; r < s;) {
                            if (t[r].mProps.dynamicProperties.length) {
                                this._isAnimated = !0;
                                break
                            }
                            r += 1
                        }
                    }

                    function SVGTransformData(t, e, i) {
                        this.transform = {
                            mProps: t,
                            op: e,
                            container: i
                        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                    }

                    function SVGStrokeStyleData(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
                    }

                    function SVGFillStyleData(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
                    }

                    function SVGGradientFillStyleData(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
                    }

                    function SVGGradientStrokeStyleData(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
                    }

                    function ShapeGroupData() {
                        this.it = [], this.prevViewData = [], this.gr = createNS("g")
                    }
                    BaseRenderer.prototype.checkLayers = function(t) {
                        var e, i, r = this.layers.length;
                        for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                        this.checkPendingElements()
                    }, BaseRenderer.prototype.createItem = function(t) {
                        switch (t.ty) {
                            case 2:
                                return this.createImage(t);
                            case 0:
                                return this.createComp(t);
                            case 1:
                                return this.createSolid(t);
                            default:
                                return this.createNull(t);
                            case 4:
                                return this.createShape(t);
                            case 5:
                                return this.createText(t);
                            case 6:
                                return this.createAudio(t);
                            case 13:
                                return this.createCamera(t);
                            case 15:
                                return this.createFootage(t)
                        }
                    }, BaseRenderer.prototype.createCamera = function() {
                        throw new Error("You're using a 3d camera. Try the html renderer.")
                    }, BaseRenderer.prototype.createAudio = function(t) {
                        return new AudioElement(t, this.globalData, this)
                    }, BaseRenderer.prototype.createFootage = function(t) {
                        return new FootageElement(t, this.globalData, this)
                    }, BaseRenderer.prototype.buildAllItems = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1) this.buildItem(t);
                        this.checkPendingElements()
                    }, BaseRenderer.prototype.includeLayers = function(t) {
                        var e;
                        this.completeLayers = !1;
                        var i, r = t.length,
                            s = this.layers.length;
                        for (e = 0; e < r; e += 1)
                            for (i = 0; i < s;) {
                                if (this.layers[i].id === t[e].id) {
                                    this.layers[i] = t[e];
                                    break
                                }
                                i += 1
                            }
                    }, BaseRenderer.prototype.setProjectInterface = function(t) {
                        this.globalData.projectInterface = t
                    }, BaseRenderer.prototype.initItems = function() {
                        this.globalData.progressiveLoad || this.buildAllItems()
                    }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
                        for (var r = this.elements, s = this.layers, n = 0, a = s.length; n < a;) s[n].ind == e && (r[n] && !0 !== r[n] ? (i.push(r[n]), r[n].setAsParent(), void 0 !== s[n].parent ? this.buildElementParenting(t, s[n].parent, i) : t.setHierarchy(i)) : (this.buildItem(n), this.addPendingElement(t))), n += 1
                    }, BaseRenderer.prototype.addPendingElement = function(t) {
                        this.pendingElements.push(t)
                    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1)
                            if (t[e].xt) {
                                var r = this.createComp(t[e]);
                                r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                            }
                    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                        this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                            w: t.w,
                            h: t.h
                        }
                    }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
                        return new NullElement(t, this.globalData, this)
                    }, SVGRenderer.prototype.createShape = function(t) {
                        return new SVGShapeElement(t, this.globalData, this)
                    }, SVGRenderer.prototype.createText = function(t) {
                        return new SVGTextLottieElement(t, this.globalData, this)
                    }, SVGRenderer.prototype.createImage = function(t) {
                        return new IImageElement(t, this.globalData, this)
                    }, SVGRenderer.prototype.createComp = function(t) {
                        return new SVGCompElement(t, this.globalData, this)
                    }, SVGRenderer.prototype.createSolid = function(t) {
                        return new ISolidElement(t, this.globalData, this)
                    }, SVGRenderer.prototype.configAnimation = function(t) {
                        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                        var e = this.globalData.defs;
                        this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                        var i = createNS("clipPath"),
                            r = createNS("rect");
                        r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
                        var s = createElementID();
                        i.setAttribute("id", s), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
                    }, SVGRenderer.prototype.destroy = function() {
                        var t;
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                        var e = this.layers ? this.layers.length : 0;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                    }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
                        var e = this.elements;
                        if (!e[t] && 99 !== this.layers[t].ty) {
                            e[t] = !0;
                            var i = this.createItem(this.layers[t]);
                            e[t] = i, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)))
                        }
                    }, SVGRenderer.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) {
                            var t = this.pendingElements.pop();
                            if (t.checkParenting(), t.data.tt)
                                for (var e = 0, i = this.elements.length; e < i;) {
                                    if (this.elements[e] === t) {
                                        t.setMatte(this.elements[e - 1].layerId);
                                        break
                                    }
                                    e += 1
                                }
                        }
                    }, SVGRenderer.prototype.renderFrame = function(t) {
                        if (this.renderedFrame !== t && !this.destroyed) {
                            var e;
                            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                            var i = this.layers.length;
                            for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                            if (this.globalData._mdf)
                                for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                        }
                    }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
                        var i = t.getBaseElement();
                        if (i) {
                            for (var r, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
                            r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
                        }
                    }, SVGRenderer.prototype.hide = function() {
                        this.layerElement.style.display = "none"
                    }, SVGRenderer.prototype.show = function() {
                        this.layerElement.style.display = "block"
                    }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
                        return new CVShapeElement(t, this.globalData, this)
                    }, CanvasRenderer.prototype.createText = function(t) {
                        return new CVTextElement(t, this.globalData, this)
                    }, CanvasRenderer.prototype.createImage = function(t) {
                        return new CVImageElement(t, this.globalData, this)
                    }, CanvasRenderer.prototype.createComp = function(t) {
                        return new CVCompElement(t, this.globalData, this)
                    }, CanvasRenderer.prototype.createSolid = function(t) {
                        return new CVSolidElement(t, this.globalData, this)
                    }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
                        if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                            if (this.renderConfig.clearCanvas) {
                                this.transformMat.cloneFromProps(t);
                                var e = this.contextData.cTr.props;
                                this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                                var i = this.contextData.cTr.props;
                                this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                            } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
                    }, CanvasRenderer.prototype.ctxOpacity = function(t) {
                        if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
                        this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
                    }, CanvasRenderer.prototype.reset = function() {
                        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                    }, CanvasRenderer.prototype.save = function(t) {
                        if (this.renderConfig.clearCanvas) {
                            t && this.canvasContext.save();
                            var e, i = this.contextData.cTr.props;
                            this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                            var r = this.contextData.saved[this.contextData.cArrPos];
                            for (e = 0; e < 16; e += 1) r[e] = i[e];
                            this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                        } else this.canvasContext.save()
                    }, CanvasRenderer.prototype.restore = function(t) {
                        if (this.renderConfig.clearCanvas) {
                            t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                            var e, i = this.contextData.saved[this.contextData.cArrPos],
                                r = this.contextData.cTr.props;
                            for (e = 0; e < 16; e += 1) r[e] = i[e];
                            this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
                        } else this.canvasContext.restore()
                    }, CanvasRenderer.prototype.configAnimation = function(t) {
                        if (this.animationItem.wrapper) {
                            this.animationItem.container = createTag("canvas");
                            var e = this.animationItem.container.style;
                            e.width = "100%", e.height = "100%";
                            var i = "0px 0px 0px";
                            e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                        } else this.canvasContext = this.renderConfig.context;
                        this.data = t, this.layers = t.layers, this.transformCanvas = {
                            w: t.w,
                            h: t.h,
                            sx: 0,
                            sy: 0,
                            tx: 0,
                            ty: 0
                        }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
                    }, CanvasRenderer.prototype.updateContainerSize = function() {
                        var t, e, i, r;
                        if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                            var s = this.renderConfig.preserveAspectRatio.split(" "),
                                n = s[1] || "meet",
                                a = s[0] || "xMidYMid",
                                o = a.substr(0, 4),
                                h = a.substr(4);
                            i = t / e, (r = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === n || r < i && "slice" === n ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < i && "meet" === n || r > i && "slice" === n) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < i && "meet" === n || r > i && "slice" === n) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r > i && "meet" === n || r < i && "slice" === n) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r > i && "meet" === n || r < i && "slice" === n) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                        } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                    }, CanvasRenderer.prototype.destroy = function() {
                        var t;
                        for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                    }, CanvasRenderer.prototype.renderFrame = function(t, e) {
                        if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                            var i;
                            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                            var r = this.layers.length;
                            for (this.completeLayers || this.checkLayers(t), i = 0; i < r; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                            if (this.globalData._mdf) {
                                for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                                !0 !== this.renderConfig.clearCanvas && this.restore()
                            }
                        }
                    }, CanvasRenderer.prototype.buildItem = function(t) {
                        var e = this.elements;
                        if (!e[t] && 99 !== this.layers[t].ty) {
                            var i = this.createItem(this.layers[t], this, this.globalData);
                            e[t] = i, i.initExpressions()
                        }
                    }, CanvasRenderer.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                    }, CanvasRenderer.prototype.hide = function() {
                        this.animationItem.container.style.display = "none"
                    }, CanvasRenderer.prototype.show = function() {
                        this.animationItem.container.style.display = "block"
                    }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
                        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                    }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
                        var i = t.getBaseElement();
                        if (i) {
                            var r = this.layers[e];
                            if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
                            else if (this.threeDElements) this.addTo3dContainer(i, e);
                            else {
                                for (var s, n, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a], s = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : n.getBaseElement()) || s), a += 1;
                                s ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, s) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
                            }
                        }
                    }, HybridRenderer.prototype.createShape = function(t) {
                        return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
                    }, HybridRenderer.prototype.createText = function(t) {
                        return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
                    }, HybridRenderer.prototype.createCamera = function(t) {
                        return this.camera = new HCameraElement(t, this.globalData, this), this.camera
                    }, HybridRenderer.prototype.createImage = function(t) {
                        return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
                    }, HybridRenderer.prototype.createComp = function(t) {
                        return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                    }, HybridRenderer.prototype.createSolid = function(t) {
                        return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
                    }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                        for (var e = 0, i = this.threeDElements.length; e < i;) {
                            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                            e += 1
                        }
                        return null
                    }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                        var i, r, s = createTag("div");
                        styleDiv(s);
                        var n = createTag("div");
                        if (styleDiv(n), "3d" === e) {
                            (i = s.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                            var a = "50% 50%";
                            i.webkitTransformOrigin = a, i.mozTransformOrigin = a, i.transformOrigin = a;
                            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            (r = n.style).transform = o, r.webkitTransform = o
                        }
                        s.appendChild(n);
                        var h = {
                            container: n,
                            perspectiveElem: s,
                            startPos: t,
                            endPos: t,
                            type: e
                        };
                        return this.threeDElements.push(h), h
                    }, HybridRenderer.prototype.build3dContainers = function() {
                        var t, e, i = this.layers.length,
                            r = "";
                        for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                        for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
                    }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                        for (var i = 0, r = this.threeDElements.length; i < r;) {
                            if (e <= this.threeDElements[i].endPos) {
                                for (var s, n = this.threeDElements[i].startPos; n < e;) this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n].getBaseElement()), n += 1;
                                s ? this.threeDElements[i].container.insertBefore(t, s) : this.threeDElements[i].container.appendChild(t);
                                break
                            }
                            i += 1
                        }
                    }, HybridRenderer.prototype.configAnimation = function(t) {
                        var e = createTag("div"),
                            i = this.animationItem.wrapper,
                            r = e.style;
                        r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
                        var s = createNS("svg");
                        s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
                        var n = createNS("defs");
                        s.appendChild(n), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = n, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                    }, HybridRenderer.prototype.destroy = function() {
                        var t;
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                        var e = this.layers ? this.layers.length : 0;
                        for (t = 0; t < e; t += 1) this.elements[t].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                    }, HybridRenderer.prototype.updateContainerSize = function() {
                        var t, e, i, r, s = this.animationItem.wrapper.offsetWidth,
                            n = this.animationItem.wrapper.offsetHeight,
                            a = s / n;
                        this.globalData.compSize.w / this.globalData.compSize.h > a ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, i = 0, r = (n - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = n / this.globalData.compSize.h, e = n / this.globalData.compSize.h, i = (s - this.globalData.compSize.w * (n / this.globalData.compSize.h)) / 2, r = 0);
                        var o = this.resizerElem.style;
                        o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)", o.transform = o.webkitTransform
                    }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
                        this.resizerElem.style.display = "none"
                    }, HybridRenderer.prototype.show = function() {
                        this.resizerElem.style.display = "block"
                    }, HybridRenderer.prototype.initItems = function() {
                        if (this.buildAllItems(), this.camera) this.camera.setup();
                        else {
                            var t, e = this.globalData.compSize.w,
                                i = this.globalData.compSize.h,
                                r = this.threeDElements.length;
                            for (t = 0; t < r; t += 1) {
                                var s = this.threeDElements[t].perspectiveElem.style;
                                s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", s.perspective = s.webkitPerspective
                            }
                        }
                    }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
                        var e, i = t.length,
                            r = createTag("div");
                        for (e = 0; e < i; e += 1)
                            if (t[e].xt) {
                                var s = this.createComp(t[e], r, this.globalData.comp, null);
                                s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                            }
                    }, MaskElement.prototype.getMaskProperty = function(t) {
                        return this.viewData[t].prop
                    }, MaskElement.prototype.renderFrame = function(t) {
                        var e, i = this.element.finalTransform.mat,
                            r = this.masksProperties.length;
                        for (e = 0; e < r; e += 1)
                            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                                var s = this.storedData[e].expan;
                                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                            }
                    }, MaskElement.prototype.getMaskelement = function() {
                        return this.maskElement
                    }, MaskElement.prototype.createLayerSolidPath = function() {
                        var t = "M0,0 ";
                        return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
                    }, MaskElement.prototype.drawPath = function(t, e, i) {
                        var r, s, n = " M" + e.v[0][0] + "," + e.v[0][1];
                        for (s = e._length, r = 1; r < s; r += 1) n += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
                        if (e.c && s > 1 && (n += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== n) {
                            var a = "";
                            i.elem && (e.c && (a = t.inv ? this.solidPath + n : n), i.elem.setAttribute("d", a)), i.lastPath = n
                        }
                    }, MaskElement.prototype.destroy = function() {
                        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                    }, HierarchyElement.prototype = {
                        initHierarchy: function() {
                            this.hierarchy = [], this._isParent = !1, this.checkParenting()
                        },
                        setHierarchy: function(t) {
                            this.hierarchy = t
                        },
                        setAsParent: function() {
                            this._isParent = !0
                        },
                        checkParenting: function() {
                            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                        }
                    }, FrameElement.prototype = {
                        initFrame: function() {
                            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                        },
                        prepareProperties: function(t, e) {
                            var i, r = this.dynamicProperties.length;
                            for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                        },
                        addDynamicProperty: function(t) {
                            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                        }
                    }, TransformElement.prototype = {
                        initTransform: function() {
                            this.finalTransform = {
                                mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                    o: 0
                                },
                                _matMdf: !1,
                                _opMdf: !1,
                                mat: new Matrix
                            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                        },
                        renderTransform: function() {
                            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                                var t, e = this.finalTransform.mat,
                                    i = 0,
                                    r = this.hierarchy.length;
                                if (!this.finalTransform._matMdf)
                                    for (; i < r;) {
                                        if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                            this.finalTransform._matMdf = !0;
                                            break
                                        }
                                        i += 1
                                    }
                                if (this.finalTransform._matMdf)
                                    for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                            }
                        },
                        globalToLocal: function(t) {
                            var e = [];
                            e.push(this.finalTransform);
                            for (var i, r = !0, s = this.comp; r;) s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : r = !1;
                            var n, a = e.length;
                            for (i = 0; i < a; i += 1) n = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];
                            return t
                        },
                        mHelper: new Matrix
                    }, RenderableElement.prototype = {
                        initRenderable: function() {
                            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                        },
                        addRenderableComponent: function(t) {
                            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                        },
                        removeRenderableComponent: function(t) {
                            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                        },
                        prepareRenderableFrame: function(t) {
                            this.checkLayerLimits(t)
                        },
                        checkTransparency: function() {
                            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                        },
                        checkLayerLimits: function(t) {
                            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                        },
                        renderRenderable: function() {
                            var t, e = this.renderableComponents.length;
                            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                        },
                        sourceRectAtTime: function() {
                            return {
                                top: 0,
                                left: 0,
                                width: 100,
                                height: 100
                            }
                        },
                        getLayerSize: function() {
                            return 5 === this.data.ty ? {
                                w: this.data.textData.width,
                                h: this.data.textData.height
                            } : {
                                w: this.data.width,
                                h: this.data.height
                            }
                        }
                    }, extendPrototype([RenderableElement, createProxyFunction({
                        initElement: function(t, e, i) {
                            this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                        },
                        hide: function() {
                            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                        },
                        show: function() {
                            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                        },
                        renderFrame: function() {
                            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                        },
                        renderInnerContent: function() {},
                        prepareFrame: function(t) {
                            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                        },
                        destroy: function() {
                            this.innerElem = null, this.destroyBaseElement()
                        }
                    })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
                        this.d = "", this._mdf = !1
                    }, SVGShapeData.prototype.setAsAnimated = function() {
                        this._isAnimated = !0
                    }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
                        this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                            k: 0
                        }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                            k: 0
                        }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
                    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                        var i = createElementID(),
                            r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                        r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
                        var s, n, a, o = [];
                        for (a = 4 * e.g.p, n = 0; n < a; n += 4) s = createNS("stop"), r.appendChild(s), o.push(s);
                        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"), this.gf = r, this.cst = o
                    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                        if (this.g._hasOpacity && !this.g._collapsable) {
                            var i, r, s, n = createNS("mask"),
                                a = createNS("path");
                            n.appendChild(a);
                            var o = createElementID(),
                                h = createElementID();
                            n.setAttribute("id", h);
                            var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                            l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                            var p = this.stops;
                            for (r = 4 * t.g.p; r < s; r += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
                            a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), "gs" === t.ty && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = n, this.ost = p, this.maskId = h, e.msElem = a
                        }
                    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                    var SVGElementsRenderer = function() {
                        var t = new Matrix,
                            e = new Matrix;

                        function i(t, e, i) {
                            (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                        }

                        function r(i, r, s) {
                            var n, a, o, h, l, p, u, c, f, d, m, g = r.styles.length,
                                y = r.lvl;
                            for (p = 0; p < g; p += 1) {
                                if (h = r.sh._mdf || s, r.styles[p].lvl < y) {
                                    for (c = e.reset(), d = y - r.styles[p].lvl, m = r.transformers.length - 1; !h && d > 0;) h = r.transformers[m].mProps._mdf || h, d -= 1, m -= 1;
                                    if (h)
                                        for (d = y - r.styles[p].lvl, m = r.transformers.length - 1; d > 0;) f = r.transformers[m].mProps.v.props, c.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), d -= 1, m -= 1
                                } else c = t;
                                if (a = (u = r.sh.paths)._length, h) {
                                    for (o = "", n = 0; n < a; n += 1)(l = u.shapes[n]) && l._length && (o += buildShapeString(l, l._length, l.c, c));
                                    r.caches[p] = o
                                } else o = r.caches[p];
                                r.styles[p].d += !0 === i.hd ? "" : o, r.styles[p]._mdf = h || r.styles[p]._mdf
                            }
                        }

                        function s(t, e, i) {
                            var r = e.style;
                            (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
                        }

                        function n(t, e, i) {
                            a(t, e, i), o(0, e, i)
                        }

                        function a(t, e, i) {
                            var r, s, n, a, o, h = e.gf,
                                l = e.g._hasOpacity,
                                p = e.s.v,
                                u = e.e.v;
                            if (e.o._mdf || i) {
                                var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                e.style.pElem.setAttribute(c, e.o.v)
                            }
                            if (e.s._mdf || i) {
                                var f = 1 === t.t ? "x1" : "cx",
                                    d = "x1" === f ? "y1" : "cy";
                                h.setAttribute(f, p[0]), h.setAttribute(d, p[1]), l && !e.g._collapsable && (e.of.setAttribute(f, p[0]), e.of.setAttribute(d, p[1]))
                            }
                            if (e.g._cmdf || i) {
                                r = e.cst;
                                var m = e.g.c;
                                for (n = r.length, s = 0; s < n; s += 1)(a = r[s]).setAttribute("offset", m[4 * s] + "%"), a.setAttribute("stop-color", "rgb(" + m[4 * s + 1] + "," + m[4 * s + 2] + "," + m[4 * s + 3] + ")")
                            }
                            if (l && (e.g._omdf || i)) {
                                var g = e.g.o;
                                for (n = (r = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < n; s += 1) a = r[s], e.g._collapsable || a.setAttribute("offset", g[2 * s] + "%"), a.setAttribute("stop-opacity", g[2 * s + 1])
                            }
                            if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", u[0]), h.setAttribute("y2", u[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", u[0]), e.of.setAttribute("y2", u[1])));
                            else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - u[0], 2) + Math.pow(p[1] - u[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                                o || (o = Math.sqrt(Math.pow(p[0] - u[0], 2) + Math.pow(p[1] - u[1], 2)));
                                var y = Math.atan2(u[1] - p[1], u[0] - p[0]),
                                    v = e.h.v;
                                v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                                var _ = o * v,
                                    D = Math.cos(y + e.a.v) * _ + p[0],
                                    b = Math.sin(y + e.a.v) * _ + p[1];
                                h.setAttribute("fx", D), h.setAttribute("fy", b), l && !e.g._collapsable && (e.of.setAttribute("fx", D), e.of.setAttribute("fy", b))
                            }
                        }

                        function o(t, e, i) {
                            var r = e.style,
                                s = e.d;
                            s && (s._mdf || i) && s.dashStr && (r.pElem.setAttribute("stroke-dasharray", s.dashStr), r.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
                        }
                        return {
                            createRenderFunction: function(t) {
                                switch (t.ty) {
                                    case "fl":
                                        return s;
                                    case "gf":
                                        return a;
                                    case "gs":
                                        return n;
                                    case "st":
                                        return o;
                                    case "sh":
                                    case "el":
                                    case "rc":
                                    case "sr":
                                        return r;
                                    case "tr":
                                        return i;
                                    default:
                                        return null
                                }
                            }
                        }
                    }();

                    function ShapeTransformManager() {
                        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                    }

                    function CVShapeData(t, e, i, r) {
                        this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                        var s, n = 4;
                        "rc" === e.ty ? n = 5 : "el" === e.ty ? n = 6 : "sr" === e.ty && (n = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t);
                        var a, o = i.length;
                        for (s = 0; s < o; s += 1) i[s].closed || (a = {
                            transforms: r.addTransformSequence(i[s].transforms),
                            trNodes: []
                        }, this.styledShapes.push(a), i[s].elements.push(a))
                    }

                    function BaseElement() {}

                    function NullElement(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
                    }

                    function SVGBaseElement() {}

                    function IShapeElement() {}

                    function ITextElement() {}

                    function ICompElement() {}

                    function IImageElement(t, e, i) {
                        this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = {
                            top: 0,
                            left: 0,
                            width: this.assetData.w,
                            height: this.assetData.h
                        }
                    }

                    function ISolidElement(t, e, i) {
                        this.initElement(t, e, i)
                    }

                    function AudioElement(t, e, i) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                        var r = this.globalData.getAssetsPath(this.assetData);
                        this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function FootageElement(t, e, i) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
                    }

                    function SVGCompElement(t, e, i) {
                        this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function SVGTextLottieElement(t, e, i) {
                        this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
                    }

                    function SVGShapeElement(t, e, i) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
                    }

                    function SVGTintFilter(t, e) {
                        this.filterManager = e;
                        var i = createNS("feColorMatrix");
                        if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                            var r, s = createNS("feMerge");
                            t.appendChild(s), (r = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), s.appendChild(r), (r = createNS("feMergeNode")).setAttribute("in", "f2"), s.appendChild(r)
                        }
                    }

                    function SVGFillFilter(t, e) {
                        this.filterManager = e;
                        var i = createNS("feColorMatrix");
                        i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i
                    }

                    function SVGGaussianBlurEffect(t, e) {
                        t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                        var i = createNS("feGaussianBlur");
                        t.appendChild(i), this.feGaussianBlur = i
                    }

                    function SVGStrokeEffect(t, e) {
                        this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
                    }

                    function SVGTritoneFilter(t, e) {
                        this.filterManager = e;
                        var i = createNS("feColorMatrix");
                        i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
                        var r = createNS("feComponentTransfer");
                        r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.matrixFilter = r;
                        var s = createNS("feFuncR");
                        s.setAttribute("type", "table"), r.appendChild(s), this.feFuncR = s;
                        var n = createNS("feFuncG");
                        n.setAttribute("type", "table"), r.appendChild(n), this.feFuncG = n;
                        var a = createNS("feFuncB");
                        a.setAttribute("type", "table"), r.appendChild(a), this.feFuncB = a
                    }

                    function SVGProLevelsFilter(t, e) {
                        this.filterManager = e;
                        var i = this.filterManager.effectElements,
                            r = createNS("feComponentTransfer");
                        (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), r = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r))
                    }

                    function SVGDropShadowEffect(t, e) {
                        var i = e.container.globalData.renderConfig.filterSize;
                        t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
                        var r = createNS("feGaussianBlur");
                        r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
                        var s = createNS("feOffset");
                        s.setAttribute("dx", "25"), s.setAttribute("dy", "0"), s.setAttribute("in", "drop_shadow_1"), s.setAttribute("result", "drop_shadow_2"), this.feOffset = s, t.appendChild(s);
                        var n = createNS("feFlood");
                        n.setAttribute("flood-color", "#00ff00"), n.setAttribute("flood-opacity", "1"), n.setAttribute("result", "drop_shadow_3"), this.feFlood = n, t.appendChild(n);
                        var a = createNS("feComposite");
                        a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), t.appendChild(a);
                        var o, h = createNS("feMerge");
                        t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(o)
                    }
                    ShapeTransformManager.prototype = {
                        addTransformSequence: function(t) {
                            var e, i = t.length,
                                r = "_";
                            for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
                            var s = this.sequences[r];
                            return s || (s = {
                                transforms: [].concat(t),
                                finalTransform: new Matrix,
                                _mdf: !1
                            }, this.sequences[r] = s, this.sequenceList.push(s)), s
                        },
                        processSequence: function(t, e) {
                            for (var i, r = 0, s = t.transforms.length, n = e; r < s && !e;) {
                                if (t.transforms[r].transform.mProps._mdf) {
                                    n = !0;
                                    break
                                }
                                r += 1
                            }
                            if (n)
                                for (t.finalTransform.reset(), r = s - 1; r >= 0; r -= 1) i = t.transforms[r].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                            t._mdf = n
                        },
                        processSequences: function(t) {
                            var e, i = this.sequenceList.length;
                            for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
                        },
                        getNewKey: function() {
                            return this.transform_key_count += 1, "_" + this.transform_key_count
                        }
                    }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                        checkMasks: function() {
                            if (!this.data.hasMask) return !1;
                            for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                                if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                                t += 1
                            }
                            return !1
                        },
                        initExpressions: function() {
                            this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                        },
                        setBlendMode: function() {
                            var t = getBlendMode(this.data.bm);
                            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                        },
                        initBaseData: function(t, e, i) {
                            this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                        },
                        getType: function() {
                            return this.type
                        },
                        sourceRectAtTime: function() {}
                    }, NullElement.prototype.prepareFrame = function(t) {
                        this.prepareProperties(t, !0)
                    }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                        return null
                    }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
                        initRendererElement: function() {
                            this.layerElement = createNS("g")
                        },
                        createContainerElements: function() {
                            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                            var t, e, i, r = null;
                            if (this.data.td) {
                                if (3 == this.data.td || 1 == this.data.td) {
                                    var s = createNS("mask");
                                    s.setAttribute("id", this.layerId), s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), s.appendChild(this.layerElement), r = s, this.globalData.defs.appendChild(s), featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), r = i, s.appendChild(i), i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                                } else if (2 == this.data.td) {
                                    var n = createNS("mask");
                                    n.setAttribute("id", this.layerId), n.setAttribute("mask-type", "alpha");
                                    var a = createNS("g");
                                    n.appendChild(a), t = createElementID(), e = filtersFactory.createFilter(t);
                                    var o = createNS("feComponentTransfer");
                                    o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                                    var h = createNS("feFuncA");
                                    h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
                                    var l = createNS("rect");
                                    l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), a.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), a.appendChild(l), a.appendChild(this.layerElement), r = a, featureSupport.maskType || (n.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), a.appendChild(l), i.appendChild(this.layerElement), r = i, a.appendChild(i)), this.globalData.defs.appendChild(n)
                                }
                            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                var p = createNS("clipPath"),
                                    u = createNS("path");
                                u.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                var c = createElementID();
                                if (p.setAttribute("id", c), p.appendChild(u), this.globalData.defs.appendChild(p), this.checkMasks()) {
                                    var f = createNS("g");
                                    f.setAttribute("clip-path", "url(" + locationHref + "#" + c + ")"), f.appendChild(this.layerElement), this.transformedElement = f, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + c + ")")
                            }
                            0 !== this.data.bm && this.setBlendMode()
                        },
                        renderElement: function() {
                            this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                        },
                        destroyBaseElement: function() {
                            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                        },
                        getBaseElement: function() {
                            return this.data.hd ? null : this.baseElement
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                        },
                        setMatte: function(t) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
                        }
                    }, IShapeElement.prototype = {
                        addShapeToModifiers: function(t) {
                            var e, i = this.shapeModifiers.length;
                            for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
                        },
                        isShapeInAnimatedModifiers: function(t) {
                            for (var e = this.shapeModifiers.length; 0 < e;)
                                if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                            return !1
                        },
                        renderModifiers: function() {
                            if (this.shapeModifiers.length) {
                                var t, e = this.shapes.length;
                                for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                                for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                            }
                        },
                        searchProcessedElement: function(t) {
                            for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
                                if (e[i].elem === t) return e[i].pos;
                                i += 1
                            }
                            return 0
                        },
                        addProcessedElement: function(t, e) {
                            for (var i = this.processedElements, r = i.length; r;)
                                if (i[r -= 1].elem === t) return void(i[r].pos = e);
                            i.push(new ProcessedElement(t, e))
                        },
                        prepareFrame: function(t) {
                            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                        }
                    }, ITextElement.prototype.initElement = function(t, e, i) {
                        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                    }, ITextElement.prototype.prepareFrame = function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                    }, ITextElement.prototype.createPathShape = function(t, e) {
                        var i, r, s = e.length,
                            n = "";
                        for (i = 0; i < s; i += 1) r = e[i].ks.k, n += buildShapeString(r, r.i.length, !0, t);
                        return n
                    }, ITextElement.prototype.updateDocumentData = function(t, e) {
                        this.textProperty.updateDocumentData(t, e)
                    }, ITextElement.prototype.canResizeFont = function(t) {
                        this.textProperty.canResizeFont(t)
                    }, ITextElement.prototype.setMinimumFontSize = function(t) {
                        this.textProperty.setMinimumFontSize(t)
                    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, s) {
                        switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                            case 1:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                                break;
                            case 2:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                        }
                        e.translate(r, s, 0)
                    }, ITextElement.prototype.buildColor = function(t) {
                        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                    }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                    }, ICompElement.prototype.prepareFrame = function(t) {
                        if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                            else {
                                var e = this.tm.v;
                                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                            }
                            var i, r = this.elements.length;
                            for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                        }
                    }, ICompElement.prototype.renderInnerContent = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                    }, ICompElement.prototype.setElements = function(t) {
                        this.elements = t
                    }, ICompElement.prototype.getElements = function() {
                        return this.elements
                    }, ICompElement.prototype.destroyElements = function() {
                        var t, e = this.layers.length;
                        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                    }, ICompElement.prototype.destroy = function() {
                        this.destroyElements(), this.destroyBaseElement()
                    }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                    }, IImageElement.prototype.sourceRectAtTime = function() {
                        return this.sourceRect
                    }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                        var t = createNS("rect");
                        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                    }, AudioElement.prototype.prepareFrame = function(t) {
                        if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            this._currentTime = e
                        }
                    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                    }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                        this.audio.pause(), this._isPlaying = !1
                    }, AudioElement.prototype.pause = function() {
                        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                    }, AudioElement.prototype.resume = function() {
                        this._canPlay = !0
                    }, AudioElement.prototype.setRate = function(t) {
                        this.audio.rate(t)
                    }, AudioElement.prototype.volume = function(t) {
                        this.audio.volume(t)
                    }, AudioElement.prototype.getBaseElement = function() {
                        return null
                    }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                        return null
                    }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                        this.layerInterface = FootageInterface(this)
                    }, FootageElement.prototype.getFootageData = function() {
                        return this.footageData
                    }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                    }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                        for (var e = 0, i = t.length, r = [], s = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
                        return r.push(s), r
                    }, SVGTextLottieElement.prototype.buildNewText = function() {
                        var t, e, i = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                        var r = this.globalData.fontManager.getFontByName(i.f);
                        if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
                        else {
                            this.layerElement.setAttribute("font-family", r.fFamily);
                            var s = i.fWeight,
                                n = i.fStyle;
                            this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", s)
                        }
                        this.layerElement.setAttribute("aria-label", i.t);
                        var a, o = i.l || [],
                            h = !!this.globalData.fontManager.chars;
                        e = o.length;
                        var l, p = this.mHelper,
                            u = "",
                            c = this.data.singleShape,
                            f = 0,
                            d = 0,
                            m = !0,
                            g = .001 * i.tr * i.finalSize;
                        if (!c || h || i.sz) {
                            var y, v, _ = this.textSpans.length;
                            for (t = 0; t < e; t += 1) h && c && 0 !== t || (a = _ > t ? this.textSpans[t] : createNS(h ? "path" : "text"), _ <= t && (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = a, this.layerElement.appendChild(a)), a.style.display = "inherit"), p.reset(), p.scale(i.finalSize / 100, i.finalSize / 100), c && (o[t].n && (f = -g, d += i.yOffset, d += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(i, p, o[t].line, f, d), f += o[t].l || 0, f += g), h ? (l = (y = (v = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], c ? u += this.createPathShape(p, l) : a.setAttribute("d", this.createPathShape(p, l))) : (c && a.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                            c && a && a.setAttribute("d", u)
                        } else {
                            var D = this.textContainer,
                                b = "start";
                            switch (i.j) {
                                case 1:
                                    b = "end";
                                    break;
                                case 2:
                                    b = "middle";
                                    break;
                                default:
                                    b = "start"
                            }
                            D.setAttribute("text-anchor", b), D.setAttribute("letter-spacing", g);
                            var x = this.buildTextContents(i.finalText);
                            for (e = x.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t] || createNS("tspan")).textContent = x[t], a.setAttribute("x", 0), a.setAttribute("y", d), a.style.display = "inherit", D.appendChild(a), this.textSpans[t] = a, d += i.finalLineHeight;
                            this.layerElement.appendChild(D)
                        }
                        for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
                        this._sizeChanged = !0
                    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                            this._sizeChanged = !1;
                            var t = this.layerElement.getBBox();
                            this.bbox = {
                                top: t.y,
                                left: t.x,
                                width: t.width,
                                height: t.height
                            }
                        }
                        return this.bbox
                    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                        if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                            var t, e;
                            this._sizeChanged = !0;
                            var i, r, s = this.textAnimator.renderedLetters,
                                n = this.textProperty.currentData.l;
                            for (e = n.length, t = 0; t < e; t += 1) n[t].n || (i = s[t], r = this.textSpans[t], i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
                        }
                    }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                        var t, e, i, r, s = this.shapes.length,
                            n = this.stylesList.length,
                            a = [],
                            o = !1;
                        for (i = 0; i < n; i += 1) {
                            for (r = this.stylesList[i], o = !1, a.length = 0, t = 0; t < s; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(r) && (a.push(e), o = e._isAnimated || o);
                            a.length > 1 && o && this.setShapesAsAnimated(a)
                        }
                    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) t[e].setAsAnimated()
                    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                        var i, r = new SVGStyleData(t, e),
                            s = r.pElem;
                        return "st" === t.ty ? i = new SVGStrokeStyleData(this, t, r) : "fl" === t.ty ? i = new SVGFillStyleData(this, t, r) : "gf" !== t.ty && "gs" !== t.ty || (i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
                    }, SVGShapeElement.prototype.createGroupElement = function(t) {
                        var e = new ShapeGroupData;
                        return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
                    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                        var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                            r = new SVGTransformData(i, i.o, e);
                        return this.addToAnimatedContents(t, r), r
                    }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
                        var r = 4;
                        "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
                        var s = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
                        return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s
                    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                        for (var i = 0, r = this.animatedContents.length; i < r;) {
                            if (this.animatedContents[i].element === e) return;
                            i += 1
                        }
                        this.animatedContents.push({
                            fn: SVGElementsRenderer.createRenderFunction(t),
                            element: e,
                            data: t
                        })
                    }, SVGShapeElement.prototype.setElementStyles = function(t) {
                        var e, i = t.styles,
                            r = this.stylesList.length;
                        for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
                    }, SVGShapeElement.prototype.reloadShapes = function() {
                        var t;
                        this._isFirstFrame = !0;
                        var e = this.itemsData.length;
                        for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                        this.renderModifiers()
                    }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, s, n, a) {
                        var o, h, l, p, u, c, f = [].concat(n),
                            d = t.length - 1,
                            m = [],
                            g = [];
                        for (o = d; o >= 0; o -= 1) {
                            if ((c = this.searchProcessedElement(t[o])) ? e[o] = i[c - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty) c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), m.push(e[o].style);
                            else if ("gr" === t[o].ty) {
                                if (c)
                                    for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                                else e[o] = this.createGroupElement(t[o]);
                                this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, f, a), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr)
                            } else "tr" === t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, f.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], f, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (c ? (u = e[o]).closed = !1 : ((u = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = u, this.shapeModifiers.push(u)), g.push(u)) : "rp" === t[o].ty && (c ? (u = e[o]).closed = !0 : (u = ShapeModifiers.getModifier(t[o].ty), e[o] = u, u.init(this, t, o, e), this.shapeModifiers.push(u), a = !1), g.push(u));
                            this.addProcessedElement(t[o], o + 1)
                        }
                        for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
                        for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0
                    }, SVGShapeElement.prototype.renderInnerContent = function() {
                        var t;
                        this.renderModifiers();
                        var e = this.stylesList.length;
                        for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                        for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                    }, SVGShapeElement.prototype.renderShape = function() {
                        var t, e, i = this.animatedContents.length;
                        for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                    }, SVGShapeElement.prototype.destroy = function() {
                        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                    }, SVGTintFilter.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = this.filterManager.effectElements[0].p.v,
                                i = this.filterManager.effectElements[1].p.v,
                                r = this.filterManager.effectElements[2].p.v / 100;
                            this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
                        }
                    }, SVGFillFilter.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = this.filterManager.effectElements[2].p.v,
                                i = this.filterManager.effectElements[6].p.v;
                            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                        }
                    }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = .3 * this.filterManager.effectElements[0].p.v,
                                i = this.filterManager.effectElements[1].p.v,
                                r = 3 == i ? 0 : e,
                                s = 2 == i ? 0 : e;
                            this.feGaussianBlur.setAttribute("stdDeviation", r + " " + s);
                            var n = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                            this.feGaussianBlur.setAttribute("edgeMode", n)
                        }
                    }, SVGStrokeEffect.prototype.initialize = function() {
                        var t, e, i, r, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                        for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                            p: t,
                            m: i
                        });
                        if (3 === this.filterManager.effectElements[10].p.v) {
                            var n = createNS("mask"),
                                a = createElementID();
                            n.setAttribute("id", a), n.setAttribute("mask-type", "alpha"), n.appendChild(e), this.elem.globalData.defs.appendChild(n);
                            var o = createNS("g");
                            for (o.setAttribute("mask", "url(" + locationHref + "#" + a + ")"); s[0];) o.appendChild(s[0]);
                            this.elem.layerElement.appendChild(o), this.masker = n, e.setAttribute("stroke", "#fff")
                        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                            if (2 === this.filterManager.effectElements[10].p.v)
                                for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;) this.elem.layerElement.removeChild(s[0]);
                            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                        }
                        this.initialized = !0, this.pathMasker = e
                    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                        var e;
                        this.initialized || this.initialize();
                        var i, r, s = this.paths.length;
                        for (e = 0; e < s; e += 1)
                            if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                                var n;
                                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                    var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                        o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                        h = r.getTotalLength();
                                    n = "0 0 0 " + h * a + " ";
                                    var l, p = h * (o - a),
                                        u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                        c = Math.floor(p / u);
                                    for (l = 0; l < c; l += 1) n += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                    n += "0 " + 10 * h + " 0 0"
                                } else n = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                                r.setAttribute("stroke-dasharray", n)
                            }
                        if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                            var f = this.filterManager.effectElements[3].p.v;
                            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
                        }
                    }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = this.filterManager.effectElements[0].p.v,
                                i = this.filterManager.effectElements[1].p.v,
                                r = this.filterManager.effectElements[2].p.v,
                                s = r[0] + " " + i[0] + " " + e[0],
                                n = r[1] + " " + i[1] + " " + e[1],
                                a = r[2] + " " + i[2] + " " + e[2];
                            this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", n), this.feFuncB.setAttribute("tableValues", a)
                        }
                    }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                        var i = createNS(t);
                        return i.setAttribute("type", "table"), e.appendChild(i), i
                    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, s) {
                        for (var n, a, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                                length: 256
                            }), u = 0, c = s - r, f = e - t; o <= 256;) a = (n = o / 256) <= h ? f < 0 ? s : r : n >= l ? f < 0 ? r : s : r + c * Math.pow((n - t) / f, 1 / i), p[u] = a, u += 1, o += 256 / 255;
                        return p.join(" ")
                    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e, i = this.filterManager.effectElements;
                            this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                        }
                    }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                                var e = this.filterManager.effectElements[0].p.v;
                                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                            }
                            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                                var i = this.filterManager.effectElements[3].p.v,
                                    r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                    s = i * Math.cos(r),
                                    n = i * Math.sin(r);
                                this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", n)
                            }
                        }
                    };
                    var _svgMatteSymbols = [];

                    function SVGMatte3Effect(t, e, i) {
                        this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
                    }

                    function SVGEffects(t) {
                        var e, i, r = t.data.ef ? t.data.ef.length : 0,
                            s = createElementID(),
                            n = filtersFactory.createFilter(s, !0),
                            a = 0;
                        for (this.filters = [], e = 0; e < r; e += 1) i = null, 20 === t.data.ef[e].ty ? (a += 1, i = new SVGTintFilter(n, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (a += 1, i = new SVGFillFilter(n, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (a += 1, i = new SVGTritoneFilter(n, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (a += 1, i = new SVGProLevelsFilter(n, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (a += 1, i = new SVGDropShadowEffect(n, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(n, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (a += 1, i = new SVGGaussianBlurEffect(n, t.effectsManager.effectElements[e])), i && this.filters.push(i);
                        a && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
                    }

                    function CVContextData() {
                        var t;
                        for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                        this._length = 15
                    }

                    function CVBaseElement() {}

                    function CVImageElement(t, e, i) {
                        this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i)
                    }

                    function CVCompElement(t, e, i) {
                        this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function CVMaskElement(t, e) {
                        var i;
                        this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                        var r = this.masksProperties.length,
                            s = !1;
                        for (i = 0; i < r; i += 1) "n" !== this.masksProperties[i].mode && (s = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
                        this.hasMasks = s, s && this.element.addRenderableComponent(this)
                    }

                    function CVShapeElement(t, e, i) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
                    }

                    function CVSolidElement(t, e, i) {
                        this.initElement(t, e, i)
                    }

                    function CVTextElement(t, e, i) {
                        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                            fill: "rgba(0,0,0,0)",
                            stroke: "rgba(0,0,0,0)",
                            sWidth: 0,
                            fValue: ""
                        }, this.initElement(t, e, i)
                    }

                    function CVEffects() {}

                    function HBaseElement() {}

                    function HSolidElement(t, e, i) {
                        this.initElement(t, e, i)
                    }

                    function HCompElement(t, e, i) {
                        this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }
                    }

                    function HShapeElement(t, e, i) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
                            x: 999999,
                            y: -999999,
                            h: 0,
                            w: 0
                        }
                    }

                    function HTextElement(t, e, i) {
                        this.textSpans = [], this.textPaths = [], this.currentBBox = {
                            x: 999999,
                            y: -999999,
                            h: 0,
                            w: 0
                        }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
                    }

                    function HImageElement(t, e, i) {
                        this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
                    }

                    function HCameraElement(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
                        var r = PropertyFactory.getProp;
                        if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                            var s, n = t.ks.or.k.length;
                            for (s = 0; s < n; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
                        }
                        this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                            mProp: this
                        }
                    }

                    function HEffects() {}
                    SVGMatte3Effect.prototype.findSymbol = function(t) {
                        for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                            e += 1
                        }
                        return null
                    }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                        var i = t.layerElement.parentNode;
                        if (i) {
                            for (var r, s = i.children, n = 0, a = s.length; n < a && s[n] !== t.layerElement;) n += 1;
                            n <= a - 2 && (r = s[n + 1]);
                            var o = createNS("use");
                            o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o)
                        }
                    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                        if (!this.findSymbol(e)) {
                            var i = createElementID(),
                                r = createNS("mask");
                            r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                            var s = t.globalData.defs;
                            s.appendChild(r);
                            var n = createNS("symbol");
                            n.setAttribute("id", i), this.replaceInParent(e, i), n.appendChild(e.layerElement), s.appendChild(n);
                            var a = createNS("use");
                            a.setAttribute("href", "#" + i), r.appendChild(a), e.data.hd = !1, e.show()
                        }
                        t.setMatte(e.layerId)
                    }, SVGMatte3Effect.prototype.initialize = function() {
                        for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
                        this.initialized = !0
                    }, SVGMatte3Effect.prototype.renderFrame = function() {
                        this.initialized || this.initialize()
                    }, SVGEffects.prototype.renderFrame = function(t) {
                        var e, i = this.filters.length;
                        for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
                    }, CVContextData.prototype.duplicate = function() {
                        var t = 2 * this._length,
                            e = this.savedOp;
                        this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                        var i = 0;
                        for (i = this._length; i < t; i += 1) this.saved[i] = createTypedArray("float32", 16);
                        this._length = t
                    }, CVContextData.prototype.reset = function() {
                        this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                    }, CVBaseElement.prototype = {
                        createElements: function() {},
                        initRendererElement: function() {},
                        createContainerElements: function() {
                            this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
                        },
                        createContent: function() {},
                        setBlendMode: function() {
                            var t = this.globalData;
                            if (t.blendMode !== this.data.bm) {
                                t.blendMode = this.data.bm;
                                var e = getBlendMode(this.data.bm);
                                t.canvasContext.globalCompositeOperation = e
                            }
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new CVMaskElement(this.data, this)
                        },
                        hideElement: function() {
                            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                        },
                        showElement: function() {
                            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                        },
                        renderFrame: function() {
                            if (!this.hidden && !this.data.hd) {
                                this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                                var t = 0 === this.data.ty;
                                this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                            }
                        },
                        destroy: function() {
                            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                        },
                        mHelper: new Matrix
                    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                            var t = createTag("canvas");
                            t.width = this.assetData.w, t.height = this.assetData.h;
                            var e, i, r = t.getContext("2d"),
                                s = this.img.width,
                                n = this.img.height,
                                a = s / n,
                                o = this.assetData.w / this.assetData.h,
                                h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                            a > o && "xMidYMid slice" === h || a < o && "xMidYMid slice" !== h ? e = (i = n) * o : i = (e = s) / o, r.drawImage(this.img, (s - e) / 2, (n - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                        }
                    }, CVImageElement.prototype.renderInnerContent = function() {
                        this.canvasContext.drawImage(this.img, 0, 0)
                    }, CVImageElement.prototype.destroy = function() {
                        this.img = null
                    }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                        var t, e = this.canvasContext;
                        for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                    }, CVCompElement.prototype.destroy = function() {
                        var t;
                        for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                        this.layers = null, this.elements = null
                    }, CVMaskElement.prototype.renderFrame = function() {
                        if (this.hasMasks) {
                            var t, e, i, r, s = this.element.finalTransform.mat,
                                n = this.element.canvasContext,
                                a = this.masksProperties.length;
                            for (n.beginPath(), t = 0; t < a; t += 1)
                                if ("n" !== this.masksProperties[t].mode) {
                                    var o;
                                    this.masksProperties[t].inv && (n.moveTo(0, 0), n.lineTo(this.element.globalData.compSize.w, 0), n.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), n.lineTo(0, this.element.globalData.compSize.h), n.lineTo(0, 0)), r = this.viewData[t].v, e = s.applyToPointArray(r.v[0][0], r.v[0][1], 0), n.moveTo(e[0], e[1]);
                                    var h = r._length;
                                    for (o = 1; o < h; o += 1) i = s.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                                    i = s.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                                }
                            this.element.globalData.renderer.save(!0), n.clip()
                        }
                    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                        this.element = null
                    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                        opacity: 1,
                        _opMdf: !1
                    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                        var i = {
                                data: t,
                                type: t.ty,
                                preTransforms: this.transformsManager.addTransformSequence(e),
                                transforms: [],
                                elements: [],
                                closed: !0 === t.hd
                            },
                            r = {};
                        if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
                                k: 0
                            }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
                                k: 0
                            }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                            if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
                                var s = new DashProperty(this, t.d, "canvas", this);
                                r.d = s, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0])
                            }
                        } else i.r = 2 === t.r ? "evenodd" : "nonzero";
                        return this.stylesList.push(i), r.style = i, r
                    }, CVShapeElement.prototype.createGroupElement = function() {
                        return {
                            it: [],
                            prevViewData: []
                        }
                    }, CVShapeElement.prototype.createTransformElement = function(t) {
                        return {
                            transform: {
                                opacity: 1,
                                _opMdf: !1,
                                key: this.transformsManager.getNewKey(),
                                op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                                mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                            }
                        }
                    }, CVShapeElement.prototype.createShapeElement = function(t) {
                        var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                        return this.shapes.push(e), this.addShapeToModifiers(e), e
                    }, CVShapeElement.prototype.reloadShapes = function() {
                        var t;
                        this._isFirstFrame = !0;
                        var e = this.itemsData.length;
                        for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                        var e, i = this.stylesList.length;
                        for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
                    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                        var t, e = this.stylesList.length;
                        for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
                    }, CVShapeElement.prototype.closeStyles = function(t) {
                        var e, i = t.length;
                        for (e = 0; e < i; e += 1) t[e].closed = !0
                    }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, s) {
                        var n, a, o, h, l, p, u = t.length - 1,
                            c = [],
                            f = [],
                            d = [].concat(s);
                        for (n = u; n >= 0; n -= 1) {
                            if ((h = this.searchProcessedElement(t[n])) ? e[n] = i[h - 1] : t[n]._shouldRender = r, "fl" === t[n].ty || "st" === t[n].ty || "gf" === t[n].ty || "gs" === t[n].ty) h ? e[n].style.closed = !1 : e[n] = this.createStyleElement(t[n], d), c.push(e[n].style);
                            else if ("gr" === t[n].ty) {
                                if (h)
                                    for (o = e[n].it.length, a = 0; a < o; a += 1) e[n].prevViewData[a] = e[n].it[a];
                                else e[n] = this.createGroupElement(t[n]);
                                this.searchShapes(t[n].it, e[n].it, e[n].prevViewData, r, d)
                            } else "tr" === t[n].ty ? (h || (p = this.createTransformElement(t[n]), e[n] = p), d.push(e[n]), this.addTransformToStyleList(e[n])) : "sh" === t[n].ty || "rc" === t[n].ty || "el" === t[n].ty || "sr" === t[n].ty ? h || (e[n] = this.createShapeElement(t[n])) : "tm" === t[n].ty || "rd" === t[n].ty || "pb" === t[n].ty ? (h ? (l = e[n]).closed = !1 : ((l = ShapeModifiers.getModifier(t[n].ty)).init(this, t[n]), e[n] = l, this.shapeModifiers.push(l)), f.push(l)) : "rp" === t[n].ty && (h ? (l = e[n]).closed = !0 : (l = ShapeModifiers.getModifier(t[n].ty), e[n] = l, l.init(this, t, n, e), this.shapeModifiers.push(l), r = !1), f.push(l));
                            this.addProcessedElement(t[n], n + 1)
                        }
                        for (this.removeTransformFromStyleList(), this.closeStyles(c), u = f.length, n = 0; n < u; n += 1) f[n].closed = !0
                    }, CVShapeElement.prototype.renderInnerContent = function() {
                        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                        (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
                    }, CVShapeElement.prototype.drawLayer = function() {
                        var t, e, i, r, s, n, a, o, h, l = this.stylesList.length,
                            p = this.globalData.renderer,
                            u = this.globalData.canvasContext;
                        for (t = 0; t < l; t += 1)
                            if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                                for (p.save(), n = h.elements, "st" === o || "gs" === o ? (u.strokeStyle = "st" === o ? h.co : h.grd, u.lineWidth = h.wi, u.lineCap = h.lc, u.lineJoin = h.lj, u.miterLimit = h.ml || 0) : u.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && u.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = n.length, e = 0; e < i; e += 1) {
                                    for ("st" !== o && "gs" !== o || (u.beginPath(), h.da && (u.setLineDash(h.da), u.lineDashOffset = h.do)), s = (a = n[e].trNodes).length, r = 0; r < s; r += 1) "m" === a[r].t ? u.moveTo(a[r].p[0], a[r].p[1]) : "c" === a[r].t ? u.bezierCurveTo(a[r].pts[0], a[r].pts[1], a[r].pts[2], a[r].pts[3], a[r].pts[4], a[r].pts[5]) : u.closePath();
                                    "st" !== o && "gs" !== o || (u.stroke(), h.da && u.setLineDash(this.dashResetter))
                                }
                                "st" !== o && "gs" !== o && u.fill(h.r), p.restore()
                            }
                    }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
                        var s, n;
                        for (n = t, s = e.length - 1; s >= 0; s -= 1) "tr" === e[s].ty ? (n = i[s].transform, this.renderShapeTransform(t, n)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], i[s]) : "fl" === e[s].ty ? this.renderFill(e[s], i[s], n) : "st" === e[s].ty ? this.renderStroke(e[s], i[s], n) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], i[s], n) : "gr" === e[s].ty ? this.renderShape(n, e[s].it, i[s].it) : e[s].ty;
                        r && this.drawLayer()
                    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                        if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                            var i, r, s, n = t.trNodes,
                                a = e.paths,
                                o = a._length;
                            n.length = 0;
                            var h = t.transforms.finalTransform;
                            for (s = 0; s < o; s += 1) {
                                var l = a.shapes[s];
                                if (l && l.v) {
                                    for (r = l._length, i = 1; i < r; i += 1) 1 === i && n.push({
                                        t: "m",
                                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                    }), n.push({
                                        t: "c",
                                        pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                                    });
                                    1 === r && n.push({
                                        t: "m",
                                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                    }), l.c && r && (n.push({
                                        t: "c",
                                        pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                                    }), n.push({
                                        t: "z"
                                    }))
                                }
                            }
                            t.trNodes = n
                        }
                    }, CVShapeElement.prototype.renderPath = function(t, e) {
                        if (!0 !== t.hd && t._shouldRender) {
                            var i, r = e.styledShapes.length;
                            for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
                        }
                    }, CVShapeElement.prototype.renderFill = function(t, e, i) {
                        var r = e.style;
                        (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
                    }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
                        var r, s = e.style;
                        if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                            var n, a = this.globalData.canvasContext,
                                o = e.s.v,
                                h = e.e.v;
                            if (1 === t.t) r = a.createLinearGradient(o[0], o[1], h[0], h[1]);
                            else {
                                var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
                                    p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                                    u = e.h.v;
                                u >= 1 ? u = .99 : u <= -1 && (u = -.99);
                                var c = l * u,
                                    f = Math.cos(p + e.a.v) * c + o[0],
                                    d = Math.sin(p + e.a.v) * c + o[1];
                                r = a.createRadialGradient(f, d, 0, o[0], o[1], l)
                            }
                            var m = t.g.p,
                                g = e.g.c,
                                y = 1;
                            for (n = 0; n < m; n += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * n + 1]), r.addColorStop(g[4 * n] / 100, "rgba(" + g[4 * n + 1] + "," + g[4 * n + 2] + "," + g[4 * n + 3] + "," + y + ")");
                            s.grd = r
                        }
                        s.coOp = e.o.v * i.opacity
                    }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
                        var r = e.style,
                            s = e.d;
                        s && (s._mdf || this._isFirstFrame) && (r.da = s.dashArray, r.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
                    }, CVShapeElement.prototype.destroy = function() {
                        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                        var t = this.canvasContext;
                        t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
                    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                        var t = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                        var e = !1;
                        t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                        var i = !1;
                        t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                        var r, s, n, a, o, h, l, p, u, c, f, d, m = this.globalData.fontManager.getFontByName(t.f),
                            g = t.l,
                            y = this.mHelper;
                        this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
                        var v = this.data.singleShape,
                            _ = .001 * t.tr * t.finalSize,
                            D = 0,
                            b = 0,
                            x = !0,
                            E = 0;
                        for (r = 0; r < s; r += 1) {
                            for (a = (n = this.globalData.fontManager.getCharData(t.finalText[r], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && n.data || {}, y.reset(), v && g[r].n && (D = -_, b += t.yOffset, b += x ? 1 : 0, x = !1), u = (l = a.shapes ? a.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, y, g[r].line, D, b), f = createSizedArray(u), p = 0; p < u; p += 1) {
                                for (h = l[p].ks.k.i.length, c = l[p].ks.k, d = [], o = 1; o < h; o += 1) 1 === o && d.push(y.applyToX(c.v[0][0], c.v[0][1], 0), y.applyToY(c.v[0][0], c.v[0][1], 0)), d.push(y.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), y.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), y.applyToX(c.i[o][0], c.i[o][1], 0), y.applyToY(c.i[o][0], c.i[o][1], 0), y.applyToX(c.v[o][0], c.v[o][1], 0), y.applyToY(c.v[o][0], c.v[o][1], 0));
                                d.push(y.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), y.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), y.applyToX(c.i[0][0], c.i[0][1], 0), y.applyToY(c.i[0][0], c.i[0][1], 0), y.applyToX(c.v[0][0], c.v[0][1], 0), y.applyToY(c.v[0][0], c.v[0][1], 0)), f[p] = d
                            }
                            v && (D += g[r].l, D += _), this.textSpans[E] ? this.textSpans[E].elem = f : this.textSpans[E] = {
                                elem: f
                            }, E += 1
                        }
                    }, CVTextElement.prototype.renderInnerContent = function() {
                        var t, e, i, r, s, n, a = this.canvasContext;
                        a.font = this.values.fValue, a.lineCap = "butt", a.lineJoin = "miter", a.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                        var o, h = this.textAnimator.renderedLetters,
                            l = this.textProperty.currentData.l;
                        e = l.length;
                        var p, u, c = null,
                            f = null,
                            d = null;
                        for (t = 0; t < e; t += 1)
                            if (!l[t].n) {
                                if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                                    for (o && o.fc ? c !== o.fc && (c = o.fc, a.fillStyle = o.fc) : c !== this.values.fill && (c = this.values.fill, a.fillStyle = this.values.fill), r = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                        for (n = (u = p[i]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), s = 2; s < n; s += 6) this.globalData.canvasContext.bezierCurveTo(u[s], u[s + 1], u[s + 2], u[s + 3], u[s + 4], u[s + 5]);
                                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                                }
                                if (this.stroke) {
                                    for (o && o.sw ? d !== o.sw && (d = o.sw, a.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, a.lineWidth = this.values.sWidth), o && o.sc ? f !== o.sc && (f = o.sc, a.strokeStyle = o.sc) : f !== this.values.stroke && (f = this.values.stroke, a.strokeStyle = this.values.stroke), r = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                        for (n = (u = p[i]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), s = 2; s < n; s += 6) this.globalData.canvasContext.bezierCurveTo(u[s], u[s + 1], u[s + 2], u[s + 3], u[s + 4], u[s + 5]);
                                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                                }
                                o && this.globalData.renderer.restore()
                            }
                    }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
                        checkBlendMode: function() {},
                        initRendererElement: function() {
                            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                        },
                        createContainerElements: function() {
                            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                        },
                        renderElement: function() {
                            var t = this.transformedElement ? this.transformedElement.style : {};
                            if (this.finalTransform._matMdf) {
                                var e = this.finalTransform.mat.toCSS();
                                t.transform = e, t.webkitTransform = e
                            }
                            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                        },
                        renderFrame: function() {
                            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                        },
                        destroy: function() {
                            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new MaskElement(this.data, this, this.globalData)
                        },
                        addEffects: function() {},
                        setMatte: function() {}
                    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                        var t;
                        this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
                    }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                    }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                        for (var i, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
                        i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
                    }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                        var t;
                        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                        else {
                            t = createNS("svg");
                            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                            t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                        }
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
                    }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                        var i, r = t.length;
                        for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
                        return e
                    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                        var i, r, s, n, a, o = t.sh.v,
                            h = t.transformers,
                            l = o._length;
                        if (!(l <= 1)) {
                            for (i = 0; i < l - 1; i += 1) r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), n = this.getTransformedPoint(h, o.i[i + 1]), a = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(r, s, n, a, e);
                            o.c && (r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), n = this.getTransformedPoint(h, o.i[0]), a = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, s, n, a, e))
                        }
                    }, HShapeElement.prototype.checkBounds = function(t, e, i, r, s) {
                        this.getBoundsOfCurve(t, e, i, r);
                        var n = this.shapeBoundingBox;
                        s.x = bmMin(n.left, s.x), s.xMax = bmMax(n.right, s.xMax), s.y = bmMin(n.top, s.y), s.yMax = bmMax(n.bottom, s.yMax)
                    }, HShapeElement.prototype.shapeBoundingBox = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, HShapeElement.prototype.tempBoundingBox = {
                        x: 0,
                        xMax: 0,
                        y: 0,
                        yMax: 0,
                        width: 0,
                        height: 0
                    }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
                        for (var s, n, a, o, h, l, p, u = [
                                [t[0], r[0]],
                                [t[1], r[1]]
                            ], c = 0; c < 2; ++c) n = 6 * t[c] - 12 * e[c] + 6 * i[c], s = -3 * t[c] + 9 * e[c] - 9 * i[c] + 3 * r[c], a = 3 * e[c] - 3 * t[c], n |= 0, a |= 0, 0 == (s |= 0) && 0 === n || (0 === s ? (o = -a / n) > 0 && o < 1 && u[c].push(this.calculateF(o, t, e, i, r, c)) : (h = n * n - 4 * a * s) >= 0 && ((l = (-n + bmSqrt(h)) / (2 * s)) > 0 && l < 1 && u[c].push(this.calculateF(l, t, e, i, r, c)), (p = (-n - bmSqrt(h)) / (2 * s)) > 0 && p < 1 && u[c].push(this.calculateF(p, t, e, i, r, c))));
                        this.shapeBoundingBox.left = bmMin.apply(null, u[0]), this.shapeBoundingBox.top = bmMin.apply(null, u[1]), this.shapeBoundingBox.right = bmMax.apply(null, u[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, u[1])
                    }, HShapeElement.prototype.calculateF = function(t, e, i, r, s, n) {
                        return bmPow(1 - t, 3) * e[n] + 3 * bmPow(1 - t, 2) * t * i[n] + 3 * (1 - t) * bmPow(t, 2) * r[n] + bmPow(t, 3) * s[n]
                    }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                        var i, r = t.length;
                        for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e)
                    }, HShapeElement.prototype.currentBoxContains = function(t) {
                        return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                    }, HShapeElement.prototype.renderInnerContent = function() {
                        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var t = this.tempBoundingBox,
                                e = 999999;
                            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                            var i = !1;
                            if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                                this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                                var r = this.shapeCont.style,
                                    s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                r.transform = s, r.webkitTransform = s
                            }
                        }
                    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                        if (this.isMasked = this.checkMasks(), this.isMasked) {
                            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                            var t = createNS("g");
                            this.maskedElement.appendChild(t), this.innerElem = t
                        } else this.renderType = "html", this.innerElem = this.layerElement;
                        this.checkParenting()
                    }, HTextElement.prototype.buildNewText = function() {
                        var t = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                        var e = this.innerElem.style,
                            i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                        e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                        var r, s, n = this.globalData.fontManager.getFontByName(t.f);
                        if (!this.globalData.fontManager.chars)
                            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", n.fClass) this.innerElem.className = n.fClass;
                            else {
                                e.fontFamily = n.fFamily;
                                var a = t.fWeight,
                                    o = t.fStyle;
                                e.fontStyle = o, e.fontWeight = a
                            }
                        var h, l, p, u = t.l;
                        s = u.length;
                        var c, f = this.mHelper,
                            d = "",
                            m = 0;
                        for (r = 0; r < s; r += 1) {
                            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? h = this.textPaths[m] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? p = (l = this.textSpans[m]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (l = this.textSpans[m], h = this.textPaths[m]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
                                var g, y = this.globalData.fontManager.getCharData(t.finalText[r], n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                                if (g = y ? y.data : null, f.reset(), g && g.shapes && (c = g.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(f, c), h.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(h);
                                else {
                                    if (this.innerElem.appendChild(l), g && g.shapes) {
                                        document.body.appendChild(p);
                                        var v = p.getBBox();
                                        p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                        var _ = p.style,
                                            D = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                        _.transform = D, _.webkitTransform = D, u[r].yOffset = v.y - 1
                                    } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                                    l.appendChild(p)
                                }
                            } else if (h.textContent = u[r].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
                            else {
                                this.innerElem.appendChild(l);
                                var b = h.style,
                                    x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                                b.transform = x, b.webkitTransform = x
                            }
                            this.isMasked ? this.textSpans[m] = h : this.textSpans[m] = l, this.textSpans[m].style.display = "block", this.textPaths[m] = h, m += 1
                        }
                        for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
                    }, HTextElement.prototype.renderInnerContent = function() {
                        var t;
                        if (this.data.singleShape) {
                            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                            if (this.isMasked && this.finalTransform._matMdf) {
                                this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                                var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                                t.transform = e, t.webkitTransform = e
                            }
                        }
                        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                            var i, r, s, n, a, o = 0,
                                h = this.textAnimator.renderedLetters,
                                l = this.textProperty.currentData.l;
                            for (r = l.length, i = 0; i < r; i += 1) l[i].n ? o += 1 : (n = this.textSpans[i], a = this.textPaths[i], s = h[o], o += 1, s._mdf.m && (this.isMasked ? n.setAttribute("transform", s.m) : (n.style.webkitTransform = s.m, n.style.transform = s.m)), n.style.opacity = s.o, s.sw && s._mdf.sw && a.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && a.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (a.setAttribute("fill", s.fc), a.style.color = s.fc));
                            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                                var p = this.innerElem.getBBox();
                                if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                                    this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                                    var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                    t.transform = u, t.webkitTransform = u
                                }
                            }
                        }
                    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData),
                            e = new Image;
                        this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                    }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                        var t, e, i, r, s = this.comp.threeDElements.length;
                        for (t = 0; t < s; t += 1)
                            if ("3d" === (e = this.comp.threeDElements[t]).type) {
                                i = e.perspectiveElem.style, r = e.container.style;
                                var n = this.pe.v + "px",
                                    a = "0px 0px 0px",
                                    o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                                i.perspective = n, i.webkitPerspective = n, r.transformOrigin = a, r.mozTransformOrigin = a, r.webkitTransformOrigin = a, i.transform = o, i.webkitTransform = o
                            }
                    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                        var t, e, i = this._isFirstFrame;
                        if (this.hierarchy)
                            for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
                        if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                            if (this.mat.reset(), this.hierarchy)
                                for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                                    var r = this.hierarchy[t].finalTransform.mProp;
                                    this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                                }
                            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                                var s;
                                s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                                var n = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
                                    a = [s[0] / n, s[1] / n, s[2] / n],
                                    o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                                    h = Math.atan2(a[1], o),
                                    l = Math.atan2(a[0], -a[2]);
                                this.mat.rotateY(l).rotateX(-h)
                            }
                            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                            var p = !this._prevMat.equals(this.mat);
                            if ((p || this.pe._mdf) && this.comp.threeDElements) {
                                var u, c, f;
                                for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                                    if ("3d" === (u = this.comp.threeDElements[t]).type) {
                                        if (p) {
                                            var d = this.mat.toCSS();
                                            (f = u.container.style).transform = d, f.webkitTransform = d
                                        }
                                        this.pe._mdf && ((c = u.perspectiveElem.style).perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px")
                                    }
                                this.mat.clone(this._prevMat)
                            }
                        }
                        this._isFirstFrame = !1
                    }, HCameraElement.prototype.prepareFrame = function(t) {
                        this.prepareProperties(t, !0)
                    }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                        return null
                    }, HEffects.prototype.renderFrame = function() {};
                    var animationManager = function() {
                            var t = {},
                                e = [],
                                i = 0,
                                r = 0,
                                s = 0,
                                n = !0,
                                a = !1;

                            function o(t) {
                                for (var i = 0, s = t.target; i < r;) e[i].animation === s && (e.splice(i, 1), i -= 1, r -= 1, s.isPaused || p()), i += 1
                            }

                            function h(t, i) {
                                if (!t) return null;
                                for (var s = 0; s < r;) {
                                    if (e[s].elem === t && null !== e[s].elem) return e[s].animation;
                                    s += 1
                                }
                                var n = new AnimationItem;
                                return u(n, t), n.setData(t, i), n
                            }

                            function l() {
                                s += 1, d()
                            }

                            function p() {
                                s -= 1
                            }

                            function u(t, i) {
                                t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                                    elem: i,
                                    animation: t
                                }), r += 1
                            }

                            function c(t) {
                                var o, h = t - i;
                                for (o = 0; o < r; o += 1) e[o].animation.advanceTime(h);
                                i = t, s && !a ? window.requestAnimationFrame(c) : n = !0
                            }

                            function f(t) {
                                i = t, window.requestAnimationFrame(c)
                            }

                            function d() {
                                !a && s && n && (window.requestAnimationFrame(f), n = !1)
                            }
                            return t.registerAnimation = h, t.loadAnimation = function(t) {
                                var e = new AnimationItem;
                                return u(e, null), e.setParams(t), e
                            }, t.setSpeed = function(t, i) {
                                var s;
                                for (s = 0; s < r; s += 1) e[s].animation.setSpeed(t, i)
                            }, t.setDirection = function(t, i) {
                                var s;
                                for (s = 0; s < r; s += 1) e[s].animation.setDirection(t, i)
                            }, t.play = function(t) {
                                var i;
                                for (i = 0; i < r; i += 1) e[i].animation.play(t)
                            }, t.pause = function(t) {
                                var i;
                                for (i = 0; i < r; i += 1) e[i].animation.pause(t)
                            }, t.stop = function(t) {
                                var i;
                                for (i = 0; i < r; i += 1) e[i].animation.stop(t)
                            }, t.togglePause = function(t) {
                                var i;
                                for (i = 0; i < r; i += 1) e[i].animation.togglePause(t)
                            }, t.searchAnimations = function(t, e, i) {
                                var r, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                    n = s.length;
                                for (r = 0; r < n; r += 1) i && s[r].setAttribute("data-bm-type", i), h(s[r], t);
                                if (e && 0 === n) {
                                    i || (i = "svg");
                                    var a = document.getElementsByTagName("body")[0];
                                    a.innerText = "";
                                    var o = createTag("div");
                                    o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), a.appendChild(o), h(o, t)
                                }
                            }, t.resize = function() {
                                var t;
                                for (t = 0; t < r; t += 1) e[t].animation.resize()
                            }, t.goToAndStop = function(t, i, s) {
                                var n;
                                for (n = 0; n < r; n += 1) e[n].animation.goToAndStop(t, i, s)
                            }, t.destroy = function(t) {
                                var i;
                                for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                            }, t.freeze = function() {
                                a = !0
                            }, t.unfreeze = function() {
                                a = !1, d()
                            }, t.setVolume = function(t, i) {
                                var s;
                                for (s = 0; s < r; s += 1) e[s].animation.setVolume(t, i)
                            }, t.mute = function(t) {
                                var i;
                                for (i = 0; i < r; i += 1) e[i].animation.mute(t)
                            }, t.unmute = function(t) {
                                var i;
                                for (i = 0; i < r; i += 1) e[i].animation.unmute(t)
                            }, t.getRegisteredAnimations = function() {
                                var t, i = e.length,
                                    r = [];
                                for (t = 0; t < i; t += 1) r.push(e[t].animation);
                                return r
                            }, t
                        }(),
                        AnimationItem = function() {
                            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this)
                        };
                    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                        (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                        var e = "svg";
                        switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                            case "canvas":
                                this.renderer = new CanvasRenderer(this, t.rendererSettings);
                                break;
                            case "svg":
                                this.renderer = new SVGRenderer(this, t.rendererSettings);
                                break;
                            default:
                                this.renderer = new HybridRenderer(this, t.rendererSettings)
                        }
                        this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                    }, AnimationItem.prototype.onSetupError = function() {
                        this.trigger("data_failed")
                    }, AnimationItem.prototype.setupAnimation = function(t) {
                        dataManager.completeAnimation(t, this.configAnimation)
                    }, AnimationItem.prototype.setData = function(t, e) {
                        e && "object" != typeof e && (e = JSON.parse(e));
                        var i = {
                                wrapper: t,
                                animationData: e
                            },
                            r = t.attributes;
                        i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
                        var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
                        "false" === s ? i.loop = !1 : "true" === s ? i.loop = !0 : "" !== s && (i.loop = parseInt(s, 10));
                        var n = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
                        i.autoplay = "false" !== n, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
                    }, AnimationItem.prototype.includeLayers = function(t) {
                        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                        var e, i, r = this.animationData.layers,
                            s = r.length,
                            n = t.layers,
                            a = n.length;
                        for (i = 0; i < a; i += 1)
                            for (e = 0; e < s;) {
                                if (r[e].id === n[i].id) {
                                    r[e] = n[i];
                                    break
                                }
                                e += 1
                            }
                        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                            for (s = t.assets.length, e = 0; e < s; e += 1) this.animationData.assets.push(t.assets[e]);
                        this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
                    }, AnimationItem.prototype.onSegmentComplete = function(t) {
                        this.animationData = t, expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
                    }, AnimationItem.prototype.loadNextSegment = function() {
                        var t = this.animationData.segments;
                        if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                        var e = t.shift();
                        this.timeCompleted = e.time * this.frameRate;
                        var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                        this.segmentPos += 1, dataManager.loadData(i, this.includeLayers.bind(this), function() {
                            this.trigger("data_failed")
                        }.bind(this))
                    }, AnimationItem.prototype.loadSegments = function() {
                        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                    }, AnimationItem.prototype.imagesLoaded = function() {
                        this.trigger("loaded_images"), this.checkLoaded()
                    }, AnimationItem.prototype.preloadImages = function() {
                        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                    }, AnimationItem.prototype.configAnimation = function(t) {
                        if (this.renderer) try {
                            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                        } catch (t) {
                            this.triggerConfigError(t)
                        }
                    }, AnimationItem.prototype.waitForFontsLoaded = function() {
                        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                    }, AnimationItem.prototype.checkLoaded = function() {
                        !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                            this.trigger("DOMLoaded")
                        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
                    }, AnimationItem.prototype.resize = function() {
                        this.renderer.updateContainerSize()
                    }, AnimationItem.prototype.setSubframe = function(t) {
                        this.isSubframeEnabled = !!t
                    }, AnimationItem.prototype.gotoFrame = function() {
                        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                    }, AnimationItem.prototype.renderFrame = function() {
                        if (!1 !== this.isLoaded && this.renderer) try {
                            this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                        } catch (t) {
                            this.triggerRenderFrameError(t)
                        }
                    }, AnimationItem.prototype.play = function(t) {
                        t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                    }, AnimationItem.prototype.pause = function(t) {
                        t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                    }, AnimationItem.prototype.togglePause = function(t) {
                        t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                    }, AnimationItem.prototype.stop = function(t) {
                        t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                    }, AnimationItem.prototype.getMarkerData = function(t) {
                        for (var e, i = 0; i < this.markers.length; i += 1)
                            if ((e = this.markers[i]).payload && e.payload.name === t) return e;
                        return null
                    }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
                        if (!i || this.name === i) {
                            var r = Number(t);
                            if (isNaN(r)) {
                                var s = this.getMarkerData(t);
                                s && this.goToAndStop(s.time, !0)
                            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                            this.pause()
                        }
                    }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
                        if (!i || this.name === i) {
                            var r = Number(t);
                            if (isNaN(r)) {
                                var s = this.getMarkerData(t);
                                s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
                            } else this.goToAndStop(r, e, i);
                            this.play()
                        }
                    }, AnimationItem.prototype.advanceTime = function(t) {
                        if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                            var e = this.currentRawFrame + t * this.frameModifier,
                                i = !1;
                            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                        }
                    }, AnimationItem.prototype.adjustSegment = function(t, e) {
                        this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                    }, AnimationItem.prototype.setSegment = function(t, e) {
                        var i = -1;
                        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
                    }, AnimationItem.prototype.playSegments = function(t, e) {
                        if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                            var i, r = t.length;
                            for (i = 0; i < r; i += 1) this.segments.push(t[i])
                        } else this.segments.push(t);
                        this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                    }, AnimationItem.prototype.resetSegments = function(t) {
                        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                    }, AnimationItem.prototype.checkSegments = function(t) {
                        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                    }, AnimationItem.prototype.destroy = function(t) {
                        t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                        this.currentRawFrame = t, this.gotoFrame()
                    }, AnimationItem.prototype.setSpeed = function(t) {
                        this.playSpeed = t, this.updaFrameModifier()
                    }, AnimationItem.prototype.setDirection = function(t) {
                        this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                    }, AnimationItem.prototype.setVolume = function(t, e) {
                        e && this.name !== e || this.audioController.setVolume(t)
                    }, AnimationItem.prototype.getVolume = function() {
                        return this.audioController.getVolume()
                    }, AnimationItem.prototype.mute = function(t) {
                        t && this.name !== t || this.audioController.mute()
                    }, AnimationItem.prototype.unmute = function(t) {
                        t && this.name !== t || this.audioController.unmute()
                    }, AnimationItem.prototype.updaFrameModifier = function() {
                        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                    }, AnimationItem.prototype.getPath = function() {
                        return this.path
                    }, AnimationItem.prototype.getAssetsPath = function(t) {
                        var e = "";
                        if (t.e) e = t.p;
                        else if (this.assetsPath) {
                            var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                        } else e = this.path, e += t.u ? t.u : "", e += t.p;
                        return e
                    }, AnimationItem.prototype.getAssetData = function(t) {
                        for (var e = 0, i = this.assets.length; e < i;) {
                            if (t === this.assets[e].id) return this.assets[e];
                            e += 1
                        }
                        return null
                    }, AnimationItem.prototype.hide = function() {
                        this.renderer.hide()
                    }, AnimationItem.prototype.show = function() {
                        this.renderer.show()
                    }, AnimationItem.prototype.getDuration = function(t) {
                        return t ? this.totalFrames : this.totalFrames / this.frameRate
                    }, AnimationItem.prototype.trigger = function(t) {
                        if (this._cbs && this._cbs[t]) switch (t) {
                            case "enterFrame":
                            case "drawnFrame":
                                this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                                break;
                            case "loopComplete":
                                this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                                break;
                            case "complete":
                                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                                break;
                            case "segmentStart":
                                this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                                break;
                            case "destroy":
                                this.triggerEvent(t, new BMDestroyEvent(t, this));
                                break;
                            default:
                                this.triggerEvent(t)
                        }
                        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
                    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                        var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                    }, AnimationItem.prototype.triggerConfigError = function(t) {
                        var e = new BMConfigErrorEvent(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                    };
                    var Expressions = function() {
                        var t = {
                            initExpressions: function(t) {
                                var e = 0,
                                    i = [];
                                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                                    e += 1
                                }, t.renderer.globalData.popExpression = function() {
                                    0 == (e -= 1) && function() {
                                        var t, e = i.length;
                                        for (t = 0; t < e; t += 1) i[t].release();
                                        i.length = 0
                                    }()
                                }, t.renderer.globalData.registerExpressionProperty = function(t) {
                                    -1 === i.indexOf(t) && i.push(t)
                                }
                            }
                        };
                        return t
                    }();
                    expressionsPlugin = Expressions;
                    var ExpressionManager = function() {
                            var ob = {},
                                Math = BMMath,
                                window = null,
                                document = null,
                                XMLHttpRequest = null,
                                fetch = null,
                                frames = null;

                            function $bm_isInstanceOfArray(t) {
                                return t.constructor === Array || t.constructor === Float32Array
                            }

                            function isNumerable(t, e) {
                                return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                            }

                            function $bm_neg(t) {
                                var e = typeof t;
                                if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                                if ($bm_isInstanceOfArray(t)) {
                                    var i, r = t.length,
                                        s = [];
                                    for (i = 0; i < r; i += 1) s[i] = -t[i];
                                    return s
                                }
                                return t.propType ? t.v : -t
                            }
                            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                                easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                                easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                            function sum(t, e) {
                                var i = typeof t,
                                    r = typeof e;
                                if ("string" === i || "string" === r) return t + e;
                                if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
                                if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] += e, t;
                                if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                    for (var s = 0, n = t.length, a = e.length, o = []; s < n || s < a;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                                    return o
                                }
                                return 0
                            }
                            var add = sum;

                            function sub(t, e) {
                                var i = typeof t,
                                    r = typeof e;
                                if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
                                if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] -= e, t;
                                if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                    for (var s = 0, n = t.length, a = e.length, o = []; s < n || s < a;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                                    return o
                                }
                                return 0
                            }

                            function mul(t, e) {
                                var i, r, s, n = typeof t,
                                    a = typeof e;
                                if (isNumerable(n, t) && isNumerable(a, e)) return t * e;
                                if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                                    for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] * e;
                                    return i
                                }
                                if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                                    for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t * e[r];
                                    return i
                                }
                                return 0
                            }

                            function div(t, e) {
                                var i, r, s, n = typeof t,
                                    a = typeof e;
                                if (isNumerable(n, t) && isNumerable(a, e)) return t / e;
                                if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                                    for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] / e;
                                    return i
                                }
                                if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                                    for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t / e[r];
                                    return i
                                }
                                return 0
                            }

                            function mod(t, e) {
                                return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
                            }
                            var $bm_sum = sum,
                                $bm_sub = sub,
                                $bm_mul = mul,
                                $bm_div = div,
                                $bm_mod = mod;

                            function clamp(t, e, i) {
                                if (e > i) {
                                    var r = i;
                                    i = e, e = r
                                }
                                return Math.min(Math.max(t, e), i)
                            }

                            function radiansToDegrees(t) {
                                return t / degToRads
                            }
                            var radians_to_degrees = radiansToDegrees;

                            function degreesToRadians(t) {
                                return t * degToRads
                            }
                            var degrees_to_radians = radiansToDegrees,
                                helperLengthArray = [0, 0, 0, 0, 0, 0];

                            function length(t, e) {
                                if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                                var i;
                                e || (e = helperLengthArray);
                                var r = Math.min(t.length, e.length),
                                    s = 0;
                                for (i = 0; i < r; i += 1) s += Math.pow(e[i] - t[i], 2);
                                return Math.sqrt(s)
                            }

                            function normalize(t) {
                                return div(t, length(t))
                            }

                            function rgbToHsl(t) {
                                var e, i, r = t[0],
                                    s = t[1],
                                    n = t[2],
                                    a = Math.max(r, s, n),
                                    o = Math.min(r, s, n),
                                    h = (a + o) / 2;
                                if (a === o) e = 0, i = 0;
                                else {
                                    var l = a - o;
                                    switch (i = h > .5 ? l / (2 - a - o) : l / (a + o), a) {
                                        case r:
                                            e = (s - n) / l + (s < n ? 6 : 0);
                                            break;
                                        case s:
                                            e = (n - r) / l + 2;
                                            break;
                                        case n:
                                            e = (r - s) / l + 4
                                    }
                                    e /= 6
                                }
                                return [e, i, h, t[3]]
                            }

                            function hue2rgb(t, e, i) {
                                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                            }

                            function hslToRgb(t) {
                                var e, i, r, s = t[0],
                                    n = t[1],
                                    a = t[2];
                                if (0 === n) e = a, r = a, i = a;
                                else {
                                    var o = a < .5 ? a * (1 + n) : a + n - a * n,
                                        h = 2 * a - o;
                                    e = hue2rgb(h, o, s + 1 / 3), i = hue2rgb(h, o, s), r = hue2rgb(h, o, s - 1 / 3)
                                }
                                return [e, i, r, t[3]]
                            }

                            function linear(t, e, i, r, s) {
                                if (void 0 !== r && void 0 !== s || (r = e, s = i, e = 0, i = 1), i < e) {
                                    var n = i;
                                    i = e, e = n
                                }
                                if (t <= e) return r;
                                if (t >= i) return s;
                                var a, o = i === e ? 0 : (t - e) / (i - e);
                                if (!r.length) return r + (s - r) * o;
                                var h = r.length,
                                    l = createTypedArray("float32", h);
                                for (a = 0; a < h; a += 1) l[a] = r[a] + (s[a] - r[a]) * o;
                                return l
                            }

                            function random(t, e) {
                                if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                                    var i, r = e.length;
                                    t || (t = createTypedArray("float32", r));
                                    var s = createTypedArray("float32", r),
                                        n = BMMath.random();
                                    for (i = 0; i < r; i += 1) s[i] = t[i] + n * (e[i] - t[i]);
                                    return s
                                }
                                return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                            }

                            function createPath(t, e, i, r) {
                                var s, n = t.length,
                                    a = shapePool.newElement();
                                a.setPathData(!!r, n);
                                var o, h, l = [0, 0];
                                for (s = 0; s < n; s += 1) o = e && e[s] ? e[s] : l, h = i && i[s] ? i[s] : l, a.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
                                return a
                            }

                            function initiateExpression(elem, data, property) {
                                var val = data.x,
                                    needsVelocity = /velocity(?![\w\d])/.test(val),
                                    _needsRandom = -1 !== val.indexOf("random"),
                                    elemType = elem.data.ty,
                                    transform, $bm_transform, content, effect, thisProperty = property;
                                thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                    get: function() {
                                        return thisProperty.v
                                    }
                                }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                    outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                    width = elem.data.sw ? elem.data.sw : 0,
                                    height = elem.data.sh ? elem.data.sh : 0,
                                    name = elem.data.nm,
                                    loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                    numKeys = property.kf ? data.k.length : 0,
                                    active = !this.data || !0 !== this.data.hd,
                                    wiggle = function(t, e) {
                                        var i, r, s = this.pv.length ? this.pv.length : 1,
                                            n = createTypedArray("float32", s),
                                            a = Math.floor(5 * time);
                                        for (i = 0, r = 0; i < a;) {
                                            for (r = 0; r < s; r += 1) n[r] += -e + 2 * e * BMMath.random();
                                            i += 1
                                        }
                                        var o = 5 * time,
                                            h = o - Math.floor(o),
                                            l = createTypedArray("float32", s);
                                        if (s > 1) {
                                            for (r = 0; r < s; r += 1) l[r] = this.pv[r] + n[r] + (-e + 2 * e * BMMath.random()) * h;
                                            return l
                                        }
                                        return this.pv + n[0] + (-e + 2 * e * BMMath.random()) * h
                                    }.bind(this);

                                function loopInDuration(t, e) {
                                    return loopIn(t, e, !0)
                                }

                                function loopOutDuration(t, e) {
                                    return loopOut(t, e, !0)
                                }
                                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                                    time, velocity, value, text, textIndex, textTotal, selectorValue;

                                function lookAt(t, e) {
                                    var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                        r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                                    return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
                                }

                                function easeOut(t, e, i, r, s) {
                                    return applyEase(easeOutBez, t, e, i, r, s)
                                }

                                function easeIn(t, e, i, r, s) {
                                    return applyEase(easeInBez, t, e, i, r, s)
                                }

                                function ease(t, e, i, r, s) {
                                    return applyEase(easeInOutBez, t, e, i, r, s)
                                }

                                function applyEase(t, e, i, r, s, n) {
                                    void 0 === s ? (s = i, n = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                                    var a = t(e);
                                    if ($bm_isInstanceOfArray(s)) {
                                        var o, h = s.length,
                                            l = createTypedArray("float32", h);
                                        for (o = 0; o < h; o += 1) l[o] = (n[o] - s[o]) * a + s[o];
                                        return l
                                    }
                                    return (n - s) * a + s
                                }

                                function nearestKey(t) {
                                    var e, i, r, s = data.k.length;
                                    if (data.k.length && "number" != typeof data.k[0])
                                        if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
                                        else {
                                            for (e = 0; e < s - 1; e += 1) {
                                                if (t === data.k[e].t) {
                                                    i = e + 1, r = data.k[e].t;
                                                    break
                                                }
                                                if (t > data.k[e].t && t < data.k[e + 1].t) {
                                                    t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                                                    break
                                                }
                                            } - 1 === i && (i = e + 1, r = data.k[e].t)
                                        }
                                    else i = 0, r = 0;
                                    var n = {};
                                    return n.index = i, n.time = r / elem.comp.globalData.frameRate, n
                                }

                                function key(t) {
                                    var e, i, r;
                                    if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                                    t -= 1, e = {
                                        time: data.k[t].t / elem.comp.globalData.frameRate,
                                        value: []
                                    };
                                    var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                                    for (r = s.length, i = 0; i < r; i += 1) e[i] = s[i], e.value[i] = s[i];
                                    return e
                                }

                                function framesToTime(t, e) {
                                    return e || (e = elem.comp.globalData.frameRate), t / e
                                }

                                function timeToFrames(t, e) {
                                    return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                                }

                                function seedRandom(t) {
                                    BMMath.seedrandom(randSeed + t)
                                }

                                function sourceRectAtTime() {
                                    return elem.sourceRectAtTime()
                                }

                                function substring(t, e) {
                                    return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                                }

                                function substr(t, e) {
                                    return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                                }

                                function posterizeTime(t) {
                                    time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                                }
                                var index = elem.data.ind,
                                    hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                    parent, randSeed = Math.floor(1e6 * Math.random()),
                                    globalData = elem.globalData;

                                function executeExpression(t) {
                                    return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                                }
                                return executeExpression
                            }
                            return ob.initiateExpression = initiateExpression, ob
                        }(),
                        expressionHelpers = {
                            searchExpressions: function(t, e, i) {
                                e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
                            },
                            getSpeedAtTime: function(t) {
                                var e = this.getValueAtTime(t),
                                    i = this.getValueAtTime(t + -.01),
                                    r = 0;
                                if (e.length) {
                                    var s;
                                    for (s = 0; s < e.length; s += 1) r += Math.pow(i[s] - e[s], 2);
                                    r = 100 * Math.sqrt(r)
                                } else r = 0;
                                return r
                            },
                            getVelocityAtTime: function(t) {
                                if (void 0 !== this.vel) return this.vel;
                                var e, i, r = -.001,
                                    s = this.getValueAtTime(t),
                                    n = this.getValueAtTime(t + r);
                                if (s.length)
                                    for (e = createTypedArray("float32", s.length), i = 0; i < s.length; i += 1) e[i] = (n[i] - s[i]) / r;
                                else e = (n - s) / r;
                                return e
                            },
                            getValueAtTime: function(t) {
                                return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                            },
                            getStaticValueAtTime: function() {
                                return this.pv
                            },
                            setGroupProperty: function(t) {
                                this.propertyGroup = t
                            }
                        };
                    ! function() {
                        function t(t, e, i) {
                            if (!this.k || !this.keyframes) return this.pv;
                            t = t ? t.toLowerCase() : "";
                            var r, s, n, a, o, h = this.comp.renderedFrame,
                                l = this.keyframes,
                                p = l[l.length - 1].t;
                            if (h <= p) return this.pv;
                            if (i ? s = p - (r = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) {
                                if (Math.floor((h - s) / r) % 2 != 0) return this.getValueAtTime((r - (h - s) % r + s) / this.comp.globalData.frameRate, 0)
                            } else {
                                if ("offset" === t) {
                                    var u = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                                        c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                        f = this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0),
                                        d = Math.floor((h - s) / r);
                                    if (this.pv.length) {
                                        for (a = (o = new Array(u.length)).length, n = 0; n < a; n += 1) o[n] = (c[n] - u[n]) * d + f[n];
                                        return o
                                    }
                                    return (c - u) * d + f
                                }
                                if ("continue" === t) {
                                    var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                        g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                                    if (this.pv.length) {
                                        for (a = (o = new Array(m.length)).length, n = 0; n < a; n += 1) o[n] = m[n] + (m[n] - g[n]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                        return o
                                    }
                                    return m + (h - p) / .001 * (m - g)
                                }
                            }
                            return this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0)
                        }

                        function e(t, e, i) {
                            if (!this.k) return this.pv;
                            t = t ? t.toLowerCase() : "";
                            var r, s, n, a, o, h = this.comp.renderedFrame,
                                l = this.keyframes,
                                p = l[0].t;
                            if (h >= p) return this.pv;
                            if (i ? s = p + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = (s = l[e].t) - p), "pingpong" === t) {
                                if (Math.floor((p - h) / r) % 2 == 0) return this.getValueAtTime(((p - h) % r + p) / this.comp.globalData.frameRate, 0)
                            } else {
                                if ("offset" === t) {
                                    var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                        c = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                                        f = this.getValueAtTime((r - (p - h) % r + p) / this.comp.globalData.frameRate, 0),
                                        d = Math.floor((p - h) / r) + 1;
                                    if (this.pv.length) {
                                        for (a = (o = new Array(u.length)).length, n = 0; n < a; n += 1) o[n] = f[n] - (c[n] - u[n]) * d;
                                        return o
                                    }
                                    return f - (c - u) * d
                                }
                                if ("continue" === t) {
                                    var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                        g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                                    if (this.pv.length) {
                                        for (a = (o = new Array(m.length)).length, n = 0; n < a; n += 1) o[n] = m[n] + (m[n] - g[n]) * (p - h) / .001;
                                        return o
                                    }
                                    return m + (m - g) * (p - h) / .001
                                }
                            }
                            return this.getValueAtTime((r - ((p - h) % r + p)) / this.comp.globalData.frameRate, 0)
                        }

                        function i(t, e) {
                            if (!this.k) return this.pv;
                            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                            var i, r, s = this.comp.renderedFrame / this.comp.globalData.frameRate,
                                n = s - t,
                                a = e > 1 ? (s + t - n) / (e - 1) : 1,
                                o = 0,
                                h = 0;
                            for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                                if (r = this.getValueAtTime(n + o * a), this.pv.length)
                                    for (h = 0; h < this.pv.length; h += 1) i[h] += r[h];
                                else i += r;
                                o += 1
                            }
                            if (this.pv.length)
                                for (h = 0; h < this.pv.length; h += 1) i[h] /= e;
                            else i /= e;
                            return i
                        }

                        function r(t) {
                            this._transformCachingAtTime || (this._transformCachingAtTime = {
                                v: new Matrix
                            });
                            var e = this._transformCachingAtTime.v;
                            if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                                var i = this.a.getValueAtTime(t);
                                e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                            }
                            if (this.appliedTransformations < 2) {
                                var r = this.s.getValueAtTime(t);
                                e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
                            }
                            if (this.sk && this.appliedTransformations < 3) {
                                var s = this.sk.getValueAtTime(t),
                                    n = this.sa.getValueAtTime(t);
                                e.skewFromAxis(-s * this.sk.mult, n * this.sa.mult)
                            }
                            if (this.r && this.appliedTransformations < 4) {
                                var a = this.r.getValueAtTime(t);
                                e.rotate(-a * this.r.mult)
                            } else if (!this.r && this.appliedTransformations < 4) {
                                var o = this.rz.getValueAtTime(t),
                                    h = this.ry.getValueAtTime(t),
                                    l = this.rx.getValueAtTime(t),
                                    p = this.or.getValueAtTime(t);
                                e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
                            }
                            if (this.data.p && this.data.p.s) {
                                var u = this.px.getValueAtTime(t),
                                    c = this.py.getValueAtTime(t);
                                if (this.data.p.z) {
                                    var f = this.pz.getValueAtTime(t);
                                    e.translate(u * this.px.mult, c * this.py.mult, -f * this.pz.mult)
                                } else e.translate(u * this.px.mult, c * this.py.mult, 0)
                            } else {
                                var d = this.p.getValueAtTime(t);
                                e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
                            }
                            return e
                        }

                        function s() {
                            return this.v.clone(new Matrix)
                        }
                        var n = TransformPropertyFactory.getTransformProperty;
                        TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                            var a = n(t, e, i);
                            return a.dynamicProperties.length ? a.getValueAtTime = r.bind(a) : a.getValueAtTime = s.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a
                        };
                        var a = PropertyFactory.getProp;
                        PropertyFactory.getProp = function(r, s, n, o, h) {
                            var l = a(r, s, n, o, h);
                            l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = i, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === s.a ? s.k.length : 0, l.propertyIndex = s.ix;
                            var p = 0;
                            return 0 !== n && (p = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), l._cachingAtTime = {
                                lastFrame: initialDefaultFrame,
                                lastIndex: 0,
                                value: p
                            }, expressionHelpers.searchExpressions(r, s, l), l.k && h.addDynamicProperty(l), l
                        };
                        var o = ShapePropertyFactory.getConstructorFunction(),
                            h = ShapePropertyFactory.getKeyframedConstructorFunction();

                        function l() {}
                        l.prototype = {
                            vertices: function(t, e) {
                                this.k && this.getValue();
                                var i, r = this.v;
                                void 0 !== e && (r = this.getValueAtTime(e, 0));
                                var s = r._length,
                                    n = r[t],
                                    a = r.v,
                                    o = createSizedArray(s);
                                for (i = 0; i < s; i += 1) o[i] = "i" === t || "o" === t ? [n[i][0] - a[i][0], n[i][1] - a[i][1]] : [n[i][0], n[i][1]];
                                return o
                            },
                            points: function(t) {
                                return this.vertices("v", t)
                            },
                            inTangents: function(t) {
                                return this.vertices("i", t)
                            },
                            outTangents: function(t) {
                                return this.vertices("o", t)
                            },
                            isClosed: function() {
                                return this.v.c
                            },
                            pointOnPath: function(t, e) {
                                var i = this.v;
                                void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                                for (var r, s = this._segmentsLength, n = s.lengths, a = s.totalLength * t, o = 0, h = n.length, l = 0; o < h;) {
                                    if (l + n[o].addedLength > a) {
                                        var p = o,
                                            u = i.c && o === h - 1 ? 0 : o + 1,
                                            c = (a - l) / n[o].addedLength;
                                        r = bez.getPointInSegment(i.v[p], i.v[u], i.o[p], i.i[u], c, n[o]);
                                        break
                                    }
                                    l += n[o].addedLength, o += 1
                                }
                                return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r
                            },
                            vectorOnPath: function(t, e, i) {
                                1 == t ? t = this.v.c : 0 == t && (t = .999);
                                var r = this.pointOnPath(t, e),
                                    s = this.pointOnPath(t + .001, e),
                                    n = s[0] - r[0],
                                    a = s[1] - r[1],
                                    o = Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
                                return 0 === o ? [0, 0] : "tangent" === i ? [n / o, a / o] : [-a / o, n / o]
                            },
                            tangentOnPath: function(t, e) {
                                return this.vectorOnPath(t, e, "tangent")
                            },
                            normalOnPath: function(t, e) {
                                return this.vectorOnPath(t, e, "normal")
                            },
                            setGroupProperty: expressionHelpers.setGroupProperty,
                            getValueAtTime: expressionHelpers.getStaticValueAtTime
                        }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t) {
                            return this._cachingAtTime || (this._cachingAtTime = {
                                shapeValue: shapePool.clone(this.pv),
                                lastIndex: 0,
                                lastTime: initialDefaultFrame
                            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                        }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
                        var p = ShapePropertyFactory.getShapeProp;
                        ShapePropertyFactory.getShapeProp = function(t, e, i, r, s) {
                            var n = p(t, e, i, r, s);
                            return n.propertyIndex = e.ix, n.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, n) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, n), n.k && t.addDynamicProperty(n), n
                        }
                    }(), TextProperty.prototype.getExpressionValue = function(t, e) {
                        var i = this.calculateExpression(e);
                        if (t.t !== i) {
                            var r = {};
                            return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r
                        }
                        return t
                    }, TextProperty.prototype.searchProperty = function() {
                        var t = this.searchKeyframes(),
                            e = this.searchExpressions();
                        return this.kf = t || e, this.kf
                    }, TextProperty.prototype.searchExpressions = function() {
                        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                    };
                    var ShapePathInterface = function(t, e, i) {
                            var r = e.sh;

                            function s(t) {
                                return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? s.path : null
                            }
                            var n = propertyGroupFactory(s, i);
                            return r.setGroupProperty(PropertyInterface("Path", n)), Object.defineProperties(s, {
                                path: {
                                    get: function() {
                                        return r.k && r.getValue(), r
                                    }
                                },
                                shape: {
                                    get: function() {
                                        return r.k && r.getValue(), r
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                ix: {
                                    value: t.ix
                                },
                                propertyIndex: {
                                    value: t.ix
                                },
                                mn: {
                                    value: t.mn
                                },
                                propertyGroup: {
                                    value: i
                                }
                            }), s
                        },
                        propertyGroupFactory = function(t, e) {
                            return function(i) {
                                return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
                            }
                        },
                        PropertyInterface = function(t, e) {
                            var i = {
                                _name: t
                            };
                            return function(t) {
                                return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
                            }
                        },
                        ShapeExpressionInterface = function() {
                            function t(t, a, c) {
                                var f, d = [],
                                    m = t ? t.length : 0;
                                for (f = 0; f < m; f += 1) "gr" === t[f].ty ? d.push(e(t[f], a[f], c)) : "fl" === t[f].ty ? d.push(i(t[f], a[f], c)) : "st" === t[f].ty ? d.push(s(t[f], a[f], c)) : "tm" === t[f].ty ? d.push(n(t[f], a[f], c)) : "tr" === t[f].ty || ("el" === t[f].ty ? d.push(o(t[f], a[f], c)) : "sr" === t[f].ty ? d.push(h(t[f], a[f], c)) : "sh" === t[f].ty ? d.push(ShapePathInterface(t[f], a[f], c)) : "rc" === t[f].ty ? d.push(l(t[f], a[f], c)) : "rd" === t[f].ty ? d.push(p(t[f], a[f], c)) : "rp" === t[f].ty ? d.push(u(t[f], a[f], c)) : "gf" === t[f].ty ? d.push(r(t[f], a[f], c)) : d.push((t[f], a[f], function() {
                                    return null
                                })));
                                return d
                            }

                            function e(e, i, r) {
                                var s = function(t) {
                                    switch (t) {
                                        case "ADBE Vectors Group":
                                        case "Contents":
                                        case 2:
                                            return s.content;
                                        default:
                                            return s.transform
                                    }
                                };
                                s.propertyGroup = propertyGroupFactory(s, r);
                                var n = function(e, i, r) {
                                        var s, n = function(t) {
                                            for (var e = 0, i = s.length; e < i;) {
                                                if (s[e]._name === t || s[e].mn === t || s[e].propertyIndex === t || s[e].ix === t || s[e].ind === t) return s[e];
                                                e += 1
                                            }
                                            return "number" == typeof t ? s[t - 1] : null
                                        };
                                        n.propertyGroup = propertyGroupFactory(n, r), s = t(e.it, i.it, n.propertyGroup), n.numProperties = s.length;
                                        var o = a(e.it[e.it.length - 1], i.it[i.it.length - 1], n.propertyGroup);
                                        return n.transform = o, n.propertyIndex = e.cix, n._name = e.nm, n
                                    }(e, i, s.propertyGroup),
                                    o = a(e.it[e.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
                                return s.content = n, s.transform = o, Object.defineProperty(s, "_name", {
                                    get: function() {
                                        return e.nm
                                    }
                                }), s.numProperties = e.np, s.propertyIndex = e.ix, s.nm = e.nm, s.mn = e.mn, s
                            }

                            function i(t, e, i) {
                                function r(t) {
                                    return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
                                }
                                return Object.defineProperties(r, {
                                    color: {
                                        get: ExpressionPropertyInterface(e.c)
                                    },
                                    opacity: {
                                        get: ExpressionPropertyInterface(e.o)
                                    },
                                    _name: {
                                        value: t.nm
                                    },
                                    mn: {
                                        value: t.mn
                                    }
                                }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
                            }

                            function r(t, e, i) {
                                function r(t) {
                                    return "Start Point" === t || "start point" === t ? r.startPoint : "End Point" === t || "end point" === t ? r.endPoint : "Opacity" === t || "opacity" === t ? r.opacity : null
                                }
                                return Object.defineProperties(r, {
                                    startPoint: {
                                        get: ExpressionPropertyInterface(e.s)
                                    },
                                    endPoint: {
                                        get: ExpressionPropertyInterface(e.e)
                                    },
                                    opacity: {
                                        get: ExpressionPropertyInterface(e.o)
                                    },
                                    type: {
                                        get: function() {
                                            return "a"
                                        }
                                    },
                                    _name: {
                                        value: t.nm
                                    },
                                    mn: {
                                        value: t.mn
                                    }
                                }), e.s.setGroupProperty(PropertyInterface("Start Point", i)), e.e.setGroupProperty(PropertyInterface("End Point", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
                            }

                            function s(t, e, i) {
                                var r, s = propertyGroupFactory(l, i),
                                    n = propertyGroupFactory(h, s);

                                function a(i) {
                                    Object.defineProperty(h, t.d[i].nm, {
                                        get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                                    })
                                }
                                var o = t.d ? t.d.length : 0,
                                    h = {};
                                for (r = 0; r < o; r += 1) a(r), e.d.dataProps[r].p.setGroupProperty(n);

                                function l(t) {
                                    return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
                                }
                                return Object.defineProperties(l, {
                                    color: {
                                        get: ExpressionPropertyInterface(e.c)
                                    },
                                    opacity: {
                                        get: ExpressionPropertyInterface(e.o)
                                    },
                                    strokeWidth: {
                                        get: ExpressionPropertyInterface(e.w)
                                    },
                                    dash: {
                                        get: function() {
                                            return h
                                        }
                                    },
                                    _name: {
                                        value: t.nm
                                    },
                                    mn: {
                                        value: t.mn
                                    }
                                }), e.c.setGroupProperty(PropertyInterface("Color", s)), e.o.setGroupProperty(PropertyInterface("Opacity", s)), e.w.setGroupProperty(PropertyInterface("Stroke Width", s)), l
                            }

                            function n(t, e, i) {
                                function r(e) {
                                    return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
                                }
                                var s = propertyGroupFactory(r, i);
                                return r.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", s)), e.e.setGroupProperty(PropertyInterface("End", s)), e.o.setGroupProperty(PropertyInterface("Offset", s)), r.propertyIndex = t.ix, r.propertyGroup = i, Object.defineProperties(r, {
                                    start: {
                                        get: ExpressionPropertyInterface(e.s)
                                    },
                                    end: {
                                        get: ExpressionPropertyInterface(e.e)
                                    },
                                    offset: {
                                        get: ExpressionPropertyInterface(e.o)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), r.mn = t.mn, r
                            }

                            function a(t, e, i) {
                                function r(e) {
                                    return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
                                }
                                var s = propertyGroupFactory(r, i);
                                return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", s)), Object.defineProperties(r, {
                                    opacity: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.o)
                                    },
                                    position: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.p)
                                    },
                                    anchorPoint: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.a)
                                    },
                                    scale: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.s)
                                    },
                                    rotation: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.r)
                                    },
                                    skew: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                    },
                                    skewAxis: {
                                        get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), r.ty = "tr", r.mn = t.mn, r.propertyGroup = i, r
                            }

                            function o(t, e, i) {
                                function r(e) {
                                    return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
                                }
                                var s = propertyGroupFactory(r, i);
                                r.propertyIndex = t.ix;
                                var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                                return n.s.setGroupProperty(PropertyInterface("Size", s)), n.p.setGroupProperty(PropertyInterface("Position", s)), Object.defineProperties(r, {
                                    size: {
                                        get: ExpressionPropertyInterface(n.s)
                                    },
                                    position: {
                                        get: ExpressionPropertyInterface(n.p)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), r.mn = t.mn, r
                            }

                            function h(t, e, i) {
                                function r(e) {
                                    return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
                                }
                                var s = propertyGroupFactory(r, i),
                                    n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                                return r.propertyIndex = t.ix, n.or.setGroupProperty(PropertyInterface("Outer Radius", s)), n.os.setGroupProperty(PropertyInterface("Outer Roundness", s)), n.pt.setGroupProperty(PropertyInterface("Points", s)), n.p.setGroupProperty(PropertyInterface("Position", s)), n.r.setGroupProperty(PropertyInterface("Rotation", s)), t.ir && (n.ir.setGroupProperty(PropertyInterface("Inner Radius", s)), n.is.setGroupProperty(PropertyInterface("Inner Roundness", s))), Object.defineProperties(r, {
                                    position: {
                                        get: ExpressionPropertyInterface(n.p)
                                    },
                                    rotation: {
                                        get: ExpressionPropertyInterface(n.r)
                                    },
                                    points: {
                                        get: ExpressionPropertyInterface(n.pt)
                                    },
                                    outerRadius: {
                                        get: ExpressionPropertyInterface(n.or)
                                    },
                                    outerRoundness: {
                                        get: ExpressionPropertyInterface(n.os)
                                    },
                                    innerRadius: {
                                        get: ExpressionPropertyInterface(n.ir)
                                    },
                                    innerRoundness: {
                                        get: ExpressionPropertyInterface(n.is)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), r.mn = t.mn, r
                            }

                            function l(t, e, i) {
                                function r(e) {
                                    return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
                                }
                                var s = propertyGroupFactory(r, i),
                                    n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                                return r.propertyIndex = t.ix, n.p.setGroupProperty(PropertyInterface("Position", s)), n.s.setGroupProperty(PropertyInterface("Size", s)), n.r.setGroupProperty(PropertyInterface("Rotation", s)), Object.defineProperties(r, {
                                    position: {
                                        get: ExpressionPropertyInterface(n.p)
                                    },
                                    roundness: {
                                        get: ExpressionPropertyInterface(n.r)
                                    },
                                    size: {
                                        get: ExpressionPropertyInterface(n.s)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), r.mn = t.mn, r
                            }

                            function p(t, e, i) {
                                function r(e) {
                                    return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
                                }
                                var s = propertyGroupFactory(r, i),
                                    n = e;
                                return r.propertyIndex = t.ix, n.rd.setGroupProperty(PropertyInterface("Radius", s)), Object.defineProperties(r, {
                                    radius: {
                                        get: ExpressionPropertyInterface(n.rd)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), r.mn = t.mn, r
                            }

                            function u(t, e, i) {
                                function r(e) {
                                    return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
                                }
                                var s = propertyGroupFactory(r, i),
                                    n = e;
                                return r.propertyIndex = t.ix, n.c.setGroupProperty(PropertyInterface("Copies", s)), n.o.setGroupProperty(PropertyInterface("Offset", s)), Object.defineProperties(r, {
                                    copies: {
                                        get: ExpressionPropertyInterface(n.c)
                                    },
                                    offset: {
                                        get: ExpressionPropertyInterface(n.o)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), r.mn = t.mn, r
                            }
                            return function(e, i, r) {
                                var s;

                                function n(t) {
                                    if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? r : s[t - 1];
                                    for (var e = 0, i = s.length; e < i;) {
                                        if (s[e]._name === t) return s[e];
                                        e += 1
                                    }
                                    return null
                                }
                                return n.propertyGroup = propertyGroupFactory(n, (function() {
                                    return r
                                })), s = t(e, i, n.propertyGroup), n.numProperties = s.length, n._name = "Contents", n
                            }
                        }(),
                        TextExpressionInterface = function(t) {
                            var e, i;

                            function r(t) {
                                return "ADBE Text Document" === t ? r.sourceText : null
                            }
                            return Object.defineProperty(r, "sourceText", {
                                get: function() {
                                    t.textProperty.getValue();
                                    var r = t.textProperty.currentData.t;
                                    return r !== e && (t.textProperty.currentData.t = e, (i = new String(r)).value = r || new String(r)), i
                                }
                            }), r
                        },
                        LayerExpressionInterface = function() {
                            function t(t) {
                                var e = new Matrix;
                                return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
                            }

                            function e(t, e) {
                                var i = this.getMatrix(e);
                                return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
                            }

                            function i(t, e) {
                                var i = this.getMatrix(e);
                                return this.applyPoint(i, t)
                            }

                            function r(t, e) {
                                var i = this.getMatrix(e);
                                return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
                            }

                            function s(t, e) {
                                var i = this.getMatrix(e);
                                return this.invertPoint(i, t)
                            }

                            function n(t, e) {
                                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                    var i, r = this._elem.hierarchy.length;
                                    for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                                }
                                return t.applyToPointArray(e[0], e[1], e[2] || 0)
                            }

                            function a(t, e) {
                                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                    var i, r = this._elem.hierarchy.length;
                                    for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                                }
                                return t.inversePoint(e)
                            }

                            function o(t) {
                                var e = new Matrix;
                                if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                                    var i, r = this._elem.hierarchy.length;
                                    for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                                    return e.inversePoint(t)
                                }
                                return e.inversePoint(t)
                            }

                            function h() {
                                return [1, 1, 1, 1]
                            }
                            return function(l) {
                                var p;

                                function u(t) {
                                    switch (t) {
                                        case "ADBE Root Vectors Group":
                                        case "Contents":
                                        case 2:
                                            return u.shapeInterface;
                                        case 1:
                                        case 6:
                                        case "Transform":
                                        case "transform":
                                        case "ADBE Transform Group":
                                            return p;
                                        case 4:
                                        case "ADBE Effect Parade":
                                        case "effects":
                                        case "Effects":
                                            return u.effect;
                                        case "ADBE Text Properties":
                                            return u.textInterface;
                                        default:
                                            return null
                                    }
                                }
                                u.getMatrix = t, u.invertPoint = a, u.applyPoint = n, u.toWorld = i, u.toWorldVec = e, u.fromWorld = s, u.fromWorldVec = r, u.toComp = i, u.fromComp = o, u.sampleImage = h, u.sourceRectAtTime = l.sourceRectAtTime.bind(l), u._elem = l;
                                var c = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
                                return Object.defineProperties(u, {
                                    hasParent: {
                                        get: function() {
                                            return l.hierarchy.length
                                        }
                                    },
                                    parent: {
                                        get: function() {
                                            return l.hierarchy[0].layerInterface
                                        }
                                    },
                                    rotation: getDescriptor(p, "rotation"),
                                    scale: getDescriptor(p, "scale"),
                                    position: getDescriptor(p, "position"),
                                    opacity: getDescriptor(p, "opacity"),
                                    anchorPoint: c,
                                    anchor_point: c,
                                    transform: {
                                        get: function() {
                                            return p
                                        }
                                    },
                                    active: {
                                        get: function() {
                                            return l.isInRange
                                        }
                                    }
                                }), u.startTime = l.data.st, u.index = l.data.ind, u.source = l.data.refId, u.height = 0 === l.data.ty ? l.data.h : 100, u.width = 0 === l.data.ty ? l.data.w : 100, u.inPoint = l.data.ip / l.comp.globalData.frameRate, u.outPoint = l.data.op / l.comp.globalData.frameRate, u._name = l.data.nm, u.registerMaskInterface = function(t) {
                                    u.mask = new MaskManagerInterface(t, l)
                                }, u.registerEffectsInterface = function(t) {
                                    u.effect = t
                                }, u
                            }
                        }(),
                        FootageInterface = (dataInterfaceFactory = function(t) {
                            function e(t) {
                                return "Outline" === t ? e.outlineInterface() : null
                            }
                            return e._name = "Outline", e.outlineInterface = function(t) {
                                var e = "",
                                    i = t.getFootageData();

                                function r(t) {
                                    if (i[t]) return e = t, "object" == typeof(i = i[t]) ? r : i;
                                    var s = t.indexOf(e);
                                    if (-1 !== s) {
                                        var n = parseInt(t.substr(s + e.length), 10);
                                        return "object" == typeof(i = i[n]) ? r : i
                                    }
                                    return ""
                                }
                                return function() {
                                    return e = "", i = t.getFootageData(), r
                                }
                            }(t), e
                        }, function(t) {
                            function e(t) {
                                return "Data" === t ? e.dataInterface : null
                            }
                            return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
                        }),
                        dataInterfaceFactory, CompExpressionInterface = function(t) {
                            function e(e) {
                                for (var i = 0, r = t.layers.length; i < r;) {
                                    if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
                                    i += 1
                                }
                                return null
                            }
                            return Object.defineProperty(e, "_name", {
                                value: t.data.nm
                            }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                        },
                        TransformExpressionInterface = function(t) {
                            function e(t) {
                                switch (t) {
                                    case "scale":
                                    case "Scale":
                                    case "ADBE Scale":
                                    case 6:
                                        return e.scale;
                                    case "rotation":
                                    case "Rotation":
                                    case "ADBE Rotation":
                                    case "ADBE Rotate Z":
                                    case 10:
                                        return e.rotation;
                                    case "ADBE Rotate X":
                                        return e.xRotation;
                                    case "ADBE Rotate Y":
                                        return e.yRotation;
                                    case "position":
                                    case "Position":
                                    case "ADBE Position":
                                    case 2:
                                        return e.position;
                                    case "ADBE Position_0":
                                        return e.xPosition;
                                    case "ADBE Position_1":
                                        return e.yPosition;
                                    case "ADBE Position_2":
                                        return e.zPosition;
                                    case "anchorPoint":
                                    case "AnchorPoint":
                                    case "Anchor Point":
                                    case "ADBE AnchorPoint":
                                    case 1:
                                        return e.anchorPoint;
                                    case "opacity":
                                    case "Opacity":
                                    case 11:
                                        return e.opacity;
                                    default:
                                        return null
                                }
                            }
                            var i, r, s, n;
                            return Object.defineProperty(e, "rotation", {
                                get: ExpressionPropertyInterface(t.r || t.rz)
                            }), Object.defineProperty(e, "zRotation", {
                                get: ExpressionPropertyInterface(t.rz || t.r)
                            }), Object.defineProperty(e, "xRotation", {
                                get: ExpressionPropertyInterface(t.rx)
                            }), Object.defineProperty(e, "yRotation", {
                                get: ExpressionPropertyInterface(t.ry)
                            }), Object.defineProperty(e, "scale", {
                                get: ExpressionPropertyInterface(t.s)
                            }), t.p ? n = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                                get: function() {
                                    return t.p ? n() : [i(), r(), s ? s() : 0]
                                }
                            }), Object.defineProperty(e, "xPosition", {
                                get: ExpressionPropertyInterface(t.px)
                            }), Object.defineProperty(e, "yPosition", {
                                get: ExpressionPropertyInterface(t.py)
                            }), Object.defineProperty(e, "zPosition", {
                                get: ExpressionPropertyInterface(t.pz)
                            }), Object.defineProperty(e, "anchorPoint", {
                                get: ExpressionPropertyInterface(t.a)
                            }), Object.defineProperty(e, "opacity", {
                                get: ExpressionPropertyInterface(t.o)
                            }), Object.defineProperty(e, "skew", {
                                get: ExpressionPropertyInterface(t.sk)
                            }), Object.defineProperty(e, "skewAxis", {
                                get: ExpressionPropertyInterface(t.sa)
                            }), Object.defineProperty(e, "orientation", {
                                get: ExpressionPropertyInterface(t.or)
                            }), e
                        },
                        ProjectInterface = function() {
                            function t(t) {
                                this.compositions.push(t)
                            }
                            return function() {
                                function e(t) {
                                    for (var e = 0, i = this.compositions.length; e < i;) {
                                        if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                        e += 1
                                    }
                                    return null
                                }
                                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                            }
                        }(),
                        EffectsExpressionInterface = function() {
                            function t(i, r, s, n) {
                                function a(t) {
                                    for (var e = i.ef, r = 0, s = e.length; r < s;) {
                                        if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? l[r] : l[r]();
                                        r += 1
                                    }
                                    throw new Error
                                }
                                var o, h = propertyGroupFactory(a, s),
                                    l = [],
                                    p = i.ef.length;
                                for (o = 0; o < p; o += 1) 5 === i.ef[o].ty ? l.push(t(i.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, n)) : l.push(e(r.effectElements[o], i.ef[o].ty, n, h));
                                return "ADBE Color Control" === i.mn && Object.defineProperty(a, "color", {
                                    get: function() {
                                        return l[0]()
                                    }
                                }), Object.defineProperties(a, {
                                    numProperties: {
                                        get: function() {
                                            return i.np
                                        }
                                    },
                                    _name: {
                                        value: i.nm
                                    },
                                    propertyGroup: {
                                        value: h
                                    }
                                }), a.enabled = 0 !== i.en, a.active = a.enabled, a
                            }

                            function e(t, e, i, r) {
                                var s = ExpressionPropertyInterface(t.p);
                                return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)),
                                    function() {
                                        return 10 === e ? i.comp.compInterface(t.p.v) : s()
                                    }
                            }
                            return {
                                createEffectsInterface: function(e, i) {
                                    if (e.effectsManager) {
                                        var r, s = [],
                                            n = e.data.ef,
                                            a = e.effectsManager.effectElements.length;
                                        for (r = 0; r < a; r += 1) s.push(t(n[r], e.effectsManager.effectElements[r], i, e));
                                        var o = e.data.ef || [],
                                            h = function(t) {
                                                for (r = 0, a = o.length; r < a;) {
                                                    if (t === o[r].nm || t === o[r].mn || t === o[r].ix) return s[r];
                                                    r += 1
                                                }
                                                return null
                                            };
                                        return Object.defineProperty(h, "numProperties", {
                                            get: function() {
                                                return o.length
                                            }
                                        }), h
                                    }
                                    return null
                                }
                            }
                        }(),
                        MaskManagerInterface = function() {
                            function t(t, e) {
                                this._mask = t, this._data = e
                            }
                            return Object.defineProperty(t.prototype, "maskPath", {
                                    get: function() {
                                        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                    }
                                }), Object.defineProperty(t.prototype, "maskOpacity", {
                                    get: function() {
                                        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                    }
                                }),
                                function(e) {
                                    var i, r = createSizedArray(e.viewData.length),
                                        s = e.viewData.length;
                                    for (i = 0; i < s; i += 1) r[i] = new t(e.viewData[i], e.masksProperties[i]);
                                    return function(t) {
                                        for (i = 0; i < s;) {
                                            if (e.masksProperties[i].nm === t) return r[i];
                                            i += 1
                                        }
                                        return null
                                    }
                                }
                        }(),
                        ExpressionPropertyInterface = function() {
                            var t = {
                                    pv: 0,
                                    v: 0,
                                    mult: 1
                                },
                                e = {
                                    pv: [0, 0, 0],
                                    v: [0, 0, 0],
                                    mult: 1
                                };

                            function i(t, e, i) {
                                Object.defineProperty(t, "velocity", {
                                    get: function() {
                                        return e.getVelocityAtTime(e.comp.currentFrame)
                                    }
                                }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(r) {
                                    if (!t.numKeys) return 0;
                                    var s = "";
                                    s = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                                    var n = "unidimensional" === i ? new Number(s) : Object.assign({}, s);
                                    return n.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, n.value = "unidimensional" === i ? s[0] : s, n
                                }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                            }

                            function r() {
                                return t
                            }
                            return function(s) {
                                return s ? "unidimensional" === s.propType ? function(e) {
                                    e && "pv" in e || (e = t);
                                    var r = 1 / e.mult,
                                        s = e.pv * r,
                                        n = new Number(s);
                                    return n.value = s, i(n, e, "unidimensional"),
                                        function() {
                                            return e.k && e.getValue(), s = e.v * r, n.value !== s && ((n = new Number(s)).value = s, i(n, e, "unidimensional")), n
                                        }
                                }(s) : function(t) {
                                    t && "pv" in t || (t = e);
                                    var r = 1 / t.mult,
                                        s = t.data && t.data.l || t.pv.length,
                                        n = createTypedArray("float32", s),
                                        a = createTypedArray("float32", s);
                                    return n.value = a, i(n, t, "multidimensional"),
                                        function() {
                                            t.k && t.getValue();
                                            for (var e = 0; e < s; e += 1) a[e] = t.v[e] * r, n[e] = a[e];
                                            return n
                                        }
                                }(s) : r
                            }
                        }(),
                        TextExpressionSelectorPropFactory = function() {
                            function t(t, e) {
                                return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
                            }
                            return function(e, i) {
                                this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = i.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, i, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
                            }
                        }(),
                        propertyGetTextProp = TextSelectorProp.getTextSelectorProp;

                    function SliderEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                    }

                    function AngleEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                    }

                    function ColorEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
                    }

                    function PointEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
                    }

                    function LayerIndexEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                    }

                    function MaskIndexEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                    }

                    function CheckboxEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                    }

                    function NoValueEffect() {
                        this.p = {}
                    }

                    function EffectsManager(t, e) {
                        var i, r = t.ef || [];
                        this.effectElements = [];
                        var s, n = r.length;
                        for (i = 0; i < n; i += 1) s = new GroupEffect(r[i], e), this.effectElements.push(s)
                    }

                    function GroupEffect(t, e) {
                        this.init(t, e)
                    }
                    TextSelectorProp.getTextSelectorProp = function(t, e, i) {
                        return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, i) : propertyGetTextProp(t, e, i)
                    }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                        var i;
                        this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                        var r, s = this.data.ef.length,
                            n = this.data.ef;
                        for (i = 0; i < s; i += 1) {
                            switch (r = null, n[i].ty) {
                                case 0:
                                    r = new SliderEffect(n[i], e, this);
                                    break;
                                case 1:
                                    r = new AngleEffect(n[i], e, this);
                                    break;
                                case 2:
                                    r = new ColorEffect(n[i], e, this);
                                    break;
                                case 3:
                                    r = new PointEffect(n[i], e, this);
                                    break;
                                case 4:
                                case 7:
                                    r = new CheckboxEffect(n[i], e, this);
                                    break;
                                case 10:
                                    r = new LayerIndexEffect(n[i], e, this);
                                    break;
                                case 11:
                                    r = new MaskIndexEffect(n[i], e, this);
                                    break;
                                case 5:
                                    r = new EffectsManager(n[i], e, this);
                                    break;
                                default:
                                    r = new NoValueEffect(n[i], e, this)
                            }
                            r && this.effectElements.push(r)
                        }
                    };
                    var lottie = {};

                    function setLocationHref(t) {
                        locationHref = t
                    }

                    function searchAnimations() {
                        !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                    }

                    function setSubframeRendering(t) {
                        subframeEnabled = t
                    }

                    function setIDPrefix(t) {
                        idPrefix = t
                    }

                    function loadAnimation(t) {
                        return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
                    }

                    function setQuality(t) {
                        if ("string" == typeof t) switch (t) {
                            case "high":
                                defaultCurveSegments = 200;
                                break;
                            default:
                                defaultCurveSegments = 50;
                                break;
                            case "low":
                                defaultCurveSegments = 10
                        } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
                        roundValues(!(defaultCurveSegments >= 50))
                    }

                    function inBrowser() {
                        return "undefined" != typeof navigator
                    }

                    function installPlugin(t, e) {
                        "expressions" === t && (expressionsPlugin = e)
                    }

                    function getFactory(t) {
                        switch (t) {
                            case "propertyFactory":
                                return PropertyFactory;
                            case "shapePropertyFactory":
                                return ShapePropertyFactory;
                            case "matrix":
                                return Matrix;
                            default:
                                return null
                        }
                    }

                    function checkReady() {
                        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                    }

                    function getQueryVariable(t) {
                        for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                            var r = e[i].split("=");
                            if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
                        }
                        return null
                    }
                    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = function(t) {
                        _useWebWorker = t
                    }, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.8.1";
                    var standalone = "__[STANDALONE]__",
                        animationData = "__[ANIMATIONDATA]__",
                        renderer = "",
                        queryString;
                    if (standalone) {
                        var scripts = document.getElementsByTagName("script"),
                            index = scripts.length - 1,
                            myScript = scripts[index] || {
                                src: ""
                            };
                        queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")
                    }
                    var readyStateCheckInterval = setInterval(checkReady, 100);
                    return lottie
                }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return factory(root)
                }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(t) {
        var e = __webpack_module_cache__[t];
        if (void 0 !== e) return e.exports;
        var i = __webpack_module_cache__[t] = {
            exports: {}
        };
        return __webpack_modules__[t].call(i.exports, i, i.exports, __webpack_require__), i.exports
    }
    __webpack_require__.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return __webpack_require__.d(e, {
            a: e
        }), e
    }, __webpack_require__.d = (t, e) => {
        for (var i in e) __webpack_require__.o(e, i) && !__webpack_require__.o(t, i) && Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
        })
    }, __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var __webpack_exports__ = {};
    (() => {
        "use strict";

        function t(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function e(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }
        var i, r, s, n, a, o, h, l, p, u, c, f, d, m = {
                autoSleep: 120,
                force3D: "auto",
                nullTargetWarn: 1,
                units: {
                    lineHeight: ""
                }
            },
            g = {
                duration: .5,
                overwrite: !1,
                delay: 0
            },
            y = 1e8,
            v = 1e-8,
            _ = 2 * Math.PI,
            D = _ / 4,
            b = 0,
            x = Math.sqrt,
            E = Math.cos,
            C = Math.sin,
            P = function(t) {
                return "string" == typeof t
            },
            S = function(t) {
                return "function" == typeof t
            },
            w = function(t) {
                return "number" == typeof t
            },
            T = function(t) {
                return void 0 === t
            },
            A = function(t) {
                return "object" == typeof t
            },
            F = function(t) {
                return !1 !== t
            },
            k = function() {
                return "undefined" != typeof window
            },
            M = function(t) {
                return S(t) || P(t)
            },
            I = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
            B = Array.isArray,
            O = /(?:-?\.?\d|\.)+/gi,
            R = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            L = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            V = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            z = /[+-]=-?[.\d]+/,
            N = /[^,'"\[\]\s]+/gi,
            G = /[\d.+\-=]+(?:e[-+]\d*)*/i,
            H = {},
            q = {},
            j = function(t) {
                return (q = gt(t, H)) && ri
            },
            W = function(t, e) {
                return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
            },
            Y = function(t, e) {
                return !e && console.warn(t)
            },
            X = function(t, e) {
                return t && (H[t] = e) && q && (q[t] = e) || H
            },
            U = function() {
                return 0
            },
            $ = {},
            Z = [],
            K = {},
            J = {},
            Q = {},
            tt = 30,
            et = [],
            it = "",
            rt = function(t) {
                var e, i, r = t[0];
                if (A(r) || S(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                    for (i = et.length; i-- && !et[i].targetTest(r););
                    e = et[i]
                }
                for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Te(t[i], e))) || t.splice(i, 1);
                return t
            },
            st = function(t) {
                return t._gsap || rt(Xt(t))[0]._gsap
            },
            nt = function(t, e, i) {
                return (i = t[e]) && S(i) ? t[e]() : T(i) && t.getAttribute && t.getAttribute(e) || i
            },
            at = function(t, e) {
                return (t = t.split(",")).forEach(e) || t
            },
            ot = function(t) {
                return Math.round(1e5 * t) / 1e5 || 0
            },
            ht = function(t) {
                return Math.round(1e7 * t) / 1e7 || 0
            },
            lt = function(t, e) {
                for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
                return r < i
            },
            pt = function() {
                var t, e, i = Z.length,
                    r = Z.slice(0);
                for (K = {}, Z.length = 0, t = 0; t < i; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
            },
            ut = function(t, e, i, r) {
                Z.length && pt(), t.render(e, i, r), Z.length && pt()
            },
            ct = function(t) {
                var e = parseFloat(t);
                return (e || 0 === e) && (t + "").match(N).length < 2 ? e : P(t) ? t.trim() : t
            },
            ft = function(t) {
                return t
            },
            dt = function(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            },
            mt = function(t, e) {
                for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
            },
            gt = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            yt = function t(e, i) {
                for (var r in i) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = A(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
                return e
            },
            vt = function(t, e) {
                var i, r = {};
                for (i in t) i in e || (r[i] = t[i]);
                return r
            },
            _t = function(t) {
                var e = t.parent || r,
                    i = t.keyframes ? mt : dt;
                if (F(t.inherit))
                    for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
                return t
            },
            Dt = function(t, e, i, r) {
                void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                var s = e._prev,
                    n = e._next;
                s ? s._next = n : t[i] === e && (t[i] = n), n ? n._prev = s : t[r] === e && (t[r] = s), e._next = e._prev = e.parent = null
            },
            bt = function(t, e) {
                t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
            },
            xt = function(t, e) {
                if (t && (!e || e._end > t._dur || e._start < 0))
                    for (var i = t; i;) i._dirty = 1, i = i.parent;
                return t
            },
            Et = function(t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
            },
            Ct = function t(e) {
                return !e || e._ts && t(e.parent)
            },
            Pt = function(t) {
                return t._repeat ? St(t._tTime, t = t.duration() + t._rDelay) * t : 0
            },
            St = function(t, e) {
                var i = Math.floor(t /= e);
                return t && i === t ? i - 1 : i
            },
            wt = function(t, e) {
                return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            },
            Tt = function(t) {
                return t._end = ht(t._start + (t._tDur / Math.abs(t._ts || t._rts || v) || 0))
            },
            At = function(t, e) {
                var i = t._dp;
                return i && i.smoothChildTiming && t._ts && (t._start = ht(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Tt(t), i._dirty || xt(i, t)), t
            },
            Ft = function(t, e) {
                var i;
                if ((e._time || e._initted && !e._dur) && (i = wt(t.rawTime(), e), (!e._dur || Ht(0, e.totalDuration(), i) - e._tTime > v) && e.render(i, !0)), xt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                    if (t._dur < t.duration())
                        for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                    t._zTime = -1e-8
                }
            },
            kt = function(t, e, i, s) {
                return e.parent && bt(e), e._start = ht((w(i) ? i : i || t !== r ? zt(t, i, e) : t._time) + e._delay), e._end = ht(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                    function(t, e, i, r, s) {
                        void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                        var n, a = t[r];
                        if (s)
                            for (n = e[s]; a && a[s] > n;) a = a._prev;
                        a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = a, e.parent = e._dp = t
                    }(t, e, "_first", "_last", t._sort ? "_start" : 0), Ot(e) || (t._recent = e), s || Ft(t, e), t
            },
            Mt = function(t, e) {
                return (H.ScrollTrigger || W("scrollTrigger", e)) && H.ScrollTrigger.create(e, t)
            },
            It = function(t, e, i, r) {
                return Oe(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== me.frame ? (Z.push(t), t._lazy = [e, r], 1) : void 0 : 1
            },
            Bt = function t(e) {
                var i = e.parent;
                return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
            },
            Ot = function(t) {
                var e = t.data;
                return "isFromStart" === e || "isStart" === e
            },
            Rt = function(t, e, i, r) {
                var s = t._repeat,
                    n = ht(e) || 0,
                    a = t._tTime / t._tDur;
                return a && !r && (t._time *= n / t._dur), t._dur = n, t._tDur = s ? s < 0 ? 1e10 : ht(n * (s + 1) + t._rDelay * s) : n, a && !r ? At(t, t._tTime = t._tDur * a) : t.parent && Tt(t), i || xt(t.parent, t), t
            },
            Lt = function(t) {
                return t instanceof Fe ? xt(t) : Rt(t, t._dur)
            },
            Vt = {
                _start: 0,
                endTime: U,
                totalDuration: U
            },
            zt = function t(e, i, r) {
                var s, n, a, o = e.labels,
                    h = e._recent || Vt,
                    l = e.duration() >= y ? h.endTime(!1) : e._dur;
                return P(i) && (isNaN(i) || i in o) ? (n = i.charAt(0), a = "%" === i.substr(-1), s = i.indexOf("="), "<" === n || ">" === n ? (s >= 0 && (i = i.replace(/=/, "")), ("<" === n ? h._start : h.endTime(h._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (a ? (s < 0 ? h : r).totalDuration() / 100 : 1)) : s < 0 ? (i in o || (o[i] = l), o[i]) : (n = parseFloat(i.charAt(s - 1) + i.substr(s + 1)), a && r && (n = n / 100 * (B(r) ? r[0] : r).totalDuration()), s > 1 ? t(e, i.substr(0, s - 1), r) + n : l + n)) : null == i ? l : +i
            },
            Nt = function(t, e, i) {
                var r, s, n = w(e[1]),
                    a = (n ? 2 : 1) + (t < 2 ? 0 : 1),
                    o = e[a];
                if (n && (o.duration = e[1]), o.parent = i, t) {
                    for (r = o, s = i; s && !("immediateRender" in r);) r = s.vars.defaults || {}, s = F(s.vars.inherit) && s.parent;
                    o.immediateRender = F(r.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
                }
                return new ze(e[0], o, e[a + 1])
            },
            Gt = function(t, e) {
                return t || 0 === t ? e(t) : e
            },
            Ht = function(t, e, i) {
                return i < t ? t : i > e ? e : i
            },
            qt = function(t) {
                if ("string" != typeof t) return "";
                var e = G.exec(t);
                return e ? t.substr(e.index + e[0].length) : ""
            },
            jt = [].slice,
            Wt = function(t, e) {
                return t && A(t) && "length" in t && (!e && !t.length || t.length - 1 in t && A(t[0])) && !t.nodeType && t !== s
            },
            Yt = function(t, e, i) {
                return void 0 === i && (i = []), t.forEach((function(t) {
                    var r;
                    return P(t) && !e || Wt(t, 1) ? (r = i).push.apply(r, Xt(t)) : i.push(t)
                })) || i
            },
            Xt = function(t, e, i) {
                return !P(t) || i || !n && ge() ? B(t) ? Yt(t, i) : Wt(t) ? jt.call(t, 0) : t ? [t] : [] : jt.call((e || a).querySelectorAll(t), 0)
            },
            Ut = function(t) {
                return t.sort((function() {
                    return .5 - Math.random()
                }))
            },
            $t = function(t) {
                if (S(t)) return t;
                var e = A(t) ? t : {
                        each: t
                    },
                    i = Ee(e.ease),
                    r = e.from || 0,
                    s = parseFloat(e.base) || 0,
                    n = {},
                    a = r > 0 && r < 1,
                    o = isNaN(r) || a,
                    h = e.axis,
                    l = r,
                    p = r;
                return P(r) ? l = p = {
                        center: .5,
                        edges: .5,
                        end: 1
                    }[r] || 0 : !a && o && (l = r[0], p = r[1]),
                    function(t, a, u) {
                        var c, f, d, m, g, v, _, D, b, E = (u || e).length,
                            C = n[E];
                        if (!C) {
                            if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, y])[1])) {
                                for (_ = -y; _ < (_ = u[b++].getBoundingClientRect().left) && b < E;);
                                b--
                            }
                            for (C = n[E] = [], c = o ? Math.min(b, E) * l - .5 : r % b, f = o ? E * p / b - .5 : r / b | 0, _ = 0, D = y, v = 0; v < E; v++) d = v % b - c, m = f - (v / b | 0), C[v] = g = h ? Math.abs("y" === h ? m : d) : x(d * d + m * m), g > _ && (_ = g), g < D && (D = g);
                            "random" === r && Ut(C), C.max = _ - D, C.min = D, C.v = E = (parseFloat(e.amount) || parseFloat(e.each) * (b > E ? E - 1 : h ? "y" === h ? E / b : b : Math.max(b, E / b)) || 0) * ("edges" === r ? -1 : 1), C.b = E < 0 ? s - E : s, C.u = qt(e.amount || e.each) || 0, i = i && E < 0 ? be(i) : i
                        }
                        return E = (C[t] - C.min) / C.max || 0, ht(C.b + (i ? i(E) : E) * C.v) + C.u
                    }
            },
            Zt = function(t) {
                var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                return function(i) {
                    var r = Math.round(parseFloat(i) / t) * t * e;
                    return (r - r % 1) / e + (w(i) ? 0 : qt(i))
                }
            },
            Kt = function(t, e) {
                var i, r, s = B(t);
                return !s && A(t) && (i = s = t.radius || y, t.values ? (t = Xt(t.values), (r = !w(t[0])) && (i *= i)) : t = Zt(t.increment)), Gt(e, s ? S(t) ? function(e) {
                    return r = t(e), Math.abs(r - e) <= i ? r : e
                } : function(e) {
                    for (var s, n, a = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), h = y, l = 0, p = t.length; p--;)(s = r ? (s = t[p].x - a) * s + (n = t[p].y - o) * n : Math.abs(t[p] - a)) < h && (h = s, l = p);
                    return l = !i || h <= i ? t[l] : e, r || l === e || w(e) ? l : l + qt(e)
                } : Zt(t))
            },
            Jt = function(t, e, i, r) {
                return Gt(B(t) ? !e : !0 === i ? !!(i = 0) : !r, (function() {
                    return B(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * r) / r
                }))
            },
            Qt = function(t, e, i) {
                return Gt(i, (function(i) {
                    return t[~~e(i)]
                }))
            },
            te = function(t) {
                for (var e, i, r, s, n = 0, a = ""; ~(e = t.indexOf("random(", n));) r = t.indexOf(")", e), s = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(s ? N : O), a += t.substr(n, e - n) + Jt(s ? i : +i[0], s ? 0 : +i[1], +i[2] || 1e-5), n = r + 1;
                return a + t.substr(n, t.length - n)
            },
            ee = function(t, e, i, r, s) {
                var n = e - t,
                    a = r - i;
                return Gt(s, (function(e) {
                    return i + ((e - t) / n * a || 0)
                }))
            },
            ie = function(t, e, i) {
                var r, s, n, a = t.labels,
                    o = y;
                for (r in a)(s = a[r] - e) < 0 == !!i && s && o > (s = Math.abs(s)) && (n = r, o = s);
                return n
            },
            re = function(t, e, i) {
                var r, s, n = t.vars,
                    a = n[e];
                if (a) return r = n[e + "Params"], s = n.callbackScope || t, i && Z.length && pt(), r ? a.apply(s, r) : a.call(s)
            },
            se = function(t) {
                return bt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && re(t, "onInterrupt"), t
            },
            ne = function(t) {
                var e = (t = !t.name && t.default || t).name,
                    i = S(t),
                    r = e && !i && t.init ? function() {
                        this._props = []
                    } : t,
                    s = {
                        init: U,
                        render: Ue,
                        add: Ie,
                        kill: Ze,
                        modifier: $e,
                        rawVars: 0
                    },
                    n = {
                        targetTest: 0,
                        get: 0,
                        getSetter: je,
                        aliases: {},
                        register: 0
                    };
                if (ge(), t !== r) {
                    if (J[e]) return;
                    dt(r, dt(vt(t, s), n)), gt(r.prototype, gt(s, vt(t, n))), J[r.prop = e] = r, t.targetTest && (et.push(r), $[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                X(e, r), t.register && t.register(ri, r, Qe)
            },
            ae = 255,
            oe = {
                aqua: [0, ae, ae],
                lime: [0, ae, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, ae],
                navy: [0, 0, 128],
                white: [ae, ae, ae],
                olive: [128, 128, 0],
                yellow: [ae, ae, 0],
                orange: [ae, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [ae, 0, 0],
                pink: [ae, 192, 203],
                cyan: [0, ae, ae],
                transparent: [ae, ae, ae, 0]
            },
            he = function(t, e, i) {
                return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * ae + .5 | 0
            },
            le = function(t, e, i) {
                var r, s, n, a, o, h, l, p, u, c, f = t ? w(t) ? [t >> 16, t >> 8 & ae, t & ae] : 0 : oe.black;
                if (!f) {
                    if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), oe[t]) f = oe[t];
                    else if ("#" === t.charAt(0)) {
                        if (t.length < 6 && (r = t.charAt(1), s = t.charAt(2), n = t.charAt(3), t = "#" + r + r + s + s + n + n + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & ae, f & ae, parseInt(t.substr(7), 16) / 255];
                        f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ae, t & ae]
                    } else if ("hsl" === t.substr(0, 3))
                        if (f = c = t.match(O), e) {
                            if (~t.indexOf("=")) return f = t.match(R), i && f.length < 4 && (f[3] = 1), f
                        } else a = +f[0] % 360 / 360, o = +f[1] / 100, r = 2 * (h = +f[2] / 100) - (s = h <= .5 ? h * (o + 1) : h + o - h * o), f.length > 3 && (f[3] *= 1), f[0] = he(a + 1 / 3, r, s), f[1] = he(a, r, s), f[2] = he(a - 1 / 3, r, s);
                    else f = t.match(O) || oe.transparent;
                    f = f.map(Number)
                }
                return e && !c && (r = f[0] / ae, s = f[1] / ae, n = f[2] / ae, h = ((l = Math.max(r, s, n)) + (p = Math.min(r, s, n))) / 2, l === p ? a = o = 0 : (u = l - p, o = h > .5 ? u / (2 - l - p) : u / (l + p), a = l === r ? (s - n) / u + (s < n ? 6 : 0) : l === s ? (n - r) / u + 2 : (r - s) / u + 4, a *= 60), f[0] = ~~(a + .5), f[1] = ~~(100 * o + .5), f[2] = ~~(100 * h + .5)), i && f.length < 4 && (f[3] = 1), f
            },
            pe = function(t) {
                var e = [],
                    i = [],
                    r = -1;
                return t.split(ce).forEach((function(t) {
                    var s = t.match(L) || [];
                    e.push.apply(e, s), i.push(r += s.length + 1)
                })), e.c = i, e
            },
            ue = function(t, e, i) {
                var r, s, n, a, o = "",
                    h = (t + o).match(ce),
                    l = e ? "hsla(" : "rgba(",
                    p = 0;
                if (!h) return t;
                if (h = h.map((function(t) {
                        return (t = le(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                    })), i && (n = pe(t), (r = i.c).join(o) !== n.c.join(o)))
                    for (a = (s = t.replace(ce, "1").split(L)).length - 1; p < a; p++) o += s[p] + (~r.indexOf(p) ? h.shift() || l + "0,0,0,0)" : (n.length ? n : h.length ? h : i).shift());
                if (!s)
                    for (a = (s = t.split(ce)).length - 1; p < a; p++) o += s[p] + h[p];
                return o + s[a]
            },
            ce = function() {
                var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                for (t in oe) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi")
            }(),
            fe = /hsl[a]?\(/,
            de = function(t) {
                var e, i = t.join(" ");
                if (ce.lastIndex = 0, ce.test(i)) return e = fe.test(i), t[1] = ue(t[1], e), t[0] = ue(t[0], e, pe(t[1])), !0
            },
            me = function() {
                var t, e, i, r, h, l, u = Date.now,
                    c = 500,
                    f = 33,
                    d = u(),
                    m = d,
                    g = 1e3 / 240,
                    y = g,
                    v = [],
                    _ = function i(s) {
                        var n, a, o, p, _ = u() - m,
                            D = !0 === s;
                        if (_ > c && (d += _ - f), ((n = (o = (m += _) - d) - y) > 0 || D) && (p = ++r.frame, h = o - 1e3 * r.time, r.time = o /= 1e3, y += n + (n >= g ? 4 : g - n), a = 1), D || (t = e(i)), a)
                            for (l = 0; l < v.length; l++) v[l](o, h, p, s)
                    };
                return r = {
                    time: 0,
                    frame: 0,
                    tick: function() {
                        _(!0)
                    },
                    deltaRatio: function(t) {
                        return h / (1e3 / (t || 60))
                    },
                    wake: function() {
                        o && (!n && k() && (s = n = window, a = s.document || {}, H.gsap = ri, (s.gsapVersions || (s.gsapVersions = [])).push(ri.version), j(q || s.GreenSockGlobals || !s.gsap && s || {}), i = s.requestAnimationFrame), t && r.sleep(), e = i || function(t) {
                            return setTimeout(t, y - 1e3 * r.time + 1 | 0)
                        }, p = 1, _(2))
                    },
                    sleep: function() {
                        (i ? s.cancelAnimationFrame : clearTimeout)(t), p = 0, e = U
                    },
                    lagSmoothing: function(t, e) {
                        c = t || 1e8, f = Math.min(e, c, 0)
                    },
                    fps: function(t) {
                        g = 1e3 / (t || 240), y = 1e3 * r.time + g
                    },
                    add: function(t) {
                        v.indexOf(t) < 0 && v.push(t), ge()
                    },
                    remove: function(t) {
                        var e;
                        ~(e = v.indexOf(t)) && v.splice(e, 1) && l >= e && l--
                    },
                    _listeners: v
                }
            }(),
            ge = function() {
                return !p && me.wake()
            },
            ye = {},
            ve = /^[\d.\-M][\d.\-,\s]/,
            _e = /["']/g,
            De = function(t) {
                for (var e, i, r, s = {}, n = t.substr(1, t.length - 3).split(":"), a = n[0], o = 1, h = n.length; o < h; o++) i = n[o], e = o !== h - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), s[a] = isNaN(r) ? r.replace(_e, "").trim() : +r, a = i.substr(e + 1).trim();
                return s
            },
            be = function(t) {
                return function(e) {
                    return 1 - t(1 - e)
                }
            },
            xe = function t(e, i) {
                for (var r, s = e._first; s;) s instanceof Fe ? t(s, i) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === i || (s.timeline ? t(s.timeline, i) : (r = s._ease, s._ease = s._yEase, s._yEase = r, s._yoyo = i)), s = s._next
            },
            Ee = function(t, e) {
                return t && (S(t) ? t : ye[t] || function(t) {
                    var e, i, r, s, n = (t + "").split("("),
                        a = ye[n[0]];
                    return a && n.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [De(n[1])] : (e = t, i = e.indexOf("(") + 1, r = e.indexOf(")"), s = e.indexOf("(", i), e.substring(i, ~s && s < r ? e.indexOf(")", r + 1) : r)).split(",").map(ct)) : ye._CE && ve.test(t) ? ye._CE("", t) : a
                }(t)) || e
            },
            Ce = function(t, e, i, r) {
                void 0 === i && (i = function(t) {
                    return 1 - e(1 - t)
                }), void 0 === r && (r = function(t) {
                    return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                });
                var s, n = {
                    easeIn: e,
                    easeOut: i,
                    easeInOut: r
                };
                return at(t, (function(t) {
                    for (var e in ye[t] = H[t] = n, ye[s = t.toLowerCase()] = i, n) ye[s + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ye[t + "." + e] = n[e]
                })), n
            },
            Pe = function(t) {
                return function(e) {
                    return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                }
            },
            Se = function t(e, i, r) {
                var s = i >= 1 ? i : 1,
                    n = (r || (e ? .3 : .45)) / (i < 1 ? i : 1),
                    a = n / _ * (Math.asin(1 / s) || 0),
                    o = function(t) {
                        return 1 === t ? 1 : s * Math.pow(2, -10 * t) * C((t - a) * n) + 1
                    },
                    h = "out" === e ? o : "in" === e ? function(t) {
                        return 1 - o(1 - t)
                    } : Pe(o);
                return n = _ / n, h.config = function(i, r) {
                    return t(e, i, r)
                }, h
            },
            we = function t(e, i) {
                void 0 === i && (i = 1.70158);
                var r = function(t) {
                        return t ? --t * t * ((i + 1) * t + i) + 1 : 0
                    },
                    s = "out" === e ? r : "in" === e ? function(t) {
                        return 1 - r(1 - t)
                    } : Pe(r);
                return s.config = function(i) {
                    return t(e, i)
                }, s
            };
        at("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
            var i = e < 5 ? e + 1 : e;
            Ce(t + ",Power" + (i - 1), e ? function(t) {
                return Math.pow(t, i)
            } : function(t) {
                return t
            }, (function(t) {
                return 1 - Math.pow(1 - t, i)
            }), (function(t) {
                return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
            }))
        })), ye.Linear.easeNone = ye.none = ye.Linear.easeIn, Ce("Elastic", Se("in"), Se("out"), Se()), u = 7.5625, f = 1 / (c = 2.75), Ce("Bounce", (function(t) {
            return 1 - d(1 - t)
        }), d = function(t) {
            return t < f ? u * t * t : t < .7272727272727273 ? u * Math.pow(t - 1.5 / c, 2) + .75 : t < .9090909090909092 ? u * (t -= 2.25 / c) * t + .9375 : u * Math.pow(t - 2.625 / c, 2) + .984375
        }), Ce("Expo", (function(t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        })), Ce("Circ", (function(t) {
            return -(x(1 - t * t) - 1)
        })), Ce("Sine", (function(t) {
            return 1 === t ? 1 : 1 - E(t * D)
        })), Ce("Back", we("in"), we("out"), we()), ye.SteppedEase = ye.steps = H.SteppedEase = {
            config: function(t, e) {
                void 0 === t && (t = 1);
                var i = 1 / t,
                    r = t + (e ? 0 : 1),
                    s = e ? 1 : 0;
                return function(t) {
                    return ((r * Ht(0, .99999999, t) | 0) + s) * i
                }
            }
        }, g.ease = ye["quad.out"], at("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
            return it += t + "," + t + "Params,"
        }));
        var Te = function(t, e) {
                this.id = b++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : nt, this.set = e ? e.getSetter : je
            },
            Ae = function() {
                function t(t) {
                    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Rt(this, +t.duration, 1, 1), this.data = t.data, p || me.wake()
                }
                var e = t.prototype;
                return e.delay = function(t) {
                    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                }, e.duration = function(t) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                }, e.totalDuration = function(t) {
                    return arguments.length ? (this._dirty = 0, Rt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }, e.totalTime = function(t, e) {
                    if (ge(), !arguments.length) return this._tTime;
                    var i = this._dp;
                    if (i && i.smoothChildTiming && this._ts) {
                        for (At(this, t), !i._dp || i.parent || Ft(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && kt(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === v || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ut(this, t, e)), this
                }, e.time = function(t, e) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Pt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
                }, e.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                }, e.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Pt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                }, e.iteration = function(t, e) {
                    var i = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? St(this._tTime, i) + 1 : 1
                }, e.timeScale = function(t) {
                    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                    if (this._rts === t) return this;
                    var e = this.parent && this._ts ? wt(this.parent._time, this) : this._tTime;
                    return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, Et(this.totalTime(Ht(-this._delay, this._tDur, e), !0)), Tt(this), this
                }, e.paused = function(t) {
                    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ge(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== v && (this._tTime -= v)))), this) : this._ps
                }, e.startTime = function(t) {
                    if (arguments.length) {
                        this._start = t;
                        var e = this.parent || this._dp;
                        return e && (e._sort || !this.parent) && kt(e, this, t - this._delay), this
                    }
                    return this._start
                }, e.endTime = function(t) {
                    return this._start + (F(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                }, e.rawTime = function(t) {
                    var e = this.parent || this._dp;
                    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wt(e.rawTime(t), this) : this._tTime : this._tTime
                }, e.globalTime = function(t) {
                    for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
                    return i
                }, e.repeat = function(t) {
                    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Lt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                }, e.repeatDelay = function(t) {
                    if (arguments.length) {
                        var e = this._time;
                        return this._rDelay = t, Lt(this), e ? this.time(e) : this
                    }
                    return this._rDelay
                }, e.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, e.seek = function(t, e) {
                    return this.totalTime(zt(this, t), F(e))
                }, e.restart = function(t, e) {
                    return this.play().totalTime(t ? -this._delay : 0, F(e))
                }, e.play = function(t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                }, e.reverse = function(t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                }, e.pause = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!0)
                }, e.resume = function() {
                    return this.paused(!1)
                }, e.reversed = function(t) {
                    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
                }, e.invalidate = function() {
                    return this._initted = this._act = 0, this._zTime = -1e-8, this
                }, e.isActive = function() {
                    var t, e = this.parent || this._dp,
                        i = this._start;
                    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - v))
                }, e.eventCallback = function(t, e, i) {
                    var r = this.vars;
                    return arguments.length > 1 ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
                }, e.then = function(t) {
                    var e = this;
                    return new Promise((function(i) {
                        var r = S(t) ? t : ft,
                            s = function() {
                                var t = e.then;
                                e.then = null, S(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), e.then = t
                            };
                        e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
                    }))
                }, e.kill = function() {
                    se(this)
                }, t
            }();
        dt(Ae.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var Fe = function(i) {
            function s(e, s) {
                var n;
                return void 0 === e && (e = {}), (n = i.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = F(e.sortChildren), r && kt(e.parent || r, t(n), s), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Mt(t(n), e.scrollTrigger), n
            }
            e(s, i);
            var n = s.prototype;
            return n.to = function(t, e, i) {
                return Nt(0, arguments, this), this
            }, n.from = function(t, e, i) {
                return Nt(1, arguments, this), this
            }, n.fromTo = function(t, e, i, r) {
                return Nt(2, arguments, this), this
            }, n.set = function(t, e, i) {
                return e.duration = 0, e.parent = this, _t(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new ze(t, e, zt(this, i), 1), this
            }, n.call = function(t, e, i) {
                return kt(this, ze.delayedCall(0, t, e), i)
            }, n.staggerTo = function(t, e, i, r, s, n, a) {
                return i.duration = e, i.stagger = i.stagger || r, i.onComplete = n, i.onCompleteParams = a, i.parent = this, new ze(t, i, zt(this, s)), this
            }, n.staggerFrom = function(t, e, i, r, s, n, a) {
                return i.runBackwards = 1, _t(i).immediateRender = F(i.immediateRender), this.staggerTo(t, e, i, r, s, n, a)
            }, n.staggerFromTo = function(t, e, i, r, s, n, a, o) {
                return r.startAt = i, _t(r).immediateRender = F(r.immediateRender), this.staggerTo(t, e, r, s, n, a, o)
            }, n.render = function(t, e, i) {
                var s, n, a, o, h, l, p, u, c, f, d, m, g = this._time,
                    y = this._dirty ? this.totalDuration() : this._tDur,
                    _ = this._dur,
                    D = t <= 0 ? 0 : ht(t),
                    b = this._zTime < 0 != t < 0 && (this._initted || !_);
                if (this !== r && D > y && t >= 0 && (D = y), D !== this._tTime || i || b) {
                    if (g !== this._time && _ && (D += this._time - g, t += this._time - g), s = D, c = this._start, l = !(u = this._ts), b && (_ || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                        if (d = this._yoyo, h = _ + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, i);
                        if (s = ht(D % h), D === y ? (o = this._repeat, s = _) : ((o = ~~(D / h)) && o === D / h && (s = _, o--), s > _ && (s = _)), f = St(this._tTime, h), !g && this._tTime && f !== o && (f = o), d && 1 & o && (s = _ - s, m = 1), o !== f && !this._lock) {
                            var x = d && 1 & f,
                                E = x === (d && 1 & o);
                            if (o < f && (x = !x), g = x ? 0 : _, this._lock = 1, this.render(g || (m ? 0 : ht(o * h)), e, !_)._lock = 0, this._tTime = D, !e && this.parent && re(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g && g !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            if (_ = this._dur, y = this._tDur, E && (this._lock = 2, g = x ? _ : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                            xe(this, m)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (p = function(t, e, i) {
                            var r;
                            if (i > e)
                                for (r = t._first; r && r._start <= i;) {
                                    if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                    r = r._next
                                } else
                                    for (r = t._last; r && r._start >= i;) {
                                        if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                        r = r._prev
                                    }
                        }(this, ht(g), ht(s)), p && (D -= s - (s = p._start))), this._tTime = D, this._time = s, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && s && !e && (re(this, "onStart"), this._tTime !== D)) return this;
                    if (s >= g && t >= 0)
                        for (n = this._first; n;) {
                            if (a = n._next, (n._act || s >= n._start) && n._ts && p !== n) {
                                if (n.parent !== this) return this.render(t, e, i);
                                if (n.render(n._ts > 0 ? (s - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (s - n._start) * n._ts, e, i), s !== this._time || !this._ts && !l) {
                                    p = 0, a && (D += this._zTime = -1e-8);
                                    break
                                }
                            }
                            n = a
                        } else {
                            n = this._last;
                            for (var C = t < 0 ? t : s; n;) {
                                if (a = n._prev, (n._act || C <= n._end) && n._ts && p !== n) {
                                    if (n.parent !== this) return this.render(t, e, i);
                                    if (n.render(n._ts > 0 ? (C - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (C - n._start) * n._ts, e, i), s !== this._time || !this._ts && !l) {
                                        p = 0, a && (D += this._zTime = C ? -1e-8 : v);
                                        break
                                    }
                                }
                                n = a
                            }
                        }
                    if (p && !e && (this.pause(), p.render(s >= g ? 0 : -1e-8)._zTime = s >= g ? 1 : -1, this._ts)) return this._start = c, Tt(this), this.render(t, e, i);
                    this._onUpdate && !e && re(this, "onUpdate", !0), (D === y && y >= this.totalDuration() || !D && g) && (c !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((t || !_) && (D === y && this._ts > 0 || !D && this._ts < 0) && bt(this, 1), e || t < 0 && !g || !D && !g && y || (re(this, D === y && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(D < y && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, n.add = function(t, e) {
                var i = this;
                if (w(e) || (e = zt(this, e, t)), !(t instanceof Ae)) {
                    if (B(t)) return t.forEach((function(t) {
                        return i.add(t, e)
                    })), this;
                    if (P(t)) return this.addLabel(t, e);
                    if (!S(t)) return this;
                    t = ze.delayedCall(0, t)
                }
                return this !== t ? kt(this, t, e) : this
            }, n.getChildren = function(t, e, i, r) {
                void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === r && (r = -y);
                for (var s = [], n = this._first; n;) n._start >= r && (n instanceof ze ? e && s.push(n) : (i && s.push(n), t && s.push.apply(s, n.getChildren(!0, e, i)))), n = n._next;
                return s
            }, n.getById = function(t) {
                for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                    if (e[i].vars.id === t) return e[i]
            }, n.remove = function(t) {
                return P(t) ? this.removeLabel(t) : S(t) ? this.killTweensOf(t) : (Dt(this, t), t === this._recent && (this._recent = this._last), xt(this))
            }, n.totalTime = function(t, e) {
                return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ht(me.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
            }, n.addLabel = function(t, e) {
                return this.labels[t] = zt(this, e), this
            }, n.removeLabel = function(t) {
                return delete this.labels[t], this
            }, n.addPause = function(t, e, i) {
                var r = ze.delayedCall(0, e || U, i);
                return r.data = "isPause", this._hasPause = 1, kt(this, r, zt(this, t))
            }, n.removePause = function(t) {
                var e = this._first;
                for (t = zt(this, t); e;) e._start === t && "isPause" === e.data && bt(e), e = e._next
            }, n.killTweensOf = function(t, e, i) {
                for (var r = this.getTweensOf(t, i), s = r.length; s--;) ke !== r[s] && r[s].kill(t, e);
                return this
            }, n.getTweensOf = function(t, e) {
                for (var i, r = [], s = Xt(t), n = this._first, a = w(e); n;) n instanceof ze ? lt(n._targets, s) && (a ? (!ke || n._initted && n._ts) && n.globalTime(0) <= e && n.globalTime(n.totalDuration()) > e : !e || n.isActive()) && r.push(n) : (i = n.getTweensOf(s, e)).length && r.push.apply(r, i), n = n._next;
                return r
            }, n.tweenTo = function(t, e) {
                e = e || {};
                var i, r = this,
                    s = zt(r, t),
                    n = e,
                    a = n.startAt,
                    o = n.onStart,
                    h = n.onStartParams,
                    l = n.immediateRender,
                    p = ze.to(r, dt({
                        ease: e.ease || "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: s,
                        overwrite: "auto",
                        duration: e.duration || Math.abs((s - (a && "time" in a ? a.time : r._time)) / r.timeScale()) || v,
                        onStart: function() {
                            if (r.pause(), !i) {
                                var t = e.duration || Math.abs((s - (a && "time" in a ? a.time : r._time)) / r.timeScale());
                                p._dur !== t && Rt(p, t, 0, 1).render(p._time, !0, !0), i = 1
                            }
                            o && o.apply(p, h || [])
                        }
                    }, e));
                return l ? p.render(0) : p
            }, n.tweenFromTo = function(t, e, i) {
                return this.tweenTo(e, dt({
                    startAt: {
                        time: zt(this, t)
                    }
                }, i))
            }, n.recent = function() {
                return this._recent
            }, n.nextLabel = function(t) {
                return void 0 === t && (t = this._time), ie(this, zt(this, t))
            }, n.previousLabel = function(t) {
                return void 0 === t && (t = this._time), ie(this, zt(this, t), 1)
            }, n.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + v)
            }, n.shiftChildren = function(t, e, i) {
                void 0 === i && (i = 0);
                for (var r, s = this._first, n = this.labels; s;) s._start >= i && (s._start += t, s._end += t), s = s._next;
                if (e)
                    for (r in n) n[r] >= i && (n[r] += t);
                return xt(this)
            }, n.invalidate = function() {
                var t = this._first;
                for (this._lock = 0; t;) t.invalidate(), t = t._next;
                return i.prototype.invalidate.call(this)
            }, n.clear = function(t) {
                void 0 === t && (t = !0);
                for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
                return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), xt(this)
            }, n.totalDuration = function(t) {
                var e, i, s, n = 0,
                    a = this,
                    o = a._last,
                    h = y;
                if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
                if (a._dirty) {
                    for (s = a.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (i = o._start) > h && a._sort && o._ts && !a._lock ? (a._lock = 1, kt(a, o, i - o._delay, 1)._lock = 0) : h = i, i < 0 && o._ts && (n -= i, (!s && !a._dp || s && s.smoothChildTiming) && (a._start += i / a._ts, a._time -= i, a._tTime -= i), a.shiftChildren(-i, !1, -Infinity), h = 0), o._end > n && o._ts && (n = o._end), o = e;
                    Rt(a, a === r && a._time > n ? a._time : n, 1, 1), a._dirty = 0
                }
                return a._tDur
            }, s.updateRoot = function(t) {
                if (r._ts && (ut(r, wt(t, r)), h = me.frame), me.frame >= tt) {
                    tt += m.autoSleep || 120;
                    var e = r._first;
                    if ((!e || !e._ts) && m.autoSleep && me._listeners.length < 2) {
                        for (; e && !e._ts;) e = e._next;
                        e || me.sleep()
                    }
                }
            }, s
        }(Ae);
        dt(Fe.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var ke, Me = function(t, e, i, r, s, n, a) {
                var o, h, l, p, u, c, f, d, m = new Qe(this._pt, t, e, 0, 1, Xe, null, s),
                    g = 0,
                    y = 0;
                for (m.b = i, m.e = r, i += "", (f = ~(r += "").indexOf("random(")) && (r = te(r)), n && (n(d = [i, r], t, e), i = d[0], r = d[1]), h = i.match(V) || []; o = V.exec(r);) p = o[0], u = r.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === u.substr(-5) && (l = 1), p !== h[y++] && (c = parseFloat(h[y - 1]) || 0, m._pt = {
                    _next: m._pt,
                    p: u || 1 === y ? u : ",",
                    s: c,
                    c: "=" === p.charAt(1) ? parseFloat(p.substr(2)) * ("-" === p.charAt(0) ? -1 : 1) : parseFloat(p) - c,
                    m: l && l < 4 ? Math.round : 0
                }, g = V.lastIndex);
                return m.c = g < r.length ? r.substring(g, r.length) : "", m.fp = a, (z.test(r) || f) && (m.e = 0), this._pt = m, m
            },
            Ie = function(t, e, i, r, s, n, a, o, h) {
                S(r) && (r = r(s || 0, t, n));
                var l, p = t[e],
                    u = "get" !== i ? i : S(p) ? h ? t[e.indexOf("set") || !S(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : p,
                    c = S(p) ? h ? He : Ge : Ne;
                if (P(r) && (~r.indexOf("random(") && (r = te(r)), "=" === r.charAt(1) && ((l = parseFloat(u) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (qt(u) || 0)) || 0 === l) && (r = l)), u !== r) return isNaN(u * r) || "" === r ? (!p && !(e in t) && W(e, r), Me.call(this, t, e, u, r, c, o || m.stringFilter, h)) : (l = new Qe(this._pt, t, e, +u || 0, r - (u || 0), "boolean" == typeof p ? Ye : We, 0, c), h && (l.fp = h), a && l.modifier(a, this, t), this._pt = l)
            },
            Be = function(t, e, i, r, s, n) {
                var a, o, h, p;
                if (J[t] && !1 !== (a = new J[t]).init(s, a.rawVars ? e[t] : function(t, e, i, r, s) {
                        if (S(t) && (t = Re(t, s, e, i, r)), !A(t) || t.style && t.nodeType || B(t) || I(t)) return P(t) ? Re(t, s, e, i, r) : t;
                        var n, a = {};
                        for (n in t) a[n] = Re(t[n], s, e, i, r);
                        return a
                    }(e[t], r, s, n, i), i, r, n) && (i._pt = o = new Qe(i._pt, s, t, 0, 1, a.render, a, 0, a.priority), i !== l))
                    for (h = i._ptLookup[i._targets.indexOf(s)], p = a._props.length; p--;) h[a._props[p]] = o;
                return a
            },
            Oe = function t(e, s) {
                var n, a, o, h, l, p, u, c, f, d, m, y, _, D = e.vars,
                    b = D.ease,
                    x = D.startAt,
                    E = D.immediateRender,
                    C = D.lazy,
                    P = D.onUpdate,
                    S = D.onUpdateParams,
                    w = D.callbackScope,
                    T = D.runBackwards,
                    A = D.yoyoEase,
                    k = D.keyframes,
                    M = D.autoRevert,
                    I = e._dur,
                    B = e._startAt,
                    O = e._targets,
                    R = e.parent,
                    L = R && "nested" === R.data ? R.parent._targets : O,
                    V = "auto" === e._overwrite && !i,
                    z = e.timeline;
                if (z && (!k || !b) && (b = "none"), e._ease = Ee(b, g.ease), e._yEase = A ? be(Ee(!0 === A ? b : A, g.ease)) : 0, A && e._yoyo && !e._repeat && (A = e._yEase, e._yEase = e._ease, e._ease = A), e._from = !z && !!D.runBackwards, !z) {
                    if (y = (c = O[0] ? st(O[0]).harness : 0) && D[c.prop], n = vt(D, $), B && B.render(-1, !0).kill(), x)
                        if (bt(e._startAt = ze.set(O, dt({
                                data: "isStart",
                                overwrite: !1,
                                parent: R,
                                immediateRender: !0,
                                lazy: F(C),
                                startAt: null,
                                delay: 0,
                                onUpdate: P,
                                onUpdateParams: S,
                                callbackScope: w,
                                stagger: 0
                            }, x))), s < 0 && !E && !M && e._startAt.render(-1, !0), E) {
                            if (s > 0 && !M && (e._startAt = 0), I && s <= 0) return void(s && (e._zTime = s))
                        } else !1 === M && (e._startAt = 0);
                    else if (T && I)
                        if (B) !M && (e._startAt = 0);
                        else if (s && (E = !1), o = dt({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: E && F(C),
                            immediateRender: E,
                            stagger: 0,
                            parent: R
                        }, n), y && (o[c.prop] = y), bt(e._startAt = ze.set(O, o)), s < 0 && e._startAt.render(-1, !0), E) {
                        if (!s) return
                    } else t(e._startAt, v);
                    for (e._pt = 0, C = I && F(C) || C && !I, a = 0; a < O.length; a++) {
                        if (u = (l = O[a])._gsap || rt(O)[a]._gsap, e._ptLookup[a] = d = {}, K[u.id] && Z.length && pt(), m = L === O ? a : L.indexOf(l), c && !1 !== (f = new c).init(l, y || n, e, m, L) && (e._pt = h = new Qe(e._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((function(t) {
                                d[t] = h
                            })), f.priority && (p = 1)), !c || y)
                            for (o in n) J[o] && (f = Be(o, n, e, m, l, L)) ? f.priority && (p = 1) : d[o] = h = Ie.call(e, l, o, "get", n[o], m, L, 0, D.stringFilter);
                        e._op && e._op[a] && e.kill(l, e._op[a]), V && e._pt && (ke = e, r.killTweensOf(l, d, e.globalTime(s)), _ = !e.parent, ke = 0), e._pt && C && (K[u.id] = 1)
                    }
                    p && Je(e), e._onInit && e._onInit(e)
                }
                e._onUpdate = P, e._initted = (!e._op || e._pt) && !_
            },
            Re = function(t, e, i, r, s) {
                return S(t) ? t.call(e, i, r, s) : P(t) && ~t.indexOf("random(") ? te(t) : t
            },
            Le = it + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
            Ve = (Le + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
            ze = function(s) {
                function n(e, n, a, o) {
                    var h;
                    "number" == typeof n && (a.duration = n, n = a, a = null);
                    var l, p, u, c, f, d, g, y, v = (h = s.call(this, o ? n : _t(n)) || this).vars,
                        _ = v.duration,
                        D = v.delay,
                        b = v.immediateRender,
                        x = v.stagger,
                        E = v.overwrite,
                        C = v.keyframes,
                        P = v.defaults,
                        S = v.scrollTrigger,
                        T = v.yoyoEase,
                        k = n.parent || r,
                        O = (B(e) || I(e) ? w(e[0]) : "length" in n) ? [e] : Xt(e);
                    if (h._targets = O.length ? rt(O) : Y("GSAP target " + e + " not found. https://greensock.com", !m.nullTargetWarn) || [], h._ptLookup = [], h._overwrite = E, C || x || M(_) || M(D)) {
                        if (n = h.vars, (l = h.timeline = new Fe({
                                data: "nested",
                                defaults: P || {}
                            })).kill(), l.parent = l._dp = t(h), l._start = 0, C) _t(dt(l.vars.defaults, {
                            ease: "none"
                        })), x ? O.forEach((function(t, e) {
                            return C.forEach((function(i, r) {
                                return l.to(t, i, r ? ">" : e * x)
                            }))
                        })) : C.forEach((function(t) {
                            return l.to(O, t, ">")
                        }));
                        else {
                            if (c = O.length, g = x ? $t(x) : U, A(x))
                                for (f in x) ~Le.indexOf(f) && (y || (y = {}), y[f] = x[f]);
                            for (p = 0; p < c; p++) {
                                for (f in u = {}, n) Ve.indexOf(f) < 0 && (u[f] = n[f]);
                                u.stagger = 0, T && (u.yoyoEase = T), y && gt(u, y), d = O[p], u.duration = +Re(_, t(h), p, d, O), u.delay = (+Re(D, t(h), p, d, O) || 0) - h._delay, !x && 1 === c && u.delay && (h._delay = D = u.delay, h._start += D, u.delay = 0), l.to(d, u, g(p, d, O))
                            }
                            l.duration() ? _ = D = 0 : h.timeline = 0
                        }
                        _ || h.duration(_ = l.duration())
                    } else h.timeline = 0;
                    return !0 !== E || i || (ke = t(h), r.killTweensOf(O), ke = 0), kt(k, t(h), a), n.reversed && h.reverse(), n.paused && h.paused(!0), (b || !_ && !C && h._start === ht(k._time) && F(b) && Ct(t(h)) && "nested" !== k.data) && (h._tTime = -1e-8, h.render(Math.max(0, -D))), S && Mt(t(h), S), h
                }
                e(n, s);
                var a = n.prototype;
                return a.render = function(t, e, i) {
                    var r, s, n, a, o, h, l, p, u, c = this._time,
                        f = this._tDur,
                        d = this._dur,
                        m = t > f - v && t >= 0 ? f : t < v ? 0 : t;
                    if (d) {
                        if (m !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                            if (r = m, p = this.timeline, this._repeat) {
                                if (a = d + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);
                                if (r = ht(m % a), m === f ? (n = this._repeat, r = d) : ((n = ~~(m / a)) && n === m / a && (r = d, n--), r > d && (r = d)), (h = this._yoyo && 1 & n) && (u = this._yEase, r = d - r), o = St(this._tTime, a), r === c && !i && this._initted) return this;
                                n !== o && (p && this._yEase && xe(p, h), !this.vars.repeatRefresh || h || this._lock || (this._lock = i = 1, this.render(ht(a * n), !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) {
                                if (It(this, t < 0 ? t : r, i, e)) return this._tTime = 0, this;
                                if (d !== this._dur) return this.render(t, e, i)
                            }
                            if (this._tTime = m, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (u || this._ease)(r / d), this._from && (this.ratio = l = 1 - l), r && !c && !e && (re(this, "onStart"), this._tTime !== m)) return this;
                            for (s = this._pt; s;) s.r(l, s.d), s = s._next;
                            p && p.render(t < 0 ? t : !r && h ? -1e-8 : p._dur * l, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), re(this, "onUpdate")), this._repeat && n !== o && this.vars.onRepeat && !e && this.parent && re(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !d) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && bt(this, 1), e || t < 0 && !c || !m && !c || (re(this, m === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < f && this.timeScale() > 0) && this._prom()))
                        }
                    } else ! function(t, e, i, r) {
                        var s, n, a, o = t.ratio,
                            h = e < 0 || !e && (!t._start && Bt(t) && (t._initted || !Ot(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ot(t)) ? 0 : 1,
                            l = t._rDelay,
                            p = 0;
                        if (l && t._repeat && (p = Ht(0, t._tDur, e), n = St(p, l), a = St(t._tTime, l), t._yoyo && 1 & n && (h = 1 - h), n !== a && (o = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== o || r || t._zTime === v || !e && t._zTime) {
                            if (!t._initted && It(t, e, r, i)) return;
                            for (a = t._zTime, t._zTime = e || (i ? v : 0), i || (i = e && !a), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = p, s = t._pt; s;) s.r(h, s.d), s = s._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && re(t, "onUpdate"), p && t._repeat && !i && t.parent && re(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && bt(t, 1), i || (re(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        } else t._zTime || (t._zTime = e)
                    }(this, t, e, i);
                    return this
                }, a.targets = function() {
                    return this._targets
                }, a.invalidate = function() {
                    return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), s.prototype.invalidate.call(this)
                }, a.kill = function(t, e) {
                    if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? se(this) : this;
                    if (this.timeline) {
                        var i = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, ke && !0 !== ke.vars.overwrite)._first || se(this), this.parent && i !== this.timeline.totalDuration() && Rt(this, this._dur * this.timeline._tDur / i, 0, 1), this
                    }
                    var r, s, n, a, o, h, l, p = this._targets,
                        u = t ? Xt(t) : p,
                        c = this._ptLookup,
                        f = this._pt;
                    if ((!e || "all" === e) && function(t, e) {
                            for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
                            return i < 0
                        }(p, u)) return "all" === e && (this._pt = 0), se(this);
                    for (r = this._op = this._op || [], "all" !== e && (P(e) && (o = {}, at(e, (function(t) {
                            return o[t] = 1
                        })), e = o), e = function(t, e) {
                            var i, r, s, n, a = t[0] ? st(t[0]).harness : 0,
                                o = a && a.aliases;
                            if (!o) return e;
                            for (r in i = gt({}, e), o)
                                if (r in i)
                                    for (s = (n = o[r].split(",")).length; s--;) i[n[s]] = i[r];
                            return i
                        }(p, e)), l = p.length; l--;)
                        if (~u.indexOf(p[l]))
                            for (o in s = c[l], "all" === e ? (r[l] = e, a = s, n = {}) : (n = r[l] = r[l] || {}, a = e), a)(h = s && s[o]) && ("kill" in h.d && !0 !== h.d.kill(o) || Dt(this, h, "_pt"), delete s[o]), "all" !== n && (n[o] = 1);
                    return this._initted && !this._pt && f && se(this), this
                }, n.to = function(t, e) {
                    return new n(t, e, arguments[2])
                }, n.from = function(t, e) {
                    return Nt(1, arguments)
                }, n.delayedCall = function(t, e, i, r) {
                    return new n(e, 0, {
                        immediateRender: !1,
                        lazy: !1,
                        overwrite: !1,
                        delay: t,
                        onComplete: e,
                        onReverseComplete: e,
                        onCompleteParams: i,
                        onReverseCompleteParams: i,
                        callbackScope: r
                    })
                }, n.fromTo = function(t, e, i) {
                    return Nt(2, arguments)
                }, n.set = function(t, e) {
                    return e.duration = 0, e.repeatDelay || (e.repeat = 0), new n(t, e)
                }, n.killTweensOf = function(t, e, i) {
                    return r.killTweensOf(t, e, i)
                }, n
            }(Ae);
        dt(ze.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), at("staggerTo,staggerFrom,staggerFromTo", (function(t) {
            ze[t] = function() {
                var e = new Fe,
                    i = jt.call(arguments, 0);
                return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
            }
        }));
        var Ne = function(t, e, i) {
                return t[e] = i
            },
            Ge = function(t, e, i) {
                return t[e](i)
            },
            He = function(t, e, i, r) {
                return t[e](r.fp, i)
            },
            qe = function(t, e, i) {
                return t.setAttribute(e, i)
            },
            je = function(t, e) {
                return S(t[e]) ? Ge : T(t[e]) && t.setAttribute ? qe : Ne
            },
            We = function(t, e) {
                return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
            },
            Ye = function(t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e)
            },
            Xe = function(t, e) {
                var i = e._pt,
                    r = "";
                if (!t && e.b) r = e.b;
                else if (1 === t && e.e) r = e.e;
                else {
                    for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r, i = i._next;
                    r += e.c
                }
                e.set(e.t, e.p, r, e)
            },
            Ue = function(t, e) {
                for (var i = e._pt; i;) i.r(t, i.d), i = i._next
            },
            $e = function(t, e, i, r) {
                for (var s, n = this._pt; n;) s = n._next, n.p === r && n.modifier(t, e, i), n = s
            },
            Ze = function(t) {
                for (var e, i, r = this._pt; r;) i = r._next, r.p === t && !r.op || r.op === t ? Dt(this, r, "_pt") : r.dep || (e = 1), r = i;
                return !e
            },
            Ke = function(t, e, i, r) {
                r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
            },
            Je = function(t) {
                for (var e, i, r, s, n = t._pt; n;) {
                    for (e = n._next, i = r; i && i.pr > n.pr;) i = i._next;
                    (n._prev = i ? i._prev : s) ? n._prev._next = n: r = n, (n._next = i) ? i._prev = n : s = n, n = e
                }
                t._pt = r
            },
            Qe = function() {
                function t(t, e, i, r, s, n, a, o, h) {
                    this.t = e, this.s = r, this.c = s, this.p = i, this.r = n || We, this.d = a || this, this.set = o || Ne, this.pr = h || 0, this._next = t, t && (t._prev = this)
                }
                return t.prototype.modifier = function(t, e, i) {
                    this.mSet = this.mSet || this.set, this.set = Ke, this.m = t, this.mt = i, this.tween = e
                }, t
            }();
        at(it + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
            return $[t] = 1
        })), H.TweenMax = H.TweenLite = ze, H.TimelineLite = H.TimelineMax = Fe, r = new Fe({
            sortChildren: !1,
            defaults: g,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), m.stringFilter = de;
        var ti = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                e.forEach((function(t) {
                    return ne(t)
                }))
            },
            timeline: function(t) {
                return new Fe(t)
            },
            getTweensOf: function(t, e) {
                return r.getTweensOf(t, e)
            },
            getProperty: function(t, e, i, r) {
                P(t) && (t = Xt(t)[0]);
                var s = st(t || {}).get,
                    n = i ? ft : ct;
                return "native" === i && (i = ""), t ? e ? n((J[e] && J[e].get || s)(t, e, i, r)) : function(e, i, r) {
                    return n((J[e] && J[e].get || s)(t, e, i, r))
                } : t
            },
            quickSetter: function(t, e, i) {
                if ((t = Xt(t)).length > 1) {
                    var r = t.map((function(t) {
                            return ri.quickSetter(t, e, i)
                        })),
                        s = r.length;
                    return function(t) {
                        for (var e = s; e--;) r[e](t)
                    }
                }
                t = t[0] || {};
                var n = J[e],
                    a = st(t),
                    o = a.harness && (a.harness.aliases || {})[e] || e,
                    h = n ? function(e) {
                        var r = new n;
                        l._pt = 0, r.init(t, i ? e + i : e, l, 0, [t]), r.render(1, r), l._pt && Ue(1, l)
                    } : a.set(t, o);
                return n ? h : function(e) {
                    return h(t, o, i ? e + i : e, a, 1)
                }
            },
            isTweening: function(t) {
                return r.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Ee(t.ease, g.ease)), yt(g, t || {})
            },
            config: function(t) {
                return yt(m, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    i = t.effect,
                    r = t.plugins,
                    s = t.defaults,
                    n = t.extendTimeline;
                (r || "").split(",").forEach((function(t) {
                    return t && !J[t] && !H[t] && Y(e + " effect requires " + t + " plugin.")
                })), Q[e] = function(t, e, r) {
                    return i(Xt(t), dt(e || {}, s), r)
                }, n && (Fe.prototype[e] = function(t, i, r) {
                    return this.add(Q[e](t, A(i) ? i : (r = i) && {}, this), r)
                })
            },
            registerEase: function(t, e) {
                ye[t] = Ee(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Ee(t, e) : ye
            },
            getById: function(t) {
                return r.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var i, s, n = new Fe(t);
                for (n.smoothChildTiming = F(t.smoothChildTiming), r.remove(n), n._dp = 0, n._time = n._tTime = r._time, i = r._first; i;) s = i._next, !e && !i._dur && i instanceof ze && i.vars.onComplete === i._targets[0] || kt(n, i, i._start - i._delay), i = s;
                return kt(r, n, 0), n
            },
            utils: {
                wrap: function t(e, i, r) {
                    var s = i - e;
                    return B(e) ? Qt(e, t(0, e.length), i) : Gt(r, (function(t) {
                        return (s + (t - e) % s) % s + e
                    }))
                },
                wrapYoyo: function t(e, i, r) {
                    var s = i - e,
                        n = 2 * s;
                    return B(e) ? Qt(e, t(0, e.length - 1), i) : Gt(r, (function(t) {
                        return e + ((t = (n + (t - e) % n) % n || 0) > s ? n - t : t)
                    }))
                },
                distribute: $t,
                random: Jt,
                snap: Kt,
                normalize: function(t, e, i) {
                    return ee(t, e, 0, 1, i)
                },
                getUnit: qt,
                clamp: function(t, e, i) {
                    return Gt(i, (function(i) {
                        return Ht(t, e, i)
                    }))
                },
                splitColor: le,
                toArray: Xt,
                selector: function(t) {
                    return t = Xt(t)[0] || Y("Invalid scope") || {},
                        function(e) {
                            var i = t.current || t.nativeElement || t;
                            return Xt(e, i.querySelectorAll ? i : i === t ? Y("Invalid scope") || a.createElement("div") : t)
                        }
                },
                mapRange: ee,
                pipe: function() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return function(t) {
                        return e.reduce((function(t, e) {
                            return e(t)
                        }), t)
                    }
                },
                unitize: function(t, e) {
                    return function(i) {
                        return t(parseFloat(i)) + (e || qt(i))
                    }
                },
                interpolate: function t(e, i, r, s) {
                    var n = isNaN(e + i) ? 0 : function(t) {
                        return (1 - t) * e + t * i
                    };
                    if (!n) {
                        var a, o, h, l, p, u = P(e),
                            c = {};
                        if (!0 === r && (s = 1) && (r = null), u) e = {
                            p: e
                        }, i = {
                            p: i
                        };
                        else if (B(e) && !B(i)) {
                            for (h = [], l = e.length, p = l - 2, o = 1; o < l; o++) h.push(t(e[o - 1], e[o]));
                            l--, n = function(t) {
                                t *= l;
                                var e = Math.min(p, ~~t);
                                return h[e](t - e)
                            }, r = i
                        } else s || (e = gt(B(e) ? [] : {}, e));
                        if (!h) {
                            for (a in i) Ie.call(c, e, a, "get", i[a]);
                            n = function(t) {
                                return Ue(t, c) || (u ? e.p : e)
                            }
                        }
                    }
                    return Gt(r, n)
                },
                shuffle: Ut
            },
            install: j,
            effects: Q,
            ticker: me,
            updateRoot: Fe.updateRoot,
            plugins: J,
            globalTimeline: r,
            core: {
                PropTween: Qe,
                globals: X,
                Tween: ze,
                Timeline: Fe,
                Animation: Ae,
                getCache: st,
                _removeLinkedListItem: Dt,
                suppressOverwrites: function(t) {
                    return i = t
                }
            }
        };
        at("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
            return ti[t] = ze[t]
        })), me.add(Fe.updateRoot), l = ti.to({}, {
            duration: 0
        });
        var ei = function(t, e) {
                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                return i
            },
            ii = function(t, e) {
                return {
                    name: t,
                    rawVars: 1,
                    init: function(t, i, r) {
                        r._onInit = function(t) {
                            var r, s;
                            if (P(i) && (r = {}, at(i, (function(t) {
                                    return r[t] = 1
                                })), i = r), e) {
                                for (s in r = {}, i) r[s] = e(i[s]);
                                i = r
                            }! function(t, e) {
                                var i, r, s, n = t._targets;
                                for (i in e)
                                    for (r = n.length; r--;)(s = t._ptLookup[r][i]) && (s = s.d) && (s._pt && (s = ei(s, i)), s && s.modifier && s.modifier(e[i], t, n[r], i))
                            }(t, i)
                        }
                    }
                }
            },
            ri = ti.registerPlugin({
                name: "attr",
                init: function(t, e, i, r, s) {
                    var n, a;
                    for (n in e)(a = this.add(t, "setAttribute", (t.getAttribute(n) || 0) + "", e[n], r, s, 0, 0, n)) && (a.op = n), this._props.push(n)
                }
            }, {
                name: "endArray",
                init: function(t, e) {
                    for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
                }
            }, ii("roundProps", Zt), ii("modifiers"), ii("snap", Kt)) || ti;
        ze.version = Fe.version = ri.version = "3.8.0", o = 1, k() && ge();
        ye.Power0, ye.Power1, ye.Power2, ye.Power3, ye.Power4, ye.Linear, ye.Quad, ye.Cubic, ye.Quart, ye.Quint, ye.Strong, ye.Elastic, ye.Back, ye.SteppedEase, ye.Bounce, ye.Sine, ye.Expo, ye.Circ;
        var si, ni, ai, oi, hi, li, pi, ui = {},
            ci = 180 / Math.PI,
            fi = Math.PI / 180,
            di = Math.atan2,
            mi = /([A-Z])/g,
            gi = /(?:left|right|width|margin|padding|x)/i,
            yi = /[\s,\(]\S/,
            vi = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            },
            _i = function(t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            Di = function(t, e) {
                return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            bi = function(t, e) {
                return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
            },
            xi = function(t, e) {
                var i = e.s + e.c * t;
                e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
            },
            Ei = function(t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e)
            },
            Ci = function(t, e) {
                return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
            },
            Pi = function(t, e, i) {
                return t.style[e] = i
            },
            Si = function(t, e, i) {
                return t.style.setProperty(e, i)
            },
            wi = function(t, e, i) {
                return t._gsap[e] = i
            },
            Ti = function(t, e, i) {
                return t._gsap.scaleX = t._gsap.scaleY = i
            },
            Ai = function(t, e, i, r, s) {
                var n = t._gsap;
                n.scaleX = n.scaleY = i, n.renderTransform(s, n)
            },
            Fi = function(t, e, i, r, s) {
                var n = t._gsap;
                n[e] = i, n.renderTransform(s, n)
            },
            ki = "transform",
            Mi = ki + "Origin",
            Ii = function(t, e) {
                var i = ni.createElementNS ? ni.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ni.createElement(t);
                return i.style ? i : ni.createElement(t)
            },
            Bi = function t(e, i, r) {
                var s = getComputedStyle(e);
                return s[i] || s.getPropertyValue(i.replace(mi, "-$1").toLowerCase()) || s.getPropertyValue(i) || !r && t(e, Ri(i) || i, 1) || ""
            },
            Oi = "O,Moz,ms,Ms,Webkit".split(","),
            Ri = function(t, e, i) {
                var r = (e || hi).style,
                    s = 5;
                if (t in r && !i) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Oi[s] + t in r););
                return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? Oi[s] : "") + t
            },
            Li = function() {
                "undefined" != typeof window && window.document && (si = window, ni = si.document, ai = ni.documentElement, hi = Ii("div") || {
                    style: {}
                }, Ii("div"), ki = Ri(ki), Mi = ki + "Origin", hi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", pi = !!Ri("perspective"), oi = 1)
            },
            Vi = function t(e) {
                var i, r = Ii("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    s = this.parentNode,
                    n = this.nextSibling,
                    a = this.style.cssText;
                if (ai.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                    i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
                return s && (n ? s.insertBefore(this, n) : s.appendChild(this)), ai.removeChild(r), this.style.cssText = a, i
            },
            zi = function(t, e) {
                for (var i = e.length; i--;)
                    if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
            },
            Ni = function(t) {
                var e;
                try {
                    e = t.getBBox()
                } catch (i) {
                    e = Vi.call(t, !0)
                }
                return e && (e.width || e.height) || t.getBBox === Vi || (e = Vi.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                    x: +zi(t, ["x", "cx", "x1"]) || 0,
                    y: +zi(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                }
            },
            Gi = function(t) {
                return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Ni(t))
            },
            Hi = function(t, e) {
                if (e) {
                    var i = t.style;
                    e in ui && e !== Mi && (e = ki), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(mi, "-$1").toLowerCase())) : i.removeAttribute(e)
                }
            },
            qi = function(t, e, i, r, s, n) {
                var a = new Qe(t._pt, e, i, 0, 1, n ? Ci : Ei);
                return t._pt = a, a.b = r, a.e = s, t._props.push(i), a
            },
            ji = {
                deg: 1,
                rad: 1,
                turn: 1
            },
            Wi = function t(e, i, r, s) {
                var n, a, o, h, l = parseFloat(r) || 0,
                    p = (r + "").trim().substr((l + "").length) || "px",
                    u = hi.style,
                    c = gi.test(i),
                    f = "svg" === e.tagName.toLowerCase(),
                    d = (f ? "client" : "offset") + (c ? "Width" : "Height"),
                    m = 100,
                    g = "px" === s,
                    y = "%" === s;
                return s === p || !l || ji[s] || ji[p] ? l : ("px" !== p && !g && (l = t(e, i, r, "px")), h = e.getCTM && Gi(e), !y && "%" !== p || !ui[i] && !~i.indexOf("adius") ? (u[c ? "width" : "height"] = m + (g ? p : s), a = ~i.indexOf("adius") || "em" === s && e.appendChild && !f ? e : e.parentNode, h && (a = (e.ownerSVGElement || {}).parentNode), a && a !== ni && a.appendChild || (a = ni.body), (o = a._gsap) && y && o.width && c && o.time === me.time ? ot(l / o.width * m) : ((y || "%" === p) && (u.position = Bi(e, "position")), a === e && (u.position = "static"), a.appendChild(hi), n = hi[d], a.removeChild(hi), u.position = "absolute", c && y && ((o = st(a)).time = me.time, o.width = a[d]), ot(g ? n * l / m : n && l ? m / n * l : 0))) : (n = h ? e.getBBox()[c ? "width" : "height"] : e[d], ot(y ? l / n * m : l / 100 * n)))
            },
            Yi = function(t, e, i, r) {
                var s;
                return oi || Li(), e in vi && "transform" !== e && ~(e = vi[e]).indexOf(",") && (e = e.split(",")[0]), ui[e] && "transform" !== e ? (s = rr(t, r), s = "transformOrigin" !== e ? s[e] : s.svg ? s.origin : sr(Bi(t, Mi)) + " " + s.zOrigin + "px") : (!(s = t.style[e]) || "auto" === s || r || ~(s + "").indexOf("calc(")) && (s = Zi[e] && Zi[e](t, e, i) || Bi(t, e) || nt(t, e) || ("opacity" === e ? 1 : 0)), i && !~(s + "").trim().indexOf(" ") ? Wi(t, e, s, i) + i : s
            },
            Xi = function(t, e, i, r) {
                if (!i || "none" === i) {
                    var s = Ri(e, t, 1),
                        n = s && Bi(t, s, 1);
                    n && n !== i ? (e = s, i = n) : "borderColor" === e && (i = Bi(t, "borderTopColor"))
                }
                var a, o, h, l, p, u, c, f, d, g, y, v, _ = new Qe(this._pt, t.style, e, 0, 1, Xe),
                    D = 0,
                    b = 0;
                if (_.b = i, _.e = r, i += "", "auto" === (r += "") && (t.style[e] = r, r = Bi(t, e) || r, t.style[e] = i), de(a = [i, r]), r = a[1], h = (i = a[0]).match(L) || [], (r.match(L) || []).length) {
                    for (; o = L.exec(r);) c = o[0], d = r.substring(D, o.index), p ? p = (p + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (p = 1), c !== (u = h[b++] || "") && (l = parseFloat(u) || 0, y = u.substr((l + "").length), (v = "=" === c.charAt(1) ? +(c.charAt(0) + "1") : 0) && (c = c.substr(2)), f = parseFloat(c), g = c.substr((f + "").length), D = L.lastIndex - g.length, g || (g = g || m.units[e] || y, D === r.length && (r += g, _.e += g)), y !== g && (l = Wi(t, e, u, g) || 0), _._pt = {
                        _next: _._pt,
                        p: d || 1 === b ? d : ",",
                        s: l,
                        c: v ? v * f : f - l,
                        m: p && p < 4 || "zIndex" === e ? Math.round : 0
                    });
                    _.c = D < r.length ? r.substring(D, r.length) : ""
                } else _.r = "display" === e && "none" === r ? Ci : Ei;
                return z.test(r) && (_.e = 0), this._pt = _, _
            },
            Ui = {
                top: "0%",
                bottom: "100%",
                left: "0%",
                right: "100%",
                center: "50%"
            },
            $i = function(t, e) {
                if (e.tween && e.tween._time === e.tween._dur) {
                    var i, r, s, n = e.t,
                        a = n.style,
                        o = e.u,
                        h = n._gsap;
                    if ("all" === o || !0 === o) a.cssText = "", r = 1;
                    else
                        for (s = (o = o.split(",")).length; --s > -1;) i = o[s], ui[i] && (r = 1, i = "transformOrigin" === i ? Mi : ki), Hi(n, i);
                    r && (Hi(n, ki), h && (h.svg && n.removeAttribute("transform"), rr(n, 1), h.uncache = 1))
                }
            },
            Zi = {
                clearProps: function(t, e, i, r, s) {
                    if ("isFromStart" !== s.data) {
                        var n = t._pt = new Qe(t._pt, e, i, 0, 0, $i);
                        return n.u = r, n.pr = -10, n.tween = s, t._props.push(i), 1
                    }
                }
            },
            Ki = [1, 0, 0, 1, 0, 0],
            Ji = {},
            Qi = function(t) {
                return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
            },
            tr = function(t) {
                var e = Bi(t, ki);
                return Qi(e) ? Ki : e.substr(7).match(R).map(ot)
            },
            er = function(t, e) {
                var i, r, s, n, a = t._gsap || st(t),
                    o = t.style,
                    h = tr(t);
                return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (h = [(s = t.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",") ? Ki : h : (h !== Ki || t.offsetParent || t === ai || a.svg || (s = o.display, o.display = "block", (i = t.parentNode) && t.offsetParent || (n = 1, r = t.nextSibling, ai.appendChild(t)), h = tr(t), s ? o.display = s : Hi(t, "display"), n && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : ai.removeChild(t))), e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
            },
            ir = function(t, e, i, r, s, n) {
                var a, o, h, l = t._gsap,
                    p = s || er(t, !0),
                    u = l.xOrigin || 0,
                    c = l.yOrigin || 0,
                    f = l.xOffset || 0,
                    d = l.yOffset || 0,
                    m = p[0],
                    g = p[1],
                    y = p[2],
                    v = p[3],
                    _ = p[4],
                    D = p[5],
                    b = e.split(" "),
                    x = parseFloat(b[0]) || 0,
                    E = parseFloat(b[1]) || 0;
                i ? p !== Ki && (o = m * v - g * y) && (h = x * (-g / o) + E * (m / o) - (m * D - g * _) / o, x = x * (v / o) + E * (-y / o) + (y * D - v * _) / o, E = h) : (x = (a = Ni(t)).x + (~b[0].indexOf("%") ? x / 100 * a.width : x), E = a.y + (~(b[1] || b[0]).indexOf("%") ? E / 100 * a.height : E)), r || !1 !== r && l.smooth ? (_ = x - u, D = E - c, l.xOffset = f + (_ * m + D * y) - _, l.yOffset = d + (_ * g + D * v) - D) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = E, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!i, t.style[Mi] = "0px 0px", n && (qi(n, l, "xOrigin", u, x), qi(n, l, "yOrigin", c, E), qi(n, l, "xOffset", f, l.xOffset), qi(n, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + E)
            },
            rr = function(t, e) {
                var i = t._gsap || new Te(t);
                if ("x" in i && !e && !i.uncache) return i;
                var r, s, n, a, o, h, l, p, u, c, f, d, g, y, v, _, D, b, x, E, C, P, S, w, T, A, F, k, M, I, B, O, R = t.style,
                    L = i.scaleX < 0,
                    V = "px",
                    z = "deg",
                    N = Bi(t, Mi) || "0";
                return r = s = n = h = l = p = u = c = f = 0, a = o = 1, i.svg = !(!t.getCTM || !Gi(t)), y = er(t, i.svg), i.svg && (w = (!i.uncache || "0px 0px" === N) && !e && t.getAttribute("data-svg-origin"), ir(t, w || N, !!w || i.originIsAbsolute, !1 !== i.smooth, y)), d = i.xOrigin || 0, g = i.yOrigin || 0, y !== Ki && (b = y[0], x = y[1], E = y[2], C = y[3], r = P = y[4], s = S = y[5], 6 === y.length ? (a = Math.sqrt(b * b + x * x), o = Math.sqrt(C * C + E * E), h = b || x ? di(x, b) * ci : 0, (u = E || C ? di(E, C) * ci + h : 0) && (o *= Math.abs(Math.cos(u * fi))), i.svg && (r -= d - (d * b + g * E), s -= g - (d * x + g * C))) : (O = y[6], I = y[7], F = y[8], k = y[9], M = y[10], B = y[11], r = y[12], s = y[13], n = y[14], l = (v = di(O, M)) * ci, v && (w = P * (_ = Math.cos(-v)) + F * (D = Math.sin(-v)), T = S * _ + k * D, A = O * _ + M * D, F = P * -D + F * _, k = S * -D + k * _, M = O * -D + M * _, B = I * -D + B * _, P = w, S = T, O = A), p = (v = di(-E, M)) * ci, v && (_ = Math.cos(-v), B = C * (D = Math.sin(-v)) + B * _, b = w = b * _ - F * D, x = T = x * _ - k * D, E = A = E * _ - M * D), h = (v = di(x, b)) * ci, v && (w = b * (_ = Math.cos(v)) + x * (D = Math.sin(v)), T = P * _ + S * D, x = x * _ - b * D, S = S * _ - P * D, b = w, P = T), l && Math.abs(l) + Math.abs(h) > 359.9 && (l = h = 0, p = 180 - p), a = ot(Math.sqrt(b * b + x * x + E * E)), o = ot(Math.sqrt(S * S + O * O)), v = di(P, S), u = Math.abs(v) > 2e-4 ? v * ci : 0, f = B ? 1 / (B < 0 ? -B : B) : 0), i.svg && (w = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Qi(Bi(t, ki)), w && t.setAttribute("transform", w))), Math.abs(u) > 90 && Math.abs(u) < 270 && (L ? (a *= -1, u += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (o *= -1, u += u <= 0 ? 180 : -180)), i.x = r - ((i.xPercent = r && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + V, i.y = s - ((i.yPercent = s && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-s) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + V, i.z = n + V, i.scaleX = ot(a), i.scaleY = ot(o), i.rotation = ot(h) + z, i.rotationX = ot(l) + z, i.rotationY = ot(p) + z, i.skewX = u + z, i.skewY = c + z, i.transformPerspective = f + V, (i.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (R[Mi] = sr(N)), i.xOffset = i.yOffset = 0, i.force3D = m.force3D, i.renderTransform = i.svg ? ur : pi ? pr : ar, i.uncache = 0, i
            },
            sr = function(t) {
                return (t = t.split(" "))[0] + " " + t[1]
            },
            nr = function(t, e, i) {
                var r = qt(e);
                return ot(parseFloat(e) + parseFloat(Wi(t, "x", i + "px", r))) + r
            },
            ar = function(t, e) {
                e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, pr(t, e)
            },
            or = "0deg",
            hr = "0px",
            lr = ") ",
            pr = function(t, e) {
                var i = e || this,
                    r = i.xPercent,
                    s = i.yPercent,
                    n = i.x,
                    a = i.y,
                    o = i.z,
                    h = i.rotation,
                    l = i.rotationY,
                    p = i.rotationX,
                    u = i.skewX,
                    c = i.skewY,
                    f = i.scaleX,
                    d = i.scaleY,
                    m = i.transformPerspective,
                    g = i.force3D,
                    y = i.target,
                    v = i.zOrigin,
                    _ = "",
                    D = "auto" === g && t && 1 !== t || !0 === g;
                if (v && (p !== or || l !== or)) {
                    var b, x = parseFloat(l) * fi,
                        E = Math.sin(x),
                        C = Math.cos(x);
                    x = parseFloat(p) * fi, b = Math.cos(x), n = nr(y, n, E * b * -v), a = nr(y, a, -Math.sin(x) * -v), o = nr(y, o, C * b * -v + v)
                }
                m !== hr && (_ += "perspective(" + m + lr), (r || s) && (_ += "translate(" + r + "%, " + s + "%) "), (D || n !== hr || a !== hr || o !== hr) && (_ += o !== hr || D ? "translate3d(" + n + ", " + a + ", " + o + ") " : "translate(" + n + ", " + a + lr), h !== or && (_ += "rotate(" + h + lr), l !== or && (_ += "rotateY(" + l + lr), p !== or && (_ += "rotateX(" + p + lr), u === or && c === or || (_ += "skew(" + u + ", " + c + lr), 1 === f && 1 === d || (_ += "scale(" + f + ", " + d + lr), y.style[ki] = _ || "translate(0, 0)"
            },
            ur = function(t, e) {
                var i, r, s, n, a, o = e || this,
                    h = o.xPercent,
                    l = o.yPercent,
                    p = o.x,
                    u = o.y,
                    c = o.rotation,
                    f = o.skewX,
                    d = o.skewY,
                    m = o.scaleX,
                    g = o.scaleY,
                    y = o.target,
                    v = o.xOrigin,
                    _ = o.yOrigin,
                    D = o.xOffset,
                    b = o.yOffset,
                    x = o.forceCSS,
                    E = parseFloat(p),
                    C = parseFloat(u);
                c = parseFloat(c), f = parseFloat(f), (d = parseFloat(d)) && (f += d = parseFloat(d), c += d), c || f ? (c *= fi, f *= fi, i = Math.cos(c) * m, r = Math.sin(c) * m, s = Math.sin(c - f) * -g, n = Math.cos(c - f) * g, f && (d *= fi, a = Math.tan(f - d), s *= a = Math.sqrt(1 + a * a), n *= a, d && (a = Math.tan(d), i *= a = Math.sqrt(1 + a * a), r *= a)), i = ot(i), r = ot(r), s = ot(s), n = ot(n)) : (i = m, n = g, r = s = 0), (E && !~(p + "").indexOf("px") || C && !~(u + "").indexOf("px")) && (E = Wi(y, "x", p, "px"), C = Wi(y, "y", u, "px")), (v || _ || D || b) && (E = ot(E + v - (v * i + _ * s) + D), C = ot(C + _ - (v * r + _ * n) + b)), (h || l) && (a = y.getBBox(), E = ot(E + h / 100 * a.width), C = ot(C + l / 100 * a.height)), a = "matrix(" + i + "," + r + "," + s + "," + n + "," + E + "," + C + ")", y.setAttribute("transform", a), x && (y.style[ki] = a)
            },
            cr = function(t, e, i, r, s, n) {
                var a, o, h = 360,
                    l = P(s),
                    p = parseFloat(s) * (l && ~s.indexOf("rad") ? ci : 1),
                    u = n ? p * n : p - r,
                    c = r + u + "deg";
                return l && ("short" === (a = s.split("_")[1]) && (u %= h) !== u % 180 && (u += u < 0 ? h : -360), "cw" === a && u < 0 ? u = (u + 36e9) % h - ~~(u / h) * h : "ccw" === a && u > 0 && (u = (u - 36e9) % h - ~~(u / h) * h)), t._pt = o = new Qe(t._pt, e, i, r, u, Di), o.e = c, o.u = "deg", t._props.push(i), o
            },
            fr = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            dr = function(t, e, i) {
                var r, s, n, a, o, h, l, p = fr({}, i._gsap),
                    u = i.style;
                for (s in p.svg ? (n = i.getAttribute("transform"), i.setAttribute("transform", ""), u[ki] = e, r = rr(i, 1), Hi(i, ki), i.setAttribute("transform", n)) : (n = getComputedStyle(i)[ki], u[ki] = e, r = rr(i, 1), u[ki] = n), ui)(n = p[s]) !== (a = r[s]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 && (o = qt(n) !== (l = qt(a)) ? Wi(i, s, n, l) : parseFloat(n), h = parseFloat(a), t._pt = new Qe(t._pt, r, s, o, h - o, _i), t._pt.u = l || 0, t._props.push(s));
                fr(r, p)
            };
        at("padding,margin,Width,Radius", (function(t, e) {
            var i = "Top",
                r = "Right",
                s = "Bottom",
                n = "Left",
                a = (e < 3 ? [i, r, s, n] : [i + n, i + r, s + r, s + n]).map((function(i) {
                    return e < 2 ? t + i : "border" + i + t
                }));
            Zi[e > 1 ? "border" + t : t] = function(t, e, i, r, s) {
                var n, o;
                if (arguments.length < 4) return n = a.map((function(e) {
                    return Yi(t, e, i)
                })), 5 === (o = n.join(" ")).split(n[0]).length ? n[0] : o;
                n = (r + "").split(" "), o = {}, a.forEach((function(t, e) {
                    return o[t] = n[e] = n[e] || n[(e - 1) / 2 | 0]
                })), t.init(e, o, s)
            }
        }));
        var mr, gr, yr, vr = {
            name: "css",
            register: Li,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, i, r, s) {
                var n, a, o, h, l, p, u, c, f, d, g, y, v, _, D, b, x, E, C, S = this._props,
                    w = t.style,
                    T = i.vars.startAt;
                for (u in oi || Li(), e)
                    if ("autoRound" !== u && (a = e[u], !J[u] || !Be(u, e, i, r, t, s)))
                        if (l = typeof a, p = Zi[u], "function" === l && (l = typeof(a = a.call(i, r, t, s))), "string" === l && ~a.indexOf("random(") && (a = te(a)), p) p(this, t, u, a, i) && (D = 1);
                        else if ("--" === u.substr(0, 2)) n = (getComputedStyle(t).getPropertyValue(u) + "").trim(), a += "", ce.lastIndex = 0, ce.test(n) || (c = qt(n), f = qt(a)), f ? c !== f && (n = Wi(t, u, n, f) + f) : c && (a += c), this.add(w, "setProperty", n, a, r, s, 0, 0, u), S.push(u);
                else if ("undefined" !== l) {
                    if (T && u in T ? (n = "function" == typeof T[u] ? T[u].call(i, r, t, s) : T[u], u in m.units && !qt(n) && (n += m.units[u]), P(n) && ~n.indexOf("random(") && (n = te(n)), "=" === (n + "").charAt(1) && (n = Yi(t, u))) : n = Yi(t, u), h = parseFloat(n), (d = "string" === l && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), o = parseFloat(a), u in vi && ("autoAlpha" === u && (1 === h && "hidden" === Yi(t, "visibility") && o && (h = 0), qi(this, w, "visibility", h ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== u && "transform" !== u && ~(u = vi[u]).indexOf(",") && (u = u.split(",")[0])), g = u in ui)
                        if (y || ((v = t._gsap).renderTransform && !e.parseTransform || rr(t, e.parseTransform), _ = !1 !== e.smoothOrigin && v.smooth, (y = this._pt = new Qe(this._pt, w, ki, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === u) this._pt = new Qe(this._pt, v, "scaleY", v.scaleY, (d ? d * o : o - v.scaleY) || 0), S.push("scaleY", u), u += "X";
                        else {
                            if ("transformOrigin" === u) {
                                x = void 0, E = void 0, C = void 0, x = (b = a).split(" "), E = x[0], C = x[1] || "50%", "top" !== E && "bottom" !== E && "left" !== C && "right" !== C || (b = E, E = C, C = b), x[0] = Ui[E] || E, x[1] = Ui[C] || C, a = x.join(" "), v.svg ? ir(t, a, 0, _, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && qi(this, v, "zOrigin", v.zOrigin, f), qi(this, w, u, sr(n), sr(a)));
                                continue
                            }
                            if ("svgOrigin" === u) {
                                ir(t, a, 1, _, 0, this);
                                continue
                            }
                            if (u in Ji) {
                                cr(this, v, u, h, a, d);
                                continue
                            }
                            if ("smoothOrigin" === u) {
                                qi(this, v, "smooth", v.smooth, a);
                                continue
                            }
                            if ("force3D" === u) {
                                v[u] = a;
                                continue
                            }
                            if ("transform" === u) {
                                dr(this, a, t);
                                continue
                            }
                        }
                    else u in w || (u = Ri(u) || u);
                    if (g || (o || 0 === o) && (h || 0 === h) && !yi.test(a) && u in w) o || (o = 0), (c = (n + "").substr((h + "").length)) !== (f = qt(a) || (u in m.units ? m.units[u] : c)) && (h = Wi(t, u, n, f)), this._pt = new Qe(this._pt, g ? v : w, u, h, d ? d * o : o - h, g || "px" !== f && "zIndex" !== u || !1 === e.autoRound ? _i : xi), this._pt.u = f || 0, c !== f && "%" !== f && (this._pt.b = n, this._pt.r = bi);
                    else if (u in w) Xi.call(this, t, u, n, a);
                    else {
                        if (!(u in t)) {
                            W(u, a);
                            continue
                        }
                        this.add(t, u, n || t[u], a, r, s)
                    }
                    S.push(u)
                }
                D && Je(this)
            },
            get: Yi,
            aliases: vi,
            getSetter: function(t, e, i) {
                var r = vi[e];
                return r && r.indexOf(",") < 0 && (e = r), e in ui && e !== Mi && (t._gsap.x || Yi(t, "x")) ? i && li === i ? "scale" === e ? Ti : wi : (li = i || {}) && ("scale" === e ? Ai : Fi) : t.style && !T(t.style[e]) ? Pi : ~e.indexOf("-") ? Si : je(t, e)
            },
            core: {
                _removeProperty: Hi,
                _getMatrix: er
            }
        };
        ri.utils.checkPrefix = Ri, yr = at((mr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (gr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
            ui[t] = 1
        })), at(gr, (function(t) {
            m.units[t] = "deg", Ji[t] = 1
        })), vi[yr[13]] = mr + "," + gr, at("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
            var e = t.split(":");
            vi[e[1]] = yr[e[0]]
        })), at("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
            m.units[t] = "px"
        })), ri.registerPlugin(vr);
        var _r, Dr, br, xr, Er, Cr, Pr, Sr, wr, Tr, Ar, Fr, kr, Mr, Ir, Br, Or, Rr, Lr, Vr, zr, Nr, Gr, Hr, qr, jr, Wr, Yr, Xr = ri.registerPlugin(vr) || ri,
            Ur = (Xr.core.Tween, 1),
            $r = [],
            Zr = [],
            Kr = Date.now,
            Jr = Kr(),
            Qr = 0,
            ts = 1,
            es = function(t) {
                return t
            },
            is = function(t) {
                return Ar(t)[0] || (cs(t) ? console.warn("Element not found:", t) : null)
            },
            rs = function(t) {
                return Math.round(1e5 * t) / 1e5 || 0
            },
            ss = function() {
                return "undefined" != typeof window
            },
            ns = function() {
                return _r || ss() && (_r = window.gsap) && _r.registerPlugin && _r
            },
            as = function(t) {
                return !!~Pr.indexOf(t)
            },
            os = function(t, e) {
                return ~$r.indexOf(t) && $r[$r.indexOf(t) + 1][e]
            },
            hs = function(t, e) {
                var i = e.s,
                    r = e.sc,
                    s = Zr.indexOf(t),
                    n = r === zs.sc ? 1 : 2;
                return !~s && (s = Zr.push(t) - 1), Zr[s + n] || (Zr[s + n] = os(t, i) || (as(t) ? r : function(e) {
                    return arguments.length ? t[i] = e : t[i]
                }))
            },
            ls = function(t) {
                return os(t, "getBoundingClientRect") || (as(t) ? function() {
                    return wn.width = br.innerWidth, wn.height = br.innerHeight, wn
                } : function() {
                    return Hs(t)
                })
            },
            ps = function(t, e) {
                var i = e.s,
                    r = e.d2,
                    s = e.d,
                    n = e.a;
                return (i = "scroll" + r) && (n = os(t, i)) ? n() - ls(t)()[s] : as(t) ? (Cr[i] || Er[i]) - (br["inner" + r] || Er["client" + r] || Cr["client" + r]) : t[i] - t["offset" + r]
            },
            us = function(t, e) {
                for (var i = 0; i < zr.length; i += 3)(!e || ~e.indexOf(zr[i + 1])) && t(zr[i], zr[i + 1], zr[i + 2])
            },
            cs = function(t) {
                return "string" == typeof t
            },
            fs = function(t) {
                return "function" == typeof t
            },
            ds = function(t) {
                return "number" == typeof t
            },
            ms = function(t) {
                return "object" == typeof t
            },
            gs = function(t) {
                return fs(t) && t()
            },
            ys = function(t, e) {
                return function() {
                    var i = gs(t),
                        r = gs(e);
                    return function() {
                        gs(i), gs(r)
                    }
                }
            },
            vs = function(t, e, i) {
                return t && t.progress(e ? 0 : 1) && i && t.pause()
            },
            _s = function(t, e) {
                var i = e(t);
                i && i.totalTime && (t.callbackAnimation = i)
            },
            Ds = Math.abs,
            bs = "scrollLeft",
            xs = "scrollTop",
            Es = "left",
            Cs = "top",
            Ps = "right",
            Ss = "bottom",
            ws = "width",
            Ts = "height",
            As = "Right",
            Fs = "Left",
            ks = "Top",
            Ms = "Bottom",
            Is = "padding",
            Bs = "margin",
            Os = "Width",
            Rs = "Height",
            Ls = "px",
            Vs = {
                s: bs,
                p: Es,
                p2: Fs,
                os: Ps,
                os2: As,
                d: ws,
                d2: Os,
                a: "x",
                sc: function(t) {
                    return arguments.length ? br.scrollTo(t, zs.sc()) : br.pageXOffset || xr.scrollLeft || Er.scrollLeft || Cr.scrollLeft || 0
                }
            },
            zs = {
                s: xs,
                p: Cs,
                p2: ks,
                os: Ss,
                os2: Ms,
                d: Ts,
                d2: Rs,
                a: "y",
                op: Vs,
                sc: function(t) {
                    return arguments.length ? br.scrollTo(Vs.sc(), t) : br.pageYOffset || xr.scrollTop || Er.scrollTop || Cr.scrollTop || 0
                }
            },
            Ns = function(t) {
                return br.getComputedStyle(t)
            },
            Gs = function(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            },
            Hs = function(t, e) {
                var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== Ns(t)[Or] && _r.to(t, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0
                    }).progress(1),
                    r = t.getBoundingClientRect();
                return i && i.progress(0).kill(), r
            },
            qs = function(t, e) {
                var i = e.d2;
                return t["offset" + i] || t["client" + i] || 0
            },
            js = function(t) {
                var e, i = [],
                    r = t.labels,
                    s = t.duration();
                for (e in r) i.push(r[e] / s);
                return i
            },
            Ws = function(t) {
                var e = _r.utils.snap(t),
                    i = Array.isArray(t) && t.slice(0).sort((function(t, e) {
                        return t - e
                    }));
                return i ? function(t, r) {
                    var s;
                    if (!r) return e(t);
                    if (r > 0) {
                        for (t -= 1e-4, s = 0; s < i.length; s++)
                            if (i[s] >= t) return i[s];
                        return i[s - 1]
                    }
                    for (s = i.length, t += 1e-4; s--;)
                        if (i[s] <= t) return i[s];
                    return i[0]
                } : function(i, r) {
                    var s = e(i);
                    return !r || Math.abs(s - i) < .001 || s - i < 0 == r < 0 ? s : e(r < 0 ? i - t : i + t)
                }
            },
            Ys = function(t, e, i, r) {
                return i.split(",").forEach((function(i) {
                    return t(e, i, r)
                }))
            },
            Xs = function(t, e, i) {
                return t.addEventListener(e, i, {
                    passive: !0
                })
            },
            Us = function(t, e, i) {
                return t.removeEventListener(e, i)
            },
            $s = {
                startColor: "green",
                endColor: "red",
                indent: 0,
                fontSize: "16px",
                fontWeight: "normal"
            },
            Zs = {
                toggleActions: "play",
                anticipatePin: 0
            },
            Ks = {
                top: 0,
                left: 0,
                center: .5,
                bottom: 1,
                right: 1
            },
            Js = function(t, e) {
                if (cs(t)) {
                    var i = t.indexOf("="),
                        r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
                    ~i && (t.indexOf("%") > i && (r *= e / 100), t = t.substr(0, i - 1)), t = r + (t in Ks ? Ks[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
                }
                return t
            },
            Qs = function(t, e, i, r, s, n, a, o) {
                var h = s.startColor,
                    l = s.endColor,
                    p = s.fontSize,
                    u = s.indent,
                    c = s.fontWeight,
                    f = xr.createElement("div"),
                    d = as(i) || "fixed" === os(i, "pinType"),
                    m = -1 !== t.indexOf("scroller"),
                    g = d ? Cr : i,
                    y = -1 !== t.indexOf("start"),
                    v = y ? h : l,
                    _ = "border-color:" + v + ";font-size:" + p + ";color:" + v + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                return _ += "position:" + ((m || o) && d ? "fixed;" : "absolute;"), (m || o || !d) && (_ += (r === zs ? Ps : Ss) + ":" + (n + parseFloat(u)) + "px;"), a && (_ += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), f._isStart = y, f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), f.style.cssText = _, f.innerText = e || 0 === e ? t + "-" + e : t, g.children[0] ? g.insertBefore(f, g.children[0]) : g.appendChild(f), f._offset = f["offset" + r.op.d2], tn(f, 0, r, y), f
            },
            tn = function(t, e, i, r) {
                var s = {
                        display: "block"
                    },
                    n = i[r ? "os2" : "p2"],
                    a = i[r ? "p2" : "os2"];
                t._isFlipped = r, s[i.a + "Percent"] = r ? -100 : 0, s[i.a] = r ? "1px" : 0, s["border" + n + Os] = 1, s["border" + a + Os] = 0, s[i.p] = e + "px", _r.set(t, s)
            },
            en = [],
            rn = {},
            sn = function() {
                return Kr() - Qr > 20 && Dn()
            },
            nn = function() {
                var t = Kr();
                Qr !== t ? (Dn(), Qr || cn("scrollStart"), Qr = t) : Tr || (Tr = wr(Dn))
            },
            an = function() {
                return !Ir && !Hr && !xr.fullscreenElement && Sr.restart(!0)
            },
            on = {},
            hn = [],
            ln = [],
            pn = function(t) {
                var e, i = _r.ticker.frame,
                    r = [],
                    s = 0;
                if (Wr !== i || Ur) {
                    for (mn(); s < ln.length; s += 4)(e = br.matchMedia(ln[s]).matches) !== ln[s + 3] && (ln[s + 3] = e, e ? r.push(s) : mn(1, ln[s]) || fs(ln[s + 2]) && ln[s + 2]());
                    for (dn(), s = 0; s < r.length; s++) e = r[s], jr = ln[e], ln[e + 2] = ln[e + 1](t);
                    jr = 0, Dr && yn(0, 1), Wr = i, cn("matchMedia")
                }
            },
            un = function t() {
                return Us(Mn, "scrollEnd", t) || yn(!0)
            },
            cn = function(t) {
                return on[t] && on[t].map((function(t) {
                    return t()
                })) || hn
            },
            fn = [],
            dn = function(t) {
                for (var e = 0; e < fn.length; e += 5) t && fn[e + 4] !== t || (fn[e].style.cssText = fn[e + 1], fn[e].getBBox && fn[e].setAttribute("transform", fn[e + 2] || ""), fn[e + 3].uncache = 1)
            },
            mn = function(t, e) {
                var i;
                for (Rr = 0; Rr < en.length; Rr++) i = en[Rr], e && i.media !== e || (t ? i.kill(1) : i.revert());
                e && dn(e), e || cn("revert")
            },
            gn = function() {
                return Zr.forEach((function(t) {
                    return "function" == typeof t && (t.rec = 0)
                }))
            },
            yn = function(t, e) {
                if (!Qr || t) {
                    Yr = !0;
                    var i = cn("refreshInit");
                    Nr && Mn.sort(), e || mn(), en.forEach((function(t) {
                        return t.refresh()
                    })), i.forEach((function(t) {
                        return t && t.render && t.render(-1)
                    })), gn(), Sr.pause(), Yr = !1, cn("refresh")
                } else Xs(Mn, "scrollEnd", un)
            },
            vn = 0,
            _n = 1,
            Dn = function() {
                if (!Yr) {
                    var t = en.length,
                        e = Kr(),
                        i = e - Jr >= 50,
                        r = t && en[0].scroll();
                    if (_n = vn > r ? -1 : 1, vn = r, i && (Qr && !Br && e - Qr > 200 && (Qr = 0, cn("scrollEnd")), kr = Jr, Jr = e), _n < 0) {
                        for (Rr = t; Rr-- > 0;) en[Rr] && en[Rr].update(0, i);
                        _n = 1
                    } else
                        for (Rr = 0; Rr < t; Rr++) en[Rr] && en[Rr].update(0, i);
                    Tr = 0
                }
            },
            bn = [Es, Cs, Ss, Ps, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
            xn = bn.concat([ws, Ts, "boxSizing", "maxWidth", "maxHeight", "position", Bs, Is, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
            En = function(t, e, i, r) {
                if (t.parentNode !== e) {
                    for (var s, n = bn.length, a = e.style, o = t.style; n--;) a[s = bn[n]] = i[s];
                    a.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (a.display = "inline-block"), o.bottom = o.right = "auto", a.overflow = "visible", a.boxSizing = "border-box", a.width = qs(t, Vs) + Ls, a.height = qs(t, zs) + Ls, a.padding = o.margin = o.top = o.left = "0", Pn(r), o.width = o.maxWidth = i.width, o.height = o.maxHeight = i.height, o.padding = i.padding, t.parentNode.insertBefore(e, t), e.appendChild(t)
                }
            },
            Cn = /([A-Z])/g,
            Pn = function(t) {
                if (t) {
                    var e, i, r = t.t.style,
                        s = t.length,
                        n = 0;
                    for ((t.t._gsap || _r.core.getCache(t.t)).uncache = 1; n < s; n += 2) i = t[n + 1], e = t[n], i ? r[e] = i : r[e] && r.removeProperty(e.replace(Cn, "-$1").toLowerCase())
                }
            },
            Sn = function(t) {
                for (var e = xn.length, i = t.style, r = [], s = 0; s < e; s++) r.push(xn[s], i[xn[s]]);
                return r.t = t, r
            },
            wn = {
                left: 0,
                top: 0
            },
            Tn = function(t, e, i, r, s, n, a, o, h, l, p, u, c) {
                fs(t) && (t = t(o)), cs(t) && "max" === t.substr(0, 3) && (t = u + ("=" === t.charAt(4) ? Js("0" + t.substr(3), i) : 0));
                var f, d, m, g = c ? c.time() : 0;
                if (c && c.seek(0), ds(t)) a && tn(a, i, r, !0);
                else {
                    fs(e) && (e = e(o));
                    var y, v, _, D, b = t.split(" ");
                    m = is(e) || Cr, (y = Hs(m) || {}) && (y.left || y.top) || "none" !== Ns(m).display || (D = m.style.display, m.style.display = "block", y = Hs(m), D ? m.style.display = D : m.style.removeProperty("display")), v = Js(b[0], y[r.d]), _ = Js(b[1] || "0", i), t = y[r.p] - h[r.p] - l + v + s - _, a && tn(a, _, r, i - _ < 20 || a._isStart && _ > 20), i -= i - _
                }
                if (n) {
                    var x = t + i,
                        E = n._isStart;
                    f = "scroll" + r.d2, tn(n, x, r, E && x > 20 || !E && (p ? Math.max(Cr[f], Er[f]) : n.parentNode[f]) <= x + 1), p && (h = Hs(a), p && (n.style[r.op.p] = h[r.op.p] - r.op.m - n._offset + Ls))
                }
                return c && m && (f = Hs(m), c.seek(u), d = Hs(m), c._caScrollDist = f[r.p] - d[r.p], t = t / c._caScrollDist * u), c && c.seek(g), c ? t : Math.round(t)
            },
            An = /(?:webkit|moz|length|cssText|inset)/i,
            Fn = function(t, e, i, r) {
                if (t.parentNode !== e) {
                    var s, n, a = t.style;
                    if (e === Cr) {
                        for (s in t._stOrig = a.cssText, n = Ns(t)) + s || An.test(s) || !n[s] || "string" != typeof a[s] || "0" === s || (a[s] = n[s]);
                        a.top = i, a.left = r
                    } else a.cssText = t._stOrig;
                    _r.core.getCache(t).uncache = 1, e.appendChild(t)
                }
            },
            kn = function(t, e) {
                var i, r, s = hs(t, e),
                    n = "_scroll" + e.p2,
                    a = function e(a, o, h, l, p) {
                        var u = e.tween,
                            c = o.onComplete,
                            f = {};
                        return u && u.kill(), i = Math.round(h), o[n] = a, o.modifiers = f, f[n] = function(t) {
                            return (t = rs(s())) !== i && t !== r && Math.abs(t - i) > 2 ? (u.kill(), e.tween = 0) : t = h + l * u.ratio + p * u.ratio * u.ratio, r = i, i = rs(t)
                        }, o.onComplete = function() {
                            e.tween = 0, c && c.call(u)
                        }, u = e.tween = _r.to(t, o)
                    };
                return t[n] = s, t.addEventListener("wheel", (function() {
                    return a.tween && a.tween.kill() && (a.tween = 0)
                }), {
                    passive: !0
                }), a
            };
        Vs.op = zs;
        var Mn = function() {
            function t(e, i) {
                Dr || t.register(_r) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, i)
            }
            return t.prototype.init = function(e, i) {
                if (this.progress = this.start = 0, this.vars && this.kill(1), ts) {
                    var r, s, n, a, o, h, l, p, u, c, f, d, m, g, y, v, _, D, b, x, E, C, P, S, w, T, A, F, k, M, I, B, O, R, L, V, z, N, G, H, q = e = Gs(cs(e) || ds(e) || e.nodeType ? {
                            trigger: e
                        } : e, Zs),
                        j = q.onUpdate,
                        W = q.toggleClass,
                        Y = q.id,
                        X = q.onToggle,
                        U = q.onRefresh,
                        $ = q.scrub,
                        Z = q.trigger,
                        K = q.pin,
                        J = q.pinSpacing,
                        Q = q.invalidateOnRefresh,
                        tt = q.anticipatePin,
                        et = q.onScrubComplete,
                        it = q.onSnapComplete,
                        rt = q.once,
                        st = q.snap,
                        nt = q.pinReparent,
                        at = q.pinSpacer,
                        ot = q.containerAnimation,
                        ht = q.fastScrollEnd,
                        lt = q.preventOverlaps,
                        pt = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Vs : zs,
                        ut = !$ && 0 !== $,
                        ct = is(e.scroller || br),
                        ft = _r.core.getCache(ct),
                        dt = as(ct),
                        mt = "fixed" === ("pinType" in e ? e.pinType : os(ct, "pinType") || dt && "fixed"),
                        gt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                        yt = ut && e.toggleActions.split(" "),
                        vt = "markers" in e ? e.markers : Zs.markers,
                        _t = dt ? 0 : parseFloat(Ns(ct)["border" + pt.p2 + Os]) || 0,
                        Dt = this,
                        bt = e.onRefreshInit && function() {
                            return e.onRefreshInit(Dt)
                        },
                        xt = function(t, e, i) {
                            var r = i.d,
                                s = i.d2,
                                n = i.a;
                            return (n = os(t, "getBoundingClientRect")) ? function() {
                                return n()[r]
                            } : function() {
                                return (e ? br["inner" + s] : t["client" + s]) || 0
                            }
                        }(ct, dt, pt),
                        Et = function(t, e) {
                            return !e || ~$r.indexOf(t) ? ls(t) : function() {
                                return wn
                            }
                        }(ct, dt),
                        Ct = 0,
                        Pt = hs(ct, pt);
                    if (Dt.media = jr, tt *= 45, Dt.scroller = ct, Dt.scroll = ot ? ot.time.bind(ot) : Pt, a = Pt(), Dt.vars = e, i = i || e.animation, "refreshPriority" in e && (Nr = 1), ft.tweenScroll = ft.tweenScroll || {
                            top: kn(ct, zs),
                            left: kn(ct, Vs)
                        }, Dt.tweenTo = r = ft.tweenScroll[pt.p], i && (i.vars.lazy = !1, i._initted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.render(0, !0, !0), Dt.animation = i.pause(), i.scrollTrigger = Dt, (I = ds($) && $) && (M = _r.to(i, {
                            ease: "power3",
                            duration: I,
                            onComplete: function() {
                                return et && et(Dt)
                            }
                        })), F = 0, Y || (Y = i.vars.id)), en.push(Dt), st && (ms(st) && !st.push || (st = {
                            snapTo: st
                        }), "scrollBehavior" in Cr.style && _r.set(dt ? [Cr, Er] : ct, {
                            scrollBehavior: "auto"
                        }), n = fs(st.snapTo) ? st.snapTo : "labels" === st.snapTo ? function(t) {
                            return function(e) {
                                return _r.utils.snap(js(t), e)
                            }
                        }(i) : "labelsDirectional" === st.snapTo ? (N = i, function(t, e) {
                            return Ws(js(N))(t, e.direction)
                        }) : !1 !== st.directional ? function(t, e) {
                            return Ws(st.snapTo)(t, e.direction)
                        } : _r.utils.snap(st.snapTo), B = st.duration || {
                            min: .1,
                            max: 2
                        }, B = ms(B) ? Fr(B.min, B.max) : Fr(B, B), O = _r.delayedCall(st.delay || I / 2 || .1, (function() {
                            if (Math.abs(Dt.getVelocity()) < 10 && !Br && Ct !== Pt()) {
                                var t = i && !ut ? i.totalProgress() : Dt.progress,
                                    e = (t - k) / (Kr() - kr) * 1e3 || 0,
                                    s = _r.utils.clamp(-Dt.progress, 1 - Dt.progress, Ds(e / 2) * e / .185),
                                    a = Dt.progress + (!1 === st.inertia ? 0 : s),
                                    o = Fr(0, 1, n(a, Dt)),
                                    p = Pt(),
                                    u = Math.round(h + o * m),
                                    c = st,
                                    f = c.onStart,
                                    d = c.onInterrupt,
                                    g = c.onComplete,
                                    y = r.tween;
                                if (p <= l && p >= h && u !== p) {
                                    if (y && !y._initted && y.data <= Ds(u - p)) return;
                                    !1 === st.inertia && (s = o - Dt.progress), r(u, {
                                        duration: B(Ds(.185 * Math.max(Ds(a - t), Ds(o - t)) / e / .05 || 0)),
                                        ease: st.ease || "power3",
                                        data: Ds(u - p),
                                        onInterrupt: function() {
                                            return O.restart(!0) && d && d(Dt)
                                        },
                                        onComplete: function() {
                                            Ct = Pt(), F = k = i && !ut ? i.totalProgress() : Dt.progress, it && it(Dt), g && g(Dt)
                                        }
                                    }, p, s * m, u - p - s * m), f && f(Dt, r.tween)
                                }
                            } else Dt.isActive && O.restart(!0)
                        })).pause()), Y && (rn[Y] = Dt), Z = Dt.trigger = is(Z || K), K = !0 === K ? Z : is(K), cs(W) && (W = {
                            targets: Z,
                            className: W
                        }), K && (!1 === J || J === Bs || (J = !(!J && "flex" === Ns(K.parentNode).display) && Is), Dt.pin = K, !1 !== e.force3D && _r.set(K, {
                            force3D: !0
                        }), (s = _r.core.getCache(K)).spacer ? g = s.pinState : (at && ((at = is(at)) && !at.nodeType && (at = at.current || at.nativeElement), s.spacerIsNative = !!at, at && (s.spacerState = Sn(at))), s.spacer = _ = at || xr.createElement("div"), _.classList.add("pin-spacer"), Y && _.classList.add("pin-spacer-" + Y), s.pinState = g = Sn(K)), Dt.spacer = _ = s.spacer, A = Ns(K), P = A[J + pt.os2], b = _r.getProperty(K), x = _r.quickSetter(K, pt.a, Ls), En(K, _, A), v = Sn(K)), vt && (d = ms(vt) ? Gs(vt, $s) : $s, c = Qs("scroller-start", Y, ct, pt, d, 0), f = Qs("scroller-end", Y, ct, pt, d, 0, c), D = c["offset" + pt.op.d2], p = Qs("start", Y, ct, pt, d, D, 0, ot), u = Qs("end", Y, ct, pt, d, D, 0, ot), ot && (z = _r.quickSetter([p, u], pt.a, Ls)), mt || $r.length && !0 === os(ct, "fixedMarkers") || (H = Ns(G = dt ? Cr : ct).position, G.style.position = "absolute" === H || "fixed" === H ? H : "relative", _r.set([c, f], {
                            force3D: !0
                        }), w = _r.quickSetter(c, pt.a, Ls), T = _r.quickSetter(f, pt.a, Ls))), ot) {
                        var St = ot.vars.onUpdate,
                            wt = ot.vars.onUpdateParams;
                        ot.eventCallback("onUpdate", (function() {
                            Dt.update(0, 0, 1), St && St.apply(wt || [])
                        }))
                    }
                    Dt.previous = function() {
                        return en[en.indexOf(Dt) - 1]
                    }, Dt.next = function() {
                        return en[en.indexOf(Dt) + 1]
                    }, Dt.revert = function(t) {
                        var e = !1 !== t || !Dt.enabled,
                            r = Ir;
                        e !== Dt.isReverted && (e && (Dt.scroll.rec || (Dt.scroll.rec = Pt()), L = Math.max(Pt(), Dt.scroll.rec || 0), R = Dt.progress, V = i && i.progress()), p && [p, u, c, f].forEach((function(t) {
                            return t.style.display = e ? "none" : "block"
                        })), e && (Ir = 1), Dt.update(e), Ir = r, K && (e ? function(t, e, i) {
                            Pn(i);
                            var r = t._gsap;
                            if (r.spacerIsNative) Pn(r.spacerState);
                            else if (t.parentNode === e) {
                                var s = e.parentNode;
                                s && (s.insertBefore(t, e), s.removeChild(e))
                            }
                        }(K, _, g) : (!nt || !Dt.isActive) && En(K, _, Ns(K), S)), Dt.isReverted = e)
                    }, Dt.refresh = function(r, s) {
                        if (!Ir && Dt.enabled || s)
                            if (K && r && Qr) Xs(t, "scrollEnd", un);
                            else {
                                Ir = 1, M && M.pause(), Q && i && i.progress(0).invalidate(), Dt.isReverted || Dt.revert();
                                for (var n, d, D, x, P, w, T, A, F, k, I = xt(), B = Et(), O = ot ? ot.duration() : ps(ct, pt), z = 0, N = 0, G = e.end, H = e.endTrigger || Z, q = e.start || (0 !== e.start && Z ? K ? "0 0" : "0 100%" : 0), j = e.pinnedContainer && is(e.pinnedContainer), W = Z && Math.max(0, en.indexOf(Dt)) || 0, Y = W; Y--;)(w = en[Y]).end || w.refresh(0, 1) || (Ir = 1), !(T = w.pin) || T !== Z && T !== K || w.isReverted || (k || (k = []), k.unshift(w), w.revert());
                                for (fs(q) && (q = q(Dt)), h = Tn(q, Z, I, pt, Pt(), p, c, Dt, B, _t, mt, O, ot) || (K ? -.001 : 0), fs(G) && (G = G(Dt)), cs(G) && !G.indexOf("+=") && (~G.indexOf(" ") ? G = (cs(q) ? q.split(" ")[0] : "") + G : (z = Js(G.substr(2), I), G = cs(q) ? q : h + z, H = Z)), l = Math.max(h, Tn(G || (H ? "100% 0" : O), H, I, pt, Pt() + z, u, f, Dt, B, _t, mt, O, ot)) || -.001, m = l - h || (h -= .01) && .001, z = 0, Y = W; Y--;)(T = (w = en[Y]).pin) && w.start - w._pinPush < h && !ot && (n = w.end - w.start, (T === Z || T === j) && !ds(q) && (z += n), T === K && (N += n));
                                if (h += z, l += z, Dt._pinPush = N, p && z && ((n = {})[pt.a] = "+=" + z, j && (n[pt.p] = "-=" + Pt()), _r.set([p, u], n)), K) n = Ns(K), x = pt === zs, D = Pt(), E = parseFloat(b(pt.a)) + N, !O && l > 1 && ((dt ? Cr : ct).style["overflow-" + pt.a] = "scroll"), En(K, _, n), v = Sn(K), d = Hs(K, !0), A = mt && hs(ct, x ? Vs : zs)(), J && ((S = [J + pt.os2, m + N + Ls]).t = _, (Y = J === Is ? qs(K, pt) + m + N : 0) && S.push(pt.d, Y + Ls), Pn(S), mt && Pt(L)), mt && ((P = {
                                    top: d.top + (x ? D - h : A) + Ls,
                                    left: d.left + (x ? A : D - h) + Ls,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                }).width = P.maxWidth = Math.ceil(d.width) + Ls, P.height = P.maxHeight = Math.ceil(d.height) + Ls, P.margin = P.marginTop = P.marginRight = P.marginBottom = P.marginLeft = "0", P.padding = n.padding, P.paddingTop = n.paddingTop, P.paddingRight = n.paddingRight, P.paddingBottom = n.paddingBottom, P.paddingLeft = n.paddingLeft, y = function(t, e, i) {
                                    for (var r, s = [], n = t.length, a = i ? 8 : 0; a < n; a += 2) r = t[a], s.push(r, r in e ? e[r] : t[a + 1]);
                                    return s.t = t.t, s
                                }(g, P, nt)), i ? (F = i._initted, Gr(1), i.render(i.duration(), !0, !0), C = b(pt.a) - E + m + N, m !== C && y.splice(y.length - 2, 2), i.render(0, !0, !0), F || i.invalidate(), Gr(0)) : C = m;
                                else if (Z && Pt() && !ot)
                                    for (d = Z.parentNode; d && d !== Cr;) d._pinOffset && (h -= d._pinOffset, l -= d._pinOffset), d = d.parentNode;
                                k && k.forEach((function(t) {
                                    return t.revert(!1)
                                })), Dt.start = h, Dt.end = l, a = o = Pt(), ot || (a < L && Pt(L), Dt.scroll.rec = 0), Dt.revert(!1), Ir = 0, i && ut && i._initted && i.progress() !== V && i.progress(V, !0).render(i.time(), !0, !0), R !== Dt.progress && (i && !ut && i.totalProgress(R, !0), Dt.progress = R, Dt.update(0, 0, 1)), K && J && (_._pinOffset = Math.round(Dt.progress * C)), U && U(Dt)
                            }
                    }, Dt.getVelocity = function() {
                        return (Pt() - o) / (Kr() - kr) * 1e3 || 0
                    }, Dt.endAnimation = function() {
                        vs(Dt.callbackAnimation), i && (M ? M.progress(1) : i.paused() ? ut || vs(i, Dt.direction < 0, 1) : vs(i, i.reversed()))
                    }, Dt.getTrailing = function(t) {
                        var e = en.indexOf(Dt),
                            i = Dt.direction > 0 ? en.slice(0, e).reverse() : en.slice(e + 1);
                        return cs(t) ? i.filter((function(e) {
                            return e.vars.preventOverlaps === t
                        })) : i
                    }, Dt.update = function(t, e, s) {
                        if (!ot || s || t) {
                            var n, p, u, f, d, g, D, b = Dt.scroll(),
                                S = t ? 0 : (b - h) / m,
                                A = S < 0 ? 0 : S > 1 ? 1 : S || 0,
                                I = Dt.progress;
                            if (e && (o = a, a = ot ? Pt() : b, st && (k = F, F = i && !ut ? i.totalProgress() : A)), tt && !A && K && !Ir && !Ur && Qr && h < b + (b - o) / (Kr() - kr) * tt && (A = 1e-4), A !== I && Dt.enabled) {
                                if (f = (d = (n = Dt.isActive = !!A && A < 1) !== (!!I && I < 1)) || !!A != !!I, Dt.direction = A > I ? 1 : -1, Dt.progress = A, f && !Ir && (p = A && !I ? 0 : 1 === A ? 1 : 1 === I ? 2 : 3, ut && (u = !d && "none" !== yt[p + 1] && yt[p + 1] || yt[p], D = i && ("complete" === u || "reset" === u || u in i))), lt && d && (D || $ || !i) && (fs(lt) ? lt(Dt) : Dt.getTrailing(lt).forEach((function(t) {
                                        return t.endAnimation()
                                    }))), ut || (!M || Ir || Ur ? i && i.totalProgress(A, !!Ir) : (M.vars.totalProgress = A, M.invalidate().restart())), K)
                                    if (t && J && (_.style[J + pt.os2] = P), mt) {
                                        if (f) {
                                            if (g = !t && A > I && l + 1 > b && b + 1 >= ps(ct, pt), nt)
                                                if (t || !n && !g) Fn(K, _);
                                                else {
                                                    var B = Hs(K, !0),
                                                        R = b - h;
                                                    Fn(K, Cr, B.top + (pt === zs ? R : 0) + Ls, B.left + (pt === zs ? 0 : R) + Ls)
                                                }
                                            Pn(n || g ? y : v), C !== m && A < 1 && n || x(E + (1 !== A || g ? 0 : C))
                                        }
                                    } else x(E + C * A);
                                st && !r.tween && !Ir && !Ur && O.restart(!0), W && (d || rt && A && (A < 1 || !qr)) && Ar(W.targets).forEach((function(t) {
                                    return t.classList[n || rt ? "add" : "remove"](W.className)
                                })), j && !ut && !t && j(Dt), f && !Ir ? (ut && (D && ("complete" === u ? i.pause().totalProgress(1) : "reset" === u ? i.restart(!0).pause() : "restart" === u ? i.restart(!0) : i[u]()), j && j(Dt)), !d && qr || (X && d && _s(Dt, X), gt[p] && _s(Dt, gt[p]), rt && (1 === A ? Dt.kill(!1, 1) : gt[p] = 0), d || gt[p = 1 === A ? 1 : 3] && _s(Dt, gt[p])), ht && !n && Math.abs(Dt.getVelocity()) > (ds(ht) ? ht : 2500) && (vs(Dt.callbackAnimation), M ? M.progress(1) : vs(i, !A, 1))) : ut && j && !Ir && j(Dt)
                            }
                            if (T) {
                                var L = ot ? b / ot.duration() * (ot._caScrollDist || 0) : b;
                                w(L + (c._isFlipped ? 1 : 0)), T(L)
                            }
                            z && z(-b / ot.duration() * (ot._caScrollDist || 0))
                        }
                    }, Dt.enable = function(e, i) {
                        Dt.enabled || (Dt.enabled = !0, Xs(ct, "resize", an), Xs(ct, "scroll", nn), bt && Xs(t, "refreshInit", bt), !1 !== e && (Dt.progress = R = 0, a = o = Ct = Pt()), !1 !== i && Dt.refresh())
                    }, Dt.getTween = function(t) {
                        return t && r ? r.tween : M
                    }, Dt.disable = function(e, i) {
                        if (Dt.enabled && (!1 !== e && Dt.revert(), Dt.enabled = Dt.isActive = !1, i || M && M.pause(), L = 0, s && (s.uncache = 1), bt && Us(t, "refreshInit", bt), O && (O.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !dt)) {
                            for (var n = en.length; n--;)
                                if (en[n].scroller === ct && en[n] !== Dt) return;
                            Us(ct, "resize", an), Us(ct, "scroll", nn)
                        }
                    }, Dt.kill = function(t, e) {
                        Dt.disable(t, e), M && M.kill(), Y && delete rn[Y];
                        var r = en.indexOf(Dt);
                        en.splice(r, 1), r === Rr && _n > 0 && Rr--, r = 0, en.forEach((function(t) {
                            return t.scroller === Dt.scroller && (r = 1)
                        })), r || (Dt.scroll.rec = 0), i && (i.scrollTrigger = null, t && i.render(-1), e || i.kill()), p && [p, u, c, f].forEach((function(t) {
                            return t.parentNode && t.parentNode.removeChild(t)
                        })), K && (s && (s.uncache = 1), r = 0, en.forEach((function(t) {
                            return t.pin === K && r++
                        })), r || (s.spacer = 0))
                    }, Dt.enable(!1, !1), i && i.add && !m ? _r.delayedCall(.01, (function() {
                        return h || l || Dt.refresh()
                    })) && (m = .01) && (h = l = 0) : Dt.refresh()
                } else this.update = this.refresh = this.kill = es
            }, t.register = function(e) {
                if (!Dr && (_r = e || ns(), ss() && window.document && (br = window, xr = document, Er = xr.documentElement, Cr = xr.body), _r && (Ar = _r.utils.toArray, Fr = _r.utils.clamp, Gr = _r.core.suppressOverwrites || es, _r.core.globals("ScrollTrigger", t), Cr))) {
                    wr = br.requestAnimationFrame || function(t) {
                        return setTimeout(t, 16)
                    }, Xs(br, "wheel", nn), Pr = [br, xr, Er, Cr], Xs(xr, "scroll", nn);
                    var i, r = Cr.style,
                        s = r.borderTopStyle;
                    r.borderTopStyle = "solid", i = Hs(Cr), zs.m = Math.round(i.top + zs.sc()) || 0, Vs.m = Math.round(i.left + Vs.sc()) || 0, s ? r.borderTopStyle = s : r.removeProperty("border-top-style"), Mr = setInterval(sn, 200), _r.delayedCall(.5, (function() {
                        return Ur = 0
                    })), Xs(xr, "touchcancel", es), Xs(Cr, "touchstart", es), Ys(Xs, xr, "pointerdown,touchstart,mousedown", (function() {
                        return Br = 1
                    })), Ys(Xs, xr, "pointerup,touchend,mouseup", (function() {
                        return Br = 0
                    })), Or = _r.utils.checkPrefix("transform"), xn.push(Or), Dr = Kr(), Sr = _r.delayedCall(.2, yn).pause(), zr = [xr, "visibilitychange", function() {
                        var t = br.innerWidth,
                            e = br.innerHeight;
                        xr.hidden ? (Lr = t, Vr = e) : Lr === t && Vr === e || an()
                    }, xr, "DOMContentLoaded", yn, br, "load", function() {
                        return Qr || yn()
                    }, br, "resize", an], us(Xs)
                }
                return Dr
            }, t.defaults = function(t) {
                for (var e in t) Zs[e] = t[e]
            }, t.kill = function() {
                ts = 0, en.slice(0).forEach((function(t) {
                    return t.kill(1)
                }))
            }, t.config = function(t) {
                "limitCallbacks" in t && (qr = !!t.limitCallbacks);
                var e = t.syncInterval;
                e && clearInterval(Mr) || (Mr = e) && setInterval(sn, e), "autoRefreshEvents" in t && (us(Us) || us(Xs, t.autoRefreshEvents || "none"), Hr = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
            }, t.scrollerProxy = function(t, e) {
                var i = is(t),
                    r = Zr.indexOf(i),
                    s = as(i);
                ~r && Zr.splice(r, s ? 6 : 2), s ? $r.unshift(br, e, Cr, e, Er, e) : $r.unshift(i, e)
            }, t.matchMedia = function(t) {
                var e, i, r, s, n;
                for (i in t) r = ln.indexOf(i), s = t[i], jr = i, "all" === i ? s() : (e = br.matchMedia(i)) && (e.matches && (n = s()), ~r ? (ln[r + 1] = ys(ln[r + 1], s), ln[r + 2] = ys(ln[r + 2], n)) : (r = ln.length, ln.push(i, s, n), e.addListener ? e.addListener(pn) : e.addEventListener("change", pn)), ln[r + 3] = e.matches), jr = 0;
                return ln
            }, t.clearMatchMedia = function(t) {
                t || (ln.length = 0), (t = ln.indexOf(t)) >= 0 && ln.splice(t, 4)
            }, t.isInViewport = function(t, e, i) {
                var r = (cs(t) ? is(t) : t).getBoundingClientRect(),
                    s = r[i ? ws : Ts] * e || 0;
                return i ? r.right - s > 0 && r.left + s < br.innerWidth : r.bottom - s > 0 && r.top + s < br.innerHeight
            }, t.positionInViewport = function(t, e, i) {
                cs(t) && (t = is(t));
                var r = t.getBoundingClientRect(),
                    s = r[i ? ws : Ts],
                    n = null == e ? s / 2 : e in Ks ? Ks[e] * s : ~e.indexOf("%") ? parseFloat(e) * s / 100 : parseFloat(e) || 0;
                return i ? (r.left + n) / br.innerWidth : (r.top + n) / br.innerHeight
            }, t
        }();
        Mn.version = "3.8.0", Mn.saveStyles = function(t) {
            return t ? Ar(t).forEach((function(t) {
                if (t && t.style) {
                    var e = fn.indexOf(t);
                    e >= 0 && fn.splice(e, 5), fn.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), _r.core.getCache(t), jr)
                }
            })) : fn
        }, Mn.revert = function(t, e) {
            return mn(!t, e)
        }, Mn.create = function(t, e) {
            return new Mn(t, e)
        }, Mn.refresh = function(t) {
            return t ? an() : (Dr || Mn.register()) && yn(!0)
        }, Mn.update = Dn, Mn.clearScrollMemory = gn, Mn.maxScroll = function(t, e) {
            return ps(t, e ? Vs : zs)
        }, Mn.getScrollFunc = function(t, e) {
            return hs(is(t), e ? Vs : zs)
        }, Mn.getById = function(t) {
            return rn[t]
        }, Mn.getAll = function() {
            return en.slice(0)
        }, Mn.isScrolling = function() {
            return !!Qr
        }, Mn.snapDirectional = Ws, Mn.addEventListener = function(t, e) {
            var i = on[t] || (on[t] = []);
            ~i.indexOf(e) || i.push(e)
        }, Mn.removeEventListener = function(t, e) {
            var i = on[t],
                r = i && i.indexOf(e);
            r >= 0 && i.splice(r, 1)
        }, Mn.batch = function(t, e) {
            var i, r = [],
                s = {},
                n = e.interval || .016,
                a = e.batchMax || 1e9,
                o = function(t, e) {
                    var i = [],
                        r = [],
                        s = _r.delayedCall(n, (function() {
                            e(i, r), i = [], r = []
                        })).pause();
                    return function(t) {
                        i.length || s.restart(!0), i.push(t.trigger), r.push(t), a <= i.length && s.progress(1)
                    }
                };
            for (i in e) s[i] = "on" === i.substr(0, 2) && fs(e[i]) && "onRefreshInit" !== i ? o(0, e[i]) : e[i];
            return fs(a) && (a = a(), Xs(Mn, "refresh", (function() {
                return a = e.batchMax()
            }))), Ar(t).forEach((function(t) {
                var e = {};
                for (i in s) e[i] = s[i];
                e.trigger = t, r.push(Mn.create(e))
            })), r
        }, Mn.sort = function(t) {
            return en.sort(t || function(t, e) {
                return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
            })
        }, ns() && _r.registerPlugin(Mn);
        var In = /(^\s+|\s+$)/g,
            Bn = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

        function On(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += On(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        }

        function Rn(t, e, i, r) {
            for (var s, n = t.firstChild, a = []; n;) 3 === n.nodeType ? (s = (n.nodeValue + "").replace(/^\n+/g, ""), r || (s = s.replace(/\s+/g, " ")), a.push.apply(a, Ln(s, e, i, r))) : "br" === (n.nodeName + "").toLowerCase() ? a[a.length - 1] += "<br>" : a.push(n.outerHTML), n = n.nextSibling;
            return a
        }

        function Ln(t, e, i, r) {
            if (t += "", i && (t = t.replace(In, "")), e && "" !== e) return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
            for (var s, n, a = [], o = t.length, h = 0; h < o; h++)((n = t.charAt(h)).charCodeAt(0) >= 55296 && n.charCodeAt(0) <= 56319 || t.charCodeAt(h + 1) >= 65024 && t.charCodeAt(h + 1) <= 65039) && (s = ((t.substr(h, 12).split(Bn) || [])[1] || "").length || 2, n = t.substr(h, s), a.emoji = 1, h += s - 1), a.push(">" === n ? "&gt;" : "<" === n ? "&lt;" : !r || " " !== n || " " !== t.charAt(h - 1) && " " !== t.charAt(h + 1) ? n : "&nbsp;");
            return a
        }
        var Vn, zn, Nn, Gn = /(?:\r|\n|\t\t)/g,
            Hn = /(?:\s\s+)/g,
            qn = function(t) {
                return zn.getComputedStyle(t)
            },
            jn = Array.isArray,
            Wn = [].slice,
            Yn = function(t, e) {
                var i;
                return jn(t) ? t : "string" == (i = typeof t) && !e && t ? Wn.call(Vn.querySelectorAll(t), 0) : t && "object" === i && "length" in t ? Wn.call(t, 0) : t ? [t] : []
            },
            Xn = function(t) {
                return "absolute" === t.position || !0 === t.absolute
            },
            Un = function(t, e) {
                for (var i, r = e.length; --r > -1;)
                    if (i = e[r], t.substr(0, i.length) === i) return i.length
            },
            $n = function(t, e) {
                void 0 === t && (t = "");
                var i = ~t.indexOf("++"),
                    r = 1;
                return i && (t = t.split("++").join("")),
                    function() {
                        return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
                    }
            },
            Zn = function t(e, i, r) {
                var s = e.nodeType;
                if (1 === s || 9 === s || 11 === s)
                    for (e = e.firstChild; e; e = e.nextSibling) t(e, i, r);
                else 3 !== s && 4 !== s || (e.nodeValue = e.nodeValue.split(i).join(r))
            },
            Kn = function(t, e) {
                for (var i = e.length; --i > -1;) t.push(e[i])
            },
            Jn = function(t, e, i) {
                for (var r; t && t !== e;) {
                    if (r = t._next || t.nextSibling) return r.textContent.charAt(0) === i;
                    t = t.parentNode || t._parent
                }
            },
            Qn = function t(e) {
                var i, r, s = Yn(e.childNodes),
                    n = s.length;
                for (i = 0; i < n; i++)(r = s[i])._isSplit ? t(r) : i && r.previousSibling && 3 === r.previousSibling.nodeType ? (r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue, e.removeChild(r)) : 3 !== r.nodeType && (e.insertBefore(r.firstChild, r), e.removeChild(r))
            },
            ta = function(t, e) {
                return parseFloat(e[t]) || 0
            },
            ea = function(t, e, i, r, s, n, a) {
                var o, h, l, p, u, c, f, d, m, g, y, v, _ = qn(t),
                    D = ta("paddingLeft", _),
                    b = -999,
                    x = ta("borderBottomWidth", _) + ta("borderTopWidth", _),
                    E = ta("borderLeftWidth", _) + ta("borderRightWidth", _),
                    C = ta("paddingTop", _) + ta("paddingBottom", _),
                    P = ta("paddingLeft", _) + ta("paddingRight", _),
                    S = ta("fontSize", _) * (e.lineThreshold || .2),
                    w = _.textAlign,
                    T = [],
                    A = [],
                    F = [],
                    k = e.wordDelimiter || " ",
                    M = e.tag ? e.tag : e.span ? "span" : "div",
                    I = e.type || e.split || "chars,words,lines",
                    B = s && ~I.indexOf("lines") ? [] : null,
                    O = ~I.indexOf("words"),
                    R = ~I.indexOf("chars"),
                    L = Xn(e),
                    V = e.linesClass,
                    z = ~(V || "").indexOf("++"),
                    N = [],
                    G = "flex" === _.display,
                    H = t.style.display;
                for (z && (V = V.split("++").join("")), G && (t.style.display = "block"), l = (h = t.getElementsByTagName("*")).length, u = [], o = 0; o < l; o++) u[o] = h[o];
                if (B || L)
                    for (o = 0; o < l; o++)((c = (p = u[o]).parentNode === t) || L || R && !O) && (v = p.offsetTop, B && c && Math.abs(v - b) > S && ("BR" !== p.nodeName || 0 === o) && (f = [], B.push(f), b = v), L && (p._x = p.offsetLeft, p._y = v, p._w = p.offsetWidth, p._h = p.offsetHeight), B && ((p._isSplit && c || !R && c || O && c || !O && p.parentNode.parentNode === t && !p.parentNode._isSplit) && (f.push(p), p._x -= D, Jn(p, t, k) && (p._wordEnd = !0)), "BR" === p.nodeName && (p.nextSibling && "BR" === p.nextSibling.nodeName || 0 === o) && B.push([])));
                for (o = 0; o < l; o++)
                    if (c = (p = u[o]).parentNode === t, "BR" !== p.nodeName)
                        if (L && (m = p.style, O || c || (p._x += p.parentNode._x, p._y += p.parentNode._y), m.left = p._x + "px", m.top = p._y + "px", m.position = "absolute", m.display = "block", m.width = p._w + 1 + "px", m.height = p._h + "px"), !O && R)
                            if (p._isSplit)
                                for (p._next = h = p.nextSibling, p.parentNode.appendChild(p); h && 3 === h.nodeType && " " === h.textContent;) p._next = h.nextSibling, p.parentNode.appendChild(h), h = h.nextSibling;
                            else p.parentNode._isSplit ? (p._parent = p.parentNode, !p.previousSibling && p.firstChild && (p.firstChild._isFirst = !0), p.nextSibling && " " === p.nextSibling.textContent && !p.nextSibling.nextSibling && N.push(p.nextSibling), p._next = p.nextSibling && p.nextSibling._isFirst ? null : p.nextSibling, p.parentNode.removeChild(p), u.splice(o--, 1), l--) : c || (v = !p.nextSibling && Jn(p.parentNode, t, k), p.parentNode._parent && p.parentNode._parent.appendChild(p), v && p.parentNode.appendChild(Vn.createTextNode(" ")), "span" === M && (p.style.display = "inline"), T.push(p));
                else p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML ? A.push(p) : R && !p._isSplit && ("span" === M && (p.style.display = "inline"), T.push(p));
                else B || L ? (p.parentNode && p.parentNode.removeChild(p), u.splice(o--, 1), l--) : O || t.appendChild(p);
                for (o = N.length; --o > -1;) N[o].parentNode.removeChild(N[o]);
                if (B) {
                    for (L && (g = Vn.createElement(M), t.appendChild(g), y = g.offsetWidth + "px", v = g.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(g)), m = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                    for (d = " " === k && (!L || !O && !R), o = 0; o < B.length; o++) {
                        for (f = B[o], (g = Vn.createElement(M)).style.cssText = "display:block;text-align:" + w + ";position:" + (L ? "absolute;" : "relative;"), V && (g.className = V + (z ? o + 1 : "")), F.push(g), l = f.length, h = 0; h < l; h++) "BR" !== f[h].nodeName && (p = f[h], g.appendChild(p), d && p._wordEnd && g.appendChild(Vn.createTextNode(" ")), L && (0 === h && (g.style.top = p._y + "px", g.style.left = D + v + "px"), p.style.top = "0px", v && (p.style.left = p._x - v + "px")));
                        0 === l ? g.innerHTML = "&nbsp;" : O || R || (Qn(g), Zn(g, String.fromCharCode(160), " ")), L && (g.style.width = y, g.style.height = p._h + "px"), t.appendChild(g)
                    }
                    t.style.cssText = m
                }
                L && (a > t.clientHeight && (t.style.height = a - C + "px", t.clientHeight < a && (t.style.height = a + x + "px")), n > t.clientWidth && (t.style.width = n - P + "px", t.clientWidth < n && (t.style.width = n + E + "px"))), G && (H ? t.style.display = H : t.style.removeProperty("display")), Kn(i, T), O && Kn(r, A), Kn(s, F)
            },
            ia = function t(e, i, r, s) {
                var n, a, o = Yn(e.childNodes),
                    h = o.length,
                    l = Xn(i);
                if (3 !== e.nodeType || h > 1) {
                    for (i.absolute = !1, n = 0; n < h; n++)(a = o[n])._next = a._isFirst = a._parent = a._wordEnd = null, (3 !== a.nodeType || /\S+/.test(a.nodeValue)) && (l && 3 !== a.nodeType && "inline" === qn(a).display && (a.style.display = "inline-block", a.style.position = "relative"), a._isSplit = !0, t(a, i, r, s));
                    return i.absolute = l, void(e._isSplit = !0)
                }! function(t, e, i, r) {
                    var s, n, a, o, h, l, p, u, c = e.tag ? e.tag : e.span ? "span" : "div",
                        f = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                        d = Xn(e),
                        m = e.wordDelimiter || " ",
                        g = " " !== m ? "" : d ? "&#173; " : " ",
                        y = "</" + c + ">",
                        v = 1,
                        _ = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : Un : null,
                        D = Vn.createElement("div"),
                        b = t.parentNode;
                    for (b.insertBefore(D, t), D.textContent = t.nodeValue, b.removeChild(t), p = -1 !== (s = On(t = D)).indexOf("<"), !1 !== e.reduceWhiteSpace && (s = s.replace(Hn, " ").replace(Gn, "")), p && (s = s.split("<").join("{{LT}}")), h = s.length, n = (" " === s.charAt(0) ? g : "") + i(), a = 0; a < h; a++)
                        if (l = s.charAt(a), _ && (u = _(s.substr(a), e.specialChars))) l = s.substr(a, u || 1), n += f && " " !== l ? r() + l + "</" + c + ">" : l, a += u - 1;
                        else if (l === m && s.charAt(a - 1) !== m && a) {
                        for (n += v ? y : "", v = 0; s.charAt(a + 1) === m;) n += g, a++;
                        a === h - 1 ? n += g : ")" !== s.charAt(a + 1) && (n += g + i(), v = 1)
                    } else "{" === l && "{{LT}}" === s.substr(a, 6) ? (n += f ? r() + "{{LT}}</" + c + ">" : "{{LT}}", a += 5) : l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319 || s.charCodeAt(a + 1) >= 65024 && s.charCodeAt(a + 1) <= 65039 ? (o = ((s.substr(a, 12).split(Bn) || [])[1] || "").length || 2, n += f && " " !== l ? r() + s.substr(a, o) + "</" + c + ">" : s.substr(a, o), a += o - 1) : n += f && " " !== l ? r() + l + "</" + c + ">" : l;
                    t.outerHTML = n + (v ? y : ""), p && Zn(b, "{{LT}}", "<")
                }(e, i, r, s)
            },
            ra = function() {
                function t(t, e) {
                    Nn || (Vn = document, zn = window, Nn = 1), this.elements = Yn(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
                }
                var e = t.prototype;
                return e.split = function(t) {
                    this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                    for (var e, i, r, s = this.elements.length, n = t.tag ? t.tag : t.span ? "span" : "div", a = $n(t.wordsClass, n), o = $n(t.charsClass, n); --s > -1;) r = this.elements[s], this._originals[s] = r.innerHTML, e = r.clientHeight, i = r.clientWidth, ia(r, t, a, o), ea(r, t, this.chars, this.words, this.lines, i, e);
                    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
                }, e.revert = function() {
                    var t = this._originals;
                    if (!t) throw "revert() call wasn't scoped properly.";
                    return this.elements.forEach((function(e, i) {
                        return e.innerHTML = t[i]
                    })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
                }, t.create = function(e, i) {
                    return new t(e, i)
                }, t
            }();
        ra.version = "3.8.0", Xr.registerPlugin(ra);
        const sa = {
            global_duration: 1.4,
            global_stagger: .15,
            global_trigger: "top bottom-=20%",
            global_offset: "-=" + (1.4 - .4),
            global_offset_duration: "-=1.4",
            global_ease: "expo.out",
            global_scroller: ".smooth-scroll"
        };
        const na = sa;
        Xr.registerPlugin(Mn);
        var aa = __webpack_require__(421),
            oa = __webpack_require__.n(aa),
            ha = __webpack_require__(70),
            la = __webpack_require__.n(ha);

        function pa(t) {
            return new Promise(((e, i) => {
                la()(t, e)
            }))
        }
        var ua = __webpack_require__(778),
            ca = __webpack_require__.n(ua);
        async function fa(t) {
            const e = document.querySelector("#main"),
                i = document.querySelector("#preloader"),
                r = new(ca())("Halyard Display"),
                s = new(ca())("Happy Times"),
                n = document.querySelector(".preloader__animation"),
                a = (oa().loadAnimation({
                    container: n,
                    path: "/neurodiversity/preloader.json",
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0
                }), Xr.timeline()),
                o = () => {
                    ! function() {
                        try {
                            Xr.utils.toArray(".split-line").forEach(((t, e) => {
                                new ra(t, {
                                    type: "lines",
                                    linesClass: "line"
                                })
                            }))
                        } catch (t) {}
                        try {
                            Xr.utils.toArray(".reveal-text").forEach(((t, e) => {
                                const i = new ra(t, {
                                    type: "lines",
                                    linesClass: "line"
                                });
                                Xr.utils.toArray(i.lines).forEach(((t, e) => {
                                    const i = document.createElement("div");
                                    i.classList.add("masking-text"), t.parentNode.insertBefore(i, t), i.appendChild(t)
                                }))
                            }))
                        } catch (t) {}
                        try {
                            Xr.utils.toArray(".split-text").forEach(((t, e) => {
                                new ra(t, {
                                    type: "words, chars",
                                    charsClass: "char",
                                    wordsClass: "word"
                                })
                            }))
                        } catch (t) {}
                        try {
                            Xr.utils.toArray(".split-text-2").forEach(((t, e) => {
                                const i = new ra(t, {
                                    type: "words, chars",
                                    charsClass: "char",
                                    wordsClass: "word"
                                });
                                Xr.utils.toArray(i.chars).forEach(((t, e) => {
                                    const i = document.createElement("div");
                                    i.classList.add("masking-text-2"), t.parentNode.insertBefore(i, t), i.appendChild(t)
                                }))
                            }))
                        } catch (t) {}
                    }(), a.to(".preloader__animation", {
                        opacity: 0
                    }), a.to(".preloader__text .line", {
                        y: "-=101%"
                    }, "-=0.5"), a.to(i, {
                        opacity: 0,
                        display: "none",
                        ease: "expo.inOut"
                    }), t()
                };
            return Promise.all([r.load(), s.load(), pa(e)]).then((t => {
                o()
            })).catch((() => {
                o()
            }))
        }
        var da, ma, ga, ya, va, _a = function() {
                return "undefined" != typeof window
            },
            Da = function() {
                return da || _a() && (da = window.gsap) && da.registerPlugin && da
            },
            ba = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
            xa = {
                rect: ["width", "height"],
                circle: ["r", "r"],
                ellipse: ["rx", "ry"],
                line: ["x2", "y2"]
            },
            Ea = function(t) {
                return Math.round(1e4 * t) / 1e4
            },
            Ca = function(t) {
                return parseFloat(t) || 0
            },
            Pa = function(t, e) {
                var i = Ca(t);
                return ~t.indexOf("%") ? i / 100 * e : i
            },
            Sa = function(t, e) {
                return Ca(t.getAttribute(e))
            },
            wa = Math.sqrt,
            Ta = function(t, e, i, r, s, n) {
                return wa(Math.pow((Ca(i) - Ca(t)) * s, 2) + Math.pow((Ca(r) - Ca(e)) * n, 2))
            },
            Aa = function(t) {
                return console.warn(t)
            },
            Fa = function(t) {
                return "non-scaling-stroke" === t.getAttribute("vector-effect")
            },
            ka = function(t) {
                if (!(t = ma(t)[0])) return 0;
                var e, i, r, s, n, a, o, h = t.tagName.toLowerCase(),
                    l = t.style,
                    p = 1,
                    u = 1;
                Fa(t) && (u = t.getScreenCTM(), p = wa(u.a * u.a + u.b * u.b), u = wa(u.d * u.d + u.c * u.c));
                try {
                    i = t.getBBox()
                } catch (t) {
                    Aa("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
                }
                var c = i || {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    f = c.x,
                    d = c.y,
                    m = c.width,
                    g = c.height;
                if (i && (m || g) || !xa[h] || (m = Sa(t, xa[h][0]), g = Sa(t, xa[h][1]), "rect" !== h && "line" !== h && (m *= 2, g *= 2), "line" === h && (f = Sa(t, "x1"), d = Sa(t, "y1"), m = Math.abs(m - f), g = Math.abs(g - d))), "path" === h) s = l.strokeDasharray, l.strokeDasharray = "none", e = t.getTotalLength() || 0, p !== u && Aa("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), e *= (p + u) / 2, l.strokeDasharray = s;
                else if ("rect" === h) e = 2 * m * p + 2 * g * u;
                else if ("line" === h) e = Ta(f, d, f + m, d + g, p, u);
                else if ("polyline" === h || "polygon" === h)
                    for (r = t.getAttribute("points").match(ba) || [], "polygon" === h && r.push(r[0], r[1]), e = 0, n = 2; n < r.length; n += 2) e += Ta(r[n - 2], r[n - 1], r[n], r[n + 1], p, u) || 0;
                else "circle" !== h && "ellipse" !== h || (a = m / 2 * p, o = g / 2 * u, e = Math.PI * (3 * (a + o) - wa((3 * a + o) * (a + 3 * o))));
                return e || 0
            },
            Ma = function(t, e) {
                if (!(t = ma(t)[0])) return [0, 0];
                e || (e = ka(t) + 1);
                var i = ga.getComputedStyle(t),
                    r = i.strokeDasharray || "",
                    s = Ca(i.strokeDashoffset),
                    n = r.indexOf(",");
                return n < 0 && (n = r.indexOf(" ")), (r = n < 0 ? e : Ca(r.substr(0, n))) > e && (r = e), [-s || 0, r - s || 0]
            },
            Ia = function() {
                _a() && (document, ga = window, va = da = Da(), ma = da.utils.toArray, ya = -1 !== ((ga.navigator || {}).userAgent || "").indexOf("Edge"))
            },
            Ba = {
                version: "3.8.0",
                name: "drawSVG",
                register: function(t) {
                    da = t, Ia()
                },
                init: function(t, e, i, r, s) {
                    if (!t.getBBox) return !1;
                    va || Ia();
                    var n, a, o, h = ka(t);
                    return this._style = t.style, this._target = t, e + "" == "true" ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", a = function(t, e, i) {
                        var r, s, n = t.indexOf(" ");
                        return n < 0 ? (r = void 0 !== i ? i + "" : t, s = t) : (r = t.substr(0, n), s = t.substr(n + 1)), (r = Pa(r, e)) > (s = Pa(s, e)) ? [s, r] : [r, s]
                    }(e, h, (n = Ma(t, h))[0]), this._length = Ea(h), this._dash = Ea(n[1] - n[0]), this._offset = Ea(-n[0]), this._dashPT = this.add(this, "_dash", this._dash, Ea(a[1] - a[0])), this._offsetPT = this.add(this, "_offset", this._offset, Ea(-a[0])), ya && (o = ga.getComputedStyle(t)).strokeLinecap !== o.strokeLinejoin && (a = Ca(o.strokeMiterlimit), this.add(t.style, "strokeMiterlimit", a, a + .01)), this._live = Fa(t) || ~(e + "").indexOf("live"), this._nowrap = ~(e + "").indexOf("nowrap"), this._props.push("drawSVG"), 1
                },
                render: function(t, e) {
                    var i, r, s, n, a = e._pt,
                        o = e._style;
                    if (a) {
                        for (e._live && (i = ka(e._target)) !== e._length && (r = i / e._length, e._length = i, e._offsetPT && (e._offsetPT.s *= r, e._offsetPT.c *= r), e._dashPT ? (e._dashPT.s *= r, e._dashPT.c *= r) : e._dash *= r); a;) a.r(t, a.d), a = a._next;
                        s = e._dash || t && 1 !== t && 1e-4 || 0, i = e._length - s + .1, n = e._offset, s && n && s + Math.abs(n % e._length) > e._length - .2 && (n += n < 0 ? .1 : -.1) && (i += .1), o.strokeDashoffset = s ? n : n + .001, o.strokeDasharray = i < .2 ? "none" : s ? s + "px," + (e._nowrap ? 999999 : i) + "px" : "0px, 999999px"
                    }
                },
                getLength: ka,
                getPosition: Ma
            };
        let Oa;
        Da() && da.registerPlugin(Ba), Xr.registerPlugin(Mn, Ba);
        class Ra {
            constructor() {
                this.DOM = {
                    audio: [...document.querySelectorAll("audio")]
                }, this.init()
            }
            init() {
                this.lottieload(), this.arrow(), this.audio()
            }
            audio() {
                this.DOM.audio.forEach((t => {
                    t.volume = 0
                }))
            }
            arrow() {
                const t = Xr.timeline({
                    repeat: -1
                });
                t.from(".scrolldown__arrow-path", {
                    drawSVG: 0,
                    duration: 1.8,
                    ease: "power4.inOut"
                }), t.fromTo(".scrolldown__arrow-path-arrow", {
                    opacity: 0
                }, {
                    opacity: 1
                }, "-=0.4"), t.fromTo(".scrolldown__arrow-path", {
                    drawSVG: "100% 0%"
                }, {
                    drawSVG: "100% 100%",
                    duration: 1.4,
                    ease: "power4.inOut"
                }), t.fromTo(".scrolldown__arrow-path-arrow", {
                    opacity: 1
                }, {
                    opacity: 0
                }, "-=0.4")
            }
            lottieload() {
                Oa = oa().loadAnimation({
                    container: document.querySelector(".sprint4__anim"),
                    renderer: "canvas",
                    autoplay: !1,
                    loop: !1,
                    path: "/neurodiversity/sprint4__anim.json",
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMax slice"
                    }
                })
            }
        }
        class La {
            constructor() {
                this.DOM = {
                    settings: document.querySelector(".settings"),
                    settingsoverlay: document.querySelector(".settings-overlay"),
                    settingsbox: document.querySelector(".settings-overlay-box"),
                    settingsclose: document.querySelector(".settings-overlay-close")
                }, this.init()
            }
            init() {
                this.settings()
            }
            settings() {
                const t = Xr.timeline({
                    paused: !0,
                    defaults: {
                        duration: 1.2,
                        ease: "power4.inOut"
                    }
                });
                t.to(this.DOM.settingsoverlay, {
                    opacity: 1,
                    display: "flex"
                }), t.to(this.DOM.settingsbox, {
                    y: 0,
                    scale: 1
                }, "<"), this.DOM.settings.addEventListener("click", (() => {
                    t.play()
                })), this.DOM.settingsclose.addEventListener("click", (() => {
                    t.reverse()
                }))
            }
        }
        class Va {
            constructor(t) {
                this.audioPlaying = t, this.DOM = {
                    skip: document.querySelector(".bar__skip"),
                    language: document.querySelector(".language"),
                    sound: document.querySelector(".sound"),
                    settings: document.querySelector(".settings"),
                    settingssound: document.querySelector(".settings-overlay-sound-item"),
                    settingssoundtext: document.querySelector(".settings-overlay-sound-item-text"),
                    soundon: document.querySelectorAll(".sound__icon__on"),
                    soundoff: document.querySelectorAll(".sound__icon__off")
                }, this.init()
            }
            init() {
                this.sound()
            }
            sound() {
                Xr.to([this.DOM.sound, this.DOM.skip, this.DOM.language], {
                    display: "block",
                    opacity: 1
                }), this.audioPlaying ? (this.DOM.sound.classList.add("active"), Xr.set(this.DOM.soundoff, {
                    display: "none"
                }), Xr.set(this.DOM.soundon, {
                    display: "block"
                }), this.DOM.settingssoundtext.textContent = "ON") : (this.DOM.sound.classList.remove("active"), Xr.set(this.DOM.soundon, {
                    display: "none"
                }), Xr.set(this.DOM.soundoff, {
                    display: "block"
                }), this.DOM.settingssoundtext.textContent = "OFF");
                const t = t => {
                        this.DOM.sound.classList.remove("active"), Xr.to(t, {
                            volume: 0,
                            onComplete: () => {
                                t.pause(), this.audioPlaying = !1
                            }
                        }), Xr.set(this.DOM.soundon, {
                            display: "none"
                        }), Xr.set(this.DOM.soundoff, {
                            display: "block"
                        }), this.DOM.settingssoundtext.textContent = "OFF"
                    },
                    e = t => {
                        this.DOM.sound.classList.add("active"), t.play(), Xr.to(t, {
                            volume: 1,
                            ease: "power4.in",
                            onComplete: () => {
                                this.audioPlaying = !0
                            }
                        }), Xr.set(this.DOM.soundoff, {
                            display: "none"
                        }), Xr.set(this.DOM.soundon, {
                            display: "block"
                        }), this.DOM.settingssoundtext.textContent = "ON"
                    };
                this.DOM.sound.addEventListener("click", (() => {
                    const i = document.querySelector("audio.active");
                    this.audioPlaying ? t(i) : e(i)
                })), this.DOM.settingssound.addEventListener("click", (() => {
                    const i = document.querySelector("audio.active");
                    this.audioPlaying ? t(i) : e(i)
                }))
            }
        }

        function za(t, e) {
            const i = document.querySelector(".sound");
            t.forEach((t => {
                t.classList.remove("active"), Xr.to(t, {
                    volume: 0,
                    duration: 3.5,
                    ease: "sine.inOut",
                    onComplete: () => {
                        t.pause(), t.currentTime = 0
                    }
                })
            })), e.classList.add("active"), i.classList.contains("active") && (setTimeout((() => {
                e.play()
            }), 2e3), ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document ? setTimeout((() => {
                e.play()
            }), 1500) : (e.play(), Xr.to(e, {
                volume: 1,
                duration: 3.5,
                delay: 1,
                ease: "sine.inOut"
            })))
        }

        function Na(t, e) {
            try {
                Mn.matchMedia({
                    "(min-width: 990px)": function() {
                        t()
                    },
                    "(max-width: 989px)": function() {
                        e()
                    }
                })
            } catch (t) {}
        }

        function Ga(t) {
            try {
                Mn.matchMedia({
                    "(min-width: 990px)": function() {
                        t()
                    }
                })
            } catch (t) {}
        }

        function Ha() {
            return Ha = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                }
                return t
            }, Ha.apply(this, arguments)
        }

        function qa(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }

        function ja(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        Xr.registerPlugin(Mn);
        var Wa, Ya = "function" != typeof Object.assign ? function(t) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var r = arguments[i];
                    if (null != r)
                        for (var s in r) r.hasOwnProperty(s) && (e[s] = r[s])
                }
                return e
            } : Object.assign,
            Xa = ["", "webkit", "Moz", "MS", "ms", "o"],
            Ua = "undefined" == typeof document ? {
                style: {}
            } : document.createElement("div"),
            $a = Math.round,
            Za = Math.abs,
            Ka = Date.now;

        function Ja(t, e) {
            for (var i, r, s = e[0].toUpperCase() + e.slice(1), n = 0; n < Xa.length;) {
                if ((r = (i = Xa[n]) ? i + s : e) in t) return r;
                n++
            }
        }
        Wa = "undefined" == typeof window ? {} : window;
        var Qa = Ja(Ua.style, "touchAction"),
            to = void 0 !== Qa;
        var eo = "compute",
            io = "auto",
            ro = "manipulation",
            so = "none",
            no = "pan-x",
            ao = "pan-y",
            oo = function() {
                if (!to) return !1;
                var t = {},
                    e = Wa.CSS && Wa.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(i) {
                    return t[i] = !e || Wa.CSS.supports("touch-action", i)
                })), t
            }(),
            ho = "ontouchstart" in Wa,
            lo = void 0 !== Ja(Wa, "PointerEvent"),
            po = ho && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            uo = "touch",
            co = "mouse",
            fo = 16,
            mo = 24,
            go = ["x", "y"],
            yo = ["clientX", "clientY"];

        function vo(t, e, i) {
            var r;
            if (t)
                if (t.forEach) t.forEach(e, i);
                else if (void 0 !== t.length)
                for (r = 0; r < t.length;) e.call(i, t[r], r, t), r++;
            else
                for (r in t) t.hasOwnProperty(r) && e.call(i, t[r], r, t)
        }

        function _o(t, e) {
            return "function" == typeof t ? t.apply(e && e[0] || void 0, e) : t
        }

        function Do(t, e) {
            return t.indexOf(e) > -1
        }
        var bo = function() {
            function t(t, e) {
                this.manager = t, this.set(e)
            }
            var e = t.prototype;
            return e.set = function(t) {
                t === eo && (t = this.compute()), to && this.manager.element.style && oo[t] && (this.manager.element.style[Qa] = t), this.actions = t.toLowerCase().trim()
            }, e.update = function() {
                this.set(this.manager.options.touchAction)
            }, e.compute = function() {
                var t = [];
                return vo(this.manager.recognizers, (function(e) {
                        _o(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                    })),
                    function(t) {
                        if (Do(t, so)) return so;
                        var e = Do(t, no),
                            i = Do(t, ao);
                        return e && i ? so : e || i ? e ? no : ao : Do(t, ro) ? ro : io
                    }(t.join(" "))
            }, e.preventDefaults = function(t) {
                var e = t.srcEvent,
                    i = t.offsetDirection;
                if (this.manager.session.prevented) e.preventDefault();
                else {
                    var r = this.actions,
                        s = Do(r, so) && !oo.none,
                        n = Do(r, ao) && !oo["pan-y"],
                        a = Do(r, no) && !oo["pan-x"];
                    if (s) {
                        var o = 1 === t.pointers.length,
                            h = t.distance < 2,
                            l = t.deltaTime < 250;
                        if (o && h && l) return
                    }
                    if (!a || !n) return s || n && 6 & i || a && i & mo ? this.preventSrc(e) : void 0
                }
            }, e.preventSrc = function(t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }, t
        }();

        function xo(t, e) {
            for (; t;) {
                if (t === e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function Eo(t) {
            var e = t.length;
            if (1 === e) return {
                x: $a(t[0].clientX),
                y: $a(t[0].clientY)
            };
            for (var i = 0, r = 0, s = 0; s < e;) i += t[s].clientX, r += t[s].clientY, s++;
            return {
                x: $a(i / e),
                y: $a(r / e)
            }
        }

        function Co(t) {
            for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                clientX: $a(t.pointers[i].clientX),
                clientY: $a(t.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: Ka(),
                pointers: e,
                center: Eo(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function Po(t, e, i) {
            i || (i = go);
            var r = e[i[0]] - t[i[0]],
                s = e[i[1]] - t[i[1]];
            return Math.sqrt(r * r + s * s)
        }

        function So(t, e, i) {
            i || (i = go);
            var r = e[i[0]] - t[i[0]],
                s = e[i[1]] - t[i[1]];
            return 180 * Math.atan2(s, r) / Math.PI
        }

        function wo(t, e) {
            return t === e ? 1 : Za(t) >= Za(e) ? t < 0 ? 2 : 4 : e < 0 ? 8 : fo
        }

        function To(t, e, i) {
            return {
                x: e / t || 0,
                y: i / t || 0
            }
        }

        function Ao(t, e) {
            var i = t.session,
                r = e.pointers,
                s = r.length;
            i.firstInput || (i.firstInput = Co(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = Co(e) : 1 === s && (i.firstMultiple = !1);
            var n = i.firstInput,
                a = i.firstMultiple,
                o = a ? a.center : n.center,
                h = e.center = Eo(r);
            e.timeStamp = Ka(), e.deltaTime = e.timeStamp - n.timeStamp, e.angle = So(o, h), e.distance = Po(o, h),
                function(t, e) {
                    var i = e.center,
                        r = t.offsetDelta || {},
                        s = t.prevDelta || {},
                        n = t.prevInput || {};
                    1 !== e.eventType && 4 !== n.eventType || (s = t.prevDelta = {
                        x: n.deltaX || 0,
                        y: n.deltaY || 0
                    }, r = t.offsetDelta = {
                        x: i.x,
                        y: i.y
                    }), e.deltaX = s.x + (i.x - r.x), e.deltaY = s.y + (i.y - r.y)
                }(i, e), e.offsetDirection = wo(e.deltaX, e.deltaY);
            var l, p, u = To(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = Za(u.x) > Za(u.y) ? u.x : u.y, e.scale = a ? (l = a.pointers, Po((p = r)[0], p[1], yo) / Po(l[0], l[1], yo)) : 1, e.rotation = a ? function(t, e) {
                    return So(e[1], e[0], yo) + So(t[1], t[0], yo)
                }(a.pointers, r) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                    var i, r, s, n, a = t.lastInterval || e,
                        o = e.timeStamp - a.timeStamp;
                    if (8 !== e.eventType && (o > 25 || void 0 === a.velocity)) {
                        var h = e.deltaX - a.deltaX,
                            l = e.deltaY - a.deltaY,
                            p = To(o, h, l);
                        r = p.x, s = p.y, i = Za(p.x) > Za(p.y) ? p.x : p.y, n = wo(h, l), t.lastInterval = e
                    } else i = a.velocity, r = a.velocityX, s = a.velocityY, n = a.direction;
                    e.velocity = i, e.velocityX = r, e.velocityY = s, e.direction = n
                }(i, e);
            var c, f = t.element,
                d = e.srcEvent;
            xo(c = d.composedPath ? d.composedPath()[0] : d.path ? d.path[0] : d.target, f) && (f = c), e.target = f
        }

        function Fo(t, e, i) {
            var r = i.pointers.length,
                s = i.changedPointers.length,
                n = 1 & e && r - s == 0,
                a = 12 & e && r - s == 0;
            i.isFirst = !!n, i.isFinal = !!a, n && (t.session = {}), i.eventType = e, Ao(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
        }

        function ko(t) {
            return t.trim().split(/\s+/g)
        }

        function Mo(t, e, i) {
            vo(ko(e), (function(e) {
                t.addEventListener(e, i, !1)
            }))
        }

        function Io(t, e, i) {
            vo(ko(e), (function(e) {
                t.removeEventListener(e, i, !1)
            }))
        }

        function Bo(t) {
            var e = t.ownerDocument || t;
            return e.defaultView || e.parentWindow || window
        }
        var Oo = function() {
            function t(t, e) {
                var i = this;
                this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                    _o(t.options.enable, [t]) && i.handler(e)
                }, this.init()
            }
            var e = t.prototype;
            return e.handler = function() {}, e.init = function() {
                this.evEl && Mo(this.element, this.evEl, this.domHandler), this.evTarget && Mo(this.target, this.evTarget, this.domHandler), this.evWin && Mo(Bo(this.element), this.evWin, this.domHandler)
            }, e.destroy = function() {
                this.evEl && Io(this.element, this.evEl, this.domHandler), this.evTarget && Io(this.target, this.evTarget, this.domHandler), this.evWin && Io(Bo(this.element), this.evWin, this.domHandler)
            }, t
        }();

        function Ro(t, e, i) {
            if (t.indexOf && !i) return t.indexOf(e);
            for (var r = 0; r < t.length;) {
                if (i && t[r][i] == e || !i && t[r] === e) return r;
                r++
            }
            return -1
        }
        var Lo = {
                pointerdown: 1,
                pointermove: 2,
                pointerup: 4,
                pointercancel: 8,
                pointerout: 8
            },
            Vo = {
                2: uo,
                3: "pen",
                4: co,
                5: "kinect"
            },
            zo = "pointerdown",
            No = "pointermove pointerup pointercancel";
        Wa.MSPointerEvent && !Wa.PointerEvent && (zo = "MSPointerDown", No = "MSPointerMove MSPointerUp MSPointerCancel");
        var Go = function(t) {
            function e() {
                var i, r = e.prototype;
                return r.evEl = zo, r.evWin = No, (i = t.apply(this, arguments) || this).store = i.manager.session.pointerEvents = [], i
            }
            return qa(e, t), e.prototype.handler = function(t) {
                var e = this.store,
                    i = !1,
                    r = t.type.toLowerCase().replace("ms", ""),
                    s = Lo[r],
                    n = Vo[t.pointerType] || t.pointerType,
                    a = n === uo,
                    o = Ro(e, t.pointerId, "pointerId");
                1 & s && (0 === t.button || a) ? o < 0 && (e.push(t), o = e.length - 1) : 12 & s && (i = !0), o < 0 || (e[o] = t, this.callback(this.manager, s, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: n,
                    srcEvent: t
                }), i && e.splice(o, 1))
            }, e
        }(Oo);

        function Ho(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function qo(t, e, i) {
            for (var r = [], s = [], n = 0; n < t.length;) {
                var a = e ? t[n][e] : t[n];
                Ro(s, a) < 0 && r.push(t[n]), s[n] = a, n++
            }
            return i && (r = e ? r.sort((function(t, i) {
                return t[e] > i[e]
            })) : r.sort()), r
        }
        var jo = {
                touchstart: 1,
                touchmove: 2,
                touchend: 4,
                touchcancel: 8
            },
            Wo = "touchstart touchmove touchend touchcancel",
            Yo = function(t) {
                function e() {
                    var i;
                    return e.prototype.evTarget = Wo, (i = t.apply(this, arguments) || this).targetIds = {}, i
                }
                return qa(e, t), e.prototype.handler = function(t) {
                    var e = jo[t.type],
                        i = Xo.call(this, t, e);
                    i && this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: uo,
                        srcEvent: t
                    })
                }, e
            }(Oo);

        function Xo(t, e) {
            var i, r, s = Ho(t.touches),
                n = this.targetIds;
            if (3 & e && 1 === s.length) return n[s[0].identifier] = !0, [s, s];
            var a = Ho(t.changedTouches),
                o = [],
                h = this.target;
            if (r = s.filter((function(t) {
                    return xo(t.target, h)
                })), 1 === e)
                for (i = 0; i < r.length;) n[r[i].identifier] = !0, i++;
            for (i = 0; i < a.length;) n[a[i].identifier] && o.push(a[i]), 12 & e && delete n[a[i].identifier], i++;
            return o.length ? [qo(r.concat(o), "identifier", !0), o] : void 0
        }
        var Uo = {
                mousedown: 1,
                mousemove: 2,
                mouseup: 4
            },
            $o = "mousedown",
            Zo = "mousemove mouseup",
            Ko = function(t) {
                function e() {
                    var i, r = e.prototype;
                    return r.evEl = $o, r.evWin = Zo, (i = t.apply(this, arguments) || this).pressed = !1, i
                }
                return qa(e, t), e.prototype.handler = function(t) {
                    var e = Uo[t.type];
                    1 & e && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = 4), this.pressed && (4 & e && (this.pressed = !1), this.callback(this.manager, e, {
                        pointers: [t],
                        changedPointers: [t],
                        pointerType: co,
                        srcEvent: t
                    }))
                }, e
            }(Oo);

        function Jo(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var i = {
                        x: e.clientX,
                        y: e.clientY
                    },
                    r = this.lastTouches;
                this.lastTouches.push(i);
                setTimeout((function() {
                    var t = r.indexOf(i);
                    t > -1 && r.splice(t, 1)
                }), 2500)
            }
        }

        function Qo(t, e) {
            1 & t ? (this.primaryTouch = e.changedPointers[0].identifier, Jo.call(this, e)) : 12 & t && Jo.call(this, e)
        }

        function th(t) {
            for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                var s = this.lastTouches[r],
                    n = Math.abs(e - s.x),
                    a = Math.abs(i - s.y);
                if (n <= 25 && a <= 25) return !0
            }
            return !1
        }
        var eh = function() {
            return function(t) {
                function e(e, i) {
                    var r;
                    return (r = t.call(this, e, i) || this).handler = function(t, e, i) {
                        var s = i.pointerType === uo,
                            n = i.pointerType === co;
                        if (!(n && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                            if (s) Qo.call(ja(ja(r)), e, i);
                            else if (n && th.call(ja(ja(r)), i)) return;
                            r.callback(t, e, i)
                        }
                    }, r.touch = new Yo(r.manager, r.handler), r.mouse = new Ko(r.manager, r.handler), r.primaryTouch = null, r.lastTouches = [], r
                }
                return qa(e, t), e.prototype.destroy = function() {
                    this.touch.destroy(), this.mouse.destroy()
                }, e
            }(Oo)
        }();

        function ih(t, e, i) {
            return !!Array.isArray(t) && (vo(t, i[e], i), !0)
        }
        var rh = 32,
            sh = 1;

        function nh(t, e) {
            var i = e.manager;
            return i ? i.get(t) : t
        }

        function ah(t) {
            return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
        }
        var oh = function() {
                function t(t) {
                    void 0 === t && (t = {}), this.options = Ha({
                        enable: !0
                    }, t), this.id = sh++, this.manager = null, this.state = 1, this.simultaneous = {}, this.requireFail = []
                }
                var e = t.prototype;
                return e.set = function(t) {
                    return Ya(this.options, t), this.manager && this.manager.touchAction.update(), this
                }, e.recognizeWith = function(t) {
                    if (ih(t, "recognizeWith", this)) return this;
                    var e = this.simultaneous;
                    return e[(t = nh(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
                }, e.dropRecognizeWith = function(t) {
                    return ih(t, "dropRecognizeWith", this) || (t = nh(t, this), delete this.simultaneous[t.id]), this
                }, e.requireFailure = function(t) {
                    if (ih(t, "requireFailure", this)) return this;
                    var e = this.requireFail;
                    return -1 === Ro(e, t = nh(t, this)) && (e.push(t), t.requireFailure(this)), this
                }, e.dropRequireFailure = function(t) {
                    if (ih(t, "dropRequireFailure", this)) return this;
                    t = nh(t, this);
                    var e = Ro(this.requireFail, t);
                    return e > -1 && this.requireFail.splice(e, 1), this
                }, e.hasRequireFailures = function() {
                    return this.requireFail.length > 0
                }, e.canRecognizeWith = function(t) {
                    return !!this.simultaneous[t.id]
                }, e.emit = function(t) {
                    var e = this,
                        i = this.state;

                    function r(i) {
                        e.manager.emit(i, t)
                    }
                    i < 8 && r(e.options.event + ah(i)), r(e.options.event), t.additionalEvent && r(t.additionalEvent), i >= 8 && r(e.options.event + ah(i))
                }, e.tryEmit = function(t) {
                    if (this.canEmit()) return this.emit(t);
                    this.state = rh
                }, e.canEmit = function() {
                    for (var t = 0; t < this.requireFail.length;) {
                        if (!(33 & this.requireFail[t].state)) return !1;
                        t++
                    }
                    return !0
                }, e.recognize = function(t) {
                    var e = Ya({}, t);
                    if (!_o(this.options.enable, [this, e])) return this.reset(), void(this.state = rh);
                    56 & this.state && (this.state = 1), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
                }, e.process = function(t) {}, e.getTouchAction = function() {}, e.reset = function() {}, t
            }(),
            hh = function(t) {
                function e(e) {
                    var i;
                    return void 0 === e && (e = {}), (i = t.call(this, Ha({
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    }, e)) || this).pTime = !1, i.pCenter = !1, i._timer = null, i._input = null, i.count = 0, i
                }
                qa(e, t);
                var i = e.prototype;
                return i.getTouchAction = function() {
                    return [ro]
                }, i.process = function(t) {
                    var e = this,
                        i = this.options,
                        r = t.pointers.length === i.pointers,
                        s = t.distance < i.threshold,
                        n = t.deltaTime < i.time;
                    if (this.reset(), 1 & t.eventType && 0 === this.count) return this.failTimeout();
                    if (s && n && r) {
                        if (4 !== t.eventType) return this.failTimeout();
                        var a = !this.pTime || t.timeStamp - this.pTime < i.interval,
                            o = !this.pCenter || Po(this.pCenter, t.center) < i.posThreshold;
                        if (this.pTime = t.timeStamp, this.pCenter = t.center, o && a ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % i.taps) return this.hasRequireFailures() ? (this._timer = setTimeout((function() {
                            e.state = 8, e.tryEmit()
                        }), i.interval), 2) : 8
                    }
                    return rh
                }, i.failTimeout = function() {
                    var t = this;
                    return this._timer = setTimeout((function() {
                        t.state = rh
                    }), this.options.interval), rh
                }, i.reset = function() {
                    clearTimeout(this._timer)
                }, i.emit = function() {
                    8 === this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                }, e
            }(oh),
            lh = function(t) {
                function e(e) {
                    return void 0 === e && (e = {}), t.call(this, Ha({
                        pointers: 1
                    }, e)) || this
                }
                qa(e, t);
                var i = e.prototype;
                return i.attrTest = function(t) {
                    var e = this.options.pointers;
                    return 0 === e || t.pointers.length === e
                }, i.process = function(t) {
                    var e = this.state,
                        i = t.eventType,
                        r = 6 & e,
                        s = this.attrTest(t);
                    return r && (8 & i || !s) ? 16 | e : r || s ? 4 & i ? 8 | e : 2 & e ? 4 | e : 2 : rh
                }, e
            }(oh);

        function ph(t) {
            return t === fo ? "down" : 8 === t ? "up" : 2 === t ? "left" : 4 === t ? "right" : ""
        }
        var uh = function(t) {
                function e(e) {
                    var i;
                    return void 0 === e && (e = {}), (i = t.call(this, Ha({
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: 30
                    }, e)) || this).pX = null, i.pY = null, i
                }
                qa(e, t);
                var i = e.prototype;
                return i.getTouchAction = function() {
                    var t = this.options.direction,
                        e = [];
                    return 6 & t && e.push(ao), t & mo && e.push(no), e
                }, i.directionTest = function(t) {
                    var e = this.options,
                        i = !0,
                        r = t.distance,
                        s = t.direction,
                        n = t.deltaX,
                        a = t.deltaY;
                    return s & e.direction || (6 & e.direction ? (s = 0 === n ? 1 : n < 0 ? 2 : 4, i = n !== this.pX, r = Math.abs(t.deltaX)) : (s = 0 === a ? 1 : a < 0 ? 8 : fo, i = a !== this.pY, r = Math.abs(t.deltaY))), t.direction = s, i && r > e.threshold && s & e.direction
                }, i.attrTest = function(t) {
                    return lh.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
                }, i.emit = function(e) {
                    this.pX = e.deltaX, this.pY = e.deltaY;
                    var i = ph(e.direction);
                    i && (e.additionalEvent = this.options.event + i), t.prototype.emit.call(this, e)
                }, e
            }(lh),
            ch = function(t) {
                function e(e) {
                    return void 0 === e && (e = {}), t.call(this, Ha({
                        event: "swipe",
                        threshold: 10,
                        velocity: .3,
                        direction: 30,
                        pointers: 1
                    }, e)) || this
                }
                qa(e, t);
                var i = e.prototype;
                return i.getTouchAction = function() {
                    return uh.prototype.getTouchAction.call(this)
                }, i.attrTest = function(e) {
                    var i, r = this.options.direction;
                    return 30 & r ? i = e.overallVelocity : 6 & r ? i = e.overallVelocityX : r & mo && (i = e.overallVelocityY), t.prototype.attrTest.call(this, e) && r & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers === this.options.pointers && Za(i) > this.options.velocity && 4 & e.eventType
                }, i.emit = function(t) {
                    var e = ph(t.offsetDirection);
                    e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                }, e
            }(lh),
            fh = function(t) {
                function e(e) {
                    return void 0 === e && (e = {}), t.call(this, Ha({
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    }, e)) || this
                }
                qa(e, t);
                var i = e.prototype;
                return i.getTouchAction = function() {
                    return [so]
                }, i.attrTest = function(e) {
                    return t.prototype.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
                }, i.emit = function(e) {
                    if (1 !== e.scale) {
                        var i = e.scale < 1 ? "in" : "out";
                        e.additionalEvent = this.options.event + i
                    }
                    t.prototype.emit.call(this, e)
                }, e
            }(lh),
            dh = function(t) {
                function e(e) {
                    return void 0 === e && (e = {}), t.call(this, Ha({
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    }, e)) || this
                }
                qa(e, t);
                var i = e.prototype;
                return i.getTouchAction = function() {
                    return [so]
                }, i.attrTest = function(e) {
                    return t.prototype.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
                }, e
            }(lh),
            mh = function(t) {
                function e(e) {
                    var i;
                    return void 0 === e && (e = {}), (i = t.call(this, Ha({
                        event: "press",
                        pointers: 1,
                        time: 251,
                        threshold: 9
                    }, e)) || this)._timer = null, i._input = null, i
                }
                qa(e, t);
                var i = e.prototype;
                return i.getTouchAction = function() {
                    return [io]
                }, i.process = function(t) {
                    var e = this,
                        i = this.options,
                        r = t.pointers.length === i.pointers,
                        s = t.distance < i.threshold,
                        n = t.deltaTime > i.time;
                    if (this._input = t, !s || !r || 12 & t.eventType && !n) this.reset();
                    else if (1 & t.eventType) this.reset(), this._timer = setTimeout((function() {
                        e.state = 8, e.tryEmit()
                    }), i.time);
                    else if (4 & t.eventType) return 8;
                    return rh
                }, i.reset = function() {
                    clearTimeout(this._timer)
                }, i.emit = function(t) {
                    8 === this.state && (t && 4 & t.eventType ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = Ka(), this.manager.emit(this.options.event, this._input)))
                }, e
            }(oh),
            gh = {
                domEvents: !1,
                touchAction: eo,
                enable: !0,
                inputTarget: null,
                inputClass: null,
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            },
            yh = [
                [dh, {
                    enable: !1
                }],
                [fh, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [ch, {
                    direction: 6
                }],
                [uh, {
                        direction: 6
                    },
                    ["swipe"]
                ],
                [hh],
                [hh, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [mh]
            ];

        function vh(t, e) {
            var i, r = t.element;
            r.style && (vo(t.options.cssProps, (function(s, n) {
                i = Ja(r.style, n), e ? (t.oldCssProps[i] = r.style[i], r.style[i] = s) : r.style[i] = t.oldCssProps[i] || ""
            })), e || (t.oldCssProps = {}))
        }
        var _h = function() {
                function t(t, e) {
                    var i, r = this;
                    this.options = Ya({}, gh, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new((i = this).options.inputClass || (lo ? Go : po ? Yo : ho ? eh : Ko))(i, Fo), this.touchAction = new bo(this, this.options.touchAction), vh(this, !0), vo(this.options.recognizers, (function(t) {
                        var e = r.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                    }), this)
                }
                var e = t.prototype;
                return e.set = function(t) {
                    return Ya(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                }, e.stop = function(t) {
                    this.session.stopped = t ? 2 : 1
                }, e.recognize = function(t) {
                    var e = this.session;
                    if (!e.stopped) {
                        var i;
                        this.touchAction.preventDefaults(t);
                        var r = this.recognizers,
                            s = e.curRecognizer;
                        (!s || s && 8 & s.state) && (e.curRecognizer = null, s = null);
                        for (var n = 0; n < r.length;) i = r[n], 2 === e.stopped || s && i !== s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && 14 & i.state && (e.curRecognizer = i, s = i), n++
                    }
                }, e.get = function(t) {
                    if (t instanceof oh) return t;
                    for (var e = this.recognizers, i = 0; i < e.length; i++)
                        if (e[i].options.event === t) return e[i];
                    return null
                }, e.add = function(t) {
                    if (ih(t, "add", this)) return this;
                    var e = this.get(t.options.event);
                    return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                }, e.remove = function(t) {
                    if (ih(t, "remove", this)) return this;
                    var e = this.get(t);
                    if (t) {
                        var i = this.recognizers,
                            r = Ro(i, e); - 1 !== r && (i.splice(r, 1), this.touchAction.update())
                    }
                    return this
                }, e.on = function(t, e) {
                    if (void 0 === t || void 0 === e) return this;
                    var i = this.handlers;
                    return vo(ko(t), (function(t) {
                        i[t] = i[t] || [], i[t].push(e)
                    })), this
                }, e.off = function(t, e) {
                    if (void 0 === t) return this;
                    var i = this.handlers;
                    return vo(ko(t), (function(t) {
                        e ? i[t] && i[t].splice(Ro(i[t], e), 1) : delete i[t]
                    })), this
                }, e.emit = function(t, e) {
                    this.options.domEvents && function(t, e) {
                        var i = document.createEvent("Event");
                        i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
                    }(t, e);
                    var i = this.handlers[t] && this.handlers[t].slice();
                    if (i && i.length) {
                        e.type = t, e.preventDefault = function() {
                            e.srcEvent.preventDefault()
                        };
                        for (var r = 0; r < i.length;) i[r](e), r++
                    }
                }, e.destroy = function() {
                    this.element && vh(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                }, t
            }(),
            Dh = {
                touchstart: 1,
                touchmove: 2,
                touchend: 4,
                touchcancel: 8
            },
            bh = "touchstart",
            xh = "touchstart touchmove touchend touchcancel",
            Eh = function(t) {
                function e() {
                    var i, r = e.prototype;
                    return r.evTarget = bh, r.evWin = xh, (i = t.apply(this, arguments) || this).started = !1, i
                }
                return qa(e, t), e.prototype.handler = function(t) {
                    var e = Dh[t.type];
                    if (1 === e && (this.started = !0), this.started) {
                        var i = Ch.call(this, t, e);
                        12 & e && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: uo,
                            srcEvent: t
                        })
                    }
                }, e
            }(Oo);

        function Ch(t, e) {
            var i = Ho(t.touches),
                r = Ho(t.changedTouches);
            return 12 & e && (i = qo(i.concat(r), "identifier", !0)), [i, r]
        }

        function Ph(t, e, i) {
            var r = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
            return function() {
                var e = new Error("get-stack-trace"),
                    i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    s = window.console && (window.console.warn || window.console.log);
                return s && s.call(window.console, r, i), t.apply(this, arguments)
            }
        }
        var Sh = Ph((function(t, e, i) {
                for (var r = Object.keys(e), s = 0; s < r.length;)(!i || i && void 0 === t[r[s]]) && (t[r[s]] = e[r[s]]), s++;
                return t
            }), "extend", "Use `assign`."),
            wh = Ph((function(t, e) {
                return Sh(t, e, !0)
            }), "merge", "Use `assign`.");

        function Th(t, e, i) {
            var r, s = e.prototype;
            (r = t.prototype = Object.create(s)).constructor = t, r._super = s, i && Ya(r, i)
        }

        function Ah(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var Fh = function() {
            var t = function(t, e) {
                return void 0 === e && (e = {}), new _h(t, Ha({
                    recognizers: yh.concat()
                }, e))
            };
            return t.VERSION = "2.0.17-rc", t.DIRECTION_ALL = 30, t.DIRECTION_DOWN = fo, t.DIRECTION_LEFT = 2, t.DIRECTION_RIGHT = 4, t.DIRECTION_UP = 8, t.DIRECTION_HORIZONTAL = 6, t.DIRECTION_VERTICAL = mo, t.DIRECTION_NONE = 1, t.DIRECTION_DOWN = fo, t.INPUT_START = 1, t.INPUT_MOVE = 2, t.INPUT_END = 4, t.INPUT_CANCEL = 8, t.STATE_POSSIBLE = 1, t.STATE_BEGAN = 2, t.STATE_CHANGED = 4, t.STATE_ENDED = 8, t.STATE_RECOGNIZED = 8, t.STATE_CANCELLED = 16, t.STATE_FAILED = rh, t.Manager = _h, t.Input = Oo, t.TouchAction = bo, t.TouchInput = Yo, t.MouseInput = Ko, t.PointerEventInput = Go, t.TouchMouseInput = eh, t.SingleTouchInput = Eh, t.Recognizer = oh, t.AttrRecognizer = lh, t.Tap = hh, t.Pan = uh, t.Swipe = ch, t.Pinch = fh, t.Rotate = dh, t.Press = mh, t.on = Mo, t.off = Io, t.each = vo, t.merge = wh, t.extend = Sh, t.bindFn = Ah, t.assign = Ya, t.inherit = Th, t.bindFn = Ah, t.prefixed = Ja, t.toArray = Ho, t.inArray = Ro, t.uniqueArray = qo, t.splitStr = ko, t.boolOrFn = _o, t.hasParent = xo, t.addEventListeners = Mo, t.removeEventListeners = Io, t.defaults = Ya({}, gh, {
                preset: yh
            }), t
        }();
        Fh.defaults;
        const kh = Fh;
        var Mh = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            Ih = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            Bh = Math.PI / 180,
            Oh = (Math.PI, Math.sin),
            Rh = Math.cos,
            Lh = Math.abs,
            Vh = Math.sqrt,
            zh = (Math.atan2, function(t) {
                return "number" == typeof t
            }),
            Nh = 1e5,
            Gh = function(t) {
                return Math.round(t * Nh) / Nh || 0
            };

        function Hh(t, e, i, r, s, n, a, o, h) {
            if (t !== o || e !== h) {
                i = Lh(i), r = Lh(r);
                var l = s % 360 * Bh,
                    p = Rh(l),
                    u = Oh(l),
                    c = Math.PI,
                    f = 2 * c,
                    d = (t - o) / 2,
                    m = (e - h) / 2,
                    g = p * d + u * m,
                    y = -u * d + p * m,
                    v = g * g,
                    _ = y * y,
                    D = v / (i * i) + _ / (r * r);
                D > 1 && (i = Vh(D) * i, r = Vh(D) * r);
                var b = i * i,
                    x = r * r,
                    E = (b * x - b * _ - x * v) / (b * _ + x * v);
                E < 0 && (E = 0);
                var C = (n === a ? -1 : 1) * Vh(E),
                    P = C * (i * y / r),
                    S = C * (-r * g / i),
                    w = (t + o) / 2 + (p * P - u * S),
                    T = (e + h) / 2 + (u * P + p * S),
                    A = (g - P) / i,
                    F = (y - S) / r,
                    k = (-g - P) / i,
                    M = (-y - S) / r,
                    I = A * A + F * F,
                    B = (F < 0 ? -1 : 1) * Math.acos(A / Vh(I)),
                    O = (A * M - F * k < 0 ? -1 : 1) * Math.acos((A * k + F * M) / Vh(I * (k * k + M * M)));
                isNaN(O) && (O = c), !a && O > 0 ? O -= f : a && O < 0 && (O += f), B %= f, O %= f;
                var R, L = Math.ceil(Lh(O) / (f / 4)),
                    V = [],
                    z = O / L,
                    N = 4 / 3 * Oh(z / 2) / (1 + Rh(z / 2)),
                    G = p * i,
                    H = u * i,
                    q = u * -r,
                    j = p * r;
                for (R = 0; R < L; R++) g = Rh(s = B + R * z), y = Oh(s), A = Rh(s += z), F = Oh(s), V.push(g - N * y, y + N * g, A + N * F, F - N * A, A, F);
                for (R = 0; R < V.length; R += 2) g = V[R], y = V[R + 1], V[R] = g * G + y * q + w, V[R + 1] = g * H + y * j + T;
                return V[R - 2] = o, V[R - 1] = h, V
            }
        }

        function qh(t) {
            var e, i, r, s, n, a, o, h, l, p, u, c, f, d, m, g = (t + "").replace(Ih, (function(t) {
                    var e = +t;
                    return e < 1e-4 && e > -1e-4 ? 0 : e
                })).match(Mh) || [],
                y = [],
                v = 0,
                _ = 0,
                D = 2 / 3,
                b = g.length,
                x = 0,
                E = "ERROR: malformed path: " + t,
                C = function(t, e, i, r) {
                    p = (i - t) / 3, u = (r - e) / 3, o.push(t + p, e + u, i - p, r - u, i, r)
                };
            if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(E), y;
            for (e = 0; e < b; e++)
                if (f = n, isNaN(g[e]) ? a = (n = g[e].toUpperCase()) !== g[e] : e--, r = +g[e + 1], s = +g[e + 2], a && (r += v, s += _), e || (h = r, l = s), "M" === n) o && (o.length < 8 ? y.length -= 1 : x += o.length), v = h = r, _ = l = s, o = [r, s], y.push(o), e += 2, n = "L";
                else if ("C" === n) o || (o = [0, 0]), a || (v = _ = 0), o.push(r, s, v + 1 * g[e + 3], _ + 1 * g[e + 4], v += 1 * g[e + 5], _ += 1 * g[e + 6]), e += 6;
            else if ("S" === n) p = v, u = _, "C" !== f && "S" !== f || (p += v - o[o.length - 4], u += _ - o[o.length - 3]), a || (v = _ = 0), o.push(p, u, r, s, v += 1 * g[e + 3], _ += 1 * g[e + 4]), e += 4;
            else if ("Q" === n) p = v + (r - v) * D, u = _ + (s - _) * D, a || (v = _ = 0), v += 1 * g[e + 3], _ += 1 * g[e + 4], o.push(p, u, v + (r - v) * D, _ + (s - _) * D, v, _), e += 4;
            else if ("T" === n) p = v - o[o.length - 4], u = _ - o[o.length - 3], o.push(v + p, _ + u, r + (v + 1.5 * p - r) * D, s + (_ + 1.5 * u - s) * D, v = r, _ = s), e += 2;
            else if ("H" === n) C(v, _, v = r, _), e += 1;
            else if ("V" === n) C(v, _, v, _ = r + (a ? _ - v : 0)), e += 1;
            else if ("L" === n || "Z" === n) "Z" === n && (r = h, s = l, o.closed = !0), ("L" === n || Lh(v - r) > .5 || Lh(_ - s) > .5) && (C(v, _, r, s), "L" === n && (e += 2)), v = r, _ = s;
            else if ("A" === n) {
                if (d = g[e + 4], m = g[e + 5], p = g[e + 6], u = g[e + 7], i = 7, d.length > 1 && (d.length < 3 ? (u = p, p = m, i--) : (u = m, p = d.substr(2), i -= 2), m = d.charAt(1), d = d.charAt(0)), c = Hh(v, _, +g[e + 1], +g[e + 2], +g[e + 3], +d, +m, (a ? v : 0) + 1 * p, (a ? _ : 0) + 1 * u), e += i, c)
                    for (i = 0; i < c.length; i++) o.push(c[i]);
                v = o[o.length - 2], _ = o[o.length - 1]
            } else console.log(E);
            return (e = o.length) < 6 ? (y.pop(), e = 0) : o[0] === o[e - 2] && o[1] === o[e - 1] && (o.closed = !0), y.totalPoints = x + e, y
        }

        function jh(t) {
            zh(t[0]) && (t = [t]);
            var e, i, r, s, n = "",
                a = t.length;
            for (i = 0; i < a; i++) {
                for (s = t[i], n += "M" + Gh(s[0]) + "," + Gh(s[1]) + " C", e = s.length, r = 2; r < e; r++) n += Gh(s[r++]) + "," + Gh(s[r++]) + " " + Gh(s[r++]) + "," + Gh(s[r++]) + " " + Gh(s[r++]) + "," + Gh(s[r]) + " ";
                s.closed && (n += "z")
            }
            return n
        }
        var Wh, Yh, Xh = function() {
                return Wh || "undefined" != typeof window && (Wh = window.gsap) && Wh.registerPlugin && Wh
            },
            Uh = function() {
                (Wh = Xh()) ? (Wh.registerEase("_CE", Qh.create), Yh = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
            },
            $h = function(t) {
                return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
            },
            Zh = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
            Kh = /[cLlsSaAhHvVtTqQ]/g,
            Jh = function t(e, i, r, s, n, a, o, h, l, p, u) {
                var c, f = (e + r) / 2,
                    d = (i + s) / 2,
                    m = (r + n) / 2,
                    g = (s + a) / 2,
                    y = (n + o) / 2,
                    v = (a + h) / 2,
                    _ = (f + m) / 2,
                    D = (d + g) / 2,
                    b = (m + y) / 2,
                    x = (g + v) / 2,
                    E = (_ + b) / 2,
                    C = (D + x) / 2,
                    P = o - e,
                    S = h - i,
                    w = Math.abs((r - o) * S - (s - h) * P),
                    T = Math.abs((n - o) * S - (a - h) * P);
                return p || (p = [{
                    x: e,
                    y: i
                }, {
                    x: o,
                    y: h
                }], u = 1), p.splice(u || p.length - 1, 0, {
                    x: E,
                    y: C
                }), (w + T) * (w + T) > l * (P * P + S * S) && (c = p.length, t(e, i, f, d, _, D, E, C, l, p, u), t(E, C, b, x, y, v, o, h, l, p, u + 1 + (p.length - c))), p
            },
            Qh = function() {
                function t(t, e, i) {
                    Yh || Uh(), this.id = t, this.setData(e, i)
                }
                var e = t.prototype;
                return e.setData = function(t, e) {
                    e = e || {};
                    var i, r, s, n, a, o, h, l, p, u = (t = t || "0,0,1,1").match(Zh),
                        c = 1,
                        f = [],
                        d = [],
                        m = e.precision || 1,
                        g = m <= 1;
                    if (this.data = t, (Kh.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (u = qh(t)[0]), 4 === (i = u.length)) u.unshift(0, 0), u.push(1, 1), i = 8;
                    else if ((i - 2) % 6) throw "Invalid CustomEase";
                    for (0 == +u[0] && 1 == +u[i - 2] || function(t, e, i) {
                            i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                            var r, s = -1 * +t[0],
                                n = -i,
                                a = t.length,
                                o = 1 / (+t[a - 2] + s),
                                h = -e || (Math.abs(+t[a - 1] - +t[1]) < .01 * (+t[a - 2] - +t[0]) ? function(t) {
                                    var e, i = t.length,
                                        r = 1e20;
                                    for (e = 1; e < i; e += 6) + t[e] < r && (r = +t[e]);
                                    return r
                                }(t) + n : +t[a - 1] + n);
                            for (h = h ? 1 / h : -o, r = 0; r < a; r += 2) t[r] = (+t[r] + s) * o, t[r + 1] = (+t[r + 1] + n) * h
                        }(u, e.height, e.originY), this.segment = u, n = 2; n < i; n += 6) r = {
                        x: +u[n - 2],
                        y: +u[n - 1]
                    }, s = {
                        x: +u[n + 4],
                        y: +u[n + 5]
                    }, f.push(r, s), Jh(r.x, r.y, +u[n], +u[n + 1], +u[n + 2], +u[n + 3], s.x, s.y, 1 / (2e5 * m), f, f.length - 1);
                    for (i = f.length, n = 0; n < i; n++) h = f[n], l = f[n - 1] || h, (h.x > l.x || l.y !== h.y && l.x === h.x || h === l) && h.x <= 1 ? (l.cx = h.x - l.x, l.cy = h.y - l.y, l.n = h, l.nx = h.x, g && n > 1 && Math.abs(l.cy / l.cx - f[n - 2].cy / f[n - 2].cx) > 2 && (g = 0), l.cx < c && (l.cx ? c = l.cx : (l.cx = .001, n === i - 1 && (l.x -= .001, c = Math.min(c, .001), g = 0)))) : (f.splice(n--, 1), i--);
                    if (a = 1 / (i = 1 / c + 1 | 0), o = 0, h = f[0], g) {
                        for (n = 0; n < i; n++) p = n * a, h.nx < p && (h = f[++o]), r = h.y + (p - h.x) / h.cx * h.cy, d[n] = {
                            x: p,
                            cx: a,
                            y: r,
                            cy: 0,
                            nx: 9
                        }, n && (d[n - 1].cy = r - d[n - 1].y);
                        d[i - 1].cy = f[f.length - 1].y - r
                    } else {
                        for (n = 0; n < i; n++) h.nx < n * a && (h = f[++o]), d[n] = h;
                        o < f.length - 1 && (d[n - 1] = f[f.length - 2])
                    }
                    return this.ease = function(t) {
                        var e = d[t * i | 0] || d[i - 1];
                        return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
                    }, this.ease.custom = this, this.id && Wh && Wh.registerEase(this.id, this.ease), this
                }, e.getSVGData = function(e) {
                    return t.getSVGData(this, e)
                }, t.create = function(e, i, r) {
                    return new t(e, i, r).ease
                }, t.register = function(t) {
                    Wh = t, Uh()
                }, t.get = function(t) {
                    return Wh.parseEase(t)
                }, t.getSVGData = function(e, i) {
                    var r, s, n, a, o, h, l, p, u, c, f = (i = i || {}).width || 100,
                        d = i.height || 100,
                        m = i.x || 0,
                        g = (i.y || 0) + d,
                        y = Wh.utils.toArray(i.path)[0];
                    if (i.invert && (d = -d, g = 0), "string" == typeof e && (e = Wh.parseEase(e)), e.custom && (e = e.custom), e instanceof t) r = jh(function(t, e, i, r, s, n, a) {
                        for (var o, h, l, p, u, c = t.length; --c > -1;)
                            for (h = (o = t[c]).length, l = 0; l < h; l += 2) p = o[l], u = o[l + 1], o[l] = p * e + u * r + n, o[l + 1] = p * i + u * s + a;
                        return t._dirty = 1, t
                    }([e.segment], f, 0, 0, -d, m, g));
                    else {
                        for (r = [m, g], a = 1 / (l = Math.max(5, 200 * (i.precision || 1))), p = 5 / (l += 2), u = $h(m + a * f), s = ((c = $h(g + e(a) * -d)) - g) / (u - m), n = 2; n < l; n++) o = $h(m + n * a * f), h = $h(g + e(n * a) * -d), (Math.abs((h - c) / (o - u) - s) > p || n === l - 1) && (r.push(u, c), s = (h - c) / (o - u)), u = o, c = h;
                        r = "M" + r.join(",")
                    }
                    return y && y.setAttribute("d", r), r
                }, t
            }();
        Xh() && Wh.registerPlugin(Qh), Qh.version = "3.8.0", Xr.registerPlugin(Mn, ra);
        class tl {
            constructor() {
                this.DOM = {
                    section: document.querySelector(".sprint6__opening")
                }, this.startScroll = !1, this.init()
            }
            init() {
                this.onresize(), this.detail(), this.credit()
            }
            onresize() {
                window.addEventListener("resize", (() => {
                    setTimeout((() => {}), 200)
                }))
            }
            detail() {
                const t = document.querySelector(".sprint5__types"),
                    e = [...document.querySelectorAll(".sprint5__types-item-detail")],
                    i = [...document.querySelectorAll(".sprint5__detail-close")],
                    r = Xr.timeline({
                        paused: !0,
                        defaults: {
                            ease: "power4.inOut"
                        }
                    });
                r.to(".sprint5__types, .sprint5__stack", {
                    opacity: 0,
                    autoAlpha: 0,
                    ease: "power4.out"
                }), r.to(".bar__skip, .sound", {
                    opacity: 1,
                    display: "block",
                    ease: "power4.out"
                }, 0), Ga((() => {
                    r.to(".sprint5__types-1, .sprint5__types-3, .sprint5__types-5", {
                        left: "-30%",
                        stagger: 0
                    }, 0), r.to(".sprint5__types-2, .sprint5__types-4", {
                        left: "30%",
                        stagger: 0
                    }, 0)
                })), Xr.utils.toArray(".sprint5__types-item-detail").forEach((function(e, i) {
                    const s = i + 1;
                    let n = 0;
                    const a = Xr.timeline({
                        paused: !0,
                        defaults: {
                            ease: "power4.out"
                        }
                    });
                    a.to("#header", {
                        pointerEvents: "none"
                    }), a.to(".bar__skip, .sound", {
                        opacity: 0,
                        display: "none"
                    }, 0), a.to(`.sprint5__detail-${s}`, {
                        opacity: 1,
                        display: "flex"
                    }, 0), a.fromTo(`.sprint5__detail-${s} .sprint5__detail-title img`, {
                        opacity: 0,
                        y: -80
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1.8
                    }, 0), a.fromTo(`.sprint5__detail-${s} .sprint5__detail-out`, {
                        opacity: 0,
                        y: 80
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1.8
                    }, 0), a.fromTo(`.sprint5__detail-${s} .sprint5__detail-bg-left-all`, {
                        opacity: 0,
                        x: -60
                    }, {
                        opacity: 1,
                        x: 0,
                        stagger: .2,
                        duration: 1.8
                    }, 0), a.fromTo(`.sprint5__detail-${s} .sprint5__detail-bg-right-all`, {
                        opacity: 0,
                        x: 60
                    }, {
                        opacity: 1,
                        x: 0,
                        stagger: .2,
                        duration: 1.8
                    }, 0), e.addEventListener("click", (e => {
                        const i = document.querySelector(`.sprint5__detail-${s}`);
                        t.classList.add("isopen"), r.play(), i.classList.contains("active") ? Xr.delayedCall(.5, (() => {
                            a.progress(0).play()
                        })) : Xr.utils.toArray([`.sprint5__detail-${s} .reveal-text`, `.sprint5__detail-${s} .reveal-text-list li`]).forEach(((t, e, r) => {
                            const o = new ra(t, {
                                type: "lines",
                                linesClass: "line"
                            });
                            Xr.utils.toArray(o.lines).forEach(((t, e) => {
                                const i = document.createElement("div");
                                i.classList.add("masking-text"), t.parentNode.insertBefore(i, t), i.appendChild(t)
                            })), n++, n === r.length && (a.fromTo(`.sprint5__detail-${s} .line`, {
                                yPercent: 100
                            }, {
                                yPercent: 0
                            }, .5), Xr.delayedCall(.5, (() => {
                                a.progress(0).play(), i.classList.add("active")
                            })))
                        }))
                    }))
                })), Xr.utils.toArray(".sprint5__detail-nav-prev").forEach((function(t, r) {
                    const s = r + 1;
                    t.addEventListener("click", (n => {
                        Xr.set(t, {
                            pointerEvents: "none"
                        }), Xr.delayedCall(.5, (() => {
                            Xr.set(t, {
                                clearProps: "pointerEvents"
                            })
                        })), i[s].click(), e[r].click()
                    }))
                })), Xr.utils.toArray(".sprint5__detail-nav-next").forEach((function(t, r) {
                    const s = r + 1;
                    t.addEventListener("click", (n => {
                        Xr.set(t, {
                            pointerEvents: "none"
                        }), Xr.delayedCall(.5, (() => {
                            Xr.set(t, {
                                clearProps: "pointerEvents"
                            })
                        })), i[r].click(), e[s].click()
                    }))
                })), Xr.utils.toArray(".sprint5__detail-close").forEach((function(e, i) {
                    const s = i + 1,
                        n = Xr.timeline({
                            paused: !0,
                            onComplete: () => {
                                Ga((() => {
                                    Xr.set(`.sprint5__detail-${s} .sprint5__detail-desc-1, .sprint5__detail-${s} .sprint5__detail-desc-2`, {
                                        clearProps: "all"
                                    })
                                }))
                            }
                        });
                    n.to("#header", {
                        pointerEvents: "auto"
                    }), n.to(`.sprint5__detail-${s}`, {
                        opacity: 0,
                        display: "none"
                    }, 0), Ga((() => {
                        n.to(`.sprint5__detail-${s} .sprint5__detail-desc-1`, {
                            xPercent: -50,
                            opacity: 0
                        }, 0), n.to(`.sprint5__detail-${s} .sprint5__detail-desc-2`, {
                            xPercent: 50,
                            opacity: 0
                        }, 0)
                    })), e.addEventListener("click", (e => {
                        t.classList.remove("isopen"), n.progress(0).play(), "" !== e.pointerType && r.reverse()
                    }))
                }))
            }
            credit() {
                const t = document.querySelector(".sprint6__whatcanyou"),
                    e = document.querySelector(".sprint6__creditend");
                let i = 0;
                const r = Xr.timeline({
                    paused: !0,
                    onComplete: () => {
                        t.classList.add("active")
                    },
                    onReverseComplete: () => {
                        t.classList.remove("active"), this.DOM.section.classList.remove("active")
                    }
                });
                r.to(".sprint6__stack, .sprint6__text, #sprint6 .scrolldown", {
                    opacity: 0,
                    display: "none"
                }), r.to(".sprint6__whatcanyou", {
                    opacity: 1,
                    autoAlpha: 1
                }), r.from(".sprint6__whatcanyou-bg-left", {
                    xPercent: -100
                }, "-=100%"), r.from(".sprint6__whatcanyou-bg-right", {
                    xPercent: 100
                }, "-=100%"), r.from(".sprint6__whatcanyou .line", {
                    yPercent: 101
                }, "-=50%"), r.set(".sprint6__whatcanyou .masking-text", {
                    overflow: "unset"
                }, "-=0.8"), r.fromTo(".sprint6__whatcanyou .highlight svg", {
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                }, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "expo.out"
                }, "-=50%"), r.from(".sprint6__whatcanyou-desc-split, .sprint6__whatcanyou a", {
                    opacity: 0
                }, "-=100%"), r.to("#sprint6 .scrolldown", {
                    opacity: 1,
                    display: "block"
                }, "-=100%");
                const s = Xr.timeline({
                    paused: !0
                });
                s.to(".sprint6__whatcanyou, #sprint6 .scrolldown", {
                    opacity: 0,
                    autoAlpha: 0,
                    display: "none"
                }), s.to(".sprint6__creditend", {
                    opacity: 1,
                    autoAlpha: 1
                }, "-=50%"), s.from(".sprint6__creditend-text h3", {
                    scale: 0,
                    opacity: 0
                }, "-=30%"), s.fromTo(".sprint6__creditend-text .highlight svg", {
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                }, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "expo.out"
                }, "-=50%"), s.from(".sprint6__creditend-contact", {
                    opacity: 0
                }, "-=100%");
                const n = () => {
                        this.DOM.section.classList.contains("active") && (t.classList.contains("active") ? r.play() : Xr.utils.toArray(".sprint6__whatcanyou-desc-p").forEach(((t, e, s) => {
                            const n = new ra(t, {
                                type: "lines",
                                linesClass: "line"
                            });
                            Xr.utils.toArray(n.lines).forEach(((t, e) => {
                                const i = document.createElement("div");
                                i.classList.add("masking-text"), t.parentNode.insertBefore(i, t), i.appendChild(t)
                            })), i++, i === s.length && (r.from(".sprint6__whatcanyou-desc-p .line", {
                                yPercent: 101
                            }, 2), r.play())
                        })))
                    },
                    a = () => {
                        t.classList.contains("active") && s.play()
                    },
                    o = () => {
                        this.DOM.section.classList.contains("active") && r.reverse()
                    },
                    h = () => {
                        t.classList.contains("active") && s.reverse()
                    };
                this.DOM.section.addEventListener("wheel", (t => {
                    if (t.deltaY > 0) return n()
                })), t.addEventListener("wheel", (t => t.deltaY > 0 ? a() : t.deltaY < 0 ? o() : void 0)), e.addEventListener("wheel", (t => {
                    if (t.deltaY < 0) return h()
                }));
                const l = new kh(this.DOM.section);
                l.get("swipe").set({
                    direction: kh.DIRECTION_ALL
                }), l.on("swipeup", (function() {
                    n()
                }));
                const p = new kh(t);
                p.get("swipe").set({
                    direction: kh.DIRECTION_ALL
                }), p.on("swipeup", (function() {
                    a()
                })), p.on("swipedown", (function() {
                    o()
                }));
                const u = new kh(e);
                u.get("swipe").set({
                    direction: kh.DIRECTION_ALL
                }), u.on("swipedown", (function() {
                    h()
                }))
            }
        }
        Xr.registerPlugin(Mn, Ba, Qh);
        class el {
            constructor() {
                this.DOM = {
                    audio: document.querySelector(".sprint5__audio"),
                    audioback: document.querySelector(".sprint2__audio"),
                    audioprev: [...document.querySelectorAll("audio:not(.sprint5__audio)")],
                    audioprevback: [...document.querySelectorAll("audio:not(.sprint2__audio)")],
                    section: document.querySelector("#sprint5"),
                    prevsection: document.querySelector("#sprint4"),
                    section2: document.querySelector(".sprint6__opening"),
                    skip: document.querySelector(".bar__skip")
                }, this.backScroll = !1, this.startScroll = !1, this.tlIntro = Xr.timeline(), this.init()
            }
            init() {
                this.onresize(), za(this.DOM.audioprev, this.DOM.audio), this.intro(), this.scrolldown()
            }
            onresize() {
                window.addEventListener("resize", (() => {
                    setTimeout((() => {}), 200)
                }))
            }
            sprint6() {
                this.DOM.section.classList.contains("is--loaded") || (new tl, this.DOM.section.classList.add("is--loaded"))
            }
            intro() {
                this.tlIntro.to(this.DOM.section, {
                    opacity: 1,
                    display: "flex",
                    duration: 1.4
                }), this.tlIntro.to("#sprint4", {
                    opacity: 0,
                    display: "none",
                    duration: 1,
                    ease: "power4.inOut",
                    onComplete: () => {
                        this.sprint6()
                    },
                    onReverseComplete: () => {
                        Oa.goToAndPlay(0), this.DOM.prevsection.classList.add("is--reverse"), this.DOM.prevsection.classList.remove("reverse"), this.DOM.prevsection.classList.remove("is--finished"), za(this.DOM.audioprevback, this.DOM.audioback)
                    }
                }), this.tlIntro.to(this.DOM.skip, {
                    color: "black"
                }, "-=100%"), this.tlIntro.to(".logo", {
                    opacity: 1
                }, "-=100%"), this.tlIntro.to(".logo__fill", {
                    fill: "black"
                }, "-=100%"), this.tlIntro.to(".language", {
                    color: "black"
                }, "-=100%"), this.tlIntro.to("#sprint5 .radialgradient", {
                    opacity: 1,
                    ease: "power4.out",
                    onComplete: () => {
                        this.startScroll = !0
                    }
                }), this.tlIntro.fromTo(".sprint5__flower", {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                }, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 2.5
                }), this.tlIntro.to("#sprint5 .scrolldown", {
                    opacity: 1
                }, "-=80%")
            }
            scrolldown() {
                let t = !1,
                    e = !1,
                    i = !1;
                const r = document.querySelector(".sprint5__types"),
                    s = document.querySelector(".marquee__track"),
                    n = Qh.create("custom", "M0,0 C0.304,0 0.53,1 1,1"),
                    a = Xr.timeline({
                        paused: !0,
                        defaults: {
                            duration: .3,
                            ease: "none"
                        },
                        onStart: () => {
                            this.backScroll = !0
                        },
                        onComplete: () => {
                            t = !0
                        },
                        onReverseComplete: () => {
                            t = !1, this.backScroll = !1
                        }
                    });
                for (let t = 1; t < 7; t++) a.to(`.sprint5__flower-${t}`, {
                    visibility: "hidden"
                }), a.to(`.sprint5__flower-${t+1}`, {
                    visibility: "visible"
                }, "-=0.3");
                a.to(".sprint5__flower", {
                    y: -100,
                    duration: 1.8,
                    ease: "power4.out"
                }), a.to("#sprint5 .scrolldown", {
                    opacity: 0,
                    duration: 1.4,
                    onComplete: () => {
                        const t = document.querySelector("#sprint5 .scrolldown p");
                        Na((() => {
                            t.textContent = this.DOM.elScrolltext.dataset.more
                        }), (() => {
                            t.textContent = ""
                        }))
                    }
                }, "-=100%"), a.to(".sprint5__flower", {
                    opacity: .5,
                    duration: 1.4,
                    ease: "power4.out"
                }, "-=0.8"), a.to("#sprint5 .radialgradient", {
                    opacity: .8,
                    duration: 1.4,
                    ease: "power4.out"
                }, "-=100%"), a.to(".sprint5__text", {
                    opacity: 1,
                    duration: 1.2,
                    onUpdate: function() {
                        this.progress() > .6 && (s.classList.contains("marquee-animation") || s.classList.add("marquee-animation"))
                    }
                }, "-=100%"), a.to(".sprint5__desc", {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "sine.out"
                }, "-=25%"), a.to("#sprint5 .scrolldown", {
                    opacity: 1,
                    duration: 1.4,
                    ease: "power4.out"
                }, "-=20%");
                const o = Xr.timeline({
                    paused: !0,
                    defaults: {
                        duration: 1.4,
                        ease: "expo.out"
                    },
                    onComplete: () => {
                        e = !0
                    },
                    onReverseComplete: () => {
                        e = !1
                    }
                });
                Na((() => {
                    o.to("#sprint5 .background-stack", {
                        y: 0,
                        opacity: 1,
                        stagger: .12
                    })
                }), (() => {
                    o.to("#sprint5 .background-stack", {
                        y: 0,
                        scale: 2.8,
                        opacity: 1,
                        stagger: .12
                    })
                })), o.to("#sprint5 .radialgradient, .sprint5__text, .sprint5__desc, .sprint5__flower, #sprint5 .scrolldown", {
                    display: "none",
                    duration: .1,
                    ease: "none"
                }), o.to(".sprint5__types", {
                    opacity: 1,
                    display: "flex"
                }), o.to(".sprint5__types-1, .sprint5__types-2", {
                    opacity: 1,
                    top: "0px",
                    stagger: .1
                }, "-=90%"), Ga((() => {
                    o.fromTo(".sprint5__types-out1", {
                        opacity: 0,
                        x: 40
                    }, {
                        opacity: 1,
                        x: 0
                    }, "-=100%")
                }));
                const h = Xr.timeline({
                    paused: !0
                });
                h.to(".sprint5__types", {
                    yPercent: "-=65",
                    duration: 1.4,
                    ease: n,
                    onStart: () => {
                        i = !0
                    },
                    onReverseComplete: () => {
                        e = !0, i = !1
                    }
                }), h.addPause(), h.to(".sprint5__types-3", {
                    opacity: 1,
                    top: "0px"
                }, "-=50%"), Ga((() => {
                    h.fromTo(".sprint5__types-out2", {
                        opacity: 0,
                        x: -40,
                        rotate: 40
                    }, {
                        opacity: 1,
                        x: 0,
                        rotate: 40
                    }, "-=100%")
                })), h.to(".sprint5__types", {
                    yPercent: "-=65",
                    duration: 1.4,
                    ease: n
                }), h.addPause(), h.to(".sprint5__types-4, .sprint5__types-5", {
                    opacity: 1,
                    top: "0px",
                    stagger: .1
                }, "-=50%"), Na((() => {
                    h.from(".sprint5__types-out3", {
                        opacity: 0,
                        x: -40
                    }, "-=100%"), h.to(".sprint5__types", {
                        yPercent: "-=65",
                        duration: 1.4,
                        ease: n
                    })
                }), (() => {
                    h.to(".sprint5__types", {
                        yPercent: "-=85",
                        duration: 1.4,
                        ease: n
                    })
                })), h.addPause(), h.to(".sprint5__types-6", {
                    opacity: 1,
                    top: "0px"
                }, "-=50%"), Ga((() => {
                    h.fromTo(".sprint5__types-out4", {
                        opacity: 0,
                        x: 40,
                        rotate: 103,
                        scaleY: -1
                    }, {
                        opacity: 1,
                        x: 0,
                        rotate: 103,
                        scaleY: -1
                    }, "-=100%")
                })), h.to("#sprint6", {
                    opacity: 1,
                    display: "flex",
                    duration: .01
                }), h.to(".sprint5__types", {
                    yPercent: "-=90",
                    duration: 2,
                    ease: "power4.inOut"
                }), h.to(".sprint6__text", {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "power4.inOut",
                    onComplete: () => {
                        this.DOM.section2.classList.add("active")
                    }
                }, "-=100%"), h.to("#sprint5", {
                    opacity: 0,
                    display: "none",
                    duration: 2.2,
                    ease: "none"
                }, "-=100%"), h.to("#sprint6 .grain__bg, .sprint6__stack", {
                    opacity: 1,
                    duration: 3,
                    ease: "none"
                }, "-=100%"), h.to(".sprint6__text", {
                    color: "#FFFFFF"
                }, "-=130%"), h.to(this.DOM.skip, {
                    color: "white"
                }, "-=100%"), h.to(".logo__fill", {
                    fill: "white"
                }, "-=100%"), h.to(".logo__stroke", {
                    stroke: "white"
                }, "-=100%"), h.to(".language", {
                    color: "white"
                }, "-=100%"), h.fromTo(".sprint6__text .highlight svg", {
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                }, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "expo.out"
                }), h.to("#sprint6 .scrolldown", {
                    opacity: 1
                }, "-=70%");
                const l = () => {
                        if (this.startScroll)
                            if (e) {
                                if (r.classList.contains("isopen")) return;
                                h.play()
                            } else t ? t && o.play() : a.play()
                    },
                    p = () => {
                        if (this.startScroll)
                            if (this.backScroll || this.tlIntro.reverse(), i || o.reverse(), e) {
                                if (r.classList.contains("isopen")) return;
                                h.reverse()
                            } else t && a.reverse()
                    };
                this.DOM.section.addEventListener("wheel", (t => {
                    t.deltaY > 0 ? l() : t.deltaY < 0 && p()
                })), this.DOM.section2.addEventListener("wheel", (t => {
                    t.deltaY < 0 && p()
                }));
                const u = new kh(this.DOM.section);
                u.get("swipe").set({
                    direction: kh.DIRECTION_ALL
                }), u.on("swipeup", (function() {
                    l()
                })), u.on("swipedown", (function() {
                    p()
                }));
                const c = new kh(this.DOM.section2);
                c.get("swipe").set({
                    direction: kh.DIRECTION_ALL
                }), c.on("swipedown", (function() {
                    p()
                }))
            }
        }
        Xr.registerPlugin(Mn, Ba);
        class il {
            constructor() {
                this.DOM = {
                    elSound: document.querySelector(".sound"),
                    audio: document.querySelector(".sprint4__audio"),
                    audioprev: [...document.querySelectorAll("audio:not(.sprint4__audio)")],
                    section: document.querySelector("#sprint4"),
                    scroll: document.querySelector("#sprint4 .scrolldown p")
                }, this.reverse = !1, this.tlIntro = Xr.timeline({
                    paused: !0,
                    onComplete: () => {
                        this.DOM.section.classList.add("is--reverse"), this.DOM.section.classList.remove("reverse")
                    },
                    onReverseComplete: () => {
                        this.DOM.section.classList.remove("is--reverse"), this.DOM.section.classList.add("reverse"), Oa.stop()
                    }
                }), this.tlIntro.to("#sprint2", {
                    opacity: 0,
                    display: "none",
                    duration: 1,
                    ease: "power4.inOut"
                }), this.tlIntro.to(this.DOM.section, {
                    opacity: 1,
                    autoAlpha: 1,
                    display: "flex",
                    duration: 1.4
                }, "-=20%"), this.init()
            }
            init() {
                this.onresize(), this.intro(), this.lottieanimation()
            }
            onresize() {
                window.addEventListener("resize", (() => {
                    setTimeout((() => {
                        Oa.resize()
                    }), 1e3)
                }))
            }
            intro() {
                this.tlIntro.play()
            }
            lottieanimation() {
                let t = !1,
                    e = !1,
                    i = !1,
                    r = !1,
                    s = !1,
                    n = !1,
                    a = !1,
                    o = !1;
                Oa.setSubframe(!1), Oa.play(), window.onblur = () => {
                    this.DOM.section.classList.contains("is--finished") || Oa.pause()
                }, window.onfocus = () => {
                    if (!this.DOM.section.classList.contains("is--finished")) {
                        if (t || Oa.play(), a && !i) Oa.play();
                        else if (a && i) {
                            if (Oa.play(), Oa.currentFrame > 330 && Oa.currentFrame < 340) {
                                if (!i) return;
                                Oa.setDirection(1)
                            }
                            if (Oa.currentFrame > 680 && Oa.currentFrame < 690) {
                                if (!i) return;
                                Oa.setDirection(-1)
                            }
                        }
                        if (o && !s) Oa.play();
                        else if (o && s) {
                            if (Oa.play(), Oa.currentFrame > 900 && Oa.currentFrame < 910) {
                                if (!s) return;
                                Oa.setDirection(1)
                            }
                            if (Oa.currentFrame > 1010 && Oa.currentFrame < 1020) {
                                if (!s) return;
                                Oa.setDirection(-1)
                            }
                        }
                    }
                }, Oa.onComplete = () => {
                    this.DOM.section.classList.contains("is--finished") || (new el, Xr.delayedCall(1, (() => {
                        u()
                    })), this.DOM.section.classList.add("is--finished"))
                }, Xr.set(".sprint4__text .line", {
                    yPercent: 101
                });
                const h = t => {
                        const e = Xr.timeline();
                        e.to(t, {
                            yPercent: 0
                        }), e.fromTo("#sprint4 .scrolldown", {
                            opacity: 0
                        }, {
                            opacity: 1
                        }, "-=70%")
                    },
                    l = t => {
                        const e = Xr.timeline();
                        e.to(t, {
                            opacity: 0,
                            display: "none"
                        }), e.to("#sprint4 .scrolldown", {
                            opacity: 0
                        }, 0)
                    },
                    p = (t, e, i, r) => {
                        t > e && (i || r())
                    },
                    u = () => {
                        t = !1, e = !1, i = !1, r = !1, s = !1, n = !1, a = !1, o = !1, Xr.set("#sprint4 .scrolldown, .sprint4__text .line, .sprint4__text_1, .sprint4__text_2, .sprint4__text_3", {
                            clearProps: "all"
                        }), Xr.set(".sprint4__text .line", {
                            yPercent: 101
                        })
                    };
                Oa.addEventListener("enterFrame", (n => {
                    if (p(Oa.currentFrame, 220, t, (() => {
                            h(".sprint4__text_1 .line"), t = !0
                        })), p(Oa.currentFrame, 230, e, (() => {
                            Oa.pause(), e = !0
                        })), p(Oa.currentFrame, 330, i, (() => {
                            this.DOM.section.classList.remove("is--reverse"), this.DOM.scroll.textContent = this.DOM.scroll.dataset.dyslexics, h(".sprint4__text_2 .line"), i = !0
                        })), p(Oa.currentFrame, 675, r, (() => {
                            r = !0
                        })), Oa.currentFrame > 330 && Oa.currentFrame < 340) {
                        if (!i) return;
                        Oa.setDirection(1)
                    }
                    if (Oa.currentFrame > 680 && Oa.currentFrame < 690) {
                        if (!i) return;
                        Oa.setDirection(-1)
                    }
                    if (p(Oa.currentFrame, 900, s, (() => {
                            this.DOM.scroll.textContent = this.DOM.scroll.dataset.neurodiversity, h(".sprint4__text_3 .line"), Xr.set(this.DOM.section, {
                                background: "#ffffff"
                            }), s = !0
                        })), Oa.currentFrame > 900 && Oa.currentFrame < 910) {
                        if (!s) return;
                        Oa.setDirection(1)
                    }
                    if (Oa.currentFrame > 1010 && Oa.currentFrame < 1020) {
                        if (!s) return;
                        Oa.setDirection(-1)
                    }
                }));
                const c = () => {
                        if (e && !i && (Oa.play(), a = !0, za(this.DOM.audioprev, this.DOM.audio), l(".sprint4__text_1")), !i || s || o || (o = !0, Oa.setDirection(1), Oa.goToAndPlay(690, !0), l(".sprint4__text_2")), s) {
                            if (n) return;
                            Oa.setDirection(1), Oa.goToAndPlay(1025, !0), l(".sprint4__text_3"), Xr.to(".logo", {
                                opacity: 0,
                                delay: 2
                            }), n = !0
                        }
                    },
                    f = () => {
                        if (this.DOM.section.classList.contains("is--reverse") && !this.DOM.section.classList.contains("reverse")) {
                            const t = Xr.timeline({
                                onComplete: () => {
                                    this.DOM.section.classList.remove("is--reverse"), this.DOM.section.classList.add("reverse"), Oa.stop(), u()
                                }
                            });
                            t.to(this.DOM.section, {
                                opacity: 0,
                                autoAlpha: 0,
                                display: "none",
                                duration: 1.4
                            }), t.to("#sprint2", {
                                opacity: 1,
                                display: "flex",
                                duration: 1,
                                ease: "power4.inOut"
                            }, "-=20%")
                        }
                    };
                this.DOM.section.addEventListener("wheel", (t => {
                    t.deltaY > 0 ? c() : t.deltaY < 0 && f()
                }));
                const d = new kh(this.DOM.section);
                d.get("swipe").set({
                    direction: kh.DIRECTION_ALL
                }), d.on("swipeup", (function() {
                    c()
                })), d.on("swipedown", (function() {
                    f()
                }))
            }
        }
        Xr.registerPlugin(Mn, Ba);
        class rl {
            constructor() {
                this.DOM = {
                    section: document.querySelector("#sprint2"),
                    nextsection: document.querySelector("#sprint4")
                }, this.isHover = !1, this.init()
            }
            init() {
                this.onresize(), this.hover(), this.scrollup()
            }
            onresize() {
                window.addEventListener("resize", (() => {
                    setTimeout((() => {}), 200)
                }))
            }
            hover() {
                Xr.utils.toArray(".splitflower_item").forEach(((t, e) => {
                    const i = Xr.timeline({
                        paused: !0,
                        defaults: {
                            ease: "expo.out",
                            duration: .8
                        }
                    });
                    0 === e && i.to(t, {
                        y: -20,
                        x: 10,
                        rotate: 5,
                        transformOrigin: "left"
                    }), 1 === e && i.to(t, {
                        y: -20,
                        x: -10,
                        rotate: -5,
                        transformOrigin: "right"
                    }), 2 === e && i.to(t, {
                        y: 15,
                        x: 5,
                        rotate: 5,
                        transformOrigin: "left"
                    }), 3 === e && i.to(t, {
                        y: -15,
                        transformOrigin: "center"
                    }), 4 === e && i.to(t, {
                        y: -5,
                        x: -20,
                        rotate: -5,
                        transformOrigin: "right"
                    }), 5 === e && i.to(t, {
                        y: -5,
                        x: 15,
                        rotate: -5,
                        transformOrigin: "left"
                    }), 6 === e && i.to(t, {
                        y: 10,
                        x: -5,
                        rotate: 5,
                        transformOrigin: "top"
                    }), 7 === e && i.to(t, {
                        y: 10,
                        x: -5,
                        rotate: -5,
                        transformOrigin: "right"
                    }), 8 === e && i.to(t, {
                        y: -10,
                        x: 15,
                        rotate: 5,
                        transformOrigin: "left"
                    }), 9 === e && i.to(t, {
                        y: 10,
                        x: 5,
                        rotate: 5,
                        transformOrigin: "left"
                    }), 10 === e && i.to(t, {
                        y: 5,
                        rotate: -2,
                        transformOrigin: "right"
                    }), t.addEventListener("mouseenter", (() => {
                        this.isHover || i.play()
                    })), t.addEventListener("mouseleave", (() => {
                        this.isHover || setTimeout((() => {
                            i.reverse()
                        }), 250)
                    }))
                }))
            }
            scrollup() {
                let t = !1;
                const e = Xr.timeline({
                    paused: !0,
                    defaults: {
                        stagger: {
                            each: .15,
                            from: "random",
                            repeat: -1,
                            yoyo: !0
                        },
                        duration: 2,
                        ease: "sine.inOut"
                    }
                });
                e.to(".splitflower_item", {
                    yPercent: -8
                });
                const i = Xr.timeline({
                    paused: !0,
                    defaults: {
                        duration: 1.8,
                        ease: "power4.inOut"
                    },
                    onStart: () => {
                        this.isHover = !0
                    },
                    onComplete: function() {
                        t = !0, e.play()
                    },
                    onReverseComplete: () => {
                        t = !1, this.isHover = !1
                    }
                });
                i.to(".sprint2__unleash, .sprint2__unleash__arrow", {
                    opacity: 0,
                    yPercent: -100,
                    display: "none",
                    duration: 1.4
                }), i.to(".sprint2__bg-stack", {
                    y: -100,
                    opacity: 0,
                    display: "none",
                    stagger: .12,
                    duration: 1.4
                }, "-=1.0"), i.to(".sprint2__bg-bundle", {
                    opacity: 0,
                    display: "none",
                    duration: 1.8
                }, "-=1.4"), i.to(".splitflower_7, .splitflower_4, .splitflower_8, .splitflower_2", {
                    opacity: 0,
                    display: "none",
                    duration: 1.8
                }, "-=1.0"), Na((() => {
                    i.to(".splitflower_0", {
                        x: "13vw",
                        y: "-15vh"
                    }, "-=1.0"), i.to(".splitflower_1", {
                        x: "-27vw",
                        y: "-10vh"
                    }, "-=1.8"), i.to(".splitflower_3", {
                        x: "27vw",
                        y: "5vh",
                        opacity: .6
                    }, "-=1.8"), i.to(".splitflower_5", {
                        x: "31vw",
                        y: "-5vh"
                    }, "-=1.8"), i.to(".splitflower_6", {
                        x: "-40vw",
                        y: "9vh",
                        opacity: .7
                    }, "-=1.8"), i.to(".splitflower_9", {
                        x: "40vw",
                        y: "27vh"
                    }, "-=1.8"), i.to(".splitflower_10", {
                        x: "-18vw",
                        y: "10vh",
                        rotate: -220,
                        transformOrigin: "center"
                    }, "-=1.8")
                }), (() => {
                    i.to(".splitflower_0", {
                        x: "60vw",
                        y: "-70vh"
                    }, "-=1.0"), i.to(".splitflower_1", {
                        x: "-44vw",
                        y: "-14vh"
                    }, "-=1.8"), i.to(".splitflower_3", {
                        x: "76vw",
                        y: "15vh"
                    }, "-=1.8"), i.to(".splitflower_5", {
                        x: "42vw",
                        y: "-12vh"
                    }, "-=1.8"), i.to(".splitflower_6", {
                        x: "-70vw",
                        y: "16vh"
                    }, "-=1.8"), i.to(".splitflower_9", {
                        x: "69vw",
                        y: "87vh"
                    }, "-=1.8"), i.to(".splitflower_10", {
                        x: "-66vw",
                        y: "64vh",
                        rotate: -220,
                        transformOrigin: "center"
                    }, "-=1.8")
                })), i.to(".sprint2__bg-overlay", {
                    opacity: 0,
                    display: "none",
                    duration: 1.4
                }, "-=1.0"), i.to(".sprint2__bg-sulur", {
                    opacity: 1,
                    duration: 1.4
                }, "-=1.4"), i.to(".sprint2__whatis", {
                    opacity: 1,
                    display: "block"
                }, "-=1.0");
                let r = !1;
                const s = () => {
                    e.kill(), r || (r = !0, new il), this.DOM.nextsection.classList.contains("reverse") && !this.DOM.nextsection.classList.contains("is--reverse") && (Oa.goToAndPlay(0), this.tlIntro = Xr.timeline({
                        onComplete: () => {
                            this.DOM.nextsection.classList.add("is--reverse"), this.DOM.nextsection.classList.remove("reverse")
                        }
                    }), this.tlIntro.to(this.DOM.section, {
                        opacity: 0,
                        display: "none",
                        duration: 1,
                        ease: "power4.inOut",
                        overwrite: !0
                    }), this.tlIntro.to("#sprint4", {
                        opacity: 1,
                        autoAlpha: 1,
                        display: "flex",
                        duration: 1.4
                    }, "-=20%"))
                };
                this.DOM.section.addEventListener("wheel", (r => {
                    if (r.deltaY > 0) t ? s() : i.play();
                    else if (r.deltaY < 0) return e.pause(), i.reverse()
                }));
                const n = new kh(this.DOM.section);
                n.get("swipe").set({
                    direction: kh.DIRECTION_ALL
                }), n.on("swipeup", (function() {
                    i.play(), t && s()
                })), n.on("swipedown", (function() {
                    return e.pause(), i.reverse()
                }))
            }
        }
        Xr.registerPlugin(Mn, Ba);
        class sl {
            constructor() {
                this.DOM = {
                    audio: document.querySelector(".sprint2__audio"),
                    audioprev: [...document.querySelectorAll("audio:not(.sprint2__audio)")],
                    skip: document.querySelector(".bar__skip")
                }, this.init()
            }
            init() {
                this.change(), this.onresize(), this.human(), this.onclick()
            }
            onresize() {
                window.addEventListener("resize", (() => {
                    setTimeout((() => {}), 200)
                }))
            }
            change() {
                const t = Xr.timeline();
                t.to(".bar__skip-spr1", {
                    opacity: 0,
                    display: "none"
                }, 0), t.to(".bar__skip a", {
                    opacity: 1,
                    display: "block"
                })
            }
            human() {
                const t = Xr.timeline({
                    repeat: -1
                });
                t.from(".sprint2__arrow_path", {
                    drawSVG: 0,
                    duration: 1.8,
                    ease: "power4.inOut"
                }), t.fromTo(".sprint2__arrow_path_arrow", {
                    opacity: 0
                }, {
                    opacity: 1
                }, "-=0.4"), t.fromTo(".sprint2__arrow_path", {
                    drawSVG: "100% 0%"
                }, {
                    drawSVG: "100% 100%",
                    duration: 1.4,
                    ease: "power4.inOut"
                }), t.fromTo(".sprint2__arrow_path_arrow", {
                    opacity: 1
                }, {
                    opacity: 0
                }, "-=0.4");
                const e = Xr.timeline({
                    onComplete: function() {
                        Xr.set("#sprint2", {
                            pointerEvents: "unset"
                        })
                    }
                });
                e.to("#sprint1", {
                    opacity: 0,
                    display: "none",
                    duration: 2.2,
                    ease: "none"
                }), e.to("#sprint2", {
                    opacity: 1,
                    display: "flex",
                    duration: 2.2,
                    ease: "power4.inOut"
                }, "-=0.8"), e.to("#sprint2 .grain__bg", {
                    opacity: .3,
                    ease: "none"
                }, "-=1.0"), e.from(".sprint2__circlebg", {
                    opacity: 0,
                    ease: "none"
                }, "-=0.5"), e.from(".sprint2__arrow, .sprint2__human__text", {
                    opacity: 0
                })
            }
            onclick() {
                const t = Xr.timeline({
                        repeat: -1,
                        yoyo: !0
                    }),
                    e = Xr.timeline({
                        repeat: -1
                    });
                e.set(".sprint2__circlebg", {
                    yPercent: -50,
                    xPercent: -50
                }), Na((() => {
                    e.to(".sprint2__circlebg", {
                        duration: 2,
                        filter: "blur(30px)",
                        ease: "elastic.out(1, 1)"
                    }), e.to(".sprint2__circlebg", {
                        duration: 2,
                        filter: "blur(25px)",
                        ease: "elastic.in(1, 1)"
                    }), t.to(".sprint2__circlebg", {
                        scale: 1.02,
                        duration: 2.2,
                        ease: "sine.inOut"
                    })
                }), (() => {
                    t.to(".sprint2__circlebg", {
                        scale: 1.05,
                        duration: 2.2,
                        ease: "sine.inOut"
                    })
                }));
                const i = Xr.timeline({
                    paused: !0,
                    onComplete: () => {
                        new rl
                    }
                });
                i.to(".sprint2__bg, .sprint2__unleash", {
                    display: "block",
                    opacity: 1
                }), i.from(".sprint2__unleash__text", {
                    scale: 0,
                    opacity: 0
                }), i.to(this.DOM.skip, {
                    opacity: 1
                }, "-=1.0"), i.from(".sprint2__unleash__arrow", {
                    opacity: 0
                }, "-=1.0"), i.to(".sprint2__bg-overlay", {
                    opacity: .6,
                    ease: "none"
                }, "-=0.5"), Na((() => {
                    i.to("#sprint2 .background-stack", {
                        y: 0,
                        opacity: 1,
                        stagger: .12
                    }, "-=1.4")
                }), (() => {
                    i.to("#sprint2 .background-stack", {
                        y: 0,
                        scale: 2.8,
                        opacity: 1,
                        stagger: .12
                    }, "-=1.4")
                })), i.to(".sprint2__bg-flower", {
                    scale: 1,
                    opacity: 1
                }, "-=1.0");
                document.querySelector("#sprint2").addEventListener("click", (() => {
                    za(this.DOM.audioprev, this.DOM.audio), t.kill(), e.kill();
                    const r = Xr.timeline({
                        defaults: {
                            ease: "expo.inOut"
                        }
                    });
                    r.to(".sprint2__arrow, .sprint2__human__text", {
                        opacity: 0,
                        duration: .5,
                        ease: "power4.out"
                    }), r.to(".sprint2__circlebg", {
                        scale: 2.5
                    }, 0), r.to(".sprint2__circlebg", {
                        opacity: 0
                    }, 1), Na((() => {
                        r.to(".sprint2__human__svg", {
                            width: "360vw",
                            left: "-112%",
                            top: "-50%",
                            transformOrigin: "top"
                        }, 0)
                    }), (() => {
                        r.to(".sprint2__human__svg", {
                            height: "795vw",
                            left: "-380%",
                            top: "-8%",
                            transformOrigin: "top"
                        }, 0)
                    })), r.to("#flowers_x5F_bg", {
                        rotate: 90,
                        scale: 2,
                        transformOrigin: "center",
                        duration: 2.5,
                        ease: "sine.out"
                    }, 1), r.to("#flowers_x5F_left", {
                        xPercent: -100,
                        duration: 2.5,
                        ease: "sine.out"
                    }, 1.1), r.to("#flowers_x5F_right", {
                        xPercent: 100,
                        duration: 2.5,
                        ease: "sine.out"
                    }, 1.1), r.to("#flowers_x5F_center", {
                        yPercent: 100,
                        duration: 2.5,
                        ease: "sine.out"
                    }, 1.1), r.to(".sprint2__human", {
                        display: "none",
                        opacity: 0,
                        ease: "power4.inOut",
                        onStart: function() {
                            Xr.set("#sprint2", {
                                cursor: "default"
                            }), i.play()
                        }
                    }, 1.3)
                }))
            }
        }
        var nl, al, ol = {
            version: "3.8.0",
            name: "text",
            init: function(t, e, i) {
                var r, s, n, a, o, h, l, p, u = t.nodeName.toUpperCase(),
                    c = this;
                if (c.svg = t.getBBox && ("TEXT" === u || "TSPAN" === u), !("innerHTML" in t) && !c.svg) return !1;
                if (c.target = t, "object" != typeof e && (e = {
                        value: e
                    }), "value" in e) {
                    for (c.delimiter = e.delimiter || "", n = Rn(t, c.delimiter, !1, e.preserveSpaces), al || (al = document.createElement("div")), al.innerHTML = e.value, s = Rn(al, c.delimiter), c.from = i._from, c.from && (u = n, n = s, s = u), c.hasClass = !(!e.newClass && !e.oldClass), c.newClass = e.newClass, c.oldClass = e.oldClass, r = (u = n.length - s.length) < 0 ? n : s, c.fillChar = e.fillChar || (e.padSpace ? "&nbsp;" : ""), u < 0 && (u = -u); --u > -1;) r.push(c.fillChar);
                    if ("diff" === e.type) {
                        for (a = 0, o = [], h = [], l = "", u = 0; u < s.length; u++)(p = s[u]) === n[u] ? l += p : (o[a] = l + p, h[a++] = l + n[u], l = "");
                        s = o, n = h, l && (s.push(l), n.push(l))
                    }
                    e.speed && i.duration(Math.min(.05 / e.speed * r.length, e.maxDuration || 9999)), this.original = n, this.text = s, this._props.push("text")
                } else c.text = c.original = [""]
            },
            render: function(t, e) {
                t > 1 ? t = 1 : t < 0 && (t = 0), e.from && (t = 1 - t);
                var i, r, s, n = e.text,
                    a = e.hasClass,
                    o = e.newClass,
                    h = e.oldClass,
                    l = e.delimiter,
                    p = e.target,
                    u = e.fillChar,
                    c = e.original,
                    f = n.length,
                    d = t * f + .5 | 0;
                a ? (r = h && d !== f, s = ((i = o && d) ? "<span class='" + o + "'>" : "") + n.slice(0, d).join(l) + (i ? "</span>" : "") + (r ? "<span class='" + h + "'>" : "") + l + c.slice(d).join(l) + (r ? "</span>" : "")) : s = n.slice(0, d).join(l) + l + c.slice(d).join(l), e.svg ? p.textContent = s : p.innerHTML = "&nbsp;" === u && ~s.indexOf("  ") ? s.split("  ").join("&nbsp;&nbsp;") : s
            }
        };
        ol.splitInnerHTML = Rn, ol.emojiSafeSplit = Ln, ol.getText = On, (nl || "undefined" != typeof window && (nl = window.gsap) && nl.registerPlugin && nl) && nl.registerPlugin(ol), Xr.registerPlugin(Mn, Ba, ol);
        class hl {
            constructor() {
                this.DOM = {
                    skip: document.querySelector(".bar__skip-spr1")
                }, this.isSkip = !1, this.init()
            }
            init() {
                this.onresize(), this.sound(), this.skip()
            }
            onresize() {
                window.addEventListener("resize", (() => {
                    setTimeout((() => {}), 200)
                }))
            }
            sound() {
                const t = document.querySelector(".sprint1__sound__btn__on"),
                    e = document.querySelector(".sprint1__sound__btn__skip"),
                    i = document.querySelector(".sprint1__audio"),
                    r = [document.querySelector(".sprint2__audio"), document.querySelector(".sprint4__audio"), document.querySelector(".sprint5__audio")];
                r.forEach((t => {
                    t.volume = 0
                }));
                const s = Xr.timeline({
                    delay: 5.5
                });
                s.from(".sprint1__sound__title-wrap", {
                    yPercent: 101
                }), s.from(".sprint1__sound__btn", {
                    opacity: 0
                }, "-=0.6"), t.addEventListener("click", (() => {
                    r.forEach((t => {
                        t.play(), t.volume = 0, t.pause()
                    })), i.play(), Xr.to(i, {
                        volume: 1,
                        delay: .8,
                        duration: 2,
                        ease: "power4.inOut"
                    }), new Va(!0), this.intro()
                })), e.addEventListener("click", (() => {
                    new Va(!1), this.intro()
                }))
            }
            intro() {
                const t = document.querySelector(".sprint1__intro .highlight__text"),
                    e = t.dataset.text1,
                    i = t.dataset.text2,
                    r = t.dataset.text3,
                    s = t.dataset.text4,
                    n = Xr.timeline({
                        onComplete: () => {
                            this.glow()
                        }
                    });
                n.to(".sprint1__sound__title, .sprint1__sound__btn", {
                    opacity: 0,
                    display: "none",
                    stagger: 0
                }), n.to(".sprint1__intro", {
                    opacity: 1,
                    duration: 1.8,
                    display: "block"
                }), n.from(".mask-path", {
                    drawSVG: 0,
                    ease: "expo.inOut"
                }, "-=1.0"), n.to(".sprint1__intro .highlight__text", {
                    text: e,
                    duration: 0,
                    onComplete: () => {
                        Xr.to(".sprint1__intro__title .highlight svg", {
                            scale: 1
                        })
                    }
                }, "+=1.2"), n.to(".sprint1__intro .highlight__text", {
                    text: i,
                    duration: 0,
                    onComplete: () => {
                        Xr.to(".sprint1__intro__title .highlight svg", {
                            scale: 1
                        })
                    }
                }, "+=1.2"), n.to(".sprint1__intro .highlight__text", {
                    text: r,
                    duration: 0,
                    onComplete: () => {
                        Xr.to(".sprint1__intro__title .highlight svg", {
                            scale: 1
                        })
                    }
                }, "+=1.2"), n.to(".sprint1__intro .highlight__text", {
                    text: s,
                    duration: 0,
                    onComplete: () => {
                        Xr.to(".sprint1__intro__title .highlight svg", {
                            scale: 1
                        })
                    }
                }, "+=1.2"), n.to(".sprint1__intro", {
                    opacity: 0
                }, "+=1.2")
            }
            glow() {
                const t = Xr.timeline({
                    onComplete: () => {
                        this.end()
                    }
                });
                t.fromTo(".language, .sound", {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                }, {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                }), t.to(".language, .sound", {
                    opacity: 0,
                    display: "none"
                }, "<20%"), t.to(".settings", {
                    opacity: 1,
                    display: "block"
                }, "<20%"), t.fromTo(".settings", {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                }, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                }, "<"), t.to(".sprint1__glow", {
                    opacity: 1,
                    display: "block"
                }, "<"), t.from(".sprint1__glow__list__item", {
                    scale: .8,
                    opacity: 0,
                    duration: 8,
                    stagger: {
                        amount: 1.5,
                        from: "random"
                    },
                    ease: "power4.out"
                }), t.to(".sprint1__glow__list__item img", {
                    zIndex: -1
                }, "-=7.0"), t.to(".sprint1__glow__overlay", {
                    opacity: .8,
                    duration: 1.8,
                    ease: "power4.inOut"
                }, "-=5.0"), t.from(".sprint1__glow__solution > *", {
                    opacity: 0,
                    scale: 0,
                    stagger: .8
                }, "-=3.5"), t.to(".sprint1__glow__overlay", {
                    opacity: 1,
                    duration: 2.5,
                    ease: "none"
                }, "-=3.0"), t.to(".sprint1__glow__list, .sprint1__glow__bg", {
                    opacity: 0,
                    duration: 2.5,
                    ease: "none"
                }, "-=1.0"), t.to(".sprint1__glow", {
                    opacity: 0,
                    display: "none",
                    duration: 1.5,
                    ease: "none"
                }), t.to(".sprint1__glow__list__item", {
                    scale: 1.1,
                    duration: 10,
                    delay: 2,
                    stagger: {
                        amount: 2.5,
                        from: "random"
                    },
                    ease: "none"
                }, 0)
            }
            end() {
                const t = Xr.timeline({
                    onComplete: () => {
                        this.isSkip || setTimeout((() => {
                            new sl
                        }), 1200)
                    }
                });
                t.to(".sprint1__end", {
                    opacity: 1
                }), t.from(".sprint1__end__title .line", {
                    yPercent: 101
                }, "-=0.5"), t.set(".sprint1__end__title .masking-text", {
                    overflow: "unset"
                }, "-=0.8"), t.from(".mask-path-2", {
                    drawSVG: 0,
                    ease: "expo.inOut"
                }, "-=0.5")
            }
            skip() {
                this.DOM.skip.addEventListener("click", (() => {
                    new sl, this.isSkip = !0
                }))
            }
        }
        new class {
            constructor() {
                this.init()
            }
            init() {
                Xr.config({
                    nullTargetWarn: !1
                }), Xr.defaults({
                    ease: na.global_ease,
                    duration: na.global_duration
                }), Mn.defaults({
                    start: na.global_trigger
                }), new Ra, new La, fa((() => {
                    new hl
                }))
            }
        }
    })()
})();