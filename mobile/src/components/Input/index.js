import React, { forwardRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { themas } from "../../global/themes";
import { style } from "./styles";


export const Input = forwardRef((props, ref) => {
    const { IconLeft, IconRigth, iconLeftName, iconRightName, title, onIconLeftPress, onIconRigthPress, ...rest } = props;

    const calculateSizeWidth = () => {
        if (IconLeft && IconRigth) {
            return '80%';
        } else if (IconLeft || IconRigth) {
            return '90%';
        } else {
            return '100%';
        }
    };

    const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRigth) {
            return 0;
        } else if (IconLeft || IconRigth) {
            return 10;
        } else {
            return 20;
        }
    };

    return (
        <>
            {title && <Text style={style.titleInput}>{title}</Text>}
            <View style={[style.boxInput, { paddingLeft: calculateSizePaddingLeft() }]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={iconLeftName} size={20} color={themas.Colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput 
                    {...rest}
                    style={[style.input, { width: calculateSizeWidth() }]}
                    ref={ref}
                />
                {IconRigth && iconRightName && (
                    <TouchableOpacity onPress={onIconRigthPress} style={style.Button}>
                        <IconRigth name={iconRightName} size={20} color={themas.Colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </>
    );
});
