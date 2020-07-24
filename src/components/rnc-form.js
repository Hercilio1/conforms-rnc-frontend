import React from "react"
import { Form, Field, withFormik } from "formik"
import Grid from '@material-ui/core/Grid';

import {
  InputText,
  InputNumber,
  InputAutocomplete
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
      {/* Col 1 */}
      <Grid item xs={4}>
        <Field label="ID da tarefa" name='tarefa.id' component={InputNumber} fullWidth />
      </Grid>
      <Grid item xs={8}>
        <Field label="URL da tarefa" name='tarefa.link' component={InputText} fullWidth />
      </Grid>
      {/* Col 2 */}
      <Grid item xs={4}>
        <Field label="Tipo" name='categorias.tipo' options={top100Films} component={InputAutocomplete} fullWidth />
      </Grid>
      <Grid item xs={4}>
        <Field label="Setor" name='categorias.setor' options={top100Films} component={InputAutocomplete} fullWidth />
      </Grid>
      <Grid item xs={4}>
        <Field label="Etapa" name='categorias.etapa' options={top100Films} component={InputAutocomplete} fullWidth />
      </Grid>
      {/* Col 3 */}
      <Grid item xs={6}>
        <Field label="Cliente" name='cliente' options={top100Films} component={InputAutocomplete} fullWidth />
      </Grid>
      <Grid item xs={6}>
        <Field label="Projeto" name='projeto' options={top100Films} component={InputAutocomplete} fullWidth />
      </Grid>
      <button type="submit" >
        Submit
    </button>
    </Grid>
  </Form>
)

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
]

export default MyFormWithFormik(FormComp)