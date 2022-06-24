# Dia 1

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre Git e GitHub.

Os requisitos do exercício são:

Antes de se criar um repositório é preciso criar uma pasta para ele. Para isso você deve utilizar o comando mkdir, como vimos anteriormente, e então navegar para a pasta criada com o comando cd.

Para criar um repositório você deve digitar o comando git init. É muito importante que esteja dentro da pasta criada para o repositório.

Para verificar se um repositório Git foi de fato iniciado, você pode executar o comando git status, que retorna o status do repositório, informando quais arquivos foram modificados, quais estão sendo monitorados, etc.

1. Vamos adicionar um arquivo a esta pasta para então podermos versionar as alterações feitas no novo repositório. Primeiro crie um arquivo .txt com o nome meu_arquivo e inclua a ele o texto:

Meu primeiro repositório Git.

Embora não seja necessário, é considerado uma boa prática usar o comando git status para checar quais arquivos foram modificados antes de usar o git add. Dessa forma, você consegue visualizar quais arquivos foram modificados, garantindo que executará o comando git add . sem enviar arquivos indesejados. Você também pode usar o git status após o git add. Isso mostrará quais arquivos estão no staging, que é a área de arquivos que estão preparados para serem enviados no próximo commit.

2. Adicionar (git add .)

3. Comitar (commit -m "mensagem")

4. Feito isso, agora queremos conectar nosso repositório local com um repositório remoto para enviar as novas alterações, mas antes, vamos ver como criar um repositório remoto no GitHub.

Para isso acesse o GitHub e procure o ícone com um sinal + na barra superior e ao clicar nele busca pela opção New repository. Você será redirecionado para uma página. Você deve então adicionar um nome ao seu repositório. Após fazer isso o botão Create repository será habilitado e ao clicar nele seu repositório será criado.

Para conectar os dois repositórios você deverá abrir o seu terminal, acessar o diretório do seu repositório e então executar o seguinte comando:

git remote add origin git@github.com:user-github/repo-name.git 
(No lugar da URL git@github.com:user-github/repo-name.git deve ir a gerada pelo seu repositório)

5. Empurre as alterações do repositório local para o repositório remoto (git push -u origin nome_da_branch)
