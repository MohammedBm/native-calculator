import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, TouchableHighlight, UIManager, View } from 'react-native'


export default class KeyboardInput extends React.Component {
  handleKeyDown(event) {
    if (this.props.onKeyDown)
      this.props.onKeyDown(event)
  }

  componentDidMount() {
    // Ah, auto-binding. I hardly knew ye.
    this.handleKeyDown = this.handleKeyDown.bind(this)
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    return null
  }
}
