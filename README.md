# labenuSystem

## O que foi implementado?

- Cadastro: Estudantes, turmas, docentes, hobbies, especialidades
- Buscar: Estudantes por nome, todos os docentes, turmas ativas
- Mudar: Estudantes de turma

Obs.: Neste projeto mudei a parte de docentes. Não existe uma coluna turmas na tabela docentes, entendo que 1 docente pode dar aula em várias turmas, por isso tenho uma tabela de relacionamento docente turmas. 

No buscar turmas ativas, se o usuário não passar nenhuma informação o retorno será as turmas ativas, passando o nome da turma e o novo modulo, acontece um update no banco com o novo módulo.
