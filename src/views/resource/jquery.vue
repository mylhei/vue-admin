<template>
  <div>
    <!--<custom-script src="http://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.3.0/fullcalendar.min.js"></custom-script>-->
  <div id="dosome">123123</div>
  <el-button id="btn_ele">Element Button</el-button>
    <div id='calendar'></div>
  </div>
</template>
<!--<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.3.0/fullcalendar.min.css">-->
<!--<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.3.0/fullcalendar.print.css">-->
<script>

  import  '../../../node_modules/fullcalendar/dist/fullcalendar.js';
//  import $calendar from 'fullcalendar'
  import '../../../node_modules/fullcalendar/dist/fullcalendar.css';

  export default{
    mounted:function(){
//      window.jQuery = $;
      var vm = this;

      jQuery(function(){
          $("#dosome").html('我是来自jquery的方法2');
          $("#dosome").append('<button id="btn_click">点击</button>');
          $("#btn_ele").on('click',(evt)=>{
            vm.$message({
              showClose: true,
              message: 'Element按钮,使用jquery绑定'
            });
          })
          $("#btn_click").on('click',(event)=>{
//            alert("刚刚发生了点击");
          // jquery 和 element混用
          vm.$message({
            showClose: true,
            message: '原生按钮,使用jquery绑定,使用UI弹框'
          });
          })


        $('#calendar').fullCalendar({
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          defaultDate: '2017-03-12',
          navLinks: true, // can click day/week names to navigate views
          selectable: true,
          selectHelper: true,
          select: function(start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
              eventData = {
                title: title,
                start: start,
                end: end
              };
              $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
          },
          editable: true,
          eventLimit: true, // allow "more" link when too many events
          events: [
            {
              title: 'All Day Event',
              start: '2017-03-01'
            },
            {
              title: 'Long Event',
              start: '2017-03-07',
              end: '2017-03-10'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: '2017-03-09T16:00:00'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: '2017-03-16T16:00:00'
            },
            {
              title: 'Conference',
              start: '2017-03-11',
              end: '2017-03-13'
            },
            {
              title: 'Meeting',
              start: '2017-03-12T10:30:00',
              end: '2017-03-12T12:30:00'
            },
            {
              title: 'Lunch',
              start: '2017-03-12T12:00:00'
            },
            {
              title: 'Meeting',
              start: '2017-03-12T14:30:00'
            },
            {
              title: 'Happy Hour',
              start: '2017-03-12T17:30:00'
            },
            {
              title: 'Dinner',
              start: '2017-03-12T20:00:00'
            },
            {
              title: 'Birthday Party',
              start: '2017-03-13T07:00:00'
            },
            {
              title: 'Click for Google',
              url: 'http://google.com/',
              start: '2017-03-28'
            }
          ]
        });

      })
    }

  }

</script>
