import { NavBar } from "../components/nav-bar/NavBar";
import fontJSX from "../font-config/font";
import SetTransaction from "../components/transaction/SetTransaction";
import GetTransaction from "../components/transaction/GetTransaction";
// import GammaDisplay from "../components/three/gamma";
import { Select } from "antd";
import { useState } from "react";
import { BiMessageAltEdit } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { SetTranStyle } from "../style/style-component/setTranStyled";
import { GetTranStyled } from "../style/style-component/getTranStyled";
const { Option } = Select;
const Transation: React.FC = () => {
  const [SetkeySelect, setKeySelect] = useState<string | number>("");
  const [GetkeySelect, getkeySelect] = useState<string | number>("");

  return (
    <>
      <NavBar />
      <SetTranStyle>
        <div className="d-flex justify-content-center">
          <h1>
            บันทึกข้อมูล <BiMessageAltEdit />
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <Select
            showSearch
            style={{ width: 500 }}
            placeholder="เลือกรายการบันทึก"
            optionFilterProp="children"
            filterOption={(input: any, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA: any, optionB: any): any =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
            onChange={(value: any) => setKeySelect(value)}
          >
            <Option value="1">บันทึกประวัติส่วนตัวของผู้กระทำผิดกฎหมาย</Option>
            <Option value="2">บันทึกรายงานผู้กระทำกฎหมาย</Option>
            <Option value="3">บันทึกผลงานของเจ้าหน้าที่ตำรวจ</Option>
            <Option value="4">กำหนดหัวหน้าตำรวจ</Option>
            {/* <Option value="5">บันทึกข้อมูลผู้กระทำผิดกฎหมาย</Option> */}
          </Select>
        </div>
        <br></br>
        <SetTransaction SetkeySelect={SetkeySelect} />
      </SetTranStyle>
      <GetTranStyled>
        <div className="d-flex justify-content-center">
          <h1>
            ตรวจสอบข้อมูล <BiMessageDetail />
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <Select
            showSearch
            style={{ width: 500 }}
            placeholder="เลือกรายการตรวจสอบ"
            optionFilterProp="children"
            filterOption={(input: any, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA: any, optionB: any) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
            onChange={(value: any) => getkeySelect(value)}
          >
            <Option value="1">ตรวจสอบสิทธิระดับหัวหน้า</Option>
            <Option value="2">ตรวจสอบประของเจ้าหน้าที่ตำรวจ</Option>
            <Option value="3">ตรวจสอบผลงานของเจ้าหน้าที่ตำรวจ</Option>
            <Option value="4">
              ตรวจสอบผู้บันทึกข้อมูลของผู้กระทำผิดกฎหมาย (ล็อคตำรวจ)
            </Option>
            <Option value="5">
              ตรวจสอบผู้บันทึกข้อมูลของผู้กระทำผิดกฎหมาย (โดยรวม)
            </Option>
            <Option value="6">ตรวจสอบประวัติการบันทึกข้อมูลทั้งหมด</Option>
            <Option value="7">ตรวจสอบจำนวนเหรียญ</Option>
          </Select>
        </div>
        <br></br>
        <GetTransaction GetkeySelect={GetkeySelect} />
      </GetTranStyled>
      {/* <GammaDisplay /> */}
      <style jsx global>
        {fontJSX}
      </style>
    </>
  );
};
export default Transation;
