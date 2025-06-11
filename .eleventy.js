module.exports = function (eleventyConfig) {
  // ✅ This copies everything in the "assets" folder (your JS, CSS, etc.) into dist/
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",         // your Markdown and templates live here
      includes: "_includes",// optional includes folder
      output: "dist"        // final site goes here
    },
    pathPrefix: "/research-lab-website/" // ✅ This is the fix for GitHub Pages
  };
};
