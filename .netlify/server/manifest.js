var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "icons8-checkmark.gif", "icons8-ok.gif", "icons8-okl.gif"]),
  mimeTypes: { ".png": "image/png", ".gif": "image/gif" },
  _: {
    entry: { "file": "immutable/start-797c9741.js", "imports": ["immutable/start-797c9741.js", "immutable/chunks/index-567b05ba.js", "immutable/chunks/index-3d151600.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "boxcart",
        pattern: /^\/boxcart\/?$/,
        names: [],
        types: [],
        path: "/boxcart",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "cart1",
        pattern: /^\/cart1\/?$/,
        names: [],
        types: [],
        path: "/cart1",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "cart2",
        pattern: /^\/cart2\/?$/,
        names: [],
        types: [],
        path: "/cart2",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "cart3",
        pattern: /^\/cart3\/?$/,
        names: [],
        types: [],
        path: "/cart3",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "mobilecart",
        pattern: /^\/mobilecart\/?$/,
        names: [],
        types: [],
        path: "/mobilecart",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "setcart",
        pattern: /^\/setcart\/?$/,
        names: [],
        types: [],
        path: "/setcart",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/boxes.json",
        pattern: /^\/api\/boxes\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/boxes.json.js")))
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
