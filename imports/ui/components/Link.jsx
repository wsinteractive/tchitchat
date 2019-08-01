import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from "/imports/utils/colors";

const StyledLink = styled(Link)`
    font-size: 1rem;
    color: white;
    font-weight: 700;
    text-decoration-line: none;
    border-style: none;
    border-radius: 20px;
    background-color: ${colors()};
    width: fit-content;
    margin: 20px 10px 0 0;
    padding: 10px;
    line-height: 1.3em;
    text-decoration: none;
    border: solid 1px ${colors()};
`;


export default StyledLink;
