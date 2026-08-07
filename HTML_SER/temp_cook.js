
// SS13 厨师手册 - 配方数据
// 数据来源: TianGuan13 服务器配方 (github.com/89623/TianGuan13)

var TAGS = {
  veg: [
    {id:'tomato',n:'番茄',e:'🍅'},
    {id:'carrot',n:'胡萝卜',e:'🥕'},
    {id:'potato',n:'土豆',e:'🥔'},
    {id:'onion',n:'洋葱',e:'🧅'},
    {id:'eggplant',n:'茄子',e:'🍆'},
    {id:'corn',n:'玉米',e:'🌽'},
    {id:'cabbage',n:'卷心菜',e:'🥬'},
    {id:'mushroom',n:'蘑菇',e:'🍄'},
    {id:'chili',n:'辣椒',e:'🌶️'},
    {id:'ghost_chili',n:'幽灵辣椒',e:'👻'},
    {id:'garlic',n:'大蒜',e:'🧄'},
    {id:'peas',n:'豌豆',e:'🫛'},
    {id:'bell_pepper',n:'甜椒',e:'🫑'},
    {id:'cucumber',n:'黄瓜',e:'🥒'},
    {id:'pumpkin',n:'南瓜',e:'🎃'},
    {id:'herbs',n:'香草',e:'🌿'},
    {id:'pineapple',n:'菠萝',e:'🍍'},
    {id:'soybeans',n:'大豆',e:'🫛'},
    {id:'nettle',n:'荨麻',e:'🌿'},
    {id:'white_beet',n:'白甜菜',e:'🥣'},
  
    {id:'sweet_potato',n:'红薯',e:'🍠'},
    {id:'pickle',n:'酸黄瓜',e:'🥒'},
    {id:'sauerkraut',n:'酸菜',e:'🥬'},
    {id:'kimchi',n:'泡菜',e:'🥬'},
    {id:'garlic_kimchi',n:'蒜泡菜',e:'🧄'},
    {id:'plump_helmet',n:'圆伞菌',e:'🍄'},
    {id:'mushroom_hallucinogen',n:'致幻蘑菇',e:'🍄'},
    {id:'trumpet',n:'喇叭菌',e:'🍄'},
    {id:'steeped_mushrooms',n:'浸泡蘑菇',e:'🍄'},
    {id:'oven_corn',n:'烤玉米',e:'🌽'},
    {id:'cornchips',n:'玉米片',e:'🌽'},
    {id:'corn_starch',n:'玉米淀粉',e:'🌽'},
    {id:'canned_tomatoes',n:'罐头番茄',e:'🥫'},
    {id:'poppy_seeds',n:'罂粟籽',e:'🌾'},
    {id:'pine_nuts',n:'松子',e:'🌰'},
    {id:'roast_parsnip',n:'烤欧防风',e:'🥕'},
    {id:'seaweed',n:'海带',e:'🌿'},
    {id:'baked_potato',n:'烤土豆',e:'🥔'},
    {id:'beans',n:'豆子',e:'🫘'},
    {id:'tempeh_starter',n:'天贝菌种',e:'🟤'},
    {id:'soy_dope',n:'豆渣',e:'🫛'},
    {id:'desert_snails',n:'沙漠蜗牛',e:'🐌'},
    {id:'popcorn',n:'爆米花',e:'🍿'},
    {id:'rice_porridge',n:'米粥',e:'🍚'},
    {id:'root_flatbread',n:'根茎面饼',e:'🫓'},
    {id:'rootroll',n:'根茎卷',e:'🥖'}
  ],
  fruit: [
    {id:'apple',n:'苹果',e:'🍎'},
    {id:'banana',n:'香蕉',e:'🍌'},
    {id:'lemon',n:'柠檬',e:'🍋'},
    {id:'lime',n:'青柠',e:'🟢'},
    {id:'orange',n:'橙子',e:'🍊'},
    {id:'cherry',n:'樱桃',e:'🍒'},
    {id:'berry',n:'浆果',e:'🫐'},
    {id:'watermelon',n:'西瓜',e:'🍉'},
    {id:'blumpkin',n:'布拉姆金',e:'🟢'},
    {id:'bungo',n:'邦戈果',e:'🥭'},
  
    {id:'plum',n:'李子',e:'🔴'},
    {id:'no_raisin',n:'葡萄干',e:'🍇'}
  ],
  meat: [
    {id:'meat',n:'肉块',e:'🥩'},
    {id:'cutlet',n:'肉片',e:'🥓'},
    {id:'meatball',n:'肉丸',e:'🧆'},
    {id:'patty',n:'肉饼',e:'🥩'},
    {id:'chicken',n:'鸡肉',e:'🍗'},
    {id:'fish',n:'鱼排',e:'🐟'},
    {id:'bacon',n:'培根',e:'🥓'},
    {id:'sausage',n:'香肠',e:'🌭'},
    {id:'xenomeat',n:'异形肉',e:'👽'},
    {id:'spider_meat',n:'蜘蛛肉',e:'🕷️'},
    {id:'crab',n:'蟹肉',e:'🦀'},
    {id:'raw_cutlet',n:'生肉片',e:'🥓'},
    {id:'raw_meatball',n:'生肉丸',e:'🧆'},
    {id:'raw_patty',n:'生肉饼',e:'🥩'},
  
    {id:'appendix',n:'阑尾',e:'🥩'},
    {id:'brain',n:'大脑',e:'🧠'},
    {id:'heart',n:'心脏',e:'🫀'},
    {id:'liver',n:'肝脏',e:'🍖'},
    {id:'liver_pate',n:'肝酱',e:'🍖'},
    {id:'lungs',n:'肺',e:'🥩'},
    {id:'stomach',n:'胃',e:'🥩'},
    {id:'dead_mouse',n:'死老鼠',e:'🐭'},
    {id:'larvae',n:'幼虫',e:'🐛'},
    {id:'spiderling',n:'蜘蛛卵',e:'🕷️'},
    {id:'octopus',n:'章鱼',e:'🐙'},
    {id:'moonfish',n:'月鱼',e:'🐟'},
    {id:'moonfish_eggs',n:'月鱼籽',e:'🟡'},
    {id:'armorfish',n:'甲鱼',e:'🐟'},
    {id:'raw_bacon',n:'生培根',e:'🥓'},
    {id:'raw_sausage',n:'生香肠',e:'🌭'},
    {id:'bbq_ribs',n:'烧烤排骨',e:'🍖'},
    {id:'headcheese',n:'头肉冻',e:'🥩'},
    {id:'katsu_fillet',n:'炸鱼排',e:'🐟'},
    {id:'grilled_chap',n:'烤肠',e:'🌭'},
    {id:'tiziran_sausage',n:'蜥蜴香肠',e:'🌭'},
    {id:'salglu',n:'萨尔格鲁虫',e:'🐛'},
    {id:'eyes',n:'眼球',e:'👁️'},
    {id:'ectoplasm',n:'灵质',e:'👻'},
    {id:'ants',n:'蚂蚁',e:'🐜'}
  ],
  basic: [
    {id:'egg',n:'鸡蛋',e:'🥚'},
    {id:'cheese',n:'奶酪',e:'🧀'},
    {id:'milk',n:'牛奶',e:'🥛'},
    {id:'flour',n:'面粉',e:'🌾'},
    {id:'dough',n:'面团',e:'🍞'},
    {id:'sugar',n:'糖',e:'🍬'},
    {id:'salt',n:'盐',e:'🧂'},
    {id:'pepper',n:'胡椒',e:'▪️'},
    {id:'soy_sauce',n:'酱油',e:'🫗'},
    {id:'tofu',n:'豆腐',e:'🧈'},
    {id:'bread',n:'面包片',e:'🍞'},
    {id:'rice',n:'米饭',e:'🍚'},
    {id:'butter',n:'黄油',e:'🧈'},
    {id:'chocolate',n:'巧克力',e:'🍫'},
    {id:'ketchup',n:'番茄酱',e:'🟥'},
    {id:'cream',n:'奶油',e:'🍦'},
    {id:'bun',n:'汉堡胚',e:'🍔'},
    {id:'tortilla',n:'墨西哥饼皮',e:'🫓'},
    {id:'pastry_base',n:'酥皮基底',e:'🧁'},
    {id:'bowl',n:'碗',e:'🥣'},
    {id:'spaghetti',n:'意面',e:'🍝'},
    {id:'ice',n:'冰',e:'🧊'},
    {id:'icecream',n:'冰淇淋',e:'🍨'},
  
    {id:'water',n:'水',e:'💧'},
    {id:'oil',n:'油',e:'🛢️'},
    {id:'olive_oil',n:'橄榄油',e:'🫒'},
    {id:'vinegar',n:'醋',e:'🍶'},
    {id:'honey',n:'蜂蜜',e:'🍯'},
    {id:'vanilla',n:'香草精',e:'🌿'},
    {id:'caramel',n:'焦糖',e:'🟤'},
    {id:'peanut',n:'花生',e:'🥜'},
    {id:'peanut_butter',n:'花生酱',e:'🥜'},
    {id:'coco',n:'可可粉',e:'🍫'},
    {id:'coffee',n:'咖啡',e:'☕'},
    {id:'blood',n:'血液',e:'🩸'},
    {id:'ash',n:'灰烬',e:'⚫'},
    {id:'oats',n:'燕麦',e:'🌾'},
    {id:'wheat',n:'小麦',e:'🌾'},
    {id:'korta_flour',n:'科塔粉',e:'🌾'},
    {id:'korta_milk',n:'科塔奶',e:'🥛'},
    {id:'korta_nectar',n:'科塔花蜜',e:'🍯'},
    {id:'soy_milk',n:'豆奶',e:'🥛'},
    {id:'berry_juice',n:'浆果汁',e:'🫐'},
    {id:'orange_juice',n:'橙汁',e:'🧃'},
    {id:'holy_water',n:'圣水',e:'💧'},
    {id:'nutriment',n:'营养素',e:'🧪'},
    {id:'enzyme',n:'酶',e:'🧪'},
    {id:'capsaicin',n:'辣椒素',e:'🌶️'},
    {id:'capsaicin_oil',n:'辣椒油',e:'🌶️'},
    {id:'frost_oil',n:'冰霜油',e:'❄️'},
    {id:'sulphuric_acid',n:'硫酸',e:'🧪'},
    {id:'acid',n:'酸液',e:'🧪'},
    {id:'slime_jelly',n:'史莱姆果冻',e:'🟢'},
    {id:'slime_extract',n:'史莱姆提取物',e:'🟢'},
    {id:'bluecherry_jelly',n:'蓝樱桃果冻',e:'🔵'},
    {id:'cherry_jelly',n:'樱桃果冻',e:'🍒'},
    {id:'spacemountainwind',n:'太空山风',e:'🥤'},
    {id:'rum',n:'朗姆酒',e:'🍹'},
    {id:'vodka',n:'伏特加',e:'🍸'},
    {id:'wine',n:'葡萄酒',e:'🍷'},
    {id:'whipped_cream',n:'鲜奶油',e:'🍦'},
    {id:'mayonnaise',n:'蛋黄酱',e:'🥚'},
    {id:'egg_white',n:'蛋白',e:'🥚'},
    {id:'egg_yolk',n:'蛋黄',e:'🥚'},
    {id:'tomato_sauce',n:'番茄酱汁',e:'🟥'},
    {id:'bbq_sauce',n:'烧烤酱',e:'🍖'},
    {id:'gravy',n:'肉汁',e:'🟤'},
    {id:'worcestershire',n:'伍斯特酱',e:'🟤'},
    {id:'curry_powder',n:'咖喱粉',e:'🟤'},
    {id:'teriyaki',n:'照烧酱',e:'🟤'},
    {id:'tzatziki',n:'酸奶黄瓜酱',e:'🥒'},
    {id:'red_bay',n:'红湾调料',e:'🌶️'},
    {id:'bechamel',n:'白酱',e:'🥛'},
    {id:'flat_dough',n:'擀平面团',e:'🫓'},
    {id:'pie_dough',n:'派皮面团',e:'🥧'},
    {id:'cake_batter',n:'蛋糕糊',e:'🧁'},
    {id:'pancake_batter',n:'煎饼糊',e:'🥞'},
    {id:'martian_batter',n:'火星面糊',e:'🫓'},
    {id:'mothic_pizza_dough',n:'蛾族披萨面团',e:'🍕'},
    {id:'pizza_bread',n:'披萨饼底',e:'🍕'},
    {id:'pita_bread',n:'皮塔饼',e:'🫓'},
    {id:'bread_plain',n:'普通面包',e:'🍞'},
    {id:'griddle_toast',n:'铁板吐司',e:'🍞'},
    {id:'hard_taco',n:'硬塔可饼',e:'🌮'},
    {id:'baked_cheese',n:'烤奶酪',e:'🧀'},
    {id:'cheese_curds',n:'奶酪凝块',e:'🧀'},
    {id:'cheese_wheel',n:'奶酪轮',e:'🧀'},
    {id:'curd_cheese',n:'凝乳奶酪',e:'🧀'},
    {id:'firm_cheese',n:'硬奶酪',e:'🧀'},
    {id:'herby_cheese',n:'香草奶酪',e:'🧀'},
    {id:'mozzarella',n:'马苏里拉',e:'🧀'},
    {id:'donut',n:'甜甜圈',e:'🍩'},
    {id:'fries',n:'薯条',e:'🍟'},
    {id:'sundae',n:'圣代',e:'🍨'},
    {id:'sandwich',n:'三明治',e:'🥪'},
    {id:'plain_cake',n:'普通蛋糕',e:'🍰'},
    {id:'plain_pie',n:'普通派',e:'🥧'},
    {id:'grilled_cheese',n:'烤奶酪三明治',e:'🧀'},
    {id:'mothic_salad',n:'蛾族沙拉',e:'🥗'},
    {id:'picoss_skewers',n:'皮科斯烤串',e:'🍢'},
    {id:'popsicle_stick',n:'冰棒棍',e:'🍦'},
    {id:'blue_crayon',n:'蓝色蜡笔',e:'🖍️'},
    {id:'green_crayon',n:'绿色蜡笔',e:'🖍️'},
    {id:'red_crayon',n:'红色蜡笔',e:'🖍️'},
    {id:'candle',n:'蜡烛',e:'🕯️'},
    {id:'circuitboard',n:'电路板',e:'🔲'},
    {id:'cloth',n:'布',e:'🧵'},
    {id:'paper',n:'纸',e:'📄'},
    {id:'dice',n:'骰子',e:'🎲'},
    {id:'clown_mask',n:'小丑面具',e:'🤡'},
    {id:'mime_mask',n:'哑剧面具',e:'🎭'},
    {id:'wizard_hat',n:'巫师帽',e:'🎩'},
    {id:'flare',n:'信号弹',e:'🔦'},
    {id:'rods',n:'金属棒',e:'🪨'},
    {id:'sillycup',n:'搞笑杯',e:'🥤'}
  ],
  tool: [
    {id:'microwave',n:'微波炉',e:'📡'},
    {id:'oven',n:'烤箱',e:'🔥'},
    {id:'griddle',n:'铁板',e:'🍳'},
    {id:'processor',n:'食品加工机',e:'⚙️'},
    {id:'grinder',n:'搅拌机',e:'🥤'},
    {id:'stove',n:'灶台/汤锅',e:'🍲'},
    {id:'knife',n:'刀具',e:'🔪'},
    {id:'rolling',n:'擀面杖',e:'🪵'},
    {id:'crafting',n:'合成菜单',e:'🔨'}
  ]
};

