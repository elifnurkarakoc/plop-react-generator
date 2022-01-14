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
        templateFile: "templates/component/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/tests/{{pascalCase name}}.test.js",
        templateFile: "templates/component/Component.test.js.hbs",
      },
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/{{pascalCase name}}.scss",
        templateFile: "templates/component/Component.scss.hbs",
      },
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/index.js",
        templateFile: "templates/component/index.js.hbs",
      },
      {
        type: 'add',
        path: 'src/components/index.js',
        templateFile: 'templates/component/injectable-index.js.hbs',
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

  plop.setGenerator("context-api", {
    description: "Create a context-api",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Context name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/Contexts/{{pascalCase name}}Context.js",
        templateFile: "templates/context/Context.js.hbs",
      },
    ],
  });
};
