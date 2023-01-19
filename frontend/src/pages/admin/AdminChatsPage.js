import React from 'react';
import {Row,Col} from 'react-bootstrap';
import AdminSideBar from '../../components/admin/AdminSideBar';
import AdminChatRoomComponent from '../../components/admin/AdminChatRoomComponent';

const AdminChatspage =()=>{
  return(
    <Row>
    <Col md={2}><AdminSideBar/></Col>
    <Col md={10}><Row><AdminChatRoomComponent/></Row></Col>
    </Row>
  )
}

export default AdminChatspage;