// Recipe format: {n:name, en:englishName, cat:category, tool:toolId,
//   ings:[[tagId, name, emoji, countOr0, unitsIf0], ...], fx:effect, warn:warning}

// 饱和度数据（基于天关十三号仓库营养值系统：nutriment×15 + vitamin×15 + protein×9 + fat×18 + sugar×2）
var SAT_MAP = {
  // 汤类（汤的碗装容量约30u，饱和度较低）
  'Meatball Soup':180,'Vegetable Soup':150,'Nettle Soup':165,'Hot Chili':195,
  'Cold Chili':180,'Clown Chili':195,'Tomato Soup':150,'Blood Soup':150,
  'Eyeball Soup':165,'Miso Soup':195,'Slime Soup':150,'Mystery Soup':165,
  'Chantrelle Soup':165,'Beet Soup':150,'Stew':195,'Indian Curry':195,
  'Oatmeal':150,'Onion Soup':165,'Pea Soup':150,'Bisque':195,
  'Corn Chowder':180,'Chicken Noodle Soup':195,'Wish Soup':150,'Amanita Jelly':180,

  // 汉堡类
  'Plain Burger':99,'Cheese Burger':120,'Big Bite Burger':195,'Super Bite Burger':945,
  'Fish Burger':165,'Clown Burger':192,'Mime Burger':255,'Brain Burger':249,
  'Spell Burger':285,'Xeno Burger':174,'Ghost Burger':303,'Appendix Burger':159,
  'Tofu Burger':150,'Slime Jelly Burger':120,'Cherry Jelly Burger':120,
  'Five Alarm Burger':192,'Rat Burger':80,'Bacon Burger':150,'Crab Burger':174,
  'Red Burger':120,'Blue Burger':120,'Green Burger':120,'Crazy Hamburger':300,
  'Sloppy Moe':210,'Chicken Sandwich Burger':200,'McGuffin':250,'McRib':220,

  // 面包类
  'Meat Bread':708,'Xenomeat Bread':735,'Spidermeat Bread':708,'Sausage Bread':708,
  'Banana Nut Bread':300,'Tofu Bread':690,'Cream Cheese Bread':690,
  'Garlic Bread':240,'Baguette':165,'Butter Biscuit':60,'Slime Toast':45,
  'Jellied Toast':45,'Buttered Toast':30,'Two Bread':90,'Moldy Bread':15,
  'Waffles':150,'Roffle Waffles':165,'Khachapuri':300,

  // 烤串
  'Kebab':250,'Human Kebab':280,'Tofu Kebab':200,'Fiesta Skewer':220,
  'Rat Kebab':100,'Double Rat Kebab':150,'Pineapple Skewer':150,

  // 肉类菜肴
  'BBQ Ribs':300,'Corned Beef':156,'Stewed Soymeat':120,'Raw Sausage':72,
  'Chicken Nugget':50,'Raw Khinkali':100,'Meat Bun':200,'Pig in a Blanket':180,
  'Rice and Pork':207,'Meat Clown':150,'Lasagna':350,'Black Eyed Gumbo':250,
  'Fried Chicken':300,'Beef Stroganoff':280,'Beef Wellington':400,
  'Roast Chicken Dinner':450,'Full English Breakfast':500,
  'Sweet and Sour Meatballs':220,'Egg with Sausage':150,'Eggs Benedict':200,

  // 铁板类
  'Meat Steak':102,'Cutlet':60,'Meatball':50,'Patty':50,'Bacon':63,
  'Sausage':80,'Cooked Chicken':100,'Cooked Crab':80,'Grilled Moonfish':90,

  // 意面
  'Boiled Spaghetti':100,

  // 沙拉/饭类
  'Cabbage Salad':135,'Eggplant Parmigiana':200,'Rice Bowl':100,'Fried Rice':180,
  'Egg Bowl':222,'Egg Wrap':150,'Rice Pudding':200,'Risotto':240,
  'Stuffed Cabbage':200,'Onigiri':150,

  // 海鲜
  'Fish and Chips':108,'Fish Fingers':99,'Sushi':200,'Crab Rangoon':150,

  // 蛋糕
  'Plain Cake':555,'Apple Cake':450,'Birthday Cake':375,'Brain Cake':345,
  'Carrot Cake':450,'Cheese Cake':505,'Chocolate Cake':450,'Lemon Cake':450,
  'Lime Cake':450,'Orange Cake':450,'Slime Cake':300,'Pumpkin Spice Cake':450,
  'Angel Food Cake':300,'Pound Cake':400,'Hardware Cake':200,
  'Strawberry Chocolate Cake':500,'Pavlova with Cream':350,
  'Blackberry and Strawberry Vanilla Cake':500,'Clown Cake':400,
  'Vanilla Cake':450,'English Fruitcake':400,'Plum Cake':400,
  'Wedding Cake':600,'Pineapple Cream Cake':450,

  // 馅饼
  'Plain Pie':135,'Amanita Pie':180,'Apple Pie':240,'Banana Cream Pie':180,
  'Berry Clafoutis':225,'Cherry Pie':240,'Meat Pie':228,'Plump Pie':200,
  'Tofu Pie':279,'Xeno-Pie':306,

  // 糕点
  'Donut':100,'Chaos Donut':150,'Meat Donut':120,'Jelly Donut':120,
  'Slime Jelly Donut':100,'Chocolate Donut':130,'Caramel Donut':130,
  'Donk-pocket':520,'Spicy-pocket':520,'Teriyaki-pocket':520,'Pizza-pocket':520,
  'Honk-Pocket':520,'Berry-pocket':520,'Deluxe Donk-pocket':600,
  'Muffin':150,'Berry Muffin':180,'Booberry Muffin':180,
  'Sugar Cookie':60,'Skull Cookie':60,'Coffin Cookie':60,'Fortune Cookie':30,
  'Poppy Pretzel':120,'Plumphelmet Biscuit':150,'Cracker':30,'Popcorn':50,
  'Chawanmushi':120,'Candied Apple':80,'Chocolate Egg':100,
  'Pancake':150,'Blueberry Pancake':180,'Chocolate Chip Pancake':180,

  // 披萨
  'Margherita Pizza':592,'Meat Pizza':637,'Mushroom Pizza':592,'Vegetable Pizza':450,

  // 三明治
  'Sandwich':150,'Cheese Sandwich':180,'Grilled Cheese Sandwich':200,
  'Hot Dog':120,'BLT':200,'Chicken Sandwich':200,'Jelly Toast':60,'Toasted Sandwich':180,

  // 墨西哥菜
  'Classic Taco':150,'Plain Taco':120,'Burrito':200,'Cheesy Burrito':250,
  'Carne Burrito':280,'Fuego Burrito':250,'Cheesy Nachos':150,'Cuban Nachos':180,
  'Nachos':120,'Classic Chimichanga':250,'Vegetarian Chimichanga':200,
  'Enchiladas':250,'Classic Hard-Shell Taco':150,'Spanish Rice':150,'Refried Beans':120,

  // 冷冻
  'Ice Cream Sandwich':50,'Strawberry Ice Cream Sandwich':60,'Space Freezy':80,
  'Sundae':80,'Honkdae':80,'Cornuto':100,'Orange Popsicle':30,'Berry Popsicle':30,
  'Jumbo Icecream':100,'Meatsicle':60,'Flavorless Snowcone':10,

  // 糖果
  'Spider Lollipop':20,'Choco Coin':30,'Fudge Dice':40,'Choco Orange':40,
  'Ant Candy':20,'Pacoca':50,'Caramel Popcorn':80,'Salty Popcorn':60,
  'Caramel Truffle':60,'Chocolate Truffle':60,'Peanut Truffle':70,
  'Peanut Butter Cup':80,'Candied Pineapple':40,

  // 配菜
  'Cheesy Fries':150,'Poutine':200,'Beans':120,'Honey Nut Bar':100,
  'Mozzarella Sticks':150,'Pierogi':200,'Cheese Pierogi':250,'Meat Pierogi':280,
  'Granola Bar':80,'Mashed Potatoes':150,'Spring Roll':120,
  'Buttered Baked Potato':150,'Loaded Baked Potato':200,'Sauteed Eggplant':100,
  'Stuffed Eggplant':200,'Spacy Liberty Duff':165,'Grilled Beef Gyro':250,
  'Vegetarian Gyro':200,'Moussaka':300,'Falafel':150,

  // 蜥蜴族
  'Raw Tiziran Blood Sausage':150,'Raw Headcheese':150,'Crispy Shredded Lung Stirfry':200,
  'Tsatsikh':250,'Liver Pate':150,'Moonfish Caviar Paste':100,'Desert Snail Cocleas':150,
  'Fried Blood Sausage':200,'Loaded Poms-Franzisks':250,'Eyeball-and-Brain Pate':200,
  'Picoss Skewers':250,'Nectar Larvae':150,'Mushroomy Stirfry':180,
  'Moonfish Demiglace':200,'Zagosk Surf n Turf Smorgasbord':400,
  'Rustic Flatbread':200,'Italic Flatbread':200,'Imperial Flatbread':250,
  'Meatlovers Flatbread':300,'BBQ Fish Flatbread':250,
  'Mushroom and Tomato Flatbread':200,'Black Scrambled Eggs':150,'Patzikula':200,
  'Sauerkraut':80,'Honey Sweetroll':200,'Candied Mushrooms':150,

  // 火星菜
  'Kimchi':80,'Inferno Kimchi':80,'Garlic Kimchi':100,'Sambal':50,
  'Katsu Fillet':150,'Hurricane Fried Rice':300,'Hua Mulan Congee':250,
  'Egg Fried Rice':180,'Bibimbap':250,'Takoyaki':200,'Russian Takoyaki':200,
  'Tacoyaki':220,'Okonomiyaki':200,'Big Blue Burger':350,'Chappy Patty':300,
  'King Katsu Sandwich':350,'Marte Cubano Sandwich':250,'Little Shiro Sandwich':300,
  'Croque-Martienne Sandwich':300,'Izakaya Fries':150,'Martian Fried Noodles':250,
  'Simple Fried Noodles':100,'Setagaya Curry':400,

  // 蛾族
  'Herby Cheese':150,'Mothic Salad':100,'Squeaking Stir Fry':200,
  'Sweet Chili Cabbage Wrap':150,'Baked Cheese Platter':200,'Buttered Baked Corn':150,
  'Fiesta Corn Skillet':200,'Caprese Salad':180,'Ratatouille':150,
  'Stuffed Peppers':200,'Mothic Margherita Pizza':400,'Mothic Firecracker Pizza':400,
  'Mothic Five Cheese Pizza':500,'Cheesecake Balls':200,'Mothmallows':100,'Moffin':150,

  // 基础原料（低营养值）
  'Flour':30,'Sugar':10,'Soy Milk':15,'Soy Sauce':5,'Ketchup':10,
  'Cheese Wheel':150,'Chocolate Bar':30,'Tofu':18,'Butter':50,'Caramel':10,
  'Dough':30,'Cake Batter':50,'Vegan Cake Batter':40,'Pancake Batter':50,
  'Gravy':30,'Bechamel Sauce':40,'Tomato Sauce':30,'Pesto':60,'BBQ Sauce':20,
  'Raw Meatball':50,'Raw Cutlet':40,'Raw Bacon':72,'Raw Patty':50,'Fries':50,
  'Spaghetti':30,'Tortilla':40,'Cornchips':40,'Raw Pastry Base':30,'Dough Slice':10,
  'Flat Dough':30,'Pie Dough':30,'Bread Slice':30,'Cake Slice':75,'Cheese Wedge':30,
  'Butter Slice':20,'Onion Slice':5,'Pineapple Slice':10,'Potato Wedges':20,
  'Surimi':40,'Tempeh':72,'Boiled Rice':50,'Boiled Egg':30,'Fried Egg':30,
  'Omelette du Fromage':80,'Raw Pita Bread':40,'Tzatziki Sauce':30,
  'Mozzarella':60,'Curd Cheese':50
};

// 类别默认饱和度（用于未在SAT_MAP中的配方）
var CAT_DEFAULT_SAT = {
  soup:165,burger:150,bread:300,meat:200,kebab:200,pasta:150,
  salad:180,seafood:150,cake:450,pie:240,pastry:100,pizza:520,
  sandwich:180,mexican:200,frozen:60,candy:50,side:150,
  ingredient:40,lizard:200,martian:200,moth:180
};

// 获取配方饱和度
function getSat(r) {
  if (SAT_MAP[r.en] !== undefined) return SAT_MAP[r.en];
  return CAT_DEFAULT_SAT[r.cat] || 100;
}

// 饱和度等级
function satLevel(val) {
  if (val >= 300) return 'high';
  if (val >= 100) return 'med';
  return 'low';
}

var RECIPES = [

// ==================== 汤类 & 炖菜 (灶台/汤锅) ====================
{n:'肉丸汤',en:'Meatball Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['meatball','肉丸','🧆',1],['carrot','胡萝卜','🥕',1],['potato','土豆','🥔',1]],
  fx:'含营养素、水分'},

{n:'蔬菜汤',en:'Vegetable Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['carrot','胡萝卜','🥕',1],['corn','玉米','🌽',1],['eggplant','茄子','🍆',1],['potato','土豆','🥔',1]],
  fx:'真正的素食餐'},

{n:'荨麻汤',en:'Nettle Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['nettle','荨麻','🌿',1],['egg','鸡蛋','🥚',1],['potato','土豆','🥔',1]],
  fx:'含全效治疗剂(Omnizine)，5+营养素，8+维生素'},

{n:'热辣辣椒汤',en:'Hot Chili',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['meat','肉块','🥩',1],['chili','辣椒','🌶️',1],['tomato','番茄','🍅',1]],
  fx:'五级火辣的德州辣椒！'},

{n:'冰镇辣汤',en:'Cold Chili',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['meat','肉块','🥩',1],['ice','冰','🧊',1],['tomato','番茄','🍅',1],['ghost_chili','幽灵辣椒','👻',1]],
  fx:'又冷又辣的汤'},

{n:'小丑辣椒汤',en:'Clown Chili',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['meat','肉块','🥩',1],['chili','辣椒','🌶️',1],['tomato','番茄','🍅',1],['banana','香蕉','🍌',1]],
  fx:'Honk! 辣汤'},

{n:'番茄汤',en:'Tomato Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['tomato','番茄','🍅',2]],
  fx:'喝起来像番茄吸血鬼'},

{n:'血番茄汤',en:'Blood Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['tomato','血番茄','🍅',2]],
  fx:'闻起来像铜的味道'},

{n:'眼球汤',en:'Eyeball Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['tomato','番茄','🍅',1],['egg','眼球','👁️',1]],
  fx:'令人不安的异形菜肴'},

{n:'味噌汤',en:'Miso Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['soybeans','大豆','🫛',2],['tofu','豆腐','🧈',2]],
  fx:'全宇宙最好喝的汤！'},

{n:'史莱姆汤',en:'Slime Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['slime_jelly','史莱姆果冻','🟢',0,5]],
  fx:'如果没有水可以用眼泪替代'},

{n:'小丑的眼泪',en:"Clown's Tears",cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['banana','香蕉','🍌',1],['clown_mask','小丑面具','🤡',1]],
  fx:'一点都不好笑'},

{n:'神秘汤',en:'Mystery Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['tofu','豆腐','🧈',1],['egg','鸡蛋','🥚',1],['cheese','奶酪','🧀',1]],
  fx:'神秘之处在于为什么有人要喝它'},

