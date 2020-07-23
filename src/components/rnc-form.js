import React from "react"
import { Form, Field, withFormik } from "formik"
import TextField from "@material-ui/core/TextField"

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
    <Field type="number" name="tarefa.id" />
    <MInput type="text" name="tarefa.link" />
    <button type="submit" >
      Submit
    </button>
  </Form>
)

const MInput = ({ field, ...props }) => (
  <>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    {/* <Input {...field} {...props} /> */}
  </>
)

export default MyFormWithFormik(FormComp)