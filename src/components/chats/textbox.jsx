"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const TextBox = () => {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (text !== "") {
      setDisabled(false);
    }
    if (text === "") {
      setDisabled(true);
    }
  }, [text]);

  return (
    <div className="self-end justify-self-end px-5 mb-5 flex items-center gap-5 w-full">
      <Input
        name="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoComplete="off"
        className="h-[51px] border-2 rounded-xl border-gray-200 font-normal dark:border-zinc-700 bg-gray-200 dark:bg-zinc-800 dark:text-white p-3 md:text-md"
        placeholder="Type a message..."
      />
      <Button
        disabled={disabled}
        className="h-[51px] bg-blue-700 border-2 border-blue-600 rounded-xl"
      >
        Send
      </Button>
    </div>
  );
};

export default TextBox;
