// SS13 厨师手册 - 配方数据和逻辑
// 数据来源: wiki.tgstation13.org/Guide_to_food (翻译版)

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
    {id:'ice_pepper',n:'冰椒',e:'❄️'},
    {id:'nettle',n:'荨麻',e:'🌿'},
    {id:'white_beet',n:'白甜菜',e:'🥣'}
  ],
  fruit: [
    {id:'apple',n:'苹果',e:'🍎'},
    {id:'banana',n:'香蕉',e:'🍌'},
    {id:'lemon',n:'柠檬',e:'🍋'},
    {id:'lime',n:'青柠',e:'🟢'},
    {id:'orange',n:'橙子',e:'🍊'},
    {id:'cherry',n:'樱桃',e:'🍒'},
    {id:'berry',n:'浆果',e:'🫐'},
    {id:'watermelon',n:'西瓜',e:'🍉'}
  ],
  meat: [
    {id:'meat',n:'肉块',e:'🥩'},
    {id:'cutlet',n:'肉片',e:'🥓'},
    {id:'meatball',n:'肉丸',e:'🧆'},
    {id:'chicken',n:'鸡肉',e:'🍗'},
    {id:'fish',n:'鱼排',e:'🐟'},
    {id:'xenomeat',n:'异形肉',e:'👽'},
    {id:'spider_meat',n:'蜘蛛肉',e:'🕷️'}
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
    {id:'rice',n:'米饭碗',e:'🍚'}
  ],
  tool: [
    {id:'microwave',n:'微波炉',e:'📡'},
    {id:'oven',n:'烤箱',e:'🔥'},
    {id:'griddle',n:'铁板',e:'🍳'},
    {id:'processor',n:'食品加工机',e:'⚙️'},
    {id:'grinder',n:'搅拌机',e:'🥤'},
    {id:'crafting',n:'合成菜单',e:'🔨'}
  ]
};

// Recipe format: {n:name, en:englishName, cat:category, tool:toolId,
//   ings:[[tagId, name, emoji, countOr0, unitsIf0], ...], fx:effect, warn:warning}
var RECIPES = [

// ==================== 汤类 & 炖菜 ====================
{n:'毒鹅膏果冻',en:'Amanita Jelly',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,5],['vodka','伏特加','🫗',0,5],['amanita','毒鹅膏','🍄',3]],
  fx:'含有鹅膏毒素和蘑菇致幻剂',warn:'⚠️ 有毒'},

{n:'甜菜汤',en:'Beet Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['white_beet','白甜菜','🥣',1],['cabbage','卷心菜','🥬',1]],
  fx:'含营养素、水分、维生素'},

{n:'血番茄汤',en:'Blood Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['blood_tomato','血番茄','🍅',2]],
  fx:'闻起来像铜的味道'},

{n:'鸡油菌汤',en:'Chantrelle Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,5],['milk','牛奶','🥛',0,5],['chanterelle','鸡油菌','🍄',1]],
  fx:'美味的蘑菇汤'},

{n:'小丑的眼泪',en:"Clown's Tears",cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['banana','香蕉','🍌',1],['clown_mask','小丑面具','🤡',1]],
  fx:'一点都不好笑'},

{n:'冰镇辣汤',en:'Cold Chili',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['meat','肉块','🥩',1],['ice_pepper','冰椒','❄️',1],['tomato','番茄','🍅',1]],
  fx:'几乎不是液体！又冷又辣的汤'},

{n:'异形之眼汤',en:'Eyo Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['potato','土豆','🥔',1],['onion','洋葱','🧅',1],['carrot','胡萝卜','🥕',1],['eye','眼球','👁️',1]],
  fx:'令人不安的异形菜肴'},

{n:'热辣辣椒汤',en:'Hot Chili',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['meat','肉块','🥩',1],['chili','辣椒','🌶️',1],['tomato','番茄','🍅',1]],
  fx:'五级火辣的德州辣椒！'},

{n:'印度咖喱',en:'Indian Curry',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['potato','土豆','🥔',1],['apple','苹果','🍎',1],['rice','米饭碗','🍚',1]],
  fx:'含营养素、水分'},

{n:'肉丸汤',en:'Meatball Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['meatball','肉丸','🧆',1],['carrot','胡萝卜','🥕',1],['potato','土豆','🥔',1]],
  fx:'含营养素、水分'},

{n:'米洛汤',en:'Milo Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['soy_dope','豆棒','🫘',2],['tofu','豆腐','🧈',2]],
  fx:'全宇宙最好喝的汤！'},

{n:'猴子的喜悦',en:"Monkey's Delight",cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['flour','面粉','🌾',0,5],['monkey_cube','猴子立方','🐵',1],['banana','香蕉','🍌',1],['salt','盐','🧂',1],['pepper','胡椒','▪️',1]],
  fx:'香蕉味的猴肉汤和饺子'},

{n:'神秘汤',en:'Mystery Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['bad_recipe','失败配方','💀',1],['tofu','豆腐','🧈',1],['egg','鸡蛋','🥚',1],['cheese','奶酪','🧀',1]],
  fx:'神秘之处在于为什么有人要喝它'},

{n:'荨麻汤',en:'Nettle Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['nettle','荨麻','🌿',1],['boiled_egg','煮鸡蛋','🥚',1],['potato','土豆','🥔',1]],
  fx:'含全效治疗剂(Omnizine)，5+营养素，8+维生素'},

{n:'史莱姆汤',en:'Slime Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['slime_jelly','史莱姆果冻','🟢',0,5]],
  fx:'如果没有水可以用眼泪替代'},

{n:'麻辣豆腐汤',en:'Spicy Tofu Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['tofu','豆腐','🧈',1],['chili','辣椒','🌶️',1],['tomato','番茄','🍅',1]],
  fx:'含营养素、水分'},

{n:'炖菜',en:'Stew',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['tomato','番茄','🍅',1],['meat','肉块','🥩',1],['potato','土豆','🥔',1],['carrot','胡萝卜','🥕',1],['eggplant','茄子','🍆',1],['mushroom','蘑菇','🍄',1]],
  fx:'温暖的炖菜，健康有营养'},

{n:'番茄汤',en:'Tomato Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['tomato','番茄','🍅',2]],
  fx:'喝起来像番茄吸血鬼'},

{n:'战壕汤',en:'Trench Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['potato','土豆','🥔',1],['onion','洋葱','🧅',1],['carrot','胡萝卜','🥕',1],['blood_tomato','血番茄','🍅',1]],
  fx:'含营养素、水分'},

{n:'蔬菜汤',en:'Vegetable Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,10],['carrot','胡萝卜','🥕',1],['corn','玉米','🌽',1],['eggplant','茄子','🍆',1],['potato','土豆','🥔',1]],
  fx:'真正的素食餐'},

{n:'愿望汤',en:'Wish Soup',cat:'soup',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,20]],
  fx:'我希望这是汤'},

// ==================== 汉堡类 ====================
{n:'普通汉堡',en:'Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['cutlet','肉片','🥓',1]],
  fx:'经典汉堡。如果用人类肉会显示受害者名字'},

