pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

contract Smart_Police {
    //constructor
    constructor() public {
        admin = msg.sender;
    }

    address private admin;
    //struct
    struct Bandit {
        string report;
    }
    struct Police {
        string publicInfo;
    }
    struct BanditInfo {
        string publicInfo;
    }
    struct Portfolio {
        string portfolio;
        address supervisor;
    }
    //struct of certifier
    struct Certifier {
        address certifier;
        string certifierPublicInfo;
    }

    //modifier path
    modifier onlyAdmin {
        require(msg.sender == admin, "Only Admin use this method");
        _;
    }
    //บันทึกประจำวัน.
    //mapping varible
    mapping(address => bool) private Claim;
    mapping(address => mapping(address => Bandit[])) private HistoryBanditArray;
    mapping(address => string[]) private IpfsData;
    mapping(address => string[]) private TransactionData;
    mapping(address => address[]) private RecorderBandit;
    mapping(address => Certifier[]) private certifierBandit;
    mapping(address => Police) private PoliceData;
    mapping(address => BanditInfo) private BanditData;
    mapping(address => Portfolio[]) private PortfolioData;
    //event of transaction
    event _SetSupervisor(address indexed _admin, address indexed _supervisor);
    event _SetHistoryBandit(
        address indexed _admin,
        address indexed _bandit,
        string _publicInfo
    );
    event _PoliceInfo(address indexed _police, string _publicInfo);
    event _Bandit_Info(address indexed _bandit, string _publicInfo);
    event _RecorderBandit(address indexed _supervisor, address indexed _bandit);

    //function set supervisor by admin
    function setSupervisor(address _Supervisor)
        public
        onlyAdmin
        returns (bool sucess)
    {
        Claim[_Supervisor] = true;
        emit _SetSupervisor(admin, _Supervisor);
        return true;
    }

    //function set portfolio
    function setPortfolio(
        address _Supervisor,
        address _Police,
        string memory _Portfolio
    ) public returns (bool sucess) {
        require(Claim[_Supervisor] == true, "Only Supervisor use this method");
        Portfolio memory _PortfolioObj = Portfolio(_Portfolio, _Supervisor);
        PortfolioData[_Police].push(_PortfolioObj);
        return true;
    }

    //function add  ipfs uri
    function addIpfs(address _Police, string memory _Ipfs)
        public
        returns (bool sucess)
    {
        IpfsData[_Police].push(_Ipfs);
        return true;
    }

    //function add transaction
    function addTransaction(address _Police, string memory _Transaction)
        public
        returns (bool sucess)
    {
        TransactionData[_Police].push(_Transaction);
        return true;
    }

    //function add data police
    function PoliceInfo(address _Police, string memory _PublicInfo)
        public
        returns (bool sucess)
    {
        Police memory _PoliceObj = Police(_PublicInfo);
        PoliceData[_Police] = _PoliceObj;
        emit _PoliceInfo(_Police, _PublicInfo);
        return true;
    }

    //function add data bandit
    function Bandit_Info(address _Bandit, string memory _PublicInfo)
        public
        returns (bool sucess)
    {
        BanditInfo memory _BanditInfoObj = BanditInfo(_PublicInfo);
        BanditData[_Bandit] = _BanditInfoObj;
        emit _Bandit_Info(_Bandit, _PublicInfo);
        return true;
    }

    //function set history of bandit
    function setHistoryBandit(
        address _Supervisor,
        address _Bandit,
        string memory _Report
    ) public returns (bool sucess) {
        require(Claim[_Supervisor] == true, "Only Supervisor use this method");
        Bandit memory _BanditObj = Bandit(_Report);
        Certifier memory _CertifierObj = Certifier(_Supervisor, _Report);
        certifierBandit[_Bandit].push(_CertifierObj);
        HistoryBanditArray[_Bandit][_Supervisor].push(_BanditObj);
        RecorderBandit[_Supervisor].push(_Bandit);
        emit _RecorderBandit(_Supervisor, _Bandit);
        emit _SetHistoryBandit(_Supervisor, _Bandit, _Report);
        return true;
    }

    //function get data of police by address
    function getPoliceInfo(address _Police)
        public
        view
        returns (Police memory)
    {
        return PoliceData[_Police];
    }

    //function get data of police by address
    function getBanditInfo(address _Bandit)
        public
        view
        returns (BanditInfo memory)
    {
        return BanditData[_Bandit];
    }

    //function get all history of bandit
    function getHistoryBanditArray(address _Certifier, address _Bandit)
        public
        view
        returns (Bandit[] memory)
    {
        return (HistoryBanditArray[_Bandit][_Certifier]);
    }

    //function get certifier of bandit
    function getCertifierBandit(address _Bandit)
        public
        view
        returns (Certifier[] memory)
    {
        return (certifierBandit[_Bandit]);
    }

    //function get certifier of bandit
    function getRecorderBandit(address _Recorder)
        public
        view
        returns (address[] memory)
    {
        return (RecorderBandit[_Recorder]);
    }

    function getPortfolio(address _Police)
        public
        view
        returns (Portfolio[] memory)
    {
        return PortfolioData[_Police];
    }

    //function get claim
    function getClaim(address _Recorder) public view returns (bool sucess) {
        return Claim[_Recorder];
    }

    //function get ipfs
    function getIpfs(address _Police) public view returns (string[] memory) {
        return IpfsData[_Police];
    }

    //function get transaction
    function getTransaction(address _Police)
        public
        view
        returns (string[] memory)
    {
        return TransactionData[_Police];
    }
}
