import { useRef, useState } from "react";

export default function Mentoring() {
  let name = useRef();
  let gender = useRef();

  const [status, setStatus] = useState("");
  const [education, setEducation] = useState([]);

  let onSubmit = (e) => {
    console.log(name);
    console.log(name.current.value);
    console.log(gender.current.value);
    console.log(status);
    console.log(education);
  };

  // let onSaveStatus = (e) => {
  //     setStatus(e.target.value)
  // }

  let onSaveEducation = (e) => {
    let newEducation = [...education]; // [] ---> [Sarjana]

    if (e.target.checked === false) {
      let idxData = newEducation.indexOf(e.target.value);
      newEducation.splice(idxData, 1);
    } else {
      newEducation.push(e.target.value); // [Sarjana] ---> [Sarjana, SMP]
    }
    setEducation(newEducation); // stateEducation = [Sarjana] ---> [Sarjana, SMP]
  };

  return (
    <>
      <div>
        <label htmlFor="nama">Nama : </label>
        <input
          type="text"
          ref={name}
          placeholder="Input your name"
          className="w-[120px]"
          style={{ border: "1px solid grey" }}
        />
      </div>
      <div>
        <span> Gender :</span>
        <select ref={gender}>
          <option value="Laki-Laki">Laki-Laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>
      <div>
        <span>Select Status</span>
        <input
          type="radio"
          name="inRadio"
          onChange={(e) => setStatus(e.target.value)}
          value="Married"
        />
        Married
        <input
          type="radio"
          name="inRadio"
          onChange={(e) => setStatus(e.target.value)}
          value="Single"
        />
        Single
        <input
          type="checkbox"
          name="inCheckbox"
          onChange={(e) => onSaveEducation(e)}
          value="Sarjana"
        />
      </div>
      Sarjana
      <input
        type="checkbox"
        name="inCheckbox"
        onChange={(e) => onSaveEducation(e)}
        value="SMA"
      />
      SMA
      <input
        type="checkbox"
        name="inCheckbox"
        onChange={(e) => onSaveEducation(e)}
        value="SMP"
      />
      SMP
      <button onClick={onSubmit}>Submit</button>
    </>
  );
}
