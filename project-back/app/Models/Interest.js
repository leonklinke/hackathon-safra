'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Interest extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to verify the ivnestment before save interest
     */
    this.addHook('beforeSave', async (interestInstance) => {
      //TODO verificar se ainda há espaço para o invetimento (concorrência de investimentos superando o valor limite)
      //check all the investment interests to verify if is complete
      const interests = await this.query()
        .where('investment_id', interestInstance.investment_id)
        .with('investment')
        .fetch()
      const targetValue = interests.data[0].target_value
      const actualValue = 0
      for (const key in interests.data) {
        actualValue += interests.data[key].value
      }
      //Didn't get there yet
      //TODO atualizar valor alcançado
      if (actualValue < targetValue) {
        return
      }
      //The value has been reached!
      //TODO fechar o investimento
      //TODO transferir os valores
      //TODO email para todos
    })

  }
  //Relations
  user() {
    return this.belongsTo('App/Models/User')
  }
  investment() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Interest
