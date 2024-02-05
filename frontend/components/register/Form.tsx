import { SubmitButton } from "../common/ui/Button";

const RegisterForm = () => {
  return (
    <>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" name="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input id="password" name="password" type="password" />
      </div>
      <SubmitButton text="登録" />
    </>
  );
};

export default RegisterForm;
