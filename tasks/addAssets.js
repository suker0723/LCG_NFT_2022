const fs = require("fs");

// This file is only here to make interacting with the Dapp easier,
// feel free to ignore it if you don't need it.

task("addAssets", "Setup data used to generate punk-style NFTs")
  .addPositionalParam("assetsType", "The assets type to add")
  .setAction(async ({ assetsType }, { ethers }) => {
    if (network.name === "hardhat") {
      console.warn(
        "You are running the faucet task with Hardhat network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
      );
    }

    const addressesFile =
      __dirname + "/../my-app/src/contracts/contract-address.json";

    if (!fs.existsSync(addressesFile)) {
      console.error("You need to deploy your contract first");
      return;
    }

    const addressJson = fs.readFileSync(addressesFile);
    const address = JSON.parse(addressJson);
    const hardhatNFT = await ethers.getContractAt("NFTData", address.NFT);

    await hardhatNFT.setPalette("0x000000ff713f1dff8b532cff562600ff723709ffae8b61ffb69f82ff86581effa77c47ffdbb180ffe7cba9ffa66e2cffd29d60ffead9d9ffffffffffa58d8dffc9b2b2ff4a1201ff5f1d09ff711010ff7da269ff9bbc88ff5e7253ffff0000ff352410ff856f56ff6a563fffa98c6bffc8fbfbff9be0e0fff1ffffff75bdbdffd6000033692f08ff28b143ff794b11ff502f05ff00000099d60000ffc6c6c6ffdedede80e25b26ff80dbdaffca4e11ff933709ff0000004d86581e4d353535ff515151ff221e1766710cc7ff000000915c390fffc77514ff595959ff0040ffffdfdfdfff8c0d5bff690c45ffad2160ff555555ff0060c3ffe4eb17ff3cc300ffd60404ff8119b7ffb261dcff2c9541ff296434ffc9c9c9ffb1b1b1ff8d8d8dffb4b4b4ffdc1d1dff1a43c8ff1637a4ff142c7cffc28946ff2a2a2affe22626ff26314affffd800ff4c4c4cff636363ff000000403d2f1effffd926ffcae7fe701a6ed5ff855114ffbababa80683c08ff68461fffffc926ffd7d7d7fff0f0f0ff328dfdfffd3232ff2858b1ff2c5195ff293e64ff85561eff2d6b62ff005580ff229000ffc42110ff2c779599fff68eff8d5b4099ffba00ffff2a00ffe65700ffb500af99cd00cbff1c1a00ff534c00ffff8ebeff2c95419951360cff96200526");

    await hardhatNFT.addAsset(1, "0x26000c2700043301863401c33501c33601f03701c33801c33901c33a01c33b01c342000a4302804301704402104401e04503804501704601b44701f04801f04901f04a01f04b01f052000a5301f05401f05503205501d05604105601e05701f05801f05901b45a015a5b000362000a6301f06401f06501f06601f067015a6801f06901a56a015a7200027301b47401f07503a07501507604417601a07701f07801f07901f07a0116830002840003850003860003870003880003890003", "Male 1");
    await hardhatNFT.addAsset(2, "0x26000c2700043305863405c33505c33605f03705c33805c33905c33a05c33b05c342000a4306804305704406104405e04507804505704605b44705f04805f04905f04a05f04b05f052000a5305f05405f05507205505d05608105605e05705f05805f05905b45a055a5b000362000a6305f06405f06505f06605f067055a6805f06905a56a055a7200027305b47405f07507a07505507608417605a07705f07805f07905f07a0516830002840003850003860003870003880003890003", "Male 2");
    await hardhatNFT.addAsset(3, "0x26000c2700043309863409c33509c33609f03709c33809c33909c33a09c33b09c342000a430970430a804409e0440a10450b804509704609b44709f04809f04909f04a09f04b09f052000a5309f05409f0550b205509d0560c105609e05709f05809f05909b45a095a5b000362000a6309f06409f06509f06609f067095a6809f06909a56a095a7200027309b47409f0750ba0750950760c417609a07709f07809f07909f07a0916830002840003850003860003870003880003890003", "Male 3");
    await hardhatNFT.addAsset(4, "0x26000c270004330d86340dc3350dc3360df0370dc3380dc3390dc33a0dc33b0dc342000a430e80430d70440e10440de0450d70450f80460db4470df0480df0490df04a0df04b0df052000a530df0540df0550dd0550f20560de0561010570df0580df0590db45a0d5a5b000362000a630df0640df0650df0660df0670d5a680df0690da56a0d5a720002730db4740df0750d50750fa0760da1761040770df0780df0790df07a0d16830002840003850003860003870003880003890003", "Male 4");
    await hardhatNFT.addAsset(5, "0x34000835000c3601c337000d38000c3900044300084402814401604501f04603484601304701f04801f04901d24a01c34b01c353000a5401f05501f05603105604205601c05701f05801f05911405901b05a01695b01f063000a6401f06501f06601f06701f06801e16911506901a06a015a6b00037300027401b47501f07603527604807701f07801f07901787a0001840002850003860003870003880003890001", "Female 1");

    await hardhatNFT.addAsset(6, "0x34000835000c3605c337000d38000c3900044300084406814405604505f04607484605304705f04805f04905d24a05c34b05c353000a5405f05505f05608205607105605c05705f05805f05912405905b05a05695b05f063000a6405f06505f06605f06705f06805e16912506905a06a055a6b00037300027405b47505f07608827607507705f07805f07905787a0001840002850003860003870003880003890001", "Female 2");

    await hardhatNFT.addAsset(7, "0x34000835000c3609c337000d38000c390004430008440961440a804509f0460b484609304709f04809f04909d24a09c34b09c353000a5409f05509f0560c20560b105609c05709f05809f05913405909b05a09695b09f063000a6409f06509f06609f06709f06809e16913506909a06a095a6b00037300027409b47509f0760c82760b507709f07809f07909787a0001840002850003860003870003880003890001", "Female 3");

    await hardhatNFT.addAsset(8, "0x34000835000c360dc337000d38000c390004430008440e81440d60450df0460d38460f40470df0480df0490dd24a0dc34b0dc353000a540df0550df0560dc0560f10561020570df0580df0591340590db05a0d695b0df063000a640df0650df0660df0670df0680de1691350690da06a0d5a6b0003730002740db4750df0760f52761080770df0780df0790d787a0001840002850003860003870003880003890001", "Female 4");

    await hardhatNFT.addAsset(9, "0x26000c2700043314863414c33514c33614f03714c33814c33914c33a14c33b14c342000a4315804314704415104414e04514704516804614304616804617404714f04814f04914f04a14f04b14f052000a5314f05414f05514d05516205614e15714f05814f05914345916805a145a5b000362000a6314f06414f06514f06614f067145a6814f06914a56a145a7200027314b47414f07514507516a07614847616207617107714f07814f07914f07a1416830002840003850003860003870003880003890003", "Zombie");

    await hardhatNFT.addAsset(9, "0x26000c2700043314863414c33514c33614f03714c33814c33914c33a14c33b14c342000a4315804314704415104414e04514704516804614304616804617404714f04814f04914f04a14f04b14f052000a5314f05414f05514d05516205614e15714f05814f05914345916805a145a5b000362000a6314f06414f06514f06614f067145a6814f06914a56a145a7200027314b47414f07514507516a07614847616207617107714f07814f07914f07a1416830002840003850003860003870003880003890003", "Zombie");

    await hardhatNFT.addAsset(10, "0x26000c2700043318863418c33518c33618f03718c33818c33918c33a18c33b18c342000a4318f0441878451970451a804619b44719d04718204819804818704919c34a18b44b18f052000a5318f054185a5519d0551a20561b105619e05719785819f05919a55a195a5b000362000a6318f064185a6519f06619f06719786819f06919a56a195a7200027318b47418d2751950751aa0761b417619a07719f07819b07818407919e17a1916830002840003850003860003870003880003890003", "Ape");

    await hardhatNFT.addAsset(11, "0x250008261c49270004331c86341cc3351cc3361ce0361d10371cc3381cc3391cc33a1cc33b1cc342000a431c70431e80441ce0441e10451c70451f80461cb4471cf0481cf0491cf04a1cf04b1cf052000a531cf0541cf0551cd2561ce0561d10571cf0581cf0591ca55a1c5a5b000362000a631cf0641cf0651cf0661cf0671cc0671d30681ce0681d10691ca56a1c5a720002731cb4741cf0751c58751f20761ca1761d40771cf0781cf0791ce17a1c16830002840003850003860003870003880003890003", "Alien");

    await hardhatNFT.addAsset(12, "0x472080482040572020772080782040", "Rosy Cheeks");
    await hardhatNFT.addAsset(13, "0x37000838000c39000c48000f49000f4a000f4b000458000a59214b5a000f5b000568000a69215a6a000f6b000578000e79000f7a000f7b0001880003890003", "Luxurious Beard");
    await hardhatNFT.addAsset(14, "0x1422a01522d02322e02422f02522f02622d03222e03322703422303522304222107222d07322408222208322f08422f08522f08622d08700049322209422b09522f0962210a42220a52210", "Clown Hair Green");
    await hardhatNFT.addAsset(15, "0x42000c51000e52000f53000460000a61000f620007630003", "Mohawk Dark");
    await hardhatNFT.addAsset(16, "0x1323201423d02423f03223c03324a03323403423f04123a04223f04324a04323504423f05223f05324a05323505423f06123806223f06324a06323506423f07123207223f07324a07323507423f08324208423f09423f0a32320a42310", "Cowboy Hat");
    await hardhatNFT.addAsset(17, "0x5825a06825a0782520", "Mustache");
    await hardhatNFT.addAsset(18, "0x6726f0", "Clown Nose");
    await hardhatNFT.addAsset(19, "0x69000478000a79275a88000a89275a9528c09628c09728c098000a99271a992940a90001", "Cigarette");
    await hardhatNFT.addAsset(20, "0x350008452a87462a4b552a2d562a1e65000e66000c752aa5762a5a850003860003", "Nerd Glasses");
    await hardhatNFT.addAsset(21, "0x25000835000a45000a46000d55000a56000765000a75000a76000d85000a860007", "Regular Shades");
    await hardhatNFT.addAsset(22, "0x24000c332b80342c70342b80432bf0442c70442b80532bf0542c70542b80632bf0642c70642b80732bb0742c70742b80842c3c", "Knitted Cap");
    await hardhatNFT.addAsset(23, "0x372d80382dc0392d40482db0492df04a2d40582da0592db0592e405a2d50682da0692da0692e506a2d50782de0792df07a2d10", "Shadow Beard");
    await hardhatNFT.addAsset(24, "0x590002", "Frown");
    await hardhatNFT.addAsset(25, "0x320008332f4333308034304b422f254230804330f044301e5230a553305a542f5a6230a563305a642f5a72302973305a742f5a83000b842f5a940003", "Cap Forward");
    await hardhatNFT.addAsset(26, "0x5a0bc05b00046a0bf06b0b16", "Goat");
    await hardhatNFT.addAsset(27, "0x483110", "Mole");
    await hardhatNFT.addAsset(28, "0x1332801432a01532a01632e01732802232a02332e02432f02532f02632302732f02832e02932403232b03332f03432f03532304132804232f04332f04432105132805232f05332f06232f06332f07232207332f0743240833220843230", "Purple Hair");
    await hardhatNFT.addAsset(29, "0x35000836000145000a46000c55000a56000365000a75000a76000f", "Small Shades");
    await hardhatNFT.addAsset(30, "0x3333803433c04333f04433505333f05433506333f06433507333b07433d0", "Shaved Head");
    await hardhatNFT.addAsset(31, "0x35000445348746354955342d56351665000d6600047534a576355a850003860001", "Classic Shades");
    await hardhatNFT.addAsset(32, "0x69000478000a79365a88000a89365a98000a99361a993740a80002a90003", "Vape");
    await hardhatNFT.addAsset(33, "0x3b38404b3850", "Silver Chain");
    await hardhatNFT.addAsset(34, "0x580002", "Smile");
    await hardhatNFT.addAsset(35, "0x34000835000e36000444000a4539a0453a50463b5a54000a55392c553a10563b1664000865000d66000474000a7539a0753a50763b5a84000a85392c853a10863b16", "Big Shades");
    await hardhatNFT.addAsset(36, "0x500008513cc3523cc1533c41610003620001630001", "Mohawk Thin");
    await hardhatNFT.addAsset(37, "0x333de0343d50413d80423da0433d70433e80443e50443fa0513da0523ea4533ef0543e50543fa0613da0624080623e20634040633eb0643e50643fa07240207340f0744040743e10743f20834020844010", "Beanie");
    await hardhatNFT.addAsset(38, "0x3241803341f03441504241f04341f04441505241f05341f05441506241706242806341f06441507241b07341e07342107441508341a0844150934120944150", "Cap");
    await hardhatNFT.addAsset(39, "0x4522404543804622805543205644107522107543a0762220764440", "Clown Eyes Green");
    await hardhatNFT.addAsset(40, "0x37000838000c39000448000b49000f4a000458000a59074b5a000568000a69075a6a000578000e79000f7a0001", "Normal Beard Black");
    await hardhatNFT.addAsset(41, "0x3645903945404745904845404846804945d05745a05845f05945f05a45506746206745806845f06945f06a4550774560784510784620794570", "Medical Mask");
    await hardhatNFT.addAsset(42, "0x370b80380bc0390b40480bb0490bf04a0b40580ba0590bb45a0b50680ba0690ba56a0b50780be0790bf07a0b10", "Normal Beard");
    await hardhatNFT.addAsset(43, "0x35478636474944000a45471845486046489446472047000554000a55485a5648a557000564000a65485a6648a567000574000a75485a7648a577000584000285471c85482086481c864720870001", "VR");
    await hardhatNFT.addAsset(44, "0x35000445000f46000d55000f560007650005750005", "Eye Patch");
    await hardhatNFT.addAsset(45, "0x12000c13000414000e15000816000422000a23000f24000f25000f26000e27000131000a32000f33000f34000f35000f36000f42000f43000f44000752000f53000f54000d61000a62000f63000f64000271000a72000f73000f74000d81000282000a83000f84000f85000f86000f870004920007930007940001950003", "Wild Hair");
    await hardhatNFT.addAsset(46, "0x23000824000530000831000f32000f33495a34000540000a41000f42000f43495a44000550000a51000f52000f53495a54000560000a61000f62000f63495a64000570000a71000f72000f73495a74000581000382000383491a840005940001", "Top Hat");
    await hardhatNFT.addAsset(47, "0x144a90144b40154ac0244a10244b60244c80254c10334b60334a80344a40344c10424ba0434af0444b50524ba0534af0544b50624ba0634af0644a50644ba0724ba0734af0744a10744b60834b30", "Bandana");
    await hardhatNFT.addAsset(48, "0x584d20580b80590b30680ba0784d20790b30", "Handlebars");
    await hardhatNFT.addAsset(49, "0x23000c24000c25000c32000e33000f34000f35000f36000f41000a424e6943000f44000f45000151000a52000f53000f54000d55000461000a62000f63000f64000f65000771000272000f73000f74000f82000283000f84000f", "Frumpy Hair");
    await hardhatNFT.addAsset(50, "0x134fb0154fc0174f40224fa0234fe0244ff0254f78264f34314fe0324ff0334ff0344f50414f20424ff0434ff0444f70514fa0524ff0534ff0614fb0624fb0634ff0644f10724ff0734ff0744f10814f20824fb0834ff0844f10934f70", "Crazy Hair");
    await hardhatNFT.addAsset(51, "0x2200082300043250a5330e823350503400054250a5430e8243505044504951000a525070525180530e8253505054505a6100026250b4630e8263505064505a7250a5730e8273505074505a82502983501684501e", "Police Cap");
    await hardhatNFT.addAsset(52, "0x590e40690e40", "Buck Teeth");
    await hardhatNFT.addAsset(53, "0x3352803452c04352704353804453104452e05352f05452f06352f06452f07352b07452f0", "Do-rag");
    await hardhatNFT.addAsset(54, "0x580ba0590bb05a0bc05b0004680ba0690ba06a0bf06b0005780b20790b30", "Front Beard");
    await hardhatNFT.addAsset(55, "0x3654804854404a54105454106a5410745410775410785480", "Spots");
    await hardhatNFT.addAsset(56, "0x29000c2a0004380b80390bf03a0b58480be0490bf04a0bf04b0005580bf0590bb05a0bf05b0b49680bf0690ba06a0bf06b0b5a780bf0790bf07a0bf07b0b5a880b28890b3c8a0b3c8b0001", "Big Beard");
    await hardhatNFT.addAsset(57, "0x33000834000c38000c39000443000749000153000d63000f640003730009", "Vampire Hair");
    await hardhatNFT.addAsset(58, "0x32000c33000540000841000f42000f50000851000f52000f53000d60000861000f62000563000171000372000d730004830001", "Peak Spike");
    await hardhatNFT.addAsset(59, "0x370b80380bc0480b30490bf04a0b405a0bd05b00046a0bf06b0005780bc0790bc07a0b10", "Chinstrap");
    await hardhatNFT.addAsset(60, "0x1455802455f033554a3455f04155804255f043555a4455f05155a05255f053555a5455f06155a06255f063555a6455f072553073555a7455f08300028455f09455b0", "Fedora");
    await hardhatNFT.addAsset(61, "0x275649", "Earring");
    await hardhatNFT.addAsset(62, "0x35000c4557a54657f055572d5657306557876657c07557a57657f085000d", "Horned Rim Glasses");
    await hardhatNFT.addAsset(63, "0x330e80345840430ea0445850530ea0545850630ea0645850730ea0745850", "Headband");
    await hardhatNFT.addAsset(64, "0x6900087959297a59498a59298b5949965ac099000a9a5b839a59409b595aa55a20a65af0a75a20a85a20a9000aaa5b80aa5970ab5b16b90002ba0003", "Pipe");
    await hardhatNFT.addAsset(65, "0x23000824000832000833000f34000f42000f43000f44000d45000152000f53000f54000562000f63000f64000365000172000e73000f74000d83000784000b", "Messy Hair");
    await hardhatNFT.addAsset(66, "0x585ca0595cb05a5cc05b0004685ca0695ca06a5cf06b0005785c20795c30", "Front Beard Dark");
    await hardhatNFT.addAsset(67, "0x15000816000c173cc3183cc3193c491a0004230008243cc3253ce1263c3c27000f28000f293c2d2a3c962b3cc3320008333ce1343c783500033700033800033900033a00033b0003423ca5433cf044000551000a523cf0533cf05400055a00085b000f610002623cb4633cf06400056a000a6b3c69723c29733cf0743c497a000e7b3c5a833c29843cf0853cc386000f87000f88000f89000f8a3c698b0001940003953c29963c3c973cc3983cc3993c699a0001a70003a80003a90001", "Hoodie");
    await hardhatNFT.addAsset(68, "0x3a5d404a5d204b5d40", "Gold Chain");
    await hardhatNFT.addAsset(69, "0x370b80380bc0480bb0490b50780bc0790b40", "Muttonchops");
    await hardhatNFT.addAsset(70, "0x43000c44000352000853000c54000963000c740003", "Stringy Hair");
    await hardhatNFT.addAsset(71, "0x35000c36000f450007465e4b55000d56000e65000f66000f750005765e1a850003860003", "Eye Mask");
    await hardhatNFT.addAsset(72, "0x355fd0455f70456080465fb0466040555f505560a0565fa0566050655f70656180665fb0666140755f507561a0765fa0766150855f30865f30", "3D Glasses");
    await hardhatNFT.addAsset(73, "0x4562404563804662805563205664107562107563a0766220766440", "Clown Eyes Blue");
    await hardhatNFT.addAsset(74, "0x426584510b86520be0526510530b4060000a610b3c620b34630b30", "Mohawk");
    await hardhatNFT.addAsset(75, "0x33000834000c3566e03666f03766d03866c03966c03a6640426680432aa5442a5a4566505266a0532a2d5466875566506266a0632a8764662d656650726620732aa5742a5a7566508300028400038566308666308766308866308966308a6610", "Pilot Helmet");
    await hardhatNFT.addAsset(76, "0x2900083300083467863568c33668c03768c33868c33968e13a684942000c4367814368604467104468e04568104968205167865267905268605367905368605467105468e06168296267906268606367906368606467106468e07200037367947368207467907468607568407968807a000483000284682985683c86683c87683c88683c8968b48a6816990002", "Tassle Hat");
    await hardhatNFT.addAsset(77, "0x596940696950", "Hot Lipstick");
    await hardhatNFT.addAsset(78, "0x466a40566a30766ad0", "Blue Eye Shadow");
    await hardhatNFT.addAsset(79, "0x26000827000c28000c29000c2a000c2b000434000835000f36000f37000f38000f39000f3a000f3b000543000844000f45000746000153000a54000f63000a64000f6b000473000274000f75000479000c7a000e7b00058400028500038600038700038800038900038a0003", "Straight Hair Dark");
    await hardhatNFT.addAsset(80, "0x4a000c5a00025b0005", "Choker");
    await hardhatNFT.addAsset(81, "0x144f40234fc0244fe0254fc0264fd0274fd0324f30334f60344ff0354f70374f20384f10424f90434ff0444f10514f20524fb0534ff0614f20624fb0634ff0724fe0734ff0744f50824f80834fb0844fb0854ff0864fc0874fc0884f40924fa0934f20944fa0954fb0964f10974f10", "Crazy Hair");
    await hardhatNFT.addAsset(82, "0x35000a45000a46000d55000a56000765000a66000475000a76000f850002860001", "Regular Shades");
    await hardhatNFT.addAsset(83, "0x146b40156b80166b80176b80236be0246bd0256bf0266bf0276bf0286bb0296b40326ba0336bd0346bf0356bf0376b20386b70426bf0436be0446bf0516b80526b20536bf0546b50556b10626bf0636bf0646b50656b80716ba0726bf0736bb0746bf0756b10826b60836bf0846bf0856bd0866bc0876bc0886b10936b70946ba0956bb0966bf0976bd0986bb0a36b10a56b10a66b30", "Wild Blonde");
    await hardhatNFT.addAsset(84, "0x355f80365f40455fa0465f304660c0475f50555fa05660f0575f50655fa0665f306661c0675f50755fa07661f0775f50855f20865f30875f10", "3D Glasses");
    await hardhatNFT.addAsset(85, "0x483140", "Mole");
    await hardhatNFT.addAsset(86, "0x170e40240e40250e60260e60270ed0280e60330ec0340ef0350ef0360e70370e30380e10430ee0440ef0450e30520ea0530ef0540ed0550e10620ea0630ef0640ef0650e30660e90720e80730eb0740ef0750e40830e80840eb0850ef0860ec0870ec0880e40940e30950e20960e60970eb0980e20", "Wild White Hair");
    await hardhatNFT.addAsset(87, "0x366c80486c40556c406a6c10746c20776c10786c80", "Spots");
    await hardhatNFT.addAsset(88, "0x23000824000c25000c26000f27000f28000c32000833000f34000f35000f36000f370007380003424e87434e1e44000f45000752000f53000f54000f55000c62000f63000f64000f65000f66000172000b73000f74000f75000583000b84000f85000d86000c87000c88000c960003970003980001", "Frumpy Hair");
    await hardhatNFT.addAsset(89, "0x36000445000a462ac347000455000a562a3c57000165000866000d75000a762af0770005850002860003", "Nerd Glasses");
    await hardhatNFT.addAsset(90, "0x446d40546d50556d40646d60656e10656d60746d10", "Tiara");
    await hardhatNFT.addAsset(91, "0x346fc0356fe0366f70376f10436fa0446ff0456f10536ff0546ff0636ff0646ff0656f40736fa0746ff0756f407a6fe07b6f50846f30856ff0866ff0876ff0886ff0896ff08a6ff08b6f10976f20986f30996f309a6f30", "Orange Side");
    await hardhatNFT.addAsset(92, "0x524f80534fd0624f30634f30", "Red Mohawk");
    await hardhatNFT.addAsset(93, "0x23000824000832000833000f34000f42000f43000f44000d45000152000f53000f54000562000f63000f64000365000172000e73000f74000d83000784000b", "Messy Hair");
    await hardhatNFT.addAsset(94, "0x456280466348476240566310566420756220766352766480776210", "Clown Eyes Blue");
    await hardhatNFT.addAsset(95, "0x6900087959297a59498a59298b5949965ac099000a9a5b839a59409b595aa55a20a65af0a75a20a85a20a9000aaa5b80aa5970ab5b16b90002ba0003", "Pipe");
    await hardhatNFT.addAsset(96, "0x12000813000814000815000516000c22000c23000f24000f25000f26000d27000728000831000232000e33000f34000f35000f36000f37000738000141000842000e43000f44000f45000152000b53000f54000f55000461000862000f63000f64000565000171000172000f73000f74000f75000481000282000383000f84000f85000f86000f87000d88000c92000693000b94000195000b960003970005990001", "Wild Hair");
    await hardhatNFT.addAsset(97, "0x4670405670307670d0", "Purple Eye Shadow");
    await hardhatNFT.addAsset(98, "0x440008450001540009550001640009650001740009750001", "Stringy Hair");
    await hardhatNFT.addAsset(99, "0x19000426000c27000e28000f29000534000e35000f36000f37000338000b39000f43000e44000f45000749000353000f54000f55000d63000f64000f65000573000b74000f75000579000c84000b85000f86000f87000f88000f89000f95000296000397000398000b990005", "Dark Hair");
    await hardhatNFT.addAsset(100, "0x35000845000a46000f47000455000a56000f57000165000a75000a", "Eye Patch");
    await hardhatNFT.addAsset(101, "0x336b80346be0356bf0366b30376b40426b80436bf0446bf0456b10526ba0536bf0546bf0626ba0636bf0646bf0656b60736bb0746bf0776b40846b30856b30866b30", "Blonde Short");
    await hardhatNFT.addAsset(102, "0x35000845000a46344346358047000455000a56341c56352057000165000a66000c75000a7634507635a0770005850002860003", "Classic Shades");
    await hardhatNFT.addAsset(103, "0x35000836000e37000545000a465e8347000555000a56000c57000565000a66000f67000575000a765e20770005850002860003870001", "Eye Mask");
    await hardhatNFT.addAsset(104, "0x1422801522c02322e02422f02522f02622f02722d03222e03322f03422f03522703722203822104222f04322f04422f05122a05222f05322f05422506122206222f06322f06422507222f07322f07422f08222208322f08422f08522f08622d08722848822409322209422b09522f0962230972210", "Clown Hair Green");
    await hardhatNFT.addAsset(105, "0x3341803441c04241804341f04441f05241a05341f05441f06241a06341f06441f07241a07341607342907441f08341308441f09441f0a44120", "Cap");
    await hardhatNFT.addAsset(106, "0x3645804745904845404846804945d05745a05845f05945f05a45506746206745806845f06945f06a4550774560784510784620794570", "Medical Mask");
    await hardhatNFT.addAsset(107, "0x144a20144b80154ac0164a40244a20244b80254b10254c60334b80344b10344ac0344c20434b50434aa0444a50444ba0534b50534aa0544a50544ba0634b50634aa0644af0654b50734b50734aa0744a70744b80754b10834b20844b10", "Bandana");
    await hardhatNFT.addAsset(108, "0x597140697150", "Purple Lipstick");
    await hardhatNFT.addAsset(109, "0x6726a0682650", "Clown Nose");
    await hardhatNFT.addAsset(110, "0x25000c26000c27000e28000f29000f2a000c34000635000337000238000339000f3a000f430002440ea4455850540ea5555850640ea5655850730008740ea17558507900087a000f84000985000c86000c87000e88000d89000e8a000f95000396000397000b98000f9900079a0001", "Headband");
    await hardhatNFT.addAsset(111, "0x13000814000f15000f16000423000f24000f25000333568234000d35000442000843000f44000f45000152000a53000f54000562000a63000f64000572000273000f74000d83562884000793000f94000f95000ca30002a4000fa5000fa60001", "Pigtails");
    await hardhatNFT.addAsset(112, "0x266b80276bc0286bc0296bc02a6bc02b6b40346b80356bf0366bf0376bf0386bf0396bf03a6bf03b6b50436b80446bf0456b70466b10536ba0546bf0636ba0646bf06b6b40736b20746bf0756b407a6be07b6b50846b20856b30866b30876b30886b30896b308a6b30", "Straight Hair Blonde");
    await hardhatNFT.addAsset(113, "0x330008342cc3420008432be1442cd0442b2052000a532bf0542cd0542b2062000a632bf0642cd0642b20720002732bb4742cd0742b20830002842c1c842b20", "Knitted Cap");
    await hardhatNFT.addAsset(114, "0x452280464348472240564310564420752220764352764480772210", "Clown Eyes Green");
    await hardhatNFT.addAsset(115, "0x69000478000a79275a88000a89275a9528c09628c09728c098000a99271a992940a90001", "Cigarette");
    await hardhatNFT.addAsset(116, "0x3472c03572c0437380437220447330442ac04573404572105373205372805473c0542a305573105572406372a06473c06472306572407373a0742af0757350837220847330857230", "Welding Goggles");
    await hardhatNFT.addAsset(117, "0x52000c530004540004610002623c3c633c34643c14", "Mohawk Thin");
    await hardhatNFT.addAsset(118, "0x4b5d405b5d50", "Gold Chain");
    await hardhatNFT.addAsset(119, "0x36478637474945000a46471846486047489447472048000555000a56485a5748a558000565000a66485a6748a568000575000a76485a7748a578000585000286471c86482087481c874720880001", "VR");
    await hardhatNFT.addAsset(120, "0x69000478000a79365a88000a89365a98000a99361a993740a80002a90003", "Vape");
    await hardhatNFT.addAsset(121, "0x2674802774c02874c034000c3574e03674703774f03874f03974f03a744043000e44000f4574704974204a7410530e8754000f5574d063000f640e1e6574f066741073000b74000f7574507974807a74408400038574b08674f08774f08874f08974f08a7410967420977430987430", "Pink With Hat");
    await hardhatNFT.addAsset(122, "0x256b80266bc0276bc0286be0336bc0346bf0356bf0366b30376bf0386bf0396b50426b80436bf0446bd0486b20496b50526ba0536bf0546bf0556b40626ba0636bf0646b70726b20736bf0746b40796b40836b20846bf0856bf0866bf0876bf0886bf0896b10976b20986bb0", "Blonde Bob");
    await hardhatNFT.addAsset(123, "0x520008530b81536560610008620be1630bf0640bd0710002720003730001", "Mohawk");
    await hardhatNFT.addAsset(124, "0x35000836000e37000445000a4639a0463a50473b5a55000a56392c563a10573b1665000866000d67000475000a7639a0763a50773b5a85000a86392c863a10873b16", "Big Shades");
    await hardhatNFT.addAsset(125, "0x270004375612", "Earring");
    await hardhatNFT.addAsset(126, "0x4675405675307675d0", "Green Eye Shadow");
    await hardhatNFT.addAsset(127, "0x2676802776c02876c02976c02a76c02b76403476803576f03676f03776f03876f03976f03a76f03b76504376804476f04576704676105376a05476f06376a06476f06b76407376207476f07576407976c07a76e07b76508476208576308676308776308876308976308a7630", "Straight Hair");
    await hardhatNFT.addAsset(128, "0x4777805777207777a0", "Rosy Cheeks");
    await hardhatNFT.addAsset(129, "0x1900081a000c24000c25000e26000f27000f28000f29000f2a000f33000e34000f35000f36000f37000738000339000b3a000f42000843000f44000f45000346000149000152000a530007540001630003", "Half Shaved");
    await hardhatNFT.addAsset(130, "0x52000853000f61000862000f63000f64000d710002720003730001", "Mohawk Dark");
    await hardhatNFT.addAsset(131, "0x590004690005", "Black Lipstick");
    await hardhatNFT.addAsset(132, "0x35000836000445000a4657f047575055000a56573457571065000a6657c167574075000a7657f0775750850002860001", "Horned Rim Glasses");
    await hardhatNFT.addAsset(133, "0x4b38405b3850", "Silver Chain");

    await hardhatNFT.sealContract();

    console.log("Assets added", assetsType);
  });
