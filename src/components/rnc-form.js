import React from "react"
import { Form, Field, withFormik } from "formik"

import { 
  InputText,
  InputNumber
} from "./forms/inputs"

const MyFormWithFormik = withFormik({
  mapPropsToValues: () => ({
    tarefa: {
      id: '',
      link: '',
    },
    categorias: {
      tipo: '',
      setor: '',
      etapa: '',
    },
    cliente: '',
    projeto: '',
    textos: {
      descricao: '',
      correcao: '',
      prevencao: ''
    },
    data: new Date(),
    niveis: {
      problemas: '',
      solucao: ''
    }
  }),
  handleSubmit: values => {
    console.log("é us guri", values)
  }
})

const FormComp = () => (
  <Form>
    <Field label="ID da tarefa" name='tarefa.id' component={InputNumber} fullWidth />
    <Field label="URL da tarefa" name='tarefa.link' component={InputText} />
    <button type="submit" >
      Submit
    </button>
  </Form>
)

export default MyFormWithFormik(FormComp)