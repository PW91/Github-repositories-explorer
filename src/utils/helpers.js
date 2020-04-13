export const parseJSON = str => {
  let parsed
  try {
    parsed = JSON.parse(str)
  } catch {
    parsed = false
  }
  return parsed
}
