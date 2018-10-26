Aplicação para fins de avaliação técnica criada com [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure

Abaixo segue um resumo da estrutura de folders:

```
src/
  components/
  network/
  reducers/
  scenes/
  services/
  store/
```

Uma breve descrição da cada um e sua responsabilidade:

* `components` contém todos os componentes/átomos compartilhados pela aplicação em mais de uma ocasião.
* `network` contém as configurações do Axios e de endpoints da API.
* `reducers` contém o reducer base que exporta todos os estados da aplicação para a store do Redux.
* `scenes` contém os containers da aplicação separados por domains, em outros padrôes de estrutura de diretórios pode ser conhecido como `modules` ou `screens`.
* `services` contém arquivos (Reducers, Actions, Types)  do state container (Redux) utilizado, separado por domains.
* `store` contém a store do Redux.

### `npm install`

Execute este comando para instalar todas as dependências da aplicação.

### `npm start`

Execute para inicializar  aplicação em ambiente de desenvolvimento.<br>
Acesse [http://localhost:3000](http://localhost:3000) para visualizar no seu browser.

A página irá atualizar automaticamente quando houver qualquer alteração.<br>
Caso ocorra algum erro de sintáxe será logado no seu terminal.


### `npm test a`

Este comando irá executra uma serie de tests unitários simples nos componentes compartilhados.

### `npm run build`

Gera uma build de produção no folder `build`.<br>

### `Static Server`

Para rodar um ambiente estático de HTTP local para servir o build da aplicação você pode instalar o pacote node [serve](https://github.com/zeit/serve) e seguir os comandos abaixo:

```js
npm install -g serve
serve -s build
```

Em seguida é so acessar no seu browser [http://localhost:5000](http://localhost:5000) pra visualização.
