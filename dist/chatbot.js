import fe, { useState as wr, StrictMode as Cr } from "react";
import Ne from "react-dom";
var H = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function xr() {
  if ($e) return q;
  $e = 1;
  var n = fe, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(y, l, x) {
    var d, R = {}, A = null, v = null;
    x !== void 0 && (A = "" + x), l.key !== void 0 && (A = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (d in l) E.call(l, d) && !P.hasOwnProperty(d) && (R[d] = l[d]);
    if (y && y.defaultProps) for (d in l = y.defaultProps, l) R[d] === void 0 && (R[d] = l[d]);
    return { $$typeof: o, type: y, key: A, ref: v, props: R, _owner: w.current };
  }
  return q.Fragment = s, q.jsx = k, q.jsxs = k, q;
}
var J = {}, We;
function jr() {
  if (We) return J;
  We = 1;
  var n = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return n.NODE_ENV !== "production" && function() {
    var o = fe, s = Symbol.for("react.element"), E = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), l = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), D = Symbol.iterator, O = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[O];
      return typeof r == "function" ? r : null;
    }
    var _ = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ve("error", e, t);
      }
    }
    function Ve(e, r, t) {
      {
        var a = _.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var f = t.map(function(c) {
          return String(c);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ue = !1, Ze = !1, qe = !1, Je = !1, Be = !1, de;
    de = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === k || Be || e === P || e === d || e === R || Je || e === m || Ue || Ze || qe || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === A || e.$$typeof === y || e.$$typeof === l || e.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case E:
          return "Portal";
        case k:
          return "Profiler";
        case P:
          return "StrictMode";
        case d:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return ve(r) + ".Consumer";
          case y:
            var t = e;
            return ve(t._context) + ".Provider";
          case x:
            return ze(e, e.render, "ForwardRef");
          case A:
            var a = e.displayName || null;
            return a !== null ? a : F(e.type) || "Memo";
          case v: {
            var u = e, f = u._payload, c = u._init;
            try {
              return F(c(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, V = 0, pe, he, ge, ye, me, be, Re;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ge() {
      {
        if (V === 0) {
          pe = console.log, he = console.info, ge = console.warn, ye = console.error, me = console.group, be = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function He() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: pe
            }),
            info: $({}, e, {
              value: he
            }),
            warn: $({}, e, {
              value: ge
            }),
            error: $({}, e, {
              value: ye
            }),
            group: $({}, e, {
              value: me
            }),
            groupCollapsed: $({}, e, {
              value: be
            }),
            groupEnd: $({}, e, {
              value: Re
            })
          });
        }
        V < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = _.ReactCurrentDispatcher, te;
    function B(e, r, t) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            te = a && a[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, K;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Xe();
    }
    function _e(e, r) {
      if (!e || ne)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ne = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = re.current, re.current = null, Ge();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (j) {
              a = j;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (j) {
              a = j;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            a = j;
          }
          e();
        }
      } catch (j) {
        if (j && a && typeof j.stack == "string") {
          for (var i = j.stack.split(`
`), C = a.stack.split(`
`), p = i.length - 1, g = C.length - 1; p >= 1 && g >= 0 && i[p] !== C[g]; )
            g--;
          for (; p >= 1 && g >= 0; p--, g--)
            if (i[p] !== C[g]) {
              if (p !== 1 || g !== 1)
                do
                  if (p--, g--, g < 0 || i[p] !== C[g]) {
                    var S = `
` + i[p].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, S), S;
                  }
                while (p >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = f, He(), Error.prepareStackTrace = u;
      }
      var N = e ? e.displayName || e.name : "", W = N ? B(N) : "";
      return typeof e == "function" && K.set(e, W), W;
    }
    function Qe(e, r, t) {
      return _e(e, !1);
    }
    function er(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, er(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case d:
          return B("Suspense");
        case R:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            return Qe(e.render);
          case A:
            return z(e.type, r, t);
          case v: {
            var a = e, u = a._payload, f = a._init;
            try {
              return z(f(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, we = {}, Ce = _.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function rr(e, r, t, a, u) {
      {
        var f = Function.call.bind(U);
        for (var c in e)
          if (f(e, c)) {
            var i = void 0;
            try {
              if (typeof e[c] != "function") {
                var C = Error((a || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              i = e[c](r, c, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              i = p;
            }
            i && !(i instanceof Error) && (G(u), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, c, typeof i), G(null)), i instanceof Error && !(i.message in we) && (we[i.message] = !0, G(u), h("Failed %s type: %s", t, i.message), G(null));
          }
      }
    }
    var tr = Array.isArray;
    function ae(e) {
      return tr(e);
    }
    function nr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ar(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function je(e) {
      if (ar(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), xe(e);
    }
    var Z = _.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Te, oe;
    oe = {};
    function ir(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function cr(e, r) {
      if (typeof e.ref == "string" && Z.current && r && Z.current.stateNode !== r) {
        var t = F(Z.current.type);
        oe[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Z.current.type), e.ref), oe[t] = !0);
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var fr = function(e, r, t, a, u, f, c) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function dr(e, r, t, a, u) {
      {
        var f, c = {}, i = null, C = null;
        t !== void 0 && (je(t), i = "" + t), sr(r) && (je(r.key), i = "" + r.key), ir(r) && (C = r.ref, cr(r, u));
        for (f in r)
          U.call(r, f) && !or.hasOwnProperty(f) && (c[f] = r[f]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (f in p)
            c[f] === void 0 && (c[f] = p[f]);
        }
        if (i || C) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ur(c, g), C && lr(c, g);
        }
        return fr(e, i, C, u, a, Z.current, c);
      }
    }
    var ie = _.ReactCurrentOwner, Se = _.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Pe() {
      {
        if (ie.current) {
          var e = F(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vr(e) {
      return "";
    }
    var ke = {};
    function pr(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = pr(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ie.current && (a = " It was passed a child from " + F(e._owner.type) + "."), M(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), M(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ce(a) && Ae(a, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = T(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), c; !(c = f.next()).done; )
              ce(c.value) && Ae(c.value, r);
        }
      }
    }
    function hr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === A))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = F(r);
          rr(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var u = F(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            M(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    var Fe = {};
    function Ie(e, r, t, a, u, f) {
      {
        var c = Ke(e);
        if (!c) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = vr();
          C ? i += C : i += Pe();
          var p;
          e === null ? p = "null" : ae(e) ? p = "array" : e !== void 0 && e.$$typeof === s ? (p = "<" + (F(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, i);
        }
        var g = dr(e, r, t, u, f);
        if (g == null)
          return g;
        if (c) {
          var S = r.children;
          if (S !== void 0)
            if (a)
              if (ae(S)) {
                for (var N = 0; N < S.length; N++)
                  De(S[N], e);
                Object.freeze && Object.freeze(S);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(S, e);
        }
        if (U.call(r, "key")) {
          var W = F(e), j = Object.keys(r).filter(function(_r) {
            return _r !== "key";
          }), ue = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fe[W + ue]) {
            var Er = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, W, Er, W), Fe[W + ue] = !0;
          }
        }
        return e === w ? gr(g) : hr(g), g;
      }
    }
    function yr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function mr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var br = mr, Rr = yr;
    J.Fragment = w, J.jsx = br, J.jsxs = Rr;
  }(), J;
}
var Le;
function Or() {
  if (Le) return H.exports;
  Le = 1;
  var n = {};
  return n.NODE_ENV === "production" ? H.exports = xr() : H.exports = jr(), H.exports;
}
var b = Or(), Y = {}, Me;
function Tr() {
  if (Me) return Y;
  Me = 1;
  var n = {}, o = Ne;
  if (n.NODE_ENV === "production")
    Y.createRoot = o.createRoot, Y.hydrateRoot = o.hydrateRoot;
  else {
    var s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Y.createRoot = function(E, w) {
      s.usingClientEntryPoint = !0;
      try {
        return o.createRoot(E, w);
      } finally {
        s.usingClientEntryPoint = !1;
      }
    }, Y.hydrateRoot = function(E, w, P) {
      s.usingClientEntryPoint = !0;
      try {
        return o.hydrateRoot(E, w, P);
      } finally {
        s.usingClientEntryPoint = !1;
      }
    };
  }
  return Y;
}
var Sr = Tr(), Pr = Object.defineProperty, kr = (n, o, s) => o in n ? Pr(n, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[o] = s, X = (n, o, s) => kr(n, typeof o != "symbol" ? o + "" : o, s);
const Ar = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, Dr = {
  stringify: (n) => n.name,
  parse: (n, o, s) => {
    const E = (() => {
      if (typeof window < "u" && n in window)
        return window[n];
      if (typeof global < "u" && n in global)
        return global[n];
    })();
    return typeof E == "function" ? E.bind(s) : void 0;
  }
}, Fr = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
}, Ir = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, $r = {
  stringify: (n) => n,
  parse: (n) => n
}, le = {
  string: $r,
  number: Ir,
  boolean: Ar,
  function: Dr,
  json: Fr
};
function Wr(n) {
  return n.replace(
    /([a-z0-9])([A-Z])/g,
    (o, s, E) => `${s}-${E.toLowerCase()}`
  );
}
const Q = Symbol.for("r2wc.render"), ee = Symbol.for("r2wc.connected"), L = Symbol.for("r2wc.context"), I = Symbol.for("r2wc.props");
function Lr(n, o, s) {
  var E, w, P;
  o.props || (o.props = n.propTypes ? Object.keys(n.propTypes) : []), o.events || (o.events = []);
  const k = Array.isArray(o.props) ? o.props.slice() : Object.keys(o.props), y = Array.isArray(o.events) ? o.events.slice() : Object.keys(o.events), l = {}, x = {}, d = {}, R = {};
  for (const v of k) {
    l[v] = Array.isArray(o.props) ? "string" : o.props[v];
    const m = Wr(v);
    d[v] = m, R[m] = v;
  }
  for (const v of y)
    x[v] = Array.isArray(o.events) ? {} : o.events[v];
  class A extends HTMLElement {
    constructor() {
      super(), X(this, P, !0), X(this, w), X(this, E, {}), X(this, "container"), o.shadow ? this.container = this.attachShadow({
        mode: o.shadow
      }) : this.container = this, this[I].container = this.container;
      for (const m of k) {
        const D = d[m], O = this.getAttribute(D), T = l[m], _ = T ? le[T] : null;
        _ != null && _.parse && O && (this[I][m] = _.parse(O, D, this));
      }
      for (const m of y)
        this[I][m] = (D) => {
          const O = m.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(O, { detail: D, ...x[m] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(R);
    }
    connectedCallback() {
      this[ee] = !0, this[Q]();
    }
    disconnectedCallback() {
      this[ee] = !1, this[L] && s.unmount(this[L]), delete this[L];
    }
    attributeChangedCallback(m, D, O) {
      const T = R[m], _ = l[T], h = _ ? le[_] : null;
      T in l && h != null && h.parse && O && (this[I][T] = h.parse(O, m, this), this[Q]());
    }
    [(P = ee, w = L, E = I, Q)]() {
      this[ee] && (this[L] ? s.update(this[L], this[I]) : this[L] = s.mount(
        this.container,
        n,
        this[I]
      ));
    }
  }
  for (const v of k) {
    const m = d[v], D = l[v];
    Object.defineProperty(A.prototype, v, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[I][v];
      },
      set(O) {
        this[I][v] = O;
        const T = D ? le[D] : null;
        if (T != null && T.stringify) {
          const _ = T.stringify(O, m, this);
          this.getAttribute(m) !== _ && this.setAttribute(m, _);
        } else
          this[Q]();
      }
    });
  }
  return A;
}
function Mr(n, o, s, E = {}) {
  function w(y, l, x) {
    const d = o.createElement(l, x);
    if ("createRoot" in s) {
      const R = s.createRoot(y);
      return R.render(d), {
        container: y,
        root: R,
        ReactComponent: l
      };
    }
    if ("render" in s)
      return s.render(d, y), {
        container: y,
        ReactComponent: l
      };
    throw new Error("Invalid ReactDOM instance provided.");
  }
  function P({ container: y, root: l, ReactComponent: x }, d) {
    const R = o.createElement(x, d);
    if (l) {
      l.render(R);
      return;
    }
    if ("render" in s) {
      s.render(R, y);
      return;
    }
  }
  function k({ container: y, root: l }) {
    if (l) {
      l.unmount();
      return;
    }
    if ("unmountComponentAtNode" in s) {
      s.unmountComponentAtNode(y);
      return;
    }
  }
  return Lr(n, E, { mount: w, unmount: k, update: P });
}
const Ye = () => b.jsxs("div", { style: { padding: "20px", background: "#f0f0f0" }, children: [b.jsx("h2", { children: "Chatbot is Ready!" }), b.jsx("p", { children: "Welcome to our React-based chatbot!" })] }), Nr = Mr(Ye, fe, Ne);
customElements.define("react-chatbot", Nr);
const Yr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", Vr = "/vite.svg";
function Ur() {
  const [n, o] = wr(0);
  return b.jsxs(b.Fragment, { children: [b.jsxs("div", { children: [b.jsx("a", { href: "https://vite.dev", target: "_blank", children: b.jsx("img", { src: Vr, className: "logo", alt: "Vite logo" }) }), b.jsx("a", { href: "https://react.dev", target: "_blank", children: b.jsx("img", { src: Yr, className: "logo react", alt: "React logo" }) })] }), b.jsx("h1", { children: "Vite + React" }), b.jsxs("div", { className: "card", children: [b.jsxs("button", { onClick: () => o((s) => s + 1), children: ["count is ", n] }), b.jsxs("p", { children: ["Edit ", b.jsx("code", { children: "src/App.tsx" }), " and save to test HMR"] })] }), b.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })] });
}
Sr.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ b.jsxs(Cr, { children: [
    /* @__PURE__ */ b.jsx(Ur, {}),
    /* @__PURE__ */ b.jsx(Ye, {})
  ] })
);
