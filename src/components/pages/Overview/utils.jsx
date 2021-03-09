export const paginate = (owners) => {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(owners.length / itemsPerPage)

  const newOwners = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return owners.slice(start, start + itemsPerPage)
  })
  return newOwners
}
