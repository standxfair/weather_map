export const formatCoords = (serverData) => {
  let data = { ...serverData }
  let coords = []

  coords.push(data.coord.lat)
  coords.push(data.coord.lon)

  data.coord = coords

  return data
}