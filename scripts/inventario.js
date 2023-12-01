/*Agregar producto*/ 
let inventory = [
    { code: "1001", name: 'Aceite de oliva extra virgen (x 3Ltr)', category: 'seco', quantity: 7 },
    { code: "1002", name: 'Aceite de girasoli (caja x 3)', category: 'seco', quantity: 3 },
    { code: "1003", name: 'Aceite super fry (x 20Ltr)', category: 'seco', quantity: 2 },
    { code: "1004", name: 'Aceituna negra deshuesada (x 350gr)', category: 'refrigerado', quantity: 45 },
    { code: "1005", name: 'Aderezo cesar (x 500gr)', category: 'refrigerado', quantity: 7 },
    { code: "1006", name: 'Agua nacimiento postobon con gas', category: 'refrigerado', quantity: 6 },
    { code: "1007", name: 'Agua nacimiento (500gr)', category: 'refrigerado', quantity: 4 },
    { code: "1008", name: 'Aguacate papelillo (10 diarios)', category: 'seco', quantity: 150 },
    { code: "1009", name: 'Aguardiente tapa azul(x 1/2)', category: 'seco', quantity: 10 },
    { code: "1010", name: 'Aguardiente tapa roja (x 1/2)', category: 'seco', quantity: 10 },
    { code: "1011", name: 'Aji dulce', category: 'refrigerado', quantity: 16 },
    { code: "1012", name: 'Ajo pelado', category: 'refrigerado', quantity: 30 },
    { code: "1013", name: 'Ajonjoli tostado', category: 'seco', quantity: 20 },
    { code: "1014", name: 'Alcaparras alfa vidrio (x 470gr)', category: 'refrigerado', quantity: 30 },
    { code: "1015", name: 'Alfajor', category: 'seco', quantity: 30 },
    { code: "1016", name: 'Almendras tostadas', category: 'seco', quantity: 20 },
    { code: "1017", name: 'Anillos de calamar (600gr)', category: 'refrigerado', quantity: 40 },
    { code: "1018", name: 'Apanado para nuggets (x 1kg)', category: 'seco', quantity: 20 },
    { code: "1019", name: 'Aromatica deshidratada ( x paquete de 25 unidades)', category: 'seco', quantity: 45 },
    { code: "1020", name: 'Azucar manuelita (x 5 Libras)', category: 'seco', quantity: 30 },
    { code: "1021", name: 'Azucar micro pulverizada (500gr)', category: 'seco', quantity: 28 },
    { code: "1022", name: 'Baileys (x botella)', category: 'seco', quantity: 6 },
    { code: "1023", name: 'Barquillos (x paquete)', category: 'seco', quantity: 12 },
    { code: "1024", name: 'Barra de nuez', category: 'seco', quantity: 18 },
    { code: "1025", name: 'Barra de chocolate 12plex (250gr)', category: 'seco', quantity: 10 },
    { code: "1026", name: 'Base de risotto', category: 'refrigerado', quantity: 36 },
    { code: "1027", name: 'Batido economico ZAFRAN (x 1kg)', category: 'seco', quantity: 18 },
    { code: "1028", name: 'Brandy DOMEQ (x botella)', category: 'seco', quantity: 8 },
    { code: "1029", name: 'Bretaña 8.5oz (x 250ml)', category: 'refrigerado', quantity: 9 },
    { code: "1030", name: 'Bretaña postobon 10oz (x 300ml)', category: 'refrigerado', quantity: 9 },
    { code: "1031", name: 'Brioche yogurt tajado', category: 'seco', quantity: 36 },
    { code: "1031", name: 'Brote de rugula', category: 'refrigerado', quantity: 28 },
    { code: "1032", name: 'Café molido new colony (x 400gr)', category: 'seco', quantity: 16 },
    { code: "1033", name: 'Café todo fresa en grano (x 2500gr)', category: 'secos', quantity: 16 },
    { code: "1034", name: 'Café todo fresa molido', category: 'seco', quantity: 16 },
    { code: "1035", name: 'Café todo fresa en grano', category: 'seco', quantity: 16 },
    { code: "1036", name: 'Camaron (PQX 104gr Talla 51/60)', category: 'congelado', quantity: 36 },
    { code: "1038", name: 'Canela en astila (x 500gr)', category: 'seco', quantity: 20 },
    { code: "1039", name: 'Canela en polvo san valentin', category: 'seco', quantity: 20 },
    { code: "1040", name: 'Carne redman res y cerdo (80gr)', category: 'refrigerado', quantity: 50 },
    { code: "1041", name: 'Carpaccio', category: 'refrigerado', quantity: 40 },
    { code: "1042", name: 'Cebolla blanca pelada', category: 'refrigerado', quantity: 26 },
    { code: "1043", name: 'Cebolla morada', category: 'refrigerada', quantity: 26 },
    { code: "1044", name: 'Cereza marraschino alfresco (x 500gr)', category: 'refrigerado', quantity: 18 },
    { code: "1045", name: 'Cerveza 3 cordilleras mestiza', category: 'refrigerado', quantity: 50 },
    { code: "1046", name: 'Cerveza 3 cordilleras mulata', category: 'refrigerado', quantity: 50 },
    { code: "1047", name: 'Cerveza 3 cordilleras negra', category: 'refrigerado', quantity: 50 },
    { code: "1048", name: 'Cerveza 3 cordilleras rosada', category: 'refrigerado', quantity: 50 },
    { code: "1049", name: 'Cerveza club colombia dorada', category: 'refrigerado', quantity: 50 },
    { code: "1050", name: 'Cerveza andina', category: 'refrigerado', quantity: 50 },
    { code: "1051", name: 'Cerveza heineken lata (x 269ml)', category: 'refrigerado', quantity: 50 },
    { code: "1052", name: 'Cerveza heineken (x 330ml)', category: 'refrigerado', quantity: 50 },
    { code: "1053", name: 'Cerveza miller', category: 'refrigerado', quantity: 50 },
    { code: "1054", name: 'Cerveza sol', category: 'refrigerio', quantity: 50 },
    { code: "1055", name: 'Champiñon entero', category: 'refrigerado', quantity: 30 },
    { code: "1056", name: 'Cheeseke normal molde', category: 'refrigerado', quantity: 20 },
    { code: "1057", name: 'Choco express (x 250 gr)', category: 'seco', quantity: 12 },
    { code: "1059", name: 'Chocolate decoracion 53%', category: 'seco', quantity: 12 },
    { code: "1060", name: 'Cilantro', category: 'refrigerado', quantity: 10 },
    { code: "1061", name: 'Cocacola 330ml lata (x 12 unidades)', category: 'seco', quantity: 6 },
    { code: "1062", name: 'Cocacola sin azucar 330ml lata (x 12 unidades)', category: 'seco', quantity: 6 },
    { code: "1063", name: 'Cocadas', category: 'refrigerado', quantity: 10 },
    { code: "1064", name: 'Codillo de cerdo', category: 'refrigerado', quantity: 8 },
    { code: "1065", name: 'Cogollo europeo', category: 'refrigerado', quantity: 12 },
    { code: "1066", name: 'Cordon bleu', category: 'refrigerado', quantity: 8 },
    { code: "1067", name: 'Crema coloma de cafe (x botella)', category: 'seco', quantity: 4 },
    { code: "1068", name: 'Crema convier amaretto (x botella)', category: 'seco', quantity: 4 },
    { code: "1069", name: 'Crema de champiñones (x 900 gr)', category: 'seco', quantity: 8 },
    { code: "1070", name: 'Crema de coco roland (x 425 gr)', category: 'seco', quantity: 9 },
    { code: "1071", name: 'Crema de leche alpina 1080ml', category: 'refrigerado', quantity: 16 },
    { code: "1072", name: 'Crema de maiz (900gr)', category: 'seco', quantity: 9 },
    { code: "1073", name: 'Crema de tomate', category: 'seco', quantity: 6 },
    { code: "1074", name: 'Corissant de espinaca', category: 'seco', quantity: 40 },
    { code: "1075", name: 'Croissant de 3 quesos', category: 'seco', quantity: 40 },
    { code: "1076", name: 'Croisant de almendras', category: 'seco', quantity: 30 },
    { code: "1077", name: 'Croissant jamon y queso', category: 'seco', quantity: 35 },
    { code: "1078", name: 'Croqueta congelada (x 10 unidades)', category: 'congelado', quantity: 10 },
    { code: "1079", name: 'Croutons caesar (x 250 gr)', category: 'seco', quantity: 16 },
    { code: "1080", name: 'Cubos de maduro (x 1000 gr)', category: 'refrigerado', quantity: 12 },
    { code: "1081", name: 'Cuchara de chocolate', category: 'seco', quantity: 6 },
    { code: "1082", name: 'Delirio de baileys', category: 'seco', quantity: 4 },
    { code: "1083", name: 'Desinfectante final step (1.5 litros diversey)', category: 'seco', quantity: 1 },
    { code: "1084", name: 'Detergente ulc (x 20 Litros)', category: 'seco', quantity: 1 },
    { code: "1085", name: 'Detergente ulc (x 5 litros)', category: 'seco', quantity: 1 },
    { code: "1086", name: 'Drax hornos y parrilla(x 0.5 litros', category: 'seco', quantity:  1},
    { code: "1087", name: 'Eden suma (x 3 litros)', category: 'seco', quantity: 1 },
    { code: "1088", name: 'Endulzante soda lyche (x 750 ml)', category: 'seco', quantity: 2 },
    { code: "1089", name: 'Endulzante soda maracuya (x 750 ml)', category: 'seco', quantity: 2 },
    { code: "1090", name: 'Endulzante soda sandia (x 750 ml)', category: 'seco', quantity: 2 },
    { code: "1091", name: 'Esencia de vainilla negra astek', category: 'seco', quantity: 3 },
    { code: "1092", name: 'Espinaca bogotana', category: 'refrigerado', quantity: 4 },
    { code: "1093", name: 'Fantasia mediano decorado', category: 'seco', quantity: 9 },
    { code: "1095", name: 'fetuccine unidas (x 90 gr)', category: 'refrigerado', quantity: 12 },
    { code: "1096", name: 'Filete de pollo (x1400  gramos x 10 undades', category: 'refrigerado', quantity: 10 },
    { code: "1097", name: 'Filete de salmon (x 175 gr x 5 unidades)', category: 'refrigerado', quantity: 10 },
    { code: "1098", name: 'Flan de leche ', category: 'refrigerado', quantity: 6 },
    { code: "1099", name: 'Fresa decorar (x 1 kg)', category: 'refrigerado', quantity: 20 },
    { code: "2000", name: 'Galleta capuchina', category: 'seca', quantity: 30 },
    { code: "2001", name: 'Galleta de avena congelada', category: 'congelado', quantity: 16 },
    { code: "2002", name: 'Galleta de mantequilla', category: 'refrigerado', quantity: 4 },
    { code: "2003", name: 'Galleta perritos', category: 'refrigerado', quantity: 4 },
    { code: "2004", name: 'Gaseosa 7up postobon 10 oz (x unidad)', category: 'seco', quantity: 16 },
    { code: "2005", name: 'Gaseosa colombiana cero 10 oz (x unidad)', category: 'seco', quantity: 12 },
    { code: "2006", name: 'Gaseosa colombiana postobon 10 oz (x unidad)', category: 'seco', quantity: 10 },
    { code: "2007", name: 'Gaseosa manzana cero 10 oz (x unidad)', category: 'seco', quantity: 10 },
    { code: "2008", name: 'Gaseosa manzana postobon 10 oz (x unidad)', category: 'seco', quantity: 10 },
    { code: "2009", name: 'Gaseosa pepsi cero postobon 10 oz (x unidad)', category: 'seco', quantity: 10 },
    { code: "2010", name: 'Gaseosa pepsi postobon 10 oz (x unidad)', category: 'seco', quantity: 10 },
    { code: "2021", name: 'Gel zanigel botella crem 80091 (1000ml)', category: 'seco', quantity: 1 },
    { code: "2012", name: 'Glaseado', category: 'seco', quantity: 6 },
    { code: "2013", name: 'Granola', category: 'seco', quantity: 10 },
    { code: "2014", name: 'Harina de trigo (12500 gr)', category: 'seco', quantity: 3 },
    { code: "2015", name: 'Hatsu amarillo', category: 'seco', quantity: 8 },
    { code: "2016", name: 'Hatsu blanco', category: 'seco', quantity: 8 },
    { code: "2017", name: 'Hatsu morado', category: 'seco', quantity: 8 },
    { code: "2018", name: 'Hatsu negro', category: 'seco', quantity: 8 },
    { code: "2019", name: 'Hatsu rosado', category: 'seco', quantity: 8 },
    { code: "2020", name: 'Heinz ketchup (x 12.92 kg)', category: 'seco', quantity: 6 },
    { code: "2021", name: 'Helado premium tarro (x 8 litros)', category: 'Congelado', quantity: 4 },
    { code: "2022", name: 'Helado vainilla (x 18 litros)', category: 'congelado', quantity: 4 },
    { code: "2023", name: 'Hierba buena', category: 'refrigerado', quantity: 8 },
    { code: "2024", name: 'Huevos aa (x canasta)', category: 'seco', quantity: 8 },
    { code: "2025", name: 'Jabon soft care plus free foam bolsa lt', category: 'seco', quantity: 2 },
    { code: "2026", name: 'Jarabe de citricos', category: 'refrigerado', quantity: 3 },
    { code: "2027", name: 'Jarabe de flor de jamaica', category: 'refrigerado', quantity: 3 },
    { code: "2028", name: 'JP chenet fizzy rose lata', category: 'refrigerado', quantity: 12 },
    { code: "2029", name: 'kale', category: 'refrigerado', quantity: 6 },
    { code: "2030", name: 'koftas (paquete x 12 unidades)', category: 'refrigerado', quantity: 3 },
    { code: "2031", name: 'koftas hamburguesa', category: 'refrigerado', quantity: 3 },
    { code: "2032", name: 'Las moras cabernet sauvignon (botella 12+4)', category: 'seco', quantity: 2 },
    { code: "2033", name: 'Las moras chardonay (botella 12+4)', category: 'seco', quantity: 2 },
    { code: "2034", name: 'La mora malbec tinto (x botella 12+4)', category: 'seco', quantity: 2 },
    { code: "2035", name: 'la mora syrah', category: 'seco', quantity: 2 },
    { code: "2036", name: 'Leche de almendras (x 1 litro', category: 'refrigerado', quantity: 10 },
    { code: "2037", name: 'leche deslactosada alpina (paca  x 600ml', category: 'refrigerado', quantity:6  },
    { code: "2038", name: 'Leche en polvo(x 900 gr)', category: 'seco', quantity: 5 },
    { code: "2039", name: 'Lechuga lisa verde', category: 'refrigerado', quantity: 4 },
    { code: "2040", name: 'Levadura instantanea (x 500 gr)', category: 'seco', quantity: 14 },
    { code: "2041", name: 'Licor convier treple sec (x botella)', category: 'seco', quantity: 2 },
    { code: "2042", name: 'Limon', category: 'seco', quantity: 40 },
    { code: "2043", name: 'Limpia vidrios', category: 'seco', quantity: 2 },
    { code: "2044", name: 'Lychee en conserva(567 gr - 255 gr)', category: 'refrigerado', quantity: 2 },
    { code: "2045", name: 'Maiz tostado (x 160 gr)', category: 'seco', quantity: 3 },
    { code: "2046", name: 'Mandarina', category: 'seco', quantity: 12 },
    { code: "2047", name: 'Mani triturado (x 500 gr)', category: 'seco', quantity: 10 },
    { code: "2048", name: 'Mantequilla (x 500 gr)', category: 'refrigerado', quantity: 16 },
    { code: "2049", name: 'Mantequilla avellanada', category: 'refrigerado', quantity: 10 },
    { code: "2050", name: 'Manzana roja', category: 'seco', quantity: 4 },
    { code: "2051", name: 'Manzana verde', category: 'seco', quantity: 4 },
    { code: "2052", name: 'Maracuya', category: 'seco', quantity: 4 },
    { code: "2053", name: 'Myonesa kary del chef (3790 gr)', category: 'refrigerado', quantity: 3 },
    { code: "2054", name: 'Medallon de solomito (x 140 gr)', category: 'refrigerado', quantity: 11 },
    { code: "2055", name: 'Mescla apanar (panko x gr', category: 'seco', quantity: 8 },
    { code: "2056", name: 'Mescla carne para lasagna', category: 'refrigerado', quantity: 12 },
    { code: "2057", name: 'Mescla de pollo para lasagna y canelones', category: 'refrigerado', quantity: 8 },
    { code: "2058", name: 'Mescla para olivatta', category: 'refrigerado', quantity: 3 },
    { code: "2060", name: 'Mezcla de lechuga', category: 'refrigerado', quantity: 3 },
    { code: "2061", name: 'Micao de arequipe redondo', category: 'refrigerado', quantity: 12 },
    { code: "2062", name: 'Miel de abeja cedi (x500gr)', category: 'seco', quantity: 5 },
    { code: "2063", name: 'Miel activ-go (x2500 gr)', category: 'seco', quantity: 2 },
    { code: "2064", name: 'Mix de quinoa', category: 'seco', quantity: 7 },
    { code: "2065", name: 'Napoleon light', category: 'seco', quantity: 7 },
    { code: "2066", name: 'Naranja deshidratada (x500 gr)', category: 'seco', quantity:  5},
    { code: "2067", name: 'Nevado de chocolate grande en molde', category: 'refrigerado', quantity: 2 },
    { code: "2068", name: 'Nuez triturada', category: 'seco', quantity: 4 },
    { code: "2069", name: 'Ossobuco de cerdo', category: 'refrigerado', quantity: 4 },
    { code: "2070", name: 'Paleta de fresa', category: 'congelado', quantity: 15 },
    { code: "2071", name: 'Palito de queso congelado', category: 'congelado', quantity: 23 },
    { code: "2072", name: 'Pan brioche hamb ( unidad x 70 gr)', category: 'seco', quantity: 11 },
    { code: "2073", name: 'Pan de yuca congelado', category: 'congelado', quantity: 23 },
    { code: "2074", name: 'Papa lisa (x9 gr)', category: 'seco', quantity: 9 },
    { code: "2075", name: 'Papa s01 hamburguesa (x 1.8 kg)', category: 'refrigerado', quantity: 6  },
    { code: "2076", name: 'Papayuela agridulce (800 gr)', category: 'refrigerado', quantity: 24 },
    { code: "2077", name: 'Pasta de hojaldre para micao ', category: 'refrigerado', quantity: 8 },
    { code: "2078", name: 'Pasta lasagna (x 30 unidades)', category: 'seco', quantity: 8 },
    { code: "2079", name: 'Pasta penne ( medias porciones paquete de 100 gr)', category: 'seco', quantity: 6 },
    { code: "2080", name: 'Pasta macarrones (x 3000 gr)', category: 'seco', quantity: 6 },
    { code: "2081", name: 'Pastel de arequipe', category: 'seco', quantity: 30 },
    { code: "2082", name: 'Pastel de carne', category: 'seco', quantity: 28 },
    { code: "2083", name: 'Pepinillo heinz redman', category: 'refrigerado', quantity: 5 },
    { code: "2084", name: 'Perejil crespo', category: 'refrigerados', quantity: 6 },
    { code: "2085", name: 'Pesto rojo (x 500 gr)', category: 'refrigerado', quantity: 8 },
    { code: "2086", name: 'Pollo up (90 gr x 5 unidades)', category: 'refrigerado', quantity: 36 },
    { code: "2087", name: 'Postre de reina mediano', category: 'refrigerado', quantity: 20 },
    { code: "2088", name: 'Pulpa de fresa (x 10gr)', category: 'congelado', quantity: 120 },
    { code: "2089", name: 'Pulpa de mango (x 10gr)', category: 'congelado', quantity: 120 },
    { code: "2090", name: 'Pulpa de mora (x 10gr)', category: 'congelado', quantity: 120 },
    { code: "2091", name: 'Pulpa limonada de coco (x 10gr)', category: 'congelado', quantity: 120 },
    { code: "2092", name: 'Pure de papa parmesano', category: 'refrigerado', quantity: 12 },
    { code: "2093", name: 'Pure de platano', category: 'refrigerado', quantity: 9 },
    { code: "2094", name: 'Queso amarillo tajado kraft (2270gr)', category: 'refrigerado', quantity: 4 },
    { code: "2095", name: 'Queso cheddar liquido (1 litro)', category: 'refrigerado', quantity: 6 },
    { code: "2096", name: 'Queso crema porcionado', category: 'refrigerado', quantity: 24 },
    { code: "2097", name: 'Queso feta picado (x 350gr)', category: 'refrigerado', quantity: 12 },
    { code: "2098", name: 'Queso mozzarella rayado (x 500gr)', category: 'refrigerado', quantity: 23 },
    { code: "2099", name: 'Queso parmesano polvo (x 1 kg)', category: 'refrigerado', quantity: 16 },
    { code: "3000", name: 'Queso parmesano rayado (x 2kg)', category: 'refrigerado', quantity: 10 },
    { code: "3001", name: 'Quinoa negra frita', category: 'seco', quantity: 9 },
    { code: "3002", name: 'Reduccion de balsamico (x 690gr)', category: 'refrigerado', quantity: 12 },
    { code: "3003", name: 'Repollo blanco', category: 'seco', quantity: 10 },
    { code: "3004", name: 'Robalo(paquete x 10 de 110gr)', category: 'refrigerado', quantity: 30 },
    { code: "3005", name: 'Romero', category: 'seco', quantity: 16 },
    { code: "3006", name: 'Ron 3 años (x media)', category: 'seco', quantity: 8 },
    { code: "3007", name: 'Rugula', category: 'seco', quantity: 9 },
    { code: "3008", name: 'Salchicha italiana mini (x 250gr)', category: 'refrigerado', quantity: 11 },
    { code: "3009", name: 'Salsa alfredo', category: 'seco', quantity: 12 },
    { code: "3010", name: 'Salsa alfredo trufada', category: 'seco', quantity: 8 },
    { code: "3011", name: 'Salsa alfrewdo (x 500gr)', category: 'seco', quantity: 5 },
    { code: "3012", name: 'Salsa bbq oriental', category: 'seco', quantity: 6 },
    { code: "3013", name: 'Salsa bolognesa', category: 'refrigerado', quantity: 8 },
    { code: "3014", name: 'Salsa carbonara', category: 'refrigerado', quantity: 8 },
    { code: "3015", name: 'Salsa carbonara (x 500gr)', category: 'refrigerado', quantity: 8 },
    { code: "3016", name: 'Salsa de arequipe', category: 'refrigerado', quantity: 9 },
    { code: "3017", name: 'Salsa de chocolate (x 250gr)', category: 'refrigerado', quantity: 5 },
    { code: "3018", name: 'Salsa de eneldo', category: 'seco', quantity: 4 },
    { code: "3019", name: 'Salsa frutos rojos', category: 'refrigerado', quantity: 10 },
    { code: "3020", name: 'Salsa de tomate fruco (4350gr)', category: 'seco', quantity: 18 },
    { code: "3021", name: 'Salsa pesto', category: 'seco', quantity: 5 },
    { code: "3022", name: 'Salsa pesto(x 400gr)', category: 'seco', quantity: 5 },
    { code: "3023", name: 'Salsa pomodoro', category: 'seco', quantity: 5 },
    { code: "3024", name: 'Salsa pomodoro (x 500gr)', category: 'refrigerado', quantity: 5 },
    { code: "3025", name: 'Salsa redman', category: 'refrigerado', quantity: 5 },
    { code: "3026", name: 'Salsa roja para postres', category: 'refrigerado', quantity: 7 },
    { code: "3027", name: 'Salsa 3 quesos', category: 'refrigerado', quantity: 4 },
    { code: "3028", name: 'Salsa trufada redman', category: 'refrigerado', quantity:  3},
    { code: "3029", name: 'sandia', category: 'refrigerado', quantity: 18 },
    { code: "3030", name: 'Sasonador carne magic (x 822gr)', category: 'seco', quantity: 4 },
    { code: "3031", name: 'Sasonador salmon magic (x 680gr)', category: 'seco', quantity: 4 },
    { code: "3032", name: 'Soft care free (x 5 litros)', category: 'seco', quantity: 1 },
    { code: "3033", name: 'Spsguetti refri (mediano x 90gr)', category: 'seco', quantity: 50 },
    { code: "3034", name: 'Sueca', category: 'refrigerado', quantity: 50 },
    { code: "3035", name: 'Suma chlor d4.4 (x 3 litros)', category: 'seco', quantity:  2},
    { code: "3036", name: 'Suma divosan 946/32 (x unidad)', category: 'seco', quantity: 2 },
    { code: "3037", name: 'Suma grill d9 desengrasante (tarro x 5 litros)', category: 'seco', quantity: 2 },
    { code: "3038", name: 'Suma blendl7 detergente liquido (tarro x20 litros)', category: 'seco', quantity: 2 },
    { code: "3039", name: 'Sundae nevado', category: 'congelado', quantity: 30 },
    { code: "3040", name: 'Te chai (x 200gr)', category: 'seco', quantity: 4 },
    { code: "3041", name: 'Tocineta en laminas (x 500gr)', category: 'refrigerado', quantity: 8 },
    { code: "3042", name: 'Tomate cherry', category: 'refrigerado', quantity: 9 },
    { code: "3043", name: 'Tomate chonto', category: 'refrigerado', quantity: 9 },
    { code: "3044", name: 'Tomate larga vida', category: 'refrigerado', quantity: 8 },
    { code: "3045", name: 'Tomates secos aceite metoo (x 400gr)', category: 'refrigerado', quantity: 4 },
    { code: "3046", name: 'Tomillo en escamas (x 125gr)', category: 'seco', quantity: 4 },
    { code: "3047", name: 'Torta de chocolates padres', category: 'refrigerado', quantity: 16 },
    { code: "3048", name: 'Torta de zanahoria y almendras', category: 'seco', quantity: 14 },
    { code: "3049", name: 'Tortellini ricota y espinaca (x unidad)', category: 'refrigerado', quantity: 50 },
    { code: "3050", name: 'Tosticos', category: 'seco', quantity: 8 },
    { code: "3051", name: 'Tostones sencillos', category: 'seco', quantity: 50 },
    { code: "3052", name: 'Uva morada', category: 'refrigerado', quantity: 10 },
    { code: "3053", name: 'Uva pasa (x 500gr)', category: 'refrigerado', quantity: 9 },
    { code: "3054", name: 'Vinagre blanco bary (x 3000cc)', category: 'seco', quantity: 2 },
    { code: "3055", name: 'Vinagre de manzana (x 280ml)', category: 'seco', quantity: 2 },
    { code: "3056", name: 'Vinagreta de balsamico', category: 'refrigerado', quantity: 10 },
    { code: "3057", name: 'Vinagreta thai', category: 'refrigerado', quantity: 9 },
    { code: "3058", name: 'Vino blanco 4 cumbres (x 1 litro)', category: 'seco', quantity: 4 },
    { code: "3059", name: 'Vino lambrusco rosso', category: 'seco', quantity: 4 },
    { code: "3060", name: 'Vino lambrusco tinto', category: 'seco', quantity: 4 },
    { code: "3061", name: 'Vino segu olle rose (x 1 litro)', category: 'seco', quantity:  4},
    { code: "3062", name: 'Vino segu olle tinto (x 1 litro)', category: 'seco', quantity: 4 },
    { code: "3063", name: 'Whisky old parr (x botella)', category: 'seco', quantity: 8 },
    { code: "3064", name: 'whisky castle house (x botella', category: 'seco', quantity: 8 },
    { code: "3065", name: 'Zanahoria', category: 'refrigerado', quantity: 9 },
    { code: "3066", name: 'Mini croquetas de pollo congeladas', category: 'congelado', quantity: 20 },
    { code: "3067", name: 'Toronja deshidratada (x 250gr)', category: 'seco', quantity: 5 },
    { code: "3068", name: 'Juniper cocktail paloma mescal (x280ml)', category: 'seco', quantity: 45 },
    { code: "3069", name: 'Juniper cocktail gin tonic (x 280gr)', category: 'seco', quantity: 45 },
    { code: "3070", name: 'Juniper cocktail moscow mule (x 280ml)', category: 'seco', quantity: 40 },
    { code: "3071", name: 'Mermelada de tocineta', category: 'refrigerado', quantity: 6 },
    { code: "3072", name: 'Yogurt griego de vainilla (x 1000gr)', category: 'refrigerado', quantity: 8 },
    { code: "3073", name: 'Almojabana', category: 'seco', quantity: 36 }
];

