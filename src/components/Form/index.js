import "./form.css";
import Label from "./Label.js";
import TypeInput from "./TypeInput";
import Input from "./Input";
import { useEffect, useState } from "react";

export default function Form() {
  const [number, setNumber] = useState(0);
  const [fromType, setFromType] = useState(10);
  const [toType, setToType] = useState(10);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const num = parseInt(number, fromType);
    setResult(num.toString(toType));
  }, [number, fromType, toType]);

  return (
    <div>
      <div>
        <div>
          <Label>From</Label>
          <TypeInput onChange={(e) => setFromType(Number(e.target.value))} />
        </div>
        <Input
          placeholder={"Number to convert"}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <div>
          <Label>To</Label>
          <TypeInput onChange={(e) => setToType(Number(e.target.value))} />
        </div>
        <span>{result}</span>
      </div>
    </div>
  );
}