{n:'大咬汉堡',en:'Big Bite Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['cutlet','肉片','🥓',1],['cutlet','肉片','🥓',1],['cutlet','肉片','🥓',1]],
  fx:'三倍肉的超级汉堡'},

{n:'超级大咬汉堡',en:'Super Bite Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['meat','肉块','🥩',5],['cheese','奶酪','🧀',3],['tomato','番茄','🍅',4],['egg','鸡蛋','🥚',2],['salt','盐','🧂',5],['pepper','胡椒','▪️',5]],
  fx:'两口从饥饿吃到过饱'},

{n:'鲤鱼汉堡',en:'Carp Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['fish','鱼排','🐟',1]],
  fx:'鱼味汉堡'},

{n:'小丑汉堡',en:'Clown Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['clown_mask','小丑面具','🤡',1]],
  fx:'Honk!'},

{n:'哑剧汉堡',en:'Mime Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['mime_beret','哑剧贝雷帽','🎩',1]],
  fx:'......'},

{n:'大脑汉堡',en:'Brain Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['brain','大脑','🧠',1]],
  fx:'让你变聪明（大概吧）'},

{n:'魔法汉堡',en:'Spell Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['wizard_hat','巫师帽','🧙',1]],
  fx:'Ei NATH!'},

{n:'异形汉堡',en:'Xeno Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['xenomeat','异形肉','👽',1]],
  fx:'Hiss!'},

{n:'幽灵汉堡',en:'Ghost Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['ectoplasm',' ectoplasm','👻',1]],
  fx:' Boo!'},

{n:'阑尾汉堡',en:'Appendix Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['appendix','阑尾','🩺',1]],
  fx:'味道你不想知道'},

{n:'豆腐汉堡',en:'Tofu Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['tofu','豆腐','🧈',1]],
  fx:'素食友好'},

{n:'果冻汉堡',en:'Jelly Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['berry_jelly','浆果果冻','🫐',0,5]],
  fx:'甜的汉堡？'},

{n:'机器人汉堡',en:'Roburger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['robot_head','机器人头','🤖',1]],
  fx:'Beep boop'},

{n:'蜘蛛汉堡',en:'Spider Burger',cat:'burger',tool:'crafting',
  ings:[['bun','汉堡胚','🍔',1],['spider_meat','蜘蛛肉','🕷️',1]],
  fx:'八条腿的美味'},

// ==================== 面包类 ====================
{n:'普通面包',en:'Plain Bread',cat:'bread',tool:'oven',
  ings:[['dough','面团','🍞',1]],
  fx:'最基础的面包'},

{n:'汉堡胚',en:'Bun',cat:'bread',tool:'oven',
  ings:[['dough_slice','面团片','🍞',1]],
  fx:'做汉堡用的面包胚'},

{n:'法棍',en:'Baguette',cat:'bread',tool:'oven',
  ings:[['dough_slice','面团片','🍞',2],['salt','盐','🧂',1],['pepper','胡椒','▪️',1]],
  fx:'经典的法式长棍面包'},

{n:'香蕉面包',en:'Banana Bread',cat:'bread',tool:'oven',
  ings:[['dough_slice','面团片','🍞',3],['milk','牛奶','🥛',0,5],['banana','香蕉','🍌',1]],
  fx:'香甜的香蕉面包'},

{n:'奶油芝士面包',en:'Cream Cheese Bread',cat:'bread',tool:'oven',
  ings:[['dough_slice','面团片','🍞',3],['cheese','奶酪','🧀',3],['milk','牛奶','🥛',0,5]],
  fx:'浓郁的芝士风味'},

{n:'肉面包',en:'Meatbread',cat:'bread',tool:'oven',
  ings:[['dough_slice','面团片','🍞',3],['meat','肉块','🥩',3],['cheese','奶酪','🧀',3]],
  fx:'肉食者的天堂'},

{n:'异形肉面包',en:'Xenomeatbread',cat:'bread',tool:'oven',
  ings:[['dough_slice','面团片','🍞',3],['xenomeat','异形肉','👽',3],['cheese','奶酪','🧀',3]],
  fx:'Hiss bread'},

{n:'豆腐面包',en:'Tofubread',cat:'bread',tool:'oven',
  ings:[['dough_slice','面团片','🍞',3],['tofu','豆腐','🧈',3],['cheese','奶酪','🧀',3]],
  fx:'素食者的选择'},

{n:'扁面包',en:'Flatbread',cat:'bread',tool:'oven',
  ings:[['flat_dough','扁面团','🫓',1]],
  fx:'基础扁平面包'},

{n:'披萨面包',en:'Pizza Bread',cat:'bread',tool:'oven',
  ings:[['flat_dough','扁面团','🫓',1]],
  fx:'做披萨的饼底基础'},

// ==================== 肉类菜肴 ====================
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
  ings:[['raw_chicken','生鸡肉','🍗',1]],
  fx:'铁板煎鸡'},

{n:'煮蜘蛛腿',en:'Boiled Spider Leg',cat:'meat',tool:'griddle',
  ings:[['spider_leg','蜘蛛腿','🕷️',1]],
  fx:'八条腿都很好吃'},

{n:'烤月鱼',en:'Grilled Moonfish',cat:'meat',tool:'griddle',
  ings:[['moonfish','月鱼排','🌙',1]],
  fx:'月光般美味的烤鱼'},

// ==================== 意大利面 ====================
{n:'水煮意面',en:'Boiled Spaghetti',cat:'pasta',tool:'microwave',
  ings:[['spaghetti','生意面','🍝',1]],
  fx:'微波炉煮熟的基础意面'},

{n:'肉丸意面',en:'Spaghetti and Meatballs',cat:'pasta',tool:'crafting',
  ings:[['spaghetti_cooked','熟意面','🍝',1],['meatball','肉丸','🧆',2],['tomato_sauce','番茄酱','🍅',1]],
  fx:'经典意大利肉丸意面'},

{n:'番茄意面',en:'Pasta Tomato',cat:'pasta',tool:'crafting',
  ings:[['spaghetti_cooked','熟意面','🍝',1],['tomato','番茄','🍅',2]],
  fx:'简单的番茄意大利面'},

{n:'生牛肉意面',en:'Spaghetti Carpaccio',cat:'pasta',tool:'crafting',
  ings:[['spaghetti_cooked','熟意面','🍝',1],['raw_cutlet','生肉片','🥓',1]],
  fx:'生的！你确定？'},

{n:'中式炒面',en:'Chow Mein',cat:'pasta',tool:'crafting',
  ings:[['spaghetti_cooked','熟意面','🍝',1],['cutlet','肉片','🥓',1],['carrot','胡萝卜','🥕',1],['onion','洋葱','🧅',1]],
  fx:'中西合璧的炒面'},

{n:'太空意面',en:'Spesslaw',cat:'pasta',tool:'crafting',
  ings:[['spaghetti_cooked','熟意面','🍝',1],['meatball','肉丸','🧆',4]],
  fx:'律师的最爱'},

{n:'番茄酱意面',en:'Ketchup Spaghetti',cat:'pasta',tool:'crafting',
  ings:[['spaghetti_cooked','熟意面','🍝',1],['ketchup','番茄酱','🟥',0,5]],
  fx:'简单到极致'},

