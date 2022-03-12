export default function Input(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
