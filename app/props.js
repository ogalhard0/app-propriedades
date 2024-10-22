import { View, StyleSheet } from "react-native";
import PageTitle from "../components/PageTitle";

export default function App() {
    return (
        <View style={styles.container}>
            <PageTitle title="Título passado por props" text="Texto do props"/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
});




            