const EsBuild = require('esbuild');

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src");
  
  eleventyConfig.addPassthroughCopy({
    "src/public": "/"
  });

  eleventyConfig.on('afterBuild', () => {
    EsBuild.buildSync({
      entryPoints: ["./src/scripts/index.js"],
      bundle: true,
      outfile: "_site/index.js",
    });
  })

  return {
    dir: {
      input: "src",
      includes: "/components",
    },
  }
}