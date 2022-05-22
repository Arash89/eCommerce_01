export const getCompaniesColor = (companyName: string) => {
  switch (companyName) {
    case "Google":
      return { red: 255, green: 122, blue: 0 }
    case "Adobe":
      return { red: 255, green: 40, blue: 70 }
    case "Intuit":
      return { red: 160, green: 122, blue: 255 }
    case "Amazon":
      return {red: 122, green: 255, blue: 0}
    default:
      return {red: 0, green: 122, blue: 255}
  }
}
