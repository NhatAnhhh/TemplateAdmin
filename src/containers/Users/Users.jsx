import { LayOut } from "components/Layout"
import styled from "styled-components"
import { TableUser } from "components/Table";
import { Space, Tag } from 'antd';
import { AddForm } from "components/AddForm";


const UserStyled = styled.div`
`;

const Users = () => {
    return <LayOut>
        <TableUser>
        </TableUser>
        <AddForm></AddForm>
    </LayOut>



}
export default Users