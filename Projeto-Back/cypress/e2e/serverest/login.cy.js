import { generateRandomProduct } from '../../utils/generateRandomProduct';

describe('API Testing with Authentication', () => {
    let token;
    let productId;

    it.only('POST /Login', () => {
        cy.api({
            method: 'POST',
            url: '/login',
            body: {
                email: 'fulano@qa.com',
                password: 'teste'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            token = response.body.authorization;
            cy.log(token);
        });
    });

    it.only('POST /Create Produto', () => {
        const productData = generateRandomProduct();

        cy.api({
            method: 'POST',
            url: '/produtos',
            headers: {
                'accept': 'application/json',
                'Authorization': `${token}`,
                'Content-Type': 'application/json'
            },
            body: productData
        }).then((response) => {
            expect(response.status).to.eq(201);
            productId = response.body._id
            cy.log(productId)
        });
    });

    it.only('GET /produtos', () => {
        cy.api({
            method: 'GET',
            url: '/produtos',
            headers: {
                'accept': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
        });
    });

    it.only('PUT /produtos/{_id}', () => {
        const productId = 'BeeJh5lz3k6kSIzA'; 
        cy.api({
            method: 'PUT',
            url: `https://serverest.dev/produtos/${productId}`,
            headers: {
                'accept': 'application/json',
                'Authorization': `${token}`,
                'Content-Type': 'application/json'
            },
            body: {
                nome: "Logitech MX Vertical",
                preco: 470,
                descricao: "Mouse atualizado",
                quantidade: 400
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('Registro alterado com sucesso');
            cy.log(JSON.stringify(response.body));
        });
    });

    it.only('DELETE /produtos/{_id}', () => {
        cy.api({
            method: 'DELETE',
            url: `https://serverest.dev/produtos/${productId}`,
            headers: {
                'accept': 'application/json',
                'Authorization': `${token}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.status);
            cy.log("Produto deletado com sucesso");
        });
    });
});
