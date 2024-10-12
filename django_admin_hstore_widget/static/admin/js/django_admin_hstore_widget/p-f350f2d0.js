const e = 'django-hstore-widget';
const t = {
    allRenderFn: true,
    appendChildSlotFix: false,
    asyncLoading: true,
    asyncQueue: false,
    attachStyles: true,
    cloneNodeFix: false,
    cmpDidLoad: false,
    cmpDidRender: false,
    cmpDidUnload: false,
    cmpDidUpdate: false,
    cmpShouldUpdate: false,
    cmpWillLoad: false,
    cmpWillRender: false,
    cmpWillUpdate: false,
    connectedCallback: true,
    constructableCSS: true,
    cssAnnotations: true,
    devTools: false,
    disconnectedCallback: false,
    element: false,
    event: false,
    experimentalScopedSlotChanges: false,
    experimentalSlotFixes: false,
    formAssociated: false,
    hasRenderFn: true,
    hostListener: false,
    hostListenerTarget: false,
    hostListenerTargetBody: false,
    hostListenerTargetDocument: false,
    hostListenerTargetParent: false,
    hostListenerTargetWindow: false,
    hotModuleReplacement: false,
    hydrateClientSide: false,
    hydrateServerSide: false,
    hydratedAttribute: false,
    hydratedClass: true,
    hydratedSelectorName: 'hydrated',
    initializeNextTick: false,
    invisiblePrehydration: true,
    isDebug: false,
    isDev: false,
    isTesting: false,
    lazyLoad: true,
    lifecycle: false,
    lifecycleDOMEvents: false,
    member: true,
    method: false,
    mode: false,
    observeAttribute: true,
    profile: false,
    prop: true,
    propBoolean: false,
    propMutable: false,
    propNumber: false,
    propString: true,
    reflect: false,
    scoped: false,
    scopedSlotTextContentFix: false,
    scriptDataOpts: false,
    shadowDelegatesFocus: false,
    shadowDom: false,
    slot: false,
    slotChildNodesFix: false,
    slotRelocation: false,
    state: true,
    style: true,
    svg: false,
    taskQueue: true,
    transformTagName: false,
    updatable: true,
    vdomAttribute: true,
    vdomClass: true,
    vdomFunctional: true,
    vdomKey: true,
    vdomListener: true,
    vdomPropOrAttr: true,
    vdomRef: false,
    vdomRender: true,
    vdomStyle: false,
    vdomText: true,
    vdomXlink: false,
    watchCallback: false,
};
var n = Object.defineProperty;
var l = (e, t) => {
    for (var l in t) n(e, l, { get: t[l], enumerable: true });
};
var s = new WeakMap();
var r = (e) => s.get(e);
var a = (e, t) => s.set((t.t = e), t);
var o = (e, t) => {
    const n = { l: 0, $hostElement$: e, o: t, i: new Map() };
    {
        n.u = new Promise((e) => (n.v = e));
        e['s-p'] = [];
        e['s-rc'] = [];
    }
    return s.set(e, n);
};
var i = (e, t) => t in e;
var f = (e, t) => (0, console.error)(e, t);
var c = new Map();
var u = (e, t, n) => {
    const l = e.h.replace(/-/g, '_');
    const s = e.p;
    if (!s) {
        return void 0;
    }
    const r = c.get(s);
    if (r) {
        return r[l];
    }
    /*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return import(
        `./${s}.entry.js${''}`
    ).then((e) => {
        {
            c.set(s, e);
        }
        return e[l];
    }, f);
};
var v = new Map();
var d = '{visibility:hidden}.hydrated{visibility:inherit}';
var h = 'slot-fb{display:contents}slot-fb[hidden]{display:none}';
var p = typeof window !== 'undefined' ? window : {};
var m = p.document || { head: {} };
var y = {
    l: 0,
    m: '',
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, l) => e.addEventListener(t, n, l),
    rel: (e, t, n, l) => e.removeEventListener(t, n, l),
    ce: (e, t) => new CustomEvent(e, t),
};
var b = t.shadowDom;
var w = (e) => Promise.resolve(e);
var S = (() => {
    try {
        new CSSStyleSheet();
        return typeof new CSSStyleSheet().replaceSync === 'function';
    } catch (e) {}
    return false;
})();
var g = false;
var $ = [];
var k = [];
var C = (e, t) => (n) => {
    e.push(n);
    if (!g) {
        g = true;
        if (t && y.l & 4) {
            O(x);
        } else {
            y.raf(x);
        }
    }
};
var j = (e) => {
    for (let t = 0; t < e.length; t++) {
        try {
            e[t](performance.now());
        } catch (e) {
            f(e);
        }
    }
    e.length = 0;
};
var x = () => {
    j($);
    {
        j(k);
        if ((g = $.length > 0)) {
            y.raf(x);
        }
    }
};
var O = (e) => w().then(e);
var E = C(k, true);
var T = {};
var D = (e) => e != null;
var L = (e) => {
    e = typeof e;
    return e === 'object' || e === 'function';
};
function F(e) {
    var t, n, l;
    return (l =
        (n =
            (t = e.head) == null
                ? void 0
                : t.querySelector('meta[name="csp-nonce"]')) == null
            ? void 0
            : n.getAttribute('content')) != null
        ? l
        : void 0;
}
var M = {};
l(M, {
    err: () => A,
    map: () => P,
    ok: () => R,
    unwrap: () => N,
    unwrapErr: () => U,
});
var R = (e) => ({ isOk: true, isErr: false, value: e });
var A = (e) => ({ isOk: false, isErr: true, value: e });
function P(e, t) {
    if (e.isOk) {
        const n = t(e.value);
        if (n instanceof Promise) {
            return n.then((e) => R(e));
        } else {
            return R(n);
        }
    }
    if (e.isErr) {
        const t = e.value;
        return A(t);
    }
    throw 'should never get here';
}
var N = (e) => {
    if (e.isOk) {
        return e.value;
    } else {
        throw e.value;
    }
};
var U = (e) => {
    if (e.isErr) {
        return e.value;
    } else {
        throw e.value;
    }
};
var W = (e, t = '') => {
    {
        return () => {};
    }
};
var H = (e, t) => {
    {
        return () => {};
    }
};
var z = (e, t, ...n) => {
    let l = null;
    let s = null;
    let r = false;
    let a = false;
    const o = [];
    const i = (t) => {
        for (let n = 0; n < t.length; n++) {
            l = t[n];
            if (Array.isArray(l)) {
                i(l);
            } else if (l != null && typeof l !== 'boolean') {
                if ((r = typeof e !== 'function' && !L(l))) {
                    l = String(l);
                }
                if (r && a) {
                    o[o.length - 1].S += l;
                } else {
                    o.push(r ? B(null, l) : l);
                }
                a = r;
            }
        }
    };
    i(n);
    if (t) {
        if (t.key) {
            s = t.key;
        }
        {
            const e = t.className || t.class;
            if (e) {
                t.class =
                    typeof e !== 'object'
                        ? e
                        : Object.keys(e)
                              .filter((t) => e[t])
                              .join(' ');
            }
        }
    }
    if (typeof e === 'function') {
        return e(t === null ? {} : t, o, G);
    }
    const f = B(e, null);
    f.$ = t;
    if (o.length > 0) {
        f.k = o;
    }
    {
        f.C = s;
    }
    return f;
};
var B = (e, t) => {
    const n = { l: 0, j: e, S: t, O: null, k: null };
    {
        n.$ = null;
    }
    {
        n.C = null;
    }
    return n;
};
var Q = {};
var q = (e) => e && e.j === Q;
var G = {
    forEach: (e, t) => e.map(I).forEach(t),
    map: (e, t) => e.map(I).map(t).map(K),
};
var I = (e) => ({
    vattrs: e.$,
    vchildren: e.k,
    vkey: e.C,
    vname: e.T,
    vtag: e.j,
    vtext: e.S,
});
var K = (e) => {
    if (typeof e.vtag === 'function') {
        const t = { ...e.vattrs };
        if (e.vkey) {
            t.key = e.vkey;
        }
        if (e.vname) {
            t.name = e.vname;
        }
        return z(e.vtag, t, ...(e.vchildren || []));
    }
    const t = B(e.vtag, e.vtext);
    t.$ = e.vattrs;
    t.k = e.vchildren;
    t.C = e.vkey;
    t.T = e.vname;
    return t;
};
var V = (e, t) => {
    if (e != null && !L(e)) {
        if (t & 1) {
            return String(e);
        }
        return e;
    }
    return e;
};
var X = (e, t, n) => {
    const l = y.ce(t, n);
    e.dispatchEvent(l);
    return l;
};
var _ = new WeakMap();
var J = (e, t, n) => {
    let l = v.get(e);
    if (S && n) {
        l = l || new CSSStyleSheet();
        if (typeof l === 'string') {
            l = t;
        } else {
            l.replaceSync(t);
        }
    } else {
        l = t;
    }
    v.set(e, l);
};
var Y = (e, t, n) => {
    var l;
    const s = ee(t);
    const r = v.get(s);
    e = e.nodeType === 11 ? e : m;
    if (r) {
        if (typeof r === 'string') {
            e = e.head || e;
            let n = _.get(e);
            let a;
            if (!n) {
                _.set(e, (n = new Set()));
            }
            if (!n.has(s)) {
                {
                    a = m.createElement('style');
                    a.innerHTML = r;
                    const n = (l = y.D) != null ? l : F(m);
                    if (n != null) {
                        a.setAttribute('nonce', n);
                    }
                    if (!(t.l & 1)) {
                        if (e.nodeName === 'HEAD') {
                            const t = e.querySelectorAll(
                                'link[rel=preconnect]'
                            );
                            const n =
                                t.length > 0
                                    ? t[t.length - 1].nextSibling
                                    : e.querySelector('style');
                            e.insertBefore(a, n);
                        } else if ('host' in e) {
                            const t = e.querySelector('style');
                            if (t) {
                                t.innerHTML = r + t.innerHTML;
                            } else {
                                e.prepend(a);
                            }
                        } else {
                            e.append(a);
                        }
                    }
                    if (t.l & 1 && e.nodeName !== 'HEAD') {
                        e.insertBefore(a, null);
                    }
                }
                if (t.l & 4) {
                    a.innerHTML += h;
                }
                if (n) {
                    n.add(s);
                }
            }
        } else if (!e.adoptedStyleSheets.includes(r)) {
            e.adoptedStyleSheets = [...e.adoptedStyleSheets, r];
        }
    }
    return s;
};
var Z = (e) => {
    const t = e.o;
    const n = e.$hostElement$;
    const l = W('attachStyles', t.h);
    Y(n.getRootNode(), t);
    l();
};
var ee = (e, t) => 'sc-' + e.h;
var te = (e, t, n, l, s, r) => {
    if (n !== l) {
        let a = i(e, t);
        let o = t.toLowerCase();
        if (t === 'class') {
            const t = e.classList;
            const s = le(n);
            const r = le(l);
            t.remove(...s.filter((e) => e && !r.includes(e)));
            t.add(...r.filter((e) => e && !s.includes(e)));
        } else if (t === 'key');
        else if (!a && t[0] === 'o' && t[1] === 'n') {
            if (t[2] === '-') {
                t = t.slice(3);
            } else if (i(p, o)) {
                t = o.slice(2);
            } else {
                t = o[2] + t.slice(3);
            }
            if (n || l) {
                const s = t.endsWith(se);
                t = t.replace(re, '');
                if (n) {
                    y.rel(e, t, n, s);
                }
                if (l) {
                    y.ael(e, t, l, s);
                }
            }
        } else {
            const o = L(l);
            if ((a || (o && l !== null)) && !s) {
                try {
                    if (!e.tagName.includes('-')) {
                        const s = l == null ? '' : l;
                        if (t === 'list') {
                            a = false;
                        } else if (n == null || e[t] != s) {
                            if (typeof e.__lookupSetter__(t) === 'function') {
                                e[t] = s;
                            } else {
                                e.setAttribute(t, s);
                            }
                        }
                    } else {
                        e[t] = l;
                    }
                } catch (e) {}
            }
            if (l == null || l === false) {
                if (l !== false || e.getAttribute(t) === '') {
                    {
                        e.removeAttribute(t);
                    }
                }
            } else if ((!a || r & 4 || s) && !o) {
                l = l === true ? '' : l;
                {
                    e.setAttribute(t, l);
                }
            }
        }
    }
};
var ne = /\s/;
var le = (e) => (!e ? [] : e.split(ne));
var se = 'Capture';
var re = new RegExp(se + '$');
var ae = (e, t, n) => {
    const l = t.O.nodeType === 11 && t.O.host ? t.O.host : t.O;
    const s = (e && e.$) || T;
    const r = t.$ || T;
    {
        for (const e of oe(Object.keys(s))) {
            if (!(e in r)) {
                te(l, e, s[e], void 0, n, t.l);
            }
        }
    }
    for (const e of oe(Object.keys(r))) {
        te(l, e, s[e], r[e], n, t.l);
    }
};
function oe(e) {
    return e.includes('ref') ? [...e.filter((e) => e !== 'ref'), 'ref'] : e;
}
var ie;
var fe;
var ce = false;
var ue = false;
var ve = (e, n, l, s) => {
    const r = n.k[l];
    let a = 0;
    let o;
    let i;
    if (r.S !== null) {
        o = r.O = m.createTextNode(r.S);
    } else {
        o = r.O = m.createElement(
            !ce && t.slotRelocation && r.l & 2 ? 'slot-fb' : r.j
        );
        {
            ae(null, r, ue);
        }
        const n = o.getRootNode();
        const l = !n.querySelector('body');
        if (!l && t.scoped && D(ie) && o['s-si'] !== ie) {
            o.classList.add((o['s-si'] = ie));
        }
        if (r.k) {
            for (a = 0; a < r.k.length; ++a) {
                i = ve(e, r, a);
                if (i) {
                    o.appendChild(i);
                }
            }
        }
    }
    o['s-hn'] = fe;
    return o;
};
var de = (e, t, n, l, s, r) => {
    let a = e;
    let o;
    for (; s <= r; ++s) {
        if (l[s]) {
            o = ve(null, n, s);
            if (o) {
                l[s].O = o;
                be(a, o, t);
            }
        }
    }
};
var he = (e, t, n) => {
    for (let l = t; l <= n; ++l) {
        const t = e[l];
        if (t) {
            const e = t.O;
            if (e) {
                e.remove();
            }
        }
    }
};
var pe = (e, t, n, l, s = false) => {
    let r = 0;
    let a = 0;
    let o = 0;
    let i = 0;
    let f = t.length - 1;
    let c = t[0];
    let u = t[f];
    let v = l.length - 1;
    let d = l[0];
    let h = l[v];
    let p;
    let m;
    while (r <= f && a <= v) {
        if (c == null) {
            c = t[++r];
        } else if (u == null) {
            u = t[--f];
        } else if (d == null) {
            d = l[++a];
        } else if (h == null) {
            h = l[--v];
        } else if (me(c, d, s)) {
            ye(c, d, s);
            c = t[++r];
            d = l[++a];
        } else if (me(u, h, s)) {
            ye(u, h, s);
            u = t[--f];
            h = l[--v];
        } else if (me(c, h, s)) {
            ye(c, h, s);
            be(e, c.O, u.O.nextSibling);
            c = t[++r];
            h = l[--v];
        } else if (me(u, d, s)) {
            ye(u, d, s);
            be(e, u.O, c.O);
            u = t[--f];
            d = l[++a];
        } else {
            o = -1;
            {
                for (i = r; i <= f; ++i) {
                    if (t[i] && t[i].C !== null && t[i].C === d.C) {
                        o = i;
                        break;
                    }
                }
            }
            if (o >= 0) {
                m = t[o];
                if (m.j !== d.j) {
                    p = ve(t && t[a], n, o);
                } else {
                    ye(m, d, s);
                    t[o] = void 0;
                    p = m.O;
                }
                d = l[++a];
            } else {
                p = ve(t && t[a], n, a);
                d = l[++a];
            }
            if (p) {
                {
                    be(c.O.parentNode, p, c.O);
                }
            }
        }
    }
    if (r > f) {
        de(e, l[v + 1] == null ? null : l[v + 1].O, n, l, a, v);
    } else if (a > v) {
        he(t, r, f);
    }
};
var me = (e, t, n = false) => {
    if (e.j === t.j) {
        if (!n) {
            return e.C === t.C;
        }
        return true;
    }
    return false;
};
var ye = (e, n, l = false) => {
    const s = (n.O = e.O);
    const r = e.k;
    const a = n.k;
    const o = n.S;
    if (o === null) {
        {
            {
                ae(e, n, ue);
            }
        }
        if (r !== null && a !== null) {
            pe(s, r, n, a, l);
        } else if (a !== null) {
            if (e.S !== null) {
                s.textContent = '';
            }
            de(s, null, n, a, 0, a.length - 1);
        } else if (!l && t.updatable && r !== null) {
            he(r, 0, r.length - 1);
        }
    } else if (e.S !== o) {
        s.data = o;
    }
};
var be = (e, t, n) => {
    const l = e == null ? void 0 : e.insertBefore(t, n);
    return l;
};
var we = (e, t, n = false) => {
    const l = e.$hostElement$;
    const s = e.L || B(null, null);
    const r = q(t) ? t : z(null, null, t);
    fe = l.tagName;
    if (n && r.$) {
        for (const e of Object.keys(r.$)) {
            if (
                l.hasAttribute(e) &&
                !['key', 'ref', 'style', 'class'].includes(e)
            ) {
                r.$[e] = l[e];
            }
        }
    }
    r.j = null;
    r.l |= 4;
    e.L = r;
    r.O = s.O = l;
    ce = b;
    ye(s, r, n);
};
var Se = (e, t) => {
    if (t && !e.F && t['s-p']) {
        t['s-p'].push(new Promise((t) => (e.F = t)));
    }
};
var ge = (e, t) => {
    {
        e.l |= 16;
    }
    if (e.l & 4) {
        e.l |= 512;
        return;
    }
    Se(e, e.M);
    const n = () => $e(e, t);
    return E(n);
};
var $e = (e, t) => {
    const n = e.$hostElement$;
    const l = W('scheduleUpdate', e.o.h);
    const s = e.t;
    if (!s) {
        throw new Error(
            `Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
        );
    }
    let r;
    l();
    return ke(r, () => je(e, s, t));
};
var ke = (e, t) =>
    Ce(e)
        ? e.then(t).catch((e) => {
              console.error(e);
              t();
          })
        : t();
var Ce = (e) =>
    e instanceof Promise || (e && e.then && typeof e.then === 'function');
var je = async (e, t, n) => {
    var l;
    const s = e.$hostElement$;
    const r = W('update', e.o.h);
    const a = s['s-rc'];
    if (n) {
        Z(e);
    }
    const o = W('render', e.o.h);
    {
        xe(e, t, s, n);
    }
    if (a) {
        a.map((e) => e());
        s['s-rc'] = void 0;
    }
    o();
    r();
    {
        const t = (l = s['s-p']) != null ? l : [];
        const n = () => Oe(e);
        if (t.length === 0) {
            n();
        } else {
            Promise.all(t).then(n);
            e.l |= 4;
            t.length = 0;
        }
    }
};
var xe = (e, t, n, l) => {
    try {
        t = t.render();
        {
            e.l &= ~16;
        }
        {
            e.l |= 2;
        }
        {
            {
                {
                    we(e, t, l);
                }
            }
        }
    } catch (t) {
        f(t, e.$hostElement$);
    }
    return null;
};
var Oe = (e) => {
    const t = e.o.h;
    const n = e.$hostElement$;
    const l = W('postUpdate', t);
    const s = e.M;
    if (!(e.l & 64)) {
        e.l |= 64;
        {
            De(n);
        }
        l();
        {
            e.v(n);
            if (!s) {
                Ee();
            }
        }
    } else {
        l();
    }
    {
        if (e.F) {
            e.F();
            e.F = void 0;
        }
        if (e.l & 512) {
            O(() => ge(e, false));
        }
        e.l &= ~(4 | 512);
    }
};
var Ee = (t) => {
    {
        De(m.documentElement);
    }
    O(() => X(p, 'appload', { detail: { namespace: e } }));
};
var Te = (e, t, n) => {
    if (e && e[t]) {
        try {
            return e[t](n);
        } catch (e) {
            f(e);
        }
    }
    return void 0;
};
var De = (e) => {
    var n;
    return e.classList.add(
        (n = t.hydratedSelectorName) != null ? n : 'hydrated'
    );
};
var Le = (e, t) => r(e).i.get(t);
var Fe = (e, t, n, l) => {
    const s = r(e);
    if (!s) {
        throw new Error(
            `Couldn't find host element for "${l.h}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`
        );
    }
    const a = s.i.get(t);
    const o = s.l;
    const i = s.t;
    n = V(n, l.R[t][0]);
    const f = Number.isNaN(a) && Number.isNaN(n);
    const c = n !== a && !f;
    if ((!(o & 8) || a === void 0) && c) {
        s.i.set(t, n);
        if (i) {
            if ((o & (2 | 16)) === 2) {
                ge(s, false);
            }
        }
    }
};
var Me = (e, n, l) => {
    var s, a;
    const o = e.prototype;
    if (n.R || t.watchCallback) {
        const t = Object.entries((s = n.R) != null ? s : {});
        t.map(([e, [t]]) => {
            if (t & 31 || (l & 2 && t & 32)) {
                Object.defineProperty(o, e, {
                    get() {
                        return Le(this, e);
                    },
                    set(t) {
                        Fe(this, e, t, n);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
        });
        if (l & 1) {
            const l = new Map();
            o.attributeChangedCallback = function (e, t, s) {
                y.jmp(() => {
                    var a;
                    const i = l.get(e);
                    if (this.hasOwnProperty(i)) {
                        s = this[i];
                        delete this[i];
                    } else if (
                        o.hasOwnProperty(i) &&
                        typeof this[i] === 'number' &&
                        this[i] == s
                    ) {
                        return;
                    } else if (i == null) {
                        const l = r(this);
                        const o = l == null ? void 0 : l.l;
                        if (o && !(o & 8) && o & 128 && s !== t) {
                            const r = l.t;
                            const o = (a = n.A) == null ? void 0 : a[e];
                            o == null
                                ? void 0
                                : o.forEach((n) => {
                                      if (r[n] != null) {
                                          r[n].call(r, s, t, e);
                                      }
                                  });
                        }
                        return;
                    }
                    this[i] =
                        s === null && typeof this[i] === 'boolean' ? false : s;
                });
            };
            e.observedAttributes = Array.from(
                new Set([
                    ...Object.keys((a = n.A) != null ? a : {}),
                    ...t
                        .filter(([e, t]) => t[0] & 15)
                        .map(([e, t]) => {
                            const n = t[1] || e;
                            l.set(n, e);
                            return n;
                        }),
                ])
            );
        }
    }
    return e;
};
var Re = async (e, t, n, l) => {
    let s;
    if ((t.l & 32) === 0) {
        t.l |= 32;
        const l = n.p;
        if (l) {
            const e = u(n);
            if (e && 'then' in e) {
                const t = H();
                s = await e;
                t();
            } else {
                s = e;
            }
            if (!s) {
                throw new Error(
                    `Constructor for "${n.h}#${t.P}" was not found`
                );
            }
            if (!s.isProxied) {
                Me(s, n, 2);
                s.isProxied = true;
            }
            const l = W('createInstance', n.h);
            {
                t.l |= 8;
            }
            try {
                new s(t);
            } catch (e) {
                f(e);
            }
            {
                t.l &= ~8;
            }
            l();
            Ae(t.t);
        } else {
            s = e.constructor;
            const n = e.localName;
            customElements.whenDefined(n).then(() => (t.l |= 128));
        }
        if (s && s.style) {
            let e;
            if (typeof s.style === 'string') {
                e = s.style;
            }
            const t = ee(n);
            if (!v.has(t)) {
                const l = W('registerStyles', n.h);
                J(t, e, !!(n.l & 1));
                l();
            }
        }
    }
    const r = t.M;
    const a = () => ge(t, true);
    if (r && r['s-rc']) {
        r['s-rc'].push(a);
    } else {
        a();
    }
};
var Ae = (e) => {
    {
        Te(e, 'connectedCallback');
    }
};
var Pe = (e) => {
    if ((y.l & 1) === 0) {
        const t = r(e);
        const n = t.o;
        const l = W('connectedCallback', n.h);
        if (!(t.l & 1)) {
            t.l |= 1;
            {
                let n = e;
                while ((n = n.parentNode || n.host)) {
                    if (n['s-p']) {
                        Se(t, (t.M = n));
                        break;
                    }
                }
            }
            if (n.R) {
                Object.entries(n.R).map(([t, [n]]) => {
                    if (n & 31 && e.hasOwnProperty(t)) {
                        const n = e[t];
                        delete e[t];
                        e[t] = n;
                    }
                });
            }
            {
                Re(e, t, n);
            }
        } else {
            if (t == null ? void 0 : t.t) {
                Ae(t.t);
            } else if (t == null ? void 0 : t.u) {
                t.u.then(() => Ae(t.t));
            }
        }
        l();
    }
};
var Ne = (e) => {};
var Ue = async (e) => {
    if ((y.l & 1) === 0) {
        const t = r(e);
        if (t == null ? void 0 : t.t);
        else if (t == null ? void 0 : t.u) {
            t.u.then(() => Ne());
        }
    }
};
var We = (e, t = {}) => {
    var n;
    const l = W();
    const s = [];
    const a = t.exclude || [];
    const i = p.customElements;
    const f = m.head;
    const c = f.querySelector('meta[charset]');
    const u = m.createElement('style');
    const v = [];
    let b;
    let w = true;
    Object.assign(y, t);
    y.m = new URL(t.resourcesUrl || './', m.baseURI).href;
    let S = false;
    e.map((e) => {
        e[1].map((t) => {
            const n = { l: t[0], h: t[1], R: t[2], N: t[3] };
            if (n.l & 4) {
                S = true;
            }
            {
                n.R = t[2];
            }
            const l = n.h;
            const f = class extends HTMLElement {
                constructor(e) {
                    super(e);
                    this.hasRegisteredEventListeners = false;
                    e = this;
                    o(e, n);
                }
                connectedCallback() {
                    r(this);
                    if (!this.hasRegisteredEventListeners) {
                        this.hasRegisteredEventListeners = true;
                    }
                    if (b) {
                        clearTimeout(b);
                        b = null;
                    }
                    if (w) {
                        v.push(this);
                    } else {
                        y.jmp(() => Pe(this));
                    }
                }
                disconnectedCallback() {
                    y.jmp(() => Ue(this));
                }
                componentOnReady() {
                    return r(this).u;
                }
            };
            n.p = e[0];
            if (!a.includes(l) && !i.get(l)) {
                s.push(l);
                i.define(l, Me(f, n, 1));
            }
        });
    });
    if (s.length > 0) {
        if (S) {
            u.textContent += h;
        }
        {
            u.textContent += s.sort() + d;
        }
        if (u.innerHTML.length) {
            u.setAttribute('data-styles', '');
            const e = (n = y.D) != null ? n : F(m);
            if (e != null) {
                u.setAttribute('nonce', e);
            }
            f.insertBefore(u, c ? c.nextSibling : f.firstChild);
        }
    }
    w = false;
    if (v.length) {
        v.map((e) => e.connectedCallback());
    } else {
        {
            y.jmp(() => (b = setTimeout(Ee, 30)));
        }
    }
    l();
};
var He = (e, t) => t;
var ze = (e) => (y.D = e);
export { He as F, Q as H, We as b, z as h, w as p, a as r, ze as s };
//# sourceMappingURL=p-f350f2d0.js.map
