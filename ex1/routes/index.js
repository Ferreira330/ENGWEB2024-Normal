var express = require('express');
var router = express.Router();
var Contrato = require('../controller/contrato')
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Listar os Contratos (R) */
router.get('/contratos', function(req, res) {
  if(req.query.entidade){ //?entidade=EEEE
    const ent = req.query.entidade
    Contrato.findByEntidade(ent)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  else if(req.query.tipo){ //?tipo=AAA
    const tipo = req.query.tipo
    Contrato.findByTipo(tipo)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  else {
    Contrato.list()//só /contratos
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
});

router.get('/contratos/entidades', function(req, res) {
  Contrato.findEntidades()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/contratos/tipos', function(req, res) {
  Contrato.findTipos()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/contratos/:id', function(req, res) {
  Contrato.findById(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.post('/contratos', function(req, res) {
  Contrato.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.delete("/contratos/:id", function(req, res) {
  Contrato.deleteContrato(req.params.id)
    .then(resultado => {
      res.jsonp(resultado)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção da lista"})
    })
});

router.put('/contratos/:id', function(req, res) {
  Contrato.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updatedContrato => {
          if (!updatedContrato) {
              return res.status(404).send();
          }
          res.send(updatedContrato);
      })
      .catch(error => {
          res.status(500).send(error);
      });
});

module.exports = router;
