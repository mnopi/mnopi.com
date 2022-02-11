"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(840);
/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(206);
/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextra_ssg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_j5pu_mnopi_nextra_theme_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(866);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(763);
/*@jsxRuntime automatic @jsxImportSource react*/ 




const MDXLayout = function NextraPage(props) {
    return (0,nextra_ssg__WEBPACK_IMPORTED_MODULE_2__.withSSG)(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_1___default()({
        filename: "index.mdx",
        route: "",
        meta: {},
        pageMap: [
            {
                "name": "index",
                "route": "/"
            },
            {
                "name": "meta.json",
                "meta": {
                    "index": "Introduction",
                    "repositories": "Repositories",
                    "repos": "Repos",
                    "api": "API"
                }
            },
            {
                "name": "repositories",
                "route": "/repositories"
            }
        ]
    }, _home_j5pu_mnopi_nextra_theme_config_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z))(props);
};
function MDXContent(props = {}) {
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, {})
    })) : _createMdxContent();
    function _createMdxContent() {
        const _components = Object.assign({
            h1: "h1",
            h2: "h2",
            a: "a",
            p: "p",
            strong: "strong",
            code: "code",
            em: "em",
            h3: "h3",
            h4: "h4",
            pre: "pre"
        }, props.components);
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                    children: "API"
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://mnopi.com/api/git",
                        children: "git"
                    })
                }),
                "\n",
                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                    children: [
                        "| Field | Values[^1] | Index[^2] or Key | Description |\n|---|---|\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference",
                            children: "index"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/repos#get-a-repository--code-samples",
                            children: "repos"
                        }),
                        ", ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://docs.github.com/en/rest/reference/search",
                                children: "search"
                            })
                        }),
                        ", ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/users#get-a-user--code-samples",
                            children: "users"
                        }),
                        " | N/A | Field from GitHub API |\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "formula"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "0"
                        }),
                        ", 1 | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/repos#get-a-repository--code-samples",
                            children: "repos"
                        }),
                        " | Generate values for homebrew formula |\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "key"
                        }),
                        " | | | Key from json ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "response.data"
                        }),
                        ", or ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/search",
                            children: "search"
                        }),
                        " |\n| | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "repositories"
                        }),
                        ", ... | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/search",
                            children: "search"
                        }),
                        " | |\n| | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "description"
                        }),
                        ", ...[^3] | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/repos#get-a-repository--code-samples",
                            children: "repos"
                        }),
                        " | |\n| | login, ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "id"
                        }),
                        ", type, email, html_url, ... | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/users#get-a-user--code-samples",
                            children: "users"
                        }),
                        " | |\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "latest"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "0"
                        }),
                        ", 1 | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/repos#get-a-repository--code-samples",
                            children: "repos"
                        }),
                        " | Latest archive releases or tag url |\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "log"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "0"
                        }),
                        ", 1 | ... | Console log |\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "map"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "name"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "search[repositories]"
                        }),
                        " | Additional key for json lists in ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "response.data"
                        }),
                        " |\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "owner"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "j5pu"
                        }),
                        ", ... | repos, users | Username or repo owner |\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "q"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "q=homebrew-+user:j5pu"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "repositories"
                        }),
                        " | Query for ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "search"
                        }),
                        "  |\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "repo"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "action"
                        }),
                        ", ... | repos | Repository name |\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "sha256"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "0"
                        }),
                        ", 1 | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/repos#get-a-repository--code-samples",
                            children: "repos"
                        }),
                        " | sha256 for ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "latest"
                        }),
                        " |\n| ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "tag"
                        }),
                        " | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                            children: "0"
                        }),
                        ", 1 | ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/repos#get-a-repository--code-samples",
                            children: "repos"
                        }),
                        " | Latest tag |"
                    ]
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "curl -fsSL \"https://mnopi.com/api/git?ref=<value>&owner=<value>\""
                    })
                }),
                "\n",
                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                    children: [
                        "[^1]: Possible values for field (default in bold).\n[^2]: ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference",
                            children: "API reference"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "Index"
                        }),
                        " or ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "Key"
                        }),
                        " that the field applies.\n[^3]: Examples ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://docs.github.com/en/rest/reference/repos#get-a-repository--code-samples",
                            children: "keys"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "id"
                        }),
                        ": 1296269,\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "full_name"
                        }),
                        ": \"octocat/Hello-World\",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "html_url"
                        }),
                        ": ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "https://github.com/octocat/Hello-World"
                        }),
                        ",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "private"
                        }),
                        ": \"true\" or \"false\",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "git_tags_url"
                        }),
                        ": ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}"
                        }),
                        ",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "git_url"
                        }),
                        ": ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "git:github.com/octocat/Hello-World.git"
                        }),
                        ",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "releases_url"
                        }),
                        ": ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "https://api.github.com/repos/octocat/Hello-World/releases{/id}"
                        }),
                        ",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "ssh_url"
                        }),
                        ": ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "git@github.com:octocat/Hello-World.git"
                        }),
                        ",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "tags_url"
                        }),
                        ": ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "https://api.github.com/repos/octocat/Hello-World/tags"
                        }),
                        ",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "clone_url"
                        }),
                        ": ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "https://github.com/octocat/Hello-World.git"
                        }),
                        ",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "homepage"
                        }),
                        ": ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "https://github.com"
                        }),
                        ",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "size"
                        }),
                        ": 108,\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "default_branch"
                        }),
                        ": \"master\",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "visibility"
                        }),
                        ": \"public\",\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "license"
                        }),
                        ": \"key\": \"mit\", \"name\": \"MIT License\", \"spdx_id\": \"MIT\", ...\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                            children: "organization"
                        }),
                        ": \"login\": \"octocat\", \"id\": \"1\", ..."
                    ]
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://mnopi.com/api/git?index=repos",
                        children: "repos"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                    children: "formula (uses releases)"
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        className: "language-bash",
                        children: "curl -fsSL \"https://mnopi.com/api/git?formula=1\"\n"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                    children: "formula for python/cpython (uses tag)"
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        className: "language-bash",
                        children: "curl -fsSL \"https://mnopi.com/api/git?formula=1&owner=python&repo=cpython\"\n"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://mnopi.com/api/git?index=search",
                        children: "search"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        className: "language-bash",
                        children: "curl -fsSL \"https://mnopi.com/api/git\"\ncurl -fsSL \"https://mnopi.com/api/git?formula=1\"\ncurl -fsSL \"https://mnopi.com/api/git?index=search&q=homebrew-+user:homebrew\"\n"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                    children: "taps"
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        className: "language-bash",
                        children: "curl -fsSL \"https://mnopi.com/api/git\"\ncurl -fsSL \"https://mnopi.com/api/git?log=1\"\ncurl -fsSL \"https://mnopi.com/api/git?index=search&q=homebrew-+user:homebrew\"\n"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                    children: "repos with \"cmd\", in user \"j5pu\""
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        className: "language-bash",
                        children: "curl -fsSL \"https://mnopi.com/api/git?index=search&q=cmd+user:j5pu\"\n"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                    children: "repos starting with \"cmd\", in user \"j5pu\""
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        className: "language-bash",
                        children: "curl -fsSL \"https://mnopi.com/api/git?index=search&q=^cmd+user:j5pu\"\n"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://mnopi.com/api/git?index=user",
                        children: "user"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                    children: "id"
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        className: "language-bash",
                        children: "curl -fsSL \"https://mnopi.com/api/git?index=user\"\ncurl -fsSL \"https://mnopi.com/api/git?log=1\"\ncurl -fsSL \"https://mnopi.com/api/git?index=search&q=homebrew-+user:homebrew\"\n"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                    children: "repos with \"cmd\", in user \"j5pu\""
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        className: "language-bash",
                        children: "curl -fsSL \"https://mnopi.com/api/git?index=search&q=cmd+user:j5pu\"\n"
                    })
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                    children: "repos starting with \"cmd\", in user \"j5pu\""
                }),
                "\n",
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        className: "language-bash",
                        children: "curl -fsSL \"https://mnopi.com/api/git?index=search&q=^cmd+user:j5pu\"\n"
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 840:
/***/ ((module) => {

module.exports = require("nextra-theme-docs");

/***/ }),

/***/ 206:
/***/ ((module) => {

module.exports = require("nextra/ssg");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,866], () => (__webpack_exec__(191)));
module.exports = __webpack_exports__;

})();