import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:3000'
})
// Api.interceptors.request.use(
//     console.log(request)
// )
// Api.interceptors.response.use(
//     function (response) {
//         console.log('OK')
//     },
//     function (error) {
//         if (!error.status) {
//             console.log("sem conexao com a internet")
//         } else { console.log(error) }
//     }
// )
export default Api;


// import axios from 'axios';

// const httpClient = axios.create({
//     baseURL: process.env.VUE_APP_API_URL, // URL padrão da sua aplicação
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// httpClient.interceptors.request.use(async (config) => {
//     // Validar se a request é privada e adicionar token à requisição
//     return config;
// });

// httpClient.interceptors.response.use(
//     (response) => {
//         // Retornar apenas os dados para a resposta no 'then()', dessa forma os arquivos que
//         // consumirem essa service terão apenas os dados necessários no momento de consulta
//         return response.data;
//     },
//     (error) => {
//         // É possível lidar com as requisições que dão erro aqui, lidando com códigos de retorno
//         //  específicos ou de maneira geral
//         return Promise.reject(error);
//     }
// );

// export default httpClient;