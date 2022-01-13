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
      ],
    });
  };