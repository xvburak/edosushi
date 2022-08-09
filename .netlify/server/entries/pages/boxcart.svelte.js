var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Boxcart
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e7abbe67 = require("../../immutable/chunks/index-e7abbe67.js");
var import_boxes_2adf6cc2 = require("../../immutable/chunks/boxes-2adf6cc2.js");
var import_cart_a66d9e56 = require("../../immutable/chunks/cart-a66d9e56.js");
var import_CartTileBox_685aaf80 = require("../../immutable/chunks/CartTileBox-685aaf80.js");
const Boxcart = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cart;
  let $boxes, $$unsubscribe_boxes;
  $$unsubscribe_cart = (0, import_index_e7abbe67.d)(import_cart_a66d9e56.c, (value) => value);
  $$unsubscribe_boxes = (0, import_index_e7abbe67.d)(import_boxes_2adf6cc2.b, (value) => $boxes = value);
  $$unsubscribe_cart();
  $$unsubscribe_boxes();
  return `<div class="${"flex space-x-8 p-4 flex-1 "}">${(0, import_index_e7abbe67.b)($boxes, (product) => {
    return `${(0, import_index_e7abbe67.v)(import_CartTileBox_685aaf80.C, "CartTileBox").$$render($$result, { product }, {}, {})}`;
  })}</div>`;
});
