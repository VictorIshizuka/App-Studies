# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## Praticando Typescript com App-Studies

- Utilizando classes para criar componentes de renderização;\
- Descontinuando class e mundando para funções;\
- Uso de CSS Sass;\
- Uso de CSS modules;\
- Uso de Typescript;\
- Funciona o ciclo de vida de um componente;\
- Utilizar função recursiva;

### Funcionalidades:

- ação de criar task: OK;\
- ação de startar o cronômetro: OK;\
- identificação do id para inicar cada task: OK;\
- deletar task: FALTA ADICIONAR;\
- atualizar task: FALTA ADICIONAR;\
- ação de filtro: FALTA ADICIONAR;\
- demais funções a se pensar ( será necessário um gerenciador de estados antes de tudo e refatorar  alguns componentes).

## Comoando iniciais

- npm i
- npm run dev

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
