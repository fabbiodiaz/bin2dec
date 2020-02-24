# bin2dec

> ## Resumo
*Bin2Dec* é um projeto conceitual de construção de um página responsiva que funciona como um conversor de números binários para decimal.

> ## Escopo do projeto
Criar uma ferramenta de conversão de número binário pada decimal atendendo as seguintes premissas:
-   [ ] O usuário deve entrar com um número binário válido para proceder com a conversão.
-   [ ] O Usuário deverá ser notificado se a entrada não for um número binário válido.
-   [ ] O usuário deverá ter acesso a um único campo de saída com o valor decimal correspondente ao número binário de entrada.
-   [ ] A página deve ser responsiva, e funcionar bem em todas as proporções de tela, e em ambas as orientações.


> ## Ferramentas utilizadas
Neste projeto, nenhum framework foi utilizado, sendo toda a página (texto, estilos e Scripts) escritos diretamente no editor de código, e dispostos em arquivos individuais,
priorizando a manutenibilidade do código e a organização do projeto.
* *Javascript*

Para viabilizar o projeto, foi necessário utilizar Javascript para realizar toda a lógica de negócio (armazenar o valor binário, converter em decimal, injetar o valor convertido no campo de saída).

* *CSS*

O CSS foi utilizado para dar forma aos componentes e garantir a responsividade. Devido a simplicidade da aplicação, não foi necessário Media Query para garantir que o layout se ajustasse bem a todas as resoluções e orientações de tela.

* *HTML*

O esquema da página consiste de um cabeçalho (Header) onde colocamos o título da página em evidência, duas divisões para o conteúdo principal (Entrada e saída de dados). A entrada de dados é feita através de um campo de input do tipo texto e um botão de ação. A SAída consiste de uma div que recebe o valor convertido internamente através do Javascript.
A página ainda conta com uma div dedicada a colocação de publicidade e um footer com um link que nos leva ao repositório do projeto no GitHub.
