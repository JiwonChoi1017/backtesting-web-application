import { FormEvent } from "react";
import { SubmitButton } from "../common/ui/Button";

type Props = {
  submitHandler: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

const SearchForm = ({ submitHandler }: Props) => {
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="ticker">ティッカー</label>
        <input id="ticker" name="ticker" type="text" />
      </div>
      <SubmitButton text="検索" />
    </form>
  );
};

export default SearchForm;
