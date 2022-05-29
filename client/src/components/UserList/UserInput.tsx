import { memo } from "react";
import styled from "styled-components";
import { Input } from '../BootstrapComponents';

const UserInput = () => (
  <InputWrapper>
    <Input />
  </InputWrapper>
)

const InputWrapper = styled.div`
  height: 50px;
  overflow: hidden;
  border-radius: 3px;
  margin-top: 20px;
  margin-bottom: 10px;
`

export default memo(Input)
