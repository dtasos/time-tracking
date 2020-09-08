import React from 'react'
import {StyleSheet, View, Text, TextInput } from 'react-native'

import TimerButton from './TimerButton'

export default function TimerForm({ id, title, project}) {
    const submitText = id ? 'Update' : 'Create'

    return (
        <View style={styles.formContainer}>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Title</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        defaultValue={title}
                    />
                </View>
            </View>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Project</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        defaultValue={project}
                    />
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <TimerButton small color="#21BA45" title={submitText} />
                <TimerButton small color="#DB2828" title="Cancel" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create