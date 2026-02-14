import type {
  AtividadeLicenciada,
  TipoLicenca,
} from "@/shared/types/licenciamento.types";

export const ATIVIDADES: AtividadeLicenciada[] = [
  {
    id: "casa-agropecuaria",
    nome: "Casa Agropecuária",
    categoria: "Comércio de produtos agropecuários",
    licencas: [
      {
        tipo: "LP",
        documentos: [
          {
            id: "lp-requerimento-semma",
            nome: "Requerimento modelo SEMMA",
            obrigatorio: true,
          },
          { id: "lp-dam", nome: "DAM", obrigatorio: true },
          {
            id: "lp-publicacao",
            nome: "Publicação em jornal",
            obrigatorio: true,
          },
          {
            id: "lp-cnpj",
            nome: "CNPJ / Inscrição Estadual",
            obrigatorio: true,
          },
          { id: "lp-pessoais", nome: "Documentos pessoais", obrigatorio: true },
          {
            id: "lp-art",
            nome: "ART do responsável técnico",
            obrigatorio: true,
          },
          { id: "lp-memorial", nome: "Memorial descritivo", obrigatorio: true },
        ],
      },
      {
        tipo: "LI",
        documentos: [
          { id: "li-rca-pca", nome: "RCA ou PCA", obrigatorio: true },
          {
            id: "li-pgrs",
            nome: "PGRS (Plano de Resíduos Sólidos)",
            obrigatorio: true,
          },
          {
            id: "li-sistema-armazenamento",
            nome: "Sistema de armazenamento de produtos perigosos",
            obrigatorio: false,
          },
          {
            id: "li-plano-ruido",
            nome: "Plano de controle de ruído",
            obrigatorio: false,
          },
        ],
      },
      {
        tipo: "LO",
        documentos: [
          {
            id: "lo-licenca-anterior",
            nome: "Licença anterior",
            obrigatorio: false,
          },
          { id: "lo-art", nome: "ART", obrigatorio: false },
          { id: "lo-resumo-pca", nome: "Resumo do PCA", obrigatorio: false },
          { id: "lo-dam", nome: "DAM", obrigatorio: false },
          { id: "lo-publicacao", nome: "Publicação", obrigatorio: false },
        ],
      },
    ],
  },

  {
    id: "laboratorio-clinico",
    nome: "Laboratório de Análises Clínicas",
    categoria: "Serviço de saúde – laboratório clínico",
    licencas: [
      { tipo: "LP", documentos: [] },
      {
        tipo: "LI",
        documentos: [
          {
            id: "li-pgrs-saude",
            nome: "PGRS com foco em resíduos de saúde",
            obrigatorio: true,
          },
          {
            id: "li-dest-residuos",
            nome: "Destinação de resíduos infectantes",
            obrigatorio: true,
          },
          {
            id: "li-licenca-coletora",
            nome: "Licença da empresa coletora",
            obrigatorio: false,
          },
          {
            id: "li-sistema-esgotamento",
            nome: "Sistema de esgotamento sanitário",
            obrigatorio: false,
          },
          {
            id: "li-plano-sanitario",
            nome: "Plano de controle sanitário",
            obrigatorio: false,
          },
        ],
      },
      { tipo: "LO", documentos: [] },
    ],
  },

  {
    id: "incinerador",
    nome: "Incinerador",
    categoria: "Tratamento térmico de resíduos",
    licencas: [
      {
        tipo: "LP",
        documentos: [
          {
            id: "lp-diagnostico-ambiental",
            nome: "Diagnóstico ambiental",
            obrigatorio: true,
          },
          {
            id: "lp-caracterizacao-area",
            nome: "Caracterização da área de influência",
            obrigatorio: true,
          },
        ],
      },
      {
        tipo: "LI",
        documentos: [
          { id: "li-pca-completo", nome: "PCA completo", obrigatorio: true },
          {
            id: "li-sistema-emissoes",
            nome: "Sistema de controle de emissões atmosféricas",
            obrigatorio: true,
          },
          {
            id: "li-monitoramento-gases",
            nome: "Monitoramento de gases",
            obrigatorio: false,
          },
          {
            id: "li-plan-ger-residuos",
            nome: "Plano de gerenciamento de resíduos",
            obrigatorio: false,
          },
        ],
      },
      {
        tipo: "LO",
        documentos: [
          {
            id: "lo-monit-continuo",
            nome: "Plano de monitoramento contínuo",
            obrigatorio: false,
          },
          {
            id: "lo-controle-emissoes",
            nome: "Controle de emissões",
            obrigatorio: false,
          },
          {
            id: "lo-relatorios-tecnicos",
            nome: "Relatórios técnicos",
            obrigatorio: false,
          },
        ],
      },
    ],
  },

  {
    id: "sistema-esgotamento",
    nome: "Sistema de Esgotamento Sanitário",
    categoria: "Infraestrutura de saneamento",
    licencas: [
      {
        tipo: "LP",
        documentos: [
          {
            id: "lp-memorial-descritivo",
            nome: "Memorial descritivo",
            obrigatorio: true,
          },
          {
            id: "lp-diagnostico-ambiental",
            nome: "Diagnóstico ambiental (físico, biótico e antrópico)",
            obrigatorio: true,
          },
          {
            id: "lp-delimitacao-bacia",
            nome: "Delimitação da bacia hidrográfica",
            obrigatorio: false,
          },
        ],
      },
      {
        tipo: "LI",
        documentos: [
          {
            id: "li-projeto-ete",
            nome: "Projeto completo da ETE",
            obrigatorio: true,
          },
          {
            id: "li-projeto-emissario",
            nome: "Projeto de emissário",
            obrigatorio: true,
          },
          { id: "li-pgrs", nome: "PGRS", obrigatorio: false },
        ],
      },
      {
        tipo: "LO",
        documentos: [
          {
            id: "lo-plano-monit-agua",
            nome: "Plano de monitoramento da qualidade da água",
            obrigatorio: false,
          },
        ],
      },
    ],
  },

  {
    id: "condominio-multifamiliar",
    nome: "Condomínio Multifamiliar Horizontal",
    categoria: "Empreendimento imobiliário residencial",
    licencas: [
      {
        tipo: "LP",
        documentos: [
          {
            id: "lp-planta-localizacao",
            nome: "Planta de localização",
            obrigatorio: true,
          },
          {
            id: "lp-inventario-floristico",
            nome: "Inventário florístico",
            obrigatorio: true,
          },
          {
            id: "lp-levantamento-planialt",
            nome: "Levantamento planialtimétrico",
            obrigatorio: false,
          },
        ],
      },
      {
        tipo: "LI",
        documentos: [
          { id: "li-rca", nome: "RCA", obrigatorio: true },
          {
            id: "li-pgrh",
            nome: "PGRH (Recursos Hídricos)",
            obrigatorio: false,
          },
          { id: "li-pgrs", nome: "PGRS", obrigatorio: false },
        ],
      },
      {
        tipo: "LO",
        documentos: [
          { id: "lo-resumo-pca", nome: "Resumo do PCA", obrigatorio: false },
          {
            id: "lo-licenca-anterior",
            nome: "Licença anterior",
            obrigatorio: false,
          },
          {
            id: "lo-habite-se",
            nome: "Habite-se do Corpo de Bombeiros",
            obrigatorio: false,
          },
        ],
      },
    ],
  },
];

export const LICENSE_TYPES: TipoLicenca[] = ["LP", "LI", "LO"];
