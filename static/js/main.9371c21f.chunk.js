(this.webpackJsonpfinder = this.webpackJsonpfinder || []).push([
  [0],
  {
    73: function (e, t, n) {},
    74: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(8),
        c = n.n(o),
        i = n(7),
        l = n(5),
        s = n(12),
        p = n.n(s);
      p.a.defaults.baseURL = 'https://pixabay.com/api';
      var d = function (e) {
          var t = e.searchQuery,
            n = void 0 === t ? '' : t,
            a = e.currentPage,
            r = void 0 === a ? 1 : a,
            o = e.perPage,
            c = void 0 === o ? 9 : o;
          return p.a
            .get(
              '/?q='
                .concat(n, '&page=')
                .concat(r, '&key=')
                .concat(
                  '20359490-f2da25da5356f05e90d2084aa',
                  '&image_type=photo&orientation=horizontal&per_page=',
                )
                .concat(c),
            )
            .then(function (e) {
              return e.data.hits;
            });
        },
        u = n(3),
        b = n(1),
        x = Object(u.a)({
          Container: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridGap: '16px',
            paddingBottom: '24px',
            '& h2': {
              display: 'flex',
              justifyContent: 'center',
              marginTop: '25px',
              fontSize: '35px',
              fontWeight: 'bold',
              color: 'red',
            },
          },
        }),
        g = function (e) {
          var t = e.children,
            n = x();
          return Object(b.jsx)('div', { className: n.Container, children: t });
        },
        h = function (e) {
          var t = e.children;
          return Object(b.jsx)(g, { children: t });
        },
        m = Object(u.a)({
          Searchbar: {
            top: 0,
            left: 0,
            position: 'sticky',
            zIndex: '1100',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '64px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            color: '#fff',
            backgroundColor: 'orange',
            boxShadow:
              '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
          },
          SearchForm: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: '600px',
            backgroundColor: '#fff',
            borderRadius: '3px',
            overflow: 'hidden',
          },
          SearchFormButton: {
            display: 'inline-block',
            width: '48px',
            height: '48px',
            border: 0,
            backgroundImage:
              "url('https://image.flaticon.com/icons/svg/149/149852.svg')",
            backgroundColor: 'white',
            backgroundSize: '40%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: '0.6',
            transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            outline: 'none',
            '&:hover': { opacity: 1 },
          },
          SearchFormButtonLabel: {
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            overflow: 'hidden',
            clip: ' rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            clipPath: ' inset(50%)',
            border: 0,
          },
          SearchFormInput: {
            display: 'inline-block',
            width: '100%',
            height: '100%',
            font: 'inherit',
            fontSize: '18px',
            border: 'none',
            outline: 'none',
            paddingLeft: ' 4px',
            paddingRight: '4px',
            '&::placeholder': { font: 'inherit', fontSize: '18px' },
          },
        }),
        f = function (e) {
          var t = e.onSubmit,
            n = Object(a.useState)(''),
            r = Object(l.a)(n, 2),
            o = r[0],
            c = r[1],
            i = m();
          return Object(b.jsx)('header', {
            className: i.Searchbar,
            children: Object(b.jsxs)('form', {
              className: i.SearchForm,
              onSubmit: function (e) {
                e.preventDefault(), t(o), c('');
              },
              children: [
                Object(b.jsx)('button', {
                  type: 'submit',
                  className: i.SearchFormButton,
                  children: Object(b.jsx)('span', {
                    className: i.SearchFormButtonLabel,
                    children: 'Search',
                  }),
                }),
                Object(b.jsx)('input', {
                  className: i.SearchFormInput,
                  value: o,
                  type: 'text',
                  autoComplete: 'off',
                  autoFocus: !0,
                  placeholder: 'Search images and photos',
                  onChange: function (e) {
                    c(e.currentTarget.value);
                  },
                }),
              ],
            }),
          });
        },
        j = Object(u.a)({
          ImageGallery: {
            display: 'grid',
            maxWidth: 'calc(100vw - 48px)',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gridGap: '16px',
            marginTop: '20px',
            marginBottom: '0',
            padding: '0',
            listStyle: 'none',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        }),
        O = Object(u.a)({
          ImageGalleryItem: {
            borderRadius: '5px',
            boxShadow:
              '0px 1px 3px 0px rgba(0, 0, 0, 0.2),    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
          },
          ImageGalleryItemImage: {
            width: ' 100%',
            height: '260px',
            objectFit: 'cover',
            transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': { transform: 'scale(1.03)', cursor: 'zoom-in' },
          },
        }),
        v = function (e) {
          var t = e.webformatURL,
            n = e.largeImageURL,
            a = e.alt,
            r = e.onClick,
            o = O();
          return Object(b.jsx)('li', {
            className: o.ImageGalleryItem,
            children: Object(b.jsx)('img', {
              onClick: function () {
                r(n, a);
              },
              src: t,
              alt: a,
              className: o.ImageGalleryItemImage,
            }),
          });
        },
        y = function (e) {
          var t = e.images,
            n = e.onClick,
            a = j();
          return Object(b.jsx)('ul', {
            className: a.ImageGallery,
            children: t.map(function (e) {
              var t = e.id,
                a = e.webformatURL,
                r = e.largeImageURL,
                o = e.tags;
              return Object(b.jsx)(
                v,
                { onClick: n, webformatURL: a, largeImageURL: r, alt: o },
                t,
              );
            }),
          });
        },
        S = Object(u.a)({
          Button: {
            margin: ' 20px auto',
            padding: '8px 25px',
            borderRadius: '5px',
            backgroundColor: ' #3f51b5',
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            textAlign: 'center',
            display: 'block',
            color: '#fff',
            border: 0,
            textDecoration: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '18px',
            lineHeight: '24px',
            fontStyle: 'normal',
            fontWeight: '500',
            width: '180px',
            boxShadow:
              '0px 3px 1px -2px rgba(0, 0, 0, 0.2),    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
            '&:hover,&:focus': { backgroundColor: '#303f9f' },
          },
        }),
        w = function (e) {
          var t = e.onClick,
            n = S();
          return Object(b.jsx)('button', {
            type: 'button',
            className: n.Button,
            onClick: t,
            children: 'Load More',
          });
        },
        k = n(23),
        C = n.n(k),
        I = Object(u.a)({ spinner: { margin: '0 auto' } }),
        L = function () {
          var e = I();
          return Object(b.jsx)(C.a, {
            className: e.spinner,
            type: 'Puff',
            color: 'orange',
            height: 100,
            width: 100,
          });
        },
        R = Object(u.a)({
          Overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: '1200',
          },
          Modal: {
            maxWidth: 'calc(100vw - 48px)',
            maxHeight: 'calc(100vh - 24px)',
          },
        }),
        N = document.querySelector('#modal-root'),
        F = function (e) {
          var t = e.onClose,
            n = e.children,
            r = R();
          Object(a.useEffect)(function () {
            return (
              window.addEventListener('keydown', c),
              function () {
                window.removeEventListener('keydown', c);
              }
            );
          });
          var c = function (e) {
            'Escape' === e.code && t();
          };
          return Object(o.createPortal)(
            Object(b.jsx)('div', {
              className: r.Overlay,
              onClick: function (e) {
                e.currentTarget === e.target && t();
              },
              children: Object(b.jsx)('div', {
                className: r.Modal,
                children: n,
              }),
            }),
            N,
          );
        };
      F.defaultProps = { children: null };
      var z = F;
      var U = function () {
        var e = Object(a.useState)([]),
          t = Object(l.a)(e, 2),
          n = t[0],
          r = t[1],
          o = Object(a.useState)(1),
          c = Object(l.a)(o, 2),
          s = c[0],
          p = c[1],
          u = Object(a.useState)(''),
          x = Object(l.a)(u, 2),
          g = x[0],
          m = x[1],
          j = Object(a.useState)(!1),
          O = Object(l.a)(j, 2),
          v = O[0],
          S = O[1],
          k = Object(a.useState)(null),
          C = Object(l.a)(k, 2),
          I = C[0],
          R = C[1],
          N = Object(a.useState)(''),
          F = Object(l.a)(N, 2),
          U = F[0],
          B = F[1],
          G = Object(a.useState)(''),
          E = Object(l.a)(G, 2),
          P = E[0],
          T = E[1];
        Object(a.useEffect)(
          function () {
            g && M();
          },
          [g],
        );
        var M = function () {
            var e = { currentPage: s, searchQuery: g };
            S(!0),
              d(e)
                .then(function (e) {
                  var t = e.map(function (e) {
                    return {
                      id: e.id,
                      webformatURL: e.webformatURL,
                      largeImageURL: e.largeImageURL,
                      tags: e.tags,
                    };
                  });
                  r(function (e) {
                    return [].concat(Object(i.a)(e), Object(i.a)(t));
                  }),
                    p(function (e) {
                      return e + 1;
                    }),
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                      behavior: 'smooth',
                    });
                })
                .catch(function (e) {
                  return R(e);
                }),
              S(!1);
          },
          W = n.length > 0 && !v;
        return Object(b.jsx)(h, {
          children: Object(b.jsxs)('div', {
            className: 'App',
            children: [
              Object(b.jsx)(f, {
                onSubmit: function (e) {
                  m(e), r([]), p(1), R(null);
                },
              }),
              I
                ? Object(b.jsx)('h2', {
                    children: 'OMG. Check connect to the internet(((',
                  })
                : Object(b.jsx)(b.Fragment, {
                    children:
                      0 === n.length
                        ? Object(b.jsx)('h2', {
                            children: 'Enter your request',
                          })
                        : Object(b.jsxs)(b.Fragment, {
                            children: [
                              Object(b.jsx)(y, {
                                images: n,
                                onClick: function (e, t) {
                                  B(e), T(t);
                                },
                              }),
                              v && Object(b.jsx)(L, {}),
                              W && Object(b.jsx)(w, { onClick: M }),
                              U &&
                                Object(b.jsx)(z, {
                                  onClose: function () {
                                    B(''), T('');
                                  },
                                  children: Object(b.jsx)('img', {
                                    src: U,
                                    alt: P,
                                  }),
                                }),
                            ],
                          }),
                  }),
            ],
          }),
        });
      };
      n(72), n(73);
      c.a.render(
        Object(b.jsx)(r.a.StrictMode, { children: Object(b.jsx)(U, {}) }),
        document.getElementById('root'),
      );
    },
  },
  [[74, 1, 2]],
]);
//# sourceMappingURL=main.9371c21f.chunk.js.map
