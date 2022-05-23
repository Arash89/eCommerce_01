import { memo } from "react";
import styled from "styled-components";

const Input = () => (
  <InputWrapper>
    <input
      className="form-control"
      type="text"
      placeholder="Default input"
      aria-label="default input example"
    />
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
