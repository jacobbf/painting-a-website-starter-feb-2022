module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src");
  
  eleventyConfig.addPassthroughCopy({
    "src/public": "/"
  });

  return {
    dir: {
      input: "src",
      includes: "/components",
    },
  }
}