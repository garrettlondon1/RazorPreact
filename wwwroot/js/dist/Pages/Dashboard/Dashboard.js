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
  function w(n2, l2) {
    for (var t2 in l2) n2[t2] = l2[t2];
    return n2;
  }
  function g(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _(l2, t2, u3) {
    var i3, r2, o2, e2 = {};
    for (o2 in t2) "key" == o2 ? i3 = t2[o2] : "ref" == o2 ? r2 = t2[o2] : e2[o2] = t2[o2];
    if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : u3), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
    return m(l2, e2, i3, r2, null);
  }
  function m(n2, u3, i3, r2, o2) {
    var e2 = { type: n2, props: u3, key: i3, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++t : o2, __i: -1, __u: 0 };
    return null == o2 && null != l.vnode && l.vnode(e2), e2;
  }
  function k(n2) {
    return n2.children;
  }
  function x(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function S(n2, l2) {
    if (null == l2) return n2.__ ? S(n2.__, n2.__i + 1) : null;
    for (var t2; l2 < n2.__k.length; l2++) if (null != (t2 = n2.__k[l2]) && null != t2.__e) return t2.__e;
    return "function" == typeof n2.type ? S(n2) : null;
  }
  function C(n2) {
    var l2, t2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (t2 = n2.__k[l2]) && null != t2.__e) {
        n2.__e = n2.__c.base = t2.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)($);
  }
  function $() {
    for (var n2, t2, u3, r2, o2, f3, c2, s2 = 1; i.length; ) i.length > s2 && i.sort(e), n2 = i.shift(), s2 = i.length, n2.__d && (u3 = void 0, o2 = (r2 = (t2 = n2).__v).__e, f3 = [], c2 = [], t2.__P && ((u3 = w({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(u3), O(t2.__P, u3, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [o2] : null, f3, null == o2 ? S(r2) : o2, !!(32 & r2.__u), c2), u3.__v = r2.__v, u3.__.__k[u3.__i] = u3, z(f3, u3, c2), u3.__e != o2 && C(u3)));
    $.__r = 0;
  }
  function I(n2, l2, t2, u3, i3, r2, o2, e2, f3, c2, s2) {
    var a2, h2, y2, d2, w2, g2, _2 = u3 && u3.__k || v, m2 = l2.length;
    for (f3 = P(t2, l2, _2, f3, m2), a2 = 0; a2 < m2; a2++) null != (y2 = t2.__k[a2]) && (h2 = -1 === y2.__i ? p : _2[y2.__i] || p, y2.__i = a2, g2 = O(n2, y2, h2, i3, r2, o2, e2, f3, c2, s2), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && q(h2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 4 & y2.__u || h2.__k === y2.__k ? f3 = A(y2, f3, n2) : "function" == typeof y2.type && void 0 !== g2 ? f3 = g2 : d2 && (f3 = d2.nextSibling), y2.__u &= -7);
    return t2.__e = w2, f3;
  }
  function P(n2, l2, t2, u3, i3) {
    var r2, o2, e2, f3, c2, s2 = t2.length, a2 = s2, h2 = 0;
    for (n2.__k = new Array(i3), r2 = 0; r2 < i3; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f3 = r2 + h2, (o2 = n2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m(null, o2, null, null, null) : d(o2) ? m(k, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? m(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 !== (c2 = o2.__i = L(o2, t2, f3, a2)) && (a2--, (e2 = t2[c2]) && (e2.__u |= 2)), null == e2 || null === e2.__v ? (-1 == c2 && (i3 > s2 ? h2-- : i3 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f3 && (c2 == f3 - 1 ? h2-- : c2 == f3 + 1 ? h2++ : (c2 > f3 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
    if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = t2[r2]) && 0 == (2 & e2.__u) && (e2.__e == u3 && (u3 = S(e2)), B(e2, e2));
    return u3;
  }
  function A(n2, l2, t2) {
    var u3, i3;
    if ("function" == typeof n2.type) {
      for (u3 = n2.__k, i3 = 0; u3 && i3 < u3.length; i3++) u3[i3] && (u3[i3].__ = n2, l2 = A(u3[i3], l2, t2));
      return l2;
    }
    n2.__e != l2 && (l2 && n2.type && !t2.contains(l2) && (l2 = S(n2)), t2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
    do {
      l2 = l2 && l2.nextSibling;
    } while (null != l2 && 8 == l2.nodeType);
    return l2;
  }
  function L(n2, l2, t2, u3) {
    var i3, r2, o2 = n2.key, e2 = n2.type, f3 = l2[t2];
    if (null === f3 && null == n2.key || f3 && o2 == f3.key && e2 === f3.type && 0 == (2 & f3.__u)) return t2;
    if (u3 > (null != f3 && 0 == (2 & f3.__u) ? 1 : 0)) for (i3 = t2 - 1, r2 = t2 + 1; i3 >= 0 || r2 < l2.length; ) {
      if (i3 >= 0) {
        if ((f3 = l2[i3]) && 0 == (2 & f3.__u) && o2 == f3.key && e2 === f3.type) return i3;
        i3--;
      }
      if (r2 < l2.length) {
        if ((f3 = l2[r2]) && 0 == (2 & f3.__u) && o2 == f3.key && e2 === f3.type) return r2;
        r2++;
      }
    }
    return -1;
  }
  function T(n2, l2, t2) {
    "-" == l2[0] ? n2.setProperty(l2, null == t2 ? "" : t2) : n2[l2] = null == t2 ? "" : "number" != typeof t2 || y.test(l2) ? t2 : t2 + "px";
  }
  function j(n2, l2, t2, u3, i3) {
    var r2;
    n: if ("style" == l2) if ("string" == typeof t2) n2.style.cssText = t2;
    else {
      if ("string" == typeof u3 && (n2.style.cssText = u3 = ""), u3) for (l2 in u3) t2 && l2 in t2 || T(n2.style, l2, "");
      if (t2) for (l2 in t2) u3 && t2[l2] === u3[l2] || T(n2.style, l2, t2[l2]);
    }
    else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = t2, t2 ? u3 ? t2.t = u3.t : (t2.t = c, n2.addEventListener(l2, r2 ? a : s, r2)) : n2.removeEventListener(l2, r2 ? a : s, r2);
    else {
      if ("http://www.w3.org/2000/svg" == i3) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
        n2[l2] = null == t2 ? "" : t2;
        break n;
      } catch (n3) {
      }
      "function" == typeof t2 || (null == t2 || false === t2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == t2 ? "" : t2));
    }
  }
  function F(n2) {
    return function(t2) {
      if (this.l) {
        var u3 = this.l[t2.type + n2];
        if (null == t2.u) t2.u = c++;
        else if (t2.u < u3.t) return;
        return u3(l.event ? l.event(t2) : t2);
      }
    };
  }
  function O(n2, t2, u3, i3, r2, o2, e2, f3, c2, s2) {
    var a2, h2, p2, v2, y2, _2, m2, b, S2, C2, M2, $2, P2, A2, H, L2, T2, j2 = t2.type;
    if (void 0 !== t2.constructor) return null;
    128 & u3.__u && (c2 = !!(32 & u3.__u), o2 = [f3 = t2.__e = u3.__e]), (a2 = l.__b) && a2(t2);
    n: if ("function" == typeof j2) try {
      if (b = t2.props, S2 = "prototype" in j2 && j2.prototype.render, C2 = (a2 = j2.contextType) && i3[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i3, u3.__c ? m2 = (h2 = t2.__c = u3.__c).__ = h2.__E : (S2 ? t2.__c = h2 = new j2(b, M2) : (t2.__c = h2 = new x(b, M2), h2.constructor = j2, h2.render = D), C2 && C2.sub(h2), h2.props = b, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i3, p2 = h2.__d = true, h2.__h = [], h2._sb = []), S2 && null == h2.__s && (h2.__s = h2.state), S2 && null != j2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = w({}, h2.__s)), w(h2.__s, j2.getDerivedStateFromProps(b, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = t2, p2) S2 && null == j2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), S2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
      else {
        if (S2 && null == j2.getDerivedStateFromProps && b !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(b, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(b, h2.__s, M2) || t2.__v == u3.__v)) {
          for (t2.__v != u3.__v && (h2.props = b, h2.state = h2.__s, h2.__d = false), t2.__e = u3.__e, t2.__k = u3.__k, t2.__k.some(function(n3) {
            n3 && (n3.__ = t2);
          }), $2 = 0; $2 < h2._sb.length; $2++) h2.__h.push(h2._sb[$2]);
          h2._sb = [], h2.__h.length && e2.push(h2);
          break n;
        }
        null != h2.componentWillUpdate && h2.componentWillUpdate(b, h2.__s, M2), S2 && null != h2.componentDidUpdate && h2.__h.push(function() {
          h2.componentDidUpdate(v2, y2, _2);
        });
      }
      if (h2.context = M2, h2.props = b, h2.__P = n2, h2.__e = false, P2 = l.__r, A2 = 0, S2) {
        for (h2.state = h2.__s, h2.__d = false, P2 && P2(t2), a2 = h2.render(h2.props, h2.state, h2.context), H = 0; H < h2._sb.length; H++) h2.__h.push(h2._sb[H]);
        h2._sb = [];
      } else do {
        h2.__d = false, P2 && P2(t2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
      } while (h2.__d && ++A2 < 25);
      h2.state = h2.__s, null != h2.getChildContext && (i3 = w(w({}, i3), h2.getChildContext())), S2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(v2, y2)), L2 = a2, null != a2 && a2.type === k && null == a2.key && (L2 = N(a2.props.children)), f3 = I(n2, d(L2) ? L2 : [L2], t2, u3, i3, r2, o2, e2, f3, c2, s2), h2.base = t2.__e, t2.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
    } catch (n3) {
      if (t2.__v = null, c2 || null != o2) if (n3.then) {
        for (t2.__u |= c2 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
        o2[o2.indexOf(f3)] = null, t2.__e = f3;
      } else for (T2 = o2.length; T2--; ) g(o2[T2]);
      else t2.__e = u3.__e, t2.__k = u3.__k;
      l.__e(n3, t2, u3);
    }
    else null == o2 && t2.__v == u3.__v ? (t2.__k = u3.__k, t2.__e = u3.__e) : f3 = t2.__e = V(u3.__e, t2, u3, i3, r2, o2, e2, c2, s2);
    return (a2 = l.diffed) && a2(t2), 128 & t2.__u ? void 0 : f3;
  }
  function z(n2, t2, u3) {
    for (var i3 = 0; i3 < u3.length; i3++) q(u3[i3], u3[++i3], u3[++i3]);
    l.__c && l.__c(t2, n2), n2.some(function(t3) {
      try {
        n2 = t3.__h, t3.__h = [], n2.some(function(n3) {
          n3.call(t3);
        });
      } catch (n3) {
        l.__e(n3, t3.__v);
      }
    });
  }
  function N(n2) {
    return "object" != typeof n2 || null == n2 ? n2 : d(n2) ? n2.map(N) : w({}, n2);
  }
  function V(t2, u3, i3, r2, o2, e2, f3, c2, s2) {
    var a2, h2, v2, y2, w2, _2, m2, b = i3.props, k2 = u3.props, x2 = u3.type;
    if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
      for (a2 = 0; a2 < e2.length; a2++) if ((w2 = e2[a2]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : 3 == w2.nodeType)) {
        t2 = w2, e2[a2] = null;
        break;
      }
    }
    if (null == t2) {
      if (null == x2) return document.createTextNode(k2);
      t2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(u3, e2), c2 = false), e2 = null;
    }
    if (null === x2) b === k2 || c2 && t2.data === k2 || (t2.data = k2);
    else {
      if (e2 = e2 && n.call(t2.childNodes), b = i3.props || p, !c2 && null != e2) for (b = {}, a2 = 0; a2 < t2.attributes.length; a2++) b[(w2 = t2.attributes[a2]).name] = w2.value;
      for (a2 in b) if (w2 = b[a2], "children" == a2) ;
      else if ("dangerouslySetInnerHTML" == a2) v2 = w2;
      else if (!(a2 in k2)) {
        if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
        j(t2, a2, null, w2, o2);
      }
      for (a2 in k2) w2 = k2[a2], "children" == a2 ? y2 = w2 : "dangerouslySetInnerHTML" == a2 ? h2 = w2 : "value" == a2 ? _2 = w2 : "checked" == a2 ? m2 = w2 : c2 && "function" != typeof w2 || b[a2] === w2 || j(t2, a2, w2, b[a2], o2);
      if (h2) c2 || v2 && (h2.__html === v2.__html || h2.__html === t2.innerHTML) || (t2.innerHTML = h2.__html), u3.__k = [];
      else if (v2 && (t2.innerHTML = ""), I("template" === u3.type ? t2.content : t2, d(y2) ? y2 : [y2], u3, i3, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f3, e2 ? e2[0] : i3.__k && S(i3, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) g(e2[a2]);
      c2 || (a2 = "value", "progress" == x2 && null == _2 ? t2.removeAttribute("value") : void 0 !== _2 && (_2 !== t2[a2] || "progress" == x2 && !_2 || "option" == x2 && _2 !== b[a2]) && j(t2, a2, _2, b[a2], o2), a2 = "checked", void 0 !== m2 && m2 !== t2[a2] && j(t2, a2, m2, b[a2], o2));
    }
    return t2;
  }
  function q(n2, t2, u3) {
    try {
      if ("function" == typeof n2) {
        var i3 = "function" == typeof n2.__u;
        i3 && n2.__u(), i3 && null == t2 || (n2.__u = n2(t2));
      } else n2.current = t2;
    } catch (n3) {
      l.__e(n3, u3);
    }
  }
  function B(n2, t2, u3) {
    var i3, r2;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || q(i3, null, t2)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount) try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, t2);
      }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k) for (r2 = 0; r2 < i3.length; r2++) i3[r2] && B(i3[r2], t2, u3 || "function" != typeof n2.type);
    u3 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function D(n2, l2, t2) {
    return this.constructor(n2, t2);
  }
  function E(t2, u3, i3) {
    var r2, o2, e2, f3;
    u3 == document && (u3 = document.documentElement), l.__ && l.__(t2, u3), o2 = (r2 = "function" == typeof i3) ? null : i3 && i3.__k || u3.__k, e2 = [], f3 = [], O(u3, t2 = (!r2 && i3 || u3).__k = _(k, null, [t2]), o2 || p, p, u3.namespaceURI, !r2 && i3 ? [i3] : o2 ? null : u3.firstChild ? n.call(u3.childNodes) : null, e2, !r2 && i3 ? i3 : o2 ? o2.__e : u3.firstChild, r2, f3), z(e2, t2, f3);
  }
  n = v.slice, l = { __e: function(n2, l2, t2, u3) {
    for (var i3, r2, o2; l2 = l2.__; ) if ((i3 = l2.__c) && !i3.__) try {
      if ((r2 = i3.constructor) && null != r2.getDerivedStateFromError && (i3.setState(r2.getDerivedStateFromError(n2)), o2 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, u3 || {}), o2 = i3.__d), o2) return i3.__E = i3;
    } catch (l3) {
      n2 = l3;
    }
    throw n2;
  } }, t = 0, u = function(n2) {
    return null != n2 && null == n2.constructor;
  }, x.prototype.setState = function(n2, l2) {
    var t2;
    t2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, t2), this.props)), n2 && w(t2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
  }, x.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f2 = 0;
  var i2 = Array.isArray;
  function u2(e2, t2, n2, o2, i3, u3) {
    t2 || (t2 = {});
    var a2, c2, p2 = t2;
    if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
    var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i3, __self: u3 };
    if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
    return l.vnode && l.vnode(l2), l2;
  }

  // Components/NavMenu.tsx
  var NavMenu = () => {
    return /* @__PURE__ */ u2("nav", { className: "bg-white shadow", children: /* @__PURE__ */ u2("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ u2("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ u2("div", { className: "flex", children: [
        /* @__PURE__ */ u2("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ u2("span", { className: "text-gray-900 font-bold text-lg", children: "Logo" }) }),
        /* @__PURE__ */ u2("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ u2("a", { href: "/", "data-native": true, className: `${location.pathname === "/" ? "border-b-2 border-gray-500 text-gray-900" : "border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"} inline-flex items-center px-1 pt-1 font-medium`, children: "Home" }),
          /* @__PURE__ */ u2("a", { href: "/profile", "data-native": true, className: `${location.pathname.includes("/profile") ? "border-b-2 border-gray-500 text-gray-900" : "border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"} inline-flex items-center px-1 pt-1 font-medium`, children: "Profile" }),
          /* @__PURE__ */ u2("a", { href: "/clientroute", "data-native": true, className: `${location.pathname.includes("/clientroute") ? "border-b-2 border-gray-500 text-gray-900" : "border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"} inline-flex items-center px-1 pt-1 font-medium`, children: "ClientRoute" })
        ] })
      ] }),
      /* @__PURE__ */ u2("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ u2("button", { className: "bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium", children: "Sign In" }) }),
      /* @__PURE__ */ u2("div", { className: "flex items-center sm:hidden", children: /* @__PURE__ */ u2("button", { className: "inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500", children: [
        /* @__PURE__ */ u2("span", { className: "sr-only", children: "Open main menu" }),
        /* @__PURE__ */ u2("svg", { className: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ u2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
      ] }) })
    ] }) }) });
  };

  // Components/Layout.tsx
  var Layout = ({
    mainContent,
    subTabs
  }) => {
    return /* @__PURE__ */ u2(k, { children: /* @__PURE__ */ u2("div", { className: "flex flex-col h-screen", children: [
      /* @__PURE__ */ u2(NavMenu, {}),
      subTabs && /* @__PURE__ */ u2("div", { className: "w-full border-b border-gray-200", children: /* @__PURE__ */ u2("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ u2("nav", { className: "flex space-x-8", children: subTabs }) }) }),
      /* @__PURE__ */ u2("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ u2("div", { className: "min-h-screen bg-gray-100", children: /* @__PURE__ */ u2("div", { className: "py-6", children: mainContent }) }) })
    ] }) });
  };

  // Pages/Dashboard/Dashboard.tsx
  E(/* @__PURE__ */ u2(Dashboard, {}), document.getElementById("Pages/Dashboard/Dashboard"));
  function Dashboard() {
    return /* @__PURE__ */ u2(Layout, { children: [
      /* @__PURE__ */ u2("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ u2("h1", { className: "text-3xl font-bold text-gray-900", children: "Dashboard" }) }),
      /* @__PURE__ */ u2("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ u2("div", { className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: [
          /* @__PURE__ */ u2("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ u2("div", { className: "px-4 py-5 sm:p-6", children: [
            /* @__PURE__ */ u2("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Total Users" }),
            /* @__PURE__ */ u2("dd", { className: "mt-1 text-3xl font-semibold text-gray-900", children: "12,345" })
          ] }) }),
          /* @__PURE__ */ u2("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ u2("div", { className: "px-4 py-5 sm:p-6", children: [
            /* @__PURE__ */ u2("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Revenue" }),
            /* @__PURE__ */ u2("dd", { className: "mt-1 text-3xl font-semibold text-gray-900", children: "$45,678" })
          ] }) }),
          /* @__PURE__ */ u2("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ u2("div", { className: "px-4 py-5 sm:p-6", children: [
            /* @__PURE__ */ u2("dt", { className: "text-sm font-medium text-gray-500 truncate", children: "Conversion Rate" }),
            /* @__PURE__ */ u2("dd", { className: "mt-1 text-3xl font-semibold text-gray-900", children: "24.57%" })
          ] }) })
        ] }),
        /* @__PURE__ */ u2("div", { className: "mt-8", children: /* @__PURE__ */ u2("div", { className: "bg-white shadow rounded-lg", children: [
          /* @__PURE__ */ u2("div", { className: "px-4 py-5 border-b border-gray-200 sm:px-6", children: /* @__PURE__ */ u2("h3", { className: "text-lg leading-6 font-medium text-gray-900", children: "Recent Activity" }) }),
          /* @__PURE__ */ u2("ul", { className: "divide-y divide-gray-200", children: [
            /* @__PURE__ */ u2("li", { className: "px-4 py-4 sm:px-6", children: "Activity item 1" }),
            /* @__PURE__ */ u2("li", { className: "px-4 py-4 sm:px-6", children: "Activity item 2" }),
            /* @__PURE__ */ u2("li", { className: "px-4 py-4 sm:px-6", children: "Activity item 3" })
          ] })
        ] }) })
      ] })
    ] });
  }
})();
//# sourceMappingURL=Dashboard.js.map
