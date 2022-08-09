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
  default: () => Setcart
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e7abbe67 = require("../../immutable/chunks/index-e7abbe67.js");
var import_sets_07cffb79 = require("../../immutable/chunks/sets-07cffb79.js");
var import_cart_a66d9e56 = require("../../immutable/chunks/cart-a66d9e56.js");
var CartTileSet_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1uhhywf{opacity:0.5\n}",
  map: null
};
const CartTileSet = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let $cart, $$unsubscribe_cart;
  $$unsubscribe_cart = (0, import_index_e7abbe67.d)(import_cart_a66d9e56.c, (value) => $cart = value);
  let { product } = $$props;
  let count = product.contents;
  let kss = 0;
  let ings = "";
  for (let i = 0; i < count.length; i++) {
    if (count[i].obsah != 0) {
      if (i === 0) {
        kss += count[i].ks;
        ings += `${count[i].obsah}`;
        console.log(ings);
      } else {
        kss += count[i].ks;
        ings += `, ${count[i].obsah}`;
        console.log(ings);
      }
    }
  }
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  $$result.css.add(css);
  $$unsubscribe_cart();
  return `<div class="${"w-full text-white leading-tight flex flex-col space-y-6 justify-between"}"><div class="${"flex-1 hover:bg-white group rounded-md"}"><div class="${"header mb-4 group group-hover:hidden"}"><h1 class="${"title"}">${(0, import_index_e7abbe67.e)(product.title)}</h1>
            <h1 class="${"opacity-50"}">(${(0, import_index_e7abbe67.e)(kss)} ks)</h1></div>
        <div class="${"parts mb-4 group-hover:hidden"}">${(0, import_index_e7abbe67.b)(product.contents, (content) => {
    return `${content.produkt ? `<div class="${"flex space-x-2"}"><p>${(0, import_index_e7abbe67.e)(content.ks)}ks</p>
                        <div><p>${(0, import_index_e7abbe67.e)(content.produkt)}</p></div>
                        
                    </div>` : ``}`;
  })} 
            <p class="${"opacity-50 mt-4"}">(${(0, import_index_e7abbe67.e)(ings)})</p></div></div>
    <div class="${"flex justify-between"}">${$cart.includes(product) ? `${(0, import_index_e7abbe67.b)($cart, (item) => {
    return `${item.id == product.id ? `<div class="${"flex actionbar space-x-2"}"><button class="${"svelte-1uhhywf"}">-</button>
                        <p>${(0, import_index_e7abbe67.e)(item.quantity)}</p>
                        <button class="${"svelte-1uhhywf"}">+</button>
                    </div>` : ``}`;
  })}` : `<div class="${"flex actionbar space-x-2"}"><button class="${"svelte-1uhhywf"}">-</button>
                <p>0</p>
                <button class="${"svelte-1uhhywf"}">+</button></div>`}
            
            <div class="${"flex actionbar space-x-2"}"><p>${(0, import_index_e7abbe67.e)(product.price)} K\u010D</p></div></div>
</div>`;
});
const Setcart = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cart;
  let $sets, $$unsubscribe_sets;
  $$unsubscribe_cart = (0, import_index_e7abbe67.d)(import_cart_a66d9e56.c, (value) => value);
  $$unsubscribe_sets = (0, import_index_e7abbe67.d)(import_sets_07cffb79.s, (value) => $sets = value);
  $$unsubscribe_cart();
  $$unsubscribe_sets();
  return `<div class="${"flex space-x-8 p-4 flex-1 "}">${(0, import_index_e7abbe67.b)($sets, (product) => {
    return `${(0, import_index_e7abbe67.v)(CartTileSet, "CartTileSet").$$render($$result, { product }, {}, {})}`;
  })}</div>`;
});
