export const Validaor = (values: any) => {
    let errors: any = {};
    try {
        if (!values.username.trim()) {
            errors.username = "กรุณากรอกชื่อ";
        }
        if (!values.surname.trim()) {
            errors.surname = "กรุณากรอกนามสกุล";
        }
        if (!values.address.trim()) {
            errors.address = "กรุณากรอกที่อยู่";
        }
        if (!values.phone.trim()) {
            errors.phone = "กรุณากรอกเบอร์มือถือ";
        } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.phone)) {
            errors.phone = "เบอร์มือถือผิดพลาด";
        }
        if (!values.email.trim()) {
            errors.email = "กรุณากรอกอีเมลล์";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'อีเมลล์ผิดพลาด';
        }
        if (!values.password) {
            errors.password = 'กรุณากรอกรหัสผ่าน';
        } else if (values.password.length < 6) {
            errors.password = 'รหัสผ่านต้องมากกว่า 6 ตัวอักษร';
        }

        if (!values.password2) {
            errors.password2 = 'กรุณากรอกรหัสผ่าน';
        } else if (values.password2 !== values.password) {
            errors.password2 = 'รหัสผ่านไม่ตรงกัน';
        }
    } catch (error) {
        console.log(error);
    }

    return errors;
}