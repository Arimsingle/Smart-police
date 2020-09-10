import { UseForm } from "./useForm";
import { Validaor } from "./validateInfo";
import Link from "next/link";
export const FormSignup = ({ submitForm }: any) => {
    const { handleChange, handleSubmit, values, errors } = UseForm(submitForm, Validaor);
    return (
        <div className="form-container">
            <div className='form-content-left'>
                <img className='form-img' src='/static/images/app.svg' alt='spaceship' />
            </div>
            <div className='form-content-right'>
                <form onSubmit={handleSubmit} className='form' noValidate>
                    <h1 className="text-top">
                        สมัครสมาชิกของโครงงาน Smart Police ได้แล้ววันนี้
                </h1>
                    <div className='form-inputs'>
                        <label className='form-label'>ชื่อ</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='กรอกชื่อของคุณ'
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>นามสกุล</label>
                        <input
                            className='form-input'
                            type='text'
                            name='surname'
                            placeholder='กรอกนามสกุลของคุณ'
                            value={values.surname}
                            onChange={handleChange}
                        />
                        {errors.surname && <p>{errors.surname}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>อีเมลล์</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='กรอกอีเมลล์ของคุณ'
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>เบอร์มือถึอ</label>
                        <input
                            className='form-input'
                            type='text'
                            name='phone'
                            placeholder='กรอกอีเมลล์ของคุณ'
                            value={values.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p>{errors.phone}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>รหัสผ่าน</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='กรอกรหัสผ่านของคุณ'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>ยืนยันรหัสผ่าน</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password2'
                            placeholder='ยืนยันรหัสผ่านของคุณ'
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>ที่อยู่</label>
                        <textarea
                            className='form-input-aria'
                            name='address'
                            placeholder='กรอก ที่อยู่ บ้านเลขที่ หมู่ ตำบล จังหวัด รหัสไปรษณีย์'
                            value={values.address}
                            onChange={handleChange}
                        />
                        {errors.address && <p>{errors.address}</p>}
                    </div>
                    <button className='form-input-btn' type='submit'>
                        สมัคร
                    </button>
                    <span className='form-input-login'>
                        ท่านมีบัญชีอยู่แล้ว? เข้าสู่ระบบ
                    <Link href='/signin'>
                            <a>ที่นี้</a>
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    )
} 