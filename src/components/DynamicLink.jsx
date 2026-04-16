import React from 'react'
import styled from "styled-components";

function DynamicLink() {

const Link = styled.a`
  color: black;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: red;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;


  return (
    <div>
        <Link href="#">This a dynamic link, it turns red on hover and hides when screen is small</Link>
    </div>
  )
}

export default DynamicLink