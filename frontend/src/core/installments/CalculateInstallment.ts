import { MAX_NUMBER_OF_INSTALLMENTS, MONTHLY_INTEREST_RATE } from "../constants";
import Installments from "./Installments";

export default class CalculateInstallment {
  execute({
    amount,
    numberOfInstallments = MAX_NUMBER_OF_INSTALLMENTS,
    interestRate = MONTHLY_INTEREST_RATE,
  }: {
    amount: number
    numberOfInstallments: number
    interestRate: number
  }): Installments {

    if (numberOfInstallments < 2 || numberOfInstallments > MAX_NUMBER_OF_INSTALLMENTS) {
      throw new Error('Número de parcelas inválido');
    }

    const totalAmountWithInterest = this.calculateValueOfInstallments(amount, numberOfInstallments, interestRate);

    return {
      totalAmount: this.formatNumber(totalAmountWithInterest),
      numberOfInstallments: numberOfInstallments,
      valueOfInstallments: this.formatNumber(totalAmountWithInterest / numberOfInstallments),
      interestRate: interestRate,
    };
  }

  private calculateValueOfInstallments(amount: number, numberOfInstallments: number, interestRate: number): number {
    return amount * Math.pow(1 + interestRate, numberOfInstallments);
  }

  private formatNumber(value: number): number {
    return Math.round(value * 100) / 100;
  }
}