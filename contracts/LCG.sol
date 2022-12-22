// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract LCG {
    address owner;

    uint16 public constant M = type(uint16).max >> 1;

    uint16 public immutable A;
    uint16 public immutable B;
    uint16 public immutable Inv;
    
    constructor(uint16 _m, uint16 _i) {
        require((_m - 1) % 4 == 0,       "Multiplier-1 must be a mutiple of 4.");
        require(checkCoprime(_i, M + 1), "Increment & Modulus must be coprime.");

        owner = msg.sender;
        A = _m;
        B = _i;
        unchecked { (Inv,) = extEuclidean(A, M + 1); }
    }

    function produce(uint16 _i) public view returns (uint16) {
        unchecked { return (A * _i + B) & M; }
    }
    
    function inverse(uint16 _o) public view returns (uint16) {
        unchecked { return (Inv * (_o - B) & M); }
    }

    function extEuclidean(uint16 _a, uint16 _b) internal pure returns (uint16, uint16) {
        if (_b == 0) { return (1, 0); }

        uint16 s;
        uint16 t;

        unchecked {
            uint16 q = _a / _b;
            uint16 r = _a - _b * q;
            (s, t) = extEuclidean(_b, r);
            s = s - q * t;
        }
        return (t, s);
    }

    function checkCoprime(uint16 _a, uint16 _b) internal pure returns (bool) {
        uint16 gcd = _a > _b ? _a : _b;
        while (gcd != 0) {
            uint16 r = _a % gcd;
            _a = gcd;
            gcd = r;
        }
        return (_a == 1);
    }
}
