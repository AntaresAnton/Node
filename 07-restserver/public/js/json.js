
const apiExamen=async(pagina)=>{
    let url="http://localhost:8080/api/usuarios?limite=" + pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado");
    divRes.innerHTML=""
    // el foreach es para el bucle :)
    data.usuarios.forEach(usuarios=> {
        // esto es para que haga el bucle del array :
        divItem=document.createElement('tr')
        // El card
            divItem.innerHTML=`
            <td scope="row">${usuarios._id}</td>
            <td>${usuarios.nombre}</td>
            <td>${usuarios.correo}</td>
            <td>${usuarios.rol}</td>
            <td>${usuarios.estado}</td>
            

            `
            divRes.appendChild(divItem);
    });
}
apiExamen(15);