{n:'猴子的喜悦',en:"Monkey's Delight",cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['flour','面粉','🌾',0,5],['banana','香蕉','🍌',1],['salt','盐','🧂',1],['pepper','胡椒','▪️',1]],
  fx:'香蕉味的猴肉汤和饺子'},

{n:'蘑菇汤',en:'Chantrelle Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,5],['milk','牛奶','🥛',0,5],['mushroom','鸡油菌','🍄',1]],
  fx:'美味的蘑菇汤'},

{n:'甜菜汤',en:'Beet Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['white_beet','白甜菜','🥣',1],['cabbage','卷心菜','🥬',1]],
  fx:'含营养素、水分、维生素'},

{n:'炖菜',en:'Stew',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['tomato','番茄','🍅',1],['meat','肉块','🥩',1],['potato','土豆','🥔',1],['carrot','胡萝卜','🥕',1],['eggplant','茄子','🍆',1],['mushroom','蘑菇','🍄',1]],
  fx:'温暖的炖菜，健康有营养'},

{n:'印度咖喱',en:'Indian Curry',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['potato','土豆','🥔',1],['apple','苹果','🍎',1],['rice','米饭','🍚',1]],
  fx:'含营养素、水分'},

{n:'燕麦粥',en:'Oatmeal',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['milk','牛奶','🥛',0,10],['oats','燕麦','🌾',0,5]],
  fx:'温暖养胃的早餐'},

{n:'洋葱汤',en:'Onion Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['onion','洋葱','🧅',1],['cheese','奶酪','🧀',1]],
  fx:'法式洋葱汤'},

{n:'豌豆汤',en:'Pea Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['peas','豌豆','🫛',1],['milk','牛奶','🥛',0,10]],
  fx:'绿豌豆汤'},

{n:'龙虾浓汤',en:'Bisque',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['crab','蟹肉','🦀',1],['cream','奶油','🍦',0,5]],
  fx:'浓郁的海鲜浓汤'},

{n:'玉米浓汤',en:'Corn Chowder',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['corn','玉米','🌽',1],['cream','奶油','🍦',0,5],['potato','土豆','🥔',1]],
  fx:'香甜的玉米浓汤'},

{n:'鸡肉面汤',en:'Chicken Noodle Soup',cat:'soup',tool:'stove',
  ings:[['bowl','碗','🥣',1],['chicken','鸡肉','🍗',1],['spaghetti','意面','🍝',1],['carrot','胡萝卜','🥕',1]],
  fx:'治愈心灵的鸡汤面'},

{n:'愿望汤',en:'Wish Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,20]],
  fx:'我希望这是汤'},

{n:'毒鹅膏果冻',en:'Amanita Jelly',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['vodka','伏特加','🫗',0,5],['mushroom','毒鹅膏','🍄',3]],
  fx:'含有鹅膏毒素和蘑菇致幻剂',warn:'⚠️ 有毒'},

// ==================== 汉堡类 ====================
{n:'普通汉堡',en:'Plain Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','肉饼','🥩',1]],
  fx:'经典汉堡'},

{n:'芝士汉堡',en:'Cheese Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','肉饼','🥩',1],['cheese','奶酪','🧀',1]],
  fx:'加了芝士的经典汉堡'},

{n:'大咬汉堡',en:'Big Bite Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','肉饼','🥩',3],['cheese','奶酪','🧀',2]],
  fx:'三倍肉的超级汉堡'},

{n:'超级大咬汉堡',en:'Super Bite Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','肉饼','🥩',5],['cheese','奶酪','🧀',3],['tomato','番茄','🍅',4],['egg','鸡蛋','🥚',1],['bacon','培根','🥓',1],['pickle','酸黄瓜','🥒',1],['salt','盐','🧂',0,5],['pepper','胡椒','▪️',0,5]],
  fx:'两口从饥饿吃到过饱'},

{n:'鱼肉汉堡',en:'Fish Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['fish','鱼排','🐟',1],['cheese','奶酪','🧀',1]],
  fx:'鱼味汉堡'},

{n:'小丑汉堡',en:'Clown Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['clown_mask','小丑面具','🤡',1]],
  fx:'Honk!'},

{n:'哑剧汉堡',en:'Mime Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['mime_mask','哑剧面具','🎭',1]],
  fx:'......'},

{n:'大脑汉堡',en:'Brain Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['brain','大脑','🧠',1]],
  fx:'让你变聪明（大概吧）'},

{n:'魔法汉堡',en:'Spell Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['wizard_hat','巫师帽','🧙',1]],
  fx:'Ei NATH!'},

{n:'异形汉堡',en:'Xeno Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','异形肉饼','👽',1]],
  fx:'Hiss!'},

{n:'幽灵汉堡',en:'Ghost Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['ectoplasm','灵质','👻',1],['salt','盐','🧂',0,2]],
  fx:'Boo!'},

{n:'阑尾汉堡',en:'Appendix Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['appendix','阑尾','🩺',1]],
  fx:'味道你不想知道'},

{n:'豆腐汉堡',en:'Tofu Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['tofu','豆腐','🧈',1]],
  fx:'素食友好'},

{n:'史莱姆果冻汉堡',en:'Slime Jelly Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['slime_jelly','史莱姆果冻','🟢',0,5]],
  fx:'史莱姆味的汉堡',warn:'⚠️ 有毒'},

{n:'樱桃果冻汉堡',en:'Cherry Jelly Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['cherry_jelly','樱桃果冻','🍒',0,5]],
  fx:'甜的汉堡？'},

{n:'五级火辣汉堡',en:'Five Alarm Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','肉饼','🥩',1],['ghost_chili','幽灵辣椒','👻',2]],
  fx:'辣到飞起！'},

{n:'老鼠汉堡',en:'Rat Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['dead_mouse','死老鼠','🐭',1]],
  fx:'...'},

{n:'培根汉堡',en:'Bacon Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['bacon','培根','🥓',3]],
  fx:'三层培根的汉堡'},

{n:'蟹肉汉堡',en:'Crab Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['crab','蟹肉','🦀',2]],
  fx:'蟹肉汉堡'},

{n:'彩色蜡笔汉堡(红)',en:'Red Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','肉饼','🥩',1],['red_crayon','红色蜡笔','🔴',1]],
  fx:'红色的汉堡'},

{n:'彩色蜡笔汉堡(蓝)',en:'Blue Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','肉饼','🥩',1],['blue_crayon','蓝色蜡笔','🔵',1]],
  fx:'蓝色的汉堡'},

{n:'彩色蜡笔汉堡(绿)',en:'Green Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','肉饼','🥩',1],['green_crayon','绿色蜡笔','🟢',1]],
  fx:'绿色的汉堡'},

{n:'疯狂汉堡',en:'Crazy Hamburger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','肉饼','🥩',2],['cheese','奶酪','🧀',2],['chili','辣椒','🌶️',1],['cabbage','卷心菜','🥬',1],['green_crayon','绿色蜡笔','🟢',1],['flare','信号弹','🔆',1],['oil','食用油','🫗',0,15]],
  fx:'疯狂的组合！'},

{n:'邋遢汉堡',en:'Sloppy Moe',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['cutlet','肉片','🥓',2],['onion','洋葱片','🧅',1],['bbq_sauce','BBQ酱','🟤',0,5]],
  fx:'BBQ酱汁满满的汉堡'},

{n:'鸡肉三明治汉堡',en:'Chicken Sandwich Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','鸡肉饼','🍗',1],['mayonnaise','蛋黄酱','🥚',0,5]],
  fx:'鸡肉汉堡配蛋黄酱'},

{n:'麦克古芬',en:'McGuffin',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['egg','煎蛋','🍳',1],['bacon','培根','🥓',2]],
  fx:'含蛋和培根的早餐汉堡'},

{n:'麦克肋排',en:'McRib',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['bbq_ribs','烤肋排','🍖',1],['onion','洋葱片','🧅',1]],
  fx:'BBQ肋排汉堡'},

// ==================== 面包类 ====================
{n:'肉面包',en:'Meat Bread',cat:'bread',tool:'crafting',
  ings:[['bread_plain','原味面包','🍞',1],['cutlet','肉片','🥓',3],['cheese','奶酪','🧀',3]],
  fx:'肉食者的天堂'},

{n:'异形肉面包',en:'Xenomeat Bread',cat:'bread',tool:'crafting',
  ings:[['bread_plain','原味面包','🍞',1],['cutlet','异形肉片','👽',3],['cheese','奶酪','🧀',3]],
  fx:'Hiss bread'},

{n:'蜘蛛肉面包',en:'Spidermeat Bread',cat:'bread',tool:'crafting',
  ings:[['bread_plain','原味面包','🍞',1],['cutlet','蜘蛛肉片','🕷️',3],['cheese','奶酪','🧀',3]],
  fx:'八条腿的面包'},

{n:'香肠面包',en:'Sausage Bread',cat:'bread',tool:'crafting',
  ings:[['bread_plain','原味面包','🍞',1],['sausage','香肠','🌭',2]],
  fx:'香肠面包'},

{n:'香蕉坚果面包',en:'Banana Nut Bread',cat:'bread',tool:'crafting',
  ings:[['bread_plain','原味面包','🍞',1],['milk','牛奶','🥛',0,5],['egg','煮鸡蛋','🥚',3],['banana','香蕉','🍌',1]],
  fx:'香甜的香蕉坚果面包'},

{n:'豆腐面包',en:'Tofu Bread',cat:'bread',tool:'crafting',
  ings:[['bread_plain','原味面包','🍞',1],['tofu','豆腐','🧈',3],['cheese','奶酪','🧀',3]],
  fx:'素食者的选择'},

{n:'奶油芝士面包',en:'Cream Cheese Bread',cat:'bread',tool:'crafting',
  ings:[['bread_plain','原味面包','🍞',1],['milk','牛奶','🥛',0,5],['cheese','奶酪','🧀',2]],
  fx:'浓郁的芝士风味'},

{n:'大蒜面包',en:'Garlic Bread',cat:'bread',tool:'crafting',
  ings:[['bread','面包片','🍞',1],['garlic','大蒜','🧄',1],['butter','黄油片','🧈',1]],
  fx:'蒜香烤面包'},

{n:'法棍',en:'Baguette',cat:'bread',tool:'crafting',
  ings:[['dough','面团片','🍞',2],['salt','盐','🧂',0,1],['pepper','胡椒','▪️',0,1]],
  fx:'经典的法式长棍面包'},

{n:'黄油饼干',en:'Butter Biscuit',cat:'bread',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['butter','黄油片','🧈',1]],
  fx:'黄油饼干'},

{n:'史莱姆吐司',en:'Slime Toast',cat:'bread',tool:'crafting',
  ings:[['bread','面包片','🍞',1],['slime_jelly','史莱姆果冻','🟢',0,5]],
  fx:'史莱姆果冻面包',warn:'⚠️ 有毒'},

{n:'果冻吐司',en:'Jellied Toast',cat:'bread',tool:'crafting',
  ings:[['bread','面包片','🍞',1],['cherry_jelly','樱桃果冻','🍒',0,5]],
  fx:'甜甜的果酱面包'},

{n:'黄油吐司',en:'Buttered Toast',cat:'bread',tool:'crafting',
  ings:[['bread','面包片','🍞',1],['butter','黄油片','🧈',1]],
  fx:'黄油面包片'},

{n:'红酒面包',en:'Two Bread',cat:'bread',tool:'crafting',
  ings:[['bread','面包片','🍞',2],['wine','红酒','🍷',0,5]],
  fx:'红酒浸泡的面包'},

{n:'发霉面包',en:'Moldy Bread',cat:'bread',tool:'crafting',
  ings:[['bread','面包片','🍞',1],['mushroom','毒鹅膏','🍄',1]],
  fx:'发霉的面包',warn:'⚠️ 有毒'},

{n:'华夫饼',en:'Waffles',cat:'bread',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',2]],
  fx:'得3份，松软的华夫饼'},

{n:'迷幻华夫饼',en:'Roffle Waffles',cat:'bread',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',2],['mushroom_hallucinogen','蘑菇致幻剂','🍄',0,5]],
  fx:'吃了会看到奇怪的东西',warn:'⚠️ 致幻'},

{n:'恰克阿普里',en:'Khachapuri',cat:'bread',tool:'crafting',
  ings:[['bread_plain','原味面包','🍞',1],['cheese','奶酪','🧀',1],['egg_yolk','蛋黄','🥚',0,2],['egg_white','蛋白','⚪',0,4]],
  fx:'格鲁吉亚芝士面包'},

// ==================== 肉类菜肴 ====================
{n:'烤肉串',en:'Kebab',cat:'kebab',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['meat','牛排','🥩',2]],
  fx:'经典烤肉串'},

{n:'人类烤肉串',en:'Human Kebab',cat:'kebab',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['meat','人排','🥩',2]],
  fx:'用人肉做的烤肉串'},

{n:'豆腐烤肉串',en:'Tofu Kebab',cat:'kebab',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['tofu','豆腐','🧈',2]],
  fx:'素食烤肉串'},

{n:'派对烤串',en:'Fiesta Skewer',cat:'kebab',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['chili','辣椒','🌶️',1],['cutlet','肉片','🥓',1],['corn','玉米','🌽',1],['tomato','番茄','🍅',1]],
  fx:'派对风味烤串'},

{n:'老鼠烤串',en:'Rat Kebab',cat:'kebab',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['dead_mouse','死老鼠','🐭',1]],
  fx:'老鼠肉串'},

{n:'双份老鼠烤串',en:'Double Rat Kebab',cat:'kebab',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['dead_mouse','死老鼠','🐭',2]],
  fx:'双份老鼠肉串'},

{n:'菠萝烤串',en:'Pineapple Skewer',cat:'kebab',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['pineapple','菠萝片','🍍',2],['cutlet','肉片','🥓',2]],
  fx:'菠萝肉串'},

{n:'BBQ肋排',en:'BBQ Ribs',cat:'meat',tool:'crafting',
  ings:[['rods','金属棒','🪵',2],['meat','牛排','🥩',2],['bbq_sauce','BBQ酱','🟤',0,5]],
  fx:'烟熏BBQ肋排'},

{n:'腌制牛肉',en:'Corned Beef',cat:'meat',tool:'crafting',
  ings:[['meat','牛排','🥩',1],['salt','盐','🧂',0,5],['cabbage','卷心菜','🥬',2]],
  fx:'咸牛肉'},

{n:'炖素肉',en:'Stewed Soymeat',cat:'meat',tool:'crafting',
  ings:[['soy_dope','豆棒','🫘',2],['carrot','胡萝卜','🥕',1],['tomato','番茄','🍅',1]],
  fx:'炖素肉'},

{n:'生香肠',en:'Raw Sausage',cat:'meat',tool:'crafting',
  ings:[['raw_meatball','生肉丸','🧆',1],['raw_cutlet','生肉片','🥓',2]],
  fx:'肉丸+肉片合成生香肠'},

{n:'鸡肉块',en:'Chicken Nugget',cat:'meat',tool:'crafting',
  ings:[['cutlet','肉片','🥓',1]],
  fx:'鸡肉块'},

{n:'生饺子',en:'Raw Khinkali',cat:'meat',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['garlic','大蒜','🧄',1],['meatball','肉丸','🧆',1]],
  fx:'格鲁吉亚饺子'},

{n:'肉包子',en:'Meat Bun',cat:'meat',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['meatball','肉丸','🧆',1],['cabbage','卷心菜','🥬',1],['soy_sauce','酱油','🫗',0,5]],
  fx:'日式肉包子'},

{n:'毯子里的猪',en:'Pig in a Blanket',cat:'meat',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['butter','黄油片','🧈',1],['cutlet','肉片','🥓',1]],
  fx:'毯子包着的小猪'},

