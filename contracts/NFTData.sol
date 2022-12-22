// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
// import "LCG.sol";

contract NFTData {
    string internal constant SVG_HEADER = 'data:image/svg+xml;utf8,<svg xmlns="LCG_NFT" version="1.2" viewBox="0 0 24 24">';
    string internal constant SVG_FOOTER = '</svg>';    
    
    bytes private palette;
    mapping(uint8 => bytes)   private assets;
    mapping(uint8 => string)  private assetNames;
    mapping(uint64 => uint32) private composites;
    mapping(uint8 => bytes)   private punks;

    uint32 private constant M = type(uint32).max >> 1;
    uint32 private immutable A;
    uint32 private immutable B;
    uint32 private immutable Inv;
    
    address payable internal deployer;
    bool private contractSealed = false;

    uint8[5] private othersMale = [33, 68, 61, 18, 41];
    uint8[6] private othersFemale = [118, 133, 80, 125, 109, 106];

    uint8[6] private mouthMale = [52, 34, 24, 19, 64, 32];
    uint8[6] private mouthFemale = [131, 108, 77, 115, 95, 120];

    uint8[3] private cheeksMale = [12, 27, 55];
    uint8[3] private cheeksFemale = [128, 85, 87];

    uint8[12] private eyesMale = [21, 29, 31, 35, 20, 62, 72, 43, 71, 44, 39, 73];
    uint8[14] private eyesFemale = [82,  102, 124, 84, 89, 132, 119, 103, 100, 114, 94, 78, 97,  126];

    uint8[12] private beardMale = [13, 23, 40, 42, 54, 56, 66, 59, 69, 17, 26, 48];

    uint8[25] private hairMale = [14, 28, 45, 49, 50, 57, 65, 70, 15, 36, 74, 22, 25, 38, 51, 16, 46, 47, 60, 63, 30, 37, 53, 58, 67];
    uint8[30] private hairFemale = [104, 96,  88,  81,  93,  98, 79,  86,  99,  127, 130, 92,  117, 123, 75,  90, 91,  105, 113, 76, 121, 107, 116, 110, 111, 83, 101, 112, 122, 129];

    // Modifiers
    modifier onlyDeployer() {
        require(msg.sender == deployer, "Only deployer.");
        _;
    }

    modifier unsealed() {
        require(!contractSealed, "Contract sealed.");
        _;
    }

    // Constructor
    constructor() {
        deployer = payable(msg.sender);

	A = 1284865837;
	B = 4150755663;
	Inv = 849225893;
    }
    
    function setPalette(bytes memory _palette) external onlyDeployer unsealed {
        palette = _palette;
    }

    function addAsset(uint8 index, bytes memory encoding, string memory name) external onlyDeployer unsealed {
        assets[index] = encoding;
        assetNames[index] = name;
    }

    function addComposites(uint64 key1, uint32 value1, uint64 key2, uint32 value2, uint64 key3, uint32 value3, uint64 key4, uint32 value4) external onlyDeployer unsealed {
        composites[key1] = value1;
        composites[key2] = value2;
        composites[key3] = value3;
        composites[key4] = value4;
    }

    function addPunks(uint8 index, bytes memory _punks) external onlyDeployer unsealed {
        punks[index] = _punks;
    }

    function sealContract() external onlyDeployer unsealed {
        contractSealed = true;
    }

    function punkBackground(uint32 index) public view returns (string memory text) {
        uint32 decoded;
        unchecked { decoded = (Inv * (index - B) & M); }

        uint8 bgType = uint8(decoded >> 30);

        if (bgType > 1) {
            text = "#638595";
        } else if (bgType == 0) {
            text = "#95554f";
        } else if (bgType == 1) {
            text = "#8e6fb6";
        }
        return text;
    }
    

    function punkEncode(uint32 _bg, uint32 _archetype, uint32 _hair, uint32 _beard, uint32 _eyes, uint32 _cheeks, uint32 _mouth, uint32 _other) public view returns (uint32) {
	uint32 index = (_bg % 4) << 30;

	index = (_archetype & 15) << 26 | index;
	index = (_hair      & 31) << 21 | index;
	index = (_beard     & 15) << 17 | index;
	index = (_eyes      & 31) << 12 | index;
	index = (_cheeks    & 7)  << 9  | index;
	index = (_mouth     & 15) << 5  | index;
	index = (_other     & 31)       | index;
	
	unchecked { index = (A * index + B) & M; }
	return index;
    }

    function punkDecode(uint32 index) public view returns (bytes memory) {
	bytes memory attributes = new bytes(7);
	
	uint32 decoded;
	unchecked { decoded = (Inv * (index - B) & M); }

	uint8 idxOther  = uint8( decoded         & 31);
	uint8 idxMouth  = uint8((decoded  >> 5)  & 15);
	uint8 idxCheeks = uint8((decoded  >> 9)  & 7);
	uint8 idxEyes   = uint8((decoded  >> 12) & 31);
	uint8 idxBeard  = uint8((decoded  >> 17) & 15);
	uint8 idxHair   = uint8((decoded  >> 21) & 31);
	uint8 idxArch   = uint8(((decoded >> 26) & 15) % 11);

	/*
	console.log(idxArch);
	console.log(idxHair);
	console.log(idxBeard);
	console.log(idxEyes);
	console.log(idxCheeks);
	console.log(idxMouth);
	console.log(idxOther);	
	*/
	
	bool isMale = (idxArch < 4) || (idxArch > 7);

	if (isMale) {
	    attributes[0] = bytes1(idxOther  > 4  ? 0 : othersMale[idxOther]);
	    attributes[1] = bytes1(idxMouth  > 5  ? 0 : mouthMale[idxMouth]);
	    attributes[2] = bytes1(idxCheeks > 2  ? 0 : cheeksMale[idxCheeks]);
	    attributes[3] = bytes1(idxEyes   > 11 ? 0 : eyesMale[idxEyes]);
	    attributes[4] = bytes1(idxBeard  > 11 ? 0 : beardMale[idxBeard]);
	    attributes[5] = bytes1(idxHair   > 24 ? 0 : hairMale[idxHair]);
	    attributes[6] = bytes1(idxArch+1) ;
	} else {
	    attributes[0] = bytes1(idxOther  > 4  ? 0 : othersFemale[idxOther]);
	    attributes[1] = bytes1(idxMouth  > 5  ? 0 : mouthFemale[idxMouth]);
	    attributes[2] = bytes1(idxCheeks > 2  ? 0 : cheeksFemale[idxCheeks]);
	    attributes[3] = bytes1(idxEyes   > 11 ? 0 : eyesFemale[idxEyes]);
	    attributes[4] = 0;
	    attributes[5] = bytes1(idxHair   > 24 ? 0 : hairFemale[idxHair]);
	    attributes[6] = bytes1(idxArch+1) ;
	}
	
	return attributes;
    }

    /**
     * The Cryptopunk image for the given index.
     * The image is represented in a row-major byte array where each set of 4 bytes is a pixel in RGBA format.
     * @param index the punk index, 
     */
    function punkImage(uint32 index) public view returns (bytes memory) {

	bytes memory attributes = punkDecode(index);
        bytes memory pixels = new bytes(2304);

	for (uint8 j = 0; j < 7; j++) {
	    if (attributes[j] > 0) {
		bytes storage a = assets[uint8(attributes[j])];
 
		uint n = a.length / 3;
		for (uint i = 0; i < n; i++) {
		    uint[4] memory v = [
			uint(uint8(a[i * 3]) & 0xF0) >> 4,
			uint(uint8(a[i * 3]) & 0xF),
			uint(uint8(a[i * 3 + 2]) & 0xF0) >> 4,
			uint(uint8(a[i * 3 + 2]) & 0xF)
		    ];
		    for (uint dx = 0; dx < 2; dx++) {
			for (uint dy = 0; dy < 2; dy++) {
			    uint p = ((2 * v[1] + dy) * 24 + (2 * v[0] + dx)) * 4;
			    if (v[2] & (1 << (dx * 2 + dy)) != 0) {
				bytes4 c = composite(a[i * 3 + 1],
						     pixels[p],
						     pixels[p + 1],
						     pixels[p + 2],
						     pixels[p + 3]
						    );
				pixels[p] = c[0];
				pixels[p+1] = c[1];
				pixels[p+2] = c[2];
				pixels[p+3] = c[3];
			    } else if (v[3] & (1 << (dx * 2 + dy)) != 0) {
				pixels[p] = 0;
				pixels[p+1] = 0;
				pixels[p+2] = 0;
				pixels[p+3] = 0xFF;
			    }
			}
		    }
		}
	    }
	}
        return pixels;
    }

    /**
     * The Cryptopunk image for the given index, in SVG format.
     * In the SVG, each "pixel" is represented as a 1x1 rectangle.
     * @param index the punk index, 0 <= index < 10000
     */
    function punkImageSvg(uint32 index) external view returns (string memory svg) {
        bytes memory pixels = punkImage(index);
	
	
        svg = string(abi.encodePacked(SVG_HEADER));
        bytes memory buffer = new bytes(8);
        for (uint y = 0; y < 24; y++) {
            for (uint x = 0; x < 24; x++) {
                uint p = (y * 24 + x) * 4;
                if (uint8(pixels[p + 3]) > 0) {
                    for (uint i = 0; i < 4; i++) {
                        uint8 value = uint8(pixels[p + i]);
                        buffer[i * 2 + 1] = _HEX_SYMBOLS[value & 0xf];
                        value >>= 4;
                        buffer[i * 2] = _HEX_SYMBOLS[value & 0xf];
                    }
                    svg = string(abi.encodePacked(svg,
                        '<rect x="', toString(x), '" y="', toString(y),'" width="1" height="1" shape-rendering="crispEdges" fill="#', string(buffer),'"/>'));
                }
            }
        }
        svg = string(abi.encodePacked(svg, SVG_FOOTER));
	
    }

    /**
     * The Cryptopunk attributes for the given index.
     * The attributes are a comma-separated list in UTF-8 string format.
     * The first entry listed is not technically an attribute, but the "head type" of the Cryptopunk.
     * @param index the punk index, 0 <= index < 10000
     */
    function punkAttributes(uint32 index) external view returns (string memory text) {
	
        bytes memory attributes = punkDecode(index);
	
        for (uint j = 0; j < 7; j++) {
            uint8 asset = uint8(attributes[j]);
            if (asset > 0) {
                if (j > 0) {
                    text = string(abi.encodePacked(text, ", ", assetNames[asset]));
                } else {
                    text = assetNames[asset];
                }
            } 
        }
	
    }

    function composite(bytes1 index, bytes1 yr, bytes1 yg, bytes1 yb, bytes1 ya) internal view returns (bytes4 rgba) {
        uint x = uint(uint8(index)) * 4;
        uint8 xAlpha = uint8(palette[x + 3]);
        if (xAlpha == 0xFF) {
            rgba = bytes4(uint32(
                    (uint(uint8(palette[x])) << 24) |
                    (uint(uint8(palette[x+1])) << 16) |
                    (uint(uint8(palette[x+2])) << 8) |
                    xAlpha
                ));
        } else {
            uint64 key =
                (uint64(uint8(palette[x])) << 56) |
                (uint64(uint8(palette[x + 1])) << 48) |
                (uint64(uint8(palette[x + 2])) << 40) |
                (uint64(xAlpha) << 32) |
                (uint64(uint8(yr)) << 24) |
                (uint64(uint8(yg)) << 16) |
                (uint64(uint8(yb)) << 8) |
                (uint64(uint8(ya)));
            rgba = bytes4(composites[key]);
        }
    }

    //// Internal helpers to pack attribute choices into index

    // function generateIndices(uint8 hairChoice, uint8 eyesChoice) internal pure returns (uint8 assetIdx) {
    // 	uint8 packed = (_hair & 31) << 19 | (_eyes & 15) << 11;
    // 	return packed;
    // }

    //// String stuff from https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Strings.sol

    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";

    function toString(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
