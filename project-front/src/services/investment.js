import api from './api';
import { login, logout, getId, getType } from './auth';

const InvestmentService = {}

InvestmentService.getInvestments = async (data) => {
  try {
    const response = await api.get('/investments/1/');
    if (response.data == null) {
      return [];
    }
    return response.data;
  } catch (err) {
    console.log("error user list", err);
  }
}
InvestmentService.showInterest = async (id) => {
  try {
    const response = await api.get('/interest/' + id);
    if (response.data == null) {
      return [];
    }
    return response.data;
  } catch (err) {
    console.log("error user list", err);
  }
}
InvestmentService.myInvestments = async (data) => {
  try {
    const response = await api.get('/interest/1/' + await getId() + "/");
    if (response.data == null) {
      return [];
    }
    return response.data;
  } catch (err) {
    console.log("error user list", err);
  }
}
InvestmentService.showInvestment = async (id) => {
  try {
    const response = await api.get('/investment/' + id);
    if (response.data == null) {
      return [];
    }
    return response.data;
  } catch (err) {
    console.log("error user list", err);
  }
}

InvestmentService.invest = async (id, value) => {
  try {
    const response = await api.post('/interest', {
      "user_id": await getId(),
      "investment_id": id,
      "value": value
    });
    if (response.data == null) {
      return [];
    }
    return response.data;
  } catch (err) {
    console.log("error user list", err);
  }
}

export default InvestmentService;