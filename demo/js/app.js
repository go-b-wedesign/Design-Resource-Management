webpackJsonp([1], {
    "/kzH": function(t, e, n) {
        "use strict";

        function i(t) {
            n("JBDh")
        }
        var r = n("KALg"),
            a = n("vnZ5"),
            s = n("VU/8"),
            o = i,
            c = s(r.a, a.a, o, null, null);
        e.a = c.exports
    },
    DeYy: function(t, e, n) {
        "use strict";

        function i(t) {
            n("lFU5")
        }
        var r = n("b4MN"),
            a = n("m3/M"),
            s = n("VU/8"),
            o = i,
            c = s(r.a, a.a, o, null, null);
        e.a = c.exports
    },
    GGAH: function(t, e, n) {
        "use strict";
        e.a = {
            data: function() {
                return {
                    isShow: !1
                }
            },
            props: {
                width: {
                    required: !0,
                    validator: function(t) {
                        return t >= 0
                    }
                },
                height: {
                    required: !0,
                    validator: function(t) {
                        return t >= 0
                    }
                },
                order: {
                    default: 0
                },
                moveClass: {
                    default: ""
                }
            },
            methods: {
                notify: function() {
                    this.$parent.$emit("reflow", this)
                },
                getMeta: function() {
                    return {
                        vm: this,
                        node: this.$el,
                        order: this.order,
                        width: this.width,
                        height: this.height,
                        moveClass: this.moveClass
                    }
                }
            },
            created: function() {
                var t = this;
                this.rect = {
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                }, this.$watch(function() {
                    return t.width, t.height
                }, this.notify)
            },
            mounted: function() {
                var t = this;
                this.$parent.$once("reflowed", function() {
                    t.isShow = !0
                }), this.notify()
            },
            destroyed: function() {
                this.notify()
            }
        }
    },
    HCTz: function(t, e, n) {
        "use strict";
        e.a = {
            computed: {
                categories: function() {
                    return this.$root.categories
                },
                current: function() {
                    return this.$root.currentCategory
                }
            },
            methods: {
                showCategory: function(t) {
                    this.$root.loadCategory(t)
                }
            }
        }
    },
    JBDh: function(t, e) {},
    KALg: function(t, e, n) {
        "use strict";

        function i(t) {
            !1 !== t && this.autoResize ? _(window, "resize", this.reflowHandler, !1) : C(window, "resize", this.reflowHandler, !1)
        }

        function r(t) {
            var e = t.target,
                n = e[M];
            n && y(e, n)
        }

        function a() {
            clearTimeout(this.token), this.token = setTimeout(this.reflow, this.interval)
        }

        function s() {
            var t = this;
            if (this.$el) {
                var e = this.$el.clientWidth,
                    n = this.$children.map(function(t) {
                        return t.getMeta()
                    });
                n.sort(function(t, e) {
                    return t.order - e.order
                }), this.virtualRects = n.map(function() {
                    return {}
                }), c(this, n, this.virtualRects), setTimeout(function() {
                    o(t.$el, e) && c(t, n, t.virtualRects), t.style.overflow = "hidden", f(t.virtualRects, n), t.$emit("reflowed", t)
                }, 0)
            }
        }

        function o(t, e) {
            return e !== t.clientWidth
        }

        function c(t, e, n) {
            var i = u(t);
            ("h" === t.line ? k : G).calculate(t, i, e, n)
        }

        function u(t) {
            var e = t.maxLineGap ? +t.maxLineGap : t.lineGap;
            return {
                align: ~["left", "right", "center"].indexOf(t.align) ? t.align : "left",
                line: ~["v", "h"].indexOf(t.line) ? t.line : "v",
                lineGap: +t.lineGap,
                minLineGap: t.minLineGap ? +t.minLineGap : t.lineGap,
                maxLineGap: e,
                singleMaxWidth: Math.max(t.singleMaxWidth || 0, e),
                fixedHeight: !!t.fixedHeight,
                grow: t.grow && t.grow.map(function(t) {
                    return +t
                })
            }
        }

        function l(t, e, n) {
            switch (n) {
                case "right":
                    return t - e;
                case "center":
                    return (t - e) / 2;
                default:
                    return 0
            }
        }

        function h(t) {
            return t.reduce(function(t, e) {
                return t + e
            })
        }

        function f(t, e) {
            var n = e.filter(function(t) {
                    return t.moveClass
                }),
                i = d(n);
            v(t, e);
            var r = d(n);
            n.forEach(function(t, e) {
                t.node[M] = t.moveClass, p(t.node, i[e], r[e])
            }), document.body.clientWidth, n.forEach(function(t) {
                x(t.node, t.moveClass), m(t.node)
            })
        }

        function d(t) {
            return t.map(function(t) {
                return t.vm.rect
            })
        }

        function v(t, e) {
            t.forEach(function(t, n) {
                var i = e[n].node.style;
                e[n].vm.rect = t;
                for (var r in t) i[r] = t[r] + "px"
            })
        }

        function p(t, e, n) {
            var i = e.left - n.left,
                r = e.top - n.top,
                a = e.width / n.width,
                s = e.height / n.height;
            t.style.transform = t.style.WebkitTransform = "translate(" + i + "px," + r + "px) scale(" + a + "," + s + ")", t.style.transitionDuration = "0s"
        }

        function m(t) {
            t.style.transform = t.style.WebkitTransform = "", t.style.transitionDuration = ""
        }

        function g() {
            return void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend ? "webkitTransitionEnd" : "transitionend"
        }

        function w(t, e) {
            for (var n = "function" == typeof t ? function() {
                    return t()
                } : function() {
                    return t
                }, i = [], r = 0; r < e; r++) i[r] = n();
            return i
        }

        function x(t, e) {
            if (!b(t, e)) {
                L(t, "class", (L(t, "class").trim() + " " + e).trim())
            }
        }

        function y(t, e) {
            var n = new RegExp("\\s*\\b" + e + "\\b\\s*", "g");
            L(t, "class", L(t, "class").replace(n, " ").trim())
        }

        function b(t, e) {
            return new RegExp("\\b" + e + "\\b").test(L(t, "class"))
        }

        function L(t, e, n) {
            if (void 0 === n) return t.getAttribute(e) || "";
            t.setAttribute(e, n)
        }

        function _(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            t.addEventListener(e, n, i)
        }

        function C(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            t.removeEventListener(e, n, i)
        }
        var M = "_wfMoveClass";
        e.a = {
            props: {
                autoResize: {
                    default: !0
                },
                interval: {
                    default: 200,
                    validator: function(t) {
                        return t >= 0
                    }
                },
                align: {
                    default: "left",
                    validator: function(t) {
                        return ~["left", "right", "center"].indexOf(t)
                    }
                },
                line: {
                    default: "v",
                    validator: function(t) {
                        return ~["v", "h"].indexOf(t)
                    }
                },
                lineGap: {
                    required: !0,
                    validator: function(t) {
                        return t >= 0
                    }
                },
                minLineGap: {
                    validator: function(t) {
                        return t >= 0
                    }
                },
                maxLineGap: {
                    validator: function(t) {
                        return t >= 0
                    }
                },
                singleMaxWidth: {
                    validator: function(t) {
                        return t >= 0
                    }
                },
                fixedHeight: {
                    default: !1
                },
                grow: {
                    validator: function(t) {
                        return t instanceof Array
                    }
                },
                watch: {
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    style: {
                        height: "",
                        overflow: ""
                    },
                    token: null
                }
            },
            methods: {
                reflowHandler: a,
                autoResizeHandler: i,
                reflow: s
            },
            created: function() {
                var t = this;
                this.virtualRects = [], this.$on("reflow", function() {
                    t.reflowHandler()
                }), this.$watch(function() {
                    return t.align, t.line, t.lineGap, t.minLineGap, t.maxLineGap, t.singleMaxWidth, t.fixedHeight, t.watch
                }, this.reflowHandler), this.$watch("grow", this.reflowHandler)
            },
            mounted: function() {
                this.$watch("autoResize", this.autoResizeHandler), _(this.$el, g(), r, !0), this.autoResizeHandler(this.autoResize)
            },
            beforeDestroy: function() {
                this.autoResizeHandler(!1), C(this.$el, g(), r, !0)
            }
        };
        var G = function() {
                function t(t, i, r, a) {
                    var s = t.$el.clientWidth,
                        o = i.grow,
                        c = o ? n(s, o) : e(s, i),
                        u = w(0, c.count);
                    r.forEach(function(t, e) {
                        var n = u.reduce(function(t, e, n) {
                                return e < u[t] ? n : t
                            }, 0),
                            r = c.width[n % c.count],
                            s = a[e];
                        s.top = u[n], s.left = c.left + (n ? h(c.width.slice(0, n)) : 0), s.width = r, s.height = t.height * (i.fixedHeight ? 1 : r / t.width), u[n] = u[n] + s.height
                    }), t.style.height = Math.max.apply(Math, u) + "px"
                }

                function e(t, e) {
                    var n = t / e.lineGap,
                        i = void 0;
                    if (e.singleMaxWidth >= t) n = 1, i = Math.max(t, e.minLineGap);
                    else {
                        var r = e.maxLineGap * ~~n,
                            a = e.minLineGap * ~~(n + 1),
                            s = r >= t,
                            o = a <= t;
                        s && o ? (n = Math.round(n), i = t / n) : s ? (n = ~~n, i = t / n) : o ? (n = ~~(n + 1), i = t / n) : (n = ~~n, i = e.maxLineGap), 1 === n && (i = Math.min(t, e.singleMaxWidth), i = Math.max(i, e.minLineGap))
                    }
                    return {
                        width: w(i, n),
                        count: n,
                        left: l(t, i * n, e.align)
                    }
                }

                function n(t, e) {
                    var n = h(e);
                    return {
                        width: e.map(function(e) {
                            return t * e / n
                        }),
                        count: e.length,
                        left: 0
                    }
                }
                return {
                    calculate: t
                }
            }(),
            k = function() {
                function t(t, n, i, r) {
                    for (var a = t.$el.clientWidth, s = i.length, o = 0, c = 0; c < s;) {
                        for (var u, l, h = e(a, n, i, c), f = 0, d = 0; f < h.count; f++) u = i[c + f], l = r[c + f], l.top = o, l.left = h.left + d, l.width = u.width * h.height / u.height, l.height = h.height, d += l.width;
                        c += h.count, o += h.height
                    }
                    t.style.height = o + "px"
                }

                function e(t, e, a, s) {
                    var o = n(t, e.lineGap, a, s),
                        c = Math.max(o - 1, 1),
                        u = i(t, e, a, s, o),
                        h = i(t, e, a, s, c),
                        f = r(h, u, t),
                        d = f.height,
                        v = f.width;
                    return 1 === f.count && (v = Math.min(e.singleMaxWidth, t), d = a[s].height * v / a[s].width), {
                        left: l(t, v, e.align),
                        count: f.count,
                        height: d
                    }
                }

                function n(t, e, n, i) {
                    for (var r = 0, a = i, s = 0; a < n.length && s <= t; a++) s += n[a].width * e / n[a].height, r++;
                    return r
                }

                function i(t, e, n, i, r) {
                    for (var a = 0, s = r - 1; s >= 0; s--) {
                        var o = n[i + s];
                        a += o.width * e.lineGap / o.height
                    }
                    var c = e.lineGap * t / a;
                    if (c <= e.maxLineGap && c >= e.minLineGap) return {
                        cost: Math.abs(e.lineGap - c),
                        count: r,
                        width: t,
                        height: c
                    };
                    var u = a > t ? e.minLineGap : e.maxLineGap;
                    return {
                        cost: 1 / 0,
                        count: r,
                        width: a * u / e.lineGap,
                        height: u
                    }
                }

                function r(t, e, n) {
                    return t.cost === 1 / 0 && e.cost === 1 / 0 ? e.width < n ? e : t : e.cost >= t.cost ? t : e
                }
                return {
                    calculate: t
                }
            }()
    },
    M93x: function(t, e, n) {
        "use strict";

        function i(t) {
            n("pbjw")
        }
        var r = n("xJD8"),
            a = n("cHbx"),
            s = n("VU/8"),
            o = i,
            c = s(r.a, a.a, o, null, null);
        e.a = c.exports
    },
    NHnr: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("Xxa5"),
            r = n.n(i),
            a = n("exGp"),
            s = n.n(a),
            o = n("/5sW"),
            c = n("M93x"),
            u = n("mtWM"),
            l = n.n(u),
            h = n("cTzj"),
            f = n.n(h);
        o.a.config.productionTip = !1, o.a.use(f.a), new o.a({
            el: "#app",
            render: function(t) {
                return t(c.a)
            },
            data: function() {
                return {
                    posts: {},
                    categories: [],
                    currentCategory: 0,
                    wordpressAPI: "//dtpsdtemplates.wpengine.com/wp-json"
                }
            },
            beforeMount: function() {
                var t = this;
                return s()(r.a.mark(function e() {
                    var n, i;
                    return r.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, l.a.get(t.wordpressAPI + "/designthemes/v1/categories");
                            case 2:
                                return n = e.sent, t.categories = n.data, e.next = 6, l.a.get(t.wordpressAPI + "/designthemes/v1/category/0?per_page=100");
                            case 6:
                                i = e.sent, t.$set(t.posts, 0, i.data);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            methods: {
                loadCategory: function(t) {
                    var e = this;
                    return s()(r.a.mark(function n() {
                        var i;
                        return r.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (e.currentCategory = Number(t), e.posts.hasOwnProperty(t)) {
                                        n.next = 7;
                                        break
                                    }
                                    return e.$set(e.posts, t, []), n.next = 5, l.a.get(e.wordpressAPI + "/designthemes/v1/category/" + t);
                                case 5:
                                    i = n.sent, e.posts[t] = i.data;
                                case 7:
                                case "end":
                                    return n.stop()
                            }
                        }, n, e)
                    }))()
                }
            }
        })
    },
    OJeC: function(t, e, n) {
        "use strict";

        function i(t) {
            n("edNM")
        }
        var r = n("GGAH"),
            a = n("b250"),
            s = n("VU/8"),
            o = i,
            c = s(r.a, a.a, o, null, null);
        e.a = c.exports
    },
    b250: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShow,
                        expression: "isShow"
                    }],
                    staticClass: "vue-waterfall-slot"
                }, [t._t("default")], 2)
            },
            r = [],
            a = {
                render: i,
                staticRenderFns: r
            };
        e.a = a
    },
    b4MN: function(t, e, n) {
        "use strict";

        function i() {
            try {
                return window.self !== window.top
            } catch (t) {
                return !0
            }
        }
        var r = n("Xxa5"),
            a = n.n(r),
            s = n("exGp"),
            o = n.n(s),
            c = n("mtWM"),
            u = n.n(c),
            l = n("/kzH"),
            h = n("OJeC");
        e.a = {
            components: {
                Waterfall: l.a,
                WaterfallSlot: h.a
            },
            props: {
                posts: Array
            },
            methods: {
                width: function(t) {
                    return t.thumbnail ? Math.floor(t.thumbnail.width) : 600
                },
                height: function(t) {
                    return t.thumbnail ? Math.floor(t.thumbnail.height) : 300
                },
                exportPost: function(t) {
                    var e = this;
                    return o()(a.a.mark(function n() {
                        var r;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (i()) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return", alert("Content can only be imported inside UX Builder that comes bundeled with Flatsome WordPress Theme. Purchase Flatsome to get access"));
                                case 2:
                                    return n.prev = 2, n.next = 5, u.a.get(e.$root.wordpressAPI + "/designthemes/v1/export/" + t);
                                case 5:
                                    r = n.sent, parent.postMessage({
                                        status: "success",
                                        data: r.data
                                    }, "*"), n.next = 12;
                                    break;
                                case 9:
                                    n.prev = 9, n.t0 = n.catch(2), parent.postMessage({
                                        status: "error"
                                    }, "*");
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }, n, e, [
                            [2, 9]
                        ])
                    }))()
                },
                onReflowed: function() {
                    this.$Lazyload.lazyLoadHandler()
                }
            }
        }
    },
    cHbx: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("div", {
                    staticClass: "wrapper"
                }, [n("app-header"), t._v(" "), n("transition-group", {
                    tag: "main",
                    staticClass: "main",
                    attrs: {
                        role: "main",
                        name: "page"
                    }
                }, t._l(t.posts, function(e, i) {
                    return Number(i) === t.current ? n("post-List", {
                        key: i,
                        attrs: {
                            posts: e
                        }
                    }) : t._e()
                }))], 1)])
            },
            r = [],
            a = {
                render: i,
                staticRenderFns: r
            };
        e.a = a
    },
    edNM: function(t, e) {},
    lFU5: function(t, e) {},
    "m3/M": function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "block-list"
                }, [n("waterfall", {
                    attrs: {
                        "line-gap": 300,
                        "min-line-gap": 200,
                        "max-line-gap": 1e3,
                        watch: t.posts
                    },
                    on: {
                        reflowed: t.onReflowed
                    }
                }, t._l(t.posts, function(e, i) {
                    return n("waterfall-slot", {
                        key: e.id + i,
                        staticClass: "block",
                        attrs: {
                            width: t.width(e),
                            height: t.height(e),
                            order: i
                        }
                    }, [n("div", {
                        staticClass: "block-wrap"
                    }, [n("div", {
                        staticClass: "block-actions"
                    }, [n("span", {
                        staticClass: "block-title",
                        domProps: {
                            innerHTML: t._s(e.title)
                        }
                    }), n("br"), t._v(" "), n("a", {
                        staticClass: "block-action",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(n) {
                                n.preventDefault(), t.exportPost(e.id)
                            }
                        }
                    }, [t._v("Import")]), t._v(" "), n("a", {
                        staticClass: "block-action",
                        attrs: {
                            href: "//dtpsdtemplates.wpengine.com/blocks/?p=" + e.id,
                            target: "_blank"
                        }
                    }, [t._v("Preview")])]), t._v(" "), e.thumbnail ? n("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: e.thumbnail.url,
                            expression: "post.thumbnail.url"
                        }],
                        staticClass: "block-image"
                    }) : n("div", {
                        staticClass: "img-missing"
                    }, [t._v("Missing image")])])])
                }))], 1)
            },
            r = [],
            a = {
                render: i,
                staticRenderFns: r
            };
        e.a = a
    },
    pbjw: function(t, e) {},
    "sC+t": function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("header", {
                    staticClass: "header"
                }, [n("div", {
                    staticClass: "header-inner"
                }, [n("div", {
                    staticClass: "top"
                }, [n("a", {
                    staticClass: "logo"
                }, [n("img", {
                    staticStyle: {
                        width: "80px",
                        height: "80px",
                        "vertical-align": "middle"
                    },
                    attrs: {
                        "src": "https://s3.envato.com/files/274523922/thumb-image-new.png"
                    }
                }, ), t._v(" "), t._m(0)]), t._v(" "), n("p", {
                    staticClass: "intro"
                }, [t._v("Pre-designed layouts for DesignThemes")])]), t._v(" "), n("div", {
                    staticClass: "main"
                }, [n("nav", {
                    staticClass: "nav"
                }, [n("a", {
                    class: {
                        "is-active": 0 === t.current
                    },
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            t.showCategory(0)
                        }
                    }
                }, [t._v("\n          Latest\n        ")]), t._v(" "), t._l(t.categories, function(e) {
                    return e.parent ? t._e() : n("a", {
                        key: e.id,
                        class: {
                            "is-active": t.current === e.id
                        },
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(n) {
                                t.showCategory(e.id)
                            }
                        }
                    }, [t._v("\n          " + t._s(e.name) + "\n          "), n("span", {
                        staticClass: "cat-count"
                    }, [t._v(t._s(e.count))])])
                })], 2)]), t._v(" "), n("div", {
                    staticClass: "bottom"
                })])])
            },
            r = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("h1", [t._v("Design "), n("strong", [t._v("Themes")])])
            }],
            a = {
                render: i,
                staticRenderFns: r
            };
        e.a = a
    },
    teIl: function(t, e, n) {
        "use strict";

        function i(t) {
            n("y+o3")
        }
        var r = n("HCTz"),
            a = n("sC+t"),
            s = n("VU/8"),
            o = i,
            c = s(r.a, a.a, o, null, null);
        e.a = c.exports
    },
    vnZ5: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "vue-waterfall",
                    style: t.style
                }, [t._t("default")], 2)
            },
            r = [],
            a = {
                render: i,
                staticRenderFns: r
            };
        e.a = a
    },
    xJD8: function(t, e, n) {
        "use strict";
        var i = n("teIl"),
            r = n("DeYy");
        e.a = {
            name: "app",
            components: {
                AppHeader: i.a,
                PostList: r.a
            },
            computed: {
                current: function() {
                    return this.$root.currentCategory
                },
                posts: function() {
                    return this.$root.posts
                }
            }
        }
    },
    "y+o3": function(t, e) {}
}, ["NHnr"]);
//# sourceMappingURL=app.ecbed994e29f257daac1.js.map