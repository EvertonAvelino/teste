import React from 'react';
import { useEffect, useState } from "react"
import { StyleSheet, Text, View, Button } from 'react-native';
import api from '../services/api'


// type ProdutoList = {
//     nome: String,
//     id: integer,
// }


const Produtos = () => {
    state = {
        loggedInUser: null,
        errorMessage: '',
        projects: [],
    };
    //const [produtoList, setProdutoList] = useState < ProdutoList > ([]);

    // useEffect(() => {
    //     api.get('/api/v1/alunos')
    //         .then(response => {
    //             //setProdutoList(response.data);
    //             console.log(response.data)
    //         })

    // }, [])
    const getProjectList = async () => {
        alert('ok')
        try {
            const response = await api.get('/api/v1/alunos');
            console.log(response.data)
            const { projects } = response.data;

            this.setState({ projects });
            console.log(this.state)
        } catch (err) {
            this.setState({ errorMessage: err.data.error });
        }
    };
    return (
        <View>
            <Button onPress={getProjectList} title="Carregar projetos" />
        </View>
        // <ul>
        //     {/* {produtoList.map(prod => {
        //         return (
        //             <li key={prod.nome}>
        //                 <strong>{prod.nome}</strong>
        //             </li>
        //         )
        //     })} */}
        // </ul>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 30
    }
});

export default Produtos;


