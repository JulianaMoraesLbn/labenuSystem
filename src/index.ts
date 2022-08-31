import app from "./controller/app"
import { createDocenteController } from "./endpoints/docentes/controller/createDocente.controller"
import { createDocenteTurmaController } from "./endpoints/docentes/controller/createDocenteTurma.controller"
import { GetDocenteController } from "./endpoints/docentes/controller/getDocente.controller"
import { createEstudanteController } from './endpoints/estudantes/controller/createEstudante.controller'
import { GetEstudantesController } from "./endpoints/estudantes/controller/getEstudante.controller"
import { PutEstudantesTurmaController } from "./endpoints/estudantes/controller/putEstudanteTurma.controller"
import { CreateHobbyController } from "./endpoints/hobby/controller/createhobby.controller"
import { createTurmaController } from "./endpoints/turmas/controller/createTurmas.controller"
import { GetTurmasController } from "./endpoints/turmas/controller/getTurmas.controller"


const addEstudante = new createEstudanteController()
const addTurma = new createTurmaController()
const addDocenteTurma = new createDocenteTurmaController()
const addDocente = new createDocenteController()
const addHobby = new CreateHobbyController()
const getTurmasActive = new GetTurmasController()
const getEstudante = new GetEstudantesController()
const getDocentes = new GetDocenteController()
const putEstudanteTurma = new PutEstudantesTurmaController()

app.get('/turmasAtivas', getTurmasActive.getTurmasActive)
app.get('/searchEstudante', getEstudante.getEstudantes)
app.get('/docentes', getDocentes.getDocente)
app.put('/estudanteTurma', putEstudanteTurma.putEstudanteTurma)
app.post('/estudante', addEstudante.newEstudante)
app.post('/docente', addDocente.newDocente)
app.post('/turma', addTurma.newTurma)
app.post('/docenteporturma', addDocenteTurma.newDocenteTurma)
app.post('/hobby', addHobby.createHobby)