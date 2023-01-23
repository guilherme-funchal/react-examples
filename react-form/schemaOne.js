export const schema = {
  title: "Nome do formulário",
  type: "object",
  required: ["nome"],
  properties: {
    nome: {
      type: "string",
      default: "teste",
      title: "Nome",
      minLength: 1
    },
    cpf: {
      type: "string",
      default: "teste",
      title: "CPF"
    }
  }
};

export const uiSchema = {
  "ui:rootFieldId": "formOne"
};

export const formData = {};

export default {
  schema,
  uiSchema,
  formData
};
