import { apiUri } from "./apiConfig";

const EndPoint = "clientes";

export async function get(){
    const response = await fetch(`${apiUri}/${EndPoint}`,
        {method: "GET"}
    );
    const dataResponse = await response.json();
    return dataResponse;
}

export async function getById(id:number){

    const response = await fetch(`${apiUri}/${EndPoint}/${id}`,
        {method: "GET"}
    );
    const dataResponse = await response.json();
    return dataResponse;
}

export async function post({dataRegister}:any){
    const response = await fetch(`${apiUri}/${EndPoint}`,
        {method: "POST",
         headers:{
                'Content-Type': "application/json",
                 "charset":"utf-8"
         },
         body: JSON.stringify(dataRegister)

        }
    );
    const dataResponse = await response.json();
    return dataResponse;
}

export async function put({dataRegister, id}:{dataRegister:any, id:number} ){
    const response = await fetch(`${apiUri}/${EndPoint}/${id}`,
        {method: "PUT",
         headers:{
                'Content-Type': "application/json",
                 "charset":"utf-8"
         },
         body: JSON.stringify(dataRegister)

        }
    );
    const dataResponse = await response.json();
    return dataResponse;
}

export async function apagar(id:number){

    const response = await fetch(`${apiUri}/${EndPoint}/${id}`,
        {method: "DELETE"}
    );
    const dataResponse = await response.json();
    return dataResponse;
}