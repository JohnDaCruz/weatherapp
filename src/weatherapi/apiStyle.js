import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputCity: {
        borderColor: '#fff',
        borderWidth: 2,
        width: 200,
        height: 40,
        borderRadius: 10,
        marginLeft: 90,
        marginTop: 60,
        padding: 10,
        color: '#fff'
    },
    viewCitys: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    apiDetailsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 400,
        marginLeft: 50,
        flexDirection: 'row',
        position: 'absolute',
        width: 90,
        borderWidth: 1
    },
    apiDetailsContainer2: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 400,
        marginLeft: 230,
        flexDirection: 'row',
        position: 'absolute',
        width: 90,
        borderWidth: 1
    }
})

export default styles