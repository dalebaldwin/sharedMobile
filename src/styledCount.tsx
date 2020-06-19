import React from 'react'
import { TouchableOpacity } from 'react-native'

import useCounter from 'shared/dist/useCounter'

import { StyledContainer, StyledCountText, StyledButtonContainer, StyledButtonText, StyledExplainerTextContainer, StyledExplainerText, StyledTextTrigger } from './styles'

const StyledCounter: React.FC = () => {

  const [count, setCount] = useCounter(0)

  return (
    <StyledContainer>
      <StyledCountText>{count}</StyledCountText>
      {/* <TouchableOpacity onPress={() => setCount(count+1)}>
        <StyledButtonContainer>
          <StyledButtonText >Press Me</StyledButtonText>
        </StyledButtonContainer>
      </TouchableOpacity> */}
      <StyledTextTrigger onPress={() => setCount(count+1)}>Press Me</StyledTextTrigger>
      <StyledExplainerTextContainer>
        <StyledExplainerText>
          Simple shared hook for a counter using styled components
        </StyledExplainerText>
      </StyledExplainerTextContainer>
    </StyledContainer>
  )
}

export default StyledCounter