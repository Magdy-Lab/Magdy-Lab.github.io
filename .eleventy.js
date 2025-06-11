module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    },
    pathPrefix: "/research-lab-website/"
  };
};
console.log("✅ Eleventy config loaded with pathPrefix");