{n:'芝士通心粉',en:'Mac and Cheese',cat:'pasta',tool:'crafting',
  ings:[['spaghetti_cooked','熟意面','🍝',1],['cheese','奶酪','🧀',2],['milk','牛奶','🥛',0,5]],
  fx:'浓郁芝士味'},

// ==================== 沙拉 ====================
{n:'神沙拉',en:'Aesir Salad',cat:'salad',tool:'crafting',
  ings:[['ambrosia_deus','神之仙馔','🌸',3],['gold_apple','金苹果','✨',1]],
  fx:'可能太美味凡人无法享用'},

{n:'草药沙拉',en:'Herb Salad',cat:'salad',tool:'crafting',
  ings:[['ambrosia','仙馔','🌿',3],['apple','苹果','🍎',1]],
  fx:'含苹果的草药沙拉'},

{n:'有效沙拉',en:'Valid Salad',cat:'salad',tool:'crafting',
  ings:[['ambrosia','仙馔','🌿',3],['potato','土豆','🥔',1],['meatball','肉丸','🧆',1]],
  fx:'就是加了肉丸和土豆的草药沙拉'},

{n:'卷心菜沙拉',en:'Cabbage Salad',cat:'salad',tool:'crafting',
  ings:[['cabbage','卷心菜','🥬',1],['onion','洋葱','🧅',1],['tomato','番茄','🍅',1]],
  fx:'清爽的卷心菜沙拉'},

{n:'综合蔬菜沙拉',en:'Eded Salad',cat:'salad',tool:'crafting',
  ings:[['eggplant','茄子','🍆',1],['carrot','胡萝卜','🥕',1],['apple','苹果','🍎',1],['potato','土豆','🥔',1],['corn','玉米','🌽',1]],
  fx:'五种蔬菜水果的盛宴'},

{n:'燕麦粥',en:'Oatmeal',cat:'salad',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['milk','牛奶','🥛',0,10],['oats','燕麦','🌾',0,5]],
  fx:'温暖养胃的早餐'},

{n:'米饭',en:'Rice Bowl',cat:'salad',tool:'crafting',
  ings:[['bowl','碗','🥣',1],['rice_raw','生米','🍚',0,10],['water','水','💧',0,10]],
  fx:'一碗白米饭'},

{n:'炒饭',en:'Fried Rice',cat:'salad',tool:'crafting',
  ings:[['rice','米饭碗','🍚',1],['egg','鸡蛋','🥚',1],['onion','洋葱','🧅',1]],
  fx:'简单美味的炒饭'},

{n:'猪肉盖饭',en:'Rice and Pork',cat:'salad',tool:'crafting',
  ings:[['rice','米饭碗','🍚',1],['cutlet','肉片','🥓',1],['soy_sauce','酱油','🫗',1]],
  fx:'日式猪肉盖饭'},

// ==================== 海鲜 ====================
{n:'炸鱼薯条',en:'Fish and Chips',cat:'seafood',tool:'crafting',
  ings:[['fish','鱼排','🐟',1],['fries','薯条','🍟',1]],
  fx:'经典的英式炸鱼薯条'},

{n:'鱼柳',en:'Fish Fingers',cat:'seafood',tool:'crafting',
  ings:[['fish','鱼排','🐟',1],['pastry_base','酥皮基底','🥧',3]],
  fx:'裹上面包糠的鱼柳'},

{n:'生鱼片',en:'Sashimi',cat:'seafood',tool:'crafting',
  ings:[['fish','鱼排','🐟',1],['spider_meat','蜘蛛肉','🕷️',1],['soy_sauce','酱油','🫗',0,5]],
  fx:'新鲜切片的刺身'},

{n:'古巴辣鱼',en:'Cuban Carp',cat:'seafood',tool:'crafting',
  ings:[['fish','鱼排','🐟',1],['pastry_base','酥皮基底','🥧',1],['chili','辣椒','🌶️',1]],
  fx:'辣味鱼三明治'},

// ==================== 蛋糕类 ====================
{n:'原味蛋糕',en:'Plain Cake',cat:'cake',tool:'oven',
  ings:[['cake_batter','蛋糕面糊','🎂',1]],
  fx:'基础蛋糕，可切片成5片。面糊=15面粉+6蛋黄+12蛋白+5糖'},

{n:'苹果蛋糕',en:'Apple Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['apple','苹果','🍎',2]],
  fx:'香甜的苹果蛋糕'},

{n:'生日蛋糕',en:'Birthday Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['cake_hat','生日帽','🎉',1]],
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
  ings:[['plain_cake','原味蛋糕','🎂',1],['slime_jelly','史莱姆果冻','🟢',0,5]],
  fx:'果冻般的口感'},

{n:'黑莓蛋糕',en:'Blackberry Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['blackberry','黑莓','🫐',2]],
  fx:'深色浆果蛋糕'},

{n:'蓝莓蛋糕',en:'Blueberry Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['blueberry','蓝莓','🔵',2]],
  fx:'蓝色浆果蛋糕'},

{n:'樱桃蛋糕',en:'Cherry Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['cherry','樱桃','🍒',2]],
  fx:'樱桃味蛋糕'},

{n:'白蛋糕',en:'White Cake',cat:'cake',tool:'crafting',
  ings:[['plain_cake','原味蛋糕','🎂',1],['sugar','糖','🍬',0,5]],
  fx:'雪白的甜蜜'},

// ==================== 馅饼 ====================
{n:'原味派',en:'Plain Pie',cat:'pie',tool:'oven',
  ings:[['pie_dough','派面团','🥧',1]],
  fx:'基础派皮。用擀面杖擀蛋糕面糊制成'},

{n:'毒鹅膏派',en:'Amanita Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['amanita','毒鹅膏','🍄',1]],
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

{n:'南瓜派',en:'Pumpkin Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['pumpkin','南瓜','🎃',1],['milk','牛奶','🥛',0,5],['sugar','糖','🍬',0,5],['egg','鸡蛋','🥚',3]],
  fx:'感恩节必备'},

{n:'豆腐派',en:'Tofu Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['tofu','豆腐','🧈',1]],
  fx:'素食派的代表'},

{n:'异形肉派',en:'Xeno-Pie',cat:'pie',tool:'crafting',
  ings:[['plain_pie','原味派','🥧',1],['xenomeat','异形肉','👽',1]],
  fx:'Hiss pie'},

// ==================== 糕点类 ====================
{n:'甜甜圈',en:'Donut',cat:'pastry',tool:'oven',
  ings:[['pastry_base','酥皮基底','🧁',1],['sugar','糖','🍬',1]],
  fx:'经典甜甜圈'},

{n:'果冻甜甜圈',en:'Jelly Donut',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['sugar','糖','🍬',1],['berry_jelly','浆果果冻','🫐',0,5]],
  fx:'带果冻夹心的甜甜圈'},

{n:'混沌甜甜圈',en:'Chaos Donut',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['sugar','糖','🍬',1],['frost_oil','冰霜油','❄️',0,5],['capsaicin_oil','辣椒素油','🔥',0,5]],
  fx:'每次味道都不同',warn:'⚠️ 效果随机'},

{n:'华夫饼',en:'Waffles',cat:'pastry',tool:'oven',
  ings:[['dough_slice','面团片','🍞',2]],
  fx:'得3份，松软的华夫饼'},

