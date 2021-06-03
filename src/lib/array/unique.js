function unique(array) {
  const set = new Set()
  const newArray = []
  array.forEach((item) => {
    const key = typeof item + JSON.stringify(item)
    if (set.has(key)) { return }
    set.add(key)
    newArray.push(item)
  })
  return newArray
}
