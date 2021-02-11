import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    textHeader: {

        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: '#AAAAAA',
        textShadowColor:'rgba(255,255,0,0.75)',
        textShadowOffset: {width: 0.2, height: 0.2},
        textShadowRadius: 2

    }, 

    container: {
        backgroundColor: '#21209C',
        height: 70,        
        marginBottom: 20,        
        justifyContent: 'center',
        alignItems: 'center'
    }
})