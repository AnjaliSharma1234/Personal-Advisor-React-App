import axios from "axios";
import { useEffect } from "react";
import { useInstance } from "object-hooks";

class Advice {
  value: string | null = null;

  fetch = async () => {
    try {
      const { data } = await axios.get("https://api.adviceslip.com/advice");
      this.value = data.slip.advice;
    } catch (e) {
      console.error(e);
    }
  };
}

export const useAdvice = () => {
  const [advice] = useInstance(Advice);

  useEffect(() => {
    advice.fetch();
  }, []);

  return advice;
};