{n:'迷幻华夫饼',en:'Roffle Waffles',cat:'pastry',tool:'oven',
  ings:[['dough_slice','面团片','🍞',2],['mushroom_hallucinogen','蘑菇致幻剂','🍄',0,5]],
  fx:'吃了会看到奇怪的东西',warn:'⚠️ 致幻'},

{n:'口袋饼',en:'Donk-pocket',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['meatball','肉丸','🧆',1]],
  fx:'经典口袋饼'},

{n:'小丑口袋饼',en:'Honk-pocket',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['meatball','肉丸','🧆',1],['banana_juice','香蕉汁','🍌',0,5]],
  fx:'Honk!'},

{n:'BBQ口袋饼',en:'BBQ Donk-pocket',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['meatball','肉丸','🧆',1],['bbq_sauce','BBQ酱','🟤',0,5]],
  fx:'烟熏BBQ味'},

{n:'辣味口袋饼',en:'Spicy Donk-pocket',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['meatball','肉丸','🧆',1],['capsaicin_oil','辣椒素油','🔥',0,5]],
  fx:'辣到飞起'},

{n:'芝士口袋饼',en:'Cheese Donk-pocket',cat:'pastry',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['meatball','肉丸','🧆',1],['cheese','奶酪','🧀',1]],
  fx:'芝士爆浆'},

{n:'糖苹果',en:'Candied Apple',cat:'pastry',tool:'microwave',
  ings:[['apple','苹果','🍎',1],['sugar','糖','🍬',0,5],['water','水','💧',0,5]],
  fx:'焦糖裹苹果'},

{n:'巧克力蛋',en:'Chocolate Egg',cat:'pastry',tool:'microwave',
  ings:[['egg','鸡蛋','🥚',1],['chocolate','巧克力棒','🍫',1]],
  fx:'巧克力包裹的蛋'},

{n:'糖曲奇',en:'Sugar Cookie',cat:'pastry',tool:'microwave',
  ings:[['dough_slice','面团片','🍞',1],['sugar','糖','🍬',0,5],['egg','鸡蛋','🥚',1]],
  fx:'甜甜的曲奇饼干'},

{n:'松饼',en:'Muffin',cat:'pastry',tool:'microwave',
  ings:[['dough_slice','面团片','🍞',1],['milk','牛奶','🥛',0,5],['egg','鸡蛋','🥚',1]],
  fx:'松软的松饼'},

{n:'浆果松饼',en:'Berry Muffin',cat:'pastry',tool:'microwave',
  ings:[['dough_slice','面团片','🍞',1],['milk','牛奶','🥛',0,5],['egg','鸡蛋','🥚',1],['berry','浆果','🫐',1]],
  fx:'含浆果的松饼'},

{n:'金苹果酥皮塔',en:'Golden Apple Streusel Tart',cat:'pastry',tool:'microwave',
  ings:[['pastry_base','酥皮基底','🧁',3],['egg','鸡蛋','🥚',1],['gold_apple','金苹果','✨',1],['sugar','糖','🍬',0,5],['milk','牛奶','🥛',0,5]],
  fx:'华丽的水果塔'},

{n:'幸运曲奇',en:'Fortune Cookie',cat:'pastry',tool:'microwave',
  ings:[['dough_slice','面团片','🍞',1],['sugar','糖','🍬',0,5],['paper','纸','📄',1]],
  fx:'里面藏着命运的预言'},

{n:'爆米花',en:'Popcorn',cat:'pastry',tool:'microwave',
  ings:[['corn','玉米','🌽',1]],
  fx:'微波炉爆米花！简单又好吃'},

{n:'蒸蛋',en:'Chawanmushi',cat:'pastry',tool:'microwave',
  ings:[['bowl','碗','🥣',1],['water','水','💧',0,5],['soy_sauce','酱油','🫗',0,5],['egg','鸡蛋','🥚',2],['chanterelle','鸡油菌','🍄',1]],
  fx:'日式蒸蛋碗'},

{n:'茄子帕玛森',en:'Eggplant Parmigiana',cat:'pastry',tool:'microwave',
  ings:[['eggplant','茄子','🍆',1],['cheese','奶酪','🧀',2]],
  fx:'意式烤茄子'},

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

{n:'意面披萨',en:'Spaghetti Pizza',cat:'pizza',tool:'crafting',
  ings:[['pizza_bread','披萨饼底','🍕',1],['spaghetti_cooked','熟意面','🍝',1]],
  fx:'披萨上面放意面...创意料理'},

{n:'口袋披萨',en:'Donk Pizza',cat:'pizza',tool:'crafting',
  ings:[['pizza_bread','披萨饼底','🍕',1],['donk_pocket','口袋饼','🧁',1]],
  fx:'披萨上面放口袋饼...更创意了'},

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
{n:'墨西哥卷饼',en:'Taco',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['cutlet','肉片','🥓',1],['cheese','奶酪','🧀',1]],
  fx:'经典墨西哥卷饼'},

{n:'墨西哥卷',en:'Burrito',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['meatball','肉丸','🧆',1],['onion','洋葱','🧅',1]],
  fx:'墨西哥大卷'},

{n:'油条',en:'Churro',cat:'mexican',tool:'crafting',
  ings:[['pastry_base','酥皮基底','🧁',1],['sugar','糖','🍬',1]],
  fx:'撒糖的油炸面食'},

{n:'芝士玉米片',en:'Nachos',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['cheese','奶酪','🧀',1],['salt','盐','🧂',1]],
  fx:'芝士玉米片'},

{n:'辣味玉米片',en:'Cuban Nachos',cat:'mexican',tool:'crafting',
  ings:[['tortilla','墨西哥饼皮','🫓',1],['chili','辣椒','🌶️',2]],
  fx:'辣味玉米片'},

// ==================== 配菜 ====================
{n:'煮鸡蛋',en:'Boiled Egg',cat:'side',tool:'microwave',
  ings:[['egg','鸡蛋','🥚',1]],
  fx:'微波炉煮鸡蛋'},

{n:'煎蛋',en:'Fried Egg',cat:'side',tool:'microwave',
  ings:[['egg','鸡蛋','🥚',1],['salt','盐','🧂',1],['pepper','胡椒','▪️',1]],
  fx:'简单的煎蛋'},

{n:'芝士蛋卷',en:'Omelette du Fromage',cat:'side',tool:'microwave',
  ings:[['egg','鸡蛋','🥚',2],['cheese','奶酪','🧀',2]],
  fx:'Dexter的实验室同款'},

{n:'芝士薯条',en:'Cheesy Fries',cat:'side',tool:'crafting',
  ings:[['fries','薯条','🍟',1],['cheese','奶酪','🧀',1]],
  fx:'芝士淋薯条'},

{n:'芝士焗土豆',en:'Loaded Baked Potato',cat:'side',tool:'microwave',
  ings:[['potato','土豆','🥔',1],['cheese','奶酪','🧀',1]],
  fx:'微波炉芝士焗土豆'},

