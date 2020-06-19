import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import useCounter from 'shared/dist/useCounter'
import theme from 'shared/dist/theme/baseTheme'

const Button: React.FC = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styled.Button}>
      <Text style={styled.ButtonText}>{text}</Text>
    </View>
  </TouchableOpacity>
)

const PureCount: React.FC = () => {

  const [count, setCount] = useCounter(0)

  return (
    <View style={styled.Container}>
      <Text style={styled.CountText}>
        {count}
      </Text>
      <Button onPress={() => setCount(count+1)} text="Press me" />
      <View style={styled.ExplainerWrapper}>
        <Text style={styled.ExplainerText}>Simple shared hook for a counter using pure react native</Text>
      </View>
    </View>
  )
}

const styled = StyleSheet.create({
  Container: {
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column'
  },
  CountText: {
    padding: 16,
    fontSize: 36,
    textAlign: 'center'
  },
  Button: {
    margin: 16,
    padding: 12,
    backgroundColor: theme.buttonBackground,
    borderRadius: 4
  },
  ButtonText: {
    textAlign: 'center',
    fontFamily: 'Karla-Bold',
    fontSize: 16,
    color: theme.buttonText
  },
  ExplainerWrapper: {
    padding: 16,
  },
  ExplainerText: {
    textAlign: 'center',
    fontFamily: 'Karla-Regular',
    fontSize: 16,
  }
})

export default PureCount