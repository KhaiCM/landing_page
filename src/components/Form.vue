<template>
  <div :style="{background: background}">
    <div class="container">
      <div
        class="digitalClock my-5"
        @click="changeColor"
      >
          <h1 id="day">{{ day }}</h1>
          <h1 id="hour">{{ hourUpdate }}</h1>
          <h1 id="bar1">:</h1>
          <h1 id="minute">{{ minuteUpdate }}</h1>
          <h1 id="bar2">:</h1>
          <h1 id="ampm">{{ secondUpdate }}</h1>
          <h1 id="ampm">{{ ampm }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      ampm: 0,
      dayName : ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"],
      background: `linear-gradient(to top, #5ee7df 0%, #b490ca 100%);`,
    };
  },
  computed: {
    hourUpdate() {
      return this.hour < 10 ? '0' + this.hour : this.hour;
    },
    secondUpdate() {
      return this.second < 10 ? '0' + this.second : this.second;
    },
    minuteUpdate() {
      return this.minute < 10 ? '0' + this.minute : this.minute;
    }
  },
  watch: {
    background(value) {
      console.log(value);
    }
  },
  methods: {
    calculateETA() {
      let date = new Date();
      let currentDate = date.getDay();
      this.day = this.dayName[currentDate];
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
      this.ampm = this.hour >= 12 ? 'PM' : 'AM';
    },
    changeColor() {
      let hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
      let hexcode1 = "";
      let hexcode2 = "";
      let random_index = 0;

      for(let i = 0; i < 6; i++) {
        random_index = Math.floor(Math.random() * hex_numbers.length);
          hexcode1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * hex_numbers.length);
          hexcode2 += hex_numbers[random_index];
      }

      this.background = `linear-gradient(45deg, #${hexcode1}, #${hexcode2})`;
    },
  },
  created() {
    setInterval(() => {
      this.calculateETA();
    }, 200);
    setInterval(() => {
      this.changeColor();
    }, 5000);
  },
};
</script>
