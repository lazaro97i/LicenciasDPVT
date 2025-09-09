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
      required: false
    },
    totalAcumulados: {
      type: Number,
      required: false
    }
  },
  enfermedadLD: {
    diasAcordados: {
      type: Number,
      required: false
    },
    totalAcumulados: {
      type: Number,
      required: false
    }
  },
  estudios: {
    diasAcordados: {
      type: Number,
      required: false
    },
    totalAcumulados: {
      type: Number,
      required: false
    }
  },
  inciso9AnticipoLic: {
    diasAcordados: {
      type: Number,
      required: false
    },
    totalAcumulados: {
      type: Number,
      required: false
    }
  },
  familiarEnfermo: {
    diasAcordados: {
      type: Number,
      required: false
    },
    totalAcumulados: {
      type: Number,
      required: false
    }
  },
  anualReglamentaria: {
    pendiente: {
      type: Number,
      required: false
    },
    acordadaPPeriodo: {
      type: Number,
      required: false
    },
    totalAcumulada: {
      type: Number,
      required: false
    },
    diasTomados: {
      type: Number,
      required: false
    },
    saldo: {
      type: Number,
      required: false
    }
  },
  diaFem: {
    diasAcordados: {
      type: Number,
      required: false
    },
    totalAcumulados: {
      type: Number,
      required: false
    }
  },
  anticipoLic: {
    diasAcordados: {
      type: Number,
      required: false
    },
    totalAcumulados: {
      type: Number,
      required: false
    }
  },
  licencias: {
    diasAcordados: {
      type: Number,
      required: false
    },
    totalAcumulados: {
      type: Number,
      required: false
    }
  },
  parteMedico: {
    diasAcordados: {
      type: Number,
      required: false
    },
    totalAcumulados: {
      type: Number,
      required: false
    }
  },
  accidenteTrab: {
    diasAcordados: {
      type: Number,
      required: false
    },
    totalAcumulados: {
      type: Number,
      required: false
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
  },
  llegadasTarde: {
    type: Number,
    required: false
  }
})

export const RegistroDeLicencia = mongoose.model('regDeLicencia', schema)