{n:'馅料',en:'Stuffing',cat:'side',tool:'microwave',
  ings:[['bread','面包片','🍞',1],['water','水','💧',0,5],['salt','盐','🧂',1],['pepper','胡椒','▪️',1]],
  fx:'面包做的馅料'},

{n:'洋葱圈',en:'Onion Rings',cat:'side',tool:'microwave',
  ings:[['onion_slice','洋葱圈','🧅',1]],
  fx:'微波炉洋葱圈'},

// ==================== 基础调料/原料 ====================
{n:'面粉',en:'Flour',cat:'ingredient',tool:'grinder',
  ings:[['wheat','小麦','🌾',1]],
  fx:'研磨小麦获得，制作面团的原料'},

{n:'糖',en:'Sugar',cat:'ingredient',tool:'grinder',
  ings:[['white_beet','白甜菜','🥣',1]],
  fx:'研磨白甜菜或甘蔗获得'},

{n:'盐',en:'Salt',cat:'ingredient',tool:'grinder',
  ings:[['sodium','钠','🧪',1],['chlorine','氯','🧪',1],['water','水','💧',0,1]],
  fx:'钠+氯+水混合'},

{n:'胡椒',en:'Pepper',cat:'ingredient',tool:'grinder',
  ings:[['pepper_mill','胡椒研磨器','🫙',1]],
  fx:'研磨胡椒获得'},

{n:'豆奶',en:'Soy Milk',cat:'ingredient',tool:'grinder',
  ings:[['soy_dope','豆棒','🫘',0,10],['water','水','💧',0,1]],
  fx:'豆棒加水混合'},

{n:'酱油',en:'Soy Sauce',cat:'ingredient',tool:'grinder',
  ings:[['soy_milk','豆奶','🥛',0,40],['sulphuric_acid','硫酸','🧪',0,10]],
  fx:'豆奶+硫酸（小心！）'},

{n:'辣酱',en:'Hot Sauce',cat:'ingredient',tool:'grinder',
  ings:[['chili','辣椒','🌶️',1]],
  fx:'研磨辣椒获得'},

{n:'番茄酱',en:'Ketchup',cat:'ingredient',tool:'grinder',
  ings:[['tomato','番茄','🍅',1]],
  fx:'研磨番茄获得'},

{n:'奶酪轮',en:'Cheese Wheel',cat:'ingredient',tool:'grinder',
  ings:[['milk','牛奶','🥛',0,40],['enzyme','通用酶','⚗️',0,5]],
  fx:'牛奶+通用酶（催化剂），可切出奶酪块'},

{n:'巧克力棒',en:'Chocolate Bar',cat:'ingredient',tool:'grinder',
  ings:[['coco_powder','可可粉','🟤',2],['milk','牛奶','🥛',0,2],['sugar','糖','🍬',2]],
  fx:'可可粉+牛奶+糖混合'},

{n:'豆腐',en:'Tofu',cat:'ingredient',tool:'grinder',
  ings:[['soy_milk','豆奶','🥛',0,10],['enzyme','通用酶','⚗️',0,5]],
  fx:'豆奶+通用酶（催化剂）'},

{n:'黄油',en:'Butter',cat:'ingredient',tool:'grinder',
  ings:[['milk','牛奶','🥛',0,15]],
  fx:'牛奶加工获得'},

{n:'蛋黄酱',en:'Mayonnaise',cat:'ingredient',tool:'grinder',
  ings:[['egg_yolk','蛋黄','🥚',1]],
  fx:'研磨蛋黄获得'},

{n:'樱桃果冻',en:'Cherry Jelly',cat:'ingredient',tool:'grinder',
  ings:[['cherry','樱桃','🍒',1]],
  fx:'研磨樱桃获得'},

{n:'面团',en:'Dough',cat:'ingredient',tool:'grinder',
  ings:[['flour','面粉','🌾',0,15],['water','水','💧',0,10]],
  fx:'面粉+水混合，面包的基础'},

{n:'蛋糕面糊',en:'Cake Batter',cat:'ingredient',tool:'grinder',
  ings:[['flour','面粉','🌾',0,15],['egg_yolk','蛋黄','🥚',0,6],['egg_white','蛋白','⚪',0,12],['sugar','糖','🍬',0,5]],
  fx:'烤箱烘焙成原味蛋糕'},

{n:'煎饼糊',en:'Pancake Batter',cat:'ingredient',tool:'grinder',
  ings:[['egg_yolk','蛋黄','🥚',0,6],['egg_white','蛋白','⚪',0,12],['milk','牛奶','🥛',0,10],['flour','面粉','🌾',0,5]],
  fx:'得15单位，铁板煎成煎饼'},

{n:'肉汁',en:'Gravy',cat:'ingredient',tool:'grinder',
  ings:[['nutriment','营养素','💊',1],['flour','面粉','🌾',1],['milk','牛奶','🥛',1]],
  fx:'营养素+面粉+牛奶混合'},

// ==================== 半成品加工 ====================
{n:'生肉丸',en:'Raw Meatball',cat:'ingredient',tool:'processor',
  ings:[['meat','肉块','🥩',1]],
  fx:'食品加工机将肉块加工为生肉丸'},

{n:'生肉片',en:'Raw Cutlet',cat:'ingredient',tool:'processor',
  ings:[['meat','肉块','🥩',1]],
  fx:'刀切肉块，得3个生肉片'},

{n:'生培根',en:'Raw Bacon',cat:'ingredient',tool:'processor',
  ings:[['raw_cutlet','生肉片','🥓',1]],
  fx:'食品加工机将生肉片加工为生培根'},

{n:'生肉饼',en:'Raw Patty',cat:'ingredient',tool:'processor',
  ings:[['raw_meatball','生肉丸','🧆',1]],
  fx:'用擀面杖将生肉丸擀成肉饼'},

{n:'生香肠',en:'Raw Sausage',cat:'ingredient',tool:'crafting',
  ings:[['raw_meatball','生肉丸','🧆',1],['raw_cutlet','生肉片','🥓',2]],
  fx:'肉丸+肉片合成生香肠'},

{n:'薯条',en:'Fries',cat:'ingredient',tool:'processor',
  ings:[['potato','土豆','🥔',1]],
  fx:'食品加工机将土豆加工为薯条'},

{n:'意大利面',en:'Spaghetti',cat:'ingredient',tool:'processor',
  ings:[['dough','面团','🍞',1]],
  fx:'食品加工机将面团加工为生意面'},

{n:'墨西哥饼皮',en:'Tortilla',cat:'ingredient',tool:'processor',
  ings:[['corn','玉米','🌽',1]],
  fx:'食品加工机将玉米加工为饼皮'},

{n:'生酥皮基底',en:'Raw Pastry Base',cat:'ingredient',tool:'processor',
  ings:[['pie_dough','派面团','🥧',1]],
  fx:'刀切派面团，得3个。烤箱烘焙为酥皮基底'},

{n:'面团片',en:'Dough Slice',cat:'ingredient',tool:'processor',
  ings:[['dough','面团','🍞',1]],
  fx:'刀切面团获得'},

{n:'扁面团',en:'Flat Dough',cat:'ingredient',tool:'processor',
  ings:[['dough','面团','🍞',1]],
  fx:'用擀面杖擀面团获得，烤箱烘焙成披萨饼底'},

