import {AppTextBold} from 'AppTextBold'
import React from 'react'
import {TouchableOpacity,TouchableNativeFeedback,Platform,View,StyleSheet} from 'react-native'
export const AppButton =({children,onPress,color=THEME.MAIN_COLOR})=>{
    const wrapper=Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    <Wrapper activeOpacity={0.7} onPress={}>
        <View style={...styles.button,backgroundColor:color}>
            <AppTextBold style={styles.text}>{children}</AppTextBold>
        </View>
    </Wrapper>
}
const styles=StyleSheet.create({
    button:{
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    text:{

    }
})