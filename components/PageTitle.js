import { Text, View,  StyleSheet } from "react-native";

export default function PageTitle (props){
    return(
        <View>
            <Text style = {{color:"#105", fontSize:22}}>
                {props.title}
            </Text>
            <Text style = {{color:"#222", fontSize:15}}>
                {props.text}
            </Text>
        </View>
    )
}
