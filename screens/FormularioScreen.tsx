import { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'

export default function FormularioScreen() {

    const [titulo, setTitulo] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [lista, setLista] = useState([])

    useEffect(() => {
        console.log(lista)
    }, [lista])


    function guardar() {
        const nuevaLista: any = [...lista, { titulo, mensaje }]
        setLista(nuevaLista)

        //LIMPIAR CAMPOS
        setTitulo('')
        setMensaje('')
    }

    function eliminar(dato: any){
        const nuevaLista: any = lista.filter( (item) => item !=dato )
        setLista(nuevaLista)
    }

    type Item={
        titulo: String,
        mensaje:string
    }

    return (
        <View>
            <Text>FormularioScreen</Text>
            <TextInput
                placeholder='Ingrese título'
                onChangeText={(texto) => (setTitulo(texto))}
                value={titulo}
            />
            <TextInput
                placeholder='Ingrese Mensaje'
                onChangeText={(texto) => (setMensaje(texto))}
                value={mensaje}
            />
            <Button title='Guardar' onPress={() => (guardar())} />

            <View style={{ width: 300, borderWidth: 2, marginTop: 10 }} />

            <View style={styles.flatl}>
                <FlatList
                    data={lista}
                    renderItem={({ item } :{item:Item}) => (
                        <View style={styles.lista}>
                            <Text>Título: {item.titulo}</Text>
                            <Text>Mensaje: {item.mensaje}</Text>
                            <Button title='Eliminar' color={'red'}  onPress={()=> eliminar( item) }/>
                        </View>

                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flatl:{
        height:250
    },
    lista:{
        backgroundColor:'#c2ceba',
        marginTop:10
    }
})