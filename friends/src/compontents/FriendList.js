import React, { useEffect, useState } from 'react';
import {
	Button,Row,Modal,ModalHeader,ModalFooter,Col,Form,FormGroup,Label,Input,
} from 'reactstrap';
import { axiosAuth } from '../utils/auth';
import Friend from './Friend';

const FriendList = (props) => {