const Timer = (props) => {
  return (
    <div className="countdown">
      <div className="flex flex-col w-20 sm:w-32 gap-4">
        <div
          className="relative text-4xl sm:text-7xl flex flex-col gap-[1px] before:content-[''] before:absolute before:top-1/2 before:left-[0%] before:translate-y-[-50%] before:bg-[#191a24] before:size-4 before:rounded-full before:z-[100] before:translate-x-[-50%] after:content-[''] after:absolute after:top-1/2 after:right-[0%] after:bg-[#191a24] after:size-4 after:rounded-full after:z-[100] after:translate-y-[-50%] after:translate-x-[50%]"
          style={{
            color: "hsl(345, 95%, 68%)",
            boxShadow: "0 10px 0 0 hsl(234, 17%, 12%)",
          }}
        >
          <div
            className="px-4 py-[50%] rounded-md rounded-b-none overflow-hidden pb-0 leading-[0]"
            style={{ backgroundColor: "hsl(236, 21%, 26%)" }}
          >
            {props.countDown}
          </div>
          <div
            className="px-4 py-[50%] rounded-md rounded-t-none overflow-hidden pt-0 leading-[0]"
            style={{ backgroundColor: "hsl(236, 21%, 26%)" }}
          >
            {props.countDown}
          </div>
        </div>
        <p
          className="uppercase text-[8px] sm:text-xs"
          style={{ color: "hsl(237, 18%, 59%)", letterSpacing: "3px" }}
        >
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default Timer;
