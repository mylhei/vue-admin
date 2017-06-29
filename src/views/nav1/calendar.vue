<template>
  <full-calendar :events="fcEvents" locale="zh-cn" @dayClick="dayClick" @eventClick="eventClick">
    <template slot="fc-event-card" scope="p">
      <p><i class="fa"></i> {{ p.event.title }}</p>
    </template>
  </full-calendar>
</template>
<script>
  import fullCalendar from '../../components/CustomComs/FullCalendar/fullCalendar.vue';
  var demoEvents = [
    {
      title: 'Sunny Out of Office',
      start: '2017-03-25',
      end: '2017-07-27'
    },
    {
      title: 'event2',
      start: '2016-07-02',
      end: '2017-07-03',
      cssClass: ['family', 'career']
    },
    {
      title: 'iiiek',
      start: '2017-03-27',
      end: '2017-03-28',
      cssClass: ['family', 'career']
    },
    {
      title: 'iiiek',
      start: '2017-03-27',
      end: '2017-03-28',
      cssClass: ['family', 'career']
    },
    {
      title: 'iiiek',
      start: '2017-03-27',
      end: '2017-03-28',
      cssClass: ['family', 'career']
    },
    {
      title: 'iiiek',
      start: '2017-03-27',
      end: '2017-03-28',
      cssClass: ['family', 'career']
    },
    {
      title: 'iiiek',
      start: '2017-03-27',
      end: '2017-03-28',
      cssClass: ['family', 'career']
    }
  ];
  export default {
    data(){
      return {
        fcEvents: demoEvents
      }
    },
    methods: {
      dayClick: function (moment) {
        this.$message({
          showClose: true,
          message: '点击了' + moment.format('ll')
        });
      },
      'eventClick' (event, jsEvent, pos, day) {
        this.$message({
          showClose: true,
          message: '点击了事件' + event.title + " at " + day.format('ll')
        });
        console.log('eventClick', event, jsEvent, pos)
      }
    },
    components: {
      fullCalendar
    }
  }
</script>
