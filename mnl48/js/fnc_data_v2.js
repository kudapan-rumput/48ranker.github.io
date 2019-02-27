// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "Team MII",
  "Team NIV",
  "Team L",
  "Kenkyuusei"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Sheki",  [1,0,0,0,0,0], "m2/sheki.png"],
  [1, "Alice",	[1,0,0,0,0,0], "m2/alice.png"],
  [1, "Sayaka", [1,0,0,0,0,0], "m2/sayaka.png"],
  [1, "Faith",  [1,0,0,0,0,0], "m2/faith.png"],
  [1, "Erica",  [1,0,0,0,0,0], "m2/erica.png"],
  [1, "Nice",   [1,0,0,0,0,0], "m2/nice.png"],
  [1, "Jan",    [1,0,0,0,0,0], "m2/jan.png"],
  [1, "Dana",   [1,0,0,0,0,0], "m2/dana.png"],
  [1, "Essel",  [1,0,0,0,0,0], "m2/essel.png"], 
  [1, "Sha",    [1,0,0,0,0,0], "m2/sha.png"],   
  [1, "Shaira", [1,0,0,0,0,0], "m2/shaira.png"],   
  [1, "Necca",  [1,0,0,0,0,0], "m2/necca.png"],   
  [1, "Cess",   [1,0,0,0,0,0], "m2/cess.png"],
  [1, "Andi",   [1,0,0,0,0,0], "m2/andi.png"],
  [1, "Rans",   [1,0,0,0,0,0], "m2/rans.png"], 
  [1, "Cassey",	[1,0,0,0,0,0], "m2/cassey.png"],
  
  [1, "Abby",	[0,1,0,0,0,0], "niv/abby.png"],
  [1, "Ella",   [0,1,0,0,0,0], "niv/ella.png"],
  [1, "Jem",    [0,1,0,0,0,0], "niv/jem.png"],
  [1, "Lara",   [0,1,0,0,0,0], "niv/lara.png"],
  [1, "Alyssa", [0,1,0,0,0,0], "niv/alyssa.png"],
  [1, "Joyce",  [0,1,0,0,0,0], "niv/joyce.png"],
  [1, "Belle",	[0,1,0,0,0,0], "niv/belle.png"],
  [1, "Aly",    [0,1,0,0,0,0], "niv/aly.png"],
  [1, "Daryll", [0,1,0,0,0,0], "niv/daryll.png"],
  [1, "Jaydee", [0,1,0,0,0,0], "niv/jaydee.png"],
  [1, "Ruth",   [0,1,0,0,0,0], "niv/ruth.png"],
  [1, "Brei",   [0,1,0,0,0,0], "niv/brei.png"],
  [1, "Hazel",  [0,1,0,0,0,0], "niv/hazel.png"],
  [1, "Ecka",   [0,1,0,0,0,0], "niv/ecka.png"],
  [1, "Madie",  [0,1,0,0,0,0], "niv/madie.png"],
  [1, "Coleen", [0,1,0,0,0,0], "niv/coleen.png"],
  
  [1, "Sela",   [0,0,1,0,0,0], "l/sela.png"],
  [1, "Tin",    [0,0,1,0,0,0], "l/tin.png"],
  [1, "Ash",    [0,0,1,0,0,0], "l/ash.png"],
  [1, "Gabb",   [0,0,1,0,0,0], "l/gabb.png"],
  [1, "Grace",  [0,0,1,0,0,0], "l/grace.png"],
  [1, "Quincy",	[0,0,1,0,0,0], "l/quincy.png"],
  [1, "Kyla",   [0,0,1,0,0,0], "l/kyla.png"],
  [1, "Dian",    [0,0,1,0,0,0], "l/dian.png"],
  [1, "Mari",   [0,0,1,0,0,0], "l/mari.png"],
  [1, "Gia",    [0,0,1,0,0,0], "l/gia.png"],
  [1, "Shaina", [0,0,1,0,0,0], "l/shaina.png"],
  [1, "Kay",    [0,0,1,0,0,0], "l/kay.png"],
  [1, "Lei",    [0,0,1,0,0,0], "l/lei.png"],
  [1, "Jewel",  [0,0,1,0,0,0], "l/jewel.png"],
  [1, "Thea",   [0,0,1,0,0,0], "l/thea.png"],
  [1, "Princess",[0,0,1,0,0,0], "l/princess.png"],
  
  [1, "Emz",    [0,0,0,1,0,0], "kenkyuusei/emz.png"],
  [1, "Rowee",	[0,0,0,1,0,0], "kenkyuusei/rowee.png"],
  [1, "Vira",   [0,0,0,1,0,0], "kenkyuusei/vira.png"],
  [1, "Mela",   [0,0,0,1,0,0], "kenkyuusei/mela.png"],
  [1, "Karla",  [0,0,0,1,0,0], "kenkyuusei/karla.png"],
  [1, "Laney",  [0,0,0,1,0,0], "kenkyuusei/laney.png"],
  [1, "Dani",   [0,0,0,1,0,0], "kenkyuusei/dani.png"],
  [1, "Yna",    [0,0,0,1,0,0], "kenkyuusei/yna.png"],
  [1, "Cole",   [0,0,0,1,0,0], "kenkyuusei/cole.png"]
];
