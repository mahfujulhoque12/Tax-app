import React from 'react';
import Modal2 from './Modal2/Modal2';
import Modal3 from './Modal3/Modal3';
import ChooseModal from './ChooseModal/ChooseModal';

const UserModal = (props) => {
   const renderModel = (exp) =>{
        switch(exp){
            case 1:
                return <Modal2
                show={props.show}
                handleClose={props.handleClose}
                step={props.step}
                setStep={props.setStep}
                formData={props.formData}
                setFormData={props.setFormData}
                handleChange={props.handleChange}
                >

                </Modal2>
            case 2:
                return <Modal3
                show={props.show}
                handleClose={props.handleClose}
                step={props.step}
                setStep={props.setStep}
                formData={props.formData}
                setFormData={props.setFormData}
                handleChange={props.handleChange}
                >

                </Modal3>    

           case 3:
            return <ChooseModal
                show={props.show}
                handleClose={props.handleClose}
                step={props.step}
                setStep={props.setStep}
                formData={props.formData}
                setFormData={props.setFormData}
                handleChange={props.handleChange}
            >

            </ChooseModal>      
        }
   }
   return renderModel(props.step)
};

export default UserModal;
