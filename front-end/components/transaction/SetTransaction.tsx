import React, { useState } from 'react'
import { Card } from 'antd';
import styled from "styled-components";
import { Input } from 'antd';
import { Button } from 'antd';
const { TextArea } = Input;
const SetTransaction = () => {

    const Transaction_Styled = styled.div`
        .dasdboard-img{
            width: 50%;
            height: auto;
        }
    `;

    const [admin, setAdmin] = useState('');
    const [superviser, setSuperviser] = useState('');
    const [password, setPassword] = useState('');
    const [bandit, setBandit] = useState('');
    const [infoBandit, setInfoBandit] = useState('');
    const [police, setPolice] = useState('');
    const [portfolio, setPortlio] = useState('');
    console.log(superviser, password, bandit, infoBandit, police, portfolio);

    return (
        <>
            <div className="d-flex justify-content-around">
                <Card style={{ width: "25%" }}>
                    <h5>บันทึกรายงานผู้กระทำกฎหมาย</h5>
                    <Transaction_Styled>
                        <img src="/static/images/bandit.svg" alt="bandit" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="ผู้ดูแลตำรวจ (Address)" onChange={(e) => { setSuperviser(e.target.value) }} />
                    </div>
                    <div className="input-between">
                        <Input placeholder="รหัสผ่าน" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="input-between">
                        <Input placeholder="ผู้กระทำผิดกฎหมาย (Address)" onChange={(e) => { setBandit(e.target.value) }} />
                    </div>
                    <div className="input-between">
                        <TextArea rows={4} placeholder="ข้อมูลหรือรายละเอียด" onChange={(e) => { setInfoBandit(e.target.value) }} />
                    </div>
                    <Button type="primary">บันทึกข้อมูล</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>บันทึกผลงานของเจ้าหน้าที่ตำรวจ</h5>
                    <Transaction_Styled>
                        <img src="/static/images/police.svg" alt="police" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="ผู้ดูแลตำรวจ (Address)" onChange={(e) => { setSuperviser(e.target.value) }} />
                    </div>
                    <div className="input-between">
                        <Input placeholder="รหัสผ่าน" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <div className="input-between">
                        <TextArea rows={4} placeholder="รายละเอียดของผลงาน" onChange={(e) => { setPortlio(e.target.value) }} />
                    </div>

                    <Button type="primary">บันทึกข้อมูล</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>กำหนดหัวหน้าตำรวจ</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="ผู้ดูแลเว็บไซต์ (Address)" onChange={(e) => { setAdmin(e.target.value) }} />
                    </div>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setSuperviser(e.target.value) }} />
                    </div>
                    <Button type="primary">บันทึกข้อมูล</Button>
                </Card>
            </div>

            <div className="d-flex justify-content-start">
                <Card style={{ width: "25%" }}>
                    <h5>บันทึกข้อมูลผู้กระทำผิดกฎหมาย</h5>
                    <Transaction_Styled>
                        <img src="/static/images/bandit.svg" alt="bandit" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="ผู้ดูแลตำรวจ (Address)" onChange={(e) => { setSuperviser(e.target.value) }} />
                    </div>
                    <div className="input-between">
                        <Input placeholder="รหัสผ่าน" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="input-between">
                        <Input placeholder="ผู้กระทำผิดกฎหมาย (Address)" onChange={(e) => { setBandit(e.target.value) }} />
                    </div>
                    <div className="input-between">
                        <TextArea rows={4} placeholder="ข้อมูลหรือรายละเอียด" onChange={(e) => { setInfoBandit(e.target.value) }} />
                    </div>
                    <Button type="primary">บันทึกข้อมูล</Button>
                </Card>
            </div>


            <style jsx>
                {`
                .input-between{
                    margin-top :5px;
                    margin-bottom :5px;
                }
                `}
            </style>
        </>
    );
}

export default SetTransaction;
