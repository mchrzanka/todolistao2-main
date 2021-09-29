/* 
        dataFetcher (url)

        descritpion:

        parameters:
         url:string

         async ----> promise
*/ 
 
 
 const dataFetcher = async function (url=null){
      const response = await fetch(url)
      const data = await response.json()

      return data
 }
 
 export default dataFetcher