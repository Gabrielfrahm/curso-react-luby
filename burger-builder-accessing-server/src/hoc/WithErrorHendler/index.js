import React, { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal';
import Aux from '../Auxi';

const WithErrorHandler = (WrapperComponent, api) => {
    const [error, setError] = useState(null);

    const reqInter = api.interceptors.request.use(req => {
        setError(null);
        return req;
    })

    const resInter = api.interceptors.response.use(res => {
        return res;
    }, err => {
        setError(err);
        return Promise.reject(err);
    })

    console.log(error);

    useEffect(() => {
        return () => {
            api.interceptors.request.eject(reqInter)
            api.interceptors.response.eject(resInter)
        }
    },[resInter, reqInter,  api.interceptors.request,  api.interceptors.response])
    
    
    const handleErrorConfirm = () => {
        setError(null);
    }

    return (props) => {
        return (
            <Aux>
                <Modal show={error} modalClose={handleErrorConfirm} >
                    {error ? error.message : null}
                </Modal>
                <WrapperComponent {...props} />
            </Aux>
        );
    }
}

export default WithErrorHandler;