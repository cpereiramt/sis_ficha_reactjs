function dateFormat(date) {
  if(date !== undefined ) {
  const dateElements = date.split("-");
  const year = dateElements[0];
  const month = dateElements[1];
  const day = dateElements[2].split('T');
  return `${day[0]}/${month}/${year}` ; 
  }
}


export {dateFormat};