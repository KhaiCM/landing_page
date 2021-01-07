<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-12">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-success mt-3"
          data-toggle="modal"
          @click="showModal"
          data-target="#"
        >
          Ngày cần tính
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          ref="modal"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Thông tin ngày Hiển thị
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <!-- <label for="exampleFormControlInput1">nhập</label> -->
                    <div class="row justify-content-md-left">
                      <div class="col-9 d-flex flex-row">
                        <input
                          type="date"
                          class="form-control p-2"
                          v-model="dateInput"
                        />
                        <label class="p-2" for="">Ngày</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  @click="calculateETA"
                  class="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row text-white">
      <div class="col-3 d-flex d-flex flex-column">
        <div class="digit">{{ day }}</div>
        <span class="text">Ngày</span>
      </div>
      <div class="col-3 d-flex d-flex flex-column">
        <div class="digit">{{ hourETA }}</div>
        <span class="text">Giờ</span>
      </div>
      <div class="col-3 d-flex d-flex flex-column">
        <div class="digit">{{ minuteETA }}</div>
        <span class="text">Phút</span>
      </div>
      <div class="col-3 d-flex d-flex flex-column">
        <div class="digit">{{ secondETA }}</div>
        <span class="text">Giây</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dateInput: "",
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      currentDate: new Date(),
    };
  },
  computed: {
    hourETA() {
      return this.hour >= 10 ? this.hour : `0${this.hour}`;
    },
    minuteETA() {
      return this.minute >= 10 ? this.minute : `0${this.minute}`;
    },
    secondETA() {
      return this.second >= 10 ? this.second : `0${this.second}`;
    },
  },
  methods: {
    submit() {},
    showModal() {
      let element = this.$refs.modal.$el;
      $(element).modal("show");
    },
    calculateETA(currentDate) {
      let dateTime = this.dateInput;
      if (dateTime) {
        const destinationDate = new Date(dateTime).setHours(0, 0, 0, 0);
        let diff = destinationDate - currentDate;
        let milliseconds = diff % 1000;
        diff = (diff - milliseconds) / 1000;
        this.second = diff % 60;
        diff = (diff - this.second) / 60;
        this.minute = diff % 60;
        diff = (diff - this.minute) / 60;
        this.hour = diff % 24;
        this.day = (diff - this.hour) / 24;
      }
    },
  },
  created() {
    setInterval(() => {
      this.calculateETA(this.currentDate);
    }, 1000);
  },
};
</script>
<style lang="">
.container {
  max-width: 1920px;
  min-height: 992px;
  bottom: 0;
  width: 100%;
  background-image: url("~@/assets/tet.png");
}
.digit {
  font-size: 50px;
  font-weight: 40;
}
.text {
  font-size: 25px;
  font-weight: 40;
}
</style>