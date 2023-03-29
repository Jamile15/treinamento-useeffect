# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


/////////////////////////////////////////////////////////////////////
useEffect é um hook do React que permite que você execute efeitos colaterais em componentes funcionais. Um efeito colateral é qualquer coisa que afete algo fora do escopo da função, como uma chamada de API, manipulação de DOM ou atualização de um estado global.

O useEffect é executado após a renderização do componente e pode ser usado para configurar qualquer coisa que seu componente precise para funcionar corretamente. Ele recebe uma função de callback que pode retornar uma função de limpeza opcional. Essa função é executada quando o componente é desmontado ou quando um novo efeito é executado.

A estrutura básica de um useEffect é a seguinte:

javascript
Copy code
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // código do efeito colateral aqui
    return () => {
      // função de limpeza aqui (opcional)
    };
  }, [/* array de dependências */]);

  return (
    // componente aqui
  );
}
O array de dependências é usado para dizer ao React quando o efeito deve ser reexecutado. Se você omitir esse array, o efeito será executado após cada renderização. Se você passar um array vazio, o efeito será executado apenas uma vez, após a primeira renderização.

Em resumo, useEffect é usado para executar efeitos colaterais em componentes funcionais, como fazer chamadas de API, manipular o DOM ou atualizar um estado global. Ele é executado após a renderização do componente e pode ser usado para configurar o componente.
