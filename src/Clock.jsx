import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  function clockRefresh() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(clockRefresh, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <div>
    <label>DIGITAL CLOCK</label> <br />
    <span>{date.toLocaleTimeString()}</span>
    </div>;
};

export default Clock;
