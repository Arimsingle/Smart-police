import React, { useState } from "react";
import axios from "axios";
import { Input } from "antd";
import { Button } from "antd";
import { Card } from "antd";
import { GetTranStyled } from "../../style/style-component/getTranStyled";
import { TransactionStyled } from "../../style/style-component/getTranStyled";

function GetTransaction({ GetkeySelect }: any) {
  const [police, setPolice] = useState<string>("");
  const [superviser, setSuperviser] = useState<string>("");
  const [bandit, setBandit] = useState<string>("");

  const CheckSuperviser: any = async (info: any) => {
    try {
      await axios
        .post(`http://localhost:8000/api/claimer`, info)
        .then((result: any) => {
          console.log(result);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setSuperviser("");
    }
  };
  const CheckInfoPolice: any = async (info: any) => {
    try {
      await axios
        .post(`http://localhost:8000/api/policeinfo`, info)
        .then((result: any) => {
          console.log(result);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setPolice("");
    }
  };
  const CheckPortfolio: any = async (info: any) => {
    try {
      await axios
        .post(`http://localhost:8000/api/myportfolio`, info)
        .then((result: any) => {
          console.log(result);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setPolice("");
    }
  };
  const CheckRecorderPolice: any = async (info: any) => {
    //ตรวจสอบผู้บันทึกขอ้มูลผู้กระทำผิดกฎหมาย
    try {
      await axios
        .post(`http://localhost:8000/api/historybandit`, info)
        .then((result: any) => {
          console.log(result);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setPolice("");
      setBandit("");
    }
  };
  const CheckRecorderPolices: any = async (info: any) => {
    //ตรวจสอบผู้บันทึกขอ้มูลผู้กระทำผิดกฎหมาย รวม
    try {
      await axios
        .post(`http://localhost:8000/api/recorderBandit`, info)
        .then((result: any) => {
          console.log(result);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setPolice("");
    }
  };
  const CheckHistory: any = async (info: any) => {
    try {
      await axios
        .post(`http://localhost:8000/api/ipfs`, info)
        .then((result: any) => {
          console.log(result);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setPolice("");
    }
  };
  const CheckBalance: any = async (info: any) => {
    try {
      await axios
        .post(`http://localhost:8000/api/balance`, info)
        .then((result: any) => {
          console.log(result);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setPolice("");
    }
  };

  const getTransactionJSX = [
    {
      key: "1",
      jsx: (
        <Card className="card-set-transaction">
          <div className="d-flex justify-content-center">
            <h5>ตรวจสอบสิทธิระดับหัวหน้า</h5>
          </div>
          <TransactionStyled>
            <div className="d-flex justify-content-center">
              <img
                src="/static/images/boss.svg"
                alt="coin"
                className="dasdboard-img"
              />
            </div>
          </TransactionStyled>
          <div className="mt-1">
            <Input
              placeholder="เจ้าหน้าที่ตำรวจ (Address)"
              onChange={(e) => {
                setPolice(e.target.value);
              }}
            />
          </div>
          <div className="mt-1">
            <Button
              type="primary"
              onClick={() => {
                CheckSuperviser({ superviser });
              }}
            >
              ตรวจสอบ
            </Button>
          </div>
        </Card>
      ),
    },
    {
      key: "2",
      jsx: (
        <Card className="card-set-transaction">
          <div className="d-flex justify-content-center">
            <h5>ตรวจสอบประวัติของเจ้าหน้าที่ตำรวจ</h5>
          </div>
          <TransactionStyled>
            <div className="d-flex justify-content-center">
              <img
                src="/static/images/search.svg"
                alt="coin"
                className="dasdboard-img"
              />
            </div>
          </TransactionStyled>
          <div className="mt-1">
            <Input
              placeholder="เจ้าหน้าที่ตำรวจ (Address)"
              onChange={(e: any) => {
                setPolice(e.target.value);
              }}
            />
          </div>
          <div className="mt-1">
            <Button
              type="primary"
              onClick={() => {
                CheckInfoPolice({ police });
              }}
            >
              ตรวจสอบ
            </Button>
          </div>
        </Card>
      ),
    },
    {
      key: "3",
      jsx: (
        <Card className="card-set-transaction">
          <div className="d-flex justify-content-center">
            <h5>ตรวจสอบผลงานของเจ้าหน้าที่ตำรวจ</h5>
          </div>
          <TransactionStyled>
            <div className="d-flex justify-content-center">
              <img
                src="/static/images/resume.svg"
                alt="coin"
                className="dasdboard-img"
              />
            </div>
          </TransactionStyled>
          <div className="mt-1">
            <Input
              placeholder="เจ้าหน้าที่ตำรวจ (Address)"
              onChange={(e) => {
                setPolice(e.target.value);
              }}
            />
          </div>
          <div className="mt-1">
            <Button
              type="primary"
              onClick={() => {
                CheckPortfolio({ police });
              }}
            >
              ตรวจสอบ
            </Button>
          </div>
        </Card>
      ),
    },
    {
      key: "4",
      jsx: (
        <Card className="card-set-transaction">
          <div className="d-flex justify-content-center">
            <h5>ตรวจสอบผู้บันทึกข้อมูลของผู้กระทำผิดกฎหมาย (ล็อคตำรวจ)</h5>
          </div>
          <TransactionStyled>
            <div className="d-flex justify-content-center">
              <img
                src="/static/images/stat.svg"
                alt="coin"
                className="dasdboard-img"
              />
            </div>
          </TransactionStyled>
          <div className="mt-1">
            <Input
              placeholder="เจ้าหน้าที่ตำรวจ (Address)"
              onChange={(e) => {
                setPolice(e.target.value);
              }}
            />
          </div>
          <div className="mt-1">
            <Input
              placeholder="ผู้กระทำผิดกฎหมาย (Address)"
              onChange={(e) => {
                setBandit(e.target.value);
              }}
            />
          </div>
          <div className="mt-1">
            <Button
              type="primary"
              onClick={() => {
                CheckRecorderPolices({ certifier: police, bandit });
              }}
            >
              ตรวจสอบ
            </Button>
          </div>
        </Card>
      ),
    },
    {
      key: "5",
      jsx: (
        <Card className="card-set-transaction">
          <div className="d-flex justify-content-center">
            <h5>ตรวจสอบผู้บันทึกข้อมูลของผู้กระทำผิดกฎหมาย (โดยรวม)</h5>
          </div>
          <TransactionStyled>
            <div className="d-flex justify-content-center">
              <img
                src="/static/images/stat.svg"
                alt="coin"
                className="dasdboard-img"
              />
            </div>
          </TransactionStyled>
          <div className="mt-1">
            <Input
              placeholder="เจ้าหน้าที่ตำรวจ (Address)"
              onChange={(e) => {
                setPolice(e.target.value);
              }}
            />
          </div>
          <div className="mt-1">
            <Button
              type="primary"
              onClick={() => {
                CheckRecorderPolice({ recorder: police });
              }}
            >
              ตรวจสอบ
            </Button>
          </div>
        </Card>
      ),
    },
    {
      key: "6",
      jsx: (
        <Card className="card-set-transaction">
          <div className="d-flex justify-content-center">
            <h5>ตรวจสอบประวัติการบันทึกข้อมูลทั้งหมด</h5>
          </div>
          <TransactionStyled>
            <div className="d-flex justify-content-center">
              <img
                src="/static/images/list.svg"
                alt="coin"
                className="dasdboard-img"
              />
            </div>
          </TransactionStyled>
          <div className="mt-1">
            <Input
              placeholder="เจ้าหน้าที่ตำรวจ (Address)"
              onChange={(e) => {
                setPolice(e.target.value);
              }}
            />
          </div>
          <div className="mt-1">
            <Button
              type="primary"
              onClick={() => {
                CheckHistory({ account: police });
              }}
            >
              ตรวจสอบ
            </Button>
          </div>
        </Card>
      ),
    },
    {
      key: "7",
      jsx: (
        <Card className="card-set-transaction">
          <div className="d-flex justify-content-center">
            <h5>ตรวจสอบจำนวนเหรียญ</h5>
          </div>
          <TransactionStyled>
            <div className="d-flex justify-content-center">
              <img
                src="/static/images/getCoin.svg"
                alt="coin"
                className="dasdboard-img"
              />
            </div>
          </TransactionStyled>
          <div className="mt-1">
            <Input
              placeholder="เจ้าหน้าที่ตำรวจ (Address)"
              onChange={(e) => {
                setPolice(e.target.value);
              }}
            />
          </div>
          <div className="mt-1">
            <Button
              type="primary"
              onClick={() => {
                CheckBalance({ police });
              }}
            >
              ตรวจสอบ
            </Button>
          </div>
        </Card>
      ),
    },
  ];
  return (
    <GetTranStyled>
      <div className="d-flex justify-content-center">
        {getTransactionJSX.map((index: any) => {
          console.log(index.key, GetkeySelect);
          return index.key === GetkeySelect && index.jsx;
        })}
      </div>
    </GetTranStyled>
  );
}

export default GetTransaction;
