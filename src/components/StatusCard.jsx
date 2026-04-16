import React from 'react'
import styled from 'styled-components';

const StsCard = styled.div`
  width: 200px;
  height: 150px;
  background: ${props => 
    props.type === "success" ? "green" : (props.type === "error" ? "red" : "gray")
  };
`;

function StatusCard({type}) {
  return (
    <StsCard type={type}> </StsCard>
  )
}

export default StatusCard