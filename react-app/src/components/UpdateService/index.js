import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

export default function UpdateService(){
    const {id} = useParams()
    const dispatch = useDispatch()
}