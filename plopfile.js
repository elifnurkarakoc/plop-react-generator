module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/tests/{{pascalCase name}}.test.js",
        templateFile: "plop-templates/Component.test.js.hbs",
      },
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/Component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/index.js.hbs",
      },
      {
        type: 'add',
        path: 'src/components/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/Components/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}/{{pascalCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/Components/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `{{pascalCase name}},`,
      },
    ],
  });
};
