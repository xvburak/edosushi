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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e7abbe67 = require("../../immutable/chunks/index-e7abbe67.js");
var import_cart_a66d9e56 = require("../../immutable/chunks/cart-a66d9e56.js");
var import_sets_07cffb79 = require("../../immutable/chunks/sets-07cffb79.js");
var import_boxes_2adf6cc2 = require("../../immutable/chunks/boxes-2adf6cc2.js");
var app = "";
var Marquee_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".marquee-container.svelte-1bfg34t{overflow:hidden}.marquee-content.svelte-1bfg34t{position:relative;white-space:nowrap;display:inline-block}.no-autoplay.svelte-1bfg34t{-webkit-animation-play-state:paused;animation-play-state:paused}.no-autoplay.svelte-1bfg34t:hover{-webkit-animation:svelte-1bfg34t-marquee linear infinite;animation:svelte-1bfg34t-marquee linear infinite}.autoplay.svelte-1bfg34t{-webkit-animation:svelte-1bfg34t-marquee linear infinite;animation:svelte-1bfg34t-marquee linear infinite}.autoplay.hoverable.svelte-1bfg34t:hover{-webkit-animation-play-state:paused;animation-play-state:paused}span.svelte-1bfg34t{font-family:inherit;font-size:inherit;line-height:normal}.reverse.svelte-1bfg34t{-webkit-animation-direction:reverse;animation-direction:reverse}@-webkit-keyframes svelte-1bfg34t-marquee{100%{transform:translate(0, 0)}}@keyframes svelte-1bfg34t-marquee{100%{transform:translate(0, 0)}}",
  map: null
};
const Marquee = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let _reqR;
  let _arr;
  let _mult;
  let _time;
  let _style;
  let { content = "svelte-marquee", reverse = false, autoplay, hoverable = false, speed = "medium" } = $$props;
  let _marqueecontainerWidth, _contentWidth;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  $$result.css.add(css$2);
  _reqR = Math.ceil((_marqueecontainerWidth - _contentWidth) / _contentWidth) + 1;
  _arr = _reqR && Array.from(Array(_reqR).keys());
  _mult = speed === "fast" ? 8e-3 : speed === "medium" ? 0.019 : speed === "slow" ? 0.03 : 0.019;
  _time = _contentWidth * _mult;
  _style = `
    transform: translate(-${_contentWidth}px, 0);
    -webkit-animation-duration: ${_time}s;
    -moz-animation-duration: ${_time}s;
    -o-animation-duration: ${_time}s;
    animation-duration: ${_time}s;
  `;
  return `<div class="${"marquee-container svelte-1bfg34t"}"><div class="${[
    "marquee-content svelte-1bfg34t",
    (reverse ? "reverse" : "") + " " + (autoplay ? "autoplay" : "") + " " + (hoverable ? "hoverable" : "") + " " + (!autoplay ? "no-autoplay" : "")
  ].join(" ").trim()}"${(0, import_index_e7abbe67.a)("style", _style, 0)}><span class="${"svelte-1bfg34t"}">${(0, import_index_e7abbe67.e)(`${content} `)}</span>
    ${_arr ? `${(0, import_index_e7abbe67.b)(_arr, (item) => {
    return `<span class="${"svelte-1bfg34t"}">${(0, import_index_e7abbe67.e)(`${content} `)}</span>`;
  })}` : ``}</div></div>`;
});
const Anouncment = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  return `${`${`<div class="${"bg-orange text-center h-8 flex flex-col justify-center py-1 text-white"}"><div>${(0, import_index_e7abbe67.v)(Marquee, "Marquee").$$render($$result, {
    reverse: "true",
    speed: "slow",
    content: "Abychom zaru\u010Dili \u010Derstvost pokrm\u016F, p\u0159ij\xEDm\xE1me objedn\xE1vky den p\u0159edem do 17 hodin.\xA0\xA0\xA0\u{1F371}\xA0\xA0\xA0"
  }, {}, {})}</div></div>`}`}
`;
});
const getStores = () => {
  const stores = (0, import_index_e7abbe67.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const ActionBar = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let total;
  let sumka;
  let ids;
  let $cart, $$unsubscribe_cart;
  let $page, $$unsubscribe_page;
  $$unsubscribe_cart = (0, import_index_e7abbe67.d)(import_cart_a66d9e56.c, (value) => $cart = value);
  $$unsubscribe_page = (0, import_index_e7abbe67.d)(page, (value) => $page = value);
  total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  sumka = $cart.reduce((sum, item) => sum + item.quantity, 0);
  ids = $cart.reduce((sum, item) => item.id, 0);
  $$unsubscribe_cart();
  $$unsubscribe_page();
  return `${$page.url.pathname === "/boxcart" ? `${sumka > 4 ? `<a href="${"/cart2"}" class="${"w-full bg-green text-white p-4 py-6 leading-tight flex justify-between"}"><p class="${"actionbar whitespace-nowrap truncate w-2/3"}">P\u0159idat do ko\u0161\xEDku
        </p>
        <p class="${"actionbar text-right whitespace-nowrap opacity-50 w-1/6"}">${(0, import_index_e7abbe67.e)(sumka)} ks
        </p>
        <p class="${"actionbar text-right whitespace-nowrap w-1/6"}">${(0, import_index_e7abbe67.e)(total)} K\u010D
        </p></a>` : `<div href="${"/cart1"}" class="${"w-full bg-red text-white p-4 py-6 leading-tight flex justify-between"}"><p class="${"actionbar opacity-50 whitespace-nowrap truncate w-2/3"}">Pro objedn\xE1n\xED, p\u0159idejte je\u0161t\u011B ${(0, import_index_e7abbe67.e)(5 - sumka)} ks
        </p>
        <p class="${"actionbar text-right whitespace-nowrap opacity-50 w-1/6"}">${(0, import_index_e7abbe67.e)(sumka)} ks
        </p>
        <p class="${"actionbar text-right whitespace-nowrap opacity-50 w-1/6"}">0 K\u010D
        </p></div>`}` : `${$page.url.pathname === "/mobilecart" ? `${sumka > 4 || ids === "1" || ids === "2" ? `<div class="${"fixed w-full overflow-hidden bottom-0"}"><a href="${"/cart2"}" class="${"w-full bg-green text-white p-4 py-6 leading-tight flex justify-between"}"><p class="${"actionbar whitespace-nowrap truncate"}">P\u0159idat 
            </p>
            <p class="${"actionbar text-right whitespace-nowrap"}">${(0, import_index_e7abbe67.e)(total)} K\u010D
            </p></a></div>` : `<div class="${"fixed w-full bottom-0"}"><div href="${"/cart1"}" class="${"w-full bg-red text-white p-4 py-6 leading-tight flex justify-between"}"><p class="${"actionbar opacity-50 whitespace-nowrap truncate w-2/3"}">??aspon  5 box\u016F / 1 set
            </p>

            <p class="${"actionbar text-right whitespace-nowrap opacity-50 w-1/6"}">0 K\u010D
            </p></div></div>`}` : `${total > 0 ? `<a href="${"/cart2"}" class="${"w-full bg-green text-white p-4 py-6 leading-tight flex justify-between"}"><p class="${"actionbar whitespace-nowrap truncate"}">P\u0159idat do ko\u0161\xEDku
        </p>

        <p class="${"actionbar text-right whitespace-nowrap"}">${(0, import_index_e7abbe67.e)(total)} K\u010D
        </p></a>` : `<div href="${"/cart1"}" class="${"w-full bg-red text-white p-4 py-6 leading-tight flex justify-between"}"><p class="${"actionbar opacity-50 whitespace-nowrap truncate"}">Pro objedn\xE1n\xED, pros\xEDm, vyberte alespo\u0148 jeden produkt
        </p>

        <p class="${"actionbar text-right whitespace-nowrap opacity-50"}">0 K\u010D
        </p></div>`}`}`}`;
});
var DropdownMenu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media(min-width: 768px){.drop.svelte-1g2vgj3{display:none\n        }}",
  map: null
};
const DropdownMenu = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $cart, $$unsubscribe_cart;
  $$unsubscribe_page = (0, import_index_e7abbe67.d)(page, (value) => $page = value);
  $$unsubscribe_cart = (0, import_index_e7abbe67.d)(import_cart_a66d9e56.c, (value) => $cart = value);
  let menu = null;
  $$result.css.add(css$1);
  $$unsubscribe_page();
  $$unsubscribe_cart();
  return `

<div class="${"w-full z-10"}"><div class="${"flex drop z-35 h-12 svelte-1g2vgj3"}"${(0, import_index_e7abbe67.a)("this", menu, 0)}><div class="${"flex w-full"}"><div class="${"flex p-2 justify-between items-center w-full "}"><div class="${"flex flex-col justify-center w-1/3"}"><button class="${"menu focus:outline-none focus:shadow-solid"}"><svg class="${"w-10 h-10 "}" viewBox="${"0 0 28 28"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><rect width="${"28"}" height="${"28"}"></rect><rect x="${"0"}" y="${"9"}" width="${"28"}" height="${"2"}" fill="${"#4F4F4F"}"></rect><rect x="${"0"}" y="${"17"}" width="${"28"}" height="${"2"}" fill="${"#4F4F4F"}"></rect></svg></button></div>
                
                
                <div class="${["w-1/3 text-center", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}">EDOSUSHI</a></div>
              
                
                <div class="${"w-1/3 text-right"}"><a sveltekit:prefetch href="${"/cart2"}">\u{1F6D2} ${(0, import_index_e7abbe67.e)($cart.reduce((sum, item) => sum + item.quantity, 0))}</a></div></div>
            
    
            ${``}</div></div>
</div>`;
});
var NavBar_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.active.svelte-cgj5cq{--tw-text-opacity:1;color:rgb(79 79 78 / var(--tw-text-opacity))\n}@media(max-width: 767px){.base.svelte-cgj5cq{display:none\n        }}",
  map: null
};
const NavBar = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $cart, $$unsubscribe_cart;
  $$unsubscribe_page = (0, import_index_e7abbe67.d)(page, (value) => $page = value);
  $$unsubscribe_cart = (0, import_index_e7abbe67.d)(import_cart_a66d9e56.c, (value) => $cart = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_cart();
  return `
<div class="${"bg-white w-full " + (0, import_index_e7abbe67.e)("", true) + " z-30"}"><header>${(0, import_index_e7abbe67.v)(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {})}
	<nav class="${"h-10 flex flex-col base justify-center svelte-cgj5cq"}"><div class="${(0, import_index_e7abbe67.e)($page.url.pathname === "/" ? "justify-center" : "justify-between", true) + " flex py-1 px-6 items-center"}"><div class="${(0, import_index_e7abbe67.e)($page.url.pathname === "/" ? "hidden" : "", true) + " flex-1"}"><a sveltekit:prefetch href="${"/"}"><svg width="${"1.5rem"}" height="${"1.5rem"}" xmlns="${"http://www.w3.org/2000/svg"}"><circle cx="${"0.75rem"}" cy="${"0.75rem"}" r="${"0.75rem"}" fill="${"#F2994A"}"></circle></svg></a></div>

			<ul class="${"flex justify-center flex-grow space-x-12 " + (0, import_index_e7abbe67.e)($page.url.pathname === "/" ? "text-black" : "text-gray", true)}"><li class="${["svelte-cgj5cq", $page.url.pathname === "/onas" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/onas"}">O n\xE1s</a></li>
				<li class="${["svelte-cgj5cq", $page.url.pathname === "/galerie" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/galerie"}">Galerie</a></li>
				<li class="${["svelte-cgj5cq", $page.url.pathname === "/rozvoz" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/rozvoz"}">Rozvoz</a></li>
				<li class="${["svelte-cgj5cq", $page.url.pathname === "/kontakt" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/kontakt"}">Kontakt</a></li></ul>

			<div class="${(0, import_index_e7abbe67.e)($page.url.pathname === "/" ? "hidden" : "", true) + " flex-1 text-right"}"><a sveltekit:prefetch href="${"/cart2"}">\u{1F6D2} ${(0, import_index_e7abbe67.e)($cart.reduce((sum, item) => sum + item.quantity, 0))}</a></div></div></nav></header>
</div>`;
});
const HPActionBar = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let $boxes, $$unsubscribe_boxes;
  let $sets, $$unsubscribe_sets;
  $$unsubscribe_boxes = (0, import_index_e7abbe67.d)(import_boxes_2adf6cc2.b, (value) => $boxes = value);
  $$unsubscribe_sets = (0, import_index_e7abbe67.d)(import_sets_07cffb79.s, (value) => $sets = value);
  $$unsubscribe_boxes();
  $$unsubscribe_sets();
  return `<div class="${"flex space-x-2 bg-none base"}"><a href="${"/boxcart"}" class="${"w-full bg-green text-white p-4 py-6 leading-tight flex flex-col justify-center"}"><h3 class="${"title "}">Objednat Ob\u011Bdov\xFD box

        </h3>
        <p class="${"content opacity-50"}">(${(0, import_index_e7abbe67.b)($boxes, (box) => {
    return `${box.id == 12 ? `\xA0${(0, import_index_e7abbe67.e)(box.title)}` : `\xA0${(0, import_index_e7abbe67.e)(box.title)} / `}`;
  })}\xA0)</p></a>

    <a href="${"/setcart"}" class="${"w-full bg-green text-white p-4 py-6 leading-tight flex flex-col justify-center"}"><h3 class="${"title "}">Objednat Sushi Set
        </h3>
        <p class="${"content opacity-50"}">(${(0, import_index_e7abbe67.b)($sets, (set) => {
    return `${set.id == 2 ? `\xA0${(0, import_index_e7abbe67.e)(set.title)}` : `\xA0${(0, import_index_e7abbe67.e)(set.title)}\xA0/`}`;
  })}\xA0)</p></a></div>

<div class="${"flex space-x-2 bg-none phone"}"><a href="${"/mobilecart"}" class="${"w-full bg-green text-white p-4 py-6 leading-tight flex flex-col justify-center"}"><h3 class="${"title actionbar text-center"}">Objednat \u2192
        </h3></a></div>`;
});
const _layout = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e7abbe67.d)(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<section class="${"flex flex-col h-screen"}">${(0, import_index_e7abbe67.v)(Anouncment, "Anouncment").$$render($$result, {}, {}, {})} 
    ${(0, import_index_e7abbe67.v)(NavBar, "NavBar").$$render($$result, {}, {}, {})}
    ${$page.url.pathname === "/" ? `<div class="${"bg-hp-bg bg-cover flex-1 overflow-auto flex flex-col justify-end"}">${slots.default ? slots.default({}) : ``}
            ${(0, import_index_e7abbe67.v)(HPActionBar, "HPActionBar").$$render($$result, {}, {}, {})}</div>` : `${$page.url.pathname === "/cart2" ? `<div class="${"bg-gray flex-1 flex flex-col "}">${slots.default ? slots.default({}) : ``}</div>` : `${$page.url.pathname === "/cart3" ? `<div class="${"bg-green flex-1 flex flex-col justify-center"}">${slots.default ? slots.default({}) : ``}</div>` : `<div class="${"bg-gray flex-1 flex flex-col "}">${slots.default ? slots.default({}) : ``}
            ${(0, import_index_e7abbe67.v)(ActionBar, "ActionBar").$$render($$result, {}, {}, {})}</div>`}`}`}</section>`;
});
