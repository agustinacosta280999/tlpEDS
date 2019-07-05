//let restaurant
/*
nombre
direccion
capacidad
clientesActuales
*/

//establecer la capacidad
//incrementar la cantidad de clientes
//decrementar la cantidad de clientes
//verificarDisoinibilidad, recibe la cantidad de personas

let bar={
nombre: 'gringobar',
direccion: 'AV9dejulio538',
capacidad: 0,
clientesActuales: 0,
setCapacidad: function (cant) {
  this.capacidad = cant

} ,
incClientes: function (clientes) {
  this.clientesActuales = clientes


},
decclientes: function(clientes){
    this.clientesActuales-=clientes
},

verificarDisponibilidad: function (disponibles) {
    let cantidadDisponible = this.capacidad - this.clientesActuales
    if (cantidadDisponible>= clientes){
        return true
    }
return false
},
mostrarInfo: function(){
   return " capacidad: "+ this.capacidad +
    " su dirección: "+ this.direccion +
     " clientes actuales: " + this.clientesActuales + 
     " lugares disponibles: "  + (this.capacidad - this.clientesActuales)
}
}


bar.setCapacidad(40)
console.log(bar.mostrarInfo())
bar.incClientes(25)
console.log(bar.mostrarInfo())
bar.incClientes(20)
console.log(bar.mostrarInfo())
bar.decclientes(5)
console.log(bar.mostrarInfo())
console.log(bar.capacidad)
console.log(bar.clientesActuales)