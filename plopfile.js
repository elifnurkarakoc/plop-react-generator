module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name:'
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/Components/{{pascalCase name}}/{{pascalCase name}}.js',
          templateFile: 'plop-templates/Component.js.hbs',
        },
        {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/tests/{{pascalCase name}}.test.js',
            templateFile:
              'plop-templates/Component.test.js.hbs',
          },
      ],
    });
  };