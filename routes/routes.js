module.exports = (express, sequelize) => {
  const router = express.Router();
  const user = require('./users')(router);

  /**
  res.download()	Solicita que seja efetuado o download de um arquivo
  res.end()	Termina o processo de resposta.
  res.json()	Envia uma resposta JSON.
  res.jsonp()	Envia uma resposta JSON com suporta ao JSONP.
  res.redirect()	Redireciona uma solicitação.
  res.render()	Renderiza um modelo de visualização.
  res.send()	Envia uma resposta de vários tipos.
  res.sendFile	Envia um arquivo como um fluxo de octeto.
  res.sendStatus()	Configura o código do status de resposta e envia a sua representação em sequência de caracteres como o corpo de resposta.
   */

  router.use('/user', user);

  router.get('/', (req, res) => {
    res.json(
      {
        response: 'main'
      }
    )
  })

  return router;
}
