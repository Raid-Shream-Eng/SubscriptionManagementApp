import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ListHeadings = ({ title }: { title: string }) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>
      <TouchableOpacity className="list-action">
        <Text className="list-action-text">Show All</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListHeadings