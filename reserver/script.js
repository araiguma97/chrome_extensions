$("#open").on('click', function() {
    var raw_date    = $('input[name="date"]').val();
    var date        = formatDate(new Date(raw_date), "yyyymmdd");
    var date_msg    = "";
    var enddate_msg = "";
    if (raw_date != "") {
        date_msg = "&date=" + date;
        enddate_msg = "&enddate=" + date;
    }
    
    var id     = $('input[name="id"]').val();
    var id_msg = "";
    if (id != "") {
        id_msg = "&id=" + id;
    }

    var starttime = $('input[name="starttime"]').val();
    var starttime_msg = "";
    if (starttime != "") {
        starttime_msg = "&starttime=" + starttime;
    }

    var endtime   = $('input[name="endtime"]').val();
    var endtime_msg = "";
    if (starttime != "" || endtime != "") {
        endtime_msg = "&endtime=" + endtime; 
    }

    var url_base = "https://trial.desknets.com/cgi-bin/dneo/dneo.cgi?cmd=plantweekgrp#cmd=plantadd";
    var url = url_base + date_msg + enddate_msg + id_msg + starttime_msg + endtime_msg;

    document.location.href = url;
});

function formatDate(date, format) {
    format = format.replace(/yyyy/g, date.getFullYear());
    format = format.replace(/mm/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    return format;
};