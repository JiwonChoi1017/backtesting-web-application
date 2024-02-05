/** props. */
type Props = {
  /** children. */
  children: React.ReactNode;
};

/**
 * カード.
 *
 * @param {Props} props
 * @returns {JSX.Element} カード
 */
const Card = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>;
};

export default Card;