{n:'猪肉盖饭',en:'Rice and Pork',cat:'meat',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['cutlet','肉片','🥓',2]],
  fx:'日式猪肉盖饭'},

{n:'肉小丑',en:'Meat Clown',cat:'meat',tool:'crafting',
  ings:[['meat','牛排','🥩',1],['banana','香蕉','🍌',1]],
  fx:'小丑肉菜'},

{n:'千层面',en:'Lasagna',cat:'meat',tool:'crafting',
  ings:[['cutlet','肉片','🥓',2],['tomato','番茄','🍅',1],['cheese','奶酪','🧀',2],['spaghetti','生意面','🍝',1]],
  fx:'意大利千层面'},

{n:'秋葵浓汤',en:'Black Eyed Gumbo',cat:'meat',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['peas','豌豆','🫛',1],['chili','辣椒','🌶️',1],['cutlet','肉片','🥓',1]],
  fx:'秋葵浓汤'},

{n:'炸鸡',en:'Fried Chicken',cat:'meat',tool:'crafting',
  ings:[['chicken','鸡肉','🍗',1],['flour','面粉','🌾',0,5],['corn_starch','玉米淀粉','🌽',0,5]],
  fx:'酥脆炸鸡'},

{n:'牛肉斯特罗加诺夫',en:'Beef Stroganoff',cat:'meat',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['meat','牛排','🥩',1],['flour','面粉','🌾',0,5],['milk','牛奶','🥛',0,5],['mushroom','蘑菇','🍄',2],['onion','洋葱','🧅',1],['tomato','番茄','🍅',1],['salt','盐','🧂',0,2],['pepper','胡椒','▪️',0,2]],
  fx:'俄式牛肉斯特罗加诺夫'},

{n:'惠灵顿牛排',en:'Beef Wellington',cat:'meat',tool:'crafting',
  ings:[['meat','牛排','🥩',1],['mushroom','蘑菇','🍄',1],['garlic','大蒜','🧄',1],['bacon','培根','🥓',1],['flat_dough','扁面团','🫓',1],['cream','奶油','🍦',0,5],['salt','盐','🧂',0,2],['pepper','胡椒','▪️',0,2]],
  fx:'英式惠灵顿牛排'},

{n:'烤鸡大餐',en:'Roast Chicken Dinner',cat:'meat',tool:'crafting',
  ings:[['chicken','鸡排','🍗',2],['roast_parsnip','烤防风草','🥕',1],['onion','洋葱','🧅',1],['peas','豌豆','🫛',1],['potato','土豆','🥔',1],['cabbage','卷心菜','🥬',1],['herbs','香草','🌿',1],['flour','面粉','🌾',0,5],['gravy','肉汁','🟤',0,15],['salt','盐','🧂',0,2],['pepper','胡椒','▪️',0,2]],
  fx:'丰盛的烤鸡大餐'},

{n:'全英早餐',en:'Full English Breakfast',cat:'meat',tool:'crafting',
  ings:[['sausage','香肠','🌭',1],['egg','煎蛋','🍳',2],['bacon','培根','🥓',1],['mushroom','蘑菇','🍄',1],['tomato','番茄','🍅',1],['beans','豆子罐头','🥫',1],['bread','黄油吐司','🍞',1]],
  fx:'全套英式早餐'},

{n:'酸甜肉丸',en:'Sweet and Sour Meatballs',cat:'meat',tool:'crafting',
  ings:[['meatball','肉丸','🧆',3],['pineapple','菠萝片','🍍',1],['bell_pepper','甜椒','🫑',1],['sugar','糖','🍬',0,5]],
  fx:'酸甜可口的肉丸'},

{n:'蛋肠拼盘',en:'Egg with Sausage',cat:'meat',tool:'crafting',
  ings:[['sausage','香肠','🌭',1],['egg','煎蛋','🍳',1]],
  fx:'香肠配煎蛋'},

{n:'班尼迪克蛋',en:'Eggs Benedict',cat:'meat',tool:'crafting',
  ings:[['egg','煎蛋','🍳',1],['meat','牛排','🥩',1],['bread','面包片','🍞',1]],
  fx:'经典班尼迪克蛋'},

// ==================== 铁板煎烤 ====================
{n:'牛排',en:'Meat Steak',cat:'meat',tool:'griddle',
  ings:[['meat','肉块','🥩',1]],
  fx:'铁板煎牛排'},

{n:'煎肉片',en:'Cutlet',cat:'meat',tool:'griddle',
  ings:[['raw_cutlet','生肉片','🥓',1]],
  fx:'铁板煎至金黄'},

{n:'煎肉丸',en:'Meatball',cat:'meat',tool:'griddle',
  ings:[['raw_meatball','生肉丸','🧆',1]],
  fx:'外焦里嫩的肉丸'},

{n:'煎肉饼',en:'Patty',cat:'meat',tool:'griddle',
  ings:[['raw_patty','生肉饼','🥩',1]],
  fx:'煎至两面金黄的肉饼'},

{n:'培根',en:'Bacon',cat:'meat',tool:'griddle',
  ings:[['raw_bacon','生培根','🥓',1]],
  fx:'酥脆的煎培根'},

{n:'香肠',en:'Sausage',cat:'meat',tool:'griddle',
  ings:[['raw_sausage','生香肠','🌭',1]],
  fx:'煎香肠'},

{n:'煎鸡肉',en:'Cooked Chicken',cat:'meat',tool:'griddle',
  ings:[['chicken','生鸡肉','🍗',1]],
  fx:'铁板煎鸡'},

{n:'煎蟹肉',en:'Cooked Crab',cat:'meat',tool:'griddle',
  ings:[['crab','生蟹肉','🦀',1]],
  fx:'铁板煎蟹'},

{n:'烤月鱼',en:'Grilled Moonfish',cat:'meat',tool:'griddle',
  ings:[['moonfish','月鱼排','🌙',1]],
  fx:'月光般美味的烤鱼'},

// ==================== 意大利面 ====================
{n:'水煮意面',en:'Boiled Spaghetti',cat:'pasta',tool:'microwave',
  ings:[['spaghetti','生意面','🍝',1]],
  fx:'微波炉煮熟的基础意面'},

{n:'千层面',en:'Lasagna',cat:'pasta',tool:'crafting',
  ings:[['spaghetti','生意面','🍝',1],['cutlet','肉片','🥓',2],['tomato','番茄','🍅',1],['cheese','奶酪','🧀',2]],
  fx:'经典意大利千层面'},

// ==================== 沙拉和饭类 ====================
{n:'卷心菜沙拉',en:'Cabbage Salad',cat:'salad',tool:'crafting',
  ings:[['cabbage','卷心菜','🥬',1],['onion','洋葱','🧅',1],['tomato','番茄','🍅',1]],
  fx:'清爽的卷心菜沙拉'},

{n:'茄子帕玛森',en:'Eggplant Parmigiana',cat:'salad',tool:'crafting',
  ings:[['eggplant','茄子','🍆',1],['cheese','奶酪','🧀',2]],
  fx:'意式烤茄子'},

{n:'米饭',en:'Rice Bowl',cat:'salad',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','生米','🍚',0,10],['water','水','💧',0,10]],
  fx:'一碗白米饭'},

{n:'炒饭',en:'Fried Rice',cat:'salad',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['egg','鸡蛋','🥚',1],['onion','洋葱','🧅',1]],
  fx:'简单美味的炒饭'},

{n:'蛋碗',en:'Egg Bowl',cat:'salad',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['egg','煮鸡蛋','🥚',1],['carrot','胡萝卜','🥕',1],['corn','玉米','🌽',1]],
  fx:'营养丰富的蛋碗饭'},

{n:'蛋卷',en:'Egg Wrap',cat:'salad',tool:'crafting',
  ings:[['egg','煎蛋','🍳',1],['cabbage','卷心菜','🥬',1],['soy_sauce','酱油','🫗',0,10]],
  fx:'日式蛋卷'},

{n:'米饭布丁',en:'Rice Pudding',cat:'salad',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['milk','牛奶','🥛',0,5],['sugar','糖','🍬',0,5]],
  fx:'甜甜的米饭布丁'},

{n:'意大利烩饭',en:'Risotto',cat:'salad',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['cheese','奶酪','🧀',1],['mushroom','鸡油菌','🍄',1],['wine','红酒','🍷',0,5]],
  fx:'意式蘑菇烩饭'},

{n:'酿卷心菜',en:'Stuffed Cabbage',cat:'salad',tool:'crafting',
  ings:[['cabbage','卷心菜','🥬',1],['cutlet','肉片','🥓',2],['rice','米饭','🍚',1],['tomato','番茄','🍅',1]],
  fx:'酿卷心菜'},

{n:'饭团',en:'Onigiri',cat:'salad',tool:'crafting',
  ings:[['rice','米饭','🍚',1],['seaweed','海苔','🌿',1]],
  fx:'日式饭团'},

// ==================== 海鲜 ====================
{n:'炸鱼薯条',en:'Fish and Chips',cat:'seafood',tool:'crafting',
  ings:[['fish','鱼排','🐟',1],['fries','薯条','🍟',1]],
  fx:'经典的英式炸鱼薯条'},

{n:'鱼柳',en:'Fish Fingers',cat:'seafood',tool:'crafting',
  ings:[['fish','鱼排','🐟',1],['pastry_base','酥皮基底','🥧',3]],
  fx:'裹上面包糠的鱼柳'},

{n:'寿司',en:'Sushi',cat:'seafood',tool:'microwave',
  ings:[['rice','米饭','🍚',1],['tofu','豆腐','🧈',1],['fish','鱼排','🐟',1]],
  fx:'加热米饭、豆腐和鱼排制成。对Skrell有毒。'},

{n:'蟹角',en:'Crab Rangoon',cat:'seafood',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['cream','奶油','🍦',0,5],['cheese','奶酪','🧀',1],['crab','生蟹肉','🦀',1]],
  fx:'奶油芝士蟹角'},

// ==================== 蛋糕类 ====================
{n:'原味蛋糕',en:'Plain Cake',cat:'cake',tool:'oven',
  ings:[['cake_batter','蛋糕面糊','🎂',1]],
  fx:'基础蛋糕，可切片成5片。面糊=15面粉+6蛋黄+12蛋白+5糖'},

{n:'苹果蛋糕',en:'Apple Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['apple','苹果','🍎',2]],
  fx:'香甜的苹果蛋糕'},

{n:'生日蛋糕',en:'Birthday Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['candle','蜡烛','🕯️',1],['sugar','糖','🍬',0,5],['caramel','焦糖','🟤',0,2]],
  fx:'Happy Birthday!'},

{n:'大脑蛋糕',en:'Brain Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['brain','大脑','🧠',1]],
  fx:'用脑子做的蛋糕'},

{n:'胡萝卜蛋糕',en:'Carrot Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['carrot','胡萝卜','🥕',2]],
  fx:'健康的胡萝卜蛋糕'},

{n:'奶酪蛋糕',en:'Cheese Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['cheese','奶酪','🧀',2]],
  fx:'浓郁的芝士蛋糕'},

{n:'巧克力蛋糕',en:'Chocolate Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['chocolate','巧克力棒','🍫',2]],
  fx:'巧克力爱好者的最爱'},

{n:'柠檬蛋糕',en:'Lemon Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['lemon','柠檬','🍋',2]],
  fx:'清爽的柠檬味'},

{n:'青柠蛋糕',en:'Lime Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['lime','青柠','🟢',2]],
  fx:'酸甜的青柠蛋糕'},

{n:'橙子蛋糕',en:'Orange Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['orange','橙子','🍊',2]],
  fx:'阳光般的橙子蛋糕'},

{n:'史莱姆蛋糕',en:'Slime Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['slime_extract','史莱姆提取物','🟢',1]],
  fx:'果冻般的口感'},

{n:'南瓜香料蛋糕',en:'Pumpkin Spice Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['pumpkin','南瓜','🎃',2]],
  fx:'秋日风味的南瓜蛋糕'},

{n:'天使蛋糕',en:'Angel Food Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['holy_water','圣水','💧',0,15]],
  fx:'神圣的天使蛋糕'},

{n:'磅蛋糕',en:'Pound Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',4]],
  fx:'四个蛋糕合体！'},

{n:'硬件蛋糕',en:'Hardware Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['circuitboard','电路板','🔌',2],['acid','硫酸','🧪',0,5]],
  fx:'硬件做的蛋糕',warn:'⚠️ 有毒'},

{n:'草莓巧克力蛋糕',en:'Strawberry Chocolate Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['chocolate','巧克力棒','🍫',2],['berry','浆果','🫐',5]],
  fx:'草莓巧克力双层蛋糕'},

{n:'帕芙洛娃',en:'Pavlova with Cream',cat:'cake',tool:'crafting',
  ings:[['egg_white','蛋白','⚪',0,12],['sugar','糖','🍬',0,15],['whipped_cream','鲜奶油','🍦',0,10],['berry','浆果','🫐',5]],
  fx:'蛋白霜甜点'},

{n:'黑莓草莓香草蛋糕',en:'Blackberry and Strawberry Vanilla Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['berry','浆果','🫐',5]],
  fx:'浆果香草蛋糕'},

{n:'小丑蛋糕',en:'Clown Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['sundae','圣代','🍨',2],['banana','香蕉','🍌',5]],
  fx:'Honk! 小丑蛋糕'},

{n:'香草蛋糕',en:'Vanilla Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['vanilla','香草荚','🌿',2]],
  fx:'香草风味蛋糕'},

{n:'太空人之蛋糕',en:"Spaceman's Cake",cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['trumpet','喇叭菇','🎺',2],['cream','奶油','🍦',0,5],['berry_juice','浆果汁','🫐',0,5]],
  fx:'喇叭菇蛋糕'},

{n:'英式水果蛋糕',en:'English Fruitcake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['no_raisin','不葡萄干','🚫',1],['cherry','樱桃','🍒',1],['rum','朗姆酒','🥃',0,5]],
  fx:'英式水果蛋糕'},

{n:'李子蛋糕',en:'Plum Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['plum','李子','🟣',2]],
  fx:'李子味蛋糕'},

{n:'婚礼蛋糕',en:'Wedding Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',4],['sugar','糖','🍬',0,120]],
  fx:'巨型婚礼蛋糕'},

{n:'菠萝奶油蛋糕',en:'Pineapple Cream Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['pineapple','菠萝','🍍',1],['cream','奶油','🍦',0,20]],
  fx:'菠萝奶油蛋糕'},

// ==================== 馅饼 ====================
{n:'原味派',en:'Plain Pie',cat:'pie',tool:'oven',
  ings:[['pie_dough','派面团','🥧',1]],
  fx:'基础派皮。用擀面杖擀蛋糕面糊制成'},

{n:'毒鹅膏派',en:'Amanita Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['mushroom','毒鹅膏','🍄',1]],
  fx:'毒蘑菇派',warn:'⚠️ 有毒'},

{n:'苹果派',en:'Apple Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['apple','苹果','🍎',1]],
  fx:'经典的苹果派'},

{n:'香蕉奶油派',en:'Banana Cream Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['banana','香蕉','🍌',1],['cream','奶油','🍦',1]],
  fx:'香蕉与奶油的完美结合'},

{n:'浆果克拉芙缇',en:'Berry Clafoutis',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['berry','浆果','🫐',1],['sugar','糖','🍬',1]],
  fx:'法式浆果甜点'},

{n:'樱桃派',en:'Cherry Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['cherry','樱桃','🍒',1],['sugar','糖','🍬',1]],
  fx:'甜甜的樱桃派'},

{n:'肉派',en:'Meat Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['meat','肉块','🥩',1]],
  fx:'咸香肉派'},

