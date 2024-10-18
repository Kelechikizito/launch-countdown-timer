const Timer = (props) => {
  return (
    <div class="countdown">
      <div class="flex flex-col w-20 sm:w-32 sm:transform-none gap-4">
        <div class="text-4xl sm:text-7xl" style={{color: 'hsl(345, 95%, 68%)', boxShadow: '0 4rem #191a24 inset'}}>
          <div class="px-4 py-6 rounded-md" style={{backgroundColor: 'hsl(236, 21%, 26%)'}}>00</div>
          <div class="px-4 py-6 rounded-md relative bottom-1/2" style={{backgroundColor: 'hsl(236, 21%, 26%)'}}>00</div>
        </div>
        <p class="uppercase text-[8px] sm:text-xs" style={{color: 'hsl(237, 18%, 59%)', letterSpacing: '3px'}}>{props.title}</p>
      </div>

      {/* <div class="hours">
        <div class="flip-card">
          <div class="top">00</div>
          <div class="bottom">00</div>
        </div>
        <p class="title">Hours</p>
      </div> */}

      {/* <div class="minutes">
        <div class="flip-card">
          <div class="top">00</div>
          <div class="bottom">00</div>
        </div>
        <p class="title">Minutes</p>
      </div> */}

      {/* <div class="seconds">
        <div class="flip-card">
          <div class="top">00</div>
          <div class="bottom">00</div>
        </div>
        <p class="title">Seconds</p>
      </div> */}
    </div>
  );
};

export default Timer;
