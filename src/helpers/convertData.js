const convertData = (data , type)=>{
     const convertedData = data[type].map(data =>{
         const date = new Date(data[0])
        return{
            date :`${date.getDate()}. ${date.getHours()}`, 
            [type] : data[1],
        }
     })
     return convertedData;
}

export default convertData;