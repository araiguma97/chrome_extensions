var textarea_subject_id = "message_subject";
var textarea_content_id = "message_content";

var date = new Date();
var daily_report_subject_template  = formatDate(date, "yyyy年nn月jj日");
var daily_report_content_template  = "this is daily report content template.";
var weekly_report_subject_template = "～" + formatDate(date, "yyyymmdd");
var weekly_report_content_template = "this is weekly report content template.";

chrome.runtime.onMessage.addListener(function(msg) {
    var button_text = msg.text;
    if (msg.text == "daily") {
        write_daily_report();
    } else if (msg.text == "weekly") {
        write_weekly_report();
    }
});

function write_daily_report() {
    $("#" + textarea_subject_id).val(daily_report_subject_template);
    $("#" + textarea_content_id).val(daily_report_content_template);
    // TODO: focus content textarea
    // $("#" + textarea_content_id).focus();
    // document.getElementById(textarea_content_id).focus();
}

function write_weekly_report() {
    $("#" + textarea_subject_id).val(weekly_report_subject_template);
    $("#" + textarea_content_id).val(weekly_report_content_template);
    // TODO: focus content textarea
    // $("#" + textarea_content_id).focus();
    // document.getElementById(textarea_content_id).focus();
}

function formatDate (date, format) {
    format = format.replace(/yyyy/g, date.getFullYear());
    format = format.replace(/mm/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/nn/g, (date.getMonth() + 1));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/jj/g, date.getDate());
    return format;
};