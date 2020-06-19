import styled from 'styled-components/native'
import {
  StyledContainerMobile,
  StyledExplainerTextContainerMobile, 
} from 'shared/dist/theme/themeFunctions'

import {
  StyledSharedCountText,
  StyledSharedTextExplainer,
  StyledSharedButton,
  StyledSharedButtonText
} from 'shared/dist/theme/sharedThemeFunctions'

export const StyledContainer = styled.View(StyledContainerMobile)

// APP Wrapper Web fails due to vh values

export const StyledCountText = styled.Text(StyledSharedCountText)

export const StyledTextTrigger = styled.Text(StyledSharedButton)

export const StyledButtonContainer = styled.View(StyledSharedButton)

export const StyledButtonText = styled.Text(StyledSharedButtonText) 

export const StyledExplainerTextContainer = styled.View(StyledExplainerTextContainerMobile)

export const StyledExplainerText = styled.Text(StyledSharedTextExplainer)