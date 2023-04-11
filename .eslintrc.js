module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  rules: {
    "@next/next/no-img-element": "off"
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
