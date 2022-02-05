export interface Specie
{
    "taxonid": number,
    "scientific_name": string,
    "subspecies": null | string,
    "rank": null | string,
    "subpopulation": null | string,
    "category": "CR" | "VU" | "EX" | "EW" | "EN"
}

export const classSpecie = {
    GASTROPODA :'Gastéropode',
    ACTINOPTERYGII :'Poisson osseux',
    LILIOPSIDA :'Plante',
    MAGNOLIOPSIDA :'Plante',
    AVES :'Oiseau',
    CHONDRICHTHYES :'Poisson cartilagineux',
    AGARICOMYCETES :'Champignon',
    INSECTA :'Insecte',
    ANDREAEOPSIDA :'Mousse (végétal)',
    BRYOPSIDA :'Mousse (végétal)',
    MAMMALIA :'Mammifère',
    MALACOSTRACA :'Crustacé',
    LECANOROMYCETES :'Champignon',
    REPTILIA :'Reptile',
    ANTHOZOA :'Cnidaires',
    POLYPODIOPSIDA :'Plante',
    BIVALVIA :'Mollusque',
    AMPHIBIA :'Amphibien',
    JUNGERMANNIOPSIDA :'Plante',
    GEOGLOSSOMYCETES :'Champignon',
    ARACHNIDA :'Arachnides',
    MARCHANTIOPSIDA :'Plante'


}