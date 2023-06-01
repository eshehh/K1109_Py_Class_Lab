import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const CategoriesBlock = styled.div`
background-color: white;
position: sticky;
top: 0px;
display: flex;
padding: 1rem;
width: 768px;
margin: 0 auto;
height: 500px
@media screen and (max-width: 768px) {
width: 100%;
overflow-x: auto;
}
`;

// 스타일이 적용된 div태그에 선택한 카테고리의 스타일 변경
// const Category = styled.div`
// font-size: 1.125rem;
// cursor: pointer;
// white-space: pre;
// text-decoration: none;
// color: inherit;
// padding-bottom: 0.25rem;
// &:hover {
// color: #495057;
// }
// & + & {
// margin-left: 1rem;
// }

// // styled-components는 내부적으로 props를 받을수 있고,
// // props에 따라서 스타일을 변경할수있다.
// ${props => 
// props.active && css`
//     font-weight: 600; border-bottom : 2px solid #22b8cf; color : #22b8cf;
//     &:hover{
//         color : #3bc9db;
//     }
// `}
// `;


//스타일이 적용된 NavLink로 수정
const Category = styled(NavLink)`
background-color: #fff;
font-size: 1.125rem;
cursor: pointer;
white-space: pre;
text-decoration: none;
color: inherit;
padding-bottom: 0.25rem;
&:hover {
    color: #495057;
}
& + & {
margin-left: 1rem;
}

&.active{
    font-weight: 600; border-bottom : 2px solid #22b8cf; color : #22b8cf;
    &:hover{
        color : #3bc9db;
    }
}
`;


const categories = [
    { name: '제주도', text: '제주도' },
    { name: '거제도', text: '거제도' },
    { name: '거문도', text: '거문도' },
    { name: '추자도', text: '추자도' },
    { name: '통영', text: '통영' }
];

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name} to={c.name === '제주도' ? '/' : `/${c.name}`}
                    onClick={function () {
                        onselect(c.name);
                    }}>{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
}

export default Categories;