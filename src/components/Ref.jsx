import { createRef } from "react";

function Ref() {
  const ref = createRef();
  const clickBtn = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div>
        <input style={{ marginBottom: "70rem" }} type="text" ref={ref} />
      </div>
      <button
        onClick={clickBtn}
        style={{
          color: "red",
          background: "red",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "2rem",
          marginBottom: "101px",
        }}
      >
        👆🏻
      </button>
    </>
  );
}

export default Ref;
