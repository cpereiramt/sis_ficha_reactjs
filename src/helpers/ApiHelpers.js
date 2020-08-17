

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
  alert(data.numFicha);
  var prms = new URLSearchParams({
    ...data
  });
  console.log(prms.toString());
    fetch('http://localhost:3002/inserir/ficha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: prms
})}

function AlterRegister(data) {
  var prms = new URLSearchParams({
    ...data
  });
  console.log(data.numFicha);
  console.log(prms.toString());
  fetch('http://localhost:3002/alterar/fichas/' + data.numFicha, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: prms
  });
}

function DeleteRegister(data) {
  fetch('http://localhost:3002/delete/fichas/' + data.numFicha, {
    method: 'DELETE',
    });
}


export {CreateRegister, AlterRegister, DeleteRegister};