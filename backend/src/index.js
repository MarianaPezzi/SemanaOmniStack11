const express = require('express'); 
const cors = require('cors'); 
const routes = require('./routes');


const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/** 
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" ("Filtros, paginação")
  * Route Params: Parâmeteos utilizados para identificar recursos
  * Request Body: Corpo da requisição, utizado para criar ou alterar recursos (usuarios por exemplo)
  */

/**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select ('*').where()
  */
