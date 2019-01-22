'use strict'

const app = require('../NoFood/bin/express');
const variables = require('../NoFood/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});