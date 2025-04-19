const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;

module.exports = {
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    },
  };
