import styled from 'styled-components';

export const Li = styled.li`
    @media (min-width: 500px){
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }

    margin:10px 0;
    display: block;
    width: 100%;

    a {
        
        color: #8f5c2c;
        text-decoration: none;
        width: 100%;
        display: block;

        &:hover,:active{
            color: #40a4c8;  
        }

        @media (min-width: 500px){
        color: #fff;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;

        &:hover,:active{
            background-color: #8f5c2c;
            border-bottom: 4px solid #40a4c8;
            color: #fff;  
        }
    }
    }

`;

// export const A = styled.a`
   
//         color: #8f5c2c;
//         text-decoration: none;
//         width: 100%;
//         display: block;

//         &:hover,:active{
//             color: #40a4c8;  
//         }

//         @media (min-width: 500px){
//         color: #fff;
//         height: 100%;
//         padding: 16px 10px;
//         border-bottom: 4px solid transparent;

//         &:hover,:active{
//             background-color: #8f5c2c;
//             border-bottom: 4px solid #40a4c8;
//             color: #fff;  
//         }
//     }
// `;


