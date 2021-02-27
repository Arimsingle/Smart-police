import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import styled from "styled-components";
import { Input } from 'antd';
import { Button } from 'antd';
import { notification } from 'antd';
const { TextArea } = Input;
const Transaction_Styled = styled.div`
        .dasdboard-img{
            width: 50%;
            height: auto;
        }
    `;
const SetTransaction = ({ SetkeySelect }: any) => {
    const [admin, setAdmin] = useState<any>('');
    const [supervisor, setSuperviser] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const [bandit, setBandit] = useState<any>('');
    const [publicInfo, setPublicInfo] = useState<any>('');
    const [police, setPolice] = useState<any>('');
    const [portfolio, setPortfolio] = useState<any>('');

    const [name, setName] = useState<any>('');
    const [surname, setSername] = useState<any>('');
    const [phone, setPhone] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [address, setAdress] = useState<any>('');

    const [status, setStatus] = useState<any>(false);

    const openNotificationWithIcon = () => {
        notification["success"]({
            message: 'บันทึกข้อมูลเสร็จสิ้น',
            description:
                'การบันทึกข้อมูลเสร็จสิ้น สามารถไปดูข้อมูลได้ที่หน้าแสดงไทม์ไลน์',
        });
        setStatus(false);
    };

    const RecordBandit: any = async (valueRegister: any) => {
        console.log(valueRegister);
        try {
            await axios.post(`http://localhost:8000/api/record`, valueRegister)
                .then((result) => {
                    console.log(result);
                    console.log(result.statusText);
                    setStatus(result.statusText)

                }).catch((err) => {
                    console.log(err);
                })
            setSuperviser('');
            setPassword('');
            setBandit('');
            setPublicInfo('');
        } catch (error) {
            console.log(error);
        }


    }
    const RegisterBandit: any = async (valueRegister: any) => {
        console.log(valueRegister);
        try {
            await axios.post(`http://localhost:8000/api/bandit/register`, valueRegister)
                .then((result) => {
                    console.log(result);
                    setStatus(result.statusText)
                    setName('');
                    setSername('');
                    setPhone('');
                    setEmail('');
                    setPolice('');
                    setPassword('');
                    setAdress('');
                }).catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
        }

    }

    const PortFolioPolice: any = async (valuePortfolio: any) => {
        try {
            await axios.post(`http://localhost:8000/api/portfolio`, valuePortfolio)
                .then((result) => {
                    console.log(result);
                    setStatus(result.statusText);
                    setSuperviser('');
                    setPassword('');
                    setPolice('');
                    setPortfolio('');
                }).catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
        }
    }

    const GiveSuperviser: any = async (valueSuperviser: any) => {
        try {
            await axios.post(`http://localhost:8000/api/supervisor`, valueSuperviser)
                .then((result) => {
                    console.log(result);
                    setStatus(result.statusText);
                    setSuperviser('');
                }).catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setTransactionJSX = [
        {
            key: '1',
            jsx: <Card style={{ width: "25%" }}>
                <div className="d-flex justify-content-center">
                    <h5>บันทึกประวัติส่วนตัวของผู้กระทำผิดกฎหมาย</h5>
                </div>
                <Transaction_Styled>
                    <div className="d-flex justify-content-center">
                        <img src="/static/images/bandit.svg" alt="bandit" className="dasdboard-img" />
                    </div>
                </Transaction_Styled>
                <div className="mt-1">
                    <Input placeholder="ชื่อ" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Input placeholder="นามสกุล" value={surname} onChange={(e) => { setSername(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Input placeholder="เบอร์โทรศัพท์" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Input type="email" placeholder="อีเมล" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" value={police} onChange={(e) => { setPolice(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Input type="password" placeholder="รหัสผ่าน (Police)" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <TextArea rows={4} placeholder="ที่อยู่ บ้านเลขที่ หมู่ ตำบล อำเเภอ จังหวัด" value={address} onChange={(e) => { setAdress(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary" onClick={() => { RegisterBandit({ name, surname, phone, email, police, password, address }) }}>บันทึกข้อมูล</Button>
                </div>

            </Card>
        },
        {
            key: '2',
            jsx: <Card style={{ width: "25%" }}>
                <div className="d-flex justify-content-center">
                    <h5>บันทึกรายงานผู้กระทำผิดกฎหมาย</h5>
                </div>
                <Transaction_Styled>
                    <div className="d-flex justify-content-center">

                        <img src="/static/images/bandit_.svg" alt="bandit" className="dasdboard-img" />
                    </div>

                </Transaction_Styled>
                <div className="mt-1">
                    <Input placeholder="ผู้ดูแลตำรวจ (Address)" onChange={(e) => { setSuperviser(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Input type="password" placeholder="รหัสผ่าน" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Input placeholder="ผู้กระทำผิดกฎหมาย (Address)" onChange={(e) => { setBandit(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <TextArea rows={4} placeholder="ข้อมูลหรือรายละเอียด" onChange={(e) => { setPublicInfo(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary" onClick={() => { RecordBandit({ supervisor, password, bandit, publicInfo }) }}>บันทึกข้อมูล</Button>
                </div>

            </Card>
        },
        {
            key: '3',
            jsx: <Card style={{ width: "25%" }}>
                <div className="d-flex justify-content-center">
                    <h5>บันทึกผลงานของเจ้าหน้าที่ตำรวจ</h5>
                </div>
                <Transaction_Styled>
                    <div className="d-flex justify-content-center">
                        <img src="/static/images/resume_police.svg" alt="police" className="dasdboard-img" />
                    </div>
                </Transaction_Styled>
                <div className="mt-1">
                    <Input placeholder="ผู้ดูแลตำรวจ (Address)" onChange={(e) => { setSuperviser(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Input type="password" placeholder="รหัสผ่าน" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <TextArea rows={4} placeholder="รายละเอียดของผลงาน" onChange={(e) => { setPortfolio(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary" onClick={() => { PortFolioPolice({ supervisor, password, police, portfolio }) }}>บันทึกข้อมูล</Button>
                </div>

            </Card>
        },
        {
            key: '4',
            jsx: <Card style={{ width: "25%" }}>
                <div className="d-flex justify-content-center">
                    <h5>กำหนดหัวหน้าตำรวจ</h5>
                </div>
                <Transaction_Styled>
                    <div className="d-flex justify-content-center">
                        <img src="/static/images/superviser_police.svg" alt="coin" className="dasdboard-img" />
                    </div>
                </Transaction_Styled>
                <div className="mt-1">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setSuperviser(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary" onClick={() => GiveSuperviser({ supervisor })}>บันทึกข้อมูล</Button>
                </div>
            </Card>
        },
        // {
        //     key: '5',
        //     jsx: <Card style={{ width: "25%" }}>
        //         <div className="d-flex justify-content-center">
        //             <h5>บันทึกข้อมูลผู้กระทำผิดกฎหมาย</h5>
        //         </div>
        //         <Transaction_Styled>
        //             <div className="d-flex justify-content-center">
        //                 <img src="/static/images/bandit_input.svg" alt="bandit" className="dasdboard-img" />
        //             </div>
        //         </Transaction_Styled>
        //         <div className="mt-1">
        //             <Input placeholder="ผู้ดูแลตำรวจ (Address)" onChange={(e) => { setSuperviser(e.target.value) }} />
        //         </div>
        //         <div className="mt-1">
        //             <Input placeholder="รหัสผ่าน" onChange={(e) => { setPassword(e.target.value) }} />
        //         </div>
        //         <div className="mt-1">
        //             <Input placeholder="ผู้กระทำผิดกฎหมาย (Address)" onChange={(e) => { setBandit(e.target.value) }} />
        //         </div>
        //         <div className="mt-1">
        //             <TextArea rows={4} placeholder="ข้อมูลหรือรายละเอียด" onChange={(e) => { setPublicInfo(e.target.value) }} />
        //         </div>
        //         <div className="mt-1">
        //             <Button type="primary">บันทึกข้อมูล</Button>
        //         </div>

        //     </Card>
        // }
    ];
    return (
        <>
            <div className="d-flex justify-content-center">
                {
                    setTransactionJSX.map((index: any) => {
                        console.log(index.key, SetkeySelect);
                        return index.key === SetkeySelect && index.jsx;

                    })
                }
                {status && openNotificationWithIcon()}
            </div>
        </>
    );
}

export default SetTransaction;
