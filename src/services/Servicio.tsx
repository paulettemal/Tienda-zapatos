export const extraerDatos = async()=>{
    try{
        const respuesta = await fetch("http://localhost:3000/zapatos")
        const data = respuesta.json();
        return data;
    }catch(err){
        console.log(err)
    }
}
export const extraerPorId = async(id: string)=>{
    try{
        const respuesta = await fetch(`http://localhost:3000/zapatos/${id}`)
        const data = respuesta.json();
        return data
    }catch(err){
        console.log(err)
    }
}
