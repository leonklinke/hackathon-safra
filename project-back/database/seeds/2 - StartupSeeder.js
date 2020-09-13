'use strict'

/*
|--------------------------------------------------------------------------
| StartupSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Startup = use('App/Models/Startup')

class StartupSeeder {
  async run() {
    //startup 1
    await Factory
      .model('App/Models/User')
      .create({ name: 'Salus', type: 'startup', email: 'startup@safrai9.com.br', password: '123456', safra_secret: "a70413b9-8837-47df-885e-3d0449feabf5", safra_client_id: "b5fb1e3b36714ad0a08e9fd541d00160" })

    await Startup
      .query()
      .where('id', 1)
      .update({
        founded: 2016,
        location: "Bauru/SP - Brasil",
        this_year_revenue: 110000,
        last_year_revenue: 52000,
        som: 7200000000,
        data: JSON.stringify({
          maturity: 4,
          risk: "Moderado",
          site: "https://salusapp.com",
          description: "Já imaginou unir a qualidade dos atendimentos de saúde a um preço popular? O Salus facilitou a vida de quem está buscando agendar consultas particulares, checkups e exames médicos a preços populares - e tudo isso via aplicativo, telefone ou pelo site. O serviço é ainda totalmente gratuito, sem taxa de adesão, mensalidade ou anuidade.",
          sector: "Saúde",
          intro: "AGENDE CONSULTAS PARTICULARES E EXAMES A PARTIR DE R$45! SEM CONTRATO OU MENSALIDADE.",
          founders: [{
            "name": "leon klinke",
            "role": "CEO",
            "linkedin": "https://www.linkedin.com/in/leonklinke"
          }, {
            "name": "Joao silva",
            "role": "CTO",
            "linkedin": "https://www.linkedin.com/in/leonklinke"
          }],
          video: "https://www.youtube.com/embed/xx0LbiqxJY0",
          revenue_expected: [1000, 2000, 3000, 4000, 5000],
          revenue_real: [500, 1080, 2000, 3800, 6000],
          DestinyAccount: {
            Bank: "422",
            Agency: "0071",
            Id: "1234533",
            Cpf: "12345678933",
            Name: "Mark zuckerberg da silva",
            Goal: "Credit",
          }
        }),
        team_size: 3
      })

    //startup 2
    await Factory
      .model('App/Models/User')
      .create({ name: 'Click Educação', type: 'startup', email: 'startup2@safrai9.com.br', password: '123456', safra_secret: "86a1a12e-595d-474e-8280-d0d26cbb53b7", safra_client_id: "9dffe873bf3b44b3ad067e87f354bef4" })

    await Startup
      .query()
      .where('id', 2)
      .update({
        founded: 2020,
        location: "Campinas/SP - Brasil",
        this_year_revenue: 1000000,
        last_year_revenue: 15000,
        som: 78200000000,
        data: JSON.stringify({
          maturity: 1,
          risk: "Alto",
          site: "https://salusapp.com",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          sector: "Educação",
          intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          founders: [{
            "name": "Marcelo Silva",
            "role": "ceo",
            "linkedin": "https://www.linkedin.com/in/leonklinke"
          }],
          video: "https://www.youtube.com/embed/z96oEIEY-RY",
          revenue_expected: [1000, 20000, 30000, 400000, 5000000],
          revenue_real: [500, 1000, 2000, 10000, 60000],
          DestinyAccount: {
            Bank: "422",
            Agency: "0071",
            Id: "1234533",
            Cpf: "12345678933",
            Name: "Mark zuckerberg da silva",
            Goal: "Credit",
          }
        }),
        team_size: 2
      })

    //startup 3
    await Factory
      .model('App/Models/User')
      .create({ name: 'Eng Vida', type: 'startup', email: 'startup3@safrai9.com.br', password: '123456', safra_secret: "449818dd-fdf2-4897-b914-ea8b5921a0f2", safra_client_id: "efb4731160b54078ab7bf69cf1e1a5b7" })

    await Startup
      .query()
      .where('id', 3)
      .update({
        founded: 2008,
        location: "Belo horizonte/MG - Brasil",
        this_year_revenue: 890000,
        last_year_revenue: 750000,
        som: 1100000000,
        data: JSON.stringify({
          maturity: 5,
          risk: "Baixo",
          site: "https://salusapp.com",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          sector: "Segurança",
          intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          founders: [{
            "name": "Marcia Silva",
            "role": "CEO",
            "linkedin": "https://www.linkedin.com/in/leonklinke"
          }],
          video: "https://www.youtube.com/embed/z96oEIEY-RY",
          revenue_expected: [1000, 2000, 3000, 4000, 5000],
          revenue_real: [500, 1080, 2000, 3800, 6000],
          DestinyAccount: {
            Bank: "422",
            Agency: "0071",
            Id: "1234533",
            Cpf: "12345678933",
            Name: "Mark zuckerberg da silva",
            Goal: "Credit",
          }
        }),
        team_size: 25
      })
  }
}

module.exports = StartupSeeder
