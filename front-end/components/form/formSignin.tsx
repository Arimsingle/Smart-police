import { UseForm } from "./useForm";
import { Validaor } from "./validateInfo";
import Link from "next/link";
export const FormSignin = ({ submitForm }: any) => {
    const { handleChange, handleSubmit, values, errors } = UseForm(submitForm, Validaor);
    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1 className="text-top">
                    เข้าสู่ระบบของโครงงาน Smart Police
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>อีเมลล์ {errors.email && <span>*{errors.email}</span>}</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='กรอกอีเมลล์ของคุณ'
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>รหัสผ่าน {errors.password && <span>*{errors.password}</span>}</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='กรอกรหัสผ่านของคุณ'
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <button className='form-input-btn' type='submit'>
                    ลงชื่อเข้าใช้
                </button>
                <span className='form-input-login'>
                    ท่านยังไม่มีบัญชี? สมัคร
                    <Link href='/signup'>
                        <a>ที่นี้</a>
                    </Link>
                </span>
            </form>
        </div>
    )
}