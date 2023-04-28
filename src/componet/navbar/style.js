


import styled from "styled-components";

 
export const NavbarSection = styled.div`
padding: 5px 0;
overflow: hidden;
position: relative;
border-bottom: 1px solid #000

`


export const Logo = styled.div`
    width: 50%;
    float: left;
  
    }
    
    @media (max-width : 991px) {
        Logo {
            width: 100%;
            float: none;
        }
` 

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0 0 0;
    &:hover {
        color: #eb5424;
        background-color #fff;
    }
`

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
    @media (max-width : 991px) {
        UlList{
            width: 100%;
            float:  none;
            margin-top: 20px;
            display: none
        }
`
export const ListItem = styled.li`
    display: inline-block;
    @media (max-width : 991px) {
        ListItem {
            display: block;
            text-align: center;
        }
        
        
    
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover {
        color: #eb5424;
        background-color #fff;
    }
`

`
.container #line{
    display:block;
    margin:10px;
}

 `   
   
    
   

