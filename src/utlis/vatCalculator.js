const vatCalculator = {
    calculateVat: (netAmount) =>{
        return Math.round((netAmount * 0.20) * 1e2) / 1e2
    },
    calculateGroosAmount: (netAmount) =>{
        return Math.round((netAmount * 1.20) * 1e2) / 1e2
    },

    calculateNetAmount: (groosAmount) =>{
        return Math.round((groosAmount / 1.20) * 1e2) / 1e2
    }
}

module.exports = {vatCalculator}