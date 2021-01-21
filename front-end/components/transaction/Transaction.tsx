import React from 'react'
import { Card } from 'antd';
import styled from "styled-components";
import { Input } from 'antd';
import { Button } from 'antd';

const Transaction = () => {

    const Transaction = styled.div`
        .dasdboard-img{
            width: 50%;
            height: auto;
        }
    `;

    return (
        <>
            <div className="d-flex justify-content-around">
                <Card style={{ width: "30%" }}>
                    <h5>บันทึกรายงานผู้กระทำกฎหมาย</h5>
                    <Transaction>
                        <img src="/static/images/bandit.svg" alt="bandit" className="dasdboard-img" />
                    </Transaction>
                    <div className="input-between">
                        <Input placeholder="ผู้ดูแลตำรวจ" />
                        <Input placeholder="รหัสผ่าน" />
                        <Input placeholder="ผู้กระทำผิดกฎหมาย" />
                        <Input placeholder="ข้อมูลหรือรายละเอียด" />
                    </div>
                    <Button type="primary">บันทึกข้อมูล</Button>
                </Card>

                <Card style={{ width: "30%" }}>
                    <h5>บันทึกผลงานของเจ้าหน้าที่ตำรวจ</h5>
                    <Transaction>
                        <img src="/static/images/police.svg" alt="police" className="dasdboard-img" />
                    </Transaction>
                    <div className="input-between">
                        <Input placeholder="ผู้ดูแลตำรวจ" />
                        <Input placeholder="รหัสผ่าน" />
                        <Input placeholder="ตำรวจ" />
                        <Input placeholder="รายละเอียดผลงาน" />
                    </div>
                    <Button type="primary">บันทึกข้อมูล</Button>
                </Card>

                <Card style={{ width: "30%" }}>
                    <h5>ตรวจสอบเหรียญ</h5>
                    <Transaction>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction>
                    <div className="input-between">
                        <Input placeholder="ผู้ดูแลตำรวจ" />
                    </div>
                    <Button type="primary">บันทึกข้อมูล</Button>
                </Card>
            </div>
            <style jsx>
                {`
                .input-between{
                    margin-top :20px;
                    margin-bottom :10px;
                }
                `}
            </style>
        </>
    );
}

export default Transaction;
