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
  "Team J",
  "Team KIII",
  "Team T",
  "JKT48 Academy Class A",
  "JKT48 Academy Class B",
  "Ex-Members"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Ariella Calista Ichwan",    				[1,0,0,0,0,0], "j/ariel.jpg"],
  [1, "Cindy Hapsari Maharani Pujiantoro Putri",[1,0,0,0,0,0], "j/cindy_hapsari.jpg"],
  [1, "Cindy Yuvia",    						[1,0,0,0,0,0], "j/cindy_yuvia.jpg"],
  [1, "Della Delila",      						[1,0,0,0,0,0], "j/della_delila.jpg"],
  [1, "Diani Amalia Ramadhani",         		[1,0,0,0,0,0], "j/diani.jpg"],
  [1, "Feni Fitriyanti",       					[1,0,0,0,0,0], "j/feni_fitriyanti.jpg"],
  [1, "Frieska Anastasia Laksani",     			[1,0,0,0,0,0], "j/frieska_anastasia_laksani.jpg"],
  [1, "Gabriela Margareth Warouw",          	[1,0,0,0,0,0], "j/gabriella.jpg"],
  [1, "Michelle Christo Kusnadi",        		[1,0,0,0,0,0], "j/michelle_christo_kusnadi.jpg"], 
  [1, "Nurhayati",        						[1,0,0,0,0,0], "j/nurhayati.jpg"],   
  [1, "Riskha Fairunissa",      				[1,0,0,0,0,0], "j/riskha_fairunissa.jpg"],   
  [1, "Saktia Oktapyani",     					[1,0,0,0,0,0], "j/saktia_oktapyani.jpg"],   
  [1, "Sania Julia Montolalu",       			[0,1,0,0,0,0], "j/sania_julia.jpg"],
  [1, "Shania Junianatha",       				[0,1,0,0,0,0], "j/shania_junianantha.jpg"],
  [1, "Sinka Juliani",     						[0,1,0,0,0,0], "j/sinka_juliani.jpg"], 
  [1, "Stephanie Pricilla Indarto Putri",   	[0,1,0,0,0,0], "j/stephanie_pricilla_indarto_putri.jpg"],
  
  [1, "Alicia Chanzia",     							[0,1,0,0,0,0], "k3/alicia_chanzia_ayu_kumaseh.jpg"],
  [1, "Aninditha Rahma Cahyadi",        				[0,1,0,0,0,0], "k3/aninditha_rahma_cahyadi.jpg"],
  [1, "Beby Chaesara Anadila",          				[0,1,0,0,0,0], "k3/beby_chaseara_anadila.jpg"],
  [1, "Erika Ebisawa Kuswan",        					[0,1,0,0,0,0], "k3/erika.jpg"],
  [1, "Fransisca Saraswati Puspa Dewi",       			[0,1,0,0,0,0], "k3/fransisca_saraswati_puspa_dewi.jpg"],
  [1, "Jennifer Rachel Natasya",         				[0,1,0,0,0,0], "k3/jennifer_rachel_natasya.jpg"],
  [1, "Maria Genoveva Natalia Desy Purnamasari Gunawan",[0,1,0,0,0,0], "k3/maria_genoveva_natalia_desy_purnamasari_gunawan.jpg"],
  [1, "Nadila Cindi Wantari",       					[0,1,0,0,0,0], "k3/nadila_cindi_wantari.jpg"],
  [1, "Natalia",      									[0,1,0,0,0,0], "k3/natalia.jpg"],
  [1, "Ni Made Ayu Vania Aurellia",        				[0,1,0,0,0,0], "k3/made_ayu_vania_aurellia.jpg"],
  [1, "Ratu Vienny Fitrilya",         					[0,1,0,0,0,0], "k3/ratu_vienny_fitrilya.jpg"],
  [1, "Rona Anggreani",    								[0,1,0,0,0,0], "k3/rona_ariesta_anggraeni.jpg"],
  [1, "Shani Indira Natio",    							[0,1,0,0,0,0], "k3/shani_indira_natio.jpg"],
  [1, "Shania Gracia",    								[0,1,0,0,0,0], "k3/shania_gracia.jpg"],
  [1, "Shinta Naomi",         							[0,1,0,0,0,0], "k3/shinta_naomi.jpg"],
  [1, "Viviyona Apriani",        						[0,1,0,0,0,0], "k3/viviyona_apriani.jpg"],
  
  [1, "Adhisty Zara",           		[0,0,1,0,0,0], "t/adhisty_zara.jpg"],
  [1, "Adriani Elisabeth",           	[0,0,1,0,0,0], "t/adriani_elizabeth.jpg"],
  [1, "Ayana Shahab",           		[0,0,1,0,0,0], "t/ayana_shahab.jpg"],
  [1, "Ayu Safira Oktaviani",           [0,0,1,0,0,0], "t/ayu_safira_oktaviani.jpg"],
  [1, "Fidly Immanda Azzahra",        	[0,0,1,0,0,0], "t/fidly_immanda_azzahra.jpg"],
  [1, "Hasyakyla Utami Kusumawardhani",	[0,0,1,0,0,0], "t/haskyla_utami.jpg"],
  [1, "Jinan Safa Safira",           	[0,0,1,0,0,0], "t/jinan_safa_safira.jpg"],
  [1, "Made Devi Ranita Ningtara",      [0,0,1,0,0,0], "t/made_devi_ranita.jpg"],
  [1, "Melati Putri Rahel Sesilia",     [0,0,1,0,0,0], "t/melati_putri_rahel.jpg"],
  [1, "Puti Nadhira Azalia",           	[0,0,1,0,0,0], "t/puti_nadhira.jpg"],
  [1, "Rinanda Syahputri",           	[0,0,1,0,0,0], "t/rinanda.jpg"],
  [1, "Sonia Natalia",           		[0,0,1,0,0,0], "t/sonia_natalia.jpg"],
  [1, "Syahfira Angela Nurhaliza",      [0,0,1,0,0,0], "t/syahfira_angela_nurhaliza.jpg"],
  [1, "Tan Zhi Hui Celine",           	[0,0,1,0,0,0], "t/tan_zhi_hui_celine.jpg"],
  [1, "Thalia Ivanka Elizabeth",        [0,0,1,0,0,0], "t/thalia_ivanka_elizabeth_frederik.jpg"],
  
  [1, "Amanda Priscella",        			[0,0,0,1,0,0], "classA/amanda-pricella-solihin-100px.jpg"],
  [1, "Anastasya Narwastu Tety Handuran",	[0,0,0,1,0,0], "classA/anastasya-narwastu-tety-handuran-100px.jpg"],
  [1, "Angelina Christy",        			[0,0,0,1,0,0], "classA/Angelina-Christy.jpg"],
  [1, "Aurel Mayori",        				[0,0,0,1,0,0], "classA/Aurel-Mayori.jpg"],
  [1, "Azizi Asadel",        				[0,0,0,1,0,0], "classA/Azizi-Asadel.jpg"],
  [1, "Dhea Angelia",        				[0,0,0,1,0,0], "classA/Dhea-Angelia.jpg"],
  [1, "Erika Sintia",        				[0,0,0,1,0,0], "classA/erika-sintia-100px.jpg"],
  [1, "Eve Antoinette Ichwan",        		[0,0,0,1,0,0], "classA/eve_antoinette_s.jpg"],
  [1, "Febi Komaril",        				[0,0,0,1,0,0], "classA/Febi-Komaril.jpg"],
  [1, "Gabriel Angelina",        			[0,0,0,1,0,0], "classA/Gabriel-Angelina.jpg"],
  [1, "Gabryela Marcelina",        			[0,0,0,1,0,0], "classA/gabryela.jpg"],
  [1, "Gita Sekar Andarini",        		[0,0,0,1,0,0], "classA/gita-sekar-andarini-100px.jpg"],
  [1, "Graciella Ruth Wiranto",        		[0,0,0,1,0,0], "classA/graciella-ruth-wiranto-100px.jpg"],
  [1, "Helisma Putri",        				[0,0,0,1,0,0], "classA/Helisma-Putri.jpg"],
  [1, "Kandiya Rafa Maulidita",        		[0,0,0,1,0,0], "classA/kandiya-rafa-maulidita-100px.jpg"],
  [1, "Mutiara Azzahra",        			[0,0,0,1,0,0], "classA/Mutiara-Azzahra.jpg"],
  [1, "Nabila Fitriana",        			[0,0,0,1,0,0], "classA/Nabila-Fitriana.jpg"],
  [1, "Rifa Fatmasari",        				[0,0,0,1,0,0], "classA/Rifa-Fatmasari.jpg"],
  [1, "Riska Amelia Putri",        			[0,0,0,1,0,0], "classA/riska-amelia-putri-100px.jpg"],
  [1, "Shalza Grasita",        				[0,0,0,1,0,0], "classA/shalza-grasita-100px.jpg"],
  [1, "Viona Fadrin",        				[0,0,0,1,0,0], "classA/Viona-Fadrin.jpg"],
  [1, "Yessica Tamara",        				[0,0,0,1,0,0], "classA/Yessica-Tamara.jpg"],
  
  [1, "Aiko Harumi",        [0,0,0,0,1,0], "classB/Aiko-Harumi.jpg"],
  [1, "Calista Lea",        [0,0,0,0,1,0], "classB/Calista-Lea.jpg"],
  [1, "Febrina Diponegoro", [0,0,0,0,1,0], "classB/Febrina-Diponegoro.jpg"],
  [1, "Febriola Sinambela", [0,0,0,0,1,0], "classB/Febriola-Sinambela.jpg"],
  [1, "Freya Jayawardana",  [0,0,0,0,1,0], "classB/Freya-Jayawardana.jpg"],
  [1, "Jessica Chandra",    [0,0,0,0,1,0], "classB/Jessica-Chandra.jpg"],
  [1, "Jesslyn Callista",	[0,0,0,0,1,0], "classB/Jesslyn-Callista.jpg"],
  
  [1, "Siti Gayatri",				[0,0,0,0,0,1], "ex/siti_gayatri.png"],
  [1, "Intania Pratama Ilham",		[0,0,0,0,0,1], "ex/intania.jpg"],
  [1, "Allisa Astri",				[0,0,0,0,0,1], "ex/allisa_astri.jpg"],
  [1, "Fahira",						[0,0,0,0,0,1], "ex/fahira.jpg"],
  [1, "Neneng Rosediana",			[0,0,0,0,0,1], "ex/ochi.jpg"],
  [1, "Cleopatra Djapri",			[0,0,0,0,0,1], "ex/cleo.jpg"],
  [1, "Althea Callista",			[0,0,0,0,0,1], "ex/althea.jpg"],
  [1, "Nurhalima Oktavianti",		[0,0,0,0,0,1], "ex/halimah.jpg"],
  [1, "Alissa Galliamova",			[0,0,0,0,0,1], "ex/mova.jpg"],
  [1, "Olivia Robberecht",			[0,0,0,0,0,1], "ex/olivia.jpg"],
  [1, "Annisa Athia",				[0,0,0,0,0,1], "ex/annisa_athia.jpg"],
  [1, "Intar Putri Kariina",		[0,0,0,0,0,1], "ex/karin.jpg"],
  [1, "Nadhifa Karimah",			[0,0,0,0,0,1], "ex/nadhifa.jpg"],
  [1, "Dellia Erdita",				[0,0,0,0,0,1], "ex/dellia.jpg"],
  [1, "Diasta Priswarini",			[0,0,0,0,0,1], "ex/diasta.jpg"],
  [1, "Sonya Pandarmawan",			[0,0,0,0,0,1], "ex/sonya.jpg"],
  [1, "Stella Cornelia",			[0,0,0,0,0,1], "ex/stella.png"],
  [1, "Octi Sevpin",				[0,0,0,0,0,1], "ex/octi.jpg"],
  [1, "Cindy Gulla",				[0,0,0,0,0,1], "ex/cigul.jpg"],
  [1, "Aki Takajo",					[0,0,0,0,0,1], "ex/akicha.jpg"],
  [1, "Rena Nozawa",				[0,0,0,0,0,1], "ex/rena.jpg"],
  [1, "Pipit Ananda",				[0,0,0,0,0,1], "ex/pipit.jpg"],
  [1, "Shaffa Nabila	",			[0,0,0,0,0,1], "ex/shaffa_nabila.jpg"],
  [1, "Milenia Christien Glory Goenawan",[0,0,0,0,0,1], "ex/milen.jpg"],
  [1, "Kezia Putri Andinta",		[0,0,0,0,0,1], "ex/kei.jpg"],
  [1, "Rica Leyona",				[0,0,0,0,0,1], "ex/rica.jpg"],
  [1, "Zebi Magnolia Fawwaz",		[0,0,0,0,0,1], "ex/zebi.jpg"],
  [1, "Noella Sisterina",			[0,0,0,0,0,1], "ex/noella.jpg"],
  [1, "Anggie Putri Kurniasari",	[0,0,0,0,0,1], "ex/anggie.jpg"],
  [1, "Rizka Khalila",				[0,0,0,0,0,1], "ex/yukka.jpg"],
  [1, "Novinta Dhini",				[0,0,0,0,0,1], "ex/nobi.jpg"],
  [1, "Thalia",						[0,0,0,0,0,1], "ex/thalia.jpg"],
  [1, "Andela Yuwono",				[0,0,0,0,0,1], "ex/andela.jpg"],
  [1, "Jessica Berliana Ekawardani",[0,0,0,0,0,1], "ex/jejes.jpg"],
  [1, "Mega Suryani",				[0,0,0,0,0,1], "ex/mega_suryani.jpg"],
  [1, "Putri Farin Kartika",		[0,0,0,0,0,1], "ex/farin.jpg"],
  [1, "Triarona Kusuma",			[0,0,0,0,0,1], "ex/tya.jpg"],
  [1, "Indah Permata Sari",			[0,0,0,0,0,1], "ex/indah_permata.jpg"],
  [1, "Alycia Ferryana",			[0,0,0,0,0,1], "ex/cia.jpg"],
  [1, "Farina Yogi Devani",			[0,0,0,0,0,1], "ex/farina.jpg"],
  [1, "Nina Hamidah",				[0,0,0,0,0,1], "ex/nina_hamidah.jpg"],
  [1, "Delima Rizky",				[0,0,0,0,0,1], "ex/delima.jpg"],
  [1, "Elaine Hartanto",			[0,0,0,0,0,1], "ex/ilen.jpg"],
  [1, "Martha Graciela",			[0,0,0,0,0,1], "ex/martha_graciela.jpg"],
  [1, "Sofia Meifaliani",			[0,0,0,0,0,1], "ex/sofia.jpg"],
  [1, "Chikita Ravenska Mamesah",	[0,0,0,0,0,1], "ex/chikita.jpg"],
  [1, "Anggita Destiana Dewi",		[0,0,0,0,0,1], "ex/anggita_destiana.jpg"],
  [1, "Helma Sonya",				[0,0,0,0,0,1], "ex/helma_sonya.jpg"],
  [1, "Rissanda Putri Tuarissa",	[0,0,0,0,0,1], "ex/rissanda_putri.jpg"],
  [1, "Rezky Wiranti Dhike",		[0,0,0,0,0,1], "ex/dhike.jpg"],
  [1, "Jennifer Hanna",				[0,0,0,0,0,1], "ex/hanna.jpg"],
  [1, "Ghaida Farisya",				[0,0,0,0,0,1], "ex/ghaida.jpg"],
  [1, "Sendy Ariani",				[0,0,0,0,0,1], "ex/sendy.jpg"],
  [1, "Haruka Nakagawa",			[0,0,0,0,0,1], "ex/haruka.jpg"],
  [1, "Nadhifa Salsabila",			[0,0,0,0,0,1], "ex/nadse.jpg"],
  [1, "Chintya Hanindhitakirana Wirawan",[0,0,0,0,0,1], "ex/chintya.jpg"],
  [1, "Yansen Indiani",				[0,0,0,0,0,1], "ex/cesen.jpg"],
  [1, "Jessica Vania",				[0,0,0,0,0,1], "ex/jeje.jpg"],
  [1, "Jessica Veranda Tanumihardja",[0,0,0,0,0,1], "ex/ve.jpg"],
  [1, "Christi",					[0,0,0,0,0,1], "ex/christi.jpg"],
  [1, "Nabilah Ratna Ayu Azalia",	[0,0,0,0,0,1], "ex/nabilah.png"],
  [1, "Regina Angelina",			[0,0,0,0,0,1], "ex/regina.jpg"],
  [1, "Sri Lintang",				[0,0,0,0,0,1], "ex/sri_lintang.jpg"],
  [1, "Zahra Yuriva Dermawan",		[0,0,0,0,0,1], "ex/yuriva.jpg"],
  [1, "Rina Chikano",				[0,0,0,0,0,1], "ex/chikarina.jpg"],
  [1, "Fakhriyani Shafariyanti",	[0,0,0,0,0,1], "ex/shafa.jpg"],
  [1, "Melody Nurramdhani Laksani",	[0,0,0,0,0,1], "ex/melody.jpg"],
  [1, "Dena Siti Rohyati",			[0,0,0,0,0,1], "ex/dena.jpg"],
  [1, "Elizabeth Gloria Setiawan",	[0,0,0,0,0,1], "ex/glori.jpg"],
  [1, "Jihan Miftahul Jannah",		[0,0,0,0,0,1], "ex/jee.jpg"],
  [1, "Amanda Dwi Arista",			[0,0,0,0,0,1], "ex/manda.jpg"],
  [1, "Devi Kinal Putri",			[0,0,0,0,0,1], "ex/kinal.jpg"],
  [1, "Citra Ayu Pranajaya Wibrado",[0,0,0,0,0,1], "ex/citra.jpg"],
  [1, "Ruth Damayanti Sitanggang",	[0,0,0,0,0,1], "ex/iyut.jpg"],
  [1, "Violeta Burhan",				[0,0,0,0,0,1], "ex/violeta_burhan.jpg"],
  [1, "Priscillia Sari Dewi",		[0,0,0,0,0,1], "ex/sisil.jpg"],
  [1, "Denise Caroline",			[0,0,0,0,0,1], "ex/denise.jpg"],
  [1, "Dwi Putri Bonita",			[0,0,0,0,0,1], "ex/uty.jpg"],
  [1, "Kanya Caya",					[0,0,0,0,0,1], "ex/kanya_caya.jpg"],
  [1, "Saya Kawamoto",				[0,0,0,0,0,1], "ex/sayaya.jpg"],
  [1, "Lidya Maulida Djuhandar",	[0,0,0,0,0,1], "ex/lidya.jpg"],
  [1, "Putri Cahyaning Anggraini",	[0,0,0,0,0,1], "ex/riri.jpg"]
];
