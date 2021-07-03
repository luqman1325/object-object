// Object containing information about smartphones

var smartphone = {
    brands: [
        (brand1 = {
            name: "Xiaomi",
            models: [
                (model_1 = {
                    name: "Redmi Note 10",
                    screenSize: 6.43, //in inches
                    screenResolution: "1080 x 2400", //in pixels
                    pixelDensity: 409, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Qualcomm Snapdragon 678",
                    cpu: "Octacore",
                    gpu: "Adreno 612",
                    ram: [4, 6], //in GBs
                    rom: [64, 128], //in GBs
                    backCameras: [48, 8, 2, 2], //in MPs
                    frontCamera: [13], //in MPs
                    battery: 5000, //in mAh
                    colors: ["Shadow Black", "Frost White", "Aqua Green"],
                }),
                (model_2 = {
                    name: "Poco F3",
                    screenSize: 6.67, //in inches
                    screenResolution: "1080 x 2400", //in pixels
                    pixelDensity: 395, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Qualcomm Snapdragon 870 5G",
                    cpu: "Octacore",
                    gpu: "Adreno 650",
                    ram: [6, 8], //in GBs
                    rom: [128, 256], //in GBs
                    backCameras: [48, 8, 5], //in MPs
                    frontCamera: [20], //in MPs
                    battery: 4520, //in mAh
                    colors: ["Arctic White", "Night Black", "Deep Ocean Blue"],
                }),
                (model_3 = {
                    name: "Poco M3",
                    screenSize: 6.53, //in inches
                    screenResolution: "1080 x 2340", //in pixels
                    pixelDensity: 395, //in ppi
                    operatingSystem: "Android 10",
                    chipset: "Qualcomm Snapdragon 662",
                    cpu: "Octacore",
                    gpu: "Adreno 610",
                    ram: [4, 6], //in GBs
                    rom: [64, 128], //in GBs
                    backCameras: [48, 2, 2], //in MPs
                    frontCamera: [8], //in MPs
                    battery: 6000, //in mAh
                    colors: ["Cool Blue", "Poco Yellow", "Power Black"],
                }),
                (model_4 = {
                    name: "Redmi 9",
                    screenSize: 6.53, //in inches
                    screenResolution: "1080 x 2340", //in pixels
                    pixelDensity: 395, //in ppi
                    operatingSystem: "Android 10",
                    chipset: "Mediatek Helio G80",
                    cpu: "Octacore",
                    gpu: "Mali-G52 MC2",
                    ram: [3, 4, 6], //in GBs
                    rom: [32, 64, 128], //in GBs
                    backCameras: [13, 8, 5, 2], //in MPs
                    frontCamera: [8], //in MPs
                    battery: 5020, //in mAh
                    colors: ["Carbon Gray", "Sunset Purple", "Ocean Green"],
                }),
                (model_5 = {
                    name: "Redmi Note 10",
                    screenSize: 6.81, //in inches
                    screenResolution: "1440 x 3200", //in pixels
                    pixelDensity: 515, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Qualcomm Snapdragon 888 5G",
                    cpu: "Octacore",
                    gpu: "Adreno 660",
                    ram: [8, 12], //in GBs
                    rom: [256, 512], //in GBs
                    backCameras: [50, 48, 48], //in MPs
                    frontCamera: [20], //in MPs
                    battery: 5000, //in mAh
                    colors: ["Ceramic White (Cosmic White)", "Ceramic Black (Cosmic Black)"],
                }),
            ],
        }),
        (brand2 = {
            name: "Motorola",
            models: [
                (model_1 = {
                    name: "Moto G Stylus 5G",
                    screenSize: 6.8, //in inches
                    screenResolution: "1080 x 2400", //in pixels
                    pixelDensity: 387, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Qualcomm Snapdragon 480 5G",
                    cpu: "Octacore",
                    gpu: "Adreno 619",
                    ram: [6], //in GBs
                    rom: [256], //in GBs
                    backCameras: [48, 8, 5, 2], //in MPs
                    frontCamera: [16], //in MPs
                    battery: 5000, //in mAh
                    colors: ["Cosmic Emerald"],
                }),
                (model_2 = {
                    name: "Moto G100",
                    screenSize: 6.7, //in inches
                    screenResolution: "1080 x 2520", //in pixels
                    pixelDensity: 409, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Qualcomm Snapdragon 870 5G",
                    cpu: "Octacore",
                    gpu: "Adreno 650",
                    ram: [8, 12], //in GBs
                    rom: [128, 256], //in GBs
                    backCameras: [64, 16, 2], //in MPs
                    frontCamera: [16, 8], //in MPs
                    battery: 5000, //in mAh
                    colors: ["Iridescent Sky", "Iridescent Ocean", "Slate Grey"],
                }),
                (model_3 = {
                    name: "Edge",
                    screenSize: 6.7, //in inches
                    screenResolution: "1080 x 2340", //in pixels
                    pixelDensity: 385, //in ppi
                    operatingSystem: "Android 10",
                    chipset: "Qualcomm Snapdragon 765G 5G",
                    cpu: "Octacore",
                    gpu: "Adreno 620",
                    ram: [4, 6], //in GBs
                    rom: [128, 256], //in GBs
                    backCameras: [64, 8, 16], //in MPs
                    frontCamera: [25], //in MPs
                    battery: 4500, //in mAh
                    colors: ["Solar Black", "Midnight Magenta"],
                }),
                (model_4 = {
                    name: "Moto G40",
                    screenSize: 6.8, //in inches
                    screenResolution: "1080 x 2460", //in pixels
                    pixelDensity: 395, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Qualcomm Snapdragon 732G",
                    cpu: "Octacore",
                    gpu: "Adreno 618",
                    ram: [4, 6], //in GBs
                    rom: [64, 128], //in GBs
                    backCameras: [64, 8, 2], //in MPs
                    frontCamera: [16], //in MPs
                    battery: 6000, //in mAh
                    colors: ["Dynamic Gray", "Frosted Champagne"],
                }),
                (model_5 = {
                    name: "Moto G50",
                    screenSize: 6.5, //in inches
                    screenResolution: "720 x 1600", //in pixels
                    pixelDensity: 269, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Qualcomm Snapdragon 480 5G",
                    cpu: "Octacore",
                    gpu: "Adreno 619",
                    ram: [4], //in GBs
                    rom: [64, 128], //in GBs
                    backCameras: [48, 5, 2], //in MPs
                    frontCamera: 13, //in MPs
                    battery: 5000, //in mAh
                    colors: ["Steel Gray", "Aqua Green"],
                }),
            ],
        }),
        (brand3 = {
            name: "Infinix",
            models: [
                (model_1 = {
                    name: "Zero 8",
                    screenSize: 6.85, //in inches
                    screenResolution: "1080 x 2460", //in pixels
                    pixelDensity: 392, //in ppi
                    operatingSystem: "Android 10",
                    chipset: "Mediatek Helio G90T",
                    cpu: "Octacore",
                    gpu: "Mali-G76 MC4",
                    ram: [8], //in GBs
                    rom: [128], //in GBs
                    backCameras: [64, 8, 2, 2], //in MPs
                    frontCamera: [48, 8], //in MPs
                    battery: 4500, //in mAh
                    colors: ["Silver Diamond", "Black Diamond", "Green Diamond"],
                }),
                (model_2 = {
                    name: "Smart 5",
                    screenSize: 6.6, //in inches
                    screenResolution: "720 x 1600", //in pixels
                    pixelDensity: 266, //in ppi
                    operatingSystem: "Android 10", //Go Edition
                    chipset: "Mediatek Helio A20",
                    cpu: "Quadcore",
                    gpu: "PowerVR GE8320",
                    ram: [2, 3], //in GBs
                    rom: [32, 64], //in GBs
                    backCameras: [13, 8, "QVGA"], //in MPs
                    frontCamera: [8], //in MPs
                    battery: 5000, //in mAh
                    colors: ["Ocean Wave", "Quetzal Cyan", "Midnight Black"],
                }),
                (model_3 = {
                    name: "Hot 10",
                    screenSize: 6.78, //in inches
                    screenResolution: "720 x 1640", //in pixels
                    pixelDensity: 264, //in ppi
                    operatingSystem: "Android 10",
                    chipset: "Mediatek Helio G70",
                    cpu: "Octacore",
                    gpu: "Mali-G52 2EEMC2",
                    ram: [3, 4, 6], //in GBs
                    rom: [64, 128], //in GBs
                    backCameras: [16, 2, 2, "QVGA"], //in MPs
                    frontCamera: [8], //in MPs
                    battery: 5200, //in mAh
                    colors: ["Obsidian Black", "Amber Red", "Moonlight Jade", "Ocean Wave"],
                }),
                (model_4 = {
                    name: "Note 8",
                    screenSize: 6.95, //in inches
                    screenResolution: "720 x 1640", //in pixels
                    pixelDensity: 258, //in ppi
                    operatingSystem: "Android 10",
                    chipset: "Mediatek Helio G80",
                    cpu: "Octacore",
                    gpu: "Mali-G52 MC2",
                    ram: [6], //in GBs
                    rom: [128], //in GBs
                    backCameras: [64, 2, 2, 2], //in MPs
                    frontCamera: [16, 2], //in MPs
                    battery: 5200, //in mAh
                    colors: ["Gray", "Blue", "Green"],
                }),
                (model_5 = {
                    name: "Note 10 Pro",
                    screenSize: 6.81, //in inches
                    screenResolution: "1080 x 2460", //in pixels
                    pixelDensity: 387, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Mediatek Helio G95",
                    cpu: "Octacore",
                    gpu: "Mali-G76 MC4",
                    ram: [6, 8], //in GBs
                    rom: [64, 128, 256], //in GBs
                    backCameras: [64, 8, 2, 2], //in MPs
                    frontCamera: [16], //in MPs
                    battery: 5000, //in mAh
                    colors: ["Black", "Purple", "Nordic Secret"],
                }),
            ],
        }),
        (brand4 = {
            name: "Samsung",
            models: [
                (model_1 = {
                    name: "Galaxy A51",
                    screenSize: 6.5, //in inches
                    screenResolution: "1080 x 2400", //in pixels
                    pixelDensity: 405, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Exynos 9611",
                    cpu: "Octacore",
                    gpu: "Mali-G72 MP3",
                    ram: [4, 6, 8], //in GBs
                    rom: [64, 128, 256], //in GBs
                    backCameras: [48, 12, 5, 5], //in MPs
                    frontCamera: 32, //in MPs
                    battery: 4000, //in mAh
                    colors: ["Prism Crush Black", "Prism Crush White", "Prism Crush Blue", "Prism Crush Pink"],
                }),
                (model_2 = {
                    name: "Galaxy A12",
                    screenSize: 6.5, //in inches
                    screenResolution: "720 x 1600", //in pixels
                    pixelDensity: 270, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Mediatek Helio P35",
                    cpu: "Octacore",
                    gpu: "PowerVR GE8320",
                    ram: [2, 3, 4, 6], //in GBs
                    rom: [32, 64, 128], //in GBs
                    backCameras: [48, 5, 2, 2], //in MPs
                    frontCamera: [8], //in MPs
                    battery: 5000, //in mAh
                    colors: ["Black", "White", "Blue", "Red"],
                }),
                (model_3 = {
                    name: "Galaxy A32",
                    screenSize: 6.4, //in inches
                    screenResolution: "1080 x 2400", //in pixels
                    pixelDensity: 411, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Mediatek Helio G80",
                    cpu: "Octacore",
                    gpu: "Adreno 610",
                    ram: [4, 6, 8], //in GBs
                    rom: [64, 128], //in GBs
                    backCameras: [64, 8, 5, 5], //in MPs
                    frontCamera: [20], //in MPs
                    battery: 5000, //in mAh
                    colors: ["Awesome Black", "Awesome White", "Awesome Blue", "Awesome Violet"],
                }),
                (model_4 = {
                    name: "Galaxy A52",
                    screenSize: 6.5, //in inches
                    screenResolution: "1080 x 2400", //in pixels
                    pixelDensity: 407, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Qualcomm Snapdragon 720G",
                    cpu: "Octacore",
                    gpu: "Adreno 618",
                    ram: [4, 6, 8], //in GBs
                    rom: [128, 256], //in GBs
                    backCameras: [64, 12, 5, 5], //in MPs
                    frontCamera: [32], //in MPs
                    battery: 4500, //in mAh
                    colors: ["Awesome Black", "Awesome White", "Awesome Violet", "Awesome Blue"],
                }),
                (model_4 = {
                    name: "Galaxy A52 5G",
                    screenSize: 6.5, //in inches
                    screenResolution: "1080 x 2400", //in pixels
                    pixelDensity: 407, //in ppi
                    operatingSystem: "Android 11",
                    chipset: "Qualcomm Snapdragon 750G 5G",
                    cpu: "Octacore",
                    gpu: "Adreno 619",
                    ram: [6, 8], //in GBs
                    rom: [128, 256], //in GBs
                    backCameras: [64, 12, 5, 5], //in MPs
                    frontCamera: [32], //in MPs
                    battery: 4500, //in mAh
                    colors: ["Awesome Black", "Awesome White", "Awesome Violet", "Awesome Blue"],
                }),
            ],
        }),
    ],
};
