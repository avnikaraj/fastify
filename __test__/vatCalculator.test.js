const {vatCalculator} = require('../src/utlis/vatCalculator')

describe("VAT Calculator", () => {

    test('should return the correct Vat xcluded amount for 20% Vat', () => {
        //arrange and act
        const result =vatCalculator.calculateVat(16.67)
        //assert
        expect(result).toBe(3.33);
    })

    test('should return the correct groos amount for 20% Vat', () => {
        //arrange and act
        const result = vatCalculator.calculateGroosAmount(16.67)
        //assert
        expect(result).toBe(20);
    })

    test('should return the correct net amount for 20% Vat', () => {
        //arrange and act

        const result = vatCalculator.calculateNetAmount(20) 
        //assert

        expect(result).toBe(16.67);
    })
})