export interface NameApi {
    taxonname:string,
    primary:boolean,
    language:string
}

export interface ClassApi {
    latinName: string,
    frenchName: string
}
export interface Specie {
    "taxonid": number,
    "scientific_name": string,
    "subspecies": null | string,
    "rank": null | string,
    "subpopulation": null | string,
    "category": "CR" | "VU" | "EX" | "EW" | "EN",
    "class"?: ClassApi
}

export const classArray: ClassApi[] = [
    {
        latinName: 'GASTROPODA',
        frenchName: 'Gastéropode',
    },
    {
        latinName: 'ACTINOPTERYGII',
        frenchName: 'Poisson osseux'
    },
    {
        latinName: 'LILIOPSIDA',
        frenchName: 'Plante'
    },
    {
        latinName: 'MAGNOLIOPSIDA',
        frenchName: 'Plante'
    },
    {
        latinName: 'AVES',
        frenchName: 'Oiseau'
    },
    {
        latinName: 'CHONDRICHTHYES',
        frenchName: 'Poisson cartilagineux'
    },
    {
        latinName: 'AGARICOMYCETES',
        frenchName: 'Champignon'
    },
    {
        latinName: 'INSECTA',
        frenchName: 'Insecte'
    },
    {
        latinName: 'ANDREAEOPSIDA',
        frenchName: 'Mousse (végétal)'
    },
    {
        latinName: 'BRYOPSIDA',
        frenchName: 'Mousse (végétal)'
    },
    {
        latinName: 'MAMMALIA',
        frenchName: 'Mammifère'
    },
    {
        latinName: 'MALACOSTRACA',
        frenchName: 'Crustacé'
    },
    {
        latinName: 'LECANOROMYCETES',
        frenchName: 'Champignon'
    },
    {
        latinName: 'REPTILIA',
        frenchName: 'Reptile'
    },
    {
        latinName: 'ANTHOZOA',
        frenchName: 'Cnidaire'
    },
    {
        latinName: 'POLYPODIOPSIDA',
        frenchName: 'Plante'
    },
    {
        latinName: 'BIVALVIA',
        frenchName: 'Mollusque'
    },
    {
        latinName: 'AMPHIBIA',
        frenchName: 'Amphibien'
    },
    {
        latinName: 'JUNGERMANNIOPSIDA',
        frenchName: 'Plante'
    },
    {
        latinName: 'GEOGLOSSOMYCETES',
        frenchName: 'Champignon'
    },
    {
        latinName: 'ARACHNIDA',
        frenchName: 'Arachnide'
    },
    {
        latinName: 'MARCHANTIOPSIDA',
        frenchName: 'Plante'
    }


]

export const threatArray = [
  {
    codes : ['1','2','3','4','7'],
    message : "Modification de l'écosystème induite par l'homme"
  },
  {
    codes: ['5', '6'],
    message : "Exploitation, harcèlement ou mortalité directe d'espèces indigènes"
  },
  {
    codes: ['10', '11'],
    message : "Changements climatiques ou causes naturelles (volcanisme, tremblements de terre...)"
  },
  {
    codes: ['8'],
    message : "Compétition / prédation / contamination par des espèces envahissantes"
  },
  {
    codes: ['9'],
    message : "Pollution"
  }
]

export type Threat = typeof threatArray
