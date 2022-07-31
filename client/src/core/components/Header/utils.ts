export const animationText = (
  word: string,
  setPlaceholder: Function,
  setFlag: Function
) => {
  const breakdown = word.split("");
  const length = breakdown.length;
  let num = -1;

  const offInterval = () => {
    clearInterval(output);
  };

  const output = setInterval(() => {
    num++;
    if (num === length - 1) {
      offInterval();
      setTimeout(() => {
        const remove = setInterval(() => {
          if (num === 0) {
            clearInterval(remove);
            setFlag((prev: boolean) => !prev);
          }
          setPlaceholder((prev: string) => {
            return prev.slice(0, num);
          });
          num--;
        }, 50);
      }, 2000);
    }
    setPlaceholder((prev: string) => {
      return (prev += breakdown[num]);
    });
  }, 100);
};