{n:'派面团',en:'Pie Dough',cat:'ingredient',tool:'processor',
  ings:[['cake_batter','蛋糕面糊','🎂',1]],
  fx:'用擀面杖擀蛋糕面糊，烤箱烘焙成原味派'}

];

// Category labels
var CAT_LABELS = {
  soup:{name:'汤类和炖菜',icon:'🍲'},
  burger:{name:'汉堡',icon:'🍔'},
  bread:{name:'面包',icon:'🍞'},
  meat:{name:'肉类菜肴',icon:'🥩'},
  pasta:{name:'意大利面',icon:'🍝'},
  salad:{name:'沙拉和饭类',icon:'🥗'},
  seafood:{name:'海鲜',icon:'🐟'},
  cake:{name:'蛋糕',icon:'🎂'},
  pie:{name:'馅饼',icon:'🥧'},
  pastry:{name:'糕点和甜品',icon:'🧁'},
  pizza:{name:'披萨',icon:'🍕'},
  sandwich:{name:'三明治',icon:'🥪'},
  mexican:{name:'墨西哥菜',icon:'🌮'},
  side:{name:'配菜',icon:'🍟'},
  ingredient:{name:'基础调料和半成品',icon:'🧪'}
};

// Tool labels
var TOOL_LABELS = {
  microwave:'📡 微波炉',
  oven:'🔥 烤箱',
  griddle:'🍳 铁板',
  processor:'⚙️ 食品加工机',
  grinder:'🥤 搅拌机',
  crafting:'🔨 合成菜单'
};

