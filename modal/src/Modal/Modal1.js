import React, { useReducer, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
//import "./Modal.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Controller, useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';


function Modal(props) {
  // const closeOnEscapeKeyDown = e => {
  //   if ((e.charCode || e.keyCode) === 27) {
  //     props.onClose();
  //   }
  // };
  console.log(props.name);
  
  const form = useRef(null);
  const [validated, setValidated] = useState(false);
  const [firstname, setFirstname] = useState(" ");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
    },
  });
  
  const handlesubmit = () => {
    form.current.reset(); //this will reset all the inputs in the form
  }

  function resetForm() {
    document.getElementById("form").reset();
  }


  const submitForm = (data) => {
    form.current.reset(); 
    props.onClose();
  };

  useEffect(() => {
    console.log(props.name);
    const teste = props.name;
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      // unmountOnExit
      // timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">
          <Form ref={form} noValidate onSubmit={handleSubmit(submitForm)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Controller
                name="firstName"
                control={control}
                onChange={(e) => setFirstname(e.target.value)}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="First name"
                    isInvalid={errors.firstName}
                  />
                )}
              />
              {errors.firstName && (
                 <div class="invalid-feedback">
                <Form.Control.Feedback type="invalid">
                  First Name is required
                </Form.Control.Feedback>
                </div>
              )}
            </Form.Group>
          </Row>
          <Button type="submit">Submit form</Button>

        </Form>
          </div>
        </div>
      </div>
      
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
