function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var diff = endDate.getTime() - beginDate.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
   }