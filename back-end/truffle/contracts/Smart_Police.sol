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
        string privateInfo; //encryp data
    }
    
    //struct of certifier
    struct Certifier{
        address certifier;
        string certifierPublicInfo;
        string certifierPrivateInfo;
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
    
    //event
    event _SetSupervisor(address indexed _admin,address indexed supervisor);
    event _SetHistoryBandit(address indexed _admin,address indexed _bandit,string _publicInfo,string _privateInfo);
    
    //function set
    function setSupervisor(address _Supervisor)public onlyAdmin returns(bool){
        Claim[_Supervisor] = true;
        emit _SetSupervisor(admin,_Supervisor);
        return true;
    }
    //function set history of bandit
    function setHistoryBandit(address _Bandit,string memory _PublicInfo,string memory _PrivateInfo)public returns(bool){
    require(Claim[msg.sender] == true,"Only Supervisor use this method");
        Bandit memory _BanditObj = Bandit(_PublicInfo,_PrivateInfo);
        Certifier memory _CertifierObj = Certifier(msg.sender,_PublicInfo,_PrivateInfo);
        certifierBandit[_Bandit].push(_CertifierObj);
        HistoryBanditArray[_Bandit][msg.sender].push(_BanditObj);
        RecorderBandit[msg.sender].push(_Bandit);
        emit _SetHistoryBandit(msg.sender,_Bandit,_PublicInfo,_PrivateInfo);
        return true;
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
}