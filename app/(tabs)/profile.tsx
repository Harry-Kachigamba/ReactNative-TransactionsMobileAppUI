import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>Profile Page</Text>

            <StatusBar style='dark' />
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});