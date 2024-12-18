import styled from "styled-components"

const StyledLogo = styled.div`
  text-align: center;
`

const Img = styled.img`
  height: 15rem;
  width: auto;
`

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-light-cross.png" alt="Logo" />
    </StyledLogo>
  )
}

export default Logo
