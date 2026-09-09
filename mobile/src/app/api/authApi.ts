
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
        console.log('Criado com sucesso:', resultado);
        return resultado;

    } catch (erro) {
        console.error('Erro ao criar:', erro);
        return null
    }

}