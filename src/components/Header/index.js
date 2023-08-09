import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 64

export default function Header({ name }){
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.userName}>{name}</Text>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttomUser}>
          <Feather name="user" size={27} color="#fff"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  }, 
  buttomUser:{
    width: 44,
    height: 44,
    backgroundColor: '#rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44/ 2,
  }
})