{n:'蘑菇派',en:'Plump Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['plump_helmet','胖头菇','🍄',1]],
  fx:'蘑菇馅的派'},

{n:'豆腐派',en:'Tofu Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['tofu','豆腐','🧈',1]],
  fx:'素食派的代表'},

{n:'异形肉派',en:'Xeno-Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['xenomeat','异形肉','👽',1]],
  fx:'Hiss pie'},

// ==================== 糕点和甜品 ====================
{n:'甜甜圈',en:'Donut',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['sugar','糖','🍬',0,1]],
  fx:'经典甜甜圈'},

{n:'混沌甜甜圈',en:'Chaos Donut',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['frost_oil','冰霜油','❄️',0,5],['capsaicin_oil','辣椒素油','🔥',0,5]],
  fx:'每次味道都不同',warn:'⚠️ 效果随机'},

{n:'肉甜甜圈',en:'Meat Donut',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['raw_cutlet','生肉片','🥓',1]],
  fx:'肉味甜甜圈'},

{n:'果冻甜甜圈',en:'Jelly Donut',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['berry_juice','浆果汁','🫐',0,5]],
  fx:'带果冻夹心的甜甜圈'},

{n:'史莱姆果冻甜甜圈',en:'Slime Jelly Donut',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['slime_jelly','史莱姆果冻','🟢',0,5]],
  fx:'史莱姆果冻甜甜圈',warn:'⚠️ 有毒'},

{n:'巧克力甜甜圈',en:'Chocolate Donut',cat:'pastry',tool:'crafting',
  ings:[['donut','甜甜圈','🍩',1],['chocolate','巧克力棒','🍫',1]],
  fx:'巧克力甜甜圈'},

{n:'焦糖甜甜圈',en:'Caramel Donut',cat:'pastry',tool:'crafting',
  ings:[['donut','甜甜圈','🍩',1],['caramel','焦糖','🟤',0,3]],
  fx:'焦糖甜甜圈'},

{n:'口袋饼',en:'Donk-pocket',cat:'pastry',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['meatball','肉丸','🧆',1]],
  fx:'经典口袋饼'},

{n:'辣味口袋饼',en:'Spicy-pocket',cat:'pastry',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['meatball','肉丸','🧆',1],['chili','辣椒','🌶️',1]],
  fx:'辣到飞起'},

{n:'照烧口袋饼',en:'Teriyaki-pocket',cat:'pastry',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['meatball','肉丸','🧆',1],['soy_sauce','酱油','🫗',0,3]],
  fx:'照烧风味口袋饼'},

{n:'披萨口袋饼',en:'Pizza-pocket',cat:'pastry',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['cheese','奶酪','🧀',1],['tomato','番茄','🍅',1]],
  fx:'披萨味口袋饼'},

{n:'小丑口袋饼',en:'Honk-Pocket',cat:'pastry',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['banana','香蕉','🍌',1],['sugar','糖','🍬',0,3]],
  fx:'Honk!'},

{n:'浆果口袋饼',en:'Berry-pocket',cat:'pastry',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['berry','浆果','🫐',1]],
  fx:'浆果味口袋饼'},

{n:'豪华口袋饼',en:'Deluxe Donk-pocket',cat:'pastry',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['meatball','肉丸','🧆',1],['bacon','培根','🥓',1],['onion','红洋葱片','🧅',1]],
  fx:'豪华版口袋饼'},

{n:'松饼',en:'Muffin',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['milk','牛奶','🥛',0,5]],
  fx:'松软的松饼'},

{n:'浆果松饼',en:'Berry Muffin',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['milk','牛奶','🥛',0,5],['berry','浆果','🫐',1]],
  fx:'含浆果的松饼'},

{n:'幽灵浆果松饼',en:'Booberry Muffin',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['milk','牛奶','🥛',0,5],['berry','浆果','🫐',1],['ectoplasm','灵质','👻',1]],
  fx:'幽灵浆果松饼'},

{n:'糖曲奇',en:'Sugar Cookie',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['sugar','糖','🍬',0,5]],
  fx:'甜甜的曲奇饼干'},

{n:'骷髅曲奇',en:'Skull Cookie',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['sugar','糖','🍬',0,5],['milk','牛奶','🥛',0,5]],
  fx:'骷髅形状的曲奇'},

{n:'棺材曲奇',en:'Coffin Cookie',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['sugar','糖','🍬',0,5],['coffee','咖啡','☕',0,5]],
  fx:'棺材形状的曲奇'},

{n:'幸运曲奇',en:'Fortune Cookie',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['paper','纸','📄',1]],
  fx:'里面藏着命运的预言'},

{n:'罂粟籽脆饼',en:'Poppy Pretzel',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['poppy_seeds','罂粟籽','🌸',1]],
  fx:'撒了罂粟籽的脆饼'},

{n:'胖头菇饼干',en:'Plumphelmet Biscuit',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['plump_helmet','胖头菇','🍄',1]],
  fx:'矮人风味饼干'},

{n:'饼干',en:'Cracker',cat:'pastry',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['salt','盐','🧂',0,1]],
  fx:'薄脆饼干'},

{n:'爆米花',en:'Popcorn',cat:'pastry',tool:'microwave',
  ings:[['corn','玉米','🌽',1]],
  fx:'微波炉爆米花！简单又好吃'},

{n:'蒸蛋',en:'Chawanmushi',cat:'pastry',tool:'microwave',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,5],['soy_sauce','酱油','🫗',0,5],['egg','煮鸡蛋','🥚',2],['mushroom','鸡油菌','🍄',1]],
  fx:'日式蒸蛋碗'},

{n:'糖苹果',en:'Candied Apple',cat:'pastry',tool:'crafting',
  ings:[['apple','苹果','🍎',1],['caramel','焦糖','🟤',0,5]],
  fx:'焦糖裹苹果'},

{n:'巧克力蛋',en:'Chocolate Egg',cat:'pastry',tool:'crafting',
  ings:[['egg','煮鸡蛋','🥚',1],['chocolate','巧克力棒','🍫',1]],
  fx:'巧克力包裹的蛋'},

{n:'煎饼',en:'Pancake',cat:'pastry',tool:'griddle',
  ings:[['pancake_batter','煎饼糊','🥞',0,5]],
  fx:'铁板上煎的松软煎饼'},

{n:'蓝莓煎饼',en:'Blueberry Pancake',cat:'pastry',tool:'griddle',
  ings:[['pancake_batter','煎饼糊','🥞',0,5],['berry','浆果','🫐',1]],
  fx:'含蓝莓的美味煎饼'},

{n:'巧克力碎煎饼',en:'Chocolate Chip Pancake',cat:'pastry',tool:'griddle',
  ings:[['pancake_batter','煎饼糊','🥞',0,5],['chocolate','巧克力棒','🍫',1]],
  fx:'含巧克力碎的煎饼'},

// ==================== 披萨 ====================
{n:'玛格丽特披萨',en:'Margherita Pizza',cat:'pizza',tool:'crafting',
  ings:[['pizza_bread','披萨饼底','🍕',1],['tomato','番茄','🍅',1],['cheese','奶酪','🧀',4]],
  fx:'银河系最芝士的披萨'},

{n:'肉披萨',en:'Meat Pizza',cat:'pizza',tool:'crafting',
  ings:[['pizza_bread','披萨饼底','🍕',1],['meat','肉块','🥩',1],['cheese','奶酪','🧀',1],['tomato','番茄','🍅',1]],
  fx:'油腻的肉食披萨'},

{n:'蘑菇披萨',en:'Mushroom Pizza',cat:'pizza',tool:'crafting',
  ings:[['pizza_bread','披萨饼底','🍕',1],['mushroom','蘑菇','🍄',5]],
  fx:'蘑菇爱好者的最爱'},

{n:'蔬菜披萨',en:'Vegetable Pizza',cat:'pizza',tool:'crafting',
  ings:[['pizza_bread','披萨饼底','🍕',1],['eggplant','茄子','🍆',1],['carrot','胡萝卜','🥕',1],['corn','玉米','🌽',1],['tomato','番茄','🍅',1]],
  fx:'素食者的披萨'},

// ==================== 三明治 ====================
{n:'经典三明治',en:'Sandwich',cat:'sandwich',tool:'crafting',
  ings:[['bread','面包片','🍞',2],['meat','肉块','🥩',1],['cheese','奶酪','🧀',1]],
  fx:'经典的三明治'},

{n:'芝士三明治',en:'Cheese Sandwich',cat:'sandwich',tool:'crafting',
  ings:[['bread','面包片','🍞',2],['cheese','奶酪','🧀',2]],
  fx:'双倍芝士'},

{n:'煎芝士三明治',en:'Grilled Cheese Sandwich',cat:'sandwich',tool:'griddle',
  ings:[['bread','面包片','🍞',2],['cheese','奶酪','🧀',2]],
  fx:'煎至金黄的芝士三明治'},

{n:'热狗',en:'Hot Dog',cat:'sandwich',tool:'crafting',
  ings:[['bread','面包片','🍞',1],['sausage','香肠','🌭',1],['ketchup','番茄酱','🟥',0,5]],
  fx:'经典热狗'},

{n:'BLT三明治',en:'BLT',cat:'sandwich',tool:'crafting',
  ings:[['bread','面包片','🍞',2],['cutlet','肉片','🥓',1],['tomato','番茄','🍅',1],['onion','洋葱','🧅',1]],
  fx:'培根生菜番茄三明治'},

{n:'鸡肉三明治',en:'Chicken Sandwich',cat:'sandwich',tool:'crafting',
  ings:[['bread','面包片','🍞',2],['chicken','鸡肉','🍗',1]],
  fx:'简单的鸡肉三明治'},

{n:'果酱吐司',en:'Jelly Toast',cat:'sandwich',tool:'crafting',
  ings:[['bread','面包片','🍞',1],['cherry_jelly','樱桃果冻','🍒',0,5]],
  fx:'甜甜的果酱面包'},

{n:'烤三明治',en:'Toasted Sandwich',cat:'sandwich',tool:'microwave',
  ings:[['sandwich','三明治','🥪',1]],
  fx:'微波炉加热的三明治'},

// ==================== 墨西哥菜 ====================
{n:'墨西哥卷饼',en:'Classic Taco',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['cheese','奶酪','🧀',1],['cutlet','肉片','🥓',1],['cabbage','卷心菜','🥬',1]],
  fx:'经典墨西哥卷饼'},

{n:'素卷饼',en:'Plain Taco',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['cheese','奶酪','🧀',1],['cutlet','肉片','🥓',1]],
  fx:'简单的墨西哥卷饼'},

{n:'墨西哥卷',en:'Burrito',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['soybeans','大豆','🫛',2]],
  fx:'豆类墨西哥卷'},

{n:'芝士墨西哥卷',en:'Cheesy Burrito',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['cheese','奶酪','🧀',2],['soybeans','大豆','🫛',1]],
  fx:'芝士墨西哥卷'},

{n:'肉墨西哥卷',en:'Carne Burrito',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['cutlet','肉片','🥓',2],['soybeans','大豆','🫛',1]],
  fx:'肉墨西哥卷'},

{n:'火焰墨西哥卷',en:'Fuego Burrito',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['ghost_chili','幽灵辣椒','👻',2],['soybeans','大豆','🫛',1]],
  fx:'超辣墨西哥卷'},

{n:'芝士玉米片',en:'Cheesy Nachos',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['cheese','奶酪','🧀',1],['salt','盐','🧂',0,1]],
  fx:'芝士玉米片'},

{n:'辣味玉米片',en:'Cuban Nachos',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['chili','辣椒','🌶️',2],['ketchup','番茄酱','🟥',0,5]],
  fx:'辣味玉米片'},

{n:'玉米片',en:'Nachos',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['salt','盐','🧂',0,1]],
  fx:'撒盐玉米片'},

{n:'墨西哥卷饼(油炸)',en:'Classic Chimichanga',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['cutlet','肉片','🥓',2],['cheese','奶酪','🧀',1],['onion','洋葱','🧅',1]],
  fx:'油炸墨西哥卷饼'},

{n:'素墨西哥卷饼(油炸)',en:'Vegetarian Chimichanga',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['cabbage','卷心菜','🥬',1],['onion','洋葱','🧅',1],['chili','辣椒','🌶️',1]],
  fx:'素食油炸墨西哥卷饼'},

{n:'恩奇拉达',en:'Enchiladas',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',2],['cutlet','肉片','🥓',2],['chili','辣椒','🌶️',2]],
  fx:'墨西哥恩奇拉达'},

{n:'脆壳墨西哥卷',en:'Classic Hard-Shell Taco',cat:'mexican',tool:'crafting',
  ings:[['hard_taco','脆壳','🌮',1],['cutlet','肉片','🥓',1],['cheese','奶酪','🧀',1],['tomato','番茄','🍅',1],['cabbage','卷心菜','🥬',1]],
  fx:'脆壳墨西哥卷'},

{n:'西班牙米饭',en:'Spanish Rice',cat:'mexican',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['tomato','番茄','🍅',1],['salt','盐','🧂',0,1],['pepper','胡椒','▪️',0,1]],
  fx:'西班牙风味米饭'},

{n:'炸豆泥',en:'Refried Beans',cat:'mexican',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['soybeans','大豆','🫛',2],['water','水','💧',0,5],['onion','洋葱','🧅',1]],
  fx:'炸豆泥'},

// ==================== 冷冻甜品 ====================
{n:'冰淇淋三明治',en:'Ice Cream Sandwich',cat:'frozen',tool:'crafting',
  ings:[['icecream','冰淇淋','🍨',1],['cream','奶油','🍦',0,5],['ice','冰','🧊',0,5]],
  fx:'冰淇淋夹心三明治'},

{n:'草莓冰淇淋三明治',en:'Strawberry Ice Cream Sandwich',cat:'frozen',tool:'crafting',
  ings:[['icecream','冰淇淋','🍨',1],['cream','奶油','🍦',0,5],['ice','冰','🧊',0,5],['berry','浆果','🫐',2]],
  fx:'草莓冰淇淋三明治'},

{n:'太空冰冻',en:'Space Freezy',cat:'frozen',tool:'crafting',
  ings:[['icecream','冰淇淋','🍨',1],['bluecherry_jelly','蓝樱桃果冻','🔵',0,5],['spacemountainwind','太空山风','🥤',0,15]],
  fx:'太空风味冰冻甜品'},

{n:'圣代',en:'Sundae',cat:'frozen',tool:'crafting',
  ings:[['icecream','冰淇淋','🍨',1],['cream','奶油','🍦',0,5],['cherry','樱桃','🍒',1],['banana','香蕉','🍌',1]],
  fx:'经典圣代'},

{n:'小丑圣代',en:'Honkdae',cat:'frozen',tool:'crafting',
  ings:[['icecream','冰淇淋','🍨',1],['cream','奶油','🍦',0,5],['clown_mask','小丑面具','🤡',1],['cherry','樱桃','🍒',1],['banana','香蕉','🍌',2]],
  fx:'Honk! 小丑圣代'},

{n:'冰淇淋筒',en:'Cornuto',cat:'frozen',tool:'crafting',
  ings:[['icecream','冰淇淋','🍨',1],['chocolate','巧克力棒','🍫',1],['cream','奶油','🍦',0,4],['ice','冰','🧊',0,2],['sugar','糖','🍬',0,4]],
  fx:'巧克力冰淇淋筒'},

