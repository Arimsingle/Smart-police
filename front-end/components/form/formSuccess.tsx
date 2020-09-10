import Link from "next/link";
export const FormSuccsess = () => {
    return (
        <div className='form-content-right'>
            <h1 className='form-success'>ลงทะเบียนเสร็จสิ้น เข้าสู่ระบบ
                    <Link href='/signin'>
                        <a>ที่นี้</a>
                    </Link></h1>
            <img className='form-img-2' src='/static/images/face.svg' alt='success-image' />
        </div>
    )
}