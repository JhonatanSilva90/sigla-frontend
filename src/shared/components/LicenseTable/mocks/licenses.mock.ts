import type { License } from "../types";

export const LICENSES_MOCK: License[] = [
  {
    id: "1",
    processo: "002/2022",
    empreendimento: "Fazenda Boa Esperança",
    tipoLicenca: "Licença Prévia",
    status: "PROTOCOLADO",
    validade: "15/09/2024",

    cliente: {
      nome: "João da Silva Carvalho",
      cpf: "123.456.789-10",
      email: "joao.silva@gmail.com",
      telefone: "(11) 98371-1839",
    },

    responsavelTecnico: {
      nome: "Maria Fernanda Lopes",
      cpf: "321.654.987-00",
      rg: "MG-12.345.678",
      sexo: "Feminino",
      dataNascimento: "1985-06-12",
      naturalidade: "Belo Horizonte",
      nacionalidade: "Brasileira",

      profissao: "Engenheira Ambiental",
      conselho: "CREA-MG",
      registroConselho: "CREA 123456/D",
      especializacoes: "Licenciamento Ambiental, Gestão de Resíduos",

      telefone: "(31) 3333-4455",
      celular: "(31) 98888-1234",
      email: "maria.lopes@ambiental.com",

      endereco: "Av. Afonso Pena",
      numero: "1500",
      bairro: "Centro",
      municipio: "Belo Horizonte",
      cep: "30130-005",
    },

    tramitacoes: [
      { data: "10/01/2022", descricao: "Protocolo inicial", orgao: "SEMAD" },
      { data: "22/03/2022", descricao: "Análise técnica", orgao: "SUPRAM" },
    ],

    documentos: [
      {
        id: "doc-1",
        nome: "Relatório Ambiental Simplificado",
        tipo: "PDF",
        url: "/docs/ras.pdf",
        dataUpload: "09/01/2022",
      },
    ],

    observacoes: "Aguardando complementação documental.",

    titulosEmitidos: [
      {
        tipo: "NOTIFICACAO",
        numeroControle: "NOT-2022-0098",
        dataEmissao: "05/04/2022",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "10/01/2022" },
      { nome: "Análise Técnica", concluido: true, data: "22/03/2022" },
      { nome: "Vistoria", concluido: false },
      { nome: "Emissão da Licença", concluido: false },
    ],

    zipDocumentosUrl: "/downloads/processo-002-2022.zip",
  },

  {
    id: "2",
    processo: "123/2021",
    empreendimento: "Indústria Sul LTDA",
    tipoLicenca: "Licença de Operação",
    status: "LICENCIADA",
    validade: "10/12/2023",

    cliente: {
      nome: "Carlos Eduardo Nogueira",
      cpf: "987.654.321-00",
      email: "carlos@industrialsul.com",
      telefone: "(21) 97777-4567",
    },

    responsavelTecnico: {
      nome: "Ricardo Almeida",
      cpf: "456.789.123-00",
      rg: "RJ-23.456.789",
      sexo: "Masculino",
      dataNascimento: "1978-11-22",
      naturalidade: "Rio de Janeiro",
      nacionalidade: "Brasileira",

      profissao: "Biólogo",
      conselho: "CRBio-04",
      registroConselho: "CRBio 98765",
      especializacoes: "Gestão Ambiental, Monitoramento de Fauna",

      telefone: "(21) 3333-2211",
      celular: "(21) 99999-1122",
      email: "ricardo@bioambiental.com",

      endereco: "Rua das Palmeiras",
      numero: "450",
      bairro: "Botafogo",
      municipio: "Rio de Janeiro",
      cep: "22250-040",
    },

    tramitacoes: [
      { data: "12/02/2021", descricao: "Protocolo", orgao: "INEA" },
      { data: "18/06/2021", descricao: "Licença emitida", orgao: "INEA" },
    ],

    documentos: [
      {
        id: "doc-2",
        nome: "Licença de Operação",
        tipo: "PDF",
        url: "/docs/licenca-operacao.pdf",
        dataUpload: "18/06/2021",
      },
    ],

    observacoes: "Licença válida e em conformidade.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LO-2021-3345",
        dataEmissao: "18/06/2021",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "12/02/2021" },
      { nome: "Análise Técnica", concluido: true, data: "10/05/2021" },
      { nome: "Emissão da Licença", concluido: true, data: "18/06/2021" },
    ],

    zipDocumentosUrl: "/downloads/processo-123-2021.zip",
  },

  {
    id: "3",
    processo: "087/2020",
    empreendimento: "Pousada Recanto Verde",
    tipoLicenca: "Licença de Instalação",
    status: "VENCIDA",
    validade: "05/08/2021",

    cliente: {
      nome: "Ana Paula Ribeiro",
      cpf: "321.654.987-11",
      email: "ana@recantoverde.com",
      telefone: "(27) 98888-4444",
    },

    responsavelTecnico: {
      nome: "Felipe Martins",
      cpf: "789.456.123-99",
      rg: "ES-14.789.456",
      sexo: "Masculino",
      dataNascimento: "1982-04-10",
      naturalidade: "Vitória",
      nacionalidade: "Brasileira",

      profissao: "Engenheiro Civil",
      conselho: "CREA-ES",
      registroConselho: "CREA 778899",
      especializacoes: "Construções Sustentáveis",

      telefone: "(27) 3333-5544",
      celular: "(27) 97777-3333",
      email: "felipe@engenharia.com",

      endereco: "Av. Beira-Mar",
      numero: "1200",
      bairro: "Praia do Canto",
      municipio: "Vitória",
      cep: "29055-300",
    },

    tramitacoes: [
      { data: "20/01/2020", descricao: "Protocolo", orgao: "IEMA" },
      { data: "05/08/2020", descricao: "Licença emitida", orgao: "IEMA" },
    ],

    documentos: [
      {
        id: "doc-3",
        nome: "Licença de Instalação",
        tipo: "PDF",
        url: "/docs/li.pdf",
        dataUpload: "05/08/2020",
      },
    ],

    observacoes: "Licença vencida. Necessária renovação.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LI-2020-8877",
        dataEmissao: "05/08/2020",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "20/01/2020" },
      { nome: "Emissão da Licença", concluido: true, data: "05/08/2020" },
    ],

    zipDocumentosUrl: "/downloads/processo-087-2020.zip",
  },
  {
    id: "4",
    processo: "078/2020",
    empreendimento: "Usina Solar Horizonte",
    tipoLicenca: "Licença de Instalação",
    status: "VENCIDA",
    validade: "12/08/2023",

    cliente: {
      nome: "Eduardo Ramos Ferreira",
      cpf: "321.654.987-22",
      email: "eduardo.ferreira@horizonte.com",
      telefone: "(31) 97111-2233",
    },

    responsavelTecnico: {
      nome: "Ana Paula Nogueira",
      cpf: "654.321.987-55",
      rg: "MG-55.444.333",
      sexo: "Feminino",
      dataNascimento: "1987-09-18",
      naturalidade: "Uberlândia",
      nacionalidade: "Brasileira",

      profissao: "Engenheira Eletricista",
      conselho: "CREA-MG",
      registroConselho: "CREA 654321/D",
      especializacoes: "Energia Solar Fotovoltaica",

      telefone: "(31) 3222-8899",
      celular: "(31) 97777-8899",
      email: "ana.nogueira@engenharia.com",

      endereco: "Rua dos Ipês",
      numero: "890",
      bairro: "Santa Mônica",
      municipio: "Uberlândia",
      cep: "38408-120",
    },

    tramitacoes: [
      {
        data: "05/03/2020",
        descricao: "Protocolo do processo",
        orgao: "SEMAD",
      },
      { data: "20/06/2020", descricao: "Análise técnica", orgao: "SUPRAM" },
    ],

    documentos: [
      {
        id: "doc-4",
        nome: "Projeto Executivo",
        tipo: "PDF",
        url: "/docs/projeto-executivo.pdf",
        dataUpload: "01/03/2020",
      },
    ],

    observacoes: "Licença vencida por falta de renovação.",

    titulosEmitidos: [],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "05/03/2020" },
      { nome: "Análise Técnica", concluido: true, data: "20/06/2020" },
      { nome: "Vistoria", concluido: false },
      { nome: "Emissão da Licença", concluido: false },
    ],

    zipDocumentosUrl: "/downloads/processo-078-2020.zip",
  },

  {
    id: "5",
    processo: "311/2023",
    empreendimento: "Construtora Horizonte",
    tipoLicenca: "Licença Prévia",
    status: "EM_ANDAMENTO",
    validade: "02/02/2026",

    cliente: {
      nome: "Fernanda Oliveira Costa",
      cpf: "741.852.963-11",
      email: "fernanda.costa@horizonte.com",
      telefone: "(11) 96544-7788",
    },

    responsavelTecnico: {
      nome: "Marcos Vinícius Rocha",
      cpf: "321.654.987-10",
      rg: "SP-45.123.789",
      sexo: "Masculino",
      dataNascimento: "1980-02-14",
      naturalidade: "Campinas",
      nacionalidade: "Brasileira",

      profissao: "Engenheiro Ambiental",
      conselho: "CREA-SP",
      registroConselho: "CREA 112233",
      especializacoes: "Licenciamento Ambiental",

      telefone: "(19) 3322-1100",
      celular: "(19) 98888-1100",
      email: "marcos.rocha@ambiental.com",

      endereco: "Rua das Acácias",
      numero: "210",
      bairro: "Cambuí",
      municipio: "Campinas",
      cep: "13025-240",
    },

    tramitacoes: [
      { data: "18/05/2023", descricao: "Protocolo inicial", orgao: "CETESB" },
    ],

    documentos: [
      {
        id: "doc-5",
        nome: "Memorial Descritivo",
        tipo: "PDF",
        url: "/docs/memorial.pdf",
        dataUpload: "16/05/2023",
      },
    ],

    observacoes: "Processo em análise inicial.",

    titulosEmitidos: [],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "18/05/2023" },
      { nome: "Análise Técnica", concluido: false },
      { nome: "Vistoria", concluido: false },
      { nome: "Emissão da Licença", concluido: false },
    ],

    zipDocumentosUrl: "/downloads/processo-311-2023.zip",
  },

  {
    id: "6",
    processo: "198/2020",
    empreendimento: "Mineração Pedra Azul",
    tipoLicenca: "Licença de Operação",
    status: "VENCIDA",
    validade: "18/07/2022",

    cliente: {
      nome: "Roberto Almeida Santos",
      cpf: "159.357.486-00",
      email: "roberto.santos@pedraazul.com",
      telefone: "(27) 98456-1122",
    },

    responsavelTecnico: {
      nome: "Luciana Farias",
      cpf: "987.123.654-22",
      rg: "PR-98.776.554",
      sexo: "Feminino",
      dataNascimento: "1985-06-30",
      naturalidade: "Curitiba",
      nacionalidade: "Brasileira",

      profissao: "Engenheira Florestal",
      conselho: "CREA-PR",
      registroConselho: "CREA 445566",
      especializacoes: "Recuperação de Áreas Degradadas",

      telefone: "(41) 3344-5566",
      celular: "(41) 97777-5566",
      email: "luciana.farias@florestal.com",

      endereco: "Av. Sete de Setembro",
      numero: "3450",
      bairro: "Batel",
      municipio: "Curitiba",
      cep: "80250-210",
    },

    tramitacoes: [
      { data: "12/01/2020", descricao: "Protocolo", orgao: "IEMA" },
      { data: "10/06/2020", descricao: "Vistoria técnica", orgao: "SUPRAM" },
    ],

    documentos: [
      {
        id: "doc-6",
        nome: "Plano de Recuperação de Área Degradada",
        tipo: "PDF",
        url: "/docs/prad.pdf",
        dataUpload: "08/01/2020",
      },
    ],

    observacoes: "Necessária revalidação do processo.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LO-2020-0789",
        dataEmissao: "18/07/2020",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "12/01/2020" },
      { nome: "Análise Técnica", concluido: true, data: "10/06/2020" },
      { nome: "Vistoria", concluido: true, data: "05/06/2020" },
      { nome: "Emissão da Licença", concluido: true, data: "18/07/2020" },
    ],

    zipDocumentosUrl: "/downloads/processo-198-2020.zip",
  },

  {
    id: "7",
    processo: "402/2024",
    empreendimento: "Hotel Serra Verde",
    tipoLicenca: "Licença Prévia",
    status: "A_VENCER",
    validade: "30/03/2025",

    cliente: {
      nome: "Juliana Matos Ribeiro",
      cpf: "852.963.741-44",
      email: "juliana@serraverdehotel.com",
      telefone: "(35) 99123-5566",
    },

    responsavelTecnico: {
      nome: "Eduardo Pacheco",
      cpf: "741.852.963-11",
      rg: "RS-32.145.789",
      sexo: "Masculino",
      dataNascimento: "1975-01-09",
      naturalidade: "Caxias do Sul",
      nacionalidade: "Brasileira",

      profissao: "Geólogo",
      conselho: "CREA-RS",
      registroConselho: "CREA 998877",
      especializacoes: "Geologia Ambiental",

      telefone: "(54) 3222-9900",
      celular: "(54) 99999-9900",
      email: "eduardo@geologia.com",

      endereco: "Rua Sinimbu",
      numero: "980",
      bairro: "Centro",
      municipio: "Caxias do Sul",
      cep: "95020-001",
    },

    tramitacoes: [
      { data: "05/02/2024", descricao: "Protocolo inicial", orgao: "SEMAD" },
    ],

    documentos: [
      {
        id: "doc-7",
        nome: "Estudo de Impacto Ambiental",
        tipo: "PDF",
        url: "/docs/eia-hotel.pdf",
        dataUpload: "01/02/2024",
      },
    ],

    observacoes: "Licença próxima do vencimento.",

    titulosEmitidos: [],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "05/02/2024" },
      { nome: "Análise Técnica", concluido: false },
      { nome: "Vistoria", concluido: false },
      { nome: "Emissão da Licença", concluido: false },
    ],

    zipDocumentosUrl: "/downloads/processo-402-2024.zip",
  },

  {
    id: "8",
    processo: "156/2021",
    empreendimento: "Agropecuária Vale Rico",
    tipoLicenca: "Licença de Operação",
    status: "LICENCIADA",
    validade: "12/09/2024",

    cliente: {
      nome: "Marcos Vinícius Teixeira",
      cpf: "456.789.123-55",
      email: "marcos@valerico.com.br",
      telefone: "(62) 99877-1122",
    },

    responsavelTecnico: {
      nome: "Patrícia Lima",
      cpf: "159.357.486-55",
      rg: "BA-66.555.444",
      sexo: "Feminino",
      dataNascimento: "1990-08-21",
      naturalidade: "Salvador",
      nacionalidade: "Brasileira",

      profissao: "Bióloga",
      conselho: "CRBio-08",
      registroConselho: "CRBio 44551",
      especializacoes: "Educação Ambiental",

      telefone: "(71) 3344-7788",
      celular: "(71) 98888-7788",
      email: "patricia@biologia.com",

      endereco: "Rua Alceu Amoroso Lima",
      numero: "120",
      bairro: "Caminho das Árvores",
      municipio: "Salvador",
      cep: "41820-770",
    },

    tramitacoes: [
      { data: "10/03/2021", descricao: "Protocolo", orgao: "SEMAD-GO" },
      { data: "18/06/2021", descricao: "Licença emitida", orgao: "SEMAD-GO" },
    ],

    documentos: [
      {
        id: "doc-8",
        nome: "Plano Ambiental Rural",
        tipo: "PDF",
        url: "/docs/par.pdf",
        dataUpload: "08/03/2021",
      },
    ],

    observacoes: "Processo regularizado.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LO-2021-3321",
        dataEmissao: "18/06/2021",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "10/03/2021" },
      { nome: "Análise Técnica", concluido: true, data: "05/06/2021" },
      { nome: "Vistoria", concluido: true, data: "01/06/2021" },
      { nome: "Emissão da Licença", concluido: true, data: "18/06/2021" },
    ],

    zipDocumentosUrl: "/downloads/processo-156-2021.zip",
  },

  {
    id: "9",
    processo: "287/2022",
    empreendimento: "Indústria Têxtil Aurora",
    tipoLicenca: "Licença de Instalação",
    status: "EM_ANDAMENTO",
    validade: "08/01/2025",

    cliente: {
      nome: "Luciana Pereira Gomes",
      cpf: "963.258.741-66",
      email: "luciana@auroratextil.com",
      telefone: "(47) 99221-3344",
    },

    responsavelTecnico: {
      nome: "André Luiz Torres",
      cpf: "258.369.147-00",
      rg: "GO-11.222.333",
      sexo: "Masculino",
      dataNascimento: "1983-03-17",
      naturalidade: "Goiânia",
      nacionalidade: "Brasileira",

      profissao: "Engenheiro Sanitarista",
      conselho: "CREA-GO",
      registroConselho: "CREA 334455",
      especializacoes: "Saneamento Básico",

      telefone: "(62) 3211-3344",
      celular: "(62) 98888-3344",
      email: "andre@saneamento.com",

      endereco: "Av. T-10",
      numero: "1500",
      bairro: "Setor Bueno",
      municipio: "Goiânia",
      cep: "74230-010",
    },

    tramitacoes: [
      { data: "22/04/2022", descricao: "Protocolo", orgao: "IMA-SC" },
    ],

    documentos: [
      {
        id: "doc-9",
        nome: "Projeto Industrial",
        tipo: "PDF",
        url: "/docs/projeto-industrial.pdf",
        dataUpload: "20/04/2022",
      },
    ],

    observacoes: "Aguardando vistoria técnica.",

    titulosEmitidos: [],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "22/04/2022" },
      { nome: "Análise Técnica", concluido: false },
      { nome: "Vistoria", concluido: false },
      { nome: "Emissão da Licença", concluido: false },
    ],

    zipDocumentosUrl: "/downloads/processo-287-2022.zip",
  },

  {
    id: "10",
    processo: "511/2018",
    empreendimento: "Usina Hidrelétrica Alto Rio",
    tipoLicenca: "Licença de Operação",
    status: "PROTOCOLADO",
    validade: "01/06/2021",

    cliente: {
      nome: "Companhia Energética Alto Rio",
      cpf: "00.000.000/0001-99",
      email: "contato@altorioenergia.com",
      telefone: "(61) 3344-5566",
    },

    responsavelTecnico: {
      nome: "Carla Menezes",
      cpf: "963.852.741-88",
      rg: "PE-88.777.666",
      sexo: "Feminino",
      dataNascimento: "1988-12-05",
      naturalidade: "Recife",
      nacionalidade: "Brasileira",

      profissao: "Engenheira Química",
      conselho: "CRQ-PE",
      registroConselho: "CRQ 22119",
      especializacoes: "Gestão de Resíduos",

      telefone: "(81) 3344-2211",
      celular: "(81) 97777-2211",
      email: "carla@quimica.com",

      endereco: "Rua da Aurora",
      numero: "455",
      bairro: "Boa Vista",
      municipio: "Recife",
      cep: "50050-000",
    },

    tramitacoes: [
      { data: "10/01/2018", descricao: "Protocolo", orgao: "IBAMA" },
      { data: "01/06/2018", descricao: "Licença emitida", orgao: "IBAMA" },
    ],

    documentos: [
      {
        id: "doc-10",
        nome: "Relatório de Impacto Ambiental",
        tipo: "PDF",
        url: "/docs/rima-hidro.pdf",
        dataUpload: "05/01/2018",
      },
    ],

    observacoes: "Licença vencida, necessária renovação.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LO-2018-9912",
        dataEmissao: "01/06/2018",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "10/01/2018" },
      { nome: "Análise Técnica", concluido: true, data: "20/04/2018" },
      { nome: "Vistoria", concluido: true, data: "10/05/2018" },
      { nome: "Emissão da Licença", concluido: true, data: "01/06/2018" },
    ],

    zipDocumentosUrl: "/downloads/processo-511-2018.zip",
  },
  {
    id: "11",
    processo: "078/2023",
    empreendimento: "Parque Eólico Ventos do Sul",
    tipoLicenca: "Licença Prévia",
    status: "EM_ANDAMENTO",
    validade: "14/10/2025",

    cliente: {
      nome: "Carlos Eduardo Menezes",
      cpf: "741.258.963-00",
      email: "carlos@ventosdosul.com",
      telefone: "(48) 99122-3344",
    },

    responsavelTecnico: {
      nome: "Rafael Soares",
      cpf: "147.258.369-44",
      rg: "DF-10.203.304",
      sexo: "Masculino",
      dataNascimento: "1979-07-12",
      naturalidade: "Brasília",
      nacionalidade: "Brasileira",

      profissao: "Engenheiro Civil",
      conselho: "CREA-DF",
      registroConselho: "CREA 556677",
      especializacoes: "Obras Públicas",

      telefone: "(61) 3322-7788",
      celular: "(61) 99999-7788",
      email: "rafael@civil.com",

      endereco: "SQN 210",
      numero: "Bloco B",
      bairro: "Asa Norte",
      municipio: "Brasília",
      cep: "70862-020",
    },

    tramitacoes: [
      { data: "12/02/2023", descricao: "Protocolo inicial", orgao: "IMA-SC" },
    ],

    documentos: [
      {
        id: "doc-11",
        nome: "Estudo de Viabilidade Ambiental",
        tipo: "PDF",
        url: "/docs/eva-eolico.pdf",
        dataUpload: "10/02/2023",
      },
    ],

    observacoes: "Processo em análise preliminar.",

    titulosEmitidos: [],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "12/02/2023" },
      { nome: "Análise Técnica", concluido: false },
      { nome: "Vistoria", concluido: false },
      { nome: "Emissão da Licença", concluido: false },
    ],

    zipDocumentosUrl: "/downloads/processo-078-2023.zip",
  },

  {
    id: "12",
    processo: "654/2020",
    empreendimento: "Frigorífico Boa Carne",
    tipoLicenca: "Licença de Operação",
    status: "LICENCIADA",
    validade: "22/08/2024",

    cliente: {
      nome: "Boa Carne Alimentos S.A.",
      cpf: "12.345.678/0001-55",
      email: "contato@boacarne.com",
      telefone: "(34) 3232-4455",
    },

    responsavelTecnico: {
      nome: "Vanessa Ribeiro",
      cpf: "369.147.258-99",
      rg: "SC-55.666.777",
      sexo: "Feminino",
      dataNascimento: "1992-10-28",
      naturalidade: "Florianópolis",
      nacionalidade: "Brasileira",

      profissao: "Oceanógrafa",
      conselho: "CRQ-SC",
      registroConselho: "CRQ 88776",
      especializacoes: "Monitoramento Costeiro",

      telefone: "(48) 3344-9988",
      celular: "(48) 98888-9988",
      email: "vanessa@oceanografia.com",

      endereco: "Av. Beira-Mar Norte",
      numero: "2300",
      bairro: "Centro",
      municipio: "Florianópolis",
      cep: "88015-200",
    },

    tramitacoes: [
      { data: "10/01/2020", descricao: "Protocolo", orgao: "SEMAD" },
      { data: "22/08/2020", descricao: "Licença emitida", orgao: "SEMAD" },
    ],

    documentos: [
      {
        id: "doc-12",
        nome: "Plano de Controle Ambiental",
        tipo: "PDF",
        url: "/docs/pca-frigorifico.pdf",
        dataUpload: "05/01/2020",
      },
    ],

    observacoes: "Licença vigente e regular.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LO-2020-5541",
        dataEmissao: "22/08/2020",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "10/01/2020" },
      { nome: "Análise Técnica", concluido: true, data: "15/07/2020" },
      { nome: "Vistoria", concluido: true, data: "01/08/2020" },
      { nome: "Emissão da Licença", concluido: true, data: "22/08/2020" },
    ],

    zipDocumentosUrl: "/downloads/processo-654-2020.zip",
  },

  {
    id: "13",
    processo: "219/2019",
    empreendimento: "Cerâmica São Jorge",
    tipoLicenca: "Licença de Instalação",
    status: "VENCIDA",
    validade: "17/04/2021",

    cliente: {
      nome: "Antônio José Ribeiro",
      cpf: "963.147.258-77",
      email: "antonio@ceramicasaojorge.com",
      telefone: "(35) 98877-5544",
    },

    responsavelTecnico: {
      nome: "Thiago Azevedo",
      cpf: "654.987.321-66",
      rg: "AM-44.333.222",
      sexo: "Masculino",
      dataNascimento: "1984-05-19",
      naturalidade: "Manaus",
      nacionalidade: "Brasileira",

      profissao: "Engenheiro Ambiental",
      conselho: "CREA-AM",
      registroConselho: "CREA 778899",
      especializacoes: "Impactos Ambientais",

      telefone: "(92) 3232-8899",
      celular: "(92) 98888-8899",
      email: "thiago@ambiental.com",

      endereco: "Rua Pará",
      numero: "600",
      bairro: "Adrianópolis",
      municipio: "Manaus",
      cep: "69057-010",
    },

    tramitacoes: [
      { data: "08/02/2019", descricao: "Protocolo", orgao: "SEMAD" },
    ],

    documentos: [
      {
        id: "doc-13",
        nome: "Relatório Técnico Ambiental",
        tipo: "PDF",
        url: "/docs/rta-ceramica.pdf",
        dataUpload: "05/02/2019",
      },
    ],

    observacoes: "Licença vencida sem renovação.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LI-2019-2288",
        dataEmissao: "17/04/2019",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "08/02/2019" },
      { nome: "Análise Técnica", concluido: true, data: "20/03/2019" },
      { nome: "Vistoria", concluido: true, data: "05/04/2019" },
      { nome: "Emissão da Licença", concluido: true, data: "17/04/2019" },
    ],

    zipDocumentosUrl: "/downloads/processo-219-2019.zip",
  },

  {
    id: "14",
    processo: "901/2024",
    empreendimento: "Centro Logístico Vale Azul",
    tipoLicenca: "Licença Prévia",
    status: "PROTOCOLADO",
    validade: "09/02/2025",

    cliente: {
      nome: "Vale Azul Logística LTDA",
      cpf: "55.666.777/0001-88",
      email: "licenciamento@valeazul.com",
      telefone: "(19) 3344-7788",
    },

    responsavelTecnico: {
      nome: "Juliana Costa",
      cpf: "951.753.486-00",
      rg: "CE-12.334.556",
      sexo: "Feminino",
      dataNascimento: "1991-01-15",
      naturalidade: "Fortaleza",
      nacionalidade: "Brasileira",

      profissao: "Arquiteta",
      conselho: "CAU-CE",
      registroConselho: "CAU 445566",
      especializacoes: "Projetos Sustentáveis",

      telefone: "(85) 3322-4455",
      celular: "(85) 98888-4455",
      email: "juliana@arquitetura.com",

      endereco: "Av. Dom Luís",
      numero: "890",
      bairro: "Aldeota",
      municipio: "Fortaleza",
      cep: "60160-230",
    },

    tramitacoes: [
      { data: "15/01/2024", descricao: "Protocolo inicial", orgao: "CETESB" },
    ],

    documentos: [
      {
        id: "doc-14",
        nome: "Estudo de Impacto de Vizinhança",
        tipo: "PDF",
        url: "/docs/eiv.pdf",
        dataUpload: "12/01/2024",
      },
    ],

    observacoes: "Licença próxima do vencimento.",

    titulosEmitidos: [],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "15/01/2024" },
      { nome: "Análise Técnica", concluido: false },
      { nome: "Vistoria", concluido: false },
      { nome: "Emissão da Licença", concluido: false },
    ],

    zipDocumentosUrl: "/downloads/processo-901-2024.zip",
  },

  {
    id: "15",
    processo: "333/2022",
    empreendimento: "Laticínios Serra Branca",
    tipoLicenca: "Licença de Operação",
    status: "PROTOCOLADO",
    validade: "28/11/2025",

    cliente: {
      nome: "Serra Branca Alimentos LTDA",
      cpf: "99.888.777/0001-22",
      email: "ambiental@serrabranca.com",
      telefone: "(32) 3333-9988",
    },

    responsavelTecnico: {
      nome: "Bruno Teixeira",
      cpf: "852.963.741-33",
      rg: "MS-22.111.000",
      sexo: "Masculino",
      dataNascimento: "1986-09-02",
      naturalidade: "Campo Grande",
      nacionalidade: "Brasileira",

      profissao: "Zootecnista",
      conselho: "CRMV-MS",
      registroConselho: "CRMV 11223",
      especializacoes: "Gestão Rural",

      telefone: "(67) 3344-1100",
      celular: "(67) 98888-1100",
      email: "bruno@zootecnia.com",

      endereco: "Rua Ceará",
      numero: "150",
      bairro: "Centro",
      municipio: "Campo Grande",
      cep: "79002-000",
    },

    tramitacoes: [
      { data: "20/09/2022", descricao: "Protocolo", orgao: "SEMAD" },
    ],

    documentos: [
      {
        id: "doc-15",
        nome: "Plano de Gerenciamento de Resíduos",
        tipo: "PDF",
        url: "/docs/pgrs.pdf",
        dataUpload: "18/09/2022",
      },
    ],

    observacoes: "Aguardando vistoria técnica.",

    titulosEmitidos: [],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "20/09/2022" },
      { nome: "Análise Técnica", concluido: false },
      { nome: "Vistoria", concluido: false },
      { nome: "Emissão da Licença", concluido: false },
    ],

    zipDocumentosUrl: "/downloads/processo-333-2022.zip",
  },

  {
    id: "16",
    processo: "147/2018",
    empreendimento: "Pedreira Santa Luzia",
    tipoLicenca: "Licença de Operação",
    status: "VENCIDA",
    validade: "03/03/2020",

    cliente: {
      nome: "Santa Luzia Mineração LTDA",
      cpf: "44.555.666/0001-11",
      email: "contato@santaluzia.com",
      telefone: "(38) 3222-7788",
    },

    responsavelTecnico: {
      nome: "Renata Guedes",
      cpf: "111.222.333-44",
      rg: "PA-77.888.999",
      sexo: "Feminino",
      dataNascimento: "1989-04-07",
      naturalidade: "Belém",
      nacionalidade: "Brasileira",

      profissao: "Engenheira de Pesca",
      conselho: "CREA-PA",
      registroConselho: "CREA 990011",
      especializacoes: "Aquicultura",

      telefone: "(91) 3322-6677",
      celular: "(91) 98888-6677",
      email: "renata@pesca.com",

      endereco: "Av. Nazaré",
      numero: "1300",
      bairro: "Nazaré",
      municipio: "Belém",
      cep: "66035-170",
    },

    tramitacoes: [
      { data: "15/01/2018", descricao: "Protocolo", orgao: "SEMAD" },
    ],

    documentos: [
      {
        id: "doc-16",
        nome: "Plano de Lavra",
        tipo: "PDF",
        url: "/docs/plano-lavra.pdf",
        dataUpload: "10/01/2018",
      },
    ],

    observacoes: "Processo arquivado por vencimento.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LO-2018-4412",
        dataEmissao: "03/03/2018",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "15/01/2018" },
      { nome: "Análise Técnica", concluido: true, data: "10/02/2018" },
      { nome: "Vistoria", concluido: true, data: "20/02/2018" },
      { nome: "Emissão da Licença", concluido: true, data: "03/03/2018" },
    ],

    zipDocumentosUrl: "/downloads/processo-147-2018.zip",
  },

  {
    id: "17",
    processo: "589/2021",
    empreendimento: "Complexo Turístico Lago Azul",
    tipoLicenca: "Licença de Instalação",
    status: "LICENCIADA",
    validade: "19/07/2024",

    cliente: {
      nome: "Lago Azul Empreendimentos",
      cpf: "22.333.444/0001-66",
      email: "licenca@lagoazul.com",
      telefone: "(65) 3344-8899",
    },

    responsavelTecnico: {
      nome: "Diego Moura",
      cpf: "444.555.666-77",
      rg: "RO-12.345.678",
      sexo: "Masculino",
      dataNascimento: "1981-11-11",
      naturalidade: "Porto Velho",
      nacionalidade: "Brasileira",

      profissao: "Engenheiro Agrônomo",
      conselho: "CREA-RO",
      registroConselho: "CREA 556644",
      especializacoes: "Agricultura Sustentável",

      telefone: "(69) 3322-5544",
      celular: "(69) 98888-5544",
      email: "diego@agronomia.com",

      endereco: "Av. Imigrantes",
      numero: "720",
      bairro: "Industrial",
      municipio: "Porto Velho",
      cep: "76801-100",
    },

    tramitacoes: [
      { data: "05/04/2021", descricao: "Protocolo", orgao: "SEMA-MT" },
      { data: "19/07/2021", descricao: "Licença emitida", orgao: "SEMA-MT" },
    ],

    documentos: [
      {
        id: "doc-17",
        nome: "Plano Diretor Ambiental",
        tipo: "PDF",
        url: "/docs/pda.pdf",
        dataUpload: "01/04/2021",
      },
    ],

    observacoes: "Licença vigente.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LI-2021-7711",
        dataEmissao: "19/07/2021",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "05/04/2021" },
      { nome: "Análise Técnica", concluido: true, data: "10/06/2021" },
      { nome: "Vistoria", concluido: true, data: "01/07/2021" },
      { nome: "Emissão da Licença", concluido: true, data: "19/07/2021" },
    ],

    zipDocumentosUrl: "/downloads/processo-589-2021.zip",
  },

  {
    id: "18",
    processo: "764/2023",
    empreendimento: "Bioenergia Campo Verde",
    tipoLicenca: "Licença Prévia",
    status: "EM_ANDAMENTO",
    validade: "11/12/2026",

    cliente: {
      nome: "Campo Verde Bioenergia S.A.",
      cpf: "11.222.333/0001-44",
      email: "ambiental@campoverde.com",
      telefone: "(66) 3555-2211",
    },

    responsavelTecnico: {
      nome: "Fernanda Lopes",
      cpf: "777.888.999-00",
      rg: "TO-98.765.432",
      sexo: "Feminino",
      dataNascimento: "1993-03-25",
      naturalidade: "Palmas",
      nacionalidade: "Brasileira",

      profissao: "Engenheira Ambiental",
      conselho: "CREA-TO",
      registroConselho: "CREA 334422",
      especializacoes: "Gestão de Recursos Hídricos",

      telefone: "(63) 3322-9988",
      celular: "(63) 98888-9988",
      email: "fernanda@ambiental.com",

      endereco: "Av. JK",
      numero: "500",
      bairro: "Plano Diretor Sul",
      municipio: "Palmas",
      cep: "77015-012",
    },

    tramitacoes: [
      { data: "10/08/2023", descricao: "Protocolo inicial", orgao: "SEMA-MT" },
    ],

    documentos: [
      {
        id: "doc-18",
        nome: "Estudo de Impacto Ambiental",
        tipo: "PDF",
        url: "/docs/eia-bioenergia.pdf",
        dataUpload: "05/08/2023",
      },
    ],

    observacoes: "Aguardando complementação documental.",

    titulosEmitidos: [],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "10/08/2023" },
      { nome: "Análise Técnica", concluido: false },
      { nome: "Vistoria", concluido: false },
      { nome: "Emissão da Licença", concluido: false },
    ],

    zipDocumentosUrl: "/downloads/processo-764-2023.zip",
  },

  {
    id: "19",
    processo: "482/2020",
    empreendimento: "Indústria Química Alfa",
    tipoLicenca: "Licença de Operação",
    status: "A_VENCER",
    validade: "26/01/2025",

    cliente: {
      nome: "Química Alfa LTDA",
      cpf: "66.777.888/0001-22",
      email: "contato@quimicaalfa.com",
      telefone: "(41) 3333-6677",
    },

    responsavelTecnico: {
      nome: "Alexandre Nunes",
      cpf: "999.000.111-22",
      rg: "PI-11.223.344",
      sexo: "Masculino",
      dataNascimento: "1977-08-03",
      naturalidade: "Teresina",
      nacionalidade: "Brasileira",

      profissao: "Engenheiro de Segurança do Trabalho",
      conselho: "CREA-PI",
      registroConselho: "CREA 667788",
      especializacoes: "Segurança Ambiental",

      telefone: "(86) 3322-3344",
      celular: "(86) 98888-3344",
      email: "alexandre@seguranca.com",

      endereco: "Rua Coelho Rodrigues",
      numero: "900",
      bairro: "Centro",
      municipio: "Teresina",
      cep: "64000-080",
    },

    tramitacoes: [
      { data: "15/01/2020", descricao: "Protocolo", orgao: "IAT-PR" },
      { data: "26/01/2020", descricao: "Licença emitida", orgao: "IAT-PR" },
    ],

    documentos: [
      {
        id: "doc-19",
        nome: "Relatório de Controle Ambiental",
        tipo: "PDF",
        url: "/docs/rca-quimica.pdf",
        dataUpload: "10/01/2020",
      },
    ],

    observacoes: "Licença próxima do vencimento.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LO-2020-8844",
        dataEmissao: "26/01/2020",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "15/01/2020" },
      { nome: "Análise Técnica", concluido: true, data: "20/01/2020" },
      { nome: "Vistoria", concluido: true, data: "22/01/2020" },
      { nome: "Emissão da Licença", concluido: true, data: "26/01/2020" },
    ],

    zipDocumentosUrl: "/downloads/processo-482-2020.zip",
  },

  {
    id: "20",
    processo: "905/2017",
    empreendimento: "Aterro Sanitário Municipal",
    tipoLicenca: "Licença de Operação",
    status: "VENCIDA",
    validade: "30/09/2019",

    cliente: {
      nome: "Prefeitura Municipal",
      cpf: "00.111.222/0001-00",
      email: "meioambiente@prefeitura.gov",
      telefone: "(73) 3333-1100",
    },

    responsavelTecnico: {
      nome: "Camila Barros",
      cpf: "123.987.456-99",
      rg: "RR-55.444.333",
      sexo: "Feminino",
      dataNascimento: "1994-12-01",
      naturalidade: "Boa Vista",
      nacionalidade: "Brasileira",

      profissao: "Engenheira Ambiental",
      conselho: "CREA-RR",
      registroConselho: "CREA 112299",
      especializacoes: "Licenciamento Ambiental",

      telefone: "(95) 3322-7766",
      celular: "(95) 98888-7766",
      email: "camila@ambiental.com",

      endereco: "Av. Ville Roy",
      numero: "1800",
      bairro: "Centro",
      municipio: "Boa Vista",
      cep: "69301-000",
    },

    tramitacoes: [
      { data: "01/03/2017", descricao: "Protocolo", orgao: "INEMA" },
    ],

    documentos: [
      {
        id: "doc-20",
        nome: "Plano de Operação do Aterro",
        tipo: "PDF",
        url: "/docs/aterro-operacao.pdf",
        dataUpload: "25/02/2017",
      },
    ],

    observacoes: "Licença vencida e processo encerrado.",

    titulosEmitidos: [
      {
        tipo: "LICENCA",
        numeroControle: "LO-2017-1109",
        dataEmissao: "30/09/2017",
      },
    ],

    andamentoProcesso: [
      { nome: "Protocolo", concluido: true, data: "01/03/2017" },
      { nome: "Análise Técnica", concluido: true, data: "10/05/2017" },
      { nome: "Vistoria", concluido: true, data: "15/06/2017" },
      { nome: "Emissão da Licença", concluido: true, data: "30/09/2017" },
    ],

    zipDocumentosUrl: "/downloads/processo-905-2017.zip",
  },
];