{n:'雪糕(橙)',en:'Orange Popsicle',cat:'frozen',tool:'crafting',
  ings:[['popsicle_stick','冰棒棍','🧊',1],['orange_juice','橙汁','🍊',0,4],['ice','冰','🧊',0,2],['cream','奶油','🍦',0,2],['vanilla','香草','🌿',0,2],['sugar','糖','🍬',0,2]],
  fx:'橙子味雪糕'},

{n:'雪糕(浆果)',en:'Berry Popsicle',cat:'frozen',tool:'crafting',
  ings:[['popsicle_stick','冰棒棍','🧊',1],['berry_juice','浆果汁','🫐',0,4],['ice','冰','🧊',0,2],['cream','奶油','🍦',0,2],['vanilla','香草','🌿',0,2],['sugar','糖','🍬',0,2]],
  fx:'浆果味雪糕'},

{n:'巨型冰淇淋',en:'Jumbo Icecream',cat:'frozen',tool:'crafting',
  ings:[['popsicle_stick','冰棒棍','🧊',1],['chocolate','巧克力棒','🍫',1],['ice','冰','🧊',0,2],['cream','奶油','🍦',0,2],['vanilla','香草','🌿',0,3],['sugar','糖','🍬',0,2]],
  fx:'巨型巧克力冰淇淋'},

{n:'肉冰棒',en:'Meatsicle',cat:'frozen',tool:'crafting',
  ings:[['popsicle_stick','冰棒棍','🧊',1],['meat','肉块','🥩',1],['ice','冰','🧊',0,2],['sugar','糖','🍬',0,2]],
  fx:'肉味冰棒'},

{n:'刨冰',en:'Flavorless Snowcone',cat:'frozen',tool:'crafting',
  ings:[['sillycup','纸杯','🥤',1],['ice','冰','🧊',0,15]],
  fx:'无味刨冰'},

// ==================== 糖果 ====================
{n:'蜘蛛棒棒糖',en:'Spider Lollipop',cat:'candy',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['sugar','糖','🍬',0,5],['water','水','💧',0,5],['spiderling','小蜘蛛','🕷️',1]],
  fx:'蜘蛛棒棒糖'},

{n:'巧克力币',en:'Choco Coin',cat:'candy',tool:'crafting',
  ings:[['chocolate','巧克力棒','🍫',1]],
  fx:'硬币形巧克力'},

{n:'骰子软糖',en:'Fudge Dice',cat:'candy',tool:'crafting',
  ings:[['dice','骰子','🎲',1],['chocolate','巧克力棒','🍫',1]],
  fx:'骰子形软糖'},

{n:'巧克力橙',en:'Choco Orange',cat:'candy',tool:'crafting',
  ings:[['orange','橙子','🍊',1],['chocolate','巧克力棒','🍫',1]],
  fx:'巧克力裹橙子'},

{n:'蚂蚁糖',en:'Ant Candy',cat:'candy',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['sugar','糖','🍬',0,5],['water','水','💧',0,5],['ants','蚂蚁','🐜',0,10]],
  fx:'蚂蚁糖'},

{n:'帕科卡',en:'Pacoca',cat:'candy',tool:'crafting',
  ings:[['peanut','花生','🥜',2],['sugar','糖','🍬',0,5],['salt','盐','🧂',0,2]],
  fx:'花生糖'},

{n:'焦糖爆米花',en:'Caramel Popcorn',cat:'candy',tool:'crafting',
  ings:[['popcorn','爆米花','🍿',1],['caramel','焦糖','🟤',0,3]],
  fx:'焦糖爆米花'},

{n:'咸味爆米花',en:'Salty Popcorn',cat:'candy',tool:'crafting',
  ings:[['popcorn','爆米花','🍿',1],['salt','盐','🧂',0,3]],
  fx:'咸味爆米花'},

{n:'焦糖松露',en:'Caramel Truffle',cat:'candy',tool:'crafting',
  ings:[['chocolate','巧克力棒','🍫',1],['caramel','焦糖','🟤',0,2]],
  fx:'焦糖夹心松露'},

{n:'巧克力松露',en:'Chocolate Truffle',cat:'candy',tool:'crafting',
  ings:[['chocolate','巧克力棒','🍫',1],['sugar','糖','🍬',0,2]],
  fx:'巧克力松露'},

{n:'花生松露',en:'Peanut Truffle',cat:'candy',tool:'crafting',
  ings:[['chocolate','巧克力棒','🍫',1],['peanut','花生','🥜',1]],
  fx:'花生夹心松露'},

{n:'花生酱杯',en:'Peanut Butter Cup',cat:'candy',tool:'crafting',
  ings:[['chocolate','巧克力棒','🍫',1],['peanut_butter','花生酱','🥜',0,2]],
  fx:'花生酱巧克力杯'},

{n:'糖渍菠萝',en:'Candied Pineapple',cat:'candy',tool:'crafting',
  ings:[['pineapple','菠萝片','🍍',1],['sugar','糖','🍬',0,2],['water','水','💧',0,2]],
  fx:'糖渍菠萝'},

// ==================== 配菜 ====================
{n:'芝士薯条',en:'Cheesy Fries',cat:'side',tool:'crafting',
  ings:[['fries','薯条','🍟',1],['cheese','奶酪','🧀',1]],
  fx:'芝士淋薯条'},

{n:'肉汁薯条',en:'Poutine',cat:'side',tool:'crafting',
  ings:[['fries','薯条','🍟',1],['cheese','奶酪','🧀',1],['gravy','肉汁','🟤',0,3]],
  fx:'加拿大肉汁芝士薯条'},

{n:'豆子罐头',en:'Beans',cat:'side',tool:'crafting',
  ings:[['soybeans','大豆','🫛',2],['ketchup','番茄酱','🟥',0,5]],
  fx:'番茄酱豆子'},

{n:'蜂蜜坚果棒',en:'Honey Nut Bar',cat:'side',tool:'crafting',
  ings:[['oats','燕麦','🌾',1],['honey','蜂蜜','🍯',0,5]],
  fx:'蜂蜜坚果能量棒'},

{n:'炸芝士条',en:'Mozzarella Sticks',cat:'side',tool:'crafting',
  ings:[['mozzarella','马苏里拉','🧀',1],['bread','面包片','🍞',2]],
  fx:'炸马苏里拉芝士条'},

{n:'波兰饺子',en:'Pierogi',cat:'side',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['potato','土豆','🥔',1],['onion','洋葱','🧅',1]],
  fx:'波兰饺子'},

{n:'芝士波兰饺子',en:'Cheese Pierogi',cat:'side',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['potato','土豆','🥔',1],['cheese','奶酪','🧀',1]],
  fx:'芝士波兰饺子'},

{n:'肉波兰饺子',en:'Meat Pierogi',cat:'side',tool:'crafting',
  ings:[['dough','面团片','🍞',1],['potato','土豆','🥔',1],['cutlet','肉片','🥓',1]],
  fx:'肉波兰饺子'},

{n:'燕麦棒',en:'Granola Bar',cat:'side',tool:'crafting',
  ings:[['oats','燕麦','🌾',1],['peanut','花生','🥜',1],['chocolate','巧克力棒','🍫',1],['no_raisin','不葡萄干','🚫',1]],
  fx:'谷物能量棒'},

{n:'土豆泥',en:'Mashed Potatoes',cat:'side',tool:'crafting',
  ings:[['potato','土豆','🥔',2],['garlic','大蒜','🧄',1],['butter','黄油片','🧈',1]],
  fx:'蒜香土豆泥'},

{n:'春卷',en:'Spring Roll',cat:'side',tool:'crafting',
  ings:[['carrot','胡萝卜','🥕',1],['cucumber','黄瓜','🥒',1],['chili','辣椒','🌶️',1],['rice','米浆','🍚',0,10],['water','水','💧',0,10]],
  fx:'蔬菜春卷'},

{n:'黄油烤土豆',en:'Buttered Baked Potato',cat:'side',tool:'crafting',
  ings:[['baked_potato','烤土豆','🥔',1],['butter','黄油片','🧈',1]],
  fx:'黄油烤土豆'},

{n:'豪华烤土豆',en:'Loaded Baked Potato',cat:'side',tool:'crafting',
  ings:[['baked_potato','烤土豆','🥔',1],['cheese','奶酪','🧀',1],['bacon','培根','🥓',1],['cabbage','卷心菜','🥬',1]],
  fx:'芝士培根烤土豆'},

{n:'炒茄子',en:'Sauteed Eggplant',cat:'side',tool:'crafting',
  ings:[['eggplant','茄子','🍆',1],['garlic','大蒜','🧄',1],['olive_oil','橄榄油','🫒',0,3]],
  fx:'蒜炒茄子'},

{n:'酿茄子',en:'Stuffed Eggplant',cat:'side',tool:'crafting',
  ings:[['eggplant','茄子','🍆',1],['garlic','大蒜','🧄',1],['cabbage','卷心菜','🥬',1],['cheese','奶酪','🧀',1],['cutlet','肉片','🥓',1]],
  fx:'酿馅茄子'},

{n:'太空自由布丁',en:'Spacy Liberty Duff',cat:'side',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['vodka','伏特加','🫗',0,5],['mushroom','自由帽菇','🍄',3]],
  fx:'酒精蘑菇布丁'},

{n:'牛肉陀螺',en:'Grilled Beef Gyro',cat:'side',tool:'crafting',
  ings:[['pita_bread','皮塔饼','🫓',1],['tzatziki','酸奶黄瓜酱','🥒',1],['cutlet','肉片','🥓',2],['cabbage','卷心菜','🥬',1],['tomato','番茄','🍅',1],['onion','洋葱','🧅',1]],
  fx:'希腊牛肉陀螺'},

{n:'素陀螺',en:'Vegetarian Gyro',cat:'side',tool:'crafting',
  ings:[['pita_bread','皮塔饼','🫓',1],['tzatziki','酸奶黄瓜酱','🥒',1],['cucumber','黄瓜','🥒',1],['cabbage','卷心菜','🥬',1],['tomato','番茄','🍅',1],['onion','洋葱','🧅',1]],
  fx:'素食陀螺'},

{n:'莫萨卡',en:'Moussaka',cat:'side',tool:'crafting',
  ings:[['eggplant','茄子','🍆',2],['garlic','大蒜','🧄',1],['onion','洋葱','🧅',1],['cutlet','肉片','🥓',1],['bechamel','白酱','🥛',1]],
  fx:'希腊莫萨卡'},

{n:'法拉费',en:'Falafel',cat:'side',tool:'crafting',
  ings:[['soybeans','大豆','🫛',1],['garlic','大蒜','🧄',1],['onion','洋葱','🧅',1],['herbs','香草','🌿',1]],
  fx:'中东炸豆丸'},

// ==================== 蜥蜴族料理 ====================
{n:'蜥蜴血肠',en:'Raw Tiziran Blood Sausage',cat:'lizard',tool:'crafting',
  ings:[['raw_cutlet','生肉片','🥓',1],['raw_bacon','生培根','🥓',1],['blood','血液','🩸',0,5],['salt','盐','🧂',0,2]],
  fx:'蜥蜴族血肠'},

{n:'肉冻',en:'Raw Headcheese',cat:'lizard',tool:'crafting',
  ings:[['meat','肉块','🥩',1],['salt','盐','🧂',0,10],['pepper','胡椒','▪️',0,5]],
  fx:'蜥蜴族头肉冻'},

{n:'脆炒肺丝',en:'Crispy Shredded Lung Stirfry',cat:'lizard',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['carrot','胡萝卜','🥕',1],['chili','辣椒','🌶️',1],['onion','洋葱','🧅',1],['lungs','肺','🫁',1]],
  fx:'脆炒肺丝'},

{n:'杂碎拼盘',en:'Tsatsikh',cat:'lizard',tool:'crafting',
  ings:[['heart','心脏','🫀',1],['liver','肝脏','🩸',1],['lungs','肺','🫁',1],['stomach','胃','🫃',1],['salt','盐','🧂',0,2],['pepper','胡椒','▪️',0,2]],
  fx:'蜥蜴族内脏拼盘'},

{n:'肝酱',en:'Liver Pate',cat:'lizard',tool:'crafting',
  ings:[['liver','肝脏','🩸',1],['raw_cutlet','生肉片','🥓',1],['onion','洋葱','🧅',1]],
  fx:'蜥蜴族肝酱'},

{n:'月鱼鱼子酱',en:'Moonfish Caviar Paste',cat:'lizard',tool:'crafting',
  ings:[['moonfish_eggs','月鱼卵','🌙',1],['salt','盐','🧂',0,2]],
  fx:'月鱼鱼子酱'},

{n:'沙漠蜗牛',en:'Desert Snail Cocleas',cat:'lizard',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['desert_snails','沙漠蜗牛罐头','🐌',1],['garlic','大蒜','🧄',1],['lemon','柠檬汁','🍋',0,3],['pepper','胡椒','▪️',0,2],['olive_oil','橄榄油','🫒',0,3]],
  fx:'蜥蜴族沙漠蜗牛'},

{n:'炸血肠',en:'Fried Blood Sausage',cat:'lizard',tool:'crafting',
  ings:[['tiziran_sausage','蜥蜴血肠','🥓',1],['korta_flour','科塔粉','🌾',0,5],['water','水','💧',0,5]],
  fx:'油炸蜥蜴血肠'},

{n:'蜥蜴薯条',en:'Loaded Poms-Franzisks',cat:'lizard',tool:'crafting',
  ings:[['fries','薯条','🍟',1],['cutlet','肉片','🥓',2],['bbq_sauce','BBQ酱','🟤',0,5]],
  fx:'蜥蜴风味薯条'},

{n:'眼脑酱',en:'Eyeball-and-Brain Pate',cat:'lizard',tool:'crafting',
  ings:[['brain','大脑','🧠',1],['eyes','眼球','👁️',1],['onion','洋葱','🧅',1],['salt','盐','🧂',0,3]],
  fx:'蜥蜴族眼脑酱'},

{n:'皮科斯烤串',en:'Picoss Skewers',cat:'lizard',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['armorfish','甲鱼','🐟',2],['onion','洋葱','🧅',1],['chili','辣椒','🌶️',1],['vinegar','醋','🍶',0,5]],
  fx:'蜥蜴族皮科斯烤串'},

{n:'花蜜幼虫',en:'Nectar Larvae',cat:'lizard',tool:'crafting',
  ings:[['larvae','幼虫罐头','🐛',1],['tomato','番茄','🍅',1],['chili','辣椒','🌶️',1],['korta_nectar','科塔花蜜','🍯',0,5]],
  fx:'蜥蜴族花蜜幼虫'},

{n:'蘑菇炒菜',en:'Mushroomy Stirfry',cat:'lizard',tool:'crafting',
  ings:[['steeped_mushrooms','浸泡蘑菇','🍄',1],['mushroom','胖头菇','🍄',1],['mushroom','鸡油菌','🍄',1],['olive_oil','橄榄油','🫒',0,5]],
  fx:'蜥蜴族蘑菇炒菜'},

{n:'月鱼半冰汁',en:'Moonfish Demiglace',cat:'lizard',tool:'crafting',
  ings:[['moonfish','烤月鱼','🌙',1],['potato','土豆','🥔',1],['carrot','胡萝卜','🥕',1],['korta_milk','科塔奶','🥛',0,5],['wine','红酒','🍷',0,5]],
  fx:'蜥蜴族月鱼半冰汁'},

{n:'蜥蜴海陆拼盘',en:'Zagosk Surf n Turf Smorgasbord',cat:'lizard',tool:'crafting',
  ings:[['moonfish','烤月鱼','🌙',1],['picoss_skewers','皮科斯烤串','🪵',2],['meat','牛排','🥩',1],['bbq_ribs','烤肋排','🍖',1]],
  fx:'蜥蜴族海陆大拼盘'},

