
const apiUri = "http://192.168.13.243:3500"

export async function AuthLogin( login:string , password:string){
    try {
        const payload = {
            "login": login,
            "password" : password
        }
        const response = await fetch( `${apiUri}/auth/login`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const resultado = await response.json();
        console.log('Login validado com sucesso:', resultado);
        return resultado;

    } catch (erro) {
        console.error('Erro ao criar:', erro);
        return null
    }

}

interface UserProsp {
    id? : number,
    name : string,
    login : string ,
    password : string
}

export async function AuthRegister( {name, login, password }:UserProsp){

    try {
        const userPayload:UserProsp = {
            name,login, password
        }
        const response = await fetch( `${apiUri}/auth/register` , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(userPayload)
        });
        const resultado = await response.json();
        console.log('Criado com sucesso:', resultado);

        return resultado;
    } catch (error) {
        console.error('Erro ao criar:', error);
        return null;
    }
}