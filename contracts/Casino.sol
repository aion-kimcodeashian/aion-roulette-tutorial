pragma solidity 0.4.15;

library SafeMath {
  function mul(uint _a, uint _b) internal constant returns (uint c)
  { if (_a == 0) {
     return 0;
  }
    c = _a * _b;
    require(c / _a == _b);
    return c;
  }
  function div(uint _a, uint _b) internal constant returns (uint){
    require(_b > 0);
    return _a / _b;
  }
  function sub(uint _a, uint _b) internal constant returns (uint){
    require(_b <= _a);
    return _a - _b;
  }
  function add(uint _a, uint _b) internal constant returns (uint c){
    c = _a + _b;
    require(c >= _a);
    return c;
  }
}

contract Casino {
  using SafeMath for uint;

}
