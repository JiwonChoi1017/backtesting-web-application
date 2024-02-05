/** Props. */
type Props = {
  /** テキスト. */
  text: string;
};

export const SubmitButton = ({ text }: Props) => {
  return <button type="submit">{text}</button>;
};
