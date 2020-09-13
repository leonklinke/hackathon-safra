'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Investment = use("App/Models/Investment")
const BankRoutines = use("App/Models/BankRoutines")

class Interest extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to verify the ivnestment before save interest
     */
    this.addHook('beforeSave', async (interestInstance) => {
      const investment = await Investment.find(interestInstance.investment_id)

      const targetValue = investment.target_value
      //check all the investment interests to verify if is complete
      const interests = await this.query()
        .where('investment_id', interestInstance.investment_id)
        .with('investment.startup.user')
        .with('user')
        .fetch()
      let actualValue = 0
      const interestsJson = interests.toJSON()
      interestsJson.forEach(interest => {
        actualValue += interest.value
      });

      actualValue += interestInstance.value
      //update value reached in investment
      investment.reached_value = actualValue
      investment.save()
      //Didn't get there yet
      if (actualValue < targetValue) {
        return
      }
      //The target value has been reached!
      //end investment
      investment.status = 'done'
      investment.save()
      //transfer values
      // interestsJson.forEach(async interest => {
      //   await BankRoutines.transfer(interest.user, interest.investment.startup.user)
      //   return
      // });
      await BankRoutines.transfer(interestsJson[0].user, interestsJson[0].investment.startup, interestsJson[0].value)
      //TODO notify all by mail
    })

  }
  //Relations
  user() {
    return this.belongsTo('App/Models/User')
  }
  investment() {
    return this.belongsTo('App/Models/Investment')
  }
}

module.exports = Interest
