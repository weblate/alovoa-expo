import * as React from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { AlertModel } from '../types';

const Alert = ({ visible = false, setVisible, message = "", buttons = [] }: AlertModel) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <Dialog.Content>
                    <Text variant="bodyMedium">{message}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    {
                        buttons.map((item, index) => (
                            <Button key={index} onPress={item.onPress}>
                                <Text>{item.text}</Text>
                            </Button>
                        ))
                    }
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

export default Alert;