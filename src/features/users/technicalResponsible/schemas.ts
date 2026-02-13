import * as Yup from "yup";

export const technicalResponsibleSchema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  cpf: Yup.string()
    .required("CPF é obrigatório")
    .matches(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "CPF deve estar no formato 000.000.000-00",
    ),
  rg: Yup.string().required("RG é obrigatório"),
  sexo: Yup.string().required("Sexo é obrigatório"),
  dataNascimento: Yup.string().required("Data de nascimento é obrigatória"),
  naturalidade: Yup.string(),
  nacionalidade: Yup.string(),
  profissao: Yup.string().required("Profissão é obrigatória"),
  conselho: Yup.string().required("Órgão de Classe é obrigatório"),
  registroConselho: Yup.string().required("Registro no Conselho é obrigatório"),
  especializacoes: Yup.string(),
  telefone: Yup.string().test(
    "telefone-ou-celular",
    "Informe pelo menos um telefone ou celular",
    function (value) {
      const { celular } = this.parent; // pega o outro campo do mesmo objeto
      return !!(value?.trim() || celular?.trim());
    },
  ),
  celular: Yup.string().test(
    "telefone-ou-celular",
    "Informe pelo menos um telefone ou celular",
    function (value) {
      const { telefone } = this.parent;
      return !!(value?.trim() || telefone?.trim());
    },
  ),

  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  rua: Yup.string(),
  numero: Yup.string()
    .matches(/^\d+$/, "Número deve conter apenas dígitos")
    .required("Número é obrigatório"),

  bairro: Yup.string(),
  municipio: Yup.string(),
  cep: Yup.string().matches(/^\d{5}-\d{3}$/, "CEP inválido"),
  anexos: Yup.object().shape({
    certidaoConselho: Yup.mixed().required(
      "Certidão do Conselho é obrigatória",
    ),
    rg: Yup.mixed().required("RG é obrigatório"),
    cpf: Yup.mixed().required("CPF é obrigatório"),
    diploma: Yup.mixed().required("Diploma é obrigatório"),
  }),
});
