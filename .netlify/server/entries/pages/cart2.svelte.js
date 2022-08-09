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
  default: () => Cart2
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e7abbe67 = require("../../immutable/chunks/index-e7abbe67.js");
var import_cart_a66d9e56 = require("../../immutable/chunks/cart-a66d9e56.js");
var import_emailjs_com = require("emailjs-com");
var yup = __toESM(require("yup"));
const address = (0, import_cart_a66d9e56.w)({
  name: "",
  phone: "",
  adresa: "",
  email: ""
});
const CheckOutBar = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let $cart, $$unsubscribe_cart;
  $$unsubscribe_cart = (0, import_index_e7abbe67.d)(import_cart_a66d9e56.c, (value) => $cart = value);
  $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  $$unsubscribe_cart();
  return ``;
});
const CartContents = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let $cart, $$unsubscribe_cart;
  $$unsubscribe_cart = (0, import_index_e7abbe67.d)(import_cart_a66d9e56.c, (value) => $cart = value);
  $$unsubscribe_cart();
  return `<div class="${"w-full p-4 text-white flex-1"}"><h2 class="${"mb-4"}">\u{1F6D2}</h2>
    ${(0, import_index_e7abbe67.b)($cart, (item) => {
    return `${item.quantity > 0 ? `<div class="${"flex space-x-4"}"><div class="${"w-1/2"}"><p>${(0, import_index_e7abbe67.e)(item.title)}</p></div>
			<div class="${"flex w-1/3 space-x-2"}"><button>-</button>
                <p>${(0, import_index_e7abbe67.e)(item.quantity)} ks</p>
                <button>+</button></div>
            <div class="${"w-1/3 "}"><p>${(0, import_index_e7abbe67.e)(item.price * item.quantity)} K\u010D</p></div>
			
		</div>` : ``}`;
  })}</div>

`;
});
var FormTest_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-1nmlugd{background-color:transparent\n}input.svelte-1nmlugd::-moz-placeholder{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));opacity:0.5\n}input.svelte-1nmlugd::placeholder{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));opacity:0.5\n}.error.svelte-1nmlugd{width:100%;text-align:right;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(242 201 76 / var(--tw-text-opacity))\n}",
  map: null
};
const FormTest = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  let total;
  let $address, $$unsubscribe_address;
  let $cart, $$unsubscribe_cart;
  $$unsubscribe_address = (0, import_index_e7abbe67.d)(address, (value) => $address = value);
  $$unsubscribe_cart = (0, import_index_e7abbe67.d)(import_cart_a66d9e56.c, (value) => $cart = value);
  (0, import_emailjs_com.init)("dMiJTl644Kugx1an4");
  let pay = "Hotovost na m\xEDst\u011B";
  let day = "Pond\u011Bl\xED";
  let days = ["Pond\u011Bl\xED", "\xDAter\xFD", "St\u0159eda", "\u010Ctvrtek", "P\xE1tek", "Sobota", "Ned\u011Ble"];
  let pays = ["Hotovost na m\xEDst\u011B", "Platba kartou na m\xEDst\u011B", "Platba p\u0159evodem"];
  yup.object().shape({
    name: yup.string().required("Zadejte jm\xE9no"),
    address: yup.string().required("Zadejte adresu doru\u010Den\xED"),
    phone: yup.string().required("Zadejte telefon\xED \u010D\xEDslo"),
    email: yup.string().required("Zadejte e-mailovou adresu").email("Zkuste to znovu")
  });
  let errors = {};
  $$result.css.add(css);
  total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  $$unsubscribe_address();
  $$unsubscribe_cart();
  return `<div class="${[
    "bg-red p-4 flex-1 text-white",
    $address.name && $address.adresa && $address.email && $address.phone && $cart.length > 0 ? "bg-green" : ""
  ].join(" ").trim()}"><form name="${"contactForm"}"><div class="${"mb-4"}"><h3>Pro objedn\xE1vku, pros\xEDm, vypl\u0148te n\xE1sleduj\xEDc\xED informace:</h3>
			<div class="${"flex"}"><input class="${"w-full svelte-1nmlugd"}" type="${"text"}" name="${"name"}" id="${"name"}" placeholder="${"Jm\xE9no a p\u0159\xEDjmen\xED / N\xE1zev firmy"}"${(0, import_index_e7abbe67.a)("value", $address.name, 0)}>
				<p class="${"error svelte-1nmlugd"}">${errors.name ? `${(0, import_index_e7abbe67.e)(errors.name)}` : ``}</p></div>
			<div class="${"flex"}"><input class="${"w-full svelte-1nmlugd"}" type="${"text"}" name="${"address"}" id="${"address"}" placeholder="${"Adresa doru\u010Den\xED"}"${(0, import_index_e7abbe67.a)("value", $address.adresa, 0)}>
				<p class="${"error svelte-1nmlugd"}">${errors.address ? `${(0, import_index_e7abbe67.e)(errors.address)}` : ``}</p></div>
			<div class="${"flex"}"><input class="${"w-full svelte-1nmlugd"}" type="${"text"}" name="${"phone"}" id="${"phone"}" placeholder="${"Telefonn\xED \u010D\xEDslo"}"${(0, import_index_e7abbe67.a)("value", $address.phone, 0)}>
				<p class="${"error svelte-1nmlugd"}">${errors.phone ? `${(0, import_index_e7abbe67.e)(errors.phone)}` : ``}</p></div>
			
			<div class="${"flex"}"><input class="${"w-full svelte-1nmlugd"}" type="${"text"}" name="${"email"}" id="${"email"}" placeholder="${"E-mailov\xE1 adresa"}"${(0, import_index_e7abbe67.a)("value", $address.email, 0)}>
				<p class="${"error svelte-1nmlugd"}">${errors.email ? `${(0, import_index_e7abbe67.e)(errors.email)}` : ``}</p></div></div>
		<div class="${"mb-4"}"><h3>Zvolte zp\u016Fsob placen\xED:</h3>
			<div class="${"flex flex-wrap space-x-2"}">${(0, import_index_e7abbe67.b)(pays, (payname) => {
    return `<label><input name="${"pay select"}" id="${"pay"}" class="${"peer appearance-none -mr-1 svelte-1nmlugd"}" type="${"radio"}"${(0, import_index_e7abbe67.a)("value", payname, 0)}${payname === pay ? (0, import_index_e7abbe67.a)("checked", true, 1) : ""}>
					<span id="${"payname"}" class="${"opacity-50 peer-checked:opacity-100"}">${(0, import_index_e7abbe67.e)(payname)}</span>
				</label>`;
  })}</div></div>
		<div class="${"mb-4"}"><h3>Vyberte den doru\u010Den\xED:</h3>
			<div class="${"flex flex-wrap space-x-2"}">${(0, import_index_e7abbe67.b)(days, (dayname) => {
    return `<label><input name="${"day select"}" id="${"day"}" class="${"peer appearance-none -mr-1 svelte-1nmlugd"}" type="${"radio"}"${(0, import_index_e7abbe67.a)("value", dayname, 0)}${dayname === day ? (0, import_index_e7abbe67.a)("checked", true, 1) : ""}>
						<span id="${"dayname"}" class="${"opacity-50 peer-checked:opacity-100"}">${(0, import_index_e7abbe67.e)(dayname)}</span>
					</label>`;
  })}</div></div></form></div>

<div class="${"hidden"}"><p id="${"omgday"}">${(0, import_index_e7abbe67.e)(day)}</p>
	<p id="${"omgpay"}">${(0, import_index_e7abbe67.e)(pay)}</p></div>

<div id="${"cart"}" name="${"cart"}" class="${"hidden"}">${(0, import_index_e7abbe67.b)($cart, (item) => {
    return `${item.quantity > 0 ? `${(0, import_index_e7abbe67.e)(item.title)}${(0, import_index_e7abbe67.e)(".".repeat(15 - item.title.length))}${(0, import_index_e7abbe67.e)(item.price)}${(0, import_index_e7abbe67.e)(".".repeat(15 - item.price.toString.length))}${(0, import_index_e7abbe67.e)(item.quantity)}\xA0\xA0\xA0\xA0${(0, import_index_e7abbe67.e)(item.price * item.quantity)}<br>\xA0` : ``}`;
  })}
	${(0, import_index_e7abbe67.e)(total)}</div>



<div class="${""}">${$address.name && $address.adresa && $address.email && $address.phone && $cart.length > 0 ? `<button class="${"w-full border-t border-gray bg-green text-white p-4 py-6 leading-tight flex justify-between"}"><p class="${"actionbar whitespace-nowrap truncate"}">Potvrdit objedn\xE1vku
		</p>
	
		<p class="${"actionbar text-right whitespace-nowrap"}">${(0, import_index_e7abbe67.e)(total)} K\u010D
		</p></button>` : `<div href="${"/cart1"}" class="${"w-full border-t border-gray bg-red text-white p-4 py-6 leading-tight flex justify-between"}"><p class="${"actionbar opacity-50 whitespace-nowrap truncate"}">Potvrdit objedn\xE1vku
    </p>

    <p class="${"actionbar opacity-50 text-right whitespace-nowrap"}">${(0, import_index_e7abbe67.e)(total)} K\u010D
    </p></div>`}
	
</div>`;
});
const Cart2 = (0, import_index_e7abbe67.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-1 "}"><div class="${"flex flex-col w-1/2"}">${(0, import_index_e7abbe67.v)(CartContents, "CartContents").$$render($$result, {}, {}, {})}</div>

    <div class="${"flex flex-col w-1/2"}">${(0, import_index_e7abbe67.v)(FormTest, "Form").$$render($$result, {}, {}, {})}
        ${(0, import_index_e7abbe67.v)(CheckOutBar, "CheckOutBar").$$render($$result, {}, {}, {})}</div></div>`;
});