{n:'乡村扁面包',en:'Rustic Flatbread',cat:'lizard',tool:'crafting',
  ings:[['root_flatbread','根扁面包','🫓',1],['garlic','大蒜','🧄',1],['lemon','柠檬汁','🍋',0,2],['olive_oil','橄榄油','🫒',0,3]],
  fx:'蜥蜴族乡村扁面包'},

{n:'意式扁面包',en:'Italic Flatbread',cat:'lizard',tool:'crafting',
  ings:[['root_flatbread','根扁面包','🫓',1],['garlic','大蒜','🧄',1],['tomato','番茄','🍅',1],['meatball','肉丸','🧆',2],['olive_oil','橄榄油','🫒',0,3]],
  fx:'蜥蜴族意式扁面包'},

{n:'帝国扁面包',en:'Imperial Flatbread',cat:'lizard',tool:'crafting',
  ings:[['root_flatbread','根扁面包','🫓',1],['liver_pate','肝酱','🩸',1],['sauerkraut','酸菜','🥬',1],['headcheese','头肉冻','🍖',1]],
  fx:'蜥蜴族帝国扁面包'},

{n:'肉食者扁面包',en:'Meatlovers Flatbread',cat:'lizard',tool:'crafting',
  ings:[['root_flatbread','根扁面包','🫓',1],['meat','肉块','🥩',1]],
  fx:'蜥蜴族肉食者扁面包'},

{n:'烧烤鱼扁面包',en:'BBQ Fish Flatbread',cat:'lizard',tool:'crafting',
  ings:[['root_flatbread','根扁面包','🫓',1],['fish','鱼排','🐟',2],['bbq_sauce','BBQ酱','🟤',0,5]],
  fx:'蜥蜴族烧烤鱼扁面包'},

{n:'蘑菇番茄扁面包',en:'Mushroom and Tomato Flatbread',cat:'lizard',tool:'crafting',
  ings:[['root_flatbread','根扁面包','🫓',1],['tomato','番茄','🍅',1],['mushroom','蘑菇','🍄',3],['olive_oil','橄榄油','🫒',0,3]],
  fx:'蜥蜴族蘑菇番茄扁面包'},

{n:'黑炒蛋',en:'Black Scrambled Eggs',cat:'lizard',tool:'crafting',
  ings:[['egg','鸡蛋','🥚',2],['blood','血液','🩸',0,5],['vinegar','醋','🍶',0,2]],
  fx:'蜥蜴族黑炒蛋'},

{n:'帕茨库拉',en:'Patzikula',cat:'lizard',tool:'crafting',
  ings:[['tomato','番茄','🍅',2],['onion','洋葱','🧅',1],['chili','辣椒','🌶️',1],['egg','鸡蛋','🥚',2]],
  fx:'蜥蜴族帕茨库拉'},

{n:'酸菜',en:'Sauerkraut',cat:'lizard',tool:'crafting',
  ings:[['cabbage','卷心菜','🥬',2],['salt','盐','🧂',0,10]],
  fx:'蜥蜴族酸菜'},

{n:'蜂蜜甜面包卷',en:'Honey Sweetroll',cat:'lizard',tool:'crafting',
  ings:[['rootroll','根面包卷','🍞',1],['berry','浆果','🫐',1],['banana','香蕉','🍌',1],['honey','蜂蜜','🍯',0,5]],
  fx:'蜥蜴族蜂蜜甜面包卷'},

{n:'蜜饯蘑菇',en:'Candied Mushrooms',cat:'lizard',tool:'crafting',
  ings:[['rods','金属棒','🪵',1],['steeped_mushrooms','浸泡蘑菇','🍄',1],['caramel','焦糖','🟤',0,5],['salt','盐','🧂',0,1]],
  fx:'蜥蜴族蜜饯蘑菇'},

// ==================== 火星料理 ====================
{n:'泡菜',en:'Kimchi',cat:'martian',tool:'crafting',
  ings:[['cabbage','卷心菜','🥬',1],['chili','辣椒','🌶️',1],['salt','盐','🧂',0,5]],
  fx:'火星式泡菜'},

{n:'地狱泡菜',en:'Inferno Kimchi',cat:'martian',tool:'crafting',
  ings:[['cabbage','卷心菜','🥬',1],['ghost_chili','幽灵辣椒','👻',1],['salt','盐','🧂',0,5]],
  fx:'超辣泡菜'},

{n:'蒜味泡菜',en:'Garlic Kimchi',cat:'martian',tool:'crafting',
  ings:[['cabbage','卷心菜','🥬',1],['chili','辣椒','🌶️',1],['garlic','大蒜','🧄',1],['salt','盐','🧂',0,5]],
  fx:'蒜味泡菜'},

{n:'三巴酱',en:'Sambal',cat:'martian',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['chili','辣椒','🌶️',1],['garlic','大蒜','🧄',1],['onion','洋葱','🧅',1],['sugar','糖','🍬',0,3],['lime','青柠汁','🟢',0,3]],
  fx:'火星三巴辣酱'},

{n:'炸猪排',en:'Katsu Fillet',cat:'martian',tool:'crafting',
  ings:[['raw_cutlet','生肉片','🥓',1],['bread','黑麦面包片','🍞',1]],
  fx:'日式炸猪排'},

{n:'飓风炒饭',en:'Hurricane Fried Rice',cat:'martian',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['egg','鸡蛋','🥚',1],['onion','洋葱片','🧅',1],['chili','辣椒','🌶️',1],['cutlet','肉片','🥓',1],['pineapple','菠萝片','🍍',1],['soy_sauce','酱油','🫗',0,3]],
  fx:'火星飓风炒饭'},

{n:'花木兰粥',en:'Hua Mulan Congee',cat:'martian',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice_porridge','米粥','🍚',0,10],['bacon','培根','🥓',1],['egg','煎蛋','🍳',2]],
  fx:'火星花木兰粥'},

{n:'蛋炒饭',en:'Egg Fried Rice',cat:'martian',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['egg','鸡蛋','🥚',1],['soy_sauce','酱油','🫗',0,3]],
  fx:'火星蛋炒饭'},

{n:'拌饭',en:'Bibimbap',cat:'martian',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['cucumber','黄瓜','🥒',1],['mushroom','蘑菇','🍄',1],['cutlet','肉片','🥓',1],['kimchi','泡菜','🥬',1],['egg','鸡蛋','🥚',1]],
  fx:'火星石锅拌饭'},

{n:'章鱼烧',en:'Takoyaki',cat:'martian',tool:'crafting',
  ings:[['octopus','章鱼肉','🐙',1],['onion','洋葱片','🧅',1],['martian_batter','火星面糊','🥞',0,6],['worcestershire','辣酱油','🟤',0,3]],
  fx:'火星章鱼烧'},

{n:'俄罗斯章鱼烧',en:'Russian Takoyaki',cat:'martian',tool:'crafting',
  ings:[['octopus','章鱼肉','🐙',1],['ghost_chili','幽灵辣椒','👻',1],['martian_batter','火星面糊','🥞',0,6],['capsaicin','辣椒素','🔥',0,3]],
  fx:'超辣俄罗斯章鱼烧'},

{n:'塔可烧',en:'Tacoyaki',cat:'martian',tool:'crafting',
  ings:[['meatball','肉丸','🧆',1],['corn','玉米','🌽',1],['martian_batter','火星面糊','🥞',0,6],['red_bay','红湾调料','🔴',0,3],['cheese','奶酪','🧀',1]],
  fx:'火星塔可烧'},

{n:'大阪烧',en:'Okonomiyaki',cat:'martian',tool:'crafting',
  ings:[['martian_batter','火星面糊','🥞',0,6],['worcestershire','辣酱油','🟤',0,3],['mayonnaise','蛋黄酱','🥚',0,3],['cabbage','卷心菜','🥬',1],['sweet_potato','红薯','🍠',1]],
  fx:'火星大阪烧'},

{n:'菠萝汉堡',en:'Big Blue Burger',cat:'martian',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['patty','肉饼','🥩',2],['onion','洋葱片','🧅',1],['cheese','奶酪','🧀',1],['bacon','培根','🥓',1],['pineapple','菠萝片','🍍',1],['teriyaki','照烧汁','🟤',0,4]],
  fx:'火星大蓝汉堡'},

{n:'炸鸡丸汉堡',en:'Chappy Patty',cat:'martian',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['grilled_chap','烤肉片','🥓',2],['egg','煎蛋','🍳',1],['cheese','奶酪','🧀',1],['ketchup','番茄酱','🟥',0,3]],
  fx:'火星炸鸡丸汉堡'},

{n:'炸猪排三明治',en:'King Katsu Sandwich',cat:'martian',tool:'crafting',
  ings:[['bread','黑麦面包片','🍞',2],['katsu_fillet','炸猪排','🍖',1],['bacon','培根','🥓',1],['kimchi','泡菜','🥬',1],['onion','洋葱片','🧅',1],['tomato','番茄','🍅',1]],
  fx:'火星炸猪排三明治'},

{n:'古巴三明治',en:'Marte Cubano Sandwich',cat:'martian',tool:'crafting',
  ings:[['bread','黑麦面包片','🍞',2],['bacon','培根','🥓',1],['pickle','酸黄瓜','🥒',2],['cheese','奶酪','🧀',1]],
  fx:'火星古巴三明治'},

{n:'小城三明治',en:'Little Shiro Sandwich',cat:'martian',tool:'crafting',
  ings:[['bread','黑麦面包片','🍞',2],['cutlet','肉片','🥓',1],['egg','煎蛋','🍳',1],['garlic_kimchi','蒜味泡菜','🧄',1],['mozzarella','马苏里拉','🧀',1],['herbs','香草','🌿',1]],
  fx:'火星小城三明治'},

{n:'火星法式三明治',en:'Croque-Martienne Sandwich',cat:'martian',tool:'crafting',
  ings:[['bread','黑麦面包片','🍞',2],['cutlet','肉片','🥓',1],['cheese','奶酪','🧀',1],['pineapple','菠萝片','🍍',1],['egg','煎蛋','🍳',1]],
  fx:'火星法式三明治'},

{n:'日式炸薯条',en:'Izakaya Fries',cat:'martian',tool:'crafting',
  ings:[['fries','薯条','🍟',1],['herbs','香草','🌿',1],['red_bay','红湾调料','🔴',0,3],['mayonnaise','蛋黄酱','🥚',0,3]],
  fx:'火星居酒屋薯条'},

{n:'炒面',en:'Martian Fried Noodles',cat:'martian',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['spaghetti','煮面','🍜',1],['peanut','花生','🥜',2],['cutlet','肉片','🥓',1],['onion','洋葱片','🧅',1],['egg','鸡蛋','🥚',1],['soy_sauce','酱油','🫗',0,3],['red_bay','红湾调料','🔴',0,3]],
  fx:'火星炒面'},

{n:'简单炒面',en:'Simple Fried Noodles',cat:'martian',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['spaghetti','煮面','🍜',1],['soy_sauce','酱油','🫗',0,3]],
  fx:'简单炒面'},

{n:'世田谷咖喱',en:'Setagaya Curry',cat:'martian',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice','米饭','🍚',1],['apple','苹果','🍎',1],['honey','蜂蜜','🍯',0,3],['ketchup','番茄酱','🟥',0,3],['chocolate','巧克力','🍫',1],['coffee','咖啡','☕',0,3],['wine','红酒','🍷',0,3],['curry_powder','咖喱粉','🟡',0,3],['meat','肉块','🥩',1],['onion','洋葱','🧅',1],['carrot','胡萝卜','🥕',1],['potato','土豆','🥔',1]],
  fx:'火星世田谷咖喱饭'},

// ==================== 蛾族料理 ====================
{n:'香草奶酪',en:'Herby Cheese',cat:'moth',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['curd_cheese','凝乳奶酪','🧀',1],['herbs','香草','🌿',4]],
  fx:'蛾族香草奶酪'},

{n:'蛾族沙拉',en:'Mothic Salad',cat:'moth',tool:'crafting',
  ings:[['cabbage','卷心菜','🥬',1],['onion','红洋葱片','🧅',2],['tomato','番茄','🍅',1]],
  fx:'蛾族沙拉'},

{n:'炒吱吱',en:'Squeaking Stir Fry',cat:'moth',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['cheese_curds','奶酪凝块','🧀',1],['tofu','豆腐','🧈',1],['chili','辣椒','🌶️',1],['rice','米饭','🍚',1],['carrot','胡萝卜','🥕',1],['onion','洋葱片','🧅',1]],
  fx:'蛾族炒吱吱'},

{n:'甜椒卷心菜卷',en:'Sweet Chili Cabbage Wrap',cat:'moth',tool:'crafting',
  ings:[['grilled_cheese','烤奶酪','🧀',1],['mothic_salad','蛾族沙拉','🥗',1],['chili','辣椒','🌶️',1],['cabbage','卷心菜','🥬',1],['honey','蜂蜜','🍯',0,5]],
  fx:'蛾族甜椒卷心菜卷'},

{n:'焗奶酪拼盘',en:'Baked Cheese Platter',cat:'moth',tool:'crafting',
  ings:[['baked_cheese','焗奶酪','🧀',1],['griddle_toast','铁板吐司','🍞',3]],
  fx:'蛾族焗奶酪拼盘'},

{n:'黄油烤玉米',en:'Buttered Baked Corn',cat:'moth',tool:'crafting',
  ings:[['oven_corn','烤玉米','🌽',1],['butter','黄油片','🧈',1]],
  fx:'蛾族黄油烤玉米'},

{n:'狂欢玉米锅',en:'Fiesta Corn Skillet',cat:'moth',tool:'crafting',
  ings:[['oven_corn','烤玉米','🌽',1],['cornchips','玉米片','🌽',1],['chili','辣椒','🌶️',2],['tomato','番茄','🍅',1],['onion','洋葱片','🧅',2],['cheese','奶酪','🧀',1]],
  fx:'蛾族狂欢玉米锅'},

{n:'卡普雷塞沙拉',en:'Caprese Salad',cat:'moth',tool:'crafting',
  ings:[['tomato','番茄','🍅',1],['mozzarella','马苏里拉','🧀',1],['herbs','香草','🌿',1],['olive_oil','橄榄油','🫒',0,2],['vinegar','醋','🍶',0,2]],
  fx:'蛾族卡普雷塞沙拉'},

{n:'普罗旺斯杂炖',en:'Ratatouille',cat:'moth',tool:'crafting',
  ings:[['tomato','番茄','🍅',1],['onion','红洋葱','🧅',1],['eggplant','茄子','🍆',1],['bell_pepper','烤甜椒','🫑',1]],
  fx:'蛾族普罗旺斯杂炖'},

{n:'酿甜椒',en:'Stuffed Peppers',cat:'moth',tool:'crafting',
  ings:[['bell_pepper','甜椒','🫑',1],['herby_cheese','香草奶酪','🧀',1],['onion','洋葱片','🧅',2]],
  fx:'蛾族酿甜椒'},

{n:'蛾族玛格丽特披萨',en:'Mothic Margherita Pizza',cat:'moth',tool:'crafting',
  ings:[['mothic_pizza_dough','蛾族披萨面团','🍕',1],['tomato_sauce','番茄酱','🍅',1],['mozzarella','马苏里拉','🧀',1],['firm_cheese','硬奶酪','🧀',1],['herbs','香草','🌿',1]],
  fx:'蛾族玛格丽特披萨'},

