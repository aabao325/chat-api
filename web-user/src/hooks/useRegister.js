import { API } from 'utils/api';
import { useNavigate } from 'react-router';
import { showSuccess } from 'utils/common';

const useRegister = () => {
  const navigate = useNavigate();
  const register = async (input, turnstile) => {
    try {
      const res = await API.post(`/api/user/register?turnstile=${turnstile}`, input);
      const { success, message } = res.data;
      if (success) {
        showSuccess('注册成功！');
        navigate('/login');
      }
      return { success, message };
    } catch (err) {
      // 请求失败，设置错误信息
      return { success: false, message: '' };
    }
  };

  const sendVerificationCode = async (email, turnstile) => {
    try {
      const res = await API.get(`/api/verification?email=${email}&turnstile=${turnstile}`);
      const { success, message } = res.data;
      if (success) {
        showSuccess('验证码发送成功，请检查你的邮箱！');
      }
      return { success, message };
    } catch (err) {
      console.error('发送验证码请求失败:', err);
      // return { success: false, message: err.response?.data?.message || '发送验证码失败，请稍后重试' };
      return { success: false, message: '发送验证码失败，请稍后重试' };
    }
  };

  return { register, sendVerificationCode };
};

export default useRegister;
