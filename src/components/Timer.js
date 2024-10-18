const Timer = (props) => {
  return (
    <div class="countdown">
      <div class="days flex flex-col w-20 sm:w-32 sm:transform-none">
        <div class="" style={{color: 'hsl(345, 95%, 68%)'}}>
          <div class="px-4 py-6">00</div>
          <div class="px-4 py-6">00</div>
        </div>
        <p class="uppercase text-xs" style={{color: 'hsl(237, 18%, 59%)', letterSpacing: '4px'}}>{props.title}</p>
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
