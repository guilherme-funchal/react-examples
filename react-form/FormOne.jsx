import React from "react";
import Form from "react-jsonschema-form-bs4";


import { schema, uiSchema, formData } from "./schemaOne";

// const log = type => console.log.bind(console, type);


const onSubmit = ({ formData }) => console.log("Dados", formData);


const FormOne = props => {
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      // onChange={}
      onSubmit={onSubmit}
      // onError={onError}
    >
      <div>
        <button className="btn btn-secondary mr-2" type="button">
          Cancelar
        </button>
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </div>
    </Form>
  );
};

export default FormOne;
