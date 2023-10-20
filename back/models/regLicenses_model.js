import mongoose from "mongoose"

const schema = new mongoose.Schema({
  legajo: {
    type: Number,
    required: true
  },
  nroExpediente: {
    type: Number,
    required: true
  },
  enfermedadCD: {
    diasAcordados: {
      type: Number,
      required: true
    },
    totalAcumulados: {
      type: Number,
      required: true
    }
  },
  enfermedadLD: {
    diasAcordados: {
      type: Number,
      required: true
    },
    totalAcumulados: {
      type: Number,
      required: true
    }
  },
  estudios: {
    diasAcordados: {
      type: Number,
      required: true
    },
    totalAcumulados: {
      type: Number,
      required: true
    }
  },
  inciso9AnticipoLic: {
    diasAcordados: {
      type: Number,
      required: true
    },
    totalAcumulados: {
      type: Number,
      required: true
    }
  },
  familiarEnfermo: {
    diasAcordados: {
      type: Number,
      required: true
    },
    totalAcumulados: {
      type: Number,
      required: true
    }
  },
  anualReglamentaria: {
    pendiente: {
      type: Number,
      required: true
    },
    acordadaPPeriodo: {
      type: Number,
      required: true
    },
    totalAcumulada: {
      type: Number,
      required: true
    },
    diasTomados: {
      type: Number,
      required: true
    },
    saldo: {
      type: Number,
      required: true
    }
  },
  diaFem: {
    diasAcordados: {
      type: Number,
      required: true
    },
    totalAcumulados: {
      type: Number,
      required: true
    }
  },
  anticipoLic: {
    diasAcordados: {
      type: Number,
      required: true
    },
    totalAcumulados: {
      type: Number,
      required: true
    }
  },
  fechaDeUtilizacion: {
    desde: {
      dia: {
        type: Number,
        required: true
      },
      mes: {
        type: Number,
        required: true
      },
      año: {
        type: Number,
        required: true
      }
    },
    hasta: {
      dia: {
        type: Number,
        required: true
      },
      mes: {
        type: Number,
        required: true
      },
      año: {
        type: Number,
        required: true
      }
    }
  },
  observaciones: {
    type: String,
    required: false
  }
})

export const RegistroDeLicencia = mongoose.model('regDeLicencia', schema)