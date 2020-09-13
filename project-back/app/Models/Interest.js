'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Investment = use("App/Models/Investment")

class Interest extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to verify the ivnestment before save interest
     */
    this.addHook('beforeSave', async (interestInstance) => {
      const investment = await Investment.query()
        .where('id', interestInstance.investment_id)
        .first()
      const targetValue = investment.target_value
      //check all the investment interests to verify if is complete
      const interests = await this.query()
        .where('investment_id', interestInstance.investment_id)
        .with('investment')
        .fetch()
      let actualValue = 0
      if (interests.isOne) {
        for (const key in interests.data) {
          actualValue += interests.data[key].value
        }
      }
      actualValue += interestInstance.value
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
