module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/custom-bootstrap.scss";
        `,
      },
    },
  },
};
