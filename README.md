
# Projeto Next.js

Este é um projeto Next.js criado com `create-next-app`.

## Primeiros Passos

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

Você pode começar a editar a página modificando o arquivo `pages/index.js`. A página será atualizada automaticamente à medida que você editar o arquivo.

As rotas da API podem ser acessadas em [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint pode ser editado em `pages/api/hello.js`.

O diretório `pages/api` é mapeado para `/api/*`. Os arquivos nesse diretório são tratados como rotas de API em vez de páginas React.

## Saiba Mais

Para aprender mais sobre o Next.js, consulte os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - conheça os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Confira também o repositório do [Next.js no GitHub](https://github.com/vercel/next.js/). Seu feedback e contribuições são bem-vindos!

## Implantação no Vercel

A forma mais fácil de implantar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), criadora do Next.js.

Consulte nossa [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

## Executando o Container Docker
Para buildar a imagem do container mysql baseado no arquivo `CreateDatabase.sql`. Use o comando `docker build`





```bash
docker build -t <nome_da_imagem> <caminho_do_dockerfile>
```

Para executar o container Docker com o nome "os_pi_project" usando o comando `docker run`, você pode fazer o seguinte:


```bash
docker run --name os_pi_project -d -p 3306:3306 database_pi
```

Este comando executará um container em segundo plano com o nome "os_pi_project" e mapeará a porta 3306 do container para a porta 3306 do host. Certifique-se de substituir "database_pi" pela imagem Docker que deseja usar.
