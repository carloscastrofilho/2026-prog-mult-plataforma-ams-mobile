1.  https://www.youtube.com/watch?v=Yh6Qlg2CYwQ&list=PLsXDmrmFV_AT17JDf-otXSNE_eH7s0uDD
    Introdução aos arquivos de layout do Expo Router

2.  https://www.youtube.com/watch?v=izZv6a99Roo&list=PLsXDmrmFV_AT17JDf-otXSNE_eH7s0uDD&index=2
    Usando um Stack Navigator com o Expo Router

    passagem de parametro entre telas:
    2.1 enviando
    <Link href ={{
            path: "telaName"
            params:{name:"teste envio"}}}
    push
    asChild >
    <Button title="proxima tela empilhada" theme="secondary" />
    </Link>
    - links dinamicos [nome]
      2.2 - recebendo e utilizando
      const params = useLocalSearchParams<name?:string>();

          uso {params.name}

3.  https://www.youtube.com/watch?v=BElPB4Ai3j0
    Usando um navegador de guias com o Expo Router

https://www.youtube.com/watch?v=yNaOaR2kIa0&t=2s

modal tela
https://www.youtube.com/watch?v=gNzuJVRmyDk&t=22s
Usando modais com o Expo Router

branch base

listar as rotas da aplicacao
npx expo-router-sitemap

saida do comando:

```bash
/login
/register
/utils\AuthContext
\(cadastros)\clientes
\(cadastros)\fornecedores
\(cadastros)\vendedores
\clientes
\index
```

create/auth-rote

1. add/fluxo-rote
2. add/context-provider
3. - add/storage

https://docs.expo.dev/versions/latest/sdk/async-storage/

npx expo install @react-native-async-storage/async-storage
