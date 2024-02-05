import { SubmitButton } from "../common/ui/Button";

const SearchForm = () => {
  return (
    <form method="post">
      <div>
        <label htmlFor="ticker">ティッカー</label>
        <input id="ticker" name="ticker" type="text" />
      </div>
      <SubmitButton text="検索" />
    </form>
  );
};

export default SearchForm;
