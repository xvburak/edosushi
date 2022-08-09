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
  b: () => boxes
});
module.exports = __toCommonJS(stdin_exports);
var import_cart_a66d9e56 = require("./cart-a66d9e56.js");
const boxes = (0, import_cart_a66d9e56.w)([]);
const fetchBox = async () => {
  const url = `https://script.googleusercontent.com/macros/echo?user_content_key=Uw9eUngVDOH98t0tlVC_9uO3VbSdO8V2ner9peBcGwNZnOMCaxhQYUi0vNYN49EFFClXj-H67ow2aJfEVcW7ZM2fj_QB6SCum5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCapn4Jmcu_Ppf4Uhxj0LvGfX2anIqQ0qg2kaIkNU8QHIBONa-aeYFPKjw6qeNq5M_AnbJe6exRYXLV_AvlewU_rItdUByYMBw&lib=M6XtDPyep9ADEDr0ym513Xvw-lhh3mvzt`;
  const res = await fetch(url);
  const data = await res.json();
  const loadedBox = data.map((data2, index) => {
    return {
      title: data2.title,
      id: data2.id,
      quantity: 1,
      price: data2.price,
      contents: data2.contents
    };
  });
  console.log(data);
  boxes.set(loadedBox);
};
fetchBox();
