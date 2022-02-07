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
        frenchName: 'Cnidaires'
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
        frenchName: 'Arachnides'
    },
    {
        latinName: 'MARCHANTIOPSIDA',
        frenchName: 'Plante'
    }


]
