const mongoose = require("mongoose");

const utenteSchema = mongoose.Schema({
  id_utente: String,
  nome: String,
  cognome: String,
  email: String,
  cicli_allenamento: [
    {
      id_ciclo: String,
      data_inizio: String,
      data_fine: String,
      settimane_allenamento: [
        {
          id_settimana: String,
          numero_settimana: Number,
          schede_allenamento: [
            {
              id_scheda: String,
              descrizione_scheda: String,
              esercizi: Array,
            },
          ],
        },
      ],
    },
  ],
});

module.exports = utenteSchema;
