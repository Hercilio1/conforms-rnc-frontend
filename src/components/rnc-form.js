import React from "react"
import { Form, Field, withFormik } from "formik"
import Grid from '@material-ui/core/Grid';

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
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Field label="ID da tarefa" name='tarefa.id' component={InputNumber} fullWidth />
      </Grid>
      <Grid item xs={6}>
        <Field label="URL da tarefa" name='tarefa.link' component={InputText} fullWidth />
      </Grid>
      <button type="submit" >
        Submit
    </button>
    </Grid>
  </Form>
)

export default MyFormWithFormik(FormComp)