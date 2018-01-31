const categories = {
  generale: 'teal',
  logistica: 'blue',
  problematica: 'yellow',
  incidente: 'red',
}

export const getLabelColor = (category) => (
  categories[category.toLowerCase()] || 'grey'
)