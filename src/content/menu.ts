export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  navLabel?: string;
  note?: string;
  items: readonly MenuItem[];
};

export type MenuSection = {
  title: string;
  categories: readonly MenuCategory[];
};

export const menuSections: readonly MenuSection[] = [
  {
    title: "Entradas",
    categories: [
      {
        id: "porcoes",
        title: "Porções",
        items: [
          { name: "Camarão à milanesa", price: "R$ 175", description: "Crocante por fora, suculento por dentro." },
          { name: "Lula à dorê", price: "R$ 60", description: "Nossa lula à dorê é leve, crocante e perfeita." },
          { name: "Iscas de peixe", price: "R$ 60", description: "Peixe fresquinho, servido na medida certa." },
          { name: "Bolinho de siri", price: "R$ 40", description: "4 unidades. Sinta o sabor do mar em cada pedacinho." },
          { name: "Bolinho de carne seca", price: "R$ 40", description: "4 unidades. Autêntico e irresistível. Contém alho." },
          { name: "Dadinhos de tapioca", price: "R$ 40", description: "Surpreenda-se em cada mordida." },
          { name: "Batata frita", price: "R$ 40", description: "Perfeitas para qualquer ocasião." },
          { name: "Pastel de camarão", price: "R$ 27", description: "2 unidades. O sabor do mar em cada pedaço." },
          { name: "Pastel de queijo", price: "R$ 20", description: "2 unidades. Clássico e delicioso." },
          { name: "Porção de pão de alho", price: "R$ 20", description: "O clássico com um toque especial." },
        ],
      },
      {
        id: "saladas",
        title: "Saladas",
        items: [
          { name: "Salada de salmão", price: "R$ 50", description: "Delicioso salmão em lascas, mix de alface, tomate-cereja, amêndoas, gergelim e croutons." },
          { name: "Salada Mead", price: "R$ 45", description: "Iscas de mignon, mix de alface, tomate-cereja, amêndoas crocantes, gergelim e croutons." },
          { name: "Salada Divina", price: "R$ 45", description: "Alface, rúcula, cenoura, palmito, tomate seco, azeitona, queijo minas fresco, parmesão e croutons." },
          { name: "Salada Shrimp", price: "R$ 45", description: "Camarões grelhados, mix de alface, tomate-cereja, amêndoas, gergelim e croutons." },
          { name: "Salada Chicken", price: "R$ 40", description: "Iscas de frango, mix de alface, tomate-cereja, amêndoas, gergelim e croutons." },
          { name: "Salada Caesar", price: "R$ 40", description: "Mix de alface, parmesão ralado e iscas de frango, servidos com croutons e delicioso molho Caesar." },
        ],
      },
    ],
  },
  {
    title: "Pratos principais",
    categories: [
      {
        id: "carnes",
        title: "Carnes",
        note: "Pratos para 2 pessoas. Para pratos individuais, veja Especiais para um. Por padrão, as carnes são preparadas ao ponto; solicite outro ponto ao fazer o pedido.",
        items: [
          { name: "Carré de cordeiro", price: "R$ 294", description: "Carré de cordeiro ao molho barbecue, servido com purê de batata-baroa. Acompanha arroz branco, legumes e salada." },
          { name: "Filé à parmegiana", price: "R$ 230", description: "Mignon empanado coberto de molho vermelho, queijo mussarela e parmesão. Acompanha arroz, salada e batata frita." },
          { name: "Picanha grelhada", price: "R$ 219", description: "Picanha grelhada com legumes na manteiga. Acompanha arroz, salada, feijão e batata rústica." },
          { name: "Divino Prime Rib", price: "R$ 219", description: "Prime rib grelhado, marinado em ervas finas e especiarias. Acompanha risoto de queijo, crispy de batata-doce e couve, tuile e geleia de hortelã." },
          { name: "Mignon ao molho madeira", price: "R$ 215", description: "Mignon suculento preparado com molho madeira da casa. Acompanha arroz, salada e batata sauté." },
          { name: "Frango à parmegiana", price: "R$ 170", description: "Frango empanado coberto de molho vermelho, queijo mussarela e parmesão. Acompanha arroz, salada e batata frita." },
          { name: "Frango grelhado", price: "R$ 149", description: "Frango grelhado com legumes na manteiga. Acompanha arroz, salada, batata rústica e feijão." },
        ],
      },
      {
        id: "frutos-do-mar",
        title: "Frutos do mar",
        note: "Pratos para 2 pessoas. Para pratos individuais, veja Especiais para um.",
        items: [
          { name: "Camarão à parmegiana", price: "R$ 285", description: "Camarão empanado coberto de molho vermelho, queijo mussarela e parmesão. Acompanha arroz branco, salada e batata frita." },
          { name: "Camarão na cabotiá", price: "R$ 280", description: "Camarão preparado com abóbora, molho vermelho, catupiry, parmesão e mussarela gratinada. Acompanha arroz, salada e batata frita." },
          { name: "Bobó de camarão da casa", price: "R$ 280", description: "Camarão, pimentões, molho vermelho, azeite de dendê, leite de coco e batata-baroa. Acompanha arroz e salada." },
          { name: "Camarão Tropical", price: "R$ 275", description: "Destaque da casa: camarão com molho vermelho, pimentões, cebola, abacaxi e leite de coco, finalizado com parmesão e mussarela gratinados e servido em um abacaxi aberto. Acompanha arroz, salada e batata frita." },
          { name: "Camarão Divina Salsa", price: "R$ 265", description: "Camarão, molho vermelho, pimentões, cebola e parmesão. Acompanha arroz, salada e batata frita." },
          { name: "Camarão gratinado", price: "R$ 255", description: "Camarão, molho bechamel, catupiry e salsinha. Acompanha arroz, salada e batata frita." },
          { name: "Camarão à milanesa", price: "R$ 250", description: "Camarão empanado crocante. Acompanha arroz, salada e delicioso pirão." },
        ],
      },
      {
        id: "pescados",
        title: "Pescados",
        note: "Pratos para 2 pessoas. Para pratos individuais, veja Especiais para um.",
        items: [
          { name: "Polvo Pedra Branca", price: "R$ 299", description: "Polvo grelhado com azeite de ervas finas e alho, servido com purê de mandioquinha. Acompanha arroz branco, salada e legumes na manteiga." },
          { name: "Bacalhau Gomes de Sá", price: "R$ 299", description: "Bacalhau em lascas com azeite de oliva, batata, pimentões, cebola e azeitonas. Acompanha arroz." },
          { name: "Côngrio grelhado na manteiga negra", price: "R$ 265", description: "Côngrio grelhado na manteiga negra. Acompanha arroz, purê de batata e salada." },
          { name: "Moqueca Divina Salsa", price: "R$ 259", description: "Camarão, pimentões, molho vermelho, azeite de dendê, leite de coco e batata-baroa. Acompanha arroz, farofa e salada." },
          { name: "Linguado ao molho de camarão", price: "R$ 229", description: "Linguado à milanesa com molho de camarões e queijo parmesão. Acompanha arroz, salada e batata frita." },
          { name: "Linguado Requinte", price: "R$ 229", description: "Linguado grelhado com camarão, alcaparras e aspargo. Acompanha arroz, salada e delicioso pirão." },
          { name: "Salmão grelhado em posta", price: "R$ 219", description: "Salmão grelhado. Acompanha arroz, purê de batata, molho de maracujá e salada." },
        ],
      },
      {
        id: "massas",
        title: "Massas",
        note: "Pratos para 2 pessoas. Escolha entre fettuccine ou spaghetti. Para pratos individuais, veja Especiais para um.",
        items: [
          { name: "Mignon com linguiça Blumenau", price: "R$ 159", description: "Massa, mignon, linguiça Blumenau defumada, requeijão e queijo ralado." },
          { name: "Mignon com molho funghi", price: "R$ 159", description: "Massa, mignon, funghi, especiarias e queijo ralado." },
          { name: "Camarão", price: "R$ 159", description: "Massa, camarão, molho vermelho, molho bechamel especial e queijo ralado." },
          { name: "Al Mare", price: "R$ 149", description: "Massa ao alho e óleo com camarão e tentáculos de lula salteados na manteiga negra, finalizada com tomate-cereja e molho pesto da casa." },
          { name: "Quatro queijos", price: "R$ 139", description: "Massa, mussarela, parmesão, catupiry e queijo coalho." },
          { name: "À bolonhesa", price: "R$ 130", description: "Massa, delicioso molho bolonhesa e queijo ralado." },
          { name: "Vegetariana", price: "R$ 109", description: "Massa, brócolis, couve-flor, tomate seco, champignon, molho bechamel e queijo ralado." },
        ],
      },
      {
        id: "risotos",
        title: "Risotos",
        note: "Pratos para 2 pessoas. Para pratos individuais, veja Especiais para um.",
        items: [
          { name: "Nero de frutos do mar", price: "R$ 189", description: "Arroz negro à base de vinho branco, com camarões e tentáculos de lula flambados, alho-poró e tomate-cereja." },
          { name: "Mignon com funghi", price: "R$ 159", description: "Risoto de filé mignon, cogumelos funghi, arroz arbóreo, requeijão e queijo ralado." },
          { name: "Mignon com linguiça Blumenau", price: "R$ 159", description: "Risoto de arroz arbóreo, mignon, linguiça Blumenau defumada, manteiga, requeijão e queijo ralado." },
          { name: "Camarão", price: "R$ 159", description: "Arroz arbóreo, camarões, molho de tomate, requeijão, manteiga e queijo ralado." },
          { name: "Vegetariano", price: "R$ 109", description: "Arroz arbóreo, brócolis, cenoura, couve-flor, champignon, tomate seco, manteiga, requeijão e queijo ralado." },
        ],
      },
      {
        id: "menu-kids",
        title: "Menu kids",
        note: "Quatro opções exclusivas para as crianças desfrutarem de uma refeição divertida e saborosa.",
        items: [
          { name: "Mignon com batata sorriso", price: "R$ 42", description: "Iscas de filé mignon, arroz, salada, feijão e batata sorriso." },
          { name: "Massa com mignon", price: "R$ 42", description: "Massa com iscas de filé mignon." },
          { name: "Frango com batata sorriso", price: "R$ 33", description: "Iscas de filé de frango, arroz, salada, feijão e batata sorriso." },
          { name: "Massa com frango", price: "R$ 33", description: "Massa com iscas de frango." },
        ],
      },
    ],
  },
  {
    title: "Floripa em Dobro",
    categories: [
      {
        id: "floripa-em-dobro-massas",
        title: "Massas",
        navLabel: "Dobro: Massas",
        items: [
          { name: "Camarão", price: "R$ 86" },
          { name: "Mignon com funghi", price: "R$ 85" },
          { name: "Mignon com Blumenau", price: "R$ 85" },
          { name: "Quatro queijos", price: "R$ 79" },
          { name: "Vegetariana", price: "R$ 79" },
        ],
      },
      {
        id: "floripa-em-dobro-risotos",
        title: "Risotos",
        navLabel: "Dobro: Risotos",
        items: [
          { name: "Nero de frutos do mar", price: "R$ 99" },
          { name: "Camarão", price: "R$ 86" },
          { name: "Mignon com funghi", price: "R$ 85" },
          { name: "Mignon com Blumenau", price: "R$ 85" },
          { name: "Vegetariano", price: "R$ 79" },
        ],
      },
    ],
  },
  {
    title: "Pratos executivos",
    categories: [
      {
        id: "executivo-padrao",
        title: "Executivo padrão",
        note: "Servido de segunda a sexta, das 11h às 15h, exceto feriados. Todas as opções servem 1 pessoa.",
        items: [
          { name: "Mignon grelhado", price: "R$ 58", description: "Mignon grelhado, arroz branco, salada, batata frita e feijão." },
          { name: "Espaguete com mignon", price: "R$ 56", description: "Espaguete na manteiga servido com salsinha, mignon e salada." },
          { name: "Entrecotê", price: "R$ 56", description: "Entrecotê servido com arroz branco, salada, batata frita e feijão." },
          { name: "Linguado grelhado", price: "R$ 52", description: "Linguado servido com arroz, salada, batata frita e feijão." },
          { name: "À la minuta", price: "R$ 50", description: "Alcatra com ovo frito, servida com arroz, salada, batata frita e feijão." },
          { name: "Mané", price: "R$ 44", description: "Linguiça Blumenau frita com dois ovos fritos. Acompanha salada e escolha entre pirão branco ou feijão." },
          { name: "Frango grelhado", price: "R$ 39", description: "Frango servido com arroz, salada, batata frita e feijão." },
        ],
      },
      {
        id: "especiais-para-um",
        title: "Especiais para um",
        note: "Esta seção é perfeita para você saborear em um momento único.",
        items: [
          { name: "Bacalhau Gomes de Sá", price: "R$ 165", description: "Bacalhau em lascas com batata, cebola, pimentões e azeitona. Acompanha arroz." },
          { name: "Côngrio grelhado", price: "R$ 135", description: "Côngrio grelhado na manteiga negra. Acompanha arroz, purê de batata e salada." },
          { name: "Filé à parmegiana", price: "R$ 125", description: "Mignon empanado com molho vermelho, queijo mussarela e parmesão. Acompanha arroz, salada e batata frita." },
          { name: "Risoto de camarão", price: "R$ 86", description: "Arroz arbóreo, camarões, molho de tomate, requeijão, manteiga e queijo ralado." },
          { name: "Mignon à Germânica", price: "R$ 85", description: "Medalhão de mignon grelhado com risoto de linguiça Blumenau, servido com tuile." },
          { name: "Mignon com funghi", price: "R$ 85", description: "Massa, filé mignon, funghi, especiarias e queijo ralado." },
          { name: "Strogonoff de filé", price: "R$ 65", description: "Strogonoff com tiras de filé. Acompanha arroz e fritas." },
          { name: "Linguado especial", price: "R$ 62", description: "Linguado grelhado com legumes salteados. Acompanha arroz." },
          { name: "Espaguete com frango à parmegiana", price: "R$ 59", description: "Espaguete na manteiga com frango empanado, coberto de molho vermelho e mussarela." },
          { name: "Strogonoff de frango", price: "R$ 49", description: "Strogonoff com tiras de frango. Acompanha arroz e fritas." },
        ],
      },
      {
        id: "executivo-leve",
        title: "Executivo leve",
        note: "Servido de segunda a sexta, das 11h às 15h, exceto feriados. Todas as opções servem 1 pessoa.",
        items: [
          { name: "Mignon leve", price: "R$ 62", description: "Mignon grelhado, arroz integral, salada, legumes e feijão." },
          { name: "Entrecotê leve", price: "R$ 59", description: "Entrecotê servido com arroz integral, salada, legumes e feijão." },
          { name: "Linguado leve", price: "R$ 56", description: "Linguado servido com arroz integral, salada, legumes e feijão." },
          { name: "À la minuta leve", price: "R$ 54", description: "Alcatra com ovo frito, servida com arroz integral, salada, legumes e feijão." },
          { name: "Frango leve", price: "R$ 44", description: "Frango servido com arroz integral, salada, legumes e feijão." },
        ],
      },
    ],
  },
  {
    title: "Sobremesas",
    categories: [
      {
        id: "sobremesas",
        title: "Sobremesas",
        items: [
          { name: "Petit gâteau", price: "R$ 29", description: "Bolinho petit gâteau servido com sorvete de creme e coberturas de morango e chocolate." },
          { name: "Banana Divina", price: "R$ 29", description: "Banana-da-terra assada com sorvete de creme, farofa de amendoim e calda de caramelo." },
          { name: "Mamão papaia com cassis", price: "R$ 29", description: "Mamão papaia, sorvete de creme e licor de cassis." },
          { name: "Taça de sorvete", price: "R$ 29", description: "Três bolas de sorvete com calda de morango, chocolate ou caramelo." },
        ],
      },
    ],
  },
  {
    title: "Bebidas",
    categories: [
      {
        id: "nao-alcoolicos",
        title: "Não alcoólicos",
        items: [
          { name: "Red Bull", price: "R$ 18", description: "Lata de 250 ml." },
          { name: "Limonada Suíça", price: "R$ 18", description: "Limão, leite condensado, água com gás e gelo." },
          { name: "Soda italiana", price: "R$ 17", description: "Sabores: limão-siciliano, tangerina, maçã-verde, morango, amora ou frutas vermelhas." },
          { name: "Suco natural", price: "R$ 12", description: "Sabores: limão, abacaxi, abacaxi com hortelã, morango ou maracujá." },
          { name: "Suco de uva", price: "R$ 12" },
          { name: "H2O Limão", price: "R$ 10" },
          { name: "Suco de laranja", price: "R$ 10" },
          { name: "Refrigerante", price: "R$ 8", description: "Lata de 350 ml." },
          { name: "Água com gás", price: "R$ 7" },
          { name: "Água sem gás", price: "R$ 6" },
        ],
      },
      {
        id: "chopps-e-cervejas",
        title: "Chopps e cervejas",
        items: [
          { name: "Stella Artois Pure Gold 600 ml", price: "R$ 23" },
          { name: "Stella Artois Pure Gold long neck", price: "R$ 17" },
          { name: "Chopp Pilsen Stella 500 ml", price: "R$ 20" },
          { name: "Chopp Pilsen Stella 300 ml", price: "R$ 15" },
          { name: "Stella Artois 600 ml", price: "R$ 21" },
          { name: "Stella Artois long neck", price: "R$ 15" },
          { name: "Spaten 600 ml", price: "R$ 20" },
          { name: "Spaten long neck", price: "R$ 15" },
          { name: "Original 600 ml", price: "R$ 20" },
          { name: "Corona 600 ml", price: "R$ 23" },
          { name: "Corona long neck", price: "R$ 17" },
          { name: "Corona Zero", price: "R$ 16" },
          { name: "Budweiser long neck", price: "R$ 14" },
        ],
      },
      {
        id: "destilados",
        title: "Destilados",
        note: "Servidos por dose.",
        items: [
          { name: "Buchanan's 12 anos", price: "R$ 40" },
          { name: "Old Parr 12 anos", price: "R$ 40" },
          { name: "Johnnie Walker Black Label", price: "R$ 35" },
          { name: "Jack Daniel's", price: "R$ 30" },
          { name: "Jägermeister", price: "R$ 27" },
          { name: "Licor 43", price: "R$ 27" },
          { name: "Red Label", price: "R$ 25" },
          { name: "Vodka Absolut", price: "R$ 25" },
          { name: "Amarula", price: "R$ 25" },
          { name: "Gin Tanqueray LD", price: "R$ 23" },
          { name: "Steinhaeger", price: "R$ 20" },
          { name: "Campari", price: "R$ 20" },
          { name: "Smirnoff", price: "R$ 17" },
          { name: "Underberg", price: "R$ 15" },
        ],
      },
    ],
  },
];

export const menuCategories = menuSections.flatMap((section) => section.categories);
