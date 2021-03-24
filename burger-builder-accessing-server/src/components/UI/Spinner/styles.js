import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */

  h1{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    color: #262626;
    align-items: center;
    position: absolute;
    line-height: 300px;
    background: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
  }

`;


export const Spinners = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  box-shadow: 0 4px 0 #00f440;
  background: transparent;
  animation: spin 1s linear infinite;




  @keyframes spin {
  to {

    transform: rotate(360deg);
    }

  }

`;
