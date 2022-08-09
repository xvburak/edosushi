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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
const get = async () => {
  const allPostFiles = {};
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(iterablePostFiles.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    const postPath = path.slice(2, -3);
    return {
      meta: metadata,
      path: postPath
    };
  }));
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return {
    body: sortedPosts
  };
};
