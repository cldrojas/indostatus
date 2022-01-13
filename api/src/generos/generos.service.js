class GenerosService {
  constructor() {
    this.generos = [
      { id: 1, name: 'masculino' },
      { id: 2, name: 'femenino' },
    ]
  }

  async create(data) {
    const newGenero = {
      id: this.generos.length + 1,
      ...data,
    }
    this.generos.push(newGenero)
    return newGenero
  }

  async find() {
    return this.generos
  }

  async findOne(id) {
    return this.generos.find((genero) => genero.id === id)
  }

  async update(id, changes) {
    const index = this.generos.findIndex((genero) => genero.id === id)
    if (index === -1) {
      throw new Error('Genero no encontrado')
    }
    this.generos[index] = changes
    return this.generos[index]
  }

  async delete(id) {
    const index = this.generos.findIndex((genero) => genero.id === id)
    if (index === -1) {
      throw new Error('Genero no encontrado')
    }
    this.generos.splice(index, 1)
    return { id }
  }
}

module.exports = GenerosService
