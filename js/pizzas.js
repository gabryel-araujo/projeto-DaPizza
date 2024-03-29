const pizza_premium = [
    {
        id: 'pizza-queijo',
        category:'premium',
        image: 'images/pizzas/Queijo Especial.jpeg',
        name: 'Queijo Especial',
        description: 'Farinha italiana,<br>molho à base de creme<br>de parmesão, mussarela,<br>DorBlu, parmesão,<br>noz e cranberry.<br>',
        value:40.00,
    },
    {
        id: 'pizza-pepperoni',
        category:'premium',
        image: 'images/pizzas/pepperoni.jpeg',
        name: 'Pepperoni',
        description: 'Farinha italiana, mussarela,<br>molho de tomate integral,<br>pepperoni premium, orégano.<br>',
        value:40.00,
    },
    {
        id: 'pizza-amoda',
        category:'premium',
        image: 'images/pizzas/à moda da casa.jpeg',
        name: 'À Moda da Casa',
        description: 'Farinha italiana,<br>molho de tomate integral,<br>mussarela, carne bovina,<br>calabresa, linguiça de caça,<br>pimentão, cebola roxa,<br>molho barbecue e orégano.<br>  ',
        value:40.00,
    },
    {
        id: 'pizza-bacon',
        category:'premium',
        image: 'images/pizzas/bacon.jpeg',
        name: 'Bacon',
        description: 'Farinha italiana, molho de<br>tomate integral, mussarela,<br>dorblu, bacon fatiado,<br>pimenta, orégano.<br> ',
        value: 40.00,
    },
    {
        id: 'pizza-marguerita',
        category:'premium',
        image: 'images/pizzas/marguerita.jpeg',
        name: 'Marguerita',
        description: 'Farinha italiana, molho<br>de tomate integral,<br>mussarela, tomate, molho<br>pesto, orégano.<br>',
        value: 40.00,
    },
    {
        id: 'pizza-salmao',
        category:'premium',
        image: 'images/pizzas/Salmão.jpeg',
        name: 'Salmão',
        description: 'Farinha italiana, molho<br>de tomate integral,<br>mussarela, salmão, tomate,<br>espinafre, Dorblu, alho,<br>limão, azeitonas, orégano.<br>',
        value: 40.00,
    },
];

const pizza_tradicional = [
    {
        id: 'pizza-calabresa',
        category:'tradicional',
        image: 'images/pizzas/calabresa.png',
        name: 'Calabresa',
        description: 'Queijo mussarela, fatias finas<br>de cebola, rodelas de calabresa,<br>azeitona preta e orégano.<br>',
        value:30.00,
    },
    {
        id: 'pizza-portuguesa',
        category:'tradicional',
        image: 'images/pizzas/portuguesa.webp',
        name: 'Portuguesa',
        description: 'Queijo mussarela , presunto<br>fatiado, ovos fatiados,<br>cebola roxa, pimentões<br>vermelhos e amarelos<br>azeitona preta e orégano.<br> ',
        value:30.00,
    },
    {
        id: 'pizza-4queijos',
        category:'tradicional',
        image: 'images/pizzas/4-queijos.jpg',
        name: '4 Quejjos<',
        description: 'Queijo mussarela, gorgonzola,<br>provolone, requeijão,<br>azeitona preta e orégano.<br>',
        value:30.00,
    },
    {
        id: 'pizza-brocolis',
        category:'tradicional',
        image: 'images/pizzas/brocolis.png',
        name: 'Brócolis',
        description: 'Queijo mussarela fresco,<br>brócolis, alho frito,<br>orégano, molho especial<br>de parmesão e queijo parmesão.<br>',
        value: 30.00,
    },
    {
        id: 'pizza-franpiry"',
        category:'tradicional',
        image: 'images/pizzas/frango-catupiry.png',
        name: 'Frango Com Catupiry&reg;',
        description: 'Queijo mussarela, frango assado<br>em cubos, com catupirry&reg;,<br>milho, bacon, azeitona<br>preta e orégano.<br>',
        value: 30.00,
    },
    {
        id: 'pizza-carnesol',
        category:'tradicional',
        image: 'images/pizzas/carne-de-sol.png',
        name: 'Carne de Sol',
        description: 'Queijo mussarela, carne de sol<br>desfiada, finas fatias de cebola,<br>Requeijão cremoso, azeitona<br>preta e orégano.<br> ',
        value: 30.00,
    },
    {
        id: 'pizza-franbarbecue',
        category:'tradicional',
        image: 'images/pizzas/frango-ao-barbecue.png',
        name: 'Frango com Barbecue',
        description: 'Queijo mussarela, frango<br>assado desfiado, finas<br>fatias de bacon, molho barbecue,<br>azeitona preta e orégano.<br>',
        value: 30.00,
    },
    {
        id: 'pizza-francheddar',
        category:'tradicional',
        image: 'images/pizzas/frango-cheddar.png',
        name: 'Frango com Cheddar',
        description: 'Queijo mussarela fresco,<br>frango desfiado temperado<br>com ervas finas e<br>cobertura de Cheddar.',
        value: 30.00,
    },
    {
        id: 'pizza-picanha"',
        category:'tradicional',
        image: 'images/pizzas/picanha.png',
        name: 'Picanha',
        description: 'Queijo mussarela fresco,<br>fatias de picanha temperada<br>com ervas finas, sal, <br>creme de alho e manjericão.<br>',
        value: 30.00,
    },
];

const pizza_doce = [
    {
        id: 'pizza-chocolateP',
        category:'doce',
        image: 'images/pizzas/chocolate.png',
        name: 'Chocolate ao Leite',
        description: 'Chocolate ao leite gratinado.<br>',
        value:35.00,
    },
    {
        id: 'pizza-chocolateB',
        category:'doce',
        image: 'images/pizzas/chocolate-branco.png',
        name: 'Chocolate Branco',
        description: 'Chocolate branco gratinado.<br>',
        value:35.00,
    },
    {
        id: 'pizza-dois-amores',
        category:'doce',
        image: 'images/pizzas/dois-amores.png',
        name: 'Dois Amores',
        description: 'Chocolate ao leite e  chocolate branco.<br>',
        value:35.00,
    }, 
];

export { pizza_premium, pizza_tradicional, pizza_doce };
