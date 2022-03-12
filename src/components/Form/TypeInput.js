export default function TypeInput(props) {
  return (
    <select onChange={props.onChange}>
      <option value="10">Decimal</option>
      <option value="2">Binary</option>
      <option value="8">Octal</option>
      <option value="16">HexaDecimal</option>
    </select>
  );
}
