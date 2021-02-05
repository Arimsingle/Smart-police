import React, { useState } from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';
import styled from "styled-components";

function GetTransaction({ GetkeySelect }: any) {
    const Transaction_Styled = styled.div`
    .dasdboard-img{
        width: 50%;
        height: auto;
    }
`;
    const [police, setPolice] = useState('');
    const [superviser, setSuperviser] = useState('');
    const [bandit, setBandit] = useState('');

    const getTransactionJSX = [
        {
            key: '1',
            jsx: <Card style={{ width: "25%" }}>
                <h5>ตรวจสอบสิทธิระดับหัวหน้า</h5>
                <Transaction_Styled>
                    <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                </Transaction_Styled>
                <div className="input-between">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary">ตรวจสอบ</Button>
                </div>
            </Card>
        },
        {
            key: '2',
            jsx: <Card style={{ width: "25%" }}>
                <h5>ตรวจสอบประของเจ้าหน้าที่ตำรวจ</h5>
                <Transaction_Styled>
                    <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                </Transaction_Styled>
                <div className="input-between">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary">ตรวจสอบ</Button>
                </div>
            </Card>
        },
        {
            key: '3',
            jsx: <Card style={{ width: "25%" }}>
                <h5>ตรวจสอบสิทธิพิเศษ</h5>
                <Transaction_Styled>
                    <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                </Transaction_Styled>
                <div className="input-between">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setSuperviser(e.target.value) }} />
                </div>
                <div className="mt-1">

                    <Button type="primary">ตรวจสอบ</Button>
                </div>
            </Card>
        }
        ,
        {
            key: '4',
            jsx: <Card style={{ width: "25%" }}>
                <h5>ตรวจสอบผลงานของเจ้าหน้าที่ตำรวจ</h5>
                <Transaction_Styled>
                    <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                </Transaction_Styled>
                <div className="input-between">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary">ตรวจสอบ</Button>
                </div>
            </Card>
        }
        ,
        {
            key: '5',
            jsx: <Card style={{ width: "25%" }}>
                <h5>ตรวจสอบผู้บันทึกข้อมูลของผู้กระทำผิดกฎหมาย (ล็อคตำรวจ)</h5>
                <Transaction_Styled>
                    <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                </Transaction_Styled>
                <div className="input-between">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    <Input placeholder="ผู้กระทำผิดกฎหมาย (Address)" onChange={(e) => { setBandit(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary">ตรวจสอบ</Button>
                </div>
            </Card>
        }
        ,
        {
            key: '6',
            jsx: <Card style={{ width: "25%" }}>
                <h5>ตรวจสอบผู้บันทึกข้อมูลของผู้กระทำผิดกฎหมาย (โดยรวม)</h5>
                <Transaction_Styled>
                    <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                </Transaction_Styled>
                <div className="input-between">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary">ตรวจสอบ</Button>
                </div>
            </Card>
        }
        ,
        {
            key: '7',
            jsx: <Card style={{ width: "25%" }}>
                <h5>ตรวจสอบจำนวนเหรียญ</h5>
                <Transaction_Styled>
                    <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                </Transaction_Styled>
                <div className="input-between">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary">ตรวจสอบ</Button>
                </div>
            </Card>
        }
        ,
        {
            key: '8',
            jsx: <Card style={{ width: "25%" }}>
                <h5>ตรวจสอบประวัติการบันทึกข้อมูลทั้งหมด</h5>
                <Transaction_Styled>
                    <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                </Transaction_Styled>
                <div className="input-between">
                    <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                </div>
                <div className="mt-1">
                    <Button type="primary">ตรวจสอบ</Button>
                </div>
            </Card>
        }
    ]
    return (
        <>
            <div className="d-flex justify-content-center">
                {
                    getTransactionJSX.map((index: any) => {
                        console.log(index.key, GetkeySelect);
                        return index.key === GetkeySelect && index.jsx;

                    })
                }
            </div>

            {/* <div className="d-flex justify-content-around">
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
                    <h5>ตรวจสอบประของเจ้าหน้าที่ตำรวจ</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบสิทธิพิเศษ</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setSuperviser(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบผลงานของเจ้าหน้าที่ตำรวจ</h5>
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
                    <h5>ตรวจสอบผู้บันทึกข้อมูลของผู้กระทำผิดกฎหมาย (ล็อคตำรวจ)</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                        <Input placeholder="ผู้กระทำผิดกฎหมาย (Address)" onChange={(e) => { setBandit(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบผู้บันทึกข้อมูลของผู้กระทำผิดกฎหมาย (โดยรวม)</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบจำนวนเหรียญ</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>

                <Card style={{ width: "25%" }}>
                    <h5>ตรวจสอบประวัติการบันทึกข้อมูลทั้งหมด</h5>
                    <Transaction_Styled>
                        <img src="/static/images/coin.svg" alt="coin" className="dasdboard-img" />
                    </Transaction_Styled>
                    <div className="input-between">
                        <Input placeholder="เจ้าหน้าที่ตำรวจ (Address)" onChange={(e) => { setPolice(e.target.value) }} />
                    </div>
                    <Button type="primary">ตรวจสอบ</Button>
                </Card>
            </div> */}
        </>
    )
}

export default GetTransaction;