{n:'蛾族辣椒披萨',en:'Mothic Firecracker Pizza',cat:'moth',tool:'crafting',
  ings:[['mothic_pizza_dough','蛾族披萨面团','🍕',1],['bbq_sauce','BBQ酱','🟤',0,10],['firm_cheese','硬奶酪','🧀',1],['oven_corn','烤玉米','🌽',1],['ghost_chili','幽灵辣椒','👻',1]],
  fx:'蛾族辣椒披萨'},

{n:'蛾族五奶酪披萨',en:'Mothic Five Cheese Pizza',cat:'moth',tool:'crafting',
  ings:[['mothic_pizza_dough','蛾族披萨面团','🍕',1],['tomato_sauce','番茄酱','🍅',1],['firm_cheese','硬奶酪','🧀',1],['cheese','奶酪','🧀',1],['mozzarella','马苏里拉','🧀',1],['herby_cheese','香草奶酪','🧀',1],['cheese_curds','奶酪凝块','🧀',1]],
  fx:'蛾族五奶酪披萨'},

{n:'奶酪球',en:'Cheesecake Balls',cat:'moth',tool:'crafting',
  ings:[['curd_cheese','凝乳奶酪','🧀',1],['chocolate','巧克力棒','🍫',1],['flour','面粉','🌾',0,5],['sugar','糖','🍬',0,5],['honey','蜂蜜','🍯',0,5]],
  fx:'蛾族奶酪球'},

{n:'蛾棉花糖',en:'Mothmallows',cat:'moth',tool:'crafting',
  ings:[['soybeans','大豆','🫛',1],['vanilla','香草','🌿',0,5],['sugar','糖','🍬',0,15],['rum','朗姆酒','🥃',0,5]],
  fx:'蛾族棉花糖'},

{n:'蛾松饼',en:'Moffin',cat:'moth',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['milk','牛奶','🥛',0,5],['cloth','布料','🧵',1]],
  fx:'蛾族松饼'},

// ==================== 基础调料/原料 ====================
{n:'面粉',en:'Flour',cat:'ingredient',tool:'grinder',
  ings:[['wheat','小麦','🌾',1]],
  fx:'研磨小麦获得，制作面团的原料'},

{n:'糖',en:'Sugar',cat:'ingredient',tool:'grinder',
  ings:[['white_beet','白甜菜','🥣',1]],
  fx:'研磨白甜菜或甘蔗获得'},

{n:'豆奶',en:'Soy Milk',cat:'ingredient',tool:'grinder',
  ings:[['soybeans','大豆','🫛',0,10],['water','水','💧',0,1]],
  fx:'豆棒加水混合'},

{n:'酱油',en:'Soy Sauce',cat:'ingredient',tool:'grinder',
  ings:[['soy_milk','豆奶','🥛',0,4],['sulphuric_acid','硫酸','🧪',0,1]],
  fx:'豆奶+硫酸（小心！）'},

{n:'番茄酱',en:'Ketchup',cat:'ingredient',tool:'grinder',
  ings:[['tomato','番茄','🍅',1]],
  fx:'研磨番茄获得'},

{n:'奶酪轮',en:'Cheese Wheel',cat:'ingredient',tool:'grinder',
  ings:[['milk','牛奶','🥛',0,40],['enzyme','通用酶','⚗️',0,5]],
  fx:'牛奶+通用酶（催化剂），可切出奶酪块'},

{n:'巧克力棒',en:'Chocolate Bar',cat:'ingredient',tool:'grinder',
  ings:[['coco','可可粉','🟤',0,2],['milk','牛奶','🥛',0,2],['sugar','糖','🍬',0,2]],
  fx:'可可粉+牛奶+糖混合'},

{n:'豆腐',en:'Tofu',cat:'ingredient',tool:'grinder',
  ings:[['soy_milk','豆奶','🥛',0,10],['enzyme','通用酶','⚗️',0,5]],
  fx:'豆奶+通用酶（催化剂）'},

{n:'黄油',en:'Butter',cat:'ingredient',tool:'grinder',
  ings:[['milk','牛奶','🥛',0,15],['cream','奶油','🍦',0,10]],
  fx:'牛奶加工获得'},

{n:'焦糖',en:'Caramel',cat:'ingredient',tool:'grinder',
  ings:[['sugar','糖','🍬',0,1]],
  fx:'加热糖制成焦糖'},

{n:'面团',en:'Dough',cat:'ingredient',tool:'grinder',
  ings:[['flour','面粉','🌾',0,15],['water','水','💧',0,10]],
  fx:'面粉+水混合，面包的基础'},

{n:'蛋糕面糊',en:'Cake Batter',cat:'ingredient',tool:'grinder',
  ings:[['flour','面粉','🌾',0,15],['egg_yolk','蛋黄','🥚',0,6],['egg_white','蛋白','⚪',0,12],['sugar','糖','🍬',0,5]],
  fx:'烤箱烘焙成原味蛋糕'},

{n:'素食蛋糕面糊',en:'Vegan Cake Batter',cat:'ingredient',tool:'grinder',
  ings:[['soy_milk','豆奶','🥛',0,15],['flour','面粉','🌾',0,15],['sugar','糖','🍬',0,5]],
  fx:'素食版蛋糕面糊'},

{n:'煎饼糊',en:'Pancake Batter',cat:'ingredient',tool:'grinder',
  ings:[['egg_yolk','蛋黄','🥚',0,6],['egg_white','蛋白','⚪',0,12],['milk','牛奶','🥛',0,10],['flour','面粉','🌾',0,5]],
  fx:'得15单位，铁板煎成煎饼'},

{n:'肉汁',en:'Gravy',cat:'ingredient',tool:'grinder',
  ings:[['nutriment','营养素','💊',0,1],['flour','面粉','🌾',0,1],['milk','牛奶','🥛',0,1]],
  fx:'营养素+面粉+牛奶混合'},

{n:'白酱',en:'Bechamel Sauce',cat:'ingredient',tool:'grinder',
  ings:[['milk','牛奶','🥛',0,10],['flour','面粉','🌾',0,5],['butter','黄油片','🧈',1]],
  fx:'牛奶+面粉+黄油制成白酱'},

{n:'番茄酱汁',en:'Tomato Sauce',cat:'ingredient',tool:'grinder',
  ings:[['canned_tomatoes','番茄罐头','🥫',1],['salt','盐','🧂',0,2],['herbs','香草','🌿',1],['olive_oil','橄榄油','🫒',0,5]],
  fx:'意式番茄酱汁'},

{n:'青酱',en:'Pesto',cat:'ingredient',tool:'grinder',
  ings:[['firm_cheese','硬奶酪片','🧀',1],['salt','盐','🧂',0,5],['herbs','香草','🌿',2],['garlic','大蒜','🧄',1],['olive_oil','橄榄油','🫒',0,5],['pine_nuts','松仁','🌰',1]],
  fx:'意式青酱'},

{n:'BBQ酱',en:'BBQ Sauce',cat:'ingredient',tool:'grinder',
  ings:[['ash','灰烬','🌫️',0,1],['tomato','番茄汁','🍅',0,1],['salglu','盐葡萄糖溶液','💊',0,3],['pepper','胡椒','▪️',0,1]],
  fx:'灰烬+番茄汁+盐葡萄糖+胡椒制成BBQ酱'},

// ==================== 半成品加工 ====================
{n:'生肉丸',en:'Raw Meatball',cat:'ingredient',tool:'processor',
  ings:[['meat','肉块','🥩',1]],
  fx:'食品加工机将肉块加工为生肉丸'},

{n:'生肉片',en:'Raw Cutlet',cat:'ingredient',tool:'knife',
  ings:[['meat','肉块','🥩',1]],
  fx:'刀切肉块，得3个生肉片'},

{n:'生培根',en:'Raw Bacon',cat:'ingredient',tool:'processor',
  ings:[['raw_cutlet','生肉片','🥓',1]],
  fx:'食品加工机将生肉片加工为生培根'},

{n:'生肉饼',en:'Raw Patty',cat:'ingredient',tool:'rolling',
  ings:[['raw_meatball','生肉丸','🧆',1]],
  fx:'用擀面杖将生肉丸擀成肉饼'},

{n:'薯条',en:'Fries',cat:'ingredient',tool:'processor',
  ings:[['potato','土豆条','🥔',1]],
  fx:'食品加工机将土豆条加工为薯条'},

{n:'意大利面',en:'Spaghetti',cat:'ingredient',tool:'processor',
  ings:[['dough','面团片','🍞',1]],
  fx:'食品加工机将面团片加工为生意面'},

{n:'墨西哥饼皮',en:'Tortilla',cat:'ingredient',tool:'processor',
  ings:[['corn','玉米','🌽',1]],
  fx:'食品加工机将玉米加工为饼皮'},

{n:'玉米片',en:'Cornchips',cat:'ingredient',tool:'processor',
  ings:[['tortilla','墨西哥饼皮','🫓',1]],
  fx:'食品加工机将饼皮加工为玉米片'},

{n:'生酥皮基底',en:'Raw Pastry Base',cat:'ingredient',tool:'knife',
  ings:[['pie_dough','派面团','🥧',1]],
  fx:'刀切派面团，得3个。烤箱烘焙为酥皮基底'},

{n:'面团片',en:'Dough Slice',cat:'ingredient',tool:'knife',
  ings:[['flat_dough','扁面团','🫓',1]],
  fx:'刀切扁面团获得'},

{n:'扁面团',en:'Flat Dough',cat:'ingredient',tool:'rolling',
  ings:[['dough','面团','🍞',1]],
  fx:'用擀面杖擀面团获得，烤箱烘焙成披萨饼底'},

{n:'派面团',en:'Pie Dough',cat:'ingredient',tool:'rolling',
  ings:[['cake_batter','蛋糕面糊','🎂',1]],
  fx:'用擀面杖擀蛋糕面糊，烤箱烘焙成原味派'},

{n:'面包片',en:'Bread Slice',cat:'ingredient',tool:'knife',
  ings:[['bread_plain','原味面包','🍞',1]],
  fx:'刀切面包获得'},

{n:'蛋糕片',en:'Cake Slice',cat:'ingredient',tool:'knife',
  ings:[['plain_cake','原味蛋糕','🎂',1]],
  fx:'刀切蛋糕获得'},

{n:'奶酪块',en:'Cheese Wedge',cat:'ingredient',tool:'knife',
  ings:[['cheese_wheel','奶酪轮','🧀',1]],
  fx:'刀切奶酪轮获得'},

{n:'黄油片',en:'Butter Slice',cat:'ingredient',tool:'knife',
  ings:[['butter','黄油','🧈',1]],
  fx:'刀切黄油获得'},

{n:'洋葱片',en:'Onion Slice',cat:'ingredient',tool:'knife',
  ings:[['onion','洋葱','🧅',1]],
  fx:'刀切洋葱获得'},

{n:'菠萝片',en:'Pineapple Slice',cat:'ingredient',tool:'knife',
  ings:[['pineapple','菠萝','🍍',1]],
  fx:'刀切菠萝获得'},

{n:'土豆条',en:'Potato Wedges',cat:'ingredient',tool:'knife',
  ings:[['potato','土豆','🥔',1]],
  fx:'刀切土豆获得'},

{n:'鱼糜',en:'Surimi',cat:'ingredient',tool:'processor',
  ings:[['fish','鱼排','🐟',1]],
  fx:'食品加工机将鱼排加工为鱼糜'},

{n:'豆豉',en:'Tempeh',cat:'ingredient',tool:'processor',
  ings:[['tempeh_starter','豆豉发酵剂','🍄',1]],
  fx:'食品加工机将发酵剂加工为豆豉'},

{n:'米饭',en:'Boiled Rice',cat:'ingredient',tool:'microwave',
  ings:[['rice','生米','🍚',0,10],['water','水','💧',0,10]],
  fx:'生米+水微波炉煮熟'},

{n:'煮鸡蛋',en:'Boiled Egg',cat:'ingredient',tool:'microwave',
  ings:[['egg','鸡蛋','🥚',1]],
  fx:'微波炉煮鸡蛋'},

{n:'煎蛋',en:'Fried Egg',cat:'ingredient',tool:'griddle',
  ings:[['egg','鸡蛋','🥚',1]],
  fx:'铁板煎蛋'},

{n:'欧米勒蛋',en:'Omelette du Fromage',cat:'ingredient',tool:'microwave',
  ings:[['egg','鸡蛋','🥚',2],['cheese','奶酪','🧀',2]],
  fx:'Dexter的实验室同款'},

{n:'生皮塔饼',en:'Raw Pita Bread',cat:'ingredient',tool:'crafting',
  ings:[['flour','面粉','🌾',0,10],['water','水','💧',0,5],['olive_oil','橄榄油','🫒',0,2],['sugar','糖','🍬',0,2]],
  fx:'面粉+水+橄榄油+糖制成生皮塔饼'},

{n:'酸奶黄瓜酱',en:'Tzatziki Sauce',cat:'ingredient',tool:'crafting',
  ings:[['cucumber','黄瓜','🥒',1],['olive_oil','橄榄油','🫒',0,2],['garlic','大蒜','🧄',1],['salt','盐','🧂',0,1]],
  fx:'希腊酸奶黄瓜酱'},

{n:'马苏里拉',en:'Mozzarella',cat:'ingredient',tool:'grinder',
  ings:[['milk','牛奶','🥛',0,10],['cream','奶油','🍦',0,10],['enzyme','通用酶','⚗️',0,1]],
  fx:'牛奶+奶油+酶制成马苏里拉奶酪'},

{n:'凝乳奶酪',en:'Curd Cheese',cat:'ingredient',tool:'grinder',
  ings:[['milk','牛奶','🥛',0,15],['vinegar','醋','🍶',0,5],['cream','奶油','🍦',0,5]],
  fx:'牛奶+醋+奶油制成凝乳奶酪'},

];

// Category labels
var CAT_LABELS = {
  soup:{name:'汤类和炖菜',icon:'🍲'},
  burger:{name:'汉堡',icon:'🍔'},
  bread:{name:'面包',icon:'🍞'},
  meat:{name:'肉类菜肴',icon:'🥩'},
  kebab:{name:'烤串',icon:'🍢'},
  pasta:{name:'意大利面',icon:'🍝'},
  salad:{name:'沙拉和饭类',icon:'🥗'},
  seafood:{name:'海鲜',icon:'🐟'},
  cake:{name:'蛋糕',icon:'🎂'},
  pie:{name:'馅饼',icon:'🥧'},
  pastry:{name:'糕点和甜品',icon:'🧁'},
  pizza:{name:'披萨',icon:'🍕'},
  sandwich:{name:'三明治',icon:'🥪'},
  mexican:{name:'墨西哥菜',icon:'🌮'},
  frozen:{name:'冷冻甜品',icon:'🍨'},
  candy:{name:'糖果',icon:'🍬'},
  side:{name:'配菜',icon:'🍟'},
  ingredient:{name:'基础调料和半成品',icon:'🧪'},
  lizard:{name:'蜥蜴族料理',icon:'🦎'},
  martian:{name:'火星料理',icon:'🌋'},
  moth:{name:'蛾族料理',icon:'🦋'}
};

// Tool labels
var TOOL_LABELS = {
  microwave:'📡 微波炉',
  oven:'🔥 烤箱',
  griddle:'🍳 铁板',
  processor:'⚙️ 食品加工机',
  grinder:'🥤 搅拌机',
  stove:'🍲 灶台/汤锅',
  knife:'🔪 刀具',
  rolling:'🪵 擀面杖',
  crafting:'🔨 合成菜单'
};
