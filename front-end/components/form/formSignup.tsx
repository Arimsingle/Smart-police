import { UseForm } from "./useForm";
import { Validaor } from "./validateInfo";
export const FormSignup = ({ submitForm }: any) => {
    const { handleChange, handleSubmit, values, errors } = UseForm(submitForm, Validaor);
    return (
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
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>อีเมลล์</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>รหัสผ่าน</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
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
                        placeholder='Confirm your password'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    สมัคร
                </button>
                <span className='form-input-login'>
                    ท่านมีบัญชีอยู่แล้ว? เข้าสู่ระบบ <a href='#'>ที่นี้</a>
                </span>
            </form>
        </div>
    )
} 