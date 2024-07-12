
# Task List Vue & Node

Projeto de Task List, para que você possa cadastrar suas tarefas do dia a dia, alterar tarefas, excluir tarefas e concluir tarefas.



## Instalação

Faça o **download** do projeto ou faça um **fork** do projeto, com o projeto na sua máquina devemos primeiro fazer as instalações do npm, acesse a pasta server do projeto e instale usando:

```bash
npm install
```

Após a Instalação do npm estar concluída vamos iniciar o nosso container do **docker**, muito importante ter o [Docker](https://www.docker.com/products/docker-desktop/) instalado na máquina, com o Docker instalado rode o comando na pasta server:
```bash
docker compose up -d
```

Depois de instalado vamos fazer nosso banco de dados existir, estou utilizando neste projeto Sequelize para trabalhar com o banco de dados de forma mais eficiênte, prática e para testar esta ferramenta. Para que possamos fazer o **migrate** do branco usamos o comando:
```bash
npm run migrate
```

Agora com tudo instalado devemos só executar nosso back-end com o comando:
```bash
npm run dev
```

Nosso backend está completamente configurado, agora vamos para o nosso front-end. Precisamos acessar a pasta do to-do-list, nesta pasta vamos rodar apenas dois comandos:
```bash
npm install
```

E depois que instalar precisamos rodar:
```bash
npm run dev
```

E pronto, nosso projeto está instalado e rodando.

Podemos acessar agora nossa rota
http://localhost:5173/
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/gabrielsouzaleite)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-souza-leite-41768b1b5/)

