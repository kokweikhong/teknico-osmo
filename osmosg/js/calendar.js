
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    // themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    // initialDate: '2020-09-12',
    weekNumbers: true,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    selectable: true,
    nowIndicator: true,
    dayMaxEvents: true, // allow "more" link when too many events
    // showNonCurrentDates: false,
    contentHeight: 550,
    buttonText: {
      // list: '<i class="fa-solid fa-list"></i>'
    },
    buttonIcons: {
      prev: 'chevron-left',
      next: 'chevron-right',
      // today: 'fa-list'
      // prevYear: 'chevrons-left', // double chevron
      // nextYear: 'chevrons-right' // double chevron
    },
    eventClick: function (info) { // calendar event click function
      alert('Event: ' + info.event.title);
      alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      alert('View: ' + info.view.type);

      // change the border color just for fun
      info.el.style.borderColor = 'red';
    },
    eventSources: [
      {
        events: [
          {
            title: 'All Day Event',
            start: '2022-06-01'
          },
          {
            title: 'Long Event',
            start: '2020-09-07',
            end: '2020-09-10'
          },
          {
            groupId: 999,
            title: 'Repeating Event',
            start: '2022-06-09T16:00:00'
          },
          {
            groupId: 999,
            title: 'Repeating Event',
            start: '2022-06-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2020-09-11',
            end: '2020-09-13'
          },
          {
            title: 'Meeting',
            start: '2020-09-12T10:30:00',
            end: '2020-09-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2020-09-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2020-09-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2020-09-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2020-09-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2020-09-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2020-09-28'
          }
        ],
        color: '#00963e',     // an option!
        textColor: 'yellow' // an option!
      },
    ]
  });
  calendar.render();
});

document.querySelector('.fc-dayGridMonth-button').innerHTML = 'AA'