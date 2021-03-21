import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { encryptStorage, decryptStorage, removeEncryptStorage } from "../functions"

export default function App() {
    const [text, setText] = React.useState("");
    const [encrypted, setEncrypted] = React.useState("")

    return (
        <View style={styles.container}>
            <TextInput placeholder="Type text here" style={styles.inputText} value={text} onChangeText={(inText) => setText(inText)} />
            <Text>{encrypted}</Text>
            <TouchableOpacity style={styles.saveItemContainer} onPress={async () => {
                setText("")
                await encryptStorage("newItem", text) // store with encryption
            }}>
                <Text style={styles.BtnText}>Save Item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loadItemContainer} onPress={() => decryptStorage("newItem").then(res => setEncrypted(res)).catch(ex => console.log(ex))}>
                <Text style={styles.BtnText}>Load an item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.remoteItemContainer} onPress={async () => {
                await removeEncryptStorage("newItem"); // remote from cache
                setEncrypted(""); // remote rendered text from dom
            }}>
                <Text style={{
                    textAlign: "center", color: "white"
                }}>Remove Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    BtnText: {
        textAlign: "center"
    },
    saveItemContainer: {
        marginTop: 10,
        backgroundColor: "lightblue",
        width: 250,
        padding: 5,
        borderRadius: 50
    },
    loadItemContainer: {
        marginTop: 10,
        backgroundColor: "orange",
        width: 250,
        padding: 5,
        borderRadius: 50
    },
    remoteItemContainer: {
        marginTop: 10,
        backgroundColor: "red",
        width: 250, padding: 5,
        borderRadius: 50
    },
    inputText: {
        borderWidth: 1,
        width: 250,
        height: 40,
        borderRadius: 50
    }
})