// ==================== 应用逻辑 ====================
(function() {
  'use strict';

  // State
  var selectedTags = {}; // {tagId: true}
  var matchMode = 'fuzzy';
  var activeCat = 'all';
  var searchQuery = '';

  // Init tags
  function initTags() {
    var groups = [
      {key: 'veg', containerId: 'vegTags', countId: 'vegCount', data: TAGS.veg, cssClass: 'tag-green'},
      {key: 'fruit', containerId: 'fruitTags', countId: 'fruitCount', data: TAGS.fruit, cssClass: 'tag-pink'},
      {key: 'meat', containerId: 'meatTags', countId: 'meatCount', data: TAGS.meat, cssClass: 'tag-yellow'},
      {key: 'basic', containerId: 'basicTags', countId: 'basicCount', data: TAGS.basic, cssClass: 'tag-gray'},
      {key: 'tool', containerId: 'toolTags', countId: 'toolCount', data: TAGS.tool, cssClass: 'tag-blue'}
    ];

    groups.forEach(function(g) {
      var container = document.getElementById(g.containerId);
      g.data.forEach(function(tag) {
        var el = document.createElement('span');
        el.className = 'tag ' + g.cssClass;
        el.dataset.id = tag.id;
        el.innerHTML = '<span class="tag-emoji">' + tag.e + '</span>' + tag.n;
        el.addEventListener('click', function() {
          toggleTag(tag.id, el, g.cssClass, g.countId);
        });
        container.appendChild(el);
      });
      document.getElementById(g.countId).textContent = '0/' + g.data.length;
    });
  }

  function toggleTag(id, el, cssClass, countId) {
    if (selectedTags[id]) {
      delete selectedTags[id];
      el.classList.remove('active');
    } else {
      selectedTags[id] = true;
      el.classList.add('active');
    }
    updateCount(countId);
    renderResults();
  }

  function updateCount(countId) {
    var el = document.getElementById(countId);
    var parent = el.parentElement;
    var total = parent.parentElement.querySelectorAll('.tag').length;
    var active = parent.parentElement.querySelectorAll('.tag.active').length;
    el.textContent = active + '/' + total;
  }

  // Mode
  window.setMode = function(btn) {
    document.querySelectorAll('.mode-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    matchMode = btn.dataset.mode;
    renderResults();
  };

  // Category
  window.setCat = function(btn) {
    document.querySelectorAll('.cat-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    renderResults();
  };

  // Search
  document.getElementById('searchInput').addEventListener('input', function(e) {
    searchQuery = e.target.value.trim().toLowerCase();
    renderResults();
  });

  // Clear all
  window.clearAll = function() {
    selectedTags = {};
    document.querySelectorAll('.tag.active').forEach(function(t) { t.classList.remove('active'); });
    ['vegCount', 'fruitCount', 'meatCount', 'basicCount', 'toolCount'].forEach(function(id) {
      updateCount(id);
    });
    document.getElementById('searchInput').value = '';
    searchQuery = '';
    renderResults();
  };

  // Filter logic
  function filterRecipes() {
    var selectedIds = Object.keys(selectedTags);
    var selectedTools = selectedIds.filter(function(id) {
      return TAGS.tool.some(function(t) { return t.id === id; });
    });
    var selectedIngs = selectedIds.filter(function(id) {
      return !TAGS.tool.some(function(t) { return t.id === id; });
    });

    var results = RECIPES.filter(function(r) {
      // Category filter
      if (activeCat !== 'all' && r.cat !== activeCat) return false;

      // Search filter
      if (searchQuery) {
        var q = searchQuery;
        var nameMatch = r.n.toLowerCase().indexOf(q) !== -1 ||
                       r.en.toLowerCase().indexOf(q) !== -1;
        var ingMatch = r.ings.some(function(ing) {
          return ing[1].toLowerCase().indexOf(q) !== -1;
        });
        if (!nameMatch && !ingMatch) return false;
      }

      // Ingredient/tool filter
      if (selectedIds.length === 0 && !searchQuery) return false;

      // Tool match
      if (selectedTools.length > 0 && selectedTools.indexOf(r.tool) === -1) return false;

      // Ingredient match
      if (selectedIngs.length === 0) return true;

      var recipeIngIds = r.ings.map(function(ing) { return ing[0]; });

      if (matchMode === 'fuzzy') {
        return selectedIngs.some(function(sid) {
          return recipeIngIds.indexOf(sid) !== -1;
        });
      } else if (matchMode === 'strict') {
        return selectedIngs.every(function(sid) {
          return recipeIngIds.indexOf(sid) !== -1;
        });
      } else if (matchMode === 'survival') {
        return selectedIngs.some(function(sid) {
          return recipeIngIds.indexOf(sid) !== -1;
        });
      }
      return true;
    });

    // Survival mode: sort by ingredient count (fewest first)
    if (matchMode === 'survival') {
      results.sort(function(a, b) {
        return a.ings.length - b.ings.length;
      });
    }

    return results;
  }

  // Render
  function renderResults() {
    var container = document.getElementById('resultsList');
    var countEl = document.getElementById('resultsCount');
    var results = filterRecipes();
    countEl.textContent = results.length + ' 个结果';

    if (results.length === 0) {
      var hasInput = Object.keys(selectedTags).length > 0 || searchQuery;
      if (hasInput) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">😔</div><p>没有找到匹配的配方，试试调整条件吧~</p></div>';
      } else {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">🍳</div><p>选择食材或工具开始查找配方吧~</p></div>';
      }
      return;
    }

    // Group by category
    var groups = {};
    results.forEach(function(r) {
      if (!groups[r.cat]) groups[r.cat] = [];
      groups[r.cat].push(r);
    });

    var html = '';
    var catOrder = ['soup','burger','bread','meat','pasta','salad','seafood','cake','pie','pastry','pizza','sandwich','mexican','side','ingredient'];
    var selectedIngs = Object.keys(selectedTags).filter(function(id) {
      return !TAGS.tool.some(function(t) { return t.id === id; });
    });

    catOrder.forEach(function(cat) {
      if (!groups[cat]) return;
      var label = CAT_LABELS[cat];
      html += '<div class="recipe-group">';
      html += '<div class="group-header"><span class="group-icon">' + label.icon + '</span>' + label.name + '</div>';

      groups[cat].forEach(function(r, idx) {
        var matchedIngs = r.ings.filter(function(ing) {
          return selectedIngs.indexOf(ing[0]) !== -1;
        });

        // Ingredient chips (show max 6)
        var chipsHtml = '';
        var showCount = Math.min(r.ings.length, 6);
        for (var i = 0; i < showCount; i++) {
          var ing = r.ings[i];
          var isMatched = selectedIngs.indexOf(ing[0]) !== -1;
          var ingText = ing[1];
          if (ing[3] > 0) {
            ingText = (ing[3] > 1 ? ing[3] + 'x ' : '') + ingText;
          } else if (ing[4] !== undefined) {
            ingText = ing[4] + 'u ' + ingText;
          }
          chipsHtml += '<span class="ingredient-chip' + (isMatched ? ' matched' : '') + '"><span class="chip-emoji">' + ing[2] + '</span>' + ingText + '</span>';
        }
        if (r.ings.length > 6) {
          chipsHtml += '<span class="ingredient-chip">+' + (r.ings.length - 6) + '...</span>';
        }

        var toolLabel = TOOL_LABELS[r.tool] || r.tool;
        var warnHtml = r.warn ? ' <span style="color:var(--accent2);font-style:normal;font-weight:600">' + r.warn + '</span>' : '';
        var fxHtml = r.fx ? '<span class="recipe-effect">' + r.fx + '</span>' : '';

        // Detail ingredients
        var detailIngsHtml = '';
        r.ings.forEach(function(ing) {
          var isMatched = selectedIngs.indexOf(ing[0]) !== -1;
          var ingText = ing[1];
          if (ing[3] > 0) {
            ingText = (ing[3] > 1 ? ing[3] + 'x ' : '') + ingText;
          } else if (ing[4] !== undefined) {
            ingText = ing[4] + 'u ' + ingText;
          }
          detailIngsHtml += '<span class="ing-item' + (isMatched ? ' matched' : '') + '">' + ing[2] + ' ' + ingText + '</span>';
        });

        html += '<div class="recipe-card" onclick="toggleCard(this)">';
        html += '<div class="recipe-card-header">';
        html += '<div class="recipe-name"><span class="name-cn">' + r.n + '</span><span class="name-en">' + r.en + '</span></div>';
        html += '<span class="expand-indicator">▼</span>';
        html += '</div>';
        html += '<div class="recipe-ingredients-inline">' + chipsHtml + '</div>';
        html += '<div class="recipe-meta"><span class="recipe-tool">' + toolLabel + '</span>' + fxHtml + warnHtml + '</div>';
        html += '<div class="recipe-detail">';
        html += '<div class="detail-row"><span class="detail-label">完整食材</span><span class="detail-value"><div class="ing-list">' + detailIngsHtml + '</div></span></div>';
        html += '<div class="detail-row"><span class="detail-label">制作工具</span><span class="detail-value">' + toolLabel + '</span></div>';
        if (r.fx) html += '<div class="detail-row"><span class="detail-label">效果</span><span class="detail-value">' + r.fx + warnHtml + '</span></div>';
        html += '</div></div>';
      });

      html += '</div>';
    });

    container.innerHTML = html;
  }

  // Toggle card expand
  window.toggleCard = function(el) {
    el.classList.toggle('expanded');
  };

  // FAQ toggle
  window.toggleFaq = function(el) {
    el.parentElement.classList.toggle('open');
  };

  // ===== Guide Search =====
  var guideSearchInput = document.getElementById('guideSearchInput');
  var guideSearchResults = document.getElementById('guideSearchResults');
  var guideSearchCount = document.getElementById('guideSearchCount');
  var guideContent = document.getElementById('guideContent');
  var guideSearchSection = document.getElementById('guideSearchSection');

  guideSearchInput.addEventListener('input', function() {
    var q = this.value.trim().toLowerCase();
    if (!q) {
      guideSearchResults.style.display = 'none';
      guideSearchCount.style.display = 'none';
      guideContent.style.display = 'block';
      return;
    }
    guideContent.style.display = 'none';
    guideSearchResults.style.display = 'block';
    guideSearchCount.style.display = 'block';

    var results = RECIPES.filter(function(r) {
      if (r.n.toLowerCase().indexOf(q) !== -1) return true;
      if (r.en.toLowerCase().indexOf(q) !== -1) return true;
      return r.ings.some(function(ing) {
        return ing[1].toLowerCase().indexOf(q) !== -1 ||
               ing[0].toLowerCase().indexOf(q) !== -1;
      });
    });

    // Also search in tag/ingredient list
    var matchedTags = [];
    var allTagGroups = [TAGS.veg, TAGS.fruit, TAGS.meat, TAGS.basic, TAGS.tool];
    var tagGroupNames = ['蔬菜', '水果', '肉类', '基础原料', '厨具'];
    allTagGroups.forEach(function(group, gi) {
      group.forEach(function(t) {
        if (t.n.toLowerCase().indexOf(q) !== -1 || t.id.toLowerCase().indexOf(q) !== -1) {
          matchedTags.push({tag: t, group: tagGroupNames[gi]});
        }
      });
    });

    guideSearchCount.innerHTML = '找到 <b>' + (results.length + matchedTags.length) + '</b> 个结果（<b>' + results.length + '</b> 个配方，<b>' + matchedTags.length + '</b> 个食材）';

    var html = '';

    // Show matching ingredients first
    if (matchedTags.length > 0) {
      html += '<div class="group-header"><span class="group-icon">🏷️</span>匹配食材</div>';
      matchedTags.forEach(function(m) {
        html += '<div class="guide-result-item">';
        html += '<div class="guide-result-header">';
        html += '<span class="guide-result-name">' + m.tag.e + ' ' + m.tag.n + '</span>';
        html += '<span class="guide-result-cat">' + m.group + '</span>';
        html += '</div>';
        html += '<div class="guide-result-fx">ID: ' + m.tag.id + '</div>';
        html += '</div>';
      });
    }

    // Show matching recipes
    if (results.length > 0) {
      html += '<div class="group-header" style="margin-top:12px"><span class="group-icon">🍽️</span>匹配配方</div>';
      results.forEach(function(r) {
        var catLabel = CAT_LABELS[r.cat] || {name: r.cat, icon: '📋'};
        var toolLabel = TOOL_LABELS[r.tool] || r.tool;
        var ingsHtml = r.ings.slice(0, 5).map(function(ing) {
          return '<span class="guide-result-ing">' + ing[2] + ' ' + ing[1] + '</span>';
        }).join('');
        if (r.ings.length > 5) ingsHtml += '<span class="guide-result-ing">+' + (r.ings.length - 5) + '</span>';

        html += '<div class="guide-result-item" onclick="toggleGuideCard(this)">';
        html += '<div class="guide-result-header">';
        html += '<span class="guide-result-name">' + r.n + '<span class="grn-en">' + r.en + '</span></span>';
        html += '<span class="guide-result-cat">' + catLabel.icon + ' ' + catLabel.name + '</span>';
        html += '</div>';
        html += '<div class="guide-result-ings">' + ingsHtml + '</div>';
        html += '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">';
        html += '<span class="guide-result-tool">' + toolLabel + '</span>';
        if (r.fx) html += '<span class="guide-result-fx">' + r.fx + '</span>';
        html += '</div>';
        html += '</div>';
      });
    }

    if (results.length === 0 && matchedTags.length === 0) {
      html = '<div class="empty-state"><div class="empty-icon">🔍</div><p>没有找到匹配的食材或配方</p></div>';
    }

    guideSearchResults.innerHTML = html;
  });

  window.toggleGuideCard = function(el) {
    el.classList.toggle('expanded');
  };

  // Page switch
  window.switchPage = function(page, btn) {
    document.querySelectorAll('.page-view').forEach(function(p) { p.classList.remove('active'); });
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(function(n) { n.classList.remove('active'); });
    btn.classList.add('active');
    window.scrollTo(0, 0);
  };

  // Random recipe
  window.randomRecipe = function() {
    var container = document.getElementById('randomResult');
    var count = 3;
    var shuffled = RECIPES.filter(function(r) { return r.cat !== 'ingredient'; }).sort(function() { return 0.5 - Math.random(); });
    var picks = shuffled.slice(0, count);
    var html = '';
    picks.forEach(function(r) {
      var emojis = r.ings.slice(0, 4).map(function(ing) { return ing[2]; }).join(' ');
      html += '<div class="random-card">' + emojis + ' ' + r.n + '</div>';
    });
    container.innerHTML = html;
  };

  // Theme toggle (simple)
  document.getElementById('themeToggle').addEventListener('click', function() {
    var btn = this;
    if (btn.textContent === '🌙') {
      document.documentElement.style.setProperty('--bg', '#1a1a2e');
      document.documentElement.style.setProperty('--bg2', '#16213e');
      document.documentElement.style.setProperty('--ink', '#e0e0e0');
      document.documentElement.style.setProperty('--muted', '#9e9e9e');
      document.documentElement.style.setProperty('--rule', '#333355');
      document.documentElement.style.setProperty('--tag-green-bg', '#1b3a1b');
      document.documentElement.style.setProperty('--tag-green-border', '#2E7D32');
      document.documentElement.style.setProperty('--tag-pink-bg', '#3a1b2a');
      document.documentElement.style.setProperty('--tag-pink-border', '#e53935');
      document.documentElement.style.setProperty('--tag-yellow-bg', '#3a2e1b');
      document.documentElement.style.setProperty('--tag-yellow-border', '#ff8f00');
      document.documentElement.style.setProperty('--tag-gray-bg', '#1e2a30');
      document.documentElement.style.setProperty('--tag-gray-border', '#546e7a');
      document.documentElement.style.setProperty('--tag-blue-bg', '#1b2a3a');
      document.documentElement.style.setProperty('--tag-blue-border', '#1565c0');
      document.documentElement.style.setProperty('--tag-purple-bg', '#2a1b3a');
      document.documentElement.style.setProperty('--tag-purple-border', '#7b1fa2');
      document.documentElement.style.setProperty('--card-shadow', '0 1px 3px rgba(0,0,0,.3)');
      document.documentElement.style.setProperty('--card-shadow-hover', '0 4px 12px rgba(0,0,0,.4)');
      document.querySelector('.hero').style.background = 'linear-gradient(135deg,#1b3a1b 0%,#2e2a1b 50%,#3a1b2a 100%)';
      document.querySelector('.top-nav').style.background = 'rgba(22,33,62,.92)';
      document.querySelector('.bottom-nav').style.background = 'rgba(22,33,62,.95)';
      document.querySelector('.search-bar').style.background = '#16213e';
      document.querySelector('.search-bar').style.color = '#e0e0e0';
      document.querySelector('.search-bar').style.borderColor = '#333355';
      document.querySelector('.guide-search-bar').style.background = '#16213e';
      document.querySelector('.guide-search-bar').style.color = '#e0e0e0';
      document.querySelector('.guide-search-bar').style.borderColor = '#333355';
      document.querySelector('.guide-search-section').style.background = '#1a1a2e';
      btn.textContent = '☀️';
    } else {
      document.documentElement.style.setProperty('--bg', '#f8f9fa');
      document.documentElement.style.setProperty('--bg2', '#ffffff');
      document.documentElement.style.setProperty('--ink', '#1a1a2e');
      document.documentElement.style.setProperty('--muted', '#6b7280');
      document.documentElement.style.setProperty('--rule', '#e5e7eb');
      document.documentElement.style.setProperty('--tag-green-bg', '#e8f5e9');
      document.documentElement.style.setProperty('--tag-green-border', '#4caf50');
      document.documentElement.style.setProperty('--tag-pink-bg', '#fce4ec');
      document.documentElement.style.setProperty('--tag-pink-border', '#e91e63');
      document.documentElement.style.setProperty('--tag-yellow-bg', '#fff8e1');
      document.documentElement.style.setProperty('--tag-yellow-border', '#ffa000');
      document.documentElement.style.setProperty('--tag-gray-bg', '#eceff1');
      document.documentElement.style.setProperty('--tag-gray-border', '#90a4ae');
      document.documentElement.style.setProperty('--tag-blue-bg', '#e3f2fd');
      document.documentElement.style.setProperty('--tag-blue-border', '#42a5f5');
      document.documentElement.style.setProperty('--tag-purple-bg', '#f3e5f5');
      document.documentElement.style.setProperty('--tag-purple-border', '#ab47bc');
      document.documentElement.style.setProperty('--card-shadow', '0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)');
      document.documentElement.style.setProperty('--card-shadow-hover', '0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06)');
      document.querySelector('.hero').style.background = 'linear-gradient(135deg,#e8f5e9 0%,#fff8e1 50%,#fce4ec 100%)';
      document.querySelector('.top-nav').style.background = 'rgba(255,255,255,.92)';
      document.querySelector('.bottom-nav').style.background = 'rgba(255,255,255,.95)';
      document.querySelector('.search-bar').style.background = '#ffffff';
      document.querySelector('.search-bar').style.color = '#1a1a2e';
      document.querySelector('.search-bar').style.borderColor = '#e5e7eb';
      document.querySelector('.guide-search-bar').style.background = '#ffffff';
      document.querySelector('.guide-search-bar').style.color = '#1a1a2e';
      document.querySelector('.guide-search-bar').style.borderColor = '#e5e7eb';
      document.querySelector('.guide-search-section').style.background = '#f8f9fa';
      btn.textContent = '🌙';
    }
  });

  // Initialize
  initTags();

})();