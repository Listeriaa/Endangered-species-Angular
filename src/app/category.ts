export interface Category  {
    categoryName: "CR" | "VU" | "EX" | "EW" | "EN"
    categoryMessage :string
    badgeClass: string
}

const CR: Category = {
    categoryName: "CR",
    categoryMessage: "En danger critique",
    badgeClass: "bg-danger",
  }
  const VU: Category = {
    categoryName: "VU",
    categoryMessage: "Vulnérable",
    badgeClass: "bg-warning text-dark"
  }
  
  const EX: Category = {
    categoryName: "EX",
    categoryMessage: "Eteint",
    badgeClass: "bg-dark",
  }
  const EW: Category = {
    categoryName: "EW",
    categoryMessage: "Eteint à l'état sauvage",
    badgeClass: "bg-dark",
  }
  const EN: Category = {
    categoryName: "EN",
    categoryMessage: "En danger",
    badgeClass: "bg-danger"
  }
  export const categoryOption  = [CR, EX, EW, EN, VU]