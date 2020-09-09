import { UseForm } from "./useForm";
import { Validaor } from "./validateInfo";
export const FormSignin = ({ submitForm }: any) => {
    const { handleChange, handleSubmit, values, errors } = UseForm(submitForm, Validaor);
    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1 className="text-top">
                    เข้าสู่ระบบของโครงงาน Smart Police
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>อีเมลล์</label>
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
                    <label className='form-label'>รหัสผ่าน</label>
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
                <button className='form-input-btn' type='submit'>
                    ลงชื่อเข้าใช้
                </button>
            </form>
        </div>
    )
}