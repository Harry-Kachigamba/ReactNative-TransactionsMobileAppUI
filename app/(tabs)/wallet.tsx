import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Wallet() {
    return (
        <View style={styles.container}>
            <Text>Wallet Page</Text>

            <StatusBar style='dark' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});