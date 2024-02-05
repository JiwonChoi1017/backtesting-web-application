import { SubmitButton } from "../common/ui/Button";

const LoginForm = () => {
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
      <SubmitButton text="ログイン" />
    </>
  );
};

export default LoginForm;