//let currentUser = null; 


/*function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function showInventory() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    inventory.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `Código: ${product.code}  Nombre: ${product.name}  Categoria:${product.category}  Cantidad: ${product.quantity}`;
        productList.appendChild(li);
    });
}

function showAddProductForm() {
}

function hideAddProductForm() {
    showMessage('');
}*/

function showInventory() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    inventory.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `Código: ${product.code}  Nombre: ${product.name}  Categoria:${product.category}  Cantidad: ${product.quantity}`;
        productList.appendChild(li);
    });
}

function showAddProductForm() {
}

function hideAddProductForm() {
    showMessage('');
}

function showMessage(message, targetId) {
    document.getElementById(targetId).textContent = message;
}

function showProductInfo(product, targetId) {
    const targetDiv = document.getElementById(targetId);
    targetDiv.innerHTML = `Código: ${product.code}  Nombre: ${product.name}  Cantidad: ${product.quantity}`;
}

function addProduct() {
    const codeProduct = document.getElementById('product-code').value;
    const productName = document.getElementById('product-name').value;
    const productCategory = document.getElementById('product-category').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value, 10);

    if (productName && productCategory && !isNaN(productQuantity) && productQuantity > 0 && codeProduct.length == 5) {
        inventory.push({code: codeProduct, name: productName, category: productCategory, quantity: productQuantity });
        showInventory();
        hideAddProductForm();
        showMessage('Producto agregado al inventario.');
    } else {
        showMessage('Por favor, ingrese un nombre de producto válido y una cantidad válida.');
    }
}
/*Actualizar*/
function actualizar() {
    const codeProduct = document.getElementById('product-code').value;
    const productName = document.getElementById('product-name').value;
    const productCategory = document.getElementById('product-category').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value, 10);

    if (productName && productCategory && !isNaN(productQuantity) && productQuantity > 0 && codeProduct.length == 5) {
        inventory.push({code: codeProduct, name: productName, category: productCategory, quantity: productQuantity });
        showInventory();
        hideactualizarForm();
        showMessage('Producto actualizado al inventario.');
    } else {
        showMessage('Por favor, ingrese un nombre de producto válido y una cantidad válida.');
    }
}
/*buscar*/
function buscarProducto() {
    const codigoNombreBuscado = document.getElementById('buscarCodigoNombre').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultadoBusqueda');
    resultadoDiv.innerHTML = '';

    const matchingProducts = inventory.filter(
        (p) => p.code.toLowerCase().includes(codigoNombreBuscado) || p.name.toLowerCase().includes(codigoNombreBuscado)
    );

    if (matchingProducts.length > 0) {
        matchingProducts.forEach((product) => {
            const li = document.createElement('li');
            li.textContent = `Código: ${product.code}  Nombre: ${product.name}  Cantidad: ${product.quantity}`;
            resultadoDiv.appendChild(li);
        });
    } else {
        showMessage('Producto no encontrado', 'resultadoBusqueda');
    }
}
/*buscar eliminar*/
function buscarYEliminarProducto() {
    const codigoBuscado = document.getElementById('codigoEliminar').value;
    const resultadoDiv = document.getElementById('resultadoEliminar');
    resultadoDiv.innerHTML = '';

    const product = inventory.find((p) => p.code === codigoBuscado);

    if (product) {
        showProductInfo(product, 'resultadoEliminar');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => deleteProduct(product.code, 'resultadoEliminar'));

        resultadoDiv.appendChild(deleteButton);
    } else {
        showMessage('Producto no encontrado', 'resultadoEliminar');
    }
}

