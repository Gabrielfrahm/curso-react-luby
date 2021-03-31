import React, { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal';
import Aux from '../Auxi';

const WithErrorHandler = (WrapperComponent, api) => {

    return props => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
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
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            return () => {
                api.interceptors.request.eject(reqInter)
                api.interceptors.response.eject(resInter)
            }
        }, [resInter, reqInter])


        const handleErrorConfirm = () => {
            setError(null);
        }

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