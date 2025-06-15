module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("img");
  
    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      }
    };
  };
  