function deleteProduct(code, targetId) {
    const index = inventory.findIndex((p) => p.code === code);

    if (index !== -1) {
        const product = inventory[index];

        const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar el producto?\nCódigo: ${product.code}\nNombre: ${product.name}\nCantidad: ${product.quantity}`);

        if (confirmDelete) {
            inventory.splice(index, 1);
            showInventory();
            showMessage('Producto eliminado del inventario.', targetId);
        }
    }
}

//Exportar a pdf
let inventarioExportar = [];
inventory.forEach((element, index, array)=>{
    inventarioExportar.push([element.code, element.name, element.category, element.quantity]);
});

button.addEventListener('click', (e)=>{
    let doc = new jsPDF();
    
    let styles = {
        fillColor: [251, 221, 213],  
        textColor: [0, 0, 0],  
    };

    let cellStyles = {
        fillColor: [166, 20, 20],  
        textColor: [95, 140, 63],  
    };
    
    doc.autoTable({
    head:[['Código','Nombre','Categoría','Cantidad']],
    body: inventarioExportar,    
    theme: 'grid',  
    styles: styles,
    columnStyles: { 0: { cellStyles } },  // Aplicar estilos a una columna específica        
    })
    doc.save("Inventario_Restaurante.pdf")
});

showInventory();

