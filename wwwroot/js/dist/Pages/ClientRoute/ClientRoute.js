"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var t;
  var u;
  var i;
  var r;
  var o;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p = {};
  var v = [];
  var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var d = Array.isArray;
  function w(n2, l4) {
    for (var t3 in l4) n2[t3] = l4[t3];
    return n2;
  }
  function g(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _(l4, t3, u4) {
    var i4, r3, o2, e3 = {};
    for (o2 in t3) "key" == o2 ? i4 = t3[o2] : "ref" == o2 ? r3 = t3[o2] : e3[o2] = t3[o2];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : u4), "function" == typeof l4 && null != l4.defaultProps) for (o2 in l4.defaultProps) void 0 === e3[o2] && (e3[o2] = l4.defaultProps[o2]);
    return m(l4, e3, i4, r3, null);
  }
  function m(n2, u4, i4, r3, o2) {
    var e3 = { type: n2, props: u4, key: i4, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++t : o2, __i: -1, __u: 0 };
    return null == o2 && null != l.vnode && l.vnode(e3), e3;
  }
  function k(n2) {
    return n2.children;
  }
  function x(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function S(n2, l4) {
    if (null == l4) return n2.__ ? S(n2.__, n2.__i + 1) : null;
    for (var t3; l4 < n2.__k.length; l4++) if (null != (t3 = n2.__k[l4]) && null != t3.__e) return t3.__e;
    return "function" == typeof n2.type ? S(n2) : null;
  }
  function C(n2) {
    var l4, t3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++) if (null != (t3 = n2.__k[l4]) && null != t3.__e) {
        n2.__e = n2.__c.base = t3.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)($);
  }
  function $() {
    for (var n2, t3, u4, r3, o2, f4, c4, s4 = 1; i.length; ) i.length > s4 && i.sort(e), n2 = i.shift(), s4 = i.length, n2.__d && (u4 = void 0, o2 = (r3 = (t3 = n2).__v).__e, f4 = [], c4 = [], t3.__P && ((u4 = w({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(u4), O(t3.__P, u4, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [o2] : null, f4, null == o2 ? S(r3) : o2, !!(32 & r3.__u), c4), u4.__v = r3.__v, u4.__.__k[u4.__i] = u4, z(f4, u4, c4), u4.__e != o2 && C(u4)));
    $.__r = 0;
  }
  function I(n2, l4, t3, u4, i4, r3, o2, e3, f4, c4, s4) {
    var a4, h3, y4, d4, w4, g3, _2 = u4 && u4.__k || v, m4 = l4.length;
    for (f4 = P(t3, l4, _2, f4, m4), a4 = 0; a4 < m4; a4++) null != (y4 = t3.__k[a4]) && (h3 = -1 === y4.__i ? p : _2[y4.__i] || p, y4.__i = a4, g3 = O(n2, y4, h3, i4, r3, o2, e3, f4, c4, s4), d4 = y4.__e, y4.ref && h3.ref != y4.ref && (h3.ref && q(h3.ref, null, y4), s4.push(y4.ref, y4.__c || d4, y4)), null == w4 && null != d4 && (w4 = d4), 4 & y4.__u || h3.__k === y4.__k ? f4 = A(y4, f4, n2) : "function" == typeof y4.type && void 0 !== g3 ? f4 = g3 : d4 && (f4 = d4.nextSibling), y4.__u &= -7);
    return t3.__e = w4, f4;
  }
  function P(n2, l4, t3, u4, i4) {
    var r3, o2, e3, f4, c4, s4 = t3.length, a4 = s4, h3 = 0;
    for (n2.__k = new Array(i4), r3 = 0; r3 < i4; r3++) null != (o2 = l4[r3]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f4 = r3 + h3, (o2 = n2.__k[r3] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m(null, o2, null, null, null) : d(o2) ? m(k, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? m(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e3 = null, -1 !== (c4 = o2.__i = L(o2, t3, f4, a4)) && (a4--, (e3 = t3[c4]) && (e3.__u |= 2)), null == e3 || null === e3.__v ? (-1 == c4 && (i4 > s4 ? h3-- : i4 < s4 && h3++), "function" != typeof o2.type && (o2.__u |= 4)) : c4 != f4 && (c4 == f4 - 1 ? h3-- : c4 == f4 + 1 ? h3++ : (c4 > f4 ? h3-- : h3++, o2.__u |= 4))) : n2.__k[r3] = null;
    if (a4) for (r3 = 0; r3 < s4; r3++) null != (e3 = t3[r3]) && 0 == (2 & e3.__u) && (e3.__e == u4 && (u4 = S(e3)), B(e3, e3));
    return u4;
  }
  function A(n2, l4, t3) {
    var u4, i4;
    if ("function" == typeof n2.type) {
      for (u4 = n2.__k, i4 = 0; u4 && i4 < u4.length; i4++) u4[i4] && (u4[i4].__ = n2, l4 = A(u4[i4], l4, t3));
      return l4;
    }
    n2.__e != l4 && (l4 && n2.type && !t3.contains(l4) && (l4 = S(n2)), t3.insertBefore(n2.__e, l4 || null), l4 = n2.__e);
    do {
      l4 = l4 && l4.nextSibling;
    } while (null != l4 && 8 == l4.nodeType);
    return l4;
  }
  function H(n2, l4) {
    return l4 = l4 || [], null == n2 || "boolean" == typeof n2 || (d(n2) ? n2.some(function(n3) {
      H(n3, l4);
    }) : l4.push(n2)), l4;
  }
  function L(n2, l4, t3, u4) {
    var i4, r3, o2 = n2.key, e3 = n2.type, f4 = l4[t3];
    if (null === f4 && null == n2.key || f4 && o2 == f4.key && e3 === f4.type && 0 == (2 & f4.__u)) return t3;
    if (u4 > (null != f4 && 0 == (2 & f4.__u) ? 1 : 0)) for (i4 = t3 - 1, r3 = t3 + 1; i4 >= 0 || r3 < l4.length; ) {
      if (i4 >= 0) {
        if ((f4 = l4[i4]) && 0 == (2 & f4.__u) && o2 == f4.key && e3 === f4.type) return i4;
        i4--;
      }
      if (r3 < l4.length) {
        if ((f4 = l4[r3]) && 0 == (2 & f4.__u) && o2 == f4.key && e3 === f4.type) return r3;
        r3++;
      }
    }
    return -1;
  }
  function T(n2, l4, t3) {
    "-" == l4[0] ? n2.setProperty(l4, null == t3 ? "" : t3) : n2[l4] = null == t3 ? "" : "number" != typeof t3 || y.test(l4) ? t3 : t3 + "px";
  }
  function j(n2, l4, t3, u4, i4) {
    var r3;
    n: if ("style" == l4) if ("string" == typeof t3) n2.style.cssText = t3;
    else {
      if ("string" == typeof u4 && (n2.style.cssText = u4 = ""), u4) for (l4 in u4) t3 && l4 in t3 || T(n2.style, l4, "");
      if (t3) for (l4 in t3) u4 && t3[l4] === u4[l4] || T(n2.style, l4, t3[l4]);
    }
    else if ("o" == l4[0] && "n" == l4[1]) r3 = l4 != (l4 = l4.replace(f, "$1")), l4 = l4.toLowerCase() in n2 || "onFocusOut" == l4 || "onFocusIn" == l4 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + r3] = t3, t3 ? u4 ? t3.t = u4.t : (t3.t = c, n2.addEventListener(l4, r3 ? a : s, r3)) : n2.removeEventListener(l4, r3 ? a : s, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i4) l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && "popover" != l4 && l4 in n2) try {
        n2[l4] = null == t3 ? "" : t3;
        break n;
      } catch (n3) {
      }
      "function" == typeof t3 || (null == t3 || false === t3 && "-" != l4[4] ? n2.removeAttribute(l4) : n2.setAttribute(l4, "popover" == l4 && 1 == t3 ? "" : t3));
    }
  }
  function F(n2) {
    return function(t3) {
      if (this.l) {
        var u4 = this.l[t3.type + n2];
        if (null == t3.u) t3.u = c++;
        else if (t3.u < u4.t) return;
        return u4(l.event ? l.event(t3) : t3);
      }
    };
  }
  function O(n2, t3, u4, i4, r3, o2, e3, f4, c4, s4) {
    var a4, h3, p3, v4, y4, _2, m4, b2, S2, C2, M3, $3, P2, A2, H2, L3, T2, j3 = t3.type;
    if (void 0 !== t3.constructor) return null;
    128 & u4.__u && (c4 = !!(32 & u4.__u), o2 = [f4 = t3.__e = u4.__e]), (a4 = l.__b) && a4(t3);
    n: if ("function" == typeof j3) try {
      if (b2 = t3.props, S2 = "prototype" in j3 && j3.prototype.render, C2 = (a4 = j3.contextType) && i4[a4.__c], M3 = a4 ? C2 ? C2.props.value : a4.__ : i4, u4.__c ? m4 = (h3 = t3.__c = u4.__c).__ = h3.__E : (S2 ? t3.__c = h3 = new j3(b2, M3) : (t3.__c = h3 = new x(b2, M3), h3.constructor = j3, h3.render = D), C2 && C2.sub(h3), h3.props = b2, h3.state || (h3.state = {}), h3.context = M3, h3.__n = i4, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, j3.getDerivedStateFromProps(b2, h3.__s))), v4 = h3.props, y4 = h3.state, h3.__v = t3, p3) S2 && null == j3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (S2 && null == j3.getDerivedStateFromProps && b2 !== v4 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b2, M3), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b2, h3.__s, M3) || t3.__v == u4.__v)) {
          for (t3.__v != u4.__v && (h3.props = b2, h3.state = h3.__s, h3.__d = false), t3.__e = u4.__e, t3.__k = u4.__k, t3.__k.some(function(n3) {
            n3 && (n3.__ = t3);
          }), $3 = 0; $3 < h3._sb.length; $3++) h3.__h.push(h3._sb[$3]);
          h3._sb = [], h3.__h.length && e3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(b2, h3.__s, M3), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(v4, y4, _2);
        });
      }
      if (h3.context = M3, h3.props = b2, h3.__P = n2, h3.__e = false, P2 = l.__r, A2 = 0, S2) {
        for (h3.state = h3.__s, h3.__d = false, P2 && P2(t3), a4 = h3.render(h3.props, h3.state, h3.context), H2 = 0; H2 < h3._sb.length; H2++) h3.__h.push(h3._sb[H2]);
        h3._sb = [];
      } else do {
        h3.__d = false, P2 && P2(t3), a4 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++A2 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i4 = w(w({}, i4), h3.getChildContext())), S2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(v4, y4)), L3 = a4, null != a4 && a4.type === k && null == a4.key && (L3 = N(a4.props.children)), f4 = I(n2, d(L3) ? L3 : [L3], t3, u4, i4, r3, o2, e3, f4, c4, s4), h3.base = t3.__e, t3.__u &= -161, h3.__h.length && e3.push(h3), m4 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (t3.__v = null, c4 || null != o2) if (n3.then) {
        for (t3.__u |= c4 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
        o2[o2.indexOf(f4)] = null, t3.__e = f4;
      } else for (T2 = o2.length; T2--; ) g(o2[T2]);
      else t3.__e = u4.__e, t3.__k = u4.__k;
      l.__e(n3, t3, u4);
    }
    else null == o2 && t3.__v == u4.__v ? (t3.__k = u4.__k, t3.__e = u4.__e) : f4 = t3.__e = V(u4.__e, t3, u4, i4, r3, o2, e3, c4, s4);
    return (a4 = l.diffed) && a4(t3), 128 & t3.__u ? void 0 : f4;
  }
  function z(n2, t3, u4) {
    for (var i4 = 0; i4 < u4.length; i4++) q(u4[i4], u4[++i4], u4[++i4]);
    l.__c && l.__c(t3, n2), n2.some(function(t4) {
      try {
        n2 = t4.__h, t4.__h = [], n2.some(function(n3) {
          n3.call(t4);
        });
      } catch (n3) {
        l.__e(n3, t4.__v);
      }
    });
  }
  function N(n2) {
    return "object" != typeof n2 || null == n2 ? n2 : d(n2) ? n2.map(N) : w({}, n2);
  }
  function V(t3, u4, i4, r3, o2, e3, f4, c4, s4) {
    var a4, h3, v4, y4, w4, _2, m4, b2 = i4.props, k4 = u4.props, x3 = u4.type;
    if ("svg" == x3 ? o2 = "http://www.w3.org/2000/svg" : "math" == x3 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (a4 = 0; a4 < e3.length; a4++) if ((w4 = e3[a4]) && "setAttribute" in w4 == !!x3 && (x3 ? w4.localName == x3 : 3 == w4.nodeType)) {
        t3 = w4, e3[a4] = null;
        break;
      }
    }
    if (null == t3) {
      if (null == x3) return document.createTextNode(k4);
      t3 = document.createElementNS(o2, x3, k4.is && k4), c4 && (l.__m && l.__m(u4, e3), c4 = false), e3 = null;
    }
    if (null === x3) b2 === k4 || c4 && t3.data === k4 || (t3.data = k4);
    else {
      if (e3 = e3 && n.call(t3.childNodes), b2 = i4.props || p, !c4 && null != e3) for (b2 = {}, a4 = 0; a4 < t3.attributes.length; a4++) b2[(w4 = t3.attributes[a4]).name] = w4.value;
      for (a4 in b2) if (w4 = b2[a4], "children" == a4) ;
      else if ("dangerouslySetInnerHTML" == a4) v4 = w4;
      else if (!(a4 in k4)) {
        if ("value" == a4 && "defaultValue" in k4 || "checked" == a4 && "defaultChecked" in k4) continue;
        j(t3, a4, null, w4, o2);
      }
      for (a4 in k4) w4 = k4[a4], "children" == a4 ? y4 = w4 : "dangerouslySetInnerHTML" == a4 ? h3 = w4 : "value" == a4 ? _2 = w4 : "checked" == a4 ? m4 = w4 : c4 && "function" != typeof w4 || b2[a4] === w4 || j(t3, a4, w4, b2[a4], o2);
      if (h3) c4 || v4 && (h3.__html === v4.__html || h3.__html === t3.innerHTML) || (t3.innerHTML = h3.__html), u4.__k = [];
      else if (v4 && (t3.innerHTML = ""), I("template" === u4.type ? t3.content : t3, d(y4) ? y4 : [y4], u4, i4, r3, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o2, e3, f4, e3 ? e3[0] : i4.__k && S(i4, 0), c4, s4), null != e3) for (a4 = e3.length; a4--; ) g(e3[a4]);
      c4 || (a4 = "value", "progress" == x3 && null == _2 ? t3.removeAttribute("value") : void 0 !== _2 && (_2 !== t3[a4] || "progress" == x3 && !_2 || "option" == x3 && _2 !== b2[a4]) && j(t3, a4, _2, b2[a4], o2), a4 = "checked", void 0 !== m4 && m4 !== t3[a4] && j(t3, a4, m4, b2[a4], o2));
    }
    return t3;
  }
  function q(n2, t3, u4) {
    try {
      if ("function" == typeof n2) {
        var i4 = "function" == typeof n2.__u;
        i4 && n2.__u(), i4 && null == t3 || (n2.__u = n2(t3));
      } else n2.current = t3;
    } catch (n3) {
      l.__e(n3, u4);
    }
  }
  function B(n2, t3, u4) {
    var i4, r3;
    if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || q(i4, null, t3)), null != (i4 = n2.__c)) {
      if (i4.componentWillUnmount) try {
        i4.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, t3);
      }
      i4.base = i4.__P = null;
    }
    if (i4 = n2.__k) for (r3 = 0; r3 < i4.length; r3++) i4[r3] && B(i4[r3], t3, u4 || "function" != typeof n2.type);
    u4 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function D(n2, l4, t3) {
    return this.constructor(n2, t3);
  }
  function E(t3, u4, i4) {
    var r3, o2, e3, f4;
    u4 == document && (u4 = document.documentElement), l.__ && l.__(t3, u4), o2 = (r3 = "function" == typeof i4) ? null : i4 && i4.__k || u4.__k, e3 = [], f4 = [], O(u4, t3 = (!r3 && i4 || u4).__k = _(k, null, [t3]), o2 || p, p, u4.namespaceURI, !r3 && i4 ? [i4] : o2 ? null : u4.firstChild ? n.call(u4.childNodes) : null, e3, !r3 && i4 ? i4 : o2 ? o2.__e : u4.firstChild, r3, f4), z(e3, t3, f4);
  }
  function J(l4, t3, u4) {
    var i4, r3, o2, e3, f4 = w({}, l4.props);
    for (o2 in l4.type && l4.type.defaultProps && (e3 = l4.type.defaultProps), t3) "key" == o2 ? i4 = t3[o2] : "ref" == o2 ? r3 = t3[o2] : f4[o2] = void 0 === t3[o2] && void 0 !== e3 ? e3[o2] : t3[o2];
    return arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : u4), m(l4.type, f4, i4 || l4.key, r3 || l4.ref, null);
  }
  function K(n2) {
    function l4(n3) {
      var t3, u4;
      return this.getChildContext || (t3 = /* @__PURE__ */ new Set(), (u4 = {})[l4.__c] = this, this.getChildContext = function() {
        return u4;
      }, this.componentWillUnmount = function() {
        t3 = null;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && t3.forEach(function(n5) {
          n5.__e = true, M(n5);
        });
      }, this.sub = function(n4) {
        t3.add(n4);
        var l5 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          t3 && t3.delete(n4), l5 && l5.call(n4);
        };
      }), n3.children;
    }
    return l4.__c = "__cC" + h++, l4.__ = n2, l4.Provider = l4.__l = (l4.Consumer = function(n3, l5) {
      return n3.children(l5);
    }).contextType = l4, l4;
  }
  n = v.slice, l = { __e: function(n2, l4, t3, u4) {
    for (var i4, r3, o2; l4 = l4.__; ) if ((i4 = l4.__c) && !i4.__) try {
      if ((r3 = i4.constructor) && null != r3.getDerivedStateFromError && (i4.setState(r3.getDerivedStateFromError(n2)), o2 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, u4 || {}), o2 = i4.__d), o2) return i4.__E = i4;
    } catch (l5) {
      n2 = l5;
    }
    throw n2;
  } }, t = 0, u = function(n2) {
    return null != n2 && null == n2.constructor;
  }, x.prototype.setState = function(n2, l4) {
    var t3;
    t3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, t3), this.props)), n2 && w(t3, n2), null != n2 && this.__v && (l4 && this._sb.push(l4), M(this));
  }, x.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l4) {
    return n2.__v.__b - l4.__v.__b;
  }, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m2 = c2.unmount;
  var s2 = c2.__;
  function j2() {
    for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c2.__e(t3, n2.__v);
    }
  }
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i4 = (r2 = n2.__c).__H;
    i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
    })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
      n3.u && (n3.__H = n3.u), n3.u = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c2.__e(r3, n3.__v);
      }
    }), l2 && l2(n2, t3);
  }, c2.unmount = function(n2) {
    m2 && m2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u4 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }

  // node_modules/preact-router/dist/preact-router.mjs
  var a3 = {};
  function c3(n2, t3) {
    for (var r3 in t3) n2[r3] = t3[r3];
    return n2;
  }
  function s3(n2, t3, r3) {
    var i4, o2 = /(?:\?([^#]*))?(#.*)?$/, e3 = n2.match(o2), u4 = {};
    if (e3 && e3[1]) for (var f4 = e3[1].split("&"), c4 = 0; c4 < f4.length; c4++) {
      var s4 = f4[c4].split("=");
      u4[decodeURIComponent(s4[0])] = decodeURIComponent(s4.slice(1).join("="));
    }
    n2 = d3(n2.replace(o2, "")), t3 = d3(t3 || "");
    for (var h3 = Math.max(n2.length, t3.length), v4 = 0; v4 < h3; v4++) if (t3[v4] && ":" === t3[v4].charAt(0)) {
      var l4 = t3[v4].replace(/(^:|[+*?]+$)/g, ""), p3 = (t3[v4].match(/[+*?]+$/) || a3)[0] || "", m4 = ~p3.indexOf("+"), y4 = ~p3.indexOf("*"), U2 = n2[v4] || "";
      if (!U2 && !y4 && (p3.indexOf("?") < 0 || m4)) {
        i4 = false;
        break;
      }
      if (u4[l4] = decodeURIComponent(U2), m4 || y4) {
        u4[l4] = n2.slice(v4).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t3[v4] !== n2[v4]) {
      i4 = false;
      break;
    }
    return (true === r3.default || false !== i4) && u4;
  }
  function h2(n2, t3) {
    return n2.rank < t3.rank ? 1 : n2.rank > t3.rank ? -1 : n2.index - t3.index;
  }
  function v3(n2, t3) {
    return n2.index = t3, n2.rank = function(n3) {
      return n3.props.default ? 0 : d3(n3.props.path).map(l3).join("");
    }(n2), n2.props;
  }
  function d3(n2) {
    return n2.replace(/(^\/+|\/+$)/g, "").split("/");
  }
  function l3(n2) {
    return ":" == n2.charAt(0) ? 1 + "*+?".indexOf(n2.charAt(n2.length - 1)) || 4 : 5;
  }
  var p2 = {};
  var m3 = [];
  var y3 = [];
  var U = null;
  var g2 = { url: R() };
  var k3 = K(g2);
  function R() {
    var n2;
    return "" + ((n2 = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p2).pathname || "") + (n2.search || "");
  }
  function $2(n2, t3) {
    return void 0 === t3 && (t3 = false), "string" != typeof n2 && n2.url && (t3 = n2.replace, n2 = n2.url), function(n3) {
      for (var t4 = m3.length; t4--; ) if (m3[t4].canRoute(n3)) return true;
      return false;
    }(n2) && function(n3, t4) {
      void 0 === t4 && (t4 = "push"), U && U[t4] ? U[t4](n3) : "undefined" != typeof history && history[t4 + "State"] && history[t4 + "State"](null, null, n3);
    }(n2, t3 ? "replace" : "push"), I2(n2);
  }
  function I2(n2) {
    for (var t3 = false, r3 = 0; r3 < m3.length; r3++) m3[r3].routeTo(n2) && (t3 = true);
    return t3;
  }
  function M2(n2) {
    if (n2 && n2.getAttribute) {
      var t3 = n2.getAttribute("href"), r3 = n2.getAttribute("target");
      if (t3 && t3.match(/^\//g) && (!r3 || r3.match(/^_?self$/i))) return $2(t3);
    }
  }
  function b(n2) {
    return n2.stopImmediatePropagation && n2.stopImmediatePropagation(), n2.stopPropagation && n2.stopPropagation(), n2.preventDefault(), false;
  }
  function W(n2) {
    if (!(n2.ctrlKey || n2.metaKey || n2.altKey || n2.shiftKey || n2.button)) {
      var t3 = n2.target;
      do {
        if ("a" === t3.localName && t3.getAttribute("href")) {
          if (t3.hasAttribute("data-native") || t3.hasAttribute("native")) return;
          if (M2(t3)) return b(n2);
        }
      } while (t3 = t3.parentNode);
    }
  }
  var w3 = false;
  function D2(n2) {
    n2.history && (U = n2.history), this.state = { url: n2.url || R() };
  }
  c3(D2.prototype = new x(), { shouldComponentUpdate: function(n2) {
    return true !== n2.static || n2.url !== this.props.url || n2.onChange !== this.props.onChange;
  }, canRoute: function(n2) {
    var t3 = H(this.props.children);
    return void 0 !== this.g(t3, n2);
  }, routeTo: function(n2) {
    this.setState({ url: n2 });
    var t3 = this.canRoute(n2);
    return this.p || this.forceUpdate(), t3;
  }, componentWillMount: function() {
    this.p = true;
  }, componentDidMount: function() {
    var n2 = this;
    w3 || (w3 = true, U || addEventListener("popstate", function() {
      I2(R());
    }), addEventListener("click", W)), m3.push(this), U && (this.u = U.listen(function(t3) {
      var r3 = t3.location || t3;
      n2.routeTo("" + (r3.pathname || "") + (r3.search || ""));
    })), this.p = false;
  }, componentWillUnmount: function() {
    "function" == typeof this.u && this.u(), m3.splice(m3.indexOf(this), 1);
  }, componentWillUpdate: function() {
    this.p = true;
  }, componentDidUpdate: function() {
    this.p = false;
  }, g: function(n2, t3) {
    n2 = n2.filter(v3).sort(h2);
    for (var r3 = 0; r3 < n2.length; r3++) {
      var i4 = n2[r3], o2 = s3(t3, i4.props.path, i4.props);
      if (o2) return [i4, o2];
    }
  }, render: function(n2, t3) {
    var e3, u4, f4 = n2.onChange, a4 = t3.url, s4 = this.c, h3 = this.g(H(n2.children), a4);
    if (h3 && (u4 = J(h3[0], c3(c3({ url: a4, matches: e3 = h3[1] }, e3), { key: void 0, ref: void 0 }))), a4 !== (s4 && s4.url)) {
      c3(g2, s4 = this.c = { url: a4, previous: s4 && s4.url, current: u4, path: u4 ? u4.props.path : null, matches: e3 }), s4.router = this, s4.active = u4 ? [u4] : [];
      for (var v4 = y3.length; v4--; ) y3[v4]({});
      "function" == typeof f4 && f4(s4);
    }
    return _(k3.Provider, { value: s4 }, u4);
  } });
  var L2 = function(n2) {
    return _(n2.component, n2);
  };

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f3 = 0;
  var i3 = Array.isArray;
  function u3(e3, t3, n2, o2, i4, u4) {
    t3 || (t3 = {});
    var a4, c4, p3 = t3;
    if ("ref" in p3) for (c4 in p3 = {}, t3) "ref" == c4 ? a4 = t3[c4] : p3[c4] = t3[c4];
    var l4 = { type: e3, props: p3, key: n2, ref: a4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i4, __self: u4 };
    if ("function" == typeof e3 && (a4 = e3.defaultProps)) for (c4 in a4) void 0 === p3[c4] && (p3[c4] = a4[c4]);
    return l.vnode && l.vnode(l4), l4;
  }

  // Components/NavMenu.tsx
  var NavMenu = () => {
    return /* @__PURE__ */ u3("nav", { className: "bg-white shadow", children: /* @__PURE__ */ u3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ u3("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ u3("div", { className: "flex", children: [
        /* @__PURE__ */ u3("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ u3("span", { className: "text-gray-900 font-bold text-lg", children: "Logo" }) }),
        /* @__PURE__ */ u3("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ u3("a", { href: "/", "data-native": true, className: `${location.pathname === "/" ? "border-b-2 border-gray-500 text-gray-900" : "border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"} inline-flex items-center px-1 pt-1 font-medium`, children: "Home" }),
          /* @__PURE__ */ u3("a", { href: "/profile", "data-native": true, className: `${location.pathname.includes("/profile") ? "border-b-2 border-gray-500 text-gray-900" : "border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"} inline-flex items-center px-1 pt-1 font-medium`, children: "Profile" }),
          /* @__PURE__ */ u3("a", { href: "/clientroute", "data-native": true, className: `${location.pathname.includes("/clientroute") ? "border-b-2 border-gray-500 text-gray-900" : "border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"} inline-flex items-center px-1 pt-1 font-medium`, children: "ClientRoute" })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ u3("button", { className: "bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium", children: "Sign In" }) }),
      /* @__PURE__ */ u3("div", { className: "flex items-center sm:hidden", children: /* @__PURE__ */ u3("button", { className: "inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500", children: [
        /* @__PURE__ */ u3("span", { className: "sr-only", children: "Open main menu" }),
        /* @__PURE__ */ u3("svg", { className: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ u3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
      ] }) })
    ] }) }) });
  };

  // Components/Layout.tsx
  var Layout = ({
    mainContent,
    subTabs
  }) => {
    return /* @__PURE__ */ u3(k, { children: /* @__PURE__ */ u3("div", { className: "flex flex-col h-screen", children: [
      /* @__PURE__ */ u3(NavMenu, {}),
      subTabs && /* @__PURE__ */ u3("div", { className: "w-full border-b border-gray-200", children: /* @__PURE__ */ u3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ u3("nav", { className: "flex space-x-8", children: subTabs }) }) }),
      /* @__PURE__ */ u3("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ u3("div", { className: "min-h-screen bg-gray-100", children: /* @__PURE__ */ u3("div", { className: "py-6", children: mainContent }) }) })
    ] }) });
  };

  // Pages/ClientRoute/ClientRoute.tsx
  var Tab1 = () => {
    return /* @__PURE__ */ u3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ u3("h1", { className: "text-3xl font-bold text-gray-900", children: "Tab 1" }),
      /* @__PURE__ */ u3("div", { className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ u3("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ u3("div", { className: "px-4 py-5 sm:p-6", children: [
          /* @__PURE__ */ u3("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Total Users" }),
          /* @__PURE__ */ u3("dd", { className: "mt-1 text-3xl font-semibold text-gray-900", children: "12,345" })
        ] }) }),
        /* @__PURE__ */ u3("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ u3("div", { className: "px-4 py-5 sm:p-6", children: [
          /* @__PURE__ */ u3("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Revenue" }),
          /* @__PURE__ */ u3("dd", { className: "mt-1 text-3xl font-semibold text-gray-900", children: "$45,678" })
        ] }) }),
        /* @__PURE__ */ u3("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ u3("div", { className: "px-4 py-5 sm:p-6", children: [
          /* @__PURE__ */ u3("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Conversion Rate" }),
          /* @__PURE__ */ u3("dd", { className: "mt-1 text-3xl font-semibold text-gray-900", children: "24.57%" })
        ] }) })
      ] }),
      /* @__PURE__ */ u3("div", { className: "mt-8", children: /* @__PURE__ */ u3("div", { className: "bg-white shadow rounded-lg", children: [
        /* @__PURE__ */ u3("div", { className: "px-4 py-5 border-b border-gray-200 sm:px-6", children: /* @__PURE__ */ u3("h3", { className: "text-lg leading-6 font-medium text-gray-900", children: "Recent Activity" }) }),
        /* @__PURE__ */ u3("ul", { className: "divide-y divide-gray-200", children: [
          /* @__PURE__ */ u3("li", { className: "px-4 py-4 sm:px-6", children: "Activity item 1" }),
          /* @__PURE__ */ u3("li", { className: "px-4 py-4 sm:px-6", children: "Activity item 2" }),
          /* @__PURE__ */ u3("li", { className: "px-4 py-4 sm:px-6", children: "Activity item 3" })
        ] })
      ] }) })
    ] });
  };
  var Tab2 = () => {
    return /* @__PURE__ */ u3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ u3("h1", { className: "text-3xl font-bold text-gray-900", children: "Tab 2" }),
      /* @__PURE__ */ u3("div", { className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ u3("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ u3("div", { className: "px-4 py-5 sm:p-6", children: [
          /* @__PURE__ */ u3("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Projects" }),
          /* @__PURE__ */ u3("dd", { className: "mt-1 text-3xl font-semibold text-gray-900", children: "89" })
        ] }) }),
        /* @__PURE__ */ u3("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ u3("div", { className: "px-4 py-5 sm:p-6", children: [
          /* @__PURE__ */ u3("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Completed" }),
          /* @__PURE__ */ u3("dd", { className: "mt-1 text-3xl font-semibold text-gray-900", children: "64" })
        ] }) }),
        /* @__PURE__ */ u3("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ u3("div", { className: "px-4 py-5 sm:p-6", children: [
          /* @__PURE__ */ u3("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Completion Rate" }),
          /* @__PURE__ */ u3("dd", { className: "mt-1 text-3xl font-semibold text-gray-900", children: "71.9%" })
        ] }) })
      ] }),
      /* @__PURE__ */ u3("div", { className: "mt-8", children: /* @__PURE__ */ u3("div", { className: "bg-white shadow rounded-lg", children: [
        /* @__PURE__ */ u3("div", { className: "px-4 py-5 border-b border-gray-200 sm:px-6", children: /* @__PURE__ */ u3("h3", { className: "text-lg leading-6 font-medium text-gray-900", children: "Recent Projects" }) }),
        /* @__PURE__ */ u3("ul", { className: "divide-y divide-gray-200", children: [
          /* @__PURE__ */ u3("li", { className: "px-4 py-4 sm:px-6", children: "Project Alpha" }),
          /* @__PURE__ */ u3("li", { className: "px-4 py-4 sm:px-6", children: "Project Beta" }),
          /* @__PURE__ */ u3("li", { className: "px-4 py-4 sm:px-6", children: "Project Gamma" })
        ] })
      ] }) })
    ] });
  };
  E(/* @__PURE__ */ u3(ClientRoute, {}), document.getElementById("Pages/ClientRoute/ClientRoute"));
  function ClientRoute() {
    return /* @__PURE__ */ u3(
      Layout,
      {
        subTabs: /* @__PURE__ */ u3("nav", { className: "flex", children: [
          /* @__PURE__ */ u3("a", { href: "/clientroute/tab1", className: "${location.pathname === '/clientroute/tab1' ? 'border-b-2 border-gray-500 text-gray-900' : 'border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'} inline-flex items-center px-1 pt-1 font-medium", children: "Tab 1" }),
          /* @__PURE__ */ u3("a", { href: "/clientroute/tab2", className: "${location.pathname === '/clientroute/tab2' ? 'border-b-2 border-gray-500 text-gray-900' : 'border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'} inline-flex items-center px-1 pt-1 font-medium", children: "Tab 2" })
        ] }),
        mainContent: /* @__PURE__ */ u3("div", { className: "py-6 bg-gray-100", children: /* @__PURE__ */ u3(D2, { children: [
          /* @__PURE__ */ u3(L2, { path: "/clientroute/tab1", component: Tab1, default: true }),
          /* @__PURE__ */ u3(L2, { path: "/clientroute/tab2", component: Tab2 })
        ] }) })
      }
    );
  }
})();
//# sourceMappingURL=ClientRoute.js.map
