import Link from "next/link";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
export const FormSuccsess = ({ data }: any) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const Loading = (
        <div>
            <p className="d-flex justify-content-center">กรุณารอสักครู่</p>
            <Spin className="d-flex justify-content-center" indicator={antIcon} />
        </div>
    )

    const Loaded = (
        <div>
            <p className="d-flex justify-content-center">ลงทะเบียนสำเร็จ</p>
            <p className="d-flex justify-content-center">0x{data.value}</p>
            <h1 className='form-success' style={{color:"red"}}>ลงทะเบียนเสร็จสิ้น เข้าสู่ระบบ
                    <Link href='/signin'>
                    <a>ที่นี้</a>
                </Link>
            </h1>
        </div>
    )
    console.log(data);
    console.log(data.value);

    return (
        <>
            {data.message !== "" ? Loaded : Loading}
        </>
        // <div className='form-content-right'>
        // <h1 className='form-success'>ลงทะเบียนเสร็จสิ้น เข้าสู่ระบบ
        //         <Link href='/signin'>
        //         <a>ที่นี้</a>
        //     </Link></h1>
        //     <img className='form-img-2' src='/static/images/face.svg' alt='success-image' />
        // </div>
    )
}