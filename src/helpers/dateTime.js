export const convertUnixTime = (unixTime) => {
  const date = new Date(unixTime * 1000)
  const hours = date.getHours()
  const minutes = "0" + date.getMinutes()
  const formattedTime = hours + ':' + minutes.substr(-2)

  return formattedTime
}