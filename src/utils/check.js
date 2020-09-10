const isNullUndefined = (value) => {
  if(typeof value === undefined) return true
} 

const isBoolean = (value) => {
  if(isNullUndefined(value)) throw new Error('Valor indefinido.')

  if(typeof show === 'boolean') return true
}

const check = {
  isNullUndefined,
  isBoolean
}

export default check