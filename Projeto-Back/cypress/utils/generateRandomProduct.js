function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateRandomProduct() {
    return {
        nome: "Produto " + generateRandomString(10),
        preco: Math.floor(Math.random() * 1000) + 100, // preço aleatório entre 100 e 1100
        descricao: "Descrição " + generateRandomString(20),
        quantidade: Math.floor(Math.random() * 500) + 1 // quantidade aleatória entre 1 e 500
    };
}

module.exports = {
    generateRandomProduct
};
