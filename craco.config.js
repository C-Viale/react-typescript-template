const path = require("path");
module.exports = {
  webpack: {
    alias: {
      'components': path.resolve(__dirname, "./src/components/"),
      'styles': path.resolve(__dirname, "./src/styles/"),
      'core': path.resolve(__dirname, "./src/core/"),
      'http': path.resolve(__dirname, "./src/infra/http/"),
      'interfaces': path.resolve(__dirname, "./src/infra/interfaces/"),
      'utility': path.resolve(__dirname, "./src/utility/"),
      'config': path.resolve(__dirname, "./src/config/"),
      'public': path.resolve(__dirname, "./public/")
    }
  }
}