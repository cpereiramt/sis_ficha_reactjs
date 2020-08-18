

/* function urlencodeFormData(fd){
    var s = '';
    function encode(s){ return encodeURIComponent(s).replace(/%20/g,'+'); }
    for(var pair of fd.entries()){
        if(typeof pair[1]=='string'){
            s += (s?'&':'') + encode(pair[0])+'='+encode(pair[1]);
        }
    }
    return s;
} */

function CreateRegister(data) {
  var prms = new URLSearchParams({
    ...data
  });
    fetch('http://localhost:3002/inserir/ficha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: prms
}).then((res) => 
 { if (res.ok) {
  return res.json();
} else {
  throw new Error('Bad REQUEST');
} })
.then((data) =>  {
  alert('Dados inseridos com sucesso !')  
  console.log(data)
})
.catch((err)=>   {
  console.log(err)
  alert('Não salvo, favor verifcar as informações inseridas !')   
})
}

function AlterRegister(data) {
  var prms = new URLSearchParams({
    ...data
  });
  fetch('http://localhost:3002/alterar/fichas/' + data.numFicha, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: prms
  }).then((res) => 
  { if (res.ok) {
   return res.json();
 } else {
   throw new Error('Bad REQUEST');
 } })
 .then((data) =>  {
   alert('Dados Alterados com sucesso !')  
   console.log(data)
 })
 .catch((err)=>   {
   console.log(err)
   alert('Nada Alterado, favor verifcar as informações inseridas !')   
 })
}

function DeleteRegister(data) {
  fetch('http://localhost:3002/delete/fichas/' + data.numFicha, {
    method: 'DELETE',
    }).then((res) => 
    { if (res.ok) {
     return res.json();
   } else {
     throw new Error('Bad REQUEST');
   } })
   .then((data) =>  {
     alert('Dados Excluidos com sucesso !')  
     console.log(data)
   })
   .catch((err)=>   {
     console.log(err)
     alert('Nada Excluido, favor verifcar as informações inseridas !'); 
   })
}


export {CreateRegister, AlterRegister, DeleteRegister};