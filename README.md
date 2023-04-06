# Framework Api Nodejs
 
### Sequelize CLI

##### Migration
1. Create Migration
2. Revert Most Recent
3. Revert All

```
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all
```

##### Seeds
1. Create Seeds
2. Running Seeds
3. Revert All

```
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
```

Estrutura

Services : Camada de serviços: responsável por realizar a lógica de negócios, manipular os dados e interagir com a camada de persistência (banco de dados).

MVC (Model-View-Controller): um padrão que separa a aplicação em três componentes principais - o modelo, a visão e o controlador - com o objetivo de melhorar a modularidade e a manutenção do código. Nesse padrão, o modelo representa a camada de dados, a visão representa a interface do usuário e o controlador é responsável por intermediar a comunicação entre o modelo e a visão.

Factory Method: um padrão que define uma interface para criar objetos, mas permite que as subclasses decidam qual classe instanciar. Esse padrão é útil quando há uma família de classes relacionadas, mas a decisão de qual classe instanciar depende do contexto da aplicação.

Singleton: um padrão que garante que apenas uma única instância de uma classe seja criada e usada durante toda a execução do programa. Esse padrão é útil quando há recursos limitados ou quando se deseja compartilhar uma única instância de uma classe em toda a aplicação.

Repository: um padrão que separa a lógica de persistência dos dados da lógica de negócio da aplicação. Esse padrão é útil quando se deseja abstrair o acesso ao banco de dados e tornar a aplicação mais modular e fácil de testar.

**Observer: um padrão que define uma dependência de um para muitos entre objetos, de forma que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente. Esse padrão é útil quando se deseja separar o código que produz eventos do código que reage a esses eventos.**