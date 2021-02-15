export class Http{
    static HEADERS={'Content-Type':"application/json"}
    static async get(url){
        try{
            return await request(url,"GET")

        }catch(e){
            
        }
    }
    static async put(url,data={}){
        try{
            return await request(url,"POST",data)

        }catch(e){
            
        }
    }
    static async delete(url){
        try{
        
            return await request(url,"DELETE")
         
        }catch(e){
            
        }
    }
    static async patch(url,data={}){
        try{
            return await request(url,"PATCH",data)
        }catch(e){
            
        }
    }
}
async function request(url,method="GET",data){
    const config={
        method,
        headers:Http.HEADERS
    }
    if(method=='POST' || method=='PATCH'){
        config.body=JSON.stringify(data)
    }
    const response=await fetch(url,config)
}