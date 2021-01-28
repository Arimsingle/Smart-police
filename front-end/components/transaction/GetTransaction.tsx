import React, { useState } from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';
import styled from "styled-components";

function GetTransaction() {
    const Transaction_Styled = styled.div`
    .dasdboard-img{
        width: 50%;
        height: auto;
    }
`;
    const [police, setPolice] = useState('');

    return (
        <div>
            <div className="d-flex justify-content-around">

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบสิทธิระดับหัวหน้า</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบข้อมูลส่วนตัวของตำรวจ</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบสิทธิ</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>
            </div>

            <div className="d-flex justify-content-around">

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบผลงาน</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบผู้บันทึกข้อมูลผู้กระทำผิดกฎหมาย</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบผู้บันทึกข้อมูลผู้กระทำผิดกฎหมาย</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>
            </div>

            <div className="d-flex justify-content-around">

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบผู้กระทำกฎหมาย</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบเหรียญ</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>
            </div>

        </div>
    )
}

export default GetTransaction;
