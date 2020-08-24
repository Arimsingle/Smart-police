pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

contract Smart_Police{
    //constructor
    constructor()public{
        admin = msg.sender;
    }
    address private admin;
    //struct of bandit
    struct Bandit{
        string publicInfo;
    }
    struct Police{
        string publicInfo;
    }
    
    //struct of certifier
    struct Certifier{
        address certifier;
        string certifierPublicInfo;
    }
    
    //modifier path
    modifier onlyAdmin{
        require(msg.sender == admin , 'Only Admin use this method');
        _;
    }
    //mapping 
    mapping(address =>bool) private Claim;
    mapping(address => mapping (address => Bandit[])) private HistoryBanditArray; 
    mapping(address => Certifier[]) private certifierBandit;
    mapping(address => address[])private RecorderBandit;
    mapping(address => Police) private PoliceData;
    //event
    event _SetSupervisor(address indexed _admin,address indexed _supervisor);
    event _SetHistoryBandit(address indexed _admin,address indexed _bandit,string indexed _publicInfo);
    event _PoliceInfo(address indexed _police,string indexed _publicInfo);
    event _RecorderBandit(address indexed _supervisor,address indexed _bandit);
    
    //function set supervisor by admin
    function setSupervisor(address _Supervisor)public onlyAdmin returns(bool sucess){
        Claim[_Supervisor] = true;
        emit _SetSupervisor(admin,_Supervisor);
        return true;
    }
    //function add data police
    function PoliceInfo(address _Police,string  memory _PublicInfo)public returns (bool sucess){
        Police memory _PoliceObj = Police(_PublicInfo);
        PoliceData[_Police] = _PoliceObj;
        emit _PoliceInfo(_Police,_PublicInfo);
        return true;
        
    }
    //function set history of bandit
    function setHistoryBandit(address _Supervisor,address _Bandit,string memory _PublicInfo)public returns(bool sucess){
    require(Claim[_Supervisor] == true,"Only Supervisor use this method");
        Bandit memory _BanditObj = Bandit(_PublicInfo);
        Certifier memory _CertifierObj = Certifier(_Supervisor,_PublicInfo);
        certifierBandit[_Bandit].push(_CertifierObj);
        HistoryBanditArray[_Bandit][_Supervisor].push(_BanditObj);
        RecorderBandit[_Supervisor].push(_Bandit);
        emit _RecorderBandit(_Supervisor,_Bandit);
        emit _SetHistoryBandit(_Supervisor,_Bandit,_PublicInfo);
        return true;
    }
    
    //function get data of police by address
    function getPoliceInfo(address _Police)public view returns(Police memory){
        return PoliceData[_Police];
    }
    //function get all history of bandit 
    function getHistoryBanditArray(address _Certifier,address _Bandit)public view returns(Bandit[] memory){ //function get history of bandit
        return (HistoryBanditArray[_Bandit][_Certifier]);
    }
    //function get certifier of bandit
    function getCertifierBandit(address _Bandit)public view returns(Certifier[] memory){ //function get certifier bandit
        return (certifierBandit[_Bandit]);
    }
    //function get certifier of bandit
    function getRecorderBandit(address _Recorder)public view returns(address[] memory){ //function get certifier bandit
        return (RecorderBandit[_Recorder]);
    }
    function getClaim(address _Recorder)public view returns(bool sucess){
        return Claim[_Recorder];
    